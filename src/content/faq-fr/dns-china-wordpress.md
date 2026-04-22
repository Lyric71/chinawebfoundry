---
question: "Comment fonctionne le DNS pour un site WordPress destiné à la Chine ?"
order: 7
category: "technical"
---

On met en place un DNS fractionné avec résolution géographique. Les visiteurs chinois tombent sur des enregistrements A qui pointent vers votre serveur sous licence ICP. Les visiteurs étrangers continuent d'atterrir sur votre infrastructure habituelle. La configuration passe par DNSPod (Tencent) ou Alibaba Cloud DNS. Vous pouvez conserver votre bureau d'enregistrement actuel, mais songez à acquérir un .cn si vous misez sur Baidu : le moteur accorde une petite prime de crédibilité aux domaines en .cn et .com.cn, surtout tant que votre autorité de marque n'est pas installée.
