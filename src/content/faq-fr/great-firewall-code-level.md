---
question: "Que fait le Grand Pare-feu à WordPress au niveau du code ?"
order: 25
category: "technical"
---

Le Grand Pare-feu opère par empoisonnement DNS, liste noire d'IP, filtrage d'URL, inspection SNI et inspection approfondie des paquets. Pour WordPress : tout `wp_enqueue_script` ou `wp_enqueue_style` chargeant une ressource depuis un domaine bloqué (googleapis.com, gstatic.com, gravatar.com) bloque le rendu complet de la page. Les intégrations YouTube ou Google Maps laissent des trous dans la mise en page. Les appels AJAX vers des API bloquées échouent silencieusement.

Lors de la migration, nous traçons chaque appel externe : fichiers du thème, extensions, table wp_options. Chaque dépendance est remplacée ou auto-hébergée. Une seule oubliée suffit à créer des problèmes difficiles à diagnostiquer.
