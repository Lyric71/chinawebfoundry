---
brief_id: T5-07
tier: T5
content_type: guide-en-first
publish_date: 2027-02-02
week: 22
slot: 1
slot_job: substantial
slug: china-website-accessibility-mobile
title: "Mobile and Browsers in China"
suggested_category: Design
locales_at_publish: en
facts: [F1, F6, F31, F32, F33, F36, F37, F41]
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
| output | `../output/china-website-accessibility-mobile.md` |

**Tier rule.** T5 editorial guide. English first. Translation only after day 90 and only on evidence (organic entries, an attributed inquiry, an observed AI citation), through a T7 slot.

**Quality gate, every piece.** After `/createarticle`, run `/content-quality-us`
on the output file, all 18 passes, British spelling, tracker in the run log.
This applies to this piece whatever its tier, type or length. No
`quality_passed_on` date, no `image_ready`, no publish.

Definition of done: the per-piece acceptance list in `../SPEC.md`, plus the
tier-specific boxes for T5.

---

## Brief, verbatim from PLAN.md

#### T5-07. Mobile and Browsers in China

| | |
|---|---|
| **Slugs** | en `china-website-accessibility-mobile` · de `mobile-browser-china` · es `movil-navegadores-china` · fr `mobile-navigateurs-chine` |
| **Target** | mobile website china |
| **Secondary** | uc browser compatibility, qq browser testing, china mobile web performance |
| **Intent** | Informational. A designer or front-end lead whose site passes every check at home. |
| **Incumbent** | Design blogs describing Chinese aesthetics. Nothing about what breaks. |
| **Length** | 1,400 words |

**Angle.** The China mobile problem is not layout, it is that the page depends on hosts a Chinese phone cannot finish talking to, and the browsers people actually use are not the one your QA runs. A page that scores well in Chrome on an office connection can fail two thirds of the time from Beijing, and the failure is a render-blocking third party rather than a responsive breakpoint.

**Facts.** F31 (lead), F1, F36, F33, F37, F6, F41, F32.

**Outline.**
1. How China actually browses, and why desktop QA never sees it
2. The Beijing load numbers, with the method attached (F31)
3. Render blocking: the dependencies that stop a page dead rather than slowing it (F1, F36)
4. The half-loaded page, where the layout is fine and the widget is empty (F33, F37)
5. UC Browser and QQ Browser: what to test, and how to test it honestly
6. Fonts and icons, and the variable that changes by network and by hour (F6, F41)
7. Building a mobile QA pass that mirrors real conditions (F32)
8. Frequently asked

**Honesty requirement.** The fact bank holds no measured rendering data for UC Browser or QQ Browser. Do not invent engine behavior or version support. Write that section from what is verifiable, namely that these browsers carry meaningful share and that testing has to happen on them, and argue the failure modes from request topology using F1, F33 and F36. Cite the Chinafy benchmark in F31 with attribution and note it is a vendor benchmark with a stated method.

**Links.** Up to `/website-in-china/`. Sideways to `mobile-first-design-china` and `great-firewall-what-it-blocks`.

**Metadata.**
```yaml
title: "Mobile and Browsers in China"  # 28 / 52
description: "Two thirds of tested sites failed to load from Beijing. What breaks on a Chinese phone that never breaks in Chrome, and how to test it."  # 135 / 152
excerpt: "Mobile-first for Chinese usage patterns, UC Browser and QQ Browser, and the render-blocking dependencies your QA never sees."  # 18 / 25
```

**CTA.** Book a China mobile performance test
