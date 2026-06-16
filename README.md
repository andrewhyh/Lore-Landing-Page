# Lore — Landing site (v2)

The public marketing site for **Lore**, a warm, modern home for your family's
memories. This repo is the landing-page front for the app at
`https://lore.nextechelon.site/`.

## Stack

- Next.js 15 (App Router) · React 19 · TypeScript strict
- Tailwind v3 with custom design tokens
- `lucide-react` for icons
- Light/dark theme with a pre-paint inline bootstrap (no FOUC)

## Pages

| Route       | Purpose                                                     |
| ----------- | ----------------------------------------------------------- |
| `/`         | Landing — hero, features, editorial, pricing, FAQ, final CTA |
| `/pricing`  | Full pricing table with feature comparison and pricing FAQ  |
| `/about`    | Story, values, "what we are not"                            |
| `/faq`      | Grouped accordion FAQ (basics, privacy, family, pricing)    |
| `/privacy`  | Plain-language privacy notice                               |
| `/terms`    | Plain-language terms of use                                 |

## Sign-in / sign-up

All auth CTAs ("Sign in", "Start your archive", "Make your Lore") point to
the app URL defined by `NEXT_PUBLIC_APP_URL`. Source of truth is
`lib/config.ts` — change one constant to retarget the whole site.

Default: `https://lore.nextechelon.site/`.

## Local dev

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # type-check + static build
```

## Deploying

This is a standard Next.js project — ship it to Vercel, set
`NEXT_PUBLIC_APP_URL` if it differs from the default, and you're done.

## Design system

See `docs/SPEC.md` for the original brief and the tokens locked into
`tailwind.config.ts` + `app/globals.css`.

## Mascot

The hero references `public/mascot/lore-mascot.svg`. The included file is a
placeholder — drop your final artwork in at the same path (or swap the
`<img src>` in `components/site/hero.tsx`).
