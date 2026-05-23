# Fong Sing Restaurant Website

Next.js 14 website for Fong Sing Restaurant — Canadian Chinese & Authentic Vietnamese cuisine at 278 Lacewood Drive, Halifax, NS.

## Setup

```bash
npm install
npm run dev      # development server at http://localhost:3000
npm run build    # production build
npm run start    # serve production build
npm run lint     # ESLint check
```

## Dependencies

| Package | Purpose |
|---|---|
| `next` 14 | App Router framework |
| `react` / `react-dom` | UI runtime |
| `typescript` | Type safety |
| `tailwindcss` | Utility-first styling |
| `framer-motion` | Page and scroll animations |
| `lucide-react` | Icon set |
| `react-hook-form` | Form state management |
| `@hookform/resolvers` + `zod` | Schema validation |
| `sonner` | Toast notifications |
| `@radix-ui/react-dialog` | Sheet/modal primitive (mobile nav) |
| `@radix-ui/react-select` | Select dropdown primitive |
| `@radix-ui/react-label` | Accessible form labels |
| `@radix-ui/react-slot` | `asChild` composition (shadcn) |
| `class-variance-authority` | Variant-based component styles (shadcn) |
| `clsx` + `tailwind-merge` | Conditional class merging |
| `tailwindcss-animate` | Animation utilities |

## Project Structure

```
app/
  layout.tsx        # Root layout — fonts, metadata, Toaster
  page.tsx          # Home page — composes all sections
  globals.css       # Tailwind layers, smooth scroll, brand globals
  icon.svg          # Placeholder favicon (replace with actual logo)

components/
  Navbar.tsx        # Fixed top nav with mobile Sheet drawer
  HeroSection.tsx   # Full-viewport hero with gradient + wave
  InfoBar.tsx       # 4-item info strip (address, phone, hours, delivery)
  AboutSection.tsx  # Two-column "Our Story" with image placeholder
  MenuSection.tsx   # 9-tab menu with animated item grid
  ReservationSection.tsx  # Booking form (react-hook-form + zod)
  HoursSection.tsx  # Hours and delivery info
  Footer.tsx        # Footer with back-to-top button
  ui/               # shadcn-generated primitives

lib/
  menuData.ts       # Typed menu data — 18 categories, 146+ items
  utils.ts          # cn() helper
```

## Before Going Live

- Replace `https://www.fongsing.ca` in `app/layout.tsx` (`metadataBase` and `openGraph.url`) with the actual domain
- Replace `app/icon.svg` with the real restaurant logo
- Add an OG image at `public/og-image.jpg` and reference it in the `openGraph` metadata block
