import type { Locale } from './ui';
import type { Problem } from '../data/problems';
import type { TrustPoint } from '../data/trustPoints';
import { problems as problemsEn } from '../data/problems';
import { trustPoints as trustPointsEn } from '../data/trustPoints';

const problemsFr: Problem[] = [
  {
    title: 'Votre discours sonne comme un texte étranger',
    description: 'Le lecteur chinois cherche des repères que les marques étrangères mettent rarement en avant. Cautions tierces, partenaires reconnus, biographie du fondateur, certifications obtenues, distinctions reçues. Un rédacteur chinois sait dans quel ordre les disposer pour retenir l’attention.',
  },
  {
    title: 'Votre interface dépayse vos visiteurs',
    description: 'En Chine, le site se lit sur mobile, le plus souvent à l’intérieur du navigateur intégré à WeChat. Pages denses, défilement long, marqueurs de confiance posés dès l’ouverture. Le minimalisme à l’occidentale donne ici l’impression d’un site vide, parfois même inachevé.',
  },
  {
    title: 'Baidu ignore votre existence',
    description: 'D’autres signaux, d’autres règles d’indexation. En l’absence de licence ICP et d’hébergement local, Baidu indexe mal votre site, et parfois ne l’indexe pas du tout. Les méthodes éprouvées sur Google ne s’y transposent pas.',
    citation: 'Baidu capte près de la moitié de la recherche chinoise. Google plafonne sous les 3 %. Source : Statcounter Global Stats, Chine, 2024.',
  },
  {
    title: 'Pour de nombreux acheteurs chinois, l’IA a déjà supplanté la recherche',
    description: 'Doubao, Kimi, DeepSeek, le Wenxin de Baidu : les questions qui passaient hier par un moteur trouvent aujourd’hui leurs réponses chez ces IA. L’utilisateur clique rarement. Un site qui ne se prête pas à la citation par ces assistants reste hors champ.',
  },
  {
    title: 'Hors de Chine, l’hébergement reste le maillon faible',
    description: 'Pages qui peinent à se charger, extensions hors service, scripts qui lâchent en silence derrière le Pare-feu. L’infrastructure pose les fondations. Une fois ces fondations stables, c’est la résonance de la marque qui fait revenir les clients.',
  },
];

const trustPointsFr: TrustPoint[] = [
  {
    title: 'Une vitesse mesurée, jamais simplement promise',
    description: 'Moins de trois secondes au chargement, en moyenne, sur nos sites livrés en Chine. Images, scripts, polices, routage CDN : chaque maillon est réglé pour les réseaux locaux.',
  },
  {
    title: 'La conformité prise en charge de bout en bout',
    description: 'Licence ICP, modération éditoriale, obligations réglementaires : nous portons le dossier jusqu\'au tampon final. Votre équipe ne met jamais les mains dans l\'administration chinoise.',
  },
  {
    title: 'Une équipe trilingue, sans décalage',
    description: 'Nos interlocuteurs passent du français à l\'anglais et travaillent au quotidien en mandarin. Aucun quiproquo de traduction, aucun silence mis sur le compte du fuseau horaire.',
  },
  {
    title: 'Un seul terrain : la Chine',
    description: 'Le marché chinois constitue notre unique terrain de jeu, à temps plein. Cette concentration nous donne, sur les piles WordPress et Astro comme sur leurs particularités locales, une maîtrise hors de portée d\'un généraliste.',
  },
];

const problemsEs: Problem[] = [
  {
    title: 'Su mensaje suena a texto extranjero',
    description: 'El lector chino busca unas señales de confianza que las marcas extranjeras suelen relegar a un segundo plano: la trayectoria del fundador, las certificaciones obtenidas, los logotipos de los socios o los premios recibidos. Un redactor chino sabe en qué orden disponerlas para que la página retenga la atención de quien la lee.',
  },
  {
    title: 'Su interfaz desorienta al visitante chino',
    description: 'En China, el sitio se consulta desde el móvil y, casi siempre, dentro del navegador integrado de WeChat. El usuario local espera páginas densas, un desplazamiento largo y señales de confianza desde la primera pantalla; por eso el minimalismo occidental le produce aquí la impresión de un sitio vacío, cuando no a medio terminar.',
  },
  {
    title: 'Baidu ni siquiera sabe que su sitio existe',
    description: 'Baidu se guía por otras señales de posicionamiento y por otras reglas de indexación. Sin licencia ICP ni alojamiento local indexa mal su sitio, y a veces no lo indexa en absoluto; los métodos que dan resultado en Google aquí no sirven de nada.',
    citation: 'Baidu concentra casi la mitad de las búsquedas en China. Google se queda por debajo del 3 %. Fuente: Statcounter Global Stats, China, 2024.',
  },
  {
    title: 'Para muchos compradores chinos, la IA ya ha sustituido al buscador',
    description: 'Doubao, Kimi, DeepSeek o el Wenxin de Baidu responden hoy a las preguntas que antes pasaban por un buscador, y lo hacen sin que el usuario llegue casi nunca a hacer clic. Un sitio que esas herramientas no pueden citar queda, sencillamente, fuera del radar.',
  },
  {
    title: 'El alojamiento en China es solo el punto de partida',
    description: 'Detrás del Gran Cortafuegos, las páginas tardan en cargar, los plugins quedan fuera de servicio y los scripts fallan en silencio. La infraestructura sienta los cimientos; pero, una vez que son firmes, lo que de verdad hace volver al cliente es la fuerza de la marca.',
  },
];

const trustPointsEs: TrustPoint[] = [
  {
    title: 'Velocidad medida, no solo prometida',
    description: 'Menos de 3 segundos de carga, de media, en los sitios que entregamos en China. Imágenes, scripts, tipografías, enrutado del CDN: cada pieza queda ajustada a las redes locales.',
  },
  {
    title: 'La conformidad, resuelta de principio a fin',
    description: 'Nos ocupamos de la licencia ICP, de la conformidad de los contenidos y de cada requisito normativo. Su equipo se concentra en el negocio, no en la burocracia china.',
  },
  {
    title: 'Equipo multilingüe, sin desfases',
    description: 'Trabaje con profesionales que se mueven con soltura en español e inglés y operan a diario en chino. Ningún malentendido de traducción, ningún silencio achacado al huso horario.',
  },
  {
    title: 'Un único terreno: China',
    description: 'Hacemos una sola cosa: construir y mantener sitios que funcionan en China. Baidu, WeChat, el Cortafuegos, los motores de IA chinos. En cada proyecto, en cada línea de código.',
  },
];

const problemsDe: Problem[] = [
  {
    title: 'Ihre Botschaft kommt nicht an',
    description: 'Chinesische Nutzer suchen nach Vertrauensankern, die ausländische Teams gern beiläufig behandeln: die Vita des Gründers, Zertifikate, Logos bekannter Partner, ausgezeichnete Projekte. Ein chinesischer Texter weiß, in welcher Reihenfolge sie auf die Seite gehören, damit der Leser hängen bleibt.',
  },
  {
    title: 'Ihre Oberfläche irritiert chinesische Besucher',
    description: 'In China läuft die Website auf dem Smartphone, meist im integrierten Browser von WeChat. Dichte Seiten, langer Scroll, Vertrauenssignale gleich ganz oben. Westlicher Minimalismus wirkt hier leer, manchmal sogar halbfertig.',
  },
  {
    title: 'Baidu weiß nicht, dass es Sie gibt',
    description: 'Andere Ranking-Signale, andere Regeln für die Indexierung. Ohne ICP-Lizenz und einen Server in China indexiert Baidu Ihre Website schlecht, manchmal überhaupt nicht. Was bei Google funktioniert, lässt sich hier nicht übertragen.',
    citation: 'Baidu vereint fast die Hälfte der Suchanfragen in China auf sich. Google bleibt unter 3 %. Quelle: Statcounter Global Stats, China, 2024.',
  },
  {
    title: 'Für viele Käufer hat die KI die Suche längst abgelöst',
    description: 'Doubao, Kimi, DeepSeek, Baidus Wenxin: Fragen, die früher an eine Suchmaschine gingen, beantworten heute diese KI-Dienste. Der Nutzer klickt nur noch selten weiter. Eine Website, die sich von der KI nicht zitieren lässt, bleibt außen vor.',
  },
  {
    title: 'Hosting in China ist nur das Fundament',
    description: 'Seiten, die langsam laden, Plugins außer Betrieb, Skripte, die hinter der Firewall stillschweigend versagen. Die Infrastruktur legt das Fundament. Steht es erst stabil, entscheidet die Strahlkraft der Marke darüber, ob Kunden wiederkommen.',
  },
];

const trustPointsDe: TrustPoint[] = [
  {
    title: 'Geschwindigkeit, schwarz auf weiß belegt',
    description: 'Im Schnitt unter 3 Sekunden Ladezeit bei den Websites, die wir in China ausliefern. Bilder, Skripte, Schriften, CDN-Routing: Jedes Glied ist auf die lokalen Netze abgestimmt.',
  },
  {
    title: 'Die Compliance erledigen wir komplett',
    description: 'ICP-Lizenz, redaktionelle Freigabe, jede regulatorische Auflage: Wir bringen die Akte bis zum letzten Stempel. Ihr Team fasst die chinesische Bürokratie nie an.',
  },
  {
    title: 'Mehrsprachiges Team, ohne Reibungsverluste',
    description: 'Sie arbeiten mit Ansprechpartnern, die mühelos zwischen Deutsch und Englisch wechseln und ihren Alltag auf Chinesisch bestreiten. Kein Missverständnis durch Übersetzung, kein Schweigen, das auf die Zeitzone geschoben wird.',
  },
  {
    title: 'Ein einziges Feld: China',
    description: 'Wir machen genau eine Sache: Websites bauen und pflegen, die in China funktionieren. Baidu, WeChat, die Firewall, die chinesischen KI-Dienste. In jedem Projekt, in jeder Zeile Code.',
  },
];

export function getProblems(lang: Locale): Problem[] {
  if (lang === 'fr') return problemsFr;
  if (lang === 'es') return problemsEs;
  if (lang === 'de') return problemsDe;
  return problemsEn;
}

export function getTrustPoints(lang: Locale): TrustPoint[] {
  if (lang === 'fr') return trustPointsFr;
  if (lang === 'es') return trustPointsEs;
  if (lang === 'de') return trustPointsDe;
  return trustPointsEn;
}
