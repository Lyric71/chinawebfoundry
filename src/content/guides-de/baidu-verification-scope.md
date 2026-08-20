---
title: "Baidu-Verifizierung: www, HTTPS und Subdomains"
subtitle: "In der Google Search Console deckt eine Domain-Property beide Protokolle und sämtliche Subdomains unter einem Dach ab. Bei Baidu gibt es dafür keine Entsprechung. Sie bekommen genau das, was Sie verifizieren."
summary: "Bei Baidu sind http und https getrennte Websites, www und ohne www getrennte Hosts, Subdomains erben von einer verifizierten Root, und Verzeichnisse lassen sich nicht eintragen."
visual: "/images/guides/baidu-verification-scope.webp"
order: 25
published: true
publishedAt: 2026-08-17
updatedAt: 2026-08-17
category: Search
---

An dieser Lücke stolpern mehr ausländische Teams als an irgendeinem anderen Punkt beim Einrichten der Baidu Search Resource Platform (百度搜索资源平台, Bǎidù Sōusuǒ Zīyuán Píngtái). Eine Website ist hier ein Protokoll und ein Host, mehr nicht. Wer den Zuschnitt falsch wählt, liest ein Quartal später Dashboards über eine Fassung der eigenen Website, die niemand besucht.

> Baidu hielt im November 2025 über alle Geräte hinweg 63,97 % des chinesischen Suchmaschinenmarkts, auf Mobilgeräten 77,86 %.
>
> *Quelle: StatCounter, zitiert nach The Egg, 11. Februar 2026*

StatCounters China-Panel ist sprunghaft, der genaue Wert wandert also von Monat zu Monat. Das Bild bleibt. Aus dieser Suchmaschine stammen Ihre China-Zahlen, und deshalb sind die Grenzen der Property zehn Minuten Nachdenken wert.

Wie Sie die Inhaberschaft nachweisen, per Datei oder Meta-Tag, wird [gesondert behandelt](/de/ressourcen/china-web-leitfaden/baidu-site-verifizierung/). Hier geht es darum, wofür Sie die Inhaberschaft nachweisen.

## http und https sind zwei verschiedene Websites

Baidu behandelt das Protokoll als Teil der Site-Identität. Wenn Sie in der Site-Verwaltung (站点管理, zhàndiǎn guǎnlǐ) eine Website eintragen, geben Sie das Protokoll zusammen mit dem Host an, und dieses Präfix ist keine Zierde. Wählen Sie eines, und Sie haben eine Property, die vom anderen nichts weiß. Getrennte Verifizierung, getrennte Indexdaten.

Der Fehlerfall ist langweilig und weit verbreitet. Eine Website wird über http verifiziert, wechselt Jahre später auf https, und die alte Property berichtet weiter über eine Fassung ihrer selbst, die nur noch als Weiterleitung existiert. Das Indexvolumen (索引量, suǒyǐn liàng) flacht ab. Jemand schließt daraus, Baidu crawle nicht mehr. Doch, Baidu crawlt. Nur die Property, die niemand öffnet.

Für die Beziehung gibt es ein Werkzeug. Die HTTPS-Zertifizierung (HTTPS认证) teilt Baidu mit, dass die http-Fassung der https-Fassung entspricht. Reichen Sie sie ein. Die beiden Properties verschmelzen dadurch nicht, und sie ersetzt nicht die Verifizierung derjenigen, die Sie ausliefern.

## Verifizieren Sie den Host, auf dem die Leute wirklich landen

Dieselbe Regel gilt eine Ebene höher. Für Baidu sind die nackte Domain und der www-Host völlig verschiedene Hosts, und wer den einen verifiziert, gewinnt für den anderen nichts.

Verifizieren Sie also den kanonischen. Nicht die Fassung auf der Visitenkarte, sondern die, die in der Adressleiste stehen bleibt, wenn alle Weiterleitungen durchgelaufen sind. Rufen Sie die Website kalt auf, von außerhalb Ihres Büronetzes, und verifizieren Sie, worauf Sie landen.

Teuer wird es bei den Weiterleitungen. Baidu folgt zur Bestätigung der Inhaberschaft keiner Kette, ein Host mit 301 oder 302 fällt also durch die Prüfung, und zwar unabhängig davon, wie korrekt die Datei am Ziel liegt. Das prüfen wir als Erstes, wenn eine augenscheinlich korrekte Verifizierung rot zurückkommt. Dieselbe Unerbittlichkeit zeigt sich beim Crawling: Baidu protokolliert Crawl-Fehler jenseits von fünf Sprüngen und bei URLs über 1.024 Zeichen.

Halten Sie also einen kanonischen Host, leiten Sie den anderen in einem einzigen Sprung dorthin, und tragen Sie den Host, dessen einzige Aufgabe das Weiterleiten ist, niemals ein.

## Subdomains erben die Inhaberschaft von einer verifizierten Root

Bei Subdomains arbeitet das System für Sie. Verifizieren Sie die Root-Domain, und Baidu erlaubt Ihnen, Subdomains gesammelt hinzuzufügen (批量添加子站, pīliàng tiānjiā zǐzhàn), mit geerbter Inhaberschaft vom übergeordneten Host. Nichts, was auf jedem Host ausgerollt werden müsste, kein Tag, das in ein Template eines anderen Teams wandert.

Baidu lieferte die Funktion zusammen mit einer Änderung am Ablauf der Verifizierung aus, und die Ankündigung besagt, dass eine Verifizierung nicht mehr verfällt. Dieser zweite Teil ist schwerer zu bestätigen, als er sein sollte. Behandeln Sie ihn als berichtet und lassen Sie Ihre Datei liegen.

Die Vererbung klärt zudem eine Frage, die die meisten Teams gar nicht erst stellen: wo die Inhaberschaft tatsächlich liegt. Nicht bei der Domain.

> 实名认证直接影响账号和资源的归属
>
> Die Realnamen-Verifizierung bestimmt unmittelbar, wem das Konto und seine Ressourcen gehören.
>
> *Quelle: Baidu, Dokumentation zur Kontoverwaltung*

Alles, was an dieser Root hängt, Subdomains eingeschlossen, führt zurück auf die verifizierte Identität, der das Konto gehört. Das lohnt eine Prüfung, bevor eine Agentur Ihre Subdomains unter ihrem eigenen Login einträgt.

Für das Reporting zählt die Gegenrichtung. Dieser Punkt ist eher berichtet als von Baidu dokumentiert: Agenturquellen halten die Verifizierung der Root-Domain für das, was Indexdaten auf Subdomain-Ebene freischaltet. Verifizieren Sie nur cn.example.com, dann bekommen Sie auch nur das. Die Root macht die Ebene darunter sichtbar.

Wer seine China-Inhalte auf einer Subdomain betreibt, verifiziert beides: die Root, damit das Subdomain-Reporting funktioniert, und die Subdomain, damit sie eine eigene Property mit Einreichungskanal und Keyword-Daten hat.

## Kein Teil von Baidu versteht einen /cn/-Ordner

Unterverzeichnisse sind die Struktur, die global aufgestellte Unternehmen zuerst vorschlagen, und der eine Fall, für den Baidu nie gebaut hat. Es gibt keinen unterstützten Weg, ein bloßes Unterverzeichnis als eigenständige Website einzutragen. Lesen Sie das als Lücke, nicht als Verbot: Baidu hat keine Regel gegen Websites in Unterverzeichnissen veröffentlicht. Das Formular der Site-Verwaltung nimmt schlicht ein Protokoll und einen Host entgegen, und für einen Pfad ist darin kein Platz.

Ein Unternehmen, das seine chinesischen Seiten unter example.com/cn/ ablegt, endet mit einer einzigen Property für die gesamte globale Website. Chinesische und englische Seiten landen im selben Indexvolumen-Diagramm und in derselben Keyword-Tabelle. Mit den URLs selbst ist alles in Ordnung: Sie ranken, Sie können sie einreichen, und die Crawl-Diagnose (抓取诊断, zhuāqǔ zhěnduàn) holt jede davon auf Zuruf. Nur isolieren lassen sie sich nicht. Kein Bericht sagt Ihnen, wie viele der chinesischen Seiten im Index stehen, weil die Plattform den Begriff Bereich nicht kennt.

Wenn getrenntes Reporting zählt, ist die Subdomain die sauberere Struktur. Eine China-Website auf cn.example.com bekommt ein eigenes Diagramm, während dieselben Inhalte in einem Ordner ein nicht ausgewiesener Anteil an fremden Zahlen bleiben.

Falsch sind Unterverzeichnisse deswegen nicht. Sie bündeln Autorität an einem Ort und sind einfacher zu hosten. Der Preis liegt bei der Messbarkeit, und er kostet ein Gespräch in der Architekturphase oder eine Migration ein halbes Jahr später.

## Jede dieser Änderungen zählt als Migration

Keine dieser Regeln wird milder, wenn die Website ihre Form ändert. Der Wechsel von http auf https ist eine Migration. Ein neuer kanonischer Host ebenso, und das Anheben eines Ordners auf eine Subdomain auch. Baidu liest jeden dieser Schritte als Site-Umstellung, nicht als Routinepflege.

Die Site-Umstellung (网站改版, wǎngzhàn gǎibǎn) ist das Werkzeug zur Anmeldung. Sie nimmt Domain- und Verzeichnisänderungen entgegen, dazu Regeln auf URL-Ebene, wenn die Zuordnung unordentlicher ist. Ihre Aufgabe ist es, den Status der alten URLs auf die neuen zu übertragen, statt Baidu ihnen als Fremden begegnen zu lassen. Baidu prüft die eingereichten Regeln in einer halben bis zwei Stunden und arbeitet die Migration dann über einen halben bis zwei Tage ab.

Reichen Sie sie im selben Zeitfenster ein wie die Weiterleitungen, nicht erst, wenn die Traffic-Kurve sich bewegt. Baidu wird von allein nicht darauf kommen, dass die beiden URL-Sätze zusammengehören.

Baidu passt diese Regeln ohne große Vorwarnung an. Prüfen Sie den Ankündigungs-Feed, bevor Sie auf etwas Datiertes hin handeln.
