---
brief_id: T5-06
tier: T5
content_type: guide-en-first
publish_date: 2027-01-26
week: 21
slot: 1
slot_job: substantial
slug: china-bilingual-content-ops
title: "Running an English and Chinese Site"
suggested_category: Content
locales_at_publish: en
facts: [F12, F13, F14, F41, F46]
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
| output | `../output/china-bilingual-content-ops.md` |

**Tier rule.** T5 editorial guide. English first. Translation only after day 90 and only on evidence (organic entries, an attributed inquiry, an observed AI citation), through a T7 slot.

**Quality gate, every piece.** After `/createarticle`, run `/content-quality-us`
on the output file, all 18 passes, British spelling, tracker in the run log.
This applies to this piece whatever its tier, type or length. No
`quality_passed_on` date, no `image_ready`, no publish.

Definition of done: the per-piece acceptance list in `../SPEC.md`, plus the
tier-specific boxes for T5.

---

## Brief, verbatim from PLAN.md

#### T5-06. Running an English and Chinese Site Together

| | |
|---|---|
| **Slugs** | en `china-bilingual-content-ops` · de `zweisprachige-website-china` · es `web-bilingue-china` · fr `site-bilingue-chine` |
| **Target** | bilingual website china |
| **Secondary** | chinese website translation workflow, hreflang chinese, wpml polylang china |
| **Intent** | Informational. A content lead who owns two languages and one calendar and is losing to the second one. |
| **Incumbent** | Translation vendor blogs. Nothing that treats it as an editorial operation. |
| **Length** | 1,600 words |

**Angle.** Bilingual publishing is usually sold as a plugin decision. It is a staffing and sign-off decision that a plugin then implements, badly, if nobody checked the defaults. The article couples the operational half, translation memory, glossary, who approves Chinese copy, to the technical half where the plugins quietly disagree about what Simplified Chinese is even called, and shows that machine translation fails on a China site for a reason specific to China rather than a general quality complaint.

**Facts.** F12 (lead), F14, F13, F41, F46.

**Outline.**
1. Two languages, one publishing calendar, and where it slips
2. Language codes: what the plugins actually emit (F12, F14)
3. Runtime translation calls, and the ones that stall on a mainland server (F13)
4. Translation memory and the glossary that has to exist before the first brief
5. Review workflow: who writes, who edits, who signs off in country
6. Why machine translation fails here specifically, beyond quality
7. Cadence and freshness, and what passage-level retrieval rewards (F46)
8. Frequently asked

**Precision requirement.** Quote the strings exactly. Polylang's default `zh_CN` slug is `zh` and it emits `hreflang="zh"`, never `hreflang="zh-Hans"`, with `pll_rel_hreflang_attributes` as the override. WPML defaults to `/zh-hans/`. Name the plugin versions from F12 and F14 and the date they were read. Getting one character wrong here costs the article its authority with exactly the reader it is for.

**Links.** Up to `/website-in-china/`. Sideways to `china-website-localisation` and `baidu-seo-ranking-in-china`.

**Metadata.**
```yaml
title: "Running an English and Chinese Site"  # 35 / 52
description: "Translation memory, review workflow, who signs off, and the language codes your plugin gets wrong. Bilingual publishing as one operation."  # 137 / 152
excerpt: "How to run two languages on one calendar, and why machine translation fails on a China site for reasons specific to China."  # 22 / 25
```

**CTA.** Talk to our Chinese editorial team
