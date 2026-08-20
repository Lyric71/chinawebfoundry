---
title: "Baidus Indexvolumen und Traffic-Daten richtig lesen"
subtitle: "Zwei Wochen nach dem Start loggt sich endlich jemand aus dem Marketing in die Baidu Search Resource Platform ein. Indexvolumen: null. Traffic und Keywords: leer. Crawl-Frequenz: eine flache Linie. Die naheliegende Deutung wäre, dass die Website kaputt ist. Meistens ist sie es nicht."
summary: "Was Baidus Berichte zu Indexvolumen, Traffic und Keywords tatsächlich messen, wie weit man jedem trauen kann und wann eine neue Website mit Daten rechnen darf."
visual: "/images/guides/baidu-index-traffic-data.webp"
order: 21
published: true
publishedAt: 2026-08-15
updatedAt: 2026-08-15
category: Search
---

Die Berichtsseite der Baidu Search Resource Platform (百度搜索资源平台, Bǎidù Sōusuǒ Zīyuán Píngtái) ist kein Dashboard in dem Sinn, den Sie gewohnt sind. Sie ist eine Sammlung getrennter Instrumente mit einem gemeinsamen Login, jedes auf seiner eigenen Uhr, mehrere davon wochenlang leer, und zwar mit Absicht.

## Das Indexvolumen ist eine Trendlinie, keine Seitenzählung

Das Indexvolumen (索引量, suǒyǐn liàng) wird in Besprechungen häufiger zitiert als jede andere Zahl hier, und ebenso häufig falsch gelesen. Es meldet, wie viele Ihrer Seiten Baidu hält. Nicht welche, und keine exakte Zahl. Baidu hat es nie anders dargestellt.

Die Granularität ist besser, als man annimmt. Tageswerte für das zurückliegende Jahr, Monatswerte für alles davor. Genug, um die Woche zu finden, in der eine Migration schiefging, und mehr braucht kaum jemand davon.

Was Sie nicht tun können, ist zwei benachbarte Tage als Messung zu behandeln. Bewegung über Nacht ist Rauschen. Ein Rückgang, der zwei Wochen hält, ist eine Besprechung wert.

Ein Detail erwischt Unternehmen, die eine Länder-Subdomain betreiben. Indexdaten auf Subdomain-Ebene erscheinen laut Agenturdokumentation zur Plattform erst, wenn auch die Root-Domain verifiziert ist.

## Traffic und Keywords bleibt leer, bis Klicks kommen

Traffic und Keywords (流量与关键词, liúliàng yǔ guānjiàncí) meldet Impressionen und Klicks zu den Suchanfragen, die sie erzeugt haben. Es ist das, was einem Performance-Bericht bei Baidu am nächsten kommt, und es überrascht alle, die von der Search Console kommen.

Gemessen wird stündlich, feiner als die meisten erwarten, mit rund fünf Stunden Verzögerung. Die Spitze um neun Uhr taucht am Nachmittag auf.

Die größere Einschränkung ist die Aufbewahrung. Das Keyword-Fenster umfasst 30 Tage und lässt sich nicht verlängern. Mobile Keyword-Daten bleiben etwa drei Monate. Eine Jahresvergleichsansicht dazu, welche Anfragen Traffic gebracht haben, bauen Sie selbst, indem Sie ab der Launch-Woche regelmäßig exportieren. Die meisten Teams erfahren das zu spät.

Der Bericht deckelt außerdem bei 50.000 Keyword-Zeilen. Broschüren-Websites werden das nie sehen. Ein großer Katalog schon, und der lange Schwanz fällt hinten aus dem Export.

Und dann der Teil, der den Alarm auslöst. Dieser Bericht füllt sich erst, wenn die Website Klicks bekommt, und das ist eine höhere Hürde als gecrawlt oder indexiert zu werden. Eine neue Website ohne Rankings zeigt nichts, und nichts ist hier die richtige Lesart.

> Rund 70 % der mobilen Ergebnisseiten von Baidu enthielten im Oktober 2025 KI-generierte Inhalte.
>
> *Quelle: Baidu Inc., Ergebnisse des dritten Quartals 2025, 18. November 2025*

Behalten Sie das im Kopf, wenn die Klicks langsamer eintreffen, als die Rankings vermuten lassen. Ihr Link ist nicht mehr das Einzige auf der Seite.

## Crawl-Frequenz und Crawl-Ausnahmen brauchen erst einmal einen Crawler

Weiter unten im Menü sind Crawl-Frequenz und Crawl-Ausnahmen rein beobachtend. Die Frequenz zeigt, wie oft Baiduspider wiederkommt, die Ausnahmen zeigen, worauf er dabei gestoßen ist. War der Crawler nicht da, gibt es nichts aufzuzeichnen, und eine flache Linie bedeutet, dass er nie kam. Ein völlig anderes Problem als ein Crawler, der kam und scheiterte.

Diese Unterscheidung ändert den nächsten Schritt. Eine flache Crawl-Kurve auf einer zwei Wochen alten Website ist kein Grund, Inhalte neu zu schreiben. Sie ist ein Grund zu prüfen, ob Baiduspider den Server überhaupt erreicht, und das ist eine Hosting- und Firewall-Frage.

Die Crawl-Ausnahmen listen die URLs auf, die gescheitert sind, und Fachquellen setzen diese Liste bei den ersten 1.000 Links an. Baidu hat die Zahl nicht bestätigt, behandeln Sie sie also als Arbeitsannahme. So oder so bekommt eine Website, die gerade einen großen Katalog zerlegt hat, eine Stichprobe und keine vollständige Aufstellung.

## Die Crawl-Diagnose antwortet für eine URL, und sie ist rationiert

Die Crawl-Diagnose (抓取诊断, zhuāqǔ zhěnduàn) ist das einzige Werkzeug hier, das eine Antwort in Echtzeit gibt. Sie ruft eine URL als Baiduspider ab, Desktop oder mobil, und zeigt, was zurückkam. Auf einer per JavaScript gerenderten Website beendet sie die Diskussion meist in einem Bildschirm.

Zwei Grenzen bestimmen den Umgang damit. Sie erfasst die ersten 200 KB des Inhalts, was eine schwere Seite abschneidet. Und das wöchentliche Abrufkontingent ist rationiert, wobei die Quellen sich uneins sind: 优化猩 nennt 70 Abrufe pro Woche, Dragon Metrics nennt 200. Wir kalkulieren mit dem niedrigeren Wert.

Die Einreichung toter Links (死链提交, sǐliàn tíjiāo) ist das Gegenstück zum Aufräumen. Füttern Sie sie mit txt oder xml, bis zu 50.000 URLs und 10 MB, und die Entfernung greift meist nach drei Tagen bis einer Woche. Führen Sie sie nach jeder Migration aus, oder lassen Sie Baidu die 404er im eigenen Tempo finden.

## Was tun, wenn sich die Berichte widersprechen

Sie werden sich widersprechen. Das Indexvolumen liegt meist unter Ihrer Sitemap-Zahl. Baidu Tongji (百度统计, Bǎidù Tǒngjì) zeigt Sitzungen, die in Traffic und Keywords nie auftauchen. Nichts davon ist ein Fehler, den man melden könnte.

Die Berichte messen verschiedene Dinge. Das Indexvolumen ist eine Schätzung auf einer Tagesuhr. Traffic und Keywords läuft stündlich, fünf Stunden hinterher, und zählt nur Klicks, die Baidu der organischen Suche zurechnet. Tongji ist ein JavaScript-Tag, das Menschen zählt, die Ihren Server auf irgendeinem Weg erreicht haben. Eine gemeinsame Schicht darunter gibt es nicht.

Arbeiten Sie deshalb nach einer groben Vertrauensreihenfolge. Ein Abruf über die Crawl-Diagnose ist das Verlässlichste auf der Plattform, weil Sie ihn ausgelöst haben und die Antwort vor Ihnen liegt. Danach kommen die Klickdaten, dann das Indexvolumen, das bestenfalls die Richtung angibt. Am wenigsten Vertrauen verdienen Kontingentanzeigen: Baidus Werkzeugtext zur Einreichung nennt eine Obergrenze von 100.000 URLs pro Tag, während Praktiker reale Zuteilungen dokumentieren, die auf 100 zusammenfielen.

Wenn zwei Berichte uneins sind, ob eine Seite im Index steht, sehen Sie in den Suchergebnissen nach. Eine site:-Abfrage plus ein Diagnose-Abruf klären das schneller als ein Support-Ticket.

Wir sagen das Kunden in Woche eins, und es erspart später Ärger. Baidus Reporting ist ungenauer als die Google Search Console. Weniger Dimensionen, kürzere Aufbewahrung, und keine Schätzung kommt mit einem Hinweis darauf, wie grob sie sein könnte. Richten Sie sich danach ein, was die Werkzeuge leisten.

## Wann eine neue Website mit etwas rechnen darf

Beginnen wir mit dem, was schnell geht. Die Verifizierung dauert von sofort bis 24 Stunden, oft noch in derselben Sitzung. Die Crawl-Diagnose funktioniert unmittelbar danach. Öffnen Sie die zuerst.

Die erste Indexierung einer neuen Website dauert zwei bis vier Wochen. Dass das Indexvolumen in diesem Fenster tage- oder wochenlang null anzeigt, ist üblich, und eine nicht registrierte Website ist noch langsamer. Existiert die ICP-Registriernummer (备案号, bèi'àn hào), tragen Sie sie am ersten Tag in die Site-Attribute ein. Websites unter sechs Monaten wird das ausdrücklich empfohlen.

Baidu veröffentlicht dafür keinerlei Service-Level-Vereinbarung. Nichts verpflichtet den Crawler auf ein Intervall, und nirgends wird ein Indexierungsfenster zugesagt. Jede Zeitangabe oben ist beobachtetes Verhalten und keine Zusage. Die ehrliche Antwort auf die Frage, wann man indexiert sei, kommt deshalb als Spanne mit Bedingungen.

Die Grenzen der Berichte ändern sich ohne Ankündigung. Prüfen Sie Kontingente auf der Plattform, bevor Sie darauf aufbauen.
