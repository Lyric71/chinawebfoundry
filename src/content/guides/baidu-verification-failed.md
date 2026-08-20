---
title: "Baidu Site Verification Failed: The Usual Causes"
subtitle: "Baidu gives you one line of red text and nothing else. The file it says is missing loads fine in your browser, at your desk, in Frankfurt. Those two facts coexist, and the gap between them is the whole problem."
summary: "Baidu verification failed? Every common cause, what each one looks like from the outside, and the fix: redirects, robots.txt, WAFs, DNS, accounts."
visual: "/images/guides/baidu-verification-failed.webp"
order: 24
published: true
publishedAt: 2026-08-17
updatedAt: 2026-08-17
category: Search
---

Verification on the Baidu Search Resource Platform (百度搜索资源平台, Bǎidù Sōusuǒ Zīyuán Píngtái) is one HTTP request. Baidu fetches a URL from inside China and looks for one string, either an HTML file at your document root or a meta tag in the homepage head. Not much can break that, and what does break it sits between Baiduspider and your server.

The check runs anywhere from a few seconds to 24 hours, so a failure that returns instantly is a failed fetch, not a queue. And if you are verifying by CNAME, change methods.

> 站点管理-验证网站暂停【CNAME验证】的方式。该调整对已完成验证的站点没有影响。
>
> Site management: the CNAME method for site verification is suspended. The change does not affect sites already verified.
>
> *Source: Baidu Search Resource Platform, official announcement, February 2023*

## Crawl diagnosis answers the question your browser cannot

Crawl diagnosis (抓取诊断, zhuāqǔ zhěnduàn) fetches a URL as Baiduspider, desktop or mobile agent, and hands back the raw response. It returns the first 200KB, which matters on a bloated homepage where the tag can sit further down the response than that. It is also the only test you have that starts inside China.

Point it at the verification URL, then at the homepage. What comes back is what Baidu had to work with, which usually settles the argument with your developer. Quotas are tight. One Chinese SEO source puts the weekly allowance at 70, an agency source puts it at 200. Whatever you change, re-run the fetch before you press verify again.

Find your symptom, then read the section that matches it.

| What you see | What is happening | What fixes it |
| --- | --- | --- |
| Loads in your browser, fails instantly | 301 or 302 on the registered host | Verify the host that answers 200 |
| Reported blocked, not missing | robots.txt disallow | Allow Baiduspider, check the robots tool |
| Timeout on a publicly reachable file | WAF or CDN dropping Chinese traffic | Allow by reverse DNS, or move the file out of the protected zone |
| 403, or a login redirect | Basic auth, plugin, IP allowlist | Serve 200 with no auth |
| Green on every monitor, timeout at Baidu | Unreachable from mainland China | Test from inside China, fix routing or move the origin |
| Tag in devtools, not found by Baidu | Client-side rendering | Server-render it, or verify by file |
| Baidu fetches a site you no longer run | Stale DNS inside China | Lower TTL before migrating |
| A verified site quietly loses verification | Account never did real-name verification | Complete it, then verify again |

## Baidu stops at the first redirect

Baidu does not follow redirect chains for verification. It asks for the exact URL you registered, and a 301 or 302 in front of it ends the check. Crawl errors turn up past five hops too, and on URLs longer than 1,024 characters.

Usually it is a force-https rule on a property somebody registered as http, or a www canonicalization on a property registered bare. The nastier version is geo-routing that pushes Chinese IP addresses into a country subfolder. You will never reproduce that one from Europe. Baidu counts http and https as separate properties, www and non-www as separate hosts. Register the host that answers 200 without a hop, and make sure it is the host you want ranked.

## Blocked before the response gets a status code

Sometimes the file is perfect and nothing ever reaches it.

Start with robots.txt. It takes a minute. The recurring offender is a blanket User-agent asterisk with Disallow slash, invisible to everyone because Googlebot got let back in through its own block and Baiduspider never did. The platform's robots tool shows Baidu's parse of the live file, and it stops at 48KB and 250-character URIs.

A 403 or a login redirect is next. Basic auth left on after a staging build is the classic, with coming-soon plugins and soft-launch IP allowlists close behind. Do not rule out the WordPress security plugin doing precisely what you installed it for, since baidu_verify_codeva-CODE.html is exactly the kind of unknown root file those plugins block.

Then there is the case with no clean answer. A Cloudflare community thread documents a verification file that was publicly reachable, confirmed from outside, while Baidu kept returning an i/o timeout. Nobody posted a fix. The likely mechanism is an edge rule or a bot-fight setting dropping Chinese networks before the request reaches the origin, so you get a timeout rather than a 403. If you control the edge, allow Baiduspider properly, using the reverse DNS check below rather than the user agent. Everyone else should put the verification file on a path outside the protected zone and verify that instead.

## Confirm it is really Baiduspider before you allow it

The user agents are Baiduspider/2.0 and Baiduspider-render/2.0, with mobile variants carrying Android or Mobile in the string. All trivial to fake, and scrapers fake them constantly, to walk past rules written by people who trusted the header.

Reverse DNS is the check that holds up. Genuine Baiduspider addresses resolve to hostnames under baidu.com or baidu.jp. That second domain catches people out, because allowlists get written for baidu.com alone. Resolve the address, confirm the hostname, resolve it forward again and check it matches.

## Green in Europe, dead in Shanghai

Every external monitor says the site is up. Baidu times out anyway. The route into China may be bad, or a blocking resource on the page may never load. Sometimes the CDN edge serving Chinese users is simply not the edge you tested. None of it shows up on a European dashboard, which is how this one survives for weeks.

Stale DNS is the slower cousin. After a migration, a resolver inside China can keep handing out the old record well past the TTL you set. Drop the TTL before you move, and verify before a migration rather than during one.

## The tag your browser sees is not the tag Baidu gets

The meta tag is right there in devtools. Baidu says it cannot find it. Both are right. The tag is being injected client side. A head-management component in a single-page app will do it, so will a tag manager. A homepage that renders entirely in the browser never had the tag in its response at all.

HTML tag verification (HTML标签验证, HTML biāoqiān yànzhèng) wants the tag in the server-delivered HTML. View source, not inspector. Either move it there or use file verification (文件验证, wénjiàn yànzhèng), which does not care how the page gets built.

## The failure nobody writes about in English

Suppose the server side comes back clean and the site still will not verify. In September 2023 Baidu published a notice on clearing risky verification relationships off the platform.

> 关于搜索资源平台清退风险资源验证关系的通知
>
> Notice on revoking risky resource verification relationships on the Search Resource Platform
>
> *Source: Baidu Search Resource Platform, official notice, September 4, 2023*

Accounts that had never completed real-name verification (实名认证, shímíng rènzhèng) lost theirs. A second notice weeks later pulled submission quotas from the same group and shut off sitemap submission, reported as biting at the end of November 2023.

So what you see is a site that was verified, is not verified now, and has not changed on the server since. Nothing in your document root will fix it.

> 实名认证直接影响账号和资源的归属
>
> Real-name verification directly determines ownership of the account and its resources.
>
> *Source: Baidu, account management documentation*

Ordinary foreign passports are not on Baidu's list of accepted identity documents. That is where foreign teams get stuck. We have inherited more than one client whose Baidu problem lived entirely inside an account nobody could log into.

## ICP filing is not why you failed

An ICP filing is not a formal prerequisite for verification, or for indexing. An unfiled site hosted outside mainland China can be verified today. The filing gates mainland hosting and Baidu's VIP privileges, and unfiled sites do seem to index more slowly. Put the number into site attributes the day it comes through. It is not what broke your verification.

Baidu changes verification rules with little notice, so check the platform's announcement feed before acting on anything dated.
