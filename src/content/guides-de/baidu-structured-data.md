---
title: "Strukturierte Daten bei Baidu: was noch funktioniert"
subtitle: "Das Markup geht im ersten Sprint raus. JSON-LD im Head, Organization, BreadcrumbList und Product, derselbe Block wie auf jeder Website, die das Team baut. Dann fragt jemand, wie man bestätigt, dass Baidu es aufgenommen hat, und es wird still im Raum. Es gibt keinen Bericht zum Öffnen."
summary: "Baidu hat nie eine schema.org-Spezifikation und nie einen Validator veröffentlicht. Was gestorben ist, wie OpenCard tatsächlich arbeitet und welches Markup sich trotzdem lohnt."
visual: "/images/guides/baidu-structured-data.webp"
order: 16
published: true
publishedAt: 2026-08-12
updatedAt: 2026-08-12
category: Search
---

Baidu hat nie eine schema.org-Spezifikation veröffentlicht. Keine unterstützten Typen, kein Validator, nirgends ein Bericht im Webmaster-Werkzeug. Das eine Werkzeug, das gebaut wurde, ist seit Jahren defekt. Ein lebender Kanal bringt Ihre Daten in ein organisches Ergebnis, und er funktioniert ganz anders als Markup. Die meisten Unternehmen, die das hier lesen, können ihn nicht nutzen, womit die Frage offenbleibt, was man ausliefern soll.

## Baidu baute einmal ein Werkzeug für strukturierte Daten, 2013

Baidu kündigte sein Werkzeug für strukturierte Daten (结构化数据工具, jiégòuhuà shùjù gōngjù) am 25. Juli 2013 unter einer schema-Adresse der Webmaster-Plattform an. Es nahm vier Inhaltstypen entgegen und nur vier: allgemeine Fragen und Antworten (通用问答, tōngyòng wèndá), Online-Dokumente (在线文档, zàixiàn wéndàng), Dateidownloads (资料下载, zīliào xiàzài) und Softwaredownloads (软件下载, ruǎnjiàn xiàzài).

Produkte standen nie auf dieser Liste. Nicht später abgekündigt, nicht still zurückgezogen, sondern schlicht nie enthalten, und das erweist sich als Muster und nicht als Versehen.

Das Werkzeug lief vom ersten Tag an nur auf Einladung.

> 结构化数据目前尚未完全开放，我们会主动邀请优质的网站提交数据。
>
> Strukturierte Daten sind noch nicht vollständig geöffnet. Wir laden hochwertige Websites von uns aus ein, Daten einzureichen.
>
> *Quelle: Baidu Search Resource Platform, Ankündigung zum Werkzeug für strukturierte Daten, Juli 2013*

Für allgemeine Einreichungen öffnete es sich nie. Die URL liefert heute einen Serverfehler, keinen 404 und keine Weiterleitung auf einen Nachfolger. Eine Fehlerseite ist das, wie ein Dienst aussieht, für dessen ordentliche Abschaltung niemand bezahlt wurde.

## Ob Markup etwas bewirkt, hat Baidu nie gesagt

Das tote Werkzeug ist nur die halbe Geschichte. Sie werden zwei selbstbewusste Antworten zu Markup bei Baidu hören, und beide sind falsch. Baidu hat nicht gesagt, dass es schema.org liest. Und es hat auch nie gesagt, dass es schema.org ignoriert. Es gibt in keine Richtung eine Dokumentation, und dieses Schweigen ist der Befund.

Das wiegt schwerer, als es klingt, denn es nimmt die Debugging-Schleife weg, die eine Entwicklerin erwartet. Bei Google schreiben Sie Markup, starten einen Test, lesen einen Bericht und beheben, was er meldet. Bei Baidu existiert keiner dieser Schritte.

Ein Produkt trübt das immer wieder. Baidu verkauft tatsächlich etwas mit Schema im Namen, das Werkzeug für Wissensgraph-Schemata (知识图谱Schema, zhīshi túpǔ Schema) auf seiner KI-Seite. Das ist eine Modellierungsoberfläche zum Aufbau eines eigenen Wissensgraphen in Baidus KI-Cloud, ohne Bezug zu Such-Markup oder zu Ihren Seiten. In englischsprachigen Beiträgen wird sie weiterhin als Beleg zitiert, dass Baidu strukturierte Daten unterstütze, und wir haben Kunden mehr als einmal davon zurückgeholt.

## Die reichhaltigen Treffer auf der Seite stammen nicht aus Ihrem Markup

Sehen Sie sich eine Baidu-Ergebnisseite an: dicht bepackt mit Karten und generierten Antworten. Die naheliegende Annahme ist, dass ein Teil davon über Markup verdient wird.

> Rund 70 % der mobilen Ergebnisseiten von Baidu enthielten im Oktober 2025 KI-generierte Inhalte.
>
> *Quelle: Baidu Inc., Ergebnisse des dritten Quartals 2025, 18. November 2025*

Baidu hat all das auf der Antwortseite der Suchmaschine gebaut, während seine Dokumentation zu strukturierten Daten seit 2013 unberührt lag. Ein guter Teil dessen, was Sie sehen, ist bezahlt, ein weiterer Teil gehört Baidus eigenen Angeboten. Die organischen reichhaltigen Karten kommen über OpenCard, das die alten Aladdin-Karten abgelöst hat. Das ist der einzige lebende organische Weg von Ihren Daten auf die Ergebnisseite.

## OpenCard fragt Sie zur Abfragezeit, statt Sie zu crawlen

OpenCard läuft rückwärts gegenüber fast allem, was eine bei Google geschulte Entwicklung je gebaut hat.

Sie stellen einen Webhook bereit und registrieren ihn. Jemand sucht. Entscheidet Baidu, dass Ihr Dienst die richtige Antwort ist, und diese Entscheidung liegt vollständig bei Baidu, löst es die Anfrage in eine normalisierte Absicht als JSON auf und schickt sie an Ihren Endpunkt. Ihr System antwortet mit Daten, und Baidu stellt diese Antwort als reichhaltige Karte in den organischen Ergebnissen dar.

Ein Crawl ist daran nirgends beteiligt, und indexiert wird nichts. Die Daten müssen nicht einmal auf einer öffentlichen Seite liegen. Angezeigt wird, was Ihr Dienst in dem Moment zurückgegeben hat, in dem jemand fragte, was allem zugutekommt, das eine gecrawlte Momentaufnahme falsch wiedergeben würde.

Was Sie hier eingehen, ist also ein Produktivdienst im Dauerbetrieb. Der Fehlerfall ist eine Karte, die an dem Nachmittag verschwindet, an dem Ihr Endpunkt Probleme hat.

## Die meisten Unternehmen, die das lesen, sind schon nach Kategorie ausgeschlossen

OpenCard ist kein eigenständiges Produkt. Es setzt auf Baidus intelligenten Mini-Programmen (百度智能小程序, Bǎidù zhìnéng xiǎochéngxù) auf, ein Mini-Programm ist also die Eintrittskarte. Das ist echte Entwicklungsarbeit, gegen eine Plattform, die Baidu seit Jahren nachrangig behandelt.

Die Zulassung verengt es weiter.

> 小程序主面向C端用户，且不属于医疗、资讯、招聘、购物平台等类目
>
> Das Mini-Programm muss vorrangig Endverbraucher bedienen und darf nicht in Kategorien wie Medizin, Nachrichten, Stellenvermittlung oder Shopping-Plattformen fallen.
>
> *Quelle: Baidu, Zulassungsdokumentation zu OpenCard*

Shopping-Plattformen sind namentlich ausgeschlossen, dazu Medizin, Nachrichten und Stellenvermittlung. Baidus veröffentlichte Kategorieliste umfasst rund 120 Einträge: Reisen, Finanzen, Unterhaltung, Behördendienste, Versorger, Bildung, Immobilien, Kraftfahrzeuge, Spiele, Haustiere, sogar Astrologie. Keine Karte für den Einzelhandel, und keine für eine Produktliste.

Zwischen den namentlichen Ausschlüssen und der fehlenden Handelskarte deckt das die meisten ausländischen Unternehmen ab, die diesen Leitfaden lesen, und die Schlussfolgerung lautet, kein Mini-Programm mehr für eine Karte zu planen, die Sie ohnehin nie bekommen hätten. Wer eine Hotelgruppe, eine Fluggesellschaft oder eine Verbraucher-App in einer aktiven Kategorie betreibt, rechnet anders. Dann ist das Mini-Programm eine Diskussion wert.

Legen Sie die beiden Enden der Zeitachse nebeneinander. Baidus Werkzeug von 2013 deckte Produkte nie ab. Dreizehn Jahre später schließt der lebende Kanal Shopping-Plattformen namentlich aus. Produktdaten laufen stattdessen über das Werbekonto, was der Artikel zu Baidu Merchant Center behandelt, und jeder dokumentierte Ausgang dafür ist bezahlt.

## Liefern Sie das Markup aus, und nehmen Sie es dann von der Baidu-Roadmap

Was liefert ein Team also am Montag? Sauberes schema.org-Markup, wie überall sonst. In einem modernen Stack rundet sich der Aufwand auf null, und bei Google und Bing verdient es sein Geld, egal was Baidu damit macht. Wir setzen den Block ins Basis-Template, prüfen ihn einmal und machen weiter. Gut geformtes Markup reist zudem meist mit gut geformtem HTML, und genau das braucht Baiduspider wirklich.

Verbuchen Sie es nur nicht als Baidu-Leistung. Nichts validiert es, und keine Oberfläche von Baidu bestätigt, dass es etwas verändert hat. Ein Angebot, das Markup als Posten für Baidu-SEO abrechnet, verkauft Ihnen ein Ergebnis, das niemand messen kann.

Die Hebel, die Baidu-Ergebnisse wirklich bewegen, sind unscheinbarer und dokumentiert. Baiduspider muss die Website aus Festlandchina erreichen. Seiten müssen echtes HTML ausliefern statt einer JavaScript-Hülle. URLs gehen über den API-Push-Endpunkt, die ICP-Nummer in die Site-Attribute, und das Indexvolumen wird gelesen statt geraten. Andere Artikel hier behandeln jeden dieser Punkte.

Die Kategorielisten von OpenCard ändern sich leise. Prüfen Sie die Zulassung erneut, bevor Sie ein Mini-Programm planen.
