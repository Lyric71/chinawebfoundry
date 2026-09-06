---
brief_id: T6-03
tier: T6
content_type: upgrade
publish_date: 2026-10-02
week: 04
slot: 3
slot_job: upgrade or report
slug: upgrade-wordpress-hosting-china
title: "Add harness numbers to wordpress-hosting-china"
locales_at_publish: as the page exists
facts: [F25, F27, F28, F29, F30, F32, F45]
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
| output | `../output/upgrade-wordpress-hosting-china.md` |

**Tier rule.** T6 upgrade. ZERO NEW URLS. An edit to a page that already exists, in all four locales where the page is localized. Verify the sitemap entry count is unchanged before and after. No canonical or hreflang change unless the work order says so. The draft step produces the replacement copy and a change list in `output/`; the publish step applies it. Changed passages in fr, es and de go through `/deep-translate`, main conversation, no subagent, three passes each.

**Quality gate, every piece.** After `/createarticle`, run `/content-quality-us`
on the output file, all 18 passes, British spelling, tracker in the run log.
This applies to this piece whatever its tier, type or length. No
`quality_passed_on` date, no `image_ready`, no publish.

Definition of done: the per-piece acceptance list in `../SPEC.md`, plus the
tier-specific boxes for T6.

---

## Brief, verbatim from PLAN.md

#### T6-03. Add harness numbers to `wordpress-hosting-china`

| | |
|---|---|
| **Scope** | `wordpress-hosting-china`, all four locales. |
| **Type** | Content edit |
| **New URLs** | 0 |
| **Effort** | One day English, plus translation. |

**Why.** The article recommends hosting decisions without publishing a single figure to support them, which puts it in the same category as every competitor page (F45). CWF already owns numbers that no competitor has: F32 gives measured post-migration performance, and F25 through F30 give the structural constraints that decide the hosting choice before performance ever enters the conversation.

**What to change.** Add a benchmark block near the top carrying the F32 figures with their conditions stated: median 1.2 seconds after migration against 23.4 seconds on a European origin, 99.98% uptime over 90 days, and 48ms, 36ms and 61ms response times from Beijing, Shanghai and Guangzhou. Add a decision table covering the real options with their real constraints: Alibaba Cloud (阿里云) and the aliyun.com versus alibabacloud.com split from F27, Tencent Cloud (腾讯云), Huawei Cloud (华为云), Vercel per F29 including Vercel's own November 2025 statement, and Cloudflare per F30. Add an explicit section stating that no managed WordPress product exists in mainland China (F28) and what the one-click images on Alibaba Simple Application Server (轻量应用服务器), Tencent Lighthouse and Huawei FlexusL actually are. State the ports 80 and 443 constraint from F25 before any of it, because it decides everything downstream.

**Acceptance criteria.**
- [ ] Every latency or uptime figure on the page names a vantage point and a measurement window.
- [ ] The page states the alibabacloud.com versus aliyun.com distinction explicitly (F27).
- [ ] The page states that no managed WordPress exists in China (F28).
- [ ] The Vercel section cites Vercel's own knowledge base statement and its date.
- [ ] Zero figures from the Do Not Assert list appear, verified by a grep for "93%" and "44% of resources".
- [ ] No URL, canonical or hreflang change in the deploy diff.

**Risk.** Vendor-named comparison tables age and this one names six providers, so it needs a review date in frontmatter and a calendar reminder, or it becomes the stale asset the cluster is meant to replace. The F32 numbers are CWF's own and must be labeled as such rather than presented as neutral benchmarking.

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
