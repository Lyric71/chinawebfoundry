---
question: "How do SSL certificates work on Chinese WordPress hosting?"
order: 22
category: "technical"
---

Technically same as anywhere else. The piece that's specific to China is the certificate authority. Not every CA is trusted by all Chinese browsers, and if you pick the wrong one, visitors on QQ Browser or UC Browser get a security warning before they see a single pixel of your site. Not great.

We use DigiCert, GlobalSign, or TrustAsia certs through Alibaba Cloud. Let's Encrypt is fine most of the time but validation can lag from Chinese networks. HTTPS with HSTS headers, HTTP redirect forced, renewal automated. Pretty standard stuff but the CA selection is the part that trips people up if they're doing it without China experience.
