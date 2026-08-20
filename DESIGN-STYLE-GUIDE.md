# ChinaWebFoundry - Visual Style Guide

Extracted from the live codebase (`src/styles/global.css`, `src/components/ui/`, `src/components/home/`).
Visual system only: colour, type, spacing, components, motion.

---

## 1. Colour

### Brand
| Token | Hex | Use |
| --- | --- | --- |
| `brand-orange` | `#F25F29` | Accent, links, eyebrows, card titles, glows |
| `brand-orange-hover` | `#D94E1F` | Link and button hover |
| `brand-orange-active` | `#C04418` | Pressed state |
| `brand-orange-text` | `#B43E12` | Orange text on white (contrast-safe) |
| `brand-red` | `#EF4444` | Hero H1 only, nowhere else |

### CTA (deeper orange, buttons only)
| Token | Hex |
| --- | --- |
| `cta-bg` | `#C84A1B` |
| `cta-bg-hover` | `#B43E12` |
| `cta-bg-active` | `#9F3210` |

### Text
| Token | Hex | Use |
| --- | --- | --- |
| `text-dark` | `#212121` | All headings |
| `text-body` | `#333333` | Paragraphs |
| `text-near-black` | `#1C1C1C` | Pressed dark buttons |
| `text-muted` | `#6B6B6B` | Captions, meta, labels |
| `text-card-blue` | `#344480` | Service card descriptions only |

### Surface
| Token | Hex | Use |
| --- | --- | --- |
| `surface-white` | `#FFFFFF` | Default page background |
| `surface-light` | `#F9FAFB` | Alternating section bands |
| `surface-border` | `#E5E7EB` | 1px card borders, dividers, rules |
| `surface-dark` | `#1C1C1C` | Dark sections |
| (raw) | `#0a0a0e` | Cinematic hero and stats band base |

### Dark-section palette
On dark backgrounds text is white at fixed opacities, never a grey hex:
- Headline: `text-white` or `text-white/95`
- Body: `text-white/65`
- Meta and mono labels: `text-white/55`, `text-white/70`
- Borders: `border-white/10`
- Glass panels: `bg-white/[0.04]` + `backdrop-blur-md` + `border-white/10`

### Rules
- Orange is the only accent colour. No secondary brand hue.
- Blue (`#3b82f6`) appears only as a background glow on dark bands, never as text or UI.
- Selection: `rgba(242, 95, 41, 0.2)` background, `text-dark` foreground.

---

## 2. Typography

| Role | Family | Weights | Notes |
| --- | --- | --- | --- |
| Headings | Poppins | 400, 500, 600 | Self-hosted WOFF2 |
| Buttons and UI | Inter | 400, 500 | Self-hosted WOFF2 |
| Body | System stack | 400 | `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, ...` |
| Technical labels | `font-mono` | 400 | Timestamps, status strips only |

Never link to fonts.googleapis.com. All faces are local, `font-display: swap`.

### Scale
| Element | Size | Weight | Leading |
| --- | --- | --- | --- |
| Hero H1 | `clamp(2.4rem, 5.4vw, 4.5rem)` | 500 | `1.02`, `tracking-tight` |
| Dark-band H2 | `text-3xl` / `sm:text-4xl` / `lg:text-[52px]` | 500 | `1.06` |
| Section H2 | `text-2xl` / `md:text-[28px]` / `lg:text-4xl` | 600 | `leading-tight` |
| Card title | `text-base` | 500 | default |
| Body | `16px` | 400 | `1.5` |
| Lead paragraph | `text-base` / `lg:text-xl` | 400 | `leading-relaxed` |
| Eyebrow | `text-xs` / `sm:text-sm` | 500 | uppercase, `tracking-[0.18em]` |
| Badge or pill label | `text-[11px]` or `text-xs` | 500-600 | uppercase, `tracking-[0.18em]` |

### Headline pattern
Multi-line headlines break onto `<span class="block">` lines. One line is a gradient fill:
`bg-gradient-to-r from-brand-orange via-#FF9466 to-brand-orange` + `bg-clip-text text-transparent`.
The closing line drops to `text-white/95`. Maximum one gradient line per headline.

---

## 3. Layout and spacing

- **Content max width:** `1200px` (`--container-page`), via `Container.astro`.
- **Wide max width:** `1400px` for the header, hero and full-bleed dark bands.
- **Grid:** 12 columns, `gap: 0 16px` (`.io-grid`). Common split is `col-span-12 lg:col-span-7` + `lg:col-span-5`.

### Horizontal padding (`.section-padding`)
| Breakpoint | Padding |
| --- | --- |
| base | `1rem` |
| 640px+ | `1.5rem` |
| 1024px+ | `2.5rem` |
| 1280px+ | `5.5rem` |

### Vertical rhythm (`.section-spacing`)
| Breakpoint | Padding block |
| --- | --- |
| base | `5rem` |
| 768px+ | `6rem` |
| 1024px+ | `7.5rem` |

Dark feature bands go heavier: `py-20 md:py-28 lg:py-32`.

- Section heading block: `mb-12`; subtitle `mt-4`, capped at `max-w-2xl`.
- Body copy measure: `max-w-[640px]` on hero, `max-w-2xl` on centred blocks.
- Breakpoints to verify: 375, 768, 1280.

---

## 4. Components

### Button
Pill (`rounded-full`), Inter 500, inline-flex with a trailing arrow icon (`w-4 h-4`, arrow-right) that can be disabled.

| Size | Padding | Text |
| --- | --- | --- |
| sm | `px-5 py-2` | `text-sm` |
| md | `px-6 py-2.5` | `text-base` |
| lg | `px-8 py-3` | `text-lg` |

| Variant | Idle | Hover | Active |
| --- | --- | --- | --- |
| primary | `cta-bg`, white text | `cta-bg-hover`, shadow `0 6px 20px rgba(200,74,27,.35)` | `cta-bg-active`, shadow `0 2px 8px rgba(200,74,27,.25)` |
| secondary | transparent, 1px `text-dark` border | fills `text-dark`, white text | `text-near-black` |
| ghost | transparent, `brand-orange-text` | underline, no shadow | - |

All buttons lift on hover: `hover:-translate-y-0.5`, return on `active:translate-y-0`, `duration-200`.

### Card
White, 1px `surface-border`, `rounded-lg`. Padding `p-4` / `p-6` / `p-8` (sm/md/lg).
Hover (opt-in): `-translate-y-1` plus `--shadow-card-hover` = `0 8px 24px rgba(0,0,0,.08)`.
Service card: title in `brand-orange` 500, description in `text-card-blue` at `text-sm`.
No ordinal or step numbers on cards.

### Badge and pill
`rounded-full`, `px-3 py-1`, `text-xs` 500, uppercase, `tracking-wider`, `bg-brand-orange/10` + `text-brand-orange`.
Dark variant: `bg-brand-orange/15`, `border border-brand-orange/30`, with a `1.5px` pulsing dot.

### Eyebrow
Two forms:
1. Light sections: orange uppercase label at `text-sm`, `mb-2`.
2. Hero and dark bands: a `h-px w-10` orange rule, `gap-3`, then the uppercase label.

### Header
Fixed, `z-50`, `duration-300`. Hero pages: transparent with `border-white/10`. Elsewhere: `bg-white/95 backdrop-blur-sm` with `surface-border`, plus a `60px` spacer.
Nav bar height: `py-3` inside a `max-w-[1400px]` row.

### Dividers
`hr` and `.divider-list > * + *` are a single `1px solid surface-border` top border. No shadows used as separators.

---

## 5. Depth and background treatments

Dark sections are built from stacked absolute layers, in this order:

1. Photo or base gradient (`from-#1a1a2e/60 via-#0a0a0e to-#0f0f12`).
2. Two directional scrims on photos: `from-#0a0a0e/95 via-/80 to-/40` (horizontal) and `from-/70 via-transparent to-/95` (vertical).
3. Mesh orbs: 400-600px `rounded-full`, opacity `.04` to `.18`, `blur-[140px]` to `blur-[160px]`.
4. Dot grid: `radial-gradient(rgba(255,255,255,.08) 1px, transparent 1px)` at `38px 38px`.
5. Decorative Chinese glyph: Poppins 500, `text-[24rem]` to `text-[32rem]`, `text-white/[0.025]`, `hidden md:block`, parallax on scroll.

All decorative layers carry `aria-hidden="true"` and `pointer-events-none`.

Shadows are used sparingly and only in two places: card hover and button hover glow. Header scroll shadow is `0 1px 3px rgba(0,0,0,.08)`.

---

## 6. Motion

- Standard transition: `200ms`. Header and large state changes: `300ms`.
- Hover lift: `-translate-y-0.5` (buttons), `-translate-y-1` (cards).
- Scroll reveal via `data-reveal`, staggered with `data-reveal-delay="120"` increments.
- Parallax via `data-parallax="0.1"` on decorative glyphs.
- Live indicators use `animate-ping` and `animate-pulse` on 2px orange dots.
- `prefers-reduced-motion: reduce` collapses every animation and transition to `0.01ms` and disables smooth scroll. Any new motion must inherit this.
- `scroll-behavior: smooth` on `html`; `overflow-x: clip` on `html` and `body` so sticky positioning keeps working.

---

## 7. Imagery

- WebP only, max 1050px wide (2x for ~525px cards). No PNG or JPEG.
- Plain `<img>` tags with explicit `width` and `height`. No Astro image pipeline.
- Hero image: `loading="eager"`, `fetchpriority="high"`, `srcset` at 525w and 1050w.
- Everything below the fold: `loading="lazy"`, `decoding="async"`.
- Photography direction: photorealistic, grounded in China, dusk or low light for hero and dark bands.
- Icons: inline SVG, `stroke="currentColor"`, `stroke-width="2"`, round caps and joins, `w-3.5 h-3.5` in nav and `w-4 h-4` in buttons.

---

## 8. Accessibility

- Focus: `2px solid brand-orange` outline, `2px` offset, `2px` radius.
- Orange on white text uses `brand-orange-text` (`#B43E12`), not `#F25F29`.
- Decorative layers are always `aria-hidden`.
