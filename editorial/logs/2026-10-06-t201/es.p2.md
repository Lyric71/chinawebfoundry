# ES, pass 2 (native rewrite from the pass 1 Spanish, English not consulted)

## host, line 23 (tail)
- before: ...alojados en un servidor extranjero al que no llega la red del visitante se quedan colgados sin más. Google Fonts es el caso de manual: ...
+ after:  y cualquier script o tipografía alojados en un servidor extranjero fuera del alcance de la red del visitante se quedan colgados sin más. Google Fonts es el ejemplo de manual: responde desde un centro de datos del continente y enmudece en una línea doméstica de Pekín.
why: the relative clause read as a calque; "ejemplo de manual" is the phrase the page already used.

## host, blockquote
+ after:  > Según las mediciones de 21YunBox, `fonts.googleapis.com` atendió las 72 peticiones enviadas desde una instancia de Alibaba Cloud (阿里云) en la región cn-zhangjiakou el 28 de agosto de 2026, y ninguna de las 54 lanzadas desde una línea residencial de China Mobile (中国移动) en Pekín el 30 de agosto.
why: "respondió a 72 de 72" is a spreadsheet; "atendió las 72" and "ninguna de las 54" is how El País writes counts.

## host, Baidu paragraph
+ after:  El SEO, a continuación. Baidu (百度) es el buscador que importa aquí, y solo puede posicionar las páginas que consigue rastrear y cargar desde el continente. Baidu no ha publicado ninguna norma que premie, por sí solos, el alojamiento en el continente o el registro ICP: lo que juega a favor del alojamiento local es el acceso de su rastreador y la velocidad de las páginas en las redes del continente, dos aspectos que pueden comprobarse.
why: "el argumento a favor ... descansa en" was nominal English; "lo que juega a favor" is native.

## vetting, line 41
+ after:  Un WordPress corriente, con su tema y sus plugins, carga sin avisar Google Fonts, Google Maps, reCAPTCHA y, a menudo, scripts de analítica o de pago alojados fuera de China. Algunos están directamente bloqueados. Google Fonts, por su parte, responde o calla según la red del visitante. Cuando una petición no obtiene respuesta, la página no devuelve un error:
why: "una vez instalados" was an English participle clause.

## vetting, line 83
+ after:  ¿Qué scripts alojados fuera de China tendrán que reemplazar en nuestro desarrollo actual?

## woo, table row
+ after:  | Scripts | Google Fonts en conexiones domésticas, reCAPTCHA | Autoalojar o sustituir |

## woo, paragraph + blockquote
+ after:  Primero, los scripts alojados fuera de China. Una tienda por defecto carga sin avisar Google Fonts y reCAPTCHA. En las mediciones que 21YunBox publicó en agosto de 2026, reCAPTCHA no atendió ninguna petición, ni desde un centro de datos del continente ni desde una línea doméstica de Pekín, mientras que Google Fonts respondía al centro de datos y nunca a la línea doméstica. En uno y otro caso, la página se queda colgada, a la espera de una respuesta que no llega.
+ after:  > Según las mediciones de 21YunBox, `www.google.com/recaptcha` no atendió ninguna de las 72 peticiones enviadas desde una instancia de Alibaba Cloud (阿里云) en la región cn-zhangjiakou el 28 de agosto de 2026, ni ninguna de las 18 lanzadas desde una línea residencial de China Mobile (中国移动) en Pekín el 30 de agosto. `fonts.googleapis.com` atendió las 72 en el primer caso y ninguna de las 54 en el segundo.
why: "falló en todas las peticiones" is English-shaped; "ni... ni" carries both failures.

## GFW, line 66
+ after:  `fonts.google.com`, la interfaz de consulta, depende de otro servidor: GreatFire registró interferencias en sus dos últimas pruebas concluyentes, la más reciente del 30 de septiembre de 2026, y lo da por perturbado al 100 %.
why: "lo calificó de perturbado" sounded translated; recording interference is GreatFire's own wording.

## GFW, lines 74 and 76
+ after:  Un enlace a Google Fonts olvidado en la hoja de estilos puede dejar la página en blanco para cualquier visitante cuya red no llegue a responderle.
+ after:  > Un enlace a Google Fonts olvidado en la hoja de estilos puede dejar la página en blanco para cualquier usuario cuya red no llegue a responderle.

## GFW, lines 208 and 216
+ after:  | Sustitución de las dependencias extranjeras |
+ after:  **Sustituir cada dependencia extranjera**
+ after:  Si una apunta a un dominio fuera del alcance de la red de sus visitantes,

## isWP, line 105
+ after:  fonts.google.com, la interfaz donde sus diseñadores eligen los tipos, depende de otro servidor, que 21YunBox no midió. GreatFire registró interferencias en sus dos últimas pruebas concluyentes, la más reciente del 30 de septiembre de 2026, y lo da por perturbado al 100 %.

Step 2 complete.
