---
title: "WordPress Agency China: How to Vet One"
slug: wordpress-agency-china
description: "How to vet a WordPress agency for China: ICP filing, mainland hosting, firewall-aware builds, and the questions that expose pretenders."
excerpt: "A web shop cannot file your ICP, host inside the mainland, or build around the Great Firewall. Here is how to hire one who can."
template: guide
---

<!-- HERO SECTION -->

# WordPress Agency China: How to Vet One

Most agencies can build you a beautiful WordPress site. Far fewer can
build one that actually loads for a customer in Shenzhen, ranks on Baidu,
and clears a government filing before it ever goes live. Those are
different jobs, and the gap between them is where foreign brands lose
months.

<!-- INTRODUCTION -->

Your global agency ships a polished site. It flies in London, it flies in
Chicago. Then a colleague in Shanghai opens it and the hero image never
loads, the contact form hangs on a script stuck behind the Great Firewall,
and Baidu has no idea the site exists. Nothing is broken, exactly. It just
doesn't work where you need it to.

Picking a WordPress agency for China is not the same decision as picking
one anywhere else. The stack is only half of it. The other half is a set of
compliance and infrastructure hurdles a shop outside China has usually
never touched. This guide covers what separates a real China WordPress
partner from a generic agency, the capabilities to check, the questions
that expose a pretender, and how these engagements get priced.

This assumes you have read our pillar guide, Website Localization for
China. If you haven't, start there, since everything below builds on it.

<!-- SECTION: AT A GLANCE -->

## Generic agency vs China WordPress specialist at a glance

| What you need         | Generic web agency        | China WordPress specialist      |
| --------------------- | ------------------------- | ------------------------------- |
| ICP filing (Bei'an)   | Cannot file it            | Handles filing end to end       |
| Hosting               | Overseas, no CDN in China | Mainland host, ICP-licensed     |
| Firewall-aware build  | Pulls blocked scripts     | Swaps or self-hosts every one   |
| Payments              | Stripe, PayPal            | WeChat Pay, Alipay, UnionPay    |
| Search                | Google SEO                | Baidu SEO and AI-search ready   |
| In-China testing      | None                      | Tested from inside the mainland |

<!-- SECTION: WHY GENERIC ISNT ENOUGH -->

## Why a generic web agency isn't enough for China

The reasons split into three, and each one alone can sink a launch.

First, the filing. Any mainland-hosted site needs an ICP filing, known as
Bei'an (备案), issued through a provincial arm of the Ministry of Industry
and Information Technology (MIIT). No filing, no legal mainland hosting,
and Baidu will not properly index the site either. A generic agency cannot
do this for you. It takes a China-registered entity as the filing sponsor
and a mainland host that submits the paperwork. This is not a plugin, it is
a bureaucratic process with its own clock.

> China's ICP filing (Bei'an) for a non-commercial site is reviewed by the
> provincial communications authority within 20 working days by regulation,
> and often clears faster.
> Source: Measures for the Administration of Internet Information Services,
> MIIT.

Second, the firewall. A default WordPress build quietly loads Google Fonts,
Google Maps, reCAPTCHA, and often analytics or payment scripts, all of
which sit behind the Great Firewall. Blocked or throttled, every one. The
page doesn't error out. It just hangs, waiting on a response that never
comes, while your visitor decides you look broken. A firewall-aware agency
self-hosts the fonts, swaps reCAPTCHA for a compliant alternative, replaces
the map, and strips every overseas dependency before launch.

Third, discovery. Baidu (百度) runs its own ranking rules, its own webmaster
tools, and stricter technical requirements than Google. A site tuned for
Google does not transfer. And Google barely factors into the market anyway.

> On mobile, where nearly all Chinese browsing happens, Baidu holds
> roughly 65% of the search market. Google sits under 3%.
> Source: Statcounter Global Stats, China, 2025.

> China had 1.108 billion internet users at the end of 2024, and 99.7% of
> them go online from a phone.
> Source: CNNIC, 55th Statistical Report on China's Internet Development.

<!-- SECTION: MUST-HAVE CAPABILITIES -->

## Must-have capabilities to evaluate

Treat this as a checklist. A partner worth hiring can speak to every line
without stalling.

**ICP handling.** They should own the filing, not point you toward a
government portal and wish you luck. Ask whether they file as your sponsor
or through a partner entity, and whether they have done it before for a
foreign company. There is also a commercial ICP license, separate from the
basic Bei'an, for stores that sell directly. It carries ownership rules
and a longer review, so a store build needs an agency that knows which
filing applies to you.

**Hosting inside the mainland.** Fast delivery in China means servers in
China, on Alibaba Cloud (Aliyun, 阿里云), Tencent Cloud (腾讯云), or Huawei
Cloud (华为云), paired with a China CDN for images and assets. A partner
who plans to keep you on a US or European host "with a CDN in front" has
not understood the problem.

**Payment integration.** For a store, Visa and Mastercard reach almost no
one. WeChat Pay (微信支付) and Alipay (支付宝) are the floor, with UnionPay
(银联) a useful third for older and corporate buyers. Make sure the agency
has wired these into WooCommerce before, not just read about it.

**Bilingual delivery.** Someone on the team has to work in Chinese, both
in the CMS and in the compliance paperwork. An agency that runs everything
through machine translation will produce copy that reads as foreign, and
foreign reads as risk to a Chinese buyer.

**Performance testing from inside China.** This is the tell that sorts
real specialists from the rest. Load time measured from Frankfurt tells
you nothing about load time from Shanghai. The agency should test from
inside the mainland and show you the numbers.

| Capability            | What good looks like                        |
| --------------------- | ------------------------------------------- |
| ICP handling          | Filed for you, foreign-company experience   |
| China hosting         | Aliyun / Tencent / Huawei plus a China CDN  |
| Payments              | WeChat Pay, Alipay, UnionPay in WooCommerce |
| Bilingual team        | Native Chinese in CMS and paperwork         |
| In-China performance  | Tested from the mainland, numbers shared    |

<!-- SECTION: QUESTIONS TO ASK -->

## Questions to ask before hiring

Short, direct questions surface the truth fast. Ask these.

Who sponsors our ICP filing, and how long will it take? A specialist gives
you a filing path and a rough timeline. A pretender gets vague, or suggests
you can skip it. You cannot.

Where will the site be hosted, physically? The answer you want names a
mainland provider. "We'll put a CDN in front of our usual host" is the
answer you don't.

How do you test performance inside China? You want a real method, a tool,
a location. Silence here means they have never done it.

Which blocked scripts will you have to replace on our current build? A
specialist will rattle off Google Fonts, Maps, reCAPTCHA without pausing.
Hesitation means they have not thought about the Firewall at all.

Have you launched a WordPress site in China for a foreign company before?
Ask to see it. Ask if it loads for a user in China today.

The red flags cluster in a few places. Offshore-only hosting, pitched as
good enough. No plan for in-China testing. Vague, hand-wavy answers on ICP,
which is the single hardest piece to fake. And a portfolio full of sites
that look great from where you are sitting but have never been checked from
where your customers are.

<!-- SECTION: PRICING AND ENGAGEMENT -->

## Pricing and engagement models

China projects cost more than the equivalent domestic build, and it helps
to understand where the extra goes before you compare quotes.

Most engagements land in one of two shapes. A fixed-scope project covers a
defined build, migration, or launch: strategy, ICP filing, hosting setup,
the firewall-aware build, and go-live. A retainer covers the ongoing part,
which in China is not optional the way people assume. Plugins break behind
the Firewall after updates, hosting needs monitoring, Baidu SEO is a slow
continuous game, and the AI-search engines keep shifting. Things need
tending, month to month.

| Model            | Covers                                  | Best when              |
| ---------------- | --------------------------------------- | ---------------------- |
| Fixed project    | Build, migration, ICP, hosting, launch  | Getting live in China  |
| Monthly retainer | Maintenance, SEO, monitoring, updates   | Staying alive and seen |

What does China compliance add to the cost? A few concrete things. The ICP
filing is real work with real back-and-forth. Native Chinese content is a
specialist skill, not a translation line item. Firewall-aware engineering,
swapping every blocked dependency and testing from inside China, takes time
a domestic build never spends. And mainland hosting plus a China CDN is its
own line. None of it is padding. It is what a site that works on the other
side of the wall actually costs.

<!-- SECTION: WHY CHINAWEBFOUNDRY -->

## Why ChinaWebFoundry

We are a Shanghai-based team that has been putting foreign brands online in
China for years, on WordPress and on Astro. Native Chinese writers,
designers who open the site in WeChat before anything else, and SEO people
who rank on Baidu for a living. All on staff, in one office, on the right
side of the Firewall.

If you want to go deeper on the technical pieces, our guides on the Great
Firewall, ICP licensing, and Baidu SEO get into the detail. And when you
are ready to build or move a site, our WordPress service and China Hosting
service are where to start.

<!-- CTA -->

CTA: See our WordPress service

CTA: See our China Hosting service

<!-- =====================================================================
FEATURE IMAGE: INSTRUCTION FOR CLAUDE CODE

Generate the feature (hero) image from the prompt below, then wire it in as
the article's featured image and OG image.

- Save to:    public/images/guides/wordpress-agency-china.webp
- Reference:  images/guides/wordpress-agency-china.webp
- Format:     .webp, landscape, web-optimized (China CDN friendly)
- Style rule: real candid editorial photograph only. No text, no logos,
              no UI overlays, no diagrams or infographics.

IMAGE PROMPT (use verbatim):

A candid editorial photograph of a focused Western businesswoman in her late
thirties sitting across a table from a Chinese web developer in a bright
Shanghai office, both leaning slightly toward a single laptop between them,
her expression thoughtful and evaluating as he gestures toward the screen
mid-explanation, shot at a shallow depth of field with soft natural window
light falling from the left, warm skin tones, the blurred background hinting
at a working studio with a second monitor and a wall of sticky notes just
out of focus, the mood collaborative and serious rather than staged, natural
candid framing slightly off-center, photorealistic, no text or graphics
anywhere in the frame.
===================================================================== -->
