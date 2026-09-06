---
brief_id: T3-01
tier: T3
content_type: casestudy
publish_date: 2026-10-01
week: 04
slot: 2
slot_job: fast
slug: bassetti-wordpress-china
title: "Moving a French Software Site Into China"
locales_at_publish: en
gate: "client sign-off"
facts: [F8, F25, F26, F32]
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
| output | `../output/bassetti-wordpress-china.md` |

**Tier rule.** T3 case study. Publishes into `src/content/casestudies/` under the existing `/work/{client}-{descriptor}/` convention. English at publish, translation earned per the T7 rules. All six template sections, in order. Before and after figures each carry a named Chinese network or cloud region and a date. Client named or the reason for anonymity stated.

**Quality gate, every piece.** After `/createarticle`, run `/content-quality-us`
on the output file, all 18 passes, British spelling, tracker in the run log.
This applies to this piece whatever its tier, type or length. No
`quality_passed_on` date, no `image_ready`, no publish.

Definition of done: the per-piece acceptance list in `../SPEC.md`, plus the
tier-specific boxes for T3.

---

## Brief, verbatim from PLAN.md

#### T3-01. Moving a French engineering software vendor onto a Shanghai origin

| | |
|---|---|
| **Slug** | `work/bassetti-wordpress-china` |
| **Type** | Upgrade of an existing page |
| **Sector** | Engineering and PLM software, B2B enterprise |
| **Length** | 950 words |
| **Locales** | English at publish. French earned if the page holds a first-page Google position for a migration query for 60 days. |

**The story in one line.** A WordPress site serving Chinese engineering teams from a European origin was rebuilt on an Alibaba Cloud mainland region behind a completed ICP filing, and the page load stopped being the reason nobody used it.

**Required measurements.** This is the study that carries the 23.4 second to 1.2 second median (F32), so it has to carry it properly. Before: median document complete on the European origin, taken from a Beijing consumer broadband line on a stated pre-migration date, plus the same measurement from an Alibaba Cloud mainland instance so the gap between the two vantage points is visible. After: median document complete from the same Beijing line on a stated post-migration date, plus server response from the Alibaba Cloud Shanghai region. Request counts before and after, since the reason the number moved is topology and not magic. If project records do not pin the original test to a network and a date, re-run both legs before publishing and say the figures were re-measured.

**What to include about friction.** The ICP filing (ICP备案) ran past the published 10 to 30 working day window (F26), and ports 80 and 443 stayed closed on the mainland IP for the whole of it, so there was no staging URL anyone could look at (F25). Name the number of weeks. Also name what the update servers did after cutover: the dashboard quietly stopped offering plugin updates on a mainland IP (F8), which took a mirror to fix and was not in the original scope.

**Client naming.** Named, with written sign-off from the client's marketing lead on the figures as well as the name. If sign-off on figures is refused, publish the figures and anonymize the client as "a French engineering software vendor," stating that the client declined attribution.

**Service line it sells.** Migration.

**Links.** Money page: `/services/migration/`. Sideways to `wordpress-hosting-china` and `icp-filing-explained`.

**Metadata.**
```yaml
title: "Moving a French Software Site Into China"                                    # 40 / 52
description: "A European origin at 23.4 seconds and an Alibaba Cloud Shanghai origin at 1.2, with the ICP filing weeks that sat between them."   # 127 / 152
excerpt: "What changed when the origin moved to Shanghai, measured from a Beijing consumer line, and what the filing actually cost in weeks."     # 22 / 25 words
```

**CTA.** Ask us what your migration would actually take

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
