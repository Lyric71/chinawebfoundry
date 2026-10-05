# ES, pass 1 (humanised native translation, every changed passage rewritten from scratch)

## host-website-in-china, line 23 (tail) + new blockquote
y cualquier script o tipografía alojados en un servidor extranjero al que no llega la red del visitante se quedan colgados sin más. Google Fonts es el caso de manual: responde desde un centro de datos del continente y enmudece en una línea doméstica de Pekín.

> En las pruebas de 21YunBox, `fonts.googleapis.com` respondió a 72 de 72 peticiones desde una instancia de Alibaba Cloud (阿里云) en cn-zhangjiakou el 28 de agosto de 2026, y a 0 de 54 desde una línea residencial de China Mobile (中国移动) en Pekín el 30 de agosto de 2026.
> Fuente: 21YunBox, A Day of Third-Party Requests From Inside China, agosto de 2026. URL

## host-website-in-china, undated latency blockquote
Suprimido (sin traducción).

## host-website-in-china, Baidu paragraph
El SEO, a continuación. Baidu (百度) es el buscador que importa aquí, y solo puede posicionar las páginas que logra rastrear y cargar desde el continente. Baidu no publica ninguna norma que premie por sí mismo un alojamiento en el continente o un registro ICP, de modo que el argumento a favor del alojamiento local descansa en el acceso del rastreador y en la velocidad de las páginas desde las redes del continente, y ambas cosas se pueden comprobar.

## vetting-a-wordpress-agency-china, line 41 (changed sentences)
Un WordPress corriente, una vez instalados el tema y los plugins, carga sin avisar Google Fonts, Google Maps, reCAPTCHA y, a menudo, scripts de analítica o de pago alojados fuera de China. Algunos están bloqueados sin más. Google Fonts responde o calla según la red del visitante. Cuando una petición se queda sin respuesta, la página no devuelve un error:

## vetting-a-wordpress-agency-china, line 83
¿Qué scripts alojados en el extranjero tendrán que reemplazar en nuestro desarrollo actual?

## woocommerce-china-store-guide, table row
| Scripts | Google Fonts en líneas domésticas y reCAPTCHA | Autoalojar o sustituir |

## woocommerce-china-store-guide, paragraph + new blockquote
Primero, los scripts alojados en el extranjero. Una tienda por defecto carga sin avisar Google Fonts y reCAPTCHA. En las pruebas que 21YunBox publicó en agosto de 2026, reCAPTCHA falló en todas las peticiones, tanto desde un centro de datos del continente como desde una línea doméstica de Pekín, y Google Fonts respondió desde el centro de datos pero nunca desde la línea doméstica. En ambos casos, la página se queda colgada, a la espera de una respuesta que no llega.

> En las pruebas de 21YunBox, `www.google.com/recaptcha` respondió a 0 de 72 peticiones desde una instancia de Alibaba Cloud (阿里云) en cn-zhangjiakou el 28 de agosto de 2026, y a 0 de 18 desde una línea residencial de China Mobile (中国移动) en Pekín el 30 de agosto de 2026. `fonts.googleapis.com` respondió a 72 de 72 y a 0 de 54.
> Fuente: 21YunBox, A Day of Third-Party Requests From Inside China, agosto de 2026. URL

## great-firewall-what-it-blocks, line 66 (last sentence)
`fonts.google.com`, la interfaz de consulta, es un servidor distinto: GreatFire lo calificó de perturbado al 100 % en sus dos últimas pruebas concluyentes, la más reciente el 30 de septiembre de 2026.

## great-firewall-what-it-blocks, lines 74 and 76
Un enlace a Google Fonts olvidado en la hoja de estilos puede dejar la página en blanco a cada visitante cuya red nunca le responde.
> Un enlace a Google Fonts olvidado en la hoja de estilos puede dejar la página en blanco a cualquier usuario cuya red no le responde.

## great-firewall-what-it-blocks, line 208 and line 216
| Sustitución de las dependencias extranjeras |
**Sustituir cada dependencia extranjera**
Si una apunta a un dominio que la red de sus visitantes no alcanza,

## is-wordpress-blocked-in-china, line 105
fonts.google.com, la interfaz donde sus diseñadores eligen los tipos, es un servidor distinto, que 21YunBox no midió. GreatFire lo calificó de perturbado al 100 % en sus dos últimas pruebas concluyentes, la más reciente el 30 de septiembre de 2026.

Step 1 complete.
