---
brief_id: T6-04
tier: T6
content_type: upgrade
publish_date: 2026-10-23
week: 07
slot: 3
slot_job: upgrade or report
slug: upgrade-choosing-web-agency-china
title: "FAQ schema and comparison table for choosing-web-agency-china"
locales_at_publish: as the page exists
facts: [F26, F32, F46]
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
| output | `../output/upgrade-choosing-web-agency-china.md` |

**Tier rule.** T6 upgrade. ZERO NEW URLS. An edit to a page that already exists, in all four locales where the page is localized. Verify the sitemap entry count is unchanged before and after. No canonical or hreflang change unless the work order says so. The draft step produces the replacement copy and a change list in `output/`; the publish step applies it. Changed passages in fr, es and de go through `/deep-translate`, main conversation, no subagent, three passes each.

**Quality gate, every piece.** After `/createarticle`, run `/content-quality-us`
on the output file, all 18 passes, British spelling, tracker in the run log.
This applies to this piece whatever its tier, type or length. No
`quality_passed_on` date, no `image_ready`, no publish.

Definition of done: the per-piece acceptance list in `../SPEC.md`, plus the
tier-specific boxes for T6.

---

## Brief, verbatim from PLAN.md

#### T6-04. Add FAQ schema and a comparison table to `choosing-web-agency-china`

| | |
|---|---|
| **Scope** | `choosing-web-agency-china`, all four locales. |
| **Type** | Schema plus content edit |
| **New URLs** | 0 |
| **Effort** | Half a day for schema across the template, half a day for the table rewrite per locale. |

**Why.** The vendor comparison currently runs as prose, which is the least retrievable format for the exact passage a buyer wants, and F46 says answer engines retrieve at passage level with a preference for entity density and specific figures. A table gives that. FAQ schema on a page that already answers buyer questions costs an hour and makes those answers addressable.

**What to change.** Convert the vendor comparison prose into a table with one row per agency type: mainland agency, international agency with a China office, offshore agency with no China presence, and freelance. Columns for ICP filing capability, mainland hosting, Chinese-language content, Baidu work and typical engagement shape. Add FAQ schema as JSON-LD covering four to six questions already answered in the body, with the schema answers matching the on-page copy word for word. Add one hard figure per major section, drawn from F26 for filing timelines and F32 for delivery outcomes.

**Acceptance criteria.**
- [ ] The comparison renders as a `<table>` element, not as a styled list or prose.
- [ ] The table scrolls horizontally inside its own container at 390px width without the page scrolling sideways.
- [ ] FAQ JSON-LD validates in the Rich Results Test with zero errors and zero warnings, in all four locales.
- [ ] Every FAQ schema answer string appears verbatim in the visible page copy.
- [ ] At least one numeric figure with a source appears in each H2 section.
- [ ] Schema `inLanguage` matches the page locale on all four versions.

**Risk.** FAQ schema whose answers do not match visible copy is a manual action risk, so the verbatim check is not optional. Translated FAQ schema is a common place for the English strings to survive a translation pass, which produces a de page with English JSON-LD.

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
