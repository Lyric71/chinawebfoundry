---
title: "Échec de la vérification Baidu : les causes habituelles"
subtitle: "Baidu vous donne une ligne rouge, et rien d'autre. Le fichier qu'il dit introuvable s'ouvre parfaitement dans votre navigateur, à votre bureau, à Francfort. Ces deux faits coexistent, et l'écart entre eux constitue tout le problème."
summary: "Vérification Baidu en échec ? Toutes les causes fréquentes, la façon dont chacune se manifeste vue de l'extérieur, et le correctif : redirections, robots.txt, WAF, DNS, comptes."
visual: "/images/guides/baidu-verification-failed.webp"
order: 24
published: true
publishedAt: 2026-08-17
updatedAt: 2026-08-17
category: Search
---

La vérification sur la Baidu Search Resource Platform (百度搜索资源平台, Bǎidù Sōusuǒ Zīyuán Píngtái) tient en une requête HTTP. Baidu va chercher une URL depuis la Chine et y cherche une chaîne de caractères, soit un fichier HTML à la racine, soit une balise meta dans le head de la page d'accueil. Peu de choses peuvent casser cela, et ce qui casse se situe entre Baiduspider et votre serveur.

Le contrôle prend de quelques secondes à 24 heures : un échec qui revient instantanément signale une récupération ratée, pas une file d'attente. Et si vous vérifiez par CNAME, changez de méthode.

> 站点管理-验证网站暂停【CNAME验证】的方式。该调整对已完成验证的站点没有影响。
>
> Gestion des sites : la méthode CNAME de vérification de site est suspendue. Le changement n'affecte pas les sites déjà vérifiés.
>
> *Source : Baidu Search Resource Platform, annonce officielle, février 2023*

## Le diagnostic de crawl répond à la question que votre navigateur ne peut pas trancher

Le diagnostic de crawl (抓取诊断, zhuāqǔ zhěnduàn) récupère une URL en se faisant passer pour Baiduspider, agent desktop ou mobile, et restitue la réponse brute. Il renvoie les 200 premiers Ko, ce qui compte sur une page d'accueil obèse où la balise peut se trouver plus loin que cela dans la réponse. C'est aussi le seul test dont vous disposiez qui parte de Chine.

Pointez-le sur l'URL de vérification, puis sur la page d'accueil. Ce qui revient correspond à ce dont Baidu disposait, et cela met généralement fin au débat avec votre développeur. Les quotas sont serrés. Une source SEO chinoise évoque 70 par semaine, une source agence 200. Quoi que vous changiez, relancez la récupération avant de recliquer sur vérifier.

Trouvez votre symptôme, puis lisez la section qui lui correspond.

| Ce que vous constatez | Ce qui se passe | Le correctif |
| --- | --- | --- |
| S'ouvre dans le navigateur, échoue instantanément | 301 ou 302 sur l'hôte enregistré | Vérifier l'hôte qui répond 200 |
| Signalé bloqué, pas manquant | Disallow dans robots.txt | Autoriser Baiduspider, contrôler avec l'outil robots |
| Timeout sur un fichier publiquement accessible | WAF ou CDN qui coupe le trafic chinois | Autoriser par DNS inverse, ou sortir le fichier de la zone protégée |
| 403, ou redirection vers une page de connexion | Authentification basique, plugin, liste d'IP autorisées | Servir un 200 sans authentification |
| Vert sur tous les moniteurs, timeout chez Baidu | Inaccessible depuis la Chine continentale | Tester depuis la Chine, corriger le routage ou déplacer l'origine |
| Balise visible dans les devtools, introuvable pour Baidu | Rendu côté client | La rendre côté serveur, ou vérifier par fichier |
| Baidu récupère un site que vous n'exploitez plus | DNS périmé en Chine | Baisser le TTL avant de migrer |
| Un site vérifié perd discrètement sa vérification | Compte n'ayant jamais passé la vérification d'identité réelle | La compléter, puis vérifier à nouveau |

## Baidu s'arrête à la première redirection

Baidu ne suit pas les chaînes de redirection pour la vérification. Il demande l'URL exacte que vous avez enregistrée, et une 301 ou une 302 devant elle met fin au contrôle. Des erreurs de crawl apparaissent aussi au-delà de cinq sauts, et sur les URL de plus de 1 024 caractères.

Il s'agit d'ordinaire d'une règle de forçage https sur une ressource enregistrée en http, ou d'une canonisation vers le www sur une ressource enregistrée en domaine nu. La version plus vicieuse : un routage géographique qui pousse les adresses IP chinoises vers un sous-répertoire pays. Celle-là, vous ne la reproduirez jamais depuis l'Europe. Baidu compte http et https comme deux ressources, www et non-www comme deux hôtes. Enregistrez l'hôte qui répond 200 sans saut, et assurez-vous que c'est celui que vous voulez positionner.

## Bloqué avant même que la réponse n'ait un code de statut

Il arrive que le fichier soit parfait et que rien ne l'atteigne jamais.

Commencez par robots.txt. Cela prend une minute. Le coupable récurrent : un User-agent astérisque avec Disallow slash, invisible pour tout le monde parce que Googlebot a été réautorisé par sa propre exception et jamais Baiduspider. L'outil robots de la plateforme montre l'interprétation que Baidu fait du fichier en ligne, et il s'arrête à 48 Ko et aux URI de 250 caractères.

Vient ensuite un 403 ou une redirection vers une page de connexion. L'authentification basique laissée après un build de préproduction est le classique, avec les plugins de page d'attente et les listes d'IP autorisées de lancement discret juste derrière. N'excluez pas non plus le plugin de sécurité WordPress faisant exactement ce pour quoi vous l'avez installé : baidu_verify_codeva-CODE.html correspond précisément au type de fichier racine inconnu que ces plugins bloquent.

Reste le cas sans réponse propre. Un fil de la communauté Cloudflare documente un fichier de vérification publiquement accessible, confirmé depuis l'extérieur, alors que Baidu renvoyait obstinément un timeout d'entrée-sortie. Personne n'a publié de correctif. Le mécanisme probable tient à une règle en périphérie ou à un réglage anti-bots qui coupe les réseaux chinois avant que la requête n'atteigne l'origine, d'où un timeout plutôt qu'un 403. Si vous contrôlez la périphérie, autorisez Baiduspider correctement, via le contrôle par DNS inverse décrit ci-dessous plutôt que par l'agent utilisateur. Les autres placeront le fichier de vérification sur un chemin en dehors de la zone protégée et vérifieront celui-là.

## Assurez-vous qu'il s'agit bien de Baiduspider avant d'autoriser

Les agents utilisateurs sont Baiduspider/2.0 et Baiduspider-render/2.0, les variantes mobiles portant Android ou Mobile dans la chaîne. Tous triviaux à falsifier, et les scrapers ne s'en privent pas, pour franchir des règles écrites par des gens qui ont fait confiance à l'en-tête.

Le DNS inverse est le contrôle qui tient. Les adresses authentiques de Baiduspider se résolvent vers des noms d'hôtes sous baidu.com ou baidu.jp. Ce second domaine surprend, car les listes d'autorisation ne mentionnent souvent que baidu.com. Résolvez l'adresse, confirmez le nom d'hôte, résolvez-le à nouveau dans l'autre sens et vérifiez la correspondance.

## Vert en Europe, mort à Shanghai

Tous les moniteurs externes annoncent le site debout. Baidu tombe quand même en timeout. La route vers la Chine peut être mauvaise, ou une ressource bloquante de la page peut ne jamais se charger. Parfois, le nœud CDN qui sert les utilisateurs chinois n'est tout simplement pas celui que vous avez testé. Rien de tout cela n'apparaît sur un tableau de bord européen, et c'est ainsi que ce problème survit des semaines.

Le DNS périmé est le cousin lent. Après une migration, un résolveur situé en Chine peut continuer à distribuer l'ancien enregistrement bien au-delà du TTL que vous aviez fixé. Baissez le TTL avant de bouger, et vérifiez avant une migration plutôt que pendant.

## La balise que voit votre navigateur n'est pas celle que reçoit Baidu

La balise meta est bien là dans les devtools. Baidu dit ne pas la trouver. Les deux ont raison. La balise est injectée côté client. Un composant de gestion du head dans une application monopage fera cela, un tag manager aussi. Une page d'accueil qui se construit entièrement dans le navigateur n'a jamais eu la balise dans sa réponse.

La vérification par balise HTML (HTML标签验证, HTML biāoqiān yànzhèng) réclame la balise dans le HTML livré par le serveur. Afficher le code source, pas l'inspecteur. Déplacez-la là, ou passez à la vérification par fichier (文件验证, wénjiàn yànzhèng), qui se moque de la façon dont la page est construite.

## L'échec dont personne ne parle en anglais

Supposons que le côté serveur soit irréprochable et que le site refuse toujours de se vérifier. En septembre 2023, Baidu a publié un avis sur la suppression des relations de vérification à risque de la plateforme.

> 关于搜索资源平台清退风险资源验证关系的通知
>
> Avis relatif à la révocation des relations de vérification de ressources à risque sur la Search Resource Platform
>
> *Source : Baidu Search Resource Platform, avis officiel, 4 septembre 2023*

Les comptes n'ayant jamais passé la vérification d'identité réelle (实名认证, shímíng rènzhèng) ont perdu la leur. Un second avis, quelques semaines plus tard, a retiré les quotas de soumission au même groupe et fermé la soumission de sitemap, avec des effets rapportés fin novembre 2023.

Ce que vous observez, c'est donc un site qui était vérifié, ne l'est plus, et n'a pas bougé côté serveur entre-temps. Rien dans votre racine documentaire n'y changera quoi que ce soit.

> 实名认证直接影响账号和资源的归属
>
> La vérification d'identité réelle détermine directement la propriété du compte et de ses ressources.
>
> *Source : Baidu, documentation sur la gestion des comptes*

Les passeports étrangers ordinaires ne figurent pas dans la liste des pièces d'identité acceptées par Baidu. C'est là que les équipes étrangères se bloquent. Nous avons repris plus d'un client dont le problème Baidu résidait entièrement dans un compte auquel personne ne pouvait se connecter.

## Le dépôt ICP n'est pas la cause de votre échec

Un dépôt ICP n'est pas un prérequis formel pour la vérification, ni pour l'indexation. Un site sans dépôt hébergé hors de Chine continentale peut être vérifié aujourd'hui. Le dépôt conditionne l'hébergement continental et les privilèges VIP de Baidu, et les sites sans dépôt semblent effectivement s'indexer plus lentement. Saisissez le numéro dans les attributs du site le jour où il arrive. Ce n'est pas lui qui a cassé votre vérification.

Baidu modifie ses règles de vérification avec peu de préavis : consultez le fil d'annonces de la plateforme avant d'appliquer quoi que ce soit qui porte une date.
