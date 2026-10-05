# FR, pass 1 (humanised native translation, every changed passage rewritten from scratch)

## host-website-in-china, line 23 (tail) + new blockquote
et le moindre script ou la moindre police tirés d'un hôte étranger que le réseau du visiteur n'atteint pas restent tout bonnement en rade. Google Fonts en est l'exemple type : il répond depuis un centre de données du continent et se tait sur une ligne domestique à Pékin.

> Lors des tests de 21YunBox, `fonts.googleapis.com` a répondu à 72 requêtes sur 72 depuis une instance Alibaba Cloud (阿里云) de cn-zhangjiakou le 28 août 2026, et à 0 sur 54 depuis une ligne résidentielle China Mobile (中国移动) à Pékin le 30 août 2026.
> Source : 21YunBox, A Day of Third-Party Requests From Inside China, août 2026. URL

## host-website-in-china, undated latency blockquote
Supprimé (aucune traduction).

## host-website-in-china, Baidu paragraph
Le référencement ensuite. Baidu (百度) est le moteur qui compte ici, et il ne peut classer que les pages qu'il parvient à explorer et à charger depuis le continent. Baidu ne publie aucune règle qui récompenserait en soi un hébergement continental ou un enregistrement ICP ; l'argument en faveur d'un hébergement local repose donc sur l'accès du robot et sur la vitesse des pages depuis les réseaux du continent, deux points que vous pouvez vérifier.

## vetting-a-wordpress-agency-china, line 41 (changed sentences)
Une installation WordPress type, une fois le thème et les extensions en place, appelle en silence Google Fonts, Google Maps, reCAPTCHA, et souvent des scripts d'analyse ou de paiement hébergés hors de Chine. Certains sont bloqués purement et simplement. Google Fonts, lui, répond ou se tait selon le réseau du visiteur. Quand une requête reste sans réponse, la page n'affiche aucune erreur.

## vetting-a-wordpress-agency-china, line 83
Quels scripts étrangers faudra-t-il remplacer sur notre site actuel ?

## woocommerce-china-store-guide, table row
| Scripts | Google Fonts sur les lignes domestiques, reCAPTCHA | Auto-héberger ou remplacer |

## woocommerce-china-store-guide, paragraph + new blockquote
D'abord, les scripts étrangers. Une boutique par défaut appelle en douce Google Fonts et reCAPTCHA. Lors des tests menés par 21YunBox en août 2026, reCAPTCHA a échoué à chaque requête, depuis un centre de données du continent comme depuis une ligne domestique à Pékin ; Google Fonts répondait depuis le centre de données, jamais depuis la ligne domestique. Dans les deux cas, la page reste suspendue, à guetter une réponse qui ne viendra jamais.

> Lors des tests de 21YunBox, `www.google.com/recaptcha` a répondu à 0 requête sur 72 depuis une instance Alibaba Cloud (阿里云) de cn-zhangjiakou le 28 août 2026, et à 0 sur 18 depuis une ligne résidentielle China Mobile (中国移动) à Pékin le 30 août 2026. `fonts.googleapis.com` a répondu à 72 sur 72, puis à 0 sur 54.
> Source : 21YunBox, A Day of Third-Party Requests From Inside China, août 2026. URL

## great-firewall-what-it-blocks, line 66 (last sentence)
`fonts.google.com`, l'interface de consultation, est un hôte distinct : GreatFire l'a jugé perturbé à 100 % lors de ses deux derniers tests concluants, le plus récent le 30 septembre 2026.

## great-firewall-what-it-blocks, line 74 (one sentence)
Un simple lien Google Fonts oublié dans le CSS peut laisser la page blanche pour chaque visiteur dont le réseau ne lui répond jamais.

## great-firewall-what-it-blocks, line 76 (first sentence)
> Un simple lien Google Fonts oublié dans votre CSS peut laisser la page blanche pour tout visiteur dont le réseau ne le reçoit jamais.

## great-firewall-what-it-blocks, line 208 (cell) and line 216 (two fragments)
| Remplacement des dépendances étrangères |
**Remplacer chaque dépendance étrangère.**
Si l'un d'eux tape dans un domaine que le réseau de vos visiteurs n'atteint pas,

## is-wordpress-blocked-in-china, line 105
fonts.google.com, l'interface où vos graphistes choisissent leurs caractères, est un hôte distinct, que 21YunBox n'a pas testé. GreatFire l'a jugé perturbé à 100 % lors de ses deux derniers tests concluants, le plus récent le 30 septembre 2026. Un ennui de graphiste, donc : vos visiteurs n'y passent jamais.

Step 1 complete.
