---
title: "Soumettre un site à Baidu : push, sitemap, manuel"
subtitle: "Le développeur termine le sitemap, se connecte à Baidu, cherche le champ où le coller, et ne le trouve pas. Rien n'est cassé. La plupart du temps, l'outil manque parce que le compte ne l'a pas mérité."
summary: "Comment soumettre un site à Baidu quand l'outil sitemap a disparu : le point d'entrée API, le comportement réel des quotas, et la soumission manuelle."
visual: "/images/guides/submitting-urls-to-baidu.webp"
order: 23
published: true
publishedAt: 2026-08-16
updatedAt: 2026-08-16
category: Search
---

La soumission standard (普通收录, pǔtōng shōulù) est la partie de la Baidu Search Resource Platform (百度搜索资源平台, Bǎidù Sōusuǒ Zīyuán Píngtái) qui signale à Baidu qu'une page existe. Trois canaux : push, sitemap, manuel. La plateforme les aligne côte à côte comme si choisir relevait de la préférence, alors qu'ils obéissent à une hiérarchie de privilèges. L'un plafonne à vingt liens par envoi. Les deux autres sont conditionnels : l'accès au sitemap s'attribue et se retire à la discrétion de Baidu, et la forme la plus rapide du push n'est ouverte qu'aux sites rattachés à une entité juridique enregistrée en Chine.

> Baidu détenait 63,97 % du marché chinois de la recherche tous appareils confondus en novembre 2025, et 77,86 % sur mobile.
>
> *Source : StatCounter, cité par The Egg, 11 février 2026*

Le panel chinois de StatCounter bouge : lisez ce chiffre comme une fourchette plutôt que comme une valeur fixe. C'est aussi la raison pour laquelle on accepte toute cette plomberie.

Un point à régler avant la mécanique. Soumettre n'est pas indexer. Vous signalez à Baidu qu'une URL existe, et la suite se décide ailleurs.

## C'est le point d'entrée push qui fait le travail

Le push existe sous deux formes, et c'est la version API qui fait tourner un site étranger récent. Le point d'entrée se trouve sur data.zz.baidu.com et prend deux paramètres de requête, site et token. Vous envoyez votre liste d'URL et vous lisez ce qui revient.

Le paramètre site est l'endroit où meurent la plupart des premières tentatives. Pas de protocole devant, pas de slash final, juste l'hôte tel que Baidu l'a enregistré lors de la vérification. Baidu traite le protocole comme partie de l'identité du site : les versions http et https de votre domaine forment deux ressources distinctes, et vous poussez vers celle que vous avez vérifiée.

Baidu délivre le token à l'intérieur de la plateforme. Quiconque le détient peut pousser des URL sur votre domaine, ce qu'il vaut mieux garder en tête avant qu'il ne finisse dans un dépôt public.

Chaque réponse contient un champ remain. Il indique ce qu'il reste de votre allocation quotidienne, et aucun autre chiffre de la plateforme ne vous le dira. Aucun tableau de bord derrière, aucune alerte. Consignez la valeur avec un horodatage à chaque appel. Sur les sites clients, le premier signe qu'une chose a changé est en général ce nombre qui chute.

La version HTTP du point d'entrée fonctionne encore. Utilisez HTTPS quand même.

## Le quota publié et le vrai

Le texte de l'outil affirme que le push API et la soumission manuelle partagent un plafond de 100 000 URL par jour. Prenez le mot plafond au pied de la lettre.

Ce que vous obtenez est attribué dynamiquement, site par site, selon des critères que Baidu n'a jamais publiés. Des cas documentés font état d'une allocation quotidienne tombée à 100 URL. Cent suffisent pour une semaine de publication ordinaire. Pour une migration, ce n'est rien, et c'est justement pendant une migration qu'une équipe découvre son vrai chiffre.

D'où l'intérêt de consigner ce champ de réponse.

## La version automatique du push est verrouillée par une entité chinoise

L'autre forme de push est celle en JavaScript. Un extrait de code se pose dans le template du site, et les pages s'annoncent à Baidu au fur et à mesure que de vrais visiteurs les chargent. Élégant, et la plupart des sites étrangers ne pourront jamais l'activer.

Baidu ne l'ouvre qu'aux sites disposant d'une entité juridique associée (关联主体, guānlián zhǔtǐ). Cette association a été lancée en décembre 2019, et une fois établie, elle ne peut pas être dissoute pendant 30 jours. Encore une barrière d'entité chinoise dans une plateforme qui en est bâtie.

Comptez ce qu'il reste à une entreprise étrangère sans présence continentale. Le push automatique est exclu, et l'accès au sitemap l'est souvent aussi. La panoplie opérationnelle se réduit à un point d'entrée API et à un champ de texte.

## La soumission manuelle, vingt à la fois

Le troisième canal est un champ de saisie. Le plafond de 20 liens s'applique à chaque envoi et non à la journée, et tout ce que vous y collez se déduit de la même allocation partagée que l'API.

Le volume n'est pas l'enjeu. Ce qui joue en faveur du champ, c'est que rien d'autre n'a besoin de fonctionner : aucun token à faire tourner, aucun script de déploiement qui a discrètement cessé de s'exécuter il y a trois versions. Quand une page de lancement compte au point qu'un dirigeant posera la question lundi, elle passe par le champ le vendredi en plus de l'API.

## Les sitemaps sont un privilège

Voici maintenant le canal par lequel la plupart des équipes commencent. Les règles de fichier n'ont rien de remarquable. Texte brut ou XML, jusqu'à 50 000 URL, moins de 10 Mo par fichier. Les fichiers d'index de sitemap sont rejetés, et c'est la règle qui piège tout le monde : un grand catalogue passe donc en plusieurs fichiers séparés, soumis un par un.

L'accès constitue la vraie difficulté. Baidu accorde la soumission de sitemap plutôt qu'il ne l'active pour tous, et en septembre 2023 il a repris l'outil à un large ensemble de sites d'un coup.

> 关于回收网站提交配额的通知
>
> Avis relatif à la reprise des quotas de soumission des sites
>
> *Source : Baidu Search Resource Platform, annonce officielle, septembre 2023*

L'avis reprenait les quotas de soumission, fermait la soumission de sitemap et réduisait les allocations de push API pour les comptes n'ayant jamais passé la vérification d'identité réelle (实名认证, shímíng rènzhèng), ainsi que pour les sites jugés de faible qualité par Baidu. Les retours situent son entrée en vigueur au 30 novembre 2023. Des sites qui soumettaient des sitemaps depuis des années ont ouvert la plateforme un matin et le module avait disparu.

Vérifiez si le module figure seulement dans votre compte avant de générer des fichiers pour lui. Nous concevons les nouveaux sites étrangers en partant du principe qu'il ne sera pas là, et le traitons comme un bonus s'il apparaît plus tard.

## À quoi ressemble un vrai flux de soumission

Push à la publication. L'appel API a sa place dans le CMS, déclenché sur chaque URL nouvelle ou modifiée dès la mise en ligne, et non dans une tâche hebdomadaire dont quelqu'un se souvient le jeudi. Stockez la valeur remain qui revient. Si Baidu rogne votre allocation, c'est dans ce journal que cela se verra en premier.

Par-dessus, un humain continue à travailler le champ manuel : page d'accueil, pages de services que vous cherchez réellement à positionner, tout ce qui porte une campagne. Vingt à la fois. Oui, cela dépense l'allocation deux fois sur la même URL, et pour une poignée de pages par mois, cela reste acceptable.

Saisissez votre numéro de dépôt ICP dans les attributs du site tant que vous y êtes. Le dépôt n'est un prérequis pour aucune soumission, mais Baidu conseille aux sites de moins de six mois de remplir ce champ pour accélérer l'indexation.

Il existait autrefois une voie plus rapide que tout cela. [Un article distinct de ce guide](/fr/ressources/guide-web-chine/fin-indexation-rapide-baidu/) revient sur ce qu'est devenue l'indexation rapide.

Vient ensuite la partie que personne ne budgète. L'indexation initiale d'un site neuf demande deux à quatre semaines, et un volume d'index (索引量, suǒyǐn liàng) resté à zéro pendant la première période relève de la normale. Baidu ne publie aucun engagement de service là-dessus, il n'y a donc rien contre quoi escalader.

Le comportement des quotas change sans annonce : faites confiance au champ remain plutôt qu'à la documentation.
