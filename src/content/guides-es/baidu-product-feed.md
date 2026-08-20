---
title: "Cómo construir un feed de producto para Baidu"
subtitle: "El encargo llega con aire de trámite. Meter el catálogo en Baidu Merchant Center. Y entonces busca el plugin y no existe. No hay extensión de WooCommerce para esto, ni gratuita ni de pago. La exportación es desarrollo a medida, escrito contra una especificación de 2019 que vive casi entera detrás de un acceso."
summary: "Cómo se estructura un feed de producto de Baidu, las cinco formas de cargarlo y las reglas de campo que rompen en silencio una exportación de WooCommerce o headless."
visual: "/images/guides/baidu-product-feed.webp"
order: 19
published: true
publishedAt: 2026-08-14
updatedAt: 2026-08-14
category: Search
---

Baidu Merchant Center (百度商品中心, Bǎidù Shāngpǐn Zhōngxīn) almacena registros de producto que los sistemas publicitarios de Baidu releen cuando los necesitan. Su feed es la entrada, de modo que un archivo defectuoso detiene todo lo que viene detrás.

> China contaba con 937 millones de compradores en línea en diciembre de 2025, el 83,2 % de sus 1.125 millones de internautas.
>
> *Fuente: China Internet Network Information Center, 57.º informe estadístico, 17 de marzo de 2026*

Ese es el mercado que está al otro lado del archivo, al que se llega mediante los anuncios de producto de pago que alimentan estos datos. La mayor parte del trabajo se va en problemas de los que nadie le avisó.

## Cuatro objetos, y la dotación más pequeña es la que duele

La estructura baja tres niveles. Un catálogo (目录, mùlù) contiene archivos de producto (商品文件, shāngpǐn wénjiàn), y un archivo contiene productos (商品, shāngpǐn), hasta un millón. A ese nadie se acerca.

Una cuenta nueva recibe tres catálogos, y esa cifra acaba condicionando el diseño. Un catálogo por marca más otro por idioma muere antes de que nadie escriba una línea de código.

El cuarto objeto no es almacenamiento en absoluto. Un grupo de productos (商品组, shāngpǐn zǔ) es un subconjunto filtrado al que apuntan las campañas y se comporta como un segmento guardado. Baidu aconseja mantener cualquier grupo por debajo de los 100.000 productos, y ese es el techo que sí se puede alcanzar. Un grupo definido como todo lo que hay en stock lo supera de inmediato en un catálogo grande. Elija sus campos de filtrado teniendo ese límite a la vista.

## Baidu documenta cinco vías de entrada y desaconseja una

La introducción en línea se hace por el formulario de la consola, que Baidu reserva a catálogos de menos de 100 productos. Si está leyendo esto, no es para usted.

La carga manual admite un archivo que produzca usted mismo: Excel hasta 10 MB, XML y CSV hasta 50 MB. Su CSV tiene que ir en UTF-8, algo que conviene comprobar dos veces en cualquier cadena que pase por Excel en Windows.

La sincronización programada de archivo es donde aterrizan la mayoría de las integraciones. Usted aloja el archivo, Baidu lo recoge y el techo salta a 8 GB, solo en XML y CSV a ese tamaño. Hay una condición que conviene poner pronto delante del equipo de infraestructura: los rangos de IP de Baidu tienen que estar en la lista blanca de su servidor. Eso es una incidencia de cortafuegos y no un cambio de código, la misma familia de problemas que impide a Baiduspider verificar un sitio detrás de un WAF agresivo, y puede sobrevivir al propio desarrollo.

La cuarta es la integración por API, donde la respuesta honesta es escasa: Baidu nombra la vía, pero ningún material público recoge el detalle operativo. Delimítela con quien gestione su cuenta publicitaria.

La quinta es el rastreo a medida, en el que Baidu recoge por su cuenta sus páginas de producto. Baidu no la recomienda, lo que le indica cuánto soporte va a recibir esa vía.

La frecuencia de sincronización llega como un menú: cada 15 minutos, cada hora hasta cada 12 horas, diaria o semanal. El cuarto de hora existe y rara vez es lo adecuado, porque un feed regenerado cada quince minutos en una tienda en producción publica todos sus errores temporales de datos.

## No puede dimensionar el mapeo mientras no pueda leer el diccionario

Baidu proporciona 11 plantillas de datos sectoriales. Cada una espera un conjunto de campos distinto, y elegir mal obliga a remapear más adelante. El diccionario completo vive detrás de un acceso, en una cuenta publicitaria con el permiso de Merchant Center activado. Hasta que alguien con ese acceso exporte la plantilla de su sector, cualquier mapeo que escriba es una conjetura. Los equipos que dimensionan a partir de un resumen en inglés lo rehacen después.

## Las reglas de campo que rompen integraciones reales

Poco de lo que sale mal aquí es exótico. Simplemente falla en silencio.

La clave única es outerid y tiene que ser única dentro del catálogo. Los duplicados no lanzan ningún error. La carga posterior no se importa, y la fila que usted creía haber actualizado conserva sus valores antiguos. Cuando los recuentos de importación no cuadran con los de exportación, empiece por ahí.

Las URL vienen con tres reglas, todas absolutas. El campo de página de destino es loc y tiene que llevar el protocolo, de modo que un dominio desnudo falla. Ninguna URL puede contener caracteres chinos, ni en la ruta ni en una cadena de consulta, lo que descalifica a toda una categoría de tiendas localizadas hasta que alguien reescriba los enlaces permanentes. Y el dominio del feed tiene que coincidir con el dominio registrado en la cuenta publicitaria, así que un host de preproducción olvidado no pasará, ni tampoco el subdominio regional que muchas marcas internacionales usan para China. Compruebe contra qué dominio se abrió la cuenta publicitaria antes de que nadie mapee una URL.

La siguiente regla parece insignificante. Los campos opcionales pueden dejarse vacíos o eliminarse del archivo, pero nunca deben rellenarse con un cero. A los exportadores les encanta el cero. Es el valor de reserva por defecto de bastantes bibliotecas de serialización, y convierte un campo vacío en un valor que Baidu lee como real.

Las imágenes tienen un suelo de 480 por 320 píxeles para la grande. La imagen principal va en el campo image y las adicionales en campos moreimage, y el formato creativo de tres imágenes pide al menos tres por producto. Un catálogo que envía una sola foto por referencia se ha cerrado sus propios formatos publicitarios. El filtrado funciona sobre CustomLabel1 a CustomLabel5, con campos personalizados más allá de esos. Rellene las etiquetas antes de la primera carga, ya que los grupos de productos se construyen sobre ellas.

## Dos valores por defecto de WooCommerce que Baidu rechaza

Los enlaces permanentes primero. Una tienda con localización china construye sus slugs a partir del título del producto en chino, lo que coloca caracteres chinos en todas las URL de producto por defecto. Frente a la regla de URL de Baidu eso no es un fallo parcial. Son todas las filas del archivo. La solución pasa por un esquema de enlaces permanentes que produzca slugs ASCII, aplicado antes de generar el feed, lo que en una tienda establecida implica además un mapa de redirecciones.

Las variaciones son el segundo caso. Con frecuencia heredan o comparten el SKU del producto padre. Mapee el SKU directamente sobre outerid y colisionarán y, como los duplicados fallan en silencio, obtendrá una carga con éxito que contiene una fracción de lo que envió. Construya en su lugar una clave compuesta, padre más variación, estable entre exportaciones.

Las arquitecturas headless esquivan la trampa de los enlaces permanentes y se topan con todo lo demás sin cambios, porque ni la regla de dominio ni la del valor cero se preocupan por qué generó la página.

## Qué decide realmente el calendario

Dos elementos funcionan aquí con el reloj de otra persona, y ninguno de los dos es código. El permiso de cuenta tiene que activarse antes de que nadie vea la plantilla de su sector, y la lista blanca de IP tiene que resolverse antes de que una sincronización programada recoja nada. Ponga los dos en marcha la primera semana.

El código se puede validar sin esperar a ninguno de ellos. Suba a mano unos cientos de productos en CSV y lea lo que le devuelven.

La documentación de Merchant Center de Baidu data de 2019, así que verifique cada nombre de campo contra la plantilla que exporte su propia cuenta.
