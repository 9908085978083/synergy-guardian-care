export interface CoreValueItem {
  id: string;
  title: string;
  description: string;
  iconName: 'heart' | 'shield' | 'award' | 'handshake' | 'sparkles' | 'users';
}

export interface AboutServiceOverview {
  id: string;
  title: string;
  description: string;
  stageLabel: string;
}

export const CORE_VALUES: CoreValueItem[] = [
  {
    id: 'compassion',
    title: 'COMPASSION',
    description: 'We care for every individual with kindness, patience and respect.',
    iconName: 'heart',
  },
  {
    id: 'integrity',
    title: 'INTEGRITY',
    description: 'We operate with honesty, professionalism and accountability.',
    iconName: 'shield',
  },
  {
    id: 'excellence',
    title: 'EXCELLENCE',
    description: 'We strive for the highest standards in care delivery.',
    iconName: 'award',
  },
  {
    id: 'trust',
    title: 'TRUST',
    description: 'We build lasting relationships through reliability and consistency.',
    iconName: 'handshake',
  },
  {
    id: 'dignity',
    title: 'DIGNITY',
    description: 'Every person deserves to be treated with respect and honour.',
    iconName: 'sparkles',
  },
  {
    id: 'family-first',
    title: 'FAMILY FIRST',
    description: 'We recognise that every care decision affects the entire family.',
    iconName: 'users',
  },
];

export const WHY_CHOOSE_TRUST_CARDS: string[] = [
  'Carefully Screened Caregivers',
  'Reference Verification Process',
  'Family-Centred Care Approach',
  'Flexible Care Solutions',
  'Professional Care Coordination',
  'Ongoing Quality Monitoring',
  'Responsive Communication',
  'Commitment to Excellence',
];

export const ABOUT_SERVICES_OVERVIEW: AboutServiceOverview[] = [
  {
    id: 'elderly-care',
    title: 'Elderly Care',
    stageLabel: 'Senior Support',
    description:
      'Dignified personal care, mobility support, medication prompts, and warm daily companionship helping seniors thrive at home.',
  },
  {
    id: 'home-based-care',
    title: 'Home-Based Care',
    stageLabel: 'Daily & 24/7 Care',
    description:
      'Tailored in-home assistance preserving household independence, nutrition, safety, and comfort around your family routine.',
  },
  {
    id: 'child-care',
    title: 'Child Care',
    stageLabel: 'Early Years & School',
    description:
      'Structured developmental supervision, infant nurturing, school readiness, and after-school support for working parents.',
  },
  {
    id: 'babysitting-services',
    title: 'Babysitting Services',
    stageLabel: 'Flexible Bookings',
    description:
      'Dependable vetted sitters for evening, weekend, holiday, and short-notice family care across Johannesburg and Gauteng.',
  },
  {
    id: 'stay-in-nannies',
    title: 'Stay-In Nannies',
    stageLabel: 'Live-In Placement',
    description:
      'Carefully matched, experienced live-in nannies providing steady morning-to-bedtime childcare and family routine harmony.',
  },
  {
    id: 'disability-support',
    title: 'Disability Support',
    stageLabel: 'Empowered Living',
    description:
      'Respectful, individualized daily assistance promoting autonomy, mobility confidence, and meaningful community inclusion.',
  },
  {
    id: 'post-hospital-recovery',
    title: 'Post-Hospital Recovery Care',
    stageLabel: 'Discharge Support',
    description:
      'Structured transitional caregiving following surgery or hospital discharge to promote safe healing and prevent readmission.',
  },
  {
    id: 'companion-care-services',
    title: 'Companion Care Services',
    stageLabel: 'Social & Wellness',
    description:
      'Unhurried conversation, accompanied outings, reading, and proactive wellbeing check-ins countering isolation.',
  },
];

export const GAUTENG_COMMUNITIES: string[] = [
  'Johannesburg',
  'Randburg',
  'Sandton',
  'Midrand',
  'Fourways',
  'Roodepoort',
  'Bryanston',
  'Northcliff',
  'Bedfordview',
];
