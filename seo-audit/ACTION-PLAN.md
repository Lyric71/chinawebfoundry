# SEO Action Plan - ChinaWebFoundry

Generated 22 May 2026. Companion to `FULL-AUDIT-REPORT.md`. SEO Health Score: **73 / 100**.

Priorities: **Critical** (none found) > **High** (fix within 1 week) > **Medium** (within 1 month) > **Low** (backlog).

---

## Critical

None. The site is cleanly indexable with no penalty risk.

---

## High - fix within 1 week

### H1. Resolve the apex vs www domain conflict
**Problem:** `chinawebfoundry.com` 307-redirects to `www.chinawebfoundry.com`, but all canonicals, sitemap URLs, og:url and schema `@id` point to the apex.
**Fix (recommended - no code change):** In the Vercel dashboard, set `chinawebfoundry.com` as the **primary domain**. Vercel will then 301-redirect `www` -> apex, matching all existing code.
**Alternative (code change):** In `astro.config.mjs` set `site: 'https://www.chinawebfoundry.com'`, rebuild (this updates canonical/sitemap/og/schema), and ensure the apex->www redirect is a 301.
**Done when:** one host serves 200, the other 301-redirects to it, and canonical + sitemap + og + schema all match the 200 host.
**Effort:** 15 min (dashboard) or 30 min (code + deploy).

### H2. Fix the `/services` redirect
**Problem:** `vercel.json` redirects `/services` -> `/#OurServices` (homepage anchor) instead of the real `/services/` page.
**Fix:** in `vercel.json`, change the redirect:
```json
"redirects": [
  { "source": "/services", "destination": "/services/", "permanent": true }
]
```
**Effort:** 2 min.

### H3. Differentiate the homepage and `/web-agency-china/`
**Problem:** identical `<title>` on the homepage and `/web-agency-china/` (and the `/fr/` pair) - keyword cannibalisation.
**Decide first:** keep `/web-agency-china/` as a distinct landing page, or consolidate into the homepage.
- **If keeping it:** give it a distinct title, H1 angle and meta description. Example title: "Web agency in China: launch and run a site behind the Firewall | ChinaWebFoundry". Point internal anchor text deliberately - homepage owns the brand/head term, the landing page owns the longer-tail "web agency china" intent with a more conversion-focused angle.
- **If consolidating:** 301-redirect `/web-agency-china/` -> `/` and `/fr/agence-web-chine/` -> `/fr/`.
**Effort:** 30 min (differentiate) or 10 min (consolidate).

### H4. Add publication dates to all guides
**Problem:** none of the 20 guide articles have `publishedAt` / `updatedAt`; `Article` schema ships dateless.
**Fix:** add to each guide's frontmatter in `src/content/guides/` and `src/content/guides-fr/`:
```yaml
publishedAt: 2025-XX-XX
updatedAt: 2026-05-XX   # only where actually revised
```
Use realistic dates. The layout already renders `datePublished` / `dateModified` and a visible byline once these exist.
**Effort:** 1 hr.

### H5. Cut homepage page weight to under 1.5 MB
**Problem:** homepage is ~2.96 MB; four case-study images are 240-350 KB each.
**Fix:** re-export the oversized case-study WebP files (`snfchina-com-1`, `netk5-your-it-team-1`, `vcls-homepage-1`, `techne-cn-1`, `zeinley-homepage`):
```
npx sharp-cli -i input.webp -o output.webp -- resize 1050 --withoutEnlargement
```
Target ~80-130 KB each. Confirm below-the-fold images use `loading="lazy"`.
**Effort:** 45 min.

### H6. Rewrite the `llms.txt` opening to be stack-neutral
**Problem:** `public/llms.txt` opens "WordPress agency... We build and maintain WordPress websites" - the first thing AI engines read.
**Fix:** replace the title + summary + first paragraph. Suggested:
```
# ChinaWebFoundry

> Web agency based in Shanghai. We plan, build, grow and run websites for
> international brands operating in mainland China. Senior team, 15+ years
> on the ground, native Chinese speakers, no offshore handover.

ChinaWebFoundry handles strategy, ICP filing, China hosting on Alibaba Cloud,
Baidu SEO, native Chinese content, AI-search visibility on DeepSeek/Doubao/
Kimi/Wenxin, mobile-first UX, and ongoing maintenance. Technology is chosen
per project - WordPress for content-heavy builds, Astro for performance-
critical or headless setups. One team accountable for the whole China web
presence, end to end.
```
Also recheck the case-study lines lower in the file for stack-led wording.
**Effort:** 15 min.

---

## Medium - fix within 1 month

### M1. Add Article + BreadcrumbList schema to case studies
`work/[slug].astro` and `fr/work/[slug].astro` pass no `jsonLd`. Reuse the `GuideLayout` pattern: emit `Article` (headline, description, image, author, publisher, `mainEntityOfPage`) and `BreadcrumbList` (Home > Work > [case study]). 14 pages benefit. **Effort:** 1 hr.

### M2. Shorten guide and case-study title templates
Both run past 100 characters. In `GuideLayout.astro` and `work/[slug].astro`, drop the middle segment:
- Guide: `{title} | ChinaWebFoundry`
- Case study: `{title} | ChinaWebFoundry`
Trim the longest source titles too (e.g. the Bassetti case-study title). **Effort:** 30 min.

### M3. Add security headers
Extend the `headers` array in `vercel.json`:
```json
{
  "source": "/(.*)",
  "headers": [
    { "key": "X-Content-Type-Options", "value": "nosniff" },
    { "key": "X-Frame-Options", "value": "SAMEORIGIN" },
    { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
    { "key": "Permissions-Policy", "value": "geolocation=(), camera=(), microphone=()" },
    { "key": "Strict-Transport-Security", "value": "max-age=63072000; includeSubDomains" }
  ]
}
```
Add a `Content-Security-Policy` once you have audited inline scripts/styles (Astro inlines some). **Effort:** 30 min.

### M4. Fix the contact page H1
Change "Have a question about WordPress in China?" to a stack-neutral line, e.g. "Talk to a web agency that works inside China." **Effort:** 5 min.

### M5. Standardise the experience claim
Pick one figure and one meaning. Decide whether the headline number is agency tenure, founder career, or team experience, then use it consistently across the homepage, `/web-agency-china/`, `who-we-are`, `llms.txt` and both languages. **Effort:** 30 min.

### M6. Sweep service and template copy for stack-neutral language
Service descriptions in `src/content/services/` (and `-fr`) and the case-study CTA in `work/[slug].astro` lead with "WordPress site". Rephrase to outcome / "website" language; mention WordPress or Astro as the chosen tool, not the default. **Effort:** 1-2 hrs.

### M7. Add sitemap hreflang to the asymmetric landing pages
`/web-agency-china/` and `/fr/agence-web-chine/` lack `xhtml:link` alternates and `priority` in the sitemap because their slugs differ. Add an explicit alternates mapping (or matching slugs) so the sitemap is uniform. HTML hreflang is already correct. **Effort:** 30 min.

### M8. Convert ~40-50% of guide H2s to question form
"Baidu by the numbers" -> "How big is Baidu's search market?" etc. Improves AI-engine query matching across all guides. **Effort:** 2-3 hrs.

---

## Low - backlog

- **L1.** Add `llms-full.txt` with full guide text for deep-crawl AI engines.
- **L2.** Strengthen Organization `sameAs` with the brand's own external profiles (directories, Crunchbase, a Baidu Baike entry once created).
- **L3.** Add `AboutPage` + team `Person` schema to `who-we-are`.
- **L4.** Enforce one trailing-slash form site-wide.
- **L5.** Tighten French meta descriptions over ~160 chars (e.g. `/fr/agence-web-chine/`).
- **L6.** Clarify the `beyondbordergroup.com` contact email (parent-company note) or move to a `@chinawebfoundry.com` address.
- **L7.** Add descriptive `alt` text to guide/case-study images that illustrate a concept.
- **L8.** Add a "what drives the cost of a China website" guide - high-intent, currently unanswered.
- **L9.** Review the 214 KB CSS file for unused Tailwind utilities.
- **L10.** Build off-site authority (digital PR, niche directories, Baidu ecosystem) - likely the biggest medium-term growth lever; commission a dedicated backlink review.

---

## Suggested sequence

1. **This week:** H2, H6, H4 (fast, isolated edits) -> then H1, H3, H5.
2. **Next:** M1-M4 (schema, titles, headers, H1 copy) - one focused PR.
3. **This month:** M5-M8 (positioning sweep, sitemap, GEO headings).
4. **Backlog:** L1-L10, with L10 (off-site authority) scoped as its own project.

Re-run the audit after the High items ship. With H1-H6 and M1-M4 done, the projected score moves into the low-to-mid 80s. Configure `GOOGLE_API_KEY` before the re-run so Core Web Vitals field data is included.
