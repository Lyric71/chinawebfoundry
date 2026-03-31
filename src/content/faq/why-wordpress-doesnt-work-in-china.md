---
question: "Why doesn't my WordPress website work in China?"
order: 1
category: "technical"
---

Great Firewall. China runs a national filtering system and it blocks or throttles most of the Western services that WordPress sites tend to depend on. We're talking Google Fonts, Google Analytics, reCAPTCHA, YouTube, Facebook pixels, most of the major CDN providers. All blocked or so slow they might as well be. We've seen sites that load in under two seconds from New York take 15 or even 20 seconds from Shanghai. Sometimes they just give up and timeout. If nobody has done any China-specific work on your WordPress setup, your site is basically invisible to anyone in mainland China. That's not an exaggeration, it's just what happens.
