# Responsive Polish — Phones & Tablets

Audit and refine every page so the site looks tight and intentional on screens from 320px up through 1024px. No design system, color, or copy changes — only spacing, typography scale, grid breakpoints, and overflow fixes.

## Areas & specific changes

### Global

- Reduce container side padding on small phones (`px-4` at <375px, `px-5` at sm, keep `px-8/12` at lg+).
- Soften default section padding: `py-16 sm:py-20 lg:py-28` (currently jumps to `py-24/32`).
- Add `overflow-x-hidden` on `body` to kill any horizontal scroll from parallax/decorative elements.

### Navbar

- Logo text shrinks on small phones (`text-xl sm:text-2xl`).
- Mobile menu: full-height drawer feel, larger tap targets (min 44px), add the "Get in Touch" CTA at the bottom (already present — verify spacing).
- Hide the search icon on <360px to prevent crowding.

### Hero

- Headline scale: `text-3xl sm:text-5xl md:text-6xl lg:text-7xl` (currently starts at 4xl, too big on 320px).
- Eyebrow tracking tightened on mobile (`tracking-[0.25em] sm:tracking-[0.4em]`).
- Search card: stack to 1 column on mobile, 2 cols on sm, 3 cols (with button) on md+. Button becomes full-width on mobile.
- Reduce hero min-height on short phones (`min-h-[560px] sm:min-h-[640px]`).

### Featured Properties / Property Grid

- Grid: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` (already correct — verify gap scales: `gap-5 sm:gap-6 lg:gap-7`).
- Card price/location row: stack vertically on very small cards to avoid truncation.

### Property Filter

- Currently `lg:grid-cols-[1.4fr_1fr_1.4fr_auto]` — on tablet it collapses to 1 column awkwardly. Add an `md:grid-cols-2` intermediate breakpoint and move the featured toggle to span full width on md.
- Slider gets more vertical breathing room on touch.

### Property Detail

- Sticky sidebar becomes a normal block on <lg; ensure CTA buttons are full-width and amenities wrap cleanly.

### Stats / Testimonials / Why Choose Us

- Stats: `grid-cols-2 lg:grid-cols-4` (avoid 4-up squish on tablet).
- Testimonials: single column on mobile, 2 on md, 3 on lg.
- Counter font sizes step down on mobile.

### Gallery (masonry)

- On mobile, drop the `lg:col-span-2 lg:row-span-2` hero tile to a normal square so the grid reads cleanly at 2 cols.
- Tighten gap on mobile (`gap-2 sm:gap-3`).

### About page (Hero, CompanyInfo, Timeline, Team)

- Timeline: vertical stack on mobile (no side-by-side alternation under md).
- Team grid: `grid-cols-2 md:grid-cols-3 lg:grid-cols-4`.
- CompanyInfo split: stack image above text on mobile.

### Contact page

- Form fields full-width on mobile, 2-column from md+.
- Contact info card stacks above form on mobile.

### Footer

- Columns: `grid-cols-2 md:grid-cols-3 lg:grid-cols-4` (avoid 4 cramped columns on tablet).
- Center-align brand block on mobile.

## QA

After edits, screenshot home, properties, property detail, about, and contact at 360px, 414px, 768px, and 1024px to confirm no overflow, no awkward wrapping, and readable type at every step.

## Out of scope

- No new sections, content, colors, or animations.
- No changes to routing, data, or business logic.
