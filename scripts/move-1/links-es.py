# -*- coding: utf-8 -*-
"""Move 1, Task C: one contextual internal link per Spanish guide article."""
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from insert import apply

HEAD = '/es/wordpress-en-china/'
WPA = '/es/agencia-wordpress-china/'
WEB = '/es/agencia-web-china/'

EDITS = {
'baiduspider-firewall': (HEAD,
 u"Lo vemos con más frecuencia que cualquier otra causa técnica de un lanzamiento chino encallado, y casi siempre se trata de un ajuste que nadie recuerda haber hecho.",
 u"Lo vemos con más frecuencia que cualquier otra causa técnica de un lanzamiento chino encallado, muy por delante de cualquier cosa que ocurra en [la propia construcción del sitio WordPress](" + HEAD + u"), y casi siempre se trata de un ajuste que nadie recuerda haber hecho."),

'china-website-hosting-guide': (HEAD,
 u"En una estrategia web para China, el alojamiento es la decisión que más se subestima.",
 u"En una estrategia web para China, el alojamiento es la decisión que más se subestima, y pesa más sobre la velocidad de carga que [cualquier ajuste que usted haga dentro de un WordPress](" + HEAD + u")."),

'host-website-in-china': (HEAD,
 u"Esa diferencia casi siempre se reduce al alojamiento. De dónde esté físicamente su servidor depende que un visitante chino vea su página de inicio en menos de un segundo o que se rinda ante una ruedecita que gira sin fin.",
 u"Esa diferencia casi siempre se reduce al alojamiento. De dónde esté físicamente su servidor depende que un visitante chino vea su página de inicio en menos de un segundo o que se rinda ante una ruedecita que gira sin fin, y esa decisión pesa más que cualquier otra dentro de [un WordPress construido para China](" + HEAD + u")."),

'great-firewall-what-it-blocks': (HEAD,
 u"para que la experiencia se degrade en China.",
 u"para que la experiencia se degrade en China, y [una instalación estándar de WordPress arrastra varios de esos servicios](" + HEAD + u")."),

'google-analytics-china': (HEAD,
 u"o lo mantienen y sirven en silencio un sitio más lento a todo Shanghái.",
 u"o lo mantienen y sirven en silencio un sitio más lento a todo Shanghái, una de las maneras más habituales de que [un sitio WordPress acabe roto en China](" + HEAD + u")."),

'china-website-localisation': (HEAD,
 u"a la rapidez de la atención al cliente y a una larga lista de códigos culturales.",
 u"a la rapidez de la atención al cliente, a [lo que hay que cambiar en un WordPress pensado para China](" + HEAD + u") y a una larga lista de códigos culturales."),

'mobile-first-design-china': (HEAD,
 u"es construir para una internet que los chinos dejaron atrás hace años.",
 u"es construir para una internet que los chinos dejaron atrás hace años, y ningún ajuste posterior sobre [una plantilla de WordPress para China](" + HEAD + u") rescata esa decisión."),

'woocommerce-china-store-guide': (HEAD,
 u"WooCommerce funciona muy bien en China.",
 u"WooCommerce funciona muy bien en China, en las mismas condiciones que [cualquier sitio WordPress que opere tras el Gran Cortafuegos](" + HEAD + u")."),

'baidu-structured-data': (HEAD,
 u"lo que deja abierta la pregunta de qué conviene entregar.",
 u"lo que deja abierta la pregunta de qué conviene entregar desde [un sitio WordPress construido para China](" + HEAD + u")."),

'submitting-urls-to-baidu': (HEAD,
 u"que le comunica a Baidu que una página existe.",
 u"que le comunica a Baidu que una página existe, tanto si esas páginas salen de [un WordPress alojado en China](" + HEAD + u") como de cualquier otro sistema."),

'baidu-search-resource-platform': (HEAD,
 u"Sin ella, una estrategia de búsqueda en China se reduce a suposiciones acompañadas de una factura de traducción.",
 u"Sin ella, una estrategia de búsqueda en China se reduce a suposiciones acompañadas de una factura de traducción, por mucho cuidado que se haya puesto en [la parte WordPress del sitio pensada para China](" + HEAD + u")."),

'baidu-site-verification': (HEAD,
 u"El trámite lleva diez minutos, suponiendo que el alojamiento colabore.",
 u"El trámite lleva diez minutos, suponiendo que el alojamiento colabore y que [el WordPress ya esté preparado para China](" + HEAD + u")."),

'baidu-verification-failed': (HEAD,
 u"y lo que lo rompe se encuentra entre Baiduspider y su servidor.",
 u"y lo que lo rompe se encuentra entre Baiduspider y su servidor, aguas arriba de [la propia instalación de WordPress](" + HEAD + u")."),

'baidu-verification-scope': (HEAD,
 u"Aquí un sitio es un protocolo y un host, nada más amplio.",
 u"Aquí un sitio es un protocolo y un host, nada más amplio, algo que importa si [su sitio WordPress chino](" + HEAD + u") responde en más de uno de ellos."),

'baidu-fast-inclusion-gone': (HEAD,
 u"Usted empujaba una URL y se suponía que la página se saltaba la cola.",
 u"Usted empujaba una URL y se suponía que la página se saltaba la cola, lo que la convirtió en el primer plugin que se pedía en [cualquier proyecto WordPress dirigido a China](" + HEAD + u")."),

'china-data-privacy-pipl-dsl': (HEAD,
 u"o sigue el comportamiento de visitantes situados en China, le afecta.",
 u"o sigue el comportamiento de visitantes situados en China, le afecta, y [una instalación estándar de WordPress hace al menos dos de esas tres cosas](" + HEAD + u")."),

'icp-licence-filing-foreign-companies': (WPA,
 u"condena el sitio a páginas lentas, a un mal posicionamiento y a la desconfianza de los usuarios chinos.",
 u"condena el sitio a páginas lentas, a un mal posicionamiento y a la desconfianza de los usuarios chinos, y por eso [una agencia que tramita expedientes ICP a diario](" + WPA + u") vale más aquí que un presupuesto más barato."),

'baidu-seo-ranking-in-china': (WPA,
 u"Cualquier empresa extranjera que quiera llegar a clientes chinos por internet tiene que contar con él.",
 u"Cualquier empresa extranjera que quiera llegar a clientes chinos por internet tiene que contar con él, y es lo primero que conviene preguntarle a [una agencia WordPress que trabaje en China](" + WPA + u")."),

'china-content-marketing-strategy': (WPA,
 u"Esa mecánica cambia por completo cómo se eligen las plataformas, los formatos y el calendario editorial.",
 u"Esa mecánica cambia por completo cómo se eligen las plataformas, los formatos, el calendario editorial y lo que cabe esperar de [la agencia que construye el sitio por debajo](" + WPA + u")."),

'china-search-landscape-beyond-baidu': (WPA,
 u"Ignorarlas es perder de vista una buena parte de cómo buscan los chinos.",
 u"Ignorarlas es perder de vista una buena parte de cómo buscan los chinos, una laguna que [un especialista en WordPress para China](" + WPA + u") debería plantear antes de que usted firme nada."),

'baidu-keyword-research-tools': (WEB,
 u"Y explican por qué investigar palabras clave en chino es una disciplina aparte.",
 u"Y explican por qué investigar palabras clave en chino es una disciplina aparte, la lleve su equipo o [una agencia web instalada en China](" + WEB + u")."),

'baidu-index-traffic-data': (WEB,
 u"y varios de ellos vacíos durante semanas por diseño.",
 u"y varios de ellos vacíos durante semanas por diseño, razón por la cual [la agencia que los interpreta por usted](" + WEB + u") importa más que el propio cuadro de mando."),

'baidu-account-foreign-company': (WEB,
 u"Calcule un día para la versión sencilla. Varias semanas para la complicada.",
 u"Calcule un día para la versión sencilla y varias semanas para la complicada, menos si [un socio que ya opera en China](" + WEB + u") prepara el expediente con usted."),

'baidu-account-ownership': (WEB,
 u"La identidad asociada a esa cuenta es lo más parecido a una escritura de propiedad que Baidu conserva sobre su presencia en la búsqueda china.",
 u"La identidad asociada a esa cuenta es lo más parecido a una escritura de propiedad que Baidu conserva sobre su presencia en la búsqueda china, así que compruebe a qué nombre está antes de que [una agencia sobre el terreno](" + WEB + u") abra una por usted."),

'baidu-ads-account-foreign': (WEB,
 u"y esa elección le acompaña hasta el alojamiento y el rendimiento del rastreo mucho después del lanzamiento.",
 u"y esa elección le acompaña hasta el alojamiento y el rendimiento del rastreo mucho después del lanzamiento, y ahí es donde [una agencia web con base en China](" + WEB + u") justifica sus honorarios."),

'baidu-aicaigou-b2b': (WEB,
 u"En esa distancia es donde se tuercen los planes de marketing extranjeros.",
 u"En esa distancia es donde se tuercen los planes de marketing extranjeros, y donde [encargar el marketing chino a un equipo sobre el terreno](" + WEB + u") se paga solo."),

'baidu-merchant-center': (WEB,
 u"Nada en esa frase toca los resultados de búsqueda ni la indexación de su web.",
 u"Nada en esa frase toca los resultados de búsqueda ni la indexación de su web, un trabajo que [su equipo web en China](" + WEB + u") debe llevar por separado."),

'baidu-product-feed': (WEB,
 u"La mayor parte del trabajo se va en problemas de los que nadie le avisó.",
 u"La mayor parte del trabajo se va en problemas de los que nadie le avisó, y esa es la razón habitual de que este encargo acabe en manos de [una agencia ya implantada en China](" + WEB + u")."),

'baidu-product-data-destinations': (WEB,
 u"Una frase de la FAQ de producto de Baidu enumera todos los lugares a los que pueden viajar esos datos. Los tres destinos se compran.",
 u"Una frase de la FAQ de producto de Baidu enumera todos los lugares a los que pueden viajar esos datos, y los tres destinos se compran, lo que cambia la conversación presupuestaria con [quien dirija su operación web en China](" + WEB + u")."),
}

if __name__ == '__main__':
    for gid, (target, old, new) in EDITS.items():
        apply('src/content/guides-es/%s.md' % gid, [(old, new)])
    print('ES: %d articles linked' % len(EDITS))
