---
title: "Einen Baidu-Produktfeed aufbauen"
subtitle: "Die Aufgabe klingt zunächst klein. Den Katalog in Baidu Merchant Center bringen. Dann sucht man das Plugin, und es gibt keins. Eine WooCommerce-Erweiterung dafür existiert nicht, weder kostenlos noch kostenpflichtig. Der Export ist Maßarbeit, geschrieben gegen eine Spezifikation von 2019, die größtenteils hinter einem Login liegt."
summary: "Wie ein Baidu-Produktfeed aufgebaut ist, die fünf Wege ihn zu laden, und die Feldregeln, die einen WooCommerce- oder Headless-Export still zerlegen."
visual: "/images/guides/baidu-product-feed.webp"
order: 19
published: true
publishedAt: 2026-08-14
updatedAt: 2026-08-14
category: Search
---

Baidu Merchant Center (百度商品中心, Bǎidù Shāngpǐn Zhōngxīn) speichert Produktdatensätze, die Baidus Werbesysteme bei Bedarf wieder auslesen. Ihr Feed ist die Eingabe, eine fehlerhafte Datei stoppt also alles Nachgelagerte.

> China zählte im Dezember 2025 937 Millionen Online-Käufer, das sind 83,2 % der 1,125 Milliarden Internetnutzer des Landes.
>
> *Quelle: China Internet Network Information Center, 57. Statistikbericht, 17. März 2026*

Das ist der Markt auf der anderen Seite der Datei, erreichbar über die bezahlten Produktanzeigen, die diese Daten speisen. Der größte Teil der Arbeit geht für Probleme drauf, vor denen Sie niemand gewarnt hat.

## Vier Objekte, und weh tut das kleinste Kontingent

Die Struktur reicht drei Ebenen tief. Ein Katalog (目录, mùlù) enthält Produktdateien (商品文件, shāngpǐn wénjiàn), und eine Datei enthält Produkte (商品, shāngpǐn), bis zu einer Million. An diese Grenze kommt niemand.

Ein neues Konto bekommt drei Kataloge, und diese Zahl prägt am Ende den Entwurf. Ein Katalog je Marke plus einer je Sprache stirbt, bevor jemand Code schreibt.

Das vierte Objekt ist überhaupt kein Speicher. Eine Produktgruppe (商品组, shāngpǐn zǔ) ist eine gefilterte Teilmenge, auf die Kampagnen zeigen, und verhält sich wie ein gespeichertes Segment. Baidu rät, jede Gruppe unter 100.000 Produkten zu halten, und das ist die Obergrenze, die man tatsächlich erreicht. Eine Gruppe, definiert als alles, was auf Lager ist, reißt sie bei einem großen Katalog sofort. Wählen Sie Ihre Filterfelder mit diesem Limit vor Augen.

## Baidu dokumentiert fünf Wege hinein und rät von einem ab

Die Online-Eingabe ist das Formular in der Konsole, von Baidu auf Kataloge unter 100 Produkten zugeschnitten. Wenn Sie das hier lesen, ist sie nichts für Sie.

Der manuelle Upload nimmt eine Datei entgegen, die Sie selbst erzeugen: Excel bis 10 MB, XML und CSV bis 50 MB. Ihr CSV muss UTF-8 sein, was bei jeder Pipeline, die unter Windows durch Excel läuft, ein zweites Hinsehen verdient.

Bei der geplanten Dateisynchronisation landen die meisten Integrationen. Sie hosten die Datei, Baidu holt sie ab, und die Grenze springt auf 8 GB, in dieser Größe nur XML und CSV. Eine Bedingung gehört früh vor Ihre Infrastrukturleute: Baidus IP-Bereiche müssen auf Ihrem Server freigegeben sein. Das ist ein Firewall-Ticket und keine Codeänderung, dieselbe Klasse von Problem, an der Baiduspider hinter einer aggressiven WAF beim Verifizieren scheitert, und es kann die Entwicklung überdauern.

Der vierte Weg ist die API-Integration, und dazu fällt die ehrliche Antwort dünn aus: Baidu benennt den Weg, aber kein öffentliches Material trägt die Arbeitsdetails. Klären Sie den Umfang mit der Person, die Ihr Werbekonto betreut.

Der fünfte Weg ist das eigene Crawling, bei dem Baidu Ihre Produktseiten selbst abgreift. Baidu empfiehlt es nicht, woran sich ablesen lässt, wie viel Unterstützung dieser Weg bekommen wird.

Die Synchronisationsfrequenz kommt als Menü: alle 15 Minuten, stündlich bis zwölfstündlich, täglich oder wöchentlich. Die Viertelstunde gibt es, und richtig ist sie selten, denn ein Feed, der im Livebetrieb alle fünfzehn Minuten neu erzeugt wird, veröffentlicht jeden vorübergehenden Datenfehler, den Sie haben.

## Den Mapping-Umfang können Sie erst festlegen, wenn Sie das Wörterbuch lesen können

Baidu stellt 11 Branchenvorlagen bereit. Jede erwartet einen anderen Feldsatz, und eine falsche Wahl bedeutet späteres Neumapping. Das vollständige Wörterbuch liegt hinter einem Login, auf einem Werbekonto mit freigeschalteter Merchant-Center-Berechtigung. Solange niemand mit diesem Zugang die Vorlage Ihrer Branche exportiert hat, ist jedes Mapping, das Sie schreiben, geraten. Teams, die aus einer englischen Zusammenfassung planen, bauen es später neu.

## Die Feldregeln, an denen echte Integrationen zerbrechen

Wenig von dem, was hier schiefgeht, ist exotisch. Es scheitert nur lautlos.

Der eindeutige Schlüssel heißt outerid und muss innerhalb des Katalogs eindeutig sein. Duplikate werfen keinen Fehler. Der spätere Upload wird nicht importiert, und die Zeile, die Sie aktualisiert glaubten, behält ihre alten Werte. Wenn Importzahlen nicht zu Exportzahlen passen, fangen Sie dort an.

Für URLs gelten drei Regeln, alle absolut. Das Feld für die Zielseite heißt loc und muss das Protokoll führen, eine nackte Domain fällt also durch. Keine URL darf chinesische Zeichen enthalten, weder im Pfad noch in einem Query-String, was eine ganze Klasse lokalisierter Shops ausschließt, bis jemand die Permalinks neu schreibt. Und die Feed-Domain muss der auf dem Werbekonto registrierten Domain entsprechen, ein vergessener Staging-Host kommt also nicht durch, und die regionale Subdomain, die viele internationale Marken für China nutzen, ebenso wenig. Prüfen Sie, gegen welche Domain das Werbekonto eröffnet wurde, bevor jemand eine URL mappt.

Die nächste Regel sieht nach nichts aus. Optionale Felder dürfen leer bleiben oder aus der Datei entfernt werden, aber sie dürfen nie mit einer Null gefüllt werden. Exporter lieben die Null. Sie ist der Standardrückfallwert etlicher Serialisierungsbibliotheken, und sie macht aus einem leeren Feld einen Wert, den Baidu für echt hält.

Bilder haben für das große eine Untergrenze von 480 mal 320 Pixeln. Das Hauptbild gehört ins Feld image, weitere in moreimage-Felder, und das Kreativformat mit drei Bildern verlangt mindestens drei je Produkt. Ein Katalog mit einem Foto pro Artikel hat sich die eigenen Anzeigenformate verschlossen. Gefiltert wird über CustomLabel1 bis CustomLabel5, mit eigenen Feldern darüber hinaus. Füllen Sie die Labels vor dem ersten Upload, denn die Produktgruppen werden darauf gebaut.

## Zwei WooCommerce-Voreinstellungen, die Baidu ablehnt

Zuerst die Permalinks. Ein Shop mit chinesischer Lokalisierung baut seine Slugs aus dem chinesischen Produkttitel, wodurch standardmäßig chinesische Zeichen in jeder Produkt-URL stehen. Gegen Baidus URL-Regel ist das kein Teilausfall. Das ist jede Zeile der Datei. Die Lösung ist ein Permalink-Schema mit ASCII-Slugs, angewandt vor der Feed-Erzeugung, was in einem etablierten Shop zusätzlich eine Weiterleitungstabelle bedeutet.

Varianten sind der zweite Fall. Sie erben oder teilen häufig die SKU des übergeordneten Produkts. Mappen Sie SKU direkt auf outerid, kollidieren sie, und weil Duplikate still scheitern, bekommen Sie einen erfolgreichen Upload mit einem Bruchteil dessen, was Sie geschickt haben. Bauen Sie stattdessen einen zusammengesetzten Schlüssel aus Eltern- und Variantenkennung, der zwischen Exporten stabil bleibt.

Headless-Stacks umgehen die Permalink-Falle und treffen auf alles Übrige unverändert, denn weder die Domain-Regel noch die Null-Regel interessiert sich dafür, was die Seite gerendert hat.

## Was den Zeitplan tatsächlich bestimmt

Zwei Dinge laufen hier auf fremden Uhren, und keines davon ist Code. Die Kontoberechtigung muss freigeschaltet sein, bevor jemand Ihre Branchenvorlage sieht, und die IP-Freigabe muss durch sein, bevor eine geplante Synchronisation überhaupt etwas abholt. Stoßen Sie beides in Woche eins an.

Der Code lässt sich ohne beides beweisen. Laden Sie ein paar hundert Produkte von Hand als CSV hoch und lesen Sie, was zurückkommt.

Baidus Merchant-Center-Dokumentation stammt von 2019. Prüfen Sie jeden Feldnamen gegen die Vorlage, die Ihr eigenes Konto exportiert.
