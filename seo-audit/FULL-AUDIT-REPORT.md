# Full SEO Audit - ChinaWebFoundry

- **Site:** https://www.chinawebfoundry.com (serving host) / https://chinawebfoundry.com (configured host)
- **Audit date:** 22 May 2026
- **Business type:** Web agency (ProfessionalService) - bilingual EN/FR, Astro static site on Vercel
- **Pages in sitemap:** 84 URLs (42 EN + 42 FR)
- **Audit method:** Live crawl + response-header inspection + source-code review + GEO specialist agent. PageSpeed Insights field/lab data unavailable (keyless API quota exhausted).

---

## Executive Summary

### SEO Health Score: 73 / 100 (Good)

| Category | Score | Weight | Weighted |
|----------|-------|--------|----------|
| Technical SEO | 74 | 22% | 16.3 |
| Content Quality | 78 | 23% | 17.9 |
| On-Page SEO | 72 | 20% | 14.4 |
| Schema / Structured Data | 76 | 10% | 7.6 |
| Performance (CWV) | 62 | 10% | 6.2 |
| AI Search Readiness | 71 | 10% | 7.1 |
| Images | 72 | 5% | 3.6 |
| **Total** | | | **73.1** |

This is a well-engineered site. The Astro static architecture, self-hosted fonts, bilingual hreflang setup, content depth, and schema coverage are all genuinely strong. **No Critical issues were found - the site is cleanly indexable and carries no penalty risk.** The score is held back by a domain-canonicalisation tangle, a redirect that diverts the `/services` URL, keyword cannibalisation between two pages, page weight running ~2x the project's own target, and a recurring drift away from the stack-neutral brand positioning.

### Top 5 Issues

1. **Domain canonicalisation conflict.** The apex `chinawebfoundry.com` issues a 307 (temporary) redirect to `www.chinawebfoundry.com`, but every canonical tag, sitemap URL, og:url and schema `@id` points to the apex. Crawlers receive contradictory signals about the real home of every page.
2. **`/services` redirects to a homepage anchor.** `/services` returns a 307 to `/#OurServices` instead of the real services index at `/services/`. The natural services URL never reaches the services page.
3. **Duplicate title tag.** The homepage and `/web-agency-china/` share the exact same `<title>` ("Web agency in China for international brands | ChinaWebFoundry"). Same applies to the French pair. Two pages compete for one query.
4. **Page weight ~2.96 MB on the homepage** against the project's stated 1.5 MB target, driven by oversized case-study images (four files at 240-350 KB each).
5. **Stack-neutral positioning drift.** The `llms.txt` summary, the contact page H1, service descriptions and case-study copy all lead with "WordPress", contradicting the site's own "web agency" positioning rule.

### Top 5 Quick Wins

1. Change the `/services` redirect target to `/services/` and make it permanent - 1 line in `vercel.json`.
2. Rewrite the `/web-agency-china/` title and meta description so they differ from the homepage.
3. Rewrite the `llms.txt` opening summary to be stack-neutral.
4. Add a security-headers block to `vercel.json` (CSP, X-Content-Type-Options, X-Frame-Options, Referrer-Policy).
5. Fix the contact page H1 ("Have a question about WordPress in China?" -> stack-neutral).

---

## 1. Technical SEO - 74 / 100

### Working well
- HTTPS enforced, HSTS present (`max-age=63072000`, 2 years).
- Fully pre-rendered static HTML (Astro SSG) - no JavaScript-rendering risk for crawlers.
- `robots.txt` is clean and references the sitemap. All crawlers, including AI crawlers, are allowed.
- Proper 404 handling - unknown URLs return a genuine 404 status.
- Clean, readable URL structure with consistent trailing slashes.
- Vercel edge caching active (`x-vercel-cache: HIT`); fonts cached 1 year immutable, images 30 days.
- `/sitemap.xml` rewrite to `/sitemap-index.xml` works.

### Issues

**[HIGH] Domain canonicalisation conflict (apex vs www).**
- `https://chinawebfoundry.com/` -> **307** -> `https://www.chinawebfoundry.com/` (the 307 is a *temporary* redirect).
- `http://chinawebfoundry.com/` -> 308 -> `https://chinawebfoundry.com/` -> 307 -> www (a 3-hop chain for HTTP apex visitors).
- Every on-page canonical, every `<loc>` in the sitemap, every `og:url`, the `robots.txt` `Sitemap:` line and every schema `@id` use the **apex** host. The site only ever returns 200 on **www**.
- A 307 tells Google "keep treating the apex as the address". The canonical tags say the same. But the apex never serves a 200. This is a contradictory signal set that wastes crawl budget and delays canonical consolidation.
- **Root cause:** `astro.config.mjs` sets `site: 'https://chinawebfoundry.com'` while the Vercel project has `www` configured as the primary domain.
- **Fix (recommended, minimal change):** keep the apex as canonical (all code already expects it). In the Vercel dashboard, set `chinawebfoundry.com` as the primary domain so `www` redirects to apex with a 301. No code change needed.
- **Alternative:** adopt www as canonical - change `site` in `astro.config.mjs` to `https://www.chinawebfoundry.com`, which fixes canonical/sitemap/og/schema in one move, and confirm the apex->www redirect is a 301.
- Either path is fine. The non-negotiable is: one host, everything aligned, and a **301** rather than a 307.

**[HIGH] `/services` redirects to the homepage instead of the services page.**
- `vercel.json` contains `{ "source": "/services", "destination": "/#OurServices", "permanent": false }`.
- Confirmed live: `/services` -> 307 -> `/#OurServices`. The real services index at `/services/` returns 200 and sits in the sitemap at priority 0.9.
- Any inbound link or typed URL using the natural `/services` form is diverted to a homepage fragment, away from the actual services landing page. This looks like leftover config from before the `/services/` page existed.
- **Fix:** change the destination to `/services/` and set `"permanent": true`. Or remove the redirect entirely and let trailing-slash handling resolve `/services` to `/services/`.

**[MEDIUM] Security headers missing.**
- Present: `Strict-Transport-Security`.
- Missing: `Content-Security-Policy`, `X-Content-Type-Options: nosniff`, `X-Frame-Options` (or CSP `frame-ancestors`), `Referrer-Policy`, `Permissions-Policy`.
- Not a ranking factor directly, but they are a baseline trust and safety signal and trivial to add. `vercel.json` already has a `headers` array - extend it with a global rule. See the Action Plan for a ready-to-paste block.

**[LOW] HSTS could be stronger.** Add `includeSubDomains` and consider `preload`.

**[LOW] Trailing slash not enforced.** `/work` and `/wordpress` return 200 without redirecting to the trailing-slash form. Canonical tags dedupe this, so impact is minimal, but enforcing one form site-wide is cleaner.

---

## 2. Content Quality - 78 / 100

### Working well
- Genuine subject-matter depth: 10 long-form guide articles, 7 case studies, 10 service pages, all substantive.
- Strong topical authority in a defensible niche (China web, Great Firewall, Baidu, ICP licensing, GEO).
- Founder authority is real and surfaced (Cyril Drouin, named author on guides, LinkedIn + Substack in schema).
- Guides are well-structured for both readers and AI: sticky table of contents, comparison tables, blockquote pull-outs, front-loaded answers.
- Bilingual EN/FR, written natively rather than machine-translated.
- British English spelling, no em dashes - consistent with house style.

### Issues

**[HIGH] No publication or updated dates on any guide.**
- All 20 guide articles (10 EN + 10 FR) have no `publishedAt` / `updatedAt` in frontmatter. Confirmed: zero occurrences across `src/content`.
- The schema and `GuideLayout.astro` already support these fields and emit `datePublished` / `dateModified` and a visible byline date when present. They are simply never filled in.
- Consequence: the `Article` JSON-LD ships with no dates, and no date is visible to readers. For a niche with fast-moving regulation (the PIPL guide references "mandatory compliance audits since May 2025"), undated content is an E-E-A-T and freshness weakness for Google, Bing and AI engines alike.
- **Fix:** populate `publishedAt` (and `updatedAt` where revised) in all 20 guide frontmatter blocks.

**[MEDIUM] Experience claims are inconsistent across pages.**
- Homepage and `who-we-are` meta: "20 years on the ground". French homepage: "Vingt ans".
- `/web-agency-china/` meta and `llms.txt`: "15+ years".
- Founder bio elsewhere references "25 years in digital".
- These may all be defensible (agency tenure vs founder career vs team experience), but a visitor or crawler sees different numbers for what looks like the same claim. Pick one figure per claim and state plainly what it refers to.

**[MEDIUM] Stack-neutral positioning drift in body copy.**
- Service content leads with the stack: e.g. `services/baidu-seo.md` description - "We optimise your WordPress site's structure..."; body - "We optimise your WordPress site specifically for Baidu".
- Case-study CTA in `work/[slug].astro` - "what it takes to make your WordPress site work in China".
- The project's own rule (CLAUDE.md, `feedback_stack_neutral`) is that the brand positions as a "web agency", with WordPress and Astro chosen per project. Homepage and landing-page copy follow this; deeper pages do not. Sweep service descriptions and shared templates for stack-led phrasing.

**[LOW] No pricing / cost content.** "What does a China website cost" is a high-intent buyer question with no page answering it, even at the "what drives cost" level.

---

## 3. On-Page SEO - 72 / 100

### Working well
- Titles generally well-formed and keyword-led ("Web agency in China...", "Baidu SEO for international brands in China...").
- Meta descriptions present, mostly within range, written for humans.
- Exactly one H1 per page across every page sampled.
- hreflang `en` / `fr` / `x-default` present in the `<head>` of every page, including the asymmetric-slug landing pages.
- Open Graph and Twitter Card tags complete, with a default OG image.

### Issues

**[HIGH] Duplicate title tag - homepage vs `/web-agency-china/`.**
- Both serve the identical `<title>`: "Web agency in China for international brands | ChinaWebFoundry".
- The French pair (`/fr/` and `/fr/agence-web-chine/`) is identical too: "Agence web en Chine pour marques internationales | ChinaWebFoundry".
- Two pages targeting one query with one title is classic cannibalisation. Google must pick a winner and may split signals.
- **Decision needed:** which page owns the head term "web agency in China"? The homepage is the stronger, better-linked candidate. If `/web-agency-china/` is kept as a dedicated SEO landing page, it must be differentiated - a distinct title, distinct H1 angle, distinct meta description - or consolidated into the homepage and 301-redirected. See SXO section.

**[MEDIUM] Title templates exceed 100 characters.**
- Guide template `{title} | China Web Guide | ChinaWebFoundry` produces titles up to 99 chars (ICP guide).
- Case-study template `{title} | Case Study | ChinaWebFoundry` produces up to 101 chars (Bassetti).
- Affects all 10 guides and all 7 case studies (34 pages with FR). Google truncates around 60 characters / 580 px; the brand and the middle segment get cut.
- **Fix:** drop the middle segment, or shorten ("China Web Guide" -> nothing; "Case Study" -> nothing), and tighten the longest source titles.

**[MEDIUM] Contact page H1 is off-positioning.** H1 reads "Have a question about WordPress in China?" while the page title correctly says "Contact a web agency in Shanghai". The H1 should be stack-neutral.

**[LOW] Some French meta descriptions run long** (e.g. `/fr/agence-web-chine/` at 181 chars) and will truncate.

**[LOW] `/web-agency-china/` and `/fr/agence-web-chine/` lack sitemap-level hreflang and priority.** Their HTML hreflang is correct, but in `sitemap-0.xml` these two entries have only `<loc>` and `<lastmod>` - no `xhtml:link` alternates, no `priority`/`changefreq` - because the @astrojs/sitemap i18n pairing keys on identical paths and these two have different slugs. HTML hreflang is the primary signal so impact is low, but it is the one inconsistency in an otherwise uniform sitemap.

---

## 4. Schema / Structured Data - 76 / 100

### Working well
- Sitewide `Organization` + `ProfessionalService` and `WebSite` JSON-LD on every page, with address, founder, `areaServed`, `knowsLanguage`.
- Service pages carry `Service` schema; `/services/baidu-seo/` adds a `FAQPage` (8 Q&A).
- Guide pages carry well-formed `Article` + `BreadcrumbList`, with `author` as a `Person`.
- The keyword landing pages carry a rich `Service` + `OfferCatalog` + `BreadcrumbList` set.
- JSON-LD is valid and `@id` references are internally consistent.

### Issues

**[MEDIUM] Case studies have no Article or BreadcrumbList schema.**
- `work/[slug].astro` passes only `title` and `description` to the layout - no `jsonLd` prop. Confirmed on `/work/bassetti-wordpress-china/`: only the sitewide Organization/WebSite blocks render.
- The 7 case studies (14 with FR) are nested URLs and genuine content pieces - they should emit `Article` (or `CreativeWork` / `CaseStudy`) plus `BreadcrumbList`, exactly as guides already do. The `GuideLayout` pattern can be reused.

**[MEDIUM] Schema `@id` / `url` values use the apex host** while pages serve on www. Resolves once the domain-canonicalisation issue (Section 1) is fixed.

**[LOW] `who-we-are` has no `AboutPage` or team `Person` schema.** Adding `Person` entries for named team members would strengthen the entity graph.

**[LOW] Organization `sameAs` is thin** - it points only to the founder's LinkedIn. Organization-level `sameAs` should point to the brand's own external profiles (directory listings, Crunchbase, and for this market a Baidu Baike entry once one exists).

**Note on FAQPage:** Google restricted FAQ rich results to government and healthcare sites (Aug 2023). The existing `FAQPage` on the Baidu SEO page is fine to keep - it still aids AI/LLM extraction - but treat it as an informational asset, not a rich-result play, and do not add `FAQPage` elsewhere expecting Google rich results.

---

## 5. Performance (Core Web Vitals) - 62 / 100

PageSpeed Insights field and lab data could not be retrieved - the keyless PSI v5 API quota was exhausted at audit time. The assessment below is from direct asset measurement and HTML inspection. **Recommendation: configure a `GOOGLE_API_KEY` and re-run, or check Search Console / CrUX for field data.**

### Measured

**[HIGH] Homepage total weight ~2.96 MB - roughly 2x the project's 1.5 MB target.**
- HTML: 258 KB. CSS: 214 KB (one file; compresses well over the wire). Fonts: ~39 KB. Images: ~2.45 MB across 27 assets.
- The bulk is case-study screenshots loaded in the homepage success-stories section:
  - `snfchina-com-1.webp` - 348 KB
  - `netk5-your-it-team-1.webp` - 318 KB
  - `vcls-homepage-1.webp` - 301 KB
  - `techne-cn-1.webp` - 241 KB
  - `zeinley-homepage.webp` - 159 KB
- CLAUDE.md mandates WebP at max 1050 px wide (~525 px display). A correctly sized card image at quality 80 should land around 80-130 KB. These four files are 2-3x that, so they are either oversized in dimensions or set at too high a quality.
- **Fix:** re-export the case-study images with `npx sharp-cli -i input -o output.webp -- resize 1050 --withoutEnlargement` (quality ~80). This alone should remove well over 1 MB and bring the homepage close to target.

### Working well
- Static pre-rendered HTML, served from Vercel's edge.
- Fonts self-hosted as WOFF2 and preloaded; no Google Fonts.
- No third-party / Google scripts (Vercel Web Analytics only).
- All images already WebP.

### To verify
- Confirm below-the-fold images (case studies, guide cards) use `loading="lazy"`; confirm the LCP element (likely the hero text or its background) is not lazy-loaded.
- The 214 KB CSS file is large for a single stylesheet; it gzips well but is worth a glance for unused Tailwind utilities.

---

## 6. AI Search Readiness (GEO) - 71 / 100

Full detail from the GEO specialist pass. Headlines:

### Working well
- All AI crawlers allowed in `robots.txt`.
- `/llms.txt` exists and is well-structured (pages, guides, case studies catalogued).
- Guides are highly citable: ~100-180-word passages, blockquote "citation handles", comparison tables with dated figures, front-loaded answers.
- Static SSR HTML - ideal for AI crawlers and for Baiduspider.

### Issues

**[HIGH] `llms.txt` opens with "WordPress agency".**
- The summary line - the single most-read part of the file - reads "WordPress agency based in Shanghai. We build and maintain WordPress websites...". AI engines will describe the brand as a WordPress agency, contradicting the site's positioning. A stack-neutral rewrite is in the Action Plan.

**[MEDIUM] No `llms-full.txt`.** A full-content companion file would help Perplexity and deep-crawl engines ingest the guide library in one request. Notable for a brand that sells GEO services.

**[MEDIUM] Guide H2s are mostly declarative.** Converting 40-50% to question form ("How big is Baidu's search market?" rather than "Baidu by the numbers") maps headings to conversational AI queries.

**[MEDIUM] Weak external entity anchoring.** No Wikipedia / Wikidata / Crunchbase for the brand, and for this market no Baidu Baike entry. AI engines cite entities they can cross-reference.

**[LOW] `llms.txt` lists a contact email on a different domain** (`hello@beyondbordergroup.com`). Add a one-line note that Beyond Border Group is the parent company, or use a `@chinawebfoundry.com` address.

---

## 7. Images - 72 / 100

### Working well
- Every image is WebP.
- No image is missing the `alt` attribute entirely across the sampled pages.
- The footer logo has explicit `width`/`height` (no layout shift); case-study gallery images have descriptive alt text.

### Issues
- **[MEDIUM] Oversized files** - see Section 5. The case-study screenshots breach the project's own 1050 px / quality-80 rule.
- **[LOW] Decorative `alt=""` on potentially informative images.** Guide and case-study hero images use empty alt. For purely decorative heroes this is correct, but where an image illustrates a concept (a comparison chart, a process diagram) a descriptive alt adds context for crawlers and AI.

---

## 8. Sitemap & Indexability

- `sitemap-index.xml` -> `sitemap-0.xml`, 84 URLs, well-formed, valid namespaces.
- Per-URL `lastmod` from source-file mtimes, sensible `priority` / `changefreq` by route type.
- No index bloat: no programmatic location-page sprawl, no thin doorway pages. Quality gates pass comfortably.
- hreflang alternates present for all paired EN/FR pages **except** `/web-agency-china/` and `/fr/agence-web-chine/` (see Section 3).
- All `<loc>` values use the apex host (ties to Section 1).

---

## Methodology & Limitations

- Live data: HTTP headers, redirect chains, robots.txt, both sitemaps, `llms.txt`, and 10 representative pages across every page type, fetched 22 May 2026.
- Source review: `astro.config.mjs`, `vercel.json`, `content.config.ts`, layouts, `work/[slug].astro`, `GuideLayout.astro`, `Footer.astro`, and guide/service content.
- Not available this run: PageSpeed Insights field/lab data (keyless quota exhausted), Search Console indexation data, GA4 traffic, backlink data (no Moz/Bing keys; Common Crawl cache empty for this domain). Configure `GOOGLE_API_KEY` and Search Console access for a performance- and indexation-complete re-run.
- Backlink profile was not measured. For a relatively new domain in a niche vertical, off-site authority building (digital-PR, niche directories, the Baidu ecosystem) is likely the biggest medium-term growth lever and warrants its own review.
