---
question: "What caching setup do you run for WordPress in China?"
order: 13
category: "technical"
---

Three layers. Server level: Redis or Memcached for object caching plus Nginx FastCGI cache for full pages. CDN layer: Alibaba Cloud CDN or Tencent CDN for static assets from Chinese edge nodes. Browser level: cache-control and expires headers dialled in.

We don't use WP Super Cache or W3 Total Cache. They clash with China CDN configurations in annoying ways. Server-level caching takes more initial setup but is far more predictable once running.
