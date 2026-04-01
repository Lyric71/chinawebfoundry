---
question: "Comment fonctionnent les certificats SSL sur un hebergement WordPress chinois ?"
order: 22
category: "technical"
---

Techniquement, de la meme facon que partout ailleurs. Le point specifique a la Chine concerne l'autorite de certification. Toutes les CA ne sont pas reconnues par l'ensemble des navigateurs chinois, et si vous choisissez la mauvaise, les visiteurs qui utilisent QQ Browser ou UC Browser recevront un avertissement de securite avant d'avoir vu le moindre pixel de votre site. Pas ideal.

Nous utilisons des certificats DigiCert, GlobalSign ou TrustAsia via Alibaba Cloud. Let's Encrypt convient la plupart du temps, mais la validation peut accuser du retard depuis les reseaux chinois. HTTPS avec en-tetes HSTS, redirection HTTP forcee, renouvellement automatise. Rien de tres original, mais la selection de l'autorite de certification est precisement le point qui pose probleme quand on s'y attaque sans experience du terrain chinois.
