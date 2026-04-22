import type { Locale } from './ui';
import type { Problem } from '../data/problems';
import type { TrustPoint } from '../data/trustPoints';
import { problems as problemsEn } from '../data/problems';
import { trustPoints as trustPointsEn } from '../data/trustPoints';

const problemsFr: Problem[] = [
  {
    title: 'Quinze secondes avant le premier pixel',
    description: 'Depuis la Chine continentale, vos pages s\'affichent au mieux en quinze secondes. Souvent, elles ne s\'affichent pas du tout. Or un internaute qui attend plus de trois secondes ferme l\'onglet.',
  },
  {
    title: 'Le Grand Pare-feu coupe vos ressources',
    description: 'Extensions tierces, CDN étrangers, scripts intégrés : le Grand Pare-feu les filtre en silence. Résultat, une mise en page qui se décompose et des fonctionnalités qui tombent en rade.',
  },
  {
    title: 'Les services Google restent à la porte',
    description: 'Google Fonts, Google Analytics, reCAPTCHA, Google Maps : rien ne passe en Chine. Chaque brique empruntée à Google doit être remplacée, sans exception.',
  },
  {
    title: 'Licence ICP et cadre réglementaire',
    description: 'Héberger un site sur un serveur chinois suppose une licence ICP. Les contenus doivent se plier à la réglementation locale. La démarche est opaque, et tout se passe en chinois.',
  },
  {
    title: 'Baidu ne raisonne pas comme Google',
    description: 'Critères de classement, règles d\'indexation, outils pour webmasters : rien ne se recoupe. La recette SEO qui marchait sur Google ne donne rien ici.',
  },
  {
    title: 'Trouver un hébergeur fiable relève du parcours du combattant',
    description: 'La plupart des hébergeurs internationaux ne posent pas un pied en Chine continentale. Côté chinois, un mauvais choix signifie des coupures à répétition, un support exclusivement en mandarin et une compatibilité WordPress approximative.',
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
