---
title: "Alojamiento web en China: todo depende del servidor que elija"
subtitle: "Para un internauta chino, la distancia entre Shanghái y Fráncfort no se mide en milisegundos. Se reduce a una sola cosa: la página aparece o no aparece."
summary: "El lugar donde se aloja un sitio chino determina la velocidad, el posicionamiento en Baidu y el cumplimiento normativo. Comparativa entre el continente, Hong Kong y el extranjero, con un repaso de los proveedores de la nube."
visual: "/images/guides/china-website-hosting-guide.webp"
order: 6
published: true
publishedAt: 2026-04-01
updatedAt: 2026-05-02
category: Hosting
---

En cualquier estrategia web orientada a China, el alojamiento es la decisión más subestimada. Coloque mal el servidor y la página tardará 5 segundos en cargar, si es que carga. Elija mal el proveedor y se quedará fuera de integraciones del ecosistema local que sus competidores ya están aprovechando. El mercado chino de la nube está en manos de actores nacionales, cada uno conectado a una porción distinta de la red china. La cuestión de la ubicación física se reparte en 3 niveles con compromisos muy diferentes. Y el CDN pesa aquí mucho más que en cualquier otro sitio.

## Los proveedores chinos de la nube

| Proveedor | Cuota de mercado | Punto fuerte |
|---|---|---|
| Alibaba Cloud | 36 a 39 % | Líder nacional, integración con el comercio electrónico |
| Huawei Cloud | 12 a 19 % | Grandes cuentas y sector público |
| Tencent Cloud | 11 a 16 % | Integración con WeChat |
| Baidu Cloud | ~5 % | IA y aprendizaje automático |
| AWS China | ~7 % | Reconocimiento internacional (a través de Sinnet/NWCD) |

El panorama chino de la nube no tiene equivalente fuera del país. AWS y Azure están presentes, pero quedan muy por detrás. Los primeros puestos los ocupan los actores locales, cada uno apoyado en un ecosistema más amplio que define sus fortalezas.

Alibaba Cloud domina la categoría. Entre el 36 y el 39 % del mercado. Para cualquier negocio ya conectado a la maquinaria del comercio electrónico o de los pagos de Alibaba, la elección se impone por sí sola. Para una empresa que aterriza en China sin una preferencia de ecosistema marcada, Alibaba es la apuesta segura: la documentación más completa, la red de socios más densa y la plataforma más madura.

Huawei Cloud y Tencent Cloud se disputan el segundo puesto. Huawei, entre el 12 y el 19 %, se ha hecho un hueco en los proyectos corporativos y en el sector público. Ante interlocutores de empresas estatales u organismos cercanos al gobierno, Huawei suele ser la opción esperada. Tencent, entre el 11 y el 16 %, se vuelve el reflejo natural en cuanto una estrategia se apoya en los miniprogramas de WeChat o en los servicios de QQ. Su integración con WeChat lo convierte en la opción por defecto de cualquier empresa que se construya en torno a esa plataforma.

Baidu Cloud ocupa un nicho. Alrededor del 5 % del mercado, centrado en la inteligencia artificial y el aprendizaje automático. Tiene sentido para una infraestructura técnica muy orientada a la IA. Rara vez es el punto de partida para un alojamiento convencional.

Queda AWS China. Las empresas extranjeras acuden a él por inercia, porque el nombre les resulta familiar. Cerca del 7 % del mercado, operado por los socios locales Sinnet y NWCD. Conviene tener cuidado: AWS China es una entidad totalmente distinta de AWS global. Cuentas separadas. Facturación separada. Cumplimiento separado. La cuenta de AWS global que ya tiene no le da ningún acceso aquí.

> AWS China es una entidad totalmente distinta de AWS global. Cuentas diferentes, facturación diferente, cumplimiento diferente. No dé por sentado que es el mismo producto.

Las empresas que cometen esta confusión lo descubren en el momento de la puesta en producción.

## China continental, Hong Kong o el extranjero

| | China continental | Hong Kong | Extranjero (EE. UU./UE) |
|---|---|---|---|
| **Tiempo de carga** | Menos de un segundo | 50 a 150 ms de latencia | 300 a 500 ms o más de latencia |
| **ICP obligatorio** | Sí | No | No |
| **Ventaja SEO en Baidu** | Sí | No | No |
| **Cumplimiento de la PIPL** | Sí | No | No |
| **Riesgo del Gran Cortafuegos** | Ninguno | Bajo | Alto (pérdida de paquetes y bloqueo) |

La ubicación física de los servidores condiciona todo lo demás: el proveedor, la configuración del CDN, la estrategia en Baidu. Un error en esta fase no se corrige más adelante en la cadena.

**China continental** es la respuesta correcta en cuanto se apunta en serio a los usuarios chinos. Carga en menos de un segundo. Baidu lo interpreta como una señal de confianza. La PIPL lo exige. La licencia ICP pasa a ser obligatoria, cierto, pero el trámite de Bei'an está al alcance de la mayoría de las empresas extranjeras. Si su audiencia está en China, sus servidores también deben estarlo.

> Un sitio alojado en China continental carga en menos de un segundo. Un sitio alojado en el extranjero arranca ya con 300 a 500 ms de latencia, incluso antes de que el Gran Cortafuegos entre en juego.

**Hong Kong** cumple el papel de trampolín. Sin ICP, con una latencia de 50 a 150 milisegundos hacia el continente, es una opción aceptable para las empresas que tantean el mercado antes de afrontar un trámite ICP completo. También sirve para ofrecer un mismo sitio a un público chino e internacional desde un único punto. Hay que asumir el compromiso: la solución se desgasta en cuanto se busca posicionar en Baidu o cumplir con la PIPL.

Por último, **el alojamiento desde Estados Unidos o Europa**. La opción de quienes quieren evitar el ICP. La factura es alta. Latencia de 300 a 500 milisegundos como mínimo. El Gran Cortafuegos suma su propia capa de pérdida de paquetes. Y existe el riesgo de un bloqueo total. Ninguna señal de confianza para Baidu, ningún cumplimiento de la PIPL y unos tiempos de carga tan lentos que la mayoría de los usuarios chinos cerrarán la pestaña antes de que la página aparezca. Alojar en Fráncfort para servir a Shenzhen equivale a perder a los visitantes antes incluso de la página de inicio.

## Los CDN que funcionan de verdad en China

| Proveedor | Ventaja principal |
|---|---|
| Alibaba Cloud CDN | La mayor red de PoP en China, ecosistema Alibaba |
| Tencent Cloud CDN | Ideal para servicios conectados a WeChat y QQ |
| ChinaCache | Pionero local, amplia red doméstica |
| Cloudflare China | A través de la alianza con JD Cloud, exige plan empresarial |

Un CDN no compensa una mala decisión de alojamiento. En China, sin embargo, puede determinar si un sitio aparece o no. El criterio que lo decide: puntos de presencia físicamente instalados en China continental. Un CDN global sin PoP en China no resuelve nada.

> El criterio del CDN que lo decide: puntos de presencia físicamente situados en China continental. Lo demás es secundario.

**Alibaba Cloud CDN** reúne la red de PoP más extensa del país y se conecta directamente con el ecosistema de Alibaba. Para un cliente que ya está en Alibaba Cloud, la elección se hace sola.

**Tencent Cloud CDN** se impone en cuanto los servicios están vinculados a WeChat o QQ. La integración con las plataformas de mensajería de Tencent gestiona ese tráfico mejor que cualquier otra oferta.

**ChinaCache** es el decano del CDN en China. Lleva en funcionamiento más tiempo que la mayoría de las soluciones en la nube. Amplia red doméstica, cobertura extensa y una sólida experiencia sobre el terreno.

**La red de Cloudflare China** funciona a través de una alianza con JD Cloud. Ofrece a los clientes de Cloudflare a escala global una vía de entrada a China, con una condición: contar con un plan empresarial. No hay registro de autoservicio.
