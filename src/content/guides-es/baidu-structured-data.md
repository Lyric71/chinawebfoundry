---
title: "Datos estructurados en Baidu: qué sigue funcionando"
subtitle: "El marcado se entrega en el primer sprint. JSON-LD en el head, Organization, BreadcrumbList y Product, el mismo bloque que sale en todos los sitios que construye el equipo. Y entonces alguien pregunta cómo se confirma que Baidu lo ha recogido, y la sala se queda en silencio. No hay ningún informe que abrir."
summary: "Baidu nunca publicó una especificación de schema.org ni un validador. Qué murió, cómo funciona realmente OpenCard y qué marcado sigue mereciendo la pena de todos modos."
visual: "/images/guides/baidu-structured-data.webp"
order: 16
published: true
publishedAt: 2026-08-12
updatedAt: 2026-08-12
category: Search
---

Baidu nunca ha publicado una especificación de schema.org. Ningún tipo admitido, ningún validador, ningún informe en sus herramientas para webmasters. La herramienta que sí llegó a construir lleva años rota. Hay un canal vivo que llevará sus datos a un resultado orgánico, y no se parece en nada al marcado. La mayoría de las empresas que leen esto no pueden usarlo, lo que deja abierta la pregunta de qué conviene entregar.

## Baidu construyó una herramienta de datos estructurados una vez, en 2013

Baidu anunció su herramienta de datos estructurados (结构化数据工具, jiégòuhuà shùjù gōngjù) el 25 de julio de 2013, en una dirección schema de la plataforma para webmasters. Aceptaba cuatro tipos de contenido y solo cuatro: preguntas y respuestas generales (通用问答, tōngyòng wèndá), documentos en línea (在线文档, zàixiàn wéndàng), descargas de archivos (资料下载, zīliào xiàzài) y descargas de software (软件下载, ruǎnjiàn xiàzài).

Los productos nunca estuvieron en esa lista. No fueron descatalogados después ni retirados en silencio: sencillamente nunca se incluyeron, y eso resulta ser un patrón antes que un descuido.

La herramienta funcionó por invitación desde el día de su lanzamiento.

> 结构化数据目前尚未完全开放，我们会主动邀请优质的网站提交数据。
>
> Los datos estructurados todavía no están completamente abiertos. Invitaremos activamente a los sitios de calidad a enviar datos.
>
> *Fuente: Baidu Search Resource Platform, anuncio de la herramienta de datos estructurados, julio de 2013*

Nunca llegó a abrirse al envío general. La URL devuelve hoy un error de servidor, no un 404 ni una redirección a un sucesor. Una página de error es el aspecto que tiene un servicio al que nadie ha cobrado por apagar correctamente.

## Baidu nunca ha dicho si el marcado sirve para algo

La herramienta muerta es solo la mitad del asunto. Oirá dos respuestas rotundas sobre el marcado en Baidu y las dos son falsas. Baidu no ha dicho que lea schema.org. Tampoco ha dicho nunca que lo ignore. No hay documentación en ninguna dirección, y ese silencio es el hallazgo.

Eso pesa más de lo que parece, porque elimina el ciclo de depuración que espera un desarrollador. En Google usted escribe marcado, ejecuta una prueba, lee un informe y corrige lo que le señala. En Baidu no existe ninguno de esos pasos.

Hay un producto que sigue enturbiando esto. Baidu sí vende algo con Schema en el nombre: las herramientas de esquema de grafo de conocimiento (知识图谱Schema, zhīshi túpǔ Schema) en su sitio de inteligencia artificial. Eso es una interfaz de modelado para construir su propio grafo de conocimiento dentro de la nube de IA de Baidu, sin relación con el marcado de búsqueda ni con sus páginas. Se sigue citando en artículos en inglés como prueba de que Baidu admite datos estructurados, y hemos tenido que sacar a clientes de ese error más de una vez.

## Los resultados enriquecidos de la página no vienen de su marcado

Mire una página de resultados de Baidu y verá que está cargada de tarjetas y respuestas generadas. La suposición razonable es que parte de eso se gana mediante marcado.

> Alrededor del 70 % de las páginas de resultados móviles de Baidu contenían contenido generado por inteligencia artificial en octubre de 2025.
>
> *Fuente: Baidu Inc., resultados del tercer trimestre de 2025, 18 de noviembre de 2025*

Baidu construyó todo eso en el lado de las respuestas del buscador mientras su documentación sobre datos estructurados seguía intacta desde 2013. Buena parte de lo que está mirando es de pago, y otra parte pertenece a las propiedades del propio Baidu. Las tarjetas enriquecidas orgánicas llegan a través de OpenCard, que tomó el relevo de las antiguas tarjetas Aladdin. Esa es la única vía orgánica viva entre sus datos y la página de resultados.

## OpenCard le pregunta en el momento de la consulta en lugar de rastrearle

OpenCard funciona al revés que casi todo lo que ha construido un desarrollador formado en Google.

Usted levanta un webhook y lo registra. Un usuario busca. Si Baidu decide que su servicio es la respuesta adecuada, y esa decisión es enteramente suya, convierte la consulta en una intención normalizada expresada en JSON y la envía a su endpoint. Su sistema responde con datos y Baidu muestra esa respuesta como una tarjeta enriquecida en los resultados orgánicos.

En todo eso no interviene ningún rastreo y no se indexa nada. Los datos ni siquiera tienen que vivir en una página pública. Lo que se muestra es lo que su servicio devolvió en el momento en que alguien preguntó, algo que favorece a todo aquello que una instantánea rastreada representaría mal.

Lo que está contratando es, por tanto, un servicio de producción disponible de forma permanente. El modo de fallo es una tarjeta que desaparece la tarde en que su endpoint tiene problemas.

## La mayoría de las empresas que leen esto quedan excluidas por categoría

OpenCard no es un producto independiente. Funciona sobre los miniprogramas inteligentes de Baidu (百度智能小程序, Bǎidù zhìnéng xiǎochéngxù), de modo que un miniprograma es el billete de entrada. Eso es un desarrollo real, contra una plataforma a la que Baidu lleva años restando prioridad.

La elegibilidad estrecha todavía más el paso.

> 小程序主面向C端用户，且不属于医疗、资讯、招聘、购物平台等类目
>
> El miniprograma debe atender principalmente a consumidores y no puede pertenecer a categorías como salud, información, empleo o plataformas de compra.
>
> *Fuente: Baidu, documentación de elegibilidad de OpenCard*

Las plataformas de compra quedan excluidas por su nombre, junto con salud, información y empleo. La lista de categorías publicada por Baidu reúne unas 120 entradas: viajes, finanzas, entretenimiento, servicios públicos, suministros, educación, inmobiliario, vehículos, videojuegos, mascotas e incluso astrología. Ninguna tarjeta de comercio minorista y ninguna tarjeta de ficha de producto.

Entre las exclusiones nombradas y la tarjeta de comercio ausente, eso cubre a la mayoría de las empresas extranjeras que leen esta guía, y la conclusión es dejar de dimensionar un miniprograma para una tarjeta que nunca iba a conseguir. Si dirige un grupo hotelero, una aerolínea o una aplicación de consumo dentro de una categoría activa, el cálculo cambia. Entonces el miniprograma es una discusión que merece la pena tener.

Ponga los dos extremos de la cronología uno al lado del otro. La herramienta de Baidu de 2013 nunca cubrió productos. Trece años después, el canal vivo excluye por su nombre a las plataformas de compra. Los datos de producto circulan en cambio por la cuenta publicitaria, algo que cubre el artículo sobre Baidu Merchant Center, y todas sus salidas documentadas son de pago.

## Entregue el marcado y sáquelo después de la hoja de ruta de Baidu

¿Qué entrega entonces un equipo el lunes? Marcado limpio de schema.org, igual que en cualquier otro sitio. En una pila moderna el coste se redondea a cero, y se gana el sueldo en Google y en Bing haga Baidu lo que haga con él. Nosotros ponemos el bloque en la plantilla base, lo comprobamos una vez y seguimos adelante. Un marcado bien formado además suele viajar junto a un HTML bien formado, que es lo que Baiduspider necesita de verdad.

Lo que no debe hacer es apuntarlo como entregable de Baidu. Nada lo valida y ninguna superficie de Baidu confirmará que haya cambiado algo, así que una propuesta que factura el marcado como una partida de SEO para Baidu le está vendiendo un resultado que nadie puede medir.

Las palancas que sí mueven los resultados de Baidu son más grises y están documentadas. Baiduspider tiene que alcanzar el sitio desde dentro de China continental. Las páginas tienen que servir HTML real en lugar de una cáscara de JavaScript. Las URL pasan por el endpoint de push de la API, el número ICP va en los atributos del sitio y el volumen de índice se lee en lugar de adivinarse. Otros artículos de aquí cubren cada uno de esos puntos.

Las listas de categorías de OpenCard cambian en silencio, así que conviene volver a comprobar la elegibilidad antes de dimensionar un miniprograma.
