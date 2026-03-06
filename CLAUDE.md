# Kodokan Judo SA Website

## Tech Stack
- Next.js 14 (App Router) + Tailwind CSS v4
- TypeScript throughout
- Supabase (contact form submissions)
- Static content in data files (`src/data/`)
- Deployed to Vercel via GitHub

## Design System
- **Palette:** Red (#A52422), black (#141414), white (#FAFAF8), gold (#B8945F)
- **Fonts:** Inter (body), Instrument Serif (headings), Zen Kaku Gothic New (display/labels) — via `next/font/google`
- **Tailwind colours:** `kodo-red`, `kodo-black`, `kodo-white`, `kodo-gold`, `kodo-gray-50` through `kodo-gray-900`
- **CSS classes:** `kodo-line` (decorative gradient), `kodo-pattern` (dot bg), `kodo-wave` (seigaiha), `kodo-asanoha` (hemp leaf), `kodo-grain` (noise overlay), `kodo-section-line` (gold divider)
- **Buttons:** `kodo-btn-primary` (red), `kodo-btn-ghost` (border, for dark bg), `kodo-btn-outline` (border, for light bg)
- **Cards:** `kodo-card` (white, shadow, hover lift)
- **Animations:** `reveal` / `reveal-left` / `reveal-scale` (scroll-triggered via ScrollReveal component), `hero-enter-1` through `hero-enter-5` (staggered page load)
- **Style:** Japanese-inspired, clean, respectful. No kitsch. Decorative kanji watermarks on dark sections at ~6-7% opacity for white, ~60% for red.

## Project Structure
```
src/
  app/            # Pages (App Router)
    about/        # About page
    clubs/        # Club listings
    contact/      # Contact form (Supabase)
    events/       # Events calendar
    gallery/      # Photo gallery
    news/         # News listing + [slug] articles
    not-found.tsx # Custom 404
  components/     # Shared components
    Header.tsx    # Sticky nav + full-screen mobile overlay
    Footer.tsx    # Site footer
    Hero.tsx      # Full-viewport homepage hero (client component)
    PageHeader.tsx # Reusable page header for subpages
    ScrollProgress.tsx # Top scroll progress bar
    ScrollReveal.tsx   # IntersectionObserver scroll animations
    SectionWrapper.tsx # Consistent section padding/width
    ClubCard.tsx  # Club card with logo, schedule, contact
    EventCard.tsx # Event card with date column
    NewsCard.tsx  # News card with pattern background
    ContactForm.tsx # Supabase-backed contact form
    GalleryGrid.tsx # Filterable gallery with lightbox
  data/           # Static data files
  lib/            # Supabase client
public/
  gallery/        # Gallery images (placeholders for now)
  logos/          # Club logos (goshin-judo-kan.png, etc.)
```

## Key Files
- `src/data/siteConfig.ts` — Site-wide config (name, contact, social links)
- `src/data/clubs.ts` — Club listings (id, schedule, contact, logo via `image` field)
- `src/data/events.ts` — Events (set `isPast: true` for past events)
- `src/data/news.ts` — News articles with full content
- `src/data/gallery.ts` — Gallery image references

## Adding Content
- **News:** Add to `src/data/news.ts` array. Slug is used for URL.
- **Events:** Add to `src/data/events.ts`. Set `isPast: true` for past events.
- **Gallery:** Place images in `public/gallery/`, update `src/data/gallery.ts`.
- **Club changes:** Edit `src/data/clubs.ts`. Logos go in `public/logos/` named by club ID.

## Commands
- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run lint` — Lint check
