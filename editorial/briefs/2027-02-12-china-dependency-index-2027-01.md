---
brief_id: T4-06
tier: T4
content_type: report
publish_date: 2027-02-12
week: 23
slot: 3
slot_job: upgrade or report
slug: china-dependency-index-2027-01
title: "China Dependency Index, January 2027"
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
| output | `../output/china-dependency-index-2027-01.md` |

**Tier rule.** T4 measurement report. English only, dated slug, never overwritten. GATED ON THE HARNESS. Method before findings, every vantage point named, raw host list published, untested hosts listed as untested. Real HTML tables (markdown tables render to real `<table>` markup), stable anchor per host row.

**Quality gate, every piece.** After `/createarticle`, run `/content-quality-us`
on the output file, all 18 passes, British spelling, tracker in the run log.
This applies to this piece whatever its tier, type or length. No
`quality_passed_on` date, no `image_ready`, no publish.

Definition of done: the per-piece acceptance list in `../SPEC.md`, plus the
tier-specific boxes for T4.

---

## Brief, verbatim from PLAN.md

#### T4-06. China Dependency Index, January 2027

Delta against T4-04.

- **Slug** `china-dependency-index-2027-01`. Panel holds at 64 hosts.
- **Fourth vantage point added.** A mobile connection in Guangzhou on China Mobile (中国移动), which introduces the carrier question and the mobile question together. The method statement has to separate the two and say the edition cannot fully isolate them yet, since one line cannot distinguish a carrier effect from a mobile network effect. Say it rather than let a reader assume otherwise.
- **Stability ranking introduced.** With four dated editions, every host gets a stability score based on how many times its verdict has changed, published as a sorted list. Hosts that have never moved across four editions are named as such, and that list is more useful to a developer than the failure list.
- **Table gains** Guangzhou mobile median TTFB, Guangzhou mobile completions, and a stability column carrying the four-edition change count.
- **Narrative shifts.** Lead on stability rather than on movement: which dependencies can be planned around and which cannot. Then the mobile and carrier finding, carefully hedged. Then the month's movement.
- **Retirement policy stated.** Any host that has produced an identical verdict across all four editions and appears in no current client stack moves to a reduced quarterly cadence, with the reason published so the panel change is not mistaken for a disappearance.

**Metadata.**
```yaml
title: "China Dependency Index, January 2027"                                        # 36 / 52
description: "Sixty-four hosts on four mainland networks, including Guangzhou China Mobile, with the first stability ranking across four editions."   # 132 / 152
excerpt: "January adds a fourth network and ranks every host by how much its verdict has moved across four monthly editions."   # 20 / 25 words
```

## T4 rules (from PLAN.md section 8)

## 8. T4: measurement reports

Six pieces. This is the moat, and it is the reason the rest of the plan is safe.

Publication rule for all six: state the method before the findings, name every vantage point, publish the raw host list, and say what could not be tested. A study that hides its method is worth less than no study.

---

Nobody in the competitive set publishes a measurement. No tables, no test dates, no named test locations, no latency figures, across every compatibility page examined at Chinafy, AppInChina, 21cloudbox, Eggplant and the smaller agencies (F45). Chinafy's one original-data asset, a four-part load study of ten named real sites, sits apart from its compatibility cluster and never supports it. Six reports close that gap and become the thing every other page on the site cites.

Two rules across all six. Every figure carries a named vantage point and a date, per the fact bank preamble, and any host the harness could not reach for procedural reasons is listed as untested rather than quietly dropped. A gap that is named is credible. A gap that is hidden is the thing that makes the whole table suspect.
