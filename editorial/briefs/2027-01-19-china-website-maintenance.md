---
brief_id: T5-04
tier: T5
content_type: guide-en-first
publish_date: 2027-01-19
week: 20
slot: 1
slot_job: substantial
slug: china-website-maintenance
title: "What China Website Maintenance Covers"
suggested_category: Hosting
locales_at_publish: en
facts: [F8, F15, F16, F17, F18, F26, F27, F28, F32]
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
| output | `../output/china-website-maintenance.md` |

**Tier rule.** T5 editorial guide. English first. Translation only after day 90 and only on evidence (organic entries, an attributed inquiry, an observed AI citation), through a T7 slot.

**Quality gate, every piece.** After `/createarticle`, run `/content-quality-us`
on the output file, all 18 passes, British spelling, tracker in the run log.
This applies to this piece whatever its tier, type or length. No
`quality_passed_on` date, no `image_ready`, no publish.

Definition of done: the per-piece acceptance list in `../SPEC.md`, plus the
tier-specific boxes for T5.

---

## Brief, verbatim from PLAN.md

#### T5-04. What China Website Maintenance Covers

| | |
|---|---|
| **Slugs** | en `china-website-maintenance` · de `website-wartung-china` · es `mantenimiento-web-china` · fr `maintenance-site-chine` |
| **Target** | china website maintenance |
| **Secondary** | wordpress maintenance china, china website support retainer, wordpress updates china |
| **Intent** | Commercial. Somebody is comparing a mainland retainer against the agency they already pay at home. |
| **Incumbent** | Generic maintenance-package pages with a China paragraph bolted on. |
| **Length** | 1,400 words |

**Angle.** A China retainer is priced like a Western one and does entirely different work. The core of it is that the update path itself is the security story: the servers answer but rate limit mainland addresses, and the dashboard does not announce it, it just quietly stops offering updates. Everything else in the retainer, mirrors, crawler policy, filing hygiene, follows from that one fact.

**Facts.** F8 (lead), F15, F16, F18, F17, F28, F27, F26, F32.

**Outline.**
1. What actually breaks on a mainland site between launches
2. The silent 429, and why nothing in the dashboard tells you (F8)
3. Mirrors, and what a maintained update path looks like in practice
4. Security plugin defaults that block Chinese crawlers (F15, F16, F18)
5. Optimization tools that fetch your site from the wrong side of the border (F17)
6. There is no managed WordPress in China, so somebody has to be the manager (F28)
7. What an SLA means when the provider console is Chinese only (F27)
8. Filing hygiene: what a hosting or entity change triggers (F26)

**Required table.** Retainer scope by cadence: monthly, quarterly, annual, and on event. Put the filing review under annual, the update pass under monthly, and crawler access verification under quarterly. The on-event column is the one that sells, because it names the changes that quietly invalidate a filing.

**Links.** Up to `/wordpress-in-china/`. Sideways to `wordpress-hosting-china` and `is-wordpress-blocked-in-china`.

**Metadata.**
```yaml
title: "What China Website Maintenance Covers"  # 37 / 52
description: "The update servers rate limit mainland IPs and say nothing. That single fact shapes every line of a real China maintenance retainer."  # 132 / 152
excerpt: "Why the update path is the security story, what belongs in the scope, and what an SLA means with a Chinese-only console."  # 22 / 25
```

**CTA.** See what our China retainer includes
