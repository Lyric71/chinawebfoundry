---
title: "Website bei Baidu einreichen: Push, Sitemap, manuell"
subtitle: "Die Entwicklung stellt die Sitemap fertig, loggt sich bei Baidu ein, sucht das Feld zum Einfügen und findet es nicht. Kaputt ist nichts. Meistens fehlt das Werkzeug, weil das Konto es sich nicht verdient hat."
summary: "Wie man eine Website bei Baidu einreicht, wenn das Sitemap-Werkzeug fehlt: der API-Push-Endpunkt, das tatsächliche Verhalten der Kontingente und die manuelle Einreichung."
visual: "/images/guides/submitting-urls-to-baidu.webp"
order: 23
published: true
publishedAt: 2026-08-16
updatedAt: 2026-08-16
category: Search
---

Die Standardeinreichung (普通收录, pǔtōng shōulù) ist der Teil der Baidu Search Resource Platform (百度搜索资源平台, Bǎidù Sōusuǒ Zīyuán Píngtái), der Baidu mitteilt, dass eine Seite existiert. Drei Kanäle: Push, Sitemap, manuell. Die Plattform stellt sie nebeneinander, als wäre die Wahl eine Frage der Vorliebe, dabei stehen sie in einer Rangfolge von Privilegien. Einer ist bei zwanzig Links pro Vorgang gedeckelt. Die beiden anderen sind an Bedingungen geknüpft: Der Sitemap-Zugang wird nach Baidus Ermessen vergeben und wieder entzogen, und die schnellste Form des Push steht nur Websites offen, die an eine in China registrierte juristische Person gebunden sind.

> Baidu hielt im November 2025 über alle Geräte hinweg 63,97 % des chinesischen Suchmaschinenmarkts, auf Mobilgeräten 77,86 %.
>
> *Quelle: StatCounter, zitiert nach The Egg, 11. Februar 2026*

StatCounters China-Panel bewegt sich, lesen Sie den Wert also als Spanne und nicht als feste Zahl. Er ist zugleich der Grund, warum irgendjemand diese Installationsarbeit auf sich nimmt.

Eine Sache vorweg, noch vor der Mechanik. Einreichen ist nicht Indexieren. Sie teilen Baidu mit, dass eine URL existiert, und was danach geschieht, wird anderswo entschieden.

## Die Arbeit erledigt der Push-Endpunkt

Push gibt es in zwei Formen, und die API-Variante trägt eine neue ausländische Website. Der Endpunkt liegt auf data.zz.baidu.com und nimmt zwei Query-Parameter entgegen, site und token. Sie schicken Ihre URL-Liste und lesen, was zurückkommt.

Am Parameter site sterben die meisten ersten Versuche. Kein Protokoll davor, kein abschließender Schrägstrich, nur der Host so, wie Baidu ihn bei der Verifizierung erfasst hat. Baidu behandelt das Protokoll als Teil der Site-Identität, die http- und die https-Fassung Ihrer Domain sind also getrennte Properties, und Sie pushen an die, die Sie verifiziert haben.

Den Token gibt Baidu innerhalb der Plattform aus. Wer ihn besitzt, kann URLs gegen Ihre Domain pushen. Daran denkt man besser, bevor er in einem öffentlichen Repository landet.

Jede Antwort enthält ein Feld remain. Darin steht, was von Ihrem Tageskontingent übrig ist, und keine andere Zahl der Plattform verrät Ihnen das. Kein Dashboard dahinter, keine Benachrichtigung. Protokollieren Sie den Wert bei jedem Aufruf mit Zeitstempel. Auf Kundenwebsites ist das Sinken dieser Zahl meist das erste Anzeichen, dass sich etwas verändert hat.

Die HTTP-Fassung des Endpunkts funktioniert noch. Nehmen Sie trotzdem HTTPS.

## Das veröffentlichte Kontingent und das echte

Baidus eigener Werkzeugtext nennt für API-Push und manuelle Einreichung eine gemeinsame Obergrenze von 100.000 URLs pro Tag. Nehmen Sie das Wort Obergrenze wörtlich.

Was Sie bekommen, wird dynamisch zugeteilt, Website für Website, nach Kriterien, die Baidu nie veröffentlicht hat. Es gibt dokumentierte Fälle, in denen das Tageskontingent einer Website auf 100 URLs zusammenfiel. Hundert reichen für eine normale Publikationswoche. Für eine Migration sind sie nichts, und eine Migration ist üblicherweise der Moment, in dem ein Team seine tatsächliche Zahl kennenlernt.

Genau deshalb gehört dieses Antwortfeld in ein Log.

## Die automatische Push-Variante hängt an einer chinesischen Gesellschaft

Die andere Form des Push ist die per JavaScript. Ein Snippet kommt ins Website-Template, und Seiten melden sich bei Baidu, während echte Besucher sie laden. Elegant, und die meisten ausländischen Websites werden es nie einschalten können.

Baidu öffnet sie nur für Websites mit verbundener juristischer Person (关联主体, guānlián zhǔtǐ). Diese Verknüpfung startete im Dezember 2019, und einmal hergestellt lässt sie sich 30 Tage lang nicht auflösen. Noch eine Hürde mit chinesischer Gesellschaft in einer Plattform, die aus solchen Hürden gebaut ist.

Rechnen Sie zusammen, was einem ausländischen Unternehmen ohne Präsenz auf dem Festland damit bleibt. Automatischer Push fällt weg, der Sitemap-Zugang meist ebenso. Der brauchbare Werkzeugsatz schrumpft auf einen API-Endpunkt und ein Textfeld.

## Manuelle Einreichung, zwanzig auf einmal

Der dritte Kanal ist ein Textfeld. Die Grenze von 20 Links gilt pro Einreichung und nicht pro Tag, und alles, was Sie hineinkopieren, geht vom selben gemeinsamen Kontingent ab wie die API.

Um Volumen geht es dabei nicht. Für das Feld spricht, dass sonst nichts funktionieren muss: kein Token, das rotiert werden will, kein Deploy-Skript, das seit drei Releases still nicht mehr auslöst. Wenn eine Launch-Seite wichtig genug ist, dass am Montag jemand aus der Führung danach fragt, geht sie am Freitag zusätzlich zur API auch durch das Feld.

## Sitemaps sind ein Privileg

Nun zu dem Kanal, mit dem die meisten Teams anfangen. Die Dateiregeln sind unspektakulär. Klartext oder XML, bis zu 50.000 URLs, unter 10 MB je Datei. Sitemap-Indexdateien werden abgelehnt, und das ist die Regel, über die alle stolpern. Ein großer Katalog geht also in mehreren getrennten Dateien hinein, einzeln eingereicht.

Der Zugang ist der schwierige Teil. Baidu gewährt die Sitemap-Einreichung, statt sie für alle freizuschalten, und im September 2023 nahm es das Werkzeug einer großen Gruppe von Websites auf einen Schlag wieder weg.

> 关于回收网站提交配额的通知
>
> Mitteilung über den Einzug von Einreichungskontingenten für Websites
>
> *Quelle: Baidu Search Resource Platform, offizielle Mitteilung, September 2023*

Die Mitteilung zog Einreichungskontingente ein, schloss die Sitemap-Einreichung und kürzte die API-Push-Kontingente für Konten, die nie eine Realnamen-Verifizierung (实名认证, shímíng rènzhèng) abgeschlossen hatten, sowie für Websites, die Baidu als minderwertig einstufte. Berichten zufolge griff das ab dem 30. November 2023. Websites, die jahrelang Sitemaps eingereicht hatten, öffneten eines Morgens die Plattform, und das Modul war weg.

Prüfen Sie, ob das Modul in Ihrem Konto überhaupt vorhanden ist, bevor Sie Dateien dafür erzeugen. Wir planen neue ausländische Websites so, als hätten wir es nicht, und behandeln es als Zugabe, wenn es später auftaucht.

## Wie ein tragfähiger Einreichungsablauf aussieht

Push beim Publizieren. Der API-Aufruf gehört ins CMS und feuert bei jeder neuen oder geänderten URL in dem Moment, in dem die Seite live geht, statt in einem Wochenjob zu sitzen, an den sich donnerstags jemand erinnert. Speichern Sie den zurückgelieferten remain-Wert. Wenn Baidu Ihr Kontingent stutzt, zeigt sich das in diesem Log zuerst.

Darüber arbeitet weiterhin ein Mensch mit dem manuellen Feld: Startseite, die Leistungsseiten, die tatsächlich ranken sollen, alles mit einer Kampagne dahinter. Zwanzig auf einmal. Ja, damit wird das Kontingent für dieselbe URL zweimal ausgegeben, und bei einer Handvoll Seiten im Monat ist das vollkommen in Ordnung.

Tragen Sie bei der Gelegenheit Ihre ICP-Registriernummer in die Site-Attribute ein. Die Registrierung ist für keine Einreichung Voraussetzung, aber Baidu empfiehlt Websites unter sechs Monaten, dieses Feld auszufüllen, um die Indexierung zu beschleunigen.

Früher gab es einen schnelleren Weg als all das. [Ein eigener Artikel in diesem Leitfaden](/de/ressourcen/china-web-leitfaden/baidu-schnellindexierung-ende/) beschreibt, was aus der Schnellindexierung geworden ist.

Und dann kommt der Teil, den niemand einplant. Die erste Indexierung einer neuen Website dauert zwei bis vier Wochen, und ein Indexvolumen (索引量, suǒyǐn liàng), das in dieser ersten Strecke auf null steht, ist normal. Baidu veröffentlicht dafür kein Service-Level, es gibt also nichts, wogegen man eskalieren könnte.

Das Verhalten der Kontingente ändert sich ohne Ankündigung. Vertrauen Sie dem Feld remain mehr als der Dokumentation.
