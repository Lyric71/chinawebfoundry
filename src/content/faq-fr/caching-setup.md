---
question: "Quelle stratégie de cache déployez-vous pour WordPress en Chine ?"
order: 13
category: "technical"
---

Trois étages. Côté serveur : Redis ou Memcached pour le cache objet, doublés du cache pleine page Nginx FastCGI. Côté CDN : Alibaba Cloud CDN ou Tencent CDN pour servir les ressources statiques depuis des noeuds implantés en Chine. Côté navigateur : des en-têtes cache-control et expires calibrés au plus juste.

Nous écartons WP Super Cache et W3 Total Cache, qui se télescopent avec les CDN chinois. Configurer le cache directement au niveau serveur demande plus d'efforts en amont, mais le comportement qui en découle est autrement plus prévisible.
