---
question: "Welche Caching-Strategie setzen Sie für WordPress in China ein?"
order: 13
category: "technical"
---

Drei Ebenen. Serverseitig: Redis oder Memcached für den Objekt-Cache, ergänzt um den Full-Page-Cache von Nginx FastCGI. CDN-seitig: Alibaba Cloud CDN oder Tencent CDN, um statische Ressourcen von Knoten innerhalb Chinas auszuliefern. Browserseitig: knapp kalibrierte Cache-Control- und Expires-Header.

WP Super Cache und W3 Total Cache lassen wir weg, da sie sich mit den chinesischen CDN ins Gehege kommen. Das Caching direkt auf Serverebene zu konfigurieren kostet im Vorfeld mehr Aufwand, doch das daraus folgende Verhalten ist weit berechenbarer.
