---
title: "¿Está WordPress bloqueado en China?"
subtitle: "En un servidor continental el software no falla. Fallan las llamadas que lanza hacia fuera. Mediciones del 28 y el 30 de agosto de 2026."
summary: "WordPress no está bloqueado en China continental. Estado de las dependencias en 2026: cuáles caen, cuáles se arrastran y en cuáles se equivocan las guías."
visual: "/images/guides/is-wordpress-blocked-in-china.webp"
order: 34
published: true
publishedAt: 2026-08-29
updatedAt: 2026-09-11
category: Technology
---

No. WordPress no está bloqueado en China continental, y nunca lo ha estado.

El software se descarga, se instala y funciona con normalidad en un servidor de Shanghái o de Pekín. Ningún gestor de contenidos chino lo supera entre los sitios de empresas extranjeras registrados en el país, y el parque de instalaciones en lengua china supera holgadamente el millón.

Entonces, ¿por qué sobrevive el mito? Porque una instalación por defecto interroga a entre 8 y 20 servidores externos antes de que el visitante vea un solo píxel. Algunos de esos servidores están bloqueados, y basta con uno para dejar la página en suspenso. El sitio carga, técnicamente hablando. Lo que ocurre es que pierde tiempo en cada petición, y el equipo que lo administra desde Europa nunca llega a verlo.

Últimas mediciones: el 28 de agosto de 2026 desde una región de Alibaba Cloud; el 30 de agosto de 2026 desde una línea residencial de Pekín.

## Medido desde un centro de datos y desde una línea doméstica

Dos campañas de medición separadas por dos días, sobre la misma lista de servidores. La primera partió de una nube comercial alojada en China; la segunda, de la conexión doméstica de un particular en Pekín. Los resultados se contradicen, y la contradicción es justo lo que hay que leer.

| Servidor | Punto de medición | Resultado | Veredicto | Fecha de la prueba |
|---|---|---|---|---|
| fonts.googleapis.com | Alibaba Cloud (阿里云) cn-zhangjiakou | 72 de 72, mediana 111 ms, p95 137 ms | Accesible | 28 ago 2026 |
| fonts.googleapis.com | Línea doméstica de China Mobile (中国移动) en Pekín | 0 de 54 | Bloqueado | 30 ago 2026 |
| fonts.gstatic.com | Alibaba Cloud (阿里云) cn-zhangjiakou | 72 de 72, mediana 102 ms, p95 121 ms | Accesible | 28 ago 2026 |
| fonts.gstatic.com | Línea doméstica de China Mobile (中国移动) en Pekín | 0 de 6 | Bloqueado | 30 ago 2026 |
| www.googletagmanager.com | Alibaba Cloud (阿里云) cn-zhangjiakou | 72 de 72, mediana 118 ms, p95 143 ms | Accesible | 28 ago 2026 |
| www.googletagmanager.com | Línea doméstica de China Mobile (中国移动) en Pekín | 0 de 112 | Bloqueado | 30 ago 2026 |
| www.google.com/recaptcha | Alibaba Cloud (阿里云) cn-zhangjiakou | 0 de 72 | Bloqueado | 28 ago 2026 |
| www.google.com/recaptcha | Línea doméstica de China Mobile (中国移动) en Pekín | 0 de 18 | Bloqueado | 30 ago 2026 |
| cdn.jsdelivr.net | Alibaba Cloud (阿里云) cn-zhangjiakou | 72 de 72, mediana 660 ms, p95 1.757 ms | Lento | 28 ago 2026 |
| cdn.jsdelivr.net | Línea doméstica de China Mobile (中国移动) en Pekín | 36 de 36 | Accesible | 30 ago 2026 |

> El 28 de agosto de 2026, desde una instancia de Alibaba Cloud (阿里云) en cn-zhangjiakou, con muestreo cada diez minutos durante doce horas y un tiempo de espera de 30 segundos, fonts.googleapis.com respondió a 72 peticiones de 72, con un primer byte mediano de 111 ms. El 30 de agosto de 2026, desde una línea residencial de China Mobile (中国移动) en Pekín, en 264 cargas de página repartidas por 88 sitios reales, ese mismo servidor recibió 54 peticiones y no respondió a ninguna.
>
> Fuente: 21YunBox, *A Day of Third-Party Requests From Inside China*, 28 de agosto de 2026, actualizado el 30 de agosto de 2026

Lea juntas las dos filas de un mismo servidor: por separado, la cifra engaña. Una nube comercial china se paga un tránsito internacional que un piso de Chaoyang no tendrá nunca, de modo que la medición del centro de datos marca un techo y nada más. Su visitante se queda en algún punto por debajo. En tres de los cinco servidores de la tabla no recibe nada.

Cinco servidores de una lista bastante más larga. Las demás dependencias van en la tabla siguiente, con veredicto y sin tiempos.

## Lo que WordPress va a buscar fuera

Si instala WordPress en un servidor continental con un tema comercial y un conjunto corriente de plugins, se compromete sin darse cuenta a cargar archivos alojados en Google, en Automattic, en un CDN de JavaScript, en un CDN de tipografías y en cualquier otro proveedor que utilicen sus formularios y su herramienta de analítica.

Desde Fráncfort o Singapur, esas llamadas se resuelven en milisegundos y nadie repara en ellas. Desde Shanghái, en cambio, los resultados se reparten en tres grupos. Unos se resuelven sin incidencias. Otros tardan lo suficiente para hacer daño. Los últimos no vuelven nunca, y el navegador se queda esperando hasta que desiste.

> El comparativo de Chinafy de 2026 analizó 614 sitios repartidos en once sectores, con WebPageTest desde Pekín, Virginia y Londres. El 66,4 % no consiguió mostrarse correctamente desde Pekín. El tiempo de carga visual mediano alcanzó los 17,2 segundos, y el 44 % de las pruebas realizadas desde Pekín terminaron en tiempo de espera agotado.
>
> Chinafy, *State of Global Website Performance in China*, abril de 2026

Esas cifras describen a los sitios extranjeros en general, y WordPress resulta ser sencillamente aquello sobre lo que funciona la mayoría. El mismo patrón se repite en Webflow, en HubSpot y en los desarrollos artesanales con React, conviene recordarlo antes de que alguien proponga una migración como remedio.

## Qué está bloqueado realmente, comprobado en 2026

Las listas que circulan por la web anglosajona se redactaron en su mayoría entre 2019 y 2023, y desde entonces se copian unas a otras. Varias entradas han cambiado. Este es el cuadro actual, medido desde China continental.

| Dependencia | Estado desde China continental | Consecuencia |
|---|---|---|
| Google Hosted Libraries (ajax.googleapis.com) | Bloqueado por completo | El renderizado se detiene. No llega ningún byte |
| Google reCAPTCHA | Bloqueado por completo | Los formularios no se pueden enviar |
| Google Analytics | Bloqueado por completo | La petición no llega nunca y el dato se pierde |
| API JavaScript de Google Maps | Bloqueado por completo | La zona del mapa se queda vacía |
| Contenidos incrustados de YouTube y Vimeo | Bloqueado por completo | Fallan tanto el reproductor como la llamada oEmbed |
| Gravatar | Bloqueado | Ralentiza los comentarios y toda la administración |
| Google Fonts (fonts.googleapis.com, fonts.gstatic.com) | Depende de dónde se mida | Responde desde un centro de datos continental y enmudece en una línea doméstica de Pekín |
| Google Tag Manager | Depende de dónde se mida | El mismo corte que las tipografías. La baliza hacia google-analytics.com falla en los dos casos |
| wordpress.org y servidores de actualización | Accesible, con límite de peticiones | HTTP 429 en las actualizaciones del núcleo y de los plugins |
| cdnjs, unpkg | Accesible, lento | Ambos completan. Sin probar desde una línea residencial |
| cdn.jsdelivr.net | Accesible, lento | Mediana de 660 ms desde un centro de datos; completa en una línea doméstica |
| Scripts de Stripe y PayPal | Accesible | El obstáculo son las licencias, no el cortafuegos |

Para el panorama completo, más allá de WordPress, nuestra guía sobre [lo que bloquea el Gran Cortafuegos](/es/recursos/guia-web-china/gran-cortafuegos-china/) detalla el envenenamiento de DNS y el filtrado de paquetes que sostienen todo lo anterior.

## Una sola línea de código causa casi todo el daño

Si un tema carga jQuery desde Google Hosted Libraries, algo que siguen haciendo miles de temas comerciales, la página se detiene en seco.

Esa etiqueta bloquea el renderizado. El navegador se niega a pintar mientras no se resuelva, y desde China continental no se resuelve jamás. En sondeos repetidos desde una instancia de Alibaba Cloud en Zhangjiakou, las peticiones a ajax.googleapis.com no devolvieron un solo byte en ninguna de las tandas, hasta que abandonamos la prueba a los sesenta segundos.

El visitante ve una pantalla en blanco, espera cuatro o cinco segundos y se marcha. La analítica no registraría nada, suponiendo que la analítica funcionara. Es el motivo más habitual por el que un sitio extranjero acaba catalogado como bloqueado en China cuando no lo está en absoluto.

Corregir esa etiqueta concreta lleva efectivamente diez minutos: se incorpora jQuery en local, o se retira de la cola si el tema puede prescindir de él. Limpiar todas las dependencias externas de un sitio corporativo corriente exige más bien uno o dos días de desarrollo. Y si ha heredado un tema con constructor visual y noventa plugins, cuente con una semana y prepárese para eliminar más que para sustituir.

## La línea sobre Google Fonts que casi todas las guías siguen fallando

Esta merece sección propia, porque el saber recibido ha envejecido y buena parte de los argumentarios de agencia lo sigue repitiendo.

Sobre Google Fonts en China circulan dos frases: que está bloqueado y que no lo está. El mismo par de mediciones desmonta las dos. Con dos días de diferencia, el CDN de tipografías sirvió todas las peticiones desde un centro de datos continental y ni una sola desde una línea doméstica de Pekín.

> El 28 de agosto de 2026, desde una instancia de Alibaba Cloud (阿里云) en cn-zhangjiakou, fonts.googleapis.com respondió a 72 peticiones de 72, con un primer byte mediano de 111 ms, y fonts.gstatic.com a 72 de 72, con 102 ms. El 30 de agosto de 2026, desde una línea residencial de China Mobile (中国移动) en Pekín, fonts.googleapis.com recibió 54 peticiones y no respondió a ninguna, y fonts.gstatic.com recibió 6, sin una sola respuesta.
>
> Fuente: 21YunBox, *A Day of Third-Party Requests From Inside China*, 28 de agosto de 2026, actualizado el 30 de agosto de 2026

La formulación honesta es condicional. Google Fonts se resuelve desde los centros de datos continentales y a menudo enmudece en las conexiones residenciales. Lo que reciba su visitante depende de la red desde la que navegue.

Desconocemos el mecanismo. La sonda de la que salen estas cifras tampoco lo explica, y no lo vamos a inventar aquí. Lo que sí se mide es la forma: mismo servidor, dos días de diferencia, resultados opuestos según el lado de la red continental en el que uno se sitúe.

Ahí está el argumento a favor del alojamiento propio. Una tipografía que usted mismo sirve elimina una dependencia cuya respuesta varía con la red del visitante y le ahorra averiguar cuál le toca a quién.

fonts.google.com, la interfaz donde sus diseñadores eligen los tipos, no carga desde ninguno de los dos puntos de medición. Un problema de diseñadores, por tanto: sus visitantes no entran ahí jamás.

Nosotros alojamos las tipografías en local en todos los proyectos, en cualquier caso. En parte por el motivo anterior, y sobre todo porque supone una cosa menos que volver a comprobar.

## wordpress.org responde, pero con límite de peticiones

El repositorio de plugins, el de temas y los servidores de actualización del núcleo responden todos desde China continental. También devuelven un HTTP 429 a los rangos de direcciones continentales con la frecuencia suficiente para que un sitio pase semanas sin recibir un parche de seguridad.

Así ocurre desde octubre de 2019 como mínimo, y de ahí que haya crecido todo un ecosistema de réplicas domésticas. La pieza más visible es el proyecto WP-China-Yes, que redirige las llamadas de actualización y de instalación de plugins y temas hacia servidores espejo situados en el continente.

Un sitio dejado en su configuración de origen no le avisará de que ha dejado de actualizarse. Se va quedando atrás en silencio, lo que en WordPress es un asunto de seguridad más que una molestia. Alguien tiene que abrir la pantalla de actualizaciones y mirar.

## WordPress.com es otra pregunta con otra respuesta

WordPress autoalojado, el software que usted descarga de wordpress.org, no plantea ningún problema.

WordPress.com, el servicio alojado que gestiona Automattic, tampoco está bloqueado en bloque, por más que lo afirmen casi todas las guías. El dominio principal se resuelve con frecuencia. Lo que sí está bloqueado es buena parte de lo que vive por debajo, incluidas las propiedades en lengua china y un número considerable de blogs de usuarios.

Para una empresa, la distinción resulta teórica, porque detrás espera una restricción más dura. No se puede completar un registro ICP (备案) para un dominio cuyo alojamiento no controla, y sin ese registro no se puede servir legalmente desde un servidor continental. Un sitio en WordPress.com no puede adecuarse a la norma, cargue hoy o no cargue. Nuestra [guía del registro ICP](/es/recursos/guia-web-china/licencia-icp-empresas-extranjeras/) explica qué pide realmente el papeleo.

## Qué significa esto si está construyendo

La conclusión práctica carece de brillo. Cambiar de plataforma para huir de un problema que no ha diagnosticado resulta costoso y no lo resuelve, porque las dependencias viajan con usted.

Un sitio WordPress funciona en China cuando se cumplen cuatro condiciones:

- Las dependencias externas se han eliminado o sustituido
- El sitio se sirve desde el continente, o desde Hong Kong mientras el registro sigue en trámite
- El registro ICP está concedido, lo que lleva de tres a seis semanas y exige una entidad continental
- Las páginas están construidas para que Baiduspider las rastree, disciplina distinta de la que las hace rápidas

Nada de esto es exótico. Todo ello es trabajo que alguien tiene que sentarse a hacer, y un tema comprado en un mercado de plantillas no ha hecho ninguna parte. Si está sopesando una agencia que se ocupe de ello, escribimos una [pauta para examinarla a fondo](/es/recursos/guia-web-china/elegir-agencia-wordpress-china/).

## Las preguntas que nos hacen

**¿Puedo usar una VPN para comprobar si mi sitio funciona en China?**

No de forma útil. Una VPN desde el extranjero le sigue haciendo pasar por su propia red y su propio resolutor, de manera que está midiendo su VPN y no el cortafuegos. Mida desde un punto situado en el continente, o recurra a una herramienta que lo haga por usted. Es la razón más frecuente por la que un equipo cree que su sitio está en buen estado cuando no lo está.

**¿Un CDN global resuelve esto?**

Ayuda con la distancia y no cambia nada respecto a los servidores bloqueados. La red estándar de Cloudflare atiende a los visitantes continentales desde Hong Kong, Japón o la costa oeste estadounidense, así que la frontera se sigue cruzando en cada petición. Su red interior es un producto Enterprise operado junto con JD Cloud y requiere un registro ICP válido por dominio, con lo que volvemos al papeleo.

**¿Necesito un registro ICP o una licencia ICP?**

El registro (备案) cubre un sitio informativo y lleva de tres a seis semanas aproximadamente, una vez que existe una entidad continental. La licencia comercial (ICP许可证) se exige cuando el propio sitio genera ingresos, y en la práctica lleva de doce a dieciocho semanas.

**¿Es Astro mejor opción que WordPress para China?**

A veces. Una construcción estática elimina toda una categoría de dependencias en ejecución y carga más rápido detrás del cortafuegos. También suprime la experiencia de edición que espera un equipo de marketing, y esa contrapartida suele pesar más que los milisegundos. La respuesta honesta depende de quién actualiza el sitio y con qué frecuencia.

**¿En cuánto tiempo debería cargar un sitio desde Shanghái?**

Por debajo de dos segundos es alcanzable en alojamiento continental una vez limpias las dependencias. Una migración reciente pasó de 23,4 segundos en un origen europeo a 1,2 segundos, y cerca de la mitad de esa mejora vino de suprimir llamadas externas, no de mover el servidor. Nuestra guía sobre [alojar un sitio web en China](/es/recursos/guia-web-china/alojar-sitio-web-china/) trata la parte del origen.
