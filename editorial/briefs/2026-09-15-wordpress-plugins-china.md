---
brief_id: A3
tier: T1
content_type: guide
publish_date: 2026-09-15
week: 02
slot: 1
slot_job: substantial
slug: wordpress-plugins-china
title: "WordPress Plugins That Break in China"
suggested_category: Technology
locales_at_publish: en fr es de
facts: [F1, F2, F3, F4, F6, F7, F10, F11, F17, F18]
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
| output | `../output/wordpress-plugins-china.md` |

**Tier rule.** T1 flagship. Ships in all four locales (en, fr, es, de) in one commit. Register the localized slugs from the brief in `src/i18n/routes.ts` (`guideSlugs`). Run `/deep-translate` on each locale, all three passes, in this order: FR, ES, DE, interactively in the main conversation, never through a subagent, one pass at a time, none skipped.

**Quality gate, every piece.** After `/createarticle`, run `/content-quality-us`
on the output file, all 18 passes, British spelling, tracker in the run log.
This applies to this piece whatever its tier, type or length. No
`quality_passed_on` date, no `image_ready`, no publish.

Definition of done: the per-piece acceptance list in `../SPEC.md`, plus the
tier-specific boxes for T1.

---

## Brief, verbatim from PLAN.md

#### A3. The WordPress plugins that break in China

| | |
|---|---|
| **Slugs** | en `wordpress-plugins-china` · de `wordpress-plugins-china` · es `plugins-wordpress-china` · fr `plugins-wordpress-chine` |
| **Target** | wordpress plugins china |
| **Secondary** | which wordpress plugins work in china, wordpress plugin blocked china |
| **Intent** | Informational, practitioner. A developer with a broken site. |
| **Incumbent** | Nobody. Genuinely open. |
| **Length** | 1,600 words. This is the reference piece and it earns the extra length. |

**Angle.** Not a list of plugins to avoid. A list of the outbound hosts a plugin reaches for, checked in 2026, with the one that halts the page called out separately from the ones that merely cost you a second. The received wisdom lumps everything into "CDNs are blocked," which gets the priority exactly backwards.

**Facts.** F1 (lead with it), F7, F6, F4, F10, F11, F17, F18, F2, F3.

**Outline.**
1. The one line of code that stops the page, `ajax.googleapis.com` (F1)
2. The CDN tier that costs seconds rather than the page (F7)
3. The dependency that is fine and that every guide gets wrong (F6)
4. What core WordPress itself calls out to (F11, F4)
5. Caching and security plugins, where the call goes the other way (F17)
6. The audit: how to list your own outbound hosts in ten minutes
7. Replacement table
8. Frequently asked

**Required table.** Dependency, status from mainland China, what happens, replacement. Extend the table from the published `is-wordpress-blocked-in-china` article rather than duplicating it; this one goes deeper on plugins specifically.

**Do not.** Repeat the Chinafy 93% claim. Say "CDNs are blocked."

**Links.** Up to `/wordpress-in-china/`. Sideways to `is-wordpress-blocked-in-china` and `wordpress-hosting-china`.

**Metadata.**
```yaml
title: "WordPress Plugins That Break in China"
description: "One script tag halts the page. The rest cost you seconds. A dependency by dependency audit of a WordPress stack, checked from the mainland in 2026."
excerpt: "The outbound hosts a WordPress plugin stack reaches for, and which of them actually fail behind the Great Firewall."
```

**CTA.** Run a free China readiness scan on your site / Talk to our team about a plugin audit
