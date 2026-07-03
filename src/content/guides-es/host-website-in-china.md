---
title: "Alojar un sitio web en China: la guía completa"
subtitle: "De dónde esté físicamente su servidor depende todo lo demás: que un visitante chino vea su página de inicio en menos de un segundo, o que la abandone ante una ruedecita que gira sin fin."
summary: "Por qué el alojamiento en el extranjero fracasa en China, las reglas del ICP y de la entidad, Alibaba Cloud frente a Tencent Cloud y frente al extranjero, y una lista de comprobación de lanzamiento paso a paso."
visual: "/images/guides/host-website-in-china.webp"
order: 14
published: true
publishedAt: 2026-07-03
updatedAt: 2026-07-03
category: Hosting
---

Su sitio carga sin problemas en todas partes, salvo en el único mercado para el que lo construyó. Ábralo desde Shanghái y a esperar. Y a seguir esperando. Hay veces en que la página no llega a cargar.

Esa diferencia casi siempre se reduce al alojamiento. De dónde esté físicamente su servidor depende que un visitante chino vea su página de inicio en menos de un segundo o que se rinda ante una ruedecita que gira sin fin. Esta guía repasa por qué el alojamiento en el extranjero se rompe dentro de China, qué necesita legalmente antes de poder alojar en el continente, cómo se comparan los grandes proveedores y en qué orden conviene hacerlo todo.

Buena parte de lo que sigue amplía nuestra guía de referencia, Localización de sitios web para China. Si aún no la ha leído, empiece por ahí y vuelva luego a por los detalles del alojamiento.

## Por qué alojar su sitio web en China

Hay tres razones, y se acumulan una sobre otra.

La velocidad, para empezar. Cuando su servidor vive en Virginia o en Fráncfort, cada petición de un usuario chino tiene que cruzar el Gran Cortafuegos (防火长城). Ese cruce no es un salto limpio. El tráfico se estrangula, la negociación SSL expira a mitad de conexión y cualquier script o tipografía que venga de un servicio extranjero bloqueado (el ejemplo de manual es Google Fonts) se queda colgado sin más. La página no falla con estrépito. Se queda ahí, dibujada a medias, hasta que el visitante se marcha.

> Medidos desde Shanghái sobre alojamiento extranjero, los sitios cargan por lo común en 8 a 15 segundos. Trasladados a servidores del continente, esos mismos sitios bajan del segundo.
> Fuente: mediciones de lanzamiento de ChinaWebFoundry, Shanghái.

El SEO, a continuación. Baidu (百度) es el buscador que importa aquí, y tiene por más legítimo un sitio alojado en el continente y registrado en el ICP que uno servido desde el extranjero. Sin un alojamiento local y un registro, Baidu no lo indexará como es debido, por muy pulcro que sea su trabajo on-page.

> Baidu concentra alrededor de la mitad del mercado chino de búsqueda. Google se queda por debajo del 3 %.
> Fuente: Statcounter Global Stats, China, 2024.

El propio Cortafuegos, para terminar. Hasta una instalación extranjera rápida resulta frágil detrás de él. Los plugins que llaman a un extremo bloqueado se rompen sin hacer ruido. Un CDN por el que paga un buen dinero acaba estrangulado en la frontera. Alojar dentro de China le ahorra de golpe toda esa familia de problemas, porque sus recursos ya están del lado bueno del muro.

## Los 3 requisitos legales antes de poder alojar

No basta con alquilar un servidor en el continente y apuntar hacia él su dominio. Tres cosas tienen que estar en su sitio antes, y ninguna admite atajos.

**1. Una entidad mercantil china.** El registro ICP va ligado a una entidad constituida en China. Una empresa extranjera sin presencia local no puede tramitarlo por su cuenta. Si todavía no tiene entidad, no es un callejón sin salida, hay vías para conseguirla, pero es la primera barrera y conviene saberlo desde el principio.

**2. Un dominio, .cn o .com.** El dominio tiene que superar una verificación de identidad real, y el titular registrado debe coincidir al dedillo con la entidad que presenta el registro. Una discrepancia aquí figura entre los motivos más frecuentes de que un expediente se atasque antes siquiera de llegar al regulador.

**3. El propio registro ICP.** Este es el que no se puede esquivar. El ICP Bei'an (备案) es el asiento que todo sitio alojado en el continente debe llevar, bajo la tutela del Ministerio de Industria y Tecnología de la Información (工业和信息化部), el MIIT. A un sitio informativo le basta el Bei'an estándar. Un sitio que hace negocio comercial, con transacciones de verdad, exige la licencia ICP comercial, más completa (经营许可证) y más lenta de obtener.

> El Bei'an ICP estándar suele resolverse en 3 a 22 días hábiles, con una fuerte variación por provincia. Shanghái puede aprobarlo en unos 3 días; Pekín se acerca a menudo a los 15.
> Fuente: documentación de registro de Alibaba Cloud, MIIT.

Un detalle que a muchos se les escapa: dentro de los 30 días siguientes a la puesta en marcha en un alojamiento del continente, presenta además un registro de seguridad pública (公安备案) ante las autoridades locales. Para el recorrido completo del registro, las opciones de entidad y la preparación de documentos, lea nuestra guía dedicada a la licencia ICP. Esta página da por hecho que usted ya sabe que ese trámite le espera.

## Opciones de alojamiento en China: Alibaba Cloud, Tencent Cloud o el extranjero

Hay tres caminos realistas, según tenga ya un ICP o no y según quién sea de verdad su público.

| Opción                | Carga en China      | ICP necesario | SEO en Baidu | Ideal para                             |
| --------------------- | ------------------- | ------------- | ------------ | -------------------------------------- |
| Continente (Aliyun)   | Menos de 1 s        | Sí            | Fuerte       | Una apuesta seria y a largo plazo      |
| Continente (Tencent)  | Menos de 1 s        | Sí            | Fuerte       | Proyectos centrados en WeChat          |
| Hong Kong             | 2 a 4 s             | No            | Mínimo       | Hacer de puente mientras tramita el ICP |
| EE. UU. / Europa      | 8 a 15 s o más      | No            | Nulo         | Nada, si su público es chino           |

**Alibaba Cloud (Aliyun, 阿里云)** es la opción por defecto de la mayoría de las marcas extranjeras que entran en China en serio. El conjunto más amplio de regiones en el continente, una consola en inglés rodada y un sistema de registro que le lleva de la mano por el Bei'an sin salir de la propia plataforma. El atractivo práctico está en la cobertura y en que todo, servidor y registro, vive en un mismo sitio.

**Tencent Cloud (腾讯云)** pisa los talones al primero, y a menudo gana en cuanto el proyecto se apoya en el ecosistema de WeChat (微信), del que está de forma nativa más cerca. El rendimiento iguala al de Aliyun en la misma gama. Lo que inclina la balanza suele ser el encaje con el ecosistema, no la ficha técnica.

**Huawei Cloud (华为云)** es una tercera opción solvente en el continente, sobre todo para equipos ya asentados sobre la infraestructura de Huawei.

**El extranjero, Hong Kong incluido,** se salta por completo el requisito del ICP, y en eso reside todo su atractivo. Hong Kong hace de puente cómodo: con un CDN y una capa de caché decentes puede lograr cargas de 2 a 4 segundos en el continente, sin más, pero a años luz de servir desde Fráncfort. Muchos equipos funcionan sobre Hong Kong mientras avanza su expediente y migran después.

En cuanto al precio, cuidado con leer las tarifas del cloud chino al pie de la letra. Las cifras de gancho que ve, servidores de entrada anunciados por unas pocas decenas de yuanes al año, son tarifas promocionales para clientes nuevos y sobre las máquinas más pequeñas.

> Los servidores cloud de entrada de los grandes proveedores chinos anuncian un primer año en promoción en una horquilla de entre 38 y 200 yuanes aproximadamente. Una configuración de producción real, para un sitio profesional, cuesta bastante más.
> Fuente: tarifas de proveedor publicadas de 2025 a 2026, Aliyun y Tencent Cloud.

La comodidad de uso en inglés también pesa. La consola internacional de Aliyun es la más amable de las tres para un extranjero. Todas dan por supuesto el chino en algunas partes del registro, y eso explica en buena medida por qué los equipos encargan esa pieza a un socio local.

## Acelerarlo: CDN chino y entrega en el borde

Un buen alojamiento en el continente acerca su servidor de origen a los usuarios. Un CDN chino guarda en caché sus archivos estáticos, imágenes, scripts, hojas de estilo, en nodos repartidos por todo el país: así cargan desde unos pocos cientos de kilómetros, en lugar de dar antes el rodeo por el Pacífico.

Alibaba Cloud CDN y Tencent Cloud CDN son las opciones de siempre, y con razón: se emparejan con limpieza con el alojamiento de la casa y están afinados para el enrutamiento del continente.

Aquí está la trampa que pilla a la gente. Un CDN chino no exime del registro. Para servir contenido en caché desde nodos del continente, el dominio del CDN necesita su propia cobertura ICP, igual que el origen. A veces los equipos creen que el CDN les ahorra el Bei'an. No es así. Registro y entrega en el borde van de la mano.

Bien hecho, la recompensa salta a la vista. Imágenes de producto que antes llegaban con cuentagotas cargan en el mismo entorno en el que está sentado su comprador, y una página pesada empieza a sentirse ligera.

## Paso a paso: lanzar su sitio en la China continental

El orden importa, porque cada paso se apoya en el anterior. Adelántese y se queda encallado.

**1. Constituir la entidad.** Confirme que tiene una entidad mercantil registrada en China, o prepare la vía para conseguir una. Nada más arranca mientras esto no exista.

**2. Registrar y verificar el dominio.** Lleve su .cn o su .com a un registrador, supere la verificación de identidad real y asegúrese de que el titular coincide exactamente con la entidad.

**3. Presentar el ICP.** Envíe el Bei'an a través del sistema de su proveedor de alojamiento. El registro informativo estándar es más rápido; la licencia comercial se toma su tiempo, así que planifíquela pronto si vende.

**4. Aprovisionar el alojamiento en el continente.** Levante su servidor en Aliyun, Tencent Cloud o Huawei Cloud, y ajústelo al entorno chino: SSL compatible con China, tipografías autoalojadas, ninguna llamada a terceros bloqueada.

**5. Conectar el CDN.** Añada un CDN chino con su propia cobertura de registro y apunte hacia él sus recursos estáticos.

**6. Presentar el registro de seguridad pública.** Dentro de los 30 días siguientes a la puesta en marcha, complete el 公安备案 ante la autoridad local y añada al pie de página tanto el número ICP como el número de seguridad pública.

**7. Salir en vivo y vigilar desde dentro de China.** Confirme que el sitio carga rápido desde ubicaciones reales del continente, no solo desde un comprobador situado fuera del Cortafuegos, que con gusto le asegurará que todo va bien mientras sus visitantes de Shenzhen miran una pantalla en blanco.

## Elegir el mejor alojamiento chino para su negocio

La configuración correcta depende sobre todo de en qué punto del proceso se encuentra y de qué hace su sitio.

¿Está levantando una presencia seria y a largo plazo, con la búsqueda orgánica dentro del plan? Vaya directo al alojamiento en el continente sobre Aliyun o Tencent Cloud, con un registro en regla. Es la configuración que de verdad posiciona en Baidu y carga como los usuarios chinos esperan.

¿Necesita estar en vivo para ayer y su ICP sigue en trámite? Arranque en Hong Kong a modo de puente, ponga un CDN y caché por delante y planifique la migración al continente en cuanto se apruebe el expediente.

¿Vende, hay transacciones de verdad? Meta la licencia ICP comercial en su calendario desde el primer día, porque es el paso más lento de todos y el que con más frecuencia pilla a un equipo con la guardia baja.

Y si todo esto, la entidad, el registro, la consola en chino, la vigilancia desde dentro del muro, es más de lo que quiere montar por su cuenta, es justo el trabajo que hacemos. Cuéntenos en qué punto está: si tiene entidad, cómo va con el ICP, quién es su público, qué aspecto tiene su calendario. Volvemos con una recomendación de alojamiento hecha a la medida de su situación, no con una propuesta de catálogo.
