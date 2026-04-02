---
date: 2026-04-02
topic: portfolio-website
---

# Personal Portfolio Website — GitHub Pages

## Problem Frame

Ekkasit Samathimankong needs a professional portfolio website to showcase 14+ years of experience as an AI-Driven Software Developer. The site will be hosted on GitHub Pages and serve as a living CV for potential employers, collaborators, and clients.

## Requirements

- R1. Single-page dark-mode portfolio website following the design in `cv.pen` (Pencil.dev)
- R2. Built with React + Vite, statically exported for GitHub Pages hosting
- R3. Responsive mobile-first layout that scales to desktop (design is 1440px)
- R4. Smooth scroll navigation between sections with anchor links
- R5. Framer Motion animations (section fade-ins, hover effects on project cards)
- R6. Contact via LinkedIn and GitHub links only — no email exposed, no contact form
- R7. "Open to Work" badge visible in hero section
- R8. Project cards linking to live demos/stores (external links open in new tab)
- R9. Downloadable CV via "Download CV" button (PDF hosted in repo)

## Content & Sections (in order)

1. **Hero** — Name, title, tagline, CTA buttons (View Projects, Download CV, Contact Me), core focus tags, "Open to Work" badge
2. **Featured Projects** — 4 project cards (AI Experience Generation, Jesus Film App, Scientific Calculator, GitHub Portfolio)
3. **Case Study** — Application Development & Optimization (Problem/Solution/Result)
4. **About** — Bio paragraph
5. **Engineering Approach** — 4 principle cards + quote
6. **Skills** — 4 categories (AI & Emerging Tech, Mobile, Backend & Systems, Engineering)
7. **Experience** — Career summary card with left accent border
8. **GitHub** — 3 highlight cards + profile link
9. **Contact CTA** — "Let's Connect" card with LinkedIn + GitHub buttons
10. **Footer** — Copyright, "Built with modern web technologies", social links

## Key Links

- GitHub: https://github.com/sevenuphome
- LinkedIn: https://www.linkedin.com/in/ekkasit-s/
- Jesus Film Christmas demo: https://watch.jesusfilm.org/watch/christmas
- Jesus Film App (Play Store): https://play.google.com/store/apps/details?id=com.jesusfilmmedia.android.jesusfilm
- Scientific Calculator (Play Store): https://play.google.com/store/apps/details?id=com.perfectappstudio.scientificcalc

## Success Criteria

- Site deploys to GitHub Pages and loads correctly on mobile and desktop
- Design matches cv.pen reference (dark mode, typography hierarchy, spacing, card styles)
- No personal email exposed anywhere in source code or rendered page
- All external links work and open in new tabs
- Smooth scroll and animations work without performance issues

## Scope Boundaries

- No contact form or email integration
- No backend or server-side logic
- No blog or CMS
- No light mode toggle (dark mode only)
- No GitHub API integration for live repo data (static cards only)

## Key Decisions

- **Contact method**: LinkedIn + GitHub links only. Reason: zero spam risk, no email scraping, simplest to maintain.
- **Tech stack**: React + Vite static export. Reason: supports Framer Motion animations, component-based architecture, familiar DX.
- **Animations**: Framer Motion for section reveals and card hover effects. CSS transitions for simpler interactions.
- **Design source**: cv.pen file serves as the visual reference for colors, typography, spacing, and layout.

## Design Tokens (from cv.pen)

Key variables to replicate:
- `$surface-primary`, `$surface-secondary`, `$surface-card` — background layers
- `$accent-primary`, `$accent-muted` — brand accent colors
- `$foreground-primary`, `$foreground-secondary`, `$foreground-muted` — text hierarchy
- `$border-subtle` — card/button borders
- `$radius-sm`, `$radius-md`, `$radius-lg` — corner radii
- Fonts: Inter (headings/body), Geist Mono (labels/eyebrows)

## Outstanding Questions

### Deferred to Planning

- [Affects R2][Technical] Exact Vite config for GitHub Pages static export (base path, deploy workflow)
- [Affects R9][Needs research] Where to host the CV PDF — in repo root or `/public` folder
- [Affects R5][Technical] Which Framer Motion patterns to use (viewport-triggered vs scroll-linked)

## Next Steps

-> `/ce:plan` for structured implementation planning
