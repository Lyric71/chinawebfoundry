---
brief_id: T3-07
tier: T3
content_type: casestudy
publish_date: 2026-12-24
week: 16
slot: 2
slot_job: fast
slug: medical-device-icp-filing-china
title: "ICP Filing for a Medical Device Firm"
locales_at_publish: en
facts: [F25, F26, F27]
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
| output | `../output/medical-device-icp-filing-china.md` |

**Tier rule.** T3 case study. Publishes into `src/content/casestudies/` under the existing `/work/{client}-{descriptor}/` convention. English at publish, translation earned per the T7 rules. All six template sections, in order. Before and after figures each carry a named Chinese network or cloud region and a date. Client named or the reason for anonymity stated.

**Quality gate, every piece.** After `/createarticle`, run `/content-quality-us`
on the output file, all 18 passes, British spelling, tracker in the run log.
This applies to this piece whatever its tier, type or length. No
`quality_passed_on` date, no `image_ready`, no publish.

Definition of done: the per-piece acceptance list in `../SPEC.md`, plus the
tier-specific boxes for T3.

---

## Brief, verbatim from PLAN.md

#### T3-07. New slot: medical device manufacturer, entity structure and filing

| | |
|---|---|
| **Slug** | `work/medical-device-icp-filing-china` |
| **Type** | New slot, client not yet chosen |
| **Sector** | Medical devices and diagnostics, regulated B2B |
| **Length** | 1,000 words |
| **Locales** | English only. This one is for a foreign legal and marketing audience. |

**The story in one line.** A medical device manufacturer wanted a mainland site and discovered that the first question was not design or hosting, it was which legal entity would hold the ICP filing (ICP备案) and whether its ownership structure allowed one at all.

**Required measurements.** This study proves out timeline rather than latency, so the before and after are dated milestones and both still need vantage points where a network is involved. Before: the date the mainland entity's documents were submitted, and a reachability measurement of the existing overseas site from a Beijing consumer line and an Alibaba Cloud mainland instance on a stated date, since the whole argument for filing rests on what the unfiled site does. After: the date the filing number was issued, the elapsed working days against the published 10 to 30 working day window (F26), and post-launch response time from the mainland region on a stated date. Publish the elapsed count even when it is bad. Especially when it is bad.

**What to include about friction.** Ports 80 and 443 are closed on a mainland IP until the filing clears, enforced by the provider, so there is no soft launch and no client preview (F25). Say what was done instead during the wait. Name the platform trap: alibabacloud.com is the international platform, cannot deploy to mainland regions and does not support filing, while aliyun.com is the China platform and requires a Chinese business licence and local identity verification, with a Chinese-language-only workflow (F27). Say whether the client started on the wrong one. If foreign ownership above 50% was in play, say how it was handled and note that it remains restricted outside the pilot areas of Beijing, Shanghai Pudong, Hainan Free Trade Port and Shenzhen (F26).

**Client naming.** Anonymized by default, as "a European medical device manufacturer," with the reason stated plainly: regulated companies do not put entity structure decisions in public marketing. Name the sector, the entity type and the province, since those are the details that make the study useful.

**Service line it sells.** Strategy & Audit.

**Links.** Money page: `/services/strategy-audit/`. Sideways to `icp-filing-explained` and `china-entity-options-for-a-website`.

**Metadata.**
```yaml
title: "ICP Filing for a Medical Device Firm"                                        # 36 / 52
description: "A filing that took longer than published timelines, an ownership structure that nearly stopped it, and the ports that stayed closed meanwhile."   # 142 / 152
excerpt: "What a real ICP filing timeline looks like against the published one, and the ownership question that decided it."   # 19 / 25 words
```

**CTA.** Book a China readiness assessment

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
