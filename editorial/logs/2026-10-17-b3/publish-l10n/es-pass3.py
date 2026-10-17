import sys
src = 'editorial/logs/2026-10-17-b3/publish-l10n/es.p2.md'
dst = 'editorial/logs/2026-10-17-b3/publish-l10n/es.p3.md'
s = open(src, encoding='utf8').read()
reps = [
('summary: "Con la entidad ya constituida en China continental, calculamos catorce semanas. La entidad y el registro ICP, en serie, fijan la fecha. El plan, semana a semana."',
 'summary: "Con entidad en China continental, calculamos catorce semanas. La entidad y el registro ICP, en serie, fijan la fecha. El plan, semana a semana."'),
('Una web corporativa sencilla puede estar en línea en ocho a doce semanas.',
 'Una web corporativa sencilla puede estar operativa en un plazo de ocho a doce semanas.'),
('ya que todo lo demás espera a la licencia comercial.', 'porque todo lo demás depende de la licencia comercial.'),
('Sobre el papel, son cuatro semanas como mucho.', 'Sobre el papel, cuatro semanas como máximo.'),
('y las solicitudes vuelven para corregirse.', 'y las solicitudes se devuelven para su corrección.'),
('y ese reloj es más lento.', 'y ese reloj corre más despacio.'),
('y esa lista decide cómo se construye el tema.', 'y esa lista determina cómo se construye el tema.'),
('En nuestra planificación contamos de dos a cuatro semanas hasta que aparecen las primeras páginas.',
 'En nuestra planificación reservamos de dos a cuatro semanas hasta que aparecen las primeras páginas.'),
('Una web nueva no es socio VIP, de modo que envía sus páginas con las herramientas estándar.',
 'Una web nueva no es socio VIP, así que debe enviar sus páginas con las herramientas estándar.'),
('que el proveedor revisa según sus normas.', 'que el proveedor coteja con sus normas.'),
('El precio es la velocidad, porque cada solicitud cruza entonces el Great Firewall desde fuera.',
 'El precio que se paga es la velocidad: cada solicitud cruza entonces el Great Firewall desde fuera.'),
('Todas las fuentes que se citan a continuación se comprobaron el 17 de octubre de 2026.',
 'Todas las fuentes citadas a continuación se comprobaron el 17 de octubre de 2026.'),
('Con el expediente completo, la inscripción en sí es rápida.', 'Una vez completo el expediente, la inscripción en sí es rápida.'),
('Los documentos de la matriz tienen que certificarse antes en su país.', 'Antes, los documentos de la matriz deben certificarse en su país de origen.'),
]
for a, b in reps:
    if s.count(a) != 1:
        sys.exit('not found once: ' + a[:80])
    s = s.replace(a, b)
open(dst, 'w', encoding='utf8', newline='\n').write(s)
print('es.p3 written,', len(reps), 'edits')
