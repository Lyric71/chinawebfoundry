---
title: "La Baidu Search Resource Platform, mode d'emploi"
subtitle: "La plupart des entreprises étrangères débarquent en Chine avec un budget SEO Baidu et sans compte Baidu. Le budget part dans le contenu. Personne ne crée le compte. Six mois plus tard, on se réunit pour comprendre pourquoi rien ne remonte."
summary: "La plateforme pour webmasters de Baidu est le poste de pilotage du référencement chinois. Ce que fait chaque outil, et les trois que les guides recommandent encore alors qu'ils sont morts."
visual: "/images/guides/baidu-search-resource-platform.webp"
order: 30
published: true
publishedAt: 2026-08-19
updatedAt: 2026-08-19
category: Search
---

La Baidu Search Resource Platform (百度搜索资源平台, Bǎidù Sōusuǒ Zīyuán Píngtái) est l'endroit où se pilote réellement le référencement sur Baidu. Elle indique si Baidu a exploré votre site, combien de pages il a conservées, quelles requêtes ont généré des clics. Elle signale aussi ce qui casse. Sans elle, une stratégie de recherche en Chine relève de la divination, facture de traduction en prime.

Elle s'appelait autrefois Baidu Webmaster Platform (百度站长平台, Bǎidù Zhànzhǎng Píngtái). Beaucoup de documentation emploie encore l'ancien nom, y compris certaines pages d'aide de Baidu. Même plateforme.

> L'application Baidu comptait 655 millions d'utilisateurs actifs mensuels en mars 2026.
>
> *Source : Baidu Inc., résultats du premier trimestre 2026, 18 mai 2026*

Voilà l'audience qui se tient derrière la plateforme, et la raison pour laquelle le paramétrage mérite une heure de quelqu'un de sérieux.

## Les trois outils Baidu que tout le monde confond

La Search Resource Platform couvre le versant exploration et index : soumission, diagnostic de crawl, volume d'index, données de mots-clés.

Baidu Tongji (百度统计, Bǎidù Tǒngjì) fait de l'analytics. Il observe les visiteurs une fois qu'ils sont arrivés sur la page, et ne dira rien de la façon dont Baidu perçoit le site.

Baidu Index (百度指数, Bǎidù Zhǐshù) mesure la demande, ce qui se rapproche le plus en Chine d'un planificateur de mots-clés consultable librement. Utile avant d'écrire quoi que ce soit. D'aucun secours le soir où rien n'est indexé.

Vous finirez par utiliser les trois. Un seul répond à la question de savoir si Baidu parvient à lire vos pages.

## Entrer se fait en deux étapes, et la première est la difficile

Il faut un compte Baidu ayant passé la vérification d'identité réelle (实名认证, shímíng rènzhèng). C'est là que les entreprises étrangères s'enlisent, et mieux vaut comprendre pourquoi avant d'y passer une semaine. Baidu publie la liste des pièces d'identité acceptées. Un passeport étranger ordinaire n'y figure pas. En pratique, le compte finit rattaché à une entité chinoise, ou à quelqu'un détenant une identité continentale. Les numéros de mobile étrangers ont cessé de fonctionner de façon fiable pour l'inscription vers mai 2022.

Savoir qui enregistre ce compte compte davantage qu'il n'y paraît. La vérification d'identité réelle tient lieu de titre de propriété sur la ressource de recherche : une agence qui enregistre le site d'un client sous sa propre licence détient un actif que le client ne peut pas simplement reprendre.

Vérifier le domaine constitue la moitié facile. Dix minutes, si l'hébergement se tient tranquille. Baidu vous remet un fichier HTML à déposer à la racine, ou une balise meta pour l'en-tête de la page d'accueil. Les deux conviennent. La vérification par CNAME a été suspendue au premier trimestre 2023, ce qui n'empêche pas la plupart des guides anglophones de la présenter comme troisième option.

Un détail coûte une semaine aux équipes, encore et encore. Baidu considère le protocole comme partie intégrante de l'identité du site. Les versions http et https de votre domaine forment deux ressources distinctes, tout comme www et non-www.

## Les outils, et ceux que vous ouvrirez vraiment

La plateforme relève de la boîte à outils plus que du tableau de bord. Quatre familles, en gros.

Commencez par la soumission. La soumission standard (普通收录, pǔtōng shōulù) couvre trois canaux. Un point d'entrée API qui renvoie le quota quotidien restant à chaque appel. Une soumission manuelle, plafonnée à 20 liens. Et la soumission de sitemap, qui tient du privilège plus que de la fonctionnalité. En septembre 2023, Baidu a publié un avis retirant les quotas de soumission aux sites dont le compte n'avait jamais passé la vérification d'identité réelle. L'accès au sitemap est parti avec, et des sites qui soumettaient tranquillement depuis des années ont vu l'outil disparaître.

Les outils d'exploration sont ceux qui vous occuperont. Le diagnostic de crawl (抓取诊断, zhuāqǔ zhěnduàn) récupère n'importe quelle URL en se faisant passer pour Baiduspider et affiche ce que le robot a reçu. Sur un site bâti avec un framework JavaScript, cet écran met généralement fin au débat sur le rendu. Nous nous en sommes servis plus d'une fois pour trancher la question avec les développeurs d'un client. La fréquence d'exploration et les anomalies d'exploration traitent le volume et les erreurs, et un testeur de robots.txt complète l'ensemble.

Vient ensuite le reporting. Le volume d'index (索引量, suǒyǐn liàng) suit le nombre de pages que Baidu conserve. Lisez-le comme une courbe de tendance. Ce n'est pas un décompte de pages et Baidu ne l'a jamais prétendu. Le rapport trafic et mots-clés donne impressions et clics, avec environ cinq heures de décalage, et ne se remplit qu'à partir du moment où le site gagne des clics.

**Configuration du site.** Soumission de liens morts, refonte de site pour les migrations, adaptation mobile, certification HTTPS, et attributs du site, où se saisit le numéro de dépôt ICP (备案号, bèi'àn hào). Remplissez ce champ le jour où le dépôt aboutit. Cela ne coûte rien et les nouveaux sites semblent y gagner.

## Trois outils encore recommandés par les guides et qui n'existent plus

Avant de suivre un tutoriel écrit avant 2024, confrontez-le à cette liste.

Xiongzhang ID (熊掌号, Xióngzhǎng Hào) était le programme de propriété de contenu de Baidu, assorti d'un privilège d'indexation à la journée. Baidu l'a fermé en mars 2020.

L'outil de données structurées fonctionnait sur invitation depuis son lancement en 2013 et n'a jamais couvert les données produit. L'URL renvoie désormais une erreur serveur, ce qui constitue la déclaration la plus claire de Baidu à son sujet.

L'indexation rapide (快速收录, kuàisù shōulù) est celle qu'on regrette, parce qu'elle marchait.

> 资源平台于 4 月 26 日下线「快速收录」工具，上新「快速抓取」工具。
>
> *Source : Baidu Search Resource Platform, annonce officielle, avril 2024*

Le remplaçant s'appelle exploration rapide (快速抓取, kuàisù zhuāqǔ), et il est réservé au club VIP de Baidu. Les critères rapportés comprennent la vérification d'identité réelle et un dépôt ICP, plus d'un an d'ancienneté et plus de 10 000 clics quotidiens en moyenne, mobile et desktop confondus. Un site récent appartenant à une marque étrangère ne remplit aucune de ces conditions. La panoplie réaliste pour un nouveau site se limite donc au point d'entrée API, à la soumission manuelle et à la patience.

## Ce que la plateforme ne vous dira pas

Les pages de résultats de Baidu ont évolué bien plus vite que son outillage pour webmasters.

> Environ 70 % des pages de résultats mobiles de Baidu contenaient du contenu généré par IA en octobre 2025.
>
> *Source : Baidu Inc., résultats du troisième trimestre 2025, 18 novembre 2025*

Rien de tout cela n'apparaît dans la Search Resource Platform. Aucun module de recherche IA. Rien qui indique si votre contenu ressort dans une réponse générée. L'outillage décrit toujours un moteur de recherche fait de dix liens bleus. Les résultats trimestriels de Baidu ont cessé de le décrire ainsi il y a un moment.

Servez-vous de la plateforme pour ce qu'elle couvre, l'exploration et l'index, et traitez la visibilité IA comme un chantier à part. Personne chez Baidu ne vous remettra de rapport là-dessus.

## Si vous partez de zéro

Un ordre de marche raisonnable, dicté par ce qui déraille habituellement.

Réglez la question du compte avant tout le reste, puisque tout ce qui suit dépend de l'identité qui se trouve derrière. Vérifiez le domaine que vous voulez positionner, pas une redirection vers lui. Saisissez le numéro ICP dans les attributs du site. Lancez ensuite un diagnostic de crawl sur la page d'accueil et sur trois pages profondes, avant d'écrire le moindre article. Publier dans un site que Baiduspider n'atteint pas ne sert à rien.

Côté calendrier : l'étape compte et identité prend d'un jour à plusieurs semaines selon la voie retenue. La vérification elle-même se règle dans la journée. Les premières données d'index apparaissent généralement deux à quatre semaines après le début de l'exploration d'un nouveau site, et des tableaux de bord vides avant cette échéance relèvent de la normale.

Baidu modifie cette plateforme sans grand préavis : consultez le fil d'annonces avant d'appliquer quoi que ce soit qui porte une date.
