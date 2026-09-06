---
brief_id: T3-09
tier: T3
content_type: casestudy
publish_date: 2027-01-21
week: 20
slot: 2
slot_job: fast
slug: b2b-services-geo-china-ai-search
title: "Getting Cited by Chinese AI Assistants"
locales_at_publish: en
facts: [F46]
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
| output | `../output/b2b-services-geo-china-ai-search.md` |

**Tier rule.** T3 case study. Publishes into `src/content/casestudies/` under the existing `/work/{client}-{descriptor}/` convention. English at publish, translation earned per the T7 rules. All six template sections, in order. Before and after figures each carry a named Chinese network or cloud region and a date. Client named or the reason for anonymity stated.

**Quality gate, every piece.** After `/createarticle`, run `/content-quality-us`
on the output file, all 18 passes, British spelling, tracker in the run log.
This applies to this piece whatever its tier, type or length. No
`quality_passed_on` date, no `image_ready`, no publish.

Definition of done: the per-piece acceptance list in `../SPEC.md`, plus the
tier-specific boxes for T3.

---

## Brief, verbatim from PLAN.md

#### T3-09. New slot: B2B professional services firm, cited by Chinese AI assistants

| | |
|---|---|
| **Slug** | `work/b2b-services-geo-china-ai-search` |
| **Type** | New slot, client not yet chosen |
| **Sector** | Professional or technical services, B2B consideration purchase |
| **Length** | 1,000 words |
| **Locales** | English and Chinese. The Chinese edition is the thing being tested, so it has to exist. |

**The story in one line.** A services firm wanted to know whether Chinese AI assistants would cite it when a buyer asked about its category, the answer in month one was no, and this is the record of what changed the answer and how confidently that can be claimed.

**Required measurements.** Before: a fixed panel of Chinese-language buyer questions, run against DeepSeek, Doubao (豆包), Kimi and Yuanbao (元宝) on a stated date from a mainland connection, recording citation presence, competitor citations and the source pages the assistants named. Publish the panel of questions in full. After: the identical panel, identical assistants, on a stated later date, with the interval named and the deltas shown per assistant rather than averaged into one number. Add server-side retrieval bot hits from the log across the same period. Every figure gets a date because these systems change under you.

**What to include about friction.** State the limit before the result: assistant answers are not deterministic, model versions change without notice, and a citation appearing twice on one date is weak evidence. Say how many runs per question were used and say what would falsify the finding. Then the mechanical friction: pages have to be retrievable without JavaScript, since ChatGPT's retrieval bot does not execute JavaScript (F46), and if the client's site rendered client side, say what the rebuild cost. Also say which assistant never cited the client at all, because that is the most useful sentence in the study.

**Client naming.** Named. A firm buying visibility work benefits from appearing in a study about visibility.

**Service line it sells.** GEO China.

**Links.** Money page: `/services/geo-china/`. Sideways to `chinese-ai-search-assistants` and `static-html-and-ai-crawlers`.

**Metadata.**
```yaml
title: "Getting Cited by Chinese AI Assistants"                                      # 38 / 52
description: "Tracking whether DeepSeek, Doubao, Kimi and Yuanbao cite a B2B site, what changed the answer, and where the tracking is still weak."   # 131 / 152
excerpt: "A repeatable way to measure AI answer citations in China, and the honest limits of what the measurement proves."   # 19 / 25 words
```

**CTA.** Ask how your brand answers in Chinese AI search

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
