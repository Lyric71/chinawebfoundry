---
brief_id: A7
tier: T1
content_type: guide
publish_date: 2026-11-03
week: 09
slot: 1
slot_job: substantial
slug: page-builders-china
title: "Elementor, Divi and Gutenberg in China"
suggested_category: Technology
locales_at_publish: en fr es de
facts: [F1, F6, F10, F11]
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
| output | `../output/page-builders-china.md` |

**Tier rule.** T1 flagship. Ships in all four locales (en, fr, es, de) in one commit. Register the localized slugs from the brief in `src/i18n/routes.ts` (`guideSlugs`). Run `/deep-translate` on each locale, all three passes, in this order: FR, ES, DE, interactively in the main conversation, never through a subagent, one pass at a time, none skipped.

**Quality gate, every piece.** After `/createarticle`, run `/content-quality-us`
on the output file, all 18 passes, British spelling, tracker in the run log.
This applies to this piece whatever its tier, type or length. No
`quality_passed_on` date, no `image_ready`, no publish.

Definition of done: the per-piece acceptance list in `../SPEC.md`, plus the
tier-specific boxes for T1.

---

## Brief, verbatim from PLAN.md

#### A7. Elementor, Divi and Gutenberg in China

| | |
|---|---|
| **Slugs** | en `page-builders-china` · de `page-builder-china` · es `constructores-paginas-china` · fr `constructeurs-pages-chine` |
| **Target** | elementor china |
| **Secondary** | divi china, does elementor work in china, gutenberg china |
| **Intent** | Informational, practitioner, high volume. |
| **Incumbent** | Nobody, and the query has real demand. |
| **Length** | 1,500 words |

**Angle.** Page builders load more external assets than anything else in a WordPress stack, and the three most common ones behave very differently. This article is the source-verified answer, and it corrects two things everyone repeats.

**Facts.** F10 (the centerpiece), F11, F6, F1.

**Outline.**
1. Why builders are the worst offenders, and why it is not what you think
2. Elementor: what it actually loads (F10). Include the settings by their exact names and the default states.
3. The Elementor editor trap: the setting does not cover the editor (F10)
4. What Elementor does **not** do, the bundled icon libraries (F10). This corrects a claim in most competitor copy.
5. Divi: the settings that exist, and an honest statement of what we did not verify
6. Core Gutenberg: the quiet option (F11)
7. A decision table
8. Frequently asked

**Honesty requirement.** Divi is closed source and was not inspected. Say so in the article, in one sentence, and give only the confirmed setting names. Being visibly precise about the limit of what was checked is worth more than the paragraph it costs.

**Links.** Up to `/wordpress-in-china/`. Sideways to `wordpress-plugins-china` and `wordpress-speed-china`.

**Metadata.**
```yaml
title: "Elementor, Divi and Gutenberg in China"
description: "Page builders load more outside assets than anything else in the stack. What each one calls out to, read from the source in 2026."
excerpt: "Which page builder survives behind the Great Firewall, checked against the code rather than the marketing."
```

**CTA.** Run a free China readiness scan on your site
