---
title: "Baidu DPA: adónde van de verdad los datos del feed de producto"
subtitle: "En algún punto de la conversación comercial, un feed de producto se convirtió en visibilidad gratuita. Cargue el catálogo en Baidu Merchant Center y sus productos empezarán a aparecer en la búsqueda de Baidu. Ese argumento sobrevive porque el propio vocabulario de Baidu invita a él y los artículos en inglés llevan años repitiéndolo. Nada de lo que sigue afirma que el feed no sirva para nada. Afirma adónde documenta Baidu que van los datos."
summary: "Baidu documenta tres destinos para los datos del feed de producto, todos de pago: DPA en búsqueda, DPA en feed y Aladdin de pago. No existe ninguna vía orgánica documentada."
visual: "/images/guides/baidu-product-data-destinations.webp"
order: 18
published: true
publishedAt: 2026-08-13
updatedAt: 2026-08-13
category: Search
---

Baidu Merchant Center, BMC, es el almacén de datos de producto que hay detrás de los sistemas publicitarios de Baidu. Una frase de la FAQ de producto de Baidu enumera todos los lugares a los que pueden viajar esos datos. Los tres destinos se compran.

## Baidu escribió los destinos, y son tres

> 在BMC接入的商品数据，可用于搜索/信息流动态商品广告的投放和阿拉丁推广。
>
> Los datos de producto conectados a través de BMC pueden usarse para la entrega de anuncios dinámicos de producto en búsqueda y en feed, y para la promoción Aladdin.
>
> *Fuente: Baidu Marketing Academy, FAQ de producto*

Construida como una lista y no como un ejemplo, nombra tres cosas: anuncios dinámicos de producto en búsqueda, anuncios dinámicos de producto en feed y promoción Aladdin. Baidu Merchant Center (百度商品中心, Bǎidù Shāngpǐn Zhōngxīn) guarda los datos, y esa frase es su albarán de expedición. Nada de lo que figura en él va a otro sitio que no sea un sistema publicitario. Es además un texto antiguo, de la última etapa en que se actualizaba la documentación de BMC. Dígalo antes de que se lo diga un proveedor.

## Los tres destinos, y qué implica comprar cada uno

Los anuncios dinámicos de producto en búsqueda, DPA en todas las presentaciones de Baidu que le van a enseñar, son los que uno se imagina. Un usuario busca, Baidu compara la consulta con su catálogo y el anuncio se monta a partir del título, la imagen y el precio del registro. Nadie escribe creatividades producto a producto. El feed es la creatividad, y en eso reside todo el atractivo del formato.

El DPA en feed hace funcionar la misma maquinaria contra el feed de contenidos de Baidu en lugar de contra una consulta, y el detalle que pilla a los equipos es administrativo. La documentación de Baidu lo sitúa en la misma cuenta y el mismo fondo (相同的账户及资金池, xiāngtóng de zhànghù jí zījīnchí) que la cuenta de publicidad nativa, de modo que no hay una cartera aparte que abrir ni nada nuevo que aprobar. El dinero está dentro de un presupuesto de publicidad nativa que alguien ya firmó, o no existe.

Aladdin es donde tropiezan los resúmenes en inglés. Los emplazamientos Aladdin son los bloques enriquecidos que aparecen sobre los enlaces azules de una página de resultados de Baidu, y Baidu sí opera un programa propio de tarjetas sin coste, del que hablamos más abajo. El Aladdin de la frase de Baidu no es ese. Baidu escribió promoción Aladdin (阿拉丁推广, Ālādīng tuīguǎng), y promoción (推广, tuīguǎng) es la palabra que emplea para algo que se compra. Pierda la mitad de esa expresión en la traducción, como han hecho no pocas guías, y una partida de medios entra en el plan bajo la etiqueta de emplazamiento gratuito.

## Buscamos la vía orgánica en cuatro sitios

Una vía orgánica tendría que estar en alguna parte. Comprobamos los cuatro candidatos que salen a relucir con los clientes.

Empecemos por la herramienta hacia la que se dirige a todo el mundo. La herramienta de datos estructurados de Baidu (结构化数据工具, jiégòuhuà shùjù gōngjù) se lanzó en julio de 2013 con cuatro tipos admitidos: preguntas y respuestas generales, documentos en línea, descargas de archivos y descargas de software. Los productos nunca estuvieron entre ellos, y la herramienta tampoco llegó a abrirse al público.

> 结构化数据目前尚未完全开放，我们会主动邀请优质的网站提交数据。
>
> Los datos estructurados todavía no están completamente abiertos. Invitaremos activamente a los sitios de calidad a enviar datos.
>
> *Fuente: Baidu Search Resource Platform, anuncio de la herramienta de datos estructurados, julio de 2013*

Su URL devuelve ahora un error de servidor.

Más elocuente todavía es la lista de herramientas activas, y leerla de principio a fin es la comprobación que casi todo el mundo se salta. La Search Resource Platform de Baidu está bien surtida: envío, diagnóstico de rastreo, comprobación de robots, volumen de índice, tráfico y palabras clave, revisión de sitio, adaptación móvil. Ninguna herramienta de datos estructurados sobrevive en ella, y nada de lo que hay allí toca productos. No existe ningún tipo de objeto para un producto, así que no hay ni siquiera un formulario que rellenar mal.

OpenCard merece una mirada honesta, porque es un canal orgánico vivo que hace casi exactamente lo que un minorista querría. Usted aloja un webhook, Baidu le envía una intención normalizada en JSON en el momento de la consulta y sus datos vuelven convertidos en una tarjeta enriquecida dentro de los resultados no pagados, sin rastreo ni indexación. OpenCard es el sucesor de las antiguas tarjetas Aladdin. Detrás hace falta un miniprograma inteligente (智能小程序, zhìnéng xiǎochéngxù), y ahí es donde la regla de elegibilidad nombra el comercio minorista y cierra la puerta.

> 小程序主面向C端用户，且不属于医疗、资讯、招聘、购物平台等类目
>
> El miniprograma debe dirigirse al consumidor y no puede pertenecer a categorías como salud, información, empleo o plataformas de compra.
>
> *Fuente: Baidu, documentación de elegibilidad de OpenCard*

Esa exclusión está en la regla de elegibilidad, por delante de la lista de categorías, que reúne unas 120 entradas: viajes, finanzas, entretenimiento, servicios públicos, herramientas, educación, inmobiliario, vehículos, videojuegos, mascotas, astrología. El comercio minorista no figura, ni nada que se parezca a una ficha de producto.

Queda la plataforma abierta de transacciones de Baidu, en dianshang.baidu.com, que todavía responde y por eso sigue apareciendo en las búsquedas. Sus textos promocionan Xiongzhang ID (熊掌号, Xióngzhǎng Hào), retirado en marzo de 2020, y Nuomi, también desaparecido. Una página que vende dos productos muertos es una página que nadie ha abierto en años. Cuatro candidatos, ninguno abierto a un minorista.

## Baidu nunca dijo que no, y eso importa a la hora de argumentar

Baidu no ha publicado nunca una frase que diga que los datos de un feed de producto no pueden aparecer en resultados orgánicos. Ningún anuncio en ese sentido, nada en las páginas de ayuda. Lo que existe es una lista de tres destinos de pago, cuatro puertas cerradas y silencio entre medias.

La afirmación defendible es, por tanto, la estrecha. No existe una vía orgánica documentada para los datos de feed de comerciante en Baidu. No es lo mismo que estar demostradamente prohibido, y esa diferencia le protege cuando discuta. Diga a un proveedor que es imposible y habrá abierto una discusión que no puede cerrar. Pida ver la documentación y la discusión se acaba.

## Si lo que busca es descubrimiento y no medios, dos cosas funcionan

La demanda nunca fue el problema.

> China contaba con 937 millones de compradores en línea en diciembre de 2025, el 83,2 % de sus 1.125 millones de internautas.
>
> *Fuente: China Internet Network Information Center, 57.º informe estadístico, 17 de marzo de 2026*

Sencillamente, el feed no era la vía para llegar hasta ellos. Otras dos sí lo son.

La primera vale para todo el mundo y es trabajo poco lucido. Consiga que Baidu rastree e indexe sus páginas de producto como páginas: sitio verificado en la Search Resource Platform, número ICP en los atributos del sitio, HTML renderizado en servidor que Baiduspider pueda leer y URL enviadas por la API. Cada paso tiene su artículo en esta guía, desde [verificar el sitio](/es/recursos/guia-web-china/verificacion-sitio-baidu/) hasta [enviar URL por la API](/es/recursos/guia-web-china/enviar-urls-baidu/). Es más lento que subir una hoja de cálculo, y es la única vía sin coste que Baidu documenta para páginas comerciales.

La segunda depende de quién le compre. Si es un responsable de compras y no un consumidor, Baidu Aicaigou (百度爱采购, Bǎidù Àicǎigòu) es la vertical B2B cuyas fichas de proveedor ocupan las primeras posiciones en consultas con intención comercial.

> Baidu Aicaigou puso en contacto más de 13 millones de oportunidades de negocio en un solo año y acumuló más de 200 millones de contenidos en la plataforma.
>
> *Fuente: 南方都市报, 14 de junio de 2023*

La membresía se cotiza en 6.980 yuanes al año para el nivel estándar y hay que comprarla a través de un proveedor de servicios autorizado (服务商, fúwùshāng), con [un artículo propio en esta guía](/es/recursos/guia-web-china/baidu-aicaigou-b2b/) para el resto. Para un fabricante de componentes ese presupuesto suele rendir más ahí que en una campaña de DPA, y nada de ello pasa por BMC. Para el comercio minorista de consumo es la forma equivocada.

La declaración de Baidu sobre los destinos es un texto antiguo, así que conviene buscar una FAQ de producto más reciente antes de citarla en una presentación para un cliente.
