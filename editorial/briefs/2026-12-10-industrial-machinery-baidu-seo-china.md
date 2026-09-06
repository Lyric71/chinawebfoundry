---
brief_id: T3-06
tier: T3
content_type: casestudy
publish_date: 2026-12-10
week: 14
slot: 2
slot_job: fast
slug: industrial-machinery-baidu-seo-china
title: "Baidu Indexing for an Industrial Supplier"
locales_at_publish: en
facts: [F15, F16, F24]
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
| output | `../output/industrial-machinery-baidu-seo-china.md` |

**Tier rule.** T3 case study. Publishes into `src/content/casestudies/` under the existing `/work/{client}-{descriptor}/` convention. English at publish, translation earned per the T7 rules. All six template sections, in order. Before and after figures each carry a named Chinese network or cloud region and a date. Client named or the reason for anonymity stated.

**Quality gate, every piece.** After `/createarticle`, run `/content-quality-us`
on the output file, all 18 passes, British spelling, tracker in the run log.
This applies to this piece whatever its tier, type or length. No
`quality_passed_on` date, no `image_ready`, no publish.

Definition of done: the per-piece acceptance list in `../SPEC.md`, plus the
tier-specific boxes for T3.

---

## Brief, verbatim from PLAN.md

#### T3-06. New slot: industrial machinery supplier, first Baidu presence

| | |
|---|---|
| **Slug** | `work/industrial-machinery-baidu-seo-china` |
| **Type** | New slot, client not yet chosen |
| **Sector** | Industrial machinery and components, B2B, long sales cycle |
| **Length** | 950 words |
| **Locales** | English at publish. Chinese earned once the client's own Chinese pages are ranking. |

**The story in one line.** A machinery supplier with a strong Google presence and zero Baidu presence went from no indexed pages to a working Baidu footprint, and the first month produced nothing at all.

**Required measurements.** Before: indexed page count in Baidu Search Resource Platform (百度搜索资源平台) on a stated date, crawl requests from Baiduspider in the server log over a stated window, and impressions for the target Chinese queries. Zero is a valid before figure and should be published as zero. After: the same three, from the same tools, on a stated later date, plus the number of URLs pushed to `data.zz.baidu.com/urls` and the acceptance rate. Name the mainland region the site is served from, since crawl behavior against an overseas origin is a different experiment.

**What to include about friction.** The dead first month. Baidu killed fast inclusion in April 2024 and recalled sitemap quotas in September 2023, so two to four weeks to first indexing is the realistic floor (F24). Then the security stack problem: Solid Security ships a HackRepair ban list that returns 403 for `360Spider` and `YisouSpider` at the server config level, opt in and off by default, and a client who switched on the default ban list is refusing Chinese crawlers without knowing it (F16). Wordfence is the mirror image, since its only crawler policy whitelists Google by reverse DNS to `.googlebot.com` with no Baidu equivalent, so Baiduspider loses protection the moment rate limits go on (F15). Say which of these was found and how long it had been running.

**Client naming.** Named. A supplier that wants Chinese buyers has no reason to hide.

**Service line it sells.** Baidu SEO.

**Links.** Money page: `/services/baidu-seo/`. Sideways to `baidu-indexing-timeline` and `security-plugins-blocking-baidu`.

**Metadata.**
```yaml
title: "Baidu Indexing for an Industrial Supplier"                                   # 41 / 52
description: "From zero indexed pages to a working Baidu presence, with crawl logs, submission counts and the four weeks before anything appeared."   # 132 / 152
excerpt: "Crawl data, indexation counts and submission volumes for a machinery site, with the dead first month included."   # 17 / 25 words
```

**CTA.** Ask for a Baidu visibility audit

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
