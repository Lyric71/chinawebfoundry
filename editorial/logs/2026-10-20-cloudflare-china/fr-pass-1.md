---
title: "Cloudflare en Chine : réseau et formalités ICP"
subtitle: "Les conditions d’accès au réseau chinois de Cloudflare, les formalités par domaine et les vérifications à mener avant la bascule."
summary: "China Network exige Enterprise, un enregistrement ou une licence ICP par domaine racine et l’accord de JD Cloud. Préparez votre dossier."
visual: "/images/guides/cloudflare-china.webp"
order: 48
published: true
publishedAt: 2026-10-20
updatedAt: 2026-10-20
reviewBy: 2026-11-26
category: Hosting
author: cyril-drouin
---

Pour diffuser un site depuis la Chine continentale avec Cloudflare, il faut
un contrat Enterprise, un abonnement distinct à China Network et un
enregistrement ICP (ICP备案) ou une licence ICP (ICP许可证) par domaine
racine. JD Cloud doit également examiner le contenu. Pour le seul site de
Cloudflare, 21YunBox a obtenu 3 chargements complets sur 6 depuis Alibaba
Cloud (阿里云), région cn-zhangjiakou, le 28 août 2026. Les configurations
CDN des clients restent non testées ici.

| Votre situation | Démarche à prévoir |
|---|---|
| Cloudflare sans China Network | Souscrire China Network séparément, avec un contrat Enterprise |
| Compte Enterprise sans enregistrement ICP | Obtenir l’enregistrement ou la licence requis pour chaque domaine racine |
| Enregistrement déjà valide | Soumettre le domaine et son contenu à JD Cloud |
| Domaine approuvé | Achever la mise en service et vérifier les fonctions utilisées par le site |

> China Network fait l’objet d’un abonnement distinct réservé aux clients
> Enterprise. JD Cloud exploite les centres de données en Chine continentale.
> Chaque domaine racine doit disposer d’un enregistrement ou d’une licence ICP valide.
> Source : Cloudflare, présentation de China Network, 30 avril 2026.
> https://developers.cloudflare.com/china-network/

Documentation vérifiée le 20 octobre 2026.

Vérifiez le statut China Network du domaine concerné dans votre compte.
Demandez au responsable du compte de confirmer l’abonnement et la liste des
domaines approuvés. Vous pourrez alors fixer la bascule en fonction des
autorisations restant à obtenir.

## Cloudflare en Chine : préparer le dossier du domaine

Commencez par les domaines racines : `example.com` en est un,
`www.example.com` est un sous-domaine. Recensez toutes les adresses prévues
pour le lancement, y compris celles de marques distinctes. Vérifiez
l’enregistrement ICP de chaque domaine racine.

Cloudflare exige un enregistrement ICP (ICP备案) ou une licence ICP
(ICP许可证) valide pour chacun. Avant de déposer la demande, déterminez
l’autorisation correspondant à l’activité du site. Notre
[guide ICP pour les entreprises étrangères](/fr/ressources/guide-web-chine/licence-icp-entreprises-etrangeres/)
explique cette distinction et les conditions relatives à l’entité déclarante.

Transmettez cette liste à la personne chargée du dossier avant d’arrêter la
date de lancement. Une équipe régionale a pu enregistrer une adresse de
marque séparée. Assurez-vous que le dossier ICP couvre bien le domaine à
raccorder au réseau.

Préparez aussi les pièces destinées à JD Cloud : noms du client et de
l’entreprise, nom de domaine, numéro ICP, description du contenu et
attestation signée fournie par l’équipe commerciale. Le numéro ICP doit
également figurer dans le pied de page du site.

> JD Cloud examine le contenu des domaines avant l’activation de China
> Network. Une fois cet examen terminé, Cloudflare estime à 24 à 48 heures
> le délai de première mise en service d’une zone.
> Source : Cloudflare, mise en route, 17 avril 2026.
> https://developers.cloudflare.com/china-network/get-started/

Le délai annoncé commence après la validation du contenu. Prévoyez donc
des dates distinctes pour l’obtention de l’ICP et pour l’examen de JD Cloud,
surtout si la demande d’enregistrement n’a pas encore été déposée.

## Ce que mesure le test du site de Cloudflare

Le 28 août 2026, 21YunBox a testé le site de Cloudflare depuis une région
cloud de Chine continentale. Cette observation indépendante n’est pas
accompagnée d’un résultat sur une ligne résidentielle. Elle ne compare pas
non plus un domaine client avec et sans China Network.

| Cible testée | Résultat depuis le centre de données | Résultat résidentiel | Verdict | Date du test |
|---|---|---|---|---|
| Site de Cloudflare | Alibaba Cloud (阿里云), cn-zhangjiakou : 3 chargements complets sur 6 | Non fourni pour ce test | Intermittent (21YunBox), site du fournisseur uniquement | 28 août 2026 |

> Pour le site de Cloudflare, 21YunBox rapporte 3 chargements complets sur
> 6 tentatives depuis Alibaba Cloud (阿里云), région cn-zhangjiakou,
> le 28 août 2026.
> Source : 21YunBox, Cloudflare en Chine : China Network et prérequis ICP,
> révisé le 7 octobre 2026.
> https://www.21cloudbox.com/support/cloudflare-china.html

Un nom d’hôte client reste non testé ici tant qu’aucune mesure indépendante
datée ne porte sur ce nom précis. Pour un formulaire de contact, il faut
aussi vérifier l’envoi et la réception effective du message.

La documentation de Cloudflare précise que le routage anycast peut envoyer
une requête vers un centre de données géographiquement plus éloigné. Le
routage et les accords d’interconnexion du fournisseur d’accès influencent
le trajet. La localisation du visiteur ne suffit donc pas à promettre une
ville de desserte particulière.

> Cloudflare indique qu’une requête peut atteindre un autre centre de
> données que le plus proche géographiquement. Les paramètres de zone ne
> permettent pas au client d’imposer ce choix.
> Source : Cloudflare, routage géographique, 14 octobre 2026.
> https://developers.cloudflare.com/support/troubleshooting/general-troubleshooting/geographic-traffic-routing/

## Vérifier les fonctions avant la bascule

Comparez les fonctions actuellement utilisées par votre site avec la liste
de disponibilité de China Network. Examinez les options de cache et, si
votre formulaire en utilise un, le service de vérification des visiteurs.
Prévoyez un remplacement pour toute fonction non prise en charge avant la
bascule. La prise en charge régionale et l’accessibilité mesurée demandent
deux vérifications distinctes.

> La liste des fonctions de China Network prévoit le cache statique et
> exclut Tiered Cache et Cache Reserve. Elle indique également que
> Turnstile n’est pas disponible en Chine continentale.
> Source : Cloudflare, produits et fonctions disponibles, 10 juin 2026.
> https://developers.cloudflare.com/china-network/reference/available-products/

Pour chaque formulaire, relevez l’adresse qui reçoit les données et les
scripts que le navigateur doit charger au préalable. Ajoutez à cet
inventaire les hébergeurs d’images. Notre
[guide des échecs de reCAPTCHA sur les formulaires en Chine](/fr/ressources/guide-web-chine/recaptcha-chine/)
traite cette dépendance particulière. Changer le CDN de la page ne prouve
pas qu’un service de formulaire distinct sera utilisable.

Si vous disposez déjà d’Enterprise et d’un enregistrement valide, confirmez
avec votre interlocuteur commercial l’approbation du domaine et les
fonctions nécessaires. Si la demande ICP n’a pas commencé, désignez son
responsable avant de planifier la bascule. Notre service
d’[hébergement en Chine](/fr/services/hebergement-chine/) prend en charge
l’hébergement et les démarches ICP liés à ce choix.

## Avant de fixer la date

**Peut-on essayer China Network avant d’obtenir l’ICP ?**

Les conditions d’essai publiées par Cloudflare exigent un numéro ICP valide
et l’approbation du contenu par JD Cloud. Préparez ces éléments avant de
demander un essai. L’échange avec l’équipe commerciale permet de définir
son périmètre et les documents nécessaires à une démonstration en
conditions réelles sur China Network.

**Cloudflare peut-il déposer la demande ICP à notre place ?**

Cloudflare précise que ni lui ni JD Cloud ne prennent en charge les demandes
ICP, mais qu’il peut orienter ses clients vers des partenaires. Désignez
qui déposera et suivra le dossier. Conservez une copie de l’enregistrement
avec l’inventaire des domaines pour garder une attribution claire des
responsabilités en cas de changement d’agence.

**Que se passe-t-il si l’ICP est révoqué ?**

JD Cloud peut suspendre ou résilier l’accès au service chinois. Cloudflare
indique alors acheminer les domaines concernés vers des centres de données
hors de Chine continentale. Maintenez à jour les coordonnées du responsable
ICP et faites examiner tout changement de domaine ou d’activité du site
par l’équipe chargée du dossier.

> La FAQ de Cloudflare exige l’ICP et l’approbation du contenu pour un
> essai. Elle confie les demandes au client ou à son partenaire et décrit
> le réacheminement hors de Chine continentale en cas de révocation.
> Source : Cloudflare, FAQ China Network, 16 avril 2026.
> https://developers.cloudflare.com/china-network/faq/

Préparez votre liste de domaines et l’état des démarches ICP pour notre échange.
