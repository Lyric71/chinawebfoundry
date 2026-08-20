---
title: "Baiduspider bloqué par Cloudflare et les règles WAF"
subtitle: "Le site est en ligne. Le tableau de bord du CDN respire la santé, l'équipe de Shanghai publie du contenu chinois depuis six semaines, et le volume d'index dans la Baidu Search Resource Platform n'a pas décollé de zéro."
summary: "Cloudflare, les réglages WAF par défaut et les règles géographiques bloquent Baiduspider en silence. Comment le repérer, authentifier un vrai robot par DNS inverse, et corriger dans le bon ordre."
visual: "/images/guides/baiduspider-firewall.webp"
order: 28
published: true
publishedAt: 2026-08-16
updatedAt: 2026-08-16
category: Search
---

Rien dans une stack de supervision normale ne guette ce phénomène. Les contrôles de disponibilité partent de Francfort et de Virginie, et le suivi des utilisateurs réels ne voit que ceux qui ont déjà obtenu une page. Pendant ce temps, le seul visiteur qui compte se fait refouler à la périphérie, et cela n'apparaît que sur un tableau de bord que personne n'a ouvert.

Nous le rencontrons plus souvent que toute autre cause technique de lancement chinois enlisé, et il s'agit presque toujours d'un réglage dont personne ne se souvient.

## Pourquoi vos règles par défaut attrapent le robot de Baidu

Baiduspider atteint votre origine depuis des réseaux de Chine continentale. Le DNS inverse sur les adresses légitimes du robot se résout en *.baidu.com ou *.baidu.jp, l'essentiel des récupérations venant des plages continentales.

Songez maintenant à ce qu'une posture de sécurité standard fait de ces plages. On y trouve généralement une règle géographique qui défie ou bloque la Chine, ajoutée pendant un incident et jamais réexaminée, plus un réglage de gestion des bots qui note comme suspect tout client automatisé inconnu. Sous les deux repose un jeu de règles managé, calibré sur du trafic occidental. Aucune de ces règles n'a été écrite en pensant à un robot de recherche chinois. Baiduspider ressemble à du trafic automatisé venu d'une région à laquelle vous avez décidé de ne pas faire confiance, et il récolte donc ce que vous avez configuré pour elle.

Rien de tout cela ne déclenche d'alerte. Un robot bloqué n'ouvre pas de ticket. Il réessaie, obtient la même réponse, et revient moins souvent.

> Baidu détenait 63,97 % du marché chinois de la recherche tous appareils confondus en novembre 2025, et 77,86 % sur mobile.
>
> *Source : StatCounter, cité par The Egg, 11 février 2026*

Ce marché se trouve de l'autre côté de la règle.

## Le cas qui n'a jamais été résolu

Un fil de la communauté Cloudflare mérite une lecture. Un propriétaire de site avait placé le fichier de vérification Baidu, baidu_verify_codeva-CODE.html, à la racine du document. Il se résolvait publiquement, et n'importe qui hors de Chine pouvait le récupérer avec un 200. Le contrôle de Baidu signalait un timeout d'entrée-sortie. Le fil s'est refermé sans solution.

Ce cas ne prouve pas que Cloudflare bloque Baidu par principe. Il montre quelque chose de plus étroit : un fichier accessible depuis votre bureau ne prouve rien quant à la capacité de Baidu à l'atteindre, et les deux réalités peuvent diverger des semaines durant pendant que tout le monde fixe une URL qui fonctionne.

La vérification par fichier de Baidu est étroite. Le fichier se trouve à la racine du document et renvoie un 200, sans redirection ni authentification. La méthode par balise HTML n'est pas plus indulgente, puisque la balise meta doit apparaître dans le HTML livré par le serveur. Une page intermédiaire casse les deux.

## Un 403 est le bon scénario

Quand la périphérie refuse Baiduspider franchement, vous récoltez un 403, et c'est le scénario à espérer. Un refus est un fait que les deux parties peuvent constater.

La version coûteuse est le défi. Une page intermédiaire en JavaScript renvoie un 200, vos journaux d'accès enregistrent une requête servie, et le robot reçoit une page de script à la place de votre contenu. Tous vos tableaux de bord affirment que la requête a réussi, et côté Baidu il y a une récupération vide.

La limitation de débit forme le troisième motif, et le plus pénible à déboguer. Le robot passe le mardi et pas le mercredi, et aucune règle identifiable n'explique pourquoi.

## Le DNS inverse est le seul contrôle qui tienne

Autoriser l'agent utilisateur est le bon point de départ et le mauvais point d'arrivée. Les chaînes légitimes sont Baiduspider/2.0 et Baiduspider-render/2.0, les variantes mobiles portant Android ou Mobile. La variante render prend les gens de court. Elle récupère ce dont une page a besoin pour s'afficher, si bien qu'une règle autorisant Baiduspider/2.0 et limitant le reste laisse entrer le robot puis l'affame.

Un agent utilisateur est un en-tête de requête, et un en-tête de requête est une chaîne que n'importe qui peut taper. Autorisez sur cette seule base et vous ouvrez votre WAF à quiconque a lu un billet de blog.

Le contrôle qui tient est une résolution inverse confirmée dans les deux sens. Prenez l'IP du client, résolvez l'enregistrement PTR avec host ou dig, vérifiez que le nom d'hôte se termine par baidu.com ou baidu.jp, puis résolvez ce nom d'hôte dans l'autre sens et contrôlez que vous retombez sur la même adresse. Un enregistrement PTR seul ne prouve rien, puisqu'il est défini par celui qui contrôle le bloc d'adresses.

Construisez la règle dans cet ordre : correspondance de l'agent utilisateur, confirmation par DNS inverse, puis autorisation. Certaines plateformes de périphérie le font pour les robots connus. Là où la vôtre ne le fait pas, un court script de worker suffit.

## Faites dire à Baidu ce qu'il a reçu

Le diagnostic de crawl (抓取诊断, zhuāqǔ zhěnduàn) de la Search Resource Platform récupère une URL en se faisant passer pour Baiduspider et vous montre la réponse. Agent desktop ou mobile, à votre convenance. Il lit les 200 premiers Ko du corps, assez pour révéler une page intermédiaire ou une page d'erreur.

Nous le sortons avant de toucher à quoi que ce soit d'autre, parce qu'il met fin aux discussions. Lancez-le sur la page d'accueil, sur le fichier de vérification et sur trois pages profondes. Les règles de périphérie sont souvent cantonnées à des chemins précis, et la page d'accueil est en général le seul chemin que quelqu'un a exempté.

Le quota de récupération est limité et rapporté de façon incohérente, entre 70 et 200 par semaine : ce n'est donc pas un test de charge. Et lisez le corps qu'il renvoie, pas seulement le code de statut.

## L'hébergement à l'étranger aggrave chacun de ces cas

Héberger hors de Chine continentale ne bloque rien en soi. Cela ajoute de la latence et de la perte de paquets par-dessus ce que vos règles font déjà.

Ajoutez un aller-retour supplémentaire pour un défi sur une connexion limite et elle cesse d'être limite. Un timeout d'entrée-sortie ressemble exactement à cela vu de l'extérieur : la page se charge vite depuis l'Europe pendant que Baidu enregistre une connexion qui a renoncé. L'hébergement continental supprime la variable, au prix d'un dépôt ICP (备案号, bèi'àn hào).

## L'ordre dans lequel modifier les choses

Commencez par vos journaux. Filtrez la périphérie sur les agents utilisateurs Baiduspider des 30 derniers jours. Zéro requête signifie que le robot ne vous atteint pas du tout. S'il y a des requêtes, la question devient ce que vous avez renvoyé.

Retirez ensuite les instruments contondants dans l'ordre. Les règles géographiques visant la Chine partent en premier, ou se réduisent aux chemins qui en ont réellement besoin. Les exceptions de gestion des bots pour un Baiduspider authentifié viennent ensuite, puis les exceptions sur le jeu de règles managé, une fois que vous savez quelle règle s'est déclenchée. Les limitations de débit en dernier, parce que ce sont les défaillances les plus difficiles à attribuer.

Contrôlez robots.txt tant que vous y êtes. Le testeur de Baidu plafonne le fichier à 48 Ko, et un disallow égaré recopié depuis la préproduction a coûté plus de lancements chinois que n'importe quelle règle de pare-feu.

Une fois les règles retirées, relancez le diagnostic de crawl, en commençant par le fichier de vérification, l'URL qui retient tout le reste. La vérification aboutit dans un délai allant de l'instantané à 24 heures dès que le robot peut la lire. Le volume d'index est plus lent : zéro pendant des jours ou des semaines même quand tout est correct, l'indexation initiale demandant couramment deux à quatre semaines. Modifiez une chose à la fois, sinon le zéro suivant ne vous apprendra rien.

Relancez le diagnostic de crawl après chaque mise à jour du WAF ou du CDN, car les réglages par défaut de la périphérie changent selon leur propre calendrier.
