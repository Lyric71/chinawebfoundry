---
title: "Cloudflare in China: ICP and network requirements"
slug: cloudflare-china
description: "Cloudflare China Network needs Enterprise, an ICP filing or licence per apex domain, and JD Cloud review. Check the requirements before switching."
excerpt: "What Cloudflare does and does not do for Chinese visitors, and the filing requirement behind the in-country option."
template: guide
author: cyril-drouin
category: Hosting
reviewBy: 2026-11-26
---

<!-- HERO SECTION -->

Cloudflare in China: ICP and network requirements

<!-- INTRODUCTION -->

Cloudflare in China requires a separate Enterprise subscription for mainland
delivery, an ICP filing (ICP备案) or licence per apex domain, and JD Cloud
review. 21YunBox recorded 3 of 6 completed loads of Cloudflare’s own website
from Alibaba Cloud (阿里云) cn-zhangjiakou on 28 August 2026. That test covers
the vendor’s website, not your CDN configuration.

| Your current position | What needs to happen |
|---|---|
| Cloudflare without China Network | Contract the separate China Network subscription on Enterprise |
| Enterprise account, no filing | Obtain the required filing or licence for each apex domain |
| Filing already valid | Submit the domain and its content for JD Cloud review |
| Approved domain | Complete onboarding and check the features your site uses |

> Cloudflare makes China Network a separate subscription for Enterprise
> customers. JD Cloud operates its mainland data centres, and each apex
> domain needs a valid ICP filing or licence.
> Source: Cloudflare, China Network overview, 30 April 2026.
> https://developers.cloudflare.com/china-network/

An existing Cloudflare account gives you a familiar dashboard. It doesn’t
show that your site has passed the China Network prerequisites. Ask the account owner to confirm the subscription and approved domains.
You can then plan the network switch around the approvals still needed.

<!-- SECTION: Cloudflare in China starts with the domain paperwork -->

## Cloudflare in China starts with the domain paperwork

Start with the apex domain: `example.com` is a root domain;
`www.example.com` is a subdomain. Inventory the domains the launch will use, including any separate brand
address. Check the filing against each apex domain.

Cloudflare asks for a valid ICP filing (ICP备案) or ICP licence (ICP许可证)
for each apex domain. Confirm which authorisation applies to the site’s
activity before making the application. Our foreign-company ICP filing guide explains the distinction and the entity requirements.

The paperwork has an owner. Name that person in the launch plan and give
them the domain inventory. Confirm who will maintain the filing when the
site or company details change. Buying a CDN subscription doesn’t settle
those responsibilities.

Prepare JD Cloud’s review materials alongside the filing record: company
and customer names, domain name, ICP number, a description of the site’s
content, and the signed self-attestation letter supplied by the sales team.
The site must also display its ICP number in the footer.

> JD Cloud reviews domain content before China Network is enabled. After
> vetting, Cloudflare estimates 24 to 48 hours for first-time zone onboarding.
> Source: Cloudflare, Get started, 17 April 2026.
> https://developers.cloudflare.com/china-network/get-started/

That onboarding estimate begins after content vetting. Keep filing approval
and content review as separate dates in your project plan. Don’t promise
that a new application will fit into the zone-enablement window.

<!-- SECTION: What the Cloudflare website test covers -->

## What the Cloudflare website test covers

The available measurement is narrow. 21YunBox tested Cloudflare’s own site
from a mainland cloud region. It didn’t publish a comparison of your
customer domain with and without China Network in this test.

| Tested subject | Datacentre result | Consumer result | Verdict | Test date |
|---|---|---|---|---|
| Cloudflare’s own website | Alibaba Cloud (阿里云) cn-zhangjiakou: 3 of 6 loads completed | Not supplied for this test | Intermittent (21YunBox), vendor site only | 28 August 2026 |

> 21YunBox reports 3 of 6 completed load attempts for Cloudflare’s own
> website from Alibaba Cloud (阿里云) cn-zhangjiakou on 28 August 2026.
> Source: 21YunBox, Does Cloudflare Work in China? The China Network & ICP
> Gate, reviewed 7 October 2026.
> https://www.21cloudbox.com/support/cloudflare-china.html

A customer hostname stays untested here unless a dated third-party test
covers that hostname. A successful request to a vendor’s homepage cannot tell you
whether a form on your site reaches its submission endpoint.

Cloudflare’s routing documentation also warns that anycast can send a
request to a data centre farther away geographically. The visitor’s
internet provider’s routing and peering affect the path. Avoid promising a particular serving city
based only on the visitor?s location.

> Cloudflare says requests can reach data centres other than the
> geographically closest location; customers cannot pin that selection
> through zone settings.
> Source: Cloudflare, Geographic traffic routing, 14 October 2026.
> https://developers.cloudflare.com/support/troubleshooting/general-troubleshooting/geographic-traffic-routing/

<!-- SECTION: Check the features before changing delivery -->

## Check the features before changing delivery

Put the features your site actually uses beside Cloudflare’s China Network
availability list. Pay attention to the cache options. Identify the
challenge service on your enquiry form, if it has one. Agree an alternative for any unsupported feature before the switch.
Regional product support and measured reachability are separate checks.

> China Network’s feature list specifies static caching and excludes
> Tiered Cache and Cache Reserve. It also lists Turnstile as unavailable
> within mainland China.
> Source: Cloudflare, Available products and features, 10 June 2026.
> https://developers.cloudflare.com/china-network/reference/available-products/

For each enquiry form, record the endpoint that accepts the submission
and any scripts the visitor must load first. Image hosts belong in the
inventory too. The guide to reCAPTCHA failures on China forms covers that particular dependency; changing the page’s CDN
doesn’t establish whether a separate form service is usable.

For a site already on Enterprise with a valid filing, ask the account team
to confirm the required features and the domain’s approval. If the filing hasn?t started, assign it to someone before
planning the network switch. Our China hosting service covers the hosting
and filing work behind that decision.

<!-- SECTION: Before you book the switch -->

## Before you book the switch

**Can we try China Network before obtaining the filing?**

Cloudflare’s published proof-of-concept requirements include a valid ICP
number and JD Cloud’s content approval. Prepare those before requesting the
trial. A sales discussion can establish the scope, but it doesn’t replace
the documents needed for a live proof of concept on the China Network.

**Will Cloudflare arrange the filing for us?**

Cloudflare says neither it nor JD Cloud is responsible for ICP
applications, though it can refer customers to filing partners. Choose who
will submit and maintain yours. Keep a copy of the filing record with the
domain inventory so a change of agency doesn’t obscure who owns the work.

**What happens if the filing is revoked?**

JD Cloud may suspend or terminate access to the China service. Cloudflare
says it will route the affected domains to data centres outside mainland
China. Keep the filing contact current and review any change to the
domain or site activity with the team responsible for the filing.

> Cloudflare’s FAQ requires filing and content approval for a proof of
> concept, assigns applications to the customer or its filing partner,
> and describes offshore rerouting after revocation.
> Source: Cloudflare, China Network FAQ, 16 April 2026.
> https://developers.cloudflare.com/china-network/faq/

<!-- CTA -->

Bring your domain list and filing status to the call.

CTA: Book a call


<!-- =====================================================================
FEATURE IMAGE: INSTRUCTION FOR CLAUDE CODE
Save to: public/images/guides/cloudflare-china.webp
Reference: /images/guides/cloudflare-china.webp
Format: WebP, 3:2 generated, 1050px maximum width, under 350KB; layout crop 21:9
Alt: A Chinese web operator reviews Cloudflare China Network onboarding on a laptop in a Nanjing office.
IMAGE PROMPT (use verbatim):
Candid documentary photograph in a modest web operations office in Nanjing, China, on an ordinary overcast weekday. Landscape 3:2 composition, close oblique view across a scuffed desk towards a slightly dusty laptop showing a believable Cloudflare China Network onboarding documentation page, small orange interface accents and a domain approval checklist, with a Chinese ICP filing form in another visible browser window. The screens are the clear subject, their text small and incidental rather than a large designed headline. One ordinary Chinese office worker is partly visible at the right edge, in an uncoordinated everyday cotton shirt, looking down at a paper domain list, natural skin texture and an imperfect relaxed posture; hands resting plausibly with normal anatomy. A scratched mug with tea residue, a loosely coiled network cable, a cheap mouse and a bent-corner notebook occupy the desk without artful arrangement. Slightly uneven light from a side window mixed with dull overhead office lighting, mild screen glare, subtle handheld framing, a cropped chair edge and an ordinary wall socket. Keep the screen and worker inside the central horizontal band so a wide 21:9 crop retains the subject. Real-life photography, believable proportions and physically plausible details, no glossy advertising finish, no beauty retouching, no cinematic colour grade, no flawless symmetry, no posed smile, no immaculate interior, no dramatic city skyline, no distorted anatomy, no rendering artifacts, no infographic, no watermark, no added caption or text overlay, and no logos except incidental branding inside the laptop screen.
===================================================================== -->

<!-- SCHEMA
Type: Article
FAQPage: no
Breadcrumb: Home > China Web Guide > Cloudflare in China: ICP and network requirements
Author: Cyril Drouin
datePublished: Set to actual publication date at step 4
reviewBy: 2026-11-26, preserve in every published locale
Measurement: 21YunBox, vendor-site load attempts, Alibaba Cloud cn-zhangjiakou, 28 August 2026; no matched home-line test
-->

<!-- ASSET BRIEF
TABLES: Subscription and filing prerequisites from Cloudflare overview and onboarding (30 and 17 April 2026); scoped vendor-site load result from 21YunBox (28 August 2026, reviewed 7 October).
CHARTS: none
SCREENSHOTS: none
DOWNLOADS: none
INTERNAL LINKS:
foreign-company ICP filing guide -> /resources/china-web-guide/icp-licence-filing-foreign-companies/
guide to reCAPTCHA failures on China forms -> /resources/china-web-guide/recaptcha-china/
China hosting service -> /services/china-hosting/
CTA Book a call -> /contact/
LOCALIZED SLUGS: fr cloudflare-chine; es cloudflare-china; de cloudflare-china
CLIENT SIGN-OFF ON RECORD: none needed
LINK SUBSTITUTIONS: none
THIRD-PARTY MEASUREMENTS CITED (GFW rule): Cloudflare vendor website, 21YunBox, Alibaba Cloud cn-zhangjiakou, 28 August 2026, 3 of 6 completed loads; customer hostname untested.
-->
