import type { Locale } from './ui';
import type { Problem } from '../data/problems';
import type { TrustPoint } from '../data/trustPoints';
import { problems as problemsEn } from '../data/problems';
import { trustPoints as trustPointsEn } from '../data/trustPoints';

const problemsFr: Problem[] = [
  {
    title: 'Plus de 15 secondes de chargement',
    description: 'Vos pages mettent 15 secondes ou plus à s\'afficher depuis la Chine continentale, quand elles s\'affichent. La plupart des visiteurs abandonnent après 3 secondes.',
  },
  {
    title: 'Blocage par le Grand Pare-feu',
    description: 'Extensions tierces, CDN externes et scripts intégrés sont silencieusement bloqués par le Grand Pare-feu, cassant la mise en page et les fonctionnalités.',
  },
  {
    title: 'Les services Google ne fonctionnent pas',
    description: 'Google Fonts, Google Analytics, reCAPTCHA, Google Maps : rien ne se charge en Chine. Chaque dépendance doit être remplacée.',
  },
  {
    title: 'Licence ICP et conformité',
    description: 'Héberger un site sur un serveur chinois exige une licence ICP. Le contenu doit respecter la réglementation locale. La procédure est opaque et entièrement en chinois.',
  },
  {
    title: 'Le référencement Baidu n\'a rien à voir avec Google',
    description: 'Facteurs de classement différents, règles d\'indexation différentes, outils webmaster différents. Votre stratégie SEO Google ne s\'applique tout simplement pas.',
  },
  {
    title: 'Un hébergement fiable est difficile à trouver',
    description: 'La plupart des hébergeurs internationaux n\'ont aucune présence en Chine continentale. Choisir le mauvais hébergeur chinois, c\'est s\'exposer à une disponibilité médiocre, un support uniquement en chinois et une compatibilité WordPress limitée.',
  },
];

const trustPointsFr: TrustPoint[] = [
  {
    title: 'Optimisation de la vitesse éprouvée',
    description: 'Temps de chargement moyen inférieur à 3 secondes pour les sites WordPress en Chine. Nous optimisons chaque élément (images, scripts, polices, routage CDN) pour fonctionner avec l\'infrastructure locale.',
  },
  {
    title: 'Conformité intégralement prise en charge',
    description: 'Nous gérons la licence ICP, la conformité du contenu et toutes les exigences réglementaires de bout en bout pour que vous puissiez vous concentrer sur votre activité, pas sur la bureaucratie chinoise.',
  },
  {
    title: 'Équipe bilingue',
    description: 'Travaillez avec des professionnels qui communiquent couramment en anglais (et en français) tout en opérant au quotidien en chinois. Pas de malentendus linguistiques, pas de trous noirs liés au décalage horaire.',
  },
  {
    title: 'Spécialistes WordPress, exclusivement',
    description: 'Nous ne sommes pas une agence web généraliste. Nous nous consacrons exclusivement à WordPress pour la Chine. Cette spécialisation nous confère une expertise plus approfondie de la plateforme et de ses défis propres à la Chine que n\'importe quel généraliste.',
  },
];

export function getProblems(lang: Locale): Problem[] {
  return lang === 'fr' ? problemsFr : problemsEn;
}

export function getTrustPoints(lang: Locale): TrustPoint[] {
  return lang === 'fr' ? trustPointsFr : trustPointsEn;
}
