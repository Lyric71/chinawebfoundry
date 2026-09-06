---
brief_id: T4-05
tier: T4
content_type: report
publish_date: 2027-01-22
week: 20
slot: 3
slot_job: upgrade or report
slug: foreign-site-load-study-china-2026
title: "How Foreign Sites Load in China"
suggested_category: Technology
locales_at_publish: en
gate: "harness"
facts: [F1, F31, F33, F45, F46]
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
| output | `../output/foreign-site-load-study-china-2026.md` |

**Tier rule.** T4 measurement report. English only, dated slug, never overwritten. GATED ON THE HARNESS. Method before findings, every vantage point named, raw host list published, untested hosts listed as untested. Real HTML tables (markdown tables render to real `<table>` markup), stable anchor per host row.

**Quality gate, every piece.** After `/createarticle`, run `/content-quality-us`
on the output file, all 18 passes, British spelling, tracker in the run log.
This applies to this piece whatever its tier, type or length. No
`quality_passed_on` date, no `image_ready`, no publish.

Definition of done: the per-piece acceptance list in `../SPEC.md`, plus the
tier-specific boxes for T4.

---

## Brief, verbatim from PLAN.md

#### T4-05. How foreign sites actually load in China

| | |
|---|---|
| **Slug** | `foreign-site-load-study-china-2026` |
| **Cadence** | Annual, dated in the slug, with the method fixed so year two is comparable |
| **Length** | 3,000 words plus two tables |
| **Locales** | English at publish. Chinese earned once it is being cited. |

**What it publishes.** Thirty named, real, currently live foreign sites loaded from mainland China from two vantage points, with request-level data and a fully stated method. Chinafy's four-part study of ten named real sites is the only genuine original-data asset in the competitive set (F45), and it is beaten on three axes at once: three times the sites, both vantage points instead of one, and a method published in enough detail to be reproduced. Site selection is stated and defensible: a fixed number per sector across roughly ten sectors, all publicly reachable, none of them CWF clients, and the selection rule published so nobody can argue the sample was picked to fail.

Separately, cite Chinafy's April 2026 benchmark with attribution and its own framing, since it is a vendor benchmark with a stated method and it is honest to say so: 614 sites across eleven verticals tested with WebPageTest from Beijing, Virginia and London, 66.4% failing to load successfully in Beijing, median visual load 17.2 seconds, 44% of Beijing tests timing out, time to first byte four to four and a half times higher in Beijing (F31). Positioning this study against theirs is the point, and the way to do that is to be scrupulously fair to theirs.

**Method statement.** Sites named in full, with the URL tested and the date tested for each. Two mainland vantage points, both named: an Alibaba Cloud (阿里云) instance in Zhangjiakou, and a residential broadband line in Beijing on China Unicom (中国联通). One overseas control, named, so a reader can separate a slow site from a filtered one. Per site: three loads per vantage point, cold cache, 60 second abandon, recording time to first byte, document complete, visually complete, total requests, failed requests, and the hostname of every request that failed. Browser, viewport and connection type stated. Test window stated as a date range, not a month.

What could not be tested, named: sites behind a login, sites that geo-redirect mainland visitors to a different property, anything requiring payment to see the real page, and mobile networks, which are out of scope this year and will be said to be out of scope rather than glossed. Also state the sample's limits: 30 sites is not a census, one control is not a control group, and a site's result is a snapshot of one week.

**The tables it carries.** Two.

Site-level results:

| Site | Sector | Origin or platform | Datacenter TTFB, ms | Consumer TTFB, ms | Consumer document complete, s | Consumer visually complete, s | Total requests | Failed requests | Control document complete, s | Test date |
|---|---|---|---|---|---|---|---|---|---|---|

Blocking host frequency, which is the reusable half:

| Failing host | What it is | Sites affected, of 30 | Failure mode | Render blocking | Mainland replacement |
|---|---|---|---|---|---|

The second table is the one that gets quoted, because it converts 30 individual results into a ranked list of the specific third parties that break foreign sites in China. Failure mode uses the same five verdicts as the index. Render blocking is a yes or no with the mechanism named, since a host that halts the page, such as Google Hosted Libraries at `ajax.googleapis.com`, is a different problem from one that merely stalls a widget (F1, F33).

**The 300-word narrative.** Opening paragraph gives the count: how many of 30 sites failed to complete from the Beijing consumer line, how many from the datacenter instance, the date range, and the two vantage points, in that order. Second, the divergence, since some sites will pass from the datacenter and fail from the consumer line, which is the vantage point study made concrete on real commercial sites. Third, the ranked failing hosts with counts, naming the top five and what each one does to a page. Fourth, the render-blocking distinction, because a site owner who fixes the stalling widget and leaves the render-blocking script has fixed nothing visible. Fifth, the honest comparison to Chinafy's benchmark, agreeing where the results agree and saying where they differ and why the methods differ. No conclusion section, no pitch inside the narrative.

**Citation design.** Headline figure and both vantage points in the first two sentences with the date range. Name every site, every failing host, every carrier and every cloud region, since entity density and specific figures are what retrieval rewards (F46). Real static HTML tables, per-site anchors and per-host anchors, and a plain-text one-line verdict beside each row so a passage retrieval has prose to quote. Publish the raw per-site request counts as a downloadable file linked in visible text, since a study that shows its working is the one that gets cited by people who cannot verify it themselves. Test dates visible on the page, not only in schema.

**Links and reuse.** This is the flagship. The blocking host frequency table feeds every article in the compatibility cluster, and each of those articles cites the count of affected sites rather than an adjective. The China Site Scanner uses the same failing host list, so a scanner result can say how many of 30 real sites had the same problem, which is the single most persuasive line the tool can produce. Case study T3-01 links it as external context for the migration numbers. Money page: `/services/migration/`. Sideways to `china-latency-vantage-point-study` and the current dependency index edition.

**Metadata.**
```yaml
title: "How Foreign Sites Load in China"                                             # 31 / 52
description: "Thirty named foreign sites loaded from a mainland datacenter and a Beijing consumer line, with request-level data and a stated method."   # 134 / 152
excerpt: "Thirty real sites, two vantage points, one published method, and the third-party hosts that broke the most of them."   # 19 / 25 words
```

**CTA.** Ask us to run this test on your site

## T4 rules (from PLAN.md section 8)

## 8. T4: measurement reports

Six pieces. This is the moat, and it is the reason the rest of the plan is safe.

Publication rule for all six: state the method before the findings, name every vantage point, publish the raw host list, and say what could not be tested. A study that hides its method is worth less than no study.

---

Nobody in the competitive set publishes a measurement. No tables, no test dates, no named test locations, no latency figures, across every compatibility page examined at Chinafy, AppInChina, 21cloudbox, Eggplant and the smaller agencies (F45). Chinafy's one original-data asset, a four-part load study of ten named real sites, sits apart from its compatibility cluster and never supports it. Six reports close that gap and become the thing every other page on the site cites.

Two rules across all six. Every figure carries a named vantage point and a date, per the fact bank preamble, and any host the harness could not reach for procedural reasons is listed as untested rather than quietly dropped. A gap that is named is credible. A gap that is hidden is the thing that makes the whole table suspect.
