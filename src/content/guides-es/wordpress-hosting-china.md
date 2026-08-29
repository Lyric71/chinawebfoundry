---
title: "Alojamiento WordPress en China"
subtitle: "Las tres grandes nubes chinas ofrecen una imagen de WordPress en un clic. Ninguna ofrece WordPress gestionado, y en esa distancia es donde encallan los proyectos extranjeros."
summary: "Qué venden realmente Alibaba, Tencent y Huawei, el registro ICP que condiciona cualquier servidor en el continente, el atajo de Hong Kong y el problema de actualizaciones que nadie presupuesta."
visual: "/images/guides/wordpress-hosting-china.webp"
order: 32
published: true
publishedAt: 2026-08-29
updatedAt: 2026-08-29
category: Hosting
---

En China no existe WP Engine. Tampoco Kinsta, ni Flywheel, ni una sola oferta de WordPress gestionado entre los proveedores del continente.

Lo que sí puede comprar es una imagen de WordPress preinstalada en las tres grandes nubes chinas, montada sobre un pequeño servidor virtual que administra usted mismo. El producto no tiene nada que ver con el alojamiento gestionado, y es precisamente en esa distancia donde encalla la mayoría de los proyectos WordPress extranjeros en China.

Esta guía repasa qué venden de verdad las nubes continentales, el trámite que debe resolverse antes de que se sirva una sola petición y los costes que reaparecen cuatro meses después del lanzamiento, cuando ya nadie los tenía en el presupuesto. Para el panorama completo sobre servidores y latencia, empiece por nuestra guía sobre [cómo alojar un sitio web en China](/es/recursos/guia-web-china/alojar-sitio-web-china/). Sobre nuestra forma de trabajar con esta pila, consulte [WordPress en China](/es/wordpress-en-china/).

## Qué ofrecen realmente las tres nubes continentales

Alibaba Cloud (阿里云), Tencent Cloud (腾讯云) y Huawei Cloud (华为云) incluyen cada una una imagen de aplicación WordPress ya preparada en su producto de gama de entrada.

| Proveedor | Producto | Qué obtiene |
| --- | --- | --- |
| Alibaba Cloud | Simple Application Server (轻量应用服务器) | Imagen de WordPress sobre Alibaba Cloud Linux 3, PHP 8.1, MySQL 5.7, Nginx 1.22 |
| Tencent Cloud | Lighthouse (轻量应用服务器) | Plantilla de aplicación WordPress |
| Huawei Cloud | FlexusL (云耀云服务器 L实例) | Imagen de aplicación WordPress, además de imágenes de marketplace para ECS |

Lea la columna de la derecha con calma. Cada una de esas líneas describe un sistema operativo con WordPress instalado encima. Actualizaciones gestionadas, copias de seguridad gestionadas, entorno de preproducción, un equipo capaz de leer un conflicto entre plugins: nada de eso viene en la caja.

Alguien de su lado acabará haciendo administración de sistemas, en chino, sobre una consola que no tiene modo inglés. Eso es un coste mensual permanente. Inclúyalo en el presupuesto desde el arranque, porque va a aparecer de todas formas.

## Nada se sirve hasta que el registro está resuelto

Es la restricción que reordena cualquier proyecto web en China, así que conviene enunciarla sin rodeos.

Los puertos 80 y 443 permanecen inutilizables en una dirección IP continental mientras el registro ICP (ICP备案) no esté completo. El proveedor los mantiene cerrados en el borde de la red desde el mismo día en que usted alquila la máquina. No hay lanzamiento discreto, no hay enlace de preproducción que enseñar al cliente en el servidor de producción y no hay beta silenciosa mientras el expediente avanza.

> Presentar un registro ICP no cuesta nada. Lo instruye la Administración Provincial de Comunicaciones (省级通信管理局), y el Ministerio de Industria y Tecnologías de la Información realiza controles puntuales. Los plazos publicados van de 10 a 30 días hábiles según la provincia y la época del año.
> Fuente: normas de registro del MIIT y documentación de los proveedores continentales, 2026.

Cuente con tres a seis semanas, y eso dando por hecho que la entidad continental ya existe. Nuestra [guía del registro ICP](/es/recursos/guia-web-china/licencia-icp-empresas-extranjeras/) detalla la documentación y el orden en que conviene presentarla.

La licencia ICP comercial (ICP许可证) responde a otra lógica. Se vuelve obligatoria en cuanto el sitio genera ingresos por sí mismo: comercio electrónico, contenidos de pago, software de pago, publicidad. La instrucción es nacional en lugar de provincial y lleva bastante más tiempo.

> La revisión de una licencia ICP comercial a nivel del MIIT dura entre 60 y 90 días hábiles. La participación extranjera por encima del 50 % estuvo históricamente prohibida y sigue restringida fuera de las zonas piloto de Pekín, Shanghái Pudong, el puerto de libre comercio de Hainan y Shenzhen.
> Fuente: normas de licencia del MIIT y regulación de las zonas piloto, 2026.

Para ese trámite, presupueste de doce a dieciocho semanas. Ambos instrumentos exigen una entidad jurídica registrada en el continente. Una empresa extranjera no puede presentar el registro en su propio nombre, y ningún gasto en alojamiento sustituye a esa entidad.

## La cuenta de Alibaba Cloud que no puede alojar su sitio

Alibaba opera dos plataformas con marcas casi idénticas. alibabacloud.com es la plataforma internacional; aliyun.com, la plataforma china.

Las dos son estancas entre sí. No hay replicación nativa de recursos de una a otra, no hay regiones continentales disponibles en el lado internacional y desde ahí tampoco se puede tramitar el registro ICP.

De modo que la secuencia que parece natural, darse de alta en el sitio en inglés porque es el que devuelve el buscador, termina en una cuenta estructuralmente incapaz de alojar aquello que usted está construyendo. Abrir la cuenta correcta exige una licencia comercial china y una verificación de identidad local, y el flujo de registro que hay dentro está únicamente en chino.

Todo equipo que ya ha pasado por ahí lo sabe de memoria. Todo equipo que lo descubre pierde dos semanas.

## Hong Kong y lo que cuesta de verdad el atajo

El alojamiento en Hong Kong no requiere registro ICP. Ese es todo su atractivo, y es una opción defendible en dos situaciones: aún no tiene entidad continental, o necesita algo publicado antes de que el expediente se resuelva.

Conviene nombrar con precisión aquello a lo que renuncia.

La latencia empeora de forma apreciable desde el norte y el oeste de China frente a un origen continental, porque el tráfico sigue cruzando la frontera. El rendimiento oscila según la hora y según el operador, de manera que la medición de un martes por la mañana dice poco sobre un viernes por la noche. Y Baidu favorece a los sitios alojados en el continente bajo un dominio registrado, lo que deja a un sitio hongkonés subiendo cuesta arriba en el único buscador que le interesa.

Trate Hong Kong como un puente. Si China cuenta comercialmente, presupueste la entidad y el registro, mantenga Hong Kong mientras tanto y fije una fecha de migración antes de que se la fije la realidad.

## La cuestión del CDN

Una CDN global acerca su origen a Hong Kong o a Tokio, lo cual ayuda. Sobre los hosts bloqueados que la propia página invoca no cambia nada.

Cloudflare es el caso que más nos preguntan. Sus planes estándar y gratuito sirven a los visitantes continentales desde el punto de presencia extranjero más cercano. La red dentro del país es una suscripción Enterprise aparte, operada junto a JD Cloud, exige un registro o una licencia ICP válida por dominio raíz y pasa por una revisión de contenidos de JD Cloud antes de la activación.

Para un sitio alojado en el continente, la respuesta más simple suele ser la CDN doméstica asociada a la nube en la que ya está. Está registrada, es rápida y mantiene toda la cadena en un único proveedor.

## Mantener WordPress actualizado desde un servidor continental

WordPress sobre un servidor continental plantea un problema de mantenimiento que no plantea en ningún otro sitio.

El repositorio de plugins, el de temas y los servidores de actualización del núcleo responden desde China. También limitan el caudal de los rangos de IP continentales con severidad, devolviendo HTTP 429 con la frecuencia suficiente para que un sitio pase semanas sin parchear. El panel de administración no dice nada al respecto. Simplemente deja de ofrecer actualizaciones, y el sitio se queda atrás en silencio.

Tres soluciones funcionan en la práctica: los espejos domésticos, un proceso de actualización que se ejecute desde fuera de China contra una copia de preproducción, o un contrato de mantenimiento en el que una persona con nombre y apellidos responda del nivel de parcheo. Elija una a conciencia. No elegir también es una decisión, y termina con un sitio sin parchear expuesto a internet.

## Cuánto cuesta

El servidor es la parte barata. Un sitio corporativo sobre Simple Application Server o Lighthouse suele quedar por debajo de 100 USD al mes, y las tarifas promocionales del primer año en las instancias más pequeñas bajan bastante más.

Presentar el registro es gratuito. El gasto real se reparte en otros tres sitios: constituir o mantener la entidad continental, las horas de trabajo que consume preparar la documentación y superar la verificación, y la persona que cada mes entra en una consola en chino para mantener la máquina parcheada y respaldada.

Los equipos que solo cifran la línea del servidor son los que renegocian el alcance en el cuarto mes.

## Cómo elegir entre los escenarios

| Situación | Dónde alojar | Trámite necesario |
| --- | --- | --- |
| Sin entidad continental, hay que lanzar ya | Hong Kong | Ninguno |
| Entidad continental, sitio informativo | Alibaba, Tencent o Huawei en el continente | Registro ICP, de 3 a 6 semanas |
| Entidad continental, ingresos en el sitio | Continente, más medios de pago domésticos | Licencia ICP comercial, de 12 a 18 semanas |
| Sitio global, audiencia china pequeña, sin entidad | Mantener el origen fuera y arreglar antes las dependencias | Ninguno |

Esa última fila es la que más se salta, y con frecuencia es la respuesta correcta. Si China representa el 3 % de su tráfico y no hay ninguna entidad a la vista, retirar las dependencias bloqueadas del sitio que ya tiene recupera la mayor parte de la velocidad disponible por una fracción de lo que cuesta un despliegue continental.

## Preguntas frecuentes

**¿Podemos conservar nuestro proveedor actual y añadir simplemente una CDN china?**
Solo si el proveedor dispone de puntos de presencia en el continente, y eso exige que su dominio tenga registro. Sin registro, lo que compra es un punto de presencia extranjero con nombre chino.

**¿Cuánto cuesta el alojamiento WordPress en el continente?**
El servidor suele quedar por debajo de 100 USD al mes para un sitio corporativo. Los costes que importan son la entidad, el trabajo de registro y quien administre cada mes una consola en chino.

**¿El dominio tiene que ser un .cn?**
No. Un .com puede registrarse. Baidu muestra cierta preferencia por el .cn, pero un .com registrado sobre un servidor continental es el montaje habitual y funciona.

**¿Qué ocurre si alojamos en China sin registro?**
Los puertos siguen cerrados y el sitio no se sirve. El proveedor aplica la norma a nivel de red. Ningún regulador necesita descubrirle.

**¿Pueden tramitar ustedes el ICP por nosotros?**
Gestionamos el registro en nombre de la entidad continental del cliente: documentación, verificación de identidad real, presentación ante el proveedor y seguimiento. No podemos tramitarlo para una empresa sin entidad, y nadie más puede hacerlo.

¿Está sopesando un despliegue continental frente a quedarse fuera? Cuéntenos en qué punto está con la entidad y qué parte de su tráfico es china, y le devolveremos el escenario que encaja. A veces ese escenario consiste en dejar su origen exactamente donde está.
