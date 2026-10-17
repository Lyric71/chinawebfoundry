import sys
src = 'editorial/logs/2026-10-17-b3/publish-l10n/es.p1.md'
dst = 'editorial/logs/2026-10-17-b3/publish-l10n/es.p2.md'
s = open(src, encoding='utf8').read()
reps = [
('subtitle: "Los tres relojes de un proyecto web en China, cuáles avanzan a la vez y dónde suelen perder un mes los equipos."',
 'subtitle: "Los tres relojes de un proyecto web en China: cuáles corren a la vez y en qué punto suelen perder un mes los equipos."'),
('summary: "Con una entidad ya constituida en China continental, calculamos catorce semanas. La entidad y el registro ICP van en serie y marcan la fecha. El plan, semana a semana."',
 'summary: "Con la entidad ya constituida en China continental, calculamos catorce semanas. La entidad y el registro ICP, en serie, fijan la fecha. El plan, semana a semana."'),
('calculamos catorce semanas desde el arranque del proyecto hasta la puesta en marcha. Todo proyecto avanza con tres relojes',
 'contamos con catorce semanas entre el arranque del proyecto y la puesta en línea. Todo proyecto se rige por tres relojes'),
('El registro no puede empezar mientras no exista la entidad, y la web no puede abrir hasta que el registro esté aprobado, de modo que esas dos fases van una detrás de otra. Si el expediente se presenta la primera semana, se resuelve mientras dura el desarrollo. Si se espera a que estén aprobados los diseños, sus tres a seis semanas se suman al final del calendario. Ahí es donde la mayoría de los planes pierde un mes.',
 'Sin entidad no se puede iniciar el registro, y sin registro aprobado la web no puede abrir: esas dos fases, por tanto, se suceden. Presentado la primera semana, el expediente se resuelve mientras avanza el desarrollo. Si se aguarda a la aprobación de los diseños, en cambio, sus tres a seis semanas se añaden al final del calendario. Es ahí donde la mayoría de los calendarios pierde un mes.'),
('| Reloj | Lo que calculamos | Coincide con | No arranca hasta tener |',
 '| Reloj | Lo que calculamos | Corre en paralelo con | No arranca sin |'),
('## Los tres relojes y cuáles avanzan a la vez', '## Los tres relojes y cuáles corren a la vez'),
('La mayoría de los calendarios que se preparan fuera de China tienen una sola línea: diseño, desarrollo, lanzamiento. Una web en China continental tiene tres, y el orden entre ellas fija la fecha.',
 'Vistos desde fuera de China, casi todos los calendarios caben en una sola línea: diseño, desarrollo, lanzamiento. Una web en China continental sigue tres, y el orden en que se suceden fija la fecha.'),
('Después viene el registro, ya que el servidor no servirá la web hasta que se apruebe. El desarrollo puede avanzar junto a ambos,',
 'Le sigue el registro, porque el servidor no publicará la web mientras no esté aprobado. El desarrollo, en cambio, puede avanzar en paralelo,'),
('Así que el desarrollo rara vez es lo que marca la fecha.', 'De ahí que el desarrollo rara vez marque la fecha.'),
('Sin entidad, la constitución y el registro se encadenan uno tras otro y, sumados, suelen durar más que el desarrollo.',
 'Sin ella, constitución y registro se encadenan y, sumados, suelen prolongarse más que el desarrollo.'),
('Una matriz extranjera no puede registrar su propia web desde el extranjero.', 'Una matriz extranjera no puede registrar su web desde fuera del país.'),
('Las semanas se van en completar el expediente.', 'Lo que consume semanas es reunir el expediente completo.'),
('No ponemos cifra a este reloj, porque lo marcan sus abogados y el registro mercantil de su país.',
 'No ponemos cifra a este reloj: lo marcan sus abogados y el registro mercantil de su país.'),
('así que conviene redactar ese objeto pensando en la web.', 'de modo que conviene redactarlo con la web en mente.'),
('Lo que hace que un expediente vuelva suele ser algo pequeño.', 'Y los motivos de devolución suelen ser menores.'),
('La última fila de la tabla sorprende a los equipos que quieren un lanzamiento discreto.',
 'La última fila de la tabla suele sorprender a los equipos que cuentan con un lanzamiento discreto.'),
('En qué categoría encaja una tienda en línea es algo que debe decidir un asesor autorizado.',
 'Determinar en qué categoría encaja una tienda en línea corresponde a un asesor autorizado.'),
('Nada de eso necesita el número de registro.', 'Ninguna de esas tareas requiere el número de registro.'),
('Lo que sí necesita el desarrollo desde la primera semana es un plan de dependencias.',
 'Desde la primera semana, eso sí, el desarrollo necesita un plan de dependencias.'),
('Los textos en chino son la partida que se retrasa.', 'Donde suele torcerse el calendario es en los textos en chino.'),
('Después llega la espera posterior al lanzamiento.', 'Queda, por último, la espera que sigue al lanzamiento.'),
('por el rastreo rápido (快速抓取), con la retirada de las cuotas anteriores.', 'por el rastreo rápido (快速抓取), y retiró las cuotas anteriores.'),
('Esta es la tabla con la que planifica el equipo de Shanghái una web nueva cuando la entidad ya está constituida.',
 'Esta es la tabla con la que el equipo de Shanghái planifica una web nueva cuando la entidad ya está constituida.'),
('Hay cuatro cosas que ahorran semanas.', 'Cuatro decisiones ahorran semanas.'),
('El resto no se mueve. La revisión provincial sigue el reloj del regulador, y un sector regulado añade su autorización previa antes del registro.',
 'Lo demás es inamovible. La revisión provincial sigue el reloj del regulador, y en un sector regulado la autorización previa se antepone al registro.'),
('Y la vía rápida de Baidu quedó en 2024 para los socios VIP.', 'Y desde 2024 la vía rápida de Baidu está reservada a los socios VIP.'),
('La norma de Tencent Cloud es que la web debe estar cerrada o ser inaccesible', 'Tencent Cloud exige que la web esté cerrada o sea inaccesible'),
('calculamos catorce semanas desde el arranque hasta la puesta en marcha, y de ocho a doce',
 'contamos con catorce semanas entre el arranque y la puesta en línea, y con ocho a doce'),
('Nosotros calculamos de tres a seis semanas, porque los documentos llevan tiempo y las solicitudes vuelven.',
 'Nosotros calculamos de tres a seis semanas, el tiempo de reunir los documentos y atender las devoluciones.'),
]
for a, b in reps:
    if s.count(a) != 1:
        sys.exit('not found once: ' + a[:80])
    s = s.replace(a, b)
open(dst, 'w', encoding='utf8', newline='\n').write(s)
print('es.p2 written,', len(reps), 'edits')
