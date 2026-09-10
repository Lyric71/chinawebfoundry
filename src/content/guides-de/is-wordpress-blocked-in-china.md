---
title: "Ist WordPress in China gesperrt?"
subtitle: "Auf einem Festlandserver läuft die Software reibungslos. Ihre Aufrufe nach draußen nicht. Gemessen am 28. und 30. August 2026."
summary: "WordPress ist in Festlandchina nicht gesperrt. Der Stand 2026: welche Abhängigkeiten ausfallen, welche nur bremsen und wo die Ratgeber danebenliegen."
visual: "/images/guides/is-wordpress-blocked-in-china.webp"
order: 34
published: true
publishedAt: 2026-08-29
updatedAt: 2026-09-11
category: Technology
---

Nein. WordPress ist in Festlandchina nicht gesperrt, und war es auch nie.

Die Software lädt herunter, installiert sich und läuft ganz normal auf einem Server in Shanghai oder Peking. Unter den in China registrierten Websites ausländischer Unternehmen liegt kein einheimisches CMS davor, und der Bestand chinesischsprachiger Installationen liegt deutlich über einer Million.

Warum hält sich der Mythos dann? Weil eine Standardinstallation zwischen 8 und 20 fremde Server anspricht, bevor der Besucher ein einziges Pixel sieht. Einige davon sind gesperrt. Einer genügt, um die ganze Seite in Geiselhaft zu nehmen. Die Website lädt, rein technisch. Sie verliert nur bei jeder Anfrage Zeit, und dem Team in Europa fällt das nie auf.

Zuletzt gemessen: am 28. August 2026 aus einer Alibaba-Cloud-Region, am 30. August 2026 über eine Privatleitung in Peking.

## Gemessen aus einem Rechenzentrum und über eine Privatleitung

Zwei Messreihen im Abstand von zwei Tagen, dieselbe Liste von Hosts. Die eine lief auf einer kommerziellen Cloud in China, die andere über den Breitbandanschluss einer Privatwohnung in Peking. Sie widersprechen einander, und der Widerspruch ist der eigentliche Befund.

| Host | Messpunkt | Ergebnis | Befund | Getestet |
|---|---|---|---|---|
| fonts.googleapis.com | Alibaba Cloud (阿里云) cn-zhangjiakou | 72 von 72, Median 111 ms, p95 137 ms | Erreichbar | 28.08.2026 |
| fonts.googleapis.com | Privatleitung China Mobile (中国移动) in Peking | 0 von 54 | Gesperrt | 30.08.2026 |
| fonts.gstatic.com | Alibaba Cloud (阿里云) cn-zhangjiakou | 72 von 72, Median 102 ms, p95 121 ms | Erreichbar | 28.08.2026 |
| fonts.gstatic.com | Privatleitung China Mobile (中国移动) in Peking | 0 von 6 | Gesperrt | 30.08.2026 |
| www.googletagmanager.com | Alibaba Cloud (阿里云) cn-zhangjiakou | 72 von 72, Median 118 ms, p95 143 ms | Erreichbar | 28.08.2026 |
| www.googletagmanager.com | Privatleitung China Mobile (中国移动) in Peking | 0 von 112 | Gesperrt | 30.08.2026 |
| www.google.com/recaptcha | Alibaba Cloud (阿里云) cn-zhangjiakou | 0 von 72 | Gesperrt | 28.08.2026 |
| www.google.com/recaptcha | Privatleitung China Mobile (中国移动) in Peking | 0 von 18 | Gesperrt | 30.08.2026 |
| cdn.jsdelivr.net | Alibaba Cloud (阿里云) cn-zhangjiakou | 72 von 72, Median 660 ms, p95 1.757 ms | Langsam | 28.08.2026 |
| cdn.jsdelivr.net | Privatleitung China Mobile (中国移动) in Peking | 36 von 36 | Erreichbar | 30.08.2026 |

> Am 28. August 2026 aus einer Alibaba-Cloud-Instanz (阿里云) in cn-zhangjiakou, alle zehn Minuten über zwölf Stunden abgetastet, Zeitlimit 30 Sekunden: fonts.googleapis.com beantwortete 72 von 72 Anfragen, medianes erstes Byte 111 ms. Am 30. August 2026 über eine Privatleitung von China Mobile (中国移动) in Peking, verteilt auf 264 Seitenaufrufe bei 88 realen Websites, wurde derselbe Host 54-mal angefragt und antwortete kein einziges Mal.
>
> Quelle: 21YunBox, *A Day of Third-Party Requests From Inside China*, 28. August 2026, aktualisiert am 30. August 2026

Lesen Sie die beiden Zeilen eines Hosts immer zusammen, sonst führt die Zahl in die Irre. Eine kommerzielle Cloud in China kauft internationalen Transit, den eine Wohnung in Chaoyang nie bekommt; die Messung aus dem Rechenzentrum markiert damit eine Obergrenze. Ihr Besucher liegt irgendwo darunter. Bei drei der fünf Hosts bekommt er gar nichts.

Fünf Hosts aus einer deutlich längeren Liste. Die übrigen Abhängigkeiten stehen in der Tabelle weiter unten, mit Befund statt Zeit.

## Was WordPress von draußen holt

Installieren Sie WordPress auf einem Festlandserver mit einem gekauften Theme und einem üblichen Satz Plugins, dann haben Sie sich nebenbei verpflichtet, Dateien von Google zu laden, von Automattic, von einem JavaScript-CDN, von einem Schriften-CDN und von allem, was Ihre Formular- und Analyse-Anbieter sonst noch mitbringen.

Aus Frankfurt oder Singapur lösen sich diese Aufrufe in Millisekunden auf, und niemand merkt etwas. Aus Shanghai teilt sich das Ergebnis in drei Gruppen. Manches kommt sauber durch. Manches braucht lange genug, um weh zu tun. Der Rest kommt nie zurück, und der Browser wartet, bis er aufgibt.

> Der Chinafy-Benchmark 2026 hat 614 Websites aus elf Branchen mit WebPageTest aus Peking, Virginia und London getestet. 66,4 Prozent davon ließen sich aus Peking nicht sauber laden. Die mediane visuelle Ladezeit lag bei 17,2 Sekunden, und 44 Prozent der Pekinger Messungen liefen in einen Timeout.
>
> Chinafy, *State of Global Website Performance in China*, April 2026

Diese Zahlen beschreiben ausländische Websites allgemein. WordPress ist schlicht das, worauf die meisten davon laufen. Dasselbe Muster zeigt sich bei Webflow, bei HubSpot, bei handgebauten React-Projekten. Daran sollte man denken, bevor jemand eine Migration als Lösung vorschlägt.

## Was tatsächlich gesperrt ist, Stand 2026

Die Listen, die im englischsprachigen Netz kursieren, stammen überwiegend aus den Jahren 2019 bis 2023 und werden seither voneinander abgeschrieben. Mehrere Einträge haben sich verändert. Das ist der aktuelle Stand, gemessen aus Festlandchina.

| Abhängigkeit | Status aus Festlandchina | Folge |
|---|---|---|
| Google Hosted Libraries (ajax.googleapis.com) | Vollständig gesperrt | Das Rendering hält an. Es kommt kein Byte zurück |
| Google reCAPTCHA | Vollständig gesperrt | Formulare lassen sich nicht absenden |
| Google Analytics | Vollständig gesperrt | Die Anfrage kommt nie an, die Daten fehlen |
| Google Maps JS API | Vollständig gesperrt | Der Kartenbereich bleibt leer |
| Eingebettete YouTube- und Vimeo-Inhalte | Vollständig gesperrt | Player und oEmbed-Aufruf scheitern beide |
| Gravatar | Gesperrt | Bremst die Kommentare und das ganze Backend |
| Google Fonts (fonts.googleapis.com, fonts.gstatic.com) | Hängt vom Messpunkt ab | Antwortet aus einem Rechenzentrum auf dem Festland, schweigt an einer Privatleitung in Peking |
| Google Tag Manager | Hängt vom Messpunkt ab | Dieselbe Spaltung wie bei den Schriften. Das Signal an google-analytics.com scheitert in beiden Fällen |
| wordpress.org und Update-Server | Erreichbar, gedrosselt | HTTP 429 bei Core- und Plugin-Updates |
| cdnjs, unpkg | Erreichbar, langsam | Beide kommen durch. Von einer Privatleitung nie getestet |
| cdn.jsdelivr.net | Erreichbar, langsam | Median 660 ms aus einem Rechenzentrum, kommt auch an einer Privatleitung durch |
| Stripe- und PayPal-Skripte | Erreichbar | Die Hürde sind die Lizenzen, nicht die Firewall |

Das größere Bild jenseits von WordPress zeichnet unser Leitfaden dazu, [was die Great Firewall blockiert](/de/ressourcen/china-web-leitfaden/great-firewall-china/): DNS-Manipulation und Paketfilterung, die unter alldem liegen.

## Eine einzige Codezeile richtet den größten Schaden an

Lädt ein Theme jQuery von den Google Hosted Libraries, und Tausende gekaufter Themes tun das noch immer, bleibt die Seite stehen.

Dieses Script-Tag blockiert das Rendering. Der Browser malt nichts, solange es nicht aufgelöst ist, und aus Festlandchina löst es sich nie auf. In wiederholten Messungen von einer Alibaba-Cloud-Instanz in Zhangjiakou kam auf Anfragen an ajax.googleapis.com in keinem einzigen Durchlauf ein Byte zurück, bis wir den Test nach sechzig Sekunden abgebrochen haben.

Der Besucher sieht Weiß, wartet vier oder fünf Sekunden und geht. Die Analyse würde nichts erfassen, falls die Analyse denn funktionierte. Das ist der häufigste Grund, warum eine ausländische Website als in China gesperrt abgestempelt wird, obwohl davon keine Rede sein kann.

Dieses eine Tag zu korrigieren dauert tatsächlich zehn Minuten: jQuery lokal ausliefern oder aus der Warteschlange nehmen, wenn das Theme ohne auskommt. Sämtliche externen Abhängigkeiten einer gewöhnlichen Unternehmenswebsite zu räumen, kostet eher ein bis zwei Entwicklertage. Bei einem geerbten Page-Builder-Theme mit neunzig Plugins rechnen Sie mit einer Woche und darauf, mehr zu löschen als zu ersetzen.

## Der Google-Fonts-Eintrag, bei dem die meisten Ratgeber danebenliegen

Der verdient einen eigenen Abschnitt, weil das übliche Wissen veraltet ist und ein guter Teil der Agenturprospekte es weiterhin wiederholt.

Über Google Fonts in China kursieren zwei Sätze: Der Dienst sei gesperrt, und er sei es nicht. Dasselbe Messpaar widerlegt beide Sätze. Im Abstand von zwei Tagen beantwortete das Schriften-CDN aus einem Rechenzentrum auf dem Festland jede Anfrage und über eine Privatleitung in Peking keine einzige.

> Am 28. August 2026 aus einer Alibaba-Cloud-Instanz (阿里云) in cn-zhangjiakou: fonts.googleapis.com beantwortete 72 von 72 Anfragen, medianes erstes Byte 111 ms, fonts.gstatic.com 72 von 72 bei 102 ms. Am 30. August 2026 über eine Privatleitung von China Mobile (中国移动) in Peking: fonts.googleapis.com wurde 54-mal angefragt und antwortete nie, fonts.gstatic.com sechsmal und ebenfalls nie.
>
> Quelle: 21YunBox, *A Day of Third-Party Requests From Inside China*, 28. August 2026, aktualisiert am 30. August 2026

Ehrlich ist nur die bedingte Antwort. Google Fonts löst aus Rechenzentren auf dem Festland auf und bleibt an Privatanschlüssen häufig stumm. Was Ihr Besucher bekommt, hängt am Netz, in dem er sitzt.

Den Mechanismus kennen wir nicht. Die Sonde, aus der diese Zahlen stammen, erklärt ihn ebenso wenig, und einen zu erfinden kommt nicht infrage. Messbar ist die Form: derselbe Host, zwei Tage Abstand, entgegengesetzte Ergebnisse, je nachdem, auf welcher Seite des Festlandnetzes man sitzt.

Darin liegt das Argument für eigenes Hosting. Eine Schriftdatei, die Sie selbst ausliefern, streicht eine Abhängigkeit, deren Antwort mit dem Netz des Besuchers wechselt; welche Antwort für wen gilt, müssen Sie dann nicht mehr herausfinden.

fonts.google.com, die Oberfläche, in der Ihre Gestalter Schriften aussuchen, lädt von keinem der beiden Messpunkte. Ein Problem der Gestalter also; Ihre Nutzer kommen dort nie hin.

Wir hosten Schriften ohnehin bei jedem Projekt lokal. Teils aus dem eben genannten Grund, vor allem aber, weil es eine Sache weniger ist, die man nachtesten muss.

## wordpress.org antwortet. Gedrosselt wird trotzdem

Das Plugin-Verzeichnis, das Theme-Verzeichnis und die Update-Server für den Core antworten alle aus Festlandchina. Sie geben aber gegenüber Festland-IP-Bereichen so oft ein HTTP 429 zurück, dass eine Website wochenlang ohne Sicherheitspatch dastehen kann.

Das gilt mindestens seit Oktober 2019, und deshalb ist ein ganzes Ökosystem inländischer Spiegelserver entstanden. Das sichtbarste Stück ist das Projekt WP-China-Yes, das Aufrufe für Updates sowie für Plugin- und Theme-Installationen auf Festland-Spiegel umleitet.

Eine Website in Werkseinstellung sagt Ihnen nicht, dass sie sich nicht mehr aktualisiert. Sie fällt still zurück, und das ist bei WordPress ein Sicherheitsproblem und keine Unannehmlichkeit. Jemand muss die Update-Seite öffnen und nachsehen.

## WordPress.com ist eine andere Frage mit einer anderen Antwort

Selbst gehostetes WordPress, die Software von wordpress.org, ist unproblematisch.

WordPress.com, der gehostete Dienst von Automattic, ist ebenfalls nicht pauschal gesperrt, auch wenn nahezu jeder Ratgeber das behauptet. Die Hauptdomain löst sich häufig auf. Gesperrt ist ein großer Teil dessen, was darunter liegt, darunter die chinesischsprachigen Angebote und sehr viele einzelne Nutzerblogs.

Für ein Unternehmen bleibt die Unterscheidung theoretisch, denn dahinter wartet eine härtere Einschränkung. Eine ICP-Registrierung (备案) lässt sich für eine Domain, deren Hosting Sie nicht kontrollieren, nicht abschließen, und ohne Registrierung dürfen Sie von einem Festlandserver aus nicht legal ausliefern. Eine WordPress.com-Website lässt sich nicht rechtskonform aufstellen, ob sie heute lädt oder nicht. Unser [Leitfaden zur ICP-Registrierung](/de/ressourcen/china-web-leitfaden/icp-lizenz-auslaendische-unternehmen/) beschreibt, was der Papierkram wirklich verlangt.

## Was das für Ihr Projekt bedeutet

Der praktische Schluss ist unspektakulär. Die Plattform zu wechseln, um einem Problem zu entkommen, das Sie nicht diagnostiziert haben, ist ein teurer Weg, es zu behalten, denn die Abhängigkeiten ziehen mit um.

Eine WordPress-Website funktioniert in China, wenn vier Dinge stimmen:

- Die externen Abhängigkeiten sind entfernt oder ersetzt
- Die Auslieferung erfolgt vom Festland aus, oder aus Hongkong, solange die Registrierung läuft
- Die ICP-Registrierung liegt vor, was drei bis sechs Wochen dauert und eine Festlandgesellschaft voraussetzt
- Die Seiten sind so gebaut, dass Baiduspider sie crawlen kann, und das ist eine andere Disziplin als sie schnell zu machen

Nichts davon ist exotisch. Alles davon ist Arbeit, die sich jemand hinsetzen und machen muss, und ein auf einem Marktplatz gekauftes Theme hat nichts davon erledigt. Wenn Sie eine Agentur dafür in Betracht ziehen, haben wir eine [Prüfliste dafür geschrieben](/de/ressourcen/china-web-leitfaden/wordpress-agentur-china-pruefen/).

## Häufige Fragen

**Kann ich per VPN testen, ob meine Website in China funktioniert?**

Nicht sinnvoll. Ein VPN aus dem Ausland führt Sie weiterhin über Ihr eigenes Netz und Ihren eigenen Resolver, Sie testen also Ihr VPN und nicht die Firewall. Messen Sie von einem Punkt auf dem Festland aus, oder nehmen Sie ein Werkzeug, das genau das tut. Das ist der häufigste Grund, warum ein Team seine Website für in Ordnung hält, obwohl sie es nicht ist.

**Löst ein globales CDN das Problem?**

Es hilft bei der Entfernung und ändert nichts an gesperrten Hosts. Das Standardnetz von Cloudflare bedient Festlandbesucher aus Hongkong, Japan oder von der US-Westküste, die Grenze wird also bei jeder Anfrage weiterhin überquert. Das Netz innerhalb Chinas ist ein Enterprise-Produkt, das gemeinsam mit JD Cloud betrieben wird und pro Domain eine gültige ICP-Registrierung verlangt. Damit sind Sie wieder beim Papierkram.

**Brauche ich eine ICP-Registrierung oder eine ICP-Lizenz?**

Die Registrierung (备案) deckt eine reine Informationswebsite ab und dauert etwa drei bis sechs Wochen, sobald eine Festlandgesellschaft existiert. Die kommerzielle Lizenz (ICP许可证) wird fällig, sobald die Website selbst Umsatz erzielt, und dafür sind realistisch zwölf bis achtzehn Wochen anzusetzen.

**Ist Astro für China die bessere Wahl als WordPress?**

Manchmal. Ein statischer Build entfernt eine ganze Klasse von Laufzeitabhängigkeiten und lädt hinter der Firewall schneller. Er nimmt einem Marketingteam aber auch die Redaktionsoberfläche, die es erwartet, und dieser Handel wiegt meist schwerer als die Millisekunden. Die ehrliche Antwort hängt davon ab, wer die Website pflegt und wie oft.

**Wie schnell sollte eine Website aus Shanghai laden?**

Unter zwei Sekunden ist auf Festland-Hosting erreichbar, sobald die Abhängigkeiten geräumt sind. Eine kürzliche Migration ging von 23,4 Sekunden auf einem europäischen Origin auf 1,2 Sekunden herunter, und rund die Hälfte davon kam aus dem Löschen externer Aufrufe, nicht aus dem Serverumzug. Unser Leitfaden zum [Hosting einer Website in China](/de/ressourcen/china-web-leitfaden/website-in-china-hosten/) behandelt die Origin-Seite.
