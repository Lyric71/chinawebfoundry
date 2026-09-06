---
brief_id: T4-01
tier: T4
content_type: report
publish_date: 2026-10-16
week: 06
slot: 3
slot_job: upgrade or report
slug: china-dependency-index-2026-10
title: "China Dependency Index, October 2026"
suggested_category: Technology
locales_at_publish: en
gate: "harness"
facts: [F33, F34, F42, F46]
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
| output | `../output/china-dependency-index-2026-10.md` |

**Tier rule.** T4 measurement report. English only, dated slug, never overwritten. GATED ON THE HARNESS. Method before findings, every vantage point named, raw host list published, untested hosts listed as untested. Real HTML tables (markdown tables render to real `<table>` markup), stable anchor per host row.

**Quality gate, every piece.** After `/createarticle`, run `/content-quality-us`
on the output file, all 18 passes, British spelling, tracker in the run log.
This applies to this piece whatever its tier, type or length. No
`quality_passed_on` date, no `image_ready`, no publish.

Definition of done: the per-piece acceptance list in `../SPEC.md`, plus the
tier-specific boxes for T4.

---

## Brief, verbatim from PLAN.md

#### T4-01. China Dependency Index, October 2026

| | |
|---|---|
| **Slug** | `china-dependency-index-2026-10` |
| **Cadence** | Monthly, dated slug, never overwritten. Each edition is a permanent URL. |
| **Length** | 1,400 words plus the table |
| **Locales** | English only. Monthly translation of a dated data page is unaffordable and the audience for the raw table reads English. |

**What it publishes.** A fixed panel of 53 third-party web hosts that foreign sites commonly depend on, tested from mainland China from two vantage points on stated dates, with a verdict per host and a change column against the previous edition. October is edition one, so the change column reads "baseline" throughout and the article says so rather than hiding an empty column. Categories in the panel: analytics and tag management, fonts and icons, script CDNs, forms and captcha, chat and support widgets, social and media embeds, maps, payments, search and infrastructure, site platforms. The host list is published in full, including the hosts that behaved perfectly, because a panel that only shows failures is a marketing asset and not an index.

**Method statement.** Everything below appears before the first finding, not in a footnote.

Two vantage points. An Alibaba Cloud (阿里云) mainland instance in the Zhangjiakou region, and a residential broadband line in Beijing on China Unicom (中国联通). Both named, both with the test dates written out. State plainly that a datacenter probe and a consumer line in the same country can return opposite verdicts on the same host, that both numbers are real, and that the consumer number is the one that describes a visitor. Where the two disagree, both go in the table and neither is averaged.

Per host: three requests, 60 second abandon, recording time to first byte, completion or non-completion, HTTP status and DNS resolution result. Quiet-hour and peak-hour runs where the host showed variance in prior testing. A host that returns a first byte and then fails to complete inside 60 seconds is recorded as "answers then stalls" and never as reachable, because that is the failure mode site owners never diagnose (F33).

What could not be tested, stated by name. Eleven dependencies in the panel's waiting room have no test record at all and are held out of this edition rather than guessed: Crisp, Tawk.to, Loom, Sanity, Netlify, Bootstrap CDN, `js.stripe.com`, the LinkedIn Insight Tag, Turnstile, Adobe Fonts and Font Awesome, plus Marketo and the HubSpot script, which rest on verdicts older than 90 days (F42). Several need provisioned accounts before the harness can exercise a real endpoint rather than a marketing page. They join in the December edition. Say that here, with the date.

Also state what the index does not measure: it does not test from every province, it does not test on mobile networks in this edition, it runs from one datacenter region rather than several, and a single month of data on a host that flips is not a trend.

**The table it carries.** One row per host, sorted by category then by severity, with a stable anchor ID per row so an individual host can be linked and quoted.

| Host | What it is | Category | Datacenter TTFB, median ms | Datacenter completions | Consumer TTFB, median ms | Consumer completions | Verdict | Change since last edition | Tested |
|---|---|---|---|---|---|---|---|---|---|

Column definitions spelled out in the article. Datacenter is the Alibaba Cloud Zhangjiakou instance. Consumer is the Beijing China Unicom line. Completions is a count out of attempts, written as "0 of 3" rather than as a percentage, because three attempts do not support a percentage. Verdict is one of five values, defined in the article: reachable, slow, answers then stalls, intermittent, blocked. Tested is a date, per host, because the harness does not finish in one hour.

**The 300-word narrative.** The prose around the table does four things and does not editorialize beyond them. It states the headline count in the first sentence, how many of 53 hosts failed to complete from the consumer line and how many from the datacenter, with both dates. It names the two or three hosts whose two vantage points disagreed most sharply and says explicitly that this is why single-source China advice is unreliable. It calls out the category with the worst result and explains the mechanism in one paragraph, which for October is the analytics category, where a script host and an ingestion endpoint can split so the script loads and the events never post, and the dashboard reads as working (F34). And it says what a site owner should do with the table this month, in two sentences, without turning into a service pitch. No conclusion section. The narrative stops when the last finding is stated.

**Citation design.** The answer goes in the first paragraph, with the count, the two vantage points and the dates in the opening 60 words, since roughly 44% of AI answer engine citations come from the first 30% of a page and retrieval works at passage level (F46). Entity density stays high on purpose: name the hosts, the carriers, the cloud regions, the provinces. Every claim carries a figure. Build it as a real HTML table with real header cells, not an image and not a client-rendered grid, because ChatGPT's retrieval bot does not execute JavaScript and Astro ships static HTML, which is already the advantage (F46). Give each host row a stable anchor and a one-sentence verdict line in plain text next to the row, so a passage-level retrieval has something quotable that is not table markup. Put the publication date and the test date range in visible text near the top, not only in schema, since freshness bias is strong and a date only a crawler can see does less work.

**Links and reuse.** This is the citation target for the whole compatibility cluster. Every `does-{tool}-work-in-china` article cites the current edition for its figure and links the specific host anchor rather than the page. The service pages for Technical Integration and China Hosting cite the headline count. It feeds the China Site Scanner directly: the scanner's host reputation list is generated from the index panel, and the scanner output links back to the edition that supplied each verdict, which is what makes the tool defensible rather than a lead magnet with numbers in it. Sideways to `third-party-scripts-china` and the T4-02 vantage point study, which explains the method the index depends on.

**Metadata.**
```yaml
title: "China Dependency Index, October 2026"                                        # 36 / 52
description: "Fifty-three third-party web hosts tested from an Alibaba Cloud instance and a Beijing consumer line. Full table, method and test dates."   # 135 / 152
excerpt: "A dated monthly measurement of the third-party hosts foreign sites depend on, from two mainland vantage points."   # 17 / 25 words
```

**CTA.** Run your own site against this list

## T4 rules (from PLAN.md section 8)

## 8. T4: measurement reports

Six pieces. This is the moat, and it is the reason the rest of the plan is safe.

Publication rule for all six: state the method before the findings, name every vantage point, publish the raw host list, and say what could not be tested. A study that hides its method is worth less than no study.

---

Nobody in the competitive set publishes a measurement. No tables, no test dates, no named test locations, no latency figures, across every compatibility page examined at Chinafy, AppInChina, 21cloudbox, Eggplant and the smaller agencies (F45). Chinafy's one original-data asset, a four-part load study of ten named real sites, sits apart from its compatibility cluster and never supports it. Six reports close that gap and become the thing every other page on the site cites.

Two rules across all six. Every figure carries a named vantage point and a date, per the fact bank preamble, and any host the harness could not reach for procedural reasons is listed as untested rather than quietly dropped. A gap that is named is credible. A gap that is hidden is the thing that makes the whole table suspect.
