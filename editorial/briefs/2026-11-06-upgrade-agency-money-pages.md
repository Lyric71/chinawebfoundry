---
brief_id: T6-09
tier: T6
content_type: upgrade
publish_date: 2026-11-06
week: 09
slot: 3
slot_job: upgrade or report
slug: upgrade-agency-money-pages
title: "FAQ schema and hard numbers on the two agency money pages"
locales_at_publish: as the page exists
facts: [F25, F26, F31, F32, F46]
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
| output | `../output/upgrade-agency-money-pages.md` |

**Tier rule.** T6 upgrade. ZERO NEW URLS. An edit to a page that already exists, in all four locales where the page is localized. Verify the sitemap entry count is unchanged before and after. No canonical or hreflang change unless the work order says so. The draft step produces the replacement copy and a change list in `output/`; the publish step applies it. Changed passages in fr, es and de go through `/deep-translate`, main conversation, no subagent, three passes each.

**Quality gate, every piece.** After `/createarticle`, run `/content-quality-us`
on the output file, all 18 passes, British spelling, tracker in the run log.
This applies to this piece whatever its tier, type or length. No
`quality_passed_on` date, no `image_ready`, no publish.

Definition of done: the per-piece acceptance list in `../SPEC.md`, plus the
tier-specific boxes for T6.

---

## Brief, verbatim from PLAN.md

#### T6-09. Add FAQ schema and one hard number per section to `/web-agency-china/` and `/wordpress-agency-china/`

| | |
|---|---|
| **Scope** | Two commercial URLs, all four locales, so eight pages. |
| **Type** | Schema plus content edit |
| **New URLs** | 0 |
| **Effort** | One to two days total across both pages. |

**Why.** These are the two pages that carry the commercial intent for the primary keyword set, and both currently argue without evidence. One specific, sourced figure per section is the cheapest available upgrade to both conversion and retrievability, since F46 notes a preference for entity density and specific figures. FAQ schema on a commercial page also captures the procurement questions buyers type verbatim.

**What to change.** For each H2 section on both pages, add exactly one figure with a source and a date. Draw from F26 for filing timelines including the 10 to 30 working day published range against the realistic three to six weeks, F25 for the ports constraint, F32 for delivery outcomes, and F31 for the market context, cited with attribution as a vendor benchmark. Add FAQ schema to each page covering five to six procurement questions. Make sure the two pages do not use the same figures in the same order, because near-identical commercial pages under the same brand invite the same passage-level dedupe the T2 tier is designed to avoid.

**Acceptance criteria.**
- [ ] Every H2 section on both pages contains at least one figure with a named source and date.
- [ ] No figure appears on both pages in the same section position.
- [ ] The F31 citation names Chinafy as the source and identifies it as a vendor benchmark.
- [ ] No figure from the Do Not Assert list appears, verified by grep for "93%" and "44% of resources".
- [ ] FAQ JSON-LD validates with zero errors on both pages in all four locales.
- [ ] Every schema answer appears verbatim in visible copy.
- [ ] No URL, canonical or hreflang change in the deploy diff.

**Risk.** These are the pages ranking for the primary commercial terms, so edits carry more downside than on a guide article. Ship them in two deploys, one page at a time, a week apart, so any ranking movement is attributable. Do not touch headings on either page.

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
