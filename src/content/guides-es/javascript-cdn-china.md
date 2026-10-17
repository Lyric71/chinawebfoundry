---
title: "Qué CDN de JavaScript funcionan en China"
subtitle: "Google Hosted Libraries detiene la carga de la página; cdnjs, unpkg y jsDelivr, en cambio, responden. Importa más el servidor concreto que la categoría."
summary: "En China continental, Google Hosted Libraries está bloqueado y paraliza la página. cdnjs, jsDelivr y unpkg responden, según GreatFire y 21YunBox."
visual: "/images/guides/javascript-cdn-china.webp"
order: 41
published: true
publishedAt: "2026-10-11"
updatedAt: 2026-10-18
reviewBy: "2026-11-12"
category: "Technology"
author: "echo-peng"
---

De los cuatro CDN públicos de JavaScript que se analizan aquí, solo el de Google falla en las pruebas publicadas desde China continental. GreatFire considera bloqueado `ajax.googleapis.com` (última prueba, 22 de agosto de 2026), y una sonda de 21YunBox en Alibaba Cloud (阿里云), en Zhangjiakou, no recibió el 28 de agosto ni siquiera el primer byte del sitio web de las bibliotecas de Google. jsDelivr respondió desde la misma región de Alibaba Cloud y desde una línea doméstica de Pekín. cdnjs y unpkg figuran como no bloqueados.

Ante la pregunta de si un CDN está bloqueado en China, la única respuesta fiable es una lista de nombres de servidor. Y solo uno de los cuatro hace caer la página con él. Todas las cifras que siguen se comprobaron en su fuente el 11 de octubre de 2026.

## ¿Está bloqueado su CDN en China? Lo que muestran las pruebas

Cada fila procede de GreatFire o de 21YunBox, con la fecha de cada prueba. Una cifra del censo de 21YunBox es la carga cronometrada del sitio web del proveedor desde su sonda. Muestra cómo se comporta el sitio de esa empresa visto desde China, pero el archivo que pide su página nunca formó parte de la prueba.

| Servidor               | Alibaba Cloud cn-zhangjiakou (21YunBox)          | Línea doméstica de China Mobile, Pekín (21YunBox) | GreatFire                 | Veredicto  | Fecha de la prueba        |
| ---------------------- | ------------------------------------------------ | ------------------------------------------------- | ------------------------- | ---------- | ------------------------- |
| `ajax.googleapis.com`  | sitio de las bibliotecas: 0 de 3, sin primer byte | ninguna prueba publicada                          | bloqueado, 1 de 1 fallida | bloqueado  | 22 y 28 ago 2026          |
| `cdn.jsdelivr.net`     | 72 de 72, mediana de 660 ms, p95 de 1757 ms      | 36 de 36                                          | no bloqueado, 3 de 3      | lento      | 28 y 30 ago, 8 oct 2026   |
| `cdnjs.cloudflare.com` | sitio de cdnjs: 3 de 3                           | ninguna prueba publicada                          | no bloqueado, 1 de 1      | accesible  | 28 y 29 ago, 27 sep 2026  |
| `unpkg.com`            | ninguna prueba publicada                         | ninguna prueba publicada                          | no bloqueado, 1 de 1      | accesible  | 14 ago 2026               |
| BootstrapCDN           | ninguna prueba del servidor de archivos          | ninguna prueba del servidor de archivos           | ninguna prueba fechada    | sin probar | ninguna                   |

> Desde una sonda de Alibaba Cloud (阿里云) en cn-zhangjiakou, se solicitaron 280 sitios tres veces cada uno, con un límite de 60 segundos. El sitio web de cdnjs completó 3 de 3 intentos. Google Hosted Libraries no dio ninguna respuesta.
> Fuente: 21YunBox, 280 Sites Measured From Inside China, 28 y 29 de agosto de 2026. https://www.21cloudbox.com/websites-blocked-in-china.html

Circula una idea muy extendida según la cual los CDN públicos no funcionan en China. El mismo estudio lo puso a prueba.

> 21YunBox concluye a partir de su censo que la regla «los CDN públicos no funcionan en China» no está respaldada por sus mediciones.
> Fuente: 21YunBox, 280 Sites Measured From Inside China, 28 y 29 de agosto de 2026. https://www.21cloudbox.com/websites-blocked-in-china.html

## Google Hosted Libraries detiene la página

La documentación de Google ofrece la etiqueta de jQuery completa, que apunta a `https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js`, y destaca su alcance mundial.

> Google describe Hosted Libraries como «una red de distribución de contenidos estable, fiable, de alta velocidad y disponible en todo el mundo» y ofrece el fragmento de jQuery en `ajax.googleapis.com`.
> Fuente: Google for Developers, Hosted Libraries, última actualización el 9 de octubre de 2026. https://developers.google.com/speed/libraries

Una etiqueta script convencional detiene el análisis de la página hasta que llega su archivo.

> «Los scripts sin los atributos async, defer o `type="module"`, así como los scripts en línea sin el atributo `type="module"`, se obtienen y ejecutan de inmediato, antes de que el navegador siga analizando la página».
> Fuente: MDN Web Docs, the script element, última modificación el 9 de mayo de 2026. https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script

Desde China continental, ese archivo no llega. La última prueba concluyente de GreatFire sobre ese servidor falló, y la sonda de 21YunBox ni siquiera obtuvo un primer byte del sitio web de las bibliotecas de Google.

> GreatFire considera bloqueado https://ajax.googleapis.com: el 100 % de las pruebas concluyentes recientes fallaron en China continental (1 de 1), con la última el 22 de agosto de 2026.
> Fuente: GreatFire, última prueba el 22 de agosto de 2026. https://en.greatfire.org/https/ajax.googleapis.com

21YunBox probó la página que leen los desarrolladores antes de copiar la etiqueta.

> Desde una sonda de Alibaba Cloud (阿里云) en cn-zhangjiakou, el 28 de agosto de 2026, el sitio web de Google Hosted Libraries no devolvió ningún primer byte en tres de tres intentos, todos abandonados al llegar al límite de sesenta segundos.
> Fuente: 21YunBox, Google Hosted Libraries in China, revisado el 8 de octubre de 2026. https://www.21cloudbox.com/support/google-hosted-libraries.html

El visitante se queda mirando una página en blanco hasta que el navegador abandona la petición. Después fallan también todos los scripts que necesitan jQuery: el menú, el carrusel, la validación de formularios y todo lo que el tema hiciera depender de él. La etiqueta suele haber llegado con un tema o un plugin hace años, así que quienes gestionan hoy el sitio quizá no sepan que está ahí. Desde una oficina en Fráncfort o Chicago, la misma página carga con normalidad. Desde fuera de China, nada parece fallar.

## jsDelivr responde desde ambas redes, aunque despacio

jsDelivr es el único CDN de esta lista con cifras desde un centro de datos y desde una línea doméstica. En ambas completó todas las peticiones.

> Desde una instancia de Alibaba Cloud (阿里云) en cn-zhangjiakou, con una muestra cada diez minutos durante doce horas el 28 de agosto de 2026 y un tiempo de espera de 30 segundos, `cdn.jsdelivr.net` completó 72 de 72 peticiones con una mediana de 660 ms hasta el primer byte y un percentil 95 de 1757 ms; `fonts.googleapis.com` completó 72 de 72 con 111 ms. Desde una línea residencial de China Mobile (中国移动) en Pekín, el 30 de agosto de 2026, `cdn.jsdelivr.net` recibió 36 peticiones sin ningún fallo y `fonts.googleapis.com`, 54 sin ninguna respuesta.
> Fuente: 21YunBox, A Chinese Cloud Probe Is Not a Chinese Visitor: The Same Hosts, Opposite Answers, 28 y 30 de agosto de 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

Desde el centro de datos, el 28 de agosto, la hoja de estilos de fuentes de Google respondió con una mediana de 111 ms. jsDelivr tardó unas seis veces más, y 21YunBox explica lo que cuestan sus peticiones más lentas.

> «Un p95 de 1757 ms frente a una mediana de 660 ms significa que una de cada veinte peticiones tarda casi dos segundos».
> Fuente: 21YunBox, A Chinese Cloud Probe Is Not a Chinese Visitor: The Same Hosts, Opposite Answers, 28 y 30 de agosto de 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

GreatFire coincide en que el servidor está abierto: no bloqueado, tres de tres pruebas concluyentes recientes, la última el 8 de octubre de 2026. Si se carga con async, esas peticiones lentas apenas penalizan. Pero si un archivo de jsDelivr se coloca antes de la primera visualización (el script de un plugin de carrusel en la cabecera, por ejemplo), las peticiones lentas retienen la página.

## cdnjs y unpkg se apoyan en datos más escasos

Con los dos últimos servidores, las pruebas escasean. Ambos figuran como abiertos, pero ninguno tiene una prueba publicada desde una línea doméstica, así que esa columna queda vacía para ellos.

> GreatFire considera no bloqueado https://cdnjs.cloudflare.com, con 1 de 1 pruebas concluyentes recientes conectadas con normalidad y la última el 27 de septiembre de 2026, y https://unpkg.com, no bloqueado, con 1 de 1 y la última el 14 de agosto de 2026.
> Fuente: GreatFire, últimas pruebas el 27 de septiembre y el 14 de agosto de 2026. https://en.greatfire.org/https/cdnjs.cloudflare.com y https://en.greatfire.org/https/unpkg.com

cdnjs tiene un dato más, procedente del censo: su sitio web completó las tres cargas desde la sonda de Zhangjiakou. unpkg solo tiene la prueba única de GreatFire.

Esa carencia importa. Una respuesta desde un centro de datos puede inducir a error, y la hoja de estilos de fuentes citada antes muestra hasta qué punto: 72 de 72 desde el centro de datos el 28 de agosto, y ninguna respuesta a ninguna de las 54 peticiones desde la línea doméstica de Pekín dos días después.

Ninguna de las dos fuentes ha publicado una prueba fechada del servidor de archivos de BootstrapCDN, que figura por ello como sin probar.

## Integrar las bibliotecas en su propio build

Elimine primero la etiqueta de Google Hosted Libraries. Sirva jQuery desde su propio origen o intégrelo en su build, y la petición que nunca vuelve desaparece. Anote la versión que ha copiado, porque la próxima actualización debe ser una decisión deliberada. En WordPress, la copia local ya existe: la versión 7.1.3 registra jQuery 3.7.1, la misma versión que el fragmento de Google, desde `wp-includes/js/jquery/`. Quite lo que fuerza la copia de Google y se cargará el archivo propio del núcleo. 21YunBox da el mismo consejo.

> El consejo del censo: «mida el servidor del que realmente depende, o integre la biblioteca en su propio build y la pregunta desaparece».
> Fuente: 21YunBox, 280 Sites Measured From Inside China, 28 y 29 de agosto de 2026. https://www.21cloudbox.com/websites-blocked-in-china.html

| Biblioteca cargada desde            | Qué hacer                                                                       | Por qué                               |
| ----------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------- |
| `ajax.googleapis.com`               | alojarla en su servidor o integrarla en el build ya                             | bloqueado y retiene el renderizado    |
| `cdn.jsdelivr.net`                  | integrar lo que necesita la primera visualización y cargar el resto con async  | responde, con algunas peticiones lentas |
| `cdnjs.cloudflare.com`, `unpkg.com` | integrar, o probar desde una línea doméstica antes de confiar en ellos          | sin datos desde una línea doméstica   |

Nuestra guía de [plugins de WordPress que fallan en China](/es/recursos/guia-web-china/plugins-wordpress-china/) explica cómo llegan estas etiquetas a un sitio. Para los servidores que no son CDN de bibliotecas, la guía sobre [lo que bloquea el Gran Cortafuegos](/es/recursos/guia-web-china/gran-cortafuegos-china/) recoge la tabla completa de dependencias. ¿No sabe a qué servidores de bibliotecas llaman sus páginas? El [China Site Scanner](/es/china-site-scanner/) los detecta. Del trabajo de build se ocupa nuestro servicio de [integración técnica](/es/servicios/integracion-tecnica/).

## Preguntas frecuentes sobre los CDN en China

**¿Está bloqueado cdnjs en China?**

Ninguna prueba fechada lo indica. GreatFire consideró no bloqueado `cdnjs.cloudflare.com` el 27 de septiembre de 2026, y el censo de 21YunBox cargó el sitio web de cdnjs 3 de 3 veces desde una sonda de Alibaba Cloud el 28 y 29 de agosto. Ni GreatFire ni 21YunBox han publicado una prueba de cdnjs desde una línea doméstica, así que se desconoce lo que ve un hogar de Pekín.

**¿Está bloqueado jsDelivr en China?**

No. En el estudio de 21YunBox completó 72 de 72 peticiones desde un centro de datos de Alibaba Cloud en Zhangjiakou el 28 de agosto de 2026, y 36 de 36 desde una línea doméstica de China Mobile en Pekín el 30 de agosto. Es lento, no obstante: una mediana de 660 ms y un percentil 95 de 1757 ms desde ese centro de datos.

**¿Funciona unpkg en China?**

GreatFire lo considera no bloqueado. Su única prueba concluyente reciente de `unpkg.com`, el 14 de agosto de 2026, se conectó con normalidad. Ni GreatFire ni 21YunBox publican actualmente una medición desde un centro de datos ni una prueba desde una línea doméstica. Trate unpkg como accesible pero sin medir, e integre en su build todo aquello de lo que dependa la primera visualización.

**¿Por qué jQuery servido por Google congela toda la página?**

Una etiqueta script sin async ni defer detiene el análisis de la página hasta que llega el archivo. GreatFire considera bloqueado `ajax.googleapis.com`, de modo que desde China continental el archivo nunca llega. La página espera hasta que se agota el plazo, y después falla cada script que depende de jQuery.

**¿Necesito un CDN chino para solucionarlo?**

En este caso, basta con integrar los archivos en el build, sin ningún CDN. Son archivos que alguien decidió descargar del servidor de otra empresa cada vez que se carga la página. Póngalos en su propio build y la petición desaparece. Desde dónde se sirve su sitio, y si tiene registro ICP (ICP备案), es otra cuestión, que afecta a sus propias páginas.
