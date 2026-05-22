import type { Locale } from './ui';
import type { Problem } from '../data/problems';
import type { TrustPoint } from '../data/trustPoints';
import { problems as problemsEn } from '../data/problems';
import { trustPoints as trustPointsEn } from '../data/trustPoints';

const problemsFr: Problem[] = [
  {
    title: 'Votre discours sonne comme un texte étranger',
    description: 'Le lecteur chinois cherche des repères que les marques étrangères mettent rarement en avant. Cautions tierces, partenaires reconnus, biographie du fondateur, certifications obtenues, distinctions reçues. Un rédacteur chinois sait dans quel ordre les disposer pour retenir l\'attention.',
  },
  {
    title: 'Votre interface dépayse vos visiteurs',
    description: 'En Chine, le site se lit sur mobile, le plus souvent à l\'intérieur du navigateur intégré à WeChat. Pages denses, défilement long, marqueurs de confiance posés dès l\'ouverture. Le minimalisme à l\'occidentale donne ici l\'impression d\'un site vide, parfois même inachevé.',
  },
  {
    title: 'Baidu ignore votre existence',
    description: 'D\'autres signaux, d\'autres règles d\'indexation. En l\'absence de licence ICP et d\'hébergement local, Baidu indexe mal votre site, et parfois ne l\'indexe pas du tout. Les méthodes éprouvées sur Google ne s\'y transposent pas.',
    citation: 'Baidu capte près de la moitié de la recherche chinoise. Google plafonne sous les 3 %. Source : Statcounter Global Stats, Chine, 2024.',
  },
  {
    title: 'Pour de nombreux acheteurs chinois, l\'IA a déjà supplanté la recherche',
    description: 'Doubao, Kimi, DeepSeek, le Wenxin de Baidu : les questions qui passaient hier par un moteur trouvent aujourd\'hui leurs réponses chez ces IA. L\'utilisateur clique rarement. Un site qui ne se prête pas à la citation par ces IA reste hors champ.',
  },
  {
    title: 'Hors de Chine, l\'hébergement reste le maillon faible',
    description: 'Pages qui peinent à se charger, extensions hors service, scripts qui lâchent en silence derrière le Pare-feu. L\'infrastructure pose les fondations. Une fois ces fondations stables, c\'est la résonance de la marque qui fait revenir les clients.',
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
    description: 'El público chino busca señales de confianza que las marcas extranjeras suelen dejar en segundo plano: la trayectoria del fundador, las certificaciones, los logos de los socios, los premios obtenidos. Un redactor chino sabe en qué orden colocarlas para que la página retenga la atención.',
  },
  {
    title: 'Su interfaz desorienta al visitante chino',
    description: 'En China el sitio se consulta en el móvil, casi siempre dentro del navegador integrado de WeChat. Páginas densas, scroll largo, señales de confianza desde la primera pantalla. El minimalismo occidental aquí da la impresión de un sitio vacío, cuando no a medio terminar.',
  },
  {
    title: 'Baidu ni siquiera sabe que existe',
    description: 'Otras señales de posicionamiento, otras reglas de indexación. Sin licencia ICP ni alojamiento local, Baidu indexa mal su sitio, y a veces no lo indexa en absoluto. Lo que funciona en Google no se traslada aquí.',
    citation: 'Baidu acapara casi la mitad de las búsquedas en China. Google se queda por debajo del 3 %. Fuente: Statcounter Global Stats, China, 2024.',
  },
  {
    title: 'Para muchos compradores chinos, la IA ya sustituyó al buscador',
    description: 'Doubao, Kimi, DeepSeek o el Wenxin de Baidu responden hoy las preguntas que antes pasaban por un buscador. El usuario casi nunca hace clic. Un sitio que la IA no puede citar queda fuera del radar.',
  },
  {
    title: 'El alojamiento en China es solo el punto de partida',
    description: 'Páginas que tardan en cargar, plugins fuera de servicio, scripts que fallan en silencio detrás del Cortafuegos. La infraestructura asienta los cimientos. Una vez firmes, lo que hace volver al cliente es la fuerza de la marca.',
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

export function getProblems(lang: Locale): Problem[] {
  if (lang === 'fr') return problemsFr;
  if (lang === 'es') return problemsEs;
  return problemsEn;
}

export function getTrustPoints(lang: Locale): TrustPoint[] {
  if (lang === 'fr') return trustPointsFr;
  if (lang === 'es') return trustPointsEs;
  return trustPointsEn;
}
