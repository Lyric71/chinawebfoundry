---
title: "Design mobile-first pour la Chine : en fait, dites plutôt mobile-only"
subtitle: "En Chine, le « mobile-first » est déjà dépassé. Plus de 95 % des internautes accèdent au web depuis leur téléphone. Si votre site n'est pas conçu pour le mobile, il n'existe pas."
summary: "L'internet chinois est mobile-only. Ce guide couvre les principes de design, la compatibilité avec le navigateur WeChat, l'écosystème des super-apps et la stratégie mini-programme pour les marques étrangères."
visual: "/images/guides/mobile-first-design-china.webp"
order: 9
published: true
category: Design
---

1,3 milliard d'internautes et la quasi-totalité sur leur téléphone. 969 millions qui paient en scannant un QR code. WeChat seul qui absorbe 34 % de tout le trafic internet du pays. La Chine n'a pas traversé l'ère du bureau comme l'Occident. Elle est passée directement au mobile, et l'écart entre ce que les utilisateurs chinois attendent d'une expérience mobile et ce que la plupart des entreprises étrangères proposent est considérable. Si vous concevez encore vos sites pour le bureau en ajoutant des points de rupture responsifs après coup, vous construisez pour un internet que les utilisateurs chinois ont quitté depuis des années.

## L'internet mobile chinois en chiffres

Ce ne sont pas des projections. C'est l'état des lieux actuel.

| Indicateur | Valeur |
|---|---|
| Internautes en Chine | 1,30 milliard (91,6 % de pénétration) |
| Couverture haut débit mobile | 100 % (3G/4G/5G) |
| Utilisateurs actifs mensuels de WeChat | 1,481 milliard |
| Utilisateurs de mini-programmes WeChat | 949 millions (90 % de WeChat) |
| Utilisateurs du paiement mobile | 969 millions (96 % des adultes) |
| Marché du paiement mobile | 15,86 Mrd $ actuellement, 78,23 Mrd $ d'ici 2030 (TCAC 37,59 %) |
| Part de WeChat dans tout le trafic chinois | 34 % |

La Chine compte 1,3 milliard d'internautes en 2025. Soit 91,6 % de la population en ligne. La couverture haut débit mobile atteint 100 % sur les réseaux 3G, 4G et 5G. Plus de 95 % accèdent à internet principalement via des appareils mobiles.

WeChat compte 1,481 milliard d'utilisateurs actifs mensuels. 949 millions d'entre eux utilisent les mini-programmes, soit 90 % de la base totale d'utilisateurs de WeChat. Le trafic de données de WeChat représente à lui seul 34 % de l'ensemble du trafic internet en Chine.

> WeChat : 1,481 milliard d'utilisateurs actifs mensuels. 34 % de tout le trafic internet en Chine. Pas une simple application de messagerie. La plateforme où se déroule l'essentiel de l'internet chinois.

Viennent ensuite les paiements, et c'est là que les chiffres deviennent vraiment saisissants. 969 millions d'utilisateurs du paiement mobile, couvrant 96 % des adultes chinois. Le marché s'élève actuellement à 15,86 milliards de dollars et devrait atteindre 78,23 milliards d'ici 2030, avec un taux de croissance annuel composé de 37,59 %. Ce n'est pas une tendance en phase de montée. C'est déjà la norme établie.

## Les principes de design qui comptent vraiment

| Principe | Spécification |
|---|---|
| Approche de conception | Mobile-only, pas mobile-first (95 %+ d'utilisateurs mobiles) |
| Navigateur principal à tester | Navigateur intégré de WeChat (WebKit ancien) |
| Zones tactiles | Min 44x44 px, optimal 48x48 px, espacement de 8 px |
| Placement des CTA | Tiers inférieur de l'écran (zone accessible au pouce) |
| Navigation | Défilement vertical comme modèle principal |
| Flux de paiement | Paiement par QR code (Alipay / WeChat Pay) |

Concevoir pour le mobile en Chine n'est pas la même chose que le responsive design pour un public occidental. Les attentes sont plus élevées, le contexte de navigation est différent, et le navigateur de la plupart de vos utilisateurs n'est ni Chrome ni Safari. C'est le navigateur intégré de WeChat.

Le changement fondamental : mobile-only, pas mobile-first. Quand plus de 95 % de vos utilisateurs sont sur téléphone, l'écran du téléphone est le produit. Le bureau est secondaire. Les entreprises qui conçoivent d'abord pour le bureau puis compriment le tout dans une mise en page responsive travaillent à rebours, et cela se voit.

Le navigateur intégré de WeChat déroute plus que tout autre élément de cette liste. Il fonctionne sur une version ancienne de WebKit, de sorte que le CSS et le JavaScript qui s'affichent correctement dans les navigateurs modernes peuvent casser à l'intérieur de WeChat. Si vous ne testez que sur Chrome et Safari, vous ne testez pas pour vos véritables utilisateurs. Il faut charger le site dans le navigateur de WeChat spécifiquement et tout vérifier.

Zones tactiles : 44 par 44 pixels minimum, 48 par 48 en optimal, 8 pixels d'espacement entre elles. Ce n'est pas une suggestion. De petits boutons conçus pour un curseur de souris ne fonctionnent pas quand quelqu'un navigue avec le pouce dans un métro bondé aux heures de pointe.

Placez vos boutons d'appel à l'action principaux dans le tiers inférieur de l'écran. C'est là que le pouce repose naturellement lors d'une utilisation à une main. Des CTA en haut de l'écran obligent les utilisateurs à ajuster leur prise ou à utiliser les deux mains. Un léger frottement, mais qui coûte des conversions.

Le défilement vertical est la norme. Les utilisateurs mobiles chinois passent leur journée à faire défiler de longs flux verticaux sur WeChat, Douyin, Weibo. Le balayage horizontal, les menus hamburger, les structures de navigation imbriquées paraissent étrangers et maladroits sur mobile.

Et le flux de paiement. QR code. Pas un formulaire où l'on tape les 16 chiffres d'une carte bancaire. Un QR code qui ouvre Alipay ou WeChat Pay. C'est ainsi que se déroulent les transactions sur mobile en Chine. Si votre processus de paiement demande aux utilisateurs de saisir manuellement les informations de leur carte, vous les avez déjà perdus.

> Paiement par QR code via Alipay ou WeChat Pay. C'est le standard. Si votre flux de paiement implique de saisir des numéros de carte, vous demandez aux utilisateurs chinois quelque chose qu'ils n'ont plus fait depuis des années.

## L'écosystème des super-apps

Les utilisateurs chinois ne vivent pas dans un navigateur. Ils vivent à l'intérieur d'applications qui font tout.

WeChat, Alipay, Meituan. Chacune est une super-app qui regroupe messagerie, commerce, paiements et services au sein d'une même plateforme. WeChat n'est pas une application de messagerie. C'est un navigateur, un portefeuille, un fil d'actualité sociale, une vitrine marchande et une plateforme de mini-programmes, le tout en un. Alipay gère le volet financier de la même équation. Meituan couvre la livraison de repas, les réservations d'hôtels, les services locaux, tout en un seul endroit.

Les mini-programmes ont pour ainsi dire remplacé les applications natives pour les tâches quotidiennes. Au lieu de télécharger une application séparée depuis l'App Store, les utilisateurs ouvrent un mini-programme à l'intérieur de WeChat ou d'Alipay. 949 millions de personnes s'en servent. Commander un repas, réserver une course, s'enregistrer dans un hôtel, acheter un produit - le mini-programme est la voie attendue. Le téléchargement d'une application autonome est la solution de repli.

> 949 millions de personnes utilisent les mini-programmes WeChat. Pour la plupart des tâches quotidiennes, le mini-programme est le produit. Le téléchargement depuis l'App Store est le plan B.

Les attentes au sein de ces plateformes sont impitoyables. Paiement instantané, sans saisie de carte. Connexion automatique via le SSO WeChat. Partage en un tapotement vers les contacts et les groupes. Des années d'expériences fluides au sein des applications ont entraîné les utilisateurs à ne tolérer aucune étape supplémentaire. La moindre friction, et ils sont partis.

| Couche | Fonction |
|---|---|
| Site web mobile responsive | SEO Baidu et visibilité dans la recherche organique |
| Mini-programme WeChat | Commodité et visibilité au sein de l'application |
| Application native | Uniquement si le produit l'exige véritablement |

Pour les marques étrangères, la configuration sur laquelle la plupart des acteurs convergent est la suivante : un site web mobile responsive pour le SEO Baidu et la visibilité dans les résultats de recherche, un mini-programme WeChat pour la commodité au sein de l'application, et une application native uniquement si le produit l'exige véritablement. La plupart n'ont pas besoin de l'application native. Site mobile et mini-programme suffisent pour la grande majorité de ce que les utilisateurs chinois attendent de votre marque.
