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

export function getProblems(lang: Locale): Problem[] {
  return lang === 'fr' ? problemsFr : problemsEn;
}

export function getTrustPoints(lang: Locale): TrustPoint[] {
  return lang === 'fr' ? trustPointsFr : trustPointsEn;
}
