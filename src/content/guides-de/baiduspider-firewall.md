---
title: "Baiduspider von Cloudflare und WAF-Regeln blockiert"
subtitle: "Die Website läuft. Das CDN-Dashboard sieht gesund aus, das Team in Schanghai veröffentlicht seit sechs Wochen chinesische Inhalte, und das Indexvolumen in der Baidu Search Resource Platform steht weiter auf null."
summary: "Cloudflare, WAF-Voreinstellungen und Geo-Regeln blockieren Baiduspider lautlos. Wie man das erkennt, einen echten Crawler per Reverse DNS bestätigt und in der richtigen Reihenfolge repariert."
visual: "/images/guides/baiduspider-firewall.webp"
order: 28
published: true
publishedAt: 2026-08-16
updatedAt: 2026-08-16
category: Search
---

Nichts in einem üblichen Monitoring-Stack achtet darauf. Verfügbarkeitsprüfungen laufen aus Frankfurt und Virginia, und Real-User-Monitoring sieht nur Menschen, die bereits eine Seite bekommen haben. Währenddessen wird der eine Besucher, auf den es ankommt, an der Edge abgewiesen, und sichtbar wird das allein auf einem Dashboard, das niemand geöffnet hat.

Wir sehen das häufiger als jede andere technische Ursache für einen festgefahrenen China-Start, und fast immer steckt eine Einstellung dahinter, an die sich niemand erinnert.

## Warum Ihre Standardregeln Baidus Crawler erwischen

Baiduspider erreicht Ihren Origin über Netze aus Festlandchina. Reverse DNS auf legitime Crawler-Adressen löst zu *.baidu.com oder *.baidu.jp auf, wobei die Abrufe überwiegend aus den Festlandbereichen kommen.

Und nun überlegen Sie, was eine übliche Sicherheitskonfiguration mit diesen Bereichen macht. Meist gibt es eine Geo-Regel, die China herausfordert oder blockiert, während eines Vorfalls hinzugefügt und nie wieder angefasst, dazu eine Bot-Management-Einstellung, die unbekannte automatisierte Clients als verdächtig bewertet. Darunter liegt ein verwaltetes Regelwerk, das auf westlichem Traffic kalibriert ist. Keine dieser Regeln wurde mit Blick auf einen chinesischen Suchcrawler geschrieben. Baiduspider sieht aus wie automatisierter Traffic aus einer Region, der Sie das Misstrauen ausgesprochen haben, und bekommt entsprechend das, was Sie dafür konfiguriert haben.

Nichts davon erzeugt einen Alarm. Ein blockierter Crawler schreibt kein Ticket. Er versucht es erneut, bekommt dieselbe Antwort und kommt seltener wieder.

> Baidu hielt im November 2025 über alle Geräte hinweg 63,97 % des chinesischen Suchmaschinenmarkts, auf Mobilgeräten 77,86 %.
>
> *Quelle: StatCounter, zitiert nach The Egg, 11. Februar 2026*

Dieser Markt liegt auf der anderen Seite der Regel.

## Der Fall, der nie gelöst wurde

Es gibt einen Thread in der Cloudflare-Community, den man einmal gelesen haben sollte. Ein Websitebetreiber hatte die Baidu-Verifizierungsdatei baidu_verify_codeva-CODE.html ins Wurzelverzeichnis gelegt. Sie war öffentlich erreichbar, und jeder außerhalb Chinas konnte sie mit Status 200 abrufen. Baidus Prüfung meldete eine E/A-Zeitüberschreitung. Der Thread endete ohne Lösung.

Dieser Fall belegt nicht, dass Cloudflare Baidu grundsätzlich blockiert. Er zeigt etwas Engeres: Eine von Ihrem Schreibtisch aus erreichbare Datei beweist nichts darüber, ob Baidu sie erreichen kann, und beide Befunde können wochenlang auseinanderlaufen, während alle auf eine URL starren, die funktioniert.

Baidus Dateiverifizierung ist eng gefasst. Die Datei liegt im Wurzelverzeichnis und antwortet mit 200, ohne Weiterleitung und ohne Authentifizierung. Die Tag-Methode ist nicht nachsichtiger, denn das Meta-Tag muss in dem HTML stehen, das der Server ausliefert. Eine Zwischenseite bricht beides.

## Ein 403 ist das gute Ergebnis

Wenn die Edge Baiduspider rundheraus abweist, bekommen Sie einen 403, und das ist das Ergebnis, auf das man hoffen sollte. Eine Ablehnung ist eine Tatsache, die beide Seiten sehen.

Teuer wird die Challenge. Eine JavaScript-Zwischenseite liefert einen 200, Ihre Zugriffsprotokolle verzeichnen eine ausgelieferte Anfrage, und der Crawler bekommt eine Seite voller Skript statt Ihrer Inhalte. Sämtliche Dashboards melden Erfolg, und auf Baidus Seite steht ein Abruf ohne Inhalt.

Rate Limiting ist das dritte Muster und beim Debuggen das schlimmste. Der Crawler kommt am Dienstag durch und am Mittwoch nicht, und keine benennbare Regel erklärt, warum.

## Reverse DNS ist die einzige Prüfung, die hält

Den User-Agent freizugeben ist der richtige Anfang und das falsche Ende. Die legitimen Zeichenketten sind Baiduspider/2.0 und Baiduspider-render/2.0, mobile Varianten führen Android oder Mobile. Die render-Variante wird gern übersehen. Sie holt, was eine Seite zum Rendern braucht, sodass eine Regel, die Baiduspider/2.0 erlaubt und den Rest drosselt, den Crawler hereinlässt und dann aushungert.

Ein User-Agent ist ein Request-Header, und ein Request-Header ist eine Zeichenkette, die jeder tippen kann. Wer allein darauf freigibt, hat seine WAF für jeden geöffnet, der einen Blogbeitrag gelesen hat.

Die Prüfung, die hält, ist ein vorwärts bestätigter Reverse-Lookup. Nehmen Sie die Client-IP, lösen Sie den PTR-Eintrag mit host oder dig auf, prüfen Sie, ob der Hostname auf baidu.com oder baidu.jp endet, und lösen Sie diesen Hostnamen anschließend vorwärts auf, um zu sehen, ob dieselbe Adresse zurückkommt. Ein PTR-Eintrag allein beweist nichts, denn er wird von demjenigen gesetzt, der den Adressblock kontrolliert.

Bauen Sie die Regel in dieser Reihenfolge: User-Agent abgleichen, per Reverse DNS bestätigen, dann freigeben. Manche Edge-Plattformen erledigen das für bekannte Crawler von selbst. Wo Ihre es nicht tut, genügt ein kurzes Worker-Skript.

## Lassen Sie Baidu erzählen, was es bekommen hat

Die Crawl-Diagnose (抓取诊断, zhuāqǔ zhěnduàn) in der Search Resource Platform ruft eine URL als Baiduspider ab und zeigt Ihnen die Antwort. Desktop- oder Mobil-Agent, ganz nach Wahl. Sie liest die ersten 200 KB des Bodys, genug, um eine Zwischenseite oder eine Fehlerseite sichtbar zu machen.

Wir greifen dazu, bevor wir irgendetwas anderes anfassen, weil es Diskussionen beendet. Lassen Sie sie über die Startseite laufen, über die Verifizierungsdatei und über drei tiefer liegende Seiten. Edge-Regeln sind oft pfadgebunden, und die Startseite ist meist der eine Pfad, den jemand ausgenommen hat.

Das Abrufkontingent ist begrenzt und wird uneinheitlich angegeben, zwischen 70 und 200 pro Woche. Ein Lasttest ist das also nicht. Und lesen Sie den zurückgegebenen Body, nicht nur den Statuscode.

## Hosting im Ausland verschärft jeden dieser Fälle

Hosting außerhalb Festlandchinas blockiert für sich genommen nichts. Es legt Latenz und Paketverlust auf das, was Ihre Regeln ohnehin schon anrichten.

Geben Sie einer knappen Verbindung einen zusätzlichen Roundtrip für eine Challenge, und sie ist nicht mehr knapp, sondern weg. Eine E/A-Zeitüberschreitung sieht von außen genau so aus: Die Seite lädt aus Europa schnell, während Baidu eine Verbindung protokolliert, die aufgegeben hat. Hosting auf dem Festland beseitigt diese Variable, zum Preis einer ICP-Registrierung (备案号, bèi'àn hào).

## In welcher Reihenfolge man etwas ändert

Fangen Sie bei Ihren Protokollen an. Filtern Sie die Edge über die vergangenen 30 Tage nach den Baiduspider-User-Agents. Null Anfragen heißt, der Crawler erreicht Sie überhaupt nicht. Gibt es Anfragen, lautet die Frage, was Sie zurückgeschickt haben.

Nehmen Sie dann die groben Instrumente der Reihe nach heraus. Geo-Regeln, die China betreffen, zuerst, oder verengen Sie sie auf die Pfade, die sie wirklich brauchen. Danach Ausnahmen im Bot-Management für bestätigten Baiduspider, dann Ausnahmen im verwalteten Regelwerk, sobald Sie wissen, welche Regel ausgelöst hat. Rate Limits zuletzt, weil sie sich am schwersten zuordnen lassen.

Prüfen Sie bei der Gelegenheit die robots.txt. Baidus Prüfwerkzeug deckelt die Datei bei 48 KB, und ein aus dem Staging kopiertes verirrtes Disallow hat mehr China-Starts gekostet als jede Firewall-Regel.

Sind die Regeln entfernt, wiederholen Sie die Crawl-Diagnose, beginnend mit der Verifizierungsdatei, der URL, an der alles andere hängt. Die Verifizierung greift zwischen sofort und 24 Stunden, sobald der Crawler sie lesen kann. Das Indexvolumen ist träger: null über Tage bis Wochen, selbst wenn alles stimmt, wobei die erste Indexierung üblicherweise zwei bis vier Wochen dauert. Ändern Sie eine Sache nach der anderen, sonst sagt Ihnen die nächste Null gar nichts.

Wiederholen Sie die Crawl-Diagnose nach jedem WAF- oder CDN-Upgrade, denn Edge-Voreinstellungen ändern sich nach ihrem eigenen Zeitplan.
