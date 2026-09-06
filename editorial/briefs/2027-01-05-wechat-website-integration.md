---
brief_id: T5-03
tier: T5
content_type: guide-en-first
publish_date: 2027-01-05
week: 18
slot: 1
slot_job: substantial
slug: wechat-website-integration
title: "WeChat and Your China Website"
suggested_category: Technology
locales_at_publish: en
facts: [F5, F25, F26, F27, F36, F41]
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
| output | `../output/wechat-website-integration.md` |

**Tier rule.** T5 editorial guide. English first. Translation only after day 90 and only on evidence (organic entries, an attributed inquiry, an observed AI citation), through a T7 slot.

**Quality gate, every piece.** After `/createarticle`, run `/content-quality-us`
on the output file, all 18 passes, British spelling, tracker in the run log.
This applies to this piece whatever its tier, type or length. No
`quality_passed_on` date, no `image_ready`, no publish.

Definition of done: the per-piece acceptance list in `../SPEC.md`, plus the
tier-specific boxes for T5.

---

## Brief, verbatim from PLAN.md

#### T5-03. WeChat and Your China Website

| | |
|---|---|
| **Slugs** | en `wechat-website-integration` · de `wechat-website-anbindung` · es `wechat-integracion-web` · fr `wechat-integration-site` |
| **Target** | wechat website integration |
| **Secondary** | wechat official account website, mini program vs website, wechat login website |
| **Intent** | Informational. A brand has been told it needs a Mini Program and wants to know what that costs them in duplicated work. |
| **Incumbent** | Agency sales pages selling Mini Program builds. No neutral explainer. |
| **Length** | 1,600 words |

**Angle.** Foreign brands arrive believing WeChat (微信) is a channel their website plugs into. It is closer to a parallel internet with its own account model, its own review process and its own rendering. The useful article draws the boundary precisely: what the Official Account genuinely replaces, what the Mini Program genuinely replaces, and the short list of things that have to exist twice because no bridge exists between them.

**Facts.** F41 (lead, WeChat OAuth), F25, F26, F27, F36, F5.

**Outline.**
1. Three properties, one brand, and who owns each account
2. What an Official Account is and is not
3. Mini Program versus mobile web, the honest boundary
4. WeChat OAuth login on your own website (F41)
5. Sharing behavior, and what changes the moment a link leaves the app
6. What genuinely has to be built twice, and what does not
7. The website side: entity, filing and hosting still apply (F25, F26)
8. Frequently asked

**Honesty requirement.** The fact bank carries no probe data on WeChat platform endpoints and no verified review timelines for Mini Program submission. State account and entity requirements as requirements. Do not publish latency, availability or approval-time figures for anything in the WeChat ecosystem in this piece. Where the article needs a number, use the ICP filing timelines in F26, which are sourced, and say what is unverified rather than rounding it off.

**Links.** Up to `/web-agency-china/`. Sideways to `china-website-localisation` and `mobile-first-design-china`.

**Metadata.**
```yaml
title: "WeChat and Your China Website"  # 29 / 52
description: "Official Account, Mini Program and website. Where the boundary sits, what WeChat login can do, and what you genuinely build twice."  # 130 / 152
excerpt: "The three WeChat properties a foreign brand ends up owning, and the honest line between what overlaps and what does not."  # 21 / 25
```

**CTA.** Talk to us about your WeChat and website split
