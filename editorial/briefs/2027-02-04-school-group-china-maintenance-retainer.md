---
brief_id: T3-10
tier: T3
content_type: casestudy
publish_date: 2027-02-04
week: 22
slot: 2
slot_job: fast
slug: school-group-china-maintenance-retainer
title: "Two Years of Maintenance in China"
locales_at_publish: en
facts: [F4, F8]
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
| output | `../output/school-group-china-maintenance-retainer.md` |

**Tier rule.** T3 case study. Publishes into `src/content/casestudies/` under the existing `/work/{client}-{descriptor}/` convention. English at publish, translation earned per the T7 rules. All six template sections, in order. Before and after figures each carry a named Chinese network or cloud region and a date. Client named or the reason for anonymity stated.

**Quality gate, every piece.** After `/createarticle`, run `/content-quality-us`
on the output file, all 18 passes, British spelling, tracker in the run log.
This applies to this piece whatever its tier, type or length. No
`quality_passed_on` date, no `image_ready`, no publish.

Definition of done: the per-piece acceptance list in `../SPEC.md`, plus the
tier-specific boxes for T3.

---

## Brief, verbatim from PLAN.md

#### T3-10. New slot: international school group, two years of maintenance

| | |
|---|---|
| **Slug** | `work/school-group-china-maintenance-retainer` |
| **Type** | New slot, client not yet chosen |
| **Sector** | Education, international school group with multiple mainland campuses |
| **Length** | 900 words |
| **Locales** | English at publish. Chinese earned if parent-facing traffic justifies it. |

**The story in one line.** Twenty-four months of running a mainland-hosted multi-campus site, written up as a maintenance log rather than a success story, including the updates that silently stopped arriving.

**Required measurements.** Before: at handover, the count of outstanding core, plugin and theme updates, the WordPress version in place, the date, and the response time from the mainland region the site sat on. Plus the state of the back end, measured, since that is where the staff live. After: the same counts at the 24-month mark on a stated date, uptime across the full period with the monitoring interval named, mean time to patch for security releases, and the number of incidents with their durations. Publish the incident list.

**What to include about friction.** The silent 429. WordPress.org and the update servers are reachable from the mainland but rate limit mainland IPs, returning HTTP 429 on update, plugin install and theme install calls, documented since October 2019, and the dashboard does not announce it, it simply stops offering updates (F8). Say how long the site had been in that state before handover. Then the back end drag: Gravatar is blocked and WordPress calls `secure.gravatar.com` on comments and across wp-admin by default, so it is the dashboard that crawls, not the front end, and mainland mirrors such as Cravatar (`cravatar.cn`) at around 284ms, `cdn.sep.cc` at around 33ms and WeAvatar at around 50ms are the fix (F4). Name what stayed unresolved across two years, including any plugin the client would not let go of.

**Client naming.** Anonymized as "an international school group with three mainland campuses," with the reason stated: schools do not publicize their security patching history, and this study contains it. Name the provinces.

**Service line it sells.** Maintenance & Support.

**Links.** Money page: `/services/maintenance-support/`. Sideways to `wp-admin-slow-china` and `wordpress-updates-china-429`.

**Metadata.**
```yaml
title: "Two Years of Maintenance in China"                                           # 33 / 52
description: "Twenty-four months of patching, uptime and incident data for a school group site, including the update failures nobody sees in wp-admin."   # 136 / 152
excerpt: "What routine maintenance looks like on a mainland-hosted site, with the silent failures and the incidents shown."   # 17 / 25 words
```

**CTA.** Talk to our team about a maintenance retainer

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
