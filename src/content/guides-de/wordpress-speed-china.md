---
title: "Warum Ihre WordPress-Website in China langsam ist"
subtitle: "Die wahren Ursachen langsamer Ladezeiten hinter der Großen Firewall, nach ihren Kosten geordnet, samt einer gemessenen Migration davor und danach."
summary: "Vier Ursachen, nach ihren Kosten geordnet. Eine gemessene Migration von 23,4 auf 1,2 Sekunden und was eine Auslieferungsschicht wirklich löst."
visual: "/images/guides/wordpress-speed-china.webp"
order: 36
published: true
publishedAt: 2026-09-22
updatedAt: 2026-10-02
category: Technology
author: cyril-drouin
---

Vier Ursachen machen eine WordPress-Website in China langsam, und sie wiegen unterschiedlich schwer. Ein Host, der nie antwortet, hält die ganze Seite auf. Die Entfernung zu Ihrem Server kostet bei jeder Anfrage knapp eine Sekunde. Die Zahl der aufgerufenen Hosts vervielfacht diese Verzögerung. Das Gewicht der Dateien kommt zuletzt, und ausgerechnet dort setzen die meisten zuerst an.

Bringen Sie die vier in eine Rangfolge, bevor Sie für eine von ihnen Geld ausgeben.

| Rang | Ursache | Was sie kostet | Was sie behebt |
|---|---|---|---|
| 1 | Ein Host, der nie antwortet | Die Seite, oder alles, was auf sie wartet | Den Aufruf löschen oder die Datei selbst hosten |
| 2 | Die Entfernung zu Ihrem Origin | Knapp eine Sekunde beim ersten Byte | Ein Origin auf dem Festland oder Auslieferung im Land |
| 3 | Die Zahl der aufgerufenen Hosts | Je eine Auflösung und ein TCP-Handshake | Weniger Origins, Dateien vom eigenen Server |
| 4 | Das Gewicht dessen, was Sie ausliefern | Zeit, im Verhältnis zu den Bytes | Gewöhnliche Web-Performance-Arbeit |

Die meisten Teams greifen zuerst Zeile 4 an, denn davon sprechen ihre Werkzeuge. Die Sekunden dagegen stecken in den Zeilen 1 bis 3.

Die folgenden Messwerte stammen aus einer Alibaba-Cloud-Region vom 28. August 2026 und von einem Privatanschluss in Peking vom 30. August 2026. Jeder Wert nennt seinen Messpunkt und sein Datum.

## Was langsam heißt, von Shanghai aus gesehen

Den größten öffentlichen Test ausländischer Websites unter chinesischen Ladebedingungen hat Chinafy durchgeführt, ein Anbieter, der zugleich eine Lösung für das Problem verkauft. Gewichten Sie ihn entsprechend. Immerhin ist die Methode veröffentlicht, was in dieser Branche selten vorkommt.

> Geprüft wurden 614 Websites aus 11 Branchen mit WebPageTest by Catchpoint aus Peking, Virginia und London, unter Chrome über eine Kabelverbindung. 66,4 Prozent von ihnen luden aus Peking nicht erfolgreich, die mediane Zeit bis zur vollständigen Darstellung lag bei 17,2 Sekunden, und 44 Prozent der aus Peking gestarteten Tests liefen in einen Timeout. Die Zeit bis zum ersten Byte betrug aus Peking 1,4 Sekunden, gegenüber 0,35 Sekunden aus Virginia und 0,31 Sekunden aus London.
> Quelle: Chinafy, State of Global Website Performance in China, April 2026. https://insights.chinafy.com/

Dass zwei von drei Websites scheitern, ist die Zahl, die alle zitieren. Innehalten sollte man bei den 1,4 Sekunden, die verstreichen, bevor Ihr Theme geparst wird und bevor ein einziges Bild angefordert ist.

## Die vier Ursachen einer langsamen WordPress-Website in China

### Erstens: ein Host, der nie antwortet

Eine binäre Ursache, und die teuerste. Eine abgelehnte Anfrage scheitert schnell. Eine still verworfene dagegen wartet, bis der Browser aufgibt, und das kann eine Minute dauern. Der Lehrbuchfall in WordPress bleibt jQuery aus den Google Hosted Libraries, was Tausende kommerzieller Themes bis heute so handhaben.

> GreatFire führt ajax.googleapis.com als blockiert: Der letzte aussagekräftige Test vom chinesischen Festland schlug fehl, am 22. August 2026.
> Quelle: GreatFire. https://en.greatfire.org/https/ajax.googleapis.com

Verkraftbar wäre das, wenn das Tag verzögert geladen würde.

> Skripte ohne async, ohne defer und ohne Modultyp „werden sofort abgerufen und ausgeführt, bevor der Browser das Parsen der Seite fortsetzt“.
> Quelle: MDN Web Docs, das script-Element, zuletzt geändert am 9. Mai 2026. https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script

Die Seite bleibt also genau dort stehen, wo Ihr Theme jQuery bei Google anfordert. [Unser Leitfaden zu den Plugins, die in China scheitern](/de/ressourcen/china-web-leitfaden/wordpress-plugins-china/) geht die übrige Hostliste durch.

### Zweitens: die Entfernung zu Ihrem Origin

Ihr Server steht in Frankfurt. Jede Anfrage aus Chengdu durchquert Eurasien zweimal, bevor ein einziges Byte zurückkommt, und wiederholt den Weg für die nächste Ressource. Genau dort stecken die oben genannten 1,4 Sekunden. Ein Origin auf dem Festland beseitigt diese Entfernung und bringt Papierkram mit sich; davon handelt der letzte Abschnitt.

> Über ein Fenster von 90 Tagen erreichte eine auf dem Festland gehostete Kundenwebsite 99,98 Prozent Verfügbarkeit, bei medianen Antwortzeiten von 48 ms aus Peking, 36 ms aus Shanghai und 61 ms aus Guangzhou.
> Quelle: ChinaWebFoundry, veröffentlicht am 29. August 2026. https://www.chinawebfoundry.com/website-in-china/

Das sind unsere eigenen Zahlen. Der Anbieter und das genaue Fenster sind nicht veröffentlicht. Eine Zahl ohne ihre Bedingungen verdient Misstrauen, auch dann, wenn wir sie selbst veröffentlichen.

### Drittens: die Zahl der aufgerufenen Hosts

Jeder zusätzliche Host schlägt zu Buche, und nicht knapp, sobald eine Rundreise aus China ihren üblichen Preis verlangt.

> „Die Verbindungsphase ist die Zeit, die ein TCP-Handshake bis zum Abschluss benötigt. Wie beim DNS gilt: Je mehr Serververbindungen nötig sind, desto mehr Zeit fließt in ihren Aufbau.“
> Quelle: MDN Web Docs, Understanding latency, zuletzt geändert am 25. Februar 2025. https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/Understanding_latency

Eine WordPress-Installation mit Pagebuilder, Formular-Plugin, Analytics-Tag und Webschrift ruft acht bis zwanzig Hosts auf, bevor der Besucher überhaupt etwas sieht. Eine Studie hat echtes Surfverhalten über einen Privatanschluss in Peking instrumentiert, dabei 97 verschiedene Drittanbieter-Hosts erfasst und zwei Tage zuvor eine Cloud-Region in China vermessen. Direkt getestet hat sie nur fünf Hosts. Die folgenden drei tragen das Argument, und bei zwei von ihnen widersprechen sich die beiden Messpunkte.

| Host | Alibaba Cloud (阿里云) cn-zhangjiakou, 28. Aug. 2026 | China-Mobile-Privatanschluss (中国移动), Peking, 30. Aug. 2026 |
|---|---|---|
| fonts.googleapis.com | Erreichbar. 72 von 72, Median 111 ms | Blockiert. 0 von 54 |
| www.googletagmanager.com | Erreichbar. 72 von 72, Median 118 ms | Blockiert. 0 von 112 |
| cdn.jsdelivr.net | Erreichbar. 72 von 72, Median 660 ms | Erreichbar. 36 von 36 |

> Die Rechenzentrumsspalte wurde über 12 Stunden alle zehn Minuten gemessen, mit einem Timeout von 30 Sekunden, also 72 Messungen je Host. Die Privatanschlussspalte umfasst 88 Websites und 264 Seitenaufrufe über eine Nacht.
> Quelle: 21YunBox, A Day of Third-Party Requests From Inside China, 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

Google Fonts antwortete aus dem Rechenzentrum bei jedem Versuch und vom Privatanschluss kein einziges Mal. Beide Ergebnisse sind echt, und Ihre Besucher sitzen auf dem zweiten. Hosten Sie die Schrift selbst, dann verschwindet diese Variable. jsDelivr dagegen liefert von beiden Seiten aus, weshalb es in die Irre führt, Content Delivery Networks als einen einzigen Block zu behandeln.

### Viertens: das Gewicht dessen, was Sie ausliefern

Die Übertragungszeit wächst mit der Zahl der Bytes, und eine chinesische Mobilverbindung ist eine engere Leitung als die, auf der Ihr Designer getestet hat. Die oben zitierte MDN-Seite sagt es unumwunden: Je mehr und je größer die Anfragen, desto stärker wirkt sich hohe Latenz auf den Wartenden aus. Komprimieren Sie also die Bilder und streichen Sie den Slider. Diese Arbeit zahlt sich aus, bis zu dem Punkt, an dem die Seite auf einem Host liegt, der nie antwortet.

## Eine Migration: von 23,4 Sekunden auf 1,2

Eine unserer Migrationen hat eine WordPress-Website von einem europäischen Origin auf ein Origin in China verlegt und unterwegs ihre externen Aufrufe ausgemistet.

> Die mediane Ladezeit sank von 23,4 Sekunden auf einem europäischen Origin auf 1,2 Sekunden auf einem Origin auf dem Festland, und rund die Hälfte dieser Verbesserung stammt aus dem Löschen externer Aufrufe, nicht aus dem Umzug des Servers.
> Quelle: ChinaWebFoundry, veröffentlicht am 29. August 2026. https://www.chinawebfoundry.com/resources/china-web-guide/is-wordpress-blocked-in-china/

Lesen Sie den zweiten Teil des Satzes zweimal. Er entscheidet über Ihr Budget. Die Hälfte des Gewinns war umsonst zu haben: Einen Google-Fonts-Aufruf zu löschen und zwei woff2-Dateien selbst zu hosten kostet einen Nachmittag. Die andere Hälfte verlangte den Umzug des Servers, also eine ICP-Registrierung (ICP备案) und eine Gesellschaft auf dem Festland dahinter. Die Aufschlüsselung Schritt für Schritt gehört in eine Fallstudie, die gerade entsteht.

## Was eine Auslieferungsschicht löst und was sie übriglässt

Diese Produktkategorie gibt es wirklich, und sie funktioniert. Chinafy ist ihr bekanntester Anbieter, und die veröffentlichte Beschreibung lässt nichts im Vagen: eine China-spezifische Kopie Ihrer Website, Ressourcen, die scheitern, ausgetauscht oder entfernt, diese Kopie ausgeliefert über Content Delivery Networks nahe China, dazu ein Geo-IP-Routing, das ausschließlich chinesische Besucher dorthin lenkt.

> „Dynamische Anfragen (etwa Transaktionen) gehen ebenfalls an das Origin Ihrer ursprünglichen Website zurück, damit Besuchern in China Informationen in Echtzeit bereitstehen.“
> Quelle: Chinafy-Produktdokumentation. Die Seite trägt kein Veröffentlichungsdatum, dies ist also der Mechanismus, wie er am 18. September 2026 zu lesen war. https://www.chinafy.com/how-chinafy-works

Halten Sie dieses Angebot gegen die vier Zeilen. Zeile 1 ist das Produkt selbst, sie fällt vollständig weg. Zeile 4 wird am Netzrand erledigt und mit ihr der größte Teil von Zeile 3, weil die Schicht diese Dateien am Ende selbst ausliefert. Zeile 2 dagegen schrumpft nur um die Hälfte, denn dynamische Anfragen überqueren weiterhin die Grenze.

Dreieinhalb Zeilen, ohne ICP-Registrierung und ohne chinesische Gesellschaft, weil nichts auf einem Server auf dem Festland liegt. Für eine Imagewebsite, eine Kampagnen-Microsite oder ein Team, das seine chinesischen Besucher im nächsten Quartal statt im nächsten Jahr bedienen muss, ist das der richtige Kauf, und wir sagen das auch.

Übrig bleibt der dynamische Pfad. Bezahlung, Anmeldung, Suche und ein eingeloggter WooCommerce-Warenkorb reisen weiterhin bis zu Ihrem Origin, wo immer es liegt, und nehmen die Kosten des ersten Bytes mit.

## Was allein ein Origin auf dem Festland löst

Die dynamische Antwortzeit, und das nur dadurch, dass der Server im Land steht. Davor liegt eine Sperre.

> Eine Domain, die auf einen Server in einer Festlandregion zeigt, bleibt für Besucher unerreichbar, solange ihre ICP-Registrierung (ICP备案) nicht genehmigt ist. Besucher sehen eine Halteseite, ein stiller Start ist damit ausgeschlossen.
> Quelle: Entwickler-Community von Alibaba Cloud (阿里云), 20. März 2022, Verhalten am 18. September 2026 erneut bestätigt. https://developer.aliyun.com/article/877910

Rechnen Sie mit drei bis sechs Wochen, sofern eine Gesellschaft auf dem Festland bereits besteht. [Unser Leitfaden zum WordPress-Hosting in China](/de/ressourcen/china-web-leitfaden/wordpress-hosting-china/) erläutert, bei welcher heimischen Cloud Sie den Antrag stellen. Der Weg über ein im Land betriebenes Content Delivery Network stößt auf dieselbe Sperre, was jeden überrascht, der ein CDN für eine Abkürzung um den Papierkram hält.

> Das Cloudflare China Network „ist als separates Abonnement für Kunden mit einem Enterprise-Plan verfügbar“, und „Sie benötigen für jede Apex-Domain, die Sie aufnehmen möchten, eine gültige ICP-Registrierung oder -Lizenz (Internet Content Provider)“.
> Quelle: Cloudflare-Entwicklerdokumentation, zuletzt aktualisiert am 30. April 2026. https://developers.cloudflare.com/china-network/

> „JD Cloud, unser Partner, ist verpflichtet, die Inhalte aller Domains in seinem Netz zu prüfen und freizugeben, bevor China Network aktiviert wird.“
> Quelle: Cloudflare-Entwicklerdokumentation, zuletzt aktualisiert am 17. April 2026. https://developers.cloudflare.com/china-network/get-started/

In Cloudflares kostenlosem und Standard-Plan werden Besucher vom Festland über den nächstgelegenen Knoten außerhalb des Landes bedient, meist Hongkong, Japan oder die US-Westküste. Näher. Und weiterhin jenseits der Grenze.

## Wie Sie ehrlich messen

Testen Sie nicht über ein VPN. Ein VPN misst Ihren Tunnel, und der Tunnel ist die einzige Netzbedingung, die keiner Ihrer Besucher hat.

Nennen Sie jedes Mal den Messpunkt. Eine Cloud-Region in China und ein Privatanschluss in derselben Stadt fällen über denselben Host entgegengesetzte Urteile, und nur einer von beiden ist Ihr Kunde. Nutzen Sie beide für das, wofür sie taugen: Der Privatanschluss sagt, ob etwas überhaupt geschieht, das Rechenzentrum sagt, wie schnell es geschehen könnte. Und datieren Sie das Ergebnis, denn eine Messung aus dem März sagt etwas über den März.

WebPageTest hat einen Knoten in Peking. Die Chrome-Entwicklerwerkzeuge auf einer Maschine in China, nach Domain sortiert, liefern die Hostliste in etwa einer Minute. Ist niemand vor Ort, prüft [unser kostenloser China Site Scanner](/de/china-site-scanner/) die Abhängigkeiten einer URL von Ihrem Standort aus. Halten Sie das Ergebnis anschließend gegen die vier Zeilen: Sekunden in Zeile 1 bedeuten einen Nachmittag Arbeit, Sekunden in Zeile 2 bedeuten einen Behördenantrag, und [unsere Seite WordPress in China](/de/wordpress-in-china/) legt dar, welcher Weg zu welcher Website passt.

## Häufige Fragen

### Warum ist meine WordPress-Website in China langsam und anderswo in Ordnung?

Weil ausgerechnet die Bestandteile scheitern, die außerhalb Chinas niemand anfordert. Ein blockierter Schrift-Host, ein Analytics-Tag ohne Antwort, ein Script-Tag, das das Parsen anhält. Aus Europa antworten sie in Millisekunden. Von einem chinesischen Privatanschluss aus können sie hängen, bis der Browser aufgibt.

### Macht ein Caching-Plugin meine Website in China schneller?

Es wirkt auf Zeile 4 und ändert nichts an den Zeilen 1 bis 3. Ein Cache verkürzt die Zeit, die Ihr Server mit dem Bau einer Seite verbringt. Er verkürzt weder die Entfernung zu diesem Server noch hindert er Ihr Theme daran, einen Host aufzurufen, der nie antwortet.

### Reicht ein Server in Hongkong?

Besser als Frankfurt, schlechter als Shanghai, und ohne ICP-Registrierung (ICP备案), weshalb viele danach greifen. Der Festlandverkehr überquert trotzdem die Grenze und wird weiterhin inspiziert, der Gewinn beim ersten Byte ist also echt und unvollständig. Behandeln Sie das als Zwischenschritt.

### Was bedeutet es in der Praxis, das zu beheben?

Es sind zwei verschiedene Projekte, und Sie sollten wissen, welches Sie einkaufen. Externe Aufrufe aufzuräumen ist Entwicklungsarbeit von wenigen Tagen und braucht niemandes Genehmigung. Das Origin auf das Festland zu holen verlangt eine chinesische Gesellschaft, eine ICP-Registrierung (ICP备案) und Wochen des Wartens. Gehen Sie in dieser Reihenfolge vor.

### Wie schnell sollte eine WordPress-Website vom chinesischen Festland aus laden?

Unter zwei Sekunden ist auf einem Origin auf dem Festland erreichbar, sobald die externen Aufrufe bereinigt sind. Zwischen zwei und fünf Sekunden stimmt meist das Origin, und die Abhängigkeiten stimmen nicht. Über zehn Sekunden hängt etwas fest, statt langsam zu laufen.
