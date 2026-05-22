---
question: "Wie spielen Sie WordPress-Updates aus China heraus ein?"
order: 28
category: "technical"
---

WordPress.org kommt durch die Große Firewall, doch die Verbindung ist launisch. Wir betreiben eigene Spiegel in China und stoßen die Updates über WP-CLI an, mit Versionsverwaltung. Alles geht zuerst in die Pré-Produktion. Der Produktiveinsatz erfolgt erst nach der Abnahme.

Die Arbeiten werden in Schwachlastzeiten geplant, mit einem vorgeschalteten Wiederherstellungs-Snapshot. Manche Plugins bereiten Probleme, die man erst auf einem chinesischen Server sieht: Wir behalten unsere eigenen korrigierten Versionen, erprobt auf der Infrastruktur des Festlands.
