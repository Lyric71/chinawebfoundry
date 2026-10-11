# ES, pass 3 (final native polish)

## A. table row
kept as-is: | cdnjs, unpkg | Accesible | Sin bloqueo según GreatFire. No hay pruebas publicadas desde una línea residencial |

## B. probe sentence
- before: En GreatFire, la última prueba concluyente de ajax.googleapis.com realizada desde el territorio continental, el 22 de agosto de 2026, terminó en fallo. Seis días más tarde, una sonda de 21YunBox alojada en Alibaba Cloud, en Zhangjiakou, solicitó tres veces la página Hosted Libraries de Google sin obtener un solo byte; cada intento se abandonó a los sesenta segundos.
+ after:  En GreatFire, la última prueba concluyente de ajax.googleapis.com realizada desde el territorio continental, el 22 de agosto de 2026, acabó en fallo. Seis días más tarde, una sonda de 21YunBox alojada en Alibaba Cloud, en Zhangjiakou, solicitó tres veces la página Hosted Libraries de Google sin recibir un solo byte; cada intento se abandonó a los sesenta segundos.
why: "acabó en fallo" and "sin recibir" are the plainer press collocations.

## C. cdnjs and unpkg paragraph
- before: Según GreatFire, ni `cdnjs.cloudflare.com` ni `unpkg.com` están bloqueados (últimas pruebas: 27 de septiembre y 14 de agosto de 2026). Como no se ha publicado ninguna prueba desde una línea residencial, conviene que sus peticiones sigan dentro de su auditoría.
+ after:  Según GreatFire, ni `cdnjs.cloudflare.com` ni `unpkg.com` están bloqueados (últimas pruebas, el 27 de septiembre y el 14 de agosto de 2026). No se ha publicado ninguna prueba desde una línea residencial, así que mantenga sus peticiones dentro de su propia auditoría.
why: the "usted" imperative matches the rest of the page ("Incluya", "considere"); "conviene que... sigan" was soft.

## D. table row
kept as-is: | cdnjs, unpkg | Sin bloqueo según GreatFire, 27 sept. y 14 ago. 2026 | Cada URL solicitada | Probar o alojar localmente |

## E. checklist blockquote
- before: > En una prueba realizada desde una instancia de Alibaba Cloud (阿里云) en cn-zhangjiakou el 28 de agosto de 2026, el sitio web de Google Hosted Libraries no devolvió el primer byte en ninguna de las 3 ejecuciones, todas abandonadas a los 60 segundos.
+ after:  > En una prueba realizada desde una instancia de Alibaba Cloud (阿里云) en cn-zhangjiakou el 28 de agosto de 2026, el sitio web de Google Hosted Libraries no llegó a devolver el primer byte en ninguna de las 3 ejecuciones, todas abandonadas a los 60 segundos.
why: "no llegó a devolver" carries the waiting the sentence describes.
  Source line kept as-is: > Fuente: 21YunBox, Google Hosted Libraries in China, página revisada el 8 de octubre de 2026.

## F. sitio-web-en-china.astro
- before: quote: 'Desde China continental, la última prueba concluyente de GreatFire sobre ajax.googleapis.com fracasó: la organización clasifica el host como bloqueado.'
+ after:  quote: 'Desde China continental, la última prueba concluyente de GreatFire sobre ajax.googleapis.com fracasó, y el host figura como bloqueado.'
why: "la organización clasifica" was a translated agent; "figura como bloqueado" is how a Spanish desk would put it.
  source kept as-is: 'GreatFire, última prueba el 22 de agosto de 2026'

Step 3 complete. ES passages final, same corrections as FR, usted register kept.
