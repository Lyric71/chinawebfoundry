---
brief_id: T3-08
tier: T3
content_type: casestudy
publish_date: 2027-01-07
week: 18
slot: 2
slot_job: fast
slug: luxury-brand-china-ux-redesign
title: "Redesigning a Luxury Site for China"
locales_at_publish: en
facts: [F5, F32, F37]
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
| output | `../output/luxury-brand-china-ux-redesign.md` |

**Tier rule.** T3 case study. Publishes into `src/content/casestudies/` under the existing `/work/{client}-{descriptor}/` convention. English at publish, translation earned per the T7 rules. All six template sections, in order. Before and after figures each carry a named Chinese network or cloud region and a date. Client named or the reason for anonymity stated.

**Quality gate, every piece.** After `/createarticle`, run `/content-quality-us`
on the output file, all 18 passes, British spelling, tracker in the run log.
This applies to this piece whatever its tier, type or length. No
`quality_passed_on` date, no `image_ready`, no publish.

Definition of done: the per-piece acceptance list in `../SPEC.md`, plus the
tier-specific boxes for T3.

---

## Brief, verbatim from PLAN.md

#### T3-08. New slot: luxury or premium consumer brand, designed rather than translated

| | |
|---|---|
| **Slug** | `work/luxury-brand-china-ux-redesign` |
| **Type** | New slot, client not yet chosen |
| **Sector** | Luxury goods, fashion or premium consumer |
| **Length** | 900 words |
| **Locales** | English and Chinese. A design case study for a Chinese audience that exists only in English undercuts itself. |

**The story in one line.** A brand ran a faithful Chinese translation of its global site, Chinese visitors left within seconds, and rebuilding the interface around Chinese browsing habits rather than European ones moved behavior by 51 points of bounce rate.

**Required measurements.** Before: bounce rate and average session duration for mainland traffic on the translated site, from Baidu Tongji (百度统计), over a stated window, segmented by mobile and desktop. Plus a page weight and load measurement of the translated site from a Beijing consumer line on a named date, because a design argument built on a page nobody waited for is not a design argument. After: the same behavioral figures over a comparable window, plus load from the same Beijing line on a stated date. The 51-point reduction (F32) is the headline and must carry both windows, both dates and the traffic source.

**What to include about friction.** The first redesign round was rejected internally because it did not look like the global brand, and say so. Name what had to be given up: the video embeds went, since YouTube and Vimeo are blocked including the oEmbed discovery call, and the replacements were Youku (优酷), Bilibili (哔哩哔哩) or Tencent Video (腾讯视频) with different aspect ratios and different player chrome (F5). The store locator was the other one, since maps in China are a licensing question before they are a firewall question, which is why AMap (高德地图), Baidu Maps (百度地图) or Tencent Maps (腾讯地图) are the answer rather than a faster mirror (F37). Say which typography compromises were made once the self-hosted Chinese font subset was weighed against page weight.

**Client naming.** Named if the brand allows. Luxury clients frequently do not, so the fallback is "a European luxury goods house," with the reason stated as brand policy on agency attribution.

**Service line it sells.** UX/UI Design.

**Links.** Money page: `/services/ux-ui-design/`. Sideways to `chinese-web-design-conventions` and `video-embeds-china`.

**Metadata.**
```yaml
title: "Redesigning a Luxury Site for China"                                         # 35 / 52
description: "A translated site and a designed-for-China site, measured side by side on the same Beijing network, with a 51-point bounce rate gap."   # 132 / 152
excerpt: "Two versions of the same brand, one Chinese audience, and the behavioral numbers that separated them."   # 16 / 25 words
```

**CTA.** Ask for a China UX review of your current site

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
