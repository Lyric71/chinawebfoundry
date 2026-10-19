---
title: "Cloudflare en China: requisitos de red e ICP"
subtitle: "Qué exige la red de Cloudflare en China continental y qué debe comprobar antes de cambiar la distribución de su sitio."
summary: "China Network requiere Enterprise, un registro o licencia ICP por dominio raíz y la revisión de JD Cloud. Prepare los requisitos antes del cambio."
visual: "/images/guides/cloudflare-china.webp"
order: 48
published: true
publishedAt: 2026-10-20
updatedAt: 2026-10-20
reviewBy: 2026-11-26
category: Hosting
author: cyril-drouin
---

Para servir un sitio desde China continental con Cloudflare se necesitan
Enterprise y una suscripción independiente a China Network, un registro
ICP (ICP备案) o una licencia ICP (ICP许可证) por dominio raíz y la revisión
de JD Cloud. En una prueba del sitio de Cloudflare, 21YunBox completó
3 de 6 cargas desde Alibaba Cloud (阿里云), región cn-zhangjiakou,
el 28 de agosto de 2026. Las configuraciones CDN de los clientes siguen
sin probarse aquí.

| Situación actual | Trámite necesario |
|---|---|
| Cloudflare sin China Network | Contratar China Network por separado con un plan Enterprise |
| Cuenta Enterprise sin registro ICP | Obtener el registro o la licencia exigidos para cada dominio raíz |
| Registro ya válido | Presentar el dominio y su contenido a JD Cloud |
| Dominio aprobado | Completar la puesta en marcha y comprobar las funciones utilizadas |

> Cloudflare reserva China Network a los clientes Enterprise mediante una
> suscripción independiente. JD Cloud opera sus centros de datos en China
> continental. Cada dominio raíz necesita un registro o una licencia ICP válidos.
> Fuente: Cloudflare, presentación de China Network, 30 de abril de 2026.
> https://developers.cloudflare.com/china-network/

Documentación comprobada el 20 de octubre de 2026.

Compruebe el estado del dominio concreto en su cuenta de China Network.
Pida al responsable de la cuenta que confirme la suscripción y los dominios
aprobados. Con esa información podrá planificar el cambio según las
autorizaciones que queden pendientes.

## Cloudflare en China: los trámites del dominio

Empiece por el dominio raíz: `example.com` es uno; `www.example.com` es
un subdominio. Enumere los dominios que usará el lanzamiento, incluidas
las direcciones independientes de cada marca. Compruebe el registro ICP
de cada dominio raíz.

Cloudflare exige un registro ICP (ICP备案) o una licencia ICP (ICP许可证)
válidos para cada uno. Antes de presentar la solicitud, confirme qué
autorización corresponde a la actividad del sitio. Nuestra
[guía del registro ICP para empresas extranjeras](/es/recursos/guia-web-china/licencia-icp-empresas-extranjeras/)
explica la diferencia y los requisitos de la entidad solicitante.

Entregue la lista a quien tramite el expediente antes de fijar la fecha de
lanzamiento. Un equipo regional puede haber registrado una dirección de
marca distinta. Compruebe que el expediente ICP cubre el dominio que
pretende incorporar a la red.

Prepare también la documentación para JD Cloud: nombres del cliente y de
la empresa, dominio, número ICP, descripción del contenido y declaración
firmada facilitada por el equipo comercial. El número ICP debe figurar
además en el pie de página del sitio.

> JD Cloud revisa el contenido de los dominios antes de activar China
> Network. Tras esa revisión, Cloudflare estima entre 24 y 48 horas para
> la primera puesta en marcha de una zona.
> Fuente: Cloudflare, primeros pasos, 17 de abril de 2026.
> https://developers.cloudflare.com/china-network/get-started/

El plazo estimado empieza después de aprobar el contenido. Reserve fechas
propias para la autorización ICP y la revisión del contenido, sobre todo
si aún no se ha iniciado la solicitud del registro.

## Qué demuestra la prueba del sitio de Cloudflare

El 28 de agosto de 2026, 21YunBox probó el sitio de Cloudflare desde una
región cloud de China continental. Esta observación de un tercero no
incluye un resultado equivalente desde una conexión residencial. Tampoco
compara un dominio cliente con y sin China Network.

| Objeto de la prueba | Resultado desde el centro de datos | Resultado residencial | Dictamen | Fecha |
|---|---|---|---|---|
| Sitio de Cloudflare | Alibaba Cloud (阿里云), cn-zhangjiakou: 3 cargas completas de 6 | No facilitado para esta prueba | Intermitente (21YunBox), solo el sitio del proveedor | 28 de agosto de 2026 |

> 21YunBox comunica 3 cargas completas de 6 intentos para el sitio de
> Cloudflare desde Alibaba Cloud (阿里云), región cn-zhangjiakou,
> el 28 de agosto de 2026.
> Fuente: 21YunBox, Cloudflare en China: China Network y requisito ICP,
> revisado el 7 de octubre de 2026.
> https://www.21cloudbox.com/support/cloudflare-china.html

Un nombre de host de un cliente sigue sin probarse aquí mientras no exista
una prueba de terceros, fechada y referida a ese nombre concreto. En un
formulario de contacto también hay que comprobar el envío y la recepción
efectiva del mensaje.

La documentación de Cloudflare advierte de que anycast puede enviar una
petición a un centro de datos geográficamente más lejano. El enrutamiento
y los acuerdos de interconexión del proveedor de acceso influyen en el
trayecto. Evite prometer una ciudad de servicio concreta basándose solo
en la ubicación del visitante.

> Según Cloudflare, una petición puede llegar a un centro de datos distinto
> del más cercano geográficamente. El cliente no puede fijar esa elección
> mediante la configuración de la zona.
> Fuente: Cloudflare, enrutamiento geográfico, 14 de octubre de 2026.
> https://developers.cloudflare.com/support/troubleshooting/general-troubleshooting/geographic-traffic-routing/

## Revise las funciones antes de cambiar la distribución

Compare las funciones que utiliza su sitio con la lista de disponibilidad
de China Network. Revise las opciones de caché e identifique el servicio
de verificación de visitantes del formulario, si lo tiene. Acuerde una
alternativa para las funciones no compatibles antes del cambio. La
compatibilidad regional del producto y su accesibilidad medida requieren
comprobaciones distintas.

> La lista de funciones de China Network incluye caché estática y excluye
> Tiered Cache y Cache Reserve. También indica que Turnstile no está
> disponible en China continental.
> Fuente: Cloudflare, productos y funciones disponibles, 10 de junio de 2026.
> https://developers.cloudflare.com/china-network/reference/available-products/

Anote para cada formulario el destino que recibe el envío y los scripts
que el navegador debe cargar antes. Incluya también los servidores que
alojan las imágenes. La
[guía de fallos de reCAPTCHA en formularios en China](/es/recursos/guia-web-china/recaptcha-china/)
trata esa dependencia concreta. Cambiar el CDN de la página no demuestra
que un servicio de formularios separado sea utilizable.

Si ya dispone de Enterprise y de un registro válido, confirme con el equipo
comercial la aprobación del dominio y las funciones necesarias. Si el
trámite ICP no ha empezado, asigne un responsable antes de planificar el
cambio de red. Nuestro servicio de
[alojamiento en China](/es/servicios/alojamiento-china/) se ocupa del
alojamiento y de los trámites ICP asociados a esa decisión.

## Antes de fijar el cambio

**¿Se puede probar China Network antes de obtener el registro?**

Los requisitos publicados por Cloudflare para una prueba de concepto
incluyen un número ICP válido y la aprobación del contenido por JD Cloud.
Prepare ambos antes de solicitarla. Aproveche la conversación comercial
para acordar el alcance de la prueba y los documentos que necesita para
realizarla en condiciones reales en China Network.

**¿Cloudflare tramitará el registro por nosotros?**

Cloudflare afirma que ni la empresa ni JD Cloud se responsabilizan de las
solicitudes ICP, aunque puede recomendar socios especializados. Decida
quién presentará y mantendrá su expediente. Guarde una copia del registro
junto al inventario de dominios para que un cambio de agencia no deje
sin identificar al responsable de estos trámites.

**¿Qué ocurre si se revoca el registro?**

JD Cloud puede suspender o cancelar el acceso al servicio chino. Cloudflare
indica que dirigirá los dominios afectados a centros de datos fuera de
China continental. Mantenga actualizados los datos del contacto ICP y
revise cualquier cambio del dominio o de la actividad del sitio con el
equipo encargado del registro.

> La FAQ de Cloudflare exige registro y aprobación del contenido para una
> prueba de concepto, atribuye la solicitud al cliente o a su socio y
> describe el desvío del tráfico fuera de China continental tras la revocación.
> Fuente: Cloudflare, preguntas frecuentes sobre China Network, 16 de abril de 2026.
> https://developers.cloudflare.com/china-network/faq/

Traiga a la reunión su lista de dominios y el estado de los trámites ICP.
