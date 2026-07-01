---
title: "WooCommerce en China: montar una tienda que venda"
subtitle: "Una tienda WooCommerce estándar pierde al comprador chino antes de que pague. Así se corrigen los pagos, la logística, la velocidad del proceso de compra y la conformidad ICP en el mercado continental."
summary: "En su versión estándar, WooCommerce falla ante los compradores chinos: scripts bloqueados, sin Alipay ni WeChat Pay, pago lento. Aquí se explica cómo corregir los pagos, la logística, la velocidad y la conformidad ICP."
visual: "/images/guides/woocommerce-china-store-guide.webp"
order: 12
published: true
publishedAt: 2026-07-01
category: Technology
---

En Fráncfort o Chicago, su tienda WooCommerce funciona sin un solo tropiezo. Ábrala desde Shanghái y se vuelve casi inservible. El mismo tema, los mismos plugins. Y aun así, el pago se congela, las imágenes de producto no cargan nunca y falta el único botón de pago que importa.

Para un comprador chino, eso no es una molestia menor. Es el motivo por el que cierra la pestaña. WooCommerce funciona muy bien en China. Dirigido tal cual a un público occidental, no.

Esta guía da por hecho que ya ha leído nuestra guía de referencia, Localizar un sitio web para China. Todo parte de esa base, así que empiece por ahí si aún no lo ha hecho.

## WooCommerce en China de un vistazo

| Ámbito | Qué falla por defecto | La solución |
| ---------- | ------------------------------------------ | ------------------------------ |
| Scripts | Google Fonts, reCAPTCHA y el JS de Stripe bloqueados | Autoalojar o sustituir |
| Pagos | Solo Visa y Mastercard | Alipay + WeChat Pay + UnionPay |
| Velocidad | Alojamiento en el extranjero, sin CDN | Alojamiento continental, CDN de imágenes en China |
| Direcciones | Orden de campos occidental rechazado | De la provincia al distrito |
| Conformidad | Sin ICP y sin señales de confianza | Registro ICP, pruebas locales |

## Por qué fallan las tiendas WooCommerce estándar

Fallan tres cosas, y casi siempre a la vez.

Primero, los scripts bloqueados. Una tienda por defecto carga sin avisar Google Fonts, reCAPTCHA y, muchas veces, el JavaScript de Stripe. Todos quedan al otro lado del Gran Cortafuegos, bloqueados o ralentizados. La página se queda colgada, a la espera de una respuesta que no llega.

Segundo, la lentitud del pago. Aloje la tienda en Europa o Estados Unidos y cada acción del carrito hace un viaje de ida y vuelta lento a través del Cortafuegos. El comprador chino no se queda esperando a que gire el icono de carga.

Tercero, la falta de pago local. Muestre solo Visa y Mastercard y habrá cerrado la tienda a casi todo el continente antes de que nadie saque la tarjeta.

> Juntos, Alipay y WeChat Pay procesan más del 90 % de los pagos móviles de China. En el primer trimestre de 2025 sumaban entre los dos cerca del 96 % del mercado.

## Configurar pagos adaptados a China

Este es el punto que decide si tiene una tienda o no tiene nada.

Alipay (支付宝) y WeChat Pay (微信支付) no se discuten. UnionPay (银联) es un tercer método útil para compradores mayores y empresas. Las tarjetas de crédito quedan como respaldo para el comprador transfronterizo ocasional, y poco más.

| Medio de pago | Quién lo usa |
| --------------------- | ------------------------------------- |
| WeChat Pay (微信支付) | Compra diaria, móvil, redes sociales |
| Alipay (支付宝) | Comercio en línea, transfronterizo, servicios |
| UnionPay (银联) | Clientes mayores y empresas |
| Visa / Mastercard | Solo el comprador extranjero de paso |

Fije los precios en RMB, con el símbolo ¥, establecidos en origen y no convertidos en directo desde el dólar al pagar. Un total que fluctúa con el tipo de cambio siembra desconfianza. Para la pasarela hay dos caminos: una cuenta de comerciante directa con Alipay y Tenpay, la pasarela de WeChat Pay, que exige una entidad jurídica china, o un agregador que asume la integración por usted. Existen plugins de WooCommerce para ambos. La vía directa liquida de forma más limpia y sale más barata a medida que crece el volumen.

Dos detalles pasan factura más adelante. El reembolso tiene que volver por el mismo monedero con el que pagó el comprador, así que prevéalo pronto en su flujo de devoluciones. Y muchas tiendas alojan también el pago dentro de un Miniprograma de WeChat (小程序), y mantienen toda la compra dentro de la aplicación en la que ya vive la mayoría de los compradores.

## Logística, envíos y fiscalidad

Empiece por el modelo de dirección. En China la dirección baja de la provincia a la ciudad, al distrito y luego a la calle, al revés que en Occidente. Sus campos y sus reglas de validación tienen que coincidir, o los transportistas devuelven la etiqueta al momento.

Para la entrega nacional, conecte un transportista local como SF Express (顺丰) en lugar de acoplar tarifas de DHL a un carrito chino. Enviar desde fuera del continente también cambia el escenario fiscal. El comercio electrónico transfronterizo a través de un almacén aduanero gestiona los trámites y los aranceles con mucha más previsibilidad que despachar paquete a paquete, algo que puede dejar pedidos varados durante semanas. Bajo ese modelo, el pedido tributa a un tipo integral en vez del arancel completo del comercio general, lo que suele salir más barato para el comprador. Un detalle que se pasa por alto: los mensajeros del continente suelen llamar antes de entregar, así que cada pedido necesita un número de teléfono real y localizable.

## Optimizar la velocidad y la fiabilidad del pago

Quite de las plantillas de carrito y de pago todos los recursos bloqueados. Autoaloje sus tipografías, cambie reCAPTCHA por una alternativa conforme y retire cualquier etiqueta de analítica extranjera. Sirva las imágenes de producto desde una CDN en China, para que carguen en el mismo entorno en el que está el comprador. Después, diseñe el proceso pensando primero en el móvil, donde está casi todo el tráfico.

> Más del 95 % de los internautas chinos compran desde el teléfono. Un proceso de pago pensado para el escritorio es uno que la mayoría no terminará nunca.

## Conformidad y señales de confianza

Una tienda alojada en el continente necesita un registro ICP (Bei'an), igual que cualquier otro sitio. Una tienda comercial suele entrar en la categoría de ICP comercial, con normas de titularidad que conviene revisar pronto.

Más allá de la licencia, el comprador repasa unas cuantas señales antes de fiarse de un carrito: un número ICP en el pie de página, una línea telefónica continental, atención al cliente por WeChat (微信) y reseñas reales de otros clientes chinos. Sin eso, incluso una tienda rápida y bien construida sigue pareciendo extranjera, y lo extranjero se sigue leyendo como un riesgo.

## ¿Necesita una tienda WooCommerce pensada para China?

ChinaWebFoundry monta tiendas WooCommerce listas para China, desde los pagos y la logística hasta el alojamiento y la conformidad. Si todo esto es más de lo que quiere configurar por su cuenta, escríbanos.
