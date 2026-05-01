# ChinaWebFoundry - Project Context for Claude Code

## MANDATORY READING - Copywriting Voice
Before generating, editing, or revising ANY user-facing copy on this project (page content, hero text, headings, button labels, microcopy, blog/guide articles, meta descriptions, og:tags, alt text, email copy, social posts, marketing prose, French translations included), you MUST first read [.claude/anti-ai-writing-style.md](.claude/anti-ai-writing-style.md) in full and apply its rules.

This is non-negotiable and applies to:
- Any new copy you write
- Any rewrite or edit of existing copy
- Any translation between English and French
- Any AI-generated draft you are reviewing

The banned words, banned phrases, and banned structures (especially Section 3F: negative parallelisms / reframe constructions) are HARD RULES. Pure code edits with no copy involved are exempt.

## Project Overview
ChinaWebFoundry is a marketing website for a WordPress agency in China
that helps international companies launch and maintain WordPress websites
behind the Great Firewall. The site targets English-speaking decision-makers
located outside of China.

## Tech Stack
- **Framework:** Astro 5.x (static site generation)
- **Styling:** Tailwind CSS 4.x (using @theme in global.css, not tailwind.config.mjs)
- **Deployment:** Vercel (static adapter)
- **Content:** Astro Content Collections (Markdown + frontmatter)
- **Language:** TypeScript (strict mode)
- **Fonts:** Poppins (headings), Inter (buttons), system stack (body)

## Key Design Tokens (defined in src/styles/global.css @theme)
- Brand Orange: #F25F29 (CTAs, accent links, service card titles)
- Hero Red: #EF4444 (hero H1 only)
- Dark Text: #212121 (headings)
- Body Text: #333333 (paragraphs)
- Card Blue: #344480 (service card descriptions)
- White: #FFFFFF (backgrounds, button text)

## Typography
- Headings: Poppins, self-hosted WOFF2 (weights: 400, 500, 600)
- Buttons: Inter, self-hosted WOFF2 (weights: 400, 500)
- Body: system sans-serif stack
- CRITICAL: Never link to fonts.googleapis.com - all fonts must be self-hosted
  because Google Fonts are blocked in China.

## Brand & Content Rules
- Brand name is "ChinaWebFoundry" - one word, PascalCase
- "WordPress" always has capital W and capital P
- "Great Firewall" is capitalised as a proper noun
- "Baidu" is always capitalised
- "ICP" is always uppercase
- Voice: Expert, direct, practical, grounded. No buzzwords.
- Use British English spelling (optimise, localise, colour)
- CRITICAL: Never use em dashes anywhere - not in content, code, comments, or copy. Use hyphens (-) or rewrite the sentence.

## Architecture Conventions
- All components go in `src/components/` organised by scope:
  - `global/` - site-wide (Header, Footer, Nav)
  - `ui/` - reusable primitives (Button, Card, Container)
  - `home/` - homepage-specific sections
  - `pages/` - shared components used across non-home pages
- Page layouts extend `BaseLayout.astro` → `PageLayout.astro`
- Service pages use `ServiceLayout.astro` and pull from content collections
- Data that drives UI (nav items, problem cards, trust points) lives in `src/data/`
- Static assets (images, fonts) go in `public/`
- Processed/optimised images go in `src/assets/images/` (Astro image pipeline)

## Content Collections
Services, testimonials, team members, and FAQs are Astro content collections
defined in `src/content/config.ts`. Each service has its own markdown file
with structured frontmatter (title, slug, description, icon, order).

## Component Patterns
- Use Astro components (.astro) for everything static
- Use `class:list` for conditional Tailwind classes
- Button component accepts `variant` prop: "primary" | "secondary" | "ghost"
- Card component accepts `hover` prop for lift animation
- Container component wraps content at max-w-[1200px] with responsive padding
- SectionHeading component handles eyebrow + title + subtitle pattern

## SEO
- Primary keywords: "wordpress china", "agency wordpress china"
- Every page needs: unique <title>, meta description, canonical URL, og:tags
- Sitemap auto-generated via @astrojs/sitemap
- robots.txt in public/

## Performance Constraints
- Target: LCP < 2.5s, FCP < 1.5s, total page weight < 1.5MB
- Self-host all fonts and assets - no external CDN dependencies
- Use Astro Image component for automatic optimisation
- Lazy-load all below-fold images
- No Google services (Analytics, Fonts, reCAPTCHA, Maps)
- CRITICAL: All images must be WebP format, max 1050px wide (2x retina for ~525px cards). When adding new case study or content images, convert PNGs/JPGs to WebP and resize with: `npx sharp-cli -i input.png -o output.webp -- resize 1050 --withoutEnlargement`
- Never commit PNG or JPEG images to `public/images/` - always convert to WebP first

## Image Generation
- When a page or component needs a new image asset, generate it directly with `scripts/generate-image.mjs` rather than asking the user to supply one or leaving a placeholder.
- Usage: `node scripts/generate-image.mjs --name <descriptive-kebab-case-name> "<detailed prompt>"`
- The script calls Wavespeed AI (nano-banana-2), downloads the result, optimises it to WebP, and saves it to `public/images/<name>.webp` automatically. WEBP_QUALITY=80, max width 1600px.
- Always pass `--name` with a descriptive kebab-case filename (e.g. `hero-baidu-seo-shanghai`), never let it fall back to the `generated-<timestamp>.webp` default.
- Write detailed, specific prompts: subject, setting, style, lighting, mood, framing. Photorealistic and grounded in China where relevant.
- Requires `WAVESPEED_API_KEY` in `.env` (already configured locally).

## Testing
- Run `npm run build` before committing to catch build errors
- Run `npx astro check` for TypeScript validation
- Verify responsive at 375px (mobile), 768px (tablet), 1280px (desktop)

## File Naming
- Components: PascalCase (e.g. ServiceCard.astro)
- Pages: kebab-case (e.g. who-we-are.astro)
- Content markdown: kebab-case (e.g. strategy-audit.md)
- Data files: camelCase (e.g. trustPoints.ts)
- CSS files: kebab-case (e.g. global.css)

## Git Conventions
- Commit messages: conventional commits (feat:, fix:, chore:, docs:, style:)
- Branch naming: feature/page-name, fix/description
- Always run build before pushing
