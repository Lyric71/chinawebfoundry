---
brief_id: B2
tier: T1
content_type: guide
publish_date: 2027-01-12
week: 19
slot: 1
slot_job: substantial
slug: china-website-cost
title: "What a China Website Actually Costs"
suggested_category: Technology
locales_at_publish: en fr es de
gate: "CWF from figures per tier, supplied by Cyril"
facts: [F25, F26]
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
| output | `../output/china-website-cost.md` |

**Tier rule.** T1 flagship. Ships in all four locales (en, fr, es, de) in one commit. Register the localized slugs from the brief in `src/i18n/routes.ts` (`guideSlugs`). Run `/deep-translate` on each locale, all three passes, in this order: FR, ES, DE, interactively in the main conversation, never through a subagent, one pass at a time, none skipped.

**Quality gate, every piece.** After `/createarticle`, run `/content-quality-us`
on the output file, all 18 passes, British spelling, tracker in the run log.
This applies to this piece whatever its tier, type or length. No
`quality_passed_on` date, no `image_ready`, no publish.

Definition of done: the per-piece acceptance list in `../SPEC.md`, plus the
tier-specific boxes for T1.

---

## Brief, verbatim from PLAN.md

#### B2. What a China website actually costs

| | |
|---|---|
| **Slugs** | en `china-website-cost` · de `china-website-kosten` · es `coste-sitio-web-china` · fr `cout-site-web-chine` |
| **Target** | how much does a china website cost |
| **Secondary** | china web design pricing, china website budget |
| **Intent** | Commercial, very high. |
| **Incumbent** | Nobody publishes real figures. Four of the top ten competitors publish nothing at all. |
| **Length** | 1,400 words |
| **Decided** | 2 October 2026 (Cyril): CWF publishes its own "from" figures per tier alongside the market bands. |

**Angle.** The market is barbelled and a shortlist that mixes tiers produces quotes that differ by an order of magnitude for what sounds like the same brief. It is not the same brief. This article makes the tiers legible and shows what moves the number.

**Facts.** The price bands from the competitive study: template shops at 299 to 899 USD a year, WeChat retainers from 400 USD a month, a delivery-layer subscription at roughly 7,000 USD in year one, specialist project minimums of 10,000 to 25,000 USD, large consultancies publishing nothing. Plus F26 and F25, because the filing and the entity are real line items people forget.

**Outline.**
1. Why quotes differ by 10x for the same brief
2. The four tiers, with what each actually delivers
3. What is usually excluded and shows up later: the entity, the filing, Chinese copy, hosting, maintenance
4. What moves the number: page count, integrations, content volume, whether an entity exists
5. Ongoing cost, which is the line most budgets miss
6. Frequently asked

**Decision (Cyril, 2 October 2026).** The article carries ChinaWebFoundry's own "from" figures, one per tier, alongside the market bands. Publishing a "from" figure is close to unique in this market and converts the price shopper who otherwise self-selects toward whoever published a number. **Source of the figures:** on 2 October 2026 the site published no CWF price on any page, services page, data file or FAQ in any of the four locales (the money pages and FAQ say fixed-price proposals after a scoping call; the contact form's budget brackets are the visitor's ranges, not prices). The figures are therefore supplied by Cyril in `editorial/sources/cwf-pricing.md`, one "from" figure per tier with his name and the date, and printed exactly as supplied, labelled as ours. The row's gate, "CWF from figures per tier, supplied by Cyril", clears when that file exists. Never estimate or derive a CWF figure.

**Links.** Up to `/web-agency-china/`. Sideways to `choosing-web-agency-china` and `china-website-timeline`.

**On publish, add the link an earlier piece could not.** `china-website-brief-checklist` (B5, drafted 1 October 2026) wanted a sideways link to this guide and used `icp-licence-filing-foreign-companies` instead. The publish step of this piece adds the link to this guide from B5 in every locale B5 has, inside an existing sentence about budget where one exists, runs any added sentence through `/deep-translate`, and moves B5's `updatedAt`.

**Metadata.**
```yaml
title: "What a China Website Actually Costs"
description: "Quotes for the same brief differ by ten times because it is not the same brief. The four tiers, what each excludes, and what moves the number."
excerpt: "How China website pricing is actually structured, and the line items that surface after the quote is signed."
```

**CTA.** Book a 30-minute scoping call with our Shanghai team
