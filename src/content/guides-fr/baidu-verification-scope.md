---
title: "Vérification Baidu : www, HTTPS et sous-domaines"
subtitle: "Dans la Search Console de Google, une propriété de domaine couvre les deux protocoles et tous les sous-domaines sous un même toit. Baidu n'a aucun équivalent. Vous obtenez exactement ce que vous vérifiez."
summary: "Chez Baidu, http et https forment deux sites, www et non-www deux hôtes, les sous-domaines héritent d'une racine vérifiée, et les répertoires ne peuvent pas être déclarés."
visual: "/images/guides/baidu-verification-scope.webp"
order: 25
published: true
publishedAt: 2026-08-17
updatedAt: 2026-08-17
category: Search
---

Cet écart piège plus d'équipes étrangères que n'importe quel autre point du paramétrage de la Baidu Search Resource Platform (百度搜索资源平台, Bǎidù Sōusuǒ Zīyuán Píngtái). Un site, ici, se réduit à un protocole et un hôte. Mal cadrez le périmètre et, un trimestre plus tard, vous lisez des tableaux de bord portant sur une version de votre site que personne ne visite.

> Baidu détenait 63,97 % du marché chinois de la recherche tous appareils confondus en novembre 2025, et 77,86 % sur mobile.
>
> *Source : StatCounter, cité par The Egg, 11 février 2026*

Le panel chinois de StatCounter est nerveux, donc le chiffre exact bouge d'un mois sur l'autre. Le tableau d'ensemble, non. C'est de ce moteur que viennent vos chiffres chinois, et c'est pourquoi les frontières de la ressource méritent dix minutes de réflexion.

La manière de prouver la propriété, fichier ou balise meta, fait [l'objet d'un article distinct](/fr/ressources/guide-web-chine/verification-site-baidu/). Celui-ci porte sur ce dont vous prouvez la propriété.

## http et https sont deux sites différents

Baidu considère le protocole comme partie intégrante de l'identité du site. Quand vous ajoutez un site dans la gestion des sites (站点管理, zhàndiǎn guǎnlǐ), vous saisissez le protocole en même temps que l'hôte, et ce préfixe n'a rien de décoratif. Choisissez-en un et vous obtenez une ressource qui ignore tout de l'autre. Vérification séparée, données d'index séparées.

Le scénario d'échec est ennuyeux et très fréquent. Un site est vérifié en http, passe en https quelques années plus tard, et l'ancienne ressource continue de rendre compte d'une version d'elle-même qui n'existe plus que sous forme de redirection. Le volume d'index (索引量, suǒyǐn liàng) s'aplatit. Quelqu'un en conclut que Baidu a cessé d'explorer le site. Il n'a pas cessé. Il explore la ressource que personne n'ouvre.

Un outil permet de déclarer la relation. La certification HTTPS (HTTPS认证) indique à Baidu que la version http correspond à la version https. Soumettez-la. Elle ne fusionnera pas les deux ressources, et elle ne remplace pas la vérification de celle que vous servez.

## Vérifiez l'hôte sur lequel les gens atterrissent

La même règle s'applique un cran au-dessus. Pour Baidu, le domaine nu et l'hôte www sont deux hôtes entièrement distincts, et vérifier l'un ne vous apporte rien sur l'autre.

Vérifiez donc le canonique. Pas la version imprimée sur la carte de visite : celle qui reste dans la barre d'adresse une fois toutes les redirections exécutées. Ouvrez le site à froid, depuis un réseau extérieur à vos bureaux, et vérifiez ce sur quoi vous atterrissez.

Les redirections sont l'endroit où cela devient coûteux. Baidu ne suit pas une chaîne pour confirmer la propriété : un hôte qui répond par une 301 ou une 302 échoue au contrôle, et continue d'échouer quelle que soit la justesse du fichier placé à destination. C'est la première chose que nous regardons quand une vérification apparemment correcte revient au rouge. La même intransigeance se retrouve à l'exploration : Baidu enregistre des erreurs de crawl au-delà de cinq sauts, et sur les URL de plus de 1 024 caractères.

Gardez donc un seul hôte canonique, pointez l'autre dessus en un seul saut, et n'ajoutez jamais l'hôte dont l'unique fonction est de rediriger.

## Les sous-domaines héritent de la propriété d'une racine vérifiée

Les sous-domaines sont le terrain où le système joue en votre faveur. Vérifiez le domaine racine et Baidu vous laisse ajouter des sous-domaines en lot (批量添加子站, pīliàng tiānjiā zǐzhàn) en dessous, avec héritage de la propriété du parent. Rien à déployer sur chaque hôte, aucune balise à pousser dans un template contrôlé par une autre équipe.

Baidu a livré cette fonction en même temps qu'un changement sur l'expiration des vérifications, et l'annonce affirme que la vérification n'expire plus. Cette moitié-là est plus difficile à confirmer qu'elle ne devrait l'être : tenez-la pour rapportée et laissez votre fichier en place.

L'héritage règle aussi une question que la plupart des équipes ne pensent pas à poser, celle de savoir où se situe réellement la propriété. Pas dans le domaine.

> 实名认证直接影响账号和资源的归属
>
> La vérification d'identité réelle détermine directement à qui appartiennent le compte et ses ressources.
>
> *Source : Baidu, documentation sur la gestion des comptes*

Tout ce qui pend à cette racine, sous-domaines compris, remonte à l'identité vérifiée qui détient le compte. À vérifier avant qu'une agence n'ajoute vos sous-domaines sous son propre identifiant.

L'autre sens compte pour le reporting. Ce point relève du rapporté plutôt que du documenté chez Baidu : les sources agences soutiennent que c'est la vérification du domaine racine qui débloque les données d'index au niveau des sous-domaines. Vérifiez uniquement cn.example.com et vous n'aurez que cela. C'est la racine qui rend visible l'étage inférieur.

Pour une entreprise qui héberge son contenu chinois sur un sous-domaine, vérifiez les deux : la racine pour que le reporting du sous-domaine fonctionne, et le sous-domaine pour qu'il dispose de sa propre ressource, avec canal de soumission et données de mots-clés attachés.

## Rien chez Baidu ne comprend un répertoire /cn/

Les sous-répertoires sont la structure que proposent d'abord la plupart des entreprises internationales, et le seul cas pour lequel Baidu n'a jamais rien construit. Aucun parcours ne permet d'enregistrer un sous-répertoire comme site indépendant. Lisez-y une absence plutôt qu'une interdiction. Baidu n'a publié aucune règle contre les sites en sous-répertoire. Le formulaire de gestion des sites prend simplement un protocole et un hôte, sans nulle part où mettre un chemin.

Une entreprise qui place ses pages chinoises sur example.com/cn/ se retrouve avec une seule ressource couvrant l'intégralité de son site mondial. Pages chinoises et anglaises atterrissent dans le même graphique de volume d'index et le même tableau de mots-clés. Les URL elles-mêmes vont très bien : elles se positionnent, vous pouvez les soumettre, et le diagnostic de crawl (抓取诊断, zhuāqǔ zhěnduàn) ira chercher n'importe laquelle à la demande. Ce que vous ne pouvez pas faire, c'est les isoler. Aucun rapport ne vous dira combien de pages chinoises sont indexées, parce que la plateforme n'a aucune notion de section.

Quand le reporting séparé compte, le sous-domaine forme la structure la plus propre. Un site Chine sur cn.example.com obtient son propre graphique, tandis que le même contenu dans un répertoire reste une part non comptabilisée de celui d'un autre.

Rien de tout cela ne condamne les sous-répertoires. Ils concentrent l'autorité en un seul endroit et se déploient plus simplement. L'arbitrage porte sur la mesure, et il coûte une conversation au stade de l'architecture ou une migration six mois plus tard.

## Chacun de ces changements compte comme une migration

Aucune de ces règles ne s'assouplit quand le site change de forme. Passer de http à https est une migration. Changer d'hôte canonique aussi, tout comme déplacer un répertoire vers un sous-domaine. Baidu lit chacun de ces gestes comme une refonte du site, pas comme de l'entretien courant.

La refonte de site (网站改版, wǎngzhàn gǎibǎn) est l'outil qui sert à la déclarer. Elle accepte les changements de domaine et de répertoire, plus des règles au niveau des URL quand la correspondance est plus désordonnée. Sa fonction est de reporter le statut des anciennes URL sur les nouvelles, au lieu de laisser Baidu les rencontrer comme des inconnues. Baidu contrôle les règles soumises en une demi-heure à deux heures, puis déroule la migration sur une demi-journée à deux jours.

Soumettez-la dans la même fenêtre que les redirections, pas une fois que la courbe de trafic commence à bouger. Baidu ne devinera pas tout seul que les deux jeux d'URL vont ensemble.

Baidu ajuste ces règles sans grand préavis : consultez le fil d'annonces avant d'appliquer quoi que ce soit qui porte une date.
