---
question: "Comment gerez-vous les mises a jour WordPress sur des serveurs chinois ?"
order: 28
category: "technical"
---

WordPress.org est accessible depuis la Chine, mais la vitesse de connexion est irreguliere. Certains jours tout va bien, d'autres cela rame considerablement. Nous maintenons des miroirs locaux et executons les mises a jour via WP-CLI avec gestion de versions. Chaque mise a jour passe d'abord par l'environnement de pre-production, les tests de compatibilite sont effectues, et c'est seulement apres validation qu'elle est deployee en production.

Les mises a jour sont programmees pendant les creneaux de faible trafic. Des instantanes de restauration sont sauvegardes avant chaque deploiement. Certaines extensions presentent des problemes specifiques a la Chine qui n'apparaissent pas lors de tests classiques ; pour celles-la, nous maintenons nos propres versions corrigees, verifiees sur l'infrastructure continentale. Ce n'est pas le travail le plus passionnant, mais c'est le genre de precaution qui evite une urgence a trois heures du matin parce qu'une mise a jour a casse quelque chose qui ne casse que derriere le Grand Pare-feu.
