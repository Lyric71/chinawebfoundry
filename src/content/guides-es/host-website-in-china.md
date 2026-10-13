---
title: "Alojar un sitio web en China: la guía completa"
subtitle: "De la ubicación física de su servidor depende todo lo demás: que el visitante chino vea su página de inicio o que la abandone ante una ruedecita que gira sin fin."
summary: "Por qué el alojamiento en el extranjero fracasa en China, las reglas del ICP y de la entidad, Alibaba Cloud frente a Tencent Cloud y frente al extranjero, y una lista de comprobación de lanzamiento paso a paso."
visual: "/images/guides/host-website-in-china.webp"
order: 14
published: true
publishedAt: 2026-07-03
updatedAt: 2026-10-13
category: Hosting
---

Su sitio carga sin problemas en todas partes, salvo en el único mercado para el que lo construyó. Ábralo desde Shanghái y a esperar. Y a seguir esperando. Hay veces en que la página no llega a cargar.

Esa diferencia casi siempre se reduce al alojamiento. De la ubicación física de su servidor depende que el visitante chino vea su página de inicio o que se rinda ante una ruedecita que gira sin fin, y esa decisión pesa más que cualquier otra dentro de [un WordPress construido para China](/es/wordpress-en-china/). Esta guía repasa por qué el alojamiento en el extranjero se rompe dentro de China, qué necesita legalmente antes de poder alojar en el continente, cómo se comparan los grandes proveedores y en qué orden conviene hacerlo todo.

Buena parte de lo que sigue amplía nuestra guía de referencia, Localización de sitios web para China. Si aún no la ha leído, empiece por ahí y vuelva luego a por los detalles del alojamiento.

## Por qué alojar su sitio web en China

Hay tres razones, y se acumulan una sobre otra.

La velocidad, para empezar. Cuando su servidor vive en Virginia o en Fráncfort, cada petición de un usuario chino tiene que cruzar el Gran Cortafuegos (防火长城). Ese cruce no es un salto limpio. El tráfico se estrangula, la negociación SSL expira a mitad de conexión y cualquier script o tipografía alojados en un servidor extranjero fuera del alcance de la red del visitante se quedan colgados sin más. Google Fonts es el ejemplo de manual: responde desde un centro de datos del continente y enmudece en una línea doméstica de Pekín. La página no falla con estrépito. Se queda ahí, dibujada a medias, hasta que el visitante se marcha.

> Según las mediciones de 21YunBox, `fonts.googleapis.com` atendió las 72 peticiones enviadas desde una instancia de Alibaba Cloud (阿里云) en la región cn-zhangjiakou el 28 de agosto de 2026, y ninguna de las 54 lanzadas desde una línea residencial de China Mobile (中国移动) en Pekín el 30 de agosto de 2026.
> Fuente: 21YunBox, A Day of Third-Party Requests From Inside China, agosto de 2026. https://www.21cloudbox.com/a-day-of-third-party-requests-from-inside-china.html

El SEO, a continuación. Baidu (百度) es el buscador que importa aquí, y solo puede posicionar las páginas que consigue rastrear y cargar desde el continente. Baidu no ha publicado ninguna norma que premie, por sí solos, el alojamiento en el continente o el registro ICP: lo que juega a favor del alojamiento local es el acceso de su rastreador y la velocidad de las páginas en las redes del continente, dos aspectos que pueden comprobarse.

> Baidu concentra alrededor de la mitad del mercado chino de búsqueda. Google se queda por debajo del 3 %.
> Fuente: Statcounter Global Stats, China, 2024.

El propio Cortafuegos, para terminar. Hasta una instalación extranjera rápida resulta frágil detrás de él. Los plugins que llaman a un extremo bloqueado se rompen sin hacer ruido. Un CDN por el que paga un buen dinero acaba estrangulado en la frontera. Alojar dentro de China le ahorra de golpe toda esa familia de problemas, porque sus recursos ya están del lado bueno del muro.

## Los 3 requisitos legales antes de poder alojar

No basta con alquilar un servidor en el continente y apuntar hacia él su dominio. Tres cosas tienen que estar en su sitio antes, y ninguna admite atajos.

**1. Una entidad mercantil china.** El registro ICP va ligado a una entidad constituida en China. Una empresa extranjera sin presencia local no puede tramitarlo por su cuenta. Si todavía no tiene entidad, no es un callejón sin salida, hay vías para conseguirla, pero es la primera barrera y conviene saberlo desde el principio.

**2. Un dominio, .cn o .com.** El dominio tiene que superar una verificación de identidad real, y el titular registrado debe coincidir al dedillo con la entidad que presenta el registro. Una discrepancia aquí figura entre los motivos más frecuentes de que un expediente se atasque antes siquiera de llegar al regulador.

**3. El propio registro ICP.** Este es el que no se puede esquivar. El ICP Bei'an (备案) es el asiento que todo sitio alojado en el continente debe llevar, bajo la tutela del Ministerio de Industria y Tecnología de la Información (工业和信息化部), el MIIT. A un sitio informativo le basta el Bei'an estándar. El sitio que cobra a sus usuarios por información o por servicios en línea necesita, además, una licencia ICP (ICP许可证), que tarda más en obtenerse.

> La revisión propia de Alibaba Cloud dura entre 1 y 2 días hábiles. La de la Administración provincial de Comunicaciones (省级通信管理局), que viene después, suele llevar entre 1 y 20 días hábiles.
> Fuente: centro de ayuda de Alibaba Cloud (阿里云), descripción del proceso de registro ICP, actualizado el 26 de agosto de 2026. https://help.aliyun.com/zh/icp-filing/basic-icp-service/user-guide/icp-filing-application-overview

Un detalle que a muchos se les escapa: dentro de los 30 días siguientes a la puesta en marcha en un alojamiento del continente, presenta además un registro de seguridad pública (公安备案) ante las autoridades locales. Para el recorrido completo del registro, las opciones de entidad y la preparación de documentos, lea nuestra guía dedicada al ICP. Esta página da por hecho que usted ya sabe que ese trámite le espera.

## Opciones de alojamiento en China: Alibaba Cloud, Tencent Cloud o el extranjero

Hay tres caminos realistas, según tenga ya un ICP o no y según quién sea de verdad su público.

| Opción                | Las peticiones cruzan la frontera | ICP necesario | Ideal para                               |
| --------------------- | --------------------------------- | ------------- | ---------------------------------------- |
| Continente (Aliyun)   | No                                | Sí            | Una apuesta seria y a largo plazo        |
| Continente (Tencent)  | No                                | Sí            | Proyectos centrados en WeChat            |
| Hong Kong             | Sí                                | No            | Servir de puente mientras se tramita el ICP |
| EE. UU. / Europa      | Sí                                | No            | Descartado para un público chino         |

**Alibaba Cloud (Aliyun, 阿里云)** es la elección por defecto de la mayoría de las marcas extranjeras que entran en China en serio. Ofrece el mayor número de regiones en el continente y, en su portal chino (aliyun.com), un sistema que guía el Bei'an desde el mismo lugar donde está el servidor. Su portal internacional en inglés, alibabacloud.com, no admite solicitudes de registro. La ventaja práctica está en la cobertura y en que todo, servidor y registro, queda en un mismo lugar.

**Tencent Cloud (腾讯云)** pisa los talones al primero, y a menudo gana en cuanto el proyecto se apoya en el ecosistema de WeChat (微信), del que está de forma nativa más cerca. El rendimiento iguala al de Aliyun en la misma gama. Lo que inclina la balanza suele ser el encaje con el ecosistema, no la ficha técnica.

**Huawei Cloud (华为云)** es una tercera opción solvente en el continente, sobre todo para equipos ya asentados sobre la infraestructura de Huawei.

**El extranjero, Hong Kong incluido,** se salta por completo el requisito del ICP, y en eso reside todo su atractivo. Hong Kong hace de puente cómodo: está al lado del continente y, con un CDN y una capa de caché decentes, rinde mucho mejor que un servidor en Fráncfort, aunque cada petición siga cruzando la frontera. Muchos equipos funcionan sobre Hong Kong mientras avanza su expediente y migran después.

En cuanto al precio, conviene no leer al pie de la letra las tarifas del cloud chino. Las ofertas de gancho suelen ser precios promocionales para clientes nuevos sobre las máquinas más pequeñas, y una configuración de producción para un sitio profesional cuesta bastante más.

También importa la consola desde la que se trabaja. El registro se tramita en el portal chino de cada proveedor, y las cuentas internacionales de Alibaba ni siquiera permiten presentarlo, lo que explica en buena medida por qué los equipos encargan esa parte a un socio local.

> Las cuentas del portal internacional de Alibaba Cloud (alibabacloud.com) no admiten solicitudes de registro ICP. Para presentarla hay que abrir una cuenta en el portal chino de Alibaba Cloud (aliyun.com).
> Fuente: centro de ayuda de Alibaba Cloud, registro ICP para empresas situadas fuera de China continental, actualizado el 20 de agosto de 2026. https://help.aliyun.com/en/icp-filing/basic-icp-service/product-overview/icp-filing-application-for-enterprises-outside-the-chinese-mainland

## Acelerarlo: CDN chino y entrega en el borde

Un buen alojamiento en el continente acerca su servidor de origen a los usuarios. Un CDN chino guarda en caché sus archivos estáticos, imágenes, scripts, hojas de estilo, en nodos repartidos por todo el país: así cargan desde unos pocos cientos de kilómetros, en lugar de dar antes el rodeo por el Pacífico.

Alibaba Cloud CDN y Tencent Cloud CDN son las opciones de siempre, y con razón: se emparejan con limpieza con el alojamiento de la casa y están afinados para el enrutamiento del continente.

Aquí está la trampa que pilla a la gente. Un CDN chino no exime del registro. Para servir contenido en caché desde nodos del continente, el dominio del CDN necesita su propia cobertura ICP, igual que el origen. A veces los equipos creen que el CDN les ahorra el Bei'an. No es así. Registro y entrega en el borde van de la mano.

Bien hecho, la recompensa salta a la vista. Imágenes de producto que antes llegaban con cuentagotas cargan en el mismo entorno en el que está sentado su comprador, y una página pesada empieza a sentirse ligera.

## Paso a paso: lanzar su sitio en la China continental

El orden importa, porque cada paso se apoya en el anterior. Adelántese y se queda encallado.

**1. Constituir la entidad.** Confirme que tiene una entidad mercantil registrada en China, o prepare la vía para conseguir una. Nada más arranca mientras esto no exista.

**2. Registrar y verificar el dominio.** Lleve su .cn o su .com a un registrador, supere la verificación de identidad real y asegúrese de que el titular coincide exactamente con la entidad.

**3. Contratar el servidor en el continente.** El registro se presenta sobre un servidor del proveedor que alojará el sitio, de modo que el servidor va primero: en Aliyun, Tencent Cloud o Huawei Cloud, con una suscripción lo bastante larga para que sea válida (Alibaba exige al menos 3 meses). El dominio permanece cerrado al público hasta que se aprueba el registro.

**4. Presentar el ICP.** Envíe el Bei'an a través del sistema de ese mismo proveedor. El registro informativo estándar es más rápido; la licencia lleva más tiempo, así que planifíquela pronto si cobra por información o por servicios. Una vez aprobado el registro, ajuste el servidor al entorno chino: SSL compatible con China, tipografías autoalojadas, ninguna llamada a terceros bloqueada.

**5. Conectar el CDN.** Añada un CDN chino con su propia cobertura de registro y apunte hacia él sus recursos estáticos.

**6. Presentar el registro de seguridad pública.** Dentro de los 30 días siguientes a la puesta en marcha, complete el 公安备案 ante la autoridad local y añada al pie de página tanto el número ICP como el número de seguridad pública.

**7. Salir en vivo y vigilar desde dentro de China.** Confirme que el sitio carga rápido desde ubicaciones reales del continente, no solo desde un comprobador situado fuera del Cortafuegos, que con gusto le asegurará que todo va bien mientras sus visitantes de Shenzhen miran una pantalla en blanco.

## Elegir el mejor alojamiento chino para su negocio

La configuración correcta depende sobre todo de en qué punto del proceso se encuentra y de qué hace su sitio.

¿Está levantando una presencia seria y a largo plazo, con la búsqueda orgánica dentro del plan? Vaya directo al alojamiento en el continente sobre Aliyun o Tencent Cloud, con un registro en regla. Así todas las peticiones se quedan en el continente, tanto las de sus visitantes como las de Baiduspider.

¿Necesita estar en vivo para ayer y su ICP sigue en trámite? Arranque en Hong Kong a modo de puente, ponga un CDN y caché por delante y planifique la migración al continente en cuanto se apruebe el expediente.

¿Vende, hay transacciones de verdad? Meta la licencia ICP en su calendario desde el primer día, porque es el paso más lento de todos y el que con más frecuencia pilla a un equipo con la guardia baja.

Y si todo esto, la entidad, el registro, la consola del proveedor, la vigilancia desde dentro del muro, es más de lo que quiere montar por su cuenta, es justo el trabajo que hacemos. Cuéntenos en qué punto está: si tiene entidad, cómo va con el ICP, quién es su público, qué aspecto tiene su calendario. Volvemos con una recomendación de alojamiento hecha a la medida de su situación, no con una propuesta de catálogo.
