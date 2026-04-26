import type { Locale } from './ui';
import type { Problem } from '../data/problems';
import type { TrustPoint } from '../data/trustPoints';
import { problems as problemsEn } from '../data/problems';
import { trustPoints as trustPointsEn } from '../data/trustPoints';

const problemsFr: Problem[] = [
  {
    title: 'Votre contenu ne touche personne',
    description: 'Une traduction, ce n\'est pas une localisation. Les internautes chinois cherchent des signaux de confiance qu\'on ne vous a jamais appris à envoyer : caution d\'un tiers, logos de partenaires, vocabulaire en phase avec le discours officiel, parcours du fondateur, certifications, prix et distinctions. Le titre qui convertit à Munich tombe à plat ou passe pour arrogant à Shanghai. Et plus la page est longue, pire ça devient.',
  },
  {
    title: 'Votre UX a un parfum d\'étranger',
    description: 'Pages aérées, scroll long, couleurs vives, chat en direct dès l\'accueil, QR codes WeChat à la place du numéro de téléphone : les internautes chinois consultent d\'abord en mobile, souvent dans le navigateur intégré de WeChat, et attendent une page qui réagisse d\'une certaine manière. Le minimalisme occidental, vu d\'ici, donne l\'impression d\'un site vide ou inachevé.',
  },
  {
    title: 'Baidu ne vous voit pas',
    description: 'Signaux de classement différents, règles d\'indexation différentes, outils pour webmasters différents. Et sans dépôt ICP ni hébergement chinois, Baidu n\'indexe pas correctement votre site, quel que soit le SEO derrière. La méthode Google ne s\'exporte pas ici.',
    citation: 'Baidu pesait environ la moitié du marché chinois de la recherche en 2024, devant Bing et Sogou. Google reste sous les 3 %. Source : Statcounter Global Stats, parts de marché desktop en Chine, 2024.',
  },
  {
    title: 'L\'IA a déjà remplacé la recherche pour bon nombre d\'acheteurs',
    description: 'Les consommateurs chinois posent désormais à Doubao, Kimi, DeepSeek et au Wenxin de Baidu les questions qu\'ils auraient saisies dans un moteur de recherche. Ils obtiennent une réponse sourcée, et bien souvent ne cliquent jamais. Si votre marque n\'est pas structurée pour que les IA chinoises la lisent et la citent, vous êtes invisible pour toute une génération d\'acheteurs qui ne passent plus du tout par la page de résultats.',
  },
  {
    title: 'Héberger hors de Chine, c\'est un seuil, pas un objectif',
    description: 'Pages lentes, extensions cassées, scripts bloqués, dépendances qui plantent en silence derrière le Pare-feu. L\'infrastructure doit tenir, c\'est notre métier. Mais ce n\'est pas elle qui vous gagnera des clients. Ce qui vous les gagne, c\'est la résonance de la marque.',
  },
];

const trustPointsFr: TrustPoint[] = [
  {
    title: 'Une vitesse qui se mesure, pas qui se promet',
    description: 'Moins de trois secondes de chargement en moyenne pour nos sites WordPress en Chine. Images, scripts, polices, routage CDN : chaque élément est réglé au millimètre pour coller à l\'infrastructure locale.',
  },
  {
    title: 'Conformité prise en main du début à la fin',
    description: 'Licence ICP, contrôle des contenus, exigences réglementaires : nous portons le dossier de bout en bout. Vous gardez l\'esprit libre pour votre activité, sans vous perdre dans l\'administration chinoise.',
  },
  {
    title: 'Une équipe trilingue',
    description: 'Nos interlocuteurs passent sans effort de l\'anglais au français, tout en travaillant chaque jour en chinois. Pas de quiproquo linguistique, pas de silence dû au décalage horaire.',
  },
  {
    title: 'WordPress, et rien que WordPress',
    description: 'Nous ne sommes pas une agence web tous azimuts. Notre métier, c\'est WordPress pour la Chine, exclusivement. Cette focale nous donne une connaissance de la plateforme et de ses particularités chinoises qu\'aucun généraliste ne peut égaler.',
  },
];

export function getProblems(lang: Locale): Problem[] {
  return lang === 'fr' ? problemsFr : problemsEn;
}

export function getTrustPoints(lang: Locale): TrustPoint[] {
  return lang === 'fr' ? trustPointsFr : trustPointsEn;
}
