---
brief_id: A12
tier: T1
content_type: guide
publish_date: 2026-12-29
week: 17
slot: 1
slot_job: substantial
slug: wordpress-security-china
title: "WordPress Security on a Mainland Server"
suggested_category: Technology
locales_at_publish: en fr es de
facts: [F8, F15, F16, F18, F20, F30]
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
| output | `../output/wordpress-security-china.md` |

**Tier rule.** T1 flagship. Ships in all four locales (en, fr, es, de) in one commit. Register the localized slugs from the brief in `src/i18n/routes.ts` (`guideSlugs`). Run `/deep-translate` on each locale, all three passes, in this order: FR, ES, DE, interactively in the main conversation, never through a subagent, one pass at a time, none skipped.

**Quality gate, every piece.** After `/createarticle`, run `/content-quality-us`
on the output file, all 18 passes, British spelling, tracker in the run log.
This applies to this piece whatever its tier, type or length. No
`quality_passed_on` date, no `image_ready`, no publish.

Definition of done: the per-piece acceptance list in `../SPEC.md`, plus the
tier-specific boxes for T1.

---

## Brief, verbatim from PLAN.md

#### A12. WordPress security on a mainland server

| | |
|---|---|
| **Slugs** | en `wordpress-security-china` · de `wordpress-sicherheit-china` · es `seguridad-wordpress-china` · fr `securite-wordpress-chine` |
| **Target** | wordpress security china |
| **Secondary** | wordfence baidu, wordpress updates china |
| **Intent** | Problem-aware, sells the retainer. |
| **Incumbent** | Nobody. |
| **Length** | 1,300 words |

**Angle.** Two stories that are usually told separately and belong together. The update servers rate limit you, so the site silently falls behind on patches. And the security plugin you installed to compensate can quietly 403 the crawler you are paying to attract.

**Facts.** F8 (lead), F15, F16, F20, F18, F30.

**Outline.**
1. The silent failure: 429 on update calls, and a dashboard that stops offering them (F8)
2. Why that is a security problem rather than an inconvenience
3. The three fixes: domestic mirrors, an external update process, a retainer
4. The second story: your WAF versus Baiduspider (F16)
5. Wordfence's Google-only crawler whitelist, and what it means when you enable rate limits (F15)
6. Verifying the crawler correctly (F20)
7. Cloudflare and mainland IP rules (F30)
8. Frequently asked

**The strongest paragraph.** F16 is a live landmine and it is specific: Solid Security's HackRepair list 403s `360Spider` and `YisouSpider` at the server config level, opt-in but easy to enable without knowing. And F15: Wordfence whitelists Google by reverse DNS and has no Baidu equivalent. Both are checkable by any reader against their own install, which is what makes them credible.

**Links.** Up to `/wordpress-in-china/` and the Maintenance service page. Sideways to `wp-admin-slow-china` and the existing `baiduspider-firewall`.

**Metadata.**
```yaml
title: "WordPress Security on a Mainland Server"
description: "Update calls get rate limited, so patches quietly stop. Then the security plugin meant to compensate blocks the crawler you are paying for."
excerpt: "Why a mainland WordPress install falls behind on patches, and how its own WAF can lock Baidu out."
```

**CTA.** Talk to our team about a maintenance retainer
