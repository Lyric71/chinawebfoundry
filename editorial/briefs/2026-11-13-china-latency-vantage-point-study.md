---
brief_id: T4-02
tier: T4
content_type: report
publish_date: 2026-11-13
week: 10
slot: 3
slot_job: upgrade or report
slug: china-latency-vantage-point-study
title: "Why China Latency Tests Disagree"
suggested_category: Technology
locales_at_publish: en
gate: "harness"
facts: [F6, F46]
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
| output | `../output/china-latency-vantage-point-study.md` |

**Tier rule.** T4 measurement report. English only, dated slug, never overwritten. GATED ON THE HARNESS. Method before findings, every vantage point named, raw host list published, untested hosts listed as untested. Real HTML tables (markdown tables render to real `<table>` markup), stable anchor per host row.

**Quality gate, every piece.** After `/createarticle`, run `/content-quality-us`
on the output file, all 18 passes, British spelling, tracker in the run log.
This applies to this piece whatever its tier, type or length. No
`quality_passed_on` date, no `image_ready`, no publish.

Definition of done: the per-piece acceptance list in `../SPEC.md`, plus the
tier-specific boxes for T4.

---

## Brief, verbatim from PLAN.md

#### T4-02. Why China latency tests disagree: datacenter against consumer

| | |
|---|---|
| **Slug** | `china-latency-vantage-point-study` |
| **Cadence** | Once, then revised in place with a visible revision log and the original figures retained |
| **Length** | 2,200 words plus the table |
| **Locales** | English at publish. Chinese earned, and it will be earned, because Chinese developers argue about this constantly. |

**What it publishes.** The datacenter-versus-consumer finding, run properly. Forty-four hosts, each tested from a mainland datacenter and a mainland consumer connection on the same day, with the disagreements counted and classified. The finding that makes it worth publishing is already visible in one host: from an Alibaba Cloud mainland instance on 29 August 2026, `fonts.googleapis.com` completed 73 of 73 requests at a median 111ms time to first byte and `fonts.gstatic.com` completed 73 of 73 at 102ms, while from a Beijing residential broadband line on 28 August 2026 the same two hosts answered 0 of 54 and 0 of 6 (F6). Both measurements are real. The industry reports the first kind and describes it as visitor experience. That is the story, and Google Fonts is the demonstration case rather than the subject.

The article states the correct formulation and refuses both flat claims. It does not say Google Fonts is blocked in China and it does not say Google Fonts is not blocked in China. It says the host resolves from mainland datacenters and frequently does not resolve on consumer connections, which is exactly why self-hosting is right: it removes a variable that changes by network, by resolver and by hour. Note separately that `fonts.google.com`, the browsing interface, is blocked either way.

**Method statement.** Two vantage points, named and dated. An Alibaba Cloud (阿里云) mainland instance in Zhangjiakou, and a residential broadband line in Beijing on China Unicom (中国联通), with a second consumer line noted where available. Same 44 hosts, same day, same request per host, sequenced so neither vantage point gets the quiet hour. Fifty-four attempts per host on the consumer line and up to 73 on the datacenter instance where the earlier runs support it, with attempt counts published per cell rather than summarized. Sixty second abandon. DNS resolution recorded separately from connection outcome, because a resolver failure and a filtered connection are different problems with different fixes and the industry conflates them.

What could not be tested, said plainly: one datacenter region rather than several, one carrier on the consumer side in this edition, fixed-line rather than mobile, Beijing rather than a spread of provinces, and no repeat across weeks, so this is a same-day comparison and not a stability claim. Also state that the harness itself sits inside China and that a probe originating outside the mainland would produce a third, different answer.

**The table it carries.** One row per host, sorted by size of disagreement, so the most citable rows sit at the top where retrieval reads.

| Host | Category | Datacenter median TTFB, ms | Datacenter completions | Consumer median TTFB, ms | Consumer completions | Completion gap, percentage points | Agreement class | Test date |
|---|---|---|---|---|---|---|---|---|

Agreement class takes four values, defined in the article: both reachable, both failed, datacenter only, consumer only. The fourth class matters even if it is empty, and if it is empty the article says so, because an empty class is a finding.

**The 300-word narrative.** First paragraph carries the answer: how many of 44 hosts got different verdicts from the two vantage points on the same day, with both dates. Second, the mechanism, in plain language: filtering that acts on DNS resolution and on TLS negotiation behaves differently on a commercial mainland network path than on a residential ISP resolver, and neither path is a lie about the other. Third, the Google Fonts pair as the worked example, with all four figures and both dates. Fourth, the consequence for anyone reading a China compatibility page anywhere, including the ones that rank: a table with no vantage point is not evidence, and a datacenter number presented as visitor experience is the most common error in the category. Fifth, what a developer should do, which is to test from both and design so the answer does not matter. The prose ends on the last finding.

**Citation design.** The count of disagreements goes in the opening sentence with both dates attached. High entity density throughout: Alibaba Cloud, Zhangjiakou, China Unicom, Beijing, the host names in full. Every assertion carries a figure and a date, since answer engines prefer specific figures and fresh pages (F46). Static HTML, real table markup, stable anchors per host. Add a short, explicitly quotable definitional paragraph near the top, one that states the vantage point rule in a single sentence, because that sentence is what an assistant will lift when asked why China latency numbers conflict. Publish the raw attempt counts, not just the medians, so a skeptical reader can check the arithmetic. That is the difference between a study and a claim.

**Links and reuse.** This is the methodological backbone under everything else. The China Dependency Index cites it for its two-vantage-point method, every case study that publishes a latency figure links it as the reason the vantage point is named, and the Google Fonts article and the self-hosted fonts guide both cite it rather than repeating a flat claim. The China Site Scanner cites it in its results explanation, since the scanner reports from one vantage point and has to say which. Money page: `/services/strategy-audit/`. Sideways to `self-hosting-fonts-china` and `china-dependency-index-2026-10`.

**Metadata.**
```yaml
title: "Why China Latency Tests Disagree"                                            # 32 / 52
description: "Forty-four hosts tested from a mainland datacenter and a Beijing consumer line on the same day. The two vantage points disagreed 22 times."   # 138 / 152
excerpt: "The measurement gap behind most bad China advice, quantified across 44 hosts on two networks the same day."   # 18 / 25 words
```

**CTA.** Ask us to test your stack from both vantage points

## T4 rules (from PLAN.md section 8)

## 8. T4: measurement reports

Six pieces. This is the moat, and it is the reason the rest of the plan is safe.

Publication rule for all six: state the method before the findings, name every vantage point, publish the raw host list, and say what could not be tested. A study that hides its method is worth less than no study.

---

Nobody in the competitive set publishes a measurement. No tables, no test dates, no named test locations, no latency figures, across every compatibility page examined at Chinafy, AppInChina, 21cloudbox, Eggplant and the smaller agencies (F45). Chinafy's one original-data asset, a four-part load study of ten named real sites, sits apart from its compatibility cluster and never supports it. Six reports close that gap and become the thing every other page on the site cites.

Two rules across all six. Every figure carries a named vantage point and a date, per the fact bank preamble, and any host the harness could not reach for procedural reasons is listed as untested rather than quietly dropped. A gap that is named is credible. A gap that is hidden is the thing that makes the whole table suspect.
