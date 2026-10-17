---
title: "reCAPTCHA in China: Ihre Formulare bleiben stumm"
subtitle: "Warum Besucher in Festlandchina kein mit reCAPTCHA geschütztes Formular absenden können, was der Wechsel zu recaptcha.net bringt und was sich stattdessen eignet."
summary: "Laut GreatFire ist reCAPTCHA in Festlandchina gesperrt, geschützte Formulare weisen Besucher deshalb ab. Googles Ausweichlösung und die Alternativen."
visual: "/images/guides/recaptcha-china.webp"
order: 40
published: true
publishedAt: "2026-10-08"
updatedAt: 2026-10-18
reviewBy: "2026-11-18"
category: "Technology"
author: "cyril-drouin"
---

Ein mit Google reCAPTCHA geschütztes Formular lässt sich aus Festlandchina nicht absenden. Am 28. August 2026 fragte 21YunBox `www.google.com/recaptcha` 72-mal von einem Server bei Alibaba Cloud (阿里云) in Zhangjiakou ab und erhielt keine Antwort. Am 30. August versuchte es ein privater Anschluss von China Mobile (中国移动) in Peking 18-mal, ebenfalls ohne Antwort. GreatFire, das die Zensur in China beobachtet, stuft die Adresse als gesperrt ein; der letzte Test datiert vom 28. September 2026.

Ohne Skript gibt es kein Token, und ein Formular, das ein Token verlangt, weist den Besucher ab. Eine Warnung erreicht Ihr Postfach nicht. Googles eigene Ausweichlösung besteht darin, das Widget von `www.recaptcha.net` zu laden, das GreatFire als nicht gesperrt einstuft. Ladezeiten dafür hat allerdings noch kein veröffentlichter Test gemessen. Wir würden trotzdem auf ein Captcha umsteigen, das aus China heraus betrieben wird, etwa das von Alibaba Cloud oder von Tencent Cloud (腾讯云). Jede Zahl in diesem Beitrag wurde am 8. Oktober 2026 an der Quelle überprüft.

## Warum ein reCAPTCHA-Formular aus China nie ankommt

| Host                       | Alibaba Cloud (阿里云), Zhangjiakou | Privatanschluss China Mobile (中国移动), Peking | Abgeschlossene Anfragen | Befund   | Getestet              |
| -------------------------- | ----------------------------------- | ----------------------------------------------- | ----------------------- | -------- | --------------------- |
| `www.google.com/recaptcha` | keine Antwort binnen 30 Sekunden    | keine Antwort                                   | 0 von 72 / 0 von 18     | gesperrt | 28. und 30. Aug. 2026 |

> Von einer Instanz bei Alibaba Cloud (阿里云) in cn-zhangjiakou, mit Stichproben im Zehn-Minuten-Takt über zwölf Stunden am 28. August 2026 und einem Timeout von 30 Sekunden, beantwortete `www.google.com/recaptcha` 0 von 72 Anfragen. Bei 264 Seitenaufrufen auf 88 realen Websites über einen privaten Breitbandanschluss von China Mobile (中国移动) in Peking am 30. August 2026 wurde www.google.com, der Host von reCAPTCHA, 18-mal angefragt und antwortete kein einziges Mal.
> Quelle: 21YunBox, A Chinese Cloud Probe Is Not a Chinese Visitor: The Same Hosts, Opposite Answers, August 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

Die Checkbox und auch die unsichtbare Prüfung der Version 3 stammen aus einem einzigen Skript unter `www.google.com/recaptcha/api.js`. Die letzten drei aussagekräftigen Tests von GreatFire für diese Adresse schlugen alle fehl.

> GreatFire stufte https://www.google.com/recaptcha/api.js als zu 100 % gesperrt ein, 3 von 3 aussagekräftigen Tests in den letzten 90 Tagen, letzter Test am 7. September 2026. Störungen von https://www.google.com/recaptcha verzeichnet es seit dem 7. Mai 2015.
> Quelle: GreatFire, September 2026. https://en.greatfire.org/https/www.google.com/recaptcha/api.js

Lädt das Skript nicht, sieht die Seite normal aus, und die Felder nehmen Eingaben wie gewohnt an. Das Token, das Google sonst ausstellt, entsteht aber nie, und Ihr Server braucht es, um die Prüfung abzuschließen.

> Der Server schickt das Token aus dem Formularfeld g-recaptcha-response an Googles siteverify-Adresse. Fehlt es, meldet Google den Fehler missing-input-response: „The response parameter is missing.“
> Quelle: Google for Developers, Verifying the user’s response, zuletzt aktualisiert am 14. Oktober 2024. https://developers.google.com/recaptcha/docs/verify

Ein Formular, das eine bestandene Prüfung voraussetzt, muss die Einsendung dann ablehnen. Der Besucher sieht eine Fehlermeldung oder einen Button, der nicht reagiert. Sie bekommen keine E-Mail. Und in Ihren Logs deutet nichts auf einen verlorenen Lead hin.

Version 3 verbirgt den Ausfall noch besser.

> „reCAPTCHA v3 unterbricht Ihre Nutzer nie.“ Das Skript lädt von https://www.google.com/recaptcha/api.js, mit dem Websiteschlüssel in einem render-Parameter.
> Quelle: Google for Developers, reCAPTCHA v3, zuletzt aktualisiert am 10. Juli 2024. https://developers.google.com/recaptcha/docs/v3

Da keine Checkbox auf dem Bildschirm erscheint, vermisst der Besucher nichts, was er melden könnte.

## Auf einem Festlandserver scheitert es bei jedem Besucher

Zieht die Website auf einen Festlandserver um, kommt in der Standardkonfiguration ein zweiter Fehler hinzu. Die Prüfung läuft von Ihrem Server zu Google, und auch diese Adresse stuft GreatFire als gesperrt ein.

> GreatFire stufte https://www.google.com/recaptcha/api/siteverify als zu 100 % gesperrt ein, 1 von 1 aussagekräftigen Tests in den letzten 90 Tagen, letzter Test am 28. September 2026.
> Quelle: GreatFire, September 2026. https://en.greatfire.org/https/www.google.com/recaptcha/api/siteverify

Ein Server in China kann also kein einziges Token bestätigen, ganz gleich, wo sich der Besucher befindet. Jemand in London lädt die Seite, setzt das Häkchen (Google antwortet ihm in London problemlos) und klickt auf Senden. Der Server lehnt das Formular ab, weil seine eigene Anfrage an Google ins Leere lief. Setzen Sie das Captcha auf die Checkliste jedes Umzugs nach China; [unser Leitfaden zur Migration von WordPress nach China](/de/ressourcen/china-web-leitfaden/wordpress-nach-china-migrieren/) behandelt den Rest dieser Liste.

## Was der Wechsel zu recaptcha.net ändert

Google kennt das Problem und dokumentiert eine Lösung.

> „Ja, verwenden Sie ‚www.recaptcha.net‘ in Ihrem Code, wenn ‚www.google.com‘ nicht erreichbar ist.“ Ersetzen Sie die api.js-Adresse auf der Seite und „verfahren Sie ebenso überall sonst, wo Ihre Website ‚www.google.com/recaptcha/‘ verwendet“.
> Quelle: Google for Developers, reCAPTCHA FAQ, zuletzt aktualisiert am 2. April 2026. https://developers.google.com/recaptcha/docs/faq

Das bedeutet zwei Änderungen. Die eine betrifft die Skriptadresse auf der Seite, die andere, leichter zu vergessen, die Prüfadresse auf Ihrem Server. GreatFire hat beide Seiten des Wechsels getestet.

| Adresse                                      | Aufgabe                                    | Befund von GreatFire         | Aussagekräftige Tests, letzte 90 Tage | Letzter Test   |
| -------------------------------------------- | ------------------------------------------ | ---------------------------- | ------------------------------------- | -------------- |
| `www.google.com/recaptcha/api.js`            | Standard-Widget-Skript                     | gesperrt                     | 3 von 3 fehlgeschlagen                | 7. Sept. 2026  |
| `www.google.com/recaptcha/api/siteverify`    | Standard-Serverprüfung                     | gesperrt                     | 1 von 1 fehlgeschlagen                | 28. Sept. 2026 |
| `www.recaptcha.net`                          | die Ausweichdomain                         | nicht gesperrt               | 0 von 2 gestört                       | 30. Sept. 2026 |
| `www.recaptcha.net/recaptcha/api.js`         | Ausweich-Widget-Skript                     | nicht gesperrt               | 0 von 2 gestört                       | 27. Aug. 2026  |
| `www.gstatic.com/recaptcha`                  | Challenge-Code, den das Skript nachlädt    | nicht gesperrt               | 0 von 1 gestört                       | 20. Aug. 2026  |
| `www.recaptcha.net/recaptcha/api/siteverify` | Ausweich-Serverprüfung                     | beim letzten Test erreichbar | keiner in den letzten 90 Tagen        | 2. Mai 2026    |

> GreatFire stufte https://www.recaptcha.net als nicht gesperrt ein, 0 von 2 aussagekräftigen Tests gestört, letzter Test am 30. September 2026; von 30 getesteten recaptcha.net-Adressen gelten 28 als erreichbar und 2 als gestört. https://www.recaptcha.net/recaptcha/api.js stufte es am 27. August 2026 als nicht gesperrt ein, https://www.gstatic.com/recaptcha am 20. August 2026. Der letzte Test von https://www.recaptcha.net/recaptcha/api/siteverify fand am 2. Mai 2026 statt.
> Quelle: GreatFire, August bis September 2026. https://en.greatfire.org/https/www.recaptcha.net

Ein Befund von GreatFire hält fest, ob eine Verbindung von seinen Testpunkten aus zustande kam. Er enthält keine Zeitmessung und kein gesondertes Ergebnis für Privatanschlüsse.

Diese Lücke hat schon andere in die Irre geführt.

> GreatFire stufte https://fonts.googleapis.com als nicht gesperrt ein, 0 von 3 aussagekräftigen Tests gestört, letzter Test am 7. September 2026. Über einen privaten Anschluss von China Mobile (中国移动) in Peking sah 21YunBox am 30. August 2026, wie derselbe Host 54-mal angefragt wurde und kein einziges Mal antwortete.
> Quelle: GreatFire, September 2026. https://en.greatfire.org/https/fonts.googleapis.com; 21YunBox, A Chinese Cloud Probe Is Not a Chinese Visitor: The Same Hosts, Opposite Answers, August 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

Auch das Ausweichskript kommt nicht ohne fremde Hilfe aus. Die Datei `www.recaptcha.net/recaptcha/api.js` lädt ihren Challenge-Code von `www.gstatic.com/recaptcha`, einer weiteren Google-Domain mit durchwachsener Bilanz.

> Von 175 gstatic.com-Adressen, die GreatFire getestet hat, gelten 8 als gesperrt, 42 als gestört und 123 als erreichbar; 2 haben keinen Befund.
> Quelle: GreatFire, abgerufen am 8. Oktober 2026. https://en.greatfire.org/https/www.gstatic.com

Und die Ausweich-Prüfadresse wurde seit Mai nicht mehr getestet. Wir prüfen jeden Befund auf dieser Seite bis zum 18. November 2026 erneut.

Wenn Ihre Formulare jetzt scheitern, stellen Sie zuerst um und planen Sie danach den Ersatz.

## Was sich in China statt reCAPTCHA eignet

Wer ganz auf Google verzichten will, hat fünf realistische Optionen.

Alibaba Cloud (阿里云) und Tencent Cloud (腾讯云) verkaufen beide ein Captcha, das wie reCAPTCHA arbeitet: ein Widget auf der Seite, dann eine Prüfung, die Ihr Server bei der API des Anbieters vornimmt, bevor er das Formular annimmt.

| Option                                      | Widget ausgeliefert von     | Belege                                                                  |
| ------------------------------------------- | --------------------------- | ----------------------------------------------------------------------- |
| Alibaba Cloud Captcha 2.0 (阿里云验证码2.0)  | Alibaba Cloud               | Herstellerdokumentation, 11. Sept. 2026: Regionen Shanghai und Singapur |
| Tencent Cloud Captcha (腾讯云验证码)         | Tencent Cloud               | Herstellerdokumentation, 18. Sept. 2026                                 |
| hCaptcha                                    | `js.hcaptcha.com`           | GreatFire: nicht gesperrt, 25. und 26. Sept. 2026                       |
| Cloudflare Turnstile                        | `challenges.cloudflare.com` | GreatFire: Skript nicht gesperrt, 0 von 1, 23. Sept. 2026               |
| Eine Prüfung auf dem eigenen Server         | Ihre eigene Domain          | kein Drittanbieter-Host beteiligt                                       |

> Nach der clientseitigen Integration ruft der Server VerifyIntelligentCaptcha auf. Alibaba Cloud nennt zwei Serviceregionen: Festlandchina (Shanghai, unter captcha.cn-shanghai.aliyuncs.com) und außerhalb des Festlands (Singapur, unter captcha.ap-southeast-1.aliyuncs.com). Die auf der Seite eingestellte Region muss zur Adresse passen, die der Server aufruft, sonst liefert die Prüfung einen Fehler.
> Quelle: Hilfecenter von Alibaba Cloud (阿里云), Captcha 2.0 server access, aktualisiert am 11. September 2026. https://help.aliyun.com/zh/captcha/captcha2-0/user-guide/server-access

In der Praxis heißt das: Legen Sie die Region fest, bevor die erste Zeile Servercode entsteht.

> Der Server prüft jedes Ticket mit DescribeCaptchaResult unter captcha.tencentcloudapi.com. Ein CaptchaCode von 1 bedeutet, dass die Prüfung bestanden ist.
> Quelle: Tencent Cloud (腾讯云), Captcha ticket verification, zuletzt aktualisiert am 18. September 2026. https://cloud.tencent.com/document/product/1110/36926

GeeTest (极验) ist der dritte chinesische Name, zu dem Entwickler greifen. Datierte Dokumentation dazu haben wir nicht gefunden, deshalb taucht GeeTest in der Tabelle nicht auf.

Für hCaptcha und Turnstile gilt derselbe Vorbehalt wie für den Wechsel zu recaptcha.net. Ihre Befunde bei GreatFire sind sauber, doch keine Quelle, die wir zitieren können, hat einen der beiden von einem Privatanschluss aus gemessen.

> GreatFire stufte https://hcaptcha.com am 25. September 2026 als nicht gesperrt ein, 0 von 3 aussagekräftigen Tests gestört, https://js.hcaptcha.com am 26. September und https://api2.hcaptcha.com am 14. September ebenfalls. https://challenges.cloudflare.com/turnstile/v0/api.js stufte es am 23. September 2026 als nicht gesperrt ein, 0 von 1.
> Quelle: GreatFire, September 2026. https://en.greatfire.org/https/hcaptcha.com und https://en.greatfire.org/https/challenges.cloudflare.com/turnstile/v0/api.js

ChinaWebFoundry setzt auf der eigenen Website die letzte Option ein. Unser Kontaktformular enthält ein verstecktes Honeypot-Feld, das nur Bots ausfüllen, und die Zugangsprüfung unseres Scanners ist eine kleine Rechenaufgabe, die unser eigener Server signiert und prüft. Keines von beiden ruft einen Drittanbieter-Host auf.

Nur das Captcha auszutauschen, ist ein überschaubarer Auftrag. Auf den meisten Websites steht es auf einer Liste mit Schriften, Karten, Analytics und eingebetteten Videos, und diese Liste arbeiten wir im Rahmen unserer [Leistung für Plugins und Erweiterungen](/de/leistungen/plugins-erweiterungen/) ab. Unsere Übersicht, [was die Great Firewall sperrt, Host für Host](/de/ressourcen/china-web-leitfaden/great-firewall-china/), zeigt, was sonst noch typischerweise darauf steht.

## Was Website-Betreiber fragen

**Funktioniert reCAPTCHA v3 in China?**

Version 3 lädt von derselben Skriptadresse wie Version 2, und GreatFire stufte diese Adresse in 3 von 3 aussagekräftigen Tests als gesperrt ein, zuletzt am 7. September 2026. Sie scheitert also auf dieselbe Weise, nur leiser. Weil sie Besuchern nichts anzeigt, fällt keine fehlende Checkbox auf, und Ihr Server erhält kein Token, das er bewerten könnte.

**Behebt der Wechsel zu recaptcha.net mein Formularproblem?**

Er ist derzeit die einzige reCAPTCHA-Konfiguration mit sauberen GreatFire-Befunden: Die Domain recaptcha.net und ihr Skript galten im August und September 2026 beide als nicht gesperrt. Eine Zeitmessung oder ein Test von einem Privatanschluss liegt nicht vor, und das Skript lädt weiterhin Code von `www.gstatic.com`. Betrachten Sie den Wechsel als Notlösung, bis Sie auf ein Captcha vom Festland umgestiegen sind.

**Wie prüfe ich, ob meine Website reCAPTCHA verwendet?**

Durchsuchen Sie den Seitenquelltext nach `www.google.com/recaptcha` und `g-recaptcha`. Formular-Plugins und Page Builder können es über ihre eigenen Einstellungen einbinden, schauen Sie also auch dort nach. Oder lassen Sie die Website durch den [China Site Scanner](/de/china-site-scanner/) laufen, der die Drittanbieter-Hosts auflistet, die Ihre Seiten anfragen.
