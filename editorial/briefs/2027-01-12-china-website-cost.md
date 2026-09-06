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
gate: "pricing decision (open item 3)"
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
| **Decision required before drafting** | Whether CWF publishes its own numbers or only the market bands. See below. |

**Angle.** The market is barbelled and a shortlist that mixes tiers produces quotes that differ by an order of magnitude for what sounds like the same brief. It is not the same brief. This article makes the tiers legible and shows what moves the number.

**Facts.** The price bands from the competitive study: template shops at 299 to 899 USD a year, WeChat retainers from 400 USD a month, a delivery-layer subscription at roughly 7,000 USD in year one, specialist project minimums of 10,000 to 25,000 USD, large consultancies publishing nothing. Plus F26 and F25, because the filing and the entity are real line items people forget.

**Outline.**
1. Why quotes differ by 10x for the same brief
2. The four tiers, with what each actually delivers
3. What is usually excluded and shows up later: the entity, the filing, Chinese copy, hosting, maintenance
4. What moves the number: page count, integrations, content volume, whether an entity exists
5. Ongoing cost, which is the line most budgets miss
6. Frequently asked

**Open decision.** Cyril decides whether this article carries CWF's own price bands or only the market's. Publishing a "from" figure would be close to unique in this market and it converts the price shopper who currently self-selects toward whoever published a number. It also anchors. **Do not publish CWF figures without explicit sign-off.**

**Links.** Up to `/web-agency-china/`. Sideways to `choosing-web-agency-china` and `china-website-timeline`.

**Metadata.**
```yaml
title: "What a China Website Actually Costs"
description: "Quotes for the same brief differ by ten times because it is not the same brief. The four tiers, what each excludes, and what moves the number."
excerpt: "How China website pricing is actually structured, and the line items that surface after the quote is signed."
```

**CTA.** Book a 30-minute scoping call with our Shanghai team
