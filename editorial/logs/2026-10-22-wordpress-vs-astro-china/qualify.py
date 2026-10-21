from recover import ROOT, edit, log
import re, sys

paths = {
 'en': ['src/pages/astro.astro', 'src/pages/services/china-hosting.astro', 'src/pages/services/index.astro'],
 'fr': ['src/pages/fr/astro.astro', 'src/pages/fr/services/hebergement-chine.astro', 'src/pages/fr/services/index.astro'],
 'es': ['src/pages/es/astro.astro', 'src/pages/es/servicios/alojamiento-china.astro', 'src/pages/es/servicios/index.astro'],
 'de': ['src/pages/de/astro.astro', 'src/pages/de/leistungen/china-hosting.astro', 'src/pages/de/leistungen/index.astro'],
}
copy = {
 'en': [
  'We inspect the generated files before launch and check requests in the browser. External scripts can call further hosts at runtime, so the build output alone is not a complete host inventory.',
  'We have no published China benchmark comparing the two. A static build lets us inspect the generated files before launch; browser scripts still need a network check. WordPress can also load quickly on a mainland server when blocked dependencies are removed.',
  'Does our Astro site need an ICP filing on a mainland server?',
  'Hosting routes below refer to files served by the stated origin. External scripts, APIs and CDN routing need separate checks.',
  'Third-party requests can hold up a page in China.',
 ],
 'fr': [
  'Avant la mise en ligne, nous examinons les fichiers générés et les requêtes du navigateur. Un script externe peut appeler d’autres serveurs pendant la visite : les fichiers compilés ne suffisent donc pas à tous les recenser.',
  'Nous ne disposons d’aucun test publié comparant les deux depuis la Chine. Un site statique permet de vérifier les fichiers générés avant sa mise en ligne ; il faut aussi contrôler les requêtes des scripts dans le navigateur. WordPress peut lui aussi charger rapidement sur un serveur continental une fois les dépendances bloquées retirées.',
  'Notre site Astro doit-il faire l’objet d’un dépôt ICP sur un serveur continental ?',
  'Les trajets décrits concernent les fichiers servis par le serveur indiqué. Les scripts externes, les API et le routage des CDN demandent des vérifications distinctes.',
  'Les appels à des services tiers peuvent retarder une page en Chine.',
 ],
 'es': [
  'Antes del lanzamiento revisamos los archivos generados y las peticiones del navegador. Los scripts externos pueden llamar a otros servidores durante la visita, por lo que los archivos compilados no bastan para identificarlos todos.',
  'No contamos con una prueba publicada que compare ambos desde China. Una web estática permite revisar los archivos generados antes del lanzamiento; también hay que comprobar las peticiones de los scripts en el navegador. WordPress puede cargar con rapidez en un servidor continental si se eliminan las dependencias bloqueadas.',
  '¿Necesita nuestra web Astro un registro ICP si se aloja en un servidor continental?',
  'Los recorridos descritos corresponden a los archivos servidos por el servidor indicado. Los scripts externos, las API y las rutas de los CDN requieren comprobaciones aparte.',
  'Las peticiones a servicios externos pueden retrasar una página en China.',
 ],
 'de': [
  'Vor dem Start prüfen wir die erzeugten Dateien und die Anfragen im Browser. Externe Skripte können während des Besuchs weitere Server aufrufen. Die kompilierten Dateien allein ergeben deshalb keine vollständige Host-Liste.',
  'Uns liegt kein veröffentlichter Test vor, der beide Systeme aus China vergleicht. Bei einer statischen Website lassen sich die erzeugten Dateien vor dem Start prüfen; zusätzlich müssen die Skriptanfragen im Browser kontrolliert werden. Auch WordPress kann auf einem Festlandserver schnell laden, wenn blockierte Abhängigkeiten entfernt sind.',
  'Braucht unsere Astro-Website auf einem Festlandserver eine ICP-Registrierung?',
  'Die beschriebenen Wege gelten für Dateien, die vom angegebenen Server ausgeliefert werden. Externe Skripte, APIs und das CDN-Routing müssen gesondert geprüft werden.',
  'Anfragen an externe Dienste können den Seitenaufbau in China verzögern.',
 ],
}

def keyed(path, key, field, value, label):
    s = (ROOT/path).read_text(encoding='utf-8')
    m = re.search(r"(?:id|title): '" + re.escape(key) + r"',\s*" + field + r": '((?:\\.|[^'\\])*)'", s)
    if not m: raise ValueError((path, key, field))
    edit(path, [(m.group(1), value.replace("'", "\\'"))], label)

def scope(path, value, label):
    p = ROOT/path
    s=p.read_text(encoding='utf-8')
    m=re.search(r'(</PageLayout>)',s)
    if not m: raise ValueError(path)
    insertion='<p class="mx-auto max-w-5xl px-6 pb-8 text-sm text-[var(--color-text-muted)]">'+value+'</p>\n'
    edit(path, [('</PageLayout>',insertion+'</PageLayout>')],label)

if __name__=='__main__':
    lang=sys.argv[1]; stage=int(sys.argv[2]); a,h,i=paths[lang]
    if stage==1:
        log(f'### Supplemental {lang.upper()} pass 1\nNew technical qualifications rewritten from scratch; all other completed passages preserved.')
        keyed(a, 'Performance' if lang in ['en','fr','de'] else 'Rendimiento', 'body',copy[lang][0], 'Build audit: runtime requests included')
        keyed(a, 'astro-vs-wp-speed','question', {'en':'Is Astro really faster than WordPress in China?','fr':'Astro est-il vraiment plus rapide que WordPress en Chine ?','es':'¿Es Astro realmente más rápido que WordPress en China?','de':'Ist Astro in China tatsächlich schneller als WordPress?'}[lang], 'Question preserved in meaning')
        # Locate the answer independently of the question wording.
        s=(ROOT/a).read_text(encoding='utf-8'); m=re.search(r"id: 'astro-vs-wp-speed',\s*question: '(?:\\.|[^'\\])*',\s*answer: '((?:\\.|[^'\\])*)'",s)
        edit(a,[(m.group(1),copy[lang][1])],'Speed FAQ: no comparative measurement claimed')
        keyed(a,'astro-icp','question',copy[lang][2],'ICP filing terminology')
        for path in [a,h,i]: scope(path,copy[lang][3],'Hosting route scope: origin files, external requests checked separately')
        s=(ROOT/i).read_text(encoding='utf-8'); m=re.search(r"tagline: '([^'\n]*(?:2 seconds|2 secondes|2 segundos|2 Sekunden)[^'\n]*)'",s,re.I)
        if m: edit(i,[(m.group(1),copy[lang][4])],'Cut an undated 2-to-15-second comparison')
        log(f'{lang.upper()} supplemental pass 1 complete. Pause at least 15 seconds before pass 2.')
    elif stage==2:
        changes={
          'fr':[("les fichiers compilés ne suffisent donc pas à tous les recenser.","le contrôle doit donc aller au-delà des fichiers compilés."),("demandent des vérifications distinctes.","se vérifient séparément.")],
          'es':[("no bastan para identificarlos todos.","no recogen todas las conexiones."),("requieren comprobaciones aparte.","se comprueban por separado.")],
          'de':[("ergeben deshalb keine vollständige Host-Liste.","erfassen deshalb nicht alle Verbindungen."),("müssen gesondert geprüft werden.","werden separat geprüft.")],
        }
        for path in [a,h,i]:
            pairs=[x for x in changes[lang] if x[0] in (ROOT/path).read_text(encoding='utf-8')]
            if pairs: edit(path,pairs,f'{lang.upper()} supplemental pass 2: stronger native verbs and tighter clauses')
        log(f'{lang.upper()} supplemental pass 2 complete. ICP question, speed FAQ and service tagline kept as-is after native review. Pause at least 15 seconds before pass 3.')
    else:
        changes={
          'fr': [('les requêtes des scripts dans le navigateur','les appels que les scripts déclenchent dans le navigateur')],
          'es': [('también hay que comprobar las peticiones de los scripts en el navegador','también se revisan las conexiones que abren los scripts en el navegador')],
          'de': [('zusätzlich müssen die Skriptanfragen im Browser kontrolliert werden','hinzu kommt die Prüfung der Verbindungen, die Skripte im Browser aufbauen')],
        }
        edit(a,changes[lang],f'{lang.upper()} supplemental pass 3: final native polish, concrete description of script requests')
        log(f'{lang.upper()} supplemental pass 3 complete. Other new passages kept as-is. No slug, ID, route or component prop changed by translation.')
