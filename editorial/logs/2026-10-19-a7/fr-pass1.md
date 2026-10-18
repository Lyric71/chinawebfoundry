---
title: "Elementor, Divi et Gutenberg en Chine"
subtitle: "Réglages des polices, requêtes de l’éditeur, ressources locales : ce qu’il faut vérifier avant de choisir un constructeur de pages pour un site en Chine continentale."
summary: "Réglages de polices d’Elementor, options de Divi, dépendances du Gutenberg natif : ce que le code source confirme pour un site en Chine, éditeur compris."
visual: "/images/guides/page-builders-china.webp"
order: 47
published: true
publishedAt: "2026-10-19"
updatedAt: "2026-10-19"
reviewBy: 2026-11-19
category: "Technology"
author: "cyril-drouin"
---

Pour préparer un site Elementor destiné à la Chine, contrôlez la page publique et l’éditeur. Elementor propose des réglages pour servir les Google Fonts depuis votre propre serveur, mais l’éditeur de sa version 4.3.4 enregistre une police hébergée chez Google en dehors de ces réglages. Divi documente ses options de polices ; le Gutenberg natif n’ajoute par défaut aucune requête Google Fonts à la page publique. Votre thème et vos extensions restent à vérifier.

| Constructeur | Ce qui est confirmé | Ce qu’il faut vérifier sur votre site |
|---|---|---|
| Elementor 4.3.4 | Réglages de polices distincts ; bibliothèques d’icônes embarquées | URL des polices publiques, requête Roboto de l’éditeur, widgets d’extensions |
| Divi | Options Google Fonts documentées | Version installée, réglages enregistrés, requêtes de polices réelles |
| Gutenberg natif, WordPress 7.1.3 | Aucun chargement Google Fonts par défaut sur la page publique | Polices du thème, blocs ajoutés, installation de polices |

Nous avons examiné le code source et la documentation le 19 octobre 2026. Les numéros de version cités plus bas désignent ce que nous avons inspecté. Les données réseau proviennent de tests publiés par des tiers, hôte par hôte ; nous n’avons pas établi de classement de vitesse entre les constructeurs.

## D’où partent les requêtes

Un constructeur de pages offre à l’équipe un endroit où choisir des polices et ajouter des widgets. Chaque choix peut déclencher une requête vers un serveur extérieur au site. Pour une police, suivez la requête de la feuille de style jusqu’au fichier qui dessine réellement les caractères à l’écran, sur la page où la police est employée.

Distinguez ce que télécharge le visiteur de ce dont l’éditeur a besoin pour travailler. Une équipe marketing peut voir une page publique propre alors que son écran d’édition interroge encore un service de polices à l’étranger. Vérifiez les URL des ressources de la page publiée, même si l’édition fonctionne.

Notre [présentation de WordPress en Chine](/fr/wordpress-en-chine/) traite de l’hébergement. Pour le constructeur, commencez par les réglages de polices et suivez les requêtes qu’ils génèrent. Notez la version installée avant toute modification, afin qu’un autre développeur puisse refaire le contrôle après une mise à jour.

## Elementor en Chine : deux réglages à inspecter

Dans Elementor 4.3.4, ouvrez **Elementor > Settings > Advanced > Google Fonts**. Dans la version inspectée, ce réglage est sur Enable par défaut. Il détermine si les pages publiques générées par Elementor utilisent Google Fonts. Désactivez-le si vous fournissez les polices par une autre voie, par exemple les fichiers locaux de votre thème.

Sous **Elementor > Settings > Performance**, le réglage distinct Load Google Fonts Locally est sur Disable par défaut. C’est lui qu’il faut examiner si vous voulez conserver les polices Google choisies dans Elementor tout en servant les fichiers depuis votre site. Ne supposez pas que le réglage d’une ancienne installation vaut pour une nouvelle.

> Elementor a indiqué le 18 septembre 2025 que Load Google Fonts Locally est désactivé par défaut ; le code source de la version 4.3.4 conserve cette valeur par défaut.
> Source : Elementor, septembre 2025 ; code source versionné vérifié en octobre 2026. https://github.com/elementor/elementor/issues/32838 https://downloads.wordpress.org/plugin/elementor.4.3.4.zip

| Réglage dans Elementor 4.3.4 | Onglet | Option enregistrée | Valeur par défaut |
|---|---|---|---|
| Google Fonts | Advanced | `elementor_google_font` | Enable |
| Load Google Fonts Locally | Performance | `elementor_local_google_fonts` | Disable |

Gardez une copie des réglages d’origine pour pouvoir les rétablir si la typographie d’une page change de façon inattendue.

Pour éprouver le mode de livraison des polices retenu, prenez sur une copie de préproduction une page que l’équipe modifie souvent, avec ses vrais titres et son vrai texte courant. Après la modification des réglages, videz les styles générés et les caches, puis rechargez la page avec le cache du navigateur désactivé. Inspectez l’URL de la feuille de style et celles des fichiers de polices qu’elle contient : une feuille de style servie par votre domaine peut encore pointer vers un fichier de police hébergé ailleurs. Avant de valider le changement, vérifiez que les fichiers de polices locaux finissent bien de se télécharger.

Les titres demandent un contrôle à part. Un choix fait au niveau d’une page ou un widget ajouté peut s’écarter de la typographie globale du site. Testez aussi la version chinoise : la police qui dessine les titres en caractères latins peut laisser les caractères chinois à une police de secours. Les retours à la ligne peuvent alors changer, même quand toutes les requêtes aboutissent.

## L’éditeur continue de demander Roboto à Google

Les réglages de la page publique ne couvrent pas tout l’environnement d’édition. Dans la version inspectée, `register_base_styles()` enregistre `google-font-roboto` sur `fonts.googleapis.com` sans consulter l’option Google Fonts. La feuille de style `elementor-editor` déclare ce handle comme dépendance.

La barre supérieure d’administration d’Elementor charge elle aussi Roboto depuis Google. Un développeur qui ne contrôle que la page d’accueil passera à côté de ce second contexte.

> Elementor 4.3.4 enregistre la feuille de style Roboto de l’éditeur sans condition liée au réglage des polices ; sa barre supérieure d’administration appelle séparément une feuille de style Google.
> Source : Elementor, version 4.3.4, code source vérifié en octobre 2026, core/editor/loader/editor-loader.php et modules/admin-top-bar/module.php. https://downloads.wordpress.org/plugin/elementor.4.3.4.zip

Ouvrez ensuite une page existante dans l’éditeur. Dans l’onglet Réseau du navigateur, cherchez `fonts.googleapis.com` et `fonts.gstatic.com`, puis identifiez la feuille de style à l’origine de chaque requête. Si vous remplacez une feuille de style de l’éditeur, gardez son handle enregistré en le faisant pointer vers le fichier de remplacement, pour que les styles qui en dépendent se chargent toujours. Testez les commandes d’édition avant de déployer la modification.

Contrôlez aussi le flux d’édition : enregistrez une modification, rouvrez la page et utilisez le sélecteur de polices. Demandez au collègue chargé des contenus de refaire ce parcours sur sa connexion habituelle.

## Les icônes embarquées d’Elementor sont locales

Font Awesome et eicons sont livrées dans le paquet Elementor. Le code inspecté construit ces chemins, fournis par l’extension, à partir de l’emplacement des ressources d’Elementor. Vérifiez ces chemins locaux avant de remplacer un CDN d’icônes évoqué dans un guide de dépannage générique.

> Elementor 4.3.4 inclut Font Awesome et eicons dans ses ressources locales et les enregistre à partir des chemins de ressources de l’extension.
> Source : Elementor, version 4.3.4, code source vérifié en octobre 2026. https://downloads.wordpress.org/plugin/elementor.4.3.4.zip

Laissez les icônes embarquées en place si leurs requêtes aboutissent. Une extension peut apporter son propre service d’icônes, et une réécriture des ressources à l’échelle du site peut modifier les URL de livraison. Servez-vous de l’initiateur de requête du navigateur pour trouver quel composant est responsable d’un appel externe avant de le supprimer.

Notre [guide des plugins WordPress en Chine](/fr/ressources/guide-web-chine/plugins-wordpress-chine/) couvre cet examen plus large des dépendances. Même prudence pour les scripts : l’URL de bibliothèque d’un thème peut n’avoir aucun rapport avec le constructeur que vous cherchez à réparer.

## Pourquoi l’hôte des polices compte

Lisez ensemble les résultats de 21YunBox depuis le cloud et depuis une ligne résidentielle. Ils décrivent le même hôte de polices, sur des réseaux et à des dates différents.

| Hôte | Alibaba Cloud (阿里云) cn-zhangjiakou | Ligne résidentielle China Mobile (中国移动), Pékin | Réponses, cloud / résidentiel | Verdict | Dates des tests |
|---|---|---|---|---|---|
| fonts.googleapis.com | TTFB médian de 111 ms | Aucune réponse | 72 sur 72 / 0 sur 54 | Diverge selon le point de mesure | 28 / 30 août 2026 |

> 21YunBox a interrogé fonts.googleapis.com depuis une instance Alibaba Cloud (阿里云) de cn-zhangjiakou toutes les dix minutes pendant douze heures le 28 août 2026, avec un délai d’expiration de 30 secondes : 72 requêtes sur 72 ont abouti, avec un temps médian jusqu’au premier octet de 111 ms. Sa mesure du 30 août depuis une ligne résidentielle China Mobile (中国移动) à Pékin, portant sur 264 chargements de pages de 88 sites avec un plafond de 60 secondes par page, a relevé 54 requêtes vers cet hôte, sans aucune réponse.
> Source : 21YunBox, A Chinese Cloud Probe Is Not a Chinese Visitor: The Same Hosts, Opposite Answers, août 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

L’auto-hébergement supprime cette requête de police externe. Consignez comme non testé tout hôte de modèles en ligne ou de service d’édition que vous repérez, sauf si des données tierces datées le couvrent ; nous ne donnons ici aucun verdict d’accessibilité en Chine continentale pour `my.elementor.com` ou `assets.elementor.com`.

Google Hosted Libraries relève d’un contrôle distinct si un thème ou une extension y fait appel.

> GreatFire classe https://ajax.googleapis.com comme bloqué, sur la base d’un test concluant en échec, effectué pour la dernière fois le 22 août 2026. Il ne précise ni ville ni opérateur.
> Source : GreatFire, août 2026, revérifié en octobre 2026. https://en.greatfire.org/api/url/https/ajax.googleapis.com

N’utilisez ce verdict que si votre liste de requêtes contient l’hôte de cette bibliothèque. Trouvez quel composant l’ajoute avant de décider quoi remplacer.

## Divi : s’en tenir aux réglages documentés pour votre version

Divi est un logiciel à code fermé et nous n’avons pas inspecté son code. La documentation Theme Options d’Elegant Themes datée de 2023 cite **Use Google Fonts** dans l’onglet General et **Improve Google Fonts Loading** dans le sous-onglet Performance. Ce dernier réglage est décrit comme mettant les Google Fonts en cache et les chargeant en ligne dans la page.

Sa documentation distincte pour Divi 5 confirme Use Google Fonts dans General. Vérifiez votre version avant de suivre une ancienne capture d’écran des réglages. Nous n’avons vérifié ni la liste complète des hôtes appelés par Divi à l’exécution, ni si l’ancien réglage de mise en cache supprime toute requête vers des fichiers de polices distants.

> Elegant Themes documente Use Google Fonts et Improve Google Fonts Loading dans son ancien guide Theme Options ; son guide Divi 5 documente Use Google Fonts.
> Source : Elegant Themes, 31 décembre 2023 et 18 septembre 2026 respectivement. https://help.elegantthemes.com/en/articles/8626158-using-the-divi-theme-options https://help.elegantthemes.com/en/articles/12958885-divi-5-theme-options

Avant de modifier Divi, sauvegardez ses réglages typographiques. Si vous désactivez Google Fonts, contrôlez le rendu des caractères sur des pages représentatives avant le déploiement. Inspectez séparément une page vue par un visiteur déconnecté et l’éditeur visuel, caches vidés. Notez les requêtes observées pour que le développeur suivant puisse les vérifier.

## Le Gutenberg natif simplifie les polices publiques

L’éditeur de blocs du cœur de WordPress n’ajoute par défaut aucun chargement Google Fonts à une page publique. Dans WordPress 7.1.3, les enregistrements d’Open Sans et de Noto Serif dans `script-loader.php` sont conservés pour la compatibilité avec les thèmes et les extensions. Enregistrer et charger sont deux étapes distinctes : un thème ou une extension peut demander ces styles enregistrés.

> WordPress 7.1.3 indique que ses deux enregistrements de polices Google sont conservés à l’intention des thèmes et des extensions ; le cœur ne s’en sert plus.
> Source : cœur de WordPress, version 7.1.3, code source vérifié en octobre 2026. https://raw.githubusercontent.com/WordPress/WordPress/7.1.3/wp-includes/script-loader.php

La Font Library suit son propre circuit d’installation. Sa collection Google provient de `s.w.org`. Une fois que l’utilisateur de l’éditeur a donné son autorisation, son navigateur télécharge les fichiers de polices chez Google puis les envoie sur votre site. Les polices installées sont ensuite servies localement. Une installation peut donc échouer avant même qu’un visiteur n’ouvre la page.

> WordPress 7.1.3 définit la collection Google dans fonts.php et utilise downloadFontFaceAssets dans le navigateur avant d’envoyer les fichiers de polices.
> Source : cœur de WordPress, version 7.1.3, code source vérifié en octobre 2026. https://raw.githubusercontent.com/WordPress/WordPress/7.1.3/wp-includes/fonts.php https://raw.githubusercontent.com/WordPress/WordPress/7.1.3/wp-includes/js/dist/editor.js

Gutenberg s’inscrit aussi dans une installation WordPress plus large. Un thème de blocs a ses propres choix de polices. Le cœur peut demander des avatars à `secure.gravatar.com` et des images d’émojis à `s.w.org` lorsque ces fonctions sont utilisées. Les thèmes et les blocs ajoutés peuvent introduire d’autres appels.

> WordPress 7.1.3 construit les URL d’avatars sur secure.gravatar.com et définit les URL des images d’émojis sur s.w.org.
> Source : cœur de WordPress, version 7.1.3, code source vérifié en octobre 2026. https://raw.githubusercontent.com/WordPress/WordPress/7.1.3/wp-includes/link-template.php https://raw.githubusercontent.com/WordPress/WordPress/7.1.3/wp-includes/formatting.php

## Choisir en fonction du travail de vos éditeurs

Pour un nouveau site aux mises en page éditoriales classiques, commencez par évaluer les blocs natifs et un thème qui fournit des polices locales. Un site Elementor ou Divi existant mérite un examen des requêtes avant de budgéter une refonte. Avant de vous engager sur un autre constructeur, demandez qui entretiendra les mises en page et quelle part du contenu existant devrait migrer.

| Situation | Point de départ concret | Ce qu’il faut conserver |
|---|---|---|
| Site Elementor existant | Garder les mises en page ; corriger la livraison des polices | Relevés des requêtes de la page publique et de l’éditeur |
| Site Divi existant | Confirmer la version et les réglages | Réglages enregistrés et URL de polices observées |
| Nouveau site éditorial | Évaluer les blocs natifs et les ressources locales du thème | Mises en page représentatives et installation des polices contrôlée |

Notre [guide de la vitesse WordPress en Chine](/fr/ressources/guide-web-chine/vitesse-wordpress-chine/) couvre le travail de performance plus large. Gardez l’examen du constructeur assez ciblé pour que la personne qui reprendra le site puisse le refaire après une mise à jour d’extension ou de thème. Confiez ce contrôle à la personne qui valide les mises à jour. Conservez la date et les versions installées avec les relevés de requêtes, à côté des réglages.

## Questions fréquentes

**Elementor fonctionne-t-il en Chine ?**

Elementor dispose de réglages qui permettent de modifier la livraison des polices sur les pages publiques. Le code source de la version 4.3.4 montre aussi des requêtes de polices propres à l’éditeur : une page d’accueil propre ne règle donc pas la question de l’édition. Notez la version installée et inspectez les requêtes de vos widgets, puis essayez de modifier une vraie page. Nous n’avons pas mesuré de taux de réussite global du constructeur en Chine continentale.

**Désactiver Google Fonts dans Elementor couvre-t-il l’éditeur ?**

Dans la version 4.3.4 inspectée, l’éditeur enregistre Roboto depuis Google sans tenir compte de ce réglage, et la barre supérieure d’administration lance un autre appel. Traitez la page publique et l’éditeur comme deux contrôles distincts. Si vous modifiez l’enregistrement de la feuille de style de l’éditeur, préservez sa dépendance et vérifiez que l’édition et l’enregistrement fonctionnent toujours.

**Quel réglage de polices vérifier dans Divi ?**

Commencez par Use Google Fonts, dans l’onglet General, d’après la documentation de la version installée. L’ancien guide Theme Options cite aussi Improve Google Fonts Loading dans Performance. Nous n’avons pas inspecté le code de Divi : contrôlez donc les URL de la feuille de style et des fichiers de polices obtenus avant de considérer ce réglage comme la preuve d’une livraison locale.

**Gutenberg est-il plus rapide que Divi ou Elementor en Chine ?**

Cet examen n’établit aucun classement de vitesse. Le Gutenberg natif évite une requête Google Fonts par défaut sur la page publique, mais le thème et les blocs ajoutés déterminent encore une bonne partie de ce que la page télécharge. Comparez les mises en page et les listes de requêtes que vous comptez réellement mettre en ligne. Leur temps de chargement dépend des fichiers et des services que chaque page appelle.
