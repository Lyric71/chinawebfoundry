# Publish decisions, 20 October 2026

- Read the canonical prompt, manifest, current run log and working tree before editing. SHA-256 matches C1F66319CE346109EE2C7397FF6546FE284CD5600C7ED5AF332009CACEE42032.
- Previous publish attempts stopped on model session/credit limits before publishing. Continue the authorised fallback without repeating completed drafting, quality, image generation or live-page correction translations.
- Exactly one image_ready row exists: T2-04 cloudflare-china, with quality_passed_on 2026-10-20. No date hold applies. Its 2026-11-05 date orders the queue only.
- Read createblogarticle from C:/Users/cyril/.claude/skills/createblogarticle/SKILL.md because there is no project copy. Read the project deep-translate skill, HUMANIZER.md, translation rules and house style. Apply the SPEC mapping and sequential FR, ES, DE passes, overriding upstream order and approval pauses.
- The draft log and snapshots document all 13 drafting iterations, 18 quality passes, two source checks and three translation passes for each corrected live-page locale. Preserve that work.
- review-due reports no overdue item on 2026-10-20; 54 review dates, next 2026-10-31. No recheck change needed.
- Preserve unrelated editorial T4 policy, dependency-index translations, layout/table/OG changes and runner changes. Stage only Cloudflare-specific changes, including selected hunks in shared files.
- User explicitly requires IndexNow after deployment; this overrides the runbook's automatic-only instruction.
- Draft source copy remains verbatim apart from the required structural conversion and internal links. No new factual claims introduced.

### FR pass 1 complete

Humanised French translation: all sections and metadata newly composed; formal register, nine humanizer checks, dated evidence and local links preserved.

Section 1
Before:
(New locale: no prior section)
After:
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



Section 2
Before:
(New locale: no prior section)
After:
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



Section 3
Before:
(New locale: no prior section)
After:
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



Section 4
Before:
(New locale: no prior section)
After:
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



Section 5
Before:
(New locale: no prior section)
After:
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


### FR pass 2 complete

Native rewrite from the French text alone: revised all SEO fields, domain workflow, timing, evidence scope, feature check and application answer. Other sections reviewed and retained.

Section 1
Before:
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


After:
---
title: "Cloudflare en Chine : les prérequis ICP et réseau"
subtitle: "Abonnement, dossier ICP et examen du contenu : les conditions à réunir pour diffuser un site depuis la Chine continentale avec Cloudflare."
summary: "Pour activer China Network, prévoyez Enterprise, un dossier ICP valide par domaine racine et la validation du contenu par JD Cloud."
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

Consultez le statut du domaine dans votre compte China Network. Faites
confirmer l’abonnement et les domaines approuvés par le responsable du
compte, puis établissez le calendrier de bascule selon les autorisations
qui restent à obtenir.



Section 2
Before:
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


After:
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

Avant d’arrêter la date de lancement, transmettez la liste au responsable
du dossier. Vérifiez notamment les adresses de marque enregistrées par
une équipe régionale : le domaine à raccorder doit bien figurer dans
l’enregistrement ICP.

Préparez aussi les pièces destinées à JD Cloud : noms du client et de
l’entreprise, nom de domaine, numéro ICP, description du contenu et
attestation signée fournie par l’équipe commerciale. Le numéro ICP doit
également figurer dans le pied de page du site.

> JD Cloud examine le contenu des domaines avant l’activation de China
> Network. Une fois cet examen terminé, Cloudflare estime à 24 à 48 heures
> le délai de première mise en service d’une zone.
> Source : Cloudflare, mise en route, 17 avril 2026.
> https://developers.cloudflare.com/china-network/get-started/

Ce délai court à partir de la validation du contenu. Le calendrier du
projet doit réserver du temps à l’obtention de l’ICP, puis à l’examen de
JD Cloud. C’est particulièrement nécessaire lorsque la demande
d’enregistrement n’a pas encore été déposée.



Section 3
Before:
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


After:
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

Sans mesure indépendante datée portant sur le nom d’hôte exact du client,
celui-ci reste classé comme non testé dans cet article. Vérifiez séparément
qu’un formulaire de contact permet bien d’envoyer un message et que son
destinataire le reçoit.

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



Section 4
Before:
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


After:
## Vérifier les fonctions avant la bascule

Comparez les fonctions actuellement utilisées par votre site avec la liste
de disponibilité de China Network. Examinez les options de cache et, si
votre formulaire en utilise un, le service de vérification des visiteurs.
Pour toute fonction absente du réseau chinois, convenez d’une solution
de remplacement avant la bascule. Vérifiez séparément la prise en charge
du produit dans la région et son accessibilité effective.

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



Section 5
Before:
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

After:
## Avant de fixer la date

**Peut-on essayer China Network avant d’obtenir l’ICP ?**

Les conditions d’essai publiées par Cloudflare exigent un numéro ICP valide
et l’approbation du contenu par JD Cloud. Préparez ces éléments avant de
demander un essai. L’échange avec l’équipe commerciale permet de définir
son périmètre et les documents nécessaires à une démonstration en
conditions réelles sur China Network.

**Cloudflare peut-il déposer la demande ICP à notre place ?**

Ni Cloudflare ni JD Cloud ne se chargent des demandes ICP, selon Cloudflare,
qui peut toutefois recommander des partenaires spécialisés. Désignez la
personne qui déposera et suivra votre dossier. Joignez une copie de
l’enregistrement à l’inventaire des domaines : en cas de changement
d’agence, chacun saura qui en a la charge.

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


### FR pass 3 complete

Final French editorial polish: precise ICP metadata, tighter evidence heading and wording, natural closing. All sections reviewed; NBSP punctuation, accents, six citations, three links and identifiers checked.

Section 1
Before:
---
title: "Cloudflare en Chine : les prérequis ICP et réseau"
subtitle: "Abonnement, dossier ICP et examen du contenu : les conditions à réunir pour diffuser un site depuis la Chine continentale avec Cloudflare."
summary: "Pour activer China Network, prévoyez Enterprise, un dossier ICP valide par domaine racine et la validation du contenu par JD Cloud."
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

Consultez le statut du domaine dans votre compte China Network. Faites
confirmer l’abonnement et les domaines approuvés par le responsable du
compte, puis établissez le calendrier de bascule selon les autorisations
qui restent à obtenir.


After:
---
title: "Cloudflare en Chine : conditions réseau et ICP"
subtitle: "Les abonnements et autorisations nécessaires pour diffuser un site depuis la Chine continentale avec Cloudflare, et les vérifications avant la bascule."
summary: "China Network exige Enterprise, un enregistrement ou une licence ICP par domaine racine et l’accord de JD Cloud sur le contenu."
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

Consultez le statut du domaine dans votre compte China Network. Faites
confirmer l’abonnement et les domaines approuvés par le responsable du
compte, puis établissez le calendrier de bascule selon les autorisations
qui restent à obtenir.



Section 2
Kept as-is after native review.

Section 3
Before:
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

Sans mesure indépendante datée portant sur le nom d’hôte exact du client,
celui-ci reste classé comme non testé dans cet article. Vérifiez séparément
qu’un formulaire de contact permet bien d’envoyer un message et que son
destinataire le reçoit.

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


After:
## La portée du test du site de Cloudflare

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

Sans mesure indépendante datée portant sur le nom d’hôte exact du client,
celui-ci reste non testé dans cet article. Vérifiez séparément
qu’un formulaire de contact permet bien d’envoyer un message et que son
destinataire le reçoit.

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



Section 4
Kept as-is after native review.

Section 5
Before:
## Avant de fixer la date

**Peut-on essayer China Network avant d’obtenir l’ICP ?**

Les conditions d’essai publiées par Cloudflare exigent un numéro ICP valide
et l’approbation du contenu par JD Cloud. Préparez ces éléments avant de
demander un essai. L’échange avec l’équipe commerciale permet de définir
son périmètre et les documents nécessaires à une démonstration en
conditions réelles sur China Network.

**Cloudflare peut-il déposer la demande ICP à notre place ?**

Ni Cloudflare ni JD Cloud ne se chargent des demandes ICP, selon Cloudflare,
qui peut toutefois recommander des partenaires spécialisés. Désignez la
personne qui déposera et suivra votre dossier. Joignez une copie de
l’enregistrement à l’inventaire des domaines : en cas de changement
d’agence, chacun saura qui en a la charge.

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

After:
## Avant de fixer la date

**Peut-on essayer China Network avant d’obtenir l’ICP ?**

Les conditions d’essai publiées par Cloudflare exigent un numéro ICP valide
et l’approbation du contenu par JD Cloud. Préparez ces éléments avant de
demander un essai. L’échange avec l’équipe commerciale permet de définir
son périmètre et les documents nécessaires à une démonstration en
conditions réelles sur China Network.

**Cloudflare peut-il déposer la demande ICP à notre place ?**

Ni Cloudflare ni JD Cloud ne se chargent des demandes ICP, selon Cloudflare,
qui peut recommander des partenaires spécialisés. Désignez la
personne qui déposera et suivra votre dossier. Joignez une copie de
l’enregistrement à l’inventaire des domaines : en cas de changement
d’agence, chacun saura qui en a la charge.

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

Munissez-vous de la liste de vos domaines et de l’état du dossier ICP pour notre échange.


### ES pass 1 complete

Humanised Spanish translation: every section and SEO field newly written in formal peninsular Spanish; nine humanizer checks, opening question marks, source scope and locale links preserved.

Section 1
Before:
(New locale: no prior section)
After:
---
title: "Cloudflare en China: requisitos de red e ICP"
subtitle: "Qué exige la red de Cloudflare en China continental y qué debe comprobar antes de cambiar la distribución de su sitio."
summary: "China Network requiere Enterprise, un registro o licencia ICP por dominio raíz y la revisión de JD Cloud. Prepare los requisitos antes del cambio."
visual: "/images/guides/cloudflare-china.webp"
order: 48
published: true
publishedAt: 2026-10-20
updatedAt: 2026-10-20
reviewBy: 2026-11-26
category: Hosting
author: cyril-drouin
---

Para servir un sitio desde China continental con Cloudflare se necesitan
Enterprise y una suscripción independiente a China Network, un registro
ICP (ICP备案) o una licencia ICP (ICP许可证) por dominio raíz y la revisión
de JD Cloud. En una prueba del sitio de Cloudflare, 21YunBox completó
3 de 6 cargas desde Alibaba Cloud (阿里云), región cn-zhangjiakou,
el 28 de agosto de 2026. Las configuraciones CDN de los clientes siguen
sin probarse aquí.

| Situación actual | Trámite necesario |
|---|---|
| Cloudflare sin China Network | Contratar China Network por separado con un plan Enterprise |
| Cuenta Enterprise sin registro ICP | Obtener el registro o la licencia exigidos para cada dominio raíz |
| Registro ya válido | Presentar el dominio y su contenido a JD Cloud |
| Dominio aprobado | Completar la puesta en marcha y comprobar las funciones utilizadas |

> Cloudflare reserva China Network a los clientes Enterprise mediante una
> suscripción independiente. JD Cloud opera sus centros de datos en China
> continental. Cada dominio raíz necesita un registro o una licencia ICP válidos.
> Fuente: Cloudflare, presentación de China Network, 30 de abril de 2026.
> https://developers.cloudflare.com/china-network/

Documentación comprobada el 20 de octubre de 2026.

Compruebe el estado del dominio concreto en su cuenta de China Network.
Pida al responsable de la cuenta que confirme la suscripción y los dominios
aprobados. Con esa información podrá planificar el cambio según las
autorizaciones que queden pendientes.



Section 2
Before:
(New locale: no prior section)
After:
## Cloudflare en China: los trámites del dominio

Empiece por el dominio raíz: `example.com` es uno; `www.example.com` es
un subdominio. Enumere los dominios que usará el lanzamiento, incluidas
las direcciones independientes de cada marca. Compruebe el registro ICP
de cada dominio raíz.

Cloudflare exige un registro ICP (ICP备案) o una licencia ICP (ICP许可证)
válidos para cada uno. Antes de presentar la solicitud, confirme qué
autorización corresponde a la actividad del sitio. Nuestra
[guía del registro ICP para empresas extranjeras](/es/recursos/guia-web-china/licencia-icp-empresas-extranjeras/)
explica la diferencia y los requisitos de la entidad solicitante.

Entregue la lista a quien tramite el expediente antes de fijar la fecha de
lanzamiento. Un equipo regional puede haber registrado una dirección de
marca distinta. Compruebe que el expediente ICP cubre el dominio que
pretende incorporar a la red.

Prepare también la documentación para JD Cloud: nombres del cliente y de
la empresa, dominio, número ICP, descripción del contenido y declaración
firmada facilitada por el equipo comercial. El número ICP debe figurar
además en el pie de página del sitio.

> JD Cloud revisa el contenido de los dominios antes de activar China
> Network. Tras esa revisión, Cloudflare estima entre 24 y 48 horas para
> la primera puesta en marcha de una zona.
> Fuente: Cloudflare, primeros pasos, 17 de abril de 2026.
> https://developers.cloudflare.com/china-network/get-started/

El plazo estimado empieza después de aprobar el contenido. Reserve fechas
propias para la autorización ICP y la revisión del contenido, sobre todo
si aún no se ha iniciado la solicitud del registro.



Section 3
Before:
(New locale: no prior section)
After:
## Qué demuestra la prueba del sitio de Cloudflare

El 28 de agosto de 2026, 21YunBox probó el sitio de Cloudflare desde una
región cloud de China continental. Esta observación de un tercero no
incluye un resultado equivalente desde una conexión residencial. Tampoco
compara un dominio cliente con y sin China Network.

| Objeto de la prueba | Resultado desde el centro de datos | Resultado residencial | Dictamen | Fecha |
|---|---|---|---|---|
| Sitio de Cloudflare | Alibaba Cloud (阿里云), cn-zhangjiakou: 3 cargas completas de 6 | No facilitado para esta prueba | Intermitente (21YunBox), solo el sitio del proveedor | 28 de agosto de 2026 |

> 21YunBox comunica 3 cargas completas de 6 intentos para el sitio de
> Cloudflare desde Alibaba Cloud (阿里云), región cn-zhangjiakou,
> el 28 de agosto de 2026.
> Fuente: 21YunBox, Cloudflare en China: China Network y requisito ICP,
> revisado el 7 de octubre de 2026.
> https://www.21cloudbox.com/support/cloudflare-china.html

Un nombre de host de un cliente sigue sin probarse aquí mientras no exista
una prueba de terceros, fechada y referida a ese nombre concreto. En un
formulario de contacto también hay que comprobar el envío y la recepción
efectiva del mensaje.

La documentación de Cloudflare advierte de que anycast puede enviar una
petición a un centro de datos geográficamente más lejano. El enrutamiento
y los acuerdos de interconexión del proveedor de acceso influyen en el
trayecto. Evite prometer una ciudad de servicio concreta basándose solo
en la ubicación del visitante.

> Según Cloudflare, una petición puede llegar a un centro de datos distinto
> del más cercano geográficamente. El cliente no puede fijar esa elección
> mediante la configuración de la zona.
> Fuente: Cloudflare, enrutamiento geográfico, 14 de octubre de 2026.
> https://developers.cloudflare.com/support/troubleshooting/general-troubleshooting/geographic-traffic-routing/



Section 4
Before:
(New locale: no prior section)
After:
## Revise las funciones antes de cambiar la distribución

Compare las funciones que utiliza su sitio con la lista de disponibilidad
de China Network. Revise las opciones de caché e identifique el servicio
de verificación de visitantes del formulario, si lo tiene. Acuerde una
alternativa para las funciones no compatibles antes del cambio. La
compatibilidad regional del producto y su accesibilidad medida requieren
comprobaciones distintas.

> La lista de funciones de China Network incluye caché estática y excluye
> Tiered Cache y Cache Reserve. También indica que Turnstile no está
> disponible en China continental.
> Fuente: Cloudflare, productos y funciones disponibles, 10 de junio de 2026.
> https://developers.cloudflare.com/china-network/reference/available-products/

Anote para cada formulario el destino que recibe el envío y los scripts
que el navegador debe cargar antes. Incluya también los servidores que
alojan las imágenes. La
[guía de fallos de reCAPTCHA en formularios en China](/es/recursos/guia-web-china/recaptcha-china/)
trata esa dependencia concreta. Cambiar el CDN de la página no demuestra
que un servicio de formularios separado sea utilizable.

Si ya dispone de Enterprise y de un registro válido, confirme con el equipo
comercial la aprobación del dominio y las funciones necesarias. Si el
trámite ICP no ha empezado, asigne un responsable antes de planificar el
cambio de red. Nuestro servicio de
[alojamiento en China](/es/servicios/alojamiento-china/) se ocupa del
alojamiento y de los trámites ICP asociados a esa decisión.



Section 5
Before:
(New locale: no prior section)
After:
## Antes de fijar el cambio

**¿Se puede probar China Network antes de obtener el registro?**

Los requisitos publicados por Cloudflare para una prueba de concepto
incluyen un número ICP válido y la aprobación del contenido por JD Cloud.
Prepare ambos antes de solicitarla. Aproveche la conversación comercial
para acordar el alcance de la prueba y los documentos que necesita para
realizarla en condiciones reales en China Network.

**¿Cloudflare tramitará el registro por nosotros?**

Cloudflare afirma que ni la empresa ni JD Cloud se responsabilizan de las
solicitudes ICP, aunque puede recomendar socios especializados. Decida
quién presentará y mantendrá su expediente. Guarde una copia del registro
junto al inventario de dominios para que un cambio de agencia no deje
sin identificar al responsable de estos trámites.

**¿Qué ocurre si se revoca el registro?**

JD Cloud puede suspender o cancelar el acceso al servicio chino. Cloudflare
indica que dirigirá los dominios afectados a centros de datos fuera de
China continental. Mantenga actualizados los datos del contacto ICP y
revise cualquier cambio del dominio o de la actividad del sitio con el
equipo encargado del registro.

> La FAQ de Cloudflare exige registro y aprobación del contenido para una
> prueba de concepto, atribuye la solicitud al cliente o a su socio y
> describe el desvío del tráfico fuera de China continental tras la revocación.
> Fuente: Cloudflare, preguntas frecuentes sobre China Network, 16 de abril de 2026.
> https://developers.cloudflare.com/china-network/faq/

Traiga a la reunión su lista de dominios y el estado de los trámites ICP.


### ES pass 2 complete

Native rewrite from Spanish alone: metadata, account and domain workflow, timing, evidence scope and filing responsibility reworked; all remaining sections reviewed in document order.

Section 1
Before:
---
title: "Cloudflare en China: requisitos de red e ICP"
subtitle: "Qué exige la red de Cloudflare en China continental y qué debe comprobar antes de cambiar la distribución de su sitio."
summary: "China Network requiere Enterprise, un registro o licencia ICP por dominio raíz y la revisión de JD Cloud. Prepare los requisitos antes del cambio."
visual: "/images/guides/cloudflare-china.webp"
order: 48
published: true
publishedAt: 2026-10-20
updatedAt: 2026-10-20
reviewBy: 2026-11-26
category: Hosting
author: cyril-drouin
---

Para servir un sitio desde China continental con Cloudflare se necesitan
Enterprise y una suscripción independiente a China Network, un registro
ICP (ICP备案) o una licencia ICP (ICP许可证) por dominio raíz y la revisión
de JD Cloud. En una prueba del sitio de Cloudflare, 21YunBox completó
3 de 6 cargas desde Alibaba Cloud (阿里云), región cn-zhangjiakou,
el 28 de agosto de 2026. Las configuraciones CDN de los clientes siguen
sin probarse aquí.

| Situación actual | Trámite necesario |
|---|---|
| Cloudflare sin China Network | Contratar China Network por separado con un plan Enterprise |
| Cuenta Enterprise sin registro ICP | Obtener el registro o la licencia exigidos para cada dominio raíz |
| Registro ya válido | Presentar el dominio y su contenido a JD Cloud |
| Dominio aprobado | Completar la puesta en marcha y comprobar las funciones utilizadas |

> Cloudflare reserva China Network a los clientes Enterprise mediante una
> suscripción independiente. JD Cloud opera sus centros de datos en China
> continental. Cada dominio raíz necesita un registro o una licencia ICP válidos.
> Fuente: Cloudflare, presentación de China Network, 30 de abril de 2026.
> https://developers.cloudflare.com/china-network/

Documentación comprobada el 20 de octubre de 2026.

Compruebe el estado del dominio concreto en su cuenta de China Network.
Pida al responsable de la cuenta que confirme la suscripción y los dominios
aprobados. Con esa información podrá planificar el cambio según las
autorizaciones que queden pendientes.


After:
---
title: "Cloudflare en China: red y trámites ICP"
subtitle: "Los contratos y autorizaciones necesarios para servir su sitio desde China continental, y las funciones que debe revisar antes del cambio."
summary: "Active China Network con Enterprise, un registro o licencia ICP por dominio raíz y la aprobación del contenido por JD Cloud. Consulte los requisitos."
visual: "/images/guides/cloudflare-china.webp"
order: 48
published: true
publishedAt: 2026-10-20
updatedAt: 2026-10-20
reviewBy: 2026-11-26
category: Hosting
author: cyril-drouin
---

Para servir un sitio desde China continental con Cloudflare se necesitan
Enterprise y una suscripción independiente a China Network, un registro
ICP (ICP备案) o una licencia ICP (ICP许可证) por dominio raíz y la revisión
de JD Cloud. En una prueba del sitio de Cloudflare, 21YunBox completó
3 de 6 cargas desde Alibaba Cloud (阿里云), región cn-zhangjiakou,
el 28 de agosto de 2026. Las configuraciones CDN de los clientes siguen
sin probarse aquí.

| Situación actual | Trámite necesario |
|---|---|
| Cloudflare sin China Network | Contratar China Network por separado con un plan Enterprise |
| Cuenta Enterprise sin registro ICP | Obtener el registro o la licencia exigidos para cada dominio raíz |
| Registro ya válido | Presentar el dominio y su contenido a JD Cloud |
| Dominio aprobado | Completar la puesta en marcha y comprobar las funciones utilizadas |

> Cloudflare reserva China Network a los clientes Enterprise mediante una
> suscripción independiente. JD Cloud opera sus centros de datos en China
> continental. Cada dominio raíz necesita un registro o una licencia ICP válidos.
> Fuente: Cloudflare, presentación de China Network, 30 de abril de 2026.
> https://developers.cloudflare.com/china-network/

Documentación comprobada el 20 de octubre de 2026.

Consulte en su cuenta el estado del dominio que desea incorporar a China
Network. El responsable de la cuenta debe confirmar la suscripción y los
dominios aprobados. Fije después el calendario según las autorizaciones
que falten.



Section 2
Before:
## Cloudflare en China: los trámites del dominio

Empiece por el dominio raíz: `example.com` es uno; `www.example.com` es
un subdominio. Enumere los dominios que usará el lanzamiento, incluidas
las direcciones independientes de cada marca. Compruebe el registro ICP
de cada dominio raíz.

Cloudflare exige un registro ICP (ICP备案) o una licencia ICP (ICP许可证)
válidos para cada uno. Antes de presentar la solicitud, confirme qué
autorización corresponde a la actividad del sitio. Nuestra
[guía del registro ICP para empresas extranjeras](/es/recursos/guia-web-china/licencia-icp-empresas-extranjeras/)
explica la diferencia y los requisitos de la entidad solicitante.

Entregue la lista a quien tramite el expediente antes de fijar la fecha de
lanzamiento. Un equipo regional puede haber registrado una dirección de
marca distinta. Compruebe que el expediente ICP cubre el dominio que
pretende incorporar a la red.

Prepare también la documentación para JD Cloud: nombres del cliente y de
la empresa, dominio, número ICP, descripción del contenido y declaración
firmada facilitada por el equipo comercial. El número ICP debe figurar
además en el pie de página del sitio.

> JD Cloud revisa el contenido de los dominios antes de activar China
> Network. Tras esa revisión, Cloudflare estima entre 24 y 48 horas para
> la primera puesta en marcha de una zona.
> Fuente: Cloudflare, primeros pasos, 17 de abril de 2026.
> https://developers.cloudflare.com/china-network/get-started/

El plazo estimado empieza después de aprobar el contenido. Reserve fechas
propias para la autorización ICP y la revisión del contenido, sobre todo
si aún no se ha iniciado la solicitud del registro.


After:
## Cloudflare en China: los trámites del dominio

Empiece por el dominio raíz: `example.com` es uno; `www.example.com` es
un subdominio. Enumere los dominios que usará el lanzamiento, incluidas
las direcciones independientes de cada marca. Compruebe el registro ICP
de cada dominio raíz.

Cloudflare exige un registro ICP (ICP备案) o una licencia ICP (ICP许可证)
válidos para cada uno. Antes de presentar la solicitud, confirme qué
autorización corresponde a la actividad del sitio. Nuestra
[guía del registro ICP para empresas extranjeras](/es/recursos/guia-web-china/licencia-icp-empresas-extranjeras/)
explica la diferencia y los requisitos de la entidad solicitante.

Antes de fijar el lanzamiento, entregue la lista al responsable del
expediente. Preste atención a las direcciones de marca que haya registrado
un equipo regional: el registro ICP debe cubrir el dominio que se
incorporará a la red.

Prepare también la documentación para JD Cloud: nombres del cliente y de
la empresa, dominio, número ICP, descripción del contenido y declaración
firmada facilitada por el equipo comercial. El número ICP debe figurar
además en el pie de página del sitio.

> JD Cloud revisa el contenido de los dominios antes de activar China
> Network. Tras esa revisión, Cloudflare estima entre 24 y 48 horas para
> la primera puesta en marcha de una zona.
> Fuente: Cloudflare, primeros pasos, 17 de abril de 2026.
> https://developers.cloudflare.com/china-network/get-started/

El plazo empieza a contar tras la aprobación del contenido. La autorización
ICP y la revisión de JD Cloud necesitan sus propios plazos en el proyecto,
especialmente si la solicitud del registro aún no se ha presentado.



Section 3
Before:
## Qué demuestra la prueba del sitio de Cloudflare

El 28 de agosto de 2026, 21YunBox probó el sitio de Cloudflare desde una
región cloud de China continental. Esta observación de un tercero no
incluye un resultado equivalente desde una conexión residencial. Tampoco
compara un dominio cliente con y sin China Network.

| Objeto de la prueba | Resultado desde el centro de datos | Resultado residencial | Dictamen | Fecha |
|---|---|---|---|---|
| Sitio de Cloudflare | Alibaba Cloud (阿里云), cn-zhangjiakou: 3 cargas completas de 6 | No facilitado para esta prueba | Intermitente (21YunBox), solo el sitio del proveedor | 28 de agosto de 2026 |

> 21YunBox comunica 3 cargas completas de 6 intentos para el sitio de
> Cloudflare desde Alibaba Cloud (阿里云), región cn-zhangjiakou,
> el 28 de agosto de 2026.
> Fuente: 21YunBox, Cloudflare en China: China Network y requisito ICP,
> revisado el 7 de octubre de 2026.
> https://www.21cloudbox.com/support/cloudflare-china.html

Un nombre de host de un cliente sigue sin probarse aquí mientras no exista
una prueba de terceros, fechada y referida a ese nombre concreto. En un
formulario de contacto también hay que comprobar el envío y la recepción
efectiva del mensaje.

La documentación de Cloudflare advierte de que anycast puede enviar una
petición a un centro de datos geográficamente más lejano. El enrutamiento
y los acuerdos de interconexión del proveedor de acceso influyen en el
trayecto. Evite prometer una ciudad de servicio concreta basándose solo
en la ubicación del visitante.

> Según Cloudflare, una petición puede llegar a un centro de datos distinto
> del más cercano geográficamente. El cliente no puede fijar esa elección
> mediante la configuración de la zona.
> Fuente: Cloudflare, enrutamiento geográfico, 14 de octubre de 2026.
> https://developers.cloudflare.com/support/troubleshooting/general-troubleshooting/geographic-traffic-routing/


After:
## El alcance de la prueba del sitio de Cloudflare

El 28 de agosto de 2026, 21YunBox probó el sitio de Cloudflare desde una
región cloud de China continental. Esta observación de un tercero no
incluye un resultado equivalente desde una conexión residencial. Tampoco
compara un dominio cliente con y sin China Network.

| Objeto de la prueba | Resultado desde el centro de datos | Resultado residencial | Dictamen | Fecha |
|---|---|---|---|---|
| Sitio de Cloudflare | Alibaba Cloud (阿里云), cn-zhangjiakou: 3 cargas completas de 6 | No facilitado para esta prueba | Intermitente (21YunBox), solo el sitio del proveedor | 28 de agosto de 2026 |

> 21YunBox comunica 3 cargas completas de 6 intentos para el sitio de
> Cloudflare desde Alibaba Cloud (阿里云), región cn-zhangjiakou,
> el 28 de agosto de 2026.
> Fuente: 21YunBox, Cloudflare en China: China Network y requisito ICP,
> revisado el 7 de octubre de 2026.
> https://www.21cloudbox.com/support/cloudflare-china.html

Para dar por probado el nombre de host de un cliente, hace falta una
medición de terceros que lo identifique y esté fechada. Hasta entonces
figura aquí como no probado. Compruebe por separado que el formulario
envía el mensaje y que este llega a su destinatario.

La documentación de Cloudflare advierte de que anycast puede enviar una
petición a un centro de datos geográficamente más lejano. El enrutamiento
y los acuerdos de interconexión del proveedor de acceso influyen en el
trayecto. Evite prometer una ciudad de servicio concreta basándose solo
en la ubicación del visitante.

> Según Cloudflare, una petición puede llegar a un centro de datos distinto
> del más cercano geográficamente. El cliente no puede fijar esa elección
> mediante la configuración de la zona.
> Fuente: Cloudflare, enrutamiento geográfico, 14 de octubre de 2026.
> https://developers.cloudflare.com/support/troubleshooting/general-troubleshooting/geographic-traffic-routing/



Section 4
Before:
## Revise las funciones antes de cambiar la distribución

Compare las funciones que utiliza su sitio con la lista de disponibilidad
de China Network. Revise las opciones de caché e identifique el servicio
de verificación de visitantes del formulario, si lo tiene. Acuerde una
alternativa para las funciones no compatibles antes del cambio. La
compatibilidad regional del producto y su accesibilidad medida requieren
comprobaciones distintas.

> La lista de funciones de China Network incluye caché estática y excluye
> Tiered Cache y Cache Reserve. También indica que Turnstile no está
> disponible en China continental.
> Fuente: Cloudflare, productos y funciones disponibles, 10 de junio de 2026.
> https://developers.cloudflare.com/china-network/reference/available-products/

Anote para cada formulario el destino que recibe el envío y los scripts
que el navegador debe cargar antes. Incluya también los servidores que
alojan las imágenes. La
[guía de fallos de reCAPTCHA en formularios en China](/es/recursos/guia-web-china/recaptcha-china/)
trata esa dependencia concreta. Cambiar el CDN de la página no demuestra
que un servicio de formularios separado sea utilizable.

Si ya dispone de Enterprise y de un registro válido, confirme con el equipo
comercial la aprobación del dominio y las funciones necesarias. Si el
trámite ICP no ha empezado, asigne un responsable antes de planificar el
cambio de red. Nuestro servicio de
[alojamiento en China](/es/servicios/alojamiento-china/) se ocupa del
alojamiento y de los trámites ICP asociados a esa decisión.


After:
## Revise las funciones antes de cambiar la distribución

Compare las funciones que utiliza su sitio con la lista de disponibilidad
de China Network. Revise las opciones de caché e identifique el servicio
de verificación de visitantes del formulario, si lo tiene. Acuerde una
alternativa para las funciones no compatibles antes del cambio. La
compatibilidad regional del producto debe comprobarse por separado de
su accesibilidad efectiva.

> La lista de funciones de China Network incluye caché estática y excluye
> Tiered Cache y Cache Reserve. También indica que Turnstile no está
> disponible en China continental.
> Fuente: Cloudflare, productos y funciones disponibles, 10 de junio de 2026.
> https://developers.cloudflare.com/china-network/reference/available-products/

Anote para cada formulario el destino que recibe el envío y los scripts
que el navegador debe cargar antes. Incluya también los servidores que
alojan las imágenes. La
[guía de fallos de reCAPTCHA en formularios en China](/es/recursos/guia-web-china/recaptcha-china/)
trata esa dependencia concreta. Cambiar el CDN de la página no demuestra
que un servicio de formularios separado sea utilizable.

Si ya dispone de Enterprise y de un registro válido, confirme con el equipo
comercial la aprobación del dominio y las funciones necesarias. Si el
trámite ICP no ha empezado, asigne un responsable antes de planificar el
cambio de red. Nuestro servicio de
[alojamiento en China](/es/servicios/alojamiento-china/) se ocupa del
alojamiento y de los trámites ICP asociados a esa decisión.



Section 5
Before:
## Antes de fijar el cambio

**¿Se puede probar China Network antes de obtener el registro?**

Los requisitos publicados por Cloudflare para una prueba de concepto
incluyen un número ICP válido y la aprobación del contenido por JD Cloud.
Prepare ambos antes de solicitarla. Aproveche la conversación comercial
para acordar el alcance de la prueba y los documentos que necesita para
realizarla en condiciones reales en China Network.

**¿Cloudflare tramitará el registro por nosotros?**

Cloudflare afirma que ni la empresa ni JD Cloud se responsabilizan de las
solicitudes ICP, aunque puede recomendar socios especializados. Decida
quién presentará y mantendrá su expediente. Guarde una copia del registro
junto al inventario de dominios para que un cambio de agencia no deje
sin identificar al responsable de estos trámites.

**¿Qué ocurre si se revoca el registro?**

JD Cloud puede suspender o cancelar el acceso al servicio chino. Cloudflare
indica que dirigirá los dominios afectados a centros de datos fuera de
China continental. Mantenga actualizados los datos del contacto ICP y
revise cualquier cambio del dominio o de la actividad del sitio con el
equipo encargado del registro.

> La FAQ de Cloudflare exige registro y aprobación del contenido para una
> prueba de concepto, atribuye la solicitud al cliente o a su socio y
> describe el desvío del tráfico fuera de China continental tras la revocación.
> Fuente: Cloudflare, preguntas frecuentes sobre China Network, 16 de abril de 2026.
> https://developers.cloudflare.com/china-network/faq/

Traiga a la reunión su lista de dominios y el estado de los trámites ICP.

After:
## Antes de fijar el cambio

**¿Se puede probar China Network antes de obtener el registro?**

Los requisitos publicados por Cloudflare para una prueba de concepto
incluyen un número ICP válido y la aprobación del contenido por JD Cloud.
Prepare ambos antes de solicitarla. Aproveche la conversación comercial
para acordar el alcance de la prueba y los documentos que necesita para
realizarla en condiciones reales en China Network.

**¿Cloudflare tramitará el registro por nosotros?**

Según Cloudflare, las solicitudes ICP no corren a cargo de la empresa ni
de JD Cloud. Cloudflare puede recomendar socios especializados. Designe
a quien presentará y mantendrá el expediente, y conserve una copia del
registro con el inventario de dominios. Así quedará constancia de quién
asume los trámites aunque cambie de agencia.

**¿Qué ocurre si se revoca el registro?**

JD Cloud puede suspender o cancelar el acceso al servicio chino. Cloudflare
indica que dirigirá los dominios afectados a centros de datos fuera de
China continental. Mantenga actualizados los datos del contacto ICP y
revise cualquier cambio del dominio o de la actividad del sitio con el
equipo encargado del registro.

> La FAQ de Cloudflare exige registro y aprobación del contenido para una
> prueba de concepto, atribuye la solicitud al cliente o a su socio y
> describe el desvío del tráfico fuera de China continental tras la revocación.
> Fuente: Cloudflare, preguntas frecuentes sobre China Network, 16 de abril de 2026.
> https://developers.cloudflare.com/china-network/faq/

Traiga a la reunión su lista de dominios y el estado de los trámites ICP.


### ES pass 3 complete

Final Spanish editorial polish: natural metadata and headings, precise evidence qualification and closing; accents, inverted question marks, six citations and local routes verified.

Section 1
Before:
---
title: "Cloudflare en China: red y trámites ICP"
subtitle: "Los contratos y autorizaciones necesarios para servir su sitio desde China continental, y las funciones que debe revisar antes del cambio."
summary: "Active China Network con Enterprise, un registro o licencia ICP por dominio raíz y la aprobación del contenido por JD Cloud. Consulte los requisitos."
visual: "/images/guides/cloudflare-china.webp"
order: 48
published: true
publishedAt: 2026-10-20
updatedAt: 2026-10-20
reviewBy: 2026-11-26
category: Hosting
author: cyril-drouin
---

Para servir un sitio desde China continental con Cloudflare se necesitan
Enterprise y una suscripción independiente a China Network, un registro
ICP (ICP备案) o una licencia ICP (ICP许可证) por dominio raíz y la revisión
de JD Cloud. En una prueba del sitio de Cloudflare, 21YunBox completó
3 de 6 cargas desde Alibaba Cloud (阿里云), región cn-zhangjiakou,
el 28 de agosto de 2026. Las configuraciones CDN de los clientes siguen
sin probarse aquí.

| Situación actual | Trámite necesario |
|---|---|
| Cloudflare sin China Network | Contratar China Network por separado con un plan Enterprise |
| Cuenta Enterprise sin registro ICP | Obtener el registro o la licencia exigidos para cada dominio raíz |
| Registro ya válido | Presentar el dominio y su contenido a JD Cloud |
| Dominio aprobado | Completar la puesta en marcha y comprobar las funciones utilizadas |

> Cloudflare reserva China Network a los clientes Enterprise mediante una
> suscripción independiente. JD Cloud opera sus centros de datos en China
> continental. Cada dominio raíz necesita un registro o una licencia ICP válidos.
> Fuente: Cloudflare, presentación de China Network, 30 de abril de 2026.
> https://developers.cloudflare.com/china-network/

Documentación comprobada el 20 de octubre de 2026.

Consulte en su cuenta el estado del dominio que desea incorporar a China
Network. El responsable de la cuenta debe confirmar la suscripción y los
dominios aprobados. Fije después el calendario según las autorizaciones
que falten.


After:
---
title: "Cloudflare en China: requisitos ICP y de red"
subtitle: "Qué contratos y autorizaciones necesita para servir su sitio desde China continental con Cloudflare, y qué funciones conviene revisar antes del cambio."
summary: "China Network exige Enterprise, un registro o licencia ICP por dominio raíz y que JD Cloud apruebe el contenido. Prepare la puesta en marcha."
visual: "/images/guides/cloudflare-china.webp"
order: 48
published: true
publishedAt: 2026-10-20
updatedAt: 2026-10-20
reviewBy: 2026-11-26
category: Hosting
author: cyril-drouin
---

Para servir un sitio desde China continental con Cloudflare se necesitan
Enterprise y una suscripción independiente a China Network, un registro
ICP (ICP备案) o una licencia ICP (ICP许可证) por dominio raíz y la revisión
de JD Cloud. En una prueba del sitio de Cloudflare, 21YunBox completó
3 de 6 cargas desde Alibaba Cloud (阿里云), región cn-zhangjiakou,
el 28 de agosto de 2026. Las configuraciones CDN de los clientes siguen
sin probarse aquí.

| Situación actual | Trámite necesario |
|---|---|
| Cloudflare sin China Network | Contratar China Network por separado con un plan Enterprise |
| Cuenta Enterprise sin registro ICP | Obtener el registro o la licencia exigidos para cada dominio raíz |
| Registro ya válido | Presentar el dominio y su contenido a JD Cloud |
| Dominio aprobado | Completar la puesta en marcha y comprobar las funciones utilizadas |

> Cloudflare reserva China Network a los clientes Enterprise mediante una
> suscripción independiente. JD Cloud opera sus centros de datos en China
> continental. Cada dominio raíz necesita un registro o una licencia ICP válidos.
> Fuente: Cloudflare, presentación de China Network, 30 de abril de 2026.
> https://developers.cloudflare.com/china-network/

Documentación comprobada el 20 de octubre de 2026.

Consulte en su cuenta el estado del dominio que desea incorporar a China
Network. El responsable de la cuenta debe confirmar la suscripción y los
dominios aprobados. Fije después el calendario según las autorizaciones
que falten.



Section 2
Kept as-is after native review.

Section 3
Before:
## El alcance de la prueba del sitio de Cloudflare

El 28 de agosto de 2026, 21YunBox probó el sitio de Cloudflare desde una
región cloud de China continental. Esta observación de un tercero no
incluye un resultado equivalente desde una conexión residencial. Tampoco
compara un dominio cliente con y sin China Network.

| Objeto de la prueba | Resultado desde el centro de datos | Resultado residencial | Dictamen | Fecha |
|---|---|---|---|---|
| Sitio de Cloudflare | Alibaba Cloud (阿里云), cn-zhangjiakou: 3 cargas completas de 6 | No facilitado para esta prueba | Intermitente (21YunBox), solo el sitio del proveedor | 28 de agosto de 2026 |

> 21YunBox comunica 3 cargas completas de 6 intentos para el sitio de
> Cloudflare desde Alibaba Cloud (阿里云), región cn-zhangjiakou,
> el 28 de agosto de 2026.
> Fuente: 21YunBox, Cloudflare en China: China Network y requisito ICP,
> revisado el 7 de octubre de 2026.
> https://www.21cloudbox.com/support/cloudflare-china.html

Para dar por probado el nombre de host de un cliente, hace falta una
medición de terceros que lo identifique y esté fechada. Hasta entonces
figura aquí como no probado. Compruebe por separado que el formulario
envía el mensaje y que este llega a su destinatario.

La documentación de Cloudflare advierte de que anycast puede enviar una
petición a un centro de datos geográficamente más lejano. El enrutamiento
y los acuerdos de interconexión del proveedor de acceso influyen en el
trayecto. Evite prometer una ciudad de servicio concreta basándose solo
en la ubicación del visitante.

> Según Cloudflare, una petición puede llegar a un centro de datos distinto
> del más cercano geográficamente. El cliente no puede fijar esa elección
> mediante la configuración de la zona.
> Fuente: Cloudflare, enrutamiento geográfico, 14 de octubre de 2026.
> https://developers.cloudflare.com/support/troubleshooting/general-troubleshooting/geographic-traffic-routing/


After:
## El alcance de la prueba del sitio de Cloudflare

El 28 de agosto de 2026, 21YunBox probó el sitio de Cloudflare desde una
región cloud de China continental. Esta observación de un tercero no
incluye un resultado equivalente desde una conexión residencial. Tampoco
compara un dominio cliente con y sin China Network.

| Objeto de la prueba | Resultado desde el centro de datos | Resultado residencial | Dictamen | Fecha |
|---|---|---|---|---|
| Sitio de Cloudflare | Alibaba Cloud (阿里云), cn-zhangjiakou: 3 cargas completas de 6 | No facilitado para esta prueba | Intermitente (21YunBox), solo el sitio del proveedor | 28 de agosto de 2026 |

> 21YunBox comunica 3 cargas completas de 6 intentos para el sitio de
> Cloudflare desde Alibaba Cloud (阿里云), región cn-zhangjiakou,
> el 28 de agosto de 2026.
> Fuente: 21YunBox, Cloudflare en China: China Network y requisito ICP,
> revisado el 7 de octubre de 2026.
> https://www.21cloudbox.com/support/cloudflare-china.html

Para considerar probado el nombre de host de un cliente, hace falta una
medición de terceros que lo identifique y esté fechada. Hasta entonces
figura aquí como no probado. Compruebe por separado que el formulario
envía el mensaje y que este llega a su destinatario.

La documentación de Cloudflare advierte de que anycast puede enviar una
petición a un centro de datos geográficamente más lejano. El enrutamiento
y los acuerdos de interconexión del proveedor de acceso influyen en el
trayecto. Evite prometer una ciudad de servicio concreta basándose solo
en la ubicación del visitante.

> Según Cloudflare, una petición puede llegar a un centro de datos distinto
> del más cercano geográficamente. El cliente no puede fijar esa elección
> mediante la configuración de la zona.
> Fuente: Cloudflare, enrutamiento geográfico, 14 de octubre de 2026.
> https://developers.cloudflare.com/support/troubleshooting/general-troubleshooting/geographic-traffic-routing/



Section 4
Kept as-is after native review.

Section 5
Before:
## Antes de fijar el cambio

**¿Se puede probar China Network antes de obtener el registro?**

Los requisitos publicados por Cloudflare para una prueba de concepto
incluyen un número ICP válido y la aprobación del contenido por JD Cloud.
Prepare ambos antes de solicitarla. Aproveche la conversación comercial
para acordar el alcance de la prueba y los documentos que necesita para
realizarla en condiciones reales en China Network.

**¿Cloudflare tramitará el registro por nosotros?**

Según Cloudflare, las solicitudes ICP no corren a cargo de la empresa ni
de JD Cloud. Cloudflare puede recomendar socios especializados. Designe
a quien presentará y mantendrá el expediente, y conserve una copia del
registro con el inventario de dominios. Así quedará constancia de quién
asume los trámites aunque cambie de agencia.

**¿Qué ocurre si se revoca el registro?**

JD Cloud puede suspender o cancelar el acceso al servicio chino. Cloudflare
indica que dirigirá los dominios afectados a centros de datos fuera de
China continental. Mantenga actualizados los datos del contacto ICP y
revise cualquier cambio del dominio o de la actividad del sitio con el
equipo encargado del registro.

> La FAQ de Cloudflare exige registro y aprobación del contenido para una
> prueba de concepto, atribuye la solicitud al cliente o a su socio y
> describe el desvío del tráfico fuera de China continental tras la revocación.
> Fuente: Cloudflare, preguntas frecuentes sobre China Network, 16 de abril de 2026.
> https://developers.cloudflare.com/china-network/faq/

Traiga a la reunión su lista de dominios y el estado de los trámites ICP.

After:
## Antes de fijar la fecha del cambio

**¿Se puede probar China Network antes de obtener el registro?**

Los requisitos publicados por Cloudflare para una prueba de concepto
incluyen un número ICP válido y la aprobación del contenido por JD Cloud.
Prepare ambos antes de solicitarla. Aproveche la conversación comercial
para acordar el alcance de la prueba y los documentos que necesita para
realizarla en condiciones reales en China Network.

**¿Cloudflare tramitará el registro por nosotros?**

Según Cloudflare, las solicitudes ICP no corren a cargo de la empresa ni
de JD Cloud. Cloudflare puede recomendar socios especializados. Designe
a quien presentará y mantendrá el expediente, y conserve una copia del
registro con el inventario de dominios. Así quedará constancia de quién
asume los trámites aunque cambie de agencia.

**¿Qué ocurre si se revoca el registro?**

JD Cloud puede suspender o cancelar el acceso al servicio chino. Cloudflare
indica que dirigirá los dominios afectados a centros de datos fuera de
China continental. Mantenga actualizados los datos del contacto ICP y
revise cualquier cambio del dominio o de la actividad del sitio con el
equipo encargado del registro.

> La FAQ de Cloudflare exige registro y aprobación del contenido para una
> prueba de concepto, atribuye la solicitud al cliente o a su socio y
> describe el desvío del tráfico fuera de China continental tras la revocación.
> Fuente: Cloudflare, preguntas frecuentes sobre China Network, 16 de abril de 2026.
> https://developers.cloudflare.com/china-network/faq/

Prepare para la reunión la lista de dominios y el estado de su expediente ICP.


### DE pass 1 complete

Humanised German translation: all sections and SEO fields newly composed, written business register, nine humanizer checks; exact counts, dates, hostnames and three locale links retained.

Section 1
Before:
(New locale: no prior section)
After:
---
title: "Cloudflare in China: ICP und Netzvoraussetzungen"
subtitle: "Welche Verträge und ICP-Nachweise Cloudflares chinesisches Netz verlangt und was Sie vor der Umstellung Ihrer Website prüfen sollten."
summary: "China Network verlangt Enterprise, eine ICP-Registrierung oder Lizenz je Hauptdomain und die Prüfung durch JD Cloud. So bereiten Sie die Umstellung vor."
visual: "/images/guides/cloudflare-china.webp"
order: 48
published: true
publishedAt: 2026-10-20
updatedAt: 2026-10-20
reviewBy: 2026-11-26
category: Hosting
author: cyril-drouin
---

Für die Auslieferung vom chinesischen Festland aus braucht Cloudflare
einen Enterprise-Vertrag und ein gesondertes China-Network-Abonnement,
eine ICP-Registrierung (ICP备案) oder ICP-Lizenz (ICP许可证) je Hauptdomain
sowie die Prüfung durch JD Cloud. Bei Cloudflares eigener Website schloss
21YunBox am 28. August 2026 von Alibaba Cloud (阿里云), Region
cn-zhangjiakou, 3 von 6 Ladeversuchen ab. CDN-Konfigurationen von Kunden
bleiben hier ungetestet.

| Ausgangslage | Erforderlicher Schritt |
|---|---|
| Cloudflare ohne China Network | China Network gesondert zum Enterprise-Vertrag buchen |
| Enterprise-Konto ohne ICP-Registrierung | Erforderliche Registrierung oder Lizenz für jede Hauptdomain einholen |
| Gültige Registrierung vorhanden | Domain und Inhalte bei JD Cloud zur Prüfung einreichen |
| Domain genehmigt | Inbetriebnahme abschließen und die genutzten Funktionen prüfen |

> Cloudflare bietet das China Network als gesondertes Abonnement für
> Enterprise-Kunden an. JD Cloud betreibt die Rechenzentren auf dem
> chinesischen Festland. Jede Hauptdomain benötigt eine gültige
> ICP-Registrierung oder ICP-Lizenz.
> Quelle: Cloudflare, Übersicht zum China Network, 30. April 2026.
> https://developers.cloudflare.com/china-network/

Dokumentation geprüft am 20. Oktober 2026.

Prüfen Sie im Konto den China-Network-Status der betreffenden Domain.
Lassen Sie sich vom Kontoverantwortlichen das Abonnement und die
genehmigten Domains bestätigen. Die noch ausstehenden Genehmigungen
bestimmen anschließend den Zeitplan für die Umstellung.



Section 2
Before:
(New locale: no prior section)
After:
## Cloudflare in China beginnt mit den Domainunterlagen

Beginnen Sie mit der Hauptdomain: `example.com` ist eine Hauptdomain,
`www.example.com` eine Subdomain. Erfassen Sie sämtliche Domains für den
Start, auch gesonderte Markenadressen. Prüfen Sie die ICP-Registrierung
für jede Hauptdomain.

Cloudflare verlangt dafür jeweils eine gültige ICP-Registrierung
(ICP备案) oder ICP-Lizenz (ICP许可证). Klären Sie vor der Antragstellung,
welche Genehmigung die Tätigkeit der Website erfordert. Unser
[ICP-Leitfaden für ausländische Unternehmen](/de/ressourcen/china-web-leitfaden/icp-lizenz-auslaendische-unternehmen/)
erläutert den Unterschied und die Anforderungen an den Antragsteller.

Geben Sie diese Liste an die für den Antrag zuständige Person weiter,
bevor Sie den Starttermin festlegen. Ein regionales Team könnte eine
eigene Markenadresse registriert haben. Vergewissern Sie sich, dass die
ICP-Registrierung die Domain abdeckt, die Sie ins Netz aufnehmen möchten.

Bereiten Sie zugleich die Unterlagen für JD Cloud vor: Kunden- und
Firmenname, Domainname, ICP-Nummer, Inhaltsbeschreibung und die
unterschriebene Selbsterklärung, die das Vertriebsteam bereitstellt.
Die ICP-Nummer muss außerdem in der Fußzeile der Website stehen.

> JD Cloud prüft die Domaininhalte vor der Freischaltung des China Network.
> Nach dieser Prüfung veranschlagt Cloudflare für die erstmalige
> Inbetriebnahme einer Zone etwa 24 bis 48 Stunden.
> Quelle: Cloudflare, Inbetriebnahme, 17. April 2026.
> https://developers.cloudflare.com/china-network/get-started/

Die genannte Frist beginnt erst nach der Inhaltsfreigabe. ICP-Genehmigung
und Inhaltsprüfung brauchen eigene Termine im Projektplan. Das gilt
besonders dann, wenn der Registrierungsantrag noch nicht gestellt wurde.



Section 3
Before:
(New locale: no prior section)
After:
## Was der Test von Cloudflares Website aussagt

21YunBox testete am 28. August 2026 Cloudflares eigene Website aus einer
Cloud-Region auf dem chinesischen Festland. Zu dieser Fremdmessung liegt
kein entsprechendes Ergebnis eines Privatanschlusses vor. Sie vergleicht
auch keine Kundendomain mit und ohne China Network.

| Testziel | Ergebnis aus dem Rechenzentrum | Ergebnis am Privatanschluss | Bewertung | Testdatum |
|---|---|---|---|---|
| Cloudflares eigene Website | Alibaba Cloud (阿里云), cn-zhangjiakou: 3 von 6 Ladevorgängen abgeschlossen | Für diesen Test nicht angegeben | Zeitweise erreichbar (21YunBox), nur die Anbieterwebsite | 28. August 2026 |

> 21YunBox meldet für Cloudflares eigene Website 3 abgeschlossene
> Ladeversuche von 6, gemessen am 28. August 2026 von Alibaba Cloud
> (阿里云) in der Region cn-zhangjiakou.
> Quelle: 21YunBox, Cloudflare in China: China Network und ICP-Voraussetzungen,
> überprüft am 7. Oktober 2026.
> https://www.21cloudbox.com/support/cloudflare-china.html

Ein Kundenhostname bleibt hier ungetestet, solange kein datierter Test
eines Dritten genau diesen Hostnamen erfasst. Bei einem Kontaktformular
müssen Sie gesondert prüfen, ob sich die Nachricht absenden lässt und
beim Empfänger ankommt.

Cloudflares Routing-Dokumentation weist darauf hin, dass Anycast eine
Anfrage an ein geografisch weiter entferntes Rechenzentrum leiten kann.
Das Routing und die Peering-Vereinbarungen des Internetanbieters
beeinflussen den Weg. Versprechen Sie deshalb keinen bestimmten
Auslieferungsort allein aufgrund des Besucherstandorts.

> Laut Cloudflare können Anfragen ein anderes als das geografisch
> nächstgelegene Rechenzentrum erreichen. Kunden können die Auswahl
> nicht über die Zoneneinstellungen festlegen.
> Quelle: Cloudflare, geografisches Routing, 14. Oktober 2026.
> https://developers.cloudflare.com/support/troubleshooting/general-troubleshooting/geographic-traffic-routing/



Section 4
Before:
(New locale: no prior section)
After:
## Funktionen vor der Umstellung prüfen

Gleichen Sie die Funktionen Ihrer Website mit Cloudflares
Verfügbarkeitsliste für das China Network ab. Prüfen Sie die
Cache-Optionen und gegebenenfalls den Dienst, mit dem Ihr Kontaktformular
Besucher überprüft. Legen Sie vor der Umstellung einen Ersatz für nicht
unterstützte Funktionen fest. Regionale Produktunterstützung und
gemessene Erreichbarkeit sind getrennt zu prüfen.

> Die Funktionsliste des China Network nennt statisches Caching und
> schließt Tiered Cache und Cache Reserve aus. Turnstile ist demnach
> ebenfalls nicht auf dem chinesischen Festland verfügbar.
> Quelle: Cloudflare, verfügbare Produkte und Funktionen, 10. Juni 2026.
> https://developers.cloudflare.com/china-network/reference/available-products/

Erfassen Sie für jedes Kontaktformular den Endpunkt, der die Daten
entgegennimmt, sowie die zuvor benötigten Skripte. Auch die Bildserver
gehören in die Bestandsaufnahme. Unser
[Leitfaden zu reCAPTCHA-Ausfällen in China](/de/ressourcen/china-web-leitfaden/recaptcha-china/)
behandelt diese konkrete Abhängigkeit. Ein CDN-Wechsel für die Seite
belegt nicht, dass ein gesonderter Formulardienst nutzbar ist.

Mit bestehendem Enterprise-Vertrag und gültiger ICP-Registrierung sollten
Sie die Domainfreigabe und die erforderlichen Funktionen mit Ihrem
Ansprechpartner bestätigen. Wurde der ICP-Antrag noch nicht begonnen,
benennen Sie vor der Umstellungsplanung einen Verantwortlichen. Unser
[Hosting-Service für China](/de/leistungen/china-hosting/) übernimmt
Hosting und die damit verbundenen ICP-Verfahren.



Section 5
Before:
(New locale: no prior section)
After:
## Vor der Terminvereinbarung

**Können wir das China Network vor der ICP-Registrierung testen?**

Cloudflares veröffentlichte Voraussetzungen für einen Machbarkeitstest
umfassen eine gültige ICP-Nummer und die Inhaltsfreigabe durch JD Cloud.
Bereiten Sie beides vor, bevor Sie den Test anfragen. Klären Sie mit dem
Vertrieb dessen Umfang und die Unterlagen, die für einen Versuch unter
realen Bedingungen im China Network erforderlich sind.

**Übernimmt Cloudflare die ICP-Registrierung für uns?**

Laut Cloudflare sind weder das Unternehmen noch JD Cloud für ICP-Anträge
zuständig. Cloudflare kann jedoch spezialisierte Partner vermitteln.
Bestimmen Sie, wer Ihren Antrag einreicht und die Registrierung pflegt.
Bewahren Sie eine Kopie bei der Domainliste auf, damit auch bei einem
Agenturwechsel klar bleibt, wer dieses Verfahren betreut.

**Was geschieht, wenn die ICP-Registrierung widerrufen wird?**

JD Cloud kann den Zugang zum chinesischen Dienst sperren oder beenden.
Cloudflare erklärt, die betroffenen Domains dann an Rechenzentren
außerhalb des chinesischen Festlands weiterzuleiten. Halten Sie den
ICP-Ansprechpartner aktuell und besprechen Sie Änderungen an der Domain
oder der Tätigkeit der Website mit dem für die Registrierung zuständigen
Team.

> Cloudflares FAQ verlangt für einen Machbarkeitstest die ICP-Registrierung
> und Inhaltsfreigabe, weist die Antragstellung dem Kunden oder seinem
> Partner zu und beschreibt die Weiterleitung ins Ausland nach einem Widerruf.
> Quelle: Cloudflare, China-Network-FAQ, 16. April 2026.
> https://developers.cloudflare.com/china-network/faq/

Bringen Sie Ihre Domainliste und den Stand der ICP-Registrierung zum Gespräch mit.


### DE pass 2 complete

Native rewrite using only German: stronger grammatical subject, native domain workflow, concise schedule and evidence scope, revised metadata and filing answer. Remaining sections reviewed and retained.

Section 1
Before:
---
title: "Cloudflare in China: ICP und Netzvoraussetzungen"
subtitle: "Welche Verträge und ICP-Nachweise Cloudflares chinesisches Netz verlangt und was Sie vor der Umstellung Ihrer Website prüfen sollten."
summary: "China Network verlangt Enterprise, eine ICP-Registrierung oder Lizenz je Hauptdomain und die Prüfung durch JD Cloud. So bereiten Sie die Umstellung vor."
visual: "/images/guides/cloudflare-china.webp"
order: 48
published: true
publishedAt: 2026-10-20
updatedAt: 2026-10-20
reviewBy: 2026-11-26
category: Hosting
author: cyril-drouin
---

Für die Auslieferung vom chinesischen Festland aus braucht Cloudflare
einen Enterprise-Vertrag und ein gesondertes China-Network-Abonnement,
eine ICP-Registrierung (ICP备案) oder ICP-Lizenz (ICP许可证) je Hauptdomain
sowie die Prüfung durch JD Cloud. Bei Cloudflares eigener Website schloss
21YunBox am 28. August 2026 von Alibaba Cloud (阿里云), Region
cn-zhangjiakou, 3 von 6 Ladeversuchen ab. CDN-Konfigurationen von Kunden
bleiben hier ungetestet.

| Ausgangslage | Erforderlicher Schritt |
|---|---|
| Cloudflare ohne China Network | China Network gesondert zum Enterprise-Vertrag buchen |
| Enterprise-Konto ohne ICP-Registrierung | Erforderliche Registrierung oder Lizenz für jede Hauptdomain einholen |
| Gültige Registrierung vorhanden | Domain und Inhalte bei JD Cloud zur Prüfung einreichen |
| Domain genehmigt | Inbetriebnahme abschließen und die genutzten Funktionen prüfen |

> Cloudflare bietet das China Network als gesondertes Abonnement für
> Enterprise-Kunden an. JD Cloud betreibt die Rechenzentren auf dem
> chinesischen Festland. Jede Hauptdomain benötigt eine gültige
> ICP-Registrierung oder ICP-Lizenz.
> Quelle: Cloudflare, Übersicht zum China Network, 30. April 2026.
> https://developers.cloudflare.com/china-network/

Dokumentation geprüft am 20. Oktober 2026.

Prüfen Sie im Konto den China-Network-Status der betreffenden Domain.
Lassen Sie sich vom Kontoverantwortlichen das Abonnement und die
genehmigten Domains bestätigen. Die noch ausstehenden Genehmigungen
bestimmen anschließend den Zeitplan für die Umstellung.


After:
---
title: "Cloudflare in China: Netz und ICP-Anforderungen"
subtitle: "Vom Enterprise-Vertrag bis zur Inhaltsfreigabe: Diese Voraussetzungen gelten für die Auslieferung Ihrer Website aus China und die geplante Umstellung."
summary: "Für das China Network brauchen Sie Enterprise, einen gültigen ICP-Nachweis je Hauptdomain und die Inhaltsfreigabe von JD Cloud."
visual: "/images/guides/cloudflare-china.webp"
order: 48
published: true
publishedAt: 2026-10-20
updatedAt: 2026-10-20
reviewBy: 2026-11-26
category: Hosting
author: cyril-drouin
---

Die Auslieferung über Cloudflare vom chinesischen Festland aus setzt
einen Enterprise-Vertrag, ein gesondertes China-Network-Abonnement und
eine ICP-Registrierung (ICP备案) oder ICP-Lizenz (ICP许可证) je Hauptdomain
voraus. Hinzu kommt die Prüfung durch JD Cloud. Bei Cloudflares eigener Website schloss
21YunBox am 28. August 2026 von Alibaba Cloud (阿里云), Region
cn-zhangjiakou, 3 von 6 Ladeversuchen ab. CDN-Konfigurationen von Kunden
bleiben hier ungetestet.

| Ausgangslage | Erforderlicher Schritt |
|---|---|
| Cloudflare ohne China Network | China Network gesondert zum Enterprise-Vertrag buchen |
| Enterprise-Konto ohne ICP-Registrierung | Erforderliche Registrierung oder Lizenz für jede Hauptdomain einholen |
| Gültige Registrierung vorhanden | Domain und Inhalte bei JD Cloud zur Prüfung einreichen |
| Domain genehmigt | Inbetriebnahme abschließen und die genutzten Funktionen prüfen |

> Cloudflare bietet das China Network als gesondertes Abonnement für
> Enterprise-Kunden an. JD Cloud betreibt die Rechenzentren auf dem
> chinesischen Festland. Jede Hauptdomain benötigt eine gültige
> ICP-Registrierung oder ICP-Lizenz.
> Quelle: Cloudflare, Übersicht zum China Network, 30. April 2026.
> https://developers.cloudflare.com/china-network/

Dokumentation geprüft am 20. Oktober 2026.

Prüfen Sie im Konto, ob die betreffende Domain für das China Network
freigeschaltet ist. Der Kontoverantwortliche sollte das Abonnement und
die genehmigten Domains bestätigen. Planen Sie die Umstellung danach,
welche Genehmigungen noch fehlen.



Section 2
Before:
## Cloudflare in China beginnt mit den Domainunterlagen

Beginnen Sie mit der Hauptdomain: `example.com` ist eine Hauptdomain,
`www.example.com` eine Subdomain. Erfassen Sie sämtliche Domains für den
Start, auch gesonderte Markenadressen. Prüfen Sie die ICP-Registrierung
für jede Hauptdomain.

Cloudflare verlangt dafür jeweils eine gültige ICP-Registrierung
(ICP备案) oder ICP-Lizenz (ICP许可证). Klären Sie vor der Antragstellung,
welche Genehmigung die Tätigkeit der Website erfordert. Unser
[ICP-Leitfaden für ausländische Unternehmen](/de/ressourcen/china-web-leitfaden/icp-lizenz-auslaendische-unternehmen/)
erläutert den Unterschied und die Anforderungen an den Antragsteller.

Geben Sie diese Liste an die für den Antrag zuständige Person weiter,
bevor Sie den Starttermin festlegen. Ein regionales Team könnte eine
eigene Markenadresse registriert haben. Vergewissern Sie sich, dass die
ICP-Registrierung die Domain abdeckt, die Sie ins Netz aufnehmen möchten.

Bereiten Sie zugleich die Unterlagen für JD Cloud vor: Kunden- und
Firmenname, Domainname, ICP-Nummer, Inhaltsbeschreibung und die
unterschriebene Selbsterklärung, die das Vertriebsteam bereitstellt.
Die ICP-Nummer muss außerdem in der Fußzeile der Website stehen.

> JD Cloud prüft die Domaininhalte vor der Freischaltung des China Network.
> Nach dieser Prüfung veranschlagt Cloudflare für die erstmalige
> Inbetriebnahme einer Zone etwa 24 bis 48 Stunden.
> Quelle: Cloudflare, Inbetriebnahme, 17. April 2026.
> https://developers.cloudflare.com/china-network/get-started/

Die genannte Frist beginnt erst nach der Inhaltsfreigabe. ICP-Genehmigung
und Inhaltsprüfung brauchen eigene Termine im Projektplan. Das gilt
besonders dann, wenn der Registrierungsantrag noch nicht gestellt wurde.


After:
## Cloudflare in China: zuerst die Domainunterlagen

Beginnen Sie mit der Hauptdomain: `example.com` ist eine Hauptdomain,
`www.example.com` eine Subdomain. Erfassen Sie sämtliche Domains für den
Start, auch gesonderte Markenadressen. Prüfen Sie die ICP-Registrierung
für jede Hauptdomain.

Cloudflare verlangt dafür jeweils eine gültige ICP-Registrierung
(ICP备案) oder ICP-Lizenz (ICP许可证). Klären Sie vor der Antragstellung,
welche Genehmigung die Tätigkeit der Website erfordert. Unser
[ICP-Leitfaden für ausländische Unternehmen](/de/ressourcen/china-web-leitfaden/icp-lizenz-auslaendische-unternehmen/)
erläutert den Unterschied und die Anforderungen an den Antragsteller.

Leiten Sie die Liste an den Antragsverantwortlichen weiter, bevor der
Starttermin feststeht. Achten Sie auch auf Markenadressen, die ein
regionales Team gesondert registriert hat. Die ICP-Registrierung muss
genau die Domain abdecken, die ins Netz aufgenommen werden soll.

Bereiten Sie zugleich die Unterlagen für JD Cloud vor: Kunden- und
Firmenname, Domainname, ICP-Nummer, Inhaltsbeschreibung und die
unterschriebene Selbsterklärung, die das Vertriebsteam bereitstellt.
Die ICP-Nummer muss außerdem in der Fußzeile der Website stehen.

> JD Cloud prüft die Domaininhalte vor der Freischaltung des China Network.
> Nach dieser Prüfung veranschlagt Cloudflare für die erstmalige
> Inbetriebnahme einer Zone etwa 24 bis 48 Stunden.
> Quelle: Cloudflare, Inbetriebnahme, 17. April 2026.
> https://developers.cloudflare.com/china-network/get-started/

Die Frist läuft ab der Inhaltsfreigabe. Planen Sie die ICP-Genehmigung
und die Inhaltsprüfung deshalb gesondert ein, besonders wenn der
Registrierungsantrag noch nicht gestellt wurde.



Section 3
Before:
## Was der Test von Cloudflares Website aussagt

21YunBox testete am 28. August 2026 Cloudflares eigene Website aus einer
Cloud-Region auf dem chinesischen Festland. Zu dieser Fremdmessung liegt
kein entsprechendes Ergebnis eines Privatanschlusses vor. Sie vergleicht
auch keine Kundendomain mit und ohne China Network.

| Testziel | Ergebnis aus dem Rechenzentrum | Ergebnis am Privatanschluss | Bewertung | Testdatum |
|---|---|---|---|---|
| Cloudflares eigene Website | Alibaba Cloud (阿里云), cn-zhangjiakou: 3 von 6 Ladevorgängen abgeschlossen | Für diesen Test nicht angegeben | Zeitweise erreichbar (21YunBox), nur die Anbieterwebsite | 28. August 2026 |

> 21YunBox meldet für Cloudflares eigene Website 3 abgeschlossene
> Ladeversuche von 6, gemessen am 28. August 2026 von Alibaba Cloud
> (阿里云) in der Region cn-zhangjiakou.
> Quelle: 21YunBox, Cloudflare in China: China Network und ICP-Voraussetzungen,
> überprüft am 7. Oktober 2026.
> https://www.21cloudbox.com/support/cloudflare-china.html

Ein Kundenhostname bleibt hier ungetestet, solange kein datierter Test
eines Dritten genau diesen Hostnamen erfasst. Bei einem Kontaktformular
müssen Sie gesondert prüfen, ob sich die Nachricht absenden lässt und
beim Empfänger ankommt.

Cloudflares Routing-Dokumentation weist darauf hin, dass Anycast eine
Anfrage an ein geografisch weiter entferntes Rechenzentrum leiten kann.
Das Routing und die Peering-Vereinbarungen des Internetanbieters
beeinflussen den Weg. Versprechen Sie deshalb keinen bestimmten
Auslieferungsort allein aufgrund des Besucherstandorts.

> Laut Cloudflare können Anfragen ein anderes als das geografisch
> nächstgelegene Rechenzentrum erreichen. Kunden können die Auswahl
> nicht über die Zoneneinstellungen festlegen.
> Quelle: Cloudflare, geografisches Routing, 14. Oktober 2026.
> https://developers.cloudflare.com/support/troubleshooting/general-troubleshooting/geographic-traffic-routing/


After:
## Was der Test von Cloudflares Website aussagt

21YunBox testete am 28. August 2026 Cloudflares eigene Website aus einer
Cloud-Region auf dem chinesischen Festland. Zu dieser Fremdmessung liegt
kein entsprechendes Ergebnis eines Privatanschlusses vor. Sie vergleicht
auch keine Kundendomain mit und ohne China Network.

| Testziel | Ergebnis aus dem Rechenzentrum | Ergebnis am Privatanschluss | Bewertung | Testdatum |
|---|---|---|---|---|
| Cloudflares eigene Website | Alibaba Cloud (阿里云), cn-zhangjiakou: 3 von 6 Ladevorgängen abgeschlossen | Für diesen Test nicht angegeben | Zeitweise erreichbar (21YunBox), nur die Anbieterwebsite | 28. August 2026 |

> 21YunBox meldet für Cloudflares eigene Website 3 abgeschlossene
> Ladeversuche von 6, gemessen am 28. August 2026 von Alibaba Cloud
> (阿里云) in der Region cn-zhangjiakou.
> Quelle: 21YunBox, Cloudflare in China: China Network und ICP-Voraussetzungen,
> überprüft am 7. Oktober 2026.
> https://www.21cloudbox.com/support/cloudflare-china.html

Ohne datierten Fremdtest für den genauen Hostnamen bleibt die Kundendomain
hier als ungetestet eingestuft. Prüfen Sie bei einem Kontaktformular
gesondert, ob die Nachricht abgesendet werden kann und den Empfänger
erreicht.

Cloudflares Routing-Dokumentation weist darauf hin, dass Anycast eine
Anfrage an ein geografisch weiter entferntes Rechenzentrum leiten kann.
Das Routing und die Peering-Vereinbarungen des Internetanbieters
beeinflussen den Weg. Versprechen Sie deshalb keinen bestimmten
Auslieferungsort allein aufgrund des Besucherstandorts.

> Laut Cloudflare können Anfragen ein anderes als das geografisch
> nächstgelegene Rechenzentrum erreichen. Kunden können die Auswahl
> nicht über die Zoneneinstellungen festlegen.
> Quelle: Cloudflare, geografisches Routing, 14. Oktober 2026.
> https://developers.cloudflare.com/support/troubleshooting/general-troubleshooting/geographic-traffic-routing/



Section 4
Kept as-is after native review.

Section 5
Before:
## Vor der Terminvereinbarung

**Können wir das China Network vor der ICP-Registrierung testen?**

Cloudflares veröffentlichte Voraussetzungen für einen Machbarkeitstest
umfassen eine gültige ICP-Nummer und die Inhaltsfreigabe durch JD Cloud.
Bereiten Sie beides vor, bevor Sie den Test anfragen. Klären Sie mit dem
Vertrieb dessen Umfang und die Unterlagen, die für einen Versuch unter
realen Bedingungen im China Network erforderlich sind.

**Übernimmt Cloudflare die ICP-Registrierung für uns?**

Laut Cloudflare sind weder das Unternehmen noch JD Cloud für ICP-Anträge
zuständig. Cloudflare kann jedoch spezialisierte Partner vermitteln.
Bestimmen Sie, wer Ihren Antrag einreicht und die Registrierung pflegt.
Bewahren Sie eine Kopie bei der Domainliste auf, damit auch bei einem
Agenturwechsel klar bleibt, wer dieses Verfahren betreut.

**Was geschieht, wenn die ICP-Registrierung widerrufen wird?**

JD Cloud kann den Zugang zum chinesischen Dienst sperren oder beenden.
Cloudflare erklärt, die betroffenen Domains dann an Rechenzentren
außerhalb des chinesischen Festlands weiterzuleiten. Halten Sie den
ICP-Ansprechpartner aktuell und besprechen Sie Änderungen an der Domain
oder der Tätigkeit der Website mit dem für die Registrierung zuständigen
Team.

> Cloudflares FAQ verlangt für einen Machbarkeitstest die ICP-Registrierung
> und Inhaltsfreigabe, weist die Antragstellung dem Kunden oder seinem
> Partner zu und beschreibt die Weiterleitung ins Ausland nach einem Widerruf.
> Quelle: Cloudflare, China-Network-FAQ, 16. April 2026.
> https://developers.cloudflare.com/china-network/faq/

Bringen Sie Ihre Domainliste und den Stand der ICP-Registrierung zum Gespräch mit.

After:
## Bevor Sie den Umstellungstermin festlegen

**Können wir das China Network vor der ICP-Registrierung testen?**

Cloudflares veröffentlichte Voraussetzungen für einen Machbarkeitstest
umfassen eine gültige ICP-Nummer und die Inhaltsfreigabe durch JD Cloud.
Bereiten Sie beides vor, bevor Sie den Test anfragen. Klären Sie mit dem
Vertrieb dessen Umfang und die Unterlagen, die für einen Versuch unter
realen Bedingungen im China Network erforderlich sind.

**Übernimmt Cloudflare die ICP-Registrierung für uns?**

ICP-Anträge liegen laut Cloudflare weder in der Verantwortung des
Unternehmens noch in der von JD Cloud. Cloudflare vermittelt auf Wunsch
spezialisierte Partner. Legen Sie fest, wer den Antrag stellt und die
Registrierung betreut. Eine Kopie bei der Domainliste hält diese
Zuständigkeit auch für einen späteren Agenturwechsel fest.

**Was geschieht, wenn die ICP-Registrierung widerrufen wird?**

JD Cloud kann den Zugang zum chinesischen Dienst sperren oder beenden.
Cloudflare erklärt, die betroffenen Domains dann an Rechenzentren
außerhalb des chinesischen Festlands weiterzuleiten. Halten Sie den
ICP-Ansprechpartner aktuell und besprechen Sie Änderungen an der Domain
oder der Tätigkeit der Website mit dem für die Registrierung zuständigen
Team.

> Cloudflares FAQ verlangt für einen Machbarkeitstest die ICP-Registrierung
> und Inhaltsfreigabe, weist die Antragstellung dem Kunden oder seinem
> Partner zu und beschreibt die Weiterleitung ins Ausland nach einem Widerruf.
> Quelle: Cloudflare, China-Network-FAQ, 16. April 2026.
> https://developers.cloudflare.com/china-network/faq/

Bringen Sie Ihre Domainliste und den Stand der ICP-Registrierung zum Gespräch mit.


### DE pass 3 complete

Final German polish: precise metadata, active JD Cloud clause, restrained referral claim and natural closing; umlauts, compounds, all source dates, citations, identifiers and local links checked.

Section 1
Before:
---
title: "Cloudflare in China: Netz und ICP-Anforderungen"
subtitle: "Vom Enterprise-Vertrag bis zur Inhaltsfreigabe: Diese Voraussetzungen gelten für die Auslieferung Ihrer Website aus China und die geplante Umstellung."
summary: "Für das China Network brauchen Sie Enterprise, einen gültigen ICP-Nachweis je Hauptdomain und die Inhaltsfreigabe von JD Cloud."
visual: "/images/guides/cloudflare-china.webp"
order: 48
published: true
publishedAt: 2026-10-20
updatedAt: 2026-10-20
reviewBy: 2026-11-26
category: Hosting
author: cyril-drouin
---

Die Auslieferung über Cloudflare vom chinesischen Festland aus setzt
einen Enterprise-Vertrag, ein gesondertes China-Network-Abonnement und
eine ICP-Registrierung (ICP备案) oder ICP-Lizenz (ICP许可证) je Hauptdomain
voraus. Hinzu kommt die Prüfung durch JD Cloud. Bei Cloudflares eigener Website schloss
21YunBox am 28. August 2026 von Alibaba Cloud (阿里云), Region
cn-zhangjiakou, 3 von 6 Ladeversuchen ab. CDN-Konfigurationen von Kunden
bleiben hier ungetestet.

| Ausgangslage | Erforderlicher Schritt |
|---|---|
| Cloudflare ohne China Network | China Network gesondert zum Enterprise-Vertrag buchen |
| Enterprise-Konto ohne ICP-Registrierung | Erforderliche Registrierung oder Lizenz für jede Hauptdomain einholen |
| Gültige Registrierung vorhanden | Domain und Inhalte bei JD Cloud zur Prüfung einreichen |
| Domain genehmigt | Inbetriebnahme abschließen und die genutzten Funktionen prüfen |

> Cloudflare bietet das China Network als gesondertes Abonnement für
> Enterprise-Kunden an. JD Cloud betreibt die Rechenzentren auf dem
> chinesischen Festland. Jede Hauptdomain benötigt eine gültige
> ICP-Registrierung oder ICP-Lizenz.
> Quelle: Cloudflare, Übersicht zum China Network, 30. April 2026.
> https://developers.cloudflare.com/china-network/

Dokumentation geprüft am 20. Oktober 2026.

Prüfen Sie im Konto, ob die betreffende Domain für das China Network
freigeschaltet ist. Der Kontoverantwortliche sollte das Abonnement und
die genehmigten Domains bestätigen. Planen Sie die Umstellung danach,
welche Genehmigungen noch fehlen.


After:
---
title: "Cloudflare in China: Voraussetzungen für Netz und ICP"
subtitle: "Welche Abonnements und ICP-Unterlagen Sie für die Auslieferung vom chinesischen Festland benötigen und was vor der Umstellung zu prüfen ist."
summary: "China Network erfordert Enterprise, eine ICP-Registrierung oder Lizenz je Hauptdomain und die Inhaltsfreigabe von JD Cloud. Die Voraussetzungen im Detail."
visual: "/images/guides/cloudflare-china.webp"
order: 48
published: true
publishedAt: 2026-10-20
updatedAt: 2026-10-20
reviewBy: 2026-11-26
category: Hosting
author: cyril-drouin
---

Die Auslieferung über Cloudflare vom chinesischen Festland aus setzt
einen Enterprise-Vertrag, ein gesondertes China-Network-Abonnement und
eine ICP-Registrierung (ICP备案) oder ICP-Lizenz (ICP许可证) je Hauptdomain
voraus. JD Cloud muss die Inhalte prüfen. Bei Cloudflares eigener Website schloss
21YunBox am 28. August 2026 von Alibaba Cloud (阿里云), Region
cn-zhangjiakou, 3 von 6 Ladeversuchen ab. CDN-Konfigurationen von Kunden
bleiben hier ungetestet.

| Ausgangslage | Erforderlicher Schritt |
|---|---|
| Cloudflare ohne China Network | China Network gesondert zum Enterprise-Vertrag buchen |
| Enterprise-Konto ohne ICP-Registrierung | Erforderliche Registrierung oder Lizenz für jede Hauptdomain einholen |
| Gültige Registrierung vorhanden | Domain und Inhalte bei JD Cloud zur Prüfung einreichen |
| Domain genehmigt | Inbetriebnahme abschließen und die genutzten Funktionen prüfen |

> Cloudflare bietet das China Network als gesondertes Abonnement für
> Enterprise-Kunden an. JD Cloud betreibt die Rechenzentren auf dem
> chinesischen Festland. Jede Hauptdomain benötigt eine gültige
> ICP-Registrierung oder ICP-Lizenz.
> Quelle: Cloudflare, Übersicht zum China Network, 30. April 2026.
> https://developers.cloudflare.com/china-network/

Dokumentation geprüft am 20. Oktober 2026.

Prüfen Sie im Konto, ob die betreffende Domain für das China Network
freigeschaltet ist. Der Kontoverantwortliche sollte das Abonnement und
die genehmigten Domains bestätigen. Planen Sie die Umstellung danach,
welche Genehmigungen noch fehlen.



Section 2
Kept as-is after native review.

Section 3
Before:
## Was der Test von Cloudflares Website aussagt

21YunBox testete am 28. August 2026 Cloudflares eigene Website aus einer
Cloud-Region auf dem chinesischen Festland. Zu dieser Fremdmessung liegt
kein entsprechendes Ergebnis eines Privatanschlusses vor. Sie vergleicht
auch keine Kundendomain mit und ohne China Network.

| Testziel | Ergebnis aus dem Rechenzentrum | Ergebnis am Privatanschluss | Bewertung | Testdatum |
|---|---|---|---|---|
| Cloudflares eigene Website | Alibaba Cloud (阿里云), cn-zhangjiakou: 3 von 6 Ladevorgängen abgeschlossen | Für diesen Test nicht angegeben | Zeitweise erreichbar (21YunBox), nur die Anbieterwebsite | 28. August 2026 |

> 21YunBox meldet für Cloudflares eigene Website 3 abgeschlossene
> Ladeversuche von 6, gemessen am 28. August 2026 von Alibaba Cloud
> (阿里云) in der Region cn-zhangjiakou.
> Quelle: 21YunBox, Cloudflare in China: China Network und ICP-Voraussetzungen,
> überprüft am 7. Oktober 2026.
> https://www.21cloudbox.com/support/cloudflare-china.html

Ohne datierten Fremdtest für den genauen Hostnamen bleibt die Kundendomain
hier als ungetestet eingestuft. Prüfen Sie bei einem Kontaktformular
gesondert, ob die Nachricht abgesendet werden kann und den Empfänger
erreicht.

Cloudflares Routing-Dokumentation weist darauf hin, dass Anycast eine
Anfrage an ein geografisch weiter entferntes Rechenzentrum leiten kann.
Das Routing und die Peering-Vereinbarungen des Internetanbieters
beeinflussen den Weg. Versprechen Sie deshalb keinen bestimmten
Auslieferungsort allein aufgrund des Besucherstandorts.

> Laut Cloudflare können Anfragen ein anderes als das geografisch
> nächstgelegene Rechenzentrum erreichen. Kunden können die Auswahl
> nicht über die Zoneneinstellungen festlegen.
> Quelle: Cloudflare, geografisches Routing, 14. Oktober 2026.
> https://developers.cloudflare.com/support/troubleshooting/general-troubleshooting/geographic-traffic-routing/


After:
## Was der Test von Cloudflares Website aussagt

21YunBox testete am 28. August 2026 Cloudflares eigene Website aus einer
Cloud-Region auf dem chinesischen Festland. Zu dieser Fremdmessung liegt
kein entsprechendes Ergebnis eines Privatanschlusses vor. Sie vergleicht
auch keine Kundendomain mit und ohne China Network.

| Testziel | Ergebnis aus dem Rechenzentrum | Ergebnis am Privatanschluss | Bewertung | Testdatum |
|---|---|---|---|---|
| Cloudflares eigene Website | Alibaba Cloud (阿里云), cn-zhangjiakou: 3 von 6 Ladevorgängen abgeschlossen | Für diesen Test nicht angegeben | Zeitweise erreichbar (21YunBox), nur die Anbieterwebsite | 28. August 2026 |

> 21YunBox meldet für Cloudflares eigene Website 3 abgeschlossene
> Ladeversuche von 6, gemessen am 28. August 2026 von Alibaba Cloud
> (阿里云) in der Region cn-zhangjiakou.
> Quelle: 21YunBox, Cloudflare in China: China Network und ICP-Voraussetzungen,
> überprüft am 7. Oktober 2026.
> https://www.21cloudbox.com/support/cloudflare-china.html

Ohne datierten Fremdtest für den genauen Hostnamen bleibt die Kundendomain
hier ungetestet. Prüfen Sie bei einem Kontaktformular
gesondert, ob die Nachricht abgesendet werden kann und den Empfänger
erreicht.

Cloudflares Routing-Dokumentation weist darauf hin, dass Anycast eine
Anfrage an ein geografisch weiter entferntes Rechenzentrum leiten kann.
Das Routing und die Peering-Vereinbarungen des Internetanbieters
beeinflussen den Weg. Versprechen Sie deshalb keinen bestimmten
Auslieferungsort allein aufgrund des Besucherstandorts.

> Laut Cloudflare können Anfragen ein anderes als das geografisch
> nächstgelegene Rechenzentrum erreichen. Kunden können die Auswahl
> nicht über die Zoneneinstellungen festlegen.
> Quelle: Cloudflare, geografisches Routing, 14. Oktober 2026.
> https://developers.cloudflare.com/support/troubleshooting/general-troubleshooting/geographic-traffic-routing/



Section 4
Kept as-is after native review.

Section 5
Before:
## Bevor Sie den Umstellungstermin festlegen

**Können wir das China Network vor der ICP-Registrierung testen?**

Cloudflares veröffentlichte Voraussetzungen für einen Machbarkeitstest
umfassen eine gültige ICP-Nummer und die Inhaltsfreigabe durch JD Cloud.
Bereiten Sie beides vor, bevor Sie den Test anfragen. Klären Sie mit dem
Vertrieb dessen Umfang und die Unterlagen, die für einen Versuch unter
realen Bedingungen im China Network erforderlich sind.

**Übernimmt Cloudflare die ICP-Registrierung für uns?**

ICP-Anträge liegen laut Cloudflare weder in der Verantwortung des
Unternehmens noch in der von JD Cloud. Cloudflare vermittelt auf Wunsch
spezialisierte Partner. Legen Sie fest, wer den Antrag stellt und die
Registrierung betreut. Eine Kopie bei der Domainliste hält diese
Zuständigkeit auch für einen späteren Agenturwechsel fest.

**Was geschieht, wenn die ICP-Registrierung widerrufen wird?**

JD Cloud kann den Zugang zum chinesischen Dienst sperren oder beenden.
Cloudflare erklärt, die betroffenen Domains dann an Rechenzentren
außerhalb des chinesischen Festlands weiterzuleiten. Halten Sie den
ICP-Ansprechpartner aktuell und besprechen Sie Änderungen an der Domain
oder der Tätigkeit der Website mit dem für die Registrierung zuständigen
Team.

> Cloudflares FAQ verlangt für einen Machbarkeitstest die ICP-Registrierung
> und Inhaltsfreigabe, weist die Antragstellung dem Kunden oder seinem
> Partner zu und beschreibt die Weiterleitung ins Ausland nach einem Widerruf.
> Quelle: Cloudflare, China-Network-FAQ, 16. April 2026.
> https://developers.cloudflare.com/china-network/faq/

Bringen Sie Ihre Domainliste und den Stand der ICP-Registrierung zum Gespräch mit.

After:
## Bevor Sie den Umstellungstermin festlegen

**Können wir das China Network vor der ICP-Registrierung testen?**

Cloudflares veröffentlichte Voraussetzungen für einen Machbarkeitstest
umfassen eine gültige ICP-Nummer und die Inhaltsfreigabe durch JD Cloud.
Bereiten Sie beides vor, bevor Sie den Test anfragen. Klären Sie mit dem
Vertrieb dessen Umfang und die Unterlagen, die für einen Versuch unter
realen Bedingungen im China Network erforderlich sind.

**Übernimmt Cloudflare die ICP-Registrierung für uns?**

ICP-Anträge liegen laut Cloudflare weder in der Verantwortung des
Unternehmens noch in der von JD Cloud. Cloudflare kann spezialisierte
Partner empfehlen. Legen Sie fest, wer den Antrag stellt und die
Registrierung betreut. Eine Kopie bei der Domainliste hält diese
Zuständigkeit auch für einen späteren Agenturwechsel fest.

**Was geschieht, wenn die ICP-Registrierung widerrufen wird?**

JD Cloud kann den Zugang zum chinesischen Dienst sperren oder beenden.
Cloudflare erklärt, die betroffenen Domains dann an Rechenzentren
außerhalb des chinesischen Festlands weiterzuleiten. Halten Sie den
ICP-Ansprechpartner aktuell und besprechen Sie Änderungen an der Domain
oder der Tätigkeit der Website mit dem für die Registrierung zuständigen
Team.

> Cloudflares FAQ verlangt für einen Machbarkeitstest die ICP-Registrierung
> und Inhaltsfreigabe, weist die Antragstellung dem Kunden oder seinem
> Partner zu und beschreibt die Weiterleitung ins Ausland nach einem Widerruf.
> Quelle: Cloudflare, China-Network-FAQ, 16. April 2026.
> https://developers.cloudflare.com/china-network/faq/

Halten Sie für das Gespräch Ihre Domainliste und den Stand des ICP-Verfahrens bereit.


### DE pass 3 complete

Pass 3 closing check shortened title and summary to house ceilings; final snapshot supersedes earlier pass 3 metadata. All native checks retained.

Section 1
Before:
---
title: "Cloudflare in China: Netz und ICP-Anforderungen"
subtitle: "Vom Enterprise-Vertrag bis zur Inhaltsfreigabe: Diese Voraussetzungen gelten für die Auslieferung Ihrer Website aus China und die geplante Umstellung."
summary: "Für das China Network brauchen Sie Enterprise, einen gültigen ICP-Nachweis je Hauptdomain und die Inhaltsfreigabe von JD Cloud."
visual: "/images/guides/cloudflare-china.webp"
order: 48
published: true
publishedAt: 2026-10-20
updatedAt: 2026-10-20
reviewBy: 2026-11-26
category: Hosting
author: cyril-drouin
---

Die Auslieferung über Cloudflare vom chinesischen Festland aus setzt
einen Enterprise-Vertrag, ein gesondertes China-Network-Abonnement und
eine ICP-Registrierung (ICP备案) oder ICP-Lizenz (ICP许可证) je Hauptdomain
voraus. Hinzu kommt die Prüfung durch JD Cloud. Bei Cloudflares eigener Website schloss
21YunBox am 28. August 2026 von Alibaba Cloud (阿里云), Region
cn-zhangjiakou, 3 von 6 Ladeversuchen ab. CDN-Konfigurationen von Kunden
bleiben hier ungetestet.

| Ausgangslage | Erforderlicher Schritt |
|---|---|
| Cloudflare ohne China Network | China Network gesondert zum Enterprise-Vertrag buchen |
| Enterprise-Konto ohne ICP-Registrierung | Erforderliche Registrierung oder Lizenz für jede Hauptdomain einholen |
| Gültige Registrierung vorhanden | Domain und Inhalte bei JD Cloud zur Prüfung einreichen |
| Domain genehmigt | Inbetriebnahme abschließen und die genutzten Funktionen prüfen |

> Cloudflare bietet das China Network als gesondertes Abonnement für
> Enterprise-Kunden an. JD Cloud betreibt die Rechenzentren auf dem
> chinesischen Festland. Jede Hauptdomain benötigt eine gültige
> ICP-Registrierung oder ICP-Lizenz.
> Quelle: Cloudflare, Übersicht zum China Network, 30. April 2026.
> https://developers.cloudflare.com/china-network/

Dokumentation geprüft am 20. Oktober 2026.

Prüfen Sie im Konto, ob die betreffende Domain für das China Network
freigeschaltet ist. Der Kontoverantwortliche sollte das Abonnement und
die genehmigten Domains bestätigen. Planen Sie die Umstellung danach,
welche Genehmigungen noch fehlen.


After:
---
title: "Cloudflare in China: Anforderungen an Netz und ICP"
subtitle: "Welche Abonnements und ICP-Unterlagen Sie für die Auslieferung vom chinesischen Festland benötigen und was vor der Umstellung zu prüfen ist."
summary: "China Network erfordert Enterprise, eine ICP-Registrierung oder Lizenz je Hauptdomain und die Inhaltsfreigabe von JD Cloud. Das müssen Sie vorbereiten."
visual: "/images/guides/cloudflare-china.webp"
order: 48
published: true
publishedAt: 2026-10-20
updatedAt: 2026-10-20
reviewBy: 2026-11-26
category: Hosting
author: cyril-drouin
---

Die Auslieferung über Cloudflare vom chinesischen Festland aus setzt
einen Enterprise-Vertrag, ein gesondertes China-Network-Abonnement und
eine ICP-Registrierung (ICP备案) oder ICP-Lizenz (ICP许可证) je Hauptdomain
voraus. JD Cloud muss die Inhalte prüfen. Bei Cloudflares eigener Website schloss
21YunBox am 28. August 2026 von Alibaba Cloud (阿里云), Region
cn-zhangjiakou, 3 von 6 Ladeversuchen ab. CDN-Konfigurationen von Kunden
bleiben hier ungetestet.

| Ausgangslage | Erforderlicher Schritt |
|---|---|
| Cloudflare ohne China Network | China Network gesondert zum Enterprise-Vertrag buchen |
| Enterprise-Konto ohne ICP-Registrierung | Erforderliche Registrierung oder Lizenz für jede Hauptdomain einholen |
| Gültige Registrierung vorhanden | Domain und Inhalte bei JD Cloud zur Prüfung einreichen |
| Domain genehmigt | Inbetriebnahme abschließen und die genutzten Funktionen prüfen |

> Cloudflare bietet das China Network als gesondertes Abonnement für
> Enterprise-Kunden an. JD Cloud betreibt die Rechenzentren auf dem
> chinesischen Festland. Jede Hauptdomain benötigt eine gültige
> ICP-Registrierung oder ICP-Lizenz.
> Quelle: Cloudflare, Übersicht zum China Network, 30. April 2026.
> https://developers.cloudflare.com/china-network/

Dokumentation geprüft am 20. Oktober 2026.

Prüfen Sie im Konto, ob die betreffende Domain für das China Network
freigeschaltet ist. Der Kontoverantwortliche sollte das Abonnement und
die genehmigten Domains bestätigen. Planen Sie die Umstellung danach,
welche Genehmigungen noch fehlen.



Section 2
Kept as-is after native review.

Section 3
Before:
## Was der Test von Cloudflares Website aussagt

21YunBox testete am 28. August 2026 Cloudflares eigene Website aus einer
Cloud-Region auf dem chinesischen Festland. Zu dieser Fremdmessung liegt
kein entsprechendes Ergebnis eines Privatanschlusses vor. Sie vergleicht
auch keine Kundendomain mit und ohne China Network.

| Testziel | Ergebnis aus dem Rechenzentrum | Ergebnis am Privatanschluss | Bewertung | Testdatum |
|---|---|---|---|---|
| Cloudflares eigene Website | Alibaba Cloud (阿里云), cn-zhangjiakou: 3 von 6 Ladevorgängen abgeschlossen | Für diesen Test nicht angegeben | Zeitweise erreichbar (21YunBox), nur die Anbieterwebsite | 28. August 2026 |

> 21YunBox meldet für Cloudflares eigene Website 3 abgeschlossene
> Ladeversuche von 6, gemessen am 28. August 2026 von Alibaba Cloud
> (阿里云) in der Region cn-zhangjiakou.
> Quelle: 21YunBox, Cloudflare in China: China Network und ICP-Voraussetzungen,
> überprüft am 7. Oktober 2026.
> https://www.21cloudbox.com/support/cloudflare-china.html

Ohne datierten Fremdtest für den genauen Hostnamen bleibt die Kundendomain
hier als ungetestet eingestuft. Prüfen Sie bei einem Kontaktformular
gesondert, ob die Nachricht abgesendet werden kann und den Empfänger
erreicht.

Cloudflares Routing-Dokumentation weist darauf hin, dass Anycast eine
Anfrage an ein geografisch weiter entferntes Rechenzentrum leiten kann.
Das Routing und die Peering-Vereinbarungen des Internetanbieters
beeinflussen den Weg. Versprechen Sie deshalb keinen bestimmten
Auslieferungsort allein aufgrund des Besucherstandorts.

> Laut Cloudflare können Anfragen ein anderes als das geografisch
> nächstgelegene Rechenzentrum erreichen. Kunden können die Auswahl
> nicht über die Zoneneinstellungen festlegen.
> Quelle: Cloudflare, geografisches Routing, 14. Oktober 2026.
> https://developers.cloudflare.com/support/troubleshooting/general-troubleshooting/geographic-traffic-routing/


After:
## Was der Test von Cloudflares Website aussagt

21YunBox testete am 28. August 2026 Cloudflares eigene Website aus einer
Cloud-Region auf dem chinesischen Festland. Zu dieser Fremdmessung liegt
kein entsprechendes Ergebnis eines Privatanschlusses vor. Sie vergleicht
auch keine Kundendomain mit und ohne China Network.

| Testziel | Ergebnis aus dem Rechenzentrum | Ergebnis am Privatanschluss | Bewertung | Testdatum |
|---|---|---|---|---|
| Cloudflares eigene Website | Alibaba Cloud (阿里云), cn-zhangjiakou: 3 von 6 Ladevorgängen abgeschlossen | Für diesen Test nicht angegeben | Zeitweise erreichbar (21YunBox), nur die Anbieterwebsite | 28. August 2026 |

> 21YunBox meldet für Cloudflares eigene Website 3 abgeschlossene
> Ladeversuche von 6, gemessen am 28. August 2026 von Alibaba Cloud
> (阿里云) in der Region cn-zhangjiakou.
> Quelle: 21YunBox, Cloudflare in China: China Network und ICP-Voraussetzungen,
> überprüft am 7. Oktober 2026.
> https://www.21cloudbox.com/support/cloudflare-china.html

Ohne datierten Fremdtest für den genauen Hostnamen bleibt die Kundendomain
hier ungetestet. Prüfen Sie bei einem Kontaktformular
gesondert, ob die Nachricht abgesendet werden kann und den Empfänger
erreicht.

Cloudflares Routing-Dokumentation weist darauf hin, dass Anycast eine
Anfrage an ein geografisch weiter entferntes Rechenzentrum leiten kann.
Das Routing und die Peering-Vereinbarungen des Internetanbieters
beeinflussen den Weg. Versprechen Sie deshalb keinen bestimmten
Auslieferungsort allein aufgrund des Besucherstandorts.

> Laut Cloudflare können Anfragen ein anderes als das geografisch
> nächstgelegene Rechenzentrum erreichen. Kunden können die Auswahl
> nicht über die Zoneneinstellungen festlegen.
> Quelle: Cloudflare, geografisches Routing, 14. Oktober 2026.
> https://developers.cloudflare.com/support/troubleshooting/general-troubleshooting/geographic-traffic-routing/



Section 4
Kept as-is after native review.

Section 5
Before:
## Bevor Sie den Umstellungstermin festlegen

**Können wir das China Network vor der ICP-Registrierung testen?**

Cloudflares veröffentlichte Voraussetzungen für einen Machbarkeitstest
umfassen eine gültige ICP-Nummer und die Inhaltsfreigabe durch JD Cloud.
Bereiten Sie beides vor, bevor Sie den Test anfragen. Klären Sie mit dem
Vertrieb dessen Umfang und die Unterlagen, die für einen Versuch unter
realen Bedingungen im China Network erforderlich sind.

**Übernimmt Cloudflare die ICP-Registrierung für uns?**

ICP-Anträge liegen laut Cloudflare weder in der Verantwortung des
Unternehmens noch in der von JD Cloud. Cloudflare vermittelt auf Wunsch
spezialisierte Partner. Legen Sie fest, wer den Antrag stellt und die
Registrierung betreut. Eine Kopie bei der Domainliste hält diese
Zuständigkeit auch für einen späteren Agenturwechsel fest.

**Was geschieht, wenn die ICP-Registrierung widerrufen wird?**

JD Cloud kann den Zugang zum chinesischen Dienst sperren oder beenden.
Cloudflare erklärt, die betroffenen Domains dann an Rechenzentren
außerhalb des chinesischen Festlands weiterzuleiten. Halten Sie den
ICP-Ansprechpartner aktuell und besprechen Sie Änderungen an der Domain
oder der Tätigkeit der Website mit dem für die Registrierung zuständigen
Team.

> Cloudflares FAQ verlangt für einen Machbarkeitstest die ICP-Registrierung
> und Inhaltsfreigabe, weist die Antragstellung dem Kunden oder seinem
> Partner zu und beschreibt die Weiterleitung ins Ausland nach einem Widerruf.
> Quelle: Cloudflare, China-Network-FAQ, 16. April 2026.
> https://developers.cloudflare.com/china-network/faq/

Bringen Sie Ihre Domainliste und den Stand der ICP-Registrierung zum Gespräch mit.

After:
## Bevor Sie den Umstellungstermin festlegen

**Können wir das China Network vor der ICP-Registrierung testen?**

Cloudflares veröffentlichte Voraussetzungen für einen Machbarkeitstest
umfassen eine gültige ICP-Nummer und die Inhaltsfreigabe durch JD Cloud.
Bereiten Sie beides vor, bevor Sie den Test anfragen. Klären Sie mit dem
Vertrieb dessen Umfang und die Unterlagen, die für einen Versuch unter
realen Bedingungen im China Network erforderlich sind.

**Übernimmt Cloudflare die ICP-Registrierung für uns?**

ICP-Anträge liegen laut Cloudflare weder in der Verantwortung des
Unternehmens noch in der von JD Cloud. Cloudflare kann spezialisierte
Partner empfehlen. Legen Sie fest, wer den Antrag stellt und die
Registrierung betreut. Eine Kopie bei der Domainliste hält diese
Zuständigkeit auch für einen späteren Agenturwechsel fest.

**Was geschieht, wenn die ICP-Registrierung widerrufen wird?**

JD Cloud kann den Zugang zum chinesischen Dienst sperren oder beenden.
Cloudflare erklärt, die betroffenen Domains dann an Rechenzentren
außerhalb des chinesischen Festlands weiterzuleiten. Halten Sie den
ICP-Ansprechpartner aktuell und besprechen Sie Änderungen an der Domain
oder der Tätigkeit der Website mit dem für die Registrierung zuständigen
Team.

> Cloudflares FAQ verlangt für einen Machbarkeitstest die ICP-Registrierung
> und Inhaltsfreigabe, weist die Antragstellung dem Kunden oder seinem
> Partner zu und beschreibt die Weiterleitung ins Ausland nach einem Widerruf.
> Quelle: Cloudflare, China-Network-FAQ, 16. April 2026.
> https://developers.cloudflare.com/china-network/faq/

Halten Sie für das Gespräch Ihre Domainliste und den Stand des ICP-Verfahrens bereit.


## Publication validation and staging decision

- Re-fetched all six source pages at publication; Cloudflare product/filing/routing claims and the 21YunBox 3-of-6 vendor-site result remain supported. Retained exact original attribution and dates.
- Existing hero visually accepted: ordinary operator, worn desk, cables, uneven light, plausible hands. No regeneration needed. Existing layout derives hero alt and social/schema text from the localized title, which received all passes.
- Completed FR passes 1, 2, 3; then ES passes 1, 2, 3; then DE passes 1, 2, 3 in the main conversation. Complete snapshots and section comparisons are saved here. German closing metadata check shortened title to 50 and description to 151 characters before validation.
- Metadata, links, source URLs, four section headings and prohibited-character checks passed in all four locales. Draft and complete content marker checks passed (380 content files).
- npm run build exited 0. All 188 guide titles meet the 52-character ceiling. All four rendered routes, canonical/hreflang links, sitemap entries, hero images, internal destinations, guide-index listings and homepage teasers verified.
- npx astro check in the publication tree: exit 0, 0 errors, 0 warnings, 13 hints, 297 files. Clean HEAD 10fd14a in a temporary worktree: exit 0, 0 errors, 0 warnings, 12 hints, 285 files. Error-file sets are both empty. The extra hint is non-blocking. Logs: check-piece.txt and check-head.txt.
- Baseline node_modules junction removed with DirectoryInfo.Delete(), verified absent, then git worktree remove completed.
- Marked only T2-04 published with published_on 2026-10-20 after both required checks passed; regenerated briefs with build-briefs.mjs.
- Stage full piece-specific files and only Cloudflare hunks in PLAN.md, schedule.csv, build-briefs.mjs and routes.ts. Preserve other session changes and earlier-day logs. The runner console directory is ignored by repository policy; this durable decision log and pass snapshots carry the publication evidence in the commit.
- Tooling corrections: rg unavailable, used native searches; corrected a missing literal-path argument and the route filename; replaced an inline Node command affected by PowerShell quoting with a UTF-8 script file. No content was lost.

## Isolated publication build recovery

The optional exact-staged-snapshot build rendered every page but failed during Vercel bundling with EPERM while copying the node_modules junction as a symlink. The required repository build had already exited 0. Replaced only the temporary checkout dependency junction with a physical dependency copy and repeated the isolated build. No production code or unrelated session file was changed to resolve this environment issue. GitHub CLI has no authenticated session; production verification will use the live routes directly after the authorised git push.

Exact staged publication build retry exited 0 with physical dependencies: 377 content files, 185 guide titles within ceiling. Four rendered routes, all canonical/hreflang, sitemap, hero, internal links, homepage and index listings also pass in that isolated checkout. The temporary checkout was removed after confirming its absolute path and physical dependency directory. Ready to commit on main; no unrelated changes staged.
