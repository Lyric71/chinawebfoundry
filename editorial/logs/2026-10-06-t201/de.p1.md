# DE, pass 1 (humanised native translation, every changed passage rewritten from scratch)

## host-website-in-china, line 23 (tail) + new blockquote
und jedes Skript und jede Schrift von einem ausländischen Host, den das Netz des Besuchers nicht erreicht, bleibt schlicht hängen. Google Fonts ist der Klassiker: Aus einem Rechenzentrum auf dem Festland antwortet der Dienst, über einen Privatanschluss in Peking bleibt er stumm.

> In den Tests von 21YunBox beantwortete `fonts.googleapis.com` 72 von 72 Anfragen von einer Alibaba-Cloud-Instanz (阿里云) in cn-zhangjiakou am 28. August 2026 und 0 von 54 über einen privaten Breitbandanschluss von China Mobile (中国移动) in Peking am 30. August 2026.
> Quelle: 21YunBox, A Day of Third-Party Requests From Inside China, August 2026. URL

## host-website-in-china, undated latency blockquote
Gestrichen (keine Übersetzung).

## host-website-in-china, Baidu paragraph
Dann die Suche. Baidu (百度) ist die Suchmaschine, auf die es hier ankommt, und sie kann nur Seiten ranken, die sie vom Festland aus crawlen und laden kann. Baidu veröffentlicht keine Regel, die einen Festland-Host oder eine ICP-Registrierung als solche belohnt; das Argument für lokales Hosting stützt sich daher auf den Crawler-Zugang und die Ladezeit aus Festlandnetzen, und beides lässt sich prüfen.

## vetting-a-wordpress-agency-china, line 41 (changed sentences)
Eine typische WordPress-Installation lädt, sobald Theme und Plugins drin sind, klammheimlich Google Fonts, Google Maps, reCAPTCHA und oft auch Analyse- oder Zahlungsskripte von Servern außerhalb Chinas. Manche davon sind schlicht gesperrt. Google Fonts antwortet oder schweigt, je nach Netz des Besuchers. Bleibt eine Anfrage unbeantwortet, zeigt die Seite dabei keinen Fehler an.

## vetting-a-wordpress-agency-china, line 83
Welche ausländischen Skripte müssen Sie in unserer bestehenden Seite ersetzen?

## woocommerce-china-store-guide, table row
| Skripte | Google Fonts über Privatanschlüsse, reCAPTCHA | Selbst hosten oder ersetzen |

## woocommerce-china-store-guide, paragraph + new blockquote
Erstens die ausländischen Skripte. Ein Standardshop lädt klammheimlich Google Fonts und reCAPTCHA. In den Tests, die 21YunBox im August 2026 veröffentlicht hat, scheiterte reCAPTCHA an jeder Anfrage, aus einem Rechenzentrum auf dem Festland ebenso wie über einen Privatanschluss in Peking; Google Fonts antwortete dem Rechenzentrum, dem Privatanschluss nie. So oder so hängt die Seite und wartet auf eine Antwort, die nie kommt.

> In den Tests von 21YunBox beantwortete `www.google.com/recaptcha` 0 von 72 Anfragen von einer Alibaba-Cloud-Instanz (阿里云) in cn-zhangjiakou am 28. August 2026 und 0 von 18 über einen privaten Breitbandanschluss von China Mobile (中国移动) in Peking am 30. August 2026. `fonts.googleapis.com` beantwortete 72 von 72 und 0 von 54.
> Quelle: 21YunBox, A Day of Third-Party Requests From Inside China, August 2026. URL

## great-firewall-what-it-blocks, line 66 (last sentence)
`fonts.google.com`, die Oberfläche zum Durchsuchen der Schriften, ist ein eigener Host: GreatFire stufte ihn bei seinen letzten beiden aussagekräftigen Tests als zu 100 % gestört ein, zuletzt am 30. September 2026.

## great-firewall-what-it-blocks, lines 74 and 76
Ein einziger vergessener Google-Fonts-Verweis, tief in Ihrem CSS verborgen, kann die Seite für jeden Besucher leer lassen, dessen Netz ihn nie beantwortet.
> Ein einziger vergessener Google-Fonts-Verweis in Ihrem CSS kann die Seite für jeden Besucher leer lassen, dessen Netz ihn nie beantwortet.

## great-firewall-what-it-blocks, line 208 and line 216
| ausländische Abhängigkeiten ersetzen |
**Ersetzen Sie jede ausländische Abhängigkeit.**
Trifft auch nur einer davon eine Domain, die das Netz Ihrer Besucher nicht erreicht,

## is-wordpress-blocked-in-china, line 105
fonts.google.com, die Oberfläche, in der Ihre Gestalter Schriften aussuchen, ist ein eigener Host, den 21YunBox nicht getestet hat. GreatFire stufte ihn bei seinen letzten beiden aussagekräftigen Tests als zu 100 % gestört ein, zuletzt am 30. September 2026.

Step 1 complete.
