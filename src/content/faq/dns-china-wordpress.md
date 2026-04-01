---
question: "Walk me through how DNS works for a China WordPress site."
order: 7
category: "technical"
---

Split DNS with geographic resolution. Visitors from China resolve to mainland A-records pointing at your ICP-licensed server. International visitors resolve to your existing infrastructure, totally unchanged. We configure this through DNSPod (Tencent) or Alibaba Cloud DNS, both handling geo-routing natively. We recommend keeping your registrar outside China but grabbing a .cn if Baidu SEO matters - Baidu gives a small credibility bump to .cn and .com.cn domains, especially early on.
