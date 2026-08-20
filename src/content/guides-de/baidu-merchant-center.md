---
title: "Baidu Merchant Center: was BMC wirklich leistet"
subtitle: "Jemandem in Ihrem Team wurde erzählt, Baidu Merchant Center sei der Weg, auf dem Produktdaten zu Baidu gelangen. Ungefähr stimmt das, und in diesem Ungefähr geht die Planung schief. Welchem Konto das Werkzeug gehört, was die Daten nach dem Laden dürfen und ob bei Baidu überhaupt noch jemand das Produkt pflegt, sind drei getrennte Fragen, deren Antworten die meisten Teams falsch raten."
summary: "Baidu Merchant Center ist ein Produktfeed am Werbekonto, kein organisches Werkzeug. Was BMC leistet, wo die Konsole liegt und wer es noch pflegt."
visual: "/images/guides/baidu-merchant-center.webp"
order: 20
published: true
publishedAt: 2026-08-14
updatedAt: 2026-08-14
category: Search
---

Baidu Merchant Center (百度商品中心, Bǎidù Shāngpǐn Zhōngxīn), kurz BMC, ist ein Lager für Produktdaten. Sie laden einen Katalog hinein, und Baidus Werbesysteme lesen die Datensätze bei Bedarf wieder heraus.

Baidus eigene Definition liest sich so.

> Baidu Merchant Center，简称BMC，作为百度服务商家存储结构化信息的管理系统，提供数据收录、存储、管理和输出应用的服务。
>
> Baidu Merchant Center, abgekürzt BMC, ist ein Verwaltungssystem zur Speicherung strukturierter Informationen im Auftrag der Händler, die Baidu betreut, mit Diensten für Erfassung, Speicherung, Verwaltung und Ausgabe der Daten.
>
> *Quelle: Baidu Marketing Academy, Produktseite*

Achten Sie darauf, was fehlt. Kein Wort dieses Satzes berührt Suchergebnisse oder die Indexierung Ihrer Website.

## Baidu legt Ihre Produktdaten neben Ihre Banner

Der Ausdruck 数据收录 lässt sich bequem als Datenerfassung übersetzen, und er liegt nah genug an dem Begriff, den Baidu für die Suchindexierung verwendet, dass englischsprachige Beiträge beides seit Jahren durcheinanderbringen. Eine zweite Beschreibung von Baidu ist deutlicher, wem das Werkzeug dient: Sie nennt BMC ein Datenzentrum, mit dem Werbetreibende die Produkte oder Leistungen verwalten, für die sie werben.

Den Ausschlag gibt eine Kategoriebezeichnung. Baidus Produktstrategiematerial ordnet den Inhalt eines BMC-Katalogs unter Auslieferungsmaterial (投放物料, tóufàng wùliào) ein, in denselben Topf wie Anzeigentexte und Werbebilder. Solche Bezeichnungen werden nicht für Kunden geschrieben. Sie entscheiden, welchem Team etwas gehört und welche Systeme es lesen dürfen.

Ein BMC-Feed ist Werbeinventar. Er ist keine Sitemap und keine strukturierten Daten für organische Treffer. Jeder dokumentierte Ort, an dem die Daten erscheinen können, ist eine bezahlte Platzierung, und das [behandeln wir in einem eigenen Artikel](/de/ressourcen/china-web-leitfaden/baidu-produktdaten-ziele/).

## Die Konsolenadresse in den meisten englischen Ratgebern ist ein toter Link

Zwei Hostnamen zählen, und einer davon sieht falsch aus. Die Katalogkonsole läuft auf shantou.baidu.com unter einem bmc-Pfad, was wie ein Städtename klingt, aber korrekt ist. Der andere ist product.baidu.com.

Die Adresse, die in englischsprachigen Beiträgen kursiert, baidu.com/bmc, liefert einen 404. Nichts deutet darauf hin, dass sie je funktioniert hätte. Ein Ratgeber, der eine Konsolen-URL veröffentlicht, die niemand aus seiner Redaktion je geöffnet hat, wurde aus fremden Zusammenfassungen gebaut, und die Felddetails weiter unten verdienen dasselbe Misstrauen.

## Es gehört zum Werbekonto, nicht zur Webmaster-Plattform

Das ist der Absatz, der eine Woche Suche am falschen Ort erspart. BMC sitzt im Werbekonto-System von Baidu, dem hinter Baidu Marketing (百度营销, Bǎidù Yíngxiāo) und Baidu Promotion (百度推广, Bǎidù Tuīguǎng). Nicht in der Baidu Search Resource Platform und nicht in Baidu Intelligent Cloud. Wenn Ihre Entwicklung in den Webmaster-Werkzeugen nach einem Händler-Reiter sucht: Den gab es dort nie.

Ein Anmeldeformular existiert ebenso wenig. Der Zugang ist ein Berechtigungsschalter auf einem Werbekonto, das Sie bereits haben. Key Accounts bekommen ihn standardmäßig, alle anderen beantragen ihn per E-Mail beim Feed-Team von Baidu über den Regionalverantwortlichen, der das Konto betreut. Die eigentliche Voraussetzung ist also ein aktives Baidu-Werbekonto, mit der festlandchinesischen Gewerbelizenz und dem dazu passenden Firmenkonto, die das mit sich bringt.

Eine Frage konnten wir nicht klären: ob die Berechtigung auf einem Baidu-International-Konto oder auf einem Agentur-Unterkonto erteilt werden kann. Baidus öffentliche Dokumentation schweigt in beide Richtungen. Wer über eine Agentur einkauft, fragt das während der Auswahl und nicht nach der Unterschrift.

## Vier Objekte, und nur drei davon sind Speicher

Ein Katalog (目录, mùlù) ist der oberste Behälter, und ein neues Konto startet mit einem Kontingent von drei. Auf dieses Limit stößt man zuerst, und es ist niedrig genug, um den Entwurf zu prägen. Ein Team, das je einen Katalog pro Marke und einen weiteren pro Sprache plant, ist am ersten Tag am Ende.

In einem Katalog liegen Produktdateien (商品文件, shāngpǐn wénjiàn), also die Uploads oder synchronisierten Feeds selbst, und darin die einzelnen Produkte (商品, shāngpǐn). Eine Datei fasst bis zu einer Million Produkte, eine Obergrenze, der kaum jemand nahekommt.

Das vierte Objekt verwirrt, weil es wie ein Ordner aussieht und sich wie ein Segment verhält. Eine Produktgruppe (商品组, shāngpǐn zǔ) ist eine gefilterte Teilmenge eines Katalogs, auf die Kampagnen zeigen. Sie ist also eine Targeting-Einheit und kein Ort, an dem Datensätze liegen, und Baidu rät, jede Gruppe unter 100.000 Produkten zu halten.

Das alles korrekt zu befüllen ist eine Arbeit für sich, geregelt von Feldvorgaben, die still scheitern, wenn man sie falsch trifft. Darum kümmert sich der begleitende Artikel zum Aufbau des Feeds.

## Die Papierspur endet am 4. Januar 2021

An diesem Tag führte Baidu die dynamischen Produktanzeigen der Suche in seine vereinheitlichte Plattform Baidu Marketing über und benannte dabei die Kampagnenobjekte um. Aus dem alten Produktplan wurde ein Marketingziel Produktkatalog, aus dem gewöhnlichen Plan eine Kreativkomponente vom Typ Produkt.

Diese Ankündigung ist der letzte datierte Artikel, den Baidu unter seinem Schlagwort für dynamische Produktanzeigen veröffentlicht hat, und die maßgebliche BMC-Dokumentation ist noch älter, vom 29. und 30. August 2019. Jedes Tutorial mit Screenshots beschreibt somit Menüs, die vor Jahren umbenannt wurden.

## Seit Mai 2026 bedeutet BMC bei Baidu zweierlei

Im Mai 2026 kündigte Baidu ein Model Committee an, ebenfalls mit BMC abgekürzt. Es ist ein Gremium für die Steuerung der KI-Arbeit und hat mit Produktfeeds nichts zu tun.

Das ältere Kürzel war im Englischen ohnehin selten und ist nun der leisere von zwei Anwärtern auf dieselben drei Buchstaben. Die Recherche dazu wird ab hier schwerer, nicht leichter. Schreiben Sie Baidu Merchant Center aus, wenn Sie eine Kollegin oder ein Rechercheprogramm briefen.

## Pflegt das noch jemand? Das ist der Stand der Belege

Eine Abkündigung gibt es nicht. Die Konsole antwortet, Konten mit der Berechtigung laden weiterhin hoch, und dynamische Produktanzeigen laufen auf diesen Daten. Dem steht gegenüber, dass seit Januar 2021 nichts Datiertes erschienen ist und das vollständige Feldverzeichnis weiter hinter einem Login liegt statt auf einer offenen Hilfeseite. Ein Schweigen dieser Länge beweist für sich nichts, denn über viel funktionierende Infrastruktur wird schlicht nicht geschrieben.

> Baidus angestammtes Geschäft, vor allem klassische Suche und Feed-Werbung, sank im ersten Quartal 2026 um 29 % gegenüber dem Vorjahr auf 10,2 Milliarden Yuan, während das KI-getriebene Geschäft um 49 % auf 13,6 Milliarden wuchs.
>
> *Quelle: Baidu Inc., Ergebnisse des ersten Quartals 2026, 18. Mai 2026*

BMC gehört zum ersten dieser beiden Geschäfte. Dort sitzt das Produkt, und das ist eine Feststellung, keine Prognose. Baidu hat nichts veröffentlicht, was eine solche in die eine oder andere Richtung tragen würde.

Baidu hat seit Januar 2021 nichts Datiertes zu diesem Produkt veröffentlicht. Behandeln Sie die Statusangaben hier daher als Beobachtung und nicht als Prognose.
