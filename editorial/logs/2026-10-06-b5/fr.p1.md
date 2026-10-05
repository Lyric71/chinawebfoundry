---
title: "Briefer un site en Chine : la checklist"
subtitle: "Ce qu’il faut préciser avant de consulter une agence web en Chine, et les réponses qui distinguent un spécialiste d’un généraliste."
summary: "Un brief pensé pour un projet occidental oublie les six points qui décident d’un projet en Chine. La checklist à envoyer à tout prestataire, nous compris."
visual: "/images/guides/china-website-brief-checklist.webp"
order: 39
published: true
publishedAt: "2026-10-06"
updatedAt: "2026-10-06"
category: "Technology"
author: "cyril-drouin"
faqSchema: true
---

Un appel d’offres pour un site en Chine exige six rubriques qu’un brief occidental aborde rarement : l’entité et l’enregistrement, le choix de l’hébergement, la technologie et la propriété, les contenus en chinois, la visibilité dans les moteurs et les assistants d’IA, enfin la question des clés après la mise en ligne. Sans elles, chaque prestataire comble les vides avec ses propres hypothèses, et les devis reçus décrivent des projets différents.

La checklist, en fin de page, est en texte brut. Envoyez-la à chaque prestataire présélectionné, nous y compris. Chaque règle d’hébergeur citée ici a été revérifiée à la source le 1er octobre 2026.

| Rubrique                   | Ce que le brief doit préciser                              | Ce qui dérape sans elle                               |
| -------------------------- | ---------------------------------------------------------- | ----------------------------------------------------- |
| Entité et enregistrement   | Quelle société chinoise dépose le dossier, et quand        | Le site est prêt mais ne peut pas ouvrir              |
| Hébergement                | Serveur en Chine continentale, ou la raison d’y renoncer   | Deux prestataires chiffrent deux projets différents   |
| Technologie et propriété   | Plateforme, comptes et conditions de sortie                | Le prestataire détient le serveur que vous payez      |
| Contenus en chinois        | Qui valide les textes ; où vont les données des formulaires | Les données quittent la Chine sans consentement      |
| Moteurs et assistants d’IA | Le travail Baidu au-delà de la vérification                | Un sitemap soumis, et rien d’autre                    |
| Maintenance et accès       | Comment les mises à jour atteignent un serveur en Chine    | Les mises à jour cessent sans bruit après le lancement |

## Ce qu’un brief classique oublie

En Chine continentale, un site terminé peut rester éteint des semaines : le serveur refuse de servir votre domaine tant qu’un enregistrement administratif n’est pas validé.

> Un domaine qui pointe vers un serveur situé en Chine continentale doit avoir achevé son enregistrement avant que l’accès au site puisse être ouvert.
> Source : centre d’aide d’Alibaba Cloud (阿里云), 4 septembre 2026.
> https://help.aliyun.com/zh/dws/support/how-do-i-troubleshoot-the-failures-to-access-a-website-by-using-its-domain-name

Cette seule règle bouleverse l’ordre du projet, et personne ne peut avancer de calendrier tant que le brief ne nomme pas l’entité déclarante. Un brief occidental tient aussi pour acquis les scripts tiers du site et l’hébergeur favori de l’agence, range les textes chinois au rayon traduction et abandonne Baidu à une extension.

## Rubrique par rubrique : ce que doit couvrir l’appel d’offres d’un site en Chine

Six rubriques, dans l’ordre où un prestataire doit les lire.

### Entité et enregistrement

L’enregistrement ICP (ICP备案) est déposé par une société immatriculée en Chine continentale. Précisez laquelle, et si elle existe déjà.

> Les comptes internationaux d’Alibaba Cloud (alibabacloud.com) ne permettent pas l’enregistrement ICP. Le déclarant doit être une entreprise immatriculée en Chine continentale ou un résident de Chine continentale, sur un compte aliyun.com.
> Source : centre d’aide d’Alibaba Cloud (version anglaise), 20 août 2026.
> https://help.aliyun.com/en/icp-filing/basic-icp-service/product-overview/icp-filing-application-for-enterprises-outside-the-chinese-mainland

Le planning de chaque prestataire doit faire apparaître l’enregistrement comme une dépendance, avec ses propres semaines.

> L’examen préalable d’Alibaba Cloud prend 1 à 2 jours ouvrés. L’administration provinciale des communications (省级通信管理局) statue en général en 1 à 20 jours ouvrés. L’enregistrement auprès de la sécurité publique (公安备案) doit intervenir dans les 30 jours suivant l’ouverture du site.
> Source : centre d’aide d’Alibaba Cloud (阿里云), 26 août 2026.
> https://help.aliyun.com/zh/icp-filing/basic-icp-service/user-guide/icp-filing-application-overview

Si le site doit vendre des services en ligne payants, dites-le. Cela peut imposer une licence ICP (ICP许可证), une demande distincte au calendrier plus long. Notre guide de [l’enregistrement ICP pour les entreprises étrangères](/fr/ressources/guide-web-chine/licence-icp-entreprises-etrangeres/) détaille les pièces à fournir.

### Choix de l’hébergement

Demandez un serveur d’origine en Chine continentale, ou une justification écrite pour un hébergement à Hong Kong ou plus loin, appuyée par des temps de chargement mesurés depuis un réseau chinois. Un serveur en Chine continentale suppose un enregistrement, déposé sur ce même serveur.

> Pour déposer un enregistrement chez Alibaba Cloud, il faut un serveur en Chine continentale souscrit pour 3 mois au moins.
> Source : centre d’aide d’Alibaba Cloud (version anglaise), 24 septembre 2026.
> https://help.aliyun.com/en/icp-filing/basic-icp-service/user-guide/icp-filing-server-access-information-check

Le serveur s’achète donc en premier, au nom de l’entité déclarante.

Faites-le inscrire noir sur blanc.

### Technologie et propriété

Indiquez la plateforme que vous attendez, ou demandez à chaque prestataire d’en proposer une et de la défendre. WordPress et Astro fonctionnent l’un et l’autre sans difficulté en Chine continentale. Le choix dépend de qui modifie le site et des services avec lesquels il doit dialoguer.

Sur WordPress, demandez qui administre le serveur : nous n’avons trouvé aucun cloud chinois qui vende du WordPress infogéré. Le Simple Application Server (轻量应用服务器) d’Alibaba Cloud l’installe à partir d’une image préconfigurée sur un serveur que vous administrez vous-même, Lighthouse chez Tencent Cloud (腾讯云) et FlexusL chez Huawei Cloud (华为云) fonctionnent de la même façon, et aucun ne corrigera une extension ni ne restaurera une sauvegarde à votre place. Mises à jour et sauvegardes incombent à quelqu’un : le brief doit le nommer.

Dressez la liste de tous les comptes que le projet ouvre (aliyun.com, bureau d’enregistrement du domaine, administration du CMS, statistiques) et exigez qu’ils soient tous au nom du client.

### Contenus en chinois

Traduire et rédiger en chinois sont deux métiers différents. Dites lequel vous attendez, et qui, dans votre entreprise, valide le texte chinois (et combien de temps cela prend réellement).

Précisez ensuite où aboutissent les formulaires. Un formulaire de contact qui alimente un CRM hors de Chine engage une obligation légale.

> Un responsable de traitement qui transfère des informations personnelles hors de la RPC doit indiquer à la personne concernée qui les reçoit et recueillir son consentement distinct.
> Source : Administration du cyberespace de Chine (中央网络安全和信息化委员会办公室), loi sur la protection des informations personnelles, article 39, 20 août 2021.
> https://www.cac.gov.cn/2021-08/20/c_1631050028355286.htm

### Moteurs de recherche et assistants d’IA

Yoast et Rank Math enregistrent tous deux un code de vérification Baidu (百度).

> Les réglages « Site connections » de Yoast SEO accueillent le code de vérification de Baidu Webmaster Tools.
> Source : centre d’aide de Yoast, mis à jour le 29 avril 2026.
> https://yoast.com/help/add-website-baidu-webmaster-tools/

Quand nous avons lu le code des deux extensions en août 2026, cette balise était le seul élément propre à Baidu que l’une ou l’autre produisait. Soumission des URL, Baidu Tongji (百度统计), données structurées au format Baidu, règles robots.txt pour Baiduspider : tout se fait à la main. Il faut un responsable, et la réponse doit dire lequel.

Vient ensuite le rendu. Baidu a annoncé son robot de rendu, Baiduspider-render/2.0, en mars 2017, et ne publie rien sur la part des pages qu’il rend : un HTML généré côté serveur reste le choix le moins risqué. Demandez enfin quels assistants d’IA chinois le prestataire surveille pour repérer le nom de votre marque dans leurs réponses. DeepSeek, Doubao (豆包), Kimi, Qwen (通义千问) et Yuanbao (元宝) sont les noms attendus.

### Maintenance et maîtrise des accès

Comment les mises à jour du cœur et des extensions parviennent-elles à un serveur en Chine continentale ?

> Des membres de l’équipe de WordPress.org ont écrit que plusieurs sources réseau chinoises sont soumises à une limitation de débit sur certains services en raison d’abus, et qu’aucune liste blanche ne serait accordée.
> Source : WordPress.org Meta Trac, ticket n° 5106, 21 mars 2020.
> https://web.archive.org/web/20260116133057/https://meta.trac.wordpress.org/ticket/5106

Quels scripts externes resteront sur la page ? Un thème qui charge jQuery depuis ajax.googleapis.com bloque la page le temps de l’attente.

> Testé depuis une instance Alibaba Cloud (阿里云) de la région cn-zhangjiakou le 28 août 2026, Google Hosted Libraries n’a renvoyé de premier octet dans aucun des 3 essais, chacun abandonné au bout de 60 secondes.
> Source : 21YunBox, Google Hosted Libraries in China, 30 août 2026.
> https://www.21cloudbox.com/support/google-hosted-libraries.html

Reste la sortie. Un prestataire qui détient l’accès au serveur et le nom de domaine peut bloquer tout changement de prestataire. Dressez la liste de ce qui vous revient le dernier jour du contrat.

## Les questions auxquelles les prestataires doivent répondre par écrit

Notre guide pour [choisir une agence web en Chine](/fr/ressources/guide-web-chine/choisir-agence-web-chine/) propose huit questions pour le premier rendez-vous. Les sept suivantes appartiennent à la réponse écrite, parce que les réponses deviennent des clauses du contrat.

1. Au nom de qui est déposé l’enregistrement ICP, et quel compte aliyun.com détient le serveur ?
2. Combien de semaines votre planning accorde-t-il à l’enregistrement, et que menez-vous en parallèle ?
3. Quels hôtes tiers le site terminé appellera-t-il encore, nommément ?
4. Sur quel temps de chargement vous engagez-vous, mesuré depuis quel réseau chinois, à quelle date ?
5. Comment les mises à jour atteignent-elles le serveur, et qui les applique ?
6. Où vont les données des formulaires, et avec quel consentement ?
7. En fin de contrat, récupérons-nous les fichiers et la base de données avec des identifiants d’administration complets ?

## Les signaux d’alerte dans les réponses

| Réponse                                                    | Ce qu’elle vous apprend                                                     |
| ---------------------------------------------------------- | --------------------------------------------------------------------------- |
| « Nous l’hébergerons sur notre compte »                    | Le serveur dont dépend l’enregistrement ne vous appartiendra pas            |
| Une date de lancement sans semaines pour l’enregistrement  | Le planning a été pensé pour un lancement occidental                        |
| Un temps de chargement sans réseau ni date                 | Impossible de savoir où, ni même si, la mesure a été faite                  |
| « Notre extension SEO gère Baidu »                         | L’extension s’occupe de la vérification, et s’arrête là                     |
| Aucun numéro ICP en pied de page de leur propre site       | Demandez pourquoi : leur propre site enregistré est la preuve la plus simple |
| Silence sur la destination des données des formulaires     | Des données personnelles risquent de quitter la Chine sans consentement     |

La vérification du pied de page prend dix secondes, et un site enregistré doit la passer.

> Une fois enregistré, un site doit afficher son numéro d’enregistrement ICP en bas de page, avec un lien vers beian.miit.gov.cn. L’omettre expose à une amende de 5 000 à 10 000 yuans infligée par l’administration provinciale des communications.
> Source : centre d’aide d’Alibaba Cloud (阿里云), 12 août 2026.
> https://help.aliyun.com/zh/icp-filing/basic-icp-service/the-icp-record-post-processing-1

## La checklist

Copiez-la telle quelle, puis adaptez la formulation à votre entreprise.

- Entité déclarante : la société immatriculée en Chine continentale qui détiendra l’enregistrement ICP, et si elle existe aujourd’hui.
- Type de dossier : enregistrement ICP, ou licence ICP si le site vend des services en ligne payants.
- Calendrier de l’enregistrement : les semaines prévues au planning, plus l’enregistrement auprès de la sécurité publique dans les 30 jours suivant le lancement.
- Serveur : fournisseur et région en Chine continentale, souscription d’au moins 3 mois, achetée au nom de l’entité déclarante.
- Comptes : aliyun.com, bureau d’enregistrement du domaine, administration du CMS et statistiques, tous à notre nom.
- Plateforme : nommée, avec la raison pour laquelle elle convient à notre façon de publier.
- Hôtes tiers : tout ce que le site appelle aujourd’hui, et ce que le site terminé appellera encore.
- Temps de chargement : un objectif, le réseau chinois depuis lequel il est mesuré, la date.
- Textes chinois : rédigés ou traduits, par qui, et qui les valide.
- Formulaires : où les données sont stockées, et le texte du consentement.
- Baidu : vérification, soumission des URL, Baidu Tongji, rendu.
- Assistants d’IA : quels assistants chinois sont suivis, et comment.
- Mises à jour : comment les mises à jour du cœur et des extensions atteignent un serveur en Chine continentale, et qui les applique.
- Sortie : fichiers et base de données restitués avec les identifiants d’administration.
- Budget : chiffré ligne par ligne, avec l’enregistrement, l’hébergement, les textes chinois et le travail Baidu sur des lignes distinctes.
- Référence : un site en ligne géré par le prestataire, avec un numéro ICP en pied de page.

## Questions fréquentes

**Un même appel d’offres peut-il viser des prestataires en Chine et hors de Chine ?**
Oui. La même liste sépare les prestataires qui enregistrent et hébergent eux-mêmes en Chine continentale de ceux qui sous-traitent. Demandez à chacun de signaler les points qu’il confie à un partenaire, et de nommer ce partenaire. Une case vide face à l’entité déclarante ou au serveur en dit plus long que le reste de la réponse.

**Faut-il une société en Chine avant de consulter qui que ce soit ?**
Il la faut avant l’enregistrement, qui commande tout le calendrier. Consultez les prestataires pendant l’immatriculation de la société, mais n’attendez aucune date de lancement ferme tant que la licence d’exploitation n’existe pas. Indiquez dans le brief où en est l’immatriculation et quand vous attendez la licence, pour que tous les prestataires planifient à partir de la même date.

**L’appel d’offres doit-il imposer WordPress ?**
Seulement si votre équipe utilise déjà WordPress et veut le garder. Sinon, laissez chaque prestataire proposer une plateforme et la justifier au regard de vos habitudes de publication et de vos intégrations. [Une agence web qui enregistre et héberge en Chine](/fr/agence-web-chine/) doit savoir défendre l’une ou l’autre option.

**Que dire du budget dans l’appel d’offres ?**
Donnez une fourchette si vous en avez une. Dans tous les cas, demandez un prix pour chaque ligne de la checklist. Les devis pour la Chine diffèrent surtout par ce qu’ils laissent de côté : l’accompagnement de l’enregistrement, le serveur en Chine continentale, les textes chinois et le travail Baidu sont les lignes qui disparaissent ou réapparaissent, en petits caractères, à la charge du client.

**Combien de temps laisser aux prestataires pour répondre ?**
Deux à trois semaines pour une réponse cadrée avec un planning de projet. Demandez un déroulé daté où l’enregistrement figure sur sa propre ligne, et l’achat du serveur avant lui. Si le planning met le site en ligne avant la validation de l’enregistrement, renvoyez-le.
