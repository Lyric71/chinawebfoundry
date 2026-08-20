---
title: "Baidu DPA: wohin Produktfeed-Daten tatsächlich gehen"
subtitle: "Irgendwo im Verkaufsgespräch wurde aus einem Produktfeed kostenlose Sichtbarkeit. Katalog in Baidu Merchant Center laden, und schon tauchen die Produkte in der Baidu-Suche auf. Diese Erzählung hält sich, weil Baidus eigenes Vokabular dazu einlädt und englischsprachige Beiträge sie seit Jahren wiederholen. Nichts im Folgenden behauptet, der Feed bewirke nichts. Es sagt, wohin die Daten dokumentiert gehen."
summary: "Baidu dokumentiert drei Ziele für Produktfeed-Daten, alle bezahlt: Such-DPA, Feed-DPA und bezahltes Aladdin. Einen dokumentierten organischen Weg gibt es nicht."
visual: "/images/guides/baidu-product-data-destinations.webp"
order: 18
published: true
publishedAt: 2026-08-13
updatedAt: 2026-08-13
category: Search
---

Baidu Merchant Center, BMC, ist das Produktdatenlager hinter Baidus Werbesystemen. Ein Satz in Baidus Produkt-FAQ listet auf, wohin diese Daten reisen dürfen. Alle drei Ziele werden gekauft.

## Baidu hat die Ziele aufgeschrieben, und es sind drei

> 在BMC接入的商品数据，可用于搜索/信息流动态商品广告的投放和阿拉丁推广。
>
> Über BMC angebundene Produktdaten können für die Auslieferung dynamischer Produktanzeigen in Suche und Feed sowie für Aladdin-Promotion genutzt werden.
>
> *Quelle: Baidu Marketing Academy, Produkt-FAQ*

Als Aufzählung gebaut und nicht als Beispiel, nennt der Satz drei Dinge: dynamische Produktanzeigen in der Suche, dynamische Produktanzeigen im Feed, Aladdin-Promotion. Baidu Merchant Center (百度商品中心, Bǎidù Shāngpǐn Zhōngxīn) hält die Daten, und dieser Satz ist ihr Frachtbrief. Nichts auf diesem Frachtbrief geht irgendwohin außer in ein Werbesystem. Es ist außerdem alter Text, aus der letzten Phase, in der die BMC-Dokumentation gepflegt wurde. Sagen Sie das, bevor ein Anbieter es Ihnen sagt.

## Die drei Ziele und was der Kauf jeweils bedeutet

Dynamische Produktanzeigen in der Suche, DPA in jeder Baidu-Präsentation, die man Ihnen zeigen wird, sind die, die man vor Augen hat. Jemand sucht, Baidu gleicht die Anfrage gegen Ihren Katalog ab, und die Anzeige entsteht aus Titel, Bild und Preis des Datensatzes. Niemand textet Kreativmaterial Produkt für Produkt. Der Feed ist das Kreativmaterial, und darin liegt der ganze Reiz des Formats.

Feed-DPA lässt dieselbe Mechanik gegen Baidus Content-Feed statt gegen eine Suchanfrage laufen, und das Detail, an dem Teams hängen bleiben, ist administrativer Natur. Baidus Dokumentation legt es auf dasselbe Konto und denselben Finanzpool (相同的账户及资金池, xiāngtóng de zhànghù jí zījīnchí) wie das Native-Advertising-Konto. Es gibt also keine getrennte Kasse zu eröffnen und nichts Neues freizugeben. Das Geld liegt in einem Native-Budget, das jemand längst genehmigt hat, oder es existiert nicht.

An Aladdin scheitern die englischen Zusammenfassungen. Aladdin-Platzierungen sind die reichhaltigen Blöcke über den blauen Links auf einer Baidu-Ergebnisseite, und Baidu betreibt tatsächlich ein eigenes unbezahltes Kartenprogramm, weiter unten auf dieser Seite. Das Aladdin in Baidus Satz ist nicht dieses. Baidu schrieb Aladdin-Promotion (阿拉丁推广, Ālādīng tuīguǎng), und Promotion (推广, tuīguǎng) ist sein Wort für etwas, das man kauft. Verliert man beim Übersetzen die Hälfte des Ausdrucks, wie es viele Ratgeber tun, wandert ein Mediaposten als kostenlose Platzierung in den Plan.

## Wir haben an vier Stellen nach dem organischen Weg gesucht

Ein organischer Weg müsste irgendwo liegen. Wir haben die vier Kandidaten geprüft, die bei Kunden aufkommen.

Beginnen wir mit dem Werkzeug, auf das alle verwiesen werden. Baidus Werkzeug für strukturierte Daten (结构化数据工具, jiégòuhuà shùjù gōngjù) startete im Juli 2013 mit vier unterstützten Typen: allgemeine Fragen und Antworten, Online-Dokumente, Dateidownloads, Softwaredownloads. Produkte waren nie darunter, und öffentlich zugänglich wurde es ohnehin nie.

> 结构化数据目前尚未完全开放，我们会主动邀请优质的网站提交数据。
>
> Strukturierte Daten sind noch nicht vollständig geöffnet. Wir laden hochwertige Websites von uns aus ein, Daten einzureichen.
>
> *Quelle: Baidu Search Resource Platform, Ankündigung zum Werkzeug für strukturierte Daten, Juli 2013*

Die URL liefert inzwischen einen Serverfehler.

Aussagekräftiger ist die Liste der aktiven Werkzeuge, und sie ganz durchzulesen ist die Prüfung, die die meisten überspringen. Baidus Search Resource Platform ist gut bestückt: Einreichung, Crawl-Diagnose, Robots-Prüfung, Indexvolumen, Traffic und Keywords, Site-Umstellung, mobile Anpassung. Kein Werkzeug für strukturierte Daten hat dort überlebt, und nichts davon berührt Produkte. Es gibt keinen Objekttyp Produkt, also nicht einmal ein Formular, das man falsch ausfüllen könnte.

OpenCard verdient einen ehrlichen Blick, denn es ist ein lebendiger organischer Kanal, der beinahe genau das tut, was ein Händler wollen würde. Sie hosten einen Webhook, Baidu schickt zur Abfragezeit eine normalisierte Absicht als JSON, und Ihre Daten kommen als reichhaltige Karte in unbezahlten Ergebnissen zurück, ohne Crawling und ohne Indexierung. OpenCard ist der Nachfolger der alten Aladdin-Karten. Dahinter braucht es ein intelligentes Mini-Programm (智能小程序, zhìnéng xiǎochéngxù), und genau dort nennt die Zulassungsregel den Einzelhandel und schließt die Tür.

> 小程序主面向C端用户，且不属于医疗、资讯、招聘、购物平台等类目
>
> Das Mini-Programm muss sich an Endverbraucher richten und darf nicht in Kategorien wie Medizin, Nachrichten, Stellenvermittlung oder Shopping-Plattformen fallen.
>
> *Quelle: Baidu, Zulassungsdokumentation zu OpenCard*

Dieser Ausschluss steht in der Zulassungsregel, noch vor der Kategorieliste, die rund 120 Einträge umfasst: Reisen, Finanzen, Unterhaltung, Behördendienste, Werkzeuge, Bildung, Immobilien, Kraftfahrzeuge, Spiele, Haustiere, Astrologie. Einzelhandel steht nicht darunter, und nichts, was einer Produktliste ähnelt, ebenso wenig.

Bleibt Baidus offene Transaktionsplattform unter dianshang.baidu.com, die noch antwortet und deshalb in Recherchen immer wieder auftaucht. Ihr Text bewirbt Xiongzhang ID (熊掌号, Xióngzhǎng Hào), im März 2020 abgeschaltet, und Nuomi, ebenfalls verschwunden. Eine Seite, die zwei tote Produkte verkauft, ist eine Seite, die seit Jahren niemand geöffnet hat. Vier Kandidaten, keiner davon offen für einen Händler.

## Baidu hat nie Nein gesagt, und das prägt die Argumentation

Baidu hat nie einen Satz veröffentlicht, wonach Produktfeed-Daten nicht in organischen Ergebnissen erscheinen könnten. Keine Ankündigung dieser Art, nichts in den Hilfeseiten. Was es gibt, ist eine Liste dreier bezahlter Ziele, vier verschlossene Türen und dazwischen Schweigen.

Die belastbare Behauptung ist deshalb die enge. Für Händler-Feeddaten gibt es bei Baidu keinen dokumentierten organischen Weg. Das ist nicht dasselbe wie bewiesenermaßen unmöglich, und dieser Unterschied schützt Sie im Widerspruch. Sagen Sie einem Anbieter, es sei unmöglich, und Sie haben eine Diskussion begonnen, die Sie nicht beenden können. Bitten Sie um die Dokumentation, und die Diskussion ist vorbei.

## Wenn Sie Sichtbarkeit statt Media wollen, funktionieren zwei Dinge

Die Nachfrage war nie das Problem.

> China zählte im Dezember 2025 937 Millionen Online-Käufer, das sind 83,2 % der 1,125 Milliarden Internetnutzer des Landes.
>
> *Quelle: China Internet Network Information Center, 57. Statistikbericht, 17. März 2026*

Nur führte der Feed nicht dorthin. Zwei andere Wege tun es.

Der erste gilt für alle und ist unspektakuläre Arbeit. Bringen Sie Baidu dazu, Ihre Produktseiten als Seiten zu crawlen und zu indexieren: verifizierte Website in der Search Resource Platform, ICP-Nummer in den Site-Attributen, serverseitig gerendertes HTML, das Baiduspider lesen kann, URLs über die API gepusht. Jeder Schritt hat seinen eigenen Artikel in diesem Leitfaden, von [der Verifizierung der Website](/de/ressourcen/china-web-leitfaden/baidu-site-verifizierung/) bis zum [Senden der URLs über die API](/de/ressourcen/china-web-leitfaden/urls-an-baidu-senden/). Langsamer als das Hochladen einer Tabelle, und der einzige unbezahlte Weg, den Baidu für kommerzielle Seiten dokumentiert.

Der zweite hängt davon ab, wer bei Ihnen kauft. Ist das eine Einkaufsleitung und kein Endkunde, dann ist Baidu Aicaigou (百度爱采购, Bǎidù Àicǎigòu) die B2B-Vertikale, deren Lieferantenprofile bei kommerziellen Suchanfragen auf den vordersten Plätzen stehen.

> Baidu Aicaigou brachte in einem einzigen Jahr mehr als 13 Millionen Geschäftsanbahnungen zusammen und sammelte über 200 Millionen Inhalte auf der Plattform.
>
> *Quelle: 南方都市报, 14. Juni 2023*

Die Mitgliedschaft wird für die Standardstufe mit 6.980 Yuan im Jahr angegeben und muss über einen autorisierten Dienstleister (服务商, fúwùshāng) gekauft werden, wobei [ein eigener Artikel in diesem Leitfaden](/de/ressourcen/china-web-leitfaden/baidu-aicaigou-b2b/) den Rest abdeckt. Für einen Komponentenhersteller arbeitet dieses Budget dort oft härter als in einer DPA-Kampagne, und nichts davon berührt BMC. Für den Endkundenhandel ist es die falsche Form.

Baidus Aussage zu den Zielen ist alter Text. Prüfen Sie auf eine neuere Produkt-FAQ, bevor Sie ihn in einer Kundenpräsentation zitieren.
