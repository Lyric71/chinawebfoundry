---
question: "Comment fonctionnent les certificats SSL sur un hébergement WordPress chinois ?"
order: 22
category: "technical"
---

Techniquement, comme partout ailleurs. La spécificité chinoise concerne l'autorité de certification : toutes les CA ne sont pas reconnues par les navigateurs chinois comme QQ Browser ou UC Browser. Un mauvais choix déclenche un avertissement de sécurité pour vos visiteurs.

Nous utilisons DigiCert, GlobalSign ou TrustAsia via Alibaba Cloud. HTTPS avec en-têtes HSTS, redirection HTTP forcée, renouvellement automatisé. La sélection de la CA est le point qui pose problème sans expérience du terrain chinois.
