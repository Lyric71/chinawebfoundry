---
brief_id: T6-02
tier: T6
content_type: upgrade
publish_date: 2026-09-11
week: 01
slot: 3
slot_job: upgrade or report
slug: upgrade-is-wordpress-blocked-in-china
title: "Correct the Google Fonts claim in is-wordpress-blocked-in-china"
locales_at_publish: as the page exists
facts: [F1, F6, F8, F45]
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
| output | `../output/upgrade-is-wordpress-blocked-in-china.md` |

**Tier rule.** T6 upgrade. ZERO NEW URLS. An edit to a page that already exists, in all four locales where the page is localized. Verify the sitemap entry count is unchanged before and after. No canonical or hreflang change unless the work order says so. The draft step produces the replacement copy and a change list in `output/`; the publish step applies it. Changed passages in fr, es and de go through `/deep-translate`, main conversation, no subagent, three passes each.

**Quality gate, every piece.** After `/createarticle`, run `/content-quality-us`
on the output file, all 18 passes, British spelling, tracker in the run log.
This applies to this piece whatever its tier, type or length. No
`quality_passed_on` date, no `image_ready`, no publish.

Definition of done: the per-piece acceptance list in `../SPEC.md`, plus the
tier-specific boxes for T6.

---

## Brief, verbatim from PLAN.md

#### T6-02. Correct the Google Fonts claim and add a measurement table to `is-wordpress-blocked-in-china`

| | |
|---|---|
| **Scope** | `is-wordpress-blocked-in-china`, all four locales. |
| **Type** | Content edit |
| **New URLs** | 0 |
| **Effort** | One day English, plus translation turnaround for de, es, fr. |

**Why.** This live article currently asserts the flat claim that F6 retracts, so the highest-traffic page in the guide is carrying a statement the fact bank now says we cannot stand behind. F6 is also not a simple reversal: replacing "Google Fonts is blocked in China" with "Google Fonts is not blocked in China" would be equally wrong and would put a worse claim on a bigger page. Alongside that, the article has no original measurement, which is the one thing F45 says nobody in the competitive set publishes.

**What to change.** Rewrite the Google Fonts paragraph to state both vantage points from F6: 73 of 73 requests completing at a 111ms median from an Alibaba Cloud mainland instance on 29 August 2026, and 0 of 54 from a Beijing residential broadband line on 28 August 2026. State that both are real, that the datacenter number is not the visitor experience, and that this is precisely why self-hosting is the correct answer. Note separately that `fonts.google.com`, the browsing interface, is blocked either way. Then add a measurement table above the fold with one row per dependency, each carrying host, verdict, latency, vantage point and test date, drawn from F1 through F8. Add a visible "last measured" date near the byline.

**Acceptance criteria.**
- [ ] The string "Google Fonts is blocked in China" does not appear anywhere in the English article, and its translated equivalents do not appear in de, es or fr.
- [ ] The string "Google Fonts is not blocked in China" does not appear either, in any locale.
- [ ] The Google Fonts paragraph names both vantage points and both test dates.
- [ ] The measurement table has a vantage point column and a date column, and no row is empty in either.
- [ ] A visible last-measured date appears within the first screen on mobile at 390px width.
- [ ] Slug, canonical and hreflang cluster for this article are byte-identical to before the edit.

**Risk.** This article is linked from several service pages and from the home page, so a heading change can break in-page anchor links. Search the codebase for `#` fragments targeting this URL before renaming any H2. The translated versions will drift out of sync if the English ships first and the other three lag, and a de page asserting the retracted claim while the en page corrects it is worse than the current state, so hold all four for a single deploy.

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
