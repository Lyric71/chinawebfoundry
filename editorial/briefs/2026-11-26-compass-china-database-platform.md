---
brief_id: T3-05
tier: T3
content_type: casestudy
publish_date: 2026-11-26
week: 12
slot: 2
slot_job: fast
slug: compass-china-database-platform
title: "Rebuilding a Search Index Inside China"
locales_at_publish: en
facts: [F33, F39]
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
| output | `../output/compass-china-database-platform.md` |

**Tier rule.** T3 case study. Publishes into `src/content/casestudies/` under the existing `/work/{client}-{descriptor}/` convention. English at publish, translation earned per the T7 rules. All six template sections, in order. Before and after figures each carry a named Chinese network or cloud region and a date. Client named or the reason for anonymity stated.

**Quality gate, every piece.** After `/createarticle`, run `/content-quality-us`
on the output file, all 18 passes, British spelling, tracker in the run log.
This applies to this piece whatever its tier, type or length. No
`quality_passed_on` date, no `image_ready`, no publish.

Definition of done: the per-piece acceptance list in `../SPEC.md`, plus the
tier-specific boxes for T3.

---

## Brief, verbatim from PLAN.md

#### T3-05. Rebuilding a database platform's search inside the mainland

| | |
|---|---|
| **Slug** | `work/compass-china-database-platform` |
| **Type** | Upgrade of an existing page |
| **Sector** | Data platform, subscription B2B |
| **Length** | 1,000 words |
| **Locales** | English at publish. Chinese earned once the platform has mainland subscribers to serve. |

**The story in one line.** A searchable database platform ran its search on a hosted API that answered from China and then never finished, so the product looked alive and did nothing, and the fix was a self-hosted index on an Aliyun instance.

**Required measurements.** This is the clearest illustration in the portfolio of the failure mode that matters most: answers, then hangs (F33). Before: time to first byte and completion rate for the search API measured from an Alibaba Cloud mainland instance on a stated date, three attempts, 60 second abandon, and the same from a Beijing consumer line on the same date. Algolia measured 1,027ms then zero of three completions from the datacenter probe, the slowest host in the set (F39), so if the platform used it, cite the number and the date and mark it as CWF's own probe. After: query latency and completion rate for the self-hosted index from the same two vantage points, same method, stated date, plus the index size and the reindex schedule.

**What to include about friction.** Self-hosting search moved a dependency into a maintenance obligation. Say what the reindex job costs to run and who runs it. Say what was lost against the hosted product: typo tolerance, synonym management and the analytics dashboard all had to be rebuilt or given up, and name which. Chinese-language tokenization is the open one and should be described as partly solved, not solved.

**Client naming.** Named if the platform is a public product. If the client considers its China deployment commercially sensitive, anonymize as "a subscription data platform serving China market researchers," with that reason stated.

**Service line it sells.** Plugins & Extensions.

**Links.** Money page: `/services/plugins-extensions/`. Sideways to `third-party-scripts-china` and `self-hosting-search-china`.

**Metadata.**
```yaml
title: "Rebuilding a Search Index Inside China"                                      # 38 / 52
description: "A hosted search API that answered from Beijing and never completed, replaced by a self-hosted index on an Aliyun instance in Shanghai."   # 134 / 152
excerpt: "The failure mode that looks like working software, the measurements that exposed it, and what the replacement index cost."   # 19 / 25 words
```

**CTA.** Send us the dependency list from your site

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
