You're building the marketing landing page for **Lore** — a family-archive web app
where families preserve photos, stories, and memories together. The app already
exists at lore-coral-six.vercel.app; this is the public marketing site that lives
in front of it (at the same `/` route, with sign-up flowing through to the app).

# Product in one sentence
Lore is a warm, modern home for your family's memories — photos, stories, family
tree, and private group spaces — so the small everyday moments don't get lost.

# Audience
Multi-generational families. Has to be easy enough for a grandparent to use,
emotional enough that a 28-year-old wants to start one for their parents,
and trustworthy enough that anyone with private photos feels safe.

# Brand & voice
- Warm, human, never corporate. Talk like a thoughtful friend, not a SaaS.
- "Your family's stories, kept close." Avoid words: platform, solution, leverage.
- Mascot: a friendly green dinosaur named Lore (image at /mascot/lore-mascot.png).
  Use the mascot in the hero. Use it sparingly elsewhere — it should feel special.

# Visual system (use these exact tokens, no others)
- Bg: #fbfaf7 (cream); Bg warm: #f3f5ee; Bg soft: #e7eee6; Paper: #ffffff
- Ink (text/primary): #153f38 (deep green); Ink soft: #3f5f59; Ink muted: #7a918c
- Accent (coral, for CTAs only): #ff6b5e; Accent warm: #ed584e
- Sage (success/tags): #3ecf8e; Sunshine (highlights): #ffc857
- Shadows: shadow-warm = 0 2px 8px rgba(21,63,56,0.05), 0 1px 2px rgba(21,63,56,0.04)
           shadow-lift = 0 18px 50px rgba(21,63,56,0.12), 0 4px 14px rgba(21,63,56,0.06)
- Fonts: display headings → Outfit (700/800, tight letter-spacing -0.035em)
         body & UI → Plus Jakarta Sans (400/500/600)
- Radius: cards 18px, buttons fully pill, inputs 10px
- Must support light AND dark mode (same palette, deep ink-green stays the anchor)

# Aesthetic direction (we already picked this)
"Calm modern." Refined and quiet — deep ink-green for hero/header, near-monochrome
elsewhere with the coral accent used sparingly. NOT playful, NOT corporate, NOT
glassmorphic, NOT parchment/sepia. Think: Linear or Notion warmth, but for
family photos instead of project management.

# Micro-animations (subtle, not bouncy)
- Staggered fade-up on section mount (cards cascade in)
- Quiet hover-lift on feature/pricing cards (translateY -3px, soft warm shadow)
- Springy active-scale on buttons (0.97)
- Link underlines that grow left-to-right on hover
- Images: shimmer placeholder that cross-fades to the real image
- Mascot: gentle 4s float in the hero (translateY ±10px, ±1deg rotate)
- Respect prefers-reduced-motion

# Page sections (in order)

## 1. Hero
- Top nav: Lore wordmark left; "Sign in" + coral "Start your archive" right
- Deep ink-green panel, rounded 24px, with one subtle sage glow behind
- Eyebrow: "FRIDAY, JUNE 14" style date chip
- H1 (Outfit, 5xl-6xl, paper-cream text): "The stories worth keeping live here."
- Sub (paper/70%): "Photos, voices, and the small moments — kept close for the
  whole family. A quiet home for the memories that matter."
- Coral CTA "Start your archive — free" + ghost "See how it works"
- Mascot on the right, gently floating
- Trust line under buttons: "Free forever for one person. No credit card."

## 2. Social proof strip (light)
Three soft lines, sage chip icons, in a single row:
- "Encrypted in transit & at rest"
- "Your data belongs to you (export anytime)"
- "No ads. No selling. Ever."

## 3. Features (3 cards in a grid, lift-on-hover)
For each: small Tabler/Lucide icon (sage tint), Outfit subhead, Jakarta body.
- **Memories that won't get lost** — Photos, videos, and the stories behind
  them. Tagged by year, person, place. Surfaced gently with "On this day."
- **A living family tree** — Drag, link, and grow it together. Birth years,
  death years, the people who made you.
- **Private spaces for each circle** — Communities for the cousins,
  grandparents, in-laws. Share what fits where.

## 4. The Lore difference (editorial section)
Two-column layout. Left: large Outfit serif heading "Built for keeping, not
scrolling." Right: three short paragraphs:
- "We're not a social network. There's no feed designed to hold you."
- "We're not cloud storage. Files alone aren't memories — context is."
- "We're the warm place between — where the photos meet the stories that
  make them mean something."

## 5. Pricing (3 tiers — see below)

## 6. Early-supporter banner (between pricing and FAQ)
Sage-soft band, full-width inside content, with a sunshine "Heirloom pricing"
chip. Copy:
"You're early. The first 15 people to start a Lore archive get **50% off the
Family plan, forever** — $4/mo for life — plus a founders' badge and first dibs
on handles. Use code **LORE15** at signup. [X of 15 spots left]"
(Make the spot counter a placeholder; backend wiring is a separate task.)

## 7. FAQ (5 questions, accordion, no JS-heavy library — use <details>)
- "What happens if Lore shuts down?" — annual JSON+ZIP export of everything;
  Forever plan members get a guaranteed 12-month migration window
- "Can I keep it private from extended family?" — yes; each profile, memory,
  and community has Just me / Family / Public scopes, enforced at the database
- "Who can edit our family tree?" — only people you invite as collaborators
- "Is this safe for sensitive photos?" — encrypted at rest, RLS on every row,
  no admin can browse your archive
- "Does my grandma need an app?" — works in any browser; we send a magic link
  to her email — no password to remember

## 8. Final CTA band
Deep ink-green panel, same style as hero. Big Outfit serif: "Start one tonight."
Sub: "Five minutes. One photo. One story. It begins there." Coral button:
"Make your Lore."

## 9. Footer
Three columns: Product / Company / Legal. Sage-muted text, ink wordmark.
Bottom row: "© 2026 Lore. Made with care for the people we love."

# Pricing tiers (use these exactly)

**Free — $0**
For one person, forever.
- 2 GB storage
- 1 family tree
- Photos & stories (50 MB per file)
- "On this day" recaps
- Full export anytime

**Family — $8/mo or $72/yr** (save 25%, badge it "Most popular")
Most loved. Everything you need for the whole family.
- 100 GB shared storage
- Up to 20 family members
- Unlimited family trees & communities
- Anniversary & birthday reminders
- Voice notes on memories
- Priority email support

**Forever — $299 once**
For the family that's keeping this for the grandkids.
- Everything in Family, paid once
- Lifetime access — no renewal, ever
- Annual printed memory book mailed to you
- Founders' badge on your profile
- 12-month guaranteed migration window if Lore ever closes
- Concierge import (we'll help you bring in old photo libraries)

Pricing card design: white surface, 18px radius, 1px ink/8% border, generous
padding (32px), price in Outfit 4xl, feature list in Jakarta 14px with sage
check icons. The Family card gets a 2px ink-green border AND a small coral
"Most popular" pill that sits ABOVE the card (translateY -50%, behind the
top border). All three cards equal height (use grid + items-stretch).
Hover-lift on all three.

# Tech constraints
- Next.js 16 App Router, Tailwind v3, TypeScript strict
- Match the existing app's primitives: components/ui/button.tsx, card.tsx,
  badge.tsx (use the same Button variants: primary=coral, secondary=ink,
  outline, ghost, soft)
- Mobile-first; landing must be lovely on a phone (single column, hero stacks
  with mascot below text, pricing cards stack vertically)
- All images via <img> with object-cover (the app intentionally doesn't use
  next/image — keep that consistent)
- One page file (src/app/(landing)/page.tsx) that's a server component where
  possible; "use client" only on the FAQ accordions and any animated bits
- Don't add new dependencies. lucide-react is already installed for icons.

# Things to avoid
- No glassmorphism, no gradients beyond the existing radial body glow
- No stock testimonial cards with fake names/photos
- No "Trusted by 1,000+ families" — we don't have them yet, and honesty
  is part of the brand
- No emoji in headings, no exclamation marks anywhere
- No popup modals on page load

Build it. Keep it tight, calm, and warm.