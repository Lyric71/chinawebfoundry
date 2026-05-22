---
title: "Mobile-First-Design für China: genauer gesagt, Mobile-only"
subtitle: 'In China ist „Mobile First“ schon überholt. Über 95 % der Internetnutzer gehen vom Smartphone aus ins Netz. Ist Ihre Seite nicht für mobil gebaut, existiert sie nicht.'
summary: "Chinas Internet ist Mobile-only. Dieser Leitfaden behandelt Designprinzipien, die Kompatibilität mit dem WeChat-Browser, das Super-App-Ökosystem und die Mini-Programm-Strategie für ausländische Marken."
visual: "/images/guides/mobile-first-design-china.webp"
order: 9
published: true
publishedAt: 2026-04-01
updatedAt: 2026-05-01
category: Design
---

1,3 Milliarden Internetnutzer, und fast alle am Smartphone. 969 Millionen bezahlen, indem sie einen QR-Code scannen. Allein WeChat verschlingt 34 % des gesamten Internetverkehrs im Land. China hat die Desktop-Ära nicht so durchlaufen wie der Westen. Es ging direkt zu mobil über, und der Abstand zwischen dem, was chinesische Nutzer von einem mobilen Erlebnis erwarten, und dem, was die meisten ausländischen Unternehmen liefern, ist gewaltig. Wer noch desktopzuerst baut und Responsive-Breakpoints im Nachhinein draufsetzt, baut für ein Internet, das chinesische Nutzer schon vor Jahren hinter sich gelassen haben.

## Chinas mobiles Internet in Zahlen

So stehen die Dinge im Moment, vor jeder Prognose, die nach vorn blickt.

| Kennzahl | Wert |
|---|---|
| Internetnutzer in China | 1,30 Milliarden (91,6 % Verbreitung) |
| Abdeckung mit mobilem Breitband | 100 % (3G/4G/5G) |
| WeChat, monatlich aktive Nutzer | 1,481 Milliarden |
| WeChat-Mini-Programm-Nutzer | 949 Millionen (90 % von WeChat) |
| Nutzer mobiler Zahlungen | 969 Millionen (96 % der Erwachsenen) |
| Markt für mobile Zahlungen | 15,86 Mrd. $ heute, 78,23 Mrd. $ bis 2030 (CAGR 37,59 %) |
| WeChat-Anteil am gesamten China-Verkehr | 34 % |

China hat zum Stand 2025 1,3 Milliarden Internetnutzer. Das sind 91,6 % der Bevölkerung online. Mobiles Breitband deckt 100 % ab, über die Netze 3G, 4G und 5G hinweg. Über 95 % gehen vorrangig über mobile Geräte ins Netz.

WeChat hat 1,481 Milliarden monatlich aktive Nutzer. 949 Millionen davon nutzen Mini-Programme, das sind 90 % der gesamten WeChat-Nutzerbasis. Allein der Datenverkehr von WeChat macht 34 % des gesamten Internetverkehrs in China aus.

> WeChat: 1,481 Milliarden monatlich aktive Nutzer. 34 % des gesamten Internetverkehrs in China. Die Plattform, auf der das chinesische Internet zum großen Teil stattfindet.

Dann sind da die Zahlungen, und hier werden die Zahlen wirklich frappierend. 969 Millionen Nutzer mobiler Bezahldienste, das sind 96 % der erwachsenen Chinesen. Der Markt liegt bei 15,86 Milliarden Dollar und soll bis 2030 auf 78,23 Milliarden Dollar wachsen, bei einer jährlichen Wachstumsrate von 37,59 %. Mobile Zahlungen sind in China längst der etablierte Normalfall, das Stadium eines Trends haben sie weit hinter sich.

## Designprinzipien, die wirklich zählen

| Prinzip | Vorgabe |
|---|---|
| Designansatz | Mobile-only (über 95 % mobile Nutzer) |
| zuerst zu testender Browser | WeChat-In-App-Browser (ältere WebKit-Version) |
| Touch-Ziele | mind. 44 x 44 px, optimal 48 x 48 px, 8 px Abstand |
| Platzierung des CTA | unteres Drittel des Bildschirms (daumenfreundliche Zone) |
| Navigation | vertikales Scrollen als Hauptmuster |
| Bezahlablauf | QR-Code-Kasse (Alipay / WeChat Pay) |

Mobiles Design für China liegt weit entfernt vom Responsive Design für ein westliches Publikum. Die Erwartungen sind höher, der Kontext des Surfens ist ein anderer, und der Browser, in dem die meisten Ihrer Nutzer stecken, ist der eingebaute Browser von WeChat. Chrome und Safari sind in der Minderheit.

Der größte Wandel: Mobile-only-Denken. Wenn über 95 % Ihrer Nutzer am Smartphone sind, ist der Smartphone-Bildschirm das Produkt. Desktop ist der Nachzügler. Unternehmen, die für Desktop gestalten und das Ganze dann in ein Responsive-Layout quetschen, arbeiten rückwärts, und das sieht man.

Der In-App-Browser von WeChat bringt mehr Leute aus dem Tritt als alles andere auf dieser Liste. Er läuft auf einer älteren WebKit-Version, also kann CSS und JavaScript, das in modernen Browsern sauber rendert, innerhalb von WeChat brechen. Wer nur in Chrome und Safari testet, testet nicht für seine tatsächlichen Nutzer. Sie müssen die Seite gezielt im Browser von WeChat laden und alles durchgehen.

Touch-Ziele: mindestens 44 mal 44 Pixel, optimal 48 mal 48, dazu 8 Pixel Abstand zwischen ihnen. Behandeln Sie das als Untergrenze. Kleine Schaltflächen, die für einen Mauszeiger gedacht sind, taugen nichts, wenn jemand mit dem Daumen in einer vollen U-Bahn zur Hauptverkehrszeit navigiert.

Setzen Sie Ihre wichtigsten Call-to-Action-Schaltflächen ins untere Drittel des Bildschirms. Dort liegt der Daumen bei der einhändigen Bedienung von Natur aus. CTAs am oberen Bildschirmrand zwingen die Nutzer dazu, den Griff zu ändern oder beide Hände zu nehmen. Eine kleine Reibung, doch sie kostet Conversions.

Vertikales Scrollen ist der Standard. Chinesische Smartphone-Nutzer verbringen ihren Tag damit, durch lange vertikale Feeds auf WeChat, Douyin und Weibo zu scrollen. Horizontales Wischen, Burger-Menüs und verschachtelte Navigationsstrukturen fühlen sich auf dem Smartphone fremd und unbeholfen an.

Und der Bezahlablauf. Ein QR-Code, der Alipay oder WeChat Pay öffnet. So laufen Transaktionen auf dem Smartphone in China ab. Verlangt Ihre Kasse von den Nutzern, 16 Ziffern von einer Kreditkarte von Hand einzutippen, haben Sie sie schon verloren.

> QR-Code-Kasse über Alipay oder WeChat Pay. Das ist der Standard. Verlangt Ihr Bezahlablauf das Eintippen von Kartennummern, muten Sie chinesischen Nutzern etwas zu, das sie seit Jahren nicht mehr getan haben.

## Das Super-App-Ökosystem

Chinesische Nutzer leben in Apps, die alles können. Browserbasiertes Surfen, wie westliche Nutzer es betreiben, ist in der Minderheit.

WeChat, Alipay, Meituan. Jede davon ist eine Super-App, die Messaging, Handel, Zahlungen und Dienste in einer einzigen Plattform bündelt. WeChat dient zugleich als Browser, als Geldbörse, als sozialer Feed, als Schaufenster und als Mini-Programm-Plattform, alles auf einmal. Alipay deckt die finanzielle Seite derselben Gleichung ab. Meituan kümmert sich um Essenslieferung, Hotelbuchungen und lokale Dienste, alles an einem Ort.

Mini-Programme haben native Apps für die alltäglichen Aufgaben im Grunde abgelöst. Statt eine eigene App aus dem App Store herunterzuladen, öffnen die Nutzer ein Mini-Programm innerhalb von WeChat oder Alipay. 949 Millionen Menschen nutzen sie. Essen bestellen, eine Fahrt buchen, im Hotel einchecken, ein Produkt kaufen: Das Mini-Programm ist der erwartete Weg, das zu tun. Eine eigenständige App herunterzuladen, ist der Rückfall.

> 949 Millionen Menschen nutzen WeChat-Mini-Programme. Für die meisten Alltagsaufgaben ist das Mini-Programm das Produkt. Der Download aus dem App Store ist der Notnagel.

Die Erwartungen innerhalb dieser Plattformen sind erbarmungslos. Sofortige Zahlung, keine Karteneingabe. Automatischer Login über WeChat SSO. Teilen mit Kontakten und Gruppen per Fingertipp. Jahre ausgefeilter In-App-Erlebnisse haben die Nutzer darauf getrimmt, null Toleranz für zusätzliche Schritte zu haben. Bei der geringsten Reibung sind sie weg.

| Ebene | Zweck |
|---|---|
| responsive mobile Website | Baidu-SEO und Sichtbarkeit in der organischen Suche |
| WeChat-Mini-Programm | Bequemlichkeit innerhalb der App und Auffindbarkeit |
| native App | nur, wenn das Produkt sie wirklich verlangt |

Für ausländische Marken läuft die Konstellation, bei der die meisten landen, so: eine responsive mobile Website für Baidu-SEO und Sichtbarkeit in der Suche, ein WeChat-Mini-Programm für die Bequemlichkeit innerhalb der App, und eine native App nur dann, wenn das Produkt sie wirklich verlangt. Die meisten brauchen die native App nicht. Mobile Seite plus Mini-Programm reicht für den weitaus größten Teil dessen aus, was chinesische Nutzer von Ihrer Marke wollen.
