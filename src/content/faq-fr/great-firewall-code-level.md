---
question: "Concrètement, que fait le Grand Pare-feu au code d'un site WordPress ?"
order: 25
category: "technical"
---

Le Grand Pare-feu combine plusieurs techniques : empoisonnement DNS, listes noires d'adresses IP, filtrage d'URL, inspection SNI et analyse profonde des paquets. Côté WordPress, le symptôme est toujours le même. Le moindre `wp_enqueue_script` ou `wp_enqueue_style` qui va chercher une ressource sur un domaine bloqué (googleapis.com, gstatic.com, gravatar.com) fige le rendu de la page entière. Les intégrations YouTube ou Google Maps laissent des trous béants dans la mise en page. Les appels AJAX vers des API censurées échouent sans message d'erreur.

À la migration, nous traquons chaque appel externe, dans les fichiers du thème, dans les extensions, dans la table wp_options. Chaque dépendance est remplacée ou rapatriée sur votre serveur. Une seule oubliée suffit à générer des bugs impossibles à diagnostiquer depuis l'Europe.
