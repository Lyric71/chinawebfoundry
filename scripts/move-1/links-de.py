# -*- coding: utf-8 -*-
"""Move 1, Task C: one contextual internal link per German guide article."""
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from insert import apply

HEAD = '/de/wordpress-in-china/'
WPA = '/de/wordpress-agentur-china/'
WEB = '/de/webagentur-china/'

EDITS = {
'baiduspider-firewall': (HEAD,
 u"Wir sehen das häufiger als jede andere technische Ursache für einen festgefahrenen China-Start, und fast immer steckt eine Einstellung dahinter, an die sich niemand erinnert.",
 u"Wir sehen das häufiger als jede andere technische Ursache für einen festgefahrenen China-Start, weit vor allem, was in [der WordPress-Umsetzung selbst](" + HEAD + u") passiert, und fast immer steckt eine Einstellung dahinter, an die sich niemand erinnert."),

'china-website-hosting-guide': (HEAD,
 u"In jeder China-Strategie für das Web ist das Hosting die am stärksten unterschätzte Entscheidung.",
 u"In jeder China-Strategie für das Web ist das Hosting die am stärksten unterschätzte Entscheidung, und es wiegt für die Ladezeit schwerer als [alles, was Sie an einer WordPress-Installation drehen](" + HEAD + u")."),

'host-website-in-china': (HEAD,
 u"An seinem Standort hängt, ob Ihre Startseite für einen chinesischen Besucher in unter einer Sekunde steht oder er vor dem drehenden Ladekreis kapituliert.",
 u"An seinem Standort hängt, ob Ihre Startseite für einen chinesischen Besucher in unter einer Sekunde steht oder er vor dem drehenden Ladekreis kapituliert, und das wiegt schwerer als jede andere Entscheidung in [einer WordPress-Umsetzung für China](" + HEAD + u")."),

'great-firewall-what-it-blocks': (HEAD,
 u"liefert chinesischen Nutzern ein kaputtes Erlebnis.",
 u"liefert chinesischen Nutzern ein kaputtes Erlebnis, und [eine Standardinstallation von WordPress bringt gleich mehrere davon mit](" + HEAD + u")."),

'google-analytics-china': (HEAD,
 u"oder sie lassen es drin und servieren ganz Shanghai eine langsamere Website.",
 u"oder sie lassen es drin und servieren ganz Shanghai eine langsamere Website, einer der häufigsten Wege, auf denen [eine WordPress-Website in China unbrauchbar wird](" + HEAD + u")."),

'china-website-localisation': (HEAD,
 u"das Tempo des Kundenservice und kulturelle Entscheidungen,",
 u"das Tempo des Kundenservice, [das, was sich an einer WordPress-Umsetzung für China ändern muss](" + HEAD + u"), und kulturelle Entscheidungen,"),

'mobile-first-design-china': (HEAD,
 u"baut für ein Internet, das chinesische Nutzer schon vor Jahren hinter sich gelassen haben.",
 u"baut für ein Internet, das chinesische Nutzer schon vor Jahren hinter sich gelassen haben, und keine spätere Feinarbeit an [einem WordPress-Theme für China](" + HEAD + u") rettet diese Entscheidung."),

'woocommerce-china-store-guide': (HEAD,
 u"WooCommerce funktioniert in China gut.",
 u"WooCommerce funktioniert in China gut, zu denselben Bedingungen wie [jede WordPress-Website hinter der Großen Firewall](" + HEAD + u")."),

'baidu-structured-data': (HEAD,
 u"womit die Frage offenbleibt, was man ausliefern soll.",
 u"womit die Frage offenbleibt, was man aus [einer für China gebauten WordPress-Website](" + HEAD + u") ausliefern soll."),

'submitting-urls-to-baidu': (HEAD,
 u"der Baidu mitteilt, dass eine Seite existiert.",
 u"der Baidu mitteilt, dass eine Seite existiert, ganz gleich ob diese Seiten aus [einem in China gehosteten WordPress](" + HEAD + u") stammen oder aus etwas anderem."),

'baidu-search-resource-platform': (HEAD,
 u"Wer sie auslässt, betreibt China-Suchstrategie als Ratespiel, mit einer Übersetzungsrechnung obendrauf.",
 u"Wer sie auslässt, betreibt China-Suchstrategie als Ratespiel, mit einer Übersetzungsrechnung obendrauf, so sorgfältig [die WordPress-Seite des Projekts für China](" + HEAD + u") auch gebaut sein mag."),

'baidu-site-verification': (HEAD,
 u"Die Arbeit dauert zehn Minuten, sofern das Hosting mitspielt.",
 u"Die Arbeit dauert zehn Minuten, sofern das Hosting mitspielt und [das WordPress bereits china-tauglich ist](" + HEAD + u")."),

'baidu-verification-failed': (HEAD,
 u"und was scheitert, liegt zwischen Baiduspider und Ihrem Server.",
 u"und was scheitert, liegt zwischen Baiduspider und Ihrem Server, oberhalb [der WordPress-Installation dahinter](" + HEAD + u")."),

'baidu-verification-scope': (HEAD,
 u"Eine Website ist hier ein Protokoll und ein Host, mehr nicht.",
 u"Eine Website ist hier ein Protokoll und ein Host, mehr nicht, was zählt, sobald [Ihre chinesische WordPress-Website](" + HEAD + u") auf mehreren davon antwortet."),

'baidu-fast-inclusion-gone': (HEAD,
 u"Man schob eine URL hinein, und die Seite sollte die Warteschlange überspringen.",
 u"Man schob eine URL hinein, und die Seite sollte die Warteschlange überspringen, weshalb es in [jedem WordPress-Projekt mit China-Ziel](" + HEAD + u") das erste angefragte Plugin war."),

'china-data-privacy-pipl-dsl': (HEAD,
 u"oder das Verhalten von Besuchern aus China verfolgt, fallen Sie in den Anwendungsbereich.",
 u"oder das Verhalten von Besuchern aus China verfolgt, fallen Sie in den Anwendungsbereich, und [ein unangetastetes WordPress tut mindestens zwei dieser drei Dinge](" + HEAD + u")."),

'icp-licence-filing-foreign-companies': (WPA,
 u"bedeutet langsamere Seiten, schlechtere Rankings und einen Auftritt, dem chinesische Nutzer womöglich nie vertrauen.",
 u"bedeutet langsamere Seiten, schlechtere Rankings und einen Auftritt, dem chinesische Nutzer womöglich nie vertrauen, weshalb [eine Agentur, die ICP-Anträge routiniert einreicht](" + WPA + u"), hier mehr wert ist als das günstigere Angebot."),

'baidu-seo-ranking-in-china': (WPA,
 u"Wer als ausländisches Unternehmen chinesische Kunden online erreichen will, muss diese Suchmaschine knacken.",
 u"Wer als ausländisches Unternehmen chinesische Kunden online erreichen will, muss diese Suchmaschine knacken, und danach fragt man [eine in China tätige WordPress-Agentur](" + WPA + u") als Erstes."),

'china-content-marketing-strategy': (WPA,
 u"Dieser eine Unterschied verändert, wie Sie an Plattformen, Formate und das Timing all dessen herangehen, was Sie veröffentlichen.",
 u"Dieser eine Unterschied verändert, wie Sie an Plattformen, Formate und das Timing all dessen herangehen, was Sie veröffentlichen, und was Sie von [der Agentur erwarten sollten, die die Website darunter baut](" + WPA + u")."),

'china-search-landscape-beyond-baidu': (WPA,
 u"Wer sie ignoriert, übersieht einen echten Teil dessen, wie Menschen in China suchen.",
 u"Wer sie ignoriert, übersieht einen echten Teil dessen, wie Menschen in China suchen, eine Lücke, die [ein WordPress-Spezialist für China](" + WPA + u") vor jeder Unterschrift ansprechen sollte."),

'baidu-keyword-research-tools': (WEB,
 u"und erklären, warum Keyword-Recherche auf Chinesisch eine eigene Disziplin ist.",
 u"und erklären, warum Keyword-Recherche auf Chinesisch eine eigene Disziplin ist, ob sie nun im eigenen Team landet oder bei [einer Webagentur vor Ort in China](" + WEB + u")."),

'baidu-index-traffic-data': (WEB,
 u"mehrere davon wochenlang leer, und zwar mit Absicht.",
 u"mehrere davon wochenlang leer, und zwar mit Absicht, weshalb [die Agentur, die sie für Sie liest](" + WEB + u"), mehr zählt als das Dashboard selbst."),

'baidu-account-foreign-company': (WEB,
 u"Rechnen Sie mit einem Tag für die einfache Variante. Mit mehreren Wochen für die schwierige.",
 u"Rechnen Sie mit einem Tag für die einfache Variante und mit mehreren Wochen für die schwierige, mit weniger, wenn [ein Partner mit laufendem Geschäft in China](" + WEB + u") den Antrag mit Ihnen stellt."),

'baidu-account-ownership': (WEB,
 u"Die Identität an diesem Konto ist das, was einem Grundbucheintrag für Ihre Präsenz in der chinesischen Suche bei Baidu am nächsten kommt.",
 u"Die Identität an diesem Konto ist das, was einem Grundbucheintrag für Ihre Präsenz in der chinesischen Suche bei Baidu am nächsten kommt, prüfen Sie also den Namen darauf, bevor [eine Agentur vor Ort](" + WEB + u") eines für Sie anlegt."),

'baidu-ads-account-foreign': (WEB,
 u"und die Entscheidung folgt Ihnen bis ins Hosting und in die Crawl-Leistung, lange nach dem Start.",
 u"und die Entscheidung folgt Ihnen bis ins Hosting und in die Crawl-Leistung, lange nach dem Start, und genau dort verdient [eine Webagentur mit Sitz in China](" + WEB + u") ihr Honorar."),

'baidu-aicaigou-b2b': (WEB,
 u"In dieser Lücke laufen ausländische Marketingpläne schief.",
 u"In dieser Lücke laufen ausländische Marketingpläne schief, und hier rechnet es sich, [das China-Marketing in die Hände eines Teams vor Ort zu legen](" + WEB + u")."),

'baidu-merchant-center': (WEB,
 u"Kein Wort dieses Satzes berührt Suchergebnisse oder die Indexierung Ihrer Website.",
 u"Kein Wort dieses Satzes berührt Suchergebnisse oder die Indexierung Ihrer Website, eine Aufgabe, die [Ihr Web-Team in China](" + WEB + u") getrennt davon erledigen muss."),

'baidu-product-feed': (WEB,
 u"Der größte Teil der Arbeit geht für Probleme drauf, vor denen Sie niemand gewarnt hat.",
 u"Der größte Teil der Arbeit geht für Probleme drauf, vor denen Sie niemand gewarnt hat, weshalb diese Arbeit meist bei [einer bereits in China etablierten Agentur](" + WEB + u") landet."),

'baidu-product-data-destinations': (WEB,
 u"Ein Satz in Baidus Produkt-FAQ listet auf, wohin diese Daten reisen dürfen. Alle drei Ziele werden gekauft.",
 u"Ein Satz in Baidus Produkt-FAQ listet auf, wohin diese Daten reisen dürfen, und alle drei Ziele werden gekauft, was das Budgetgespräch mit [den Leuten, die Ihren China-Webauftritt betreiben](" + WEB + u"), verändert."),
}

if __name__ == '__main__':
    for gid, (target, old, new) in EDITS.items():
        apply('src/content/guides-de/%s.md' % gid, [(old, new)])
    print('DE: %d articles linked' % len(EDITS))
