---
brief_id: A8
tier: T1
content_type: guide
publish_date: 2026-12-15
week: 15
slot: 1
slot_job: substantial
slug: wordpress-multilingual-china
title: "Chinese-Language WordPress, Done Right"
suggested_category: Content
locales_at_publish: en fr es de
facts: [F6, F12, F13, F14]
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
| output | `../output/wordpress-multilingual-china.md` |

**Tier rule.** T1 flagship. Ships in all four locales (en, fr, es, de) in one commit. Register the localized slugs from the brief in `src/i18n/routes.ts` (`guideSlugs`). Run `/deep-translate` on each locale, all three passes, in this order: FR, ES, DE, interactively in the main conversation, never through a subagent, one pass at a time, none skipped.

**Quality gate, every piece.** After `/createarticle`, run `/content-quality-us`
on the output file, all 18 passes, British spelling, tracker in the run log.
This applies to this piece whatever its tier, type or length. No
`quality_passed_on` date, no `image_ready`, no publish.

Definition of done: the per-piece acceptance list in `../SPEC.md`, plus the
tier-specific boxes for T1.

---

## Brief, verbatim from PLAN.md

#### A8. Running a Chinese-language WordPress site

| | |
|---|---|
| **Slugs** | en `wordpress-multilingual-china` · de `wordpress-mehrsprachig-china` · es `wordpress-multilingue-china` · fr `wordpress-multilingue-chine` |
| **Target** | wpml china |
| **Secondary** | polylang chinese, wordpress simplified chinese, zh-hans wordpress |
| **Intent** | Informational, practitioner. |
| **Incumbent** | WPML's own documentation, which ranks on brand rather than merit. |
| **Length** | 1,400 words |

**Angle.** The multilingual plugin choice is usually made on feature lists. For a mainland-hosted site it should be made on outbound calls, and on that criterion the answer flips. Polylang makes zero. TranslatePress makes them inside the request path.

**Facts.** F12 (lead), F13, F14, F6.

**Outline.**
1. The criterion nobody uses: what does it call out to at runtime
2. Polylang, and the zero-call finding (F12)
3. TranslatePress, and why request-path calls are the problem (F13)
4. WPML, the slug you cannot change and the cloud dependency (F14)
5. The `zh` versus `zh-Hans` versus `zh-CN` question, and what each plugin emits (F12, F14)
6. Simplified and Traditional, and when you actually need both
7. Frequently asked

**Precision requirement.** F12's hreflang detail is exact and it matters: Polylang emits `hreflang="zh"` for a Simplified-only site and only emits `zh-CN` when a second Chinese variant exists. Get this right; it is the kind of detail that earns citations from developers.

**Do not.** Claim WPML's automatic translation fails from China. Unverified.

**Links.** Up to `/wordpress-in-china/`. Sideways to the existing `china-website-localisation` and to `wordpress-baidu-seo`.

**Metadata.**
```yaml
title: "Chinese-Language WordPress, Done Right"
description: "Pick the multilingual plugin on outbound calls, not features. One makes none. One makes them mid-request. The answer flips."
excerpt: "WPML, Polylang and TranslatePress judged on what they call out to from a mainland server."
```

**CTA.** Talk to our team about Chinese content and localization
