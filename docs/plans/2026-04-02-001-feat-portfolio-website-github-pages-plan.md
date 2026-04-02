---
title: "feat: Portfolio Website on GitHub Pages"
type: feat
status: active
date: 2026-04-02
origin: docs/brainstorms/2026-04-02-portfolio-website-requirements.md
---

# feat: Portfolio Website on GitHub Pages

## Overview

Build a single-page dark-mode portfolio website for Ekkasit Samathimankong, an AI-Driven Software Developer with 14+ years of experience. The site uses React + Vite, deploys as static files to GitHub Pages, and follows the visual design defined in `cv.pen` (Pencil.dev). Contact is via LinkedIn and GitHub links only — no email exposed (see origin: `docs/brainstorms/2026-04-02-portfolio-website-requirements.md`).

## Proposed Solution

A React SPA with 10 sections, Framer Motion animations, CSS custom properties mirroring the cv.pen design tokens, and a GitHub Actions workflow for automated deployment.

## Technical Considerations

### Vite + GitHub Pages Config
- `base: './'` in `vite.config.ts` for relative asset paths (works for both user pages and project pages)
- `vite-plugin-static-copy` is not needed — Vite's `public/` folder handles static assets
- Build output goes to `dist/`, deployed via GitHub Actions

### Fonts
- **Inter**: Load from Google Fonts CDN (variable weight)
- **Geist Mono**: Load from `@fontsource/geist-mono` npm package or self-host in `public/fonts/`

### CV PDF
- Place in `public/cv.pdf` — Vite copies it to build root, accessible at `./cv.pdf`
- User needs to provide the actual PDF file

### Framer Motion Strategy
- `whileInView` with `viewport={{ once: true }}` for section fade-in reveals
- `whileHover` for card scale/border effects
- `motion.div` wrappers on each section component
- Keep animations subtle: `opacity: 0→1`, `y: 20→0`, `duration: 0.5`

### Responsive Breakpoints
- Mobile: < 768px (single column, reduced padding, smaller fonts)
- Tablet: 768px–1024px (adjusted grid)
- Desktop: > 1024px (full 1440px design)

## Acceptance Criteria

- [ ] Site builds with `npm run build` and produces static files in `dist/`
- [ ] Deploys to GitHub Pages via GitHub Actions on push to `main`
- [ ] 10 sections render in correct order matching cv.pen layout
- [ ] Dark mode only — colors match cv.pen design tokens exactly
- [ ] Inter and Geist Mono fonts load correctly
- [ ] "Open to Work" badge visible in hero with green dot
- [ ] 4 project cards display in 2x2 grid on desktop, stack on mobile
- [ ] All external links open in new tabs (`target="_blank" rel="noopener noreferrer"`)
- [ ] "Download CV" button downloads PDF from `public/cv.pdf`
- [ ] "Contact Me" scrolls to Contact CTA section
- [ ] "View Projects" scrolls to Featured Projects section
- [ ] Contact CTA shows LinkedIn + GitHub buttons only — no email anywhere
- [ ] Framer Motion animations work: section fade-ins, card hover effects
- [ ] Responsive layout works on mobile (375px), tablet (768px), desktop (1440px)
- [ ] No personal email in source code or rendered HTML
- [ ] Footer shows GitHub + LinkedIn links (no Email link — differs from cv.pen design)

## Design Tokens (from cv.pen)

```css
:root {
  /* Surfaces */
  --surface-primary: #0A0A0A;
  --surface-secondary: #141414;
  --surface-card: #1A1A1A;
  --surface-inverse: #FFFFFF;

  /* Accent */
  --accent-primary: #A855F7;
  --accent-hover: #9333EA;
  --accent-muted: rgba(168, 85, 247, 0.125);

  /* Foreground */
  --foreground-primary: #FFFFFF;
  --foreground-secondary: #A1A1AA;
  --foreground-muted: #71717A;
  --foreground-inverse: #0A0A0A;

  /* Border */
  --border-subtle: #27272A;

  /* Radius */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;

  /* Spacing */
  --spacing-xs: 8px;
  --spacing-sm: 12px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;
  --spacing-2xl: 48px;
  --spacing-3xl: 64px;
  --spacing-4xl: 96px;
}
```

## Implementation Phases

### Phase 1: Project Scaffolding

Create the Vite + React project structure.

```
cv/
├── public/
│   └── cv.pdf                    # User provides this
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css                 # Global styles, design tokens, resets
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── FeaturedProjects.jsx
│   │   ├── CaseStudy.jsx
│   │   ├── About.jsx
│   │   ├── EngineeringApproach.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── GitHub.jsx
│   │   ├── ContactCTA.jsx
│   │   ├── Footer.jsx
│   │   └── ui/
│   │       ├── SectionWrapper.jsx  # Framer Motion whileInView wrapper
│   │       ├── ProjectCard.jsx
│   │       └── Badge.jsx
│   └── data/
│       └── content.js            # All text content, links, project data
├── index.html
├── vite.config.js
├── package.json
└── .github/
    └── workflows/
        └── deploy.yml            # GitHub Pages deployment
```

**Tasks:**
- [ ] `npm create vite@latest . -- --template react` (or init manually)
- [ ] Install dependencies: `react`, `react-dom`, `framer-motion`
- [ ] Create `vite.config.js` with `base: './'`
- [ ] Set up `index.html` with Inter (Google Fonts) and Geist Mono font links
- [ ] Create `src/index.css` with CSS custom properties (design tokens above), reset styles, and base typography
- [ ] Create `src/data/content.js` with all text content and links from the requirements doc

### Phase 2: Section Components

Build each section component, top to bottom. All content comes from `src/data/content.js`.

**Tasks:**
- [ ] `Hero.jsx` — Name (Inter 72px/800), title (24px/500), tagline (18px, max-width 700px), "Open to Work" badge (green dot + Geist Mono), 3 CTA buttons (primary filled, 2 outlined), 4 core focus tags (pill badges). Section padding: 96px top/bottom, 120px left/right on desktop
- [ ] `FeaturedProjects.jsx` — Eyebrow label ("+ FEATURED PROJECTS", Geist Mono 13px, accent), title ("Selected Work", Inter 56px/700), 2x2 grid of `ProjectCard` components
- [ ] `ProjectCard.jsx` — Card background `--surface-card`, 32px padding, 12px radius. Contains: title (20px/700), description (14px), tech tags (pill badges with `--accent-muted` bg), "View Project →" link (accent color). Cards are `fill_container` width in their row
- [ ] `CaseStudy.jsx` — Eyebrow + title (42px/700), two-column layout: Problem column, Solution+Result column
- [ ] `About.jsx` — Background `--surface-secondary`. Large statement text (Inter 36px/700) + body paragraph (16px, 1.7 line-height)
- [ ] `EngineeringApproach.jsx` — 4 approach cards in a row + centered italic quote below
- [ ] `Skills.jsx` — Title "Technical Expertise" (42px/700), grid of 4 skill category cards
- [ ] `Experience.jsx` — Title + career summary card with left purple accent border (3px `--accent-primary`)
- [ ] `GitHub.jsx` — Centered layout: title, description, 3 highlight cards (280px each), "Visit GitHub Profile" button (filled accent), monospace profile link
- [ ] `ContactCTA.jsx` — Centered card with: status badge ("Open to Opportunities" with green dot), eyebrow, title (32px/700), description, two buttons (LinkedIn = filled accent, Download CV = outlined). **No email button** — remove the mail icon CTA from the cv.pen design
- [ ] `Footer.jsx` — Two rows: top row (name + social links: GitHub, LinkedIn), divider line, bottom row (copyright + "Built with modern web technologies"). **Remove "Email" link** from footer per contact decision

### Phase 3: Layout, Animation & Responsiveness

**Tasks:**
- [ ] `SectionWrapper.jsx` — Framer Motion wrapper: `initial={{ opacity: 0, y: 20 }}`, `whileInView={{ opacity: 1, y: 0 }}`, `viewport={{ once: true, margin: "-100px" }}`, `transition={{ duration: 0.5 }}`
- [ ] `App.jsx` — Wrap each section in `SectionWrapper`, add `scroll-behavior: smooth` to HTML
- [ ] Anchor links: "View Projects" → `#projects`, "Contact Me" → `#contact`, nav scrolls smoothly
- [ ] Card hover effects: `whileHover={{ y: -4, borderColor: 'var(--accent-primary)' }}` with `transition={{ duration: 0.2 }}`
- [ ] Mobile responsive (< 768px): single column layout, project grid stacks, padding reduced to 24px–48px, hero font size scales down (72→36px name, 56→32px section titles), CTA buttons stack vertically
- [ ] Tablet (768–1024px): 2-column project grid maintained, slightly reduced padding

### Phase 4: Deployment

**Tasks:**
- [ ] Create `.github/workflows/deploy.yml`:
  ```yaml
  name: Deploy to GitHub Pages
  on:
    push:
      branches: [main]
  permissions:
    contents: read
    pages: write
    id-token: write
  jobs:
    build-and-deploy:
      runs-on: ubuntu-latest
      environment:
        name: github-pages
        url: ${{ steps.deployment.outputs.page_url }}
      steps:
        - uses: actions/checkout@v4
        - uses: actions/setup-node@v4
          with:
            node-version: 20
        - run: npm ci
        - run: npm run build
        - uses: actions/configure-pages@v4
        - uses: actions/upload-pages-artifact@v3
          with:
            path: dist
        - id: deployment
          uses: actions/deploy-pages@v4
  ```
- [ ] Enable GitHub Pages in repo settings → Source: GitHub Actions
- [ ] Add placeholder `public/cv.pdf` (user replaces with real CV)
- [ ] Test build locally with `npm run build && npm run preview`
- [ ] Push to GitHub and verify deployment

## Design Notes from cv.pen

- **Eyebrow labels**: All sections use `+ SECTION NAME` format in Geist Mono 13px, `--accent-primary`, letter-spacing 2px
- **Section padding**: Consistent 96px vertical, 120px horizontal on desktop
- **Card style**: `--surface-card` bg, `--radius-md` corners, 32px padding, `--border-subtle` stroke where used
- **Tags/pills**: `--accent-muted` bg, `--radius-sm` corners, 6px/12px padding, Geist Mono 12px
- **Primary buttons**: `--accent-primary` bg, `--foreground-inverse` text, `--radius-sm` corners
- **Outlined buttons**: transparent bg, `--border-subtle` 1px stroke, `--foreground-secondary` text
- **Footer**: `--surface-secondary` bg, 40px/120px padding, Geist Mono 12px for copyright

## Scope Boundaries

Per origin document:
- No contact form or email integration
- No backend or server-side logic
- No blog or CMS
- No light mode toggle
- No GitHub API integration (static cards only)

## Sources & References

### Origin

- **Origin document:** [docs/brainstorms/2026-04-02-portfolio-website-requirements.md](docs/brainstorms/2026-04-02-portfolio-website-requirements.md) — Key decisions: LinkedIn+GitHub contact only, React+Vite stack, Framer Motion animations, cv.pen as design source

### Key Links

- GitHub: https://github.com/sevenuphome
- LinkedIn: https://www.linkedin.com/in/ekkasit-s/
- Jesus Film Christmas demo: https://watch.jesusfilm.org/watch/christmas
- Jesus Film App: https://play.google.com/store/apps/details?id=com.jesusfilmmedia.android.jesusfilm
- Scientific Calculator: https://play.google.com/store/apps/details?id=com.perfectappstudio.scientificcalc
