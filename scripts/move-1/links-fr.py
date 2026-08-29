# -*- coding: utf-8 -*-
"""Move 1, Task C: one contextual internal link per French guide article."""
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from insert import apply

HEAD = '/fr/wordpress-en-chine/'
WPA = '/fr/agence-wordpress-chine/'
WEB = '/fr/agence-web-chine/'

EDITS = {
'baiduspider-firewall': (HEAD,
 u"Nous le rencontrons plus souvent que toute autre cause technique de lancement chinois enlisé, et il s'agit presque toujours d'un réglage dont personne ne se souvient.",
 u"Nous le rencontrons plus souvent que toute autre cause technique de lancement chinois enlisé, bien avant quoi que ce soit dans [la construction WordPress elle-même](" + HEAD + u"), et il s'agit presque toujours d'un réglage dont personne ne se souvient."),

'china-website-hosting-guide': (HEAD,
 u"Dans toute stratégie web orientée vers la Chine, l'hébergement reste la décision la plus sous-estimée.",
 u"Dans toute stratégie web orientée vers la Chine, l'hébergement reste la décision la plus sous-estimée : il pèse davantage sur la vitesse d'affichage que [tout ce que vous réglez dans un site WordPress](" + HEAD + u")."),

'host-website-in-china': (HEAD,
 u"Neuf fois sur dix, la cause tient à l'hébergement. L'endroit où se trouve physiquement votre serveur décide de tout :",
 u"Neuf fois sur dix, la cause tient à l'hébergement. L'endroit où se trouve physiquement votre serveur décide de tout, davantage que n'importe quel autre choix dans [un site WordPress pensé pour la Chine](" + HEAD + u") :"),

'great-firewall-what-it-blocks': (HEAD,
 u"livre une expérience dégradée aux utilisateurs en Chine.",
 u"livre une expérience dégradée aux utilisateurs en Chine, et [une installation WordPress standard en embarque plusieurs](" + HEAD + u")."),

'google-analytics-china': (HEAD,
 u"soit elles le gardent et servent en silence un site plus lent à tout Shanghai.",
 u"soit elles le gardent et servent en silence un site plus lent à tout Shanghai, l'une des façons les plus courantes de [casser un site WordPress en Chine](" + HEAD + u")."),

'china-website-localisation': (HEAD,
 u"à la réactivité du service client et à toute une série de codes culturels",
 u"à la réactivité du service client, à [ce qu'il faut changer dans un site WordPress pour la Chine](" + HEAD + u") et à toute une série de codes culturels"),

'mobile-first-design-china': (HEAD,
 u"c'est bâtir pour un internet que les Chinois ont déserté depuis longtemps.",
 u"c'est bâtir pour un internet que les Chinois ont déserté depuis longtemps, et aucun réglage apporté ensuite à [un thème WordPress pour la Chine](" + HEAD + u") ne rattrape ce choix."),

'woocommerce-china-store-guide': (HEAD,
 u"WooCommerce fonctionne très bien en Chine.",
 u"WooCommerce fonctionne très bien en Chine, aux mêmes conditions que [n'importe quel site WordPress derrière le Grand Pare-feu](" + HEAD + u")."),

'baidu-structured-data': (HEAD,
 u"ce qui laisse entière la question de ce qu'il faut livrer.",
 u"ce qui laisse entière la question de ce qu'il faut livrer depuis [un site WordPress construit pour la Chine](" + HEAD + u")."),

'submitting-urls-to-baidu': (HEAD,
 u"qui signale à Baidu qu'une page existe.",
 u"qui signale à Baidu qu'une page existe, que ces pages sortent d'[un WordPress hébergé en Chine](" + HEAD + u") ou d'autre chose."),

'baidu-search-resource-platform': (HEAD,
 u"Sans elle, une stratégie de recherche en Chine relève de la divination, facture de traduction en prime.",
 u"Sans elle, une stratégie de recherche en Chine relève de la divination, facture de traduction en prime, quel que soit le soin apporté à [la construction WordPress du site pour la Chine](" + HEAD + u")."),

'baidu-site-verification': (HEAD,
 u"L'opération prend dix minutes, à condition que l'hébergement coopère.",
 u"L'opération prend dix minutes, à condition que l'hébergement coopère et que [le site WordPress soit déjà prêt pour la Chine](" + HEAD + u")."),

'baidu-verification-failed': (HEAD,
 u"et ce qui casse se situe entre Baiduspider et votre serveur.",
 u"et ce qui casse se situe entre Baiduspider et votre serveur, en amont de [l'installation WordPress elle-même](" + HEAD + u")."),

'baidu-verification-scope': (HEAD,
 u"Un site, ici, se réduit à un protocole et un hôte.",
 u"Un site, ici, se réduit à un protocole et un hôte, ce qui compte si [votre site WordPress chinois](" + HEAD + u") répond sur plusieurs d'entre eux."),

'baidu-fast-inclusion-gone': (HEAD,
 u"Vous y poussiez une URL et la page était censée doubler la file.",
 u"Vous y poussiez une URL et la page était censée doubler la file, ce qui en faisait la première extension réclamée sur [tout projet WordPress destiné à la Chine](" + HEAD + u")."),

'china-data-privacy-pipl-dsl': (HEAD,
 u"ou suit le comportement de visiteurs situés en Chine, vous êtes dans le périmètre.",
 u"ou suit le comportement de visiteurs situés en Chine, vous êtes dans le périmètre, et [une installation WordPress standard fait au moins deux de ces trois choses](" + HEAD + u")."),

'icp-licence-filing-foreign-companies': (WPA,
 u"et à un site auquel les internautes chinois n'accorderont aucune confiance.",
 u"et à un site auquel les internautes chinois n'accorderont aucune confiance, et c'est pourquoi [une agence qui dépose des dossiers ICP à longueur d'année](" + WPA + u") vaut mieux ici qu'un devis moins cher."),

'baidu-seo-ranking-in-china': (WPA,
 u"Toute entreprise étrangère qui veut atteindre des clients chinois en ligne doit composer avec ce moteur.",
 u"Toute entreprise étrangère qui veut atteindre des clients chinois en ligne doit composer avec ce moteur, et c'est la première question à poser à [une agence WordPress qui travaille en Chine](" + WPA + u")."),

'china-content-marketing-strategy': (WPA,
 u"Cette mécanique redessine toute l'approche des plateformes, des formats et du calendrier éditorial.",
 u"Cette mécanique redessine toute l'approche des plateformes, des formats, du calendrier éditorial et de ce que vous attendez de [l'agence qui construit le site en dessous](" + WPA + u")."),

'china-search-landscape-beyond-baidu': (WPA,
 u"Les ignorer revient à passer à côté d'une part significative de la manière dont les Chinois cherchent l'information.",
 u"Les ignorer revient à passer à côté d'une part significative de la manière dont les Chinois cherchent l'information, une lacune qu'[un spécialiste WordPress de la Chine](" + WPA + u") devrait soulever avant toute signature."),

'baidu-keyword-research-tools': (WEB,
 u"et les raisons pour lesquelles la recherche de mots-clés en chinois forme une discipline à part entière.",
 u"et les raisons pour lesquelles la recherche de mots-clés en chinois forme une discipline à part entière, que vous la meniez en interne ou avec [une agence web installée en Chine](" + WEB + u")."),

'baidu-index-traffic-data': (WEB,
 u"plusieurs restant vides des semaines durant par construction.",
 u"plusieurs restant vides des semaines durant par construction, ce qui rend [l'agence qui les lit pour vous](" + WEB + u") plus déterminante que le tableau de bord."),

'baidu-account-foreign-company': (WEB,
 u"Comptez une journée pour la version facile. Plusieurs semaines pour la difficile.",
 u"Comptez une journée pour la version facile, plusieurs semaines pour la difficile, moins si [un partenaire déjà opérationnel en Chine](" + WEB + u") monte le dossier avec vous."),

'baidu-account-ownership': (WEB,
 u"L'identité rattachée à ce compte constitue ce que Baidu tient de plus proche d'un titre de propriété sur votre présence dans la recherche chinoise.",
 u"L'identité rattachée à ce compte constitue ce que Baidu tient de plus proche d'un titre de propriété sur votre présence dans la recherche chinoise, alors vérifiez à quel nom il est ouvert avant qu'[une agence sur place](" + WEB + u") en crée un pour votre compte."),

'baidu-ads-account-foreign': (WEB,
 u"et ce choix vous suit jusque dans l'hébergement et les performances d'exploration, longtemps après le lancement.",
 u"et ce choix vous suit jusque dans l'hébergement et les performances d'exploration, longtemps après le lancement, et c'est là qu'[une agence web basée en Chine](" + WEB + u") justifie ses honoraires."),

'baidu-aicaigou-b2b': (WEB,
 u"C'est dans cet écart que les plans marketing étrangers dérapent.",
 u"C'est dans cet écart que les plans marketing étrangers dérapent, et là que [confier son marketing chinois à une équipe sur place](" + WEB + u") se rentabilise."),

'baidu-merchant-center': (WEB,
 u"Rien dans cette phrase ne touche aux résultats de recherche ni à l'indexation de votre site.",
 u"Rien dans cette phrase ne touche aux résultats de recherche ni à l'indexation de votre site, un travail que [votre équipe web en Chine](" + WEB + u") doit mener séparément."),

'baidu-product-feed': (WEB,
 u"L'essentiel du chantier se joue sur des problèmes dont personne ne vous a averti.",
 u"L'essentiel du chantier se joue sur des problèmes dont personne ne vous a averti, ce qui explique que ce travail atterrisse le plus souvent chez [une agence déjà implantée en Chine](" + WEB + u")."),

'baidu-product-data-destinations': (WEB,
 u"Une phrase de la FAQ produit de Baidu énumère tous les endroits où ces données peuvent circuler. Les trois destinations s'achètent.",
 u"Une phrase de la FAQ produit de Baidu énumère tous les endroits où ces données peuvent circuler, et les trois destinations s'achètent, ce qui change la discussion budgétaire avec [qui pilote votre présence web en Chine](" + WEB + u")."),
}

if __name__ == '__main__':
    for gid, (target, old, new) in EDITS.items():
        apply('src/content/guides-fr/%s.md' % gid, [(old, new)])
    print('FR: %d articles linked' % len(EDITS))
