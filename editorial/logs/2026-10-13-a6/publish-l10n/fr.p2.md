---
title: "Dépôt ICP : le cas d'un site WordPress"
subtitle: "Le volet WordPress du dépôt ICP : ce que l'examen contrôle sur le site lui-même, et comment organiser le chantier en conséquence."
summary: "Ce que le dépôt ICP exige du site lui-même : un domaine fermé pendant l'examen, un nom et un contenu fidèles au dossier, et sa place dans le calendrier."
visual: "/images/guides/wordpress-icp-filing.webp"
order: 43
published: true
publishedAt: "2026-10-13"
updatedAt: "2026-10-13"
reviewBy: "2027-01-09"
category: "Legal"
author: "echo-peng"
---

Un dépôt ICP (ICP备案) concerne d'abord l'entreprise : il lui faut une entité en Chine continentale pour le porter et un serveur continental auquel le rattacher. L'examen s'intéresse pourtant aussi au site WordPress. Son domaine doit être enregistré chez un registraire continental, au nom du déclarant. Le nom du site s'écrit en chinois et obéit aux règles provinciales ; le contenu doit coller au dossier. Pendant un premier dépôt, le site reste fermé jusqu'à l'attribution du numéro. La licence ICP ne s'y ajoute que pour un site qui fait payer ses utilisateurs.

| Ce que l'examen vérifie | Ce que cela implique pour le site WordPress |
| --- | --- |
| Le domaine | Identité vérifiée chez un registraire continental, au nom du déclarant |
| Le nom du site | Trois caractères chinois au moins, repris comme titre du site |
| Le contenu | Conforme à l'activité de l'entreprise ; aucun sujet réglementé sans autorisation |
| L'accessibilité pendant l'examen | Aucune. Ni page d'attente ni préproduction sur le serveur continental |
| Le pied de page, après validation | Le numéro ICP avec un lien vers le MIIT, puis le numéro de sécurité publique |

Toutes les sources citées ci-dessous ont été vérifiées le 13 octobre 2026.

## Dépôt ou licence ICP : le site fait-il payer quoi que ce soit ?

Le droit chinois range les services d'information sur internet en deux catégories, et la règle tient en deux phrases.

> Les services d'information commerciaux sur internet fournissent aux utilisateurs, contre rémunération, des informations ou des services de production de pages web. Les services non commerciaux mettent gratuitement à leur disposition des informations publiques et partagées.
> Source : Conseil des affaires d'État, Mesures relatives à l'administration des services d'information sur internet (互联网信息服务管理办法), article 3, texte du 8 janvier 2011, inchangé par la révision du 6 décembre 2024. https://www.gov.cn/gongbao/content/2011/content_1860864.htm

Un site d'entreprise, un blog, un catalogue de produits ou une page carrières se lisent gratuitement : le dépôt suffit. Un accès payant, ou une extension d'adhésion qui vend des formations, fait basculer vers la licence, une voie qui exige un conseil agréé.

La boutique WooCommerce, elle, divise. La liste négative chinoise des investissements étrangers soustrait le commerce électronique au plafond de 50 % de participation étrangère dans les télécommunications à valeur ajoutée, signe que les boutiques forment une catégorie à part. Où se range la vôtre ? La question relève d'un conseil et se pose avant le dépôt. [Notre guide du dépôt ICP pour les entreprises étrangères](/fr/ressources/guide-web-chine/licence-icp-entreprises-etrangeres/) traite de la licence, du plafond de participation et des zones pilotes.

## Ce que le dépôt exige du site, et non de l'entreprise

Côté site, trois éléments peuvent faire échouer un dossier avant même qu'un examinateur ne l'ouvre.

**Le domaine.** Alibaba Cloud (阿里云) pose trois conditions, dont aucune ne touche à l'hébergement.

> L'extension du domaine doit être approuvée par le MIIT, le registraire doit être agréé et les informations du titulaire doivent correspondre à celles de l'entité déclarante. Un domaine enregistré sur le site international d'Alibaba Cloud doit être transféré chez un registraire continental et faire l'objet d'une vérification d'identité avant le dépôt.
> Source : centre d'aide d'Alibaba Cloud (阿里云), préparation et vérification du nom de domaine, mis à jour le 23 septembre 2026. https://help.aliyun.com/zh/icp-filing/basic-icp-service/user-guide/prepare-and-check-the-domain-name

La même page exige aussi plus de 45 jours avant l'expiration du domaine. Un domaine que votre agence européenne a enregistré à son propre nom bute sur le troisième critère dès le premier jour.

**Le nom du site.** C'est sur ce champ que trébuchent les équipes WordPress. Il doit être en chinois et fixé tôt, puisqu'il aboutit dans le titre du site.

> Le nom d'un site d'entreprise doit compter au moins trois caractères chinois. Les chiffres seuls, l'anglais et les noms de domaine sont exclus, et le nom doit correspondre au contenu réel du site. Les organismes non étatiques ne peuvent employer des termes comme 中国, 中华 ou 国家, et des mots comme blog, forum, en ligne ou communauté exigent une autorisation préalable.
> Source : centre d'aide d'Alibaba Cloud (阿里云), renseigner les informations du site, mis à jour le 21 septembre 2026. https://help.aliyun.com/zh/icp-filing/basic-icp-service/user-guide/fill-in-website-information

Chaque province y ajoute ses propres mots interdits. Selon la liste des motifs de rejet d'Alibaba (7 juillet 2026), un site déposé doit afficher le nom déclaré dans l'onglet du navigateur et en haut de page : c'est donc le titre du site, sous Réglages > Général, qui le porte.

**Le contenu.** Tencent Cloud (腾讯云) précise qu'une entreprise dépose son propre site, dont le contenu doit rester dans son périmètre d'activité (documentation mise à jour le 23 juillet 2026). Certains sujets exigent l'aval d'un régulateur avant même le dépôt du dossier.

> Les services d'information sur internet dans l'actualité, l'édition, l'éducation et les domaines comparables soumis à l'approbation de l'autorité compétente doivent l'obtenir avant de demander une licence ou d'effectuer le dépôt.
> Source : Conseil des affaires d'État, Mesures relatives à l'administration des services d'information sur internet, article 5 modifié par le décret n° 797 du Conseil des affaires d'État du 6 décembre 2024, en vigueur depuis le 20 janvier 2025. https://www.mee.gov.cn/zcwj/gwywj/202412/t20241216_1098631.shtml

La liste des autorisations préalables d'Alibaba va plus loin.

| Contenu du site WordPress | Ce qu'il faut avant le dépôt |
| --- | --- |
| Actualité ou information générale | Une licence de service d'information d'actualité sur internet |
| Édition en ligne | Une licence de service d'édition en ligne |
| Informations sur les médicaments ou dispositifs médicaux | Un certificat de service d'information sur les médicaments |
| Programmes vidéo et audio | Une licence de programmes audiovisuels |
| Soutien scolaire hors établissement, finance, religion | L'accord du régulateur du secteur |
| Aucun de ces sujets | Dans certaines régions, une déclaration signée |

Source du tableau : centre d'aide d'Alibaba Cloud (阿里云), autorisations préalables, mis à jour le 21 août 2026.

## Hors ligne pendant l'examen : pas de page d'attente

Lors d'un premier dépôt, le site ne peut pas être en ligne pendant que le régulateur l'examine. Tencent le dit sans ambages.

> Pendant l'examen d'un nouveau dépôt ou d'un nouveau site, le site ne doit pas être accessible. Il doit être fermé ou injoignable par son domaine public ou son adresse IP, faute de quoi il échoue au contrôle du régulateur et risque le rejet.
> Source : documentation de Tencent Cloud (腾讯云), mise à jour le 21 août 2026. https://cloud.tencent.com/document/product/243/19650

Alibaba applique la même règle.

> Un site ne peut pas ouvrir de service web avant d'avoir obtenu un numéro de dépôt. S'il le fait, la surveillance d'Alibaba Cloud le repère et le bloque.
> Source : centre d'aide d'Alibaba Cloud (阿里云), FAQ du dépôt ICP, mise à jour le 23 septembre 2026. https://help.aliyun.com/zh/icp-filing/basic-icp-service/support/faq-about-icp-filing-preparations

Installer une extension « bientôt disponible » sur le serveur continental est donc une faute, tout comme exposer une copie de préproduction sur son adresse IP publique. Sur nos projets, les ports 80 et 443 restent de toute façon fermés jusqu'à l'arrivée du numéro.

Vous déposez le domaine sur lequel tourne déjà votre site international ? Le texte de Tencent ne prévoit aucune exception pour un site hébergé ailleurs : interrogez le prestataire avant de soumettre le dossier.

Le chantier se poursuit ailleurs, sur une copie de préproduction locale ou hébergée hors de Chine. La période d'examen tombe bien pour éliminer les dépendances bloquées ([notre guide de la migration de WordPress vers la Chine](/fr/ressources/guide-web-chine/migrer-wordpress-vers-chine/) les recense).

| Quand | Le dépôt | Le chantier WordPress |
| --- | --- | --- |
| Avant la soumission | Entité, domaine, nom chinois du site, serveur | Fixer le titre du site ; trancher sur les commentaires et les formulaires |
| Examen (nous prévoyons 3 à 6 semaines) | Contrôle du prestataire, puis examen provincial | Préproduction hors du serveur continental ; correction des dépendances |
| Arrivée du numéro | Dépôt validé | Mise en ligne, numéro en pied de page, domaine pointé vers le serveur |
| Dans les 30 jours suivant l'ouverture | Enregistrement auprès de la sécurité publique | Second numéro en pied de page |

Ces trois à six semaines sont notre hypothèse de travail. Sur le papier, les délais sont plus courts.

> Le contrôle d'Alibaba Cloud prend 1 à 2 jours ouvrés. L'examen de l'administration provinciale des communications (省级通信管理局) qui suit prend en général de 1 à 20 jours ouvrés.
> Source : centre d'aide d'Alibaba Cloud (阿里云), présentation de la procédure de dépôt ICP, mise à jour le 26 août 2026. https://help.aliyun.com/zh/icp-filing/basic-icp-service/user-guide/icp-filing-application-overview

Alibaba ne facture pas le dépôt lui-même ; vous payez le serveur continental auquel il est rattaché (FAQ mise à jour le 23 avril 2026).

Côté WordPress, commentaires et forums sont les premiers à disparaître avant l'ouverture du site.

Sur ce point, les textes et les prestataires divergent. L'article 9 des mesures du Conseil des affaires d'État évoque encore une demande spécifique pour les services de babillard électronique (forums et messageries publiques). Mais le Conseil des affaires d'État a supprimé cette autorisation, et le ministère a abrogé ses règles sur ces services le 23 septembre 2014. La liste des motifs de rejet d'Alibaba cite pourtant toujours les contenus de babillard électronique parmi les sujets soumis à autorisation, et c'est le prestataire qui examine votre dossier en premier.

Aucune page actuelle consacrée au dépôt, à notre connaissance, ne traite des simples commentaires de blog. Ouvrez donc le site avec les commentaires désactivés et bbPress ou BuddyPress désinstallés, puis consultez le prestataire avant de réactiver quoi que ce soit.

## Pourquoi WordPress.com ne peut pas faire l'objet d'un dépôt

WordPress.com propose des centres de données US West, US Central, US East et EU West (page d'aide consultée le 21 septembre 2026). Aucun n'est situé en Chine continentale. Or c'est le fournisseur de l'accès réseau du serveur qui effectue le dépôt.

> Un serveur acheté ailleurs ne peut pas faire l'objet d'un dépôt chez Tencent Cloud. Le dépôt suit le principe selon lequel celui qui fournit l'accès dépose : vous déposez auprès du prestataire dont vous utilisez le serveur.
> Source : documentation de Tencent Cloud (腾讯云), mise à jour le 30 janvier 2026. https://cloud.tencent.com/document/product/243/19631

Un site WordPress.com destiné à la Chine devient donc un WordPress auto-hébergé sur un serveur continental, l'architecture que décrit [notre page WordPress en Chine](/fr/wordpress-en-chine/).

Reste à savoir s'il s'affiche en Chine, et sur ce point la réponse de GreatFire est plus fiable que les guides plus anciens.

> GreatFire considère https://wordpress.com comme non bloqué : les 20 tests concluants récents menés depuis la Chine continentale se sont connectés normalement, le dernier le 11 octobre 2026.
> Source : GreatFire, fiche d'accessibilité de https://wordpress.com, consultée le 13 octobre 2026. https://en.greatfire.org/https/wordpress.com

Le domaine dans son ensemble est plus inégal : sur 1 516 adresses wordpress.com testées, 230 sont classées bloquées et 823 perturbées (page de domaine GreatFire, 13 octobre 2026).

## La console de dépôt, et qui en a la charge chez vous

Le dépôt passe par la console d'un prestataire, et le type de compte n'est pas indifférent. Chez Alibaba, il doit s'agir d'un compte aliyun.com.

> Les comptes du site international d'Alibaba Cloud (alibabacloud.com) ne permettent pas de demander un dépôt ICP.
> Source : centre d'aide d'Alibaba Cloud, dépôt ICP pour les entreprises situées hors de Chine continentale, mis à jour le 20 août 2026. https://help.aliyun.com/en/icp-filing/basic-icp-service/product-overview/icp-filing-application-for-enterprises-outside-the-chinese-mainland

Le responsable du site y verse ensuite une pièce d'identité et se soumet à une vérification faciale. Alibaba accepte le passeport des résidents d'autres pays (11 septembre 2026), mais sa vérification faciale est conçue autour de la carte d'identité continentale (2 juin 2026), et aucune des pages que nous avons consultées n'explique comment un titulaire de passeport la franchit.

Le piège, pour les équipes, c'est le délai du SMS.

> Une fois la demande de dépôt soumise, le MIIT envoie un SMS de vérification. Il faut le valider dans les 24 heures, faute de quoi le dépôt doit être soumis à nouveau.
> Source : centre d'aide d'Alibaba Cloud (阿里云), vérification par SMS du MIIT, mis à jour le 17 septembre 2025. https://help.aliyun.com/zh/icp-filing/basic-icp-service/user-guide/sms-check

Le responsable est donc une personne nommée au sein de l'entité continentale. Elle détient l'accès à la console, utilise un numéro de téléphone de la province du dépôt (conseil d'Alibaba) et répond dans la journée. Ce rôle ne revient ni à votre développeur indépendant ni au chef de projet basé à Lyon.

Alibaba rejette les dossiers dont le téléphone de contact ne répond pas, et Tencent indique qu'un dépôt peut être annulé si le numéro est hors service lors d'un contrôle inopiné. [Notre service d'hébergement en Chine](/fr/services/hebergement-chine/) prend en charge le dépôt de bout en bout ; même dans ce cas, le SMS parvient à la personne que vous avez désignée.

## Après la validation : deux numéros en pied de page et les obligations annuelles

Une fois le numéro obtenu, le reste relève de l'intendance. Il doit figurer sur le site dès l'ouverture.

> Le fournisseur de services d'information non commerciaux sur internet affiche son numéro de dépôt en bas et au centre de sa page d'accueil dès l'ouverture du site, avec en dessous un lien vers le système de dépôt du MIIT.
> Source : ministère de l'Industrie et des Technologies de l'information (工业和信息化部), Mesures relatives à l'administration du dépôt des services d'information non commerciaux sur internet, article 13, modifiées le 18 janvier 2024. https://www.miit.gov.cn/gyhxxhb/jgsj/cyzcyfgs/bmgz/xxtxl/art/2024/art_84a0cfa0ebd049bbbe751dca9a008e56.html

Sous WordPress, placez-le dans un widget de pied de page ou dans un thème enfant. Un numéro saisi dans le footer.php du thème parent ne survit pas à la prochaine mise à jour du thème, et un lien manquant peut valoir une injonction de mise en conformité, puis une amende (article 25).

Vient ensuite l'enregistrement auprès de la sécurité publique (公安备案). Alibaba laisse 30 jours à compter de l'ouverture du site, et le Bureau de la sécurité publique de Shenzhen (10 juin 2023) indique que le numéro, une fois accordé, doit figurer bien en vue en bas de la page d'accueil. Le pied de page porte donc deux numéros.

Restent les obligations annuelles. Les mesures du MIIT exigent de signaler toute modification des informations déclarées 30 jours à l'avance et d'annuler le dépôt le jour où le service s'arrête. Et le texte prévoit encore un contrôle annuel via le système du MIIT.

Changer d'hébergeur impose un dépôt de transfert, qui obéit à la logique inverse : le site déposé doit rester accessible, et Alibaba rejette un transfert quand il est injoignable. Si le serveur expire sans qu'un nouveau prestataire prenne le relais, le dossier devient une coquille vide, que le régulateur annule selon Tencent (documentation mise à jour le 3 février 2026).

C'est aussi dans le thème enfant que se loge Baidu Tongji (百度统计). Aucune extension maintenue ne lui est consacrée, et la page d'aide de Baidu (22 septembre 2021) demande d'insérer le code avant la balise de fermeture head de chaque page.

## Questions fréquentes

**Mon site WordPress a-t-il besoin d'un dépôt ICP ?**

Seulement s'il est servi depuis un serveur de Chine continentale. Un site hébergé à Hong Kong ou en Europe s'en dispense, mais il en paie le prix à la frontière, où chaque requête doit franchir le Grand Pare-feu. Un serveur continental ne peut ouvrir le site au public qu'une fois le dépôt validé, et un site qui fait payer ses utilisateurs doit aussi obtenir la licence ICP.

**Peut-on garder une page « bientôt disponible » en ligne pendant l'examen ?**

Ni sur le serveur continental, ni sous le domaine déposé. Tencent Cloud indique que le site doit être fermé ou injoignable par son domaine public ou son adresse IP pendant un premier dépôt, sous peine de rejet lors du contrôle du régulateur. Travaillez sur une copie de préproduction locale ou hors de Chine, et pointez le domaine vers le serveur continental une fois le numéro attribué.

**Notre développeur à l'étranger peut-il détenir le compte de dépôt ?**

Il peut construire le site, mais le dépôt appartient à l'entité continentale. Le déclarant doit être une société ou un résident de Chine continentale, le domaine doit être à son nom, et il faut répondre dans les 24 heures au SMS que le MIIT envoie au numéro du dossier. Aucune de ces trois conditions n'est à la portée d'un développeur établi à l'étranger.

**Combien de temps prend le dépôt ICP d'un site WordPress ?**

Alibaba Cloud annonce 1 à 2 jours ouvrés pour son propre contrôle et, en général, 1 à 20 jours ouvrés pour l'examen provincial. Nous prévoyons trois à six semaines, car il faut du temps pour réunir les pièces et les dossiers reviennent pour correction. Terminez le chantier en préproduction avant l'arrivée du numéro.
