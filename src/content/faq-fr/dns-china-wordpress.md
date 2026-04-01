---
question: "Expliquez-moi comment fonctionne le DNS pour un site WordPress en Chine."
order: 7
category: "technical"
---

Il s'agit d'un DNS fractionne avec resolution geographique. Les visiteurs situes en Chine resolvent vers des enregistrements A continentaux pointant sur votre serveur sous licence ICP. Les visiteurs internationaux resolvent vers votre infrastructure existante, sans aucune modification. Nous configurons cela via DNSPod (le produit DNS de Tencent) ou Alibaba Cloud DNS, tous deux capables de gerer le routage geographique nativement. Pour les noms de domaine, nous recommandons generalement de conserver votre registraire actuel, hors de Chine, tout en reservant un .cn si le referencement Baidu est un enjeu pour vous. Baidu accorde un leger bonus de credibilite aux domaines en .cn et .com.cn. Ce n'est pas un facteur determinant, mais cela aide, surtout au debut quand vous n'avez pas encore accumule d'autorite sur Baidu.
