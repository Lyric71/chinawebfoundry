---
title: "HubSpot en Chine : ce qui fonctionne, ce qui échoue"
subtitle: "Quelles briques HubSpot ont un test daté depuis la Chine, lesquelles n’en ont aucun, et comment garder le prospect quand l’une d’elles fait défaut."
summary: "En Chine, les scripts HubSpot et un site hébergé chez HubSpot posent deux problèmes distincts. Ce que montrent les tests de GreatFire, et la parade."
visual: "/images/guides/hubspot-china.webp"
order: 44
published: true
publishedAt: "2026-10-14"
updatedAt: "2026-10-14"
reviewBy: "2026-10-31"
category: "Technology"
author: "cyril-drouin"
---

En Chine continentale, une partie de HubSpot reste accessible. Ce qui s’exécute sur vos propres pages, en revanche, n’a fait l’objet d’aucun test récent. GreatFire, qui suit la censure en Chine, n’a jugé bloqué aucun des hôtes HubSpot qu’il a testés en HTTPS. Il classe l’application HubSpot comme accessible (dernier test le 22 septembre 2026) et son hôte d’API comme perturbé lors de son unique test concluant (10 septembre 2026). Vos pages chargent pourtant autre chose : les scripts de suivi et de formulaires, plus un chargeur de chat. Rien ne permet de dire s’ils parviennent aujourd’hui à un visiteur de Chengdu.

La parade en découle. Faute de mesure, il faut concevoir chaque page pour qu’aucun prospect ne se perde si un script HubSpot n’arrive jamais, en commençant par les formulaires. Un site hébergé sur le CMS de HubSpot pose un tout autre problème, qui appelle sa propre solution : il est servi depuis l’étranger, et aucun dépôt ICP (ICP备案) n’est possible pour lui. Chaque verdict cité plus bas a été relevé à la source le 14 octobre 2026.

## Les hôtes HubSpot en Chine : bloqués, accessibles ou jamais testés

| Hôte                  | Rôle pour votre site                          | Verdict GreatFire | Tests concluants | Dernier test  |
| --------------------- | --------------------------------------------- | ----------------- | ---------------- | ------------- |
| `app.hubspot.com`     | l’application où se connecte votre équipe     | accessible        | 0 perturbé sur 1 | 22 sept. 2026 |
| `api.hubspot.com`     | hôte de l’API HubSpot                         | intermittent      | 1 perturbé sur 1 | 10 sept. 2026 |
| `hs-sites.com`        | domaine système, comptes US East              | accessible        | 0 perturbé sur 1 | 2 août 2026   |
| `js.hs-scripts.com`   | chargeur du code de suivi                     | non testé         | aucun en HTTPS   | n.d.          |
| `js.hs-analytics.net` | script de suivi                               | non testé         | aucun            | n.d.          |
| `js.hs-banner.com`    | dépose les cookies de HubSpot                 | non testé         | aucun            | n.d.          |
| `js.hsforms.net`      | affiche les formulaires intégrés              | non testé         | aucun            | n.d.          |
| `api.hsforms.com`     | API de soumission des formulaires             | non testé         | aucun            | n.d.          |
| `api.usemessages.com` | chat (chatflows)                              | non testé         | aucun            | n.d.          |

> GreatFire a jugé https://api.hubspot.com perturbé à 100 %, 1 test concluant sur 1 au cours des 90 derniers jours, dernier test le 10 septembre 2026. Il a jugé https://app.hubspot.com non bloqué, 0 sur 1, dernier test le 22 septembre 2026, et https://hs-sites.com non bloqué, 0 sur 1, dernier test le 2 août 2026.
> Source : GreatFire, septembre 2026. https://en.greatfire.org/https/api.hubspot.com, https://en.greatfire.org/https/app.hubspot.com et https://en.greatfire.org/https/hs-sites.com

Un seul test concluant par hôte, la base est mince : lisez chaque verdict avec sa date. Nous revérifions le tableau dès qu’un verdict dépasse 90 jours.

Le véritable angle mort, c’est le chargeur. Le test le plus récent de `js.hs-scripts.com` par GreatFire, le 13 septembre 2026, s’est fait en HTTP non chiffré. Or une page servie en HTTPS appelle le script en HTTPS, et GreatFire précise que les deux protocoles sont filtrés par des moyens différents : ce relevé ne dit rien de vos visiteurs. Son dernier relevé en HTTPS d’une adresse de script HubSpot remonte au 14 juillet 2026, au-delà des 90 jours que nous accordons à un verdict. Nous classons donc le script parmi les hôtes non testés.

Aucun temps de chargement ne vient combler ce vide. 21YunBox, dont nous citons les sondes sur le continent dans d’autres pages, ne publie aucun chiffre sur HubSpot (sa page HubSpot, révisée le 7 octobre 2026, porte sur la localisation des données). Pour les autres outils que charge d’ordinaire un site marketing, consultez notre [tableau de ce que bloque le Grand Pare-feu, hôte par hôte](/fr/ressources/guide-web-chine/grand-pare-feu-chine/).

## Ce que coûte un script de suivi qui cale

HubSpot demande de coller son code de suivi juste avant la balise de fermeture `</body>`. Ce code va chercher un chargeur sur `js.hs-scripts.com`, puis le script de suivi sur `js.hs-analytics.net`. Un troisième fichier, servi par `js.hs-banner.com`, dépose les cookies de HubSpot même si vous n’utilisez pas son bandeau de consentement. (Le guide de dépannage de HubSpot part d’ailleurs du principe que les trois apparaissent dans le panneau réseau du navigateur.)

> Si le code de suivi ne fonctionne pas, HubSpot prévient que les données qui en dépendent « peuvent être incomplètes ou indisponibles », que les widgets de chat « peuvent ne pas fonctionner comme prévu », et qu’il « ne peut pas récupérer les données de suivi manquées pendant que le code était inactif ».
> Source : HubSpot Knowledge Base, Troubleshoot the HubSpot tracking code, 23 juillet 2026. https://knowledge.hubspot.com/reports/how-do-i-know-if-my-hubspot-tracking-code-is-working

Placé en fin de page, après le contenu, le code peut caler sans que le visiteur s’en aperçoive : la page s’affiche. C’est la trace de sa visite qui disparaît. Les visites venues de Chine remontent au compte-gouttes, quand elles remontent, et les rapports d’attribution qui en dépendent se faussent d’une manière que votre équipe ne peut pas déceler depuis Londres ou Boston. Pour mesurer l’écart, faites tourner un compteur sur votre propre serveur en parallèle de HubSpot et comparez les sessions venues de Chine.

Le chat repose sur le même code : selon le guide d’installation de HubSpot, les widgets de chat en direct ne se chargent pas sans lui. Notre [guide consacré à Google Analytics en Chine](/fr/ressources/guide-web-chine/google-analytics-chine/) présente Baidu Tongji (百度统计) et les compteurs auto-hébergés.

## C’est dans les formulaires que se perdent les prospects

Un formulaire HubSpot intégré se construit dans le navigateur du visiteur. Le code d’intégration charge `js.hsforms.net/forms/embed/v2.js` qui se charge de dessiner le formulaire. Si ce fichier n’arrive jamais, le visiteur tombe sur un encadré vide. Copier le fichier sur votre propre serveur semble la solution évidente. HubSpot l’exclut.

> « Les formulaires HubSpot ne doivent être chargés qu’au moyen du fichier JavaScript hébergé par HubSpot. Copier le code d’intégration du formulaire pour l’héberger soi-même n’est pas pris en charge. »
> Source : documentation développeurs HubSpot, HubSpot forms, dernière modification le 29 mars 2026. https://developers.hubspot.com/docs/cms/start-building/building-blocks/modules/forms

Et votre propre formulaire HTML, capté par l’outil de formulaires externes de HubSpot ? Il dépend lui aussi du code de suivi.

> « L’outil de formulaires externes dépend du code de suivi. HubSpot ne peut collecter les soumissions de formulaire que si le code de suivi se charge correctement. »
> Source : HubSpot Knowledge Base, Use non-HubSpot forms, 27 juillet 2026. https://knowledge.hubspot.com/forms/use-non-hubspot-forms

La soumission parvient bien à la boîte de réception ou au serveur visé par le formulaire. HubSpot, en revanche, n’en saura rien, et le contact n’arrivera jamais dans la file de votre équipe commerciale.

Reprenez donc la main sur le formulaire. Construisez-le en HTML simple sur votre propre serveur et enregistrez-y d’abord chaque soumission. Transmettez-la ensuite à HubSpot par son API Submit data to a form, que HubSpot présente comme l’alternative à l’outil de formulaires externes. En cas d’échec, une tâche de relance réessaie plus tard ; le prospect, lui, est déjà dans votre base. Hébergez aussi cette relance sur un serveur du continent : l’envoi franchit la frontière, et `api.hsforms.com` n’a jamais été testé.

> HubSpot documente un point d’accès sans authentification, https://api.hsforms.com/submissions/v3/integration/submit/{portalId}/{formGuid}, qui permet d’envoyer les données d’une soumission vers un formulaire HubSpot.
> Source : documentation développeurs HubSpot, Submit data to a form, dernière modification le 29 mars 2026. https://developers.hubspot.com/docs/api-reference/legacy/marketing/forms/v3-legacy/submit-data-unauthenticated

## Un site sur HubSpot CMS relève de l’hébergement

Quand HubSpot héberge le site lui-même, les scripts deviennent le moindre des soucis.

> L’infrastructure de HubSpot tourne sur Amazon Web Services aux États-Unis (Virginie et Oregon), au Canada (Montréal), en Australie (Sydney) et dans l’Union européenne (Allemagne). Aucun centre de données n’est mentionné en Chine continentale.
> Source : HubSpot Knowledge Base, Cloud Infrastructure and Data Hosting FAQ, 24 juillet 2026. https://knowledge.hubspot.com/account-security/hubspot-cloud-infrastructure-and-data-hosting-frequently-asked-questions

Les pages parviennent aux visiteurs par le CDN de HubSpot, que sa documentation développeurs dit « propulsé par Cloudflare ». Aucune des deux pages que HubSpot consacre à son CDN ne mentionne la Chine.

Reste le dépôt ICP, et là, l’obstacle est rédhibitoire. Le dépôt se rattache à un serveur situé sur le continent et passe par le prestataire qui l’exploite.

> Un domaine qui pointe vers un serveur en Chine continentale doit avoir achevé son dépôt avant que le site puisse ouvrir au public (« 域名解析至中国内地服务器必须先完成网站备案，才能正常开通网站访问 »).
> Source : centre d’aide Alibaba Cloud (阿里云), 4 septembre 2026. https://help.aliyun.com/zh/dws/support/how-do-i-troubleshoot-the-failures-to-access-a-website-by-using-its-domain-name

HubSpot ne mentionne aucun centre de données sur le continent : un site hébergé chez HubSpot n’a donc aucun serveur auquel rattacher un dépôt. Il reste deux issues.

La première consiste à bâtir un site distinct pour la Chine, sous WordPress ou Astro, hébergé chez Alibaba Cloud ou Tencent Cloud (腾讯云), déposé en Chine, et dont les formulaires alimentent le même portail HubSpot, comme décrit plus haut. Sortir les pages chinoises de HubSpot est [un projet de migration à part entière](/fr/services/migration-chine/), et c’est la voie que nous suivrions pour un site qui doit fonctionner tous les jours.

La seconde passe par un proxy inverse : un CDN du continent, sur un domaine déposé, placé devant HubSpot. HubSpot n’accepte un proxy que sur un CDN ou un réseau distribué, et son support ne le configurera pas pour vous. Chaque page que le proxy récupère continue de venir des serveurs de HubSpot, hors de Chine : elle franchit la frontière par un chemin qu’aucun test publié ne couvre.

Le lieu de stockage des données de contact est une autre affaire, régie par le PIPL ; notre [guide des règles chinoises sur les données personnelles](/fr/ressources/guide-web-chine/donnees-personnelles-chine-pipl-dsl/) y répond.

## Questions fréquentes

**HubSpot fonctionne-t-il en Chine ?**

L’application HubSpot était accessible lors du dernier test de GreatFire, le 22 septembre 2026 : une équipe basée à Shanghai devrait donc pouvoir se connecter. L’hôte d’API de HubSpot est plus fragile, perturbé lors de son unique test, le 10 septembre 2026. Quant aux scripts qui tournent sur les pages de vos visiteurs, ils n’ont fait l’objet d’aucun test HTTPS récent.

**Peut-on utiliser les formulaires HubSpot sur un site hébergé en Chine ?**

Oui, à condition que le formulaire n’ait besoin d’aucun script HubSpot pour exister. Construisez-le en HTML sur votre serveur du continent et enregistrez-y chaque soumission. Une tâche de fond la transmet ensuite à HubSpot par l’API Submit data to a form et réessaie en cas d’échec.

**HubSpot dispose-t-il d’un centre de données en Chine ?**

Non. HubSpot mentionne des centres de données aux États-Unis, au Canada, en Australie et en Allemagne, tous sur Amazon Web Services, et aucun en Chine continentale (24 juillet 2026). Un site hébergé chez HubSpot ne peut donc faire l’objet d’aucun dépôt ICP. Et les données de contact des visiteurs chinois deviennent un transfert transfrontalier, avec les obligations que le PIPL y attache.
