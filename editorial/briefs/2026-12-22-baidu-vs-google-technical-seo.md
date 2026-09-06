---
brief_id: T5-05
tier: T5
content_type: guide-en-first
publish_date: 2026-12-22
week: 16
slot: 1
slot_job: substantial
slug: baidu-vs-google-technical-seo
title: "Baidu vs Google: Technical Differences"
suggested_category: Search
locales_at_publish: en
facts: [F15, F16, F18, F19, F20, F21, F22, F23, F24]
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
| output | `../output/baidu-vs-google-technical-seo.md` |

**Tier rule.** T5 editorial guide. English first. Translation only after day 90 and only on evidence (organic entries, an attributed inquiry, an observed AI citation), through a T7 slot.

**Quality gate, every piece.** After `/createarticle`, run `/content-quality-us`
on the output file, all 18 passes, British spelling, tracker in the run log.
This applies to this piece whatever its tier, type or length. No
`quality_passed_on` date, no `image_ready`, no publish.

Definition of done: the per-piece acceptance list in `../SPEC.md`, plus the
tier-specific boxes for T5.

---

## Brief, verbatim from PLAN.md

#### T5-05. Baidu vs Google: The Technical Differences

| | |
|---|---|
| **Slugs** | en `baidu-vs-google-technical-seo` · de `baidu-google-technisches-seo` · es `baidu-google-seo-tecnico` · fr `baidu-google-seo-technique` |
| **Target** | baidu vs google seo |
| **Secondary** | baidu technical seo, does baidu render javascript, baidu crawler |
| **Intent** | Informational. An SEO lead who knows Google well and needs the deltas, not a beginner explainer. |
| **Incumbent** | Recycled 2017-era posts repeating claims that were already out of date when written. |
| **Length** | 1,500 words |

**Angle.** Almost every English-language comparison of Baidu and Google is a strategy piece wearing a technical costume. This one is only the deltas, and it corrects the single most repeated error in the category: Baiduspider renders JavaScript and has done since April 2017, which means the standard advice traces to a source three months older than the announcement that invalidated it. Server-side rendering is still the right call, but for a reason the reader has probably never been given.

**Facts.** F19 (lead), F20, F21, F22, F24, F15, F16, F18, F23.

**Outline.**
1. Where the two crawlers are genuinely doing different work
2. Rendering: what Baiduspider-render actually fetches, and when the claim went stale (F19)
3. Verifying the crawler by reverse DNS, never by user agent (F20)
4. Structured data, and where the two diverge (F21)
5. Submission: the push endpoint, and what replaced fast inclusion (F22, F24)
6. Realistic timelines to first indexing (F24)
7. Blocking Baiduspider by accident, through security and cache plugin defaults (F15, F16, F18)
8. What your SEO plugin does, which is one meta tag (F21, F23)

**Do not.** Two claims from the Do Not Assert list are the entire reason this article exists, so name them and retire them, but do not overcorrect. Do not write that Baidu ignores JavaScript, and do not write that Baidu reads schema.org JSON-LD from Yoast. Per F19, Baidu publishes nothing on rendering coverage or queue latency, so present server-side rendering as risk reduction and never as documented Baidu policy.

**Links.** Up to `/website-in-china/`. Sideways to `baidu-structured-data` and `submitting-urls-to-baidu`.

**Metadata.**
```yaml
title: "Baidu vs Google: Technical Differences"  # 38 / 52
description: "Crawl, render, structured data and submission. The technical deltas between Baidu and Google, without the strategy padding."  # 123 / 152
excerpt: "What actually differs for an SEO who already knows Google, including the JavaScript claim that has been wrong since 2017."  # 20 / 25
```

**CTA.** Get a Baidu technical audit
