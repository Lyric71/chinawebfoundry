---
brief_id: T5-02
tier: T5
content_type: guide-en-first
publish_date: 2026-12-08
week: 14
slot: 1
slot_job: substantial
slug: china-analytics-stack
title: "The China Analytics Stack After GA4"
suggested_category: Technology
locales_at_publish: en
facts: [F3, F21, F23, F33, F34, F41, F42, F45]
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
| output | `../output/china-analytics-stack.md` |

**Tier rule.** T5 editorial guide. English first. Translation only after day 90 and only on evidence (organic entries, an attributed inquiry, an observed AI citation), through a T7 slot.

**Quality gate, every piece.** After `/createarticle`, run `/content-quality-us`
on the output file, all 18 passes, British spelling, tracker in the run log.
This applies to this piece whatever its tier, type or length. No
`quality_passed_on` date, no `image_ready`, no publish.

Definition of done: the per-piece acceptance list in `../SPEC.md`, plus the
tier-specific boxes for T5.

---

## Brief, verbatim from PLAN.md

#### T5-02. The China Analytics Stack After GA4

| | |
|---|---|
| **Slugs** | en `china-analytics-stack` · de `web-analyse-china` · es `analitica-web-china` · fr `analytics-site-chine` |
| **Target** | website analytics china |
| **Secondary** | google analytics blocked china, baidu tongji setup, matomo china |
| **Intent** | Informational moving to commercial. The dashboard has gone flat and someone upstairs wants numbers. |
| **Incumbent** | Thin listicles that name Baidu Tongji and stop. |
| **Length** | 1,400 words |

**Angle.** Replacing GA4 in China is usually written as a tool swap. It is not. Two independent forces push the same way: the collection beacon does not complete, and PIPL makes an overseas analytics endpoint a cross-border transfer decision rather than a vendor preference. Self-hosting Plausible or Matomo on Aliyun (阿里云) is the only answer that resolves both at once, and that is the sentence nobody else writes.

**Facts.** F3 (lead), F34, F33, F23, F41, F21, F42.

**Outline.**
1. The week the numbers stopped arriving (F3)
2. Blocked is the easy case. Answers then hangs is the hard one (F33, F34)
3. Baidu Tongji (百度统计): what it gives you, what it costs you, and how it actually gets installed (F23)
4. Self-hosted Plausible or Matomo on Aliyun (F34, F41)
5. The PIPL question, and why it makes this a compliance decision (F3)
6. Tag management when the container is intermittent (F3)
7. What to instrument in the first two weeks
8. Frequently asked

**Required table.** Host, verdict, where it was measured, and the date. Populate it from F34 only, including the Amplitude split where the CDN answers and the API does not, and the Plausible and Matomo completion times. Every row carries a vantage point. This table is the reason the page outranks the listicles, because per F45 nobody in the competitive set publishes a measurement at all.

**Links.** Up to `/website-in-china/`. Sideways to `google-analytics-china` and `china-data-privacy-pipl-dsl`.

**Metadata.**
```yaml
title: "The China Analytics Stack After GA4"  # 35 / 52
description: "Google Analytics does not report from China and PIPL is the second reason. Baidu Tongji, self-hosted Matomo, and how to choose."  # 127 / 152
excerpt: "What replaces a blocked GA4 and Tag Manager stack, with measured numbers, and why the choice is a compliance call too."  # 21 / 25
```

**CTA.** Have us rebuild your China measurement stack
