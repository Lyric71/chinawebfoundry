---
brief_id: A4
tier: T1
content_type: guide
publish_date: 2026-10-13
week: 06
slot: 1
slot_job: substantial
slug: wp-admin-slow-china
title: "Why wp-admin Is Slow in China"
suggested_category: Technology
locales_at_publish: en fr es de
facts: [F1, F4, F8, F10, F11]
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
| output | `../output/wp-admin-slow-china.md` |

**Tier rule.** T1 flagship. Ships in all four locales (en, fr, es, de) in one commit. Register the localized slugs from the brief in `src/i18n/routes.ts` (`guideSlugs`). Run `/deep-translate` on each locale, all three passes, in this order: FR, ES, DE, interactively in the main conversation, never through a subagent, one pass at a time, none skipped.

**Quality gate, every piece.** After `/createarticle`, run `/content-quality-us`
on the output file, all 18 passes, British spelling, tracker in the run log.
This applies to this piece whatever its tier, type or length. No
`quality_passed_on` date, no `image_ready`, no publish.

Definition of done: the per-piece acceptance list in `../SPEC.md`, plus the
tier-specific boxes for T1.

---

## Brief, verbatim from PLAN.md

#### A4. Why wp-admin is slow in China

| | |
|---|---|
| **Slugs** | en `wp-admin-slow-china` · de `wp-admin-langsam-china` · es `wp-admin-lento-china` · fr `wp-admin-lent-chine` |
| **Target** | wordpress admin slow china |
| **Secondary** | wp-admin slow, wordpress dashboard china |
| **Intent** | Informational, high frustration. Somebody's Chinese team cannot work. |
| **Incumbent** | Nobody. |
| **Length** | 1,200 words |

**Angle.** Every guide optimizes the front end. Nobody writes about the back end, and the back end is where the Chinese marketing team actually lives eight hours a day. Gravatar and the update servers are the culprits, and both are fixable in an afternoon.

**Facts.** F4 (lead), F8, F11, F10 (the editor Roboto call), F1.

**Outline.**
1. The symptom: the site is fine, the dashboard is unusable
2. Gravatar, called on every comment screen and across wp-admin (F4)
3. The update servers, and the silent 429 (F8)
4. The block editor's own calls (F11, F10)
5. Mainland avatar mirrors, with measured latency (F4)
6. What to disable, what to mirror, what to accept
7. Frequently asked

**Angle sharpener.** The Elementor detail in F10 is the best paragraph in this article: turning off Google Fonts does not stop the editor loading Roboto from Google, because that registration is not gated by the setting. That is the kind of specific, source-verified fact nobody else has.

**Links.** Up to `/wordpress-in-china/`. Sideways to `wordpress-plugins-china` and `wordpress-security-china`.

**Metadata.**
```yaml
title: "Why wp-admin Is Slow in China"
description: "Your site is fine and your dashboard is unusable. Gravatar and the WordPress update servers are why, and both are fixable in an afternoon."
excerpt: "The back end nobody optimizes, why it crawls from Shanghai, and the two fixes that recover most of it."
```

**CTA.** Talk to our team about a maintenance retainer
