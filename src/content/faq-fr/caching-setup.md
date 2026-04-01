---
question: "Quelle configuration de cache utilisez-vous pour WordPress en Chine ?"
order: 13
category: "technical"
---

Trois couches. Au niveau serveur, Redis ou Memcached pour le cache objet, plus le cache pleine page Nginx FastCGI. La couche CDN repose sur Alibaba Cloud CDN ou Tencent CDN pour les ressources statiques distribuees depuis des noeuds chinois. Enfin, cote navigateur, les en-tetes cache-control et expires sont regles avec precision.

Nous n'utilisons pas WP Super Cache, W3 Total Cache ni aucune de ces extensions. Elles entrent en conflit avec les configurations CDN chinoises de maniere franchement penible a diagnostiquer. Configurer le cache au niveau du serveur demande plus de travail initial, mais le comportement est nettement plus previsible une fois en place. Nous preferons investir du temps a bien configurer des le depart plutot que de traquer des anomalies d'invalidation de cache pendant des semaines. Moins de magie, plus de maitrise.
