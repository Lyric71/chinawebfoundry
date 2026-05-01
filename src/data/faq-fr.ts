import type { FAQTopic } from './faq';

export const faqTopicsFr: FAQTopic[] = [
  {
    title: 'Pourquoi la Chine change la donne',
    shortTitle: 'Spécificités',
    icon: 'globe',
    items: [
      {
        question: "Pourquoi mon site actuel fonctionne mal en Chine ?",
        answer: "Le Grand Pare-feu, en deux mots. Le système national de filtrage chinois bloque ou ralentit la plupart des services occidentaux dont dépend votre site. Google Fonts, Google Analytics, reCAPTCHA, YouTube, les pixels Facebook, les grands fournisseurs de CDN. Tout est bloqué ou bridé. Une page qui charge en 2 secondes à New York peut prendre 15 secondes à Shanghai. Parfois elle ne s'affiche jamais. Sans configuration pensée pour la Chine, votre site reste invisible pour quiconque navigue depuis le continent.",
      },
      {
        question: "Un simple CDN ne suffit pas à régler le problème de vitesse ?",
        answer: "Les CDN occidentaux comme Cloudflare et Akamai n'ont pas de présence edge correcte à l'intérieur de la Chine sans licence ICP, et même avec, les performances restent inégales. La vraie réponse, c'est l'hébergement chez un fournisseur chinois : Alibaba Cloud (阿里云), Tencent Cloud (腾讯云) ou Huawei Cloud (华为云). Tout le reste relève du contournement.",
      },
      {
        question: "L'hébergement à Hong Kong suffit-il pour le marché chinois ?",
        answer: "Mieux que les États-Unis ou l'Europe, oui. Mais les internautes du continent voient toujours des temps de chargement plus longs, Baidu considère le site comme étranger et le déclasse, et vous perdez le signal de confiance qu'apporte une présence proprement licenciée sur le continent. Pour faire des affaires sérieuses en Chine, l'hébergement continental reste la réponse.",
      },
      {
        question: "Les internautes chinois naviguent-ils vraiment différemment ?",
        answer: "Oui, fondamentalement. Mobile à l'extrême, WeChat (微信) comme couche de partage par défaut, des QR codes partout, des pages plus longues à scroller, des mises en page plus denses, des conventions esthétiques sans rapport avec les nôtres. Copier-coller un site occidental en chinois fonctionne rarement. Nous reconstruisons l'expérience pour la manière dont les gens utilisent réellement Internet ici.",
      },
    ],
  },
  {
    title: 'Cadrage et découverte du projet',
    shortTitle: 'Cadrage',
    icon: 'compass',
    items: [
      {
        question: "Comment savoir si nous avons vraiment besoin d'un site spécifique pour la Chine ?",
        answer: "Si votre site actuel met une éternité à charger depuis Shanghai, n'apparaît nulle part sur Baidu, ou si votre équipe commerciale entend régulièrement « impossible de vous trouver en ligne » de la part de prospects chinois, vous en avez probablement besoin. Nous réalisons un audit gratuit avant tout engagement. Une semaine environ. Vous repartez avec des chiffres réels, pas un argumentaire de vente.",
      },
      {
        question: "Quel est le périmètre minimum viable pour entrer sur le marché chinois en ligne ?",
        answer: "Une landing page bilingue sur hébergement chinois avec une licence ICP (互联网内容提供商), Baidu Tongji (百度统计) installé et une expérience optimisée pour Baidu (百度). C'est le plancher. Nous avons lancé des entreprises sur ce socle puis fait grandir les choses une fois les données de trafic disponibles.",
      },
      {
        question: "Pouvez-vous nous aider à savoir si la Chine vaut le coup pour notre activité ?",
        answer: "Ce n'est pas notre cœur de métier, mais nous vous le dirons honnêtement quand ça ne le vaut pas. Nous avons refusé des projets quand les données du marché ne justifiaient pas la dépense. Si vous avez besoin de vrai conseil en pénétration de marché, nous pouvons vous mettre en relation avec des cabinets shanghaïens qui font ce travail.",
      },
      {
        question: "Proposez-vous un atelier de découverte avant le projet ?",
        answer: "Oui. Deux formats. Une demi-journée à distance pour l'audit technique et la stratégie, ou un atelier de 2 jours à Shanghai (上海) pour les projets plus lourds. Les deux sont facturés séparément de la mission principale.",
      },
      {
        question: "De quelles informations avez-vous besoin pour un vrai devis ?",
        answer: "L'URL de votre site actuel, vos données de trafic si vous en avez, vos objectifs pour la Chine (leads, ventes, présence de marque, ou les trois), le statut éventuel d'une entité chinoise, et idéalement un appel rapide. Avec ces 4 éléments, nous pouvons sortir un chiffre précis, pas une fourchette.",
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
        answer: "Cela dépend du périmètre. Les projets de migration sont à un bout, les développements sur mesure complets avec WooCommerce ou plateforme membre à l'autre. Nous envoyons des propositions au forfait après un appel de découverte. Pas de facturation horaire sur les projets, pas de mauvaise surprise en cours de route.",
      },
      {
        question: "Comment vos tarifs se comparent-ils aux agences occidentales ?",
        answer: "Honnêtement, ils sont comparables. Les salaires de Shanghai (上海) sont plus élevés qu'à Paris ou Berlin, notre équipe est senior, et notre travail ne se templatise pas. Pour ce budget, vous obtenez une équipe basée en Chine continentale qui a vraiment déposé des dossiers Bei'an (备案), géré des comptes Baidu Search Resource Platform (百度搜索资源平台) et qui sait quel commercial chez Aliyun (阿里云) rappelle. Voilà la valeur réelle, pas un rabais.",
      },
      {
        question: "Proposez-vous des paiements échelonnés ?",
        answer: "Pour les gros projets, oui. La répartition standard se fait au lancement, à mi-parcours et à la mise en ligne. Pour les missions plus lourdes, nous pouvons passer à des jalons mensuels. Nous ne travaillons pas contre des parts.",
      },
      {
        question: "Qu'est-ce qui n'est PAS compris dans le prix du projet ?",
        answer: "Les frais administratifs ICP (modestes mais à part), la rédaction professionnelle en chinois si vous en voulez, les licences de banques d'images, les licences de plugins payants si vous voulez des extensions commerciales, et les services tiers comme l'hébergement qui vous est facturé directement. Tout cela est détaillé dans la proposition.",
      },
      {
        question: "Y a-t-il des coûts cachés à connaître ?",
        answer: "Deux qui surprennent. D'abord, le renouvellement administratif de l'ICP (互联网内容提供商) tous les 2 ou 3 ans. Petit, mais non nul. Ensuite, le SEO Baidu (百度) en continu : si vous voulez vraiment vous positionner, il faut un travail mensuel, pas un lancement unique. Nous l'annonçons d'emblée pour que la conversation budgétaire reste honnête.",
      },
      {
        question: "Facturez-vous les propositions ?",
        answer: "Non. La proposition et l'audit sont gratuits. Nous rédigeons des cadrages détaillés parce que nous voulons que les deux parties sachent exactement ce qui est construit. Si vous prenez notre proposition pour la faire chiffrer ailleurs, eh bien, c'est arrivé. Nous ne facturons toujours pas.",
      },
      {
        question: "Pouvons-nous commencer petit et grandir ensuite ?",
        answer: "Oui, et c'est même souvent ce que nous recommandons. La phase 1 lance l'essentiel. La phase 2 ajoute la profondeur SEO Baidu (百度), l'optimisation GEO Chine, la production de contenu. La phase 3, c'est le e-commerce ou les fonctionnalités avancées. Découper ainsi étale la dépense et permet de valider avant de passer à l'échelle.",
      },
    ],
  },
  {
    title: 'Licence ICP et cadre légal',
    shortTitle: 'ICP et droit',
    icon: 'shield',
    items: [
      {
        question: "C'est quoi exactement la licence ICP ? En ai-je vraiment besoin ?",
        answer: "Oui, et il n'y a pas de raccourci. ICP (互联网内容提供商) signifie Internet Content Provider. C'est une autorisation du Ministère de l'Industrie et des Technologies de l'Information (工业和信息化部), exigée par la loi pour tout site hébergé sur un serveur en Chine continentale. Deux types comptent : l'ICP Bei'an (备案) pour les sites informationnels, et l'ICP Jing Ying (经营许可证) pour les sites qui traitent des transactions. Nous gérons la demande de bout en bout.",
      },
      {
        question: "Et si nous n'avons pas encore d'entité chinoise ?",
        answer: "Alors la licence ICP (互联网内容提供商) se complique. Soit vous montez une WFOE (外商独资企业), soit vous vous associez à une entité chinoise capable de parrainer le dépôt. Nous avons accompagné des clients sur les 2 voies. Si vous n'avez pas d'entité et n'en voulez pas, l'hébergement en Chine continentale n'est pas une option, mais Hong Kong (香港) reste un repli viable.",
      },
      {
        question: "Combien de temps prend réellement le dépôt ICP ?",
        answer: "Le Bei'an (备案) prend en général 2 à 4 semaines. Le Jing Ying (经营许可证) prend 2 à 3 mois, parfois plus. La variable, c'est la complétude de votre dossier. Nous vous remettons une checklist en semaine 1 pour que la partie lente ne nous ralentisse pas.",
      },
      {
        question: "Qu'en est-il de la résidence des données et de la conformité PIPL ?",
        answer: "Les données chinoises doivent rester en Chine pour la plupart des cas. Nous concevons l'architecture avec ça en tête dès le 1er jour. Si votre projet touche à des données personnelles, nous vous expliquons les implications de la PIPL (个人信息保护法). Nous avons travaillé avec des conseils juridiques sur des dizaines de cas, donc nous savons où sont les zones grises.",
      },
      {
        question: "Que se passe-t-il si notre dépôt ICP est rejeté ?",
        answer: "Cela arrive, en général pour des raisons de pièces manquantes. Nous redéposons sans frais supplémentaires. Les seuls cas que nous ne pouvons pas régler, ce sont quand la structure même de la société ne se qualifie pas, ce que nous repérons en semaine 1, pas en semaine 4.",
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
        answer: "Notre record, c'est 3 semaines pour une landing page avec une licence ICP (互联网内容提供商) déjà existante. Réaliste pour un vrai site, c'est 8 à 12 semaines en incluant le dépôt ICP. S'il faut tout monter depuis zéro et que vous n'avez pas d'entité chinoise, comptez 4 à 6 semaines de plus pour ce volet.",
      },
      {
        question: "À quoi ressemble le calendrier d'un projet type ?",
        answer: "Semaines 1 à 2 : audit et découverte. Semaines 3 à 6 : dépôt ICP (互联网内容提供商) en parallèle du design et de la mise en place technique. Semaines 7 à 10 : développement, intégration des contenus et tests. Semaines 11 à 12 : staging, corrections, mise en ligne. Puis la maintenance prend le relais. Nous partageons un Gantt dans la proposition.",
      },
      {
        question: "Qu'est-ce qui ralentit le plus souvent les projets ?",
        answer: "La paperasse ICP (互联网内容提供商) côté client. Nous demandons les documents en semaine 1 et nous les recevons parfois en semaine 4. L'autre gros sujet, c'est le contenu. Les gens sous-estiment le temps que prend une rédaction chinoise faite proprement, pas juste traduite.",
      },
      {
        question: "À quelle fréquence aurons-nous de vos nouvelles pendant le projet ?",
        answer: "Point hebdo en visio, compte rendu écrit chaque lundi, canal WeChat (微信) pour les échanges du quotidien. Plus l'accès à notre suivi de projet. Vous savez exactement ce qui se passe, sans boîte noire.",
      },
      {
        question: "Avec qui parlons-nous dans votre équipe ?",
        answer: "Un chef de projet qui pilote votre compte de A à Z. Il sollicite nos spécialistes (design, dev, SEO, contenu, hébergement) au besoin. Vous n'expliquez pas votre activité à 5 interlocuteurs différents.",
      },
      {
        question: "Pouvons-nous être impliqués dans le design ?",
        answer: "Oui. Nous partageons l'accès Figma si votre équipe veut commenter directement. Certains clients sont très impliqués, d'autres délèguent complètement. Les 2 fonctionnent.",
      },
      {
        question: "Que se passe-t-il si nous ratons une échéance de notre côté ?",
        answer: "Le projet se met en pause de notre côté aussi. Nous ne facturons pas l'attente, nous reprenons quand vous êtes prêts. Mais si la pause dépasse 60 jours, nous revoyons le périmètre, parce que les prix bougent en Chine et la disponibilité de l'équipe aussi.",
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
        answer: "Shanghai (上海), c'est le bureau principal. Quelques personnes sont à Hangzhou (杭州) et Shenzhen (深圳). Nous sommes physiquement en Chine, ce qui compte pour les dépôts ICP (互联网内容提供商), les relations avec les hébergeurs, et tout simplement pour comprendre comment Internet fonctionne ici au quotidien.",
      },
      {
        question: "Avez-vous des collaborateurs non chinois ?",
        answer: "Oui. Le fondateur est européen, plusieurs membres de l'équipe sont bilingues ou trilingues. Les chefs de projet qui travaillent avec les clients internationaux parlent tous l'anglais à un niveau professionnel. La communication interne se fait en mélange d'anglais et de chinois.",
      },
      {
        question: "Sur quel fuseau horaire travaillez-vous ? Comment ça marche pour des clients européens ou américains ?",
        answer: "Heure standard de Chine (中国标准时间, UTC+8). Pour les clients européens, l'essentiel de la journée se chevauche. Pour la côte est américaine, nous prenons les calls le matin et le soir, l'équipe est souple. La côte ouest est plus délicate mais reste tenable pour les points jalons.",
      },
      {
        question: "Pouvons-nous visiter votre bureau ?",
        answer: "Oui, avec plaisir. Nous accueillons régulièrement des clients à Shanghai (上海). Si vous passez en Chine, nous organisons une session de travail, un dîner, et nous vous présentons les bonnes personnes. Mettre un visage sur l'équipe, c'est utile.",
      },
      {
        question: "Vous déplacez-vous chez vos clients ?",
        answer: "Pour les projets au-dessus d'une certaine taille, oui, le kickoff sur site est inclus. Pour les plus petits projets, nous travaillons à distance et ça marche très bien. Nous avons des clients que nous n'avons jamais rencontrés en personne et dont nous gérons le site depuis des années.",
      },
      {
        question: "Dans quelles langues communiquez-vous ?",
        answer: "Anglais et français pour les clients internationaux. Mandarin (普通话) en interne et avec les fournisseurs chinois, les hébergeurs et les administrations. Si votre équipe a des sinophones, nous pouvons mélanger. WeChat (微信) fonctionne dans les 2 sens.",
      },
      {
        question: "Utilisez-vous WeChat pour les échanges client ?",
        answer: "Oui, WeChat (微信) reste le canal le plus simple pour la plupart des clients. L'e-mail fonctionne aussi, comme votre équipe préfère. Nous nous adaptons à vos outils, pas l'inverse.",
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
        answer: "Périmètre, livrables, calendrier, échéancier de paiement, propriété intellectuelle, confidentialité, clauses de résiliation, conditions de support après mise en ligne. Un contrat de prestation de services standard, soumis au droit que nous choisissons ensemble. La plupart des clients internationaux choisissent le droit de Hong Kong (香港) ou Singapour (新加坡). Négociable.",
      },
      {
        question: "Qui est propriétaire du code et du contenu après le lancement ?",
        answer: "Vous. Transfert complet de tous les actifs : code source, fichiers de design, contenu, identifiants d'hébergement. Nous gardons le droit d'utiliser le projet de manière anonyme dans notre portfolio, sauf si vous nous demandez explicitement de ne pas le faire.",
      },
      {
        question: "Et si nous voulons partir en cours de projet ?",
        answer: "Les clauses de résiliation sont claires dans le contrat. Vous payez le travail effectué à date, nous remettons tout ce qui a été produit dans un format exploitable. Nous ne prenons pas les projets en otage. Nous n'avons jamais eu à activer une clause de récupération, parce qu'honnêtement les clients ne partent pas en cours de route.",
      },
      {
        question: "Signez-vous des NDA ?",
        answer: "Oui, avant tout partage de détails techniques ou commerciaux. Les NDA mutuels sont standards. Nous avons notre propre modèle si vous n'en avez pas.",
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
        answer: "Cela dépend de votre équipe et de votre flux éditorial. WordPress si vous avez des marketeurs qui doivent mettre à jour le contenu chaque jour sans aide de devs. Astro si la performance est critique et que vous avez du support technique. Nous construisons avec les 2, et nous savons aussi faire des montages hybrides où le site marketing est sur l'un et le e-commerce sur l'autre.",
      },
      {
        question: "Pouvez-vous travailler avec notre stack actuelle ?",
        answer: "Honnêtement, non. Nous n'essayons pas de plier des stacks occidentales pour les faire fonctionner derrière le Grand Pare-feu ; nous avons vu trop de ces projets s'effondrer au bout de 6 mois. Nous recommandons des outils chinois qui fonctionnent nativement ici. Aliyun (阿里云), Tencent Cloud (腾讯云), Baidu Tongji (百度统计), WeChat (微信), les plateformes IA chinoises. Écosystème différent, règles différentes. Maintenir votre stack mondiale en vie en Chine coûte généralement plus cher en bricolages que la reconstruire proprement.",
      },
      {
        question: "Pourquoi ne pas utiliser un constructeur de sites SaaS occidental pour la Chine ?",
        answer: "Parce qu'ils ne fonctionnent pas correctement en Chine. La plupart sont partiellement bloqués ou fortement bridés, et aucun ne dispose d'un hébergement compatible ICP sur le continent. Nous avons migré plusieurs clients depuis ces plateformes parce que leurs sites chinois étaient inutilisables. Nous construisons sur des outils qui fonctionnent à l'intérieur du Pare-feu, point.",
      },
      {
        question: "Construisez-vous aussi des applications mobiles ?",
        answer: "Non. Nous nous concentrons sur le web, les mini-programmes (微信小程序) et les Baidu Smart Mini Programs (智能小程序). Pour les applications natives iOS et Android, nous travaillons avec des partenaires spécialisés à Shenzhen (深圳).",
      },
      {
        question: "Pouvez-vous intégrer WeChat ?",
        answer: "Oui. Connexion WeChat (微信), partage, mini-programmes, paiement. Nous avons construit des dizaines d'intégrations WeChat et nous connaissons les pièges de l'API. Pareil pour Alipay (支付宝) et UnionPay (银联).",
      },
      {
        question: "Quid de l'IA et des chatbots sur notre site chinois ?",
        answer: "Nous nous intégrons aux plateformes IA chinoises : DeepSeek (深度求索), Doubao (豆包), Kimi, Yuanbao (元宝) et Baidu AI (百度AI). Les outils IA occidentaux sont la plupart du temps bloqués ou peu fiables depuis l'intérieur de la Chine, donc ce n'est pas une option. Si on vous a dit le contraire, nous vous expliquons ce qui marche vraiment ici.",
      },
      {
        question: "Notre site WordPress sous Elementor fonctionnera-t-il en Chine ?",
        answer: "Probablement pas dans son état actuel. Mais on peut généralement le rendre fonctionnel. On retire les dépendances Google, on remplace les polices, on redirige les intégrations. La plupart des sites Elementor que nous reprenons tournent proprement derrière le Pare-feu en quelques semaines.",
      },
      {
        question: "Et les mises à jour automatiques de plugins depuis wordpress.org ?",
        answer: "Elles échouent ou expirent souvent depuis l'intérieur de la Chine. Nous configurons un routage des mises à jour via un proxy ou nous prévoyons des fenêtres de mise à jour manuelle planifiées. Dans tous les cas, votre équipe ne devrait pas avoir à y penser.",
      },
    ],
  },
  {
    title: 'SEO, Baidu et IA générative',
    shortTitle: 'SEO et IA',
    icon: 'search',
    items: [
      {
        question: "Qu'est-ce qui change entre le SEO Baidu et celui de Google ?",
        answer: "À peu près tout. Baidu (百度) favorise les sites hébergés sur le continent, juge la qualité des contenus chinois selon ses propres critères, dispose de sa Search Resource Platform (百度搜索资源平台) pour la soumission, traite les balises meta autrement, et classe selon des facteurs que Google ignore. Optimiser pour l'un, ce n'est pas optimiser pour l'autre.",
      },
      {
        question: "Garantissez-vous des positions sur Baidu ?",
        answer: "Non, et fuyez ceux qui le font. Nous garantissons une mise en place SEO Baidu (百度) aux bonnes pratiques, la soumission à la Baidu Search Resource Platform (百度搜索资源平台), l'optimisation technique et les données structurées. Le positionnement dépend de la concurrence, de la qualité du contenu et du temps. Nous partageons un rapport mensuel pour que vous voyiez ce qui bouge.",
      },
      {
        question: "C'est quoi le GEO Chine et en avons-nous besoin ?",
        answer: "Generative Engine Optimisation pour les IA de recherche chinoises. DeepSeek (深度求索), Doubao (豆包), Kimi, Yuanbao (元宝), Baidu AI (百度AI). Les internautes chinois commencent de plus en plus leurs recherches dans ces outils plutôt que sur Baidu (百度) directement. Si vos concurrents apparaissent dans les réponses générées par l'IA et pas vous, c'est du trafic qui passe devant votre porte.",
      },
      {
        question: "Combien de temps avant de voir du trafic Baidu après le lancement ?",
        answer: "L'indexation démarre en général 2 à 4 semaines après la soumission à la Baidu Search Resource Platform (百度搜索资源平台) avec une bonne configuration SEO. La vraie dynamique de positionnement sur des mots-clés concurrentiels prend 3 à 6 mois minimum. Quiconque promet plus rapide vous vend du vent.",
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
        answer: "Les 2 fonctionnent. Nous avons des rédacteurs chinois en interne et chez des partenaires de confiance qui écrivent pour des audiences chinoises, plutôt que de simplement traduire. Si vous avez un partenaire de traduction existant, nous pouvons partir de leur sortie, mais nous signalerons les passages qui sentent la traduction plutôt que la rédaction native.",
      },
      {
        question: "Quelle est la différence entre traduction et localisation ?",
        answer: "La traduction vous donne les mêmes mots en chinois. La localisation réécrit pour l'audience, la plateforme, les références culturelles, et les requêtes que les internautes chinois tapent vraiment. Un site traduit sonne étranger. Un site localisé, non.",
      },
      {
        question: "Faut-il utiliser le chinois simplifié ou traditionnel ?",
        answer: "Chinois simplifié (简体中文) pour la Chine continentale. Chinois traditionnel (繁體中文) pour Hong Kong (香港) et Taiwan (台湾). Si vous ciblez les 2, nous maintenons des versions distinctes. Mélanger les 2 sur un même site, c'est tuer votre crédibilité.",
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
        answer: "Les sites lents migrés vers Aliyun (阿里云) passent en général de 12 à 15 secondes de chargement à moins de 2 secondes. Les nouveaux développements descendent sous la seconde sur les connexions continentales. L'indexation Baidu (百度) démarre en général 2 à 4 semaines après le lancement avec une bonne configuration SEO.",
      },
      {
        question: "Comment mesurez-vous le succès d'un projet en Chine ?",
        answer: "Cela dépend du projet. Pour un site de génération de leads, ce sont les soumissions de formulaire et les objectifs de conversion Baidu Tongji (百度统计). Pour le e-commerce, c'est le chiffre d'affaires et le taux de complétion du panier. Pour un site de marque, c'est le temps passé sur la page, les visites de retour et le trafic organique. Les KPI sont validés au kickoff et nous reportons dessus chaque mois.",
      },
      {
        question: "Et si le site sous-performe après la mise en ligne ?",
        answer: "Nous diagnostiquons. Cela peut être technique, éditorial, ou un décalage avec ce que les utilisateurs chinois attendent. Les bugs, nous les corrigeons : c'est compris. Les optimisations plus profondes, les réécritures, le SEO en profondeur, ça passe par le forfait de maintenance.",
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
        answer: "La plupart des clients restent avec nous en maintenance après le lancement. Certains sont avec nous depuis de nombreuses années. Nous ne le suivons pas comme une métrique marketing, mais la réponse est élevée. L'hébergement chinois et les renouvellements ICP (互联网内容提供商) demandent un support local continu, donc la relation se prolonge naturellement.",
      },
      {
        question: "Pouvons-nous mobiliser votre équipe pour du développement continu après le lancement ?",
        answer: "Oui. Nous proposons des heures de dev en forfait, de la production de contenu, du SEO, du GEO Chine, de la gestion d'hébergement. La plupart des clients atterrissent sur un forfait mensuel qui couvre la maintenance plus une enveloppe d'heures de dev pour ce qui se présente.",
      },
      {
        question: "Et si nous voulons internaliser à terme ?",
        answer: "Pas de souci, nous accompagnons la transition. Nous avons formé des équipes clientes à reprendre les mises à jour de contenu, le dev léger et le SEO Baidu (百度). Nous remettons la documentation, faisons le transfert de connaissances et restons joignables pour les sujets durs. Sans drame.",
      },
      {
        question: "Proposez-vous des formations pour notre équipe interne ?",
        answer: "Oui. Formation WordPress, formation Baidu Tongji (百度统计), bases de la Baidu Search Resource Platform (百度搜索资源平台), workflow éditorial. En sessions à distance ou sur site si vous êtes en Chine. Le format va de quelques heures à des ateliers de plusieurs jours selon votre besoin.",
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
        answer: "Parce qu'ils ne peuvent pas déposer d'ICP (互联网内容提供商), n'ont pas de relations d'hébergement en Chine et ne connaissent pas Baidu (百度) comme nous. La plupart de nos clients gardent leur agence mondiale pour le travail mondial et nous utilisent pour la couche spécifique à la Chine. Nous collaborons avec des agences mondiales tout le temps, sans problème d'ego.",
      },
      {
        question: "Notre IT pense pouvoir gérer ça en interne. Que leur répondre ?",
        answer: "Dites-leur qu'on leur souhaite bonne chance, et rappelez-nous dans 3 mois. À moitié pour rire. L'IT interne peut absolument le faire, à condition d'avoir un an à passer à apprendre les réglementations, à bâtir des relations d'hébergement et à comprendre la Baidu Search Resource Platform (百度搜索资源平台). La plupart des équipes internes se rendent compte que cette courbe d'apprentissage n'est pas leur priorité.",
      },
      {
        question: "Et si notre société a des sensibilités politiques ou réglementaires ?",
        answer: "Nous avons travaillé avec des clients dans des secteurs régulés, de la santé aux technologies proches de la défense. Nous ne prenons pas tous les projets. Si votre secteur a des enjeux de conformité qui rendent une présence web en Chine risquée, nous vous le dirons d'emblée et vous recommanderons d'en parler à un conseil juridique d'abord. Mieux vaut le savoir en semaine 1.",
      },
    ],
  },
];
