---
title: "Die Große Firewall: was sie sperrt und wie man darum herum baut"
subtitle: "Lädt Ihre Website Schriften von Google, feuert sie ein Google-Analytics-Tag ab oder bindet sie ein YouTube-Video ein, ist sie für 900 Millionen chinesische Internetnutzer schon kaputt."
summary: "Chinas Große Firewall sperrt Google, Facebook, Slack und Dutzende weiterer Dienste. So funktioniert sie technisch, und so bauen ausländische Unternehmen sinnvoll darum herum."
visual: "/images/guides/great-firewall-what-it-blocks.webp"
order: 7
published: true
publishedAt: 2026-04-01
updatedAt: 2026-05-01
category: Technology
---

Die Große Firewall arbeitet anders, als die meisten Menschen sich das vorstellen. Sie ist ein mehrschichtiges System: Es vergiftet DNS-Anfragen, sperrt ganze IP-Bereiche, liest in Echtzeit den Inhalt Ihrer Datenpakete und macht aktiv Jagd auf VPN-Verbindungen. Für ausländische Unternehmen heißt das: Jede Website mit auch nur einer einzigen Abhängigkeit von einem gesperrten Dienst, sei es eine Schriftdatei, ein Tracking-Skript oder eine eingebettete Karte, liefert chinesischen Nutzern ein kaputtes Erlebnis. Und meist weiß niemand im Team, dass das gerade passiert.

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
| Google (sämtliche Dienste) | Suche, Gmail, Maps, YouTube, Analytics, Ads, Fonts |
| Soziale Medien | Facebook, Instagram, WhatsApp, Messenger, Twitter/X, Reddit, Pinterest |
| Arbeitswerkzeuge | Dropbox, Slack, Notion, Trello |
| Unterhaltung | Netflix, Spotify, Twitch |
| Nachrichten | New York Times, Wall Street Journal, BBC |
| Nachschlagewerke | Wikipedia (chinesische Ausgabe) |

Google ist gesperrt. Komplett. Suche, Gmail, Maps, YouTube, Google Ads, Google Analytics, Google Fonts. Jeder Dienst unter dem Google-Dach. Lädt Ihre Seite eine Schrift von fonts.googleapis.com oder feuert sie ein GA-Tracking-Tag ab, hängt diese Anfrage für Nutzer in China fest. Es erscheint keine Fehlermeldung. Die Seite lädt einfach langsamer, oder ein Abschnitt baut sich nicht auf, und Ihr Team in der Heimat ahnt nichts davon, weil es von außerhalb der Firewall surft.

Gesperrt sind außerdem Facebook, Instagram, WhatsApp und Messenger, ebenso Twitter/X, Reddit und Pinterest sowie die chinesische Ausgabe von Wikipedia.

Auch die Arbeitswerkzeuge, auf die sich westliche Unternehmen verlassen, sind gesperrt: Dropbox, Slack, Notion und Trello. Bindet Ihre Seite eines davon ein oder lädt sie Ressourcen von deren Domains, ist diese Integration in China tot.

Netflix, Spotify und Twitch sind ebenfalls gesperrt, dazu die meisten großen westlichen Nachrichtenseiten, darunter die New York Times, das Wall Street Journal und die BBC.

Was die meisten Unternehmen kalt erwischt, reicht über die gesperrten Dienste selbst hinaus. Jedes Skript, jede Schrift, jedes Widget und jeder API-Aufruf, der eine gesperrte Domain berührt, geht ebenfalls kaputt. Ein einziger vergessener Google-Fonts-Verweis, tief in Ihrem CSS verborgen, kann für jeden einzelnen Nutzer in China Sekunden zur Ladezeit hinzufügen. Ein einziges Analytics-Tag kann den gesamten Seitenaufbau aufhalten.

> Ein einziger vergessener Google-Fonts-Verweis in Ihrem CSS kann für jeden Nutzer in China Sekunden zur Ladezeit hinzufügen. Der Schaden versteckt sich in Ihrem Code, in den Abhängigkeiten, von denen Sie gar nicht mehr wussten, dass es sie gibt.

## Strategien für ausländische Unternehmen

Durch die Firewall durchschlagen können Sie nicht, doch Sie können so bauen, dass Ihre Seite sie gar nicht erst überqueren muss.

| Strategie | Was sie löst |
|---|---|
| Hosting auf dem Festland plus ICP | Geschwindigkeit, Rankings, Konformität |
| China-CDN | Zwischenspeicherung an Edge-Knoten auf dem Festland |
| gesperrte Abhängigkeiten ersetzen | Google Fonts zu lokal, GA zu Baidu Tongji, Maps zu Baidu Maps |
| Hosting in Hongkong | Mittelweg, keine ICP nötig |
| VPN-Bewusstsein | rechtliche Grauzone, Unterschied zwischen Firmen- und Verbrauchernutzung |

**Hosten Sie in Festlandchina mit einer ICP-Lizenz.** Das ist der sauberste Weg. Die Seite lebt innerhalb der Firewall, statt sich durch sie zu kämpfen. Schnellste Ladezeiten, beste Baidu-Rankings, vollständige Konformität. Wenn Sie sich dem chinesischen Markt verschrieben haben, ist das der Ort, an dem Sie sein wollen.

**Setzen Sie ein China-CDN ein,** um Inhalte an Edge-Knoten innerhalb von Festlandchina zwischenzuspeichern. Selbst wenn Ihr Ursprungsserver außerhalb des Landes steht, liefert ein CDN mit PoPs auf dem Festland zwischengespeicherte Seiten an chinesische Nutzer aus, ohne dass jede Anfrage sich durch die Firewall kämpfen muss.

**Ersetzen Sie jede gesperrte Abhängigkeit.** Diesen Schritt übergehen Unternehmen am häufigsten. Google Fonts muss zu lokal gehosteten Schriften wechseln. Aus Google Maps wird Baidu Maps. Aus Google Analytics wird Baidu Tongji. Gehen Sie jeden externen Aufruf durch, den Ihre Seite macht. Jedes Skript-Tag, jeden Schrift-Import, jeden API-Endpunkt. Trifft auch nur einer davon eine gesperrte Domain, bekommen Ihre chinesischen Nutzer ein kaputtes oder verschlechtertes Erlebnis, und wahrscheinlich wissen Sie es nicht einmal.

> Google Fonts, Google Analytics, Google Maps. Tauschen Sie sie gegen lokal gehostete Schriften, Baidu Tongji und Baidu Maps. Prüfen Sie jeden externen Aufruf, den Ihre Seite macht.

Bleibt **das Hosting in Hongkong** als Mittelweg, falls Sie für das ICP-Verfahren noch nicht bereit sind. Keine Lizenz nötig, die Latenz zum Festland ist gut beherrschbar, die meisten Störungen durch die Firewall fallen weg. Ein Kompromiss, aber ein brauchbarer für Unternehmen, die das Wasser erst einmal antesten.

**VPNs** sind eine Grauzone. Firmen-VPNs, die China-Büros an globale Netze anbinden, werden im Allgemeinen geduldet. Verbraucher-VPNs, die zum Umgehen der Firewall genutzt werden, sind technisch gesehen illegal, auch wenn die Durchsetzung je nach Region und Jahr schwankt. Ausländische Unternehmen, die in China tätig sind, sollten diesen Unterschied klar verstehen. Gehen Sie nicht davon aus, dass Ihre Mitarbeiter aus dem Büro heraus frei private VPNs nutzen können, um auf gesperrte Dienste zuzugreifen.
