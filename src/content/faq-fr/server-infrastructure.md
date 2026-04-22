---
question: "Sur quelle infrastructure serveur tournent nos sites ?"
order: 19
category: "technical"
---

Alibaba Cloud ou Tencent Cloud, dans des centres de données chinois déjà titulaires des autorisations ICP. Côté pile logicielle : Linux (Ubuntu ou CentOS), Nginx, PHP 8.x avec OPcache, MySQL 8.0 ou MariaDB, Redis pour le cache, CDN chinois en façade. La région d'hébergement se cale sur votre cible : Shanghai pour un public côtier, Pékin pour le nord, Shenzhen pour le sud, autre ville si le cas l'exige.

Sauvegardes, durcissement système et surveillance de disponibilité sont paramétrés avant la migration, jamais après. Ce sont les fondations, pas des options en supplément.
