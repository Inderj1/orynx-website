# Orynx.ai website

Next.js (App Router) build of the Orynx.ai marketing site. The design and copy
come from the static reference pages in `html-references/`.

## Develop

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build    # production build
pnpm start
```

## Where things live

| Path | Purpose |
| --- | --- |
| `html-references/` | Source-of-truth HTML/CSS reference (index, products, about, contact) |
| `app/globals.css` | The reference stylesheet ported as plain CSS (colours, fonts, layout) |
| `app/layout.tsx` | Fonts (Inter + Newsreader), header, footer, site metadata |
| `app/page.tsx`, `app/products`, `app/about`, `app/contact` | The four pages |
| `components/site/` | Page building blocks (header, footer, cards, feed panel, FAQ, form) |
| `content/*.ts` | All copy. Edit text here, not in components |
| `public/assets/` | Logo and hero image |

The contact form mirrors the reference: submitting opens the visitor's email
app with a prepared request to `hello@orynx.ai`. Nothing is sent server-side.
