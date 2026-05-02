import type { FAQTopic } from './faq';

export const faqTopicsFr: FAQTopic[] = [
  {
    title: 'Pourquoi la Chine change la donne',
    shortTitle: 'Spécificités',
    icon: 'globe',
    items: [
      {
        question: "Pourquoi mon site actuel fonctionne mal en Chine ?",
        answer: "En deux mots : le Grand Pare-feu. Le filtrage national chinois bloque ou ralentit la plupart des services occidentaux sur lesquels votre site repose. Google Fonts, Google Analytics, reCAPTCHA, YouTube, les pixels Facebook, les grands CDN : tout est filtré ou bridé. Une page qui s’ouvre en 2 secondes à New York en met 15 à Shanghai, parfois ne s’affiche jamais. Sans une configuration pensée pour la Chine, votre site n’existe tout simplement pas pour qui consulte depuis le continent.",
      },
      {
        question: "Un simple CDN ne suffit pas à régler le problème de vitesse ?",
        answer: "Cloudflare, Akamai et les autres CDN occidentaux ne disposent pas de véritable couverture edge sur le continent sans licence ICP. Et même avec, les performances tiennent rarement la route. La bonne réponse passe par un hébergeur chinois : Alibaba Cloud (阿里云), Tencent Cloud (腾讯云) ou Huawei Cloud (华为云). Le reste relève du bricolage.",
      },
      {
        question: "L’hébergement à Hong Kong suffit-il pour le marché chinois ?",
        answer: "Mieux que l’Europe ou les États-Unis, oui. Mais le visiteur du continent voit toujours des temps de chargement plus longs, Baidu range votre site dans la catégorie « étranger » et le rétrograde, et le signal de confiance qu’apporte une présence proprement licenciée sur le continent vous échappe. Pour vendre sérieusement en Chine, c’est l’hébergement continental qui paye.",
      },
      {
        question: "Les internautes chinois naviguent-ils vraiment différemment ?",
        answer: "Oui, profondément. Le mobile à l’extrême, WeChat (微信) comme couche de partage par défaut, des QR codes à chaque coin de page, des longueurs de scroll qui dépaysent, des mises en page plus denses, des codes esthétiques qui n’ont rien à voir avec les nôtres. Copier un site occidental en chinois fonctionne rarement. Nous reconstruisons l’expérience à partir de la manière dont les internautes ici se servent vraiment d’Internet.",
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
        answer: "Si votre site rame à l’ouverture depuis Shanghai, n’apparaît jamais sur Baidu, ou si vos commerciaux entendent régulièrement « on ne vous trouve pas en ligne » dans la bouche des prospects chinois, la réponse est probablement oui. Avant tout engagement, nous lançons un audit gratuit. Compter une semaine. Vous repartez avec des chiffres réels, pas avec un argumentaire.",
      },
      {
        question: "Quel est le périmètre minimum viable pour entrer sur le marché chinois en ligne ?",
        answer: "Une landing bilingue sur hébergement chinois sous licence ICP (互联网内容提供商), Baidu Tongji (百度统计) en place et une expérience pensée pour Baidu (百度). C’est le minimum vital. Nous avons lancé des entreprises sur ce socle, puis nous avons fait grandir l’édifice à mesure que les données de trafic remontaient.",
      },
      {
        question: "Pouvez-vous nous aider à savoir si la Chine vaut le coup pour notre activité ?",
        answer: "Ce n’est pas notre cœur de métier. Mais quand l’investissement n’a aucune chance de tenir la route, nous le disons franchement. Nous avons refusé des projets parce que les chiffres du marché ne justifiaient pas la dépense. Pour un vrai conseil en pénétration de marché, nous vous orientons vers les cabinets shanghaïens qui font ce métier au quotidien.",
      },
      {
        question: "Proposez-vous un atelier de découverte avant le projet ?",
        answer: "Oui, sous deux formats. Une demi-journée à distance pour l’audit technique et la stratégie, ou un atelier de 2 jours à Shanghai (上海) pour les projets plus lourds. Les deux se facturent à part de la mission principale.",
      },
      {
        question: "De quelles informations avez-vous besoin pour un vrai devis ?",
        answer: "L’URL de votre site actuel, les données de trafic si vous en disposez, vos objectifs pour la Chine (leads, ventes, présence de marque, ou les trois à la fois), le statut éventuel d’une entité chinoise, et idéalement un appel rapide. Avec ces 4 éléments, nous sortons un chiffre précis, pas une fourchette.",
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
        answer: "Tout dépend du périmètre. À une extrémité, les projets de migration. À l’autre, les développements sur mesure complets avec WooCommerce ou une plateforme membre. Après un appel de découverte, nous envoyons une proposition au forfait. Aucune facturation horaire en cours de projet, aucune mauvaise surprise au milieu du gué.",
      },
      {
        question: "Comment vos tarifs se comparent-ils aux agences occidentales ?",
        answer: "Très franchement, ils sont comparables. Les salaires de Shanghai (上海) dépassent ceux de Paris ou de Berlin, notre équipe joue dans la cour des seniors, et notre travail ne sort pas d’un template. À budget équivalent, vous gagnez une équipe basée sur le continent qui a déposé des Bei’an (备案) en vrai, qui pilote des comptes Baidu Search Resource Platform (百度搜索资源平台) au quotidien, et qui sait quel commercial chez Aliyun (阿里云) répond au téléphone. La valeur est là, pas dans le rabais.",
      },
      {
        question: "Proposez-vous des paiements échelonnés ?",
        answer: "Sur les gros projets, oui. Le découpage habituel : kickoff, mi-parcours, mise en ligne. Sur les missions plus lourdes, nous passons à des jalons mensuels. Nous ne travaillons pas contre des parts au capital.",
      },
      {
        question: "Qu’est-ce qui n’est PAS compris dans le prix du projet ?",
        answer: "Les frais administratifs ICP (faibles, mais à part), la rédaction professionnelle en chinois si vous en voulez, les licences de banques d’images, les licences de plugins payants si vous tenez à des extensions commerciales, et les services tiers comme l’hébergement, qui vous est facturé directement. Le détail figure noir sur blanc dans la proposition.",
      },
      {
        question: "Y a-t-il des coûts cachés à connaître ?",
        answer: "Deux qui prennent les clients de court. Premièrement, le renouvellement administratif de l’ICP (互联网内容提供商) tous les 2 ou 3 ans : faible, mais non nul. Deuxièmement, le SEO Baidu (百度) en continu : pour vraiment monter sur les requêtes, il faut un travail mensuel, et non un coup de mise en ligne. Nous le mettons sur la table dès l’appel de découverte, pour que la discussion budgétaire reste claire.",
      },
      {
        question: "Facturez-vous les propositions ?",
        answer: "Non. La proposition et l’audit sont gratuits. Nous écrivons des cadrages détaillés parce que les deux côtés ont besoin de savoir exactement ce qui se construit. Si vous prenez notre proposition pour la faire chiffrer ailleurs, c’est arrivé : nous ne facturons toujours pas.",
      },
      {
        question: "Pouvons-nous commencer petit et grandir ensuite ?",
        answer: "Oui, c’est même la voie que nous conseillons souvent. La phase 1 met en ligne l’essentiel. La phase 2 ajoute le SEO Baidu (百度) en profondeur, l’optimisation GEO Chine, la production de contenu. La phase 3 ouvre l’e-commerce ou les fonctions plus poussées. Ce découpage lisse la dépense et laisse le temps de valider avant de passer à l’échelle.",
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
        answer: "Oui, et il n’existe aucun raccourci. ICP (互联网内容提供商) veut dire Internet Content Provider. C’est l’autorisation délivrée par le Ministère de l’Industrie et des Technologies de l’Information (工业和信息化部), exigée par la loi pour tout site hébergé sur le continent. Deux versions comptent : l’ICP Bei’an (备案) pour les sites informationnels, et l’ICP Jing Ying (经营许可证) pour les sites qui encaissent. Nous prenons en main le dossier de bout en bout.",
      },
      {
        question: "Et si nous n’avons pas encore d’entité chinoise ?",
        answer: "L’ICP (互联网内容提供商) devient alors plus compliqué. Deux voies : monter une WFOE (外商独资企业), ou s’adosser à une entité chinoise capable de parrainer le dépôt. Nous avons accompagné des clients sur les deux. Sans entité, et sans envie d’en monter une, l’hébergement continental ferme la porte : Hong Kong (香港) reste alors un plan B sérieux.",
      },
      {
        question: "Combien de temps prend réellement le dépôt ICP ?",
        answer: "Le Bei’an (备案) tourne en général à 2-4 semaines. Le Jing Ying (经营许可证) demande 2 à 3 mois, parfois davantage. La grande variable : la complétude de votre dossier. Nous vous remettons une checklist en semaine 1 pour que la partie lente ne ralentisse pas l’ensemble.",
      },
      {
        question: "Qu’en est-il de la résidence des données et de la conformité PIPL ?",
        answer: "Dans la plupart des cas, les données chinoises doivent rester en Chine. Nous concevons l’architecture en tenant compte de cette contrainte dès le premier jour. Si votre projet manipule des données personnelles, nous décortiquons avec vous les conséquences de la PIPL (个人信息保护法). Nous avons croisé des dizaines de cas avec des conseils juridiques, ce qui nous donne une bonne lecture des zones grises.",
      },
      {
        question: "Que se passe-t-il si notre dépôt ICP est rejeté ?",
        answer: "Cela arrive, en général pour des pièces manquantes. Nous redéposons sans frais. Les seules situations sans issue concernent les sociétés dont la structure même ne se qualifie pas, et nous le voyons venir en semaine 1, jamais en semaine 4.",
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
        answer: "Notre record : 3 semaines pour une landing, sur une licence ICP (互联网内容提供商) déjà en place. Plus réaliste pour un vrai site : 8 à 12 semaines, dépôt ICP inclus. S’il faut tout monter depuis zéro et que l’entité chinoise reste à créer, comptez 4 à 6 semaines supplémentaires sur ce volet.",
      },
      {
        question: "À quoi ressemble le calendrier d’un projet type ?",
        answer: "Semaines 1-2 : audit et découverte. Semaines 3-6 : dépôt ICP (互联网内容提供商) en parallèle du design et de la mise en place technique. Semaines 7-10 : développement, intégration des contenus, tests. Semaines 11-12 : staging, corrections, mise en ligne. Puis la maintenance prend la relève. Le Gantt complet figure dans la proposition.",
      },
      {
        question: "Qu’est-ce qui ralentit le plus souvent les projets ?",
        answer: "Les pièces ICP (互联网内容提供商) côté client. Nous les demandons en semaine 1, nous les recevons parfois en semaine 4. L’autre frein habituel : le contenu. Les clients sous-estiment systématiquement le temps que demande une rédaction chinoise faite dans les règles, et non simplement traduite.",
      },
      {
        question: "À quelle fréquence aurons-nous de vos nouvelles pendant le projet ?",
        answer: "Un point hebdomadaire en visio, un compte rendu écrit chaque lundi, un canal WeChat (微信) pour les échanges du quotidien. Vous accédez aussi à notre suivi de projet. Aucune boîte noire : vous savez exactement où en est le travail.",
      },
      {
        question: "Avec qui parlons-nous dans votre équipe ?",
        answer: "Un chef de projet pilote votre compte de bout en bout. Il sollicite nos spécialistes (design, dev, SEO, contenu, hébergement) selon les besoins. Vous n’avez pas à raconter votre activité à 5 interlocuteurs différents.",
      },
      {
        question: "Pouvons-nous être impliqués dans le design ?",
        answer: "Oui. Nous ouvrons l’accès Figma si votre équipe préfère commenter à la source. Certains clients pilotent dans le détail, d’autres délèguent entièrement. Les deux modes fonctionnent.",
      },
      {
        question: "Que se passe-t-il si nous ratons une échéance de notre côté ?",
        answer: "Le projet se met en pause de notre côté également. Nous ne facturons pas l’attente, nous reprenons quand vous êtes prêts. Au-delà de 60 jours d’arrêt, nous revoyons le périmètre, parce que les prix bougent en Chine et la disponibilité de l’équipe aussi.",
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
        answer: "Le bureau principal se trouve à Shanghai (上海). Quelques collaborateurs travaillent depuis Hangzhou (杭州) et Shenzhen (深圳). Notre présence physique en Chine compte autant pour les dépôts ICP (互联网内容提供商) et la relation avec les hébergeurs, que pour saisir au jour le jour comment Internet fonctionne ici.",
      },
      {
        question: "Avez-vous des collaborateurs non chinois ?",
        answer: "Oui. Le fondateur est européen, plusieurs membres de l’équipe sont bilingues, voire trilingues. Les chefs de projet en charge des comptes internationaux maîtrisent l’anglais au niveau professionnel. En interne, l’équipe alterne anglais et chinois sans difficulté.",
      },
      {
        question: "Sur quel fuseau horaire travaillez-vous ? Comment ça marche pour des clients européens ou américains ?",
        answer: "Heure standard de Chine (中国标准时间, UTC+8). Avec l’Europe, la journée se chevauche largement. Avec la côte est des États-Unis, nous prenons les appels en début ou en fin de journée chinoise, l’équipe joue le jeu. La côte ouest demande plus d’effort, mais reste gérable pour les jalons.",
      },
      {
        question: "Pouvons-nous visiter votre bureau ?",
        answer: "Avec grand plaisir. Nous accueillons régulièrement des clients à Shanghai (上海). Si vous passez en Chine, nous bloquons une session de travail, un dîner, et nous vous présentons les bonnes personnes. Mettre un visage sur l’équipe change beaucoup de choses.",
      },
      {
        question: "Vous déplacez-vous chez vos clients ?",
        answer: "Au-delà d’une certaine taille de projet, oui : le kickoff sur site est compris. Sur les plus petits projets, le travail à distance fonctionne très bien. Nous gérons depuis des années les sites de clients que nous n’avons jamais croisés en personne.",
      },
      {
        question: "Dans quelles langues communiquez-vous ?",
        answer: "Anglais et français pour les clients internationaux. Mandarin (普通话) en interne et face aux fournisseurs chinois, aux hébergeurs et aux administrations. Si votre équipe compte des sinophones, nous panachons sans difficulté. WeChat (微信) fonctionne dans les deux sens.",
      },
      {
        question: "Utilisez-vous WeChat pour les échanges client ?",
        answer: "Oui, WeChat (微信) reste le canal le plus simple pour la plupart des clients. L’e-mail fait l’affaire aussi, selon ce que votre équipe préfère. Nous nous calons sur vos outils, et non l’inverse.",
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
        answer: "Périmètre, livrables, calendrier, échéancier de paiement, propriété intellectuelle, confidentialité, clauses de résiliation, conditions de support après la mise en ligne. Un contrat de prestation de services standard, sous le droit que nous choisissons ensemble. La majorité des clients internationaux retiennent le droit de Hong Kong (香港) ou de Singapour (新加坡). Tout reste négociable.",
      },
      {
        question: "Qui est propriétaire du code et du contenu après le lancement ?",
        answer: "Vous. Transfert intégral de tous les actifs : code source, fichiers de design, contenus, identifiants d’hébergement. Nous conservons le droit d’évoquer le projet de manière anonyme dans notre portfolio, sauf demande explicite de votre part.",
      },
      {
        question: "Et si nous voulons partir en cours de projet ?",
        answer: "Les clauses de résiliation sont noir sur blanc dans le contrat. Vous réglez le travail réalisé à date, nous vous livrons l’ensemble du produit dans un format exploitable. Aucun projet pris en otage de notre côté. Nous n’avons jamais activé de clause de récupération : très honnêtement, les clients ne partent pas en cours de route.",
      },
      {
        question: "Signez-vous des NDA ?",
        answer: "Oui, avant le moindre partage de détails techniques ou commerciaux. Les NDA mutuels sont la norme. Nous disposons de notre propre modèle si vous n’en avez pas.",
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
        answer: "Le choix dépend de votre équipe et de votre flux éditorial. WordPress quand des marketeurs doivent mettre le contenu à jour chaque jour, sans aide d’un développeur. Astro quand la performance est en première ligne et qu’un support technique est en place. Nous construisons avec les deux, et nous savons aussi monter des stacks hybrides : le site marketing sur l’un, l’e-commerce sur l’autre.",
      },
      {
        question: "Pouvez-vous travailler avec notre stack actuelle ?",
        answer: "Très franchement, non. Nous n’essayons pas de tordre des stacks occidentales pour les faire tenir derrière le Grand Pare-feu. Nous avons vu trop de ces projets s’effondrer au bout de 6 mois. Notre conseil : des outils chinois qui marchent nativement sur place. Aliyun (阿里云), Tencent Cloud (腾讯云), Baidu Tongji (百度统计), WeChat (微信), les plateformes IA chinoises. L’écosystème change, les règles changent. Garder votre stack mondiale en vie en Chine coûte le plus souvent plus cher en bricolages qu’une reconstruction propre.",
      },
      {
        question: "Pourquoi ne pas utiliser un constructeur de sites SaaS occidental pour la Chine ?",
        answer: "Parce qu’ils ne tiennent pas la route ici. La plupart sont partiellement bloqués ou sévèrement bridés, et aucun ne dispose d’hébergement compatible ICP sur le continent. Nous avons migré plusieurs clients depuis ces plateformes parce que leurs sites chinois étaient inutilisables. Nous construisons sur des outils qui fonctionnent à l’intérieur du Pare-feu, c’est tout.",
      },
      {
        question: "Construisez-vous aussi des applications mobiles ?",
        answer: "Non. Nous restons centrés sur le web, les mini-programmes WeChat (微信小程序) et les Baidu Smart Mini Programs (智能小程序). Pour les applications natives iOS et Android, nous passons par des partenaires spécialisés à Shenzhen (深圳).",
      },
      {
        question: "Pouvez-vous intégrer WeChat ?",
        answer: "Oui. Connexion WeChat (微信), partage, mini-programmes, paiement. Nous avons construit des dizaines d’intégrations WeChat et nous connaissons par cœur les pièges de l’API. Idem pour Alipay (支付宝) et UnionPay (银联).",
      },
      {
        question: "Quid de l’IA et des chatbots sur notre site chinois ?",
        answer: "Nous intégrons les plateformes IA chinoises : DeepSeek (深度求索), Doubao (豆包), Kimi, Yuanbao (元宝) et Baidu AI (百度AI). Les outils IA occidentaux sont, la plupart du temps, bloqués ou peu fiables depuis le continent. Aucune option viable de ce côté-là. Si on vous a vendu autre chose, nous vous expliquons ce qui fonctionne réellement ici.",
      },
      {
        question: "Notre site WordPress sous Elementor fonctionnera-t-il en Chine ?",
        answer: "Sans doute pas en l’état. Le rendre opérationnel reste possible, dans la majorité des cas. Nous coupons les dépendances Google, nous remplaçons les polices, nous reroutons les intégrations. La plupart des sites Elementor que nous récupérons tournent proprement derrière le Pare-feu en quelques semaines.",
      },
      {
        question: "Et les mises à jour automatiques de plugins depuis wordpress.org ?",
        answer: "Elles échouent ou tombent en timeout très souvent depuis l’intérieur de la Chine. Nous mettons en place un routage des mises à jour via un proxy, ou des fenêtres de mises à jour manuelles planifiées. Dans tous les cas, votre équipe n’a pas à s’en préoccuper.",
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
        answer: "Quasiment tout. Baidu (百度) privilégie les sites hébergés sur le continent, juge la qualité des contenus chinois selon ses propres critères, ouvre sa Search Resource Platform (百度搜索资源平台) pour la soumission, traite les balises meta différemment, et classe selon des signaux que Google ignore. Optimiser pour l’un n’optimise pas pour l’autre.",
      },
      {
        question: "Garantissez-vous des positions sur Baidu ?",
        answer: "Non, et méfiez-vous de ceux qui s’y engagent. Ce que nous garantissons : une mise en place SEO Baidu (百度) dans les règles de l’art, la soumission à la Baidu Search Resource Platform (百度搜索资源平台), l’optimisation technique et les données structurées. Le positionnement dépend ensuite de la concurrence, de la qualité du contenu et du temps. Un rapport mensuel vous montre ce qui bouge.",
      },
      {
        question: "C’est quoi le GEO Chine et en avons-nous besoin ?",
        answer: "Generative Engine Optimisation, appliquée aux IA de recherche chinoises : DeepSeek (深度求索), Doubao (豆包), Kimi, Yuanbao (元宝), Baidu AI (百度AI). De plus en plus d’internautes chinois ouvrent leur recherche dans ces outils avant même Baidu (百度). Si vos concurrents apparaissent dans les réponses générées par l’IA et que vous, non, c’est du trafic qui passe devant votre porte.",
      },
      {
        question: "Combien de temps avant de voir du trafic Baidu après le lancement ?",
        answer: "L’indexation s’enclenche en général 2 à 4 semaines après la soumission à la Baidu Search Resource Platform (百度搜索资源平台), avec une configuration SEO en place. La vraie dynamique de positionnement sur des mots-clés concurrentiels demande 3 à 6 mois au minimum. Toute promesse plus rapide relève de la vente forcée.",
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
        answer: "Les deux marchent. Nous travaillons avec des rédacteurs chinois en interne et chez des partenaires de confiance, qui écrivent pour des audiences chinoises au lieu de se contenter de traduire. Si vous avez déjà un prestataire de traduction, nous partons de son rendu, mais nous signalerons les passages qui sentent la traduction plus que la rédaction native.",
      },
      {
        question: "Quelle est la différence entre traduction et localisation ?",
        answer: "La traduction restitue les mêmes mots en chinois. La localisation réécrit pour l’audience, la plateforme, les références culturelles, et les requêtes que les internautes chinois tapent vraiment. Un site traduit sonne étranger. Un site localisé tient la route.",
      },
      {
        question: "Faut-il utiliser le chinois simplifié ou traditionnel ?",
        answer: "Chinois simplifié (简体中文) pour la Chine continentale. Chinois traditionnel (繁體中文) pour Hong Kong (香港) et Taïwan (台湾). Si vous visez les deux marchés, nous tenons des versions distinctes. Mélanger les deux sur un seul site, c’est saborder votre crédibilité.",
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
        answer: "Les sites lents migrés vers Aliyun (阿里云) passent typiquement de 12-15 secondes de chargement à moins de 2 secondes. Les développements neufs tombent sous la seconde sur les connexions continentales. L’indexation Baidu (百度) démarre en général 2 à 4 semaines après la mise en ligne, avec une configuration SEO propre.",
      },
      {
        question: "Comment mesurez-vous le succès d’un projet en Chine ?",
        answer: "Tout dépend du projet. Pour un site de génération de leads : les soumissions de formulaires et les objectifs de conversion Baidu Tongji (百度统计). Pour l’e-commerce : le chiffre d’affaires et le taux de complétion du panier. Pour un site de marque : le temps passé sur la page, les visites de retour, le trafic organique. Les KPI se valident au kickoff, et le reporting tombe chaque mois.",
      },
      {
        question: "Et si le site sous-performe après la mise en ligne ?",
        answer: "Nous posons un diagnostic. La cause est technique, éditoriale, ou tient à un décalage avec ce qu’attendent les internautes chinois. Les bugs sont corrigés sans frais, c’est compris. Les optimisations plus profondes, les réécritures, le SEO en profondeur passent par le forfait de maintenance.",
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
        answer: "La plupart des clients restent avec nous en maintenance après la mise en ligne. Certains nous accompagnent depuis de nombreuses années. Nous ne suivons pas ce chiffre comme une métrique marketing, mais il est élevé. L’hébergement chinois et le renouvellement des ICP (互联网内容提供商) imposent un support local continu : la relation se prolonge d’elle-même.",
      },
      {
        question: "Pouvons-nous mobiliser votre équipe pour du développement continu après le lancement ?",
        answer: "Oui. Nous proposons des heures de dev en forfait, de la production de contenu, du SEO, du GEO Chine, de la gestion d’hébergement. La plupart des clients atterrissent sur un forfait mensuel qui couvre la maintenance et une enveloppe d’heures de dev pour ce qui se présente en cours de route.",
      },
      {
        question: "Et si nous voulons internaliser à terme ?",
        answer: "Aucun problème, nous accompagnons la transition. Nous avons formé des équipes clientes à reprendre la main sur les mises à jour de contenu, le dev léger et le SEO Baidu (百度). Nous remettons la documentation, organisons le transfert de connaissances, et restons joignables pour les sujets pointus. Sans drame.",
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
        answer: "Parce qu’elle ne peut pas déposer d’ICP (互联网内容提供商), n’a pas de relations d’hébergement en Chine et ne connaît pas Baidu (百度) comme nous. La plupart de nos clients gardent leur agence mondiale pour la couche internationale, et nous mobilisent sur la couche spécifique à la Chine. Nous collaborons avec des agences mondiales en continu, sans frictions d’ego.",
      },
      {
        question: "Notre IT pense pouvoir gérer ça en interne. Que leur répondre ?",
        answer: "Dites-leur que nous leur souhaitons bon courage, et rappelez-nous dans 3 mois. À moitié pour rire. Une équipe IT interne peut tout à fait le faire, à condition de consacrer un an à apprendre la réglementation, à nouer les relations d’hébergement et à dompter la Baidu Search Resource Platform (百度搜索资源平台). La plupart des équipes internes se rendent vite compte que cette courbe d’apprentissage n’est pas la priorité de leur année.",
      },
      {
        question: "Et si notre société a des sensibilités politiques ou réglementaires ?",
        answer: "Nous avons accompagné des clients dans des secteurs régulés, de la santé aux technologies proches de la défense. Nous ne prenons pas tous les projets. Si votre secteur soulève des enjeux de conformité qui rendent une présence web en Chine risquée, nous vous le disons d’emblée, et nous vous orientons vers un conseil juridique en priorité. Mieux vaut le savoir en semaine 1.",
      },
    ],
  },
];
