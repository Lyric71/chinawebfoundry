---
title: "ICP Filing for a WordPress Site"
slug: wordpress-icp-filing
description: "What the ICP filing asks of the site itself: a domain kept dark during review, a name and content that match the record, and where it fits in a build."
excerpt: "The WordPress half of the ICP filing: what the review checks on the site itself, and how to schedule a build around it."
template: guide
author: echo-peng
category: Legal
reviewBy: 2027-01-09
---

<!-- HERO SECTION -->

ICP filing for a WordPress site

<!-- INTRODUCTION -->

Most of an ICP filing (ICP备案) is about the company: a mainland entity that
owns it and a mainland server it's made against. But the review looks at the
WordPress site as well. Its domain needs a mainland registrar and the filer's
name on it. The site name has to be Chinese and pass provincial rules, and the
content must match the record. During a first filing, the site stays dark
until the number is issued. Only a site that charges users needs the ICP licence on
top.

| What the review checks     | What it means for the WordPress build                          |
| -------------------------- | -------------------------------------------------------------- |
| The domain                 | Real-name verified at a mainland registrar, in the filer's name |
| The site name              | Three or more Chinese characters, used as the Site Title       |
| The content                | Matches the company's business; no unapproved regulated topic  |
| Reachability during review | None. No holding page, no staging on the mainland server       |
| The footer, once approved  | The ICP number linked to MIIT, then the public security number |

Every source below was checked on 13 October 2026.

<!-- SECTION: Filing or ICP licence -->

## Filing or ICP licence: does the site charge for anything?

China sorts internet information services into two kinds. The rule takes two
sentences.

> Commercial internet information services provide information or web page
> production services to users for a fee. Non-commercial services provide
> public, shared information to users free of charge.
> Source: State Council, Measures for the Administration of Internet
> Information Services (互联网信息服务管理办法), article 3, text of 8 January
> 2011, which the revision of 6 December 2024 left unchanged.
> https://www.gov.cn/gongbao/content/2011/content_1860864.htm

A company site, a blog, a product catalogue and a careers page are free to
read, so they need the filing. A paywall or a membership plugin that sells
courses points to the licence, and that path needs a licensed adviser.

A WooCommerce shop is the case people argue about. China's negative list for
foreign investment carves e-commerce out of the 50% foreign ownership cap on
value-added telecoms, which tells you shops are treated as their own category.
Where yours falls is an adviser's question. Ask it before you file. Our guide
to ICP filing for foreign companies covers the licence, the ownership cap and
the pilot zones.

<!-- SECTION: What the filing needs from the site -->

## What the filing needs from the site, not from the company

Three things on the site side can sink an application before a person ever
looks at it.

**The domain.** Alibaba Cloud (阿里云) lists three requirements, none of them
about hosting.

> The domain suffix must be approved by MIIT, the registrar must be an approved
> one, and the domain holder's details must match the filing entity. Domains
> registered on Alibaba Cloud's international site must be transferred to a
> mainland registrar and real-name verified before filing.
> Source: Alibaba Cloud (阿里云) help centre, domain preparation and checks,
> last updated 23 September 2026.
> https://help.aliyun.com/zh/icp-filing/basic-icp-service/user-guide/prepare-and-check-the-domain-name

The same page asks for more than 45 days left before the domain expires.
A domain your agency in Europe registered in its own name fails the third test
on day one.

**The site name.** This is the field that trips WordPress teams. It has to be
Chinese, and it has to be decided early (it ends up in the Site Title).

> A company website name must be three or more Chinese characters. Pure
> numbers, English and domain names are not allowed, and the name must match
> the site's real content. Non-state bodies may not use words such as 中国,
> 中华 or 国家, and words such as blog, forum, online or community need
> pre-approval.
> Source: Alibaba Cloud (阿里云) help centre, filling in website information,
> last updated 21 September 2026.
> https://help.aliyun.com/zh/icp-filing/basic-icp-service/user-guide/fill-in-website-information

Provinces add banned words of their own. Alibaba's list of rejection reasons
(7 July 2026) asks a filed site to show the filed name in the browser tab and
at the top of the page, so the Site Title under Settings > General carries
it.

**The content.** Tencent Cloud (腾讯云) says a company filing must cover the
company's own site, with content inside its business scope (documentation
updated 23 July 2026). Some topics need a regulator's approval before the
filing is even submitted.

> Internet information services in news, publishing, education and similar
> fields that need approval from the competent department must obtain it
> before applying for a licence or completing the filing.
> Source: State Council, Measures for the Administration of Internet
> Information Services, article 5 as amended by State Council Order 797 of
> 6 December 2024, in force from 20 January 2025.
> https://www.mee.gov.cn/zcwj/gwywj/202412/t20241216_1098631.shtml

Alibaba's own pre-approval list runs wider.

| Content on the WordPress site            | What it needs before the filing          |
| ---------------------------------------- | ---------------------------------------- |
| News or current affairs                  | An internet news information licence     |
| Online publishing                        | An online publishing service licence     |
| Drug or medical device information       | A drug information service certificate   |
| Video and audio programmes               | An audiovisual programme licence         |
| Off-campus tutoring, finance, religion   | Approval from the sector regulator       |
| None of these                            | In some regions, a signed declaration    |

Source for the table: Alibaba Cloud (阿里云) help centre, pre-approvals, last
updated 21 August 2026.

<!-- SECTION: Dark during review -->

## Dark during review: no holding page

For a first filing, the site isn't allowed to be online at all while the
regulator examines it. Tencent puts it bluntly.

> During review of a new filing or a new website, the site cannot be
> accessed. It must be closed or unreachable through its public domain or IP,
> or it fails the regulator's check and may be rejected.
> Source: Tencent Cloud (腾讯云) documentation, last updated 21 August 2026.
> https://cloud.tencent.com/document/product/243/19650

Alibaba enforces it too.

> A site may not open web service before it has a filing number. If it does,
> Alibaba Cloud's monitoring identifies it and blocks the site.
> Source: Alibaba Cloud (阿里云) help centre, ICP filing FAQ, last updated
> 23 September 2026.
> https://help.aliyun.com/zh/icp-filing/basic-icp-service/support/faq-about-icp-filing-preparations

A "coming soon" plugin on the mainland server is the wrong move, and so is
a staging copy on its public IP. On our projects, ports 80 and 443 stay closed
until the number arrives anyway.

Filing the domain your global site already runs on? Tencent's sentence makes
no exception for a site hosted elsewhere, so ask the provider before you
submit.

The build carries on somewhere else: a local or offshore staging copy. The
review window is a good time to strip out the blocked dependencies (our guide
to moving WordPress into China lists them).

| When                          | The filing                                | The WordPress build                                    |
| ----------------------------- | ----------------------------------------- | ------------------------------------------------------ |
| Before you submit             | Entity, domain, Chinese site name, server | Set the Site Title; decide on comments and forms       |
| Review (we plan 3 to 6 weeks) | Provider check, then provincial review    | Staging off the mainland server; fix dependencies      |
| The number arrives            | Filing approved                           | Deploy, footer number in, domain pointed at the server |
| Within 30 days of opening     | Public security filing                    | Second number in the footer                            |

Three to six weeks is our planning figure. On paper it's shorter.

> Alibaba Cloud's own check takes 1 to 2 working days. The provincial
> Communications Administration (省级通信管理局) review that follows generally
> takes 1 to 20 working days.
> Source: Alibaba Cloud (阿里云) help centre, ICP filing process overview,
> last updated 26 August 2026.
> https://help.aliyun.com/zh/icp-filing/basic-icp-service/user-guide/icp-filing-application-overview

Alibaba charges nothing for the filing itself; you pay for the mainland server
it's made against (FAQ updated 23 April 2026).

In WordPress, the first things to come off before the site opens are
comments and forums.

The rules and the providers disagree here. Article 9 of the State Council
measures still mentions a special application for electronic bulletin
services (forums and message boards). But the State Council cancelled that
approval, and the ministry repealed its bulletin rules on 23 September 2014.
Alibaba's rejection list still names electronic bulletin content among the
topics that need approval, and the provider runs the first review of your
file.

We haven't found a current filing page that deals with plain blog comments.
So launch with comments switched off and bbPress or BuddyPress uninstalled,
then check with the provider before you turn anything back on.

<!-- SECTION: Why WordPress.com cannot be filed -->

## Why WordPress.com can't be filed

WordPress.com offers data centres in US West, US Central, US East and EU West
(support page reviewed 21 September 2026). None of them is in the mainland,
and the filing is made by whoever provides the server's network access.

> A server bought elsewhere can't be filed at Tencent Cloud. Filing follows
> the principle that whoever provides access files it: you file with the
> provider whose server you use.
> Source: Tencent Cloud (腾讯云) documentation, last updated 30 January 2026.
> https://cloud.tencent.com/document/product/243/19631

A WordPress.com site that has to live in China becomes self-hosted
WordPress on a mainland server, the build our WordPress in China page
describes.

Whether it loads in China is another matter, and GreatFire's answer beats the
older guides.

> GreatFire reads https://wordpress.com as not blocked: all 20 recent
> conclusive tests from mainland China connected normally, the last on
> 11 October 2026.
> Source: GreatFire, reachability record for https://wordpress.com, read
> 13 October 2026.
> https://en.greatfire.org/https/wordpress.com

The domain underneath is patchier: of 1,516 wordpress.com URLs tested, 230
read blocked and 823 disrupted (GreatFire domain page, 13 October 2026).

<!-- SECTION: The console and its owner -->

## The filing console, and who on your side owns it

The filing runs in a provider console, and which account you open matters. At Alibaba
it has to be an aliyun.com account.

> Alibaba Cloud international site (alibabacloud.com) accounts do not support
> ICP filing applications.
> Source: Alibaba Cloud help centre, ICP filing for enterprises outside the
> Chinese mainland, last updated 20 August 2026.
> https://help.aliyun.com/en/icp-filing/basic-icp-service/product-overview/icp-filing-application-for-enterprises-outside-the-chinese-mainland

The person responsible for the site then uploads an ID and passes a face
check. Alibaba accepts a passport from residents of
other countries (11 September 2026), but its face check is written around the
mainland ID card (2 June 2026), and no page we've found says how a passport
holder passes it.

The clock that catches teams is the text message.

> After the filing order is submitted, MIIT sends a verification SMS. Complete
> the verification within 24 hours, or the filing has to be submitted again.
> Source: Alibaba Cloud (阿里云) help centre, MIIT SMS verification, last
> updated 17 September 2025.
> https://help.aliyun.com/zh/icp-filing/basic-icp-service/user-guide/sms-check

So the owner is a named person at the mainland entity. They hold the console
login, use a phone number from the filing's province (Alibaba's advice) and
answer within the day. Your freelance developer and the project manager in
Lyon are the wrong people for it.

Alibaba rejects filings whose contact phone goes unanswered, and Tencent says
a filing can be cancelled when the number on it is dead at a spot check. Our
China Hosting service handles the filing end to end, and even then the text
message goes to the person you named.

<!-- SECTION: After approval -->

## After approval: two footer numbers and the yearly duties

Once the number arrives, the work shrinks to housekeeping. The number goes on
the site the day it opens.

> A non-commercial internet information service provider shall show its
> filing number at the bottom centre of its homepage when the site opens,
> with a link to the MIIT filing system beneath it.
> Source: Ministry of Industry and Information Technology (工业和信息化部),
> Measures for the Administration of Non-Commercial Internet Information
> Service Filing, article 13, as amended on 18 January 2024.
> https://www.miit.gov.cn/gyhxxhb/jgsj/cyzcyfgs/bmgz/xxtxl/art/2024/art_84a0cfa0ebd049bbbe751dca9a008e56.html

In WordPress, put it in a footer widget or a child theme. A number typed into
the parent theme's footer.php lasts until the next theme update, and a missing
link can bring an order to correct it and then a fine (article 25).

The public security filing (公安备案) follows. Alibaba gives it 30 days from
the site opening, and the Shenzhen Public Security Bureau (10 June 2023) says
the number goes in a prominent position at the bottom of the homepage once
it's approved. That makes two numbers in the footer.

Then the yearly duties. The MIIT measures ask for any change to the filed
details 30 days in advance and a cancellation on the day the service stops.
And the text still provides for an annual review through the MIIT system.

Moving the WordPress site to another provider needs a transfer filing, and
that one runs the other way round: the filed site has to stay reachable, and
Alibaba rejects a transfer when it can't be reached. Let the server lapse with no new provider and the
record becomes an empty shell, which Tencent says the regulator cancels
(documentation updated 3 February 2026).

The child theme is also where Baidu Tongji (百度统计) goes. No maintained
plugin is dedicated to it, and Baidu's help page (22 September 2021) says to
put the code before the closing head tag on every page.

<!-- SECTION: Frequently asked -->

## Frequently asked

**Do I need an ICP filing for my WordPress website?**

Only if it's served from a server in mainland China. A site hosted in Hong
Kong or Europe needs no filing and pays for it at the border instead, where
every request crosses the Great Firewall. A mainland server can't open the site to
visitors until the filing clears, and a site that charges users also needs the
ICP licence.

**Can I keep a coming-soon page up while the filing is reviewed?**

Not on the mainland server, and not under the domain being filed. Tencent
Cloud says the site must be closed or unreachable by its public domain or IP
during a first filing, or the regulator's check can reject it. Build on a
local or offshore staging copy and point the domain at the mainland server
once the number is issued.

**Can our developer abroad own the filing account?**

They can build the site, but the filing belongs to the mainland entity. The
filer must be a mainland company or resident, the domain must be in its name,
and MIIT's text message to the number on the filing has to be answered within
24 hours. None of the three sits with a developer abroad.

**How long does the ICP filing take for a WordPress site?**

Alibaba Cloud publishes 1 to 2 working days for its own check and generally 1
to 20 working days for the provincial review. We plan three to six weeks,
because documents take time and applications come back. Finish the build on
staging before the number arrives.

<!-- CTA -->

CTA: Talk to our team about ICP filing and China hosting

<!-- =====================================================================
FEATURE IMAGE: INSTRUCTION FOR CLAUDE CODE

Generate the hero image from the prompt below with the generate-image-openai
skill, convert to WebP with sharp (max width 1050, quality about 78, no
enlargement, under 350KB), then wire it in as the guide's visual.

- Save to:    public/images/guides/wordpress-icp-filing.webp
- Reference:  /images/guides/wordpress-icp-filing.webp
- Format:     .webp, landscape 3:2 generated, cropped by the layout to 21:9
- Style rule: candid normal-life photo with real-life defects, China
              setting, only Chinese people, the article's subject visible
              on a screen. No AI polish, no diagrams, no text overlays, no
              watermark, no logos except what is on screen.

IMAGE PROMPT (use verbatim):

A candid, slightly off-level handheld photograph taken late on a weekday afternoon in a small second-floor office in Suzhou, China, where a Chinese woman in her early thirties in a grey cardigan sits at a cluttered shared desk and holds up her smartphone in her left hand, thumb mid-tap, the phone screen showing a Chinese text message with a six-digit verification code, while her laptop in front of her shows a Simplified Chinese ICP filing form in a cloud provider's web console, with labelled input fields, a red asterisk beside a field for the website name and a blue submit button, the screen slightly smudged and catching a reflection from the window; beside the laptop sit a printed company business licence in a clear plastic sleeve, a half-drunk paper cup of milk tea, a tangle of charging cables, a desk calendar with a few dates circled in pen and a second monitor at the edge of the frame showing a WordPress General Settings screen in Chinese, partly cut off by the crop; the light is mixed and uneven, cool daylight from a window with half-drawn blinds on one side and a warm desk lamp on the other, with a little motion blur on her moving thumb, soft focus falling off towards the back of the room where a colleague's chair and a water dispenser are visible, ordinary office clutter, natural skin texture and no retouching, documentary phone-camera realism with real-life imperfections, no added text, no captions, no watermark and no logos beyond what appears on the screens.
===================================================================== -->

<!-- SCHEMA
Type: Article
FAQPage: no (the brief does not ask for FAQ schema)
Breadcrumb: Home > China Web Guide > ICP Filing for a WordPress Site
Author: Echo Peng
datePublished: set by the publish step
Measurement: none of our own. The only reachability verdict is GreatFire's
(https://wordpress.com, last tested 11 October 2026; wordpress.com domain
page, most recent test 13 October 2026). The ports 80 and 443 line is
attributed to our own projects. Everything else is regulation text and
provider documentation, dated in the body.
-->

<!-- ASSET BRIEF
TABLES:
  1. Answer table in the introduction: what the review checks on the site and
     what it means for the WordPress build. Built from Alibaba Cloud's domain
     (23 September 2026), site-name (21 September 2026) and FAQ (23 September
     2026) pages, Tencent Cloud 243/19650 (21 August 2026) and 243/19644
     (23 July 2026), and MIIT Order 33 article 13 (as amended 18 January 2024).
  2. Pre-approval table in "What the filing needs from the site". Source:
     Alibaba Cloud help centre, pre-approvals, 21 August 2026.
  3. Sequencing table in "Dark during review": the filing against the
     WordPress build. Our planning figure (3 to 6 weeks) labelled as ours;
     review windows from Alibaba's overview (26 August 2026); public security
     filing within 30 days from the same page.
CHARTS: none.
SCREENSHOTS: optional, not required for publish. If one is added later, the
  WordPress Settings > General screen with a Chinese Site Title and a footer
  showing an ICP number linked to beian.miit.gov.cn; blur the domain, the
  filing number and any personal name.
DOWNLOADS: none.
INTERNAL LINKS:
  Our guide to ICP filing for foreign companies -> /resources/china-web-guide/icp-licence-filing-foreign-companies/
  our guide to moving WordPress into China -> /resources/china-web-guide/migrate-wordpress-to-china/
  our WordPress in China page -> /wordpress-in-china/
  Our China Hosting service -> /services/china-hosting/
LOCALIZED SLUGS: fr wordpress-licence-icp · es wordpress-licencia-icp · de wordpress-icp-antrag
CLIENT SIGN-OFF ON RECORD: none needed. No client name or client figure appears.
LINK SUBSTITUTIONS: none. All four targets are live. The brief's "On publish"
  line still applies: repoint the ICP reference in migrate-wordpress-to-china
  (en, fr, es, de) to this guide.
THIRD-PARTY MEASUREMENTS CITED (GFW rule):
  https://wordpress.com, GreatFire, mainland test network, last tested 2026-10-11 (revised verdict)
  wordpress.com domain (1,516 URLs), GreatFire, mainland test network, most recent test 2026-10-13
-->
