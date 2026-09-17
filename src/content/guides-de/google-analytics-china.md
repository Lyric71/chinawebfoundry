---
title: "Google Analytics in China serverseitig filtern"
subtitle: "GA4 ist hinter der Great Firewall gesperrt. Außerhalb Chinas behalten Sie es, solange die Entscheidung über das Laden auf dem Server fällt."
summary: "Wie Sie Google Analytics an der Edge nach Land filtern: GA4 läuft außerhalb Chinas weiter, und Besucher auf dem Festland schicken kein einziges Byte an Google."
visual: "/images/guides/google-analytics-china.webp"
order: 31
published: true
publishedAt: 2026-08-29
updatedAt: 2026-09-18
category: Technology
---

Google Analytics ist auf dem chinesischen Festland gesperrt. googletagmanager.com und google-analytics.com liegen beide hinter der Great Firewall. Das Tag, auf das sich Ihr Marketing verlässt, liefert über chinesische Besucher also nichts. Es kostet sie nur Zeit.

Die meisten Teams entscheiden sich falsch. Entweder sie werfen GA raus und messen nirgendwo mehr, oder sie lassen es drin und servieren ganz Shanghai eine langsamere Website, einer der häufigsten Wege, auf denen [eine WordPress-Website in China unbrauchbar wird](/de/wordpress-in-china/).

Es gibt einen dritten Weg. Fünfundzwanzig Zeilen Servercode, und er läuft auf der Seite, die Sie gerade lesen.

## Was ein gesperrtes Tag wirklich kostet

Das Standard-Snippet von gtag lädt `https://www.googletagmanager.com/gtag/js` mit `async`, blockiert also weder das Parsen noch das Rendering. Daher die verbreitete Annahme, ein gesperrtes Tag sei umsonst. Bezahlt wird unterhalb des Requests.

Die Great Firewall liefert selten einen sauberen Fehler. DNS-Anfragen an googletagmanager.com kommen vergiftet zurück: Der Browser erhält eine plausible IP-Adresse, die ins Leere führt. Er öffnet einen Socket, schickt ein SYN-Paket und wartet. Ein RST kommt nie. Der Netzwerk-Stack versucht es mit exponentiellem Backoff erneut, bis irgendwann etwas aufgibt.

| Phase | Außerhalb Chinas | Aus China |
|---|---|---|
| DNS-Auflösung | ~20 ms, korrekte IP | Vergiftete Antwort, falsche IP |
| TCP-Handshake | ~30 ms | SYN gesendet, keine Antwort, Wiederholungen |
| Script-Download | ~50 KB über die Leitung, danach im Cache | Wird nie abgeschlossen |
| Zeit bis zum Abbruch | entfällt | Von Sekunden bis über eine Minute, je nach Browser und Netzwerk-Stack |

Solange dieser Socket offen bleibt, belegt er einen Verbindungsslot, hält den Mobilfunk-Chip wach und verzögert das `load`-Event. Alles, was Sie an `load` gehängt haben, feuert zu spät. Und wenn jemand `<link rel="preconnect" href="https://www.googletagmanager.com">` ergänzt hat, um das Tag zu beschleunigen, beginnt das Hängen sogar noch früher, bevor der Parser überhaupt den Body erreicht.

Dazu kommt der Teil, den man vom Schreibtisch in Frankfurt aus nicht sieht. Ihre chinesischen Besucher erleben eine zähe Website, aus Gründen, die im Team niemand reproduzieren kann, im Monitoring wächst ein langer Schwanz langsamer Sessions aus China, und am Ende ist das Hosting schuld.

> Ein async geladenes Script, das nie ankommt, belegt trotzdem einen Socket, hält trotzdem den Funk wach und verzögert trotzdem Ihr load-Event. Async schützt das Rendering. Die Seite zahlt weiterhin.

## Warum die üblichen Auswege scheitern

Vier Lösungen werden ständig empfohlen. Alle vier brechen, und die Gründe lohnen den Umweg.

**gtag.js selbst hosten.** Sie leiten das Script über Ihre eigene Domain, der Download klappt. Dann tut das Script genau das, wofür es gebaut wurde, und schickt seine Messdaten an `google-analytics.com/g/collect`. Dieselbe Sperre, dasselbe Hängen, 200 ms später im Wasserfall.

**Die Browsersprache auswerten.** Ein chinesischer Besucher auf einer ausländischen B2B-Seite surft häufig auf Englisch, und viele Notebooks in Shanghai kommen ab Werk mit `en-US`. Sprache ist eine Einstellung. Die Pakete verlassen weiterhin Shanghai.

Die Zeitzone trifft es schon eher. `Intl.DateTimeFormat().resolvedOptions().timeZone` liefert auf Festlandrechnern recht zuverlässig `Asia/Shanghai`. Sie liefert dasselbe für eine chinesische Fachkraft, die in Singapur arbeitet, und `Europe/London` für einen britischen Entwickler in einem Büro in Shenzhen. Sie raten, und Sie liegen ausgerechnet bei den Leuten daneben, auf die es ankommt.

Ein Geo-IP-Dienst aus dem Browser heraus untergräbt sich selbst. Sie fügen einen Netzwerk-Roundtrip zu einem fremden Dienst hinzu, der aus China selbst langsam oder gesperrt sein kann, um einen Netzwerk-Roundtrip zu vermeiden. Das Budget, das Sie sparen wollten, ist damit weg.

Die eigentliche Beschränkung liegt eine Ebene höher. Eine statische Website wird einmal gebaut und auf einem CDN zwischengespeichert, jeder Besucher bekommt also Byte für Byte dasselbe HTML. Zur Buildzeit lässt sich kein Tag anhand einer Information einbauen, die erst der Request kennt.

## Die Entscheidung in einen eigenen Endpoint verlegen

Jede Seite liefert eine einzige Zeile aus, für alle identisch und vollständig cachebar:

```html
<script is:inline async src="/ga.js"></script>
```

Diese URL liegt auf Ihrer eigenen Domain, längst aufgelöst, die Verbindung steht bereits. Und `/ga.js` ist keine Datei, sondern eine Serverroute: Sie läuft bei jedem Request und liest die Header mit. In Astro genügt dafür `export const prerender = false`. Vercel wiederum setzt `x-vercel-ip-country` schon an der Edge, bevor Ihr Code startet.

Die komplette Route:

```ts
export const prerender = false;

const GA_ID = 'G-XXXXXXXXXX';
const STUB = '/* analytics not loaded */\n';

const bootstrap = (id: string) => `(function () {
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=${id}';
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', '${id}');
})();
`;

export const GET: APIRoute = ({ request }) => {
  const country = request.headers.get('x-vercel-ip-country') ?? 'CN';

  return new Response(country !== 'CN' ? bootstrap(GA_ID) : STUB, {
    headers: {
      'Content-Type': 'application/javascript; charset=utf-8',
      'Cache-Control': 'private, no-store',
    },
  });
};
```

Der Bootstrap bleibt bewusst dumm. Er erzeugt ein Script-Element mit der echten gtag-URL, hängt es in den Head, initialisiert `dataLayer`, definiert `gtag` und feuert die üblichen Aufrufe `js` und `config`. Derselbe Code, den Google Ihnen gibt, nur aus dem HTML heraus in einen Response-Body verschoben, den nur ein Teil der Besucher bekommt.

| Land des Besuchers | Antwort | Größe | Requests an Google |
|---|---|---|---|
| Alles außer CN | gtag-Bootstrap | 361 Byte | Volles GA4 |
| CN oder unbekannt | `/* analytics not loaded */` | 27 Byte | Keine |

Für jemanden in Shanghai kostet der gesamte Analytics-Stack einen Same-Origin-Request mit 27 Byte Antwort. Kein vergifteter DNS-Lookup, kein hängender Socket, kein verzögertes `load`. Alle anderen bekommen GA4 wie gehabt, einen Hop später auf einer warmen Verbindung, nach unseren eigenen Messungen rund 20 ms.

## Am Cache-Header scheitert es

Hier gehen die meisten Umsetzungen dieses Musters schief, und der Fehler bleibt unsichtbar, bis er sehr sichtbar wird.

Die Antwort unterscheidet sich je Besucher, und ein CDN weiß davon nichts, solange Sie es ihm nicht sagen. Cachen Sie `/ga.js` auch nur halbwegs großzügig, dann wird die erste Antwort an einem Edge-Knoten gespeichert und danach allen ausgeliefert, die über denselben Knoten kommen. War dieser erste Besucher in Peking, ist die Messung gerade für eine ganze Region ausgefallen. Kam er aus Berlin, schieben Sie den gtag-Bootstrap jetzt aufs chinesische Festland, also genau das Problem, für das Sie das alles gebaut haben.

Der Header, den Sie brauchen, lautet `Cache-Control: private, no-store`.

Vielleicht denken Sie an `Vary: x-vercel-ip-country`. Lassen Sie es. Vary auf einem nicht standardisierten Header wird von zwischengeschalteten Caches und Firmenproxys unterschiedlich beachtet, und geschützt würden 27 Byte. Nehmen Sie die Gewissheit.

> Wer eine länderabhängige Antwort cacht, liefert irgendwann die falsche Variante an eine ganze Region aus. Die Nutzlast beträgt 27 Byte. No-store kostet Sie nichts.

## Im Zweifel abschalten

Eine Zeile leistet mehr als der ganze Rest der Datei: `request.headers.get('x-vercel-ip-country') ?? 'CN'`.

Fehlt der Header, behandelt der Code den Besucher als Chinesen. Das deckt lokale Entwicklung ab, Preview-Deployments, Requests durch Proxys, die Header entfernen, und alles, was das Edge-Netz nicht geolokalisieren konnte. GA lädt nur bei positiver Bestätigung, dass jemand woanders sitzt.

Drehen Sie die Vorgabe um, und jeder nicht identifizierbare Request bekommt das Tag. Ein guter Teil davon sind echte Menschen in Guangzhou hinter einem Firmenproxy, also genau die, die Sie schützen wollten.

## Was Sie in GA4 verlieren

Der Handel gehört offen benannt. Ihre GA4-Property enthält von nun an null Traffic aus Festlandchina, so gewollt, und daran ändert sich auch nichts mehr.

Das wiegt schwerer, als es klingt. In einem halben Jahr öffnet jemand GA4, sieht für China eine flache Linie und schließt daraus, dort gebe es keine Nachfrage. Schreiben Sie es in die Beschreibung der Property und in jeden Report, der bei der Geschäftsführung landet: Diese Daten sind die Welt minus China.

Für die andere Hälfte des Bildes wählen Sie danach, wie viel der Festlandmarkt tatsächlich für Sie zählt.

| Ansatz | Was Sie bekommen | Aufwand |
|---|---|---|
| Baidu Tongji | Vollständige Messung der Festlandbesucher, lädt in China schnell, auf chinesischen Seiten Standard | Mittel, manche Funktionen setzen Präsenz vor Ort voraus |
| Serverlogs oder Edge-Analytics | Seitenaufrufe, Referrer und Geografie ganz ohne Client-Script | Gering, dazu datensparsam |
| Zweite GA4-Property über das Measurement Protocol | Chinesische Daten in GA4, ohne Browser-Request an Google | Hoch, und die meisten Client-Dimensionen fallen weg |

Für die meisten ausländischen B2B-Seiten reicht ein schlanker Zähler an der Edge neben dem Filter. Wiegt China im Umsatz wirklich, dann setzen Sie Baidu Tongji ordentlich auf und machen es zur maßgeblichen Quelle für diesen Markt.

## Der Rest Ihrer Messung hat dasselbe Problem

GA herauszuwerfen und ein anderes gehostetes Skript einzusetzen löst nichts, es verschiebt das Problem nur auf einen anderen Hostnamen. Die naheliegenden Alternativen liegen ebenfalls im Ausland, und mehrere davon versagen auf eine Weise, die weit schwerer auffällt als eine saubere Sperre.

Die Tabelle stellt zwei Arten von Belegen nebeneinander, die verschiedene Fragen beantworten. GreatFire prüft, ob ein Host überhaupt erreichbar ist. 21YunBox misst echte Seitenaufrufe von einer Sonde auf dem Festland. Bei Hotjar widersprechen sich beide, und dieser Widerspruch ist das Aufschlussreichste an der Tabelle.

| Werkzeug | Was die Tests zeigen | Abgeschlossene Anfragen | Quelle und Datum |
|---|---|---|---|
| Hotjar | Auf den Sonden von GreatFire gestört, wird aber von einer Alibaba-Cloud-Instanz aus abgeschlossen, erstes Byte nach 487 ms | 3 von 3 aus dem Rechenzentrum | GreatFire, 18. August 2026; 21YunBox, 30. August 2026 |
| Meta Pixel | `connect.facebook.net` blockiert | keine | GreatFire, 27. Mai 2026 |
| Microsoft Clarity | Antwortet schnell und bleibt dann hängen. Erstes Byte nach 541 ms, nichts innerhalb von 60 Sekunden fertig | 0 von 3 | 21YunBox, 28. August 2026 |
| Mixpanel | Dasselbe Muster. Erstes Byte nach 391 ms, nichts innerhalb von 60 Sekunden fertig | 0 von 3 | 21YunBox, 28. August 2026 |
| Segment | Wird abgeschlossen, aber langsam. Erstes Byte nach 900 ms in einem Durchlauf und nach 1.084 ms in einem anderen | 3 von 3 | 21YunBox, 28. und 30. August 2026 |
| Plausible | Wird abgeschlossen. Erstes Byte nach 550 ms, LCP nach 1.208 ms | 3 von 3 | 21YunBox, 28. August 2026 |
| Matomo Cloud | Wird abgeschlossen. Erstes Byte nach 516 ms, LCP nach 1.532 ms | 3 von 3 | 21YunBox, geprüft am 29. August 2026 |

> Alle Zeiten in der Tabelle oben stammen von einer Sonde in Festlandchina, auf Alibaba Cloud (阿里云) cn-zhangjiakou, drei Durchläufe je Werkzeug mit Abbruch nach 60 Sekunden, zwischen dem 28. und dem 30. August 2026.
> Quelle: 21YunBox, Messungen je Werkzeug in China, August 2026. https://www.21cloudbox.com/support/microsoft-clarity-china.html

Ein Rechenzentrum in Zhangjiakou ist keine Wohnung in Peking. Nehmen Sie diese Zahlen als besten Fall und rechnen Sie damit, dass Ihre Besucher schlechter wegkommen.

Dieser Abstand erklärt die zwei Urteile über Hotjar. 21YunBox hat aus einem Rack getestet, die Sonden von GreatFire haben etwas ganz anderes gesehen, und ein Host, der einem Rechenzentrum antwortet, kann eine private Leitung ohne Weiteres übergehen. Solange Sie Hotjar nicht auf Ihrem eigenen Traffic gemessen haben, sollten Sie mit beidem rechnen.

Clarity und Mixpanel verdienen einen zweiten Blick. Keiner der beiden Hosts steht auf einer Sperrliste. GreatFire führte `www.clarity.ms` am 15. September 2026 als normal erreichbar, `api.mixpanel.com` ebenso beim letzten Test am 17. April 2026. Beide lieferten dennoch ein erstes Byte in unter 600 ms und brachten danach innerhalb einer Minute nichts zu Ende.

Eine harte Sperre wirft irgendwann einen Fehler, den jemand bemerkt. Eine hängende Anfrage wartet still, bis der Browser aufgibt. Ihre Sitzungsaufzeichnungen fallen dünner aus als sie sollten, und keine Warnung weist Sie darauf hin.

### Amplitude und der Fehler, nach dem Sie suchen sollten

Amplitude lädt sein Skript von einem Hostnamen und schickt die Events an einen anderen. Teilt ein Produkt sich so auf, kann dasselbe Netz die beiden Namen unterschiedlich behandeln: Das Skript lädt, die Events gehen nie raus, und Ihr Dashboard meldet in beiden Fällen dieselbe gute Gesundheit.

Im April 2026 führte GreatFire `cdn.amplitude.com` als erreichbar und `api.amplitude.com` als blockiert, genau dieses Muster. Wir haben beide Hostnamen für diese Aktualisierung am 17. September 2026 erneut getestet.

> `cdn.amplitude.com` nicht blockiert, letzter Test am 14. September 2026, der einzige aussagekräftige Test der jüngeren Zeit kam normal zustande. `api.amplitude.com` nicht blockiert, letzter Test am 10. September 2026, 0 von 1 Test in den vergangenen 90 Tagen gestört. Über 13 getestete amplitude.com-URLs verzeichnet GreatFire 1 blockierte, 3 gestörte und 9 erreichbare.
> Quelle: GreatFire, September 2026. https://en.greatfire.org/https/api.amplitude.com

Die Aufteilung vom April hat sich im September nicht wiederholt. Beide Werte stützen sich auf je einen einzigen aussagekräftigen Test, was in beide Richtungen dünn bleibt, und die Streuung über die ganze Domain spricht für ein weiterhin uneinheitliches Bild.

Darin liegt die eigentliche Lehre. Ein Urteil, das man irgendwo liest, trägt ein Datum, und fünf Monate reichen, damit es nicht mehr stimmt. Testen Sie getrennt den Hostnamen, der Ihr Skript ausliefert, und den, der Ihre Events entgegennimmt, aus einem Netz in dem Land, das Sie interessiert.

### Was Sie stattdessen einsetzen

Baidu Tongji (百度统计) zuerst, wenn der Festlandmarkt bei Ihnen ins Gewicht fällt. Die Server stehen im Land, die Anfrage überschreitet also keine Grenze, und die Auswertung ist um den Traffic von Baidu (百度) herum gebaut, also um genau den Traffic, den Sie verstehen wollen. Sensors Data (神策) und GrowingIO sind die schwereren heimischen Optionen.

Andernfalls hosten Sie selbst. Plausible und Matomo haben jeden Durchlauf in der Tabelle abgeschlossen, und beide laufen auf Ihrem eigenen Server auf dem Festland. Aus der ausländischen Abhängigkeit wird eine First-Party-Anfrage, und die rechtliche Frage aus dem nächsten Abschnitt erledigt sich gleich mit.

Ein Vorbehalt, weil es auf dieser Seite vor allem um einen Filter geht. Ein selbst gehosteter Analytics-Endpoint in China braucht gar keinen Filter, denn es gibt nichts aufzuhalten. Behalten Sie die Route `/ga.js` für GA und für alles andere, was Sie von einem ausländischen Host laden, und lassen Sie das heimische Werkzeug für alle laufen.

## Das PIPL gilt auch für Hosts, die antworten

Erreichbarkeit und Rechtslage sind zwei verschiedene Fragen, und die zweite gilt, ob ein Host nun antwortet oder schweigt.

Google Analytics schickt eine Client-ID und eine IP-Adresse an Google. Das chinesische Gesetz zum Schutz personenbezogener Informationen zählt beides zu den personenbezogenen Informationen, und wer es aus dem Festland herausschickt, tätigt einen grenzüberschreitenden Transfer.

> Stellt ein Verarbeiter personenbezogener Informationen personenbezogene Informationen außerhalb des Hoheitsgebiets der Volksrepublik China bereit, so unterrichtet er die betroffene Person über Namen und Kontaktdaten des ausländischen Empfängers, über Zweck und Art der Verarbeitung, über die Kategorien der personenbezogenen Informationen und über den Weg, auf dem sie ihre Rechte gegenüber diesem Empfänger ausüben kann, und er holt ihre gesonderte Einwilligung ein.
> Quelle: Cyberspace Administration of China (中央网络安全和信息化委员会办公室), Gesetz der Volksrepublik China zum Schutz personenbezogener Informationen, Artikel 39. Verabschiedet am 20. August 2021, in Kraft seit dem 1. November 2021. https://www.cac.gov.cn/2021-08/20/c_1631050028355286.htm

Gesonderte Einwilligung heißt ein eigenes Opt-in für diesen Transfer, nicht eine Zeile in einem Banner, das alles auf einmal abdeckt.

Das Argument bewegt sich nicht, wenn das Netz sich bewegt. Fängt ein gesperrter Host nächsten Monat wieder an zu antworten, oder verschiebt Google einen Hostnamen, bleibt der Transfer ein Transfer. Der Filter schließt beide Fragen auf einmal: Keine Anfrage verlässt den Browser, also bleibt auch kein Transfer zu rechtfertigen. Unser Leitfaden zu [PIPL und Datensicherheitsgesetz](/de/ressourcen/china-web-leitfaden/datenschutz-china-pipl-dsl/) behandelt die Schwellenwerte und die Meldewege.

## Testen, ohne nach Shanghai zu fliegen

Lokal zu testen ist mühsam, denn den Länder-Header gibt es nur in Produktion. Vercel entfernt jedes eingehende `x-vercel-ip-country` und setzt sein eigenes, per curl gegen eine deployte URL lässt sich also nichts fälschen.

Was funktioniert:

- Deployen Sie auf eine Preview-URL und rufen Sie `/ga.js` per curl von Ihrem Platz aus ab. Zurück kommen sollten der Bootstrap und ein `cache-control: private, no-store` in der Antwort.
- Bauen Sie im Preview-Branch einen temporären Query-Parameter ein (`/ga.js?force=cn`), um den Stub mit eigenen Augen zu sehen, und löschen Sie ihn vor dem Produktivgang.
- Schicken Sie die Live-URL durch einen Testdienst mit echten Knoten in Peking, Shanghai und Guangzhou. Suchen Sie im Wasserfall nach jedem Request an googletagmanager.com. Es darf keinen geben.
- Rufen Sie `/ga.js` binnen einer Minute aus zwei verschiedenen Ländern ab und vergleichen Sie die Bodies. Identische Antworten heißen, vor Ihrer Route cacht etwas, und das reparieren Sie vor allem anderen.
- Prüfen Sie außerhalb Chinas in den DevTools, ob das gtag-Script weiterhin auftaucht und GA4 Ihre Session in Echtzeit registriert. Man filtert das Tag schnell so gründlich, dass es für alle aus ist.

## Dasselbe Prinzip trägt alles andere, was Sie laden

Google Analytics ist der häufigste Fall, das Verfahren lässt sich aber übertragen. Jedes gesperrte Drittanbieter-Script lässt sich genauso filtern. Nur der Name des Headers ändert sich.

| Plattform | Ländersignal |
|---|---|
| Vercel | `x-vercel-ip-country`, standardmäßig gesetzt |
| Cloudflare | `cf-ipcountry`, oder `request.cf.country` im Worker |
| AWS CloudFront | `CloudFront-Viewer-Country`, in der Origin Request Policy zu aktivieren |
| Netlify | `x-nf-geo`, kodiertes JSON, das erst dekodiert werden muss |
| Fastly | `client.geo.country_code` in VCL oder Compute, daraus den eigenen Header setzen |

Chat-Widgets, eingebettete Karten, YouTube-Player, reCAPTCHA, gehostete Font-Stylesheets. Jedes davon kann bei einem Besucher in China einen Socket hängen lassen, und jedes davon ist einen kleinen Endpoint von der Harmlosigkeit entfernt. Welche es auf Ihrer Seite tun, beantworten allein Ihre eigenen Tests, an dem Tag, an dem Sie testen.

Halten Sie das HTML für alle gleich, damit das CDN seine Arbeit tun kann, und schieben Sie alles, was davon abhängt, wer gerade fragt, in eine Route auf Ihrer eigenen Domain, die in 20 ms antwortet.
