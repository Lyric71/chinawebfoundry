---
brief_id: T4-04
tier: T4
content_type: report
publish_date: 2026-12-25
week: 16
slot: 3
slot_job: upgrade or report
slug: china-dependency-index-2026-12
title: "China Dependency Index, December 2026"
suggested_category: Technology
locales_at_publish: en
gate: "harness"
facts: [F42]
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
| output | `../output/china-dependency-index-2026-12.md` |

**Tier rule.** T4 measurement report. English only, dated slug, never overwritten. GATED ON THE HARNESS. Method before findings, every vantage point named, raw host list published, untested hosts listed as untested. Real HTML tables (markdown tables render to real `<table>` markup), stable anchor per host row.

**Quality gate, every piece.** After `/createarticle`, run `/content-quality-us`
on the output file, all 18 passes, British spelling, tracker in the run log.
This applies to this piece whatever its tier, type or length. No
`quality_passed_on` date, no `image_ready`, no publish.

Definition of done: the per-piece acceptance list in `../SPEC.md`, plus the
tier-specific boxes for T4.

---

## Brief, verbatim from PLAN.md

#### T4-04. China Dependency Index, December 2026

Delta against T4-01 and T4-03.

- **Slug** `china-dependency-index-2026-12`. Panel expands to 64 hosts.
- **The eleven join.** Crisp, Tawk.to, Loom, Sanity, Netlify, Bootstrap CDN, `js.stripe.com`, the LinkedIn Insight Tag, Turnstile, Adobe Fonts and Font Awesome enter the panel with first-time verdicts, plus refreshed verdicts for Marketo and the HubSpot script, whose prior data was over 90 days old (F42). Each new row is marked as a first observation with no change value, and the article says which needed a provisioned account before a real endpoint could be exercised.
- **First quarterly view.** A second table showing the three editions side by side per host, October, November, December, with a stability count. This is the section that will get cited, because nobody else has three dated observations of anything.
- **Method statement gains** a short paragraph on panel expansion policy: how a host enters the panel, how one leaves, and the commitment that a host is never removed for producing an inconvenient result.
- **Narrative shifts.** Lead on the quarterly finding, which is how many verdicts held steady across three months, then the new entrants, then the movement.

**Metadata.**
```yaml
title: "China Dependency Index, December 2026"                                       # 37 / 52
description: "Sixty-four hosts across three mainland vantage points, with a quarter of movement, the eleven newly probed hosts, and the full method."   # 134 / 152
excerpt: "December closes the first quarter of the index, adds eleven previously untested hosts, and reports what moved over 90 days."   # 20 / 25 words
```

## T4 rules (from PLAN.md section 8)

## 8. T4: measurement reports

Six pieces. This is the moat, and it is the reason the rest of the plan is safe.

Publication rule for all six: state the method before the findings, name every vantage point, publish the raw host list, and say what could not be tested. A study that hides its method is worth less than no study.

---

Nobody in the competitive set publishes a measurement. No tables, no test dates, no named test locations, no latency figures, across every compatibility page examined at Chinafy, AppInChina, 21cloudbox, Eggplant and the smaller agencies (F45). Chinafy's one original-data asset, a four-part load study of ten named real sites, sits apart from its compatibility cluster and never supports it. Six reports close that gap and become the thing every other page on the site cites.

Two rules across all six. Every figure carries a named vantage point and a date, per the fact bank preamble, and any host the harness could not reach for procedural reasons is listed as untested rather than quietly dropped. A gap that is named is credible. A gap that is hidden is the thing that makes the whole table suspect.
