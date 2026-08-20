---
title: "Was ist die Baidu Search Resource Platform?"
subtitle: "Die meisten ausländischen Unternehmen kommen mit einem Budget für Baidu-SEO nach China und ohne Baidu-Zugang. Das Budget fließt in Inhalte, den Zugang legt niemand an. Ein halbes Jahr später sitzt man in einer Besprechung und fragt sich, warum nichts rankt."
summary: "Auf Baidus Webmaster-Plattform wird China-SEO tatsächlich gesteuert. Was jedes Werkzeug leistet und welche drei Werkzeuge die Ratgeber immer noch empfehlen, obwohl es sie nicht mehr gibt."
visual: "/images/guides/baidu-search-resource-platform.webp"
order: 30
published: true
publishedAt: 2026-08-19
updatedAt: 2026-08-19
category: Search
---

Die Baidu Search Resource Platform (百度搜索资源平台, Bǎidù Sōusuǒ Zīyuán Píngtái) ist der Ort, an dem Baidu-SEO in der Praxis betrieben wird. Sie zeigt, ob Baidu die Website gecrawlt hat, wie viele dieser Seiten im Index geblieben sind und über welche Suchanfragen Klicks kamen. Und sie meldet, was kaputt ist. Wer sie auslässt, betreibt China-Suchstrategie als Ratespiel, mit einer Übersetzungsrechnung obendrauf.

Früher hieß sie Baidu Webmaster Platform (百度站长平台, Bǎidù Zhànzhǎng Píngtái). In vielen Dokumentationen steht bis heute der alte Name, auch auf einigen Hilfeseiten von Baidu selbst. Es ist dieselbe Plattform.

> Die Baidu-App erreichte im März 2026 655 Millionen monatlich aktive Nutzer.
>
> *Quelle: Baidu Inc., Ergebnisse des ersten Quartals 2026, 18. Mai 2026*

Das ist das Publikum hinter der Plattform, und deshalb ist die Einrichtung eine Stunde von jemandem wert, der Erfahrung hat.

## Die drei Baidu-Werkzeuge, die ständig verwechselt werden

Die Search Resource Platform deckt die Crawl- und Index-Seite ab: Einreichung, Crawl-Diagnose, Indexvolumen, Keyword-Daten.

Baidu Tongji (百度统计, Bǎidù Tǒngjì) ist Analytics. Es beobachtet Menschen, die bereits auf der Seite gelandet sind, und sagt nichts darüber aus, wie Baidu die Website sieht.

Baidu Index (百度指数, Bǎidù Zhǐshù) liefert Nachfragedaten und kommt einem frei zugänglichen Keyword-Planer in China am nächsten. Nützlich, bevor man etwas schreibt. In der Nacht, in der nichts im Index steht, hilft es kein bisschen.

Am Ende arbeitet man mit allen dreien. Nur eines beantwortet die Frage, ob Baidu die Seiten überhaupt lesen kann.

## Der Zugang kostet zwei Schritte, und der erste ist der schwere

Nötig ist ein Baidu-Konto mit abgeschlossener Realnamen-Verifizierung (实名认证, shímíng rènzhèng). Genau hier bleiben ausländische Unternehmen stecken, und es lohnt sich, den Grund zu verstehen, bevor man eine Woche darauf verwendet. Baidu veröffentlicht eine Liste der akzeptierten Ausweisdokumente. Ein gewöhnlicher ausländischer Reisepass steht nicht darauf. In der Praxis läuft das Konto damit auf eine chinesische Gesellschaft oder auf eine Person mit festlandchinesischer Identität. Ausländische Mobilnummern funktionierten für die Registrierung ab etwa Mai 2022 nicht mehr zuverlässig.

Wer dieses Konto anlegt, wiegt schwerer, als es klingt. Die Realnamen-Verifizierung wirkt faktisch wie der Eigentumsnachweis für das Suchobjekt. Eine Agentur, die eine Kundenwebsite unter der eigenen Lizenz registriert, hält damit einen Vermögenswert, den der Kunde nicht einfach zurückholen kann.

Die Domainverifizierung ist die leichte Hälfte. Zehn Minuten, sofern das Hosting mitspielt. Baidu stellt eine HTML-Datei bereit, die ins Wurzelverzeichnis gehört, oder ein Meta-Tag für den Head der Startseite. Beides ist in Ordnung. Die CNAME-Verifizierung wurde im ersten Quartal 2023 eingestellt, was die meisten englischsprachigen Ratgeber nicht davon abhält, sie weiterhin als dritte Option zu führen.

Ein Detail kostet Teams immer wieder eine Woche. Baidu behandelt das Protokoll als Teil der Site-Identität. Die http- und die https-Fassung einer Domain sind zwei getrennte Objekte, und www und ohne www ebenfalls.

## Die Werkzeuge, und welche davon man wirklich öffnet

Die Plattform ist eher ein Werkzeugkasten als ein Dashboard. Grob vier Gruppen.

Am Anfang steht die Einreichung. Die Standardeinreichung (普通收录, pǔtōng shōulù) umfasst drei Kanäle. Es gibt einen API-Push-Endpunkt, der bei jedem Aufruf das verbleibende Tageskontingent zurückgibt. Es gibt die manuelle Einreichung, gedeckelt bei 20 Links. Und es gibt die Sitemap-Einreichung, die eher ein Privileg ist als eine Funktion. Im September 2023 veröffentlichte Baidu eine Mitteilung, mit der Einreichungskontingente von Websites zurückgezogen wurden, deren Konten nie eine Realnamen-Verifizierung abgeschlossen hatten. Der Sitemap-Zugang ging mit, und Websites, die jahrelang problemlos eingereicht hatten, fanden das Werkzeug schlicht nicht mehr vor.

Bei den Crawl-Werkzeugen verbringt man die meiste Zeit. Die Crawl-Diagnose (抓取诊断, zhuāqǔ zhěnduàn) ruft eine beliebige URL als Baiduspider ab und zeigt, was der Crawler bekommen hat. Auf einer Website mit JavaScript-Framework beendet dieser eine Bildschirm meist die Diskussion darüber, ob das Rendering das Problem ist. Wir haben damit mehr als einmal die Frage mit den Entwicklern eines Kunden geklärt. Crawl-Frequenz und Crawl-Ausnahmen decken Volumen und Fehler ab, dazu kommt ein robots.txt-Prüfer.

Dann das Reporting. Das Indexvolumen (索引量, suǒyǐn liàng) verfolgt, wie viele Seiten Baidu hält. Lesen Sie es als Trendlinie. Es ist keine Seitenzählung, und Baidu hat das auch nie behauptet. Der Bericht zu Traffic und Keywords zeigt Impressionen und Klicks mit rund fünf Stunden Verzögerung und füllt sich erst, wenn die Website überhaupt Klicks bekommt.

**Site-Konfiguration.** Einreichung toter Links, Site-Umstellung für Migrationen, mobile Anpassung, HTTPS-Zertifizierung und die Site-Attribute, in denen die ICP-Registriernummer (备案号, bèi'àn hào) eingetragen wird. Füllen Sie dieses Feld an dem Tag aus, an dem die Registrierung durchkommt. Es kostet nichts, und neue Websites scheinen davon zu profitieren.

## Drei Werkzeuge, die in Ratgebern stehen und längst abgeschaltet sind

Bevor Sie einem Tutorial folgen, das vor 2024 geschrieben wurde, gleichen Sie es mit dieser Liste ab.

Xiongzhang ID (熊掌号, Xióngzhǎng Hào) war Baidus Programm zur Inhaltszuordnung und brachte ein Indexierungsprivileg im Tagesrhythmus mit. Baidu nahm es im März 2020 vom Netz.

Das Werkzeug für strukturierte Daten lief seit dem Start 2013 nur auf Einladung und deckte Produktdaten nie ab. Die URL liefert inzwischen einen Serverfehler, was die deutlichste Aussage ist, die Baidu dazu gemacht hat.

Die Schnellindexierung (快速收录, kuàisù shōulù) ist die, die den Leuten fehlt, weil sie funktionierte.

> 资源平台于 4 月 26 日下线「快速收录」工具，上新「快速抓取」工具。
>
> *Quelle: Baidu Search Resource Platform, offizielle Mitteilung, April 2024*

Der Nachfolger heißt Schnell-Crawl (快速抓取, kuàisù zhuāqǔ) und hängt hinter Baidus VIP-Club. Zu den berichteten Kriterien gehören Realnamen-Verifizierung und ICP-Registrierung, dazu mehr als ein Jahr Betriebshistorie und im Schnitt über 10.000 Klicks pro Tag auf Mobil und Desktop zusammen. Eine frisch gestartete Website einer ausländischen Marke erfüllt davon nichts. Der realistische Werkzeugsatz für eine neue Website besteht also aus dem API-Push-Endpunkt, der manuellen Einreichung und Geduld.

## Was die Plattform verschweigt

Baidus Ergebnisseiten haben sich weit schneller verändert als das Werkzeug für Webmaster.

> Rund 70 % der mobilen Ergebnisseiten von Baidu enthielten im Oktober 2025 KI-generierte Inhalte.
>
> *Quelle: Baidu Inc., Ergebnisse des dritten Quartals 2025, 18. November 2025*

Nichts davon taucht in der Search Resource Platform auf. Es gibt kein Modul für KI-Suche. Nichts sagt Ihnen, ob Ihre Inhalte in einer generierten Antwort erscheinen. Das Werkzeug beschreibt weiterhin eine Suchmaschine aus zehn blauen Links. Baidus eigene Quartalsberichte haben diese Beschreibung längst aufgegeben.

Nutzen Sie die Plattform für das, was sie abdeckt, nämlich Crawl- und Index-Grundlagen, und behandeln Sie KI-Sichtbarkeit als eigenes Arbeitspaket. Einen Bericht dazu wird Ihnen bei Baidu niemand aushändigen.

## Wenn Sie bei null anfangen

Eine sinnvolle Reihenfolge, abgeleitet aus dem, was üblicherweise schiefgeht.

Klären Sie zuerst das Konto, denn alles Weitere hängt an der Identität dahinter. Verifizieren Sie die Domain, die ranken soll, nicht eine Weiterleitung darauf. Tragen Sie die ICP-Nummer in die Site-Attribute ein. Und lassen Sie dann eine Crawl-Diagnose über die Startseite und drei tiefer liegende Seiten laufen, bevor Sie einen einzigen neuen Artikel schreiben. In eine Website zu publizieren, die Baiduspider nicht erreicht, bringt nichts.

Zum Zeitrahmen: Der Schritt aus Konto und Identität dauert je nach Weg zwischen einem Tag und mehreren Wochen. Die Verifizierung selbst ist eine Sache von Stunden. Erste Indexdaten erscheinen meist zwei bis vier Wochen, nachdem eine neue Website gecrawlt wird, und leere Dashboards davor sind normal und kein Defekt.

Baidu ändert diese Plattform ohne große Vorwarnung. Prüfen Sie den Ankündigungs-Feed, bevor Sie auf etwas Datiertes hin handeln.
