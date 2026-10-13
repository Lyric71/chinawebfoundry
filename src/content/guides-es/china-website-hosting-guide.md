---
title: "Alojamiento en China: el servidor lo decide todo"
subtitle: "Para un usuario chino, la distancia entre Shanghái y Fráncfort se resume en una sola cosa: la página aparece o no aparece."
summary: "La ubicación del servidor decide cómo carga un sitio en China y si necesita un registro ICP. Comparamos el continente, Hong Kong y el extranjero."
visual: "/images/guides/china-website-hosting-guide.webp"
order: 6
published: true
publishedAt: 2026-04-01
updatedAt: 2026-10-13
category: Hosting
---

En una estrategia web para China, el alojamiento es la decisión que más se subestima, y pesa más sobre la velocidad de carga que [cualquier ajuste que usted haga dentro de un WordPress](/es/wordpress-en-china/). Con el servidor en el lugar equivocado, la página se arrastra, si es que llega a cargar. Elija mal el proveedor y se quedará sin las integraciones locales que sus competidores ya usan. El mercado chino de la nube está en manos de empresas nacionales. Cada una está conectada a una parte distinta de la red del país. La ubicación física del servidor se plantea en tres niveles, cada uno con sus compromisos. Y aquí el CDN pesa mucho más que en cualquier otro mercado.

## Los proveedores chinos de la nube

| Proveedor | Cuota de mercado | Punto fuerte |
|---|---|---|
| Alibaba Cloud | 36 a 39 % | Líder nacional, integración con el comercio electrónico |
| Huawei Cloud | 12 a 19 % | Grandes cuentas y sector público |
| Tencent Cloud | 11 a 16 % | Integración con WeChat |
| Baidu Cloud | ~5 % | IA y aprendizaje automático |
| AWS China | ~7 % | Reconocimiento internacional (a través de Sinnet/NWCD) |

El panorama chino de la nube no tiene equivalente fuera del país. AWS y Azure están, pero muy por detrás. Los primeros puestos son de empresas locales. Cada una se apoya en un ecosistema más amplio, y de ahí salen sus fortalezas.

Alibaba Cloud domina la categoría, con una cuota del 36 % al 39 %. Si su negocio ya usa el comercio electrónico o los pagos de Alibaba, la elección es obvia. Y si llega a China sin una preferencia clara de ecosistema, Alibaba es la opción más segura. Tiene la documentación más completa, la red de socios más amplia y la plataforma más madura.

Huawei Cloud y Tencent Cloud se disputan el segundo puesto. Huawei tiene del 12 % al 19 % del mercado y se ha hecho fuerte en los proyectos corporativos y en el sector público. Ante empresas estatales u organismos cercanos al gobierno, suele ser la opción esperada. Tencent, con el 11 % al 16 %, es la elección lógica en cuanto la estrategia se apoya en los miniprogramas de WeChat o en QQ. Su integración con WeChat lo convierte en la opción por defecto de cualquier empresa construida en torno a esa plataforma.

Baidu Cloud ocupa un nicho. Ronda el 5 % del mercado y se centra en la inteligencia artificial y el aprendizaje automático. Tiene sentido para una infraestructura muy orientada a la IA. Rara vez es el punto de partida de un alojamiento convencional.

Queda AWS China. Las empresas extranjeras acuden a él por inercia, porque el nombre les suena. Tiene cerca del 7 % del mercado y lo operan los socios locales Sinnet y NWCD. Aquí hay que ir con cuidado. AWS China es una entidad distinta de AWS global: cuentas separadas, facturación separada, cumplimiento separado. La cuenta de AWS global que usted ya tiene no le sirve aquí.

> AWS China es una entidad distinta de AWS global, con cuentas, facturación y cumplimiento separados. No dé por sentado que es el mismo producto.

Las empresas que confunden las dos cosas lo descubren al pasar a producción.

## China continental, Hong Kong o el extranjero

| | China continental | Hong Kong | Extranjero (EE. UU./UE) |
|---|---|---|---|
| **Las peticiones cruzan la frontera** | No | Sí | Sí |
| **ICP obligatorio** | Sí | No | No |
| **Cumplimiento de la PIPL** | Sí | No | No |
| **Riesgo del Gran Cortafuegos** | Ninguno | Bajo | Alto (pérdida de paquetes y bloqueo) |

La ubicación física de los servidores condiciona todo lo demás: el proveedor, la configuración del CDN, la estrategia en Baidu. Un error aquí no se arregla después.

**China continental** es la respuesta correcta para una empresa que quiere llegar en serio al usuario chino. Las peticiones no salen del país, y la PIPL obliga en cualquier caso a este tipo de alojamiento. Antes, eso sí, hay que obtener un registro ICP (ICP备案) a nombre de una sociedad inscrita en el continente. Si su público está en China, sus servidores también deben estar allí.

> Chinafy analizó 614 sitios internacionales desde Pekín, Virginia y Londres: dos de cada tres no llegaron a cargar en China, y en Pekín el tiempo hasta el primer byte fue entre 4 y 4,5 veces mayor que en Estados Unidos o el Reino Unido.
> Fuente: Chinafy, China Website Performance Benchmarks 2026, 14 de abril de 2026 (estudio publicado por un proveedor).

**Hong Kong** sirve de trampolín. No exige ICP y está a las puertas del continente, lo que hace de esta vía una opción razonable para la empresa que quiere tantear el mercado antes de emprender un registro ICP completo. También permite atender desde un único punto a un público chino e internacional. Pero se trata de un compromiso, y conviene asumirlo: si el público está sobre todo en el continente, no pasa de ser una solución provisional.

Queda **el alojamiento en Estados Unidos o Europa**, la vía de quienes quieren esquivar el ICP, y la factura es alta. Cada petición tiene que cruzar la frontera, el Gran Cortafuegos añade su propia pérdida de paquetes y el riesgo de un bloqueo total es real. Tampoco permite cumplir la PIPL, y las páginas cargan tan despacio que muchos visitantes cierran la pestaña antes de verlas. Alojar en Fráncfort para atender a Shenzhen equivale a perder a los visitantes antes de que lleguen a la página de inicio.

## Los CDN que funcionan realmente en China

| Proveedor | Ventaja principal |
|---|---|
| Alibaba Cloud CDN | La mayor red de PoP en China, ecosistema Alibaba |
| Tencent Cloud CDN | Ideal para servicios conectados a WeChat y QQ |
| ChinaCache | Pionero local, amplia red doméstica |
| Cloudflare China | A través de la alianza con JD Cloud, exige plan empresarial |

Un CDN no compensa una mala decisión de alojamiento. Pero en China sí puede decidir si un sitio aparece o no. El criterio decisivo es uno: tener puntos de presencia instalados en China continental. Un CDN global sin PoP en el país no resuelve nada.

> El criterio que decide la calidad de un CDN en China es uno solo: tener puntos de presencia físicamente situados en el continente. El resto es secundario.

**Alibaba Cloud CDN** tiene la red de PoP más extensa del país y se conecta con el ecosistema de Alibaba. Para un cliente que ya está en Alibaba Cloud, la elección es inmediata.

**Tencent Cloud CDN** se impone en cuanto los servicios están vinculados a WeChat o a QQ. Su integración con las plataformas de mensajería de Tencent gestiona ese tráfico mejor que cualquier alternativa.

**ChinaCache** es el decano de los CDN en China. Lleva en marcha más tiempo que la mayoría de las soluciones en la nube. Tiene una amplia red doméstica y mucha experiencia sobre el terreno.

**La red de Cloudflare China** funciona a través de una alianza con JD Cloud. Da a los clientes de Cloudflare de todo el mundo una vía de entrada a China, con una condición: contratar un plan empresarial. No existe registro de autoservicio.
