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
locales_at_publish: en fr es de
status: published
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

**Tier rule.** T4 measurement report. Ships in all four locales (en, fr, es, de) in one commit, like T1 (Cyril, 16 October 2026; T4 was English only until then). Register the localized slugs from the brief in `src/i18n/routes.ts` (`guideSlugs`), never in `englishOnlyRoutes`. Run `/deep-translate` on each locale, all three passes, in this order: FR, ES, DE, interactively in the main conversation, never through a subagent, one pass at a time, none skipped. Host IDs, hostnames, URLs, figures and dates stay identical in every locale. Dated slug, never overwritten in any locale. GFW RULE: built from dated GreatFire and 21YunBox data, labelled as theirs; no harness, no mainland probe (Cyril, 2 October 2026). Method before findings, every vantage point named, raw host list published, untested hosts listed as untested. Real HTML tables (markdown tables render to real `<table>` markup), stable anchor per host row.

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
| **Slugs** | en `china-dependency-index-2026-10` · de `china-abhaengigkeitsindex-2026-10` · es `indice-dependencias-china-2026-10` · fr `indice-dependances-chine-2026-10` |
| **Cadence** | Monthly, dated slug, permanent edition. |
| **Length** | 1,400 narrative words plus tables and per-row evidence notes. |
| **Locales** | en, fr, es and de. Published in English on 16 October 2026, localised in fr, es and de the same day (section 1). |

**What it publishes.** An evidence register of 55 dependency entries, established by the October manifest: all 45 entries in the existing dependency table plus six font/script-CDN hosts, reCAPTCHA, Adobe Fonts, the LinkedIn Insight Tag and HubSpot's loader. This corrects the unsupported claim of 54 hosts uniformly tested from two locations. Include untested entries, and distinguish vendor-page targets from actual dependency hosts. The manifest is saved with the output. Every change cell says baseline in edition one.

**Method before findings.** Reuse dated GreatFire URL verdicts and 21YunBox's published probes. Never invent a ChinaWebFoundry test. GreatFire has no named cloud or home-line vantage and supplies no TTFB: those cells stay unavailable. 21YunBox's five-resource study sampled direct requests every ten minutes for twelve hours on 28 August 2026 from Alibaba Cloud (阿里云) cn-zhangjiakou with a 30-second timeout. Its 30 August consumer observations came from 264 page loads on 88 sites on Beijing China Mobile (中国移动) residential broadband. Per-host request counts differ. Wix and the CloudFront product page use separate page-load reports; the latter's Beijing carrier is unstated. Describe every method independently. Request answers are not completed user journeys.

**Findings.** The opening 60 words name the third-party source, both paired-study vantages and dates, and counts for its five-resource subset: one resource unanswered from the cloud, four from the home line. Never present those as a 55-entry failure rate. Google Fonts and GTM split across the two vantages. Use the script-versus-ingestion distinction without claiming that analytics is the worst category. Wix is the dated answers-then-stalls example. No current evidence supports a province-wide or category-wide ranking.

**Table and anchors.** One row per dependency, category then evidence severity, with stable host ID, exact host or explicit absent target, purpose, cloud median TTFB, cloud completions, consumer median TTFB, consumer answers/completions, attributed verdict, source test date and baseline. T4 tables may exceed the usual column limit. Markdown tables render as static HTML; stable IDs are attached to their rows at publication. Give each row a plain-text evidence sentence with publisher and date, including the source URL in a blockquote. No date means untested and no verdict. Missing values remain unavailable. GreatFire's disrupted category is retained in the evidence sentence; it is mapped to intermittent in the index, without inventing a cause. A historical result older than 90 days carries its date and age warning.

**Limits.** October is the edition's compilation month. Test dates remain August or earlier where the source has not retested; current GreatFire rows include October tests. Distinguish reading a source again from retesting a host. No mobile-radio measurements, no nationwide sample, no uniform month-on-month panel experiment. An untested host is visible in the panel. No promise of new tests in December; additions require dated third-party evidence.

**Links and reuse.** Link to Technical Integration, javascript-cdn-china and the live Great Firewall guide. third-party-scripts-china does not exist and is not scheduled; javascript-cdn-china is the settled nearest-topic fallback. The future vantage-point study replaces the last reference when it publishes. Scanner copy and severities remain Cyril's separate product decision and are never changed by this report. At publish, register the fr, es and de slugs in `guideSlugs` (no `englishOnlyRoutes` entry since 16 October 2026), publish the raw panel JSON under /data/china-dependency-index-2026-10.json, and retain the dated source receipts in editorial logs. Do not replace the existing live dependency table with a monthly experiment claim.

**Metadata.**
```yaml
title: "China Dependency Index, October 2026"
description: "A 55-entry register of China web dependencies, using dated GreatFire verdicts and 21YunBox observations. Missing tests and limits included."
excerpt: "Dated third-party evidence for 55 web dependencies, with separate cloud and consumer results where sources publish both."
```

**CTA.** Run your own site against this list

## T4 rules (from PLAN.md section 8)

## 8. T4: measurement reports

**Decided 2 October 2026 (Cyril): no mainland probe, ever.** No harness instance, no Tencent Cloud CAT, no boce.com subscription is bought. "We won't, that's why we have the rule GFW." Every statement of what the Great Firewall does follows the GFW rule in `editorial/CLAUDE.md`: dated GreatFire verdicts and 21YunBox's published probes, labelled as theirs, with vantage point and date, and a host with no dated test listed as untested. Wherever this plan asks for an original measurement, the harness or our own probe, read the GFW rule. No T2 or T4 row is ever gated or blocked on a measurement of our own. Each report below is built from GreatFire and 21YunBox data under that rule; where a brief names our own instance or line, it means the third-party vantage point that supplies the figure, named and attributed.

Six pieces. This is the moat, and it is the reason the rest of the plan is safe.

Publication rule for all six: state the method before the findings, name every vantage point, publish the raw host list, and say what could not be tested. A study that hides its method is worth less than no study.

**Locales.** Every T4 report ships in en, fr, es and de in one commit, like T1 (Cyril, 16 October 2026: "change the rules. propagate to all languages"; T4 was English only until then). The localized slugs listed with each report go into `guideSlugs`; no T4 page goes into `englishOnlyRoutes`. Host IDs, hostnames, URLs and figures stay identical in every locale, so a row anchor such as `#host-recaptcha` cites the same row in all four. The raw panel JSON is one file, linked from every locale.

---

Nobody in the competitive set publishes a measurement. No tables, no test dates, no named test locations, no latency figures, across every compatibility page examined at Chinafy, AppInChina, 21cloudbox, Eggplant and the smaller agencies (F45). Chinafy's one original-data asset, a four-part load study of ten named real sites, sits apart from its compatibility cluster and never supports it. Six reports close that gap and become the thing every other page on the site cites.

Two rules across all six. Every figure carries a named vantage point and a date, per the fact bank preamble, and any host the harness could not reach for procedural reasons is listed as untested rather than quietly dropped. A gap that is named is credible. A gap that is hidden is the thing that makes the whole table suspect.
