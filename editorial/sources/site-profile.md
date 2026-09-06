# Site profile cache: chinawebfoundry.com

Replaces the CreateArticle Step 0 fetch. Read this instead of fetching the
site on every run.

**Refresh on the first working day of each month.** Ask Claude:
`Refresh sources/site-profile.md from the repo and the live site.`

Last refreshed: 2026-09-06 (from the repo; the repo is the ground truth)
Next refresh due: 2026-10-01

## Positioning

A web agency in China. The Shanghai team plans, builds, files, hosts and runs
websites inside mainland China for international companies. WordPress and
Astro are two answers to different questions, chosen per project, never a
default and a fallback. The positioning word is "web agency" and the site's
own phrase is "websites in China". The keyword family is stack-neutral: web
agency china, china web agency, web agency shanghai, and the French, Spanish
and German equivalents.

Four locales: English (canonical), French, Spanish, German. British English
spelling in the English copy.

Voice: expert, direct, practical, grounded. No buzzwords. Read
`.claude/anti-ai-writing-style.md` for the banned list.

## Pricing, as published

None. The site publishes no prices and no package tiers. PLAN.md open item 3
(the pricing decision) gates B2 in week 19. Until it is taken, no article
quotes a CWF figure.

## Live page inventory, English

**Core**
`/` `/who-we-are/` `/contact/` `/services/` `/work/` `/resources/`
`/resources/china-web-guide/` `/resources/faq/` `/china-site-scanner/`
`/astro/` `/wechat/` `/privacy-policy/` `/terms-of-service/`
`/cookie-policy/`

**Services (10)**, `src/content/services/`
`/services/strategy-audit/` `/services/china-hosting/`
`/services/china-migration/` `/services/technical-integration/`
`/services/plugins-extensions/` `/services/ux-ui-design/`
`/services/chinese-content/` `/services/baidu-seo/` `/services/geo/`
`/services/maintenance-support/`

**Money pages (3)**
`/web-agency-china/` `/wordpress-agency-china/` `/wordpress-in-china/`
`/website-in-china/` is reserved by Move 1: live in four locales, `noindex,
follow`, excluded from the sitemap. M1 in week 1 ships the real copy and
removes both.

**Case studies (18)**, `src/content/casestudies/`, route `/work/{slug}/`
bassetti-wordpress-china, bbchien-dog-media-platform,
bearingbridge-ai-china-website, bearingbridge-cross-border-website,
beyondbridge-bilingual-website, compass-china-database-platform,
deuceladder-tennis-ladder-platform, hubstudio-china-website,
imhof-woocommerce-china, netk5-wordpress-china, nuvora-studio-china-website,
snf-china-wordpress, techne-wordpress-china, thechinapath-china-website,
theredscroll-china-website, vcls-china-website,
visitmoganshan-china-travel-guide, zeinley-bilingual-wordpress

T3-01 to T3-05 upgrade five of these (bassetti, snf, imhof, zeinley, compass).
T3-06 to T3-10 add five new ones.

**Guides (33)**, `src/content/guides/`, route `/resources/china-web-guide/{slug}/`
baidu-account-foreign-company, baidu-account-ownership,
baidu-ads-account-foreign, baidu-aicaigou-b2b, baidu-fast-inclusion-gone,
baidu-index-traffic-data, baidu-keyword-research-tools, baidu-merchant-center,
baidu-product-data-destinations, baidu-product-feed,
baidu-search-resource-platform, baidu-seo-ranking-in-china,
baidu-site-verification, baidu-structured-data, baidu-verification-failed,
baidu-verification-scope, baiduspider-firewall, china-content-marketing-strategy,
china-data-privacy-pipl-dsl, china-search-landscape-beyond-baidu,
china-website-hosting-guide, china-website-localisation,
choosing-web-agency-china, google-analytics-china,
great-firewall-what-it-blocks, host-website-in-china,
icp-licence-filing-foreign-companies, is-wordpress-blocked-in-china,
mobile-first-design-china, submitting-urls-to-baidu,
vetting-a-wordpress-agency-china, woocommerce-china-store-guide,
wordpress-hosting-china

All 33 exist in `guides-fr`, `guides-es` and `guides-de` too, with localized
slugs registered in `src/i18n/routes.ts` (`guideSlugs`). Highest `order`
value on 2026-09-06: 34 (`is-wordpress-blocked-in-china`). New guides take
the next number; the home page teaser shows the three highest.

**Already shipped from this plan, do not redo:** `is-wordpress-blocked-in-china`,
`wordpress-hosting-china`, `choosing-web-agency-china`. T6-02, T6-03 and
T6-04 upgrade them.

## Existing article shapes worth matching

`is-wordpress-blocked-in-china` (published 29 August 2026) is the model for
the A cluster and for T2: the answer in the first sentence, a dated "last
checked from mainland vantage points" line near the top, a dependency table
with status and consequence columns, blockquote citations with publisher and
date, sideways links inside sentences. Its Google Fonts row and paragraph
currently carry the flat claim F6 retracts; T6-02 fixes that in week 1.

`bassetti-wordpress-china` is the model for case study shape (frontmatter,
the client table, section rhythm), though the six-section template from
PLAN.md section 7 replaces its heading structure.

## Guide layout behaviour (`src/layouts/GuideLayout.astro`)

- Renders `title` as H1, `subtitle` in brand orange under it, `summary` as the
  meta description and `og:description`.
- Appends ` | China Web Guide | ChinaWebFoundry` to the `<title>`. T6-01
  removes this at the template level and adds a build-time 52-character
  assertion.
- Builds the sticky TOC from `##` headings only.
- Emits Article and BreadcrumbList JSON-LD, with the author from the `team`
  collection as a Person. FAQPage is not emitted by the layout; where a brief
  asks for it, the publish step adds it.
- Shows `publishedAt` and, if different, `updatedAt`.
- The `inLanguage` map covers en, fr and es only; `de` falls through to
  undefined. Worth fixing inside T6-01 since that work order already touches
  the layout. Flag it in the T6-01 change list.
- Blockquotes render with an orange left border. Tables get rounded borders
  and a light header row. Lists get orange dot bullets.

## Technical setup already in place

Static Astro on Vercel. `passthroughImageService()`, Vercel Image
Optimization off: every image is served byte-for-byte as committed, so the
pre-commit hook (`scripts/check-images.mjs`) rejects non-WebP, anything over
1050px wide, anything over 350KB under `public/images/`.

Google Analytics 4 runs through the first-party `/ga.js` endpoint that serves
an inert stub to mainland visitors. hCaptcha on the contact form. Resend for
transactional email. IndexNow key file deployed; `npm run indexnow` submits
the sitemap after a deploy. The pre-push hook runs `npm run build`.

Fonts self-hosted (Poppins headings, Inter buttons). No Google Fonts, no
external CDN. This is first-hand experience of exactly what T2-01 is about.

The China Site Scanner (`/china-site-scanner/`, `src/pages/api/scan.ts`)
checks a submitted site's dependencies against a host list. PLAN.md section 3
wants that list generated from the harness panel so the scanner cites the
edition that supplied each verdict.

## Naming

"ChinaWebFoundry", one word. "WordPress". "Great Firewall". "Baidu". "ICP".
"ICP filing (ICP备案)" for the free filing, "ICP licence (ICP许可证)" for the
commercial licence. British spelling: licence (noun), optimise, localise.

## CTA language

The site's own labels: "Book a call", "Run a free China readiness scan",
"Talk to our team". The briefs give a per-piece CTA label; use it. Never
"Schedule a complimentary consultation".

## Team, for bylines (`src/content/team/`)

- `cyril-drouin`: Cyril Drouin, Founder and CEO. 25 years in digital, former
  CEO of Publicis Commerce and Performance Marketing, China and North Asia.
  In mainland China over twenty years. Default author.
- `echo-peng`: Echo Peng, Senior Director and Partner. 18 years running
  e-commerce and digital for global brands in China, former operations
  director at Publicis China. Owns the platforms and the day-to-day. Natural
  byline for operational how-tos and case studies.

## Sister brands in the group

BearingBridge (www.bearingbridge.org), TheRedScroll, HubStudio.ai, The China
Path, BeyondBridge (www.beyondbridge.ai). Referenced in the site footer. Do
not link to them from article body copy. TheRedScroll and BeyondBridge sites
are CWF case studies and may be named as such.
