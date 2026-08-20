---
title: "Vérifier son site sur Baidu : fichier ou balise HTML"
subtitle: "Deux méthodes de vérification fonctionnent. Une troisième figure encore dans la plupart des guides anglophones, et elle ne marche plus depuis le premier trimestre 2023."
summary: "Deux méthodes de vérification fonctionnent encore chez Baidu, et le CNAME n'en fait pas partie. Noms de fichiers exacts, emplacement de la balise, cas WordPress et Astro."
visual: "/images/guides/baidu-site-verification.webp"
order: 26
published: true
publishedAt: 2026-08-18
updatedAt: 2026-08-18
category: Search
---

Vérifier un domaine sur la Baidu Search Resource Platform (百度搜索资源平台, Bǎidù Sōusuǒ Zīyuán Píngtái) transforme une URL en ressource dont vous pouvez tirer des données et à laquelle vous pouvez soumettre des pages. L'opération prend dix minutes, à condition que l'hébergement coopère. Obtenir le compte qui se trouve derrière constitue la vraie difficulté, et cela fait [l'objet d'un article distinct](/fr/ressources/guide-web-chine/compte-baidu-entreprise-etrangere/).

> Baidu détenait 63,97 % du marché chinois de la recherche tous appareils confondus en novembre 2025, et 77,86 % sur mobile.
>
> *Source : StatCounter, cité par The Egg, 11 février 2026*

Prenez ce chiffre comme une fourchette plutôt que comme une constante, car le panel chinois de StatCounter varie fortement d'un mois à l'autre. C'est l'ordre de grandeur qui compte. Voilà le moteur pour lequel vous vérifiez.

## Ajouter le site

La gestion des sites (站点管理, zhàndiǎn guǎnlǐ) est l'écran où l'on ajoute les domaines, et Baidu réclame le protocole en plus de l'hôte. Vous saisissez https:// ou http:// explicitement, parce que Baidu les traite comme deux ressources différentes.

Ajoutez l'hôte que vous voulez positionner. Pas une redirection vers lui, pas un sous-domaine de préproduction, pas la version que votre CDN sert par hasard. Si votre hôte canonique est le www et que le domaine nu renvoie une 301 vers lui, vérifiez le www.

## Méthode un : la vérification par fichier

La vérification par fichier (文件验证, wénjiàn yànzhèng) est la méthode à retenir dès que vous pouvez déployer des fichiers.

Baidu génère un fichier HTML nommé selon le modèle baidu_verify_codeva-CODE.html. Il se dépose à la racine du document de l'hôte exact que vous vérifiez. L'emplacement de cette racine dépend de votre stack. L'hébergement mutualisé chez Alibaba Cloud (阿里云, Ālǐ Yún) l'appelle en général htdocs. Les comptes cPanel de Hong Kong l'appellent public_html. Les panneaux comme BT l'appellent wwwroot. Sur un build Astro, il va dans le répertoire public, d'où il est copié à la racine à la compilation et servi en fichier statique. Sur WordPress, il se pose à côté de wp-config.php, et tout plugin de sécurité qui bloque les fichiers inconnus à la racine réclame une exception, ce qui fait une belle demi-heure de découverte le jour du lancement.

Trois conditions décident du résultat. Le fichier doit répondre avec un statut 200, il ne doit rediriger nulle part, et il ne peut pas se trouver derrière une authentification ou un défi anti-robot.

Laissez le fichier en place une fois la vérification obtenue. Baidu revérifie périodiquement, et un fichier qui disparaît à la mise en production suivante emporte la vérification avec lui.

## Méthode deux : la vérification par balise HTML

Si la voie du fichier vous est fermée, voici le repli.

La vérification par balise HTML (HTML标签验证, HTML biāoqiān yànzhèng) place une balise meta dans le head de la page d'accueil. Elle sert lorsque vous ne pouvez pas déposer de fichiers à la racine, ce qui arrive sur les plateformes managées et sur certains CDN d'entreprise.

La balise porte votre code dans l'attribut content et se place entre les balises head ouvrante et fermante de la page d'accueil. Sous WordPress, elle va dans le header du thème ou passe par le plugin SEO qui contrôle le head. Sous Astro, elle appartient au layout partagé, pour qu'une recompilation ne puisse pas la perdre.

Une exigence prime sur les autres. La balise doit être présente dans le HTML que le serveur livre. Si elle est injectée par du JavaScript côté client, Baidu ne la verra pas, et vous non plus en affichant le code source scripts désactivés.

Si le site se trouve derrière un cache de page entière ou un CDN, purgez après le déploiement. Baidu lit la copie mise en cache, pas l'origine.

## La méthode qui ne fonctionne plus

La vérification par CNAME (CNAME验证, CNAME yànzhèng) a été suspendue au premier trimestre 2023.

> 站点管理-验证网站暂停【CNAME验证】的方式。该调整对已完成验证的站点没有影响。
>
> La gestion des sites a suspendu la méthode de vérification par CNAME. Le changement n'affecte pas les sites déjà vérifiés.
>
> *Source : Baidu Search Resource Platform, annonce officielle, février 2023*

Les sites vérifiés de cette façon avant le changement ont conservé leur statut. Les nouveaux disposent de deux options, pas de trois. Si un guide vous en propose trois, vérifiez sa date avant de faire confiance au reste de la page.

## Laquelle choisir, et pourquoi les équipes déploient les deux

Si vous maîtrisez les déploiements, prenez le fichier. Il est inerte, il ne dépend d'aucun rendu de template, et aucun changement de thème ne viendra le manger.

Si votre page d'accueil est générée par une plateforme dans laquelle vous ne pouvez pas déposer de fichiers, prenez la balise et placez-la là où une refonte ne l'effacera pas discrètement.

Beaucoup d'équipes déploient les deux. Baidu n'y voit pas d'inconvénient, et nous n'avons jamais regretté cette redondance sur un site client.

## Une fois le voyant au vert

Deux choses méritent d'être faites dans la foulée. Saisissez votre numéro de dépôt ICP (备案号, bèi'àn hào) dans les attributs du site, car les nouveaux sites semblent franchir la phase d'exploration initiale plus vite avec ce champ rempli. Lancez ensuite un diagnostic de crawl (抓取诊断, zhuāqǔ zhěnduàn) sur la page d'accueil et sur deux ou trois pages profondes, pour savoir ce que Baiduspider reçoit réellement avant de commencer à publier.

Si la vérification échoue au lieu de passer au vert, la cause tient généralement à une redirection sur la page d'accueil, à une règle de pare-feu qui bloque Baiduspider, ou à une page d'accueil qui n'existe qu'après exécution du JavaScript. [Chacune de ces causes a son propre correctif](/fr/ressources/guide-web-chine/echec-verification-baidu/), et aucune ne signifie que votre site est cassé pour les visiteurs humains.
