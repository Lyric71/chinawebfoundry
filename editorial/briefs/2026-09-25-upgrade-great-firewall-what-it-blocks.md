---
brief_id: T6-06
tier: T6
content_type: upgrade
publish_date: 2026-09-25
week: 03
slot: 3
slot_job: upgrade or report
slug: upgrade-great-firewall-what-it-blocks
title: "Attach the dependency table to great-firewall-what-it-blocks"
locales_at_publish: as the page exists
facts: [F33, F39, F40, F42, F45, F46]
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
| output | `../output/upgrade-great-firewall-what-it-blocks.md` |

**Tier rule.** T6 upgrade. ZERO NEW URLS. An edit to a page that already exists, in all four locales where the page is localized. Verify the sitemap entry count is unchanged before and after. No canonical or hreflang change unless the work order says so. The draft step produces the replacement copy and a change list in `output/`; the publish step applies it. Changed passages in fr, es and de go through `/deep-translate`, main conversation, no subagent, three passes each.

**Quality gate, every piece.** After `/createarticle`, run `/content-quality-us`
on the output file, all 18 passes, British spelling, tracker in the run log.
This applies to this piece whatever its tier, type or length. No
`quality_passed_on` date, no `image_ready`, no publish.

Definition of done: the per-piece acceptance list in `../SPEC.md`, plus the
tier-specific boxes for T6.

---

## Brief, verbatim from PLAN.md

#### T6-06. Attach the dependency table to `great-firewall-what-it-blocks`

| | |
|---|---|
| **Scope** | `great-firewall-what-it-blocks`, all four locales. |
| **Type** | Content edit, plus a reusable table component. |
| **New URLs** | 0 |
| **Effort** | One to two days, since the component should be built to be reused on the T2 pages. |

**Why.** This is the natural hub for the full third-party dependency table from F33 through F42. The page already answers the category question and it is the page most likely to be cited when an answer engine is asked what the firewall blocks, so it should hold the most complete verified dataset CWF has. F45 says no competitor publishes one at all.

**What to change.** Build the dependency table as a reusable component with columns for service, hostname, verdict, latency, vantage point, source key and test date, then populate it from F33 through F39. Group by category: analytics, forms and chat, embeds, maps, platforms, infrastructure. Include the untested rows from F42 marked explicitly as untested, rather than dropping them, since the gap is itself informative. Lead the page with F33 as a framing idea, because "answers then hangs" is the failure mode that reframes the whole category and it is the passage most likely to be retrieved. Add the payments correction from F40, stating that Stripe is a licensing question and not a compatibility one, and route to the payments article rather than expanding it here.

**Acceptance criteria.**
- [ ] Every table row has a non-empty vantage point cell and a non-empty date cell, or is explicitly marked untested.
- [ ] No row in the table asserts a verdict for any of the eleven dependencies listed in F42 without a fresh probe.
- [ ] The table is server-rendered in the HTML source, verified by viewing source with JavaScript disabled.
- [ ] The table container scrolls horizontally at 390px without the page body scrolling sideways.
- [ ] The F33 framing appears within the first 30% of the page by word count.
- [ ] The component is imported by at least one other page, proving reuse.

**Risk.** A table this size is the page's main asset and also its main maintenance liability, so every row needs a date and the page needs a review cadence. Server rendering is not optional here: F46 notes ChatGPT's retrieval bot does not execute JavaScript, and a client-rendered table would make the page's best asset invisible to the crawler it was built for.

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
