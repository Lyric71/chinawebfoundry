---
question: "Comment appliquez-vous les mises à jour WordPress depuis la Chine ?"
order: 28
category: "technical"
---

WordPress.org passe le Grand Pare-feu, mais la liaison est capricieuse. Nous maintenons nos propres miroirs en Chine et lançons les mises à jour via WP-CLI, avec gestion de versions. Tout part d'abord en pré-production. Le déploiement production n'intervient qu'après validation.

Les opérations sont programmées en heures creuses, précédées d'un instantané de restauration. Certaines extensions posent des problèmes qu'on ne voit qu'une fois sur un serveur chinois : nous gardons nos propres versions corrigées, éprouvées sur l'infrastructure continentale.
