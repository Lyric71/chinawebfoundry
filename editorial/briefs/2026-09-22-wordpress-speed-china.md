---
brief_id: A9
tier: T1
content_type: guide
publish_date: 2026-09-22
week: 03
slot: 1
slot_job: substantial
slug: wordpress-speed-china
title: "Why Your WordPress Site Is Slow in China"
suggested_category: Technology
locales_at_publish: en fr es de
facts: [F1, F7, F25, F30, F31, F32]
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
| output | `../output/wordpress-speed-china.md` |

**Tier rule.** T1 flagship. Ships in all four locales (en, fr, es, de) in one commit. Register the localized slugs from the brief in `src/i18n/routes.ts` (`guideSlugs`). Run `/deep-translate` on each locale, all three passes, in this order: FR, ES, DE, interactively in the main conversation, never through a subagent, one pass at a time, none skipped.

**Quality gate, every piece.** After `/createarticle`, run `/content-quality-us`
on the output file, all 18 passes, British spelling, tracker in the run log.
This applies to this piece whatever its tier, type or length. No
`quality_passed_on` date, no `image_ready`, no publish.

Definition of done: the per-piece acceptance list in `../SPEC.md`, plus the
tier-specific boxes for T1.

---

## Brief, verbatim from PLAN.md

#### A9. Why your WordPress site is slow in China

| | |
|---|---|
| **Slugs** | en `wordpress-speed-china` · de `wordpress-geschwindigkeit-china` · es `velocidad-wordpress-china` · fr `vitesse-wordpress-chine` |
| **Target** | wordpress slow in china |
| **Secondary** | speed up wordpress china, china website load time |
| **Intent** | Problem-aware, close to commercial. |
| **Incumbent** | Chinafy, with a strong page. Beatable on evidence, not on volume. |
| **Length** | 1,500 words |

**Angle.** A measured before and after, not an explainer. Chinafy explains the problem well and sells a patch. This article shows the fix, with our own numbers, and explains why a delivery layer recovers some of it and a rebuild recovers the rest.

**Facts.** F32 (the spine of the article), F31, F1, F7, F30, F25.

**Outline.**
1. What slow means from Shanghai, with the market baseline (F31)
2. The four causes, in order of how much they cost: blocked hosts, distance to origin, handshake count, payload
3. A case: 23.4 seconds to 1.2 seconds, and what changed at each step (F32)
4. What a delivery layer fixes and what it does not
5. What only mainland hosting fixes (F25, F30)
6. How to measure honestly, from a mainland vantage point rather than a VPN
7. Frequently asked

**Evidence requirement.** This is the article that carries CWF's proof. Every number in F32 goes in a blockquote with the conditions stated. If a number cannot be stated with its conditions, leave it out.

**Fairness.** Describe the delivery-layer approach accurately and say when it is the right purchase. Being fair about a competitor's product is what makes the rest of the article credible.

**Links.** Up to `/wordpress-in-china/`. Sideways to `wordpress-hosting-china` and `page-builders-china`.

**Metadata.**
```yaml
title: "Why Your WordPress Site Is Slow in China"
description: "Four causes, in the order they cost you. A measured case from 23.4 seconds to 1.2, and what a delivery layer fixes versus what it cannot."
excerpt: "The real causes of slow load times behind the Great Firewall, ranked, with a measured before and after."
```

**CTA.** Run a free China readiness scan on your site
