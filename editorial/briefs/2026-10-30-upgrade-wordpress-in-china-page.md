---
brief_id: T6-08
tier: T6
content_type: upgrade
publish_date: 2026-10-30
week: 08
slot: 3
slot_job: upgrade or report
slug: upgrade-wordpress-in-china-page
title: "Measurement block and FAQ schema for /wordpress-in-china/"
locales_at_publish: as the page exists
facts: [F1, F4, F6, F8, F32, F46]
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
| output | `../output/upgrade-wordpress-in-china-page.md` |

**Tier rule.** T6 upgrade. ZERO NEW URLS. An edit to a page that already exists, in all four locales where the page is localized. Verify the sitemap entry count is unchanged before and after. No canonical or hreflang change unless the work order says so. The draft step produces the replacement copy and a change list in `output/`; the publish step applies it. Changed passages in fr, es and de go through `/deep-translate`, main conversation, no subagent, three passes each.

**Quality gate, every piece.** After `/createarticle`, run `/content-quality-us`
on the output file, all 18 passes, British spelling, tracker in the run log.
This applies to this piece whatever its tier, type or length. No
`quality_passed_on` date, no `image_ready`, no publish.

Definition of done: the per-piece acceptance list in `../SPEC.md`, plus the
tier-specific boxes for T6.

---

## Brief, verbatim from PLAN.md

#### T6-08. Add a measurement block and FAQ schema to `/wordpress-in-china/`

| | |
|---|---|
| **Scope** | `/wordpress-in-china/`, all four locales. |
| **Type** | Content edit plus schema |
| **New URLs** | 0 |
| **Effort** | One day English, plus translation and a schema pass. |

**Why.** This is the top of the WordPress cluster and the page most internal links point at, so it should carry the strongest evidence on the site and currently carries none. F46's finding that roughly 44% of AI citations come from the first 30% of a page means a measurement block placed above the fold on the cluster hub does more retrieval work than the same block anywhere else.

**What to change.** Add a measurement block within the first screen carrying four or five figures with vantage points and dates, drawn from F1, F4, F6, F8 and F32. Add FAQ schema covering the five questions this page already answers, with answers matching visible copy verbatim. Add a visible last-reviewed date near the byline. Make sure the Google Fonts line here follows the same F6 treatment as T6-02, because a hub page contradicting its own child article is worse than either error alone.

**Acceptance criteria.**
- [ ] The measurement block appears within the first 30% of the page by word count.
- [ ] Every figure in the block names a vantage point and a date.
- [ ] FAQ JSON-LD validates with zero errors in all four locales, with `inLanguage` matching each locale.
- [ ] Every schema answer appears verbatim in visible copy.
- [ ] The Google Fonts treatment on this page matches `is-wordpress-blocked-in-china` after T6-02, checked side by side.
- [ ] A visible last-reviewed date renders on mobile at 390px.
- [ ] Canonical and hreflang for the four locale versions are unchanged.

**Risk.** This URL has the deepest internal link graph on the site, so any heading rename breaks anchor links from child articles. Grep for fragment links to this URL before touching an H2. Sequence this after T6-02 so the fonts language is consistent in a single direction.

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
