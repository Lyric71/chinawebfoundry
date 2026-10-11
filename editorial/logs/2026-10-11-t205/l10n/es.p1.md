# ES, pass 1 (humanised translation, every changed passage re-authored)

## A. is-wordpress-blocked-in-china, table row
- before: | cdnjs, unpkg | Accesible, lento | Ambos completan. Sin probar desde una línea residencial |
+ after:  | cdnjs, unpkg | Accesible | GreatFire no detecta bloqueo en ninguno de los dos. Ninguno tiene una prueba publicada desde una línea residencial |
why: "lento" and the completion claim rested on withdrawn 21YunBox figures.

## B. is-wordpress-blocked-in-china, probe sentence
- before: En sondeos repetidos desde una instancia de Alibaba Cloud en Zhangjiakou, las peticiones a ajax.googleapis.com no devolvieron un solo byte en ninguna de las tandas, hasta que abandonamos la prueba a los sesenta segundos.
+ after:  La última prueba concluyente de GreatFire sobre ajax.googleapis.com desde el territorio continental, el 22 de agosto de 2026, falló. Seis días después, una sonda de 21YunBox instalada en una instancia de Alibaba Cloud en Zhangjiakou intentó tres veces abrir la página Hosted Libraries de Google y no recibió ningún primer byte antes de que cada intento se abandonara a los sesenta segundos.
why: "abandonamos" presented 21YunBox's probe as ours, on the wrong host.

## C. wordpress-plugins-china, cdnjs and unpkg paragraph
- before: No disponemos de una prueba completa, fechada y con ubicación identificada para cdnjs y unpkg. Su estado queda sin verificar aquí. Incluya en su auditoría las peticiones a `cdnjs.cloudflare.com` o `unpkg.com`.
+ after:  GreatFire considera que `cdnjs.cloudflare.com` y `unpkg.com` no están bloqueados, según pruebas del 27 de septiembre y del 14 de agosto de 2026. Ninguno de los dos tiene una prueba publicada desde una línea residencial, así que mantenga sus peticiones en su propia auditoría.
why: dated GreatFire verdicts exist for both.

## D. wordpress-plugins-china, table row
- before: | cdnjs, unpkg | Sin verificar aquí | Cada URL solicitada | Probar o alojar localmente |
+ after:  | cdnjs, unpkg | No bloqueados, GreatFire, 27 sept. y 14 ago. 2026 | Cada URL solicitada | Probar o alojar localmente |

## E. china-website-brief-checklist, blockquote
- before: > En una prueba desde una instancia de Alibaba Cloud (阿里云) en cn-zhangjiakou el 28 de agosto de 2026, Google Hosted Libraries no devolvió el primer byte en ninguna de las 3 ejecuciones, cada una abandonada a los 60 segundos.
  > Fuente: 21YunBox, Google Hosted Libraries in China, 30 de agosto de 2026.
+ after:  > En una prueba desde una instancia de Alibaba Cloud (阿里云) en cn-zhangjiakou el 28 de agosto de 2026, el sitio web de Google Hosted Libraries no devolvió el primer byte en ninguna de las 3 ejecuciones, cada una abandonada a los 60 segundos.
  > Fuente: 21YunBox, Google Hosted Libraries in China, página revisada el 8 de octubre de 2026.

## F. sitio-web-en-china.astro, quote and source
- before: quote: 'Desde una instancia de Alibaba Cloud (阿里云) en Zhangjiakou, el 29 de agosto de 2026, peticiones repetidas a ajax.googleapis.com no devolvieron ningún primer byte antes del abandono a los 60 segundos.' / source: 'Medición de ChinaWebFoundry, 29 de agosto de 2026'
+ after:  quote: 'La última prueba concluyente de GreatFire sobre ajax.googleapis.com desde China continental falló, y la organización clasifica el host como bloqueado.' / source: 'GreatFire, última prueba el 22 de agosto de 2026'
