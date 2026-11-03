# SetBenchmark – Modern Frontend Architecture

This repository contains the production frontend for **SetBenchmark**, migrated to a modern, maintainable component-first architecture using:

- **React.js 18** (UI library)
- **TypeScript** (Strict application typing)
- **TSX** (Component architecture)
- **Vite** (Next-gen build tool & fast dev server)
- **Tailwind CSS & CSS3** (Utility-first and custom design token system)
- **PostCSS & Autoprefixer** (CSS toolchain)
- **ESLint** (Code quality and standards)
- **Full Static Prerendering (SSG)** (100% crawlable static HTML for search engines and zero 404s)

---

## 1. Project Architecture

```
src/
├── components/          # Reusable UI component library (Single Source of Truth)
│   ├── Header.tsx       # Top announcement banner, dark navbar & full-width mega menus
│   ├── Footer.tsx       # Multi-column global footer with regional and legal links
│   ├── FAQ.tsx          # 2-Column split FAQ layout (gradient card + circular CTA + accordion)
│   ├── CTA.tsx          # Universal pre-footer conversion section with trust badges
│   ├── Button.tsx       # Standard brand buttons (.btn.btn-primary, .btn.btn-ghost, etc.)
│   ├── Checkmark.tsx    # 24px circular accent tick badge (.tick)
│   ├── FeatureCard.tsx  # Interactive feature cards with icon tiles (.icon)
│   ├── PricingCard.tsx  # Multi-currency pricing tier cards
│   ├── Badge.tsx        # Eyebrows, status chips, AI policy badges
│   └── SEOHead.tsx      # Head metadata, canonicals, Open Graph, Twitter cards, JSON-LD
├── layouts/
│   └── MainLayout.tsx   # Global shell wrapping Header, Main, and Footer
├── styles/
│   ├── design-tokens.css# Single source of truth for all CSS custom properties
│   ├── fonts.css        # Typography definitions (Instrument Sans & JetBrains Mono)
│   └── globals.css      # Core styles, responsive grid, animations, and Tailwind directives
├── data/
│   └── navigation.ts    # Central mega menu links, categories, descriptions, and icons
├── pages/               # 48 Dedicated page modules
│   ├── Home/            # Landing page
│   ├── Product/         # 8 Product deep-dive pages
│   ├── Solutions/       # 5 Solutions pages
│   ├── SkillTests/      # 12 Skill assessment tests
│   ├── Compare/         # Competitor benchmark (HackerRank Alternatives)
│   ├── Regions/         # 5 Regional editions (India, UAE, Saudi Arabia, Australia, NZ)
│   ├── Pricing/         # Global pricing and feature comparison
│   ├── Blog/            # 5 Technical hiring articles & blog index
│   ├── About/           # Company story & vision
│   ├── Contact/         # Demo booking & sales inquiry
│   ├── Developers/      # Candidate experience & developer hub
│   ├── Integrations/    # ATS & HR integrations
│   ├── Security/        # Trust, DPDP, SOC 2, compliance
│   ├── Legal/           # Privacy, Terms of Service, Refund Policy
│   └── NotFound/        # Custom 404 error page
├── App.tsx              # React Router mapping all 48 routes with direct navigation
└── main.tsx             # Application bootstrap & entrypoint
```

---

## 2. Development & Production Commands

| Command | Action |
|---|---|
| `npm run dev` | Starts the lightning-fast Vite development server with HMR at `http://localhost:3000` |
| `npm run build` | Runs TypeScript type checking (`tsc`), bundles with Vite, and generates full prerendered HTML in `dist/` |
| `npm run preview` | Previews the production build locally |
| `npm run lint` | Runs ESLint across all TypeScript and TSX files |

---

## 3. SEO & Metadata Preservation

Every single one of the 48 pages strictly adheres to [`SITEMAP_AND_SEO_LAUNCH_PLAN.md`](./SITEMAP_AND_SEO_LAUNCH_PLAN.md):
- **Exact Canonical URLs & Slugs**: Maintained for all routes without alteration.
- **Search Engine Prerendering**: `node scripts/prerender.cjs` generates `dist/<route>/index.html` with full `<title>`, `<meta name="description">`, Open Graph, Twitter cards, and structured data schemas (`BreadcrumbList`, `FAQPage`, `SoftwareApplication`, `BlogPosting`).
- **Zero 404s**: Direct deep links and browser refresh work automatically on both static web servers and SPA hosts.

---

## 4. Design System & Component Guidelines

All styles strictly follow [`BRAND_GUIDELINES.md`](./BRAND_GUIDELINES.md):
- **Primary Hero Lime**: `#C8F25A` (`var(--lime)`) for primary buttons and high-energy highlights.
- **Accessible Lime Dark**: `#385400` (`var(--lime-dark)`) providing 8.6:1 WCAG AAA text contrast on light backgrounds.
- **Circular Accent Checkmarks**: `24px × 24px` circles with `border-radius: 50%`, soft lime tint `#F1FBD9`, and `#385400` checkmark stroke.
- **Universal Action Button**: `.btn.btn-primary` (48px height, 12px border radius, font-weight 700).

### Future Component Editing Rules
When modifying a shared element across the website:
1. Locate the relevant component in `src/components/` (e.g. `Header.tsx`, `FAQ.tsx`, `CTA.tsx`, `Checkmark.tsx`, `Button.tsx`).
2. Make your edits in that single TSX file.
3. The change will automatically and immediately reflect across all 48 pages without having to edit individual page files.

