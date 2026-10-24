---
title: "China-Abhängigkeitsindex, Oktober 2026"
subtitle: "55 Web-Abhängigkeiten mit datierten Belegen Dritter, Ergebnisse aus Cloud und Privatanschluss getrennt, wo die Quellen beides veröffentlichen."
summary: "Register von 55 Web-Abhängigkeiten in China auf Basis datierter GreatFire-Befunde und 21YunBox-Messungen, fehlende Tests und Grenzen inklusive."
visual: "/images/guides/china-dependency-index-2026-10.webp"
order: 45
published: true
publishedAt: "2026-10-16"
updatedAt: "2026-10-24"
reviewBy: "2026-11-15"
category: "Technology"
author: "cyril-drouin"
---

Methode: Dieser Index stützt sich auf veröffentlichte Belege Dritter. Von den fünf Ressourcen, die 21YunBox verglichen hat, blieben am 30. August 2026 an einem Festnetzanschluss von China Mobile (中国移动) in Peking vier ohne Antwort, von Alibaba Cloud (阿里云) in Zhangjiakou aus am 28. August eine. Das vollständige Register umfasst 55 Abhängigkeiten, auch solche ohne jeden Test. Die Ausfallzahlen beziehen sich nur auf diese gepaarte Teilmenge.

Stand der Ausgabe: 16. Oktober 2026. Zitierte Tests: 12. März bis 11. Oktober 2026. Oktober ist der Monat der Zusammenstellung; jede Zeile behält das Testdatum ihrer Quelle.

| Beleg | Was das Ergebnis abdeckt | Was es nicht belegen kann |
|---|---|---|
| URL-Befund von GreatFire | Die Erreichbarkeit der genannten HTTPS-URL an den Testtagen | Das Erlebnis an einem bestimmten Privatanschluss, die Latenz oder eine abgeschlossene Transaktion |
| Wiederholte Anfragen von 21YunBox | Direkte Anfragen an die Ressource aus Zhangjiakou | Den vollständigen Abruf über einen Endkundenanschluss |
| Beobachtungen von 21YunBox am Privatanschluss | Anfragen, die beim echten Laden von Websites in Peking anfielen | Sämtliche Endpunkte desselben Produkts |
| Ladevorgänge von Anbieterseiten durch 21YunBox | Die genannte Website oder Produktseite des Anbieters | Die Installation eines Kunden oder ein eingebettetes Widget |
| Ungetestet | Kein datierter Beleg in diesem Register | Einen positiven oder negativen Befund zur Kompatibilität |

> Von den fünf Ressourcen der gepaarten Studie von 21YunBox blieb reCAPTCHA am 28. August 2026 von Alibaba Cloud (阿里云) cn-zhangjiakou aus ohne Antwort. Am Privatanschluss von China Mobile (中国移动) in Peking blieben am 30. August auch die beiden Hosts von Google Fonts und der Google Tag Manager stumm. jsDelivr antwortete an beiden Messpunkten.
> Quelle: 21YunBox, 28. und 30. August 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

## Wie die Belege zusammengetragen wurden

ChinaWebFoundry hat dieses Register aus Daten von GreatFire und 21YunBox zusammengestellt. Eigene Messsonden auf dem Festland haben wir nicht betrieben. Ein erneuter Blick auf die Quellseiten zeigt, ob ein Zitat die Aussage noch trägt; eine neue Beobachtung aus China ist das nicht.

GreatFire meldet, ob eine bestimmte URL gesperrt, gestört oder erreichbar war. Die zitierten Seiten nennen weder eine Rechenzentrumsregion noch einen Endkundenanbieter; ihre Ergebnisse stehen deshalb für sich. Meldet diese Quelle eine erfolgreiche Verbindung, füllt das keine der Zeitspalten; sie sind benannten Messpunkten vorbehalten.

21YunBox hat Ressourcen und Websites mit unterschiedlichen Methoden untersucht. Der wiederholte Ressourcentest lief von Alibaba Cloud (阿里云) cn-zhangjiakou aus; die Anfragen verteilten sich über den gesamten Erhebungszeitraum, auch über den Abend. Die Endkundendaten lieferte der Breitbandanschluss eines Freiwilligen in Peking, der Kunde von China Mobile (中国移动) ist. Mobile ist hier nur der Name des Anbieters: Gemessen wurde an einem Festnetzanschluss zu Hause, nicht im Mobilfunknetz.

> 21YunBox fragte am 28. August 2026 zwölf Stunden lang alle zehn Minuten fünf Ressourcen ab, mit einem Timeout von 30 Sekunden. Die separate Messung an einem Pekinger Privatanschluss am 30. August umfasste 88 Websites und 264 Seitenaufrufe, bei einer Obergrenze von 60 Sekunden je Ladevorgang. Wie viele Anfragen an eine Abhängigkeit gingen, hing von der jeweiligen Website ab.
> Quelle: 21YunBox, August 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

Die Tabelle trennt Antworten einzelner Ressourcen von vollständig geladenen Seiten. Antwortet ein Prüfdienst, ist damit nicht gesagt, dass der Besucher die Prüfung bestanden hat. Antwortet ein Videohost, heißt das nicht, dass das Video bis zum Ende lief. Solche Fragen gehören in die Abnahmetests der Website.

Wix und AWS CloudFront erscheinen als Beobachtungen von Anbieterseiten. Bei CloudFront ist das Ziel ausdrücklich aws.amazon.com/cloudfront; die Pekinger Quelle spricht von einem privaten Breitbandanschluss, ohne den Netzbetreiber zu nennen. Die Wix-Quelle bezieht sich auf die Website des Anbieters und nennt keinen vollständigen Anfragepfad, mit dem sich der Test wiederholen ließe. Keine der beiden Beobachtungen misst sämtliche Kundenseiten auf diesen Plattformen.

Keine Quelle hat alle Zeilen demselben Experiment unterzogen. Eine Ausfallquote über das gesamte Register würde Ungleiches vermengen; eine Rangfolge der Kategorien oder ein landesweiter Durchschnitt lässt sich aus den Belegen nicht ableiten.

Ein fehlender Wert bleibt ein fehlender Wert.

## So lesen Sie den Index

Jede Zeile trägt eine feste Host-ID, unter der sie sich zitieren lässt. Die Spalte Ziel nennt den Host oder URL-Pfad, den die Quelle belegt. Nennt der Eintrag nur ein Produkt und keinen getesteten Endpunkt, steht dort Ziel nicht angegeben. Ungetestet heißt, dass dieses Register keinen verwertbaren datierten Beleg enthält; es heißt nicht, dass das Produkt nirgends je getestet wurde.

Cloud bezeichnet die Sonde von Alibaba Cloud (阿里云) in Zhangjiakou, Privatanschluss den Festnetzanschluss von China Mobile (中国移动) in Peking, mit Ausnahme der CloudFront-Produktseite, deren Netzbetreiber nicht genannt ist. TTFB ist die Zeit bis zum ersten Antwortbyte, als Median in Millisekunden. Nicht verfügbar bedeutet, dass der Herausgeber keine Zahl veröffentlicht hat. Wo keine Antwort kam, gibt es keinen Median.

Bei Wistia und dem Prüfdienst von Cloudflare ergeben sich die Werte am Privatanschluss aus der Gesamtzahl der Anfragen abzüglich der gemeldeten Fehlschläge. Sie erfassen Antworten während des Seitenladens. Einen Test, ob ein Video oder ein Captcha tatsächlich durchlief, hat die Quelle nicht veröffentlicht. Wer eine der beiden Zeilen zitiert, sollte diese Unterscheidung beibehalten.

| Bezeichnung im Index | Leseregel |
|---|---|
| Erreichbar | Die zitierte Quelle erhielt eine Verbindung oder schloss den genannten Ladevorgang ab |
| Langsam | Eine abgeschlossene Anfrage war in der zitierten Studie deutlich verzögert; ein methodenübergreifender Latenzschwellenwert wird nicht angewendet |
| Antwortet, hängt dann | Ein erstes Byte kam an, doch die angegebene Ladefrist lief ab |
| Schwankend | GreatFire meldet Störungen, oder die verfügbaren Beobachtungen weichen voneinander ab; die Belegnotiz sagt, welcher Fall vorliegt |
| Gesperrt | GreatFire meldet eine Sperre, oder die benannte Sonde erhielt in ihrer Stichprobe keine Antwort |
| Je nach Messpunkt verschieden | Die gepaarten Beobachtungen aus Cloud und Privatanschluss widersprechen sich |
| Ungetestet | Kein datiertes Ergebnis stützt in diesem Register einen Befund |

Die Kategorie gestört von GreatFire bleibt in den Belegnotizen erhalten. Ihre Störungsbefunde zeigen nicht, ob ein bestimmter Fehlschlag auf das DNS oder eine spätere Verbindungsphase zurückgeht. Ebenso wenig bescheinigt eine als erreichbar markierte Zeile die Lizenz eines Produkts, seinen Umgang mit Daten oder seinen Bezahlvorgang.

Da dies die erste Ausgabe ist, steht in jeder Zelle der Spalte Veränderung Ausgangswert. Eine spätere Ausgabe kann denselben Endpunkt mit derselben Methode vergleichen. Taucht ein älterer Test neu auf, wächst unsere Abdeckung; dass sich das Netz in diesem Monat verbessert hätte, belegt er nicht. Das gilt auch, wenn ein Herausgeber eine Zahl zurückzieht oder abgelehnte Verbindungen anders einordnet.

## Das vollständige Abhängigkeitsregister

Der [Rohdatensatz](/data/china-dependency-index-2026-10.json), auf Englisch, enthält dieselben Einträge und Quellendaten wie diese Tabelle. Die Kategoriegruppen sind nach beobachteter Fehlerart sortiert, innerhalb davon nach Host-ID. Die Belegnotizen weiter unten ordnen jeden datierten Befund seiner Quelle zu. Einträge ohne datiertes Ergebnis bleiben ungetestet.

Das Ziel einer Zeile steckt den Geltungsbereich des vorhandenen Belegs ab. Ein bloßer Hostname sagt nichts über den Pfad jeder Datei, die von ihm abgerufen wird. GreatFire hat womöglich eine HTTPS-Stamm-URL getestet, während eine Browserbeobachtung mehrere Pfade auf demselben Host erfasste. Die Belegnotiz hält diesen Unterschied fest, wo die Quellen auseinandergehen. Bevor Sie anhand einer Zeile eine bestimmte Datei ersetzen, sollten Sie die Originalquelle danebenlegen.

Bei einer Anbieterseite betrifft ein abgeschlossener Ladevorgang nur diese Seite. Die CloudFront-Zeile gehört deshalb in einen anderen Vergleich als die Distributions-URL eines Kunden. Für das Wix-Ergebnis gilt dieselbe Grenze: Es beschreibt die von 21YunBox beobachtete Website des Anbieters. Keine der beiden Zeilen liefert einen Befund für alle Websites, die mit dem Produkt gebaut wurden. Die Rohdatei enthält die Quell-URL, damit dieser Geltungsbereich auch außerhalb des Artikels sichtbar bleibt.

Geben Sie einen Befund an ein anderes Team weiter, nennen Sie neben dem Datum auch die Host-ID. Die ID bleibt gleich, auch wenn eine künftige Ausgabe die Spalte Zweck anders formuliert. Zieht ein Produkt auf einen anderen Host um, bleibt die alte Beobachtung beim alten Ziel; das neue Ziel wird gesondert erfasst. Wer beide Verläufe zusammenlegt, verdeckt genau die Veränderung, die er erklären will.

| Host-ID | Ziel | Zweck | Kategorie | TTFB Cloud (ms) | Antworten / Ladevorgänge, Cloud | TTFB Privatanschluss (ms) | Antworten / Ladevorgänge, Privatanschluss | Befund | Testdatum | Veränderung |
|---|---|---|---|---|---|---|---|---|---|---|
| host-google-analytics | www.google-analytics.com | Google Analytics | Webanalyse | Nicht verfügbar | Nicht verfügbar | Nicht verfügbar | Nicht verfügbar | gesperrt | 2026-07-24 | Ausgangswert |
| host-meta-pixel | connect.facebook.net | Meta-Pixel | Webanalyse | Nicht verfügbar | Nicht verfügbar | Nicht verfügbar | Nicht verfügbar | gesperrt | 2026-05-27 | Ausgangswert |
| host-google-tag-manager | www.googletagmanager.com | Google Tag Manager | Webanalyse | 118 | 72 von 72 | Nicht verfügbar | 0 von 112 | je nach Messpunkt verschieden | 2026-08-28, 2026-08-30 | Ausgangswert |
| host-hotjar | static.hotjar.com | Hotjar | Webanalyse | Nicht verfügbar | Nicht verfügbar | Nicht verfügbar | 0 von 6 | schwankend | 2026-08-30, 2026-09-30 | Ausgangswert |
| host-mixpanel-script | cdn.mxpnl.com | Mixpanel | Webanalyse | Nicht verfügbar | Nicht verfügbar | Nicht verfügbar | Nicht verfügbar | schwankend | 2026-09-06 | Ausgangswert |
| host-plausible | plausible.io | Plausible | Webanalyse | Nicht verfügbar | Nicht verfügbar | Nicht verfügbar | Nicht verfügbar | schwankend | 2026-08-20 | Ausgangswert |
| host-amplitude-events | api.amplitude.com | Amplitude, Ereignisse | Webanalyse | Nicht verfügbar | Nicht verfügbar | Nicht verfügbar | Nicht verfügbar | erreichbar | 2026-09-10 | Ausgangswert |
| host-amplitude-script | cdn.amplitude.com | Amplitude, Skript | Webanalyse | Nicht verfügbar | Nicht verfügbar | Nicht verfügbar | Nicht verfügbar | erreichbar | 2026-09-14 | Ausgangswert |
| host-linkedin-insight | snap.licdn.com | LinkedIn Insight Tag | Webanalyse | Nicht verfügbar | Nicht verfügbar | Nicht verfügbar | Nicht verfügbar | erreichbar | 2026-09-22 | Ausgangswert |
| host-microsoft-clarity | www.clarity.ms | Microsoft Clarity | Webanalyse | Nicht verfügbar | Nicht verfügbar | Nicht verfügbar | Nicht verfügbar | erreichbar | 2026-09-15 | Ausgangswert |
| host-mixpanel-events | api.mixpanel.com | Mixpanel | Webanalyse | Nicht verfügbar | Nicht verfügbar | Nicht verfügbar | Nicht verfügbar | erreichbar | 2026-09-19 | Ausgangswert |
| host-segment | api.segment.io | Segment | Webanalyse | Nicht verfügbar | Nicht verfügbar | Nicht verfügbar | Nicht verfügbar | erreichbar | 2026-09-15 | Ausgangswert |
| host-matomo | cdn.matomo.cloud | Matomo Cloud | Webanalyse | Nicht verfügbar | Nicht verfügbar | Nicht verfügbar | Nicht verfügbar | ungetestet | Kein datierter Test | Ausgangswert |
| host-google-libraries | ajax.googleapis.com | Google Hosted Libraries | Schriften und Skript-CDNs | Nicht verfügbar | Nicht verfügbar | Nicht verfügbar | Nicht verfügbar | gesperrt | 2026-08-22 | Ausgangswert |
| host-google-fonts-css | fonts.googleapis.com | Google Fonts, Stylesheets | Schriften und Skript-CDNs | 111 | 72 von 72 | Nicht verfügbar | 0 von 54 | je nach Messpunkt verschieden | 2026-08-28, 2026-08-30 | Ausgangswert |
| host-google-fonts-files | fonts.gstatic.com | Google Fonts, Schriftdateien | Schriften und Skript-CDNs | 102 | 72 von 72 | Nicht verfügbar | 0 von 6 | je nach Messpunkt verschieden | 2026-08-28, 2026-08-30 | Ausgangswert |
| host-adobe-fonts | use.typekit.net | Adobe Fonts | Schriften und Skript-CDNs | Nicht verfügbar | Nicht verfügbar | Nicht verfügbar | 0 von 11 | schwankend | 2026-08-30, 2026-09-22 | Ausgangswert |
| host-jsdelivr | cdn.jsdelivr.net | jsDelivr | Schriften und Skript-CDNs | 660 | 72 von 72 | Nicht verfügbar | 36 von 36 | langsam | 2026-08-28, 2026-08-30 | Ausgangswert |
| host-cdnjs | cdnjs.cloudflare.com | cdnjs | Schriften und Skript-CDNs | Nicht verfügbar | Nicht verfügbar | Nicht verfügbar | Nicht verfügbar | erreichbar | 2026-09-27 | Ausgangswert |
| host-unpkg | unpkg.com | unpkg | Schriften und Skript-CDNs | Nicht verfügbar | Nicht verfügbar | Nicht verfügbar | Nicht verfügbar | erreichbar | 2026-08-14 | Ausgangswert |
| host-mailchimp | cdn-images.mailchimp.com | Mailchimp | Formulare und Chat | Nicht verfügbar | Nicht verfügbar | Nicht verfügbar | Nicht verfügbar | gesperrt | 2026-09-10 | Ausgangswert |
| host-recaptcha | www.google.com/recaptcha | Google reCAPTCHA | Formulare und Chat | Nicht verfügbar | 0 von 72 | Nicht verfügbar | 0 von 18 | gesperrt | 2026-08-28, 2026-08-30 | Ausgangswert |
| host-cloudflare-turnstile | challenges.cloudflare.com | Cloudflare Turnstile | Formulare und Chat | Nicht verfügbar | Nicht verfügbar | Nicht verfügbar | 9 von 12 | schwankend | 2026-08-30, 2026-10-11 | Ausgangswert |
| host-calendly | calendly.com | Calendly | Formulare und Chat | Nicht verfügbar | Nicht verfügbar | Nicht verfügbar | Nicht verfügbar | erreichbar | 2026-10-03 | Ausgangswert |
| host-hcaptcha | api2.hcaptcha.com | hCaptcha | Formulare und Chat | Nicht verfügbar | Nicht verfügbar | Nicht verfügbar | Nicht verfügbar | erreichbar | 2026-09-14 | Ausgangswert |
| host-intercom | widget.intercom.io | Intercom | Formulare und Chat | Nicht verfügbar | Nicht verfügbar | Nicht verfügbar | Nicht verfügbar | erreichbar | 2026-09-23 | Ausgangswert |
| host-typeform | form.typeform.com | Typeform | Formulare und Chat | Nicht verfügbar | Nicht verfügbar | Nicht verfügbar | Nicht verfügbar | erreichbar | 2026-09-30 | Ausgangswert |
| host-zendesk | static.zdassets.com | Zendesk | Formulare und Chat | Nicht verfügbar | Nicht verfügbar | Nicht verfügbar | Nicht verfügbar | erreichbar | 2026-10-08 | Ausgangswert |
| host-crisp | Ziel nicht angegeben | Crisp | Formulare und Chat | Nicht verfügbar | Nicht verfügbar | Nicht verfügbar | Nicht verfügbar | ungetestet | Kein datierter Test | Ausgangswert |
| host-drift | js.driftt.com | Drift | Formulare und Chat | Nicht verfügbar | Nicht verfügbar | Nicht verfügbar | Nicht verfügbar | ungetestet | Kein datierter Test | Ausgangswert |
| host-hubspot-script | js.hs-scripts.com | HubSpot-Loader | Formulare und Chat | Nicht verfügbar | Nicht verfügbar | Nicht verfügbar | Nicht verfügbar | ungetestet | Kein datierter Test | Ausgangswert |
| host-tawk-to | Ziel nicht angegeben | Tawk.to | Formulare und Chat | Nicht verfügbar | Nicht verfügbar | Nicht verfügbar | Nicht verfügbar | ungetestet | Kein datierter Test | Ausgangswert |
| host-disqus | disqus.com | Disqus | Einbettungen | Nicht verfügbar | Nicht verfügbar | Nicht verfügbar | Nicht verfügbar | gesperrt | 2026-09-13 | Ausgangswert |
| host-instagram | www.instagram.com | Instagram | Einbettungen | Nicht verfügbar | Nicht verfügbar | Nicht verfügbar | Nicht verfügbar | gesperrt | 2026-10-03 | Ausgangswert |
| host-soundcloud | w.soundcloud.com | SoundCloud | Einbettungen | Nicht verfügbar | Nicht verfügbar | Nicht verfügbar | Nicht verfügbar | gesperrt | 2026-06-24 | Ausgangswert |
| host-spotify | open.spotify.com | Spotify | Einbettungen | Nicht verfügbar | Nicht verfügbar | Nicht verfügbar | Nicht verfügbar | gesperrt | 2026-09-12 | Ausgangswert |
| host-x-timeline | platform.twitter.com | X, Timeline-Widget | Einbettungen | Nicht verfügbar | Nicht verfügbar | Nicht verfügbar | Nicht verfügbar | gesperrt | 2026-07-07 | Ausgangswert |
| host-wistia | fast.wistia.com | Wistia | Einbettungen | Nicht verfügbar | Nicht verfügbar | Nicht verfügbar | 9 von 15 | schwankend | 2026-03-17, 2026-08-30 | Ausgangswert |
| host-loom | Ziel nicht angegeben | Loom | Einbettungen | Nicht verfügbar | Nicht verfügbar | Nicht verfügbar | Nicht verfügbar | ungetestet | Kein datierter Test | Ausgangswert |
| host-mapbox-telemetry | events.mapbox.com | Mapbox, Telemetrie | Karten | Nicht verfügbar | Nicht verfügbar | Nicht verfügbar | Nicht verfügbar | gesperrt | 2026-03-12 | Ausgangswert |
| host-openstreetmap | tile.openstreetmap.org | OpenStreetMap-Kacheln | Karten | Nicht verfügbar | Nicht verfügbar | Nicht verfügbar | Nicht verfügbar | gesperrt | 2026-09-07 | Ausgangswert |
| host-mapbox-api | api.mapbox.com | Mapbox, Kacheln und API | Karten | Nicht verfügbar | Nicht verfügbar | Nicht verfügbar | Nicht verfügbar | erreichbar | 2026-08-31 | Ausgangswert |
| host-wix | wix.com | Wix | Plattformen | 532 | 0 von 3 | Nicht verfügbar | Nicht verfügbar | antwortet, hängt dann | 2026-08-30 | Ausgangswert |
| host-webflow | webflow.com | Webflow | Plattformen | Nicht verfügbar | Nicht verfügbar | Nicht verfügbar | Nicht verfügbar | schwankend | 2026-08-23 | Ausgangswert |
| host-shopify | cdn.shopify.com | Shopify | Plattformen | Nicht verfügbar | Nicht verfügbar | Nicht verfügbar | Nicht verfügbar | erreichbar | 2026-10-08 | Ausgangswert |
| host-squarespace | www.squarespace.com | Squarespace | Plattformen | Nicht verfügbar | Nicht verfügbar | Nicht verfügbar | Nicht verfügbar | erreichbar | 2026-10-03 | Ausgangswert |
| host-netlify | Ziel nicht angegeben | Netlify | Plattformen | Nicht verfügbar | Nicht verfügbar | Nicht verfügbar | Nicht verfügbar | ungetestet | Kein datierter Test | Ausgangswert |
| host-sanity | Ziel nicht angegeben | Sanity | Plattformen | Nicht verfügbar | Nicht verfügbar | Nicht verfügbar | Nicht verfügbar | ungetestet | Kein datierter Test | Ausgangswert |
| host-algolia | algolia.net | Algolia | Infrastruktur | Nicht verfügbar | Nicht verfügbar | Nicht verfügbar | Nicht verfügbar | schwankend | 2026-08-31 | Ausgangswert |
| host-firebase | firebase.google.com | Firebase | Infrastruktur | Nicht verfügbar | Nicht verfügbar | Nicht verfügbar | Nicht verfügbar | schwankend | 2026-09-14 | Ausgangswert |
| host-sentry | browser.sentry-cdn.com | Sentry | Infrastruktur | Nicht verfügbar | Nicht verfügbar | Nicht verfügbar | Nicht verfügbar | schwankend | 2026-10-01 | Ausgangswert |
| host-aws-cloudfront | aws.amazon.com/cloudfront | AWS CloudFront | Infrastruktur | 665 | 3 von 3 | 718 | 3 von 3 | erreichbar | 2026-08-28, 2026-08-30 | Ausgangswert |
| host-bootstrap-cdn | Ziel nicht angegeben | Bootstrap CDN | Infrastruktur | Nicht verfügbar | Nicht verfügbar | Nicht verfügbar | Nicht verfügbar | ungetestet | Kein datierter Test | Ausgangswert |
| host-paypal | www.paypal.com | PayPal | Zahlungen | Nicht verfügbar | Nicht verfügbar | Nicht verfügbar | Nicht verfügbar | erreichbar | 2026-09-25 | Ausgangswert |
| host-stripe | js.stripe.com | Stripe | Zahlungen | Nicht verfügbar | Nicht verfügbar | Nicht verfügbar | Nicht verfügbar | ungetestet | Kein datierter Test | Ausgangswert |

### Die Belege zu jeder Zeile

**host-google-analytics (Google Analytics).**
> Laut GreatFire war www.google-analytics.com beim letzten Test am 24. Juli 2026 gesperrt; der einzige aussagekräftige Test ergab eine Störung.
> Quelle: GreatFire, 24. Juli 2026. https://en.greatfire.org/https/www.google-analytics.com

**host-meta-pixel (Meta-Pixel).**
> Laut GreatFire war connect.facebook.net beim letzten Test am 27. Mai 2026 gesperrt; der Befund ist älter als 90 Tage, eine aktuelle Zählung fehlt.
> Quelle: GreatFire, 27. Mai 2026. https://en.greatfire.org/https/connect.facebook.net

**host-google-tag-manager (Google Tag Manager).**
> Am 28. August 2026 erhielten alle 72 direkten Anfragen, die 21YunBox von Alibaba Cloud cn-zhangjiakou aus an www.googletagmanager.com richtete, eine Antwort; das erste Byte kam im Median nach 118 ms. Am Privatanschluss von China Mobile in Peking blieben am 30. August alle 112 Anfragen unbeantwortet.
> Quelle: 21YunBox, 28. und 30. August 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

**host-hotjar (Hotjar).**
> Laut GreatFire war static.hotjar.com beim letzten Test am 30. September 2026 gestört; einer der beiden aussagekräftigen Tests ergab eine Störung.
> Quelle: GreatFire, 30. September 2026. https://en.greatfire.org/https/static.hotjar.com

> Am Privatanschluss von China Mobile in Peking blieben am 30. August 2026 alle 6 Anfragen von 21YunBox an static.hotjar.com unbeantwortet.
> Quelle: 21YunBox, 30. August 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

**host-mixpanel-script (Mixpanel).**
> Laut GreatFire war cdn.mxpnl.com beim letzten Test am 6. September 2026 gestört; der einzige aussagekräftige Test ergab eine Störung.
> Quelle: GreatFire, 6. September 2026. https://en.greatfire.org/https/cdn.mxpnl.com

**host-plausible (Plausible).**
> Laut GreatFire war plausible.io beim letzten Test am 20. August 2026 gestört; einer der beiden aussagekräftigen Tests ergab eine Störung.
> Quelle: GreatFire, 20. August 2026. https://en.greatfire.org/https/plausible.io

**host-amplitude-events (Amplitude, Ereignisse).**
> Laut GreatFire war api.amplitude.com beim letzten Test am 10. September 2026 nicht gesperrt; der einzige aussagekräftige Test ergab keine Störung.
> Quelle: GreatFire, 10. September 2026. https://en.greatfire.org/https/api.amplitude.com

**host-amplitude-script (Amplitude, Skript).**
> Laut GreatFire war cdn.amplitude.com beim letzten Test am 14. September 2026 nicht gesperrt; der einzige aussagekräftige Test ergab keine Störung.
> Quelle: GreatFire, 14. September 2026. https://en.greatfire.org/https/cdn.amplitude.com

**host-linkedin-insight (LinkedIn Insight Tag).**
> Laut GreatFire war snap.licdn.com beim letzten Test am 22. September 2026 nicht gesperrt; der einzige aussagekräftige Test ergab keine Störung.
> Quelle: GreatFire, 22. September 2026. https://en.greatfire.org/https/snap.licdn.com

**host-microsoft-clarity (Microsoft Clarity).**
> Laut GreatFire war www.clarity.ms beim letzten Test am 15. September 2026 nicht gesperrt; der einzige aussagekräftige Test ergab keine Störung.
> Quelle: GreatFire, 15. September 2026. https://en.greatfire.org/https/www.clarity.ms

**host-mixpanel-events (Mixpanel).**
> Laut GreatFire war api.mixpanel.com beim letzten Test am 19. September 2026 nicht gesperrt; der einzige aussagekräftige Test ergab keine Störung.
> Quelle: GreatFire, 19. September 2026. https://en.greatfire.org/https/api.mixpanel.com

**host-segment (Segment).**
> Laut GreatFire war api.segment.io beim letzten Test am 15. September 2026 nicht gesperrt; der einzige aussagekräftige Test ergab keine Störung.
> Quelle: GreatFire, 15. September 2026. https://en.greatfire.org/https/api.segment.io

**host-matomo (Matomo Cloud).**
Für diesen Eintrag ist kein datierter Test eines Dritten verzeichnet; er gilt als ungetestet.

**host-google-libraries (Google Hosted Libraries).**
> Laut GreatFire war ajax.googleapis.com beim letzten Test am 22. August 2026 gesperrt; der einzige aussagekräftige Test ergab eine Störung.
> Quelle: GreatFire, 22. August 2026. https://en.greatfire.org/https/ajax.googleapis.com

**host-google-fonts-css (Google Fonts, Stylesheets).**
> Am 28. August 2026 erhielten alle 72 direkten Anfragen, die 21YunBox von Alibaba Cloud cn-zhangjiakou aus an fonts.googleapis.com richtete, eine Antwort; das erste Byte kam im Median nach 111 ms. Am Privatanschluss von China Mobile in Peking blieben am 30. August alle 54 Anfragen unbeantwortet.
> Quelle: 21YunBox, 28. und 30. August 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

**host-google-fonts-files (Google Fonts, Schriftdateien).**
> Am 28. August 2026 erhielten alle 72 direkten Anfragen, die 21YunBox von Alibaba Cloud cn-zhangjiakou aus an fonts.gstatic.com richtete, eine Antwort; das erste Byte kam im Median nach 102 ms. Am Privatanschluss von China Mobile in Peking blieben am 30. August alle 6 Anfragen unbeantwortet.
> Quelle: 21YunBox, 28. und 30. August 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

**host-adobe-fonts (Adobe Fonts).**
> Laut GreatFire war use.typekit.net beim letzten Test am 22. September 2026 nicht gesperrt; der einzige aussagekräftige Test ergab keine Störung.
> Quelle: GreatFire, 22. September 2026. https://en.greatfire.org/https/use.typekit.net

> Am Privatanschluss von China Mobile in Peking blieben am 30. August 2026 alle 11 Anfragen von 21YunBox an use.typekit.net unbeantwortet.
> Quelle: 21YunBox, 30. August 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

**host-jsdelivr (jsDelivr).**
> Am 28. August 2026 erhielten alle 72 direkten Anfragen, die 21YunBox von Alibaba Cloud cn-zhangjiakou aus an cdn.jsdelivr.net richtete, eine Antwort; das erste Byte kam im Median nach 660 ms. Am Privatanschluss von China Mobile in Peking erhielten am 30. August alle 36 Anfragen eine Antwort.
> Quelle: 21YunBox, 28. und 30. August 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

**host-cdnjs (cdnjs).**
> Laut GreatFire war cdnjs.cloudflare.com beim letzten Test am 27. September 2026 nicht gesperrt; der einzige aussagekräftige Test ergab keine Störung.
> Quelle: GreatFire, 27. September 2026. https://en.greatfire.org/https/cdnjs.cloudflare.com

**host-unpkg (unpkg).**
> Laut GreatFire war unpkg.com beim letzten Test am 14. August 2026 nicht gesperrt; der einzige aussagekräftige Test ergab keine Störung.
> Quelle: GreatFire, 14. August 2026. https://en.greatfire.org/https/unpkg.com

**host-mailchimp (Mailchimp).**
> Laut GreatFire war cdn-images.mailchimp.com beim letzten Test am 10. September 2026 gesperrt; der einzige aussagekräftige Test ergab eine Störung.
> Quelle: GreatFire, 10. September 2026. https://en.greatfire.org/https/cdn-images.mailchimp.com

**host-recaptcha (Google reCAPTCHA).**
> Am 28. August 2026 blieben alle 72 direkten Anfragen, die 21YunBox von Alibaba Cloud cn-zhangjiakou aus an www.google.com/recaptcha richtete, unbeantwortet. Am Privatanschluss von China Mobile in Peking blieben am 30. August alle 18 Anfragen unbeantwortet.
> Quelle: 21YunBox, 28. und 30. August 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

**host-cloudflare-turnstile (Cloudflare Turnstile).**
> Laut GreatFire war challenges.cloudflare.com beim letzten Test am 11. Oktober 2026 nicht gesperrt; keiner der beiden aussagekräftigen Tests ergab eine Störung.
> Quelle: GreatFire, 11. Oktober 2026. https://en.greatfire.org/https/challenges.cloudflare.com/turnstile/v0/api.js

> Am Privatanschluss von China Mobile in Peking erhielten am 30. August 2026 9 von 12 Anfragen von 21YunBox an challenges.cloudflare.com eine Antwort.
> Quelle: 21YunBox, 30. August 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

**host-calendly (Calendly).**
> Laut GreatFire war calendly.com beim letzten Test am 3. Oktober 2026 nicht gesperrt; der einzige aussagekräftige Test ergab keine Störung.
> Quelle: GreatFire, 3. Oktober 2026. https://en.greatfire.org/https/calendly.com

**host-hcaptcha (hCaptcha).**
> Laut GreatFire war api2.hcaptcha.com beim letzten Test am 14. September 2026 nicht gesperrt; der einzige aussagekräftige Test ergab keine Störung.
> Quelle: GreatFire, 14. September 2026. https://en.greatfire.org/https/api2.hcaptcha.com

**host-intercom (Intercom).**
> Laut GreatFire war widget.intercom.io beim letzten Test am 23. September 2026 nicht gesperrt; der einzige aussagekräftige Test ergab keine Störung.
> Quelle: GreatFire, 23. September 2026. https://en.greatfire.org/https/widget.intercom.io

**host-typeform (Typeform).**
> Laut GreatFire war form.typeform.com beim letzten Test am 30. September 2026 nicht gesperrt; der einzige aussagekräftige Test ergab keine Störung.
> Quelle: GreatFire, 30. September 2026. https://en.greatfire.org/https/form.typeform.com

**host-zendesk (Zendesk).**
> Laut GreatFire war static.zdassets.com beim letzten Test am 8. Oktober 2026 nicht gesperrt; keiner der beiden aussagekräftigen Tests ergab eine Störung.
> Quelle: GreatFire, 8. Oktober 2026. https://en.greatfire.org/https/static.zdassets.com

**host-crisp (Crisp).**
Für diesen Eintrag ist kein datierter Test eines Dritten verzeichnet; er gilt als ungetestet.

**host-drift (Drift).**
Für diesen Eintrag ist kein datierter Test eines Dritten verzeichnet; er gilt als ungetestet.

**host-hubspot-script (HubSpot-Loader).**
Für diesen Eintrag ist kein datierter Test eines Dritten verzeichnet; er gilt als ungetestet.

**host-tawk-to (Tawk.to).**
Für diesen Eintrag ist kein datierter Test eines Dritten verzeichnet; er gilt als ungetestet.

**host-disqus (Disqus).**
> Laut GreatFire war disqus.com beim letzten Test am 13. September 2026 gesperrt; beide aussagekräftigen Tests ergaben eine Störung.
> Quelle: GreatFire, 13. September 2026. https://en.greatfire.org/https/disqus.com

**host-instagram (Instagram).**
> Laut GreatFire war www.instagram.com beim letzten Test am 3. Oktober 2026 gesperrt; beide aussagekräftigen Tests ergaben eine Störung.
> Quelle: GreatFire, 3. Oktober 2026. https://en.greatfire.org/https/www.instagram.com

**host-soundcloud (SoundCloud).**
> Laut GreatFire war w.soundcloud.com beim letzten Test am 24. Juni 2026 gesperrt; der Befund ist älter als 90 Tage, eine aktuelle Zählung fehlt.
> Quelle: GreatFire, 24. Juni 2026. https://en.greatfire.org/https/w.soundcloud.com

**host-spotify (Spotify).**
> Laut GreatFire war open.spotify.com beim letzten Test am 12. September 2026 gesperrt; alle 4 aussagekräftigen Tests ergaben eine Störung.
> Quelle: GreatFire, 12. September 2026. https://en.greatfire.org/https/open.spotify.com

**host-x-timeline (X, Timeline-Widget).**
> Laut GreatFire war platform.twitter.com beim letzten Test am 7. Juli 2026 gesperrt; der Befund ist älter als 90 Tage, eine aktuelle Zählung fehlt.
> Quelle: GreatFire, 7. Juli 2026. https://en.greatfire.org/https/platform.twitter.com

**host-wistia (Wistia).**
> Laut GreatFire war fast.wistia.com beim letzten Test am 17. März 2026 nicht gesperrt; der Befund ist älter als 90 Tage, eine aktuelle Zählung fehlt.
> Quelle: GreatFire, 17. März 2026. https://en.greatfire.org/https/fast.wistia.com

> Am Privatanschluss von China Mobile in Peking erhielten am 30. August 2026 9 von 15 Anfragen von 21YunBox an fast.wistia.com eine Antwort.
> Quelle: 21YunBox, 30. August 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

**host-loom (Loom).**
Für diesen Eintrag ist kein datierter Test eines Dritten verzeichnet; er gilt als ungetestet.

**host-mapbox-telemetry (Mapbox, Telemetrie).**
> Laut GreatFire war events.mapbox.com beim letzten Test am 12. März 2026 gesperrt; der Befund ist älter als 90 Tage, eine aktuelle Zählung fehlt.
> Quelle: GreatFire, 12. März 2026. https://en.greatfire.org/https/events.mapbox.com

**host-openstreetmap (OpenStreetMap-Kacheln).**
> Laut GreatFire war tile.openstreetmap.org beim letzten Test am 7. September 2026 gesperrt; der einzige aussagekräftige Test ergab eine Störung.
> Quelle: GreatFire, 7. September 2026. https://en.greatfire.org/https/tile.openstreetmap.org

**host-mapbox-api (Mapbox, Kacheln und API).**
> Laut GreatFire war api.mapbox.com beim letzten Test am 31. August 2026 nicht gesperrt; der einzige aussagekräftige Test ergab keine Störung.
> Quelle: GreatFire, 31. August 2026. https://en.greatfire.org/https/api.mapbox.com

**host-wix (Wix).**
> 21YunBox lud die Website von Wix am 30. August 2026 von Alibaba Cloud cn-zhangjiakou aus: Das erste Byte kam im Median nach 532 ms, doch keiner der 3 Ladevorgänge war innerhalb von 60 Sekunden abgeschlossen.
> Quelle: 21YunBox, 30. August 2026. https://www.21cloudbox.com/support/wix-china.html

**host-webflow (Webflow).**
> Laut GreatFire war webflow.com beim letzten Test am 23. August 2026 gestört; der einzige aussagekräftige Test ergab eine Störung.
> Quelle: GreatFire, 23. August 2026. https://en.greatfire.org/https/webflow.com

**host-shopify (Shopify).**
> Laut GreatFire war cdn.shopify.com beim letzten Test am 8. Oktober 2026 nicht gesperrt; keiner der beiden aussagekräftigen Tests ergab eine Störung.
> Quelle: GreatFire, 8. Oktober 2026. https://en.greatfire.org/https/cdn.shopify.com

**host-squarespace (Squarespace).**
> Laut GreatFire war www.squarespace.com beim letzten Test am 3. Oktober 2026 nicht gesperrt; keiner der 3 aussagekräftigen Tests ergab eine Störung.
> Quelle: GreatFire, 3. Oktober 2026. https://en.greatfire.org/https/www.squarespace.com

**host-netlify (Netlify).**
Für diesen Eintrag ist kein datierter Test eines Dritten verzeichnet; er gilt als ungetestet.

**host-sanity (Sanity).**
Für diesen Eintrag ist kein datierter Test eines Dritten verzeichnet; er gilt als ungetestet.

**host-algolia (Algolia).**
> Laut GreatFire war algolia.net beim letzten Test am 31. August 2026 gestört; beide aussagekräftigen Tests ergaben eine Störung.
> Quelle: GreatFire, 31. August 2026. https://en.greatfire.org/https/algolia.net

**host-firebase (Firebase).**
> Laut GreatFire war firebase.google.com beim letzten Test am 14. September 2026 gestört; beide aussagekräftigen Tests ergaben eine Störung.
> Quelle: GreatFire, 14. September 2026. https://en.greatfire.org/https/firebase.google.com

**host-sentry (Sentry).**
> Laut GreatFire war browser.sentry-cdn.com beim letzten Test am 1. Oktober 2026 gestört; der einzige aussagekräftige Test ergab eine Störung.
> Quelle: GreatFire, 1. Oktober 2026. https://en.greatfire.org/https/browser.sentry-cdn.com

**host-aws-cloudfront (AWS CloudFront).**
> 21YunBox lud die Produktseite von CloudFront am 28. August 2026 von Alibaba Cloud cn-zhangjiakou aus 3 von 3 Mal (erstes Byte im Median nach 665 ms) und am 30. August von einem Privatanschluss in Peking aus ebenfalls 3 von 3 Mal (718 ms); der Netzbetreiber wird nicht genannt.
> Quelle: 21YunBox, 28. und 30. August 2026. https://www.21cloudbox.com/support/aws-cloudfront-china.html

**host-bootstrap-cdn (Bootstrap CDN).**
Für diesen Eintrag ist kein datierter Test eines Dritten verzeichnet; er gilt als ungetestet.

**host-paypal (PayPal).**
> Laut GreatFire war www.paypal.com beim letzten Test am 25. September 2026 nicht gesperrt; der einzige aussagekräftige Test ergab keine Störung.
> Quelle: GreatFire, 25. September 2026. https://en.greatfire.org/https/www.paypal.com

**host-stripe (Stripe).**
Für diesen Eintrag ist kein datierter Test eines Dritten verzeichnet; er gilt als ungetestet.

## Was die Abweichung für Website-Betreiber bedeutet

Die Zeilen zu Schriften und zum Tag Manager zeigen, warum ein Cloud-Ergebnis die Angabe seines Netzes braucht. Dieselben Ressourcen, die der Sonde im Rechenzentrum antworteten, blieben am Endkundenanschluss stumm. Wer die Cloud-Beobachtung für das Erlebnis eines Besuchers hält, träfe für diese Pekinger Stichprobe die falsche Auslieferungsentscheidung.

Beginnen Sie bei Ihrer eigenen Website mit der genauen Anfrage. Das Stylesheet einer Schrift, ihre Schriftdateien und das Skript des Tag Managers sind getrennte Abhängigkeiten. Klären Sie, welche Seite sie benötigt und ob eine ausbleibende Antwort den Besucher an einer Handlung hindert. Wer eine Schriftdatei selbst hostet, beseitigt genau diese externe Anfrage; ein Formular oder ein Analyse-Endpunkt ohne Bezug dazu ist damit nicht repariert.

Lesen Sie in den Analysezeilen den Host der Bibliothek und den der Datenerfassung getrennt. Bei Mixpanel unterscheiden sich die GreatFire-Ergebnisse für beide. Sie wurden an verschiedenen Tagen getestet; eine einzelne Nutzersitzung lässt sich aus der Tabelle also nicht rekonstruieren. Sie zeigt aber, warum die Prüfung nur einer Adresse ein unvollständiges Bild der Integration ergibt.

Eine Messung sollte über das erste Byte hinaus bis zur vollständig geladenen Seite reichen. Bei Wix kam das erste Byte an, und trotzdem wurde die Seite nicht innerhalb der Ladefrist der Quelle fertig. Ein Dashboard, das beim ersten Byte aufhört, hätte das übersehen. Verfolgen Sie die Anfrage bis zu der Aktion, auf die es auf der Seite ankommt.

Unser [Leitfaden zu JavaScript-CDNs in China](/de/ressourcen/china-web-leitfaden/javascript-cdn-china/) erklärt, wie Sie diese Aufrufe in einer Seite nachverfolgen. Für Änderungen an Formularen oder am Tracking übernimmt unsere [technische Integration](/de/leistungen/technische-integration/) die Umsetzung. Der [Vergleich von Cloud und Privatanschluss](/de/ressourcen/china-web-leitfaden/china-latenz-messpunkte/#methode-und-grenzen) erläutert die Messmethode und die Grenzen der Befunde.

## Wo datierte Belege fehlen

Zu den ungetesteten Einträgen zählen der Widget-Host von Drift und der HTTPS-Loader von HubSpot. Für den Cloud-Tracker von Matomo gibt es keinen datierten Ersatz für die zurückgezogene Zeitmessung der Anbieterwebsite. Ohne verwertbaren Eintrag fehlt jede Grundlage, diese Integrationen zuverlässig oder gesperrt zu nennen.

Das Register führt außerdem Crisp, Tawk.to, Loom, Sanity, Netlify und Bootstrap CDN ohne getestetes Ziel sowie das Skript von Stripe ohne Befund. Eine kontospezifische Installation kann einen anderen Host nutzen als die Produktwebsite. Füllen Sie diese Zellen nicht mit der Ladezeit einer Startseite, nur weil die Marke übereinstimmt.

Manche GreatFire-Einträge sind alt. Ihr Datum bleibt sichtbar, denn eine erfolgreiche Verbindung vor einigen Monaten kann als Hintergrund dienen, ohne die heutige Entscheidung vorwegzunehmen. Die Endkundenbeobachtungen betreffen einen einzigen Pekinger Privatanschluss; über jede Provinz und jeden Netzbetreiber sagen sie nichts. Wiederholte Anfragen über dieselbe Verbindung teilen zudem dieselben Bedingungen; ihre Zahlen sind daher keine unabhängigen Stichproben der chinesischen Bevölkerung.

Nutzen Sie das Register, um die externe Anfrage zu finden, die Aufmerksamkeit verdient, und prüfen Sie dann, ob der Ersatz dieselbe Aufgabe erfüllt. Geben Sie jeden Befund an Ihr Entwicklungsteam mit der beobachteten URL und dem Datum weiter. Darin liegt der Unterschied zwischen einer brauchbaren Fehlermeldung und einem Markennamen auf einer schwarzen Liste.

Ein [Bereitschafts-Scan](/de/china-site-scanner/) hilft, die externen Dienste auf einer Seite zu erkennen. Die Liste der Anfragen, die er ausgibt, ist ein nützlicher Ausgangspunkt für diesen Abgleich. Werten Sie einen Host, der in diesem Register fehlt, als Lücke in der Beleglage, und halten Sie dieses Ergebnis getrennt von jedem Test, ob ein Nutzer ein Formular absenden, ein Video starten oder eine Zahlung abschließen kann.
