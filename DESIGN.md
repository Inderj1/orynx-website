# Orynx design theme

The reference for anything that should look like orynx.ai: decks, documents, product UI, social images, email. Everything below is what the live site renders, taken from `app/globals.css` and the components.

## 1. Principles

- **Editorial, not techy.** Large type, generous white space, hairline rules. No gradients, no glows, no drop shadows on cards, no rounded cards. The only rounded shapes are pill buttons and pill chips.
- **Colour is an accent system.** The page is bright white and deep indigo. Blue, coral and amber appear as dots, rules, underlines, chips and highlighted phrases, never as large fills.
- **Two products, two hues.** Conductor is blue. Clinic is coral. Never swap them.
- **One workflow, four states.** Capture is blue, Understand is indigo, Act is amber, Escalate is coral. Anything that shows a step in the pipeline uses these.
- **Intelligence first.** Copy leads with what the intelligence does with work however it arrives, not with the phone. UK English throughout.

## 2. Colour

### Ground and ink

| Role | Hex | Use |
| --- | --- | --- |
| Background | `#f7f8fc` | Page ground. Bright cool white with a hint of the logo blue |
| Card | `#ffffff` | Cards, pop-ups, form fields, share images |
| Foreground / ink | `#1b1f38` | Body text, headings, dark section ground, primary text on pills |
| Muted foreground | `#4f5875` | Secondary text, labels, captions |
| Secondary surface | `#eef0f6` | Subtle alternate band |
| Muted surface | `#e8ebf3` | Disabled and quiet fills |
| Border | `#d9dde8` | Hairlines, boxes, dividers. On the site most hairlines are ink at 10 % (`#1b1f38` at 0.1 alpha) |
| Night | `#0f1430` | Layering inside dark sections, e.g. the trace window |

### Brand

| Token | Hex | Meaning | Text-safe partner |
| --- | --- | --- | --- |
| Indigo | `#343b62` | Wordmark. Primary buttons, Understand state | itself (9.8:1 on background) |
| Indigo deep | `#2a3050` | Primary button hover | |
| Blue | `#63a6c4` | Logo ring. **Conductor**, Capture state, live status dots | Blue ink `#2f5568` |
| Coral | `#d9856f` | Logo ring. **Clinic**, Escalate state, highlight phrases, nav underline, Contact pill | Coral ink `#a2472f` (hover `#8e3d27`) |
| Amber | `#e2ac5a` | Act state, result chips | Amber ink `#7f5312` |

Rule: the light brand hues (`#63a6c4`, `#d9856f`, `#e2ac5a`) are for dots, strokes, rules and tints on the light ground. As soon as a colour becomes readable text on white, switch to its ink partner. On the dark indigo ground the light hues are fine as text.

Tints for tags and soft fills: blue soft `#e3eff4`, coral soft `#f8e9e4`, coral highlight bar = coral at 25 % alpha.

Error and destructive: coral ink `#a2472f`. Focus ring: `#3f86a8`.

### Charts, in order

`#343b62` indigo, `#63a6c4` blue, `#e2ac5a` amber, `#d9856f` coral, `#46527f` slate indigo.

## 3. Typography

| Role | Face | Size | Notes |
| --- | --- | --- | --- |
| Hero headline | Instrument Sans 400 | 68 px desktop, 48 px tablet, 36 px phone | Line height 1.0, letter-spacing −5 %. Second line carries the coral phrase |
| Section heading | Instrument Sans 400 | 48 px desktop, 30 px phone | Letter-spacing −2.5 %. Second line often muted or coral |
| Sub-heading | Instrument Sans 400 | 24 px | Cards, feature rows |
| Lede | Instrument Sans 400 | 26 px desktop, 20 px phone | Colour muted, line height 1.6 |
| Body | Instrument Sans 400 | 16 to 18 px | Colour muted, line height 1.6 |
| Nav and UI | Instrument Sans 400 to 500 | 14 px | |
| Eyebrow and labels | JetBrains Mono 400 to 600 | 10 to 14 px | Uppercase with 0.1 em tracking for labels; sentence case for eyebrows |
| Chips and captions | JetBrains Mono 600 | 8 to 10 px | Uppercase, tracked |

Fonts are Google Fonts: Instrument Sans, JetBrains Mono. Fallbacks: system-ui sans; ui-monospace.

Heading rule: headings are regular weight, never bold. Emphasis comes from size and colour, not weight.

## 4. Signature elements

- **Eyebrow.** A 32 px coral hairline, then mono text in muted ink: `—— Applied AI intelligence for operations and clinics`. Opens every section.
- **Coral phrase.** The second line or last clause of a headline set in coral ink, with an optional 12 px underline bar in coral at 25 %.
- **Numbering.** Mono labels like `01 · SEE`, `02 · TRUST` in coral ink.
- **Bordered box.** 1 px ink-at-10 % border, no radius, white or page ground fill, optional header row with a mono label and a status dot.
- **Status dot.** 8 px circle: blue = live or Conductor, coral = Clinic or human hand-off, amber = action taken. Always paired with a text label.
- **Pill.** Fully rounded, 36 to 56 px tall. Primary: indigo fill, white text. Secondary: 1 px ink-at-20 % outline. Contact: coral-ink outline, fills coral ink when active.
- **Result chip.** Pill, 15 to 18 px tall, mono 8 to 9 px uppercase, paper fill, 1 px stroke in the state colour, text in the state's ink.
- **Card pop-up.** White, 1 px border, soft indigo shadow, mono header row (channel · type on the left, vertical · time on the right), 13 px sentence, mono result line starting with →.
- **The mark.** Three open rings from the logo, outer indigo, middle blue, inner coral. Used as the favicon and app icon.
- **The globe.** ASCII glyph sphere in ink at low alpha, dashed limb, indigo core node, channel nodes with mono labels, dotted tethers, moving dots. Illustrations elsewhere follow the same language: hairline geometry, dot fields, no photography.

## 5. Layout and spacing

- Content width 1400 px max, 48 px side padding on desktop, 24 px on phone.
- Sections 96 to 128 px vertical padding. Hero fills the viewport.
- Text column in the hero is 576 px; the globe is an 800 px square on the right.
- Grids collapse to one column below 1024 px. Sticky side columns only at 1024 px and above.
- Spacing steps: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128 px.
- Radii: 0 for boxes and cards, 999 px for pills and chips, 4 px only inside form controls if needed.

## 6. Motion

- Reveal on scroll: fade plus 16 to 32 px rise, 700 ms, ease-out, staggered 100 ms per item.
- Headline phrase: letter-by-letter reveal with a blur-in, cycling every 2.6 s.
- Marquee: continuous horizontal scroll, 30 s per loop.
- Live elements: dots pulse; flows move on 1.3 s ease-in-out; chips fade in over 250 ms.
- Respect `prefers-reduced-motion`: show one static frame, no loops.

## 7. Voice

- Lead with the outcome and the intelligence: "The intelligence that runs the work."
- Short declaratives. Full stops in headlines. No exclamation marks.
- UK English and UK context: trades, engineers, practices, GDPR, NHS DSPT, 24-hour times, +44.
- Name the human hand-off as a feature, not a fallback.
- Product names: Orynx Conductor, Orynx Clinic. The company is ORYNX in the wordmark and Orynx in prose.

## 8. Quick-apply values

```
Background      #f7f8fc
Ink             #1b1f38
Muted text      #4f5875
Border          #d9dde8   (or ink at 10 %)
Indigo          #343b62   hover #2a3050
Blue            #63a6c4   text #2f5568   tint #e3eff4
Coral           #d9856f   text #a2472f   tint #f8e9e4
Amber           #e2ac5a   text #7f5312
Fonts           Instrument Sans (all text) · JetBrains Mono (labels, chips, eyebrows)
Radius          0 (boxes) · 999 (pills, chips)
```
