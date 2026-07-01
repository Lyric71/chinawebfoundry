---
title: "WooCommerce in China: ein Shop, der verkauft"
subtitle: "Ein WooCommerce-Standardshop verliert chinesische Käufer, noch bevor sie bezahlen. So bringen Sie Zahlungen, Logistik, das Tempo an der Kasse und die ICP-Konformität fürs Festland in Ordnung."
summary: "In der Standardversion scheitert WooCommerce an chinesischen Käufern: blockierte Skripte, kein Alipay oder WeChat Pay, lahme Kasse. So bringen Sie Zahlungen, Logistik, Tempo und ICP-Konformität in Ordnung."
visual: "/images/guides/woocommerce-china-store-guide.webp"
order: 12
published: true
publishedAt: 2026-07-01
category: Technology
---

In Frankfurt oder Chicago läuft Ihr WooCommerce-Shop rund. Öffnet ihn jemand in Shanghai, wird er fast unbrauchbar. Gleiches Theme, gleiche Plugins. Und trotzdem hängt die Kasse, laden die Produktbilder nie, fehlt der eine Bezahl-Button, auf den es ankommt.

Für einen chinesischen Käufer ist das keine Kleinigkeit. Genau deshalb schließt er den Tab. WooCommerce funktioniert in China gut. Unverändert auf ein westliches Publikum gerichtet, tut es das nicht.

Dieser Leitfaden setzt voraus, dass Sie unseren Grundlagentext Website-Lokalisierung für China schon gelesen haben. Alles baut darauf auf, fangen Sie also dort an, falls noch nicht geschehen.

## WooCommerce in China im Überblick

| Bereich | Was standardmäßig bricht | Die Lösung |
| ---------- | ------------------------------------------ | ------------------------------ |
| Skripte | Google Fonts, reCAPTCHA, Stripe-JS blockiert | Selbst hosten oder ersetzen |
| Zahlungen | Nur Visa und Mastercard | Alipay + WeChat Pay + UnionPay |
| Tempo | Hosting im Ausland, kein CDN | Hosting auf dem Festland, Bild-CDN in China |
| Adressen | Westliche Feldreihenfolge abgelehnt | Von der Provinz zum Bezirk |
| Konformität | Kein ICP, keine Vertrauenssignale | ICP-Registrierung, lokale Nachweise |

## Warum WooCommerce-Standardshops an chinesischen Käufern scheitern

Drei Dinge brechen weg, meist alle zugleich.

Erstens die blockierten Skripte. Ein Standardshop lädt klammheimlich Google Fonts, reCAPTCHA und oft das JavaScript von Stripe. Jedes davon liegt hinter der Great Firewall, blockiert oder gedrosselt. Die Seite hängt und wartet auf eine Antwort, die nie kommt.

Zweitens die langsame Kasse. Hosten Sie den Shop in Europa oder den USA, dann läuft jede Aktion im Warenkorb zäh durch die Firewall hin und zurück. Chinesische Käufer warten nicht, bis sich das Ladesymbol fertig gedreht hat.

Drittens die fehlende lokale Zahlung. Zeigen Sie nur Visa und Mastercard, dann haben Sie den Shop fürs halbe Festland dichtgemacht, bevor überhaupt jemand zur Karte greift.

> Zusammen wickeln Alipay und WeChat Pay über 90 % der mobilen Zahlungen Chinas ab. Im ersten Quartal 2025 kamen die beiden zusammen auf rund 96 % des Marktes.

## China-taugliche Zahlungen einrichten

An diesem Punkt entscheidet sich, ob Sie überhaupt einen Shop haben.

Alipay (支付宝) und WeChat Pay (微信支付) stehen nicht zur Debatte. UnionPay (银联) ist ein sinnvolles Drittes für ältere und geschäftliche Käufer. Kreditkarten bleiben als Rückfalloption für den seltenen grenzüberschreitenden Käufer, mehr aber auch nicht.

| Zahlungsmethode | Wer sie nutzt |
| --------------------- | ------------------------------------- |
| WeChat Pay (微信支付) | Alltagskäufer, mobil, sozial |
| Alipay (支付宝) | Onlinehandel, grenzüberschreitend, Dienstleistungen |
| UnionPay (银联) | Ältere und geschäftliche Kunden |
| Visa / Mastercard | Nur gelegentliche ausländische Käufer |

Zeichnen Sie die Preise in RMB aus, dargestellt als ¥, an der Quelle festgelegt statt live aus dem Dollar an der Kasse umgerechnet. Ein Betrag, der mit dem Wechselkurs schwankt, weckt Misstrauen. Fürs Gateway gibt es zwei Wege: ein direktes Händlerkonto bei Alipay und Tenpay, dem Gateway von WeChat Pay, das eine chinesische Geschäftseinheit voraussetzt, oder einen Aggregator, der die Anbindung für Sie übernimmt. WooCommerce-Plugins gibt es für beides. Der direkte Weg rechnet sauberer ab und wird mit wachsendem Volumen günstiger.

Zwei Details rächen sich später. Eine Rückerstattung muss über dieselbe Wallet zurücklaufen, mit der der Käufer bezahlt hat, planen Sie das früh in Ihren Retourenablauf ein. Und viele Shops betreiben die Kasse zusätzlich in einem WeChat-Miniprogramm (小程序) und halten so den ganzen Kauf in der App, in der die meisten Käufer ohnehin unterwegs sind.

## Logistik, Versand und Steuern

Bringen Sie zuerst das Adressmodell in Ordnung. Chinesische Adressen laufen von der Provinz über die Stadt und den Bezirk bis zur Straße, umgekehrt zur westlichen Reihenfolge. Ihre Kassenfelder und deren Prüfung müssen dazu passen, sonst schicken die Kuriere das Label sofort zurück.

Für die Zustellung im Inland binden Sie einen lokalen Dienst wie SF Express (顺丰) ein, statt DHL-Tarife auf einen chinesischen Warenkorb zu schrauben. Der Versand von außerhalb des Festlands verändert auch das Steuerbild. Grenzüberschreitender E-Commerce über ein Zolllager wickelt Zoll und Abgaben weit berechenbarer ab als die Verzollung Paket für Paket, die Bestellungen wochenlang aufhalten kann. Unter diesem Modell wird die Bestellung zu einem umfassenden Steuersatz verzollt statt zum vollen Regelzoll, was für den Käufer meist günstiger ausfällt. Eine Kleinigkeit, die gern übersehen wird: Kuriere auf dem Festland rufen oft vor der Zustellung an, jede Bestellung braucht also eine echte, erreichbare Telefonnummer.

## Tempo und Zuverlässigkeit der Kasse optimieren

Werfen Sie jede blockierte Ressource aus den Warenkorb- und Kassenvorlagen. Hosten Sie Ihre Schriften selbst, ersetzen Sie reCAPTCHA durch eine konforme Lösung, ziehen Sie jedes ausländische Analyse-Tag heraus. Liefern Sie die Produktbilder über ein CDN in China aus, damit sie in derselben Umgebung laden, in der auch Ihr Käufer sitzt. Bauen Sie den Ablauf dann zuerst fürs Handy, denn dort steckt fast der gesamte Verkehr.

> Über 95 % der chinesischen Internetnutzer kaufen vom Handy. Eine Kasse, die sich nur am Schreibtisch richtig anfühlt, schließen die meisten nie ab.

## Konformität und Vertrauenssignale

Ein Shop, der auf dem Festland gehostet wird, braucht eine ICP-Registrierung (Bei'an), wie jede andere Seite auch. Ein Handelsshop fällt oft unter die kommerzielle ICP-Klasse, die Eigentumsregeln mit sich bringt, die man besser früh prüft.

Über die Lizenz hinaus prüft der Käufer ein paar Signale, bevor er einem Warenkorb traut: eine ICP-Nummer im Footer, eine Festlandnummer, Kundenservice über WeChat (微信), echte Bewertungen anderer chinesischer Kunden. Fehlen sie, wirkt selbst ein schneller, sauber gebauter Shop noch fremd, und fremd liest sich weiter als Risiko.

## Brauchen Sie einen WooCommerce-Shop, der für China gebaut ist?

ChinaWebFoundry richtet China-taugliches WooCommerce ein, von Zahlungen und Logistik bis zu Hosting und Konformität. Wenn das mehr ist, als Sie allein verdrahten wollen, melden Sie sich.
