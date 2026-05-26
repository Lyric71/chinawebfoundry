---
question: "Welche Caching-Strategie setzen Sie für WordPress in China ein?"
order: 13
category: "technical"
---

Wir arbeiten auf drei Ebenen. Serverseitig setzen wir Redis oder Memcached für den Objekt-Cache ein, ergänzt um den Full-Page-Cache von Nginx FastCGI. Auf CDN-Ebene liefern Alibaba Cloud CDN oder Tencent CDN die statischen Ressourcen von Knoten innerhalb Chinas aus. Im Browser arbeiten wir mit knapp kalibrierten Cache-Control- und Expires-Headern.

WP Super Cache und W3 Total Cache lassen wir weg, da sie sich mit den chinesischen CDN ins Gehege kommen. Das Caching direkt auf Serverebene zu konfigurieren kostet im Vorfeld mehr Aufwand, doch das daraus folgende Verhalten ist weit berechenbarer.
