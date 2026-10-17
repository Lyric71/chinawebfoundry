import re,sys
src='editorial/logs/2026-10-17-b3/publish-l10n/fr.p2.md'
dst='editorial/logs/2026-10-17-b3/publish-l10n/fr.p3.md'
s=open(src,encoding='utf8').read()
reps=[
("Entité déjà créée en Chine continentale : comptez quatorze semaines. L'entité, puis l'enregistrement ICP, fixent la date. Le planning, semaine par semaine.","Avec une entité en Chine continentale, comptez quatorze semaines. L'entité puis l'enregistrement ICP fixent la date. Le planning, semaine par semaine."),
("Trois horloges tournent sur tout projet : l'entité, l'enregistrement ICP et le développement.","Tout projet obéit à trois horloges : l'entité, l'enregistrement ICP et le développement."),
("Si l'on attend la validation des maquettes pour le lancer, ses trois à six semaines viennent s'ajouter en bout de planning.","Attendre la validation des maquettes pour le lancer, c'est rajouter ses trois à six semaines en bout de planning."),
("## Les trois horloges, et celles qui tournent en même temps","## Trois horloges, et celles qui tournent en même temps"),
("Vus de l'étranger, la plupart des plannings tiennent sur une ligne","Vus de l'étranger, la plupart des plannings tiennent en une ligne"),
("ou sous 3 jours ouvrés lorsque ce n'est pas possible, délai porté de 3 jours ouvrés supplémentaires pour les dossiers complexes.","ou sous 3 jours ouvrés à défaut, délai prolongeable de 3 jours ouvrés pour les dossiers complexes."),
("Les motifs de renvoi sont le plus souvent minimes.","Et un dossier revient le plus souvent pour des détails."),
("Ce n'est donc presque jamais lui qui dicte le calendrier.","Il dicte donc rarement le calendrier."),
("Le développement, lui, avance à côté des deux,","Le développement, lui, avance en parallèle,"),
("Mettez-la en route avant même de consulter une agence web, car tout le reste attend la licence commerciale.","Mettez-la en route avant même de consulter une agence web : tout le reste attend la licence commerciale."),
("Aucune de ces tâches n'a besoin du numéro d'enregistrement.","Aucune de ces tâches n'exige le numéro d'enregistrement."),
("Un rédacteur chinois va moins vite qu'un traducteur, et il ne peut pas s'y mettre avant la validation des textes sources.","Un rédacteur chinois avance moins vite qu'un traducteur, et il ne peut s'y mettre qu'une fois les textes sources validés."),
("Nous comptons deux à quatre semaines avant que les premières pages apparaissent.","Nous comptons deux à quatre semaines avant l'apparition des premières pages."),
("Voici le tableau sur lequel l'équipe de Shanghai bâtit le planning d'un nouveau site, l'entité étant déjà immatriculée.","Voici le tableau dont part l'équipe de Shanghai pour planifier un nouveau site, l'entité étant déjà immatriculée."),
("Sans entité, il faut placer l'horloge de l'entité avant la première semaine.","Sans entité, l'horloge de l'entité vient se placer avant la première semaine."),
("Le reste ne se négocie pas.","Le reste est incompressible."),
("et un secteur réglementé fait précéder le dépôt de son autorisation préalable.","et dans un secteur réglementé, l'autorisation préalable doit précéder le dépôt."),
("Votre site international peut rester en ligne sur son propre domaine, et le domaine chinois ouvre dès que le numéro est délivré.","Votre site international reste en ligne sur son propre domaine, et le domaine chinois ouvre dès la délivrance du numéro."),
]
for a,b in reps:
    if s.count(a)!=1: sys.exit('not found once: '+a)
    s=s.replace(a,b)
# typography: curly apostrophe, NBSP before : ; ? ! and inside guillemets
s=s.replace("'","’")
s=re.sub(r' ([:;?!])(?=\s|$|\*)', lambda m: ' '+m.group(1), s, flags=re.M)
s=s.replace('« ','« ').replace(' »',' »')
s=s.replace('n° ','n° ')
open(dst,'w',encoding='utf8',newline='\n').write(s)
