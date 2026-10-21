---
title: "WordPress oder Astro für eine Website in China"
subtitle: "Welche Technik für China passt, hängt von den Verbindungen Ihrer Website und dem Arbeitsalltag Ihrer Redaktion ab."
summary: "WordPress oder Astro für China: Was sich bei Serveranfragen, Hosting und Veröffentlichung unterscheidet und wann welches System passt."
visual: "/images/guides/wordpress-vs-astro-china.webp"
order: 49
published: true
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
reviewBy: "2026-11-20"
category: "Technology"
author: "cyril-drouin"
---

Wählen Sie WordPress, wenn Ihr Marketingteam jede Woche veröffentlicht und keinen eigenen Entwickler hat. Ein statischer Astro-Build passt zu einer Website, die sich seltener ändert und für die ein Entwickler verfügbar ist. In beiden Fällen empfiehlt sich ein Server auf dem chinesischen Festland mit der nötigen ICP-Registrierung. Wer eine WordPress-Alternative für China prüft, sollte die angesprochenen Hosts zählen und untersuchen, was bei einer gesperrten Verbindung passiert. Es gibt keinen veröffentlichten Vergleichstest beider Systeme aus China. Dieser Leitfaden behauptet daher keinen Geschwindigkeitsvorteil.

| Frage | WordPress | Statischer Astro-Build |
|---|---|---|
| Welche Hosts fragt die Seite ab? | Hosts von Theme, Plugins und Browserskripten | Hosts der erzeugten Dateien und möglicher Browserskripte |
| Welche Anfragen sendet der Server? | Update-Abfragen an api.wordpress.org | Keine; er liefert Dateien aus |
| Wer kann veröffentlichen? | Jeder mit entsprechendem Zugang | Ein Entwickler oder ein Redakteur über ein Headless-CMS |
| Wann wird eine Änderung sichtbar? | Beim Speichern | Nach Build und Deployment |
| Braucht ein Festlandserver eine ICP-Registrierung? | Ja | Ja |

Alle folgenden Quellen wurden am 22. Oktober 2026 geprüft.

## Jeder zusätzliche Host im Ausland kann weitere Grenzübertritte erfordern

Eine Seite lädt selten mit einer einzigen Anfrage. Das HTML fordert ein Stylesheet an, das wiederum eine Schrift abruft. Ein Plugin ergänzt ein Skript von einem fremden Server, ein Analysetag ein weiteres. Eine neue HTTPS-Verbindung über TCP verlangt eine Namensauflösung und den Verbindungsaufbau, bevor die Antwort ankommt. Ein DNS-Cache und wiederverwendete Verbindungen können einen Teil dieser Schritte ersparen.

> Bei einer ersten Anfrage umfasst die Latenz die DNS-Auflösung, den TCP-Verbindungsaufbau und die TLS-Aushandlung. Mit der Zahl der Hostnamen steigt die Zahl der nötigen DNS-Abfragen.
> Quelle: MDN Web Docs, Understanding latency, Februar 2025. https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/Understanding_latency

Beim Verbindungsaufbau aus China kostet jeder Hin- und Rückweg Zeit. Zwischen einem Telefon in Chengdu und einem Server in Frankfurt oder Virginia macht sich schon die Entfernung bemerkbar, bevor die Netzfilterung eingreift.

> Chinafy prüfte 614 internationale Websites mit WebPageTest aus Peking, Virginia und London. Die Zeit bis zum ersten Byte war in Peking 4- bis 4,5-mal so hoch. Der Anbieter-Benchmark erfasst internationale Websites, ohne nach Plattformen zu unterscheiden.
> Quelle: Chinafy, China Website Performance Benchmarks 2026, April 2026. https://www.chinafy.com/blog/china-website-performance-benchmarks-2026

Die Zeit bis zum ersten Byte misst die Wartezeit vor dem Eintreffen der Inhalte. Sie umfasst die Laufzeit der Anfragen und die Verarbeitung auf dem Server; die Seitengröße wirkt sich erst anschließend aus. Wird ein unnötiger Host im Ausland entfernt, können ein Verbindungsaufbau und eine Fehlerquelle entfallen. Die Bilder müssen weiterhin heruntergeladen werden, und dabei zählt ihre Größe.

## Eine gesperrte Verbindung kann die Anzeige verzögern

Bei einer gesperrten Verbindung kann der Browser bis zum Timeout warten. Die Folgen hängen davon ab, wie die Verbindung scheitert und welche Aufgabe die Ressource in der Seite hat.

> GreatFire stuft https://ajax.googleapis.com, Googles Host für Bibliotheken, als gesperrt ein: 1 von 1 aussagekräftigen Tests auf dem chinesischen Festland schlug fehl. Zuletzt getestet am 22. August 2026.
> Quelle: GreatFire, August 2026. https://en.greatfire.org/https/ajax.googleapis.com

> Von einer Alibaba-Cloud-Instanz (阿里云) in Zhangjiakou aus lieferte die Website von Google Hosted Libraries am 28. August 2026 in 3 von 3 Versuchen kein erstes Byte. Jeder Versuch wurde nach 60 Sekunden abgebrochen. 21YunBox maß die Website selbst; das Urteil zum Host ajax.googleapis.com stammt von GreatFire.
> Quelle: 21YunBox, Does Google Hosted Libraries Work in China?, geprüft am 8. Oktober 2026. https://www.21cloudbox.com/support/google-hosted-libraries.html

Wo die Ressource eingebunden ist, bestimmt ihre Wirkung. Ein Stylesheet im Kopf des Dokuments kann die Anzeige aufhalten, bis es eintrifft. Bei einem klassischen Skript-Tag lädt und verarbeitet der Browser laut MDN zunächst das Skript, bevor er das Dokument weiter einliest.

> Ein klassisches Skript ohne async oder defer wird geladen und ausgeführt, bevor die Dokumentanalyse fortgesetzt wird.
> Quelle: MDN Web Docs, The Script element, Mai 2026. https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script

> CSS blockiert das Rendering: Der Browser zeigt die Seite erst an, wenn er die Stylesheets empfangen und verarbeitet hat.
> Quelle: MDN Web Docs, Critical rendering path, Februar 2025. https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/Critical_rendering_path

Schon eine Ressource von einem gesperrten Host kann die Anzeige verhindern, wenn sie das Rendering blockiert. Liegt dieselbe Datei auf dem eigenen Server, kann der Browser eine bestehende Verbindung nutzen. Herunterladen muss er sie weiterhin. Unser [Leitfaden zu JavaScript-CDNs in China](/de/ressourcen/china-web-leitfaden/javascript-cdn-china/) behandelt die verbreiteten Hosts einzeln.

## Eine WordPress-Alternative mit prüfbaren Abhängigkeiten

Im laufenden WordPress-Betrieb kommen leicht neue Hosts hinzu. Ein am Dienstag installiertes Plugin kann schon auf den Seiten vom Mittwoch eine weitere Domain abfragen. Eine Theme-Einstellung genügt, damit das Marketing Schriften von einem anderen Host lädt, ohne den Code anzufassen.

Ein Astro-Build liefert dem Entwickler Dateien, die er vor der Veröffentlichung prüfen kann.

> Astro rendert Seiten, Routen und API-Endpunkte standardmäßig beim Build als statische Seiten vor.
> Quelle: Astro Docs, On-demand rendering, aktualisiert am 19. Juni 2026. https://docs.astro.build/en/guides/on-demand-rendering/

Das Ergebnis ist ein Ordner mit Dateien. Eine Suche findet die dort eingetragenen Adressen. JavaScript kann jedoch zur Laufzeit weitere Anfragen bilden, und ein entfernt geladenes Skript kann sich ohne neuen Build ändern. Prüfen Sie deshalb neben den Dateien auch den Netzwerkverkehr im Browser. Lokal gespeicherte Skripte erleichtern die spätere Kontrolle.

> Astro unterstützt Skripte im Browser, auch solche, die von einem anderen Server geladen werden.
> Quelle: Astro Docs, Scripts and event handling, aktualisiert am 19. Juni 2026. https://docs.astro.build/en/guides/client-side-scripts/

| Wer sendet die Anfrage? | WordPress auf einem Festlandserver | Statischer Build auf einem Festlandserver |
|---|---|---|
| Browser des Besuchers | Theme- und Plugin-Ressourcen sowie Ergänzungen aus der Verwaltung | Erzeugte Ressourcen und Anfragen der Browserskripte |
| Server | Update-Abfragen an api.wordpress.org | Keine; er liefert Dateien aus |
| Browser der Redaktion | Gravatar in der standardmäßigen Verwaltungsoberfläche | Anmeldung beim CMS, falls vorhanden, unabhängig vom Hostingort |
| Wer kann einen Host hinzufügen? | Personen, die Plugins installieren oder Integrationen ändern | Entwickler, CMS-Einbettungen oder Anbieter entfernter Skripte |

Auch mit WordPress lässt sich die Zahl der Hosts niedrig und stabil halten. Dazu muss das Team Plugins prüfen und manche Ergänzung ablehnen. Bei einem statischen Build erleichtert es die Kontrolle, externe Skripte und eingebettete Fremdinhalte der Redaktion zu begrenzen.

## Was ein WordPress-Server selbst abfragt

Ein WordPress-Server sendet auch ohne Besucher Anfragen. Er fragt WordPress.org nach Updates, zunächst über HTTPS und bei einem Fehlschlag erneut über HTTP. Von einem Festlandserver aus führt diese Anfrage zu einem Dienst, der Zugriffe aus einigen chinesischen Netzen begrenzt.

> WordPress 7.1.3 sendet seine Versionsprüfung an api.wordpress.org. Außerhalb geplanter Aufgaben gilt ein Timeout von 3 Sekunden.
> Quelle: WordPress-Quellcode 7.1.3, wp-includes/update.php, gelesen am 22. Oktober 2026. https://raw.githubusercontent.com/WordPress/WordPress/7.1.3/wp-includes/update.php

> Auf eine Meldung zu 429-Fehlern aus China antwortete das WordPress.org-Team, dass mehrere chinesische Netze bei bestimmten Diensten begrenzt würden. Grund sei der hohe Anteil missbräuchlichen und nicht legitimen Datenverkehrs aus diesen Netzen.
> Quelle: WordPress.org Meta Trac, Ticket Nr. 5106, März 2020. https://web.archive.org/web/20260116133057/https://meta.trac.wordpress.org/ticket/5106

Im Dashboard verschwinden die Update-Hinweise, ohne dass der 429-Fehler angezeigt wird. Hinzu kommen die Avatare in der Verwaltung: WordPress erzeugt ihre Adressen standardmäßig auf secure.gravatar.com, auch für die Verwaltungsleiste.

> GreatFire stuft https://secure.gravatar.com als gesperrt ein: 1 von 1 aussagekräftigen Tests auf dem chinesischen Festland schlug fehl. Zuletzt getestet am 31. August 2026.
> Quelle: GreatFire, August 2026. https://en.greatfire.org/https/secure.gravatar.com

Die Avatar-Anfrage kommt aus dem Browser der Redaktion. Sie betrifft daher ein Team in Shanghai unabhängig davon, wo die Website liegt. Unser [Leitfaden zum langsamen wp-admin in China](/de/ressourcen/china-web-leitfaden/wp-admin-langsam-china/) erklärt die Abhilfe. Eine statische Website auf dem Festland hat weder eine Verwaltungsoberfläche noch eine Update-Prüfung. Der Server liefert Dateien aus, ohne solche eigenen Anfragen zu senden.

## Ein statischer Build auf Vercel bleibt außerhalb Chinas

Wo die statischen Dateien liegen, beeinflusst ihre Erreichbarkeit aus China. Die Hostingentscheidung bleibt deshalb auch bei einem statischen Build nötig.

Die Website von ChinaWebFoundry einschließlich dieser Seite wurde mit Astro erstellt und liegt auf Vercel. Sie richtet sich an Leser außerhalb Chinas. Vercel beschreibt offen, welche Grenzen das für Besucher vom Festland hat.

> Vercel hat keine Server oder CDN-Knoten auf dem chinesischen Festland. Chinesische Netzkontrollen können Verbindungen zu ausländischen Domains einschließlich der .vercel.app-Subdomains blockieren oder drosseln. Vercel garantiert auf dem chinesischen Festland weder Verfügbarkeit noch Leistung.
> Quelle: Vercel Knowledge Base, Accessing Vercel-hosted sites from mainland China, veröffentlicht am 3. November 2025, aktualisiert am 11. September 2026. https://vercel.com/kb/guide/accessing-vercel-hosted-sites-from-mainland-china

> GreatFire stuft https://vercel.app als gesperrt ein: 4 von 4 aussagekräftigen Tests auf dem chinesischen Festland schlugen fehl. Zuletzt getestet am 14. September 2026.
> Quelle: GreatFire, September 2026. https://en.greatfire.org/https/vercel.app

Vercels Lösungsliste endet bei einer getrennten Bereitstellung auf dem Festland, die laut Anbieter eine „ICP license“ verlangt. Für eine Unternehmenswebsite mit Marketinginhalten auf einem Festlandserver ist die ICP-Registrierung (ICP备案) erforderlich. Die ICP-Lizenz (ICP许可证) ist eine gesonderte Erlaubnis für regulierte kommerzielle Informationsdienste im Internet. Welche Genehmigungen gelten, hängt vom Geschäftsmodell ab.

> Alibaba Cloud verlangt vor dem Betrieb einer Website auf einem Festlandknoten eine ICP-Registrierung. Für seine Server in Hongkong oder im Ausland ist sie nicht erforderlich.
> Quelle: Alibaba Cloud (阿里云), Übersicht zur ICP-Registrierung, August 2026. https://help.aliyun.com/zh/icp-filing/basic-icp-service/user-guide/icp-filing-application-overview

Ein Ursprungsserver auf dem Festland erspart den Abruf aus dem Ausland für die dort gespeicherten Dateien. Bei den von uns betriebenen Kundenwebsites läuft der Build in einer CI-Pipeline außerhalb Chinas. Die fertigen Dateien übertragen wir anschließend zu Alibaba Cloud, Tencent Cloud (腾讯云) oder Huawei Cloud (华为云).

## Was der statische Build im Redaktionsalltag verlangt

Eine vertraute Redaktionsoberfläche fehlt zunächst. Ohne zusätzliches CMS liegen die Inhalte als Markdown-Dateien in einem Code-Repository. WordPress-Plugins lassen sich nicht einfach in Astro installieren. Ein Kontaktformular, ein Cookie-Banner, die interne Suche oder eine Newsletter-Anmeldung brauchen Code oder eine Integration, die jemand einrichtet und pflegt.

Jede Änderung erfordert einen neuen Build. Ein Commit hält sie im Repository fest und stößt die Erzeugung der Dateien an, die anschließend auf den Server übertragen werden. Wird um 18 Uhr ein Tippfehler entdeckt, erscheint die Korrektur erst nach Abschluss dieses Ablaufs.

Auch Aufgaben, die Marketing in WordPress selbst erledigen kann, bleiben beim Entwickler: etwa ein neues Seitenlayout oder ein zusätzliches Formularfeld.

Mit einem Headless-CMS behält die Redaktion eine vertraute Oberfläche.

> WordPress kann einem Astro-Projekt als Headless-CMS Inhalte über die REST-API liefern, die jede WordPress-Website standardmäßig bereitstellt.
> Quelle: Astro Docs, Headless WordPress & Astro, aktualisiert am 19. Oktober 2026. https://docs.astro.build/en/guides/cms/wordpress/

Die Redaktion arbeitet weiter im gewohnten Dashboard. WordPress kann außerhalb Chinas betrieben werden, wo seine Update-Abfragen funktionieren. Auf den Festlandserver gelangen nur fertige Dateien. Da Astro die Seiten erzeugt, müssen Pagebuilder und Formular-Plugins gesondert angebunden werden.

## Wann WordPress die passende Wahl ist

Veröffentlicht Ihr Marketingteam jede Woche ohne fest verfügbaren Entwickler, ist WordPress die bessere Wahl.

Wer jede Woche drei Beiträge und eine Kampagnenseite veröffentlicht, braucht dafür Eigenständigkeit gegenüber der Entwicklung. In WordPress lassen sich Entwürfe speichern, Beiträge planen, alte Fassungen wiederherstellen und Zugriffsrechte vergeben. Die Vorschau entspricht der öffentlichen Seite. Für diese Funktionen benötigt eine statische Website ein CMS oder einen zusätzlichen redaktionellen Ablauf.

Ist die Website selbst das Produkt, spricht ebenfalls viel für WordPress. Plugins decken Mitgliederbereiche, Onlinekurse, Buchungen oder einen täglich gepflegten WooCommerce-Katalog ab. Ermitteln Sie die Kosten für deren Ersatz, bevor Sie einen statischen Aufbau wählen.

Für die Probleme in China gibt es bekannte Abhilfen. Entfernen Sie externe Avatar-Aufrufe. Laden und prüfen Sie Updates außerhalb Chinas, bevor Sie sie auf dem Festlandserver einspielen. Hosten Sie Skripte und Schriften selbst, soweit die Lizenzen das erlauben. Unser [Leitfaden zur WordPress-Geschwindigkeit in China](/de/ressourcen/china-web-leitfaden/wordpress-geschwindigkeit-china/) beschreibt die Schritte. Die Seite [WordPress in China](/de/wordpress-in-china/) erklärt, wie wir diesen Aufbau auf einem Festlandserver betreiben. Nach dem Start muss jemand für diese Kontrollen verantwortlich bleiben.

Prüfen Sie, wer die Website im nächsten Monat bearbeiten wird und welche Entwickler dafür erreichbar sind. Überwiegt die Redaktion und ändert sich die Website jede Woche, passt ein gut gepflegtes WordPress. Bei monatlichen Änderungen und einem verfügbaren Entwickler lässt sich eine statische Website in China mit weniger Aufwand betreiben.

## Häufige Fragen

**Ist Astro in China schneller als WordPress?**

Kein veröffentlichter Test vergleicht die beiden aus China, und wir führen keinen solchen Vergleich an. Unterschiede bestehen bei den angesprochenen Hosts und dem Risiko, dass ein gesperrter Host die Seite aufhält. Auch WordPress kann auf einem registrierten Festlandserver schnell laden, wenn Fremdaufrufe entfernt wurden. Unsere [Astro-Seite](/de/astro/) beschreibt den statischen Aufbau.

**Kann Baidu eine Astro-Website lesen?**

Ja. Beide Systeme können vollständiges HTML mit der ersten Antwort liefern, was Crawlern die Arbeit erleichtert. Baidu (百度) kündigte am 24. März 2017 den Baiduspider-render/2.0 zum Abruf von CSS, JavaScript und Bildern an. Wie weit dessen Rendering reicht, veröffentlicht Baidu nicht. Vollständiges HTML bleibt die vorsichtige Wahl, die beide Systeme ermöglichen.

> Baidu kündigte Baiduspider-render/2.0 am 24. März 2017 zum Abruf von CSS, JavaScript und Bildern an.
> Quelle: Baidu Search Resource Platform (百度搜索资源平台), März 2017. https://ziyuan.baidu.com/wiki/990

**Können wir WordPress behalten und trotzdem statische Seiten ausliefern?**

Ja, mit WordPress als Headless-CMS. Die Redaktion schreibt im Dashboard, Astro holt die Inhalte beim Build über die REST-API. Nur die fertigen Dateien gelangen auf den Festlandserver. Plugins für die öffentliche Website werden nicht automatisch übernommen. Jede Änderung wartet auf den nächsten Build und erscheint daher nicht sofort.

**Ist eine statische Website günstiger im Betrieb?**

Wir veröffentlichen keine Preise. Bei einer statischen Website entfällt die Pflege von PHP und einer Datenbank, was Hosting und Wartung vereinfacht. Änderungen an Layout und Funktionen erfordern Entwicklerzeit. Lassen Sie die Wartung anhand Ihres Veröffentlichungsrhythmus und der Werkzeuge kalkulieren, die Ihre Redaktion tatsächlich braucht.

**Braucht eine statische Website ebenfalls eine ICP-Registrierung?**

Ja, wenn sie von einem Festlandserver ausgeliefert wird. Maßgeblich ist der Hostingort, unabhängig von der Technik. Ein statischer Build auf Alibaba Clouds Festlandknoten braucht vor dem Start die ICP-Registrierung (ICP备案), genauso wie WordPress. Ein Server in Hongkong benötigt sie nicht; beim Abruf seiner Dateien überqueren Besucher vom Festland die Grenze.
