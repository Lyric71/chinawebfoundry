---
question: "What caching setup do you run for WordPress in China?"
order: 13
category: "technical"
---

Three layers. Server level is Redis or Memcached for object caching plus Nginx FastCGI cache for full page caching. CDN layer is Alibaba Cloud CDN or Tencent CDN for static assets from Chinese edge nodes. Then browser level with cache-control and expires headers dialed in.

We don't use WP Super Cache or W3 Total Cache or any of those. They clash with China CDN configurations in ways that are really annoying to troubleshoot. Doing caching at the server level takes more setup work initially but it's way more predictable once it's running. We'd rather spend time configuring it right once than chase weird cache invalidation bugs for weeks. Less magic, more control.
