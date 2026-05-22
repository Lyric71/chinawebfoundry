import type { FAQTopic } from './faq';

export const faqTopicsDe: FAQTopic[] = [
  {
    title: 'Warum China anders ist',
    shortTitle: 'Besonderheiten',
    icon: 'globe',
    items: [
      {
        question: 'Warum funktioniert meine bestehende Website in China nicht richtig?',
        answer: 'Die Große Firewall, kurz gesagt. Chinas nationales Filtersystem blockiert oder bremst die meisten westlichen Dienste, auf die Ihre Website angewiesen ist. Google Fonts, Google Analytics, reCAPTCHA, YouTube, Facebook-Pixel, die großen CDN-Anbieter: alles gesperrt oder gedrosselt. Eine Seite, die in New York in zwei Sekunden lädt, braucht in Shanghai schnell 15 Sekunden. Manchmal läuft sie einfach in einen Timeout. Ohne eine eigens für China ausgelegte Konfiguration ist Ihre Website für niemanden sichtbar, der vom Festland aus surft.',
      },
      {
        question: 'Lässt sich das Tempoproblem nicht einfach mit einem CDN lösen?',
        answer: 'Westliche CDN wie Cloudflare und Akamai haben ohne ICP-Lizenz keine echte Edge-Präsenz innerhalb Chinas, und selbst mit Lizenz schwankt die Leistung stark. Die wirkliche Lösung ist ein Hosting bei einem chinesischen Anbieter wie Alibaba Cloud (阿里云), Tencent Cloud (腾讯云) oder Huawei Cloud (华为云). Alles andere bleibt Flickwerk.',
      },
      {
        question: 'Reicht ein Hosting in Hongkong für den chinesischen Markt?',
        answer: 'Besser als ein Hosting in den USA oder Europa, sicher. Aber Nutzer auf dem Festland sehen weiterhin längere Ladezeiten, Baidu behandelt die Seite als ausländisch und stuft sie niedriger ein, und das Vertrauenssignal einer ordentlich lizenzierten Präsenz auf dem Festland fehlt Ihnen. Wer in China ernsthaft Geschäfte machen will, braucht ein Hosting auf dem Festland.',
      },
      {
        question: 'Surfen chinesische Nutzer wirklich so anders?',
        answer: 'Ja, von Grund auf. Mobil bis zum Extrem, WeChat (微信) als selbstverständliche Teilen-Ebene, QR-Codes überall, längere Scroll-Seiten, dichtere Informationslayouts, völlig andere ästhetische Konventionen. Eine westliche Website ins Chinesische zu kopieren klappt selten. Wir bauen das Erlebnis dafür neu, wie Menschen das Internet hier tatsächlich nutzen.',
      },
    ],
  },
  {
    title: 'Projektzuschnitt und Discovery',
    shortTitle: 'Zuschnitt',
    icon: 'compass',
    items: [
      {
        question: 'Woran erkennen wir, ob wir überhaupt eine eigene China-Website brauchen?',
        answer: 'Wenn Ihre aktuelle Seite aus Shanghai langsam lädt, bei Baidu nirgends auftaucht oder Ihr Vertrieb von chinesischen Interessenten immer wieder hört "wir haben Sie online nicht gefunden", brauchen Sie wahrscheinlich eine. Vor jeder Zusage machen wir ein kostenloses Audit. Dauert etwa eine Woche. Sie sehen die echten Zahlen, keinen Verkaufspitch.',
      },
      {
        question: 'Was ist der kleinstmögliche Umfang für den Markteintritt in China?',
        answer: 'Eine zweisprachige Landingpage auf chinesischem Hosting mit ICP (互联网内容提供商), eingebundenem Baidu Tongji (百度统计) und einem für Baidu (百度) optimierten Einstieg. Das ist die Untergrenze. Damit haben wir Unternehmen an den Start gebracht und von dort aus weiter ausgebaut, sobald echte Verkehrsdaten vorlagen.',
      },
      {
        question: 'Können Sie uns sagen, ob sich China für unser Geschäft überhaupt lohnt?',
        answer: 'Das ist nicht unsere Kernkompetenz, aber wir sagen Ihnen ehrlich, wenn es sich nicht lohnt. Wir haben Projekte abgelehnt, bei denen die Marktdaten die Ausgabe nicht trugen. Wenn Sie eine echte Markteintrittsberatung brauchen, stellen wir Ihnen den Kontakt zu Firmen in Shanghai her, die genau das machen.',
      },
      {
        question: 'Bieten Sie vor dem eigentlichen Projekt einen Discovery-Workshop an?',
        answer: 'Ja, in zwei Formaten. Eine halbtägige Remote-Sitzung mit technischem Audit und Strategie, oder ein zweitägiger Workshop vor Ort in Shanghai (上海) für größere Projekte. Beide werden getrennt vom Hauptauftrag abgerechnet.',
      },
      {
        question: 'Welche Informationen brauchen Sie von uns für ein belastbares Angebot?',
        answer: 'Die URL Ihrer aktuellen Website, Verkehrsdaten, falls vorhanden, Ihre Ziele für China (Leads, Verkäufe, Markenpräsenz, oder alle drei), den Status einer eventuell bestehenden chinesischen Gesellschaft und idealerweise ein kurzes Gespräch. Mit diesen vier Dingen nennen wir eine konkrete Zahl, keine Spanne.',
      },
    ],
  },
  {
    title: 'Preise und Budgets',
    shortTitle: 'Preise',
    icon: 'wallet',
    items: [
      {
        question: 'Was kostet ein China-Website-Projekt tatsächlich?',
        answer: 'Das hängt vom Umfang ab. Migrationsprojekte liegen am einen Ende, vollständige Eigenentwicklungen mit WooCommerce oder Mitgliederplattformen am anderen. Nach einem Discovery-Gespräch schicken wir ein Festpreisangebot. Keine Stundenabrechnung bei Projektarbeit, keine bösen Überraschungen mitten im Projekt.',
      },
      {
        question: 'Wie verhalten sich Ihre Preise im Vergleich zu westlichen Agenturen?',
        answer: 'Ehrlich gesagt vergleichbar. Die Gehälter in Shanghai (上海) liegen höher als in Paris oder Berlin, unser Team ist erfahren, und unsere Arbeit lässt sich nicht aus einer Vorlage stanzen. Für das Budget bekommen Sie ein Team auf dem chinesischen Festland, das echte Bei’an-Anträge (备案) eingereicht hat, Konten in der Baidu Search Resource Platform (百度搜索资源平台) führt und weiß, welcher Hosting-Ansprechpartner bei Aliyun (阿里云) zurückruft. Darin liegt der Wert, nicht in einem Rabatt.',
      },
      {
        question: 'Bieten Sie Ratenzahlung an?',
        answer: 'Bei größeren Projekten ja. Die übliche Aufteilung läuft über Kickoff, Halbzeit und Launch. Bei umfangreicheren Aufträgen vereinbaren wir monatliche Meilensteine. Arbeit gegen Unternehmensanteile machen wir nicht.',
      },
      {
        question: 'Was ist NICHT im Projektpreis enthalten?',
        answer: 'Die ICP-Behördengebühren (gering, aber separat), Übersetzungskosten, wenn Sie professionelles chinesisches Texten brauchen, Lizenzen für Stockfotos, Lizenzen für kostenpflichtige Plugins, falls Sie kommerzielle Erweiterungen wünschen, und Drittanbieterdienste wie das Hosting, das Ihnen direkt berechnet wird. Im Angebot weisen wir all das transparent aus.',
      },
      {
        question: 'Gibt es versteckte Kosten, die wir kennen sollten?',
        answer: 'Zwei, die Kunden überraschen. Erstens der administrative Aufwand für die ICP-Verlängerung (互联网内容提供商) alle paar Jahre. Gering, aber nicht null. Zweitens die laufende Baidu-SEO (百度): Wer wirklich ranken will, braucht monatliche Arbeit, keinen einmaligen Launch. Wir benennen beides von Anfang an, damit das Budgetgespräch ehrlich bleibt.',
      },
      {
        question: 'Berechnen Sie Angebote?',
        answer: 'Nein. Angebot und Audit sind kostenlos. Wir schreiben ausführliche Leistungsbeschreibungen, weil beide Seiten genau wissen sollen, was gebaut wird. Wenn Sie unser Angebot nehmen und es bei günstigeren Anbietern durchrechnen lassen, nun ja, das ist vorgekommen. Wir berechnen es trotzdem nicht.',
      },
      {
        question: 'Können wir klein anfangen und später ausbauen?',
        answer: 'Ja, und meistens raten wir dazu. Phase eins geht mit dem Nötigsten an den Start. Phase zwei ergänzt tiefere Baidu-SEO (百度), GEO-China-Optimierung und Content-Produktion. Phase drei bringt E-Commerce oder fortgeschrittene Funktionen. Diese Aufteilung verteilt die Ausgaben und lässt Ihnen Zeit, vor dem Skalieren zu prüfen.',
      },
    ],
  },
  {
    title: 'ICP-Lizenz und Recht',
    shortTitle: 'ICP und Recht',
    icon: 'shield',
    items: [
      {
        question: 'Was genau ist eine ICP-Lizenz? Brauche ich sie wirklich?',
        answer: 'Ja, und es gibt keinen Umweg. ICP (互联网内容提供商) steht für Internet Content Provider. Es ist eine Genehmigung des chinesischen Ministeriums für Industrie und Informationstechnologie (工业和信息化部), gesetzlich vorgeschrieben für jede Website, die auf einem Server auf dem chinesischen Festland liegt. Zwei Arten zählen: das ICP Bei’an (备案) für informationelle Seiten und die ICP Jing Ying (经营许可证) für Seiten, die Transaktionen abwickeln. Den Antrag übernehmen wir von Anfang bis Ende.',
      },
      {
        question: 'Was ist, wenn wir noch keine chinesische Gesellschaft haben?',
        answer: 'Dann wird das ICP (互联网内容提供商) schwieriger. Sie müssen entweder eine WFOE (外商独资企业) gründen oder sich mit einer chinesischen Gesellschaft zusammentun, die die Anmeldung trägt. Beide Wege haben wir mit Kunden begleitet. Ohne Gesellschaft und ohne Wunsch nach einer ist ein Hosting auf dem Festland keine Option, aber ein Hosting in Hongkong (香港) bleibt als Ausweichlösung möglich.',
      },
      {
        question: 'Wie lange dauert die ICP-Anmeldung tatsächlich?',
        answer: 'Das Bei’an (备案) dauert in der Regel 2 bis 4 Wochen. Die Jing Ying (经营许可证) braucht 2 bis 3 Monate, manchmal länger. Die Variable ist die Vollständigkeit der Unterlagen auf Ihrer Seite. Wir geben Ihnen in Woche eins eine Checkliste, damit der langsame Teil nicht den ganzen Ablauf bremst.',
      },
      {
        question: 'Wie steht es um Datenresidenz und PIPL-Konformität?',
        answer: 'Chinesische Daten müssen in den meisten Fällen in China bleiben. Wir planen die Architektur von Tag eins an darauf aus. Wenn Ihr Projekt personenbezogene Daten berührt, gehen wir mit Ihnen die Folgen der PIPL (个人信息保护法) durch. Wir haben Dutzende dieser Fälle gemeinsam mit Rechtsberatern bearbeitet und wissen daher, wo die Graubereiche liegen.',
      },
      {
        question: 'Was passiert, wenn unsere ICP-Anmeldung abgelehnt wird?',
        answer: 'Das kommt vor, meist wegen fehlender Unterlagen. Wir reichen ohne Aufpreis erneut ein. Die einzigen Fälle, die wir nicht lösen können, sind die, in denen die Unternehmensstruktur selbst nicht qualifiziert ist, und das würden wir in Woche eins ansprechen, nicht in Woche vier.',
      },
    ],
  },
  {
    title: 'Zeitpläne und Ablauf',
    shortTitle: 'Zeitpläne',
    icon: 'clock',
    items: [
      {
        question: 'Wie schnell können Sie eine Website in China live nehmen?',
        answer: 'Unser Rekord liegt bei 3 Wochen für eine Landingpage mit bereits vorhandenem ICP (互联网内容提供商). Realistisch sind für eine richtige Website 8 bis 12 Wochen inklusive ICP-Antrag. Wenn Sie das ICP von Grund auf brauchen und keine chinesische Gesellschaft haben, kommen für diesen Teil weitere 4 bis 6 Wochen dazu.',
      },
      {
        question: 'Wie sieht ein typischer Projektzeitplan aus?',
        answer: 'Woche 1 bis 2: Audit und Discovery. Woche 3 bis 6: ICP-Anmeldung (互联网内容提供商) parallel zu Design und technischer Einrichtung. Woche 7 bis 10: Entwicklung, Content-Integration und Tests. Woche 11 bis 12: Staging, Korrekturen, Launch. Danach setzt die Wartung ein. Im Angebot finden Sie ein Gantt-Diagramm.',
      },
      {
        question: 'Was bremst Projekte am häufigsten aus?',
        answer: 'Die ICP-Unterlagen (互联网内容提供商) von Kundenseite. Wir fragen die Dokumente in Woche eins an und bekommen sie manchmal erst in Woche vier. Der andere große Punkt ist der Content. Man unterschätzt, wie lange chinesischer Text braucht, wenn er sauber geschrieben und nicht bloß übersetzt wird.',
      },
      {
        question: 'Wie oft hören wir während des Projekts von Ihnen?',
        answer: 'Wöchentliche Status-Calls, schriftliche Updates jeden Montag, ein WeChat-Kanal (微信) für die täglichen Fragen. Dazu Zugriff auf unseren Projekt-Tracker. Sie wissen jederzeit genau, was passiert, keine Blackbox.',
      },
      {
        question: 'Mit wem in Ihrem Team sprechen wir?',
        answer: 'Mit einer Projektleitung, die Ihr Projekt von Anfang bis Ende führt. Sie zieht unsere Spezialisten (Design, Entwicklung, SEO, Content, Hosting) hinzu, wenn es nötig ist. Sie müssen Ihr Geschäft nicht fünf verschiedenen Leuten erklären.',
      },
      {
        question: 'Können wir uns am Designprozess beteiligen?',
        answer: 'Ja. Wenn Ihr Team direkt kommentieren möchte, geben wir Figma-Zugang. Manche Kunden sind sehr nah dran, andere geben es vollständig ab. Beides funktioniert gut.',
      },
      {
        question: 'Was passiert, wenn wir auf unserer Seite einen Termin verpassen?',
        answer: 'Dann pausiert das Projekt auch bei uns. Wir berechnen keine Wartegebühren, wir machen weiter, sobald Sie bereit sind. Pausiert ein Projekt aber länger als 60 Tage, schneiden wir es neu zu, denn die Preise in China verschieben sich, und die Verfügbarkeit unseres Teams ebenso.',
      },
    ],
  },
  {
    title: 'Team, Standort und Kommunikation',
    shortTitle: 'Team',
    icon: 'people',
    items: [
      {
        question: 'Wo sitzt Ihr Team eigentlich?',
        answer: 'Shanghai (上海) ist das Hauptbüro. Einige Teammitglieder arbeiten in Hangzhou (杭州) und Shenzhen (深圳). Wir sind physisch in China, und das zählt für ICP-Anmeldungen (互联网内容提供商), für die Beziehungen zu Hosting-Anbietern und schlicht dafür, zu verstehen, wie das Internet hier Tag für Tag funktioniert.',
      },
      {
        question: 'Haben Sie auch nichtchinesische Mitarbeiter?',
        answer: 'Ja. Der Gründer ist Europäer, mehrere Teammitglieder sind zwei- oder dreisprachig. Die Projektleitungen, die mit internationalen Kunden arbeiten, sprechen alle Englisch auf Geschäftsniveau. Intern läuft die Kommunikation in einer Mischung aus Englisch und Chinesisch.',
      },
      {
        question: 'In welcher Zeitzone arbeiten Sie? Wie funktioniert das für europäische oder US-Kunden?',
        answer: 'Wir arbeiten nach China-Standardzeit (中国标准时间, UTC+8). Mit europäischen Kunden überschneidet sich der größte Teil des Arbeitstags. Für die US-Ostküste legen wir Calls auf den Morgen und den Abend, unser Team ist flexibel. Die Westküste ist schwieriger, für Meilenstein-Calls aber machbar.',
      },
      {
        question: 'Können wir Ihr Büro besuchen?',
        answer: 'Sehr gern. Wir empfangen regelmäßig Kunden in Shanghai (上海). Wenn Sie ohnehin in China sind, organisieren wir eine Arbeitssitzung, ein Abendessen und stellen Ihnen die jeweils richtigen Leute vor. Dem Team ein Gesicht zu geben, hilft.',
      },
      {
        question: 'Fliegen Sie zu Kunden vor Ort?',
        answer: 'Bei Projekten ab einer bestimmten Größe ja, dann sind Kickoff-Treffen vor Ort inbegriffen. Bei kleineren Projekten machen wir alles remote, was tatsächlich gut funktioniert. Wir betreuen Websites von Kunden, die wir nie persönlich getroffen haben, seit Jahren.',
      },
      {
        question: 'In welchen Sprachen kommunizieren Sie?',
        answer: 'Englisch für internationale Kunden. Mandarin (普通话) intern und mit chinesischen Dienstleistern, Hosting-Anbietern und Behörden. Wenn Ihr Team chinesischsprachige Mitarbeiter hat, mischen wir. WeChat (微信) funktioniert für beides.',
      },
      {
        question: 'Nutzen Sie WeChat für die Kundenkommunikation?',
        answer: 'Ja, WeChat (微信) ist für die meisten Kunden der einfachste Kanal. E-Mail geht auch, ganz wie es Ihrem Team passt. Wir richten uns nach Ihren Werkzeugen, nicht umgekehrt.',
      },
    ],
  },
  {
    title: 'Verträge und Risiko',
    shortTitle: 'Verträge',
    icon: 'document',
    items: [
      {
        question: 'Was deckt der Vertrag konkret ab?',
        answer: 'Leistungsumfang, Liefergegenstände, Zeitplan, Zahlungsplan, Eigentum am geistigen Eigentum, Vertraulichkeit, Kündigungsklauseln, Supportbedingungen nach dem Launch. Ein üblicher Dienstleistungsvertrag, unterliegt dem Recht, das Sie und wir gemeinsam festlegen. Die meisten internationalen Kunden wählen das Recht von Hongkong (香港) oder Singapur (新加坡). Verhandelbar.',
      },
      {
        question: 'Wem gehören Website-Code und Inhalte nach dem Launch?',
        answer: 'Ihnen. Vollständige Übertragung sämtlicher Werte: Quellcode, Designdateien, Inhalte, Hosting-Zugangsdaten. Wir behalten das Recht, das Projekt anonym in unserem Portfolio zu verwenden, sofern Sie dem nicht ausdrücklich widersprechen.',
      },
      {
        question: 'Was, wenn wir mitten im Projekt aussteigen wollen?',
        answer: 'Die Kündigungsklauseln stehen klar im Vertrag. Sie zahlen für die bis dahin geleistete Arbeit, wir übergeben alles, was wir bisher gebaut haben, in nutzbarer Form. Wir nehmen kein Projekt in Geiselhaft. Eine Rückforderung mussten wir nie durchsetzen, denn Kunden steigen ehrlich gesagt nicht mitten im Projekt aus.',
      },
      {
        question: 'Unterzeichnen Sie Geheimhaltungsvereinbarungen?',
        answer: 'Ja, bevor irgendein technisches oder kommerzielles Detail ausgetauscht wird. Gegenseitige NDA sind Standard. Wenn Sie keine eigene Vorlage haben, stellen wir unsere bereit.',
      },
    ],
  },
  {
    title: 'Technologieentscheidungen',
    shortTitle: 'Technik',
    icon: 'chip',
    items: [
      {
        question: 'WordPress oder Astro? Wie entscheiden wir uns?',
        answer: 'Das hängt von Ihrem Team und Ihrem Content-Workflow ab. WordPress, wenn Sie Marketingleute haben, die Inhalte täglich ohne Hilfe der Entwicklung aktualisieren müssen. Astro, wenn die Performance entscheidend ist und Sie technische Unterstützung haben. Wir bauen beides, und wir machen auch Hybrid-Setups, bei denen die Marketing-Site auf dem einen und der E-Commerce-Teil auf dem anderen System läuft.',
      },
      {
        question: 'Können Sie mit unserem bestehenden Tech-Stack arbeiten?',
        answer: 'Ehrlich gesagt nein. Wir versuchen nicht, westliche Stacks so zu verbiegen, dass sie hinter der Großen Firewall laufen; wir haben zu viele solcher Projekte nach sechs Monaten zusammenbrechen sehen. Wir empfehlen chinesische Werkzeuge, die hier nativ funktionieren. Aliyun (阿里云), Tencent Cloud (腾讯云), Baidu Tongji (百度统计), WeChat (微信), die chinesischen KI-Plattformen. Anderes Ökosystem, andere Regeln. Den globalen Stack in China am Leben zu halten, kostet meist mehr an Behelfslösungen als ein sauberer Neubau.',
      },
      {
        question: 'Warum nutzen Sie für China nicht einfach einen westlichen SaaS-Website-Baukasten?',
        answer: 'Weil sie in China nicht richtig funktionieren. Die meisten sind teilweise blockiert oder stark gedrosselt, und keiner hat ICP-fähiges Hosting auf dem Festland. Wir haben mehrere Kunden von diesen Plattformen migriert, weil ihre China-Seiten unbrauchbar waren. Wir bauen auf Werkzeugen, die hinter der Firewall laufen, Punkt.',
      },
      {
        question: 'Bauen Sie auch mobile Apps?',
        answer: 'Nein. Wir konzentrieren uns auf Web, Mini-Programme (微信小程序) und Baidu Smart Mini Programs (智能小程序). Für native iOS- und Android-Apps arbeiten wir mit Spezialisten in Shenzhen (深圳) zusammen.',
      },
      {
        question: 'Können Sie eine WeChat-Integration umsetzen?',
        answer: 'Ja. WeChat-Login (微信), Teilen, Mini-Programme, Bezahlung. Wir haben Dutzende WeChat-Integrationen gebaut und kennen die Eigenheiten der API. Dasselbe gilt für Alipay (支付宝) und UnionPay (银联).',
      },
      {
        question: 'Was ist mit KI und Chatbots auf unserer China-Website?',
        answer: 'Wir binden chinesische KI-Plattformen ein: DeepSeek (深度求索), Doubao (豆包), Kimi, Yuanbao (元宝) und Baidu AI (百度AI). Westliche KI-Werkzeuge sind aus China heraus meist blockiert oder unzuverlässig, also keine Option. Wenn man Ihnen etwas anderes gesagt hat, zeigen wir Ihnen, was hier wirklich funktioniert.',
      },
      {
        question: 'Wird unsere bestehende WordPress-Website mit Elementor in China funktionieren?',
        answer: 'In ihrem jetzigen Zustand wahrscheinlich nicht. Aber meistens lässt sie sich zum Laufen bringen. Wir entfernen die Google-Abhängigkeiten, tauschen die Schriften aus, leiten die Integrationen um. Die meisten Elementor-Seiten, die wir übernehmen, laufen innerhalb weniger Wochen sauber hinter der Firewall.',
      },
      {
        question: 'Was ist mit automatischen Plugin-Updates von wordpress.org?',
        answer: 'Sie scheitern aus China heraus oft oder laufen in einen Timeout. Wir richten ein Routing der Updates über einen Proxy ein oder geplante manuelle Update-Fenster. So oder so muss Ihr Team nicht daran denken.',
      },
    ],
  },
  {
    title: 'SEO, Baidu und KI-Suche',
    shortTitle: 'SEO und KI',
    icon: 'search',
    items: [
      {
        question: 'Was ist bei Baidu-SEO anders als bei Google?',
        answer: 'So ziemlich alles. Baidu (百度) bevorzugt auf dem Festland gehostete Seiten, bewertet die Qualität chinesischer Inhalte nach eigenen Maßstäben, hat eine eigene Search Resource Platform (百度搜索资源平台) für die Einreichung, behandelt Meta-Tags anders und rankt nach Faktoren, die Google nicht interessieren. Für das eine zu optimieren heißt nicht, für das andere zu optimieren.',
      },
      {
        question: 'Garantieren Sie Baidu-Rankings?',
        answer: 'Nein, und meiden Sie jeden, der das tut. Wir garantieren eine fachgerechte Baidu-SEO-Einrichtung (百度), die Einreichung in der Baidu Search Resource Platform (百度搜索资源平台), technische Optimierung und strukturierte Daten. Das Ranking hängt von Wettbewerb, Content-Qualität und Zeit ab. In monatlichen Fortschrittsberichten sehen Sie, was sich bewegt.',
      },
      {
        question: 'Was ist GEO China und brauchen wir das?',
        answer: 'Generative Engine Optimisation für chinesische KI-Suche. DeepSeek (深度求索), Doubao (豆包), Kimi, Yuanbao (元宝), Baidu AI (百度AI). Chinesische Nutzer beginnen ihre Recherche zunehmend in diesen Werkzeugen statt direkt bei Baidu (百度). Wenn Ihre Wettbewerber in KI-Antworten auftauchen und Sie nicht, läuft Verkehr an Ihrer Tür vorbei.',
      },
      {
        question: 'Wie lange dauert es nach dem Launch, bis wir Baidu-Verkehr sehen?',
        answer: 'Die Indexierung beginnt mit sauberer SEO-Einrichtung meist innerhalb von 2 bis 4 Wochen nach der Einreichung in der Baidu Search Resource Platform (百度搜索资源平台). Echte Ranking-Dynamik bei umkämpften Keywords braucht mindestens 3 bis 6 Monate. Wer schneller verspricht, verkauft Ihnen etwas.',
      },
    ],
  },
  {
    title: 'Content und Lokalisierung',
    shortTitle: 'Content',
    icon: 'language',
    items: [
      {
        question: 'Übernehmen Sie die chinesische Übersetzung, oder liefern wir sie?',
        answer: 'Beides geht. Wir haben hauseigene und externe chinesische Texter unseres Vertrauens, die für chinesische Zielgruppen schreiben statt nur zu übersetzen. Wenn Sie bereits einen Übersetzungspartner haben, können wir mit dessen Ergebnis arbeiten, weisen aber darauf hin, wo es sich übersetzt statt geschrieben liest.',
      },
      {
        question: 'Was ist der Unterschied zwischen Übersetzung und Lokalisierung?',
        answer: 'Übersetzung liefert dieselben Worte auf Chinesisch. Lokalisierung schreibt für die Zielgruppe, die Plattform, die kulturellen Bezüge und die Suchbegriffe, die chinesische Nutzer wirklich eintippen, neu. Eine übersetzte Seite liest sich fremd. Eine lokalisierte nicht.',
      },
      {
        question: 'Sollten wir vereinfachtes oder traditionelles Chinesisch verwenden?',
        answer: 'Vereinfachtes Chinesisch (简体中文) für das chinesische Festland. Traditionelles Chinesisch (繁體中文) für Hongkong (香港) und Taiwan (台湾). Wenn Sie beide Märkte ansprechen, pflegen wir getrennte Versionen. Beides auf einer Seite zu mischen, ruiniert Ihre Glaubwürdigkeit.',
      },
    ],
  },
  {
    title: 'Leistung und Ergebnisse',
    shortTitle: 'Leistung',
    icon: 'spark',
    items: [
      {
        question: 'Welche Leistungsgewinne können wir erwarten?',
        answer: 'Bestehende langsame Seiten, die zu Aliyun (阿里云) umziehen, gehen typischerweise von 12 bis 15 Sekunden Ladezeit auf unter 2 Sekunden. Neubauten erreichen auf Festland-Verbindungen unter 1 Sekunde. Die Baidu-Indexierung (百度) beginnt mit sauberer SEO-Einrichtung meist innerhalb von 2 bis 4 Wochen nach dem Launch.',
      },
      {
        question: 'Wie messen Sie den Erfolg von China-Projekten?',
        answer: 'Das hängt vom Projekt ab. Bei Lead-Generierungsseiten sind es Formularabsendungen und Conversion-Ziele in Baidu Tongji (百度统计). Bei E-Commerce sind es Umsatz und Warenkorb-Abschlüsse. Bei Markenseiten sind es Verweildauer, wiederkehrende Besuche und organischer Verkehr. Die KPI legen wir im Kickoff fest und berichten monatlich gegen sie.',
      },
      {
        question: 'Was, wenn die Website nach dem Launch unter den Erwartungen bleibt?',
        answer: 'Wir stellen eine Diagnose. Es kann technisch sein, am Content liegen oder an einem Bruch mit dem, was chinesische Nutzer erwarten. Fehler beheben wir, das gehört dazu. Größere Optimierungen, Content-Neufassungen, tiefere SEO laufen über die Wartungspauschale.',
      },
    ],
  },
  {
    title: 'Langfristige Zusammenarbeit',
    shortTitle: 'Langfristig',
    icon: 'loop',
    items: [
      {
        question: 'Wie hoch ist Ihre Kundenbindungsquote?',
        answer: 'Die meisten Kunden bleiben nach dem Launch mit einer Wartungspauschale bei uns. Manche begleiten uns seit vielen Jahren. Wir verfolgen das nicht als Marketingkennzahl, aber die Quote ist hoch. Chinesisches Hosting und ICP-Verlängerungen (互联网内容提供商) erfordern im Kern fortlaufende lokale Unterstützung, also setzt sich die Beziehung von selbst fort.',
      },
      {
        question: 'Können wir Ihr Team nach dem Launch für laufende Entwicklung buchen?',
        answer: 'Ja. Wir bieten Entwicklungsstunden auf Pauschalbasis, Content-Produktion, SEO, GEO-China-Arbeit, Hosting-Management. Die meisten Kunden landen bei einer monatlichen Pauschale, die Wartung plus ein Kontingent an Entwicklungsstunden für das abdeckt, was eben so anfällt.',
      },
      {
        question: 'Was, wenn wir es irgendwann ins Haus holen wollen?',
        answer: 'In Ordnung, wir helfen beim Übergang. Wir haben Kundenteams darin geschult, Content-Updates, leichte Entwicklung und Baidu-SEO (百度) selbst zu übernehmen. Wir übergeben die Dokumentation, machen den Wissenstransfer und bleiben für die schwierigen Dinge erreichbar. Ohne Drama.',
      },
      {
        question: 'Bieten Sie Schulungen für unser internes Team an?',
        answer: 'Ja. WordPress-Schulungen, Baidu-Tongji-Schulungen (百度统计), Grundlagen der Baidu Search Resource Platform (百度搜索资源平台), Content-Workflow. Entweder als Remote-Sitzungen oder vor Ort, wenn Sie in China sind. Das Format reicht von ein paar Stunden bis zu mehrtägigen Workshops, je nach Bedarf.',
      },
    ],
  },
  {
    title: 'Häufige Einwände und Sonderfälle',
    shortTitle: 'Sonderfälle',
    icon: 'spark-question',
    items: [
      {
        question: 'Wir arbeiten bereits mit einer globalen Digitalagentur. Warum noch Sie?',
        answer: 'Weil sie kein ICP (互联网内容提供商) einreichen kann, keine Hosting-Beziehungen in China hat und Baidu (百度) nicht so kennt wie wir. Die meisten unserer Kunden behalten ihre globale Agentur für die globale Arbeit und setzen uns für die China-spezifische Ebene ein. Wir arbeiten ständig mit globalen Agenturen zusammen, ganz ohne Ego-Probleme.',
      },
      {
        question: 'Unser IT-Team glaubt, das intern stemmen zu können. Was sagen wir ihnen?',
        answer: 'Sagen Sie ihnen, wir wünschen viel Glück, und rufen Sie uns in drei Monaten an. Halb im Scherz. Eine interne IT kann das durchaus, wenn sie ein Jahr Zeit hat, die Vorschriften zu lernen, Hosting-Beziehungen aufzubauen und die Baidu Search Resource Platform (百度搜索资源平台) zu durchdringen. Den meisten internen Teams wird klar, dass diese Lernkurve nicht dort liegt, wo sie ihre Zeit verbringen sollten.',
      },
      {
        question: 'Was, wenn unser Unternehmen politisch oder regulatorisch heikel ist?',
        answer: 'Wir haben mit Kunden in regulierten Branchen gearbeitet, vom Gesundheitswesen bis zu verteidigungsnaher Technik. Wir nehmen nicht jedes Projekt an. Wenn Ihre Branche Compliance-Fragen mit sich bringt, die eine China-Webpräsenz riskant machen, sagen wir Ihnen das von Anfang an und empfehlen, zuerst mit einem Rechtsberater zu sprechen. Besser, man weiß es in Woche eins.',
      },
    ],
  },
];
