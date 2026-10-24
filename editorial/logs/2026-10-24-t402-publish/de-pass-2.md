---
title: "Latenz in China: Warum Messergebnisse abweichen"
subtitle: "Cloud und Privatanschluss können für dieselbe Ressource unterschiedliche Ergebnisse liefern. Ein Vergleich braucht Angaben zu Netz, Methode und Datum."
summary: "Warum Latenztests in China abweichen: datierte 21YunBox-Befunde aus Cloud und Privatanschluss, mit Anfragezahlen und Grenzen der Messung."
visual: "/images/guides/china-latency-vantage-point-study.webp"
visualAlt: "In einer Pekinger Wohnung vergleicht ein Entwickler Anfrageprotokolle im Browser auf seinem Laptop am Esstisch."
order: 50
published: true
publishedAt: "2026-10-24"
updatedAt: "2026-10-24"
reviewBy: "2026-11-26"
category: Technology
author: cyril-drouin
---

Methode: Diese Studie vergleicht die von 21YunBox veröffentlichten Beobachtungen zu fünf Ressourcen. Sie stammen von Alibaba Cloud (阿里云) in Zhangjiakou am 28. August 2026 und einem privaten Breitbandanschluss von China Mobile (中国移动) in Peking am 30. August. Am Privatanschluss blieben vier Ressourcen ohne Antwort, in der Cloud eine. Netz, Datum und Methode unterscheiden sich. Welche dieser Änderungen den Unterschied verursacht hat, lässt sich daraus nicht ermitteln.

Quellen geprüft am 24. Oktober 2026. TTFB bezeichnet die Zeit bis zum ersten Byte. Die Antwortzahlen erfassen Ressourcenantworten; sie belegen keine abgeschlossene Besucheraktion. Die genannten Daten gehören zu den Messungen. Eine erneute Quellenprüfung macht daraus keine Tests vom Oktober.

| Host-ID | Ressource | Cloud-Antworten; medianer TTFB | Antworten am Privatanschluss; medianer TTFB | Einordnung des Vergleichs | Testdaten Cloud / Privatanschluss |
|---|---|---|---|---|---|
| host-google-fonts-css | fonts.googleapis.com | 72 von 72; 111 ms | 0 von 54; nicht verfügbar | Abweichung je nach Messpunkt | 28. / 30. August 2026 |
| host-google-fonts-files | fonts.gstatic.com | 72 von 72; 102 ms | 0 von 6; nicht verfügbar | Abweichung je nach Messpunkt | 28. / 30. August 2026 |
| host-google-tag-manager | www.googletagmanager.com | 72 von 72; 118 ms | 0 von 112; nicht verfügbar | Abweichung je nach Messpunkt | 28. / 30. August 2026 |
| host-recaptcha | www.google.com/recaptcha in der Cloud; www.google.com am Privatanschluss | 0 von 72; nicht verfügbar | 0 von 18; nicht verfügbar | Blockiert: keine Antworten in diesen Stichproben | 28. / 30. August 2026 |
| host-jsdelivr | cdn.jsdelivr.net | 72 von 72; 660 ms | 36 von 36; nicht verfügbar | Langsam in der Cloud; am Privatanschluss erreichbar | 28. / 30. August 2026 |

> Die Antwortzahlen und Cloud-Mediane stammen aus direkten Anfragen von 21YunBox auf Alibaba Cloud cn-zhangjiakou am 28. August 2026 sowie aus den Beobachtungen am privaten China-Mobile-Anschluss in Peking am 30. August. Vier Ressourcen blieben zu Hause ohne Antwort, eine in der Cloud. Zeitwerte für den Privatanschluss wurden nicht veröffentlicht.
> Quelle: 21YunBox, A Chinese Cloud Probe Is Not a Chinese Visitor: The Same Hosts, Opposite Answers, 28. August 2026, aktualisiert am 30. August 2026.
> https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

## Methode und Grenzen

Cloud bezeichnet Alibaba Cloud (阿里云) cn-zhangjiakou, Privatanschluss die Festnetz-Breitbandverbindung von China Mobile (中国移动) in Peking. „Blockiert“ beschreibt hier das beobachtete Ausbleiben einer Antwort, ohne dessen Ursache zu bestimmen. „Langsam“ bezieht sich auf die veröffentlichte Verzögerung von jsDelivr in der Cloud. Ein allgemeiner Zeitschwellenwert wird auf diese unterschiedlichen Methoden nicht angewendet. „Nicht verfügbar“ bedeutet niemals null Millisekunden.

ChinaWebFoundry hat diesen Vergleich aus veröffentlichten Belegen Dritter zusammengestellt. Wir haben keine der beiden Sonden betrieben. Die Ergebnisse gemeinsamer Ressourcen lassen sich vergleichen, wenn die Zahlen ihre jeweiligen Erhebungsbedingungen behalten.

Die Cloud-Studie fragte ausgewählte Ressourcen wiederholt direkt ab. Am Privatanschluss lud ein Browser Websites und zeichnete deren externe Anfragen auf. Dadurch entsteht eine andere Stichprobe: Ein Host erscheint nur, wenn eine der ausgewählten Seiten ihn aufruft. Manche Hosts werden dabei viel häufiger erfasst als andere.

> Der Cloud-Ressourcentest verwendete ein Zeitlimit von 30 Sekunden und 72 Anfragen pro Ressource. Die Erhebung am Privatanschluss in Peking umfasste 88 Websites und 264 Seitenladevorgänge mit jeweils höchstens 60 Sekunden Laufzeit. Die Anfragezahl unterschied sich je nach Host.
> Quelle: 21YunBox, 28. und 30. August 2026.
> https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

Das längere Zeitlimit für eine ganze Seite ersetzt nicht das Zeitlimit für eine einzelne Ressourcenanfrage. Ein spät ausgelöster Aufruf hat ein anderes Beobachtungsfenster als ein einzeln gestarteter. Halten Sie neben der Anzahl fest, worauf sich das Zeitlimit bezieht, auch in einer Präsentation.

China Mobile (中国移动) ist der Name des Anbieters. Gemessen wurde an einem privaten Festnetzanschluss. Trotz des Namens liefert die Studie keinen Befund für ein Telefon im Mobilfunknetz.

Auch Ort und Zeitpunkt lassen sich als Einflussgrößen nicht voneinander trennen. Die Beobachtungen stammen von unterschiedlichen Tagen und beruhen auf verschiedenen Methoden. Um die Abweichung kontrolliert zu erklären, wären Belege nötig, die diese Variablen konstant halten. Die Abweichung lässt sich beschreiben, ohne eine Ursache zu behaupten, die der Versuch nicht nachgewiesen hat.

Lesen Sie die Tabelle als Aufzeichnung dieser Beobachtungen. Sie liefert keine Ober- oder Untergrenze für die Ladezeit eines künftigen Besuchers. Ein Cloud-Ergebnis kann auf eine prüfenswerte Anfrage hinweisen. Ein Umrechnungsfaktor zum Ergebnis eines Privatanschlusses existiert nicht.

## Warum Latenztests in China voneinander abweichen

Prüfen Sie zunächst die getestete Adresse. Hinter einem Produktnamen können die öffentliche Website, ein Skriptserver oder eine nach dem Absenden des Formulars aufgerufene API stehen. Berichte über unterschiedliche Adressen können miteinander vereinbar sein, auch wenn ihre Urteile im Vergleichsblatt gegensätzlich wirken.

Auch der Anfragepfad zählt. Die reCAPTCHA-Zeile erhält eine Einschränkung der Quelle: Die Cloud-Ressource hat einen Pfad, während die Privatanfragen nach Host zusammengefasst sind. Für die einzelnen reCAPTCHA-Endpunkte lässt sich daraus kein gesonderter Befund am Privatanschluss ableiten. Wer über die serverseitige Verifizierung entscheidet, braucht Belege für genau diesen Aufruf.

Klären Sie, was bei der Beobachtung als Erfolg galt. Eine empfangene Antwort, ein vollständig übertragenes Dokument und eine fertig geladene Browserseite messen verschiedene Vorgänge. Keiner davon erfasst automatisch, ob ein Formular erfolgreich abgeschickt wurde. Legen Sie die Aufgabe fest, bevor Sie die Kennzahl für die Abnahme der Website wählen.

Bei einer Marketingseite könnte die Abnahme lesbare Inhalte und einen nutzbaren Kontaktweg verlangen. Ein Kundenkonto braucht eine andere Prüfung, etwa Anmeldung und Speichern einer Änderung. Solche Vorgaben kann ein Websitebetreiber festlegen. Die hier verglichenen Erhebungen haben sie nicht gemessen.

Führen Sie fehlgeschlagene Anfragen auch dann auf, wenn Sie eine Zeit nennen.

Ein Median aus erfolgreichen Antworten beschreibt diese Gruppe. Wer unbeantwortete Anfragen aus der Tabelle entfernt, kann beruhigende Zeitwerte zeigen und dabei Besucher ausblenden, die gar nichts erhalten haben. Ein leeres Zeitfeld neben null Antworten ist ebenfalls eine brauchbare Information.

Liegt nur ein Screenshot eines Geschwindigkeitsscores vor, verlangen Sie die getestete Adresse und das Anfrageprotokoll, bevor Sie das Hosting ändern. Der Screenshot kann korrekt sein und dennoch eine andere Frage beantworten als die Ihres China-Teams.

## Das erste Byte lässt einen Großteil des Besuchs offen

TTFB endet mit dem Beginn der Antwort. Der Rest muss erst noch eintreffen. Ohne den Endpunkt der Messung zu kennen, übersehen Sie womöglich genau den Abschnitt, den Sie beurteilen wollten.

> TTFB misst die Zeit bis zum ersten Antwortbyte. DNS-Auflösung und Verbindungsaufbau vor Beginn der Antwort können darin enthalten sein.
> Quelle: MDN Web Docs, Time to First Byte, geändert am 18. Juli 2025.
> https://developer.mozilla.org/en-US/docs/Glossary/Time_to_first_byte

Trennen Sie das erste Byte der Seite von dem einer Schrift oder eines Skripts. Es handelt sich um verschiedene Anfragen. Der Server kann das Dokument beantworten, während der Browser auf eine externe Ressource wartet. Die Tabelle oben enthält Ressourcenbeobachtungen und liefert deshalb keine vollständige Seitenladezeit für Ihre Website.

| Beleg im Bericht | Was er nachweist | Was für eine Entscheidung zur Website noch fehlt |
|---|---|---|
| Erstes Antwortbyte | Die Anfrage hat eine erste Antwort erhalten | Ob Übertragung und relevante Nutzeraufgabe abgeschlossen wurden |
| Antwortzahl einer Ressource | Wie oft die Ressource in der Stichprobe antwortete | Welche Seitenfunktionen sie benötigen |
| Abgeschlossener Seitenladevorgang | Die genannte Abschlussbedingung war erfüllt | Ob die beabsichtigte Besucheraktion funktionierte |
| Test einer Anbieterwebsite | Das Ergebnis für diese Website | Belege für die tatsächlich eingebundene Datei oder den Kundenendpunkt |
| Erreichbarkeitsbefund für eine URL | Das Ergebnis der Quelle für diese URL und dieses Datum | Ein passendes Netz sowie vergleichbare Zeit- und Aufgabenkriterien, sofern relevant |

Das Hostingteam kann eine Serverantwort protokolliert haben, während das Marketing einen gescheiterten Kontaktversuch beobachtet hat. Ordnen Sie jede Beobachtung ihrer Anfrage zu, bevor Sie einen Widerspruch feststellen.

Fragen Sie nach, welche Vorgänge das Werkzeug erfasst hat und wann die Aufzeichnung endete. Ein Bericht sollte seine Abschlussbedingung so deutlich nennen, dass ein anderer Leser den erfolgreichen Test nachvollziehen kann.

Dasselbe gilt für die Marketingwebsite eines Anbieters. Ihr erfolgreicher Abruf bestätigt nicht die Funktion eines Widgets auf Ihrer Domain. Die Einbindung kann andere Hosts, eine andere Version oder einen anderen Pfad verwenden. Lassen Sie den Befund bei der Anbieteradresse, bis eine Quelle die tatsächlich genutzte Abhängigkeit prüft.

## URL-Befund und Privatanschluss gemeinsam lesen

GreatFire liefert eine andere Art von Beleg. Das Ergebnis für den Stylesheet-Host von Google Fonts kann neben dem Ausfall am Privatanschluss stehen, ohne dass eine der Quellen stillschweigend aussortiert wird.

> Laut GreatFire stellten alle vier jüngsten aussagekräftigen Tests von https://fonts.googleapis.com eine normale Verbindung her. Zuletzt getestet wurde am 15. Oktober 2026. Die zitierte Seite nennt keinen privaten Zugangsanbieter und keine Latenz.
> Quelle: GreatFire, zuletzt getestet am 15. Oktober 2026, geprüft am 24. Oktober 2026.
> https://en.greatfire.org/https/fonts.googleapis.com

Die Tests stammen von unterschiedlichen Tagen. Der GreatFire-Eintrag bildet den Versuch am benannten Privatanschluss nicht nach. Er belegt keine spätere Erholung dieser Verbindung. Die ältere Privatbeobachtung zeigt ebenso wenig, wie sich jede Verbindung heute verhält.

Unser [Google-Fonts-Leitfaden](/de/ressourcen/china-web-leitfaden/google-fonts-china/) erläutert die Folgen für Seiten, die gehostete Stylesheets und Schriftdateien benötigen. Diese Studie ordnet die Belege jeweils der getesteten Ressource zu.

Nennen Sie bei einer internen Meldung über widersprüchliche Ergebnisse beide Quellen-URLs. Halten Sie die getestete Adresse und das Datum im Satz fest, auch wenn die empfangende Abteilung eine kürzere Antwort verlangt. Ein aus dem Zusammenhang gelöstes Urteil lässt sich schwerer berichtigen, sobald es in einer Beschaffungsunterlage steht.

Eine ältere Beobachtung kann noch immer einen Fehlerablauf erklären. Ihr Alter begrenzt die Aussage über heutige Verhältnisse. Deshalb hat dieser Bericht ein Prüfdatum und behält die Messdaten auch nach einer erneuten Quellenprüfung bei.

## Vor einer Quote die Stichprobe prüfen

Jeder Nenner am Privatanschluss zählt, wie oft der Host während der ausgewählten Seitenladevorgänge aufgerufen wurde. Er steht nicht für unabhängige Haushalte oder Menschen in anderen Städten. Wiederholte Anfragen belegen das Verhalten dieser Verbindung während der Erhebung, ohne die geografische Abdeckung zu erweitern.

Stylesheet-Host und Schriftdatei-Host haben unterschiedliche Nenner. Sie bleiben getrennt, obwohl beide zu Google Fonts gehören. Eine Zusammenfassung würde verdecken, welche Anfrage beobachtet wurde und welchen Schritt der Schriftauslieferung sie betrifft.

Auch das Addieren der Cloud- und Privatanschluss-Zahlen würde die Seite stärker gewichten, die mehr Anfragen gestellt hat. Die Quote würde von der Auswahl der Stichprobe abhängen. Wie viele Ihrer Kunden die Seite laden können, ließe sich daraus nicht ableiten.

Eine landesweite Aussage bräuchte Daten über die Zielpopulation und deren Auswahl. Dieser Bericht hat keinen solchen Datensatz. Aus der Pekinger Leitung leiten wir keine Ergebnisse für andere Anbieter, Städte oder Zugangsnetze ab. Unternehmensnetze und Mobilfunkzugänge liegen ebenfalls außerhalb des Umfangs.

Verwenden Sie „nicht verfügbar“ für unveröffentlichte Zeitwerte und „ungetestet“, wenn es keinen verwertbaren datierten Test einer Abhängigkeit gibt. Blieb eine Anfrage unbeantwortet, halten Sie den beobachteten Ausfall samt Stichprobe fest. Diese Angaben beschreiben unterschiedliche Lücken und sollten nicht in einem einzigen leeren Tabellenfeld verschwinden.

Der [China-Abhängigkeitsindex vom Oktober](/de/ressourcen/china-web-leitfaden/china-abhaengigkeitsindex-2026-10/) enthält das größere Belegregister und die rohe Host-Liste. js.stripe.com und embed.typeform.com bleiben darin ungetestet. Ihr Vorkommen auf einer Seite ist Anlass, die Abhängigkeit zu prüfen, ohne ihr eine unbelegte Erreichbarkeit zuzuschreiben.

## Wenn eine Quelle ihr Urteil ändert

Ein Vergleichsblatt braucht genügend Angaben, um auch nach einer Korrektur verständlich zu bleiben. Bewahren Sie die genaue Quellen-URL bei der übernommenen Aussage auf. Notieren Sie daneben das Abrufdatum, getrennt vom Testdatum der Quelle. Das ist besonders relevant, wenn ein neuer Artikel eine alte Beobachtung zitiert.

Die [Rohdaten des Oktoberregisters](/data/china-dependency-index-2026-10.json) stellen die größere Abhängigkeitsliste zum Download bereit. Über die Host-IDs der Tabelle finden Sie die entsprechenden Einträge; im JSON fehlt das Präfix host-. Die Datei enthält Belege über diese gepaarte Teilmenge hinaus. Ihre Gesamtzahl darf deshalb nicht als Stichprobengröße des Cloud-Privatanschluss-Vergleichs verwendet werden.

Meldet eine spätere Quelle eine erfolgreiche Antwort für eine zuvor unbeantwortete Adresse, vergleichen Sie Ziel und Methode, bevor Sie eine Erholung feststellen. Eine HTTPS-Anfrage an das Stammverzeichnis und eine eingebundene Skriptanfrage können denselben Host nutzen und dennoch Verschiedenes prüfen. Auch kann ein neueres Veröffentlichungsdatum zu einem älteren Test gehören. Beide Unterschiede gehören in den Datensatz.

Auch wenn eine Quelle eine Zahl zurückzieht, ist diese Unterscheidung nötig. Ihre Entfernung verringert, was der Bericht belegen kann. Sie zeigt keine Verbesserung oder Verschlechterung des Netzes. Halten Sie den Korrekturgrund bei der Quelle fest, damit der nächste Leser die geänderte Zelle versteht.

Bei einer Beschaffungsentscheidung sollte die Frage feststehen, bevor Ergebnisse nebeneinander eingetragen werden. Ein Test der Anbieterhomepage sollte nur mit ausdrücklichem Hinweis auf den Unterschied in derselben Spalte stehen wie ein Test des Kunden-Checkouts. Ist ein Vergleich nicht möglich, nennen Sie den fehlenden Beleg in der Zelle. Das hilft mehr als eine Punktzahl aus unterschiedlichen Aufgaben.

Bewahren Sie nach einer Veröffentlichung die Seitenversion und die Anfrageliste zur gemeldeten Störung auf. Entfernt ein Update eine Abhängigkeit, gehört die alte Beobachtung weiterhin zur vorherigen Seite. Sie kann die Änderung erklären, ohne zu behaupten, der entfernte Host sei nun erreichbar.

„Ungetestet“ bezeichnet eine Lücke in den datierten Belegen des Registers. Anderswo können Tests vorliegen, und eine spätere Quelle kann die Lücke schließen. Bis dahin fehlt ein belegtes Ergebnis für die Cloud- oder Privatanschluss-Spalte.

## Aus einem strittigen Ergebnis eine prüfbare Entscheidung machen

Gehen Sie von der Seite und der Besucheraktion aus, auf die sich die Beschwerde bezieht. Speichern Sie die genaue URL und beschreiben Sie, was der Besucher nicht erledigen konnte. Eine pauschale Klage über eine langsame Website lässt sich schwer einer Ressourcenanfrage zuordnen. Ein Kontaktformular ohne Bestätigungsseite gibt der Prüfung einen klaren Endpunkt.

Bitten Sie den Verfasser des Berichts, die Bedingungen festzuhalten: Netz und Ort, Datum, Anfrageziel und Abbruchregel. Fehlt eine Angabe, benennen Sie den dadurch unmöglichen Vergleich. Ersetzen Sie sie nicht durch eine Annahme über einen typischen chinesischen Besucher.

Trennen Sie in vorhandenen Protokollen das Dokument von seinen externen Aufrufen. Markieren Sie, welche für die untersuchte Aktion notwendig sind. Ein ausgefallenes optionales Pixel und eine ausgefallene Formularabhängigkeit können ähnliche Netzwerkfehler erzeugen und dennoch unterschiedliche Entscheidungen verlangen.

Wählen Sie eine Änderung, die zu den Belegen passt. Benötigt eine wesentliche Aktion eine externe Ressource, sollte die Prüfung deren mögliche Ausfälle und die Folgen für den Besucher berücksichtigen. Versprechen Sie nicht, dass ein Serverumzug sämtliche externen Anfragen repariert. Der Standort des Dokuments beschreibt nicht die gesamte Anfrageliste des Browsers.

Begrenzen Sie die vorgeschlagene Änderung so, dass sie sich beurteilen lässt. Dokumentieren Sie die betroffene Abhängigkeit, die zu erhaltende Funktion und die Belege für die Freigabe. So kann ein anderes Team die Entscheidung nachvollziehen, auch wenn die verfügbaren Untersuchungen nicht jede Netzfrage klären.

Unsere Leistung [Strategie und Audit](/de/leistungen/strategie-audit/) kann diese Prüfung an den tatsächlichen externen Anfragen der Website ausrichten. Legen Sie den strittigen Bericht zusammen mit der betroffenen Seite und der benötigten Besucheraktion vor. Die Entscheidung sollte Belege enthalten, die ein anderes Team prüfen kann.
