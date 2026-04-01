---
question: "Que fait le Grand Pare-feu a WordPress au niveau du code ?"
order: 25
category: "technical"
---

Sous le capot, il s'agit d'empoisonnement DNS, de mise en liste noire d'adresses IP, de filtrage par mots-cles dans les URL, d'inspection SNI et d'inspection approfondie des paquets. Pour WordPress, voici ce que cela donne en pratique : tout `wp_enqueue_script` ou `wp_enqueue_style` qui charge une ressource depuis un domaine bloque - googleapis.com, gstatic.com, gravatar.com, ce genre de choses - va bloquer le chargement. Pas provoquer une erreur. Bloquer. Le navigateur attend, attend, et le rendu complet de votre page se fige.

Les integrations YouTube ou Google Maps laissent des trous beants dans la mise en page, a l'emplacement ou l'iframe devait se charger. Les appels AJAX vers des API bloquees echouent silencieusement : votre formulaire de contact, votre barre de recherche ou votre page de paiement ne fonctionne tout simplement plus, et aucun message d'erreur ne vous explique pourquoi.

Lors de la migration, nous traceons chaque appel externe sans exception. Fichiers du theme, code des extensions, table wp_options, tout y passe. Chaque dependance est soit remplacee par une alternative compatible avec la Chine, soit auto-hebergee. C'est un travail fastidieux, mais si vous laissez passer ne serait-ce qu'une seule dependance, les problemes qui en resultent sont particulierement difficiles a diagnostiquer par la suite.
