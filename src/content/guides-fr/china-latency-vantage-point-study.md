---
title: "Latence en Chine : comprendre les écarts"
subtitle: "Une ressource peut répondre dans le cloud et rester muette à domicile. Toute comparaison exige le réseau, la méthode et la date."
summary: "Tests de latence en Chine : lire les écarts entre cloud et ligne domestique avec les relevés datés de 21YunBox et leurs décomptes par hôte."
visual: "/images/guides/china-latency-vantage-point-study.webp"
visualAlt: "Un développeur compare des relevés de requêtes sur son ordinateur portable, à la table d’un appartement pékinois."
order: 50
published: true
publishedAt: "2026-10-24"
updatedAt: "2026-10-24"
reviewBy: "2026-11-26"
category: Technology
author: cyril-drouin
---

Méthode : cette étude rapproche les observations de 21YunBox sur cinq ressources, depuis Alibaba Cloud (阿里云) à Zhangjiakou le 28 août 2026 et une connexion domestique China Mobile (中国移动) à Pékin le 30 août. Quatre ressources sont restées sans réponse à domicile, contre une dans le cloud. Comme le réseau, la date et la méthode changent à la fois, ces observations ne permettent pas d’attribuer l’écart à une seule cause.

Sources vérifiées le 24 octobre 2026. Le TTFB désigne le délai jusqu’au premier octet. Les décomptes recensent les réponses des ressources ; ils ne mesurent pas si le visiteur a pu accomplir son action. Les dates ci-dessus restent celles des mesures. Une nouvelle lecture des sources ne les transforme pas en tests d’octobre.

| Identifiant d’hôte | Ressource | Réponses cloud ; TTFB médian | Réponses domicile ; TTFB médian | Lecture des deux résultats | Dates cloud / domicile |
|---|---|---|---|---|---|
| host-google-fonts-css | fonts.googleapis.com | 72 sur 72 ; 111 ms | 0 sur 54 ; indisponible | Résultats divergents selon le point de mesure | 28 / 30 août 2026 |
| host-google-fonts-files | fonts.gstatic.com | 72 sur 72 ; 102 ms | 0 sur 6 ; indisponible | Résultats divergents selon le point de mesure | 28 / 30 août 2026 |
| host-google-tag-manager | www.googletagmanager.com | 72 sur 72 ; 118 ms | 0 sur 112 ; indisponible | Résultats divergents selon le point de mesure | 28 / 30 août 2026 |
| host-recaptcha | www.google.com/recaptcha dans le cloud ; www.google.com à domicile | 0 sur 72 ; indisponible | 0 sur 18 ; indisponible | Bloqué : aucune réponse dans ces échantillons | 28 / 30 août 2026 |
| host-jsdelivr | cdn.jsdelivr.net | 72 sur 72 ; 660 ms | 36 sur 36 ; indisponible | Lent dans le cloud ; accessible à domicile | 28 / 30 août 2026 |

> Ces décomptes et ces médianes cloud proviennent des requêtes directes de 21YunBox sur Alibaba Cloud cn-zhangjiakou le 28 août 2026 et de ses observations sur une ligne domestique China Mobile à Pékin le 30 août. Quatre lignes du tableau ne comptent aucune réponse à domicile, contre une dans le cloud. Les durées domestiques ne sont pas publiées.
> Source : 21YunBox, A Chinese Cloud Probe Is Not a Chinese Visitor: The Same Hosts, Opposite Answers, 28 août 2026, mis à jour le 30 août 2026.
> https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

## Méthode et limites

Le cloud correspond à Alibaba Cloud (阿里云) cn-zhangjiakou ; le domicile, à une ligne fixe haut débit China Mobile (中国移动) à Pékin. « Bloqué » décrit ici l’absence de réponse observée, sans en diagnostiquer la cause. « Lent » désigne le délai cloud publié pour jsDelivr. Aucun seuil universel n’est appliqué à ces méthodes différentes. « Indisponible » ne signifie jamais zéro milliseconde.

ChinaWebFoundry a compilé des données publiées par des tiers. Nous n’avons exploité aucune des deux sondes. On peut rapprocher les résultats des ressources communes, pourvu que les chiffres restent accompagnés des conditions de collecte.

L’étude cloud interrogeait directement certaines ressources à plusieurs reprises. À domicile, un navigateur chargeait des sites et enregistrait leurs requêtes externes. L’échantillon dépend donc des pages retenues : un hôte n’y figure que si une page l’appelle, et certains reviennent beaucoup plus souvent que d’autres.

> Le test cloud prévoyait un délai d’expiration de 30 secondes et 72 requêtes par ressource. Le relevé domestique à Pékin couvrait 88 sites et 264 chargements de pages, limités à 60 secondes chacun ; le nombre de requêtes variait selon l’hôte.
> Source : 21YunBox, 28 et 30 août 2026.
> https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

Une limite appliquée au chargement de la page n’équivaut pas au délai d’expiration d’une requête de ressource. Une requête déclenchée tard dans le chargement dispose d’une fenêtre d’observation différente d’une requête lancée seule. Précisez le type de limite à côté du décompte, y compris dans une présentation.

China Mobile (中国移动) est le nom de l’opérateur. La connexion étudiée était une ligne fixe domestique. Ce relevé ne renseigne pas sur un téléphone connecté au réseau mobile, malgré l’ambiguïté du nom.

L’étude ne sépare pas davantage l’effet du lieu de celui du temps. Les dates et les méthodes de collecte diffèrent. Pour expliquer l’écart dans des conditions contrôlées, il faudrait des observations qui maintiennent ces variables constantes. Nous pouvons décrire l’écart. Lui attribuer une cause dépasserait ce que l’expérience établit.

Ce tableau conserve la trace de ces observations. Il ne fixe aucune borne de temps de chargement pour un futur visiteur. Un résultat cloud peut désigner une requête à examiner ; aucun coefficient ne permet de le convertir en résultat domestique.

## Pourquoi les tests de latence en Chine divergent

Commencez par l’adresse testée. Le nom d’un produit peut désigner son site public, le serveur d’un script ou une API appelée après l’envoi d’un formulaire. Des rapports portant sur des adresses différentes peuvent être cohérents malgré des verdicts opposés dans un tableau comparatif.

Le chemin de la requête compte aussi. La ligne reCAPTCHA conserve une limite de la source : l’adresse cloud comporte un chemin, tandis que le relevé domestique regroupe les requêtes par hôte. Elle ne fournit donc pas de résultat domestique distinct pour chaque point d’accès reCAPTCHA. Vérifier le fonctionnement de la validation côté serveur exige des preuves portant sur cet appel précis.

Vérifiez à quel moment l’observateur considère le test comme réussi. Recevoir une réponse, télécharger un document entier et achever le chargement d’une page sont trois événements différents. Aucun n’atteste automatiquement qu’un formulaire a été rempli et envoyé. Définissez l’action attendue avant de choisir l’indicateur qui servira à valider le site.

Pour une page commerciale, le dossier de validation peut porter sur la lisibilité du contenu et un moyen de contact utilisable. Pour un compte client, il peut s’agir de se connecter puis d’enregistrer une modification. Ce sont des contrôles qu’un propriétaire de site peut demander ; l’étude comparée ne les a pas réalisés.

Conservez les requêtes en échec lorsque vous présentez une durée.

Une médiane calculée sur les réponses reçues décrit uniquement ce groupe. Retirer les requêtes sans réponse peut rendre le délai rassurant tout en masquant les visiteurs qui n’ont rien reçu. Une case de durée vide, associée à zéro réponse, renseigne donc aussi le lecteur.

Si vous ne disposez que d’une capture d’un score de vitesse, demandez l’adresse et le relevé des requêtes avant de changer d’hébergement. La capture peut être exacte tout en répondant à une autre question que celle de votre équipe en Chine.

## Le premier octet ne décrit qu’une partie de la visite

La mesure du TTFB s’arrête dès que la réponse commence à arriver. Le reste doit encore parvenir au navigateur. Sans savoir à quel moment le chronomètre s’arrête, vous risquez de laisser hors du relevé l’étape qui vous intéresse.

> Le TTFB mesure le délai jusqu’à l’arrivée du premier octet de réponse. Il peut comprendre la résolution DNS et l’établissement de la connexion.
> Source : MDN Web Docs, Time to First Byte, modifié le 18 juillet 2025.
> https://developer.mozilla.org/en-US/docs/Glossary/Time_to_first_byte

Distinguez le premier octet d’une page de celui d’une police ou d’un script : chacun appartient à une requête différente. Le serveur peut répondre pour le document alors que le navigateur attend encore une ressource externe. Le tableau ci-dessus mesure des ressources ; il ne donne pas la vitesse complète de votre page.

| Élément du rapport | Ce qu’il établit | Ce qu’il faut encore savoir pour décider |
|---|---|---|
| Premier octet de réponse | La requête a reçu un début de réponse | Si le transfert et l’action prévue ont abouti |
| Nombre de réponses d’une ressource | Sa fréquence de réponse dans l’échantillon | Quelles fonctions de la page en dépendent |
| Chargement terminé dans le navigateur | La condition de fin annoncée a été remplie | Si le visiteur a pu accomplir son action |
| Test du site d’un fournisseur | Le résultat obtenu pour ce site | Le résultat de la ressource intégrée ou du point d’accès client |
| Verdict d’accessibilité d’une URL | Le constat de la source pour cette URL à cette date | Un réseau, une durée et une action comparables, si nécessaires |

L’équipe d’hébergement peut avoir enregistré une réponse du serveur, tandis que le marketing constatait l’échec d’une prise de contact. Rattachez chaque observation à sa requête avant de conclure à une contradiction.

Demandez ce que chaque outil a observé et quand il s’est arrêté. Le rapport doit expliquer sa condition de fin assez clairement pour qu’un autre lecteur comprenne pourquoi le test a réussi.

La même précaution vaut pour le site commercial d’un fournisseur. Son chargement réussi ne valide pas un widget intégré à votre domaine. Ce dernier peut solliciter d’autres hôtes, une autre version ou un autre chemin. Conservez le résultat du site fournisseur avec son adresse tant qu’aucune source n’a testé la dépendance réellement utilisée.

## Lire le verdict d’URL à côté du relevé domestique

GreatFire apporte un autre type de preuve. Son résultat pour l’hôte des feuilles de style Google Fonts peut figurer à côté de l’échec domestique, sans écarter silencieusement l’une des sources.

> GreatFire indique que ses quatre tests récents conclusifs de https://fonts.googleapis.com ont établi une connexion normale. Dernier test : 15 octobre 2026. La page citée ne nomme aucun opérateur grand public et ne donne aucune latence.
> Source : GreatFire, dernier test le 15 octobre 2026, vérifié le 24 octobre 2026.
> https://en.greatfire.org/https/fonts.googleapis.com

Les dates diffèrent, et GreatFire ne reproduit pas l’expérience menée sur la ligne domestique nommée. Son relevé ne prouve pas que cette connexion s’est ensuite rétablie. L’observation domestique plus ancienne ne décrit pas non plus toutes les connexions actuelles.

Notre [guide Google Fonts](/fr/ressources/guide-web-chine/google-fonts-chine/) explique les conséquences pratiques pour les sites utilisant les feuilles de style et les fichiers de polices hébergés. Cette étude conserve les preuves à l’échelle de chaque ressource testée.

Dans un compte rendu interne, donnez les deux URL sources. Indiquez l’adresse testée par chacune et gardez les dates dans la phrase, même si le destinataire souhaite une réponse plus brève. Une fois repris dans un dossier d’achat, un verdict sans contexte devient difficile à rectifier.

Une observation ancienne peut encore expliquer un mode de défaillance. Son ancienneté limite les conclusions sur la situation actuelle. Ce rapport porte donc une date de révision et conserve les dates des mesures après toute nouvelle vérification des sources.

## Lire l’échantillon avant de calculer un taux

Pour la ligne domestique, chaque dénominateur correspond au nombre d’appels à l’hôte pendant les chargements retenus. Il ne correspond pas à autant de foyers distincts ou d’habitants d’autres villes. Répéter des requêtes depuis une connexion documente cette connexion pendant le relevé, sans élargir la couverture géographique.

L’hôte des feuilles de style et celui des fichiers de polices ont des dénominateurs différents. Gardez-les séparés, bien qu’ils appartiennent tous deux à Google Fonts. Les réunir ferait perdre la requête observée et l’étape de livraison de la police concernée.

Additionner les décomptes cloud et domestiques donnerait plus de poids au côté qui a émis davantage de requêtes. Le taux obtenu dépendrait du choix d’échantillonnage, sans rapport défini avec la proportion de vos clients capables de charger la page.

Une affirmation nationale exigerait des données sur la population visée et son échantillonnage. Ce rapport n’en dispose pas. Il ne permet aucune déduction sur d’autres opérateurs, villes ou réseaux d’accès. Les réseaux d’entreprise et l’accès mobile sont également hors de son périmètre.

Employez « indisponible » pour une durée non publiée et « non testé » lorsqu’aucun test daté exploitable ne couvre une dépendance. Une requête sans réponse doit être consignée avec son échantillon. Ces mentions désignent des lacunes différentes ; une même cellule vide ne doit pas les confondre.

L’[indice des dépendances en Chine d’octobre](/fr/ressources/guide-web-chine/indice-dependances-chine-2026-10/) contient le registre élargi et la liste brute des hôtes. js.stripe.com et embed.typeform.com y restent non testés. Leur présence sur une page justifie d’examiner la dépendance, sans lui attribuer de verdict d’accessibilité non étayé.

## Quand une source révise son verdict

Un tableau comparatif doit pouvoir se relire après correction. Conservez l’URL exacte avec l’affirmation qui en provient. Consignez aussi la date de consultation, séparément de celle du test annoncé par la source. Cette distinction compte lorsqu’un nouvel article cite une observation ancienne.

Le [fichier brut du registre d’octobre](/data/china-dependency-index-2026-10.json) permet de télécharger la liste élargie des dépendances. Les identifiants du tableau renvoient aux entrées correspondantes ; dans le JSON, l’identifiant omet le préfixe host-. Le fichier dépasse le sous-ensemble comparé ici. Son nombre total d’entrées ne constitue donc pas la taille de l’échantillon cloud contre domicile.

Si une source ultérieure rapporte une réponse pour une adresse jusque-là muette, comparez la cible et la méthode avant de parler de rétablissement. Une requête HTTPS à la racine et une requête de script peuvent partager un hôte sans tester la même chose. Une publication plus récente peut aussi décrire un ancien test. Consignez ces différences.

Un chiffre retiré par sa source doit être traité avec la même prudence. Le supprimer réduit ce que le rapport peut étayer, sans établir une amélioration ou une dégradation du réseau. Gardez le motif de la correction avec la source pour que le prochain lecteur comprenne le changement de cellule.

Pour un achat, accordez-vous sur la question avant de juxtaposer les résultats. Le test d’une page d’accueil fournisseur ne devrait pas occuper la même colonne qu’un test de paiement client sans distinction explicite. Lorsque la comparaison est impossible, précisez la preuve manquante dans la cellule. Le lecteur saura ainsi ce qui manque ; une note calculée sur des actions différentes le lui cacherait.

Après un déploiement, conservez la version de la page et la liste des requêtes liées au signalement. Si une mise à jour supprime une dépendance, l’ancienne observation reste attachée à la version précédente. Elle peut expliquer le changement sans prétendre que l’hôte retiré est devenu accessible.

« Non testé » décrit une lacune dans les preuves datées du registre. D’autres tests peuvent exister ailleurs, et une source ultérieure peut combler ce manque. D’ici là, aucun résultat étayé ne peut remplir la colonne cloud ou domestique.

## Documenter une décision à partir d’un résultat contesté

Partez de la page et de l’action à l’origine du signalement. Enregistrez l’URL exacte et décrivez ce que le visiteur n’a pas pu faire. Une plainte pour lenteur se rattache difficilement à une requête précise ; un formulaire qui n’affiche jamais sa confirmation donne à l’examen un point d’arrivée défini.

Demandez à l’auteur du rapport de conserver les conditions du relevé : réseau et lieu, date, cible de la requête et règle d’arrêt. Si un champ manque, précisez quelle comparaison devient impossible. Ne le remplacez pas par une hypothèse sur le visiteur chinois type.

Dans les journaux existants, distinguez le document des appels externes qu’il déclenche. Repérez ceux qui sont indispensables à l’action examinée. L’échec d’un pixel facultatif et celui d’une dépendance du formulaire peuvent produire des erreurs réseau semblables tout en appelant des décisions différentes.

Choisissez une modification fondée sur les preuves. Si une action indispensable dépend d’une ressource externe, examinez les modes de défaillance et ce que le visiteur voit alors. Ne promettez pas qu’un changement de serveur réparera tous les appels extérieurs. L’emplacement du document ne décrit pas l’ensemble des requêtes du navigateur.

Proposez une modification assez circonscrite pour que son effet puisse être évalué. Notez la dépendance supprimée ou modifiée, la fonction à préserver et les preuves retenues pour approuver le changement. L’équipe qui reprend le dossier pourra comprendre la décision, même si les recherches ne résolvent pas toutes les questions de réseau.

Notre service [Stratégie et audit](/fr/services/strategie-audit/) peut organiser cet examen autour des requêtes externes réelles du site. Joignez au rapport contesté la page concernée et l’action attendue du visiteur. Consignez les preuves retenues pour qu’une autre équipe puisse examiner la décision.
