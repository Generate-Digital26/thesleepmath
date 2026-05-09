export interface Calculator {
  slug: string;
  title: string;
  description: string;
  tag: { label: string; class: string };
  color: string;
  iconColor: string;
  /** SVG path content (no wrapper <svg>) */
  iconPath: string;
  meta: string;
  cta: string;
  phase: 1 | 2 | 3;
}

export const calculators: Calculator[] = [
  {
    slug: 'chronotype-quiz',
    title: 'Chronotype Quiz',
    description:
      'Lion, bear, wolf, or dolphin? 15 questions to find your type and a daily schedule that actually fits your energy.',
    tag: { label: 'Most popular', class: 'tag-pop' },
    color: 'c-primary',
    iconColor: 'primary',
    iconPath:
      '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
    meta: '3 min · Roenneberg MCTQ',
    cta: 'Take the quiz →',
    phase: 1,
  },
  {
    slug: 'caffeine-cutoff',
    title: 'Caffeine Cutoff',
    description:
      "When's the last safe time for coffee? Enter your bedtime and habits, get a specific cutoff time with a decay chart.",
    tag: { label: 'New', class: 'tag-new' },
    color: 'c-coral',
    iconColor: 'coral',
    iconPath:
      '<path d="M17 8h1a4 4 0 0 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z"/><path d="M6 2v3M10 2v3M14 2v3"/>',
    meta: '30 sec · Drake et al., 2013',
    cta: 'Calculate →',
    phase: 1,
  },
  {
    slug: 'sleep-debt',
    title: 'Sleep Debt',
    description:
      "Log your last week. We'll show your total debt and the cognitive hit — 7 days of 6hrs ≈ legally drunk.",
    tag: { label: 'Science', class: 'tag-sci' },
    color: 'c-rose',
    iconColor: 'rose',
    iconPath:
      '<polyline points="22 17 13.5 8.5 8.5 13.5 2 7"/><polyline points="16 17 22 17 22 11"/>',
    meta: '1 min · Van Dongen et al., 2003',
    cta: 'Calculate →',
    phase: 1,
  },
  {
    slug: 'sleep-efficiency',
    title: 'Sleep Efficiency',
    description:
      "Time in bed vs. time asleep — the metric sleep clinics actually use. See if you're above or below the 85% mark.",
    tag: { label: 'CBT-I', class: 'tag-cbt' },
    color: 'c-mint',
    iconColor: 'mint',
    iconPath: '<path d="M18 20V10M12 20V4M6 20v-6"/>',
    meta: '30 sec · Clinical benchmark',
    cta: 'Calculate →',
    phase: 1,
  },
  {
    slug: 'nap-calculator',
    title: 'Nap Calculator',
    description:
      'Should you nap? How long? When? Based on your wake time, energy dip, and the circadian forbidden zone.',
    tag: { label: 'New', class: 'tag-new' },
    color: 'c-sky',
    iconColor: 'sky',
    iconPath:
      '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>',
    meta: '30 sec · Dijk & Czeisler, 1994',
    cta: 'Calculate →',
    phase: 1,
  },
  {
    slug: 'jet-lag-planner',
    title: 'Jet Lag Planner',
    description:
      "Flying across zones? Get a day-by-day plan — light exposure, melatonin timing, and when to force yourself outside.",
    tag: { label: 'Travel', class: 'tag-go' },
    color: 'c-amber',
    iconColor: 'amber',
    iconPath:
      '<circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z"/>',
    meta: '1 min · Eastman & Burgess, 2009',
    cta: 'Plan my trip →',
    phase: 1,
  },
];

export const roadmapItems = [
  'Sleep Cycle Calculator',
  'Baby Sleep Needs',
  'Sleep Apnea Risk',
  'Circadian Rhythm Map',
  'Melatonin Guide',
  'Screen Time Cutoff',
  'Room Temperature',
  'Wake Time Optimizer',
  'Shift Work Planner',
  'Alcohol Impact',
  'Exercise Timing',
  'Pregnancy Sleep',
];

export const papers = [
  {
    citation:
      'Drake, C. et al. (2013). Caffeine effects on sleep taken 0, 3, or 6 hours before bedtime.',
    journal: 'J. Clinical Sleep Medicine.',
  },
  {
    citation:
      'Van Dongen, H. et al. (2003). The cumulative cost of additional wakefulness.',
    journal: 'Sleep.',
  },
  {
    citation:
      'Dijk, D. & Czeisler, C. (1994). Paradoxical timing of the circadian rhythm of sleep propensity.',
    journal: 'Am. J. Physiology.',
  },
  {
    citation: 'Roenneberg, T. et al. Munich ChronoType Questionnaire.',
    journal: 'J. Biological Rhythms.',
  },
  {
    citation:
      'Eastman, C. & Burgess, H. (2009). How to travel the world without jet lag.',
    journal: 'Sleep Medicine Clinics.',
  },
  {
    citation:
      'Gooley, J. et al. (2011). Exposure to room light suppresses melatonin onset.',
    journal: 'JCEM.',
  },
];

/** Hex stroke colors for SVG icons, keyed by iconColor */
export const iconStrokeColors: Record<string, string> = {
  primary: '#7c6aff',
  coral: '#ff6b52',
  rose: '#ec4899',
  mint: '#10b981',
  sky: '#38b6ff',
  amber: '#f59e0b',
};
