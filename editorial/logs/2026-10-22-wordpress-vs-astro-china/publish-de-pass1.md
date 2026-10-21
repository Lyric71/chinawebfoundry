---
title: "WordPress oder Astro für eine Website in China"
subtitle: "Welche Server eine Seite abfragt und wie Ihre Redaktion arbeitet, entscheidet über die passende Technik für China."
summary: "WordPress oder Astro in China: Verbindungen ins Ausland, Hosting und redaktioneller Aufwand helfen bei der Entscheidung für die passende Technik."
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

## Jeder weitere Host im Ausland kann einen Grenzübertritt bedeuten

Eine Seite lädt selten mit einer einzigen Anfrage. Das HTML fordert ein Stylesheet an, das wiederum eine Schrift abruft. Ein Plugin ergänzt ein Skript von einem fremden Server, ein Analysetag ein weiteres. Eine neue HTTPS-Verbindung über TCP verlangt eine Namensauflösung und den Verbindungsaufbau, bevor die Antwort ankommt. Ein DNS-Cache und wiederverwendete Verbindungen können einen Teil dieser Schritte ersparen.

> Bei einer ersten Anfrage umfasst die Latenz die DNS-Auflösung, den TCP-Verbindungsaufbau und die TLS-Aushandlung. Mit der Zahl der Hostnamen steigt die Zahl der nötigen DNS-Abfragen.
> Quelle: MDN Web Docs, Understanding latency, Februar 2025. https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/Understanding_latency

Von China aus macht sich die Grenze bereits bei diesem Aufbau bemerkbar. Jeder Austausch verlangt einen Hin- und Rückweg. Zwischen einem Telefon in Chengdu und einem Server in Frankfurt oder Virginia kostet schon die Entfernung Zeit, bevor die Netzfilterung eingreift.

> Chinafy prüfte 614 internationale Websites mit WebPageTest aus Peking, Virginia und London. Die Zeit bis zum ersten Byte war in Peking 4- bis 4,5-mal so hoch. Der Anbieter-Benchmark erfasst internationale Websites, ohne nach Plattformen zu unterscheiden.
> Quelle: Chinafy, China Website Performance Benchmarks 2026, April 2026. https://www.chinafy.com/blog/china-website-performance-benchmarks-2026

Die Zeit bis zum ersten Byte endet, bevor Inhalte eintreffen. Die Seitengröße geht daher nicht in diesen Wert ein. Entscheidend sind die Hin- und Rückwege sowie die Verarbeitung auf dem Server. Wer einen unnötigen Ursprung im Ausland entfernt, kann einen Verbindungsaufbau und eine Fehlerquelle einsparen. Sobald die Antwort eintrifft, zählt auch die Größe der herunterzuladenden Bilder.

## Eine gesperrte Verbindung kann die Seite aufhalten

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

Ein einziger Verweis auf einen gesperrten Host kann so einen weißen Bildschirm hinterlassen, wenn die Ressource das Rendering blockiert. Liegt dieselbe Datei auf dem eigenen Server, kann der Browser eine bestehende Verbindung nutzen. Herunterladen muss er sie weiterhin. Unser [Leitfaden zu JavaScript-CDNs in China](/de/ressourcen/china-web-leitfaden/javascript-cdn-china/) behandelt die verbreiteten Hosts einzeln.

## Eine WordPress-Alternative mit prüfbaren Abhängigkeiten

Welche Hosts eine WordPress-Seite anspricht, ändert sich mit dem laufenden Betrieb. Wer am Dienstag ein Plugin installiert, kann damit für Mittwoch einen neuen Domainaufruf einführen. Ändert jemand im Marketing eine Theme-Einstellung, können die Schriften ohne Codeänderung von einem anderen Host kommen.

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

Auch ein sorgfältig betreutes WordPress kann mit einer kurzen, stabilen Hostliste auskommen. Dafür braucht es eine Plugin-Prüfung und die Bereitschaft, neue Ergänzungen abzulehnen. Bei einem statischen Build lässt sich die Liste leichter kontrollieren, wenn externe Skripte und von Redakteuren eingefügte Fremdinhalte begrenzt bleiben.

## Was ein WordPress-Server selbst abfragt

Ein WordPress-Server sendet auch ohne Besucher Anfragen. Er fragt WordPress.org nach Updates, zunächst über HTTPS und bei einem Fehlschlag erneut über HTTP. Von einem Festlandserver aus führt diese Anfrage zu einem Dienst, der Zugriffe aus einigen chinesischen Netzen begrenzt.

> WordPress 7.1.3 sendet seine Versionsprüfung an api.wordpress.org. Außerhalb geplanter Aufgaben gilt ein Timeout von 3 Sekunden.
> Quelle: WordPress-Quellcode 7.1.3, wp-includes/update.php, gelesen am 22. Oktober 2026. https://raw.githubusercontent.com/WordPress/WordPress/7.1.3/wp-includes/update.php

> Auf eine Meldung zu 429-Fehlern aus China antwortete das WordPress.org-Team, dass mehrere chinesische Netze bei bestimmten Diensten begrenzt würden. Grund sei der hohe Anteil missbräuchlichen und nicht legitimen Datenverkehrs aus diesen Netzen.
> Quelle: WordPress.org Meta Trac, Ticket Nr. 5106, März 2020. https://web.archive.org/web/20260116133057/https://meta.trac.wordpress.org/ticket/5106

Das Dashboard meldet den 429-Fehler nicht; Updates erscheinen einfach nicht mehr. Eine weitere Abhängigkeit liegt in der Verwaltung selbst. WordPress bildet Avatar-Adressen standardmäßig mit secure.gravatar.com, auch für die Verwaltungsleiste.

> GreatFire stuft https://secure.gravatar.com als gesperrt ein: 1 von 1 aussagekräftigen Tests auf dem chinesischen Festland schlug fehl. Zuletzt getestet am 31. August 2026.
> Quelle: GreatFire, August 2026. https://en.greatfire.org/https/secure.gravatar.com

Die Avatar-Anfrage kommt aus dem Browser der Redaktion. Sie betrifft daher ein Team in Shanghai unabhängig davon, wo die Website liegt. Unser [Leitfaden zum langsamen wp-admin in China](/de/ressourcen/china-web-leitfaden/wp-admin-langsam-china/) erklärt die Abhilfe. Eine statische Website auf dem Festland hat weder eine Verwaltungsoberfläche noch eine Update-Prüfung. Der Server liefert Dateien aus, ohne solche eigenen Anfragen zu senden.

## Ein statischer Build auf Vercel bleibt außerhalb Chinas

Auch bei einem statischen Build muss das Hosting gewählt werden. Der Speicherort entscheidet mit darüber, ob Besucher aus China die Dateien abrufen können.

Die Website von ChinaWebFoundry einschließlich dieser Seite wurde mit Astro erstellt und liegt auf Vercel. Sie richtet sich an Leser außerhalb Chinas. Vercel beschreibt offen, welche Grenzen das für Besucher vom Festland hat.

> Vercel hat keine Server oder CDN-Knoten auf dem chinesischen Festland. Chinesische Netzkontrollen können Verbindungen zu ausländischen Domains einschließlich der .vercel.app-Subdomains blockieren oder drosseln. Vercel garantiert auf dem chinesischen Festland weder Verfügbarkeit noch Leistung.
> Quelle: Vercel Knowledge Base, Accessing Vercel-hosted sites from mainland China, veröffentlicht am 3. November 2025, aktualisiert am 11. September 2026. https://vercel.com/kb/guide/accessing-vercel-hosted-sites-from-mainland-china

> GreatFire stuft https://vercel.app als gesperrt ein: 4 von 4 aussagekräftigen Tests auf dem chinesischen Festland schlugen fehl. Zuletzt getestet am 14. September 2026.
> Quelle: GreatFire, September 2026. https://en.greatfire.org/https/vercel.app

Vercels Lösungsliste endet bei einer getrennten Bereitstellung auf dem Festland, die laut Anbieter eine „ICP license“ verlangt. Für eine Unternehmenswebsite mit Marketinginhalten auf einem Festlandserver ist die ICP-Registrierung (ICP备案) erforderlich. Die ICP-Lizenz (ICP许可证) ist eine gesonderte Erlaubnis für regulierte kommerzielle Informationsdienste im Internet. Welche Genehmigungen gelten, hängt vom Geschäftsmodell ab.

> Alibaba Cloud verlangt vor dem Betrieb einer Website auf einem Festlandknoten eine ICP-Registrierung. Für seine Server in Hongkong oder im Ausland ist sie nicht erforderlich.
> Quelle: Alibaba Cloud (阿里云), Übersicht zur ICP-Registrierung, August 2026. https://help.aliyun.com/zh/icp-filing/basic-icp-service/user-guide/icp-filing-application-overview

Ein Ursprungsserver auf dem Festland erspart den Abruf aus dem Ausland für die dort gespeicherten Dateien. Bei den von uns betriebenen Kundenwebsites läuft der Build in einer CI-Pipeline außerhalb Chinas. Die fertigen Dateien übertragen wir anschließend zu Alibaba Cloud, Tencent Cloud (腾讯云) oder Huawei Cloud (华为云).

## Was ein statischer Build dem Marketingteam abverlangt

Eine vertraute Redaktionsoberfläche fehlt zunächst. Ohne zusätzliches CMS liegen die Inhalte als Markdown-Dateien in einem Code-Repository. WordPress-Plugins lassen sich nicht einfach in Astro installieren. Ein Kontaktformular, ein Cookie-Banner, die interne Suche oder eine Newsletter-Anmeldung brauchen Code oder eine Integration, die jemand einrichtet und pflegt.

Jede Änderung muss durch einen Build. Aus der Bearbeitung wird ein Commit, der Commit startet den Build und die Dateien wandern auf den Server. Ein um 18 Uhr entdeckter Tippfehler wartet auf das Ende dieses Ablaufs.

Auch Aufgaben, die Marketing in WordPress selbst erledigen kann, bleiben beim Entwickler: etwa ein neues Seitenlayout oder ein zusätzliches Formularfeld.

Ein Headless-CMS nimmt einen Teil dieser Arbeit ab.

> WordPress kann einem Astro-Projekt als Headless-CMS Inhalte über die REST-API liefern, die jede WordPress-Website standardmäßig bereitstellt.
> Quelle: Astro Docs, Headless WordPress & Astro, aktualisiert am 19. Oktober 2026. https://docs.astro.build/en/guides/cms/wordpress/

Die Redaktion behält ihr bekanntes Dashboard. WordPress kann außerhalb Chinas liegen, wo seine Update-Abfragen funktionieren. Der Festlandserver erhält ausschließlich fertige Dateien. Plugins für die öffentliche Website, etwa Pagebuilder oder Formulare, müssen gesondert angebunden werden, weil Astro die Seiten erzeugt.

## Wann WordPress die passende Wahl ist

Veröffentlicht Ihr Marketingteam jede Woche ohne fest verfügbaren Entwickler, ist WordPress die bessere Wahl.

Wer drei Beiträge und eine Kampagnenseite pro Woche veröffentlicht, muss das ohne technisches Ticket schaffen können. WordPress liefert Entwürfe, geplante Veröffentlichungen, Revisionen, Benutzerrollen und eine Vorschau, die der öffentlichen Seite entspricht. Eine statische Website braucht dafür ein CMS oder einen anderen redaktionellen Ablauf.

WordPress passt auch, wenn die Website selbst das Produkt ist. Mitgliederbereiche, Onlinekurse, Buchungen oder ein täglich gepflegter WooCommerce-Katalog fallen in das Aufgabenfeld von Plugins. Kalkulieren Sie deren Ersatz, bevor Sie auf einen statischen Aufbau setzen.

Für die Probleme in China gibt es bekannte Abhilfen. Entfernen Sie externe Avatar-Aufrufe. Laden und prüfen Sie Updates außerhalb Chinas, bevor Sie sie auf dem Festlandserver einspielen. Hosten Sie Skripte und Schriften selbst, soweit die Lizenzen das erlauben. Unser [Leitfaden zur WordPress-Geschwindigkeit in China](/de/ressourcen/china-web-leitfaden/wordpress-geschwindigkeit-china/) beschreibt die Schritte. Die Seite [WordPress in China](/de/wordpress-in-china/) erklärt, wie wir diesen Aufbau auf einem Festlandserver betreiben. Nach dem Start muss jemand für diese Kontrollen verantwortlich bleiben.

Zählen Sie, wie viele Personen die Website im nächsten Monat bearbeiten werden und welche Entwickler verfügbar sind. Bei mehr Redakteuren als Entwicklern und wöchentlichen Änderungen passt ein gut gepflegtes WordPress. Eine monatlich aktualisierte Website mit verfügbarem Entwickler verursacht in China als statischer Build weniger Arbeit.

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

Wir veröffentlichen keine Preise. Bei einer statischen Website müssen weder ein PHP-Server noch eine Datenbank gepflegt werden; das vereinfacht Hosting und Wartung. Änderungen an Layout und Funktionen kosten dafür Entwicklerzeit. Lassen Sie den Wartungsaufwand anhand Ihres Veröffentlichungsrhythmus und der benötigten Redaktionsfunktionen kalkulieren.

**Braucht eine statische Website ebenfalls eine ICP-Registrierung?**

Ja, wenn sie von einem Festlandserver ausgeliefert wird. Maßgeblich ist der Hostingort, unabhängig von der Technik. Ein statischer Build auf Alibaba Clouds Festlandknoten braucht vor dem Start die ICP-Registrierung (ICP备案), genauso wie WordPress. Ein Server in Hongkong benötigt sie nicht; beim Abruf seiner Dateien überqueren Besucher vom Festland die Grenze.
