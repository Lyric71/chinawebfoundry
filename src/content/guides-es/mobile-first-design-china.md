---
title: "Diseño para móvil en China: cuando el mobile-first ya no es suficiente"
subtitle: "En China, el diseño centrado en el móvil ya ha quedado atrás. Más del 95 % de los usuarios se conecta desde el teléfono, y un sitio que no esté pensado para el móvil sencillamente no existe."
summary: "Internet en China es un entorno exclusivamente móvil. Repasamos los principios de diseño, la compatibilidad con el navegador de WeChat, el ecosistema de las superaplicaciones y la estrategia de miniprogramas para las marcas extranjeras."
visual: "/images/guides/mobile-first-design-china.webp"
order: 9
published: true
publishedAt: 2026-04-01
updatedAt: 2026-05-02
category: Design
---

China tiene 1.300 millones de usuarios de internet, casi todos con el teléfono en la mano. 969 millones pagan escaneando un código QR. WeChat absorbe por sí solo el 34 % de todo el tráfico de internet del país. China no pasó por la era del ordenador de escritorio como Occidente: saltó directamente al móvil. Lo que los usuarios chinos esperan de una experiencia móvil y lo que ofrece la mayoría de las empresas extranjeras no se parece en nada. Diseñar primero para el escritorio y añadir después puntos de ruptura adaptables es construir para una internet que los chinos dejaron atrás hace años.

## La internet móvil china en cifras

Estos son los datos de hoy, sin proyecciones.

| Indicador | Valor |
|---|---|
| Usuarios de internet en China | 1.300 millones (91,6 % de penetración) |
| Cobertura de banda ancha móvil | 100 % (3G/4G/5G) |
| Usuarios activos mensuales de WeChat | 1.481 millones |
| Usuarios de miniprogramas de WeChat | 949 millones (90 % de WeChat) |
| Usuarios del pago móvil | 969 millones (96 % de los adultos) |
| Mercado del pago móvil | 15.860 millones de dólares hoy, 78.230 millones en 2030 (TCAC del 37,59 %) |
| Cuota de WeChat en el tráfico de internet chino | 34 % |

En 2025, China cuenta con 1.300 millones de usuarios de internet, el 91,6 % de la población. La cobertura de banda ancha móvil llega al 100 % en 3G, 4G y 5G. Más del 95 % de los usuarios accede a internet primero desde el teléfono.

WeChat reúne 1.481 millones de usuarios activos al mes. 949 millones de ellos usan los miniprogramas, el 90 % de su base. El tráfico de datos de WeChat acapara el 34 % de toda la internet china.

> WeChat reúne 1.481 millones de usuarios activos al mes y concentra el 34 % de todo el tráfico de internet del país. Es la plataforma donde se decide buena parte de la internet china.

En los pagos, las cifras impresionan. El pago móvil tiene 969 millones de usuarios, el 96 % de los adultos chinos. El mercado mueve 15.860 millones de dólares y se prevé que llegue a 78.230 millones en 2030, a un ritmo anual compuesto del 37,59 %. En China, el pago móvil ya es la norma.

## Los principios de diseño que importan

| Principio | Especificación |
|---|---|
| Enfoque | Solo móvil (más del 95 % de usuarios móviles) |
| Navegador prioritario para probar | Navegador integrado de WeChat (WebKit antiguo) |
| Zonas táctiles | 44x44 px como mínimo, 48x48 px óptimo, 8 px de separación |
| Ubicación de los CTA | Tercio inferior de la pantalla (zona del pulgar) |
| Navegación | Desplazamiento vertical como patrón principal |
| Flujo de pago | Pago con código QR (Alipay o WeChat Pay) |

Diseñar para el móvil en China no tiene nada que ver con el diseño adaptable occidental. Las expectativas son más altas. El contexto de navegación es distinto. Y el navegador dominante es el que viene integrado en WeChat. Chrome y Safari quedan en minoría.

El cambio de mentalidad es radical: hay que diseñar solo para el móvil. Si más del 95 % de los usuarios está en el teléfono, la pantalla del teléfono es el producto. Las empresas que diseñan primero para el escritorio y luego comprimen el resultado trabajan al revés. Y se nota.

El navegador integrado de WeChat es la gran fuente de confusión. Usa una versión antigua de WebKit. Reglas de CSS y de JavaScript que funcionan en los navegadores modernos pueden fallar dentro de él. Probar solo en Chrome y Safari es no probar con los usuarios reales. Hay que abrir el sitio en el navegador de WeChat y comprobarlo todo allí.

Las zonas táctiles necesitan al menos 44 por 44 píxeles, idealmente 48 por 48, con 8 píxeles de separación. Tome esa medida como un mínimo. Los botones pequeños, pensados para el cursor de un ratón, no funcionan cuando alguien navega con el pulgar en un metro lleno en hora punta.

Las llamadas a la acción principales van en el tercio inferior de la pantalla. Es la zona que el pulgar alcanza por sí solo, con el teléfono en una mano. Un CTA en la parte alta obliga a cambiar el agarre o a usar las dos manos. Es una fricción pequeña, pero fricción. Y las conversiones lo acusan.

El desplazamiento vertical es el estándar. Los usuarios chinos pasan el día deslizando flujos verticales en WeChat, Douyin y Weibo. Los desplazamientos horizontales, los menús de hamburguesa y las estructuras anidadas les resultan ajenos e incómodos.

Para el pago, el estándar es un código QR que abre Alipay o WeChat Pay. Así se paga desde el teléfono en China. Si su proceso de compra obliga a teclear a mano los 16 dígitos de una tarjeta, los usuarios ya se han marchado.

> El pago con código QR a través de Alipay o WeChat Pay es el estándar. Un proceso de compra que pide teclear el número de una tarjeta exige a los usuarios chinos un gesto que abandonaron hace años.

## El ecosistema de las superaplicaciones

Los usuarios chinos viven dentro de aplicaciones que lo hacen todo. Abrir un navegador web, al estilo occidental, es minoritario.

WeChat, Alipay y Meituan son los tres ejemplos de referencia. Cada una es una superaplicación: reúne mensajería, comercio, pagos y servicios en una sola plataforma. WeChat es a la vez navegador, monedero, fuente de noticias, escaparate y plataforma de miniprogramas. Alipay se ocupa de la parte financiera. Meituan cubre el reparto de comida, la reserva de hoteles y los servicios de proximidad.

Los miniprogramas han sustituido en gran parte a las aplicaciones nativas en las tareas del día a día. En vez de descargar una aplicación de la App Store, el usuario abre un miniprograma dentro de WeChat o de Alipay. Los usan 949 millones de personas. Para pedir comida, reservar un coche, registrarse en un hotel o comprar un producto, el miniprograma es la vía esperada. Descargar una aplicación aparte queda como segunda opción.

> 949 millones de personas usan los miniprogramas de WeChat. Para la mayoría de las tareas cotidianas, el miniprograma es el producto, y la descarga desde la App Store queda como segunda opción.

Las expectativas dentro de estas plataformas son implacables. El usuario da por sentado el pago instantáneo, sin teclear la tarjeta. Da por sentado el inicio de sesión automático con el SSO de WeChat. Y da por sentado poder compartir con contactos y grupos en un gesto. Años de experiencias fluidas lo han vuelto alérgico a cualquier paso de más. A la mínima fricción, abandona.

| Capa | Función |
|---|---|
| Sitio web móvil adaptable | SEO en Baidu y visibilidad en la búsqueda orgánica |
| Miniprograma de WeChat | Comodidad y descubrimiento dentro de la aplicación |
| Aplicación nativa | Solo si el producto lo exige |

Para las marcas extranjeras, la mayoría de los equipos termina en la misma configuración: un sitio web móvil adaptable para posicionar en Baidu, un miniprograma de WeChat para la comodidad dentro de la aplicación y una aplicación nativa solo si el producto la justifica. Casi ninguna marca necesita esa aplicación. El sitio móvil y el miniprograma cubren lo esencial de lo que un usuario chino espera de una marca.
