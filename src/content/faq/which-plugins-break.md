---
question: "Which WordPress plugins break in China, and what do you use instead?"
order: 5
category: "technical"
---

Basically anything that calls a Google API. So Google Fonts, Google Maps, reCAPTCHA, Analytics, all of those. Same deal with Facebook SDK, Twitter embeds, anything sitting on a CDN that the firewall blocks. Replacements we use: Baidu Tongji or CNZZ for analytics, Baidu Maps instead of Google Maps, Tencent Captcha for bot protection, self-hosted fonts for typography, and Alibaba Cloud CDN or Tencent CDN for delivery. Before we start any migration we audit every single plugin on your site. You get a report that goes through each one. Stays, goes, or gets replaced, and with what.
