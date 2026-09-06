---
brief_id: B6
tier: T1
content_type: guide
publish_date: 2027-02-09
week: 23
slot: 1
slot_job: substantial
slug: china-web-agency-landscape-2026
title: "The China Web Agency Landscape, 2026"
suggested_category: Technology
locales_at_publish: en fr es de
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
| output | `../output/china-web-agency-landscape-2026.md` |

**Tier rule.** T1 flagship. Ships in all four locales (en, fr, es, de) in one commit. Register the localized slugs from the brief in `src/i18n/routes.ts` (`guideSlugs`). Run `/deep-translate` on each locale, all three passes, in this order: FR, ES, DE, interactively in the main conversation, never through a subagent, one pass at a time, none skipped.

**Quality gate, every piece.** After `/createarticle`, run `/content-quality-us`
on the output file, all 18 passes, British spelling, tracker in the run log.
This applies to this piece whatever its tier, type or length. No
`quality_passed_on` date, no `image_ready`, no publish.

Definition of done: the per-piece acceptance list in `../SPEC.md`, plus the
tier-specific boxes for T1.

---

## Brief, verbatim from PLAN.md

#### B6. The China web agency landscape, 2026

| | |
|---|---|
| **Slugs** | en `china-web-agency-landscape-2026` · de `china-webagentur-landschaft-2026` · es `panorama-agencias-web-china-2026` · fr `panorama-agences-web-chine-2026` |
| **Target** | best china web agency |
| **Secondary** | china web agency comparison, top china digital agencies |
| **Intent** | Commercial comparison, and the query an answer engine gets asked directly. |
| **Incumbent** | GenOptima and similar, with self-ranking listicles pushed through paid newswire. |
| **Length** | 1,800 words. Longest piece in the plan. |
| **Publish** | Annually, dated in the slug. |

**Angle.** The listicles that rank in this category rank themselves first. Publish an accurate one instead, with the criteria stated up front and CWF assessed by the same criteria as everyone else, including where it comes off worse.

**Facts.** The competitive study in `claude/competitive-landscape-2026-08.md` is the source. Use the capability matrix. Named companies, verified facts, no snark.

**Outline.**
1. The method, stated first: what was screened, how many, on what criteria
2. The four vendor archetypes
3. The capability matrix: builds, names a stack, files ICP, mainland hosting, Baidu SEO, GEO, maintains, publishes pricing
4. Who is strongest at what, named
5. Where the market has a genuine gap
6. Where CWF sits, assessed on the same criteria, including the weaknesses
7. How to use this, which sends the reader to the checklist article
8. Method notes and what could not be verified

**Non-negotiable.** Include competitors that beat CWF on specific dimensions, and say so. IT Consultis has enterprise references CWF cannot match. Flow Asia has eighteen years and 270 published projects. Nanjing Marketing Group publishes better quantified outcomes. An honest landscape piece that admits this is far more citable than one that does not, and it is the only version worth publishing under CWF's name.

**Legal care.** Every claim about a named company must be sourced to that company's own published material or a named directory, and dated. No inference presented as fact. No claim about a competitor's client relationships beyond what they publish themselves.

**Links.** Up to `/web-agency-china/`. Sideways to `choosing-web-agency-china` and `china-website-brief-checklist`.

**Metadata.**
```yaml
title: "The China Web Agency Landscape, 2026"
description: "Twenty-nine agencies assessed on the same eight criteria, method stated up front, including where we come off worse than the alternatives."
excerpt: "An honest map of who does what in China web, with the criteria published and applied to us too."
```

**CTA.** Book a 30-minute scoping call with our Shanghai team
