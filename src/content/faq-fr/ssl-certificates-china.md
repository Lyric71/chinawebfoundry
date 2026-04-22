---
question: "Comment gère-t-on le SSL sur un hébergement WordPress chinois ?"
order: 22
category: "technical"
---

Sur le plan technique, rien de différent d'ailleurs. La particularité chinoise se joue sur le choix de l'autorité de certification. Tous les émetteurs ne sont pas reconnus par les navigateurs locaux, QQ Browser et UC Browser en tête. Une mauvaise CA et vos visiteurs tombent sur un avertissement de sécurité avant même d'arriver sur votre page d'accueil.

Nous travaillons avec DigiCert, GlobalSign ou TrustAsia, via Alibaba Cloud. HTTPS systématique, en-têtes HSTS activés, redirection HTTP forcée, renouvellement automatisé. Le piège, c'est la sélection de l'émetteur. Sans pratique du terrain chinois, on tombe dedans.
