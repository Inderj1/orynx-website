# Orynx Website Deployment — Post-Mortem (2026-05-21)

## Outcome

The new Next.js redesign of the Orynx website is **live in production** on `orynx.ai`, `www.orynx.ai`, and `www.orynx.co.uk`. No DNS cutover was needed. Total wall-clock time to ship the redesign: ~3 hours, including a ~2-hour detour caused by misdiagnosis (covered below).

## Final architecture

- **Single Amplify app** `Orynx-Nuxt` (App ID `d115aqu01rskeh`) in `consultez-admin` (account `135598215098`), us-east-1.
- Connected to `github.com/Orynx-uk/Orynx-website`, branch `main`, current commit `0763f39`.
- Builds via root `amplify.yml` (pnpm 10.7.0 + `next build` + static export to `out/`).
- Platform: `WEB` (static hosting).
- Custom domains: `orynx.ai`, `www.orynx.ai`, `www.orynx.co.uk` — all bound and verified, served via Amplify-managed CloudFront with auto-renewed ACM certs.

DNS unchanged. R53 zones (`orynx.ai` in `cloudmantra-admin`, `orynx.co.uk` in `consultez-admin`) continue to point at the same Amplify CF distributions they already pointed at — they just now serve the new Next.js build instead of failed deploys / stale Nuxt builds.

## Root cause of the day's problems

A **stale Amplify build configuration** combined with a **fragmented mental model** of the deployment topology.

The Amplify app `Orynx-Nuxt` had been serving production for months as a Nuxt site. When commit `0763f39` ("Replace Nuxt site with Next.js redesign") was pushed, Amplify auto-triggered a build — which **succeeded at the build step** but failed at the deploy step with:

```
CustomerError: It looks like you are attempting to deploy a Next.js SSR app, but your app's framework looks wrong. Please update your app's framework to 'Next.js - SSR' to ensure that your app is deployed correctly.
```

The cause: the Amplify app's `Platform` setting was `WEB_COMPUTE` (Nuxt-era, expecting server-rendered output). Our new Next.js config has `output: 'export'` and emits static files to `out/`, which `WEB_COMPUTE` doesn't know how to deploy.

**The actual fix was a one-line CLI call**:

```
aws amplify update-app --app-id d115aqu01rskeh --platform WEB --profile consultez-admin
```

Followed by a rebuild. Total fix time once diagnosed: ~3 minutes.

## Why it took 2 hours longer than that

Three compounding misdiagnoses:

### 1. Looked in the wrong account first

`consultez-admin` (where the production app lives) wasn't an obvious first place to look because the local repo's GitHub remote is `Orynx-uk/Orynx-website` and our default AWS profile is `cloudmantra-admin`. The team's convention has been to treat `cloudmantra-admin` as the production account, so I assumed the failing Amplify app was there. It wasn't.

When `consultez-admin` came up in the analysis, I correctly identified that it owned the R53 zone for `.co.uk` but underweighted the possibility that it also owned the `orynx.ai` Amplify app — because we'd already located an Amplify app named `Orynx-website` in `cloudmantra-admin` and assumed *that* was the relevant one.

### 2. Confused two separate Amplify apps

Both accounts have/had Amplify apps with "orynx" in the name:

| Account | App ID | Name | Repo | Status |
|---|---|---|---|---|
| `cloudmantra-admin` (709141244278) | `d3t4ba6v739qvp` | `orynx-website` | `Inderj1/orynx-website` | Active build, lowercase name |
| `cloudmantra-admin` (709141244278) | `d1sg22ctz7i899` | `Orynx-website` | `Orynx-uk/Orynx-website` | **Created today during this work**, capital O |
| `consultez-admin` (135598215098) | `d115aqu01rskeh` | `Orynx-Nuxt` | `Orynx-uk/Orynx-website` | **Actual production**, owns `orynx.ai` + `www.orynx.co.uk` |

We thought the production-serving Amplify app was `Inderj1/orynx-website` (per a previous session's notes), then later thought it was a *new* app we needed to create in `cloudmantra-admin`. Neither was correct — the real production app was the third one, in `consultez-admin`, already connected to `Orynx-uk/Orynx-website` and just failing its build.

### 3. Chased a phantom cross-account block

Once a new `Orynx-website` Amplify app was created in `cloudmantra-admin` and we tried to attach `orynx.ai` to it, AWS returned `BadRequestException: One or more domains requested are already associated with another Amplify app` and CloudFront returned `CNAMEAlreadyExists` listing account `*171576` as the holder.

The `*171576` account is **AWS's internal Amplify Hosting management account** — every Amplify-managed CloudFront distribution shows up as owned by an AWS-internal account from the customer-facing perspective. We interpreted it as a "mystery third-party account holding our domain," which led to:

- ~30 minutes investigating which of our accounts might end in `171576` (none do).
- ~45 minutes building an alternative S3 + CloudFront + OAC + ACM-cert + URL-rewrite-function deployment in `cloudmantra-admin` to bypass the perceived block.
- ~15 minutes attempting `aws cloudfront associate-alias` cross-account DNS migration with TXT-record proof, which failed because the entire premise (foreign-account ownership) was wrong.

When `consultez-admin` was finally inspected, the truth was visible in 30 seconds: app `d115aqu01rskeh`'s domain associations included `orynx.ai` (apex + www, verified) and `www.orynx.co.uk`, and its last build had failed yesterday on the redesign commit.

## What was thrown away (cleanup)

Resources created in `cloudmantra-admin` during the wrong-path exploration — all deleted at end of session:

- Amplify app `d1sg22ctz7i899` (Orynx-website, capital O) — duplicate
- Amplify domain association `preview.orynx.ai` on the above
- S3 bucket `orynx-website-prod-709141244278` — manual hosting attempt
- CloudFront distribution `E2WZK0P7X2HB3X` (`d1n0yaf72lai5s.cloudfront.net`) — manual hosting attempt
- CloudFront Origin Access Control `E2JV2HQFNK25O7`
- CloudFront Function `orynx-website-rewrite`
- ACM cert `7fbceb56-...` for `orynx.ai` + `www.orynx.ai`
- R53 records: 2× `_dnsauth.*` TXT records (failed cross-account alias attempts), 1× `_a2b98358...` CNAME (validation for the unused cert)

## Other side effects (small, real)

- Deleted Amplify domain associations on apps `orynx-bibliocraft` (`d32uc89i3zykkr`) and `orynx-ai-ver` (`d89f41urd73ro`) in `cloudmantra-admin`. Those were thought to be blocking us; they weren't. The R53 records they relied on (e.g., `bibliocraft.orynx.ai`) are still in place — so `bibliocraft.orynx.ai` is still resolvable today via its own CloudFront. **However**: Amplify is no longer tracking those certs for auto-renewal. When the underlying ACM cert expires (~12 months), `bibliocraft.orynx.ai` will start serving cert errors unless its Amplify domain association is re-created before then.
  - **Action item**: when bibliocraft is brought back, re-associate the domain on its Amplify app (or migrate to a different cert lifecycle).
- 2× FAILED ACM certs for `orynx.ai` (orphans from prior failed Amplify attempts) were deleted as cleanup — no functional impact.

## Lessons

1. **Look in every AWS account, not just the obvious one.** When something deploys to `Foo-uk/repo` on GitHub, the matching AWS account isn't necessarily named `Foo`. The Amplify app could be in any account the team has touched. Run `aws amplify list-apps` across all profiles before assuming.
2. **`*XXXXXX` account masks from `list-conflicting-aliases` are usually AWS-internal accounts**, especially when the conflicting resource is an Amplify- or CloudFront-managed alias. Don't immediately treat them as third-party. Cross-check with `aws amplify list-domain-associations` across your own accounts first.
3. **`WEB_COMPUTE` vs `WEB` is a one-line setting that silently sinks Next.js static exports.** When migrating any Amplify app from SSR (Nuxt SSR, Next.js SSR, Remix, etc.) to static export, change platform alongside the code change. Symptom: build succeeds, deploy fails with `required-server-files.json` not found, or `Please update your app's framework to 'Next.js - SSR'`.
4. **Don't build a new deployment stack when an existing one is just broken.** The instinct to "go around the problem" with S3 + CloudFront + ACM + OAC + CF-Function cost ~45 minutes of setup and ~10 minutes of cleanup. The real problem was a 30-second platform-setting change.
5. **Two GitHub repos with the same `package.json` name and divergent histories are a fragility trap.** `Inderj1/orynx-website` and `Orynx-uk/Orynx-website` both exist; both were called `my-project`; they diverged. Future cleanup should pick one as canonical and archive the other.

## What's the team should know

- **Production deploys go through `consultez-admin` Amplify app `Orynx-Nuxt`** (App ID `d115aqu01rskeh`). Push to `Orynx-uk/Orynx-website` main → auto-build.
- The app is misleadingly named "Orynx-Nuxt" but is now serving a Next.js site. Worth renaming (cosmetic, low priority).
- Old Amplify apps `orynx-website` (`d3t4ba6v739qvp`, lowercase) in `cloudmantra-admin` and `Inderj1/orynx-website` GitHub repo are **not the production source of truth**. They are stale and should be archived or deleted to prevent future confusion.
- For `.co.uk`: the same Amplify app serves `www.orynx.co.uk`. Apex (`orynx.co.uk` without `www`) is not in the app's domain associations — if we want it, it can be added (~5 min).
