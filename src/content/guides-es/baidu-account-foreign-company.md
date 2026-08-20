---
title: "Abrir una cuenta de Baidu siendo una empresa extranjera"
subtitle: "Todo el mundo le avisa del número de teléfono chino. Casi nadie menciona el documento de identidad, que es el requisito que de verdad detiene a las empresas extranjeras en la puerta."
summary: "El número de móvil es el obstáculo que todos mencionan. El documento de identidad es el que le frena, y además decide quién es el propietario de la cuenta."
visual: "/images/guides/baidu-account-foreign-company.webp"
order: 27
published: true
publishedAt: 2026-08-18
updatedAt: 2026-08-18
category: Search
---

Antes de poder verificar un sitio, enviar una URL o leer una sola cifra de índice, hace falta una cuenta de Baidu que haya superado la verificación de identidad real (实名认证, shímíng rènzhèng). Esa cuenta no es papeleo que pueda dejarse para más adelante. Desde septiembre de 2023 determina si sus herramientas de envío funcionan siquiera, y es lo más parecido a un registro de propiedad que Baidu conserva sobre su activo de búsqueda.

Calcule un día para la versión sencilla. Varias semanas para la complicada.

## El número de teléfono es el obstáculo famoso

El registro en Baidu funciona por SMS. Los números extranjeros dejaron de funcionar de forma fiable hacia mayo de 2022, y el cambio nunca llegó a anunciarse formalmente.

Lo que ocurre desde entonces es lo bastante irregular como para que probar valga más que planificar. Los números de Hong Kong, Macao y Taiwán funcionan, según los informes disponibles, igual que los de Singapur, Japón, Estados Unidos y Canadá. Los europeos, incluidos los de Alemania, Francia e Italia, no funcionan, aunque un número suizo pasó el año pasado con uno de nuestros clientes. El filtrado de los operadores y las limitaciones por dirección producen fallos silenciosos que se parecen exactamente a un número mal introducido, de modo que un intento fallido informa de muy poco.

Los servicios de números virtuales cubren ese hueco y no pocas agencias los utilizan. También son un riesgo. Los números alquilados se reciclan, los procesos de recuperación dependen del número y una cuenta que no puede recuperar es una cuenta que no le pertenece.

## El documento que de verdad le bloquea

El número de teléfono le da un acceso. La verificación de identidad real es lo que lo convierte en una cuenta operativa, y ahí se detiene la mayoría de las empresas extranjeras.

Baidu admite cuatro documentos personales: el documento de identidad continental, la tarjeta de residencia permanente para extranjeros (外国人永久居留证, wàiguórén yǒngjiǔ jūliú zhèng), el pasaporte de ciudadanos chinos residentes en el extranjero (华侨护照, huáqiáo hùzhào) y el permiso de circulación hacia China continental para residentes de Hong Kong, Macao y Taiwán (港澳台居民来往内地通行证, Gǎng Ào Tái jūmín láiwǎng nèidì tōngxíngzhèng). La documentación de Baidu es tajante sobre todo lo demás:

> 上述外的其他证件暂不支持实名认证
>
> Los documentos distintos de los enumerados arriba no están admitidos por el momento para la verificación de identidad real.
>
> *Fuente: Baidu, documentación sobre verificación de identidad real de cuentas*

Un pasaporte británico, francés, alemán o estadounidense corriente no está en la lista. Esa única línea explica por qué tantas marcas extranjeras acaban tomando prestada una identidad continental, a veces sin ser conscientes de lo que acaban de hacer.

La verificación personal se resuelve después mediante reconocimiento facial o una tarjeta bancaria china. La verificación corporativa exige un código unificado de crédito social (统一社会信用代码, tǒngyī shèhuì xìnyòng dàimǎ), es decir, una empresa china real. También exige el escaneo facial del representante legal o una transferencia desde la cuenta bancaria corporativa.

## Por qué esto dejó de ser opcional en 2023

Si las dos secciones anteriores suenan a trámite administrativo, esta es la que muerde.

Durante años una cuenta sin verificar fue una molestia menor. Y entonces, en el otoño de 2023, Baidu publicó dos avisos con dieciocho días de diferencia.

El primero, a comienzos de septiembre de 2023, restringió las relaciones de verificación de las cuentas que nunca habían completado la verificación de identidad real. El segundo retiró las cuotas de envío a ese mismo grupo, cerró el envío de sitemaps y recortó la asignación diaria de la API de push. Propietarios de sitios que llevaban años enviando URL abrieron la plataforma aquel invierno y encontraron la herramienta desaparecida. No hubo correo de aviso.

Lo que está en juego no es abstracto. Una cuenta sin verificación de identidad real puede perder su capacidad de enviar contenidos y, en algunos casos, perder también la relación de verificación.

Hay un segundo motivo para preocuparse, y es el que termina en la bandeja de entrada de los abogados:

> 实名认证直接影响账号和资源的归属
>
> La verificación de identidad real determina directamente la propiedad de la cuenta y de sus recursos.
>
> *Fuente: Baidu, documentación sobre gestión de cuentas*

Baidu desaconseja a las empresas registrarse bajo la identidad personal de un empleado precisamente por este motivo. La identidad asociada a la cuenta es el registro de propiedad. Todo lo demás es un ajuste de permisos.

## Las vías que sí funcionan

Si tiene una WFOE o una empresa conjunta en China, úsela. La verificación corporativa contra su propio código unificado de crédito social le da una cuenta que controla, personas a las que puede añadir y retirar, y ninguna conversación incómoda cuando termine una relación con una agencia. Cuente con unos días de papeleo, la mayor parte del cual su departamento financiero ya tiene guardado en un cajón.

Si no tiene entidad, la respuesta habitual es que su agencia en China registre la cuenta bajo su propia licencia. Es rápido, es práctica común y es el momento de negociar la salida en lugar de hacerlo tres años después. Baidu no publica ningún procedimiento de transferencia de propiedad. La vía práctica de recuperación consiste en volver a verificar el dominio bajo una cuenta nueva, algo que funciona porque controlar el archivo de verificación equivale a controlar el dominio, pero obliga a reconstruir el histórico.

La tercera vía, registrar la cuenta a nombre de una persona de confianza con identidad continental, es la más frecuente y la más débil. La gente cambia de trabajo. La cuenta se va con ella y no existe ticket de soporte que arregle eso.

## Qué conviene cerrar antes de que alguien pulse registrarse

Esta es la parte que cuesta dinero más adelante si se salta ahora.

Pregunte a nombre de qué identidad se registra la cuenta y obtenga la respuesta por escrito. Pregunte qué ocurre con la cuenta cuando termine el contrato. Y pregunte después si su equipo recibe sus propios accesos de colaborador o una contraseña compartida guardada en alguna hoja de cálculo.

Un acceso de colaborador sobre una cuenta correctamente registrada es la respuesta que quiere oír. Los subusuarios no necesitan su propia verificación de identidad real, así que nadie tiene motivo para compartir credenciales.

Baidu ajusta sus reglas de registro y verificación sin previo aviso, de modo que conviene tratar los informes por países sobre números de teléfono como válidos hoy e inestables mañana.
