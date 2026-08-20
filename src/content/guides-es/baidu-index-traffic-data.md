---
title: "Leer el volumen de índice y los datos de tráfico de Baidu"
subtitle: "Dos semanas después del lanzamiento, alguien de marketing entra por fin en la Baidu Search Resource Platform. Volumen de índice: cero. Tráfico y palabras clave: vacío. Frecuencia de rastreo: una línea plana. La lectura evidente sería que el sitio está roto. Normalmente no lo está."
summary: "Qué miden realmente los informes de volumen de índice, tráfico y palabras clave de Baidu, cuánto conviene fiarse de cada uno y cuándo debe esperar datos un sitio nuevo."
visual: "/images/guides/baidu-index-traffic-data.webp"
order: 21
published: true
publishedAt: 2026-08-15
updatedAt: 2026-08-15
category: Search
---

La parte de informes de la Baidu Search Resource Platform (百度搜索资源平台, Bǎidù Sōusuǒ Zīyuán Píngtái) no es un cuadro de mando en el sentido al que usted está acostumbrado. Es un conjunto de instrumentos separados que comparten un acceso, cada uno con su propio reloj, y varios de ellos vacíos durante semanas por diseño.

## El volumen de índice es una línea de tendencia, no un recuento de páginas

El volumen de índice (索引量, suǒyǐn liàng) se cita en reuniones más que cualquier otra cifra de aquí, y se malinterpreta con la misma frecuencia. Informa de cuántas de sus páginas mantiene Baidu. No de cuáles, y tampoco de un recuento exacto. Baidu nunca lo ha presentado como tal.

La granularidad es mejor de lo que se supone. Puntos diarios para el año anterior y mensuales si se va más atrás. Suficiente para localizar la semana en que una migración salió mal, que es casi todo lo que alguien necesita de este informe.

Lo que no puede hacer es tratar dos días consecutivos como una medición. El movimiento de un día para otro es ruido. Una caída que se sostiene dos semanas merece una reunión.

Hay un detalle que atrapa a las empresas que operan un subdominio de país. Los datos de índice a nivel de subdominio solo aparecen si el dominio raíz también está verificado, según la documentación que manejan las agencias sobre la plataforma.

## Tráfico y palabras clave sigue vacío mientras no consiga clics

Tráfico y palabras clave (流量与关键词, liúliàng yǔ guānjiàncí) informa de impresiones y clics frente a las consultas que los produjeron. Es lo más cercano a un informe de rendimiento que ofrece Baidu, y sorprende a quien llega desde Search Console.

La medición es horaria, más fina de lo que casi nadie espera, y se retrasa unas cinco horas. El pico de las nueve de la mañana aparece a media tarde.

La retención es la restricción mayor. La ventana de palabras clave es de 30 días y no se amplía. Los datos de palabras clave en móvil se guardan unos tres meses. Una vista interanual de qué consultas trajeron tráfico tendrá que construirla usted mismo, exportando con regularidad desde la semana del lanzamiento. La mayoría de los equipos lo descubre demasiado tarde.

El informe también se limita a 50.000 filas de palabras clave. Los sitios de catálogo breve no lo verán nunca. Un catálogo grande sí, y la cola larga se cae por el borde de la exportación.

Y llega la parte que dispara la alarma. Este informe solo se llena cuando el sitio consigue clics, un listón más alto que ser rastreado o indexado. Un sitio nuevo sin posiciones no muestra nada, y nada es aquí la lectura correcta.

> Alrededor del 70 % de las páginas de resultados móviles de Baidu contenían contenido generado por inteligencia artificial en octubre de 2025.
>
> *Fuente: Baidu Inc., resultados del tercer trimestre de 2025, 18 de noviembre de 2025*

Conviene tenerlo presente cuando los clics lleguen más despacio de lo que las posiciones sugieren. Su enlace ya no es lo único que hay en la página.

## La frecuencia y las excepciones de rastreo necesitan primero un rastreador

Más abajo en el menú, la frecuencia de rastreo y las excepciones de rastreo son observacionales. La frecuencia muestra con qué asiduidad vuelve Baiduspider, y las excepciones muestran con qué se encontró cuando vino. Si el rastreador no ha pasado, no hay nada que registrar, y una línea plana significa que nunca llegó. Un problema completamente distinto del de un rastreador que llegó y fracasó.

La distinción cambia lo que toca hacer después. Un gráfico de rastreo plano en un sitio de dos semanas no es motivo para reescribir el contenido. Es motivo para comprobar si Baiduspider puede siquiera alcanzar el servidor, que es una cuestión de alojamiento y cortafuegos.

Las excepciones de rastreo enumeran las URL que fallaron, y fuentes profesionales sitúan esa lista en los primeros 1.000 enlaces. Baidu no ha confirmado la cifra, así que trátela como hipótesis de trabajo. En cualquier caso, un sitio que acaba de romper un catálogo grande obtiene una muestra y no un inventario completo.

## El diagnóstico de rastreo responde de una URL cada vez, y está racionado

El diagnóstico de rastreo (抓取诊断, zhuāqǔ zhěnduàn) es la única herramienta de aquí que da una respuesta en directo. Recupera una URL haciéndose pasar por Baiduspider, con agente de escritorio o móvil, y muestra lo que volvió. En un sitio renderizado con JavaScript suele zanjar la discusión en una sola pantalla.

Dos límites condicionan su uso. Captura los primeros 200 KB del contenido, lo que deja truncada una página pesada. Y la cuota semanal de recuperaciones está racionada, con fuentes que discrepan sobre la cifra: 优化猩 informa de 70 recuperaciones por semana y Dragon Metrics informa de 200. Nosotros presupuestamos con la cifra baja.

El envío de enlaces rotos (死链提交, sǐliàn tíjiāo) es la contrapartida de limpieza. Aliméntelo con txt o xml, hasta 50.000 URL y 10 MB, y la retirada suele producirse entre tres días y una semana después. Ejecútelo tras cualquier migración, o deje que Baidu encuentre los 404 a su propio ritmo.

## Qué hacer cuando los informes se contradicen

Se van a contradecir. El volumen de índice suele quedar por debajo del recuento de su sitemap. Baidu Tongji (百度统计, Bǎidù Tǒngjì) muestra sesiones de las que tráfico y palabras clave no da cuenta jamás. Nada de esto es un error que se pueda reportar.

Los informes miden cosas distintas. El volumen de índice es una estimación con reloj diario. Tráfico y palabras clave funciona por horas, con cinco de retraso, y cuenta solo los clics que Baidu atribuye a la búsqueda orgánica. Tongji es una etiqueta de JavaScript que cuenta personas que llegaron a su servidor por cualquier vía. Debajo de ellos no hay ninguna capa común.

Trabaje por tanto con un orden aproximado de confianza. Una recuperación mediante diagnóstico de rastreo es lo más fiable de la plataforma, porque la disparó usted y la respuesta está delante. Los datos de clics vienen después, y luego el volumen de índice, que es orientativo en el mejor de los casos. Los indicadores de cuota merecen la menor confianza de todo: el texto de la herramienta de envío de Baidu declara un techo de 100.000 URL al día, mientras los profesionales documentan asignaciones reales desplomadas hasta 100.

Cuando dos informes discrepan sobre si una página está indexada, vaya a mirar los resultados de búsqueda. Una consulta site: más una recuperación de diagnóstico lo resuelven antes que una incidencia de soporte.

Se lo decimos a los clientes en la primera semana, y ahorra frustraciones después. Los informes de Baidu son menos precisos que los de Google Search Console. Menos dimensiones, retención más corta y ninguna estimación llega acompañada de una idea de su margen de error. Organícese en torno a lo que las herramientas saben hacer.

## Cuándo debe esperar ver algo un sitio nuevo

Empecemos por lo que se mueve deprisa. La verificación va de instantánea a 24 horas, a menudo en la misma sesión. El diagnóstico de rastreo funciona justo después. Abra ese primero.

La indexación inicial de un sitio nuevo lleva entre dos y cuatro semanas. El volumen de índice marca cero durante días o semanas dentro de esa ventana con toda normalidad, y un sitio sin registro avanza aún más despacio. Si el número de registro ICP (备案号, bèi'àn hào) existe, introdúzcalo en los atributos del sitio el primer día. A los sitios de menos de seis meses Baidu se lo recomienda expresamente.

Baidu no publica ningún acuerdo de nivel de servicio sobre nada de esto. Nada compromete al rastreador a un intervalo, y en ningún sitio se promete una ventana de indexación. Todos los plazos anteriores son comportamiento observado y no un compromiso, de modo que la respuesta honesta a la pregunta de cuándo estaremos indexados llega en forma de horquilla con condiciones.

Los límites de los informes cambian sin previo aviso, así que conviene verificar las cuotas en la plataforma antes de planificar sobre ellas.
