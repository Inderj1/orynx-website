# Orynx website — instructions for Claude

This is the orynx.ai marketing site: Next.js 16 App Router, React 19, Tailwind 4, static export deployed by AWS Amplify. Read this file first; it is the source of truth for how the site looks, sounds and is built. `DESIGN.md` is the full design theme and `design-tokens.json` the same values as data.

## Commands

```bash
pnpm install            # pnpm 10, lockfile is committed
pnpm dev                # http://localhost:3000
pnpm build              # static export to out/ (what Amplify publishes)
npx tsc --noEmit -p tsconfig.json   # type check; ignore components/ui
```

Do not add dependencies without a reason. No three.js, no CSS-in-JS, no new font hosts.

## Where things live

| Path | What |
| --- | --- |
| `app/` | Routes: `/`, `/products`, `/about`, `/contact`, plus `sitemap.ts`, `robots.ts`, `icon.svg`, `apple-icon.png` |
| `app/globals.css` | All colour tokens (`--brand-*` and shadcn tokens) and the `@theme inline` that exposes them to Tailwind. Change colours here only |
| `app/layout.tsx` | Fonts (Instrument Sans, JetBrains Mono), nav and footer, metadata, JSON-LD |
| `components/landing/*-section.tsx` | Page sections. Copy lives inline in each file |
| `components/landing/hero-globe-scene.tsx`, `hero-scenarios.ts` | The hero globe: ASCII sphere, channel nodes, background flows, scenario cards |
| `components/landing/page-hero.tsx` | Sub-page hero with `titleAccent` (coral second sentence) and `visual="wave"` |
| `components/ui/` | shadcn primitives. Rarely touched |
| `html-references/` | The original static reference site. Historical copy source, not shipped |
| `backup/` | Earlier globe implementations. Not imported |
| `amplify.yml`, `amplify-redirects.json` | Build spec and app-level 301s for Amplify |

## Design rules (the short version of DESIGN.md)

**Ground and ink.** Background `#f7f8fc`, ink `#1b1f38`, muted text `#4f5875`, hairlines at `border-foreground/10`. Cards are `#ffffff`. There is no pure black, no pure grey, no gradient, no glow, no card shadow (the one exception is the conversation pop-up).

**Colour is an accent system, never a fill.**
- Indigo `#343b62` (`bg-primary`): primary buttons, Understand state, dark sections via `bg-foreground`.
- Blue `#63a6c4` (`brand-blue`): **Orynx Conductor**, Capture state, live status dots.
- Coral `#d9856f` (`brand-coral`): **Orynx Clinic**, Escalate state, highlighted phrases, eyebrow rules, nav underline, the Contact pill, numbering, link arrows.
- Amber `#e2ac5a` (`brand-amber`): Act state, result chips.
- Never swap Conductor blue and Clinic coral.
- The light hue is for dots, strokes, rules and tints. As soon as a colour is readable text on the light ground use its ink partner: `text-brand-blue-ink` `#2f5568`, `text-brand-coral-ink` `#a2472f`, `text-brand-amber-ink` `#7f5312`. On the dark indigo ground the light hue is fine as text.

**Type.** Instrument Sans for all reading text, regular weight even for headings. JetBrains Mono for eyebrows, labels, times, chips. Scale: hero 68/48/36 px, section h2 `text-3xl lg:text-5xl`, h3 `text-xl lg:text-2xl`, body 16 to 18 px, lede 26 px. Headings are never bold. The second line of a heading is often `text-brand-coral-ink`. Use standard Tailwind size classes, not arbitrary `clamp()` values.

**Shapes.** Boxes and cards have square corners and a 1 px hairline. Pills and chips are fully rounded. Nothing else is rounded.

**Patterns to reuse, not reinvent.**
- Eyebrow: `<span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6"><span className="w-8 h-px bg-brand-coral" />Label</span>`
- Section heading: two lines, the second `text-muted-foreground` or `text-brand-coral-ink`.
- Bordered list box: `border border-foreground/10`, header row with a mono label and a status dot, rows divided by `border-b border-foreground/10`.
- Status dot: 8 px, always next to a text label. Blue live, coral hand-off, amber action.
- Reveal on scroll: IntersectionObserver, `opacity` and a 16 to 32 px translate, 700 ms, 100 ms stagger. Content must be readable without the reveal firing.
- Respect `prefers-reduced-motion` in every canvas and loop.

**Layout.** `max-w-[1400px] mx-auto px-6 lg:px-12`, sections `py-24 lg:py-32`. Grids collapse below `lg`. Sticky side columns only at `lg`. The hero globe is absolutely positioned on `lg` and stacked under the text below it.

## Copy rules

- The positioning is **intelligence first**: Orynx takes work however it arrives (a call, a message, a consultation to scribe, a set of books), understands it, acts on it, and brings a person in when judgment matters. Do not write as if everything starts with a phone call.
- Workflow states are Capture, Understand, Act, Escalate.
- Products are **Orynx Conductor** (trades and field service) and **Orynx Clinic** (practices and clinics). Never "Orynx Care": "care" means social care in the UK.
- **UK English and UK context**: heating engineers not HVAC, boiler not AC, office manager not dispatcher, practices, UK and EU GDPR and the NHS Data Security and Protection Toolkit not HIPAA, patient data not PHI, 24-hour times, +44 numbers, Ltd not Co. Spelling: prioritise, organisation, colour. The site uses "judgment".
- One contact address everywhere: support@orynx.ai.
- Short declaratives, full stops in headlines, no exclamation marks, no "AI-powered". Name the human hand-off as a feature.
- Tab title is "ORYNX" on the home page and "Page — ORYNX" on sub-pages. Share title is "ORYNX".

## Deploy and repos

- `origin` is `git@github.com:Orynx-uk/Orynx-website.git` (company repo, builds to orynx.ai from the Orynx-uk AWS account). `inderj1` is a mirror; push `main` to both.
- Amplify runs `amplify.yml`: pnpm 10.7.0, frozen lockfile, `pnpm build`, publishes `out/`. Keep `output: 'export'` and `trailingSlash: true` in `next.config.mjs`.
- `amplify-redirects.json` holds app-level 301s; apply them in the Amplify console, they are not build output.
- The contact form posts to Web3Forms from the browser; where submissions land is configured in the Web3Forms account.
- Commit and push only when asked.

## When adding a page or section

1. Copy an existing section's structure rather than starting from a blank component.
2. Put the eyebrow rule in coral, the heading on the standard scale, and colour only where it carries meaning.
3. Add metadata (`title`, `description`) and, for a new route, an entry in `app/sitemap.ts` and `amplify-redirects.json` if an old URL should point to it.
4. Check at 390 px and 1440 px. Run the type check and `pnpm build` before pushing.
