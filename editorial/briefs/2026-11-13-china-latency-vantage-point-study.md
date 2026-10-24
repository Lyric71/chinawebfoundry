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
| output | `../output/china-latency-vantage-point-study.md` |

**Tier rule.** T4 measurement report. Ships in all four locales (en, fr, es, de) in one commit, like T1 (Cyril, 16 October 2026; T4 was English only until then). Register the localized slugs from the brief in `src/i18n/routes.ts` (`guideSlugs`), never in `englishOnlyRoutes`. Run `/deep-translate` on each locale, all three passes, in this order: FR, ES, DE, interactively in the main conversation, never through a subagent, one pass at a time, none skipped. Host IDs, hostnames, URLs, figures and dates stay identical in every locale. Dated slug, never overwritten in any locale. GFW RULE: built from dated GreatFire and 21YunBox data, labelled as theirs; no harness, no mainland probe (Cyril, 2 October 2026). Method before findings, every vantage point named, raw host list published, untested hosts listed as untested. Real HTML tables (markdown tables render to real `<table>` markup), stable anchor per host row.

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
| **Slugs** | en `china-latency-vantage-point-study` · de `china-latenz-messpunkte` · es `latencia-china-puntos-de-medicion` · fr `latence-chine-points-de-mesure` |
| **Length** | 2,200 words plus the table |
| **Locales** | en, fr, es and de in one commit (section 1) |

**What it publishes.** Explain why 21YunBox's named cloud and consumer observations disagree, using only dated published evidence. The worked example is the paired five-resource study: Alibaba Cloud (阿里云) cn-zhangjiakou on 28 August 2026 and Beijing China Mobile (中国移动) residential broadband on 30 August 2026. Retain per-host attempt counts and separate timing columns. The Google Fonts pair and Google Tag Manager demonstrate a split; jsDelivr and reCAPTCHA supply the comparison cases. No source supports the former brief's 44-host, same-day experiment or its invented 22 disagreements.

**Method and limits.** Third-party sources only, no mainland infrastructure owned or provisioned by ChinaWebFoundry. The cloud resource study used a 30-second timeout; the home observations came from browser page loads with a 60-second page-load ceiling and unequal per-host request counts. Different dates and methods remain visible. No mobile-radio finding, national success rate or inferred DNS cause. A changed classification or a newly discovered older test is not a new measurement. Re-fetch every cited source twice. Unknown fields remain unavailable.

**Structure.** State method, paired-subset counts, named networks and dates in the opening. Compare the common resources in a static Markdown table with counts rather than percentages. Explain how a first byte differs from completion and how a vendor-page test differs from the asset a visitor needs. Discuss missing regions, carriers and dates without promising to collect them. Use the October index as the raw evidence register; include the source URLs directly. Link to Strategy Audit and the existing Google Fonts guide. Apply settled link fallbacks if a proposed font guide is absent.

**Metadata.**
```yaml
title: "Why China Latency Tests Disagree"
description: "Why cloud and home-line results differ in China, using dated 21YunBox observations, exact hosts and separate request counts."
excerpt: "The same resource can answer from a cloud probe and fail on a home connection. Read the network, method and date together."
```

**On publish.** Repoint the October index's live Great Firewall method reference to this study, using its corresponding section anchor. Do not alter scanner copy or severities.

**CTA.** Review your site's external requests

## T4 rules (from PLAN.md section 8)

## 8. T4: measurement reports

**Decided 2 October 2026 (Cyril): no mainland probe, ever.** No harness instance, no Tencent Cloud CAT, no boce.com subscription is bought. "We won't, that's why we have the rule GFW." Every statement of what the Great Firewall does follows the GFW rule in `editorial/CLAUDE.md`: dated GreatFire verdicts and 21YunBox's published probes, labelled as theirs, with vantage point and date, and a host with no dated test listed as untested. Wherever this plan asks for an original measurement, the harness or our own probe, read the GFW rule. No T2 or T4 row is ever gated or blocked on a measurement of our own. Each report below is built from GreatFire and 21YunBox data under that rule; where a brief names our own instance or line, it means the third-party vantage point that supplies the figure, named and attributed.

Six pieces. This is the moat, and it is the reason the rest of the plan is safe.

Publication rule for all six: state the method before the findings, name every vantage point, publish the raw host list, and say what could not be tested. A study that hides its method is worth less than no study.

**Locales.** Every T4 report ships in en, fr, es and de in one commit, like T1 (Cyril, 16 October 2026: "change the rules. propagate to all languages"; T4 was English only until then). The localized slugs listed with each report go into `guideSlugs`; no T4 page goes into `englishOnlyRoutes`. Host IDs, hostnames, URLs and figures stay identical in every locale, so a row anchor such as `#host-recaptcha` cites the same row in all four. The raw panel JSON is one file, linked from every locale.

---

Nobody in the competitive set publishes a measurement. No tables, no test dates, no named test locations, no latency figures, across every compatibility page examined at Chinafy, AppInChina, 21cloudbox, Eggplant and the smaller agencies (F45). Chinafy's one original-data asset, a four-part load study of ten named real sites, sits apart from its compatibility cluster and never supports it. Six reports close that gap and become the thing every other page on the site cites.

Two rules across all six. Every figure carries a named vantage point and a date, per the fact bank preamble, and any host the harness could not reach for procedural reasons is listed as untested rather than quietly dropped. A gap that is named is credible. A gap that is hidden is the thing that makes the whole table suspect.
