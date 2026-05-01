import type { Locale } from './ui';
import type { Problem } from '../data/problems';
import type { TrustPoint } from '../data/trustPoints';
import { problems as problemsEn } from '../data/problems';
import { trustPoints as trustPointsEn } from '../data/trustPoints';

const problemsFr: Problem[] = [
  {
    title: 'Votre discours sonne étranger',
    description: 'Traduire n\'est pas localiser. Le lecteur chinois cherche des repères qu\'on n\'apprend pas dans un manuel d\'export : caution d\'un tiers, partenaires reconnus, vocabulaire aligné sur le discours officiel, biographie du fondateur, certifications, prix obtenus. Une accroche qui convertit à Munich tombe à plat à Shanghai, voire passe pour arrogante. Et plus la page s\'étire, plus l\'écart se creuse.',
  },
  {
    title: 'Votre interface a une drôle d\'allure',
    description: 'Blancs généreux, défilement long, palette pastel, fenêtre de chat dès l\'accueil, QR code WeChat plutôt qu\'un numéro de téléphone : l\'internaute chinois ouvre votre site sur mobile, le plus souvent dans le navigateur intégré de WeChat, et attend une page qui réagit selon ses propres codes. Vu d\'ici, le minimalisme occidental ressemble à un site vide ou inachevé.',
  },
  {
    title: 'Baidu ignore votre existence',
    description: 'Autres signaux de classement, autres règles d\'indexation, autres outils pour webmasters. Sans dépôt ICP ni hébergement en Chine, Baidu n\'indexe pas votre site correctement, peu importe le travail SEO derrière. La méthode Google ne se transpose pas.',
    citation: 'Baidu pesait près de la moitié de la recherche chinoise en 2024, loin devant Bing et Sogou. Google reste sous les 3 %. Source : Statcounter Global Stats, parts de marché desktop en Chine, 2024.',
  },
  {
    title: 'L\'IA a déjà remplacé la recherche chez beaucoup d\'acheteurs',
    description: 'Le consommateur chinois interroge désormais Doubao, Kimi, DeepSeek ou le Wenxin de Baidu là où il aurait tapé une requête dans un moteur. Il reçoit une réponse sourcée et, bien souvent, ne clique jamais. Si votre marque n\'est pas structurée pour être lue et citée par ces IA, vous restez invisible pour toute une génération d\'acheteurs qui ne consultent plus la page de résultats.',
  },
  {
    title: 'Héberger hors de Chine, c\'est un plancher, pas une ambition',
    description: 'Pages lentes, extensions hors service, scripts bloqués, dépendances qui décrochent en silence derrière le Pare-feu. L\'infrastructure doit tenir, et c\'est notre métier. Mais ce n\'est pas elle qui vous amène des clients. Ce qui les amène, c\'est la résonance de la marque.',
  },
];

const trustPointsFr: TrustPoint[] = [
  {
    title: 'Une vitesse mesurée, pas promise',
    description: 'Moins de trois secondes au chargement, en moyenne, pour nos sites WordPress en Chine. Images, scripts, polices, routage CDN : chaque maillon est réglé au plus près pour épouser l\'infrastructure locale.',
  },
  {
    title: 'La conformité, prise en charge de bout en bout',
    description: 'Licence ICP, modération des contenus, exigences réglementaires : nous portons le dossier jusqu\'à son aboutissement. Vous gardez l\'esprit libre pour votre activité, sans plonger dans l\'administration chinoise.',
  },
  {
    title: 'Une équipe trilingue, sans décalage',
    description: 'Nos interlocuteurs passent du français à l\'anglais sans effort, et travaillent au quotidien en chinois. Aucun quiproquo de traduction, aucun silence imputé au fuseau horaire.',
  },
  {
    title: 'WordPress, exclusivement',
    description: 'Nous ne sommes pas une agence généraliste. Notre métier, c\'est WordPress pour la Chine, et rien d\'autre. Cette concentration nous donne une maîtrise du CMS et de ses spécificités locales qu\'aucun touche-à-tout ne peut prétendre offrir.',
  },
];

export function getProblems(lang: Locale): Problem[] {
  return lang === 'fr' ? problemsFr : problemsEn;
}

export function getTrustPoints(lang: Locale): TrustPoint[] {
  return lang === 'fr' ? trustPointsFr : trustPointsEn;
}
