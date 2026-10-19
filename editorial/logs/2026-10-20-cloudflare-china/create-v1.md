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
show that your site has passed the China Network prerequisites. Ask whoever
owns the account to confirm the subscription and approved domains before
you promise a mainland launch date.

<!-- SECTION: Cloudflare in China starts with the domain paperwork -->

## Cloudflare in China starts with the domain paperwork

Start with the apex domain: `example.com` is the root domain in this
example, and `www.example.com` is a subdomain. Make an inventory of the
domains the launch will use. A separate brand domain needs its own check.

Cloudflare asks for a valid ICP filing (ICP备案) or ICP licence (ICP许可证)
for each apex domain. Confirm which authorisation applies to the site’s
activity before making the application. Our guide to ICP filing for foreign
companies explains the distinction and the entity requirements.

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

<!-- SECTION: Read the test as a website observation -->

## Read the test as a website observation

The available measurement is narrow. 21YunBox tested Cloudflare’s own site
from a mainland cloud region. It didn’t publish a comparison of your
customer domain with and without China Network in this test.

| Tested subject | Datacentre result | Consumer result | Verdict | Test date |
|---|---|---|---|---|
| Cloudflare’s own website | Alibaba Cloud (阿里云) cn-zhangjiakou: 3 of 6 loads completed | Not supplied for this test | Intermittent, vendor site only | 28 August 2026 |
| Your customer hostname | Untested | Untested | No verdict | No dated test |

> 21YunBox reports 3 of 6 completed load attempts for Cloudflare’s own
> website from Alibaba Cloud (阿里云) cn-zhangjiakou on 28 August 2026.
> Source: 21YunBox, Does Cloudflare Work in China? The China Network & ICP
> Gate, reviewed 7 October 2026.
> https://www.21cloudbox.com/support/cloudflare-china.html

Treat the customer hostname as untested until a dated third-party test
covers it. A successful request to a vendor’s homepage cannot tell you
whether a form on your site reaches its submission endpoint.

Cloudflare’s routing documentation also warns that anycast can send a
request to a data centre farther away geographically. The visitor’s
internet provider’s routing and peering affect the path. A promised
Hong Kong route therefore needs evidence for that connection.

> Cloudflare says requests can reach data centres other than the
> geographically closest location; customers cannot pin that selection
> through zone settings.
> Source: Cloudflare, Geographic traffic routing, 14 October 2026.
> https://developers.cloudflare.com/support/troubleshooting/general-troubleshooting/geographic-traffic-routing/

<!-- SECTION: Check the features before changing delivery -->

## Check the features before changing delivery

Put the features your site actually uses beside Cloudflare’s China Network
availability list. The list has limits: its CDN cache supports static
caching, with neither Tiered Cache nor Cache Reserve. Cloudflare also lists
Turnstile as unavailable within mainland China. That is a vendor support
statement, not a Great Firewall verdict on every challenge request.

> China Network’s feature list specifies static caching and excludes
> Tiered Cache and Cache Reserve. It also lists Turnstile as unavailable
> within mainland China.
> Source: Cloudflare, Available products and features, 10 June 2026.
> https://developers.cloudflare.com/china-network/reference/available-products/

Make the feature review concrete. Write down the hostname serving the
page, where images come from, and the endpoint that accepts an enquiry.
Then check the scripts attached to the form. The guide to reCAPTCHA and
China forms covers that particular dependency; changing the page’s CDN
doesn’t establish whether a separate form service is usable.

For a site already on Enterprise with a valid filing, ask the account team
to confirm the required features and the domain’s approval. For a site
whose filing has not started, give the filing process an owner before
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

CTA: Book a call
