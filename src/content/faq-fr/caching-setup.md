---
question: "Quelle configuration de cache utilisez-vous pour WordPress en Chine ?"
order: 13
category: "technical"
---

Trois couches. Serveur : Redis ou Memcached pour le cache objet, plus le cache pleine page Nginx FastCGI. CDN : Alibaba Cloud CDN ou Tencent CDN pour les ressources statiques depuis des noeuds chinois. Navigateur : en-têtes cache-control et expires réglés avec précision.

Nous n'utilisons ni WP Super Cache ni W3 Total Cache, qui entrent en conflit avec les CDN chinois. Le cache configuré au niveau serveur demande plus de travail initial, mais le comportement est nettement plus prévisible.
