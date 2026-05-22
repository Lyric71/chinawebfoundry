---
title: "Alojamiento web en China: todo depende del servidor que elija"
subtitle: "Para un usuario chino, la distancia entre Shanghái y Fráncfort se resume en una sola cosa: la página aparece o no aparece."
summary: "El lugar donde se aloja un sitio determina su velocidad, su posicionamiento en Baidu y su cumplimiento normativo. Comparamos el continente, Hong Kong y el extranjero, y repasamos los proveedores de la nube."
visual: "/images/guides/china-website-hosting-guide.webp"
order: 6
published: true
publishedAt: 2026-04-01
updatedAt: 2026-05-02
category: Hosting
---

En una estrategia web para China, el alojamiento es la decisión que más se subestima. Coloque mal el servidor y la página tardará cinco segundos en cargar, si es que carga. Elija mal el proveedor y se quedará sin las integraciones locales que sus competidores ya usan. El mercado chino de la nube está en manos de empresas nacionales. Cada una está conectada a una parte distinta de la red del país. La ubicación física del servidor tiene tres niveles, con compromisos muy distintos. Y el CDN aquí pesa mucho más que en cualquier otro mercado.

## Los proveedores chinos de la nube

| Proveedor | Cuota de mercado | Punto fuerte |
|---|---|---|
| Alibaba Cloud | 36 a 39 % | Líder nacional, integración con el comercio electrónico |
| Huawei Cloud | 12 a 19 % | Grandes cuentas y sector público |
| Tencent Cloud | 11 a 16 % | Integración con WeChat |
| Baidu Cloud | ~5 % | IA y aprendizaje automático |
| AWS China | ~7 % | Reconocimiento internacional (a través de Sinnet/NWCD) |

El panorama chino de la nube no tiene equivalente fuera del país. AWS y Azure están, pero muy por detrás. Los primeros puestos son de empresas locales. Cada una se apoya en un ecosistema más amplio, y ese ecosistema define sus fortalezas.

Alibaba Cloud domina la categoría, con una cuota del 36 % al 39 %. Si su negocio ya usa el comercio electrónico o los pagos de Alibaba, la elección es obvia. Y si llega a China sin una preferencia clara de ecosistema, Alibaba es la opción más segura. Tiene la documentación más completa, la red de socios más amplia y la plataforma más madura.

Huawei Cloud y Tencent Cloud se disputan el segundo puesto. Huawei tiene del 12 % al 19 % del mercado y se ha hecho fuerte en los proyectos corporativos y en el sector público. Ante empresas estatales u organismos cercanos al gobierno, suele ser la opción esperada. Tencent, con el 11 % al 16 %, es la elección lógica en cuanto la estrategia se apoya en los miniprogramas de WeChat o en QQ. Su integración con WeChat lo convierte en la opción por defecto de cualquier empresa construida en torno a esa plataforma.

Baidu Cloud ocupa un nicho. Tiene cerca del 5 % del mercado y se centra en la inteligencia artificial y el aprendizaje automático. Tiene sentido para una infraestructura muy orientada a la IA. Rara vez es el punto de partida de un alojamiento convencional.

Queda AWS China. Las empresas extranjeras acuden a él por inercia, porque el nombre les suena. Tiene cerca del 7 % del mercado y lo operan los socios locales Sinnet y NWCD. Aquí hay que ir con cuidado. AWS China es una entidad distinta de AWS global: cuentas separadas, facturación separada, cumplimiento separado. La cuenta de AWS global que usted ya tiene no le sirve aquí.

> AWS China es una entidad distinta de AWS global, con cuentas, facturación y cumplimiento separados. No dé por sentado que es el mismo producto.

Las empresas que confunden las dos cosas lo descubren al pasar a producción.

## China continental, Hong Kong o el extranjero

| | China continental | Hong Kong | Extranjero (EE. UU./UE) |
|---|---|---|---|
| **Tiempo de carga** | Menos de un segundo | 50 a 150 ms de latencia | 300 a 500 ms o más de latencia |
| **ICP obligatorio** | Sí | No | No |
| **Ventaja SEO en Baidu** | Sí | No | No |
| **Cumplimiento de la PIPL** | Sí | No | No |
| **Riesgo del Gran Cortafuegos** | Ninguno | Bajo | Alto (pérdida de paquetes y bloqueo) |

La ubicación física de los servidores condiciona todo lo demás: el proveedor, la configuración del CDN, la estrategia en Baidu. Un error aquí no se arregla después.

**China continental** es la opción acertada si una empresa se dirige en serio a los usuarios chinos. Las páginas cargan en menos de un segundo. Baidu lo lee como una señal de confianza. Y la PIPL lo exige. Sí, la licencia ICP pasa a ser obligatoria, pero el registro Bei'an está al alcance de casi cualquier empresa extranjera. Si su audiencia está en China, sus servidores también deberían estarlo.

> Un sitio alojado en China continental carga en menos de un segundo. Uno alojado en el extranjero parte ya de 300 a 500 milisegundos de latencia, incluso antes de que el Gran Cortafuegos entre en juego.

**Hong Kong** funciona como trampolín. No exige ICP. La latencia hacia el continente es de 50 a 150 milisegundos. Es una opción aceptable para las empresas que tantean el mercado antes de un registro ICP completo. También permite servir un mismo sitio a un público chino e internacional desde un solo punto. Pero el compromiso se nota: la solución muestra sus límites en cuanto hay que posicionar en Baidu o cumplir la PIPL.

Queda **el alojamiento en Estados Unidos o Europa**. Es la vía de quienes quieren evitar el ICP, y la factura es alta. La latencia parte de 300 a 500 milisegundos. El Gran Cortafuegos añade su propia pérdida de paquetes, y existe el riesgo de un bloqueo total. El sitio no envía ninguna señal de confianza a Baidu. No cumple la PIPL. Y carga tan despacio que la mayoría de los usuarios chinos cierra la pestaña antes de ver la página. Alojar en Fráncfort para servir a Shenzhen es perder a los visitantes antes de la página de inicio.

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

**ChinaCache** es el decano de los CDN en China. Lleva más tiempo en marcha que la mayoría de las soluciones en la nube. Tiene una amplia red doméstica, buena cobertura y mucha experiencia sobre el terreno.

**La red de Cloudflare China** funciona a través de una alianza con JD Cloud. Da a los clientes de Cloudflare de todo el mundo una vía de entrada a China, con una condición: contratar un plan empresarial. No existe registro de autoservicio.
