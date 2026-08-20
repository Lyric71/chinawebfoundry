---
title: "Baidu Merchant Center: qué hace realmente BMC"
subtitle: "A alguien de su equipo le han contado que Baidu Merchant Center es la vía por la que los datos de producto entran en Baidu. Es aproximadamente cierto, y en esa aproximación es donde se tuerce la planificación. Qué cuenta posee la herramienta, qué pueden hacer los datos una vez cargados y si alguien en Baidu sigue manteniendo el producto son tres preguntas distintas cuyas respuestas la mayoría de los equipos adivina mal."
summary: "Baidu Merchant Center es un feed de producto ligado a la cuenta publicitaria, no una herramienta orgánica. Qué hace BMC, dónde vive la consola y quién lo mantiene todavía."
visual: "/images/guides/baidu-merchant-center.webp"
order: 20
published: true
publishedAt: 2026-08-14
updatedAt: 2026-08-14
category: Search
---

Baidu Merchant Center (百度商品中心, Bǎidù Shāngpǐn Zhōngxīn), BMC para abreviar, es un almacén de datos de producto. Usted carga en él un catálogo y los sistemas publicitarios de Baidu releen los registros cuando los necesitan.

La definición del propio Baidu dice lo siguiente.

> Baidu Merchant Center，简称BMC，作为百度服务商家存储结构化信息的管理系统，提供数据收录、存储、管理和输出应用的服务。
>
> Baidu Merchant Center, abreviado BMC, es un sistema de gestión para almacenar información estructurada en nombre de los comerciantes a los que Baidu presta servicio, con servicios de recopilación, almacenamiento, gestión y entrega de datos.
>
> *Fuente: Baidu Marketing Academy, página de producto*

Fíjese en lo que falta. Nada en esa frase toca los resultados de búsqueda ni la indexación de su web.

## Baidu archiva sus datos de producto junto a sus banners

La expresión 数据收录 se traduce cómodamente como recopilación de datos, y queda lo bastante cerca del término que Baidu usa para la indexación de búsqueda como para que los artículos en inglés lleven años confundiendo ambos conceptos. Una segunda descripción de Baidu es más directa sobre a quién sirve la herramienta: presenta BMC como un centro de datos que los anunciantes usan para gestionar los productos o servicios que promocionan.

El argumento definitivo está en una etiqueta de categoría. El material de estrategia de producto de Baidu clasifica el contenido de un catálogo de BMC bajo material de entrega (投放物料, tóufàng wùliào), el mismo cajón que guarda los textos publicitarios y las imágenes creativas. Etiquetas así no se escriben para los clientes. Deciden qué equipo posee una cosa y qué sistemas pueden leerla.

Un feed de BMC es inventario publicitario. No es un sitemap ni son datos estructurados para resultados orgánicos. Todos los lugares documentados en los que esos datos pueden aflorar son emplazamientos de pago, algo que [tratamos en un artículo propio](/es/recursos/guia-web-china/destinos-datos-productos-baidu/).

## La dirección de consola que aparece en casi todas las guías en inglés es un enlace roto

Importan dos nombres de host, y uno de ellos parece equivocado. La consola de catálogo funciona en shantou.baidu.com, bajo una ruta bmc, que suena a nombre de ciudad pero es correcta. El otro es product.baidu.com.

La dirección que circula por los artículos en inglés, baidu.com/bmc, devuelve un 404. No hay indicio de que llegara a funcionar nunca. Una guía que publica una URL de consola que nadie de su redacción ha abierto jamás se ensambló a partir de resúmenes ajenos, y el detalle a nivel de campos que viene más abajo merece la misma desconfianza.

## Pertenece a la cuenta publicitaria, no a la plataforma para webmasters

Este es el párrafo que ahorra una semana buscando en el sitio equivocado. BMC vive dentro del sistema de cuentas publicitarias de Baidu, el que hay detrás de Baidu Marketing (百度营销, Bǎidù Yíngxiāo) y de Baidu Promotion (百度推广, Bǎidù Tuīguǎng). No en la Baidu Search Resource Platform, y tampoco en Baidu Intelligent Cloud. Si sus desarrolladores llevan tiempo buscando una pestaña de comerciante en las herramientas para webmasters, nunca ha existido.

Tampoco hay formulario de alta. El acceso es un permiso que se activa sobre una cuenta publicitaria que usted ya tiene. Las cuentas clave lo reciben activado por defecto, y el resto lo solicita por correo al equipo de feeds de Baidu a través del gestor regional que lleve la cuenta. El requisito real es, por tanto, una cuenta publicitaria de Baidu activa, con la licencia comercial continental y la cuenta bancaria corporativa correspondiente que eso implica.

Hay una cuestión que no hemos podido cerrar: si el permiso puede concederse sobre una cuenta de Baidu International o sobre una subcuenta de agencia. La documentación pública de Baidu guarda silencio en ambos sentidos. Si compra a través de una agencia, pregúntelo durante la selección y no después de firmar.

## Cuatro objetos, y solo tres de ellos son almacenamiento

Un catálogo (目录, mùlù) es el contenedor superior, y una cuenta nueva arranca con una dotación de tres. Ese es el límite con el que se topa primero, y es lo bastante bajo como para condicionar el diseño. Un equipo que planifique un catálogo por marca y otro por idioma se queda sin margen el primer día.

Dentro de un catálogo viven los archivos de producto (商品文件, shāngpǐn wénjiàn), que son las cargas o los feeds sincronizados en sí, y dentro de estos los productos individuales (商品, shāngpǐn). Un archivo admite hasta un millón de productos, un techo al que casi nadie se acerca.

El cuarto objeto confunde porque parece una carpeta y se comporta como un segmento. Un grupo de productos (商品组, shāngpǐn zǔ) es un subconjunto filtrado de un catálogo al que apuntan las campañas, de modo que es una unidad de segmentación y no un lugar donde residan los registros, y Baidu aconseja mantener cualquier grupo por debajo de los 100.000 productos.

Rellenar todo esto correctamente es un trabajo en sí mismo, gobernado por reglas de campo que fallan en silencio cuando uno se equivoca. De eso se ocupa el artículo complementario sobre la construcción del feed.

## El rastro documental se detiene el 4 de enero de 2021

Ese día Baidu integró los anuncios dinámicos de producto en búsqueda dentro de su plataforma unificada Baidu Marketing, y renombró de paso los objetos de campaña. El antiguo plan de producto pasó a ser un objetivo de marketing de catálogo de producto, y el plan ordinario un componente creativo de tipo producto.

Ese anuncio es el último artículo fechado que Baidu publicó bajo su etiqueta de anuncios dinámicos de producto, y la documentación canónica de BMC es todavía más antigua, del 29 y el 30 de agosto de 2019. Cualquier tutorial con capturas de pantalla describe, por tanto, menús renombrados hace años.

## Desde mayo de 2026, BMC significa dos cosas distintas en Baidu

En mayo de 2026 Baidu anunció un Model Committee, también abreviado BMC. Es un órgano de gobernanza para el trabajo en inteligencia artificial y no tiene nada que ver con los feeds de producto.

El acrónimo antiguo ya era escaso en inglés, y ahora es el más silencioso de dos aspirantes a las mismas tres letras. Investigar sobre esto se vuelve más difícil a partir de aquí, no más fácil. Escriba Baidu Merchant Center completo cuando informe a un colega o a una herramienta de investigación.

## ¿Sigue alguien manteniéndolo? Esto es lo que sostienen las pruebas

No hay aviso de cierre. La consola responde, las cuentas con el permiso siguen subiendo datos y los anuncios dinámicos de producto funcionan sobre ellos. Frente a eso, no ha aparecido nada fechado desde enero de 2021, y el diccionario completo de campos sigue detrás de un acceso y no en una página de ayuda abierta. Un silencio de esa duración no demuestra nada por sí solo, porque hay mucha infraestructura en funcionamiento sobre la que no se escribe.

> El negocio histórico de Baidu, principalmente búsqueda tradicional y publicidad en feeds, cayó un 29 % interanual hasta los 10.200 millones de yuanes en el primer trimestre de 2026, mientras que su negocio impulsado por inteligencia artificial creció un 49 % hasta los 13.600 millones.
>
> *Fuente: Baidu Inc., resultados del primer trimestre de 2026, 18 de mayo de 2026*

BMC pertenece al primero de esos dos negocios. Ahí es donde está el producto, y esto es una constatación y no un pronóstico. Baidu no ha publicado nada que permita formular uno en ninguna dirección.

Baidu no ha publicado nada fechado sobre este producto desde enero de 2021, así que conviene tomar las notas de estado anteriores como observación y no como previsión.
