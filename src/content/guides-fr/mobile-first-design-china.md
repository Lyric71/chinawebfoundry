---
title: "Design mobile-first pour la Chine : parlons plutôt de mobile-only"
subtitle: "En Chine, le « mobile-first » a déjà vieilli. Plus de 95 % des internautes se connectent depuis leur téléphone. Si votre site n'est pas pensé pour le mobile, il n'existe pas."
summary: "L'internet chinois est mobile-only. Principes de design, compatibilité avec le navigateur WeChat, écosystème des super-apps et stratégie mini-programme pour les marques étrangères."
visual: "/images/guides/mobile-first-design-china.webp"
order: 9
published: true
category: Design
---

1,3 milliard d'internautes, quasiment tous sur leur téléphone. 969 millions qui paient en scannant un QR code. WeChat à lui seul qui absorbe 34 % de tout le trafic internet du pays. La Chine n'a pas traversé l'ère du bureau comme l'Occident. Elle est passée directement au mobile, et le fossé entre ce qu'attendent les utilisateurs chinois d'une expérience mobile et ce que proposent la plupart des entreprises étrangères est vertigineux. Concevoir d'abord pour le bureau, puis ajouter des points de rupture responsive, c'est bâtir pour un internet que les Chinois ont déserté depuis longtemps.

## L'internet mobile chinois en chiffres

État des lieux à date, sans projection.

| Indicateur | Valeur |
|---|---|
| Internautes en Chine | 1,30 milliard (91,6 % de pénétration) |
| Couverture haut débit mobile | 100 % (3G/4G/5G) |
| Utilisateurs actifs mensuels de WeChat | 1,481 milliard |
| Utilisateurs de mini-programmes WeChat | 949 millions (90 % de WeChat) |
| Utilisateurs du paiement mobile | 969 millions (96 % des adultes) |
| Marché du paiement mobile | 15,86 Mrd $ aujourd'hui, 78,23 Mrd $ en 2030 (TCAC 37,59 %) |
| Part de WeChat dans le trafic internet chinois | 34 % |

La Chine compte 1,3 milliard d'internautes en 2025. 91,6 % de la population connectée. La couverture haut débit mobile atteint 100 % en 3G, 4G et 5G. Plus de 95 % accèdent à internet d'abord depuis un mobile.

WeChat rassemble 1,481 milliard d'utilisateurs actifs mensuels. 949 millions d'entre eux passent par les mini-programmes, soit 90 % de sa base. Le trafic de données de WeChat pèse à lui seul 34 % de tout l'internet chinois.

> WeChat : 1,481 milliard d'utilisateurs actifs mensuels. 34 % de tout le trafic internet chinois. La plateforme où se joue l'essentiel de l'internet chinois.

Côté paiements, les chiffres font tourner la tête. 969 millions d'utilisateurs du paiement mobile, soit 96 % des adultes chinois. Le marché pèse 15,86 milliards de dollars, et devrait atteindre 78,23 milliards d'ici 2030, à un rythme annuel composé de 37,59 %. Le paiement mobile est déjà la norme installée en Chine.

## Les principes de design qui comptent

| Principe | Spécification |
|---|---|
| Approche | Mobile-only (plus de 95 % d'utilisateurs mobiles) |
| Navigateur prioritaire à tester | Navigateur intégré de WeChat (WebKit ancien) |
| Zones tactiles | 44x44 px minimum, 48x48 px optimal, 8 px d'espacement |
| Placement des CTA | Tiers inférieur de l'écran (zone du pouce) |
| Navigation | Défilement vertical comme schéma principal |
| Flux de paiement | Paiement par QR code (Alipay ou WeChat Pay) |

Concevoir pour le mobile en Chine n'a rien à voir avec le responsive à l'occidentale. Les attentes sont plus hautes, le contexte de navigation diffère, et le navigateur dominant chez vos utilisateurs est celui intégré à WeChat. Chrome et Safari restent minoritaires.

Le basculement est radical : penser mobile-only. Quand plus de 95 % de vos utilisateurs sont sur téléphone, l'écran du téléphone est le produit. Les entreprises qui conçoivent pour le bureau avant de compresser le résultat en responsive travaillent à l'envers, et cela se voit.

Le navigateur intégré de WeChat reste la grande source de confusion. Il repose sur une vieille version de WebKit : du CSS et du JavaScript parfaitement lisibles dans les navigateurs modernes peuvent s'y casser. Se limiter à Chrome et Safari pour les tests revient à ne pas tester pour ses vrais utilisateurs. Il faut ouvrir le site dans le navigateur WeChat et tout vérifier.

Zones tactiles : 44 par 44 pixels au minimum, 48 par 48 en visée, 8 pixels d'espacement entre les éléments. Considérez ce seuil comme un plancher. De petits boutons pensés pour un curseur de souris ne fonctionnent pas quand on navigue au pouce dans un métro bondé aux heures de pointe.

Les appels à l'action principaux doivent vivre dans le tiers inférieur de l'écran. C'est la zone naturelle du pouce en tenue à une main. Un CTA collé en haut oblige à changer de prise ou à mobiliser les deux mains. Friction légère, mais friction quand même : les conversions y laissent des plumes.

Le défilement vertical est le standard. Les utilisateurs mobiles chinois passent leur journée à scroller des flux verticaux sur WeChat, Douyin, Weibo. Balayages horizontaux, menus burger, structures imbriquées paraissent étrangers et maladroits.

Côté paiement : un QR code qui déclenche Alipay ou WeChat Pay. C'est ainsi qu'on paie sur mobile en Chine. Si votre tunnel demande la saisie manuelle des 16 chiffres d'une carte, vous avez déjà perdu vos utilisateurs.

> Paiement par QR code via Alipay ou WeChat Pay. C'est le standard. Un tunnel qui demande de taper des numéros de carte exige des utilisateurs chinois un geste qu'ils n'ont plus fait depuis des années.

## L'écosystème des super-apps

Les utilisateurs chinois passent leur journée dans des applications qui font tout. La navigation depuis un navigateur web, à l'occidentale, reste minoritaire.

WeChat, Alipay, Meituan. Chacune est une super-app qui rassemble messagerie, commerce, paiements et services au sein d'une même plateforme. WeChat tient à la fois du navigateur, du portefeuille, du fil d'actualité, de la vitrine marchande et de la plateforme de mini-programmes. Alipay prend en charge le volet financier. Meituan couvre la livraison de repas, la réservation d'hôtels et les services de proximité.

Les mini-programmes ont largement remplacé les applications natives pour les tâches du quotidien. Au lieu de télécharger une application dédiée sur l'App Store, on ouvre un mini-programme dans WeChat ou Alipay. 949 millions de personnes s'en servent. Commander un repas, réserver une voiture, s'enregistrer à l'hôtel, acheter un produit : le mini-programme est la voie attendue. Télécharger une application autonome devient le plan B.

> 949 millions de personnes utilisent les mini-programmes WeChat. Pour la plupart des tâches du quotidien, le mini-programme est le produit. Le téléchargement depuis l'App Store est le plan B.

Les attentes à l'intérieur de ces plateformes sont implacables. Paiement instantané, sans saisie de carte. Connexion automatique via le SSO WeChat. Partage en un geste vers contacts et groupes. Des années d'expériences fluides ont rendu les utilisateurs allergiques à toute étape superflue. La moindre friction, et ils décrochent.

| Couche | Rôle |
|---|---|
| Site web mobile responsive | SEO Baidu et visibilité en recherche organique |
| Mini-programme WeChat | Commodité et découverte dans l'application |
| Application native | Uniquement si le produit l'exige |

Pour les marques étrangères, la configuration vers laquelle convergent la plupart des équipes ressemble à ceci : un site web mobile responsive pour le référencement Baidu et la visibilité en recherche organique, un mini-programme WeChat pour la commodité dans l'application, et une application native uniquement si le produit le justifie. La plupart n'ont pas besoin de cette dernière. Site mobile et mini-programme couvrent l'essentiel de ce qu'un utilisateur chinois attend d'une marque.
