---
brief_id: T4-03
tier: T4
content_type: report
publish_date: 2026-12-04
week: 13
slot: 3
slot_job: upgrade or report
slug: china-dependency-index-2026-11
title: "China Dependency Index, November 2026"
suggested_category: Technology
locales_at_publish: en
gate: "harness"
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
| output | `../output/china-dependency-index-2026-11.md` |

**Tier rule.** T4 measurement report. English only, dated slug, never overwritten. GATED ON THE HARNESS. Method before findings, every vantage point named, raw host list published, untested hosts listed as untested. Real HTML tables (markdown tables render to real `<table>` markup), stable anchor per host row.

**Quality gate, every piece.** After `/createarticle`, run `/content-quality-us`
on the output file, all 18 passes, British spelling, tracker in the run log.
This applies to this piece whatever its tier, type or length. No
`quality_passed_on` date, no `image_ready`, no publish.

Definition of done: the per-piece acceptance list in `../SPEC.md`, plus the
tier-specific boxes for T4.

---

## Brief, verbatim from PLAN.md

#### T4-03. China Dependency Index, November 2026

Delta against T4-01. Everything not listed here is unchanged.

- **Slug** `china-dependency-index-2026-11`. Same panel of 53 hosts.
- **Third vantage point added.** A residential line in Shanghai on China Telecom (中国电信), so the index reports one datacenter and two consumer networks in different cities on different carriers. The method statement gains a paragraph on why a second consumer city was added and what it can and cannot prove with one month of data.
- **Change column goes live.** October was the baseline, so November is the first edition where the change column carries values. Define the movement rule in the article: a verdict change requires the same direction on at least two of three vantage points, otherwise it is logged as unstable rather than as movement.
- **Narrative shifts.** The 300 words lead on what moved rather than on the panel size, and name every host whose verdict changed, including the ones that improved. An index that only reports deterioration is an argument, not an index.
- **Table gains three columns.** Shanghai consumer median TTFB, Shanghai consumer completions, and city agreement, which records whether Beijing and Shanghai returned the same verdict.
- **Still untested.** The eleven held-out hosts remain named and dated for December.

**Metadata.**
```yaml
title: "China Dependency Index, November 2026"                                       # 37 / 52
description: "Fifty-three hosts retested from Alibaba Cloud Zhangjiakou and two consumer lines in Beijing and Shanghai. Full table, method and every change."   # 142 / 152
excerpt: "The November edition adds a Shanghai China Telecom line and reports every verdict that moved since October."   # 17 / 25 words
```

## T4 rules (from PLAN.md section 8)

## 8. T4: measurement reports

Six pieces. This is the moat, and it is the reason the rest of the plan is safe.

Publication rule for all six: state the method before the findings, name every vantage point, publish the raw host list, and say what could not be tested. A study that hides its method is worth less than no study.

---

Nobody in the competitive set publishes a measurement. No tables, no test dates, no named test locations, no latency figures, across every compatibility page examined at Chinafy, AppInChina, 21cloudbox, Eggplant and the smaller agencies (F45). Chinafy's one original-data asset, a four-part load study of ten named real sites, sits apart from its compatibility cluster and never supports it. Six reports close that gap and become the thing every other page on the site cites.

Two rules across all six. Every figure carries a named vantage point and a date, per the fact bank preamble, and any host the harness could not reach for procedural reasons is listed as untested rather than quietly dropped. A gap that is named is credible. A gap that is hidden is the thing that makes the whole table suspect.
