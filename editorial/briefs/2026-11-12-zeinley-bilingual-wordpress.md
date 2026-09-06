---
brief_id: T3-04
tier: T3
content_type: casestudy
publish_date: 2026-11-12
week: 10
slot: 2
slot_job: fast
slug: zeinley-bilingual-wordpress
title: "A Bilingual Site That Baidu Could Read"
locales_at_publish: en
facts: [F12, F24, F32]
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
| output | `../output/zeinley-bilingual-wordpress.md` |

**Tier rule.** T3 case study. Publishes into `src/content/casestudies/` under the existing `/work/{client}-{descriptor}/` convention. English at publish, translation earned per the T7 rules. All six template sections, in order. Before and after figures each carry a named Chinese network or cloud region and a date. Client named or the reason for anonymity stated.

**Quality gate, every piece.** After `/createarticle`, run `/content-quality-us`
on the output file, all 18 passes, British spelling, tracker in the run log.
This applies to this piece whatever its tier, type or length. No
`quality_passed_on` date, no `image_ready`, no publish.

Definition of done: the per-piece acceptance list in `../SPEC.md`, plus the
tier-specific boxes for T3.

---

## Brief, verbatim from PLAN.md

#### T3-04. The language code that kept a Chinese edition out of Baidu

| | |
|---|---|
| **Slug** | `work/zeinley-bilingual-wordpress` |
| **Type** | Upgrade of an existing page |
| **Sector** | Consumer brand, bilingual marketing site |
| **Length** | 900 words |
| **Locales** | English and Chinese at publish. This one earns its Chinese edition on the first day, because the subject is Chinese-language publishing. |

**The story in one line.** A bilingual WordPress site had a real Chinese edition written by a human, and it was being emitted under an hreflang value that did not describe it, so the work sat unrewarded until the markup was corrected and the content was rewritten rather than translated.

**Required measurements.** Before: Baidu indexed page count for the Chinese directory on a stated date, taken from Baidu Search Resource Platform (百度搜索资源平台), plus the bounce rate on the Chinese pages from Baidu Tongji (百度统计) over a stated window, plus a note of which hreflang values were being served. After: the same two figures from the same two tools on a stated later date, with the interval named. This is also the study that carries the 51-point bounce rate reduction against a translated site (F32), so the comparison has to be like for like, same traffic source, same window length, same measurement tool, stated.

**What to include about friction.** Polylang's default slug for Simplified Chinese is `zh`, and it emits `hreflang="zh"` on a Simplified-only site rather than `hreflang="zh-Hans"` (F12). Name the override filter. Then name the harder part: fixing the markup did not fix the traffic, because Baidu's realistic timeline to first indexing is two to four weeks and fast inclusion was killed in April 2024 (F24), so nothing moved for a month and the client asked twice whether the work had failed. Also say what stayed broken: the original translation was machine output lightly edited, and rewriting it in Chinese took longer than the technical work by a wide margin.

**Client naming.** Named if the client will allow the honest framing, which includes saying that their previous translation was not good enough. If not, anonymize as "a European consumer brand with an existing Chinese edition," stating that the client asked not to be named in connection with the earlier translation.

**Service line it sells.** Chinese Content.

**Links.** Money page: `/services/chinese-content/`. Sideways to `hreflang-china-wordpress` and `translation-vs-chinese-copywriting`.

**Metadata.**
```yaml
title: "A Bilingual Site That Baidu Could Read"                                      # 38 / 52
description: "One wrong hreflang value, a Chinese edition Baidu treated as a duplicate, and the 51-point bounce gap against a machine-translated site."   # 136 / 152
excerpt: "How a two-character language code held back a Chinese edition, and what changed in Baidu after it was fixed."   # 19 / 25 words
```

**CTA.** Have us audit your Chinese edition

## Shared case study template (from PLAN.md section 7)

### Shared case study template

Every case study on the site uses these six sections, in this order, with these jobs. No case study publishes without all six.

1. **The situation.** Who the client is, what entity structure they had in China, what they were running, and the month it started. Name the stack and the origin region.
2. **What we measured before.** At least one before figure, with the named Chinese network or cloud region it was measured from and the date it was taken. A number without a vantage point does not go in.
3. **What we changed.** The specific work, in the order it happened, with the service line named. No adjectives about quality.
4. **What we measured after.** The same metric, from the same vantage points, by the same method, with the date. If the method changed, say so and say why.
5. **What did not work.** Something that broke, ran long, or got abandoned. Named, not softened.
6. **What is still open.** The unresolved item, the recurring cost, or the thing that will need doing again. Every China site has one.

Two standing rules across all ten. Every study carries at least one before figure and one after figure, each tied to a named Chinese network or cloud region and a date, and if the original test conditions cannot be reconstructed from project records, the measurement gets re-run before the page ships (see the fact bank preamble, and F32 for the published figures that currently travel without a vantage point). And every study names the client or states the reason it does not. Silent anonymity reads as fabrication.
