---
question: "What server infrastructure do you run?"
order: 19
category: "technical"
---

We deploy on Alibaba Cloud or Tencent Cloud. Both have ICP-compliant data centres in mainland China. Stack is Linux, usually Ubuntu though sometimes CentOS for legacy reasons, Nginx, PHP 8.x with OPcache, MySQL 8.0 or MariaDB, Redis for caching, and a China CDN layer. We pick whichever server region is closest to your audience. Shanghai, Beijing, Shenzhen, there's a few other options too depending on your use case.

Backups, server hardening, and uptime monitoring are configured before we migrate anything. That's not an optional add-on that gets discussed later, it's part of the base setup.
