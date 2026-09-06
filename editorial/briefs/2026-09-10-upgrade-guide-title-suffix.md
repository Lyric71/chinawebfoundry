---
brief_id: T6-01
tier: T6
content_type: upgrade
publish_date: 2026-09-10
week: 01
slot: 2
slot_job: fast
slug: upgrade-guide-title-suffix
title: "Strip the guide title suffix at the template level"
locales_at_publish: as the page exists
status: not_started
---

## How to run this brief

Read `../CLAUDE.md` and `../SPEC.md` first. They override any conflicting
rule inside the skills. Then read every fact ID listed above in
`../sources/fact-bank.md`, and the Do Not Assert list at the end of it.

| Input | Value |
|---|---|
| website | https://www.chinawebfoundry.com |
| audience | people out of China |
| brief | this file |
| output | `../output/upgrade-guide-title-suffix.md` |

**Tier rule.** T6 upgrade. ZERO NEW URLS. An edit to a page that already exists, in all four locales where the page is localized. Verify the sitemap entry count is unchanged before and after. No canonical or hreflang change unless the work order says so. The draft step produces the replacement copy and a change list in `output/`; the publish step applies it. Changed passages in fr, es and de go through `/deep-translate`, main conversation, no subagent, three passes each.

**Quality gate, every piece.** After `/createarticle`, run `/content-quality-us`
on the output file, all 18 passes, British spelling, tracker in the run log.
This applies to this piece whatever its tier, type or length. No
`quality_passed_on` date, no `image_ready`, no publish.

Definition of done: the per-piece acceptance list in `../SPEC.md`, plus the
tier-specific boxes for T6.

---

## Brief, verbatim from PLAN.md

#### T6-01. Strip the guide title suffix at the template level

| | |
|---|---|
| **Scope** | The guide article layout. All 30 guide articles per locale, all four locales, 120 pages. |
| **Type** | Template change |
| **New URLs** | 0 |
| **Effort** | Half a day of template work, plus a metadata pass over the 30 English titles that were written assuming the suffix would be there. |

**Why.** The guide layout appends ` | China Web Guide | ChinaWebFoundry`, which is 35 characters. Every guide article therefore renders a `<title>` of 62 to 71 characters against a standing 52-character ceiling, so the front half of the brand suffix is what gets truncated in the SERP and the differentiating end of the actual title is what gets cut. This is one template decision, not 120 content edits, and fixing it once fixes every page in the tier including everything shipped in T2.

**What to change.** Remove the appended suffix from the guide article layout so the page title renders exactly the `title` value from frontmatter. Keep the suffix on the home page and top-level service pages, where titles are short enough to carry it. Add a build-time assertion in the Astro layout that fails the build when a rendered `<title>` exceeds 52 characters, so the ceiling stops being a convention and becomes a gate. Audit the de, es and fr suffix strings separately, since their translated forms are not 35 characters and the localized titles are already longer than the English ones. Then re-read the 30 English guide titles and shorten any that were drafted to read well with the suffix attached.

**Acceptance criteria.**
- [ ] View source on any guide article in any locale: `<title>` contains no ` | China Web Guide` substring.
- [ ] A script over the built output reports zero guide article `<title>` values above 52 characters, in all four locales.
- [ ] `og:title` and `twitter:title` match the `<title>` string exactly on a spot check of five articles per locale.
- [ ] The build fails when a test article with a 60-character title is committed, and passes when it is shortened.
- [ ] Breadcrumb JSON-LD `name` values are unchanged from before the deploy.
- [ ] `sitemap.xml` diff before and after the deploy is empty.

**Risk.** The suffix variable may feed `og:title`, `twitter:title`, breadcrumb structured data and the RSS feed from one source, so removing it in one place can silently change four outputs. Titles are a live ranking input and 120 of them changing at once will move impressions for two to four weeks, which needs to be flagged in Search Console annotations so the dip is not misread as something else. No URL, canonical or hreflang value is touched by this work order, and if a diff shows one changing, stop and escalate.

## T6 rules (from PLAN.md section 10)

## 10. T6: upgrades to existing pages

Ten pieces, **zero new URLs.** These are the cheapest wins in the plan and they carry no risk at all.

1. **Fix the title suffix across all guide articles.** Section 0 of v1 flagged this and it is still open. It is one template change and it lifts every page.
2. **`is-wordpress-blocked-in-china`:** add a measurement table with vantage points, and correct the Google Fonts paragraph per F6. This article currently carries the version of that claim that v2 retracts.
3. **`wordpress-hosting-china`:** add the harness numbers.
4. **`choosing-web-agency-china`:** add FAQ schema, and add the vendor comparison as a table rather than prose.
5. **`google-analytics-china`:** upgrade with F34. **Do not write a new GA article**, this URL already exists and a second one would recreate the cannibalization Move 1 just fixed.
6. **`great-firewall-what-it-blocks`:** attach the dependency table. This is the natural hub for it.
7. **`china-website-hosting-guide` and `host-website-in-china`:** two URLs, adjacent intents. Audit for overlap and either differentiate sharply or consolidate with a redirect.
8. **`/wordpress-in-china/`:** add a measurement block and FAQ schema.
9. **`/web-agency-china/` and `/wordpress-agency-china/`:** FAQ schema, one hard number per section.
10. **`baiduspider-firewall`:** add F15 and F16, the Wordfence Google-only whitelist and the Solid Security HackRepair list. Both are source-verified and neither is anywhere else on the web.

---

Ten engineering and editing tasks on pages that already exist. Every one of these creates zero new URLs. Any work order whose execution would add a URL has been written wrong and should come back for revision before it is built.
