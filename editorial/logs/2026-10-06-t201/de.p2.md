# DE, pass 2 (native rewrite from the pass 1 German, English not consulted)

## host, line 23 (tail)
- before: Google Fonts ist der Klassiker: Aus einem Rechenzentrum auf dem Festland antwortet der Dienst, über einen Privatanschluss in Peking bleibt er stumm.
+ after:  Google Fonts ist der Klassiker: Aus einem Rechenzentrum auf dem Festland ist der Dienst erreichbar, über einen Pekinger Privatanschluss bleibt er stumm.
why: "antwortet ... bleibt stumm" mixed two images; "erreichbar" is the FAZ technology-desk word.

## host, blockquote
+ after:  > Laut den Messungen von 21YunBox beantwortete `fonts.googleapis.com` am 28. August 2026 alle 72 Anfragen einer Alibaba-Cloud-Instanz (阿里云) in der Region cn-zhangjiakou, am 30. August 2026 dagegen keine der 54 Anfragen über einen privaten Breitbandanschluss von China Mobile (中国移动) in Peking.
why: date first and "alle 72 / keine der 54" is how German copy states a count; "0 von 54" read like a table cell.

## host, Baidu paragraph
+ after:  Dann die Suche. Baidu (百度) ist die Suchmaschine, auf die es hier ankommt, und sie kann nur Seiten ranken, die sie vom Festland aus crawlen und laden kann. Eine veröffentlichte Regel, nach der Baidu einen Festland-Host oder eine ICP-Registrierung an sich belohnt, gibt es nicht: Für lokales Hosting sprechen der Zugang des Crawlers und die Ladezeit in Festlandnetzen, und beides lässt sich überprüfen.
why: "das Argument ... stützt sich daher auf" was a nominal English skeleton.

## vetting, line 41
+ after:  Eine typische WordPress-Installation lädt samt Theme und Plugins klammheimlich Google Fonts, Google Maps, reCAPTCHA und oft auch Analyse- oder Zahlungsskripte von Servern außerhalb Chinas. Manche davon sind glatt gesperrt. Google Fonts antwortet oder schweigt, je nachdem, in welchem Netz der Besucher sitzt. Bleibt eine Anfrage unbeantwortet, zeigt die Seite keinen Fehler an.
why: "sobald Theme und Plugins drin sind" was colloquial; "samt" is written German.

## vetting, line 83
+ after:  Welche im Ausland gehosteten Skripte müssen Sie in unserer bestehenden Seite ersetzen?
why: "ausländische Skripte" can read as scripts in a foreign language.

## woo, table row
+ after:  | Skripte | Google Fonts am Privatanschluss, reCAPTCHA | Selbst hosten oder ersetzen |

## woo, paragraph + blockquote
+ after:  Erstens die im Ausland gehosteten Skripte. Ein Standardshop lädt klammheimlich Google Fonts und reCAPTCHA. In den Messungen, die 21YunBox im August 2026 veröffentlicht hat, blieb reCAPTCHA jede Antwort schuldig, im Rechenzentrum auf dem Festland ebenso wie am Pekinger Privatanschluss; Google Fonts antwortete dem Rechenzentrum, dem Privatanschluss nie. So oder so hängt die Seite und wartet auf eine Antwort, die nie kommt.
+ after:  > Laut den Messungen von 21YunBox beantwortete `www.google.com/recaptcha` am 28. August 2026 keine der 72 Anfragen einer Alibaba-Cloud-Instanz (阿里云) in der Region cn-zhangjiakou und am 30. August 2026 keine der 18 Anfragen über einen privaten Breitbandanschluss von China Mobile (中国移动) in Peking. `fonts.googleapis.com` beantwortete im ersten Fall alle 72, im zweiten keine der 54.
why: "scheiterte an jeder Anfrage" is an English verb frame; "blieb jede Antwort schuldig" is idiomatic.

## GFW, line 66
+ after:  `fonts.google.com`, die Oberfläche zum Durchsuchen der Schriften, läuft über einen eigenen Host: GreatFire verzeichnete bei den letzten beiden aussagekräftigen Tests jeweils Störungen, zuletzt am 30. September 2026.
why: "stufte ... als zu 100 % gestört ein" stacked a percentage on a verb frame; "jeweils Störungen" says 2 of 2 plainly.

## GFW, lines 74 and 76
+ after:  Ein einziger vergessener Google-Fonts-Verweis, tief in Ihrem CSS verborgen, kann die Seite für jeden Besucher leer lassen, dessen Netz keine Antwort bekommt.
+ after:  > Ein einziger vergessener Google-Fonts-Verweis in Ihrem CSS kann die Seite für jeden Besucher leer lassen, dessen Netz keine Antwort bekommt.
why: "dessen Netz ihn nie beantwortet" made the network answer the link.

## GFW, lines 208 and 216
+ after:  | ausländische Abhängigkeiten ersetzen |
+ after:  **Ersetzen Sie jede ausländische Abhängigkeit.**
+ after:  Trifft auch nur einer davon eine Domain, die das Netz Ihrer Besucher nicht erreicht,
why: kept; "Abhängigkeit von Übersee-Diensten" already appears on the vetting page, "ausländische Abhängigkeit" is unambiguous here.

## isWP, line 105
+ after:  fonts.google.com, die Oberfläche, in der Ihre Gestalter Schriften aussuchen, läuft über einen eigenen Host, den 21YunBox nicht gemessen hat. GreatFire verzeichnete bei den letzten beiden aussagekräftigen Tests jeweils Störungen, zuletzt am 30. September 2026.

Step 2 complete.
