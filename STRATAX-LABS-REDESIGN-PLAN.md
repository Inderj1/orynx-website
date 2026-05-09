# Stratax Labs — Site Redesign & Rebrand Plan

> **Working name:** Stratax Labs (formerly Atvantiq Solutions, acquired and rebranded by StrataxAI). The website is being rebuilt to reflect the new umbrella brand, follow the visual system of [sfailabs.com](https://www.sfailabs.com/), and borrow content patterns from [thesunflowerlab.com](https://thesunflowerlab.com/) where they fit.

---

## 1. Decisions locked in

| Decision | Choice |
|---|---|
| Brand structure | Stratax Labs is the new **umbrella brand**. "StrataxAI" string is replaced sitewide. |
| Acquisition copy | **Light marketing mention.** One-liner in About + footer ("formerly Atvantiq Solutions"). Short press-style note on About page. No legal page, no regulator language. |
| Mockups before plan | User chose yes; tool blocked on OpenAI auth. Plan written first; mockups deferred to after `~/.gstack/openai.json` is set up. |
| Product lineup | **Keep all three** — STRATAX AI Enterprise, LEDGERLY PRO, LEDGERLY FIELD — restyled in the new theme. Routes unchanged. |
| Theme reference | sfailabs.com — fonts, palette, structure, motion. |
| Content reference | thesunflowerlab.com — for value-prop language and section ideas only. |

---

## 2. Visual system (the spec implementers build to)

### 2.1 Typography — exactly four families

| Role | Family | Weights | Usage |
|---|---|---|---|
| Display headline | **Urbanist** | 600, 700 | Hero H1 (88–110px), section H2s (52–64px) |
| Body / UI | **DM Sans** | 400, 500, 600 | Sub-headlines, paragraphs, navigation, buttons |
| Editorial accent | **Hedvig Letters Serif** | 400 italic | One italic word inside headlines (the "ship" word). Pull-quotes. |
| Technical label | **Fragment Mono** | 400 | UPPERCASE eyebrows, stat unit labels, code badges, footer fine print |

**Wiring** (`app/layout.tsx`):
```ts
import { DM_Sans, Urbanist, Fragment_Mono } from 'next/font/google'
// Hedvig Letters Serif loaded via @import in globals.css (Google Fonts CSS)
```
- `--font-sans` = DM Sans (body default)
- `--font-display` = Urbanist (h1, h2)
- `--font-mono` = Fragment Mono (eyebrows, mono labels)
- `--font-serif` = Hedvig Letters Serif (italic accent)

Drop the existing Space Grotesk / JetBrains Mono / Space Mono trio entirely.

### 2.2 Color palette (Tailwind tokens)

| Token | Hex | HSL | Usage |
|---|---|---|---|
| `--background` | `#fdfeff` | `210 100% 99%` | Page background — warm white |
| `--ink` | `#001b3a` | `216 100% 12%` | Primary text, logo wordmark, headline base |
| `--ink-soft` | `#4a5568` | `218 17% 35%` | Sub-headlines, body |
| `--ink-muted` | `#7a8599` | `217 13% 54%` | Captions, fine print |
| `--brand-blue` | `#0035c0` | `220 100% 38%` | Editorial accent — italic words, link underlines |
| `--brand-blue-bright` | `#0099ff` | `204 100% 50%` | Hover, focus ring |
| `--accent-orange` | `#f7621e` | `17 93% 54%` | **Primary CTA fill, dot indicators, key underlines** (the single warm pop) |
| `--accent-orange-deep` | `#c64511` | `15 84% 42%` | CTA hover |
| `--surface` | `#f9f9f9` | `0 0% 98%` | Section alt backgrounds |
| `--rule` | `#e9e9e9` | `0 0% 91%` | 1px dividers |
| `--ink-on-brand` | `#fdfeff` | — | Text on `--brand-blue` or `--accent-orange` |

**Drop:** `--teal`, `--coral`, `--gold`, `--bento-shadow`. Drop the dark-mode variant entirely for now (sfailabs is light-only). Add dark mode as a follow-up if needed.

### 2.3 Spacing, radius, motion

- **Container width:** `max-w-[1280px]`, gutters `px-8 lg:px-12`. No edge-pinned content; everything sits in a defined column.
- **Vertical rhythm:** sections use `py-32 lg:py-40` (huge whitespace; sfailabs energy). Inner blocks use `space-y-8`.
- **Border radius:** `--radius: 4px`. CTA pills are `rounded-full`. Cards are `rounded-md` (4px). No bubbly large radii on every element.
- **Shadows:** none, or `shadow-[0_1px_0_0_#e9e9e9]` for ultra-subtle bottom-rule effect. Drop the `--bento-shadow`.
- **Motion:** entrance fade + 8px upward slide, 600ms `ease-out`, `IntersectionObserver`-triggered. No floating blobs, no continuous decorative animation. Marquee scroll allowed only for logo strip.

### 2.4 Composition principles

- **First viewport reads as one composition** — magazine-cover energy, not dashboard.
- Headlines are **left-aligned**, never centered. Centered hero copy is a banned pattern.
- **No card grids** in the hero. Cards only when the card IS the interaction (a click target with state).
- **One accent color per surface.** Either orange or blue, never both shouting.
- **Whitespace is the design.** If a section feels empty, the answer is better content, not decoration.

---

## 3. Information architecture

### 3.1 Top-level navigation (replaces current 4-item nav)

| Slot | Label | Route | Notes |
|---|---|---|---|
| 1 | Services | `/services` | **NEW.** Strategy / Build / Deploy framework page (sfailabs's spine). |
| 2 | Products | `/products` | Existing. Dropdown to 3 products. |
| 3 | Solutions | `/solutions` | Existing. Industries. |
| 4 | Case Studies | `/case-studies` | **NEW.** Content reuse hook from sfailabs's "10 projects" section. |
| 5 | About | `/about` | **NEW.** Acquisition story, team, "labs" positioning. |
| 6 | Insights | `/insights` | **NEW.** Blog index (placeholder if no posts yet). |
| — | CTA | "Speak with our team →" | Single primary CTA pill in the navbar. Replaces "Get a Demo". |

The existing routes `/agents` (Agents SDK) and `/how-it-works` (Technology) move under `/services` as anchored sections, OR get redirected to `/services#agents` / `/services#technology`. Routes don't 404.

### 3.2 Footer reorganization

Three columns + a fine-print row:

| Column | Items |
|---|---|
| **Stratax Labs** | About, Services, Case Studies, Insights, Contact |
| **Products** | STRATAX AI Enterprise, LEDGERLY PRO, LEDGERLY FIELD |
| **Solutions** | Supply Chain, Finance, Manufacturing, Retail, Healthcare |

Fine-print row: `© 2026 Stratax Labs. Stratax Labs is the AI labs of StrataxAI, formed from the acquisition of Atvantiq Solutions (2026).` + privacy / terms links. Set in Fragment Mono UPPERCASE at 11px, color `--ink-muted`.

---

## 4. Page-by-page plan

### 4.1 `/` — Homepage

Section order matches sfailabs.com's spine:

1. **Navbar** (sticky, no morph). White background, 1px bottom rule on scroll, no backdrop blur.
2. **Hero** (`~720px tall`):
   - Eyebrow (Fragment Mono UPPERCASE 11px, `--ink-muted`): `STRATAX LABS · FORMERLY ATVANTIQ SOLUTIONS`
   - H1 (Urbanist 600, ~96px desktop / 56px mobile, `--ink`): `Enterprise AI for companies that <em>ship</em>.`
     The word **ship** is in `Hedvig Letters Serif italic`, color `--brand-blue`.
   - Sub (DM Sans 400, 20px, max 60ch, `--ink-soft`): `We design, build, and deploy AI that creates real business value. From strategy through closed-loop write-back, with measurable impact across SAP, Salesforce, and Oracle.`
   - CTAs: primary pill `Speak with our team →` (orange filled, white text), secondary ghost `See our work` (navy text + underline animation on hover).
   - Visual anchor (right column on desktop, below on mobile): a restrained block of 3 stats in Urbanist 600 with Fragment Mono labels — `40 ERP CONNECTORS / 99.5% ACCURACY / 4 GRAPH NETWORKS`. Pulled from existing hero terminal. **No 3D blobs. No floating cards.**
3. **Trust strip:** eyebrow `TRUSTED BY TEAMS AT` + marquee of 6–8 logos at 40% opacity. Reuse `/public/logos/` content.
4. **Delivery framework — 3 columns** (sfailabs's signature):
   - H2 (Urbanist 600, 56px, left-aligned): `Our proven AI delivery framework.`
   - Three columns: **Strategy** / **Build** / **Deploy**. Each: H3 (Urbanist 600, 28px), one short paragraph, one Fragment Mono UPPERCASE bullet list (3 items), an outline arrow link `Learn more →`.
   - **Why this works:** matches sfailabs structure exactly; positions Stratax Labs as a labs-with-products, not just SaaS.
5. **Impact metrics:** four large stats in Urbanist 600 (~80px), Fragment Mono UPPERCASE labels below. Examples: `40+ ENTERPRISE INTEGRATIONS` / `$X SAVED IN AR CYCLE TIME` / `99.5% AGENT ACCURACY` / `10 ACTIVE AGENTS`. Pull real numbers from current `/components/stats/`.
6. **Case studies — 3 cards:** image left, title + outcome metric + 2-line summary right. Borrow visual pattern from sunflowerlab's portfolio cards but in our type system. Empty state if no case studies yet: `Our case study library is in the works. Talk to us about your problem and we'll share the closest analog.`
7. **Testimonials (3 quotes):** quote in Hedvig Letters Serif italic 28px, attribution in DM Sans 14px UPPERCASE. Replace the existing marquee with a static 3-up grid (or a manual carousel). Reuse current testimonial copy.
8. **Services overview (6-tile grid):** brief landing for each service category — `Agents SDK / Data Bridge / CAMP Framework / Closed-Loop Write-Back / Industry Solutions / Support & Training`. Each tile: H3, 1 sentence, arrow link. Tiles are NOT cards — they're delineated by 1px rules, not boxes.
9. **Comparison table:** "In-house build vs. Stratax Labs partnership." Two columns, 8 rows, ✓/✗ and short clauses. Pulled directly from sfailabs's structure. Use existing `components/comparison/` as the starting point.
10. **Insights / blog teaser (3 posts):** if posts don't exist yet, show 3 placeholder cards with a `Coming soon` Fragment Mono badge. Date in Fragment Mono.
11. **Final CTA section:** dark navy background (`--ink`), centered H2 in Urbanist 600 white, sub in DM Sans, single orange pill button. Copy: `Ready to ship enterprise AI? / Tell us about your problem. We'll share the path from strategy to deployment in a 30-minute call.` / `Speak with our team →`
12. **Footer** (see §3.2).

### 4.2 `/services` (NEW)

- Hero: `From strategy to production. The full lifecycle of enterprise AI.`
- Three deep dives: **Strategy** (positioning, opportunity sizing, AI roadmap), **Build** (agent architecture, data bridge, CAMP framework), **Deploy** (closed-loop write-back, monitoring, hand-off). Each is a long-form section with a numbered process (1→2→3→4 steps), a code/diagram inline, a stat block, a customer quote.
- Footnote: links to `/agents`, `/how-it-works` for technical deep-dives. Consider absorbing those routes here in a phase 2.

### 4.3 `/products`, `/products/stratax-ai`, `/products/ledgerly-ai`, `/products/ledgerly-field`

Routes unchanged. Restyle each in the new system:
- Hero matches homepage hero pattern: eyebrow + Urbanist H1 with one italic accent + DM Sans sub + 2 CTAs.
- Replace teal/coral/gold accents with **brand-blue + accent-orange**. Each product page can pick a single accent flavor (e.g., Stratax AI Enterprise = blue dominant; Ledgerly Pro = orange dominant; Ledgerly Field = blue with orange callouts) so they feel related but distinct.
- Drop the bento grid as primary layout; replace with full-bleed sections separated by 1px rules.

### 4.4 `/solutions`

Existing 5 industries (Supply Chain, Finance, Manufacturing, Retail, Healthcare) survive. Switch from bento grid to a long-form list: each industry gets a banner-strip section with industry icon (single-color line icon, never icon-in-colored-circle), H2, problem statement, one outcome metric, link to a dedicated future industry page.

### 4.5 `/case-studies` (NEW)

Index page: 6–10 cards. Each card opens a future `/case-studies/[slug]` page (out of scope for this PR — placeholder routes OK). For now: one teaser card with `Get the case study →` linking to the contact form.

### 4.6 `/about` (NEW) — the acquisition page

Sections:
1. **Hero**: `Stratax Labs is the AI labs of StrataxAI.`
2. **Origin (acquisition mention)**: 2 short paragraphs.
   > In 2026, StrataxAI completed the acquisition of Atvantiq Solutions, a specialist enterprise AI services firm. Atvantiq was renamed Stratax Labs and now operates as the labs and services arm of StrataxAI — the team that designs, builds, and deploys our agents, integrations, and industry solutions for enterprise customers.
   >
   > Our products — STRATAX AI Enterprise, LEDGERLY PRO, and LEDGERLY FIELD — are built and shipped by Stratax Labs.
3. **What we do**: 3-tile services restate.
4. **Team**: optional placeholder grid with `We're hiring →` CTA.
5. **Values / how we work**: 4 short principles, each a short paragraph. Pull from existing copy.
6. **Final CTA strip.**

### 4.7 `/insights`

Blog index. Placeholder if no posts. Three card slots showing `Coming soon` until content exists.

### 4.8 `/pricing`

Routes and structure preserved. Three tiers restyled. Drop the gold-colored "highlighted" treatment in favor of a single blue rule on the recommended tier.

---

## 5. Component-level changes (file map)

### 5.1 Replace wholesale

| File | Action |
|---|---|
| `components/navbar/navbar.tsx` | **Rewrite.** Drop scroll-pill morph, framer-motion entrance. Replace with a clean static navbar: logo wordmark left, nav links right (Services / Products dropdown / Solutions / Case Studies / About / Insights), single orange "Speak with our team →" pill. 1px rule on scroll. Keep mobile menu but simplify. |
| `components/hero/hero-section.tsx` | **Rewrite.** Remove typewriter animation. Replace with eyebrow + Urbanist H1 (italic-accented) + DM Sans sub + 2 CTAs + 3-stat anchor block. Drop `isometric-scene.tsx` if it's a 3D blob. |
| `components/footer/footer.tsx` | **Rewrite.** Three-column footer per §3.2 + acquisition fine-print line. |
| `app/globals.css` | **Rewrite.** New CSS variables per §2.2. Drop teal/coral/gold/bento-shadow. Add Hedvig Letters Serif `@import`. Drop dark-mode block (or move to `[data-theme="dark"]` for future). |
| `tailwind.config.ts` | Rewire color tokens (`brand-blue`, `accent-orange`, `ink`, `ink-soft`, `surface`, `rule`). Add `fontFamily.display` (Urbanist), `fontFamily.serif` (Hedvig). |
| `app/layout.tsx` | Replace font imports: drop Space Grotesk/JetBrains Mono/Space Mono → DM Sans + Urbanist + Fragment Mono. Update `metadata.title` and `metadata.description` to lead with "Stratax Labs". |
| `app/page.tsx` | Reorder sections per §4.1. Insert new `delivery-framework` and `comparison-table` blocks. Drop the `agents-section` if it duplicates services. |

### 5.2 Restyle in place (no structural rewrite)

| File | Action |
|---|---|
| `components/features/*` | Recolor to new tokens. Drop teal/coral/gold mentions. |
| `components/stats/*` | Restyle numbers in Urbanist 600 + Fragment Mono labels. |
| `components/testimonials/*` | Switch from marquee to static 3-up grid. Quote in Hedvig italic. |
| `components/logo-cloud/*` | Reduce to a single quiet marquee at 40% opacity. |
| `components/pricing/*` | Recolor; drop gold "recommended" highlight in favor of a simple rule. |
| `components/comparison/*` | Already exists — restyle to match the new table treatment (1px rules, no card backgrounds). |
| `components/cta/*` | Single dark navy strip with white headline + orange pill button. |
| `components/faq/*` | Restyle accordion: thin 1px dividers, no card backgrounds, Urbanist questions, DM Sans answers. |
| `components/how-it-works/*` | Restyle and decide whether to keep the route or absorb into `/services`. |

### 5.3 New files to create

| Path | Purpose |
|---|---|
| `components/services/delivery-framework.tsx` | The 3-column Strategy / Build / Deploy block (sfailabs's signature). |
| `components/case-studies/case-study-card.tsx` + `case-study-grid.tsx` | New section type for homepage + index page. |
| `components/about/origin-section.tsx` | The acquisition story block (reusable on About + footer fine-print expanded). |
| `app/services/page.tsx` | New page. |
| `app/case-studies/page.tsx` | New page (index, no detail pages yet). |
| `app/about/page.tsx` | New page. |
| `app/insights/page.tsx` | New page (placeholder). |

### 5.4 Logo asset

`/public/stratax.png` is a 206KB PNG. Replace with two new SVG wordmarks (one navy, one white):

- `/public/stratax-labs-wordmark.svg` (navy `--ink`, used on light backgrounds)
- `/public/stratax-labs-wordmark-white.svg` (used in dark CTA strip + footer)

Wordmark = "STRATAX LABS" in Urbanist 700, letter-spacing -0.02em, the word "LABS" in Fragment Mono UPPERCASE at 70% size to give it a subtle technical signature. Until SVGs exist, render the wordmark as styled text directly:

```tsx
<a href="/" className="font-display font-bold text-ink tracking-tight text-xl">
  STRATAX <span className="font-mono text-base align-middle ml-0.5">LABS</span>
</a>
```

This avoids any image asset for v1.

---

## 6. Brand surface — sweep checklist

### 6.1 String replacements (sitewide find/replace)

| Old | New | Notes |
|---|---|---|
| `StrataxAI` | `Stratax Labs` | Most occurrences. |
| `Stratax AI` | `Stratax Labs` | Standalone. |
| `STRATAX AI` (logo wordmark) | `STRATAX LABS` | Wordmark spelling. |
| `stratax.png` | `stratax-labs-wordmark.svg` (or styled text component) | After v1 |
| `The AI Operating System for Enterprise` (current tagline) | `Enterprise AI for companies that ship.` | Hero + metadata |
| `v0.app` (in `metadata.generator`) | Remove | Don't expose authoring tool. |

**Exception — keep StrataxAI when:**
- Inside the **About page acquisition paragraph** ("StrataxAI completed the acquisition...").
- Inside the **footer fine-print** ("Stratax Labs is the AI labs of StrataxAI...").
- Inside **product names**: STRATAX AI Enterprise stays as a product name (it's a product brand, not the company name). Also LEDGERLY PRO and LEDGERLY FIELD are unchanged.

### 6.2 Atvantiq mention sweep

Currently zero mentions. Add to:
- About page origin section (full paragraph).
- Footer fine-print (one-liner: `formerly Atvantiq Solutions`).
- Hero eyebrow on homepage (`STRATAX LABS · FORMERLY ATVANTIQ SOLUTIONS` — only for first 6 months post-launch, then drop).
- Page metadata `description` for `/about`.

### 6.3 Metadata updates (`app/layout.tsx`)

```ts
metadata: {
  title: 'Stratax Labs | Enterprise AI for companies that ship',
  description: 'Stratax Labs designs, builds, and deploys enterprise AI. From strategy through closed-loop write-back, with measurable impact across SAP, Salesforce, and Oracle.',
  keywords: ['Stratax Labs', 'enterprise AI', 'AI agents', 'closed-loop write-back', 'CAMP framework', 'Atvantiq Solutions', 'StrataxAI'],
  openGraph: { /* match */ },
  twitter: { /* match */ },
}
```

Also: `app/icon.svg` favicon should be re-rendered as a Stratax Labs glyph (an "S" in Urbanist 700, navy on warm-white, or a single geometric mark).

---

## 7. Compliance copy block (light-tier)

This is the verbatim acquisition copy approved for the site. Reuse from a single constant.

**`lib/brand-copy.ts`:**
```ts
export const ACQUISITION_NOTICE_SHORT =
  'Stratax Labs (formerly Atvantiq Solutions) is the AI labs of StrataxAI.'

export const ACQUISITION_NOTICE_FOOTER =
  '© 2026 Stratax Labs. Stratax Labs is the AI labs of StrataxAI, formed from the acquisition of Atvantiq Solutions in 2026.'

export const ACQUISITION_STORY_LONG = `In 2026, StrataxAI completed the acquisition of Atvantiq Solutions, a specialist enterprise AI services firm. Atvantiq was renamed Stratax Labs and now operates as the labs and services arm of StrataxAI — the team that designs, builds, and deploys our agents, integrations, and industry solutions for enterprise customers.

Our products — STRATAX AI Enterprise, LEDGERLY PRO, and LEDGERLY FIELD — are built and shipped by Stratax Labs.`
```

> ⚠️ **Confirm before publishing:** the acquisition close date / year. The copy assumes 2026 — verify the actual effective date with whoever has the deal docs. If different, update the constant in one place.

---

## 8. Implementation phases

Phase order minimizes broken-state windows. Each phase is shippable on its own.

### Phase 0 — Environment fix (blocker, ~10 min)
1. Kill stuck `npm install` and suspended dev servers (`pkill -f "next dev"; pkill -f "npm install"`).
2. `rm -rf node_modules package-lock.json`
3. `pnpm install` (matches `pnpm-lock.yaml`).
4. `pnpm dev` → confirm http://localhost:3000 renders the existing site.

### Phase 1 — Theme rewire (1 PR, ~2 hours)
1. `app/layout.tsx`: swap fonts to DM Sans + Urbanist + Fragment Mono. Add Hedvig Letters Serif via Google Fonts CSS import.
2. `app/globals.css`: rewrite CSS variables per §2.2. Drop dark-mode block (move to a future PR).
3. `tailwind.config.ts`: add new color tokens, drop teal/coral/gold.
4. Update `lib/brand-copy.ts` constants.
5. Replace `<title>` and metadata.

**Acceptance:** existing pages render in the new fonts and palette without structural changes. Visual regression expected; that's intentional.

### Phase 2 — Navbar + Footer + Logo (1 PR, ~3 hours)
1. Rewrite `components/navbar/navbar.tsx` per §5.1.
2. Rewrite `components/footer/footer.tsx` per §3.2.
3. Replace logo image with styled text wordmark component (defer SVG creation).
4. Run sitewide find/replace per §6.1.

**Acceptance:** every page has the new chrome. Scroll behavior is calm. No 3D blobs in chrome.

### Phase 3 — Homepage (1 PR, ~6 hours)
1. Rewrite `components/hero/hero-section.tsx`.
2. Create `components/services/delivery-framework.tsx`.
3. Create `components/case-studies/case-study-card.tsx` + `case-study-grid.tsx`.
4. Reorder sections in `app/page.tsx` per §4.1.
5. Restyle existing testimonials, logo-cloud, comparison, cta, faq components per §5.2.

**Acceptance:** homepage matches the section spine in §4.1. Lighthouse ≥ 90 on mobile.

### Phase 4 — New routes (1 PR, ~6 hours)
1. `app/about/page.tsx` with origin section.
2. `app/services/page.tsx` with three deep dives.
3. `app/case-studies/page.tsx` (index, placeholder copy).
4. `app/insights/page.tsx` (placeholder).
5. Add redirects from `/agents` → `/services#agents`, `/how-it-works` → `/services#technology` (or keep them and link from services).

### Phase 5 — Product page restyle (1 PR, ~4 hours)
- Restyle `/products`, `/products/stratax-ai`, `/products/ledgerly-ai`, `/products/ledgerly-field` per §4.3.

### Phase 6 — Solutions + Pricing restyle (1 PR, ~3 hours)
- Restyle `/solutions` per §4.4.
- Restyle `/pricing` per §4.8.

### Phase 7 — Polish, accessibility, performance (1 PR, ~3 hours)
- Lighthouse audit each route.
- Keyboard nav check (tab order, focus rings using `--brand-blue-bright`).
- Color contrast: verify `--ink-soft` on `--background` ≥ 4.5:1 (WCAG AA body).
- 44px minimum touch targets on mobile.
- 404 + error pages restyled.
- Replace Atvantiq eyebrow with normal eyebrow on homepage hero (sunset the acquisition mention from the hero after 6 months — leave it on About + footer permanently).

---

## 9. Open questions to confirm before Phase 1

1. **Acquisition effective date** — copy assumes 2026. Confirm.
2. **Stratax Labs formal legal name** — is the new entity legally "Stratax Labs Inc." / "Stratax Labs LLC" / no separate entity? Affects the footer fine-print exact wording.
3. **Logo wordmark** — OK to ship v1 as styled text (`STRATAX LABS` rendered in Urbanist), then do a designed SVG mark in Phase 7? Or is there an existing brand asset for Stratax Labs?
4. **Domain / canonical URL** — does Stratax Labs get a new domain (`strataxlabs.com`?) or stay on the current domain? Affects canonical tags + OG URLs.
5. **Case studies** — are there real case studies to publish in Phase 3, or is the index a placeholder until content is written?
6. **Insights blog** — same question. Placeholder OK, or hold the route until at least 3 posts exist?
7. **Mockups** — set up `~/.gstack/openai.json` and re-run the design tool to produce 3 hero variants before locking down the visual? Or proceed straight to code?

---

## 10. Out of scope (deferred)

- Dark mode. Light-only for v1; dark mode comes back as a follow-up.
- 3D / isometric hero illustration (`isometric-scene.tsx` is being dropped).
- Localization / i18n.
- Deeper acquisition disclosure (full press page, regulatory language) — explicitly chose light-tier.
- Per-industry detail pages under `/solutions/[industry]`.
- Per-case-study detail pages under `/case-studies/[slug]`.
- Author/team profile pages.
- Search.
- Live chat / support widget.

---

## 11. Risk register

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| `node_modules` corruption (current state) blocks every phase | Certain (already broken) | High | Phase 0 fixes before anything else. |
| Brand string find/replace catches a product name that should stay | Medium | Medium | Phase 1 uses `lib/brand-copy.ts` constants, not raw strings, in new code. Old code is reviewed manually before each PR lands. |
| Hedvig Letters Serif loads slowly and the italic word in the hero shows in fallback for 200ms | Medium | Low | Use `font-display: swap` and reserve only for the hero italic. Body never needs it. |
| Acquisition copy gets reviewed by legal and needs to be tightened | Medium | Medium | All acquisition copy lives in one file (`lib/brand-copy.ts`). Edit once, propagates. |
| `/agents` and `/how-it-works` already get organic traffic; redirecting breaks links | Low-Medium | Medium | Keep both routes alive in Phase 4; just cross-link to `/services`. Decide on full deprecation in a later phase after analytics review. |

---

## 12. Definition of done

- [ ] Every page in the navbar renders in the new visual system.
- [ ] Sitewide search finds zero `StrataxAI` strings outside the three approved exceptions (§6.1).
- [ ] Acquisition mention appears on About page + footer; uses constants from `lib/brand-copy.ts`.
- [ ] `app/page.tsx` matches §4.1 section order.
- [ ] Lighthouse mobile ≥ 90 on `/`, `/about`, `/products`.
- [ ] Tab key reaches every interactive element in a sensible order with a visible orange focus ring.
- [ ] No emoji, no purple gradients, no icon-in-colored-circle, no centered hero text, no decorative blobs.
- [ ] Footer fine-print mentions "formerly Atvantiq Solutions".
- [ ] Favicon (`app/icon.svg`) is the Stratax Labs glyph, not the StrataxAI one.

---
