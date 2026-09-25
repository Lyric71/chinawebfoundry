# T6-06 deep-translate, DE, pass 3 (final native polish)

Changes against pass 2:
- change 4: "Irgendwer" is spoken register, now "Jemand"; "von einer Instanz von Alibaba Cloud" doubled the "von", now "einer Instanz bei Alibaba Cloud".
- change 5: "Google Analytics an; es steht" left a dangling "es", now a new sentence with "Der Dienst"; the Google Fonts blockquote had "2026 72 von 72", two numbers colliding, so the date now opens the sentence.
- change 6: the recheck sentence "Lesen Sie sie deutlich später und hängt Ihr Projekt" was a stacked conditional; now "Wer sie deutlich später liest ... sollte". Stripe paragraph: "Am nächsten kommt dem, was wir dazu veröffentlicht haben, [unser Leitfaden]" was contorted, now "findet sich am ehesten in [unserem Leitfaden ...]".
- Kept as-is: subtitle, summary, legend table, not-yet-measured section, all table strings.

## Final text

subtitle: "Eine Sperre ist noch der harmlose Fall. Die Abhängigkeit, die antwortet und dann nie zu Ende lädt, bemerkt in Ihrem Team niemand."
summary: "Welche Dienste eine Website von China aus erreicht und welche nicht, Host für Host, mit Messpunkt und Testdatum in jeder Zeile."

Eine Sperre fällt auf. Jemand im Büro meldet sie, und sie wird behoben. Ins Geld geht der stille Ausfall: Der Host antwortet, das erste Byte trifft nach einer halben Sekunde ein, und danach wird die Anfrage schlicht nie fertig.

> Microsoft Clarity, Mixpanel, Typeform, Mailchimp, Wix und Algolia lieferten jeweils ein erstes Byte, brachten aber keinen der 3 Seitenaufrufe binnen 60 Sekunden zu Ende (0 von 3). Gemessen am 28. und 30. August 2026 von einer Instanz bei Alibaba Cloud (阿里云) in der Region cn-zhangjiakou.
> Quelle: 21YunBox, Messungen je Host in China, August 2026. https://www.21cloudbox.com/support/typeform-china.html

Rund um diese Widgets baut sich die Seite ganz normal auf. Das Widget selbst bleibt leer, und nirgends taucht ein Fehler im Log auf. Ein Team außerhalb Chinas kann die Website also ein Jahr lang jeden Morgen aufrufen, ohne dass ihm etwas auffällt.

Darunter arbeitet die Maschinerie, über die ohnehin alle schreiben: vergiftetes DNS, gesperrte IP-Bereiche, in Echtzeit mitgelesene Paketinhalte. Die Firewall spürt außerdem VPN-Signaturen auf, und [eine Standardinstallation von WordPress bringt mehrere Abhängigkeiten mit, die daran hängen bleiben](/de/wordpress-in-china/). Das alles gibt es wirklich. Die verlorenen Kundenanfragen gehen aber fast immer auf das Konto einer offenen Verbindung, die niemand im Blick hat.

| Google | Suche, Gmail, Maps, YouTube, Analytics, Ads |

Über einen Anschluss in Festlandchina sind die Google-Suche, Gmail, Maps, YouTube und Google Ads nicht nutzbar. Für eine Website kommt es vor allem auf Google Analytics an. Der Dienst steht, wie alles auf dieser Seite, mit Testdatum in der Tabelle weiter unten. Zuletzt scheiterte `www.google-analytics.com` am 24. Juli 2026 an einem GreatFire-Test. Wird das Tag auf einer Seite in China ausgelöst, kommt der Messaufruf nie an: Die Daten gehen verloren, ob das Container-Skript nun geladen wurde oder nicht.

Google Fonts ist die Ausnahme, und gerade hier liegen viele in beide Richtungen daneben. Deshalb ein eigener Absatz.

> Am 28. August 2026 schloss `fonts.googleapis.com`, gemessen von einer Instanz bei Alibaba Cloud (阿里云) in der Region cn-zhangjiakou, 72 von 72 Anfragen ab, bei Stichproben im Zehn-Minuten-Takt über zwölf Stunden und mit einem Median von 111 ms bis zum ersten Byte. Über einen privaten Anschluss von China Mobile (中国移动) in Peking beantwortete derselbe Host am 30. August 2026, verteilt auf 264 Seitenaufrufe, 0 von 54 Anfragen.
> Quelle: 21YunBox, A Day of Third-Party Requests From Inside China, August 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

Keine der beiden Pauschalaussagen hält diesen zwei Messungen stand. Von Rechenzentren auf dem Festland aus wird Google Fonts aufgelöst, über private Anschlüsse häufig nicht. Genau das spricht dafür, die Schriften selbst zu hosten: So fällt eine Variable weg, die sich je nach Netz, Resolver und Uhrzeit ändert. `fonts.google.com`, die Oberfläche zum Durchsuchen der Schriften, ist ohnehin nicht erreichbar.

## Alle erfassten Abhängigkeiten und ihr letzter Testtermin

Die Seiten, die bei diesen Fragen oben stehen, liefern keinerlei Belege. Auf keiner der Kompatibilitätsseiten, die wir bei Chinafy, AppInChina und kleineren Agenturen gelesen haben, findet sich eine Tabelle, ein Testdatum, ein benannter Testort oder eine Latenzzahl. Dabei veröffentlichen die Messanbieter durchaus Zahlen, nur zitieren die Seiten, die Ihnen erklären, was nicht funktioniert, sie nicht. Die Tabelle unten holt das nach, Zeile für Zeile.

Damit kein Missverständnis entsteht, woher diese Zahlen stammen: Jede Zeile geht auf GreatFire oder 21YunBox zurück, mit Quelle und Datum. Eigene Messungen sind noch nicht darunter. Unsere Sonde entsteht gerade, in einem Rechenzentrum auf dem Festland und an einem privaten Anschluss in Peking. Sobald sie läuft, erscheinen ihre Ergebnisse neben denen Dritter, als unsere gekennzeichnet und ohne diese stillschweigend zu ersetzen.

Die Tabelle vereint zwei Arten von Belegen, die unterschiedliche Fragen beantworten. Ein Erreichbarkeitsbefund sagt, ob sich zu einem Host überhaupt eine Verbindung aufbauen lässt. Ein zeitlich gemessener Seitenaufruf zeigt, wie lange die Website des Anbieters selbst brauchte, um von einer benannten Sonde in Festlandchina aus vollständig zu laden. Dieser Wert nähert sich dem Skript-Endpunkt an, den der Browser Ihres Besuchers aufruft, misst ihn aber nicht direkt. Weichen beide voneinander ab, stehen beide in der Tabelle, ohne dass ein Mittelwert gebildet wird.

Die Spalte „Befund“ kennt sechs Werte. Bei zweien lohnt ein zweiter Blick: „sporadisch gestört“ und „je nach Messpunkt verschieden“. Genau dort wirkt ein Host auf denjenigen, der ihn zuletzt geprüft hat, völlig gesund.

| Befund | Bedeutung |
|---|---|
| Erreichbar | Verbindet sich und lädt vollständig |
| Langsam | Lädt vollständig, allerdings zu einem Preis, den man kennen sollte |
| Antwortet, bleibt dann hängen | Das erste Byte kommt an, doch der Ladevorgang endet nicht binnen 60 Sekunden |
| Sporadisch gestört | Störungen bei den jüngsten aussagekräftigen Tests, jedoch keine eindeutige Sperre |
| Gesperrt | Keine nutzbare Verbindung |
| Je nach Messpunkt verschieden | Ein Rechenzentrum und ein privater Anschluss liefern für denselben Host gegensätzliche Ergebnisse |

### Noch nicht gemessen

Für dreizehn Abhängigkeiten gibt es kein Testergebnis, für das wir geradestehen würden, entweder weil niemand sie geprüft hat oder weil der einzige verfügbare Befund älter als neunzig Tage ist. Wir listen sie trotzdem auf, denn auch die Lücke sagt etwas aus: Crisp, Tawk.to, Loom, Sanity, Netlify, Bootstrap CDN, `js.stripe.com`, das LinkedIn Insight Tag, Cloudflare Turnstile, Adobe Fonts, Font Awesome, Marketo und das Tracking-Skript von HubSpot.

Drift ist die vierzehnte, und an diesem Fall lässt sich zeigen, wie Fehler entstehen. Drift gilt gemeinhin als erreichbar, doch dieser Befund bezieht sich auf die Marketing-Website. `js.driftt.com`, der Host, den der Browser des Besuchers tatsächlich aufruft, wurde nie getestet. Ein Befund zum falschen Hostnamen: So entsteht das meiste, was zu diesem Thema geschrieben wird.

Das Testdatum zählt so viel wie der Befund. Ein Befund vom März sagt etwas über den März. Zwei Zeilen der Tabelle sind sechs Monate alt, Wistia und der Telemetrie-Host von Mapbox, und beide weisen in ihren Zellen darauf hin. Wistia ist ein Videoplayer, den ein Marketingteam noch heute Nachmittag einbinden könnte, im Vertrauen auf eine Messung aus dem Frühjahr.

Zuletzt haben wir diese Tabelle am 22. September 2026 mit ihren Quellen abgeglichen, und jede Zeile, die älter als neunzig Tage wird, prüfen wir erneut. Wer sie deutlich später liest und für sein Projekt auf eine bestimmte Zeile angewiesen ist, sollte den Host zuerst selbst testen.

### Warum Stripe außerhalb dieser Tabelle steht

Stripe ist der Name, den man in einer solchen Tabelle erwartet. Sein Fall betrifft jedoch eine andere Frage. Ob `js.stripe.com` aus Shanghai lädt, spielt keine Rolle, denn die Hürde ist lizenzrechtlicher Natur.

> Festlandchina steht nicht auf Stripes eigener Liste der Länder, in denen sich ein Stripe-Konto eröffnen lässt. Hongkong schon.
> Quelle: Stripe, Global availability, abgerufen am 22. September 2026. https://stripe.com/global

Ein Unternehmen auf dem Festland bekommt kein inländisches Acquiring, ganz gleich, ob das Skript den Browser erreicht. Die Auslieferung zu optimieren, bringt daher nichts. Die eigentlich relevante Frage lautet, wie man Zahlungen über Alipay (支付宝), WeChat Pay (微信支付) und UnionPay (银联) annimmt. Was wir dazu bislang veröffentlicht haben, findet sich am ehesten in [unserem Leitfaden zum Betrieb eines WooCommerce-Shops in China](/de/ressourcen/china-web-leitfaden/woocommerce-china-store-guide/).

PayPal liegt anders und steht deshalb in der Tabelle: Der Dienst ist erreichbar, wenn auch teilweise gestört, und gestört sind ausgerechnet die Weiterleitungen im Bezahlvorgang.

## Table strings, final

As pass 2, unchanged.

Step 3 complete. DE page state: changed passages native, FAZ / Handelsblatt register, Sie consistent with the untouched sections, German quotation marks „…“ on the two verdict labels.
