---
question: "How do SSL certificates work on Chinese WordPress hosting?"
order: 22
category: "technical"
---

Technically the same as anywhere else. The China-specific part is the certificate authority - not every CA is trusted by all Chinese browsers. Pick the wrong one and visitors on QQ Browser or UC Browser get a security warning before seeing your site.

We use DigiCert, GlobalSign, or TrustAsia certs through Alibaba Cloud. Let's Encrypt works most of the time but validation can lag from Chinese networks. HTTPS with HSTS, forced HTTP redirect, automated renewal. Standard setup, but CA selection is what trips people up without China experience.
