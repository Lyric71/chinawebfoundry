---
question: "Walk me through how DNS works for a China WordPress site."
order: 7
category: "technical"
---

So it's split DNS with geographic resolution. Visitors from within China resolve to mainland A-records pointing at your ICP-licensed server. International visitors resolve to your existing infrastructure, totally unchanged. We configure this through DNSPod (Tencent's DNS product) or Alibaba Cloud DNS, both of which handle geo-routing out of the box. For domains we generally recommend keeping your registrar where it is, outside China, but grabbing a .cn if Baidu SEO matters for you. Baidu gives a small credibility bump to .cn and .com.cn domains. It's not a massive factor but it helps, especially early on when you don't have much Baidu authority built up.
