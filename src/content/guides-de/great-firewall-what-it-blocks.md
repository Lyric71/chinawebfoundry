---
title: "Was die Große Firewall sperrt und was dann hilft"
subtitle: "Eine Sperre ist noch der harmlose Fall. Die Abhängigkeit, die antwortet und dann nie zu Ende lädt, bemerkt in Ihrem Team niemand."
summary: "Welche Dienste eine Website von China aus erreicht und welche nicht, Host für Host, mit Messpunkt und Testdatum in jeder Zeile."
visual: "/images/guides/great-firewall-what-it-blocks.webp"
order: 7
published: true
publishedAt: 2026-04-01
updatedAt: 2026-10-16
reviewBy: 2026-11-15
category: Technology
---

Eine Sperre fällt auf. Jemand im Büro meldet sie, und sie wird behoben. Ins Geld geht der stille Ausfall: Der Host antwortet, das erste Byte trifft nach einer halben Sekunde ein, und danach wird die Anfrage schlicht nie fertig.

> Wix lieferte im Median nach 532 ms ein erstes Byte, brachte aber keinen der 3 Seitenaufrufe binnen 60 Sekunden zu Ende (0 von 3). Gemessen am 30. August 2026 von einer Instanz bei Alibaba Cloud (阿里云) in der Region cn-zhangjiakou.
> Quelle: 21YunBox, Does Wix Work in China?, August 2026, Seite überarbeitet am 7. Oktober 2026. https://www.21cloudbox.com/support/wix-china.html

Verhält sich ein Widget so, baut sich die Seite um es herum ganz normal auf. Das Widget selbst bleibt leer, und nirgends taucht ein Fehler im Log auf. Ein Team außerhalb Chinas kann die Website also ein Jahr lang jeden Morgen aufrufen, ohne dass ihm etwas auffällt.

Darunter arbeitet die Maschinerie, über die ohnehin alle schreiben: vergiftetes DNS, gesperrte IP-Bereiche, in Echtzeit mitgelesene Paketinhalte. Die Firewall spürt außerdem VPN-Signaturen auf, und [eine Standardinstallation von WordPress bringt mehrere Abhängigkeiten mit, die daran hängen bleiben](/de/wordpress-in-china/). Das alles gibt es wirklich. Die verlorenen Kundenanfragen gehen aber fast immer auf das Konto einer offenen Verbindung, die niemand im Blick hat.

## Wie die Große Firewall tatsächlich funktioniert

Fünf Systeme laufen parallel. Sie fangen Unterschiedliches auf unterschiedlichen Ebenen ab.

| Schicht | Methode | Was sie tut |
|---|---|---|
| DNS-Vergiftung | gibt falsche IP-Adressen zurück | leitet Anfragen nach gesperrten Domains ins Leere |
| IP-Sperre | sperrt IP-Bereiche | kappt bekannte IPs ausländischer Dienste auf Netzwerkebene |
| Deep Packet Inspection | liest Paketinhalte | kappt Verbindungen, wenn die Nutzlast auffälligen Mustern entspricht |
| URL-Filterung | filtert einzelne URLs | sperrt einzelne Seiten nach Stichwort, nicht ganze Domains |
| VPN-Erkennung | erkennt VPN-Protokolle | drosselt oder sperrt VPN-Verkehr anhand der Signatur |

**Die DNS-Vergiftung** ist die einfachste Schicht. Fragt jemand in China eine gesperrte Domain an, gibt die Firewall eine falsche IP-Adresse zurück. Die Anfrage läuft nicht in einen Timeout. Sie landet irgendwo, wo sie nicht hin sollte. Der Nutzer sieht eine Fehlermeldung oder eine leere Seite und hat keine Ahnung, warum.

**Die IP-Sperre** geht gröber vor. Ganze IP-Bereiche, die an bekannte ausländische Dienste gebunden sind, werden auf Netzwerkebene gekappt. Kommen Sie mit einem alternativen Resolver an der DNS-Vergiftung vorbei, können Sie trotzdem keine Verbindung aufbauen, weil die IP selbst gesperrt ist.

**Die Deep Packet Inspection** ist die Schicht, die am meisten zählt. Das System liest, was in den Paketen steckt, und schaut dabei über den Ziel-Header hinaus. Passt der Inhalt zu auffälligen Mustern, wird die Verbindung mitten in der Übertragung gekappt. Das macht Chinas Firewall ungleich wirksamer als die einfacheren nationalen Filtersysteme.

> Die Deep Packet Inspection liest den Inhalt Ihres Datenverkehrs auf Ebene der Nutzlast. Genau diese Schicht macht die Große Firewall grundsätzlich schwerer zu umgehen als alles andere da draußen.

**Die URL-Filterung** arbeitet auf Seitenebene. Eine Domain bleibt vielleicht erreichbar, doch einzelne URLs mit bestimmten Stichwörtern werden herausgefiltert: eine chirurgisch genaue Filterung auf Seitenebene.

**Die VPN-Erkennung** ist die jüngste Ergänzung. Die Firewall erkennt VPN-Protokolle an ihren Verkehrssignaturen und drosselt oder sperrt sie. Ein Verbraucher-VPN, das vor zwei Jahren zuverlässig lief, baut heute womöglich gar keine Verbindung mehr auf. Das System wird immer besser darin, sie zu erkennen.

## Was gesperrt ist (und warum es Ihre Website kaputt macht)

Ausländische Unternehmen richten den Blick gern auf die politische Seite der Großen Firewall. Was für Ihre Website wirklich zählt, sind die technischen Abhängigkeiten.

| Kategorie | Gesperrte Dienste |
|---|---|
| Google | Suche, Gmail, Maps, YouTube, Analytics, Ads |
| Soziale Medien | Facebook, Instagram, WhatsApp, Messenger, Twitter/X, Reddit, Pinterest |
| Arbeitswerkzeuge | Dropbox, Slack, Notion, Trello |
| Unterhaltung | Netflix, Spotify, Twitch |
| Nachrichten | New York Times, Wall Street Journal, BBC |
| Nachschlagewerke | Wikipedia (chinesische Ausgabe) |

Über einen Anschluss in Festlandchina sind die Google-Suche, Gmail, Maps, YouTube und Google Ads nicht nutzbar. Für eine Website kommt es vor allem auf [Google Analytics](/de/ressourcen/china-web-leitfaden/google-analytics-china/) an. Der Dienst steht, wie alles auf dieser Seite, mit Testdatum in der Tabelle weiter unten. Zuletzt scheiterte `www.google-analytics.com` am 24. Juli 2026 an einem GreatFire-Test. Wird das Tag auf einer Seite in China ausgelöst, kommt der Messaufruf nie an: Die Daten gehen verloren, ob das Container-Skript nun geladen wurde oder nicht.

Google Fonts ist die Ausnahme, und gerade hier liegen viele in beide Richtungen daneben. Deshalb ein eigener Absatz.

> Am 28. August 2026 schloss `fonts.googleapis.com`, gemessen von einer Instanz bei Alibaba Cloud (阿里云) in der Region cn-zhangjiakou, 72 von 72 Anfragen ab, bei Stichproben im Zehn-Minuten-Takt über zwölf Stunden und mit einem Median von 111 ms bis zum ersten Byte. Über einen privaten Anschluss von China Mobile (中国移动) in Peking beantwortete derselbe Host am 30. August 2026, verteilt auf 264 Seitenaufrufe, 0 von 54 Anfragen.
> Quelle: 21YunBox, A Day of Third-Party Requests From Inside China, August 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

Keine der beiden Pauschalaussagen hält diesen zwei Messungen stand. Von Rechenzentren auf dem Festland aus wird Google Fonts aufgelöst, über private Anschlüsse häufig nicht. Genau das spricht dafür, die Schriften selbst zu hosten: So fällt eine Variable weg, die sich je nach Netz, Resolver und Uhrzeit ändert. `fonts.google.com`, die Oberfläche zum Durchsuchen der Schriften, läuft über einen eigenen Host: GreatFire verzeichnete bei den letzten beiden aussagekräftigen Tests jeweils Störungen, zuletzt am 30. September 2026.

Gesperrt sind außerdem Facebook, Instagram, WhatsApp und Messenger, ebenso Twitter/X, Reddit und Pinterest sowie die chinesische Ausgabe von Wikipedia.

Auch die Arbeitswerkzeuge, auf die sich westliche Unternehmen verlassen, sind gesperrt: Dropbox, Slack, Notion und Trello. Bindet Ihre Seite eines davon ein oder lädt sie Ressourcen von deren Domains, ist diese Integration in China tot.

Netflix, Spotify und Twitch sind ebenfalls gesperrt, dazu die meisten großen westlichen Nachrichtenseiten, darunter die New York Times, das Wall Street Journal und die BBC.

Was die meisten Unternehmen kalt erwischt, reicht über die gesperrten Dienste selbst hinaus. Jedes Skript, jede Schrift, jedes Widget und jeder API-Aufruf, der eine gesperrte Domain berührt, geht ebenfalls kaputt. Ein einziger vergessener Google-Fonts-Verweis, tief in Ihrem CSS verborgen, kann die Seite für jeden Besucher leer lassen, dessen Netz keine Antwort bekommt. Ein einziges Analytics-Tag kann den gesamten Seitenaufbau aufhalten.

> Ein einziger vergessener Google-Fonts-Verweis in Ihrem CSS kann die Seite für jeden Besucher leer lassen, dessen Netz keine Antwort bekommt. Der Schaden versteckt sich in Ihrem Code, in den Abhängigkeiten, von denen Sie gar nicht mehr wussten, dass es sie gibt.

## Alle erfassten Abhängigkeiten und ihr letzter Testtermin

Die Seiten, die bei diesen Fragen oben stehen, liefern keinerlei Belege. Auf keiner der Kompatibilitätsseiten, die wir bei Chinafy, AppInChina und kleineren Agenturen gelesen haben, findet sich eine Tabelle, ein Testdatum, ein benannter Testort oder eine Latenzzahl. Dabei veröffentlichen die Messanbieter durchaus Zahlen, nur zitieren die Seiten, die Ihnen erklären, was nicht funktioniert, sie nicht. Die Tabelle unten holt das nach, Zeile für Zeile.

Damit kein Missverständnis entsteht, woher diese Zahlen stammen: Jede Zeile geht auf GreatFire oder 21YunBox zurück, mit Quelle und Datum. Am 7. Oktober 2026 hat 21YunBox den Großteil seiner Messungen je Werkzeug zurückgezogen. Wo Zeilen darauf beruhten, steht nun das Urteil von GreatFire, und wo GreatFire keines gefällt hat, der Vermerk „nicht getestet“.

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

<!-- BEGIN DEPENDENCY TABLE: GENERATED FROM src/data/chinaDependencies.ts, DO NOT EDIT -->

### Webanalyse

| Dienst | Host oder Testziel | Befund | Messwert | Messpunkt | Quelle und Datum |
|---|---|---|---|---|---|
| Google Analytics | `www.google-analytics.com` | Gesperrt | Nur Erreichbarkeitsbefund | entfällt | GreatFire, 24. Juli 2026 |
| Google Tag Manager | `www.googletagmanager.com` | Je nach Messpunkt verschieden | 72 von 72 (erstes Byte nach 118 ms) und 0 von 112 | Alibaba Cloud (阿里云) cn-zhangjiakou und China Mobile (中国移动) in Peking | 21YunBox, 28. und 30. August 2026 |
| Meta Pixel | `connect.facebook.net` | Gesperrt | Nur Erreichbarkeitsbefund | entfällt | GreatFire, 27. Mai 2026 |
| Hotjar | `static.hotjar.com` | Sporadisch gestört | Störungen bei 1 der letzten 2 aussagekräftigen Tests | entfällt | GreatFire, 30. September 2026 |
| Amplitude, Skript-Host | `cdn.amplitude.com` | Erreichbar | Nur Erreichbarkeitsbefund | entfällt | GreatFire, 14. September 2026 |
| Amplitude, Event-Host | `api.amplitude.com` | Erreichbar | Nur Erreichbarkeitsbefund | entfällt | GreatFire, 10. September 2026 |
| Microsoft Clarity | `www.clarity.ms` | Erreichbar | Nur Erreichbarkeitsbefund | entfällt | GreatFire, 15. September 2026 |
| Mixpanel, Skript-Host | `cdn.mxpnl.com` | Sporadisch gestört | Störungen bei 100 % der jüngsten aussagekräftigen Tests (1 Test) | entfällt | GreatFire, 6. September 2026 |
| Mixpanel, Event-Host | `api.mixpanel.com` | Erreichbar | Nur Erreichbarkeitsbefund | entfällt | GreatFire, 19. September 2026 |
| Segment | `api.segment.io` | Erreichbar | Nur Erreichbarkeitsbefund | entfällt | GreatFire, 15. September 2026 |
| Plausible | `plausible.io` | Sporadisch gestört | Störungen bei 1 der letzten 2 aussagekräftigen Tests | entfällt | GreatFire, 20. August 2026 |
| Matomo Cloud | Nicht geprüft | Nicht getestet | Kein Test verzeichnet | entfällt | entfällt |

### Formulare und Chat

| Dienst | Host oder Testziel | Befund | Messwert | Messpunkt | Quelle und Datum |
|---|---|---|---|---|---|
| Typeform | `form.typeform.com` | Erreichbar | Nur Erreichbarkeitsbefund | entfällt | GreatFire, 30. September 2026 |
| Mailchimp | `cdn-images.mailchimp.com` | Gesperrt | Nur Erreichbarkeitsbefund | entfällt | GreatFire, 10. September 2026 |
| hCaptcha | `api2.hcaptcha.com` | Erreichbar | Nur Erreichbarkeitsbefund | entfällt | GreatFire, 14. September 2026 |
| Cloudflare Turnstile | `challenges.cloudflare.com` | Erreichbar | Nur Erreichbarkeitsbefund | entfällt | GreatFire, 11. Oktober 2026 |
| Calendly | `calendly.com` | Erreichbar | Nur Erreichbarkeitsbefund | entfällt | GreatFire, 3. Oktober 2026 |
| Intercom | `widget.intercom.io` | Erreichbar | Nur Erreichbarkeitsbefund | entfällt | GreatFire, 23. September 2026 |
| Zendesk | `static.zdassets.com` | Erreichbar | Nur Erreichbarkeitsbefund | entfällt | GreatFire, 8. Oktober 2026 |
| Drift | `js.driftt.com` | Nicht getestet | Kein Test verzeichnet | entfällt | Von GreatFire nie getestet |
| Crisp | Nicht geprüft | Nicht getestet | Kein Test verzeichnet | entfällt | entfällt |
| Tawk.to | Nicht geprüft | Nicht getestet | Kein Test verzeichnet | entfällt | entfällt |

### Eingebettete Inhalte

| Dienst | Host oder Testziel | Befund | Messwert | Messpunkt | Quelle und Datum |
|---|---|---|---|---|---|
| Disqus | `disqus.com` | Gesperrt | 41 von 43 getesteten URLs gesperrt, 2 gestört | entfällt | GreatFire, 13. September 2026 |
| SoundCloud | `w.soundcloud.com` | Gesperrt | Nur Erreichbarkeitsbefund | entfällt | GreatFire, 24. Juni 2026 |
| Spotify | `open.spotify.com` | Gesperrt | Nur Erreichbarkeitsbefund | entfällt | GreatFire, 12. September 2026 |
| Instagram | `www.instagram.com` | Gesperrt | Nur Erreichbarkeitsbefund | entfällt | GreatFire, 3. Oktober 2026 |
| X, Timeline-Widget | `platform.twitter.com` | Gesperrt | Nur Erreichbarkeitsbefund | entfällt | GreatFire, 7. Juli 2026 |
| Wistia | `fast.wistia.com` | Sporadisch gestört | 9 von 15 Anfragen beantwortet; vollständige Videowiedergabe nicht geprüft | China Mobile in Peking | 21YunBox, 30. August 2026 |
| Loom | Nicht geprüft | Nicht getestet | Kein Test verzeichnet | entfällt | entfällt |

### Karten

| Dienst | Host oder Testziel | Befund | Messwert | Messpunkt | Quelle und Datum |
|---|---|---|---|---|---|
| Mapbox, Telemetrie | `events.mapbox.com` | Gesperrt | Nur Erreichbarkeitsbefund, Stand vor sechs Monaten | entfällt | GreatFire, 12. März 2026 |
| Mapbox, Kacheln und API | `api.mapbox.com` | Erreichbar | Nur Erreichbarkeitsbefund | entfällt | GreatFire, 31. August 2026 |
| OpenStreetMap-Kacheln | `tile.openstreetmap.org` | Gesperrt | Alle 71 getesteten URLs von openstreetmap.org gesperrt | entfällt | GreatFire, 7. September 2026 |

### Plattformen

| Dienst | Host oder Testziel | Befund | Messwert | Messpunkt | Quelle und Datum |
|---|---|---|---|---|---|
| Wix | `wix.com` | Antwortet, bleibt dann hängen | 0 von 3 binnen 60 s, erstes Byte nach 532 ms | Alibaba Cloud cn-zhangjiakou | 21YunBox, 30. August 2026 |
| Shopify | `cdn.shopify.com` | Erreichbar | Normale Verbindung bei den 2 jüngsten aussagekräftigen Tests | entfällt | GreatFire, 8. Oktober 2026 |
| Webflow | `webflow.com` | Sporadisch gestört | Störungen bei 100 % der jüngsten aussagekräftigen Tests (1 Test) | entfällt | GreatFire, 23. August 2026 |
| Squarespace | `www.squarespace.com` | Erreichbar | Nur Erreichbarkeitsbefund | entfällt | GreatFire, 3. Oktober 2026 |
| Netlify | Nicht geprüft | Nicht getestet | Kein Test verzeichnet | entfällt | entfällt |
| Sanity | Nicht geprüft | Nicht getestet | Kein Test verzeichnet | entfällt | entfällt |

### Infrastruktur

| Dienst | Host oder Testziel | Befund | Messwert | Messpunkt | Quelle und Datum |
|---|---|---|---|---|---|
| Algolia | `algolia.net` | Sporadisch gestört | Störungen bei 100 % der letzten 2 aussagekräftigen Tests, ermittelt für die Stammdomain; für die Suchhosts der einzelnen Anwendungen liegt kein Test vor | entfällt | GreatFire, 31. August 2026 |
| Firebase | `firebase.google.com` | Sporadisch gestört | Störungen bei 100 % der letzten 2 aussagekräftigen Tests | entfällt | GreatFire, 14. September 2026 |
| AWS CloudFront | `aws.amazon.com/cloudfront` | Erreichbar | 3 von 3 (erstes Byte nach 665 ms) und 3 von 3 (718 ms) | Alibaba Cloud cn-zhangjiakou und Privater Breitbandanschluss in Peking, Anbieter nicht angegeben | 21YunBox, 28. und 30. August 2026 |
| Sentry | `browser.sentry-cdn.com` | Sporadisch gestört | Störungen bei 100 % der jüngsten aussagekräftigen Tests (1 Test) | entfällt | GreatFire, 1. Oktober 2026 |
| Bootstrap CDN | Nicht geprüft | Nicht getestet | Kein Test verzeichnet | entfällt | entfällt |

### Zahlungen

| Dienst | Host oder Testziel | Befund | Messwert | Messpunkt | Quelle und Datum |
|---|---|---|---|---|---|
| PayPal | `www.paypal.com` | Erreichbar | Nur Erreichbarkeitsbefund | entfällt | GreatFire, 25. September 2026 |
| Stripe | `js.stripe.com` | Nicht getestet | Kein Test verzeichnet. Siehe Hinweis unten: Die Erreichbarkeit ist hier nicht die entscheidende Frage | entfällt | entfällt |

<!-- END DEPENDENCY TABLE: GENERATED -->

### Noch nicht gemessen

Für Crisp, Tawk.to, Loom, Sanity, Netlify, Bootstrap CDN und `js.stripe.com` liegen in diesem Verzeichnis keine datierten Tests vor. Auch für das HTTPS-Ladeskript von HubSpot, Drifts `js.driftt.com` und `cdn.matomo.cloud` fehlen verwertbare Ergebnisse. Ein Test der Anbieter-Website erlaubt keinen Rückschluss auf den Host des Widgets.

Adobe Fonts, Font Awesome und das LinkedIn Insight Tag haben datierte Testergebnisse.

> GreatFire meldete `use.typekit.net` und `snap.licdn.com` am 22. September 2026 als erreichbar, jeweils nach einem aussagekräftigen Test. Dasselbe gilt für `use.fontawesome.com` am 11. Oktober 2026 und `kit.fontawesome.com` am 13. September 2026, ebenfalls mit jeweils einem aussagekräftigen Test.
> Quelle: GreatFire, September und Oktober 2026. https://en.greatfire.org/https/use.typekit.net ; https://en.greatfire.org/https/snap.licdn.com ; https://en.greatfire.org/https/use.fontawesome.com ; https://en.greatfire.org/https/kit.fontawesome.com

Am beobachteten Privatanschluss antwortete der Adobe-Host nicht. Beim Verifizierungsdienst wurde erfasst, welche Anfragen eine Antwort erhielten. Ob Nutzer die Prüfung abschließen konnten, geht daraus nicht hervor.

> Über einen privaten Breitbandanschluss von China Mobile (中国移动) in Peking erhielt 21YunBox am 30. August 2026 auf keine der 11 Anfragen an `use.typekit.net` und keine der 6 Anfragen an `static.hotjar.com` eine Antwort. Bei `fast.wistia.com` scheiterten 6 von 15 Anfragen, bei `challenges.cloudflare.com` 3 von 12. GreatFire meldet die Skript-URL von Turnstile gesondert als erreichbar: bei 2 aussagekräftigen Tests, zuletzt am 11. Oktober 2026.
> Quelle: 21YunBox, 30. August 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html ; GreatFire, 11. Oktober 2026. https://en.greatfire.org/https/challenges.cloudflare.com/turnstile/v0/api.js

Der Erreichbarkeitsbefund für Marketos `munchkin.marketo.net` stammt vom 31. Mai 2026 und ist älter als 90 Tage. Die Quellen wurden am 16. Oktober 2026 erneut geprüft. Die Testdaten selbst bleiben unverändert. Die nächste redaktionelle Prüfung folgt am 15. November 2026.

> Quelle: GreatFire, 31. Mai 2026. https://en.greatfire.org/https/munchkin.marketo.net

### Warum Stripe außerhalb dieser Tabelle steht

Stripe ist der Name, den man in einer solchen Tabelle erwartet. Sein Fall betrifft jedoch eine andere Frage. Ob `js.stripe.com` aus Shanghai lädt, spielt keine Rolle, denn die Hürde ist lizenzrechtlicher Natur.

> Festlandchina steht nicht auf Stripes eigener Liste der Länder, in denen sich ein Stripe-Konto eröffnen lässt. Hongkong schon.
> Quelle: Stripe, Global availability, abgerufen am 22. September 2026. https://stripe.com/global

Ein Unternehmen auf dem Festland bekommt kein inländisches Acquiring, ganz gleich, ob das Skript den Browser erreicht. Die Auslieferung zu optimieren, bringt daher nichts. Die eigentlich relevante Frage lautet, wie man Zahlungen über Alipay (支付宝), WeChat Pay (微信支付) und UnionPay (银联) annimmt. Was wir dazu bislang veröffentlicht haben, findet sich am ehesten in [unserem Leitfaden zum Betrieb eines WooCommerce-Shops in China](/de/ressourcen/china-web-leitfaden/woocommerce-china-store-guide/).

Der Befund in der Tabelle gilt für `www.paypal.com`. Er belegt nicht, dass sich ein Zahlungsvorgang abschließen lässt.

## Strategien für ausländische Unternehmen

Durch die Firewall durchschlagen können Sie nicht, doch Sie können so bauen, dass Ihre Seite sie gar nicht erst überqueren muss.

| Strategie | Was sie löst |
|---|---|
| Hosting auf dem Festland plus ICP | Geschwindigkeit, Rankings, Konformität |
| China-CDN | Zwischenspeicherung an Edge-Knoten auf dem Festland |
| ausländische Abhängigkeiten ersetzen | Google Fonts zu lokal, GA zu Baidu Tongji, Maps zu Baidu Maps |
| Hosting in Hongkong | Mittelweg, keine ICP nötig |
| VPN-Bewusstsein | rechtliche Grauzone, Unterschied zwischen Firmen- und Verbrauchernutzung |

**Hosten Sie in Festlandchina mit einer ICP-Registrierung.** Das ist der sauberste Weg. Die Seite lebt innerhalb der Firewall, statt sich durch sie zu kämpfen: Die Anfragen bleiben im Land, Baiduspider crawlt ohne Umweg über die Grenze, und die Vorschriften sind erfüllt. Wenn Sie sich dem chinesischen Markt verschrieben haben, gehören Sie dorthin.

**Setzen Sie ein China-CDN ein,** um Inhalte an Edge-Knoten innerhalb von Festlandchina zwischenzuspeichern. Selbst wenn Ihr Ursprungsserver außerhalb des Landes steht, liefert ein CDN mit PoPs auf dem Festland zwischengespeicherte Seiten an chinesische Nutzer aus, ohne dass jede Anfrage sich durch die Firewall kämpfen muss.

**Ersetzen Sie jede ausländische Abhängigkeit.** Diesen Schritt übergehen Unternehmen am häufigsten. Google Fonts muss zu lokal gehosteten Schriften wechseln. Aus Google Maps wird Baidu Maps. Aus Google Analytics wird Baidu Tongji. Gehen Sie jeden externen Aufruf durch, den Ihre Seite macht. Jedes Skript-Tag, jeden Schrift-Import, jeden API-Endpunkt. Trifft auch nur einer davon eine Domain, die das Netz Ihrer Besucher nicht erreicht, bekommen Ihre chinesischen Nutzer ein kaputtes oder verschlechtertes Erlebnis, und wahrscheinlich wissen Sie es nicht einmal.

> Google Fonts, Google Analytics, Google Maps. Tauschen Sie sie gegen lokal gehostete Schriften, Baidu Tongji und Baidu Maps. Prüfen Sie jeden externen Aufruf, den Ihre Seite macht.

Bleibt **das Hosting in Hongkong** als Mittelweg, falls Sie für das ICP-Verfahren noch nicht bereit sind. Keine Lizenz nötig, die Latenz zum Festland ist gut beherrschbar, die meisten Störungen durch die Firewall fallen weg. Ein Kompromiss, aber ein brauchbarer für Unternehmen, die das Wasser erst einmal antesten.

**VPNs** sind eine Grauzone. Firmen-VPNs, die China-Büros an globale Netze anbinden, werden im Allgemeinen geduldet. Verbraucher-VPNs, die zum Umgehen der Firewall genutzt werden, sind technisch gesehen illegal, auch wenn die Durchsetzung je nach Region und Jahr schwankt. Ausländische Unternehmen, die in China tätig sind, sollten diesen Unterschied klar verstehen. Gehen Sie nicht davon aus, dass Ihre Mitarbeiter aus dem Büro heraus frei private VPNs nutzen können, um auf gesperrte Dienste zuzugreifen.
