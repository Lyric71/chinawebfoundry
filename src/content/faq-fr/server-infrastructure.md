---
question: "Quelle infrastructure serveur utilisez-vous ?"
order: 19
category: "technical"
---

Nous deployons sur Alibaba Cloud ou Tencent Cloud. Les deux disposent de centres de donnees conformes ICP en Chine continentale. La pile technique : Linux, generalement Ubuntu meme si parfois CentOS pour des raisons d'heritage, Nginx, PHP 8.x avec OPcache, MySQL 8.0 ou MariaDB, Redis pour le cache, et une couche CDN chinoise. Nous choisissons la region serveur la plus proche de votre audience : Shanghai, Pekin, Shenzhen, avec quelques autres options selon votre cas d'usage.

Les sauvegardes, le durcissement serveur et la surveillance de disponibilite sont configures avant toute migration. Ce n'est pas une option complementaire dont on discute plus tard, cela fait partie du socle de base.
