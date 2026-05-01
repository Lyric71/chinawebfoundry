import type { Locale } from './ui';
import type { Problem } from '../data/problems';
import type { TrustPoint } from '../data/trustPoints';
import { problems as problemsEn } from '../data/problems';
import { trustPoints as trustPointsEn } from '../data/trustPoints';

const problemsFr: Problem[] = [
  {
    title: 'Votre discours sonne étranger',
    description: 'Le lecteur chinois cherche des repères que les équipes étrangères placent rarement en avant : caution d\'un tiers, partenaires reconnus, biographie du fondateur, certifications, prix. Un rédacteur chinois natif les remet dans le bon ordre.',
  },
  {
    title: 'Votre interface a une drôle d\'allure',
    description: 'Mobile d\'abord, souvent dans le navigateur intégré de WeChat. Pages denses, scroll long, marqueurs de confiance dès l\'ouverture. Le minimalisme occidental passe ici pour un site vide ou inachevé.',
  },
  {
    title: 'Baidu ignore votre existence',
    description: 'Autres signaux de classement, autres règles d\'indexation. Sans dépôt ICP et sans hébergement chinois, Baidu n\'indexe pas votre site correctement. La méthode Google ne se transpose pas.',
    citation: 'Baidu pèse près de la moitié de la recherche chinoise. Google reste sous les 3 %. Source : Statcounter Global Stats, Chine, 2024.',
  },
  {
    title: 'L\'IA a déjà remplacé la recherche chez beaucoup d\'acheteurs',
    description: 'Doubao, Kimi, DeepSeek et le Wenxin de Baidu répondent désormais aux questions qui partaient sur un moteur. L\'utilisateur clique rarement. Sans site structuré pour être cité par ces IA, vous restez invisible.',
  },
  {
    title: 'Héberger hors de Chine, c\'est un plancher',
    description: 'Pages lentes, extensions hors service, scripts qui décrochent en silence derrière le Pare-feu. Une fois l\'infrastructure en place, c\'est la résonance de la marque qui ramène les clients.',
  },
];

const trustPointsFr: TrustPoint[] = [
  {
    title: 'Une vitesse mesurée, pas promise',
    description: 'Moins de trois secondes au chargement, en moyenne, sur nos sites WordPress en Chine. Images, scripts, polices, routage CDN : chaque maillon réglé pour l\'infrastructure locale.',
  },
  {
    title: 'La conformité, prise en charge de bout en bout',
    description: 'Licence ICP, modération, exigences réglementaires : nous portons le dossier jusqu\'au bout. Votre équipe ne plonge jamais dans l\'administration chinoise.',
  },
  {
    title: 'Une équipe trilingue, sans décalage',
    description: 'Nos interlocuteurs passent du français à l\'anglais et travaillent au quotidien en chinois. Pas de quiproquo de traduction, pas de silence imputé au fuseau horaire.',
  },
  {
    title: 'WordPress, exclusivement',
    description: 'WordPress pour la Chine, et rien d\'autre. Cette concentration nous donne une maîtrise du CMS et de ses spécificités locales qu\'un généraliste ne peut pas offrir.',
  },
];

export function getProblems(lang: Locale): Problem[] {
  return lang === 'fr' ? problemsFr : problemsEn;
}

export function getTrustPoints(lang: Locale): TrustPoint[] {
  return lang === 'fr' ? trustPointsFr : trustPointsEn;
}
