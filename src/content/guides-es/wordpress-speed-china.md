---
title: "Por qué su sitio WordPress es lento en China"
subtitle: "Las causas reales de la lentitud tras el Gran Cortafuegos, jerarquizadas por lo que cuestan, y una migración medida antes y después."
summary: "Cuatro causas, jerarquizadas por lo que cuestan. Una migración medida de 23,4 a 1,2 segundos y lo que una capa de distribución resuelve de verdad."
visual: "/images/guides/wordpress-speed-china.webp"
order: 36
published: true
publishedAt: 2026-09-22
updatedAt: 2026-09-22
category: Technology
author: cyril-drouin
---

Cuatro motivos explican que un sitio WordPress vaya lento en China, y no todos cuestan lo mismo. Un servidor que nunca responde retiene la página entera. La distancia que separa al visitante de su servidor añade cerca de un segundo a cada petición. El número de servidores a los que llama la página multiplica ese retraso. El peso de los archivos llega en último lugar y, sin embargo, suele ser lo primero que se toca.

Jerarquícelas antes de gastar un solo euro en ninguna de ellas.

| Puesto | Causa | Lo que cuesta | Lo que lo resuelve |
|---|---|---|---|
| 1 | Un servidor que nunca responde | La página, o todo lo que dependa de ella | Eliminar la llamada, o alojar el archivo en su servidor |
| 2 | La distancia hasta su origen | Cerca de un segundo en el primer byte | Un origen continental, o distribución dentro del país |
| 3 | El número de servidores a los que llama | Una resolución y un saludo TCP por cada uno | Menos orígenes, con los archivos servidos desde el suyo |
| 4 | El peso de lo que envía | Tiempo, en proporción a los bytes | Trabajo ordinario de rendimiento web |

La mayoría de los equipos ataca la fila 4, que es de lo que hablan sus herramientas. Los segundos, en cambio, se acumulan en las filas 1 a 3.

Las mediciones que siguen proceden de una región de Alibaba Cloud el 28 de agosto de 2026 y de una línea doméstica de Pekín el 30 de agosto de 2026. Cada una indica dónde se tomó y en qué fecha.

## Qué significa lento visto desde Shanghái

La prueba pública más amplia sobre sitios extranjeros cargados desde China la firma Chinafy, que además vende una solución al problema, así que conviene ponderarla en consecuencia. Su método, al menos, está publicado, algo que pocos actores del sector se molestan en hacer.

> Se probaron 614 sitios de todo el mundo, repartidos en 11 sectores, con WebPageTest by Catchpoint desde Pekín, Virginia y Londres, en Chrome y sobre una conexión por cable. El 66,4 % de ellos no consiguió cargarse desde Pekín, el tiempo mediano hasta la visualización completa fue de 17,2 segundos y el 44 % de las pruebas lanzadas desde Pekín expiró. El tiempo hasta el primer byte desde Pekín fue de 1,4 segundos, frente a 0,35 segundos desde Virginia y 0,31 segundos desde Londres.
> Fuente: Chinafy, State of Global Website Performance in China, abril de 2026. https://insights.chinafy.com/

Que fallen dos de cada tres sitios es la cifra que todo el mundo repite. La que merece una pausa son los 1,4 segundos, consumidos antes de que el navegador analice su plantilla y antes de que solicite una sola imagen.

## Las cuatro causas de la lentitud de un sitio WordPress en China

### Uno: un servidor que nunca responde

Causa binaria, y la más cara de las cuatro. Una petición rechazada falla deprisa. Una petición descartada en silencio, en cambio, se queda esperando hasta que el navegador desiste, y eso puede tardar un minuto. El caso de manual en WordPress sigue siendo jQuery cargado desde Google Hosted Libraries, algo que todavía hacen miles de plantillas comerciales.

> GreatFire clasifica ajax.googleapis.com como bloqueado: su última prueba concluyente desde China continental falló, el 22 de agosto de 2026.
> Fuente: GreatFire. https://en.greatfire.org/https/ajax.googleapis.com

Todo esto sería llevadero si la etiqueta se cargara de forma diferida.

> Los scripts sin async, sin defer y sin tipo de módulo «se descargan y se ejecutan de inmediato, antes de que el navegador continúe analizando la página».
> Fuente: MDN Web Docs, el elemento script, última modificación el 9 de mayo de 2026. https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script

La página se detiene, por tanto, en la línea donde su plantilla le pide jQuery a Google. [Nuestra guía sobre los plugins que fallan en China](/es/recursos/guia-web-china/plugins-wordpress-china/) repasa el resto de la lista.

### Dos: la distancia hasta su origen

Su servidor está en Fráncfort. Cada petición que sale de Chengdú cruza Eurasia dos veces antes de que vuelva un solo byte, y repite el trayecto con el siguiente recurso. Ahí se acumulan los 1,4 segundos citados más arriba. Un origen continental suprime esa distancia y arrastra papeleo consigo, y de eso se ocupa la última sección.

> A lo largo de una ventana de 90 días, un sitio de cliente alojado en el continente registró un 99,98 % de disponibilidad, con tiempos de respuesta medianos de 48 ms desde Pekín, 36 ms desde Shanghái y 61 ms desde Cantón.
> Fuente: ChinaWebFoundry, publicado el 29 de agosto de 2026. https://www.chinawebfoundry.com/website-in-china/

Estas cifras son nuestras. Ni el operador ni la ventana exacta están publicados todavía; se incorporarán a nuestros casos de estudio este otoño. Una cifra entregada sin sus condiciones merece desconfianza, también cuando somos nosotros quienes la publicamos.

### Tres: el número de servidores a los que llama

Cada servidor adicional se paga, y no precisamente barato, cuando un viaje de ida y vuelta cuesta lo que cuesta desde China.

> «La conexión es el tiempo que tarda en completarse un saludo TCP. Igual que ocurre con el DNS, cuantas más conexiones de servidor se necesiten, más tiempo se invierte en crearlas.»
> Fuente: MDN Web Docs, Understanding latency, última modificación el 25 de febrero de 2025. https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/Understanding_latency

Una instalación de WordPress con un constructor de páginas, un plugin de formularios, una etiqueta de analítica y una fuente web llama a entre ocho y veinte servidores antes de que el visitante vea nada. Un estudio instrumentó navegación real desde una línea doméstica de Pekín, registró 97 servidores de terceros distintos y dos días antes había sondeado una región de nube situada en China. El estudio solo prueba cinco servidores de forma directa. Los tres que siguen sostienen el argumento, y los dos puntos de medición se contradicen en dos de ellos.

| Servidor | Alibaba Cloud (阿里云) cn-zhangjiakou, 28 ago. 2026 | Línea doméstica de China Mobile (中国移动), Pekín, 30 ago. 2026 |
|---|---|---|
| fonts.googleapis.com | Accesible. 72 de 72, mediana de 111 ms | Bloqueado. 0 de 54 |
| www.googletagmanager.com | Accesible. 72 de 72, mediana de 118 ms | Bloqueado. 0 de 112 |
| cdn.jsdelivr.net | Accesible. 72 de 72, mediana de 660 ms | Accesible. 36 de 36 |

> La columna del centro de datos se muestreó cada diez minutos durante 12 horas, con un tiempo de espera de 30 segundos, lo que da 72 mediciones por servidor. La columna doméstica abarca 88 sitios y 264 cargas de página a lo largo de una noche.
> Fuente: 21YunBox, A Day of Third-Party Requests From Inside China, 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

Google Fonts respondió en todos los intentos desde el centro de datos y en ninguno desde la línea doméstica. Los dos resultados son reales, y sus visitantes están en el segundo. Aloje la fuente en su servidor y esa variable desaparece. jsDelivr, en cambio, completa desde ambos lados, y de ahí el error de tratar las redes de distribución como un bloque homogéneo.

### Cuatro: el peso de lo que envía

El tiempo de transferencia crece con el número de bytes, y una conexión móvil china es una tubería más estrecha que aquella en la que su diseñador hizo las pruebas. La página de MDN citada más arriba lo dice sin rodeos: cuantas más peticiones haya y más pesen, más castiga la latencia a quien está esperando. Comprima las imágenes, por tanto, y elimine el carrusel. Ese trabajo compensa, hasta el momento exacto en que la página descansa sobre un servidor que nunca responde.

## Una migración: de 23,4 segundos a 1,2

Una de nuestras migraciones trasladó un sitio WordPress de un origen europeo a uno continental y, de paso, hizo limpieza de sus llamadas externas.

> El tiempo mediano de carga pasó de 23,4 segundos en un origen europeo a 1,2 segundos en un origen continental, y cerca de la mitad de esa mejora procede de eliminar llamadas externas, no del traslado del servidor.
> Fuente: ChinaWebFoundry, publicado el 29 de agosto de 2026. https://www.chinawebfoundry.com/resources/china-web-guide/is-wordpress-blocked-in-china/

Lea dos veces la segunda parte de la frase, porque es la que decide su presupuesto. La mitad de la ganancia salió gratis: eliminar una llamada a Google Fonts y alojar dos archivos woff2 cuesta una tarde. La otra mitad exigía mover el servidor, y eso implicaba un registro ICP (ICP备案) y una entidad continental detrás. El desglose paso a paso corresponde a un caso de estudio, ya en redacción.

## Qué resuelve una capa de distribución y qué deja fuera

Esta categoría de producto existe de verdad y funciona. Chinafy es el proveedor más conocido, y la descripción que publica no deja lugar a dudas: una copia de su sitio específica para China, los recursos que fallan sustituidos o retirados, esa copia servida por redes de distribución próximas a China y un enrutado geográfico que solo dirige hacia ella a los visitantes chinos.

> «Las peticiones dinámicas (por ejemplo, las transacciones) regresan también al origen de su sitio original, para garantizar que los visitantes en China reciben información en tiempo real.»
> Fuente: documentación de producto de Chinafy. La página no lleva fecha de publicación, de modo que este es el mecanismo tal y como se leyó el 18 de septiembre de 2026. https://www.chinafy.com/how-chinafy-works

Pase esa oferta por el filtro de las cuatro filas. La fila 1 es el producto en sí, de modo que desaparece por completo. La fila 4 se atiende en el borde de la red, y con ella buena parte de la fila 3, porque la capa acaba sirviendo esos archivos por su cuenta. La fila 2, en cambio, solo retrocede a la mitad, porque las peticiones dinámicas siguen cruzando la frontera.

Tres filas y media, sin registro ICP ni entidad china, porque nada reside en un servidor continental. Para un sitio corporativo, un micrositio de campaña o un equipo que necesita atender a sus visitantes chinos el trimestre que viene en lugar del año que viene, esa es la compra correcta, y así lo decimos.

Queda fuera la ruta dinámica. El pago, el inicio de sesión, la búsqueda y un carrito de WooCommerce con sesión abierta siguen viajando hasta su origen, esté donde esté, y arrastran consigo el coste del primer byte.

## Qué resuelve únicamente un origen continental

El tiempo de respuesta dinámico, y solo por estar dentro del país. Antes hay un cerrojo.

> Un dominio apuntado a un servidor en una región continental permanece inaccesible para los visitantes mientras su registro ICP (ICP备案) no esté aprobado. Los visitantes ven una página de espera, de modo que no cabe ningún lanzamiento discreto.
> Fuente: comunidad de desarrolladores de Alibaba Cloud (阿里云), 20 de marzo de 2022, comportamiento reconfirmado el 18 de septiembre de 2026. https://developer.aliyun.com/article/877910

Calcule entre tres y seis semanas, siempre que ya exista una entidad continental. [Nuestra guía sobre el alojamiento de WordPress en China](/es/recursos/guia-web-china/alojamiento-wordpress-china/) detalla ante qué nube doméstica presentar el expediente. La vía de la red de distribución implantada en el país tropieza con el mismo cerrojo, algo que sorprende a quien da por hecho que una red de distribución ahorra el papeleo.

> La Cloudflare China Network «está disponible como suscripción independiente para clientes de un plan Enterprise», y «debe disponer de un registro o una licencia ICP (Internet Content Provider) válida para cada dominio raíz que desee incorporar».
> Fuente: documentación para desarrolladores de Cloudflare, actualizada el 30 de abril de 2026. https://developers.cloudflare.com/china-network/

> «JD Cloud, nuestro socio, está obligado a revisar y validar el contenido de todos los dominios de su red antes de que China Network se active.»
> Fuente: documentación para desarrolladores de Cloudflare, actualizada el 17 de abril de 2026. https://developers.cloudflare.com/china-network/get-started/

En los planes gratuito y estándar de Cloudflare, los visitantes continentales se atienden desde el nodo más cercano fuera del país, por lo general Hong Kong, Japón o la costa oeste de Estados Unidos. Más cerca. Y aun así, al otro lado de la frontera.

## Cómo medirlo con honestidad

No haga pruebas a través de una VPN. Una VPN mide su túnel, y el túnel es la única condición de red que ninguno de sus visitantes tiene.

Nombre siempre el punto de medición. Una región de nube en China y una línea doméstica de esa misma ciudad devuelven veredictos opuestos sobre el mismo servidor, y solo uno de los dos corresponde a su cliente. Use cada uno para lo que sirve: la línea doméstica indica si algo ocurre, y el centro de datos indica a qué velocidad podría ocurrir. Y ponga fecha al resultado, porque una medición de marzo informa sobre marzo.

WebPageTest dispone de un nodo en Pekín. Las herramientas para desarrolladores de Chrome, en una máquina situada en China y ordenadas por dominio, dan la lista de servidores en apenas un minuto. Si no hay nadie sobre el terreno, [nuestro China Site Scanner gratuito](/es/china-site-scanner/) comprueba las dependencias de una URL desde donde usted esté. Contraste después el resultado con las cuatro filas: los segundos de la fila 1 valen una tarde de trabajo, los de la fila 2 valen un expediente administrativo, y [nuestra página WordPress en China](/es/wordpress-en-china/) expone qué camino conviene a cada sitio.

## Las preguntas que nos hacen

### ¿Por qué mi sitio WordPress va lento en China y bien en el resto del mundo?

Porque las piezas que fallan son piezas que nadie solicita fuera de China. Un servidor de fuentes bloqueado, una etiqueta de analítica que no responde, una etiqueta de script que detiene el análisis. Desde Europa contestan en milisegundos. Desde una línea doméstica china pueden quedarse esperando hasta que el navegador se rinde.

### ¿Un plugin de caché hará mi sitio más rápido en China?

Actúa sobre la fila 4 y no cambia nada en las filas 1 a 3. La caché acorta el tiempo que su servidor dedica a construir una página. No acorta la distancia hasta ese servidor ni impide que su plantilla llame a un servidor que nunca responde.

### ¿Basta con un servidor en Hong Kong?

Mejor que Fráncfort, peor que Shanghái, y sin registro ICP (ICP备案), que es justamente por lo que se recurre a él. El tráfico continental sigue cruzando la frontera y sigue siendo inspeccionado, así que la mejora en el primer byte es real y parcial. Trátelo como un paso intermedio.

### ¿Qué implica realmente arreglar esto?

Son dos proyectos distintos, y conviene saber cuál está comprando. Limpiar las llamadas externas es trabajo de desarrollo que se mide en días y no necesita permiso de nadie. Llevar el origen al continente exige una entidad china, un registro ICP (ICP备案) y semanas de espera. Acométalos en ese orden.

### ¿En cuánto tiempo debería cargar un sitio WordPress desde China continental?

Bajar de dos segundos es alcanzable en un origen continental, una vez limpias las llamadas externas. Entre dos y cinco segundos, el origen suele ser correcto y las dependencias no. Por encima de diez segundos, algo se ha quedado colgado en lugar de ir despacio.
