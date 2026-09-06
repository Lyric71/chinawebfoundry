---
brief_id: T6-05
tier: T6
content_type: upgrade
publish_date: 2026-09-18
week: 02
slot: 3
slot_job: upgrade or report
slug: upgrade-google-analytics-china
title: "Upgrade google-analytics-china with F34"
locales_at_publish: as the page exists
facts: [F3, F34, F41]
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
| output | `../output/upgrade-google-analytics-china.md` |

**Tier rule.** T6 upgrade. ZERO NEW URLS. An edit to a page that already exists, in all four locales where the page is localized. Verify the sitemap entry count is unchanged before and after. No canonical or hreflang change unless the work order says so. The draft step produces the replacement copy and a change list in `output/`; the publish step applies it. Changed passages in fr, es and de go through `/deep-translate`, main conversation, no subagent, three passes each.

**Quality gate, every piece.** After `/createarticle`, run `/content-quality-us`
on the output file, all 18 passes, British spelling, tracker in the run log.
This applies to this piece whatever its tier, type or length. No
`quality_passed_on` date, no `image_ready`, no publish.

Definition of done: the per-piece acceptance list in `../SPEC.md`, plus the
tier-specific boxes for T6.

---

## Brief, verbatim from PLAN.md

#### T6-05. Upgrade `google-analytics-china` with F34, and do not create a second GA page

| | |
|---|---|
| **Scope** | `google-analytics-china`, all four locales. |
| **Type** | Content edit |
| **New URLs** | 0. This is the load-bearing constraint of this work order. |
| **Effort** | One day English, plus translation. |

**Why.** This URL already exists and already ranks, and F34 contains the strongest analytics material in the bank, none of which is on the page. Publishing a second GA article to carry F34 would recreate exactly the cannibalization the Move 1 consolidation was done to remove, so the new material goes here and nowhere else.

**What to change.** Add a measured alternatives table built from F34: Hotjar 100% disrupted per GreatFire 2026-08-20 and hosted on Google Cloud, Meta Pixel 100% blocked per GreatFire 2026-07-27, Clarity 541ms then 0 of 3 completions, Mixpanel 391ms then 0 of 3, Segment completing at 900 to 1,084ms, Plausible completing at 550ms and Matomo cloud at 516ms. Give the Amplitude split its own paragraph, because `cdn.amplitude.com` reachable with `api.amplitude.com` blocked means the script loads, the events never post, and the dashboard reads as working. That is the most useful single fact on the page. Keep the PIPL cross-border reasoning from F3 as an independent argument, stated separately from reachability, since it holds even if a host starts answering. Close on the replacement set from F41, leading with Baidu Tongji (百度统计) and the self-hostable options.

**Acceptance criteria.**
- [ ] No new URL is created anywhere in the repo during this work order.
- [ ] The Amplitude split has its own subsection with both hostnames named.
- [ ] Every verdict in the table carries a source key and a date.
- [ ] The PIPL argument is presented as independent of reachability, in its own section.
- [ ] Internal links from `cookie-consent-china` and the analytics service page resolve to this URL and return 200.
- [ ] `sitemap.xml` entry count is unchanged after the deploy.

**Risk.** The temptation during drafting is to split this into a GA article and an "analytics alternatives" article. Reject that in review. If the page runs long, cut the general PIPL explanation and link to `china-data-privacy-pipl-dsl` rather than splitting the URL.

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
