---
title: "reCAPTCHA en Chine : vos formulaires restent muets"
subtitle: "Pourquoi un formulaire protégé par reCAPTCHA ne part jamais depuis la Chine continentale, ce que change le passage à recaptcha.net, et par quoi le remplacer."
summary: "GreatFire juge reCAPTCHA bloqué en Chine continentale, où les formulaires protégés refoulent les visiteurs. La parade de Google et les autres options."
visual: "/images/guides/recaptcha-china.webp"
order: 40
published: true
publishedAt: "2026-10-08"
updatedAt: "2026-10-08"
reviewBy: "2026-11-18"
category: "Technology"
author: "cyril-drouin"
---

Depuis la Chine continentale, un formulaire protégé par Google reCAPTCHA ne part tout simplement pas. Le 28 août 2026, 21YunBox a interrogé `www.google.com/recaptcha` 72 fois depuis un serveur Alibaba Cloud (阿里云) à Zhangjiakou, sans obtenir la moindre réponse. Le 30 août, une ligne résidentielle China Mobile (中国移动) à Pékin a essayé 18 fois, sans plus de succès. GreatFire, qui suit la censure en Chine, juge l’adresse bloquée (dernier test le 28 septembre 2026).

Sans script, pas de jeton ; et un formulaire qui exige un jeton refoule le visiteur. Et aucun message ne vient vous en avertir. Google propose lui-même de charger le widget depuis `www.recaptcha.net`, que GreatFire juge non bloqué. Aucun test publié n’en a toutefois mesuré les temps de réponse. Nous opterions malgré tout pour un captcha exploité en Chine, comme ceux d’Alibaba Cloud ou de Tencent Cloud (腾讯云). Chaque chiffre cité plus bas a été vérifié à la source le 8 octobre 2026.

## Pourquoi un formulaire reCAPTCHA ne part jamais depuis la Chine

| Hôte                       | Alibaba Cloud (阿里云), Zhangjiakou | Ligne résidentielle China Mobile (中国移动), Pékin | Requêtes abouties   | Verdict | Testé le           |
| -------------------------- | ----------------------------------- | ------------------------------------------------- | ------------------- | ------- | ------------------ |
| `www.google.com/recaptcha` | aucune réponse en 30 secondes       | aucune réponse                                    | 0 sur 72 / 0 sur 18 | bloqué  | 28 et 30 août 2026 |

> Depuis une instance Alibaba Cloud (阿里云) de la région cn-zhangjiakou, avec un relevé toutes les dix minutes pendant douze heures le 28 août 2026 et un délai d’expiration de 30 secondes, `www.google.com/recaptcha` a répondu à 0 requête sur 72. Sur 264 chargements de page de 88 sites réels, effectués depuis une ligne résidentielle China Mobile (中国移动) à Pékin le 30 août 2026, www.google.com, l’hôte de reCAPTCHA, a été sollicité 18 fois sans jamais répondre.
> Source : 21YunBox, A Day of Third-Party Requests From Inside China, août 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

La case à cocher, comme la vérification invisible de la version 3, provient d’un seul script, `www.google.com/recaptcha/api.js`. Les trois derniers tests concluants de GreatFire sur cette adresse ont tous échoué.

> GreatFire a jugé https://www.google.com/recaptcha/api.js bloqué à 100 %, 3 tests concluants sur 3 au cours des 90 derniers jours, dernier test le 7 septembre 2026. Il relève des interférences sur https://www.google.com/recaptcha depuis le 7 mai 2015.
> Source : GreatFire, septembre 2026. https://en.greatfire.org/https/www.google.com/recaptcha/api.js

Quand le script ne se charge pas, la page a l’air normale et les champs acceptent la saisie comme d’habitude. Le jeton que Google aurait dû remettre n’est jamais créé, alors que votre serveur en a besoin pour conclure la vérification.

> Le serveur transmet le jeton du champ g-recaptcha-response du formulaire à l’adresse siteverify de Google. En son absence, Google renvoie l’erreur missing-input-response : « The response parameter is missing. »
> Source : Google for Developers, Verifying the user’s response, dernière mise à jour le 14 octobre 2024. https://developers.google.com/recaptcha/docs/verify

Un formulaire qui exige une vérification réussie n’a alors d’autre choix que de refuser l’envoi. Le visiteur voit un message d’erreur, ou un bouton qui ne réagit pas. Vous ne recevez aucun e-mail. Et rien dans vos journaux ne ressemble à un prospect perdu.

La version 3 masque encore mieux la panne.

> « reCAPTCHA v3 n’interrompra jamais vos utilisateurs. » Il se charge depuis https://www.google.com/recaptcha/api.js, avec la clé du site dans un paramètre render.
> Source : Google for Developers, reCAPTCHA v3, dernière mise à jour le 10 juillet 2024. https://developers.google.com/recaptcha/docs/v3

Comme aucune case n’apparaît à l’écran, le visiteur ne peut même pas signaler qu’il en manque une.

## Sur un serveur du continent, l’échec touche tous les visiteurs

Installer le site sur un serveur du continent ajoute une seconde panne à la configuration par défaut. La vérification part de votre serveur vers Google, et GreatFire juge cette adresse bloquée elle aussi.

> GreatFire a jugé https://www.google.com/recaptcha/api/siteverify bloqué à 100 %, 1 test concluant sur 1 au cours des 90 derniers jours, dernier test le 28 septembre 2026.
> Source : GreatFire, septembre 2026. https://en.greatfire.org/https/www.google.com/recaptcha/api/siteverify

Un serveur situé en Chine ne peut donc valider aucun jeton, où que se trouve le visiteur. Un internaute à Londres charge la page, coche la case (Google lui répond sans difficulté depuis Londres) et clique sur envoyer : le serveur rejette le formulaire, parce que sa propre requête à Google s’est perdue. Ajoutez le captcha à la liste de contrôle de toute migration vers la Chine ; [notre guide pour migrer WordPress vers la Chine](/fr/ressources/guide-web-chine/migrer-wordpress-vers-chine/) détaille le reste de cette liste.

## Ce que change le passage à recaptcha.net

Google connaît le problème et documente une solution.

> « Oui, utilisez “www.recaptcha.net” dans votre code lorsque “www.google.com” n’est pas accessible. » Remplacez l’adresse d’api.js dans la page, puis « appliquez la même modification partout ailleurs où votre site utilise “www.google.com/recaptcha/” ».
> Source : Google for Developers, reCAPTCHA FAQ, dernière mise à jour le 2 avril 2026. https://developers.google.com/recaptcha/docs/faq

Cela suppose deux modifications. La première change l’adresse du script dans la page ; la seconde, plus facile à oublier, change l’adresse de vérification sur votre serveur. GreatFire a testé les deux volets de la substitution.

| Adresse                                      | Rôle                                   | Verdict GreatFire         | Tests concluants, 90 derniers jours | Dernier test  |
| -------------------------------------------- | -------------------------------------- | ------------------------- | ----------------------------------- | ------------- |
| `www.google.com/recaptcha/api.js`            | script du widget par défaut            | bloqué                    | 3 échecs sur 3                      | 7 sept. 2026  |
| `www.google.com/recaptcha/api/siteverify`    | vérification serveur par défaut        | bloqué                    | 1 échec sur 1                       | 28 sept. 2026 |
| `www.recaptcha.net`                          | le domaine de substitution             | non bloqué                | 0 perturbé sur 2                    | 30 sept. 2026 |
| `www.recaptcha.net/recaptcha/api.js`         | script du widget de substitution       | non bloqué                | 0 perturbé sur 2                    | 27 août 2026  |
| `www.gstatic.com/recaptcha`                  | code du défi que charge le script      | non bloqué                | 0 perturbé sur 1                    | 20 août 2026  |
| `www.recaptcha.net/recaptcha/api/siteverify` | vérification serveur de substitution   | accessible au dernier test | aucun sur les 90 derniers jours    | 2 mai 2026    |

> GreatFire a jugé https://www.recaptcha.net non bloqué, 0 test concluant perturbé sur 2, dernier test le 30 septembre 2026 ; sur 30 adresses recaptcha.net qu’il a testées, 28 sont jugées accessibles et 2 perturbées. Il a jugé https://www.recaptcha.net/recaptcha/api.js non bloqué le 27 août 2026 et https://www.gstatic.com/recaptcha non bloqué le 20 août 2026. Son dernier test de https://www.recaptcha.net/recaptcha/api/siteverify date du 2 mai 2026.
> Source : GreatFire, août à septembre 2026. https://en.greatfire.org/https/www.recaptcha.net

Un verdict de GreatFire indique si une connexion a abouti depuis ses points de test. Il ne comporte ni temps de réponse ni résultat distinct pour une ligne résidentielle.

Cette lacune a déjà piégé des développeurs.

> GreatFire a jugé https://fonts.googleapis.com non bloqué, 0 test concluant perturbé sur 3, dernier test le 7 septembre 2026. Depuis une ligne résidentielle China Mobile (中国移动) à Pékin, le 30 août 2026, 21YunBox a vu ce même hôte sollicité 54 fois sans jamais répondre.
> Source : GreatFire, septembre 2026. https://en.greatfire.org/https/fonts.googleapis.com ; 21YunBox, A Day of Third-Party Requests From Inside China, août 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

Le script de substitution n’est pas autonome non plus. Ouvrez le fichier `www.recaptcha.net/recaptcha/api.js` : il charge son code de défi depuis `www.gstatic.com/recaptcha`, un autre domaine de Google au bilan contrasté.

> Sur 175 adresses gstatic.com testées par GreatFire, 8 sont jugées bloquées, 42 perturbées, 123 accessibles, et 2 n’ont pas de verdict.
> Source : GreatFire, consulté le 8 octobre 2026. https://en.greatfire.org/https/www.gstatic.com

Quant à l’adresse de vérification de substitution, elle n’a pas été testée depuis mai. Nous revérifierons chaque verdict de cette page d’ici au 18 novembre 2026.

Si vos formulaires échouent aujourd’hui, faites d’abord la substitution, puis préparez le remplacement.

## Par quoi remplacer reCAPTCHA en Chine

Si vous préférez ne plus dépendre de Google du tout, cinq options sont envisageables.

Alibaba Cloud (阿里云) et Tencent Cloud (腾讯云) vendent tous deux un captcha qui fonctionne comme reCAPTCHA : un widget dans la page, puis une vérification que votre serveur effectue auprès de l’API du fournisseur avant d’accepter le formulaire.

| Option                                       | Widget servi par            | Éléments disponibles                                                   |
| -------------------------------------------- | --------------------------- | ---------------------------------------------------------------------- |
| Alibaba Cloud Captcha 2.0 (阿里云验证码2.0)   | Alibaba Cloud               | documentation du fournisseur, 11 sept. 2026 : régions Shanghai et Singapour |
| Tencent Cloud Captcha (腾讯云验证码)          | Tencent Cloud               | documentation du fournisseur, 18 sept. 2026                            |
| hCaptcha                                     | `js.hcaptcha.com`           | GreatFire : non bloqué, 25 et 26 sept. 2026                            |
| Cloudflare Turnstile                         | `challenges.cloudflare.com` | GreatFire : script non bloqué, 0 sur 1, 23 sept. 2026                  |
| Une vérification sur votre propre serveur    | votre propre domaine        | aucun hôte tiers en jeu                                                |

> Après l’intégration côté client, le serveur appelle VerifyIntelligentCaptcha. Alibaba Cloud propose deux régions de service : la Chine continentale (Shanghai, à l’adresse captcha.cn-shanghai.aliyuncs.com) et l’extérieur du continent (Singapour, à l’adresse captcha.ap-southeast-1.aliyuncs.com). La région configurée dans la page doit correspondre à l’adresse qu’appelle le serveur, faute de quoi la vérification renvoie une erreur.
> Source : centre d’aide Alibaba Cloud (阿里云), Captcha 2.0 server access, mis à jour le 11 septembre 2026. https://help.aliyun.com/zh/captcha/captcha2-0/user-guide/server-access

Concrètement, choisissez la région avant d’écrire la moindre ligne de code serveur.

> Le serveur vérifie chaque ticket avec DescribeCaptchaResult, à l’adresse captcha.tencentcloudapi.com. Un CaptchaCode égal à 1 signifie que la vérification a réussi.
> Source : Tencent Cloud (腾讯云), Captcha ticket verification, dernière mise à jour le 18 septembre 2026. https://cloud.tencent.com/document/product/1110/36926

GeeTest (极验) est le troisième nom chinois qui vient spontanément aux développeurs. Nous n’avons trouvé aucune documentation datée à son sujet : il ne figure donc pas dans le tableau.

hCaptcha et Turnstile appellent la même réserve que la substitution recaptcha.net. Leurs verdicts GreatFire sont propres, mais aucune source que nous puissions citer n’a mesuré l’un ou l’autre depuis une ligne résidentielle.

> GreatFire a jugé https://hcaptcha.com non bloqué, 0 test concluant perturbé sur 3, le 25 septembre 2026, https://js.hcaptcha.com non bloqué le 26 septembre et https://api2.hcaptcha.com non bloqué le 14 septembre. Il a jugé https://challenges.cloudflare.com/turnstile/v0/api.js non bloqué, 0 sur 1, le 23 septembre 2026.
> Source : GreatFire, septembre 2026. https://en.greatfire.org/https/hcaptcha.com et https://en.greatfire.org/https/challenges.cloudflare.com/turnstile/v0/api.js

ChinaWebFoundry a retenu la dernière option pour son propre site. Notre formulaire de contact comporte un champ caché, un pot de miel que seuls les robots remplissent, et le contrôle d’accès de notre scanner repose sur un petit calcul que notre propre serveur signe et vérifie. Aucun des deux n’appelle d’hôte tiers.

Remplacer le captcha seul ne représente qu’un petit chantier. Sur la plupart des sites, il figure sur une liste aux côtés des polices, des cartes, des outils d’analyse et des vidéos intégrées, et en venir à bout, c’est [notre travail sur les plugins et extensions](/fr/services/plugins-extensions/). Notre inventaire de [ce que bloque le Grand Pare-feu, hôte par hôte](/fr/ressources/guide-web-chine/grand-pare-feu-chine/) montre ce qui s’y trouve d’ordinaire.

## Les questions que posent les propriétaires de sites

**reCAPTCHA v3 fonctionne-t-il en Chine ?**

La version 3 se charge depuis la même adresse de script que la version 2, et GreatFire a jugé cette adresse bloquée lors de 3 tests concluants sur 3, le dernier le 7 septembre 2026. Elle échoue donc de la même façon, en plus discret. Comme elle n’affiche rien au visiteur, aucune case manquante ne peut être signalée, et votre serveur ne reçoit aucun jeton à évaluer.

**Le passage à recaptcha.net réparera-t-il mon formulaire ?**

C’est aujourd’hui la seule configuration reCAPTCHA dont les verdicts GreatFire sont propres : le domaine recaptcha.net et son script ont tous deux été jugés non bloqués en août et septembre 2026. Aucune mesure de temps ni aucun test depuis une ligne résidentielle n’ont été publiés, et le script charge toujours du code depuis `www.gstatic.com`. Considérez-le comme un correctif provisoire, le temps de passer à un captcha du continent.

**Comment savoir si mon site utilise reCAPTCHA ?**

Cherchez `www.google.com/recaptcha` et `g-recaptcha` dans le code source de vos pages. Les extensions de formulaire et les constructeurs de pages peuvent l’ajouter depuis leurs propres réglages : vérifiez-les aussi. Vous pouvez également soumettre le site au [China Site Scanner](/fr/china-site-scanner/), qui dresse la liste des hôtes tiers appelés par vos pages.
