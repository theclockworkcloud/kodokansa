# Kodokan Judo SA Website

## Tech Stack
- Next.js 14 (App Router) + Tailwind CSS v4
- TypeScript throughout
- Static content in data files (`src/data/`)
- Deployed to Vercel via GitHub

## Design System
- **Palette:** Deep red (#8B0000), black (#1A1A1A), white (#FAFAFA), gold accent (#C5975B)
- **Fonts:** Inter (body), Noto Serif (headings) — via `next/font/google`
- **Tailwind colours:** Use `kodo-red`, `kodo-black`, `kodo-white`, `kodo-gold`, `kodo-gray-*`
- **CSS classes:** `kodo-line` (decorative gradient), `kodo-pattern` (subtle dot bg)
- **Style:** Japanese-inspired, clean, respectful. No kitsch.

## Project Structure
```
src/
  app/          # Pages (App Router)
  components/   # Shared components
  data/         # Static data files (clubs, events, news, gallery, config)
public/
  gallery/      # Gallery images (add real photos here)
```

## Key Files
- `src/data/siteConfig.ts` — Site-wide config (name, contact, social links)
- `src/data/clubs.ts` — Club listings
- `src/data/events.ts` — Events (set isPast: true for past events)
- `src/data/news.ts` — News articles with full content
- `src/data/gallery.ts` — Gallery image references

## Adding Content
- **News:** Add to `src/data/news.ts` array. Slug is used for URL.
- **Events:** Add to `src/data/events.ts`. Set `isPast: true` for past events.
- **Gallery:** Place images in `public/gallery/`, update `src/data/gallery.ts`.
- **Club changes:** Edit `src/data/clubs.ts`.

## Commands
- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run lint` — Lint check
