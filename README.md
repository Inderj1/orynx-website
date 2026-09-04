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

The contact form posts to Web3Forms from the browser, so submissions reach the
team inbox without the site needing a server route (it stays a static export).
The access key lives in `components/landing/contact-section.tsx`.

## Deployment

Pushing to `main` on `Orynx-uk/Orynx-website` auto-builds Amplify app
`Orynx-website` (`d115aqu01rskeh`, account `consultez-admin`, us-east-1), which
publishes the static export in `out/` to `orynx.ai` and `www.orynx.ai`.

### Redirects

This site has four pages; the previous site had twenty. `amplify-redirects.json`
holds the 301s that map every removed URL onto its closest surviving page, plus
the two pre-existing rules. Amplify redirects are app-level config, not part of
the build, so the file is the source of truth and has to be applied by hand:

```
aws amplify update-app --profile consultez-admin --region us-east-1 --app-id d115aqu01rskeh --custom-rules file://amplify-redirects.json
```

Apply it **after** a deploy that removes routes, never before — the rules would
otherwise 301 pages that are still live. Edit the file and re-run the command
whenever routes change.
