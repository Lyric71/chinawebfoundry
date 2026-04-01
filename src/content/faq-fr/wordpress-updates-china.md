---
question: "Comment gérez-vous les mises à jour WordPress sur des serveurs chinois ?"
order: 28
category: "technical"
---

WordPress.org est accessible depuis la Chine mais la connexion est irrégulière. Nous maintenons des miroirs locaux et exécutons les mises à jour via WP-CLI avec gestion de versions. Chaque mise à jour passe d'abord par la pré-production, puis est déployée en production après validation.

Mises à jour programmées en heures creuses, instantanés de restauration avant chaque déploiement. Certaines extensions présentent des problèmes spécifiques à la Chine invisibles lors de tests classiques : nous maintenons nos propres versions corrigées, vérifiées sur l'infrastructure continentale.
