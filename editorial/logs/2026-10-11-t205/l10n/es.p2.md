# ES, pass 2 (native rewrite from the Spanish draft, English not consulted)

## A. table row
- before: | cdnjs, unpkg | Accesible | GreatFire no detecta bloqueo en ninguno de los dos. Ninguno tiene una prueba publicada desde una línea residencial |
+ after:  | cdnjs, unpkg | Accesible | Sin bloqueo según GreatFire. No hay pruebas publicadas desde una línea residencial |
why: a table cell takes the clipped nominal form; the double "ninguno" was clumsy.

## B. probe sentence
- before: La última prueba concluyente de GreatFire sobre ajax.googleapis.com desde el territorio continental, el 22 de agosto de 2026, falló. Seis días después, una sonda de 21YunBox instalada en una instancia de Alibaba Cloud en Zhangjiakou intentó tres veces abrir la página Hosted Libraries de Google y no recibió ningún primer byte antes de que cada intento se abandonara a los sesenta segundos.
+ after:  En GreatFire, la última prueba concluyente de ajax.googleapis.com realizada desde el territorio continental, el 22 de agosto de 2026, terminó en fallo. Seis días más tarde, una sonda de 21YunBox alojada en Alibaba Cloud, en Zhangjiakou, solicitó tres veces la página Hosted Libraries de Google sin obtener un solo byte; cada intento se abandonó a los sesenta segundos.
why: "antes de que cada intento se abandonara" was an English-shaped subordinate; the semicolon split reads like El País.

## C. cdnjs and unpkg paragraph
- before: GreatFire considera que `cdnjs.cloudflare.com` y `unpkg.com` no están bloqueados, según pruebas del 27 de septiembre y del 14 de agosto de 2026. Ninguno de los dos tiene una prueba publicada desde una línea residencial, así que mantenga sus peticiones en su propia auditoría.
+ after:  Según GreatFire, ni `cdnjs.cloudflare.com` ni `unpkg.com` están bloqueados (últimas pruebas: 27 de septiembre y 14 de agosto de 2026). Como no se ha publicado ninguna prueba desde una línea residencial, conviene que sus peticiones sigan dentro de su auditoría.
why: "ni... ni" carries the pair natively; "considera que... según pruebas" doubled the attribution.

## D. table row
- before: | cdnjs, unpkg | No bloqueados, GreatFire, 27 sept. y 14 ago. 2026 | Cada URL solicitada | Probar o alojar localmente |
+ after:  | cdnjs, unpkg | Sin bloqueo según GreatFire, 27 sept. y 14 ago. 2026 | Cada URL solicitada | Probar o alojar localmente |

## E. checklist blockquote
- before: > En una prueba desde una instancia de Alibaba Cloud (阿里云) en cn-zhangjiakou el 28 de agosto de 2026, el sitio web de Google Hosted Libraries no devolvió el primer byte en ninguna de las 3 ejecuciones, cada una abandonada a los 60 segundos.
+ after:  > En una prueba realizada desde una instancia de Alibaba Cloud (阿里云) en cn-zhangjiakou el 28 de agosto de 2026, el sitio web de Google Hosted Libraries no devolvió el primer byte en ninguna de las 3 ejecuciones, todas abandonadas a los 60 segundos.
  Source line kept as-is.

## F. sitio-web-en-china.astro
- before: quote: 'La última prueba concluyente de GreatFire sobre ajax.googleapis.com desde China continental falló, y la organización clasifica el host como bloqueado.'
+ after:  quote: 'Desde China continental, la última prueba concluyente de GreatFire sobre ajax.googleapis.com fracasó: la organización clasifica el host como bloqueado.'
  source kept as-is.
