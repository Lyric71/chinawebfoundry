---
title: "Google Fonts en China: depende de la red"
subtitle: "La respuesta cambia según la red desde la que se mide, y por eso los veredictos tajantes sobre Google Fonts se contradicen entre sí."
summary: "111 ms desde un centro de datos en China continental y ninguna respuesta de 54 desde una línea doméstica de Pekín, según 21YunBox. Las dos cifras son ciertas."
visual: "/images/guides/google-fonts-china.webp"
order: 38
published: true
publishedAt: "2026-10-06"
updatedAt: "2026-10-06"
reviewBy: "2026-11-26"
category: "Technology"
author: "echo-peng"
---

Que Google Fonts funcione o no en China depende de la red desde la que se le pregunte. El 28 de agosto de 2026, una sonda instalada en un servidor de Alibaba Cloud (阿里云) en Zhangjiakou obtuvo 72 respuestas de 72 de `fonts.googleapis.com`, con una mediana de 111 ms. El 30 de agosto, una línea doméstica de China Mobile (中国移动) en Pekín no obtuvo ninguna de 54. Las dos pruebas son de 21YunBox y ninguno de los dos resultados es casual. Sus visitantes navegan desde la fibra de casa o desde los datos del móvil, de modo que la cifra que debe orientar sus decisiones es la segunda: una página que espera a un servidor de fuentes que nunca contesta puede quedarse en blanco.

Si sirve las fuentes desde su propio dominio, la cuestión desaparece. Todas las cifras que siguen se comprobaron en su fuente el 6 de octubre de 2026.

## Google Fonts en China, visto desde dos redes

21YunBox ejecutó el mismo código de medición desde los dos puntos y publicó los resultados uno junto al otro. Google Fonts llega a una página a través de dos nombres de servidor: `fonts.googleapis.com` envía la hoja de estilos, y los archivos de fuente a los que esta remite salen de `fonts.gstatic.com`.

| Servidor               | Alibaba Cloud (阿里云), Zhangjiakou | Línea doméstica de China Mobile (中国移动), Pekín | Peticiones completadas | Veredicto                  | Fecha de la prueba         |
| ---------------------- | ----------------------------------- | ------------------------------------------------ | ---------------------- | -------------------------- | -------------------------- |
| `fonts.googleapis.com` | mediana de TTFB de 111 ms           | sin respuesta                                    | 72 de 72 / 0 de 54     | depende del punto de medición | 28 y 30 de agosto de 2026 |
| `fonts.gstatic.com`    | mediana de TTFB de 102 ms           | sin respuesta                                    | 72 de 72 / 0 de 6      | depende del punto de medición | 28 y 30 de agosto de 2026 |

> Desde una instancia de Alibaba Cloud (阿里云) en cn-zhangjiakou, con una muestra cada diez minutos durante doce horas el 28 de agosto de 2026 y un tiempo de espera de 30 segundos, `fonts.googleapis.com` completó 72 de 72 peticiones con una mediana de 111 ms hasta el primer byte, y `fonts.gstatic.com`, 72 de 72 con 102 ms. A lo largo de 264 cargas de página de 88 sitios reales, realizadas desde una línea residencial de China Mobile (中国移动) en Pekín el 30 de agosto de 2026, `fonts.googleapis.com` recibió 54 peticiones y no respondió a ninguna, y `fonts.gstatic.com` recibió 6, también sin respuesta.
> Fuente: 21YunBox, A Day of Third-Party Requests From Inside China, agosto de 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

Conviene no mezclar esas dos columnas, porque cada una describe una red distinta.

> «Una línea de centro de datos y una línea de consumo, dentro del mismo país, no son la misma red».
> Fuente: 21YunBox, A Day of Third-Party Requests From Inside China, agosto de 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

21YunBox no explica por qué la línea doméstica nunca obtuvo respuesta, y tampoco lo hace ninguna otra prueba publicada, así que no vamos a especular. Lo que sí dejan claro las cifras es la forma del problema: un mismo servidor, dos redes, dos días de diferencia y resultados opuestos.

## Los veredictos de GreatFire, servidor por servidor

GreatFire, que vigila la censura en China, prueba nombres de servidor desde el continente y fecha cada uno de sus veredictos. Para los dos servidores que entregan las fuentes, su respuesta coincide con la columna del centro de datos. Si se cita ese veredicto en solitario, se obtiene la respuesta tajante de que «no está bloqueado», que la línea doméstica desmiente.

| Servidor               | Función                                         | Veredicto de GreatFire | Pruebas concluyentes, últimos 90 días | Última prueba |
| ---------------------- | ----------------------------------------------- | ---------------------- | ------------------------------------- | ------------- |
| `fonts.googleapis.com` | sirve el CSS                                    | no bloqueado           | 0 de 3 con interferencias             | 7 sep 2026    |
| `fonts.gstatic.com`    | sirve los archivos de fuente                    | no bloqueado           | 0 de 4 con interferencias             | 21 sep 2026   |
| `fonts.google.com`     | el catálogo que consultan los diseñadores       | interferido al 100 %   | 2 de 2 con interferencias             | 30 sep 2026   |

> GreatFire consideró https://fonts.googleapis.com no bloqueado, con 0 de 3 pruebas concluyentes interferidas y la última el 7 de septiembre de 2026, y https://fonts.gstatic.com no bloqueado, con 0 de 4 y la última el 21 de septiembre de 2026. Consideró https://fonts.google.com interferido al 100 %, con 2 de 2 pruebas concluyentes y la última el 30 de septiembre de 2026, y registra interferencias desde el 15 de octubre de 2016.
> Fuente: GreatFire, septiembre de 2026. https://en.greatfire.org/https/fonts.googleapis.com, https://en.greatfire.org/https/fonts.gstatic.com y https://en.greatfire.org/https/fonts.google.com

La tercera fila es otra cosa. `fonts.google.com` es el catálogo que consultan sus diseñadores, y ninguna página que usted publique lo carga.

## Por qué una hoja de estilos atascada deja la página en blanco

La forma habitual de incrustar Google Fonts es un enlace a una hoja de estilos en la cabecera de la página, y esa posición determina lo que ocurre cuando falla.

> Un enlace a una hoja de estilos en la cabecera de una página bloquea por defecto el renderizado desde el momento en que el navegador lo encuentra al analizar la página.
> Fuente: MDN Web Docs, The External Resource Link element, última modificación el 20 de mayo de 2026. https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/link

Una petición que nunca recibe respuesta retiene, por tanto, el renderizado hasta que el navegador se da por vencido. El visitante de Pekín se queda mirando una pantalla en blanco. Desde una oficina en Fráncfort, y también desde una sonda de monitorización en un centro de datos del continente, la misma página se ve perfectamente.

El parámetro `display=swap` de la URL de incrustación no sirve de nada en este caso, porque esa instrucción viaja dentro de la hoja de estilos que nunca llegó.

## Alojar las fuentes saca a la red de la ecuación

Las fuentes de la colección de Google se publican con licencias abiertas, y esas licencias permiten copiar los archivos en su propio servidor.

> «Como todas las fuentes disponibles aquí tienen licencias que permiten redistribuirlas, con sujeción a sus términos, puede alojarlas usted mismo con distintos proyectos de terceros». La mayoría usa la SIL Open Font License 1.1, algunas la licencia Apache 2 y la familia Ubuntu la Ubuntu Font License 1.0.
> Fuente: README del repositorio de Google Fonts, google/fonts en GitHub, última modificación el 8 de marzo de 2024. https://github.com/google/fonts

Son cuatro pasos y ninguno es difícil:

1. Descargue los archivos woff2 de los pesos que de verdad utiliza (lo normal son dos o tres).
2. Colóquelos en su propio dominio, junto a su CSS, y escriba usted mismo las reglas `@font-face`.
3. Elimine el enlace a la hoja de estilos de Google y cualquier indicación `preconnect` que apunte a `fonts.googleapis.com` o `fonts.gstatic.com`.
4. Después, recargue la página con el panel de red abierto. Ninguna petición debería salir hacia un servidor de Google.

No se salte el paso 3.

> Preconnect inicia «una parte o la totalidad del protocolo de enlace (DNS+TCP para HTTP y DNS+TCP+TLS para los orígenes HTTPS)» con un origen antes de que se le pida ningún archivo.
> Fuente: MDN Web Docs, rel=preconnect, última modificación el 22 de abril de 2026. https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/rel/preconnect

Una indicación que se queda olvidada sigue dirigiendo el navegador de cada visitante hacia el servidor que usted acaba de retirar. Los temas y los maquetadores visuales, además, vuelven a añadir el enlace de Google por su cuenta. Nuestra guía sobre [los plugins de WordPress que fallan en China](/es/recursos/guia-web-china/plugins-wordpress-china/) explica de dónde sale ese enlace en un sitio WordPress.

ChinaWebFoundry sirve así sus propias tipografías: cinco archivos woff2, tres pesos de Poppins y dos de Inter, en el mismo servidor que las páginas. Las fuentes llegan por la misma ruta que el HTML.

Las fuentes suelen ser solo una de las varias peticiones al extranjero que hace una página. Localizar y sustituir las demás es trabajo de [integración técnica](/es/servicios/integracion-tecnica/). Empiece por [la lista de lo que bloquea el Gran Cortafuegos](/es/recursos/guia-web-china/gran-cortafuegos-china/).

## Preguntas frecuentes

**¿Está bloqueado Google Fonts en China?**

Depende de la red. En las pruebas de 21YunBox de agosto de 2026, los dos servidores que entregan las fuentes respondieron a todas las peticiones desde un centro de datos de Alibaba Cloud (阿里云) y a ninguna desde una línea doméstica de China Mobile (中国移动) en Pekín. GreatFire consideró ambos no bloqueados en septiembre de 2026. Una respuesta de una sola palabra desecha la mitad de esas pruebas, así que conviene tratar la versión alojada por Google como poco fiable y servir usted mismo los archivos.

**¿Funciona fonts.google.com en China?**

GreatFire registró interferencias en sus dos últimas pruebas concluyentes de `fonts.google.com`, la más reciente el 30 de septiembre de 2026, y las viene documentando desde 2016. Es el catálogo en el que los diseñadores eligen tipografías, de modo que resulta una molestia para un diseñador que trabaje desde Shanghái y pasa inadvertido para sus visitantes.

**¿Existen espejos chinos de Google Fonts?**

Entre los desarrolladores en China circulan varios espejos de la API de Google Fonts. No hemos encontrado ninguna prueba fechada de un tercero sobre ninguno de ellos, así que esta página no nombra ninguno ni emite veredicto. Un espejo, además, coloca la disponibilidad de otra empresa entre sus visitantes y sus fuentes, algo que el alojamiento propio evita.

**¿Y Adobe Fonts o Font Awesome?**

Ambos figuran en nuestra lista de servicios sin probar. Los últimos veredictos de terceros sobre ellos tienen más de 90 días, de modo que no damos veredicto en ningún sentido. El mismo razonamiento vale para cualquier fuente cuya licencia permita alojar los archivos. Si la licencia no lo permite, busque una prueba fechada de un tercero sobre la versión alojada antes de confiar en ella.

**¿Cómo compruebo si mi sitio llama a Google Fonts?**

Busque `fonts.googleapis.com` y `fonts.gstatic.com` en el código fuente de la página y en sus hojas de estilos, incluidas las reglas `@import` de CSS. O pase el sitio por el [China Site Scanner](/es/china-site-scanner/), que enumera los servidores de terceros a los que llaman sus páginas.
