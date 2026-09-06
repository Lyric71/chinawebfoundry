---
brief_id: T3-02
tier: T3
content_type: casestudy
publish_date: 2026-10-15
week: 06
slot: 2
slot_job: fast
slug: snf-china-wordpress
title: "Hosting a Chemicals Group in Mainland China"
locales_at_publish: en
gate: "client sign-off"
facts: [F32]
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
| output | `../output/snf-china-wordpress.md` |

**Tier rule.** T3 case study. Publishes into `src/content/casestudies/` under the existing `/work/{client}-{descriptor}/` convention. English at publish, translation earned per the T7 rules. All six template sections, in order. Before and after figures each carry a named Chinese network or cloud region and a date. Client named or the reason for anonymity stated.

**Quality gate, every piece.** After `/createarticle`, run `/content-quality-us`
on the output file, all 18 passes, British spelling, tracker in the run log.
This applies to this piece whatever its tier, type or length. No
`quality_passed_on` date, no `image_ready`, no publish.

Definition of done: the per-piece acceptance list in `../SPEC.md`, plus the
tier-specific boxes for T3.

---

## Brief, verbatim from PLAN.md

#### T3-02. Ninety days of uptime for a chemicals group, with the outages left in

| | |
|---|---|
| **Slug** | `work/snf-china-wordpress` |
| **Type** | Upgrade of an existing page |
| **Sector** | Specialty chemicals, industrial B2B |
| **Length** | 850 words |
| **Locales** | English at publish. Chinese earned only if the page starts drawing Baidu impressions for hosting queries. |

**The story in one line.** A mainland-hosted corporate site ran 90 days on an Alibaba Cloud (阿里云) mainland region, and this is the full record including the two windows where it did not.

**Required measurements.** The 99.98% over 90 days figure and the 48ms, 36ms and 61ms response times from Beijing, Shanghai and Guangzhou (F32) both live here, and both need their vantage points written in. Before: response time and availability from the previous overseas origin, measured from each of the three Chinese cities on named carriers, with the date range. After: the same three cities, same carriers, same 90-day window, with the monitoring interval stated. 99.98% over 90 days is roughly 26 minutes of downtime, so name what those 26 minutes were and when. A percentage with no incident behind it is not a measurement, it is a slogan.

**What to include about friction.** The missing 0.02%. Say what caused each window, how long detection took, and whether the client noticed before the monitor did. Also say what the monitoring itself cannot see: an uptime probe running from inside the mainland will not catch a problem that only appears to visitors on a particular carrier, which is the same vantage point problem that runs through the whole plan.

**Client naming.** Named. If the group's communications policy blocks it, anonymize as "a French specialty chemicals group with mainland manufacturing," and state that the reason is corporate communications policy, not a poor result.

**Service line it sells.** China Hosting.

**Links.** Money page: `/services/china-hosting/`. Sideways to `china-hosting-comparison` and `no-managed-wordpress-in-china`.

**Metadata.**
```yaml
title: "Hosting a Chemicals Group in Mainland China"                                 # 43 / 52
description: "Ninety days of uptime data, response times from Beijing, Shanghai and Guangzhou, and the two incidents that produced the missing 0.02%."   # 135 / 152
excerpt: "A 90-day hosting record with the outages left in, measured from three Chinese cities on named networks."   # 17 / 25 words
```

**CTA.** Get a hosting proposal with the numbers attached

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
