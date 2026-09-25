# T6-06 deep-translate, DE, pass 1 (full native rewrite from scratch)

Register: FAZ / Handelsblatt, Sie, as the live page. Source used for facts only.

## Change 1, subtitle

before: Lädt Ihre Website Schriften von Google, feuert sie ein Google-Analytics-Tag ab oder bindet sie ein YouTube-Video ein, ist sie für 900 Millionen chinesische Internetnutzer schon kaputt.
after: Eine Sperre ist der einfache Fall. Die Abhängigkeit, die antwortet und dann nie fertig lädt, wird in Ihrem Team niemand je bemerken.

## Change 2, summary

before: Chinas Große Firewall sperrt Google, Facebook, Slack und Dutzende weiterer Dienste. So funktioniert sie technisch, und so bauen ausländische Unternehmen sinnvoll darum herum.
after: Was eine Website in China erreichen kann und was nicht, Host für Host, mit Messpunkt und Testdatum in jeder Zeile.

## Change 3, updatedAt

2026-05-01 -> 2026-09-25

## Change 4, opening

Eine Sperre fällt auf. Jemand im Büro bemerkt sie, und sie wird behoben. Teuer wird der leise Ausfall: Der Host antwortet, das erste Byte kommt nach einer halben Sekunde, und dann wird die Anfrage einfach nie fertig.

> Microsoft Clarity, Mixpanel, Typeform, Mailchimp, Wix und Algolia lieferten jeweils ein erstes Byte und schlossen dann 0 von 3 Seitenaufrufen innerhalb von 60 Sekunden ab, gemessen von einer Instanz von Alibaba Cloud (阿里云) in cn-zhangjiakou am 28. und 30. August 2026.
> Quelle: 21YunBox, Messungen je Host in China, August 2026. https://www.21cloudbox.com/support/typeform-china.html

Die Seite rund um diese Widgets wird normal dargestellt. Das Widget bleibt leer, und nirgends wird ein Fehler protokolliert. Ein Team außerhalb Chinas kann die Website also ein Jahr lang jeden Morgen aufrufen, ohne dass ihm etwas auffällt.

Darunter arbeitet die Maschinerie, über die alle schreiben: vergiftetes DNS, gesperrte IP-Bereiche, Paketinhalte, die in Echtzeit mitgelesen werden. Die Firewall spürt außerdem VPN-Signaturen auf, und [eine Standardinstallation von WordPress bringt mehrere Abhängigkeiten mit, die daran hängen bleiben](/de/wordpress-in-china/). Das alles ist real. Kaum etwas davon kostet Sie Anfragen. Das erledigt die offene Verbindung, die niemand beobachtet.

## Change 5, Google row and paragraphs

| Google | Suche, Gmail, Maps, YouTube, Analytics, Ads |

Google-Suche, Gmail, Maps, YouTube und Google Ads funktionieren über einen Anschluss in Festlandchina nicht. Für eine Website zählt vor allem Google Analytics, und es steht wie alles andere auf dieser Seite mit seinem Testdatum in der Tabelle weiter unten. Zuletzt scheiterte `www.google-analytics.com` am 24. Juli 2026 an einem Test von GreatFire. Wird das Tag auf einer Seite in China ausgelöst, kommt das Mess-Signal nie an: Die Daten gehen verloren, ob das Container-Skript nun geladen wurde oder nicht.

Google Fonts ist die Ausnahme, und man irrt sich dabei in beide Richtungen, deshalb bekommt es einen eigenen Absatz.

> Von einer Instanz von Alibaba Cloud (阿里云) in cn-zhangjiakou aus schloss `fonts.googleapis.com` am 28. August 2026, bei einer Stichprobe alle zehn Minuten über zwölf Stunden, 72 von 72 Anfragen ab, mit einem Median von 111 ms bis zum ersten Byte. Über einen privaten Anschluss von China Mobile (中国移动) in Peking antwortete derselbe Host am 30. August 2026, über 264 Seitenaufrufe hinweg, auf 0 von 54 Anfragen.
> Quelle: 21YunBox, A Day of Third-Party Requests From Inside China, August 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

Keine der beiden pauschalen Aussagen hält diesem Messpaar stand. Google Fonts wird von Rechenzentren auf dem Festland aus aufgelöst und über private Anschlüsse häufig nicht, und genau das ist das Argument für das Selbsthosten: Sie beseitigen eine Variable, die sich je nach Netz, Resolver und Uhrzeit ändert. `fonts.google.com`, die Oberfläche zum Stöbern, ist ohnehin nicht erreichbar.

## Change 6, section prose

## Jede Abhängigkeit im Datensatz, und wann sie zuletzt getestet wurde

Die Seiten, die zu diesen Fragen ranken, liefern keinerlei Belege. Auf allen Kompatibilitätsseiten, die wir bei Chinafy, AppInChina und den kleineren Agenturen gelesen haben: keine Tabelle, kein Testdatum, kein benannter Testort, keine Latenzzahl. Die Messanbieter veröffentlichen Zahlen. Die Seiten, die Ihnen sagen, was kaputtgeht, zitieren sie nicht. Die Tabelle unten ist dieses Zitat, Zeile für Zeile.

Klar gesagt: Wessen Zahlen sind das? Jede Zeile stammt von GreatFire oder von 21YunBox, mit Quelle und Datum. Keine davon ist bislang unsere eigene. Unsere eigene Sonde wird gerade aufgebaut, in einem Rechenzentrum auf dem Festland und an einem privaten Anschluss in Peking. Sobald sie läuft, stehen unsere Zeilen neben denen Dritter und sind als unsere gekennzeichnet. Sie ersetzen sie nicht stillschweigend.

Die Tabelle enthält zwei Arten von Belegen, und sie beantworten unterschiedliche Fragen. Ein Erreichbarkeitsbefund sagt, ob sich ein Host überhaupt verbinden lässt. Ein gemessener Seitenaufruf sagt, wie lange die Website des Anbieters selbst von einer benannten Sonde in Festlandchina aus zum Laden brauchte. Das Zweite ist ein Näherungswert für den Skript-Endpunkt, den der Browser Ihres Besuchers aufruft; es ist nicht dieser Endpunkt. Wo beide auseinandergehen, stehen beide da, und es wird kein Mittelwert gebildet.

Die Befund-Spalte kennt sechs Werte. Bei zweien sollten Sie genauer hinsehen: sporadisch gestört und je nach Messpunkt verschieden. Dort wirkt ein Host auf denjenigen gesund, der ihn zuletzt geprüft hat.

| Befund | Bedeutung |
|---|---|
| Erreichbar | Verbindet sich und lädt vollständig |
| Langsam | Lädt vollständig, zu einem Preis, den man kennen sollte |
| Antwortet, dann Stillstand | Das erste Byte kommt an, der Ladevorgang endet nicht innerhalb von 60 Sekunden |
| Sporadisch gestört | Störungen bei den jüngsten aussagekräftigen Tests, aber keine saubere Sperre |
| Gesperrt | Keine nutzbare Verbindung |
| Je nach Messpunkt verschieden | Ein Rechenzentrum und ein privater Anschluss liefern für denselben Host gegensätzliche Ergebnisse |

### Noch nicht gemessen

Für dreizehn Abhängigkeiten gibt es kein Testergebnis, für das wir geradestehen würden, entweder weil niemand sie geprüft hat oder weil der einzige verfügbare Befund älter als neunzig Tage ist. Wir führen sie auf, statt sie wegzulassen, denn auch die Lücke ist eine Information: Crisp, Tawk.to, Loom, Sanity, Netlify, Bootstrap CDN, `js.stripe.com`, das LinkedIn Insight Tag, Cloudflare Turnstile, Adobe Fonts, Font Awesome, Marketo und das Tracking-Skript von HubSpot.

Drift ist die vierzehnte, und an ihr zeigt sich, wie es schiefgeht. Drift gilt gemeinhin als erreichbar, doch dieser Befund bezieht sich auf die Marketing-Website. `js.driftt.com`, der Host, der tatsächlich im Browser des Besuchers läuft, wurde nie getestet. Ein Befund zum falschen Hostnamen: So entsteht das meiste, was zu diesem Thema geschrieben wird.

Die Daten sind so wichtig wie die Befunde. Ein Befund vom März sagt etwas über den März. Zwei Zeilen oben sind sechs Monate alt, Wistia und der Telemetrie-Host von Mapbox, und beide sagen das in ihren eigenen Zellen. Wistia ist ein Video-Embed, das ein Marketingteam heute Nachmittag einbauen könnte, gestützt auf eine Messung aus dem Frühjahr.

Zuletzt haben wir diese Tabelle am 22. September 2026 mit ihren Quellen abgeglichen, und jede Zeile, die älter als neunzig Tage wird, prüfen wir erneut. Lesen Sie sie deutlich nach diesem Datum und hängt Ihr Projekt an einer Zeile, testen Sie den Host zuerst selbst.

### Warum Stripe außerhalb dieser Tabelle steht

Stripe ist der Eintrag, den man in einer Tabelle wie dieser erwartet. Er gehört zu einer anderen Frage. Ob `js.stripe.com` aus Shanghai lädt, spielt keine Rolle, denn die Hürde ist eine Frage der Lizenz.

> Festlandchina steht nicht auf Stripes eigener Liste der Länder, in denen sich ein Stripe-Konto eröffnen lässt. Hongkong schon.
> Quelle: Stripe, Global availability, abgerufen am 22. September 2026. https://stripe.com/global

Für ein Unternehmen auf dem Festland gibt es kein inländisches Acquiring, ganz gleich, ob das Skript den Browser erreicht, deshalb bringt es nichts, seine Auslieferung zu optimieren. Die Frage, die eine Antwort verdient, lautet, wie man Alipay (支付宝), WeChat Pay (微信支付) und UnionPay (银联) annimmt, und [unser Leitfaden zum Betrieb eines WooCommerce-Shops in China](/de/ressourcen/china-web-leitfaden/woocommerce-china-store-guide/) kommt dem am nächsten, was wir dazu veröffentlicht haben.

PayPal ist ein anderer Fall und steht in der Tabelle, weil es erreichbar und teilweise gestört ist statt nicht verfügbar, und weil die gestörten Pfade die Checkout-Weiterleitungen sind.

## Table strings (copy.de)

columns: Dienst | Getesteter Host oder Ziel | Befund | Gemessen | Messpunkt | Quelle und Datum
categories: Analytics | Formulare und Chat | Einbettungen | Karten | Plattformen | Infrastruktur | Zahlungen
verdicts: Erreichbar | Langsam | Antwortet, dann Stillstand | Sporadisch gestört | Gesperrt | Je nach Messpunkt verschieden | Nicht getestet
hostNotes: Website des Anbieters, Host von der Quelle nicht genannt ; Nicht geprüft
sourceNotes: Von GreatFire nie getestet ; Steht für unsere eigene Sonde aus
reachabilityOnly: Nur Erreichbarkeitsbefund
noTest: Kein Test vorhanden
staleSuffix: , sechs Monate alt
noVantage: entfällt
vantages: Alibaba Cloud (阿里云) cn-zhangjiakou / Alibaba Cloud cn-zhangjiakou ; China Mobile (中国移动) in Peking / China Mobile in Peking
vantageJoin: " und "
services: Amplitude, Skript-Host | Amplitude, Event-Host | Matomo Cloud | X, Timeline-Widget | Mapbox, Telemetrie | Mapbox, Kacheln und API | OpenStreetMap-Kacheln
measured:
- google-tag-manager: 72 von 72, erstes Byte nach 118 ms, und 0 von 112
- hotjar: 3 von 3, erstes Byte nach 487 ms, LCP 1.660 ms
- microsoft-clarity: 0 von 3 binnen 60 s, erstes Byte nach 541 ms
- mixpanel: 0 von 3 binnen 60 s, erstes Byte nach 391 ms
- segment: 3 von 3, erstes Byte nach 900 ms in einem Durchlauf und 1.084 ms in einem anderen
- plausible: 3 von 3, erstes Byte nach 550 ms, LCP 1.208 ms
- matomo: 3 von 3, erstes Byte nach 516 ms, LCP 1.532 ms
- typeform: 0 von 3 binnen 60 s, erstes Byte nach 907 ms
- mailchimp: 0 von 3 binnen 60 s, erstes Byte nach 812 ms, Rendering nach 2,0 s
- disqus: 41 von 43 getesteten URLs gesperrt, 2 gestört
- openstreetmap: Alle 71 getesteten URLs von openstreetmap.org gesperrt
- wix: 0 von 3 binnen 60 s, erstes Byte nach 532 ms
- shopify: 3 von 3, erstes Byte nach 575 ms, Median-Ladezeit 3,6 s
- webflow: Störungen bei 100 % des letzten aussagekräftigen Tests
- squarespace: 2 aktuelle aussagekräftige Tests mit normaler Verbindung
- algolia: 0 von 3 binnen 60 s, erstes Byte nach 1.027 ms, Rendering nach 3,4 s
- firebase: Störungen bei 100 % der letzten 2 aussagekräftigen Tests
- aws-cloudfront: 3 von 3, erstes Byte nach 665 ms, und 0 von 3 nach 743 ms
- sentry: 3 von 3, erstes Byte nach 252 ms
- paypal: 9 von 27 getesteten URLs gestört, und zwar die Checkout-Weiterleitungen
- stripe: Kein Test vorhanden. Siehe Hinweis unten: Die Erreichbarkeit ist hier nicht die entscheidende Frage
dates: 24. Juli 2026 ; 28. und 30. August 2026 (full month names, as the live DE guides)

Step 1 complete.
