---
title: "Design mobile-first pour la Chine : disons plutôt mobile-only"
subtitle: "En Chine, le « mobile-first » est déjà dépassé. Plus de 95 % des internautes accèdent au web depuis leur téléphone. Si votre site n'est pas conçu pour le mobile, il n'existe pas."
summary: "L'internet chinois est mobile-only. Principes de design, compatibilité avec le navigateur WeChat, écosystème des super-apps et stratégie mini-programme pour les marques étrangères."
visual: "/images/guides/mobile-first-design-china.webp"
order: 9
published: true
category: Design
---

1,3 milliard d'internautes, la quasi-totalité sur leur téléphone. 969 millions qui paient en scannant un QR code. WeChat à lui seul qui absorbe 34 % de tout le trafic internet du pays. La Chine n'a pas traversé l'ère du bureau comme l'Occident. Elle est passée directement au mobile, et le fossé entre ce que les utilisateurs chinois attendent d'une expérience mobile et ce que la plupart des entreprises étrangères proposent est immense. Concevoir d'abord pour le bureau puis ajouter des points de rupture responsifs, c'est construire pour un internet que les Chinois ont quitté depuis des années.

## L'internet mobile chinois en chiffres

Ce ne sont pas des projections. C'est la situation actuelle.

| Indicateur | Valeur |
|---|---|
| Internautes en Chine | 1,30 milliard (91,6 % de pénétration) |
| Couverture haut débit mobile | 100 % (3G/4G/5G) |
| Utilisateurs actifs mensuels de WeChat | 1,481 milliard |
| Utilisateurs de mini-programmes WeChat | 949 millions (90 % de WeChat) |
| Utilisateurs du paiement mobile | 969 millions (96 % des adultes) |
| Marché du paiement mobile | 15,86 Mrd $ actuellement, 78,23 Mrd $ d'ici 2030 (TCAC 37,59 %) |
| Part de WeChat dans le trafic internet chinois | 34 % |

La Chine compte 1,3 milliard d'internautes en 2025. 91,6 % de la population connectée. La couverture haut débit mobile atteint 100 % sur les réseaux 3G, 4G et 5G. Plus de 95 % accèdent à internet principalement depuis un appareil mobile.

WeChat rassemble 1,481 milliard d'utilisateurs actifs mensuels. 949 millions d'entre eux utilisent les mini-programmes, soit 90 % de la base totale. Le trafic de données de WeChat représente à lui seul 34 % de tout le trafic internet en Chine.

> WeChat : 1,481 milliard d'utilisateurs actifs mensuels. 34 % de tout le trafic internet chinois. Bien plus qu'une application de messagerie. La plateforme où se joue l'essentiel de l'internet chinois.

Côté paiements, les chiffres sont saisissants. 969 millions d'utilisateurs du paiement mobile, couvrant 96 % des adultes chinois. Le marché s'élève à 15,86 milliards de dollars et devrait atteindre 78,23 milliards d'ici 2030, avec un taux de croissance annuel composé de 37,59 %. Ce n'est pas une tendance en phase d'accélération. C'est un acquis.

## Les principes de design qui comptent

| Principe | Spécification |
|---|---|
| Approche de conception | Mobile-only, pas mobile-first (95 %+ d'utilisateurs mobiles) |
| Navigateur principal à tester | Navigateur intégré de WeChat (WebKit ancien) |
| Zones tactiles | Min 44x44 px, optimal 48x48 px, espacement de 8 px |
| Placement des CTA | Tiers inférieur de l'écran (zone du pouce) |
| Navigation | Défilement vertical comme modèle principal |
| Flux de paiement | Paiement par QR code (Alipay / WeChat Pay) |

Concevoir pour le mobile en Chine n'a rien à voir avec le responsive design destiné à un public occidental. Les attentes sont plus élevées, le contexte de navigation diffère, et le navigateur de la majorité de vos utilisateurs n'est ni Chrome ni Safari. C'est le navigateur intégré de WeChat.

Le changement de paradigme est radical : mobile-only, et non mobile-first. Quand plus de 95 % de vos utilisateurs sont sur téléphone, l'écran du téléphone est le produit. Le bureau est l'accessoire. Les entreprises qui conçoivent pour le bureau avant de comprimer le résultat en responsive travaillent à l'envers, et cela se voit.

Le navigateur intégré de WeChat est la source de confusion la plus fréquente. Il fonctionne sur une ancienne version de WebKit : du CSS et du JavaScript qui s'affichent parfaitement dans les navigateurs modernes peuvent dysfonctionner dans WeChat. Si vos tests se limitent à Chrome et Safari, vous ne testez pas pour vos vrais utilisateurs. Il faut charger le site dans le navigateur WeChat et tout vérifier.

Zones tactiles : 44 par 44 pixels minimum, 48 par 48 en optimal, 8 pixels d'espacement entre elles. Ce n'est pas une suggestion. De petits boutons conçus pour un curseur de souris ne fonctionnent pas quand on navigue avec le pouce dans un métro bondé aux heures de pointe.

Les boutons d'appel à l'action principaux doivent se trouver dans le tiers inférieur de l'écran. C'est la zone naturelle du pouce en utilisation à une main. Des CTA placés en haut de l'écran obligent l'utilisateur à modifier sa prise ou à utiliser les deux mains. Une friction légère, mais qui pèse sur les conversions.

Le défilement vertical est le standard. Les utilisateurs mobiles chinois passent leur journée à faire défiler de longs flux verticaux sur WeChat, Douyin, Weibo. Le balayage horizontal, les menus hamburger, les structures de navigation imbriquées paraissent étrangers et maladroits.

Quant au flux de paiement : QR code. Pas un formulaire où l'on saisit les 16 chiffres d'une carte bancaire. Un QR code qui ouvre Alipay ou WeChat Pay. C'est ainsi que se déroulent les transactions sur mobile en Chine. Si votre tunnel de paiement demande la saisie manuelle d'informations de carte, vous avez déjà perdu vos utilisateurs.

> Paiement par QR code via Alipay ou WeChat Pay. C'est le standard. Si votre tunnel de paiement implique de taper des numéros de carte, vous demandez aux utilisateurs chinois un geste qu'ils n'ont plus fait depuis des années.

## L'écosystème des super-apps

Les utilisateurs chinois ne vivent pas dans un navigateur. Ils vivent dans des applications qui font tout.

WeChat, Alipay, Meituan. Chacune est une super-app qui réunit messagerie, commerce, paiements et services au sein d'une même plateforme. WeChat n'est pas une application de messagerie. C'est à la fois un navigateur, un portefeuille, un fil d'actualité, une vitrine marchande et une plateforme de mini-programmes. Alipay prend en charge le volet financier. Meituan couvre la livraison de repas, les réservations d'hôtels, les services de proximité, le tout en un seul endroit.

Les mini-programmes ont largement remplacé les applications natives pour les tâches du quotidien. Au lieu de télécharger une application distincte depuis l'App Store, les utilisateurs ouvrent un mini-programme dans WeChat ou Alipay. 949 millions de personnes s'en servent. Commander un repas, réserver un véhicule, s'enregistrer à l'hôtel, acheter un produit : le mini-programme est la voie attendue. Le téléchargement d'une application autonome est la solution de repli.

> 949 millions de personnes utilisent les mini-programmes WeChat. Pour la plupart des tâches du quotidien, le mini-programme est le produit. Le téléchargement depuis l'App Store est le plan B.

Les attentes au sein de ces plateformes sont implacables. Paiement instantané, sans saisie de carte. Connexion automatique via le SSO WeChat. Partage en un geste vers les contacts et les groupes. Des années d'expériences fluides ont rendu les utilisateurs allergiques à toute étape supplémentaire. La moindre friction, et ils partent.

| Couche | Rôle |
|---|---|
| Site web mobile responsive | SEO Baidu et visibilité dans la recherche organique |
| Mini-programme WeChat | Commodité et découverte au sein de l'application |
| Application native | Uniquement si le produit l'exige véritablement |

Pour les marques étrangères, la configuration sur laquelle la plupart convergent est la suivante : un site web mobile responsive pour le référencement Baidu et la visibilité en recherche organique, un mini-programme WeChat pour la commodité au sein de l'application, et une application native uniquement si le produit l'exige réellement. La plupart n'ont pas besoin de l'application native. Site mobile et mini-programme couvrent l'essentiel de ce que les utilisateurs chinois attendent d'une marque.
