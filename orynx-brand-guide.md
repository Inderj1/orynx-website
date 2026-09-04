# Orynx brand and design guide

**For Claude and for people.** This one file is enough to build anything in the Orynx look: web pages, product UI, decks, documents, emails, social images. Paste it into a project, attach it to a conversation, or add it to a `CLAUDE.md` with the line "Follow orynx-brand-guide.md". It is self-contained and matches what is live at orynx.ai.

---

## How to use this file

When asked to design or build anything for Orynx:

1. Use only the colours in section 2, in the roles given there. Do not introduce new hues.
2. Use the two typefaces in section 3 at the sizes given. Headings are regular weight.
3. Build from the components in section 4 before inventing new ones.
4. Write copy by the rules in section 7. UK English, intelligence first.
5. Check the "Never" list in section 8 before finishing.

---

## 1. Positioning

Orynx builds applied AI intelligence for service businesses and clinics. It takes work however it arrives, a call, a message, a consultation to scribe, a set of books, understands it, acts on it, and brings a person in exactly when judgment matters.

- **Orynx Conductor.** Operations intelligence for trades and field-service businesses: heating, plumbing, electrical and similar.
- **Orynx Clinic.** Clinical intelligence for practices and clinics: ambient scribe, triage, scheduling, patient messaging, with clinical judgment staying with clinicians.

Workflow, always in this order: **Capture → Understand → Act → Escalate.**

One anchor line: *The intelligence that runs the work.*

---

## 2. Colour

### Ground and ink

| Name | Hex | Role |
| --- | --- | --- |
| Background | `#f7f8fc` | Page ground. Bright cool white with a hint of the logo blue |
| Card | `#ffffff` | Cards, pop-ups, form fields, share images |
| Ink | `#1b1f38` | Body text, headings, ground of dark sections |
| Muted | `#4f5875` | Secondary text, captions, labels |
| Secondary surface | `#eef0f6` | Quiet alternate band |
| Muted surface | `#e8ebf3` | Disabled and soft fills |
| Border | `#d9dde8` | Hairlines. On screen prefer ink at 10 % alpha |
| Night | `#0f1430` | Panels inside dark sections |

### Brand hues

Each hue has a light form for dots, strokes, rules and tints, and an ink form for readable text on the light ground. On the dark indigo ground the light form is fine as text.

| Hue | Light | Ink (text) | Tint | Meaning |
| --- | --- | --- | --- | --- |
| Indigo | `#343b62` | `#343b62` (hover `#2a3050`) | | Wordmark. Primary buttons. Understand state. Dark sections |
| Blue | `#63a6c4` | `#2f5568` | `#e3eff4` | **Orynx Conductor.** Capture state. Live status |
| Coral | `#d9856f` | `#a2472f` (hover `#8e3d27`) | `#f8e9e4` | **Orynx Clinic.** Escalate and human hand-off. Highlighted phrases, eyebrow rules, nav underline, Contact button, numbering, link arrows. Errors |
| Amber | `#e2ac5a` | `#7f5312` | | Act state. Results and confirmations |
| Slate indigo | `#46527f` | | | Logo outer ring. Fifth chart series |

Focus ring `#3f86a8`, solid. Chart series order: indigo, blue, amber, coral, slate indigo.

### Rules

- The page is white and indigo. Colour is a signal, never a fill. No coloured backgrounds larger than a chip or a tint behind a tag.
- Conductor is blue, Clinic is coral. Never swap them.
- Highlighted words in a headline are coral ink, optionally with a 12 px bar under them in coral at 25 % alpha.
- No gradients, no glows, no coloured shadows.

---

## 3. Typography

| Role | Face and weight | Size | Setting |
| --- | --- | --- | --- |
| Hero headline | Instrument Sans 400 | 68 px desktop · 48 tablet · 36 phone | line-height 1.0, letter-spacing −4 % |
| Section heading | Instrument Sans 400 | 48 px desktop · 30 phone | line-height 1.05, letter-spacing −2.5 % |
| Sub-heading | Instrument Sans 400 | 24 px | line-height 1.2 |
| Lede | Instrument Sans 400 | 26 px desktop · 20 phone | line-height 1.5, colour Muted |
| Body | Instrument Sans 400 | 16 to 18 px | line-height 1.6, colour Muted |
| UI and nav | Instrument Sans 400 to 500 | 14 to 15 px | |
| Eyebrow | JetBrains Mono 400 | 13 to 14 px | sentence case, colour Muted |
| Label, numbering | JetBrains Mono 500 to 600 | 10 to 11 px | uppercase, letter-spacing 10 % |
| Chip, caption | JetBrains Mono 600 | 8 to 10 px | uppercase, letter-spacing 6 % |

Google Fonts: `Instrument Sans` and `JetBrains Mono`. Fallbacks: `system-ui, sans-serif` and `ui-monospace, monospace`.

- Headings are never bold. Emphasis comes from size and colour.
- The second line of a heading is often Muted or coral ink.
- Running text stays near 65 characters wide.
- Headlines end with a full stop. No exclamation marks.

---

## 4. Components

All measurements in px. Hairline means 1 px in ink at 10 % alpha.

**Eyebrow.** A 32 px coral rule, 12 px gap, mono text in Muted. Opens every section.
`—— Applied AI intelligence for operations and clinics`

**Heading pair.** Eyebrow, then a two-line heading, second line Muted or coral ink, then an optional lede in Muted.

**Pill button.** Fully rounded, 44 to 56 px tall, 22 to 32 px side padding, 15 to 16 px text.
- Primary: indigo fill `#343b62`, text `#f7f8fc`, hover `#2a3050`.
- Secondary: transparent, hairline outline at ink 20 %.
- Contact or Clinic: outline in coral ink, fills coral ink with paper text when active or on hover.

**Result chip.** Pill, 15 to 18 px tall, mono 8 to 9 px uppercase. Paper fill, 1 px stroke in the state's light hue, text in the state's ink. Example: `SLOT · TUE 09:30 · HELD` in amber.

**Bordered box.** Square corners, hairline border, card or page fill. Optional header row: mono label left, status dot and label right, hairline below. Rows divided by hairlines, never boxed individually.

**Status dot.** 8 px circle, always beside a text label. Blue live or Conductor, coral hand-off or Clinic, amber done, indigo neutral.

**Numbering.** `01 · SEE` style mono labels in coral ink. Only where the content is genuinely a sequence.

**Card pop-up.** Card fill, hairline border, soft indigo shadow `0 10px 30px rgba(27,31,56,.08)`, the one place a shadow is allowed. Mono header row: channel and type left in the tone's ink, vertical and 24-hour time right in Muted. A 13 px sentence. A mono result line starting with →, in amber ink or coral ink.

**Workflow strip.** Four equal hairline cells: state dot, title 15 px, then a two-line mono label. Capture · Understand · Act · Escalate.

**Dark section.** Ground is Ink `#1b1f38`; deeper panels use Night. Text is paper `#f7f8fc`; body copy paper at 65 %. Coral and blue may be used as text here. At most one dark band per page.

**The mark.** Three open rings from the logo: outer `#46527f`, middle `#63a6c4`, inner `#d9856f`, stroke 3 on a 48 unit square. Used for favicon and app icons. The wordmark is ORYNX in indigo beside the rings.

**Illustration language.** Hairline geometry, dot and glyph fields in ink at low alpha, dotted tethers, small coloured nodes with mono labels. No photography, no 3D renders, no stock illustration.

---

## 5. Layout and spacing

- Content width 1400 max. Side padding 48 on desktop, 24 on phone.
- Sections 96 to 128 vertical padding. Heroes are sized to their content, not the viewport.
- Spacing steps: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128.
- Radii: 0 for boxes and cards, 999 for pills and chips, 4 only inside form controls.
- Grids collapse to one column below 1024. Sticky side columns only at 1024 and above.
- Documents and decks: white ground, ink text, one coral eyebrow per section, hairline tables, no filled table headers.

---

## 6. Motion

- Reveal on scroll: fade plus a 16 to 32 px rise, 700 ms ease-out, 100 ms stagger. Content is readable before the reveal fires.
- Headline phrase: letter-by-letter reveal with a blur-in, cycling every 2.6 s.
- Marquee: continuous horizontal scroll, 30 s per loop.
- Live elements: dots pulse, flows travel on 1.3 s ease-in-out, chips fade in over 250 ms.
- Always honour reduced-motion: one static frame, no loops.

---

## 7. Copy and voice

- **Intelligence first.** Lead with what the intelligence does with work however it arrives. Never write as if everything starts with a phone call.
- **UK English, UK context.** Heating engineers not HVAC, boiler not AC, office manager not dispatcher, practices and clinics, UK and EU GDPR and the NHS Data Security and Protection Toolkit not HIPAA, patient data not PHI, 24-hour times, +44 numbers, Ltd not Co. Spell prioritise, organisation, colour. The site uses "judgment".
- **Names.** Orynx Conductor, Orynx Clinic. Never "Orynx Care". The company is ORYNX in the wordmark, Orynx in prose.
- **Tone.** Short declaratives. Concrete outcomes. No "AI-powered", no "seamless", no "revolutionary", no exclamation marks.
- **Human hand-off is a feature.** Say when a person takes over and what context they get.
- **Contact.** One address everywhere: support@orynx.ai.
- **Titles.** Tab and share title "ORYNX"; sub-pages "Page — ORYNX".

---

## 8. Never

- No colour as a background fill beyond chips and tag tints.
- No gradients, glows, or shadows except the card pop-up.
- No rounded cards or rounded boxes. Only pills and chips are round.
- No bold headings. No display serif.
- No light brand hue as text on white; use the ink partner.
- No HVAC, dispatcher, HIPAA, PHI, AM/PM, +1, "Orynx Care".
- No photography or stock illustration.
- No emoji as section markers, no centred everything, no numbered markers where nothing is a sequence.

---

## 9. Values in one block

```
Background   #f7f8fc     Card        #ffffff
Ink          #1b1f38     Muted       #4f5875     Border  #d9dde8 (or ink 10 %)
Indigo       #343b62     hover       #2a3050     Night   #0f1430
Blue         #63a6c4     text        #2f5568     tint    #e3eff4   Conductor · Capture · live
Coral        #d9856f     text        #a2472f     tint    #f8e9e4   Clinic · Escalate · highlights
Amber        #e2ac5a     text        #7f5312                       Act · results
Focus ring   #3f86a8
Fonts        Instrument Sans (all reading text) · JetBrains Mono (labels, times, chips)
Headings     regular weight · 68 / 48 / 24 · tight tracking · coral second line
Radius       0 boxes · 999 pills and chips
Workflow     Capture (blue) → Understand (indigo) → Act (amber) → Escalate (coral)
```

### Tailwind and CSS token names used on the site

`bg-background text-foreground text-muted-foreground border-foreground/10 bg-primary text-primary-foreground`
`bg-brand-blue text-brand-blue-ink bg-brand-blue-soft`
`bg-brand-coral text-brand-coral-ink bg-brand-coral-soft`
`bg-brand-amber text-brand-amber-ink bg-brand-night`

```css
:root {
  --background: #f7f8fc; --foreground: #1b1f38; --muted-foreground: #4f5875; --border: #d9dde8;
  --primary: #343b62; --brand-indigo-deep: #2a3050; --brand-night: #0f1430;
  --brand-blue: #63a6c4; --brand-blue-ink: #2f5568; --brand-blue-soft: #e3eff4;
  --brand-coral: #d9856f; --brand-coral-ink: #a2472f; --brand-coral-soft: #f8e9e4;
  --brand-amber: #e2ac5a; --brand-amber-ink: #7f5312; --ring: #3f86a8;
}
```
