import type { Locale } from './ui';
import type { Problem } from '../data/problems';
import type { TrustPoint } from '../data/trustPoints';
import { problems as problemsEn } from '../data/problems';
import { trustPoints as trustPointsEn } from '../data/trustPoints';

const problemsFr: Problem[] = [
  {
    title: 'Votre discours sonne étranger',
    description: 'Un lecteur chinois cherche des repères que les marques étrangères mettent rarement en avant. Cautions tierces, partenaires reconnus, biographie du fondateur, certifications obtenues, prix reçus. Un rédacteur chinois sait dans quel ordre les présenter pour qu\'on s\'y arrête.',
  },
  {
    title: 'Votre interface a une drôle d\'allure',
    description: 'En Chine, un site se lit sur mobile, le plus souvent dans le navigateur intégré de WeChat. Pages denses, scroll long, marqueurs de confiance posés dès l\'ouverture. Le minimalisme à l\'occidentale passe ici pour un site vide, voire inachevé.',
  },
  {
    title: 'Baidu ignore votre existence',
    description: 'Autres signaux, autres règles d\'indexation. Sans licence ICP ni hébergement local, Baidu indexe mal votre site, et parfois pas du tout. Les méthodes rodées sur Google ne s\'y transposent pas.',
    citation: 'Baidu capte près de la moitié de la recherche chinoise. Google plafonne sous les 3 %. Source : Statcounter Global Stats, Chine, 2024.',
  },
  {
    title: 'Pour beaucoup d\'acheteurs chinois, l\'IA a déjà remplacé la recherche',
    description: 'Doubao, Kimi, DeepSeek, le Wenxin de Baidu : les questions qui filaient sur un moteur trouvent désormais leurs réponses ici. L\'utilisateur clique rarement. Si votre site n\'est pas conçu pour être cité par ces IA, vous restez hors de l\'écran.',
  },
  {
    title: 'Hors de Chine, l\'hébergement reste un point bas',
    description: 'Pages qui rament, extensions hors service, scripts qui lâchent en silence derrière le Pare-feu. L\'infrastructure pose le sol. Le reste vient après : c\'est la résonance de la marque qui fait revenir les clients.',
  },
];

const trustPointsFr: TrustPoint[] = [
  {
    title: 'Une vitesse mesurée, pas promise',
    description: 'Moins de trois secondes au chargement, en moyenne, sur nos sites WordPress en Chine. Images, scripts, polices, routage CDN : chaque maillon réglé pour les réseaux locaux.',
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
    title: 'WordPress, et rien d\'autre',
    description: 'WordPress pour la Chine, à temps plein. Cette concentration nous donne du CMS et de ses particularités locales une maîtrise qu\'un généraliste ne peut pas avoir.',
  },
];

export function getProblems(lang: Locale): Problem[] {
  return lang === 'fr' ? problemsFr : problemsEn;
}

export function getTrustPoints(lang: Locale): TrustPoint[] {
  return lang === 'fr' ? trustPointsFr : trustPointsEn;
}
