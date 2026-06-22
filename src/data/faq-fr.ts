import type { FAQTopic } from './faq';

export const faqTopicsFr: FAQTopic[] = [
  {
    title: 'Pourquoi la Chine change la donne',
    shortTitle: 'Spécificités',
    icon: 'globe',
    items: [
      {
        question: "Pourquoi mon site actuel fonctionne mal en Chine ?",
        answer: "Le Grand Pare-feu, pour l’essentiel. Le filtrage national bloque ou ralentit la quasi-totalité des services occidentaux dont dépend votre site. Google Fonts, Google Analytics, reCAPTCHA, YouTube, les pixels Facebook, les grands CDN : filtrés ou étranglés. Une page qui s’ouvre en 2 secondes à New York en réclame 15 à Shanghai, quand elle finit par s’afficher. Sans réglage pensé pour la Chine, votre site n’existe pas pour qui le consulte depuis le continent.",
      },
      {
        question: "Un simple CDN suffit-il à régler le problème de vitesse ?",
        answer: "Cloudflare, Akamai et les autres CDN occidentaux n’ont pas de vraie couverture edge sur le continent tant qu’ils n’ont pas de licence ICP. Et même licenciés, leurs performances déçoivent. La vraie réponse, c’est un hébergeur chinois : Alibaba Cloud (阿里云), Tencent Cloud (腾讯云) ou Huawei Cloud (华为云). En dehors de ça, on bricole.",
      },
      {
        question: "L’hébergement à Hong Kong suffit-il pour le marché chinois ?",
        answer: "Mieux que l’Europe ou les États-Unis, oui. Mais le visiteur du continent subit encore des temps de chargement plus longs, Baidu (百度) range votre site dans la catégorie « étranger » et le rétrograde, et vous perdez le signal de confiance qu’apporte une présence dûment licenciée sur le continent. Pour vendre sérieusement en Chine, l’hébergement continental reste payant.",
      },
      {
        question: "Les internautes chinois naviguent-ils vraiment autrement ?",
        answer: "Profondément, oui. Le mobile d’abord, WeChat (微信) comme couche de partage par défaut, des QR codes à chaque coin de page, des pages qui défilent bien plus loin qu’ici, des mises en page plus denses, des codes esthétiques qui n’ont rien des nôtres. Décalquer un site occidental en chinois échoue presque toujours. Nous repartons de la façon dont les internautes d’ici se servent vraiment du web.",
      },
    ],
  },
  {
    title: 'Cadrage et découverte du projet',
    shortTitle: 'Cadrage',
    icon: 'compass',
    items: [
      {
        question: "Comment savoir si nous avons vraiment besoin d’un site spécifique pour la Chine ?",
        answer: "Si votre site rame à l’ouverture depuis Shanghai, n’apparaît jamais sur Baidu (百度), ou si vos commerciaux entendent souvent « on ne vous trouve pas en ligne » dans la bouche de prospects chinois, c’est sans doute oui. Avant tout engagement, nous menons un audit gratuit. Comptez une semaine. Vous repartez avec des chiffres réels, pas avec un argumentaire de vente.",
      },
      {
        question: "Quel est le périmètre minimum viable pour entrer sur le marché chinois en ligne ?",
        answer: "Une landing bilingue sur hébergement chinois sous licence ICP (互联网内容提供商), Baidu Tongji (百度统计) installé, et une expérience pensée pour Baidu (百度). Voilà le minimum vital. Nous avons lancé des entreprises sur ce socle, puis nous l’avons étoffé à mesure que les données de trafic tombaient.",
      },
      {
        question: "Pouvez-vous nous aider à savoir si la Chine vaut le coup pour notre activité ?",
        answer: "Ce n’est pas notre cœur de métier. Mais quand un investissement n’a aucune chance d’être rentable, nous le disons sans détour. Nous avons décliné des projets parce que les chiffres du marché ne justifiaient pas la dépense. Pour un vrai conseil en pénétration de marché, nous vous adressons aux cabinets shanghaïens qui font ça toute l’année.",
      },
      {
        question: "Proposez-vous un atelier de découverte avant le projet ?",
        answer: "Oui, sous deux formes. Une demi-journée à distance pour l’audit technique et la stratégie, ou un atelier de 2 jours à Shanghai (上海) pour les projets plus ambitieux. Les deux se facturent à part de la mission principale.",
      },
      {
        question: "De quelles informations avez-vous besoin pour un vrai devis ?",
        answer: "L’URL de votre site, vos données de trafic si vous en avez, vos objectifs pour la Chine (leads, ventes, notoriété, ou tout cela ensemble), le statut d’une éventuelle entité chinoise, et idéalement un appel rapide. Avec ces éléments, nous sortons un chiffre ferme, pas une fourchette.",
      },
    ],
  },
  {
    title: 'Tarifs et budgets',
    shortTitle: 'Tarifs',
    icon: 'wallet',
    items: [
      {
        question: "Combien coûte vraiment un projet de site pour la Chine ?",
        answer: "Tout dépend du périmètre. D’un côté, les migrations. De l’autre, le développement sur mesure complet avec WooCommerce ou un espace membre. Après un appel de découverte, nous envoyons une proposition au forfait. Pas de facturation à l’heure en cours de route, pas de mauvaise surprise à mi-parcours.",
      },
      {
        question: "Comment vos tarifs se comparent-ils aux agences occidentales ?",
        answer: "Honnêtement, c’est comparable. Les salaires shanghaïens dépassent ceux de Paris ou de Berlin, notre équipe joue dans la cour des profils seniors, et notre travail ne sort pas d’un template. À budget égal, vous gagnez une équipe sur le continent qui a déposé de vrais Bei’an (备案), qui pilote des comptes Baidu Search Resource Platform (百度搜索资源平台) au quotidien et qui sait quel commercial décroche chez Aliyun (阿里云). La valeur est là, pas dans la remise.",
      },
      {
        question: "Proposez-vous des paiements échelonnés ?",
        answer: "Sur les gros projets, oui. Découpage habituel : lancement, mi-parcours, mise en ligne. Sur les missions plus longues, nous passons à des jalons mensuels. En revanche, nous ne travaillons pas contre des parts au capital.",
      },
      {
        question: "Qu’est-ce qui n’est PAS compris dans le prix du projet ?",
        answer: "Les frais administratifs ICP (modestes, mais à part), la rédaction professionnelle en chinois si vous la souhaitez, les licences de banques d’images, les licences de plugins payants si vous tenez à des extensions commerciales, et les services tiers comme l’hébergement, facturé en direct. Tout cela est détaillé dans la proposition.",
      },
      {
        question: "Y a-t-il des coûts cachés à connaître ?",
        answer: "Deux qui surprennent les clients. D’abord, le renouvellement administratif de l’ICP (互联网内容提供商) tous les 2 ou 3 ans : faible, mais réel. Ensuite, le SEO Baidu (百度) dans la durée : pour vraiment grimper sur les requêtes, il faut un travail mensuel, pas un coup au lancement. Nous le posons sur la table dès l’appel de découverte, pour que la discussion budgétaire parte sur des bases claires.",
      },
      {
        question: "Facturez-vous les propositions ?",
        answer: "Non. Proposition et audit sont gratuits. Nous rédigeons des cadrages détaillés parce que les deux parties ont besoin de savoir exactement ce qui se construit. Vous voulez la faire chiffrer ailleurs ? C’est arrivé, et nous ne facturons toujours rien.",
      },
      {
        question: "Pouvons-nous commencer petit et grandir ensuite ?",
        answer: "Oui, et c’est souvent ce que nous conseillons. La phase 1 met l’essentiel en ligne. La phase 2 ajoute le SEO Baidu (百度) en profondeur, le GEO Chine, la production de contenu. La phase 3 ouvre l’e-commerce ou les fonctions plus avancées. Ce découpage lisse la dépense et laisse le temps de valider avant de passer à l’échelle.",
      },
    ],
  },
  {
    title: 'Licence ICP et cadre légal',
    shortTitle: 'ICP et droit',
    icon: 'shield',
    items: [
      {
        question: "C’est quoi exactement la licence ICP ? En ai-je vraiment besoin ?",
        answer: "Oui, et sans raccourci possible. ICP (互联网内容提供商) signifie Internet Content Provider. C’est l’autorisation délivrée par le Ministère de l’Industrie et des Technologies de l’Information (工业和信息化部), exigée par la loi pour tout site hébergé sur le continent. Deux versions comptent : l’ICP Bei’an (备案) pour les sites d’information, l’ICP Jing Ying (经营许可证) pour les sites qui encaissent. Nous montons le dossier de bout en bout.",
      },
      {
        question: "Et si nous n’avons pas encore d’entité chinoise ?",
        answer: "L’ICP (互联网内容提供商) se complique alors. Deux voies : créer une WFOE (外商独资企业), ou s’adosser à une entité chinoise prête à parrainer le dépôt. Nous avons accompagné les deux. Sans entité, et sans envie d’en créer une, l’hébergement continental se ferme : Hong Kong (香港) reste un plan B sérieux.",
      },
      {
        question: "Combien de temps prend réellement le dépôt ICP ?",
        answer: "Le Bei’an (备案) prend en général 2 à 4 semaines. Le Jing Ying (经营许可证) demande 2 à 3 mois, parfois plus. La grande variable : la complétude de votre dossier. Nous vous remettons une checklist dès la semaine 1 pour que la partie lente ne plombe pas le reste.",
      },
      {
        question: "Qu’en est-il de la résidence des données et de la conformité PIPL ?",
        answer: "Dans la plupart des cas, les données chinoises doivent rester en Chine. Nous concevons l’architecture avec cette contrainte dès le premier jour. Si votre projet traite des données personnelles, nous décortiquons avec vous ce qu’implique la PIPL (个人信息保护法). Nous avons croisé des dizaines de cas avec des conseils juridiques, ce qui nous donne une lecture fine des zones grises.",
      },
      {
        question: "Que se passe-t-il si notre dépôt ICP est rejeté ?",
        answer: "Ça arrive, presque toujours pour des pièces manquantes. Nous redéposons sans frais. Les seules impasses concernent les sociétés dont la structure même ne se qualifie pas, et ça, nous le repérons en semaine 1, jamais en semaine 4.",
      },
    ],
  },
  {
    title: 'Délais et processus',
    shortTitle: 'Délais',
    icon: 'clock',
    items: [
      {
        question: "À quelle vitesse pouvez-vous lancer un site en Chine ?",
        answer: "Notre record : 3 semaines pour une landing, sur une licence ICP (互联网内容提供商) déjà en place. Plus réaliste pour un vrai site : 8 à 12 semaines, dépôt ICP compris. S’il faut tout partir de zéro et créer l’entité chinoise, ajoutez 4 à 6 semaines sur ce volet.",
      },
      {
        question: "À quoi ressemble le calendrier d’un projet type ?",
        answer: "Semaines 1-2 : audit et découverte. Semaines 3-6 : dépôt ICP (互联网内容提供商) en parallèle du design et de la mise en place technique. Semaines 7-10 : développement, intégration des contenus, tests. Semaines 11-12 : préproduction, corrections, mise en ligne. Ensuite, la maintenance prend le relais. Le planning détaillé figure dans la proposition.",
      },
      {
        question: "Qu’est-ce qui ralentit le plus souvent les projets ?",
        answer: "Les pièces ICP (互联网内容提供商) côté client. Nous les demandons en semaine 1, elles arrivent parfois en semaine 4. L’autre frein classique : le contenu. Les clients sous-estiment toujours le temps qu’exige une rédaction chinoise menée dans les règles, et non simplement traduite.",
      },
      {
        question: "À quelle fréquence aurons-nous de vos nouvelles pendant le projet ?",
        answer: "Un point hebdomadaire en visio, un compte rendu écrit chaque lundi, un canal WeChat (微信) pour le quotidien. Vous avez aussi accès à notre suivi de projet. Aucune boîte noire : vous savez en permanence où en est le travail.",
      },
      {
        question: "Avec qui parlons-nous dans votre équipe ?",
        answer: "Un chef de projet pilote votre compte du début à la fin. Il mobilise nos spécialistes (design, dev, SEO, contenu, hébergement) selon les besoins. Vous n’avez pas à réexpliquer votre activité à 5 interlocuteurs.",
      },
      {
        question: "Pouvons-nous être impliqués dans le design ?",
        answer: "Oui. Nous ouvrons l’accès Figma si votre équipe préfère commenter à la source. Certains clients pilotent dans le moindre détail, d’autres délèguent tout. Les deux fonctionnent.",
      },
      {
        question: "Que se passe-t-il si nous ratons une échéance de notre côté ?",
        answer: "Le projet se met en pause chez nous aussi. Nous ne facturons pas l’attente, nous reprenons quand vous êtes prêts. Passé 60 jours d’arrêt, nous revoyons le périmètre, car en Chine les prix bougent et la disponibilité de l’équipe aussi.",
      },
    ],
  },
  {
    title: 'Équipe, localisation et communication',
    shortTitle: 'Équipe',
    icon: 'people',
    items: [
      {
        question: "Où est basée votre équipe, concrètement ?",
        answer: "Le bureau principal est à Shanghai (上海). Quelques collaborateurs travaillent depuis Hangzhou (杭州) et Shenzhen (深圳). Notre présence physique en Chine pèse autant pour les dépôts ICP (互联网内容提供商) et la relation avec les hébergeurs que pour saisir, jour après jour, comment le web fonctionne ici.",
      },
      {
        question: "Avez-vous des collaborateurs non chinois ?",
        answer: "Oui. Le fondateur est européen, plusieurs membres de l’équipe sont bilingues, parfois trilingues. Les chefs de projet sur les comptes internationaux ont un anglais professionnel. En interne, l’équipe passe de l’anglais au chinois sans effort.",
      },
      {
        question: "Sur quel fuseau horaire travaillez-vous ? Comment ça marche pour des clients européens ou américains ?",
        answer: "Heure standard de Chine (中国标准时间, UTC+8). Avec l’Europe, les journées se recouvrent largement. Avec la côte est américaine, nous prenons les appels en début ou en fin de journée chinoise, l’équipe s’adapte. La côte ouest demande plus d’efforts, mais reste gérable pour les jalons.",
      },
      {
        question: "Pouvons-nous visiter votre bureau ?",
        answer: "Avec plaisir. Nous recevons régulièrement des clients à Shanghai (上海). Si vous passez en Chine, nous calons une séance de travail, un dîner, et nous vous présentons les bonnes personnes. Mettre un visage sur l’équipe change beaucoup.",
      },
      {
        question: "Vous déplacez-vous chez vos clients ?",
        answer: "À partir d’une certaine taille de projet, oui : le lancement sur site est compris. Sur les plus petits, le distanciel fonctionne très bien. Nous gérons depuis des années des sites de clients que nous n’avons jamais rencontrés.",
      },
      {
        question: "Dans quelles langues communiquez-vous ?",
        answer: "Anglais et français pour les clients internationaux. Mandarin (普通话) en interne et face aux fournisseurs chinois, aux hébergeurs et aux administrations. Si votre équipe compte des sinophones, nous panachons sans souci. WeChat (微信) fonctionne dans les deux sens.",
      },
      {
        question: "Utilisez-vous WeChat pour les échanges client ?",
        answer: "Oui, WeChat (微信) reste le canal le plus simple pour la plupart des clients. L’e-mail convient aussi, selon ce que votre équipe préfère. Nous nous calons sur vos outils, pas l’inverse.",
      },
    ],
  },
  {
    title: 'Contrats et risques',
    shortTitle: 'Contrats',
    icon: 'document',
    items: [
      {
        question: "Que couvre exactement le contrat ?",
        answer: "Périmètre, livrables, calendrier, échéancier de paiement, propriété intellectuelle, confidentialité, résiliation, conditions de support après mise en ligne. Un contrat de prestation classique, sous le droit que nous choisissons ensemble. La plupart des clients internationaux retiennent le droit hongkongais (香港) ou singapourien (新加坡). Tout se négocie.",
      },
      {
        question: "Qui est propriétaire du code et du contenu après le lancement ?",
        answer: "Vous. Transfert intégral : code source, fichiers de design, contenus, accès d’hébergement. Nous gardons seulement le droit d’évoquer le projet de façon anonyme dans notre portfolio, sauf si vous le refusez.",
      },
      {
        question: "Et si nous voulons partir en cours de projet ?",
        answer: "La résiliation est écrite noir sur blanc dans le contrat. Vous payez le travail livré à date, nous vous remettons l’ensemble dans un format exploitable. Aucun projet retenu en otage chez nous. Nous n’avons jamais eu à activer de clause de récupération : dans les faits, les clients ne partent pas en route.",
      },
      {
        question: "Signez-vous des NDA ?",
        answer: "Oui, avant le moindre partage de détails techniques ou commerciaux. Le NDA mutuel est la norme. Nous avons notre propre modèle si vous n’en avez pas.",
      },
    ],
  },
  {
    title: 'Choix technologiques',
    shortTitle: 'Tech',
    icon: 'chip',
    items: [
      {
        question: "WordPress ou Astro ? Comment choisir ?",
        answer: "Le choix dépend de votre équipe et de votre flux éditorial. WordPress quand des marketeurs mettent le contenu à jour chaque jour sans passer par un développeur. Astro quand la performance prime et qu’un support technique existe. Nous construisons avec les deux, et nous montons aussi des stacks hybrides : le site vitrine sur l’un, l’e-commerce sur l’autre.",
      },
      {
        question: "Pouvez-vous travailler avec notre stack actuelle ?",
        answer: "Non, vraiment pas. Nous ne tordons pas des stacks occidentales pour les faire tenir derrière le Grand Pare-feu. Nous avons vu trop de ces montages s’écrouler au bout de 6 mois. Notre conseil : des outils chinois, nativement opérationnels sur place. Aliyun (阿里云), Tencent Cloud (腾讯云), Baidu Tongji (百度统计), WeChat (微信), les plateformes IA chinoises. L’écosystème évolue, les règles évoluent. Maintenir votre stack mondiale en vie en Chine revient le plus souvent plus cher en rustines qu’une reconstruction propre.",
      },
      {
        question: "Pourquoi ne pas utiliser un constructeur de sites SaaS occidental pour la Chine ?",
        answer: "Parce qu’ils ne tiennent pas le choc ici. Presque tous sont partiellement bloqués ou lourdement bridés, et aucun n’offre d’hébergement compatible ICP sur le continent. Nous avons migré plusieurs clients depuis ces plateformes parce que leur site chinois était inutilisable. Nous construisons sur des outils qui marchent à l’intérieur du Pare-feu, point.",
      },
      {
        question: "Construisez-vous aussi des applications mobiles ?",
        answer: "Non. Nous restons sur le web, les mini-programmes WeChat (微信小程序) et les Baidu Smart Mini Programs (智能小程序). Pour les applications natives iOS et Android, nous passons par des partenaires spécialisés à Shenzhen (深圳).",
      },
      {
        question: "Pouvez-vous intégrer WeChat ?",
        answer: "Oui. Connexion WeChat (微信), partage, mini-programmes, paiement. Nous avons construit des dizaines d’intégrations WeChat et nous connaissons les pièges de l’API par cœur. Pareil pour Alipay (支付宝) et UnionPay (银联).",
      },
      {
        question: "Quid de l’IA et des chatbots sur notre site chinois ?",
        answer: "Nous intégrons les plateformes IA chinoises : DeepSeek (深度求索), Doubao (豆包), Kimi, Yuanbao (元宝) et Baidu AI (百度AI). Les outils IA occidentaux sont le plus souvent bloqués ou peu fiables depuis le continent. Pas d’option viable de ce côté. Si on vous a vendu autre chose, nous vous expliquons ce qui marche vraiment ici.",
      },
      {
        question: "Notre site WordPress sous Elementor fonctionnera-t-il en Chine ?",
        answer: "Sans doute pas en l’état. Le remettre d’aplomb reste possible, dans la plupart des cas. Nous coupons les dépendances Google, nous remplaçons les polices, nous reroutons les intégrations. La plupart des sites Elementor que nous récupérons tournent proprement derrière le Pare-feu en quelques semaines.",
      },
      {
        question: "Et les mises à jour automatiques de plugins depuis wordpress.org ?",
        answer: "Elles échouent ou expirent très souvent depuis la Chine. Nous routons les mises à jour via un proxy, ou nous planifions des fenêtres de mise à jour manuelle. Dans tous les cas, votre équipe n’a pas à s’en soucier.",
      },
    ],
  },
  {
    title: 'SEO, Baidu et IA générative',
    shortTitle: 'SEO et IA',
    icon: 'search',
    items: [
      {
        question: "Qu’est-ce qui change entre le SEO Baidu et celui de Google ?",
        answer: "Presque tout. Baidu (百度) favorise les sites hébergés sur le continent, juge la qualité des contenus chinois à sa façon, ouvre sa Search Resource Platform (百度搜索资源平台) pour la soumission, lit les balises meta autrement, et classe sur des signaux que Google ignore. Optimiser pour l’un n’optimise pas pour l’autre.",
      },
      {
        question: "Garantissez-vous des positions sur Baidu ?",
        answer: "Non, et méfiez-vous de qui s’y engage. Ce que nous garantissons : une mise en place SEO Baidu (百度) dans les règles de l’art, la soumission à la Baidu Search Resource Platform (百度搜索资源平台), l’optimisation technique et les données structurées. Le classement dépend ensuite de la concurrence, de la qualité du contenu et du temps. Un rapport mensuel vous montre ce qui évolue.",
      },
      {
        question: "C’est quoi le GEO Chine et en avons-nous besoin ?",
        answer: "Generative Engine Optimisation appliquée aux IA de recherche chinoises : DeepSeek (深度求索), Doubao (豆包), Kimi, Yuanbao (元宝), Baidu AI (百度AI). De plus en plus d’internautes chinois lancent leur recherche dans ces outils avant même Baidu (百度). Si vos concurrents sortent dans les réponses générées par l’IA et pas vous, c’est autant de trafic qui vous file sous le nez.",
      },
      {
        question: "Combien de temps avant de voir du trafic Baidu après le lancement ?",
        answer: "L’indexation démarre en général 2 à 4 semaines après la soumission à la Baidu Search Resource Platform (百度搜索资源平台), configuration SEO en place. La vraie dynamique de classement sur des mots-clés disputés réclame 3 à 6 mois au minimum. Toute promesse plus rapide tient de la vente forcée.",
      },
    ],
  },
  {
    title: 'Contenu et localisation',
    shortTitle: 'Contenu',
    icon: 'language',
    items: [
      {
        question: "Gérez-vous la traduction en chinois, ou faut-il que nous la fournissions ?",
        answer: "Les deux marchent. Nous travaillons avec des rédacteurs chinois, en interne et chez des partenaires de confiance, qui écrivent pour des audiences chinoises plutôt que de traduire. Si vous avez déjà un prestataire de traduction, nous partons de son rendu, mais nous signalerons les passages qui sentent la traduction plus que l’écriture native.",
      },
      {
        question: "Quelle est la différence entre traduction et localisation ?",
        answer: "La traduction restitue les mêmes mots en chinois. La localisation réécrit pour l’audience, la plateforme, les références culturelles et les requêtes que les internautes chinois tapent vraiment. Un site traduit sonne étranger. Un site localisé tient debout.",
      },
      {
        question: "Faut-il utiliser le chinois simplifié ou traditionnel ?",
        answer: "Chinois simplifié (简体中文) pour la Chine continentale. Chinois traditionnel (繁體中文) pour Hong Kong (香港) et Taïwan (台湾). Si vous visez les deux marchés, nous maintenons des versions distinctes. Mélanger les deux sur un même site, c’est saborder votre crédibilité.",
      },
    ],
  },
  {
    title: 'Performance et résultats',
    shortTitle: 'Performance',
    icon: 'spark',
    items: [
      {
        question: "Quels gains de performance pouvons-nous attendre ?",
        answer: "Les sites lents migrés vers Aliyun (阿里云) passent en général de 12-15 secondes de chargement à moins de 2. Les développements neufs descendent sous la seconde sur les connexions continentales. L’indexation Baidu (百度) s’amorce d’ordinaire 2 à 4 semaines après la mise en ligne, avec une configuration SEO soignée.",
      },
      {
        question: "Comment mesurez-vous le succès d’un projet en Chine ?",
        answer: "Tout dépend du projet. Site de génération de leads : soumissions de formulaires et objectifs de conversion Baidu Tongji (百度统计). E-commerce : chiffre d’affaires et taux de complétion du panier. Site de marque : temps passé sur la page, visites de retour, trafic organique. Les KPI se fixent au lancement, le reporting tombe chaque mois.",
      },
      {
        question: "Et si le site sous-performe après la mise en ligne ?",
        answer: "Nous posons un diagnostic. La cause est technique, éditoriale, ou tient à un décalage avec ce qu’attendent les internautes chinois. Les bugs, nous les corrigeons sans frais, c’est inclus. Les optimisations plus lourdes, les réécritures, le SEO en profondeur relèvent du forfait de maintenance.",
      },
    ],
  },
  {
    title: 'Travailler ensemble dans la durée',
    shortTitle: 'Long terme',
    icon: 'loop',
    items: [
      {
        question: "Quel est votre taux de rétention client ?",
        answer: "La plupart des clients restent en maintenance après la mise en ligne. Certains nous suivent depuis des années. Nous n’en faisons pas un argument marketing, mais le taux est élevé. L’hébergement chinois et le renouvellement des ICP (互联网内容提供商) imposent un support local continu : la relation se prolonge d’elle-même.",
      },
      {
        question: "Pouvons-nous mobiliser votre équipe pour du développement continu après le lancement ?",
        answer: "Oui. Nous proposons des heures de dev au forfait, de la production de contenu, du SEO, du GEO Chine, de la gestion d’hébergement. La plupart des clients optent pour un forfait mensuel qui couvre la maintenance et une enveloppe d’heures de dev pour ce qui surgit en cours de route.",
      },
      {
        question: "Et si nous voulons internaliser à terme ?",
        answer: "Aucun souci, nous accompagnons la transition. Nous avons formé des équipes clientes à reprendre les mises à jour de contenu, le dev léger et le SEO Baidu (百度). Nous livrons la documentation, organisons le transfert de connaissances, et restons joignables pour les sujets pointus. Sans drame.",
      },
      {
        question: "Proposez-vous des formations pour notre équipe interne ?",
        answer: "Oui. Formation WordPress, formation Baidu Tongji (百度统计), prise en main de la Baidu Search Resource Platform (百度搜索资源平台), workflow éditorial. À distance, ou en présentiel si vous êtes en Chine. Le format va de quelques heures à des ateliers de plusieurs jours, selon le besoin.",
      },
    ],
  },
  {
    title: 'Objections fréquentes et cas particuliers',
    shortTitle: 'Cas limites',
    icon: 'spark-question',
    items: [
      {
        question: "Nous travaillons déjà avec une agence digitale mondiale. Pourquoi en ajouter une ?",
        answer: "Parce qu’elle ne peut pas déposer d’ICP (互联网内容提供商), n’a pas de relations d’hébergement en Chine et ne connaît pas Baidu (百度) comme nous. La plupart de nos clients gardent leur agence mondiale pour la couche internationale et nous confient la couche chinoise. Nous collaborons avec ces agences en continu, sans batailles d’ego.",
      },
      {
        question: "Notre IT pense pouvoir gérer ça en interne. Que leur répondre ?",
        answer: "Dites-leur bon courage, et rappelez-nous dans 3 mois. À moitié pour rire. Une équipe IT interne peut très bien y arriver, à condition de passer un an à apprendre la réglementation, à nouer les relations d’hébergement et à apprivoiser la Baidu Search Resource Platform (百度搜索资源平台). Beaucoup réalisent vite que cette courbe d’apprentissage n’est pas la priorité de leur année.",
      },
      {
        question: "Et si notre société a des sensibilités politiques ou réglementaires ?",
        answer: "Nous avons accompagné des clients dans des secteurs régulés, de la santé aux technologies proches de la défense. Nous ne prenons pas tous les projets. Si le vôtre soulève des enjeux de conformité qui rendent une présence web en Chine risquée, nous vous le disons d’emblée et nous vous orientons d’abord vers un conseil juridique. Mieux vaut le savoir en semaine 1.",
      },
    ],
  },
];
