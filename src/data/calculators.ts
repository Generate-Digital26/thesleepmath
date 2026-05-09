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
    slug: 'caffeine-cutoff-calculator',
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
    slug: 'sleep-debt-calculator',
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
    slug: 'sleep-efficiency-calculator',
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
    slug: 'jet-lag-calculator',
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

  // ──── Phase 2 ────

  {
    slug: 'melatonin-calculator',
    title: 'Melatonin Guide',
    description:
      'Most people take too much. Get evidence-based dosage and timing recommendations by age and purpose.',
    tag: { label: 'Most searched', class: 'tag-pop' },
    color: 'c-mint',
    iconColor: 'mint',
    iconPath:
      '<path d="M10.5 20.5L10 17h4l-.5 3.5"/><path d="M8.5 14h7"/><path d="M6 10c0-3.5 2.5-6 6-6s6 2.5 6 6c0 2-1 3.5-2.5 4.5H8.5C7 13.5 6 12 6 10z"/>',
    meta: '30 sec · AASM Guideline',
    cta: 'Calculate →',
    phase: 2,
  },
  {
    slug: 'sleep-cycle-calculator',
    title: 'Sleep Cycle',
    description:
      'Find the best times to sleep or wake up based on 90-minute cycles. Wake between cycles — not mid-dream.',
    tag: { label: 'Popular', class: 'tag-pop' },
    color: 'c-primary',
    iconColor: 'primary',
    iconPath:
      '<path d="M3 12h4l3-9 4 18 3-9h4"/>',
    meta: '10 sec · 90-min cycle model',
    cta: 'Calculate →',
    phase: 2,
  },
  {
    slug: 'baby-sleep-calculator',
    title: 'Baby Sleep Needs',
    description:
      'Age-based sleep schedule with nap windows, wake times, and bedtime recommendations. One tool vs. 10 articles.',
    tag: { label: 'Parenting', class: 'tag-pop' },
    color: 'c-rose',
    iconColor: 'rose',
    iconPath:
      '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"/>',
    meta: '15 sec · AAP Guidelines',
    cta: 'Calculate →',
    phase: 2,
  },
  {
    slug: 'alcohol-sleep-calculator',
    title: 'Alcohol Impact',
    description:
      'See how drinks affect your sleep stages tonight. BAC decay timeline, REM suppression, and when to safely sleep.',
    tag: { label: 'Science', class: 'tag-sci' },
    color: 'c-coral',
    iconColor: 'coral',
    iconPath:
      '<path d="M8 2v4M16 2v4"/><path d="M8 6l-2 14h12L16 6"/><path d="M6.5 14h11"/>',
    meta: '30 sec · Ebrahim et al., 2013',
    cta: 'Calculate →',
    phase: 2,
  },
  {
    slug: 'sleep-temperature-calculator',
    title: 'Room Temperature',
    description:
      'Your ideal bedroom temperature, personalized for age, bedding, and whether you run hot or cold.',
    tag: { label: 'Popular', class: 'tag-pop' },
    color: 'c-coral',
    iconColor: 'coral',
    iconPath:
      '<path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/>',
    meta: '20 sec · NSF Guidelines',
    cta: 'Calculate →',
    phase: 2,
  },
  {
    slug: 'circadian-rhythm-calculator',
    title: 'Circadian Rhythm Map',
    description:
      'Map your personal 24-hour body clock. See when your energy peaks, when to focus, exercise, and wind down.',
    tag: { label: 'Science', class: 'tag-sci' },
    color: 'c-amber',
    iconColor: 'amber',
    iconPath:
      '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>',
    meta: '30 sec · Czeisler et al., 1999',
    cta: 'Map my rhythm →',
    phase: 2,
  },
  {
    slug: 'screen-time-cutoff-calculator',
    title: 'Screen Time Cutoff',
    description:
      'When to stop screens before bed, based on your device, brightness, and blue light filter. Lux-based science.',
    tag: { label: 'New', class: 'tag-new' },
    color: 'c-sky',
    iconColor: 'sky',
    iconPath:
      '<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>',
    meta: '15 sec · Gooley et al., 2011',
    cta: 'Calculate →',
    phase: 2,
  },
  {
    slug: 'wake-time-calculator',
    title: 'Wake Time Optimizer',
    description:
      'Fell asleep already? Input when, and get the best alarm times aligned to your sleep cycles.',
    tag: { label: 'New', class: 'tag-new' },
    color: 'c-amber',
    iconColor: 'amber',
    iconPath:
      '<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>',
    meta: '10 sec · Sleep cycle model',
    cta: 'Calculate →',
    phase: 2,
  },
  {
    slug: 'shift-work-calculator',
    title: 'Shift Work Planner',
    description:
      'Night shifts, rotating shifts — get a personalized sleep, light, meal, and caffeine schedule that actually works.',
    tag: { label: 'Niche', class: 'tag-cbt' },
    color: 'c-primary',
    iconColor: 'primary',
    iconPath:
      '<polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/>',
    meta: '1 min · Boivin & Boudreau, 2014',
    cta: 'Plan my shifts →',
    phase: 2,
  },
  {
    slug: 'sleep-apnea-risk-calculator',
    title: 'Sleep Apnea Risk',
    description:
      'STOP-Bang screening in 2 minutes. 8 validated questions, auto-BMI calculation, clear next-steps guidance.',
    tag: { label: 'Clinical', class: 'tag-cbt' },
    color: 'c-coral',
    iconColor: 'coral',
    iconPath:
      '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
    meta: '2 min · Chung et al., 2008',
    cta: 'Screen now →',
    phase: 2,
  },
];

export const roadmapItems = [
  'Exercise Timing',
  'Pregnancy Sleep',
  'Sleep Latency Test',
  'Sleep Quality Score',
  'Sleep Hygiene Audit',
  'Light Exposure Guide',
  'Baby Sleep Regression',
  'Social Jet Lag',
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
