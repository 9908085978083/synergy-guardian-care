export interface WhyWorkItem {
  id: string;
  title: string;
  description: string;
  iconName: 'clock' | 'users' | 'heart' | 'graduation' | 'award' | 'shield';
}

export interface CareerPosition {
  id: string;
  index: string;
  title: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  image: string;
  imageAlt: string;
}

export interface RecruitmentStep {
  stepNumber: string;
  title: string;
  description: string;
  iconName: 'file' | 'search' | 'phone' | 'users' | 'shield' | 'check';
}

export const CAREERS_TRUST_ITEMS: string[] = [
  'Professional Recruitment Process',
  'Reference Verification',
  'Background Screening',
  'Family-Focused Culture',
];

export const WHY_WORK_WITH_US: WhyWorkItem[] = [
  {
    id: 'flexible',
    title: 'Flexible Work Opportunities',
    description:
      'Choose from full-time stay-in roles, day shifts, post-hospital recovery assignments, or occasional babysitting tailored to your schedule.',
    iconName: 'clock',
  },
  {
    id: 'supportive',
    title: 'Supportive Team Environment',
    description:
      'Work alongside dedicated Care Coordinators who support you from day-one onboarding through ongoing household placement.',
    iconName: 'users',
  },
  {
    id: 'impact',
    title: 'Meaningful Community Impact',
    description:
      'Make a lasting difference in the daily safety, dignity, and happiness of children, seniors, and families across Gauteng.',
    iconName: 'heart',
  },
  {
    id: 'development',
    title: 'Ongoing Professional Development',
    description:
      'Gain access to practical care guidance, first-aid refresher pathways, and skill progression across specialized care disciplines.',
    iconName: 'graduation',
  },
  {
    id: 'competitive',
    title: 'Competitive Opportunities',
    description:
      'Connect with reputable Johannesburg and Gauteng households offering fair, transparent, and respected professional placements.',
    iconName: 'award',
  },
  {
    id: 'ethics',
    title: 'Professional Standards & Ethics',
    description:
      'Operate within clear family charters, respectful workplace expectations, and high clinical and ethical standards.',
    iconName: 'shield',
  },
];

export const RECRUITED_POSITIONS: CareerPosition[] = [
  {
    id: 'professional-caregivers',
    index: '01',
    title: 'Professional Caregivers',
    description:
      'Provide attentive daily personal care, recovery assistance, and safe home support for adults and post-hospital clients.',
    responsibilities: [
      'Assist with personal hygiene, bathing, and mobility',
      'Support medication reminders and meal preparation',
      'Maintain calm daily wellness observations',
    ],
    requirements: [
      'Caregiving certificate or verifiable care experience',
      'Valid SA ID or work permit & clear screening',
      'Two contactable caregiving references',
    ],
    image: '/src/assets/images/service_home_care_1795284526191.jpg',
    imageAlt:
      'South African professional caregiver guiding an older client through a structured home recovery plan',
  },
  {
    id: 'elderly-care-assistants',
    index: '02',
    title: 'Elderly Care Assistants',
    description:
      'Help seniors live safely, comfortably, and independently in their private residences or retirement estates.',
    responsibilities: [
      'Fall-prevention support & gentle mobility guidance',
      'Daily routine continuity & hydration checks',
      'Respectful dementia-friendly companionship',
    ],
    requirements: [
      'Patience, warmth, and elder-care familiarity',
      'Clear communication & calm emergency judgement',
      'Contactable family or clinical references',
    ],
    image: '/src/assets/images/sa_home_wellness_check_1795285400847.jpg',
    imageAlt:
      'Black South African elderly care nurse smiling while checking blood pressure for an older couple at home',
  },
  {
    id: 'childcare-providers',
    index: '03',
    title: 'Childcare Providers',
    description:
      'Nurture infants, toddlers, and school-age children with structured daytime developmental care and homework support.',
    responsibilities: [
      'Age-appropriate play, reading & learning activities',
      'Nutritious meal & lunchbox preparation',
      'Safe school drop-off & homework supervision',
    ],
    requirements: [
      'Proven childcare or ECD experience',
      'Paediatric first-aid training advantageous',
      'Warm, dependable, safety-first mindset',
    ],
    image: '/src/assets/images/sa_nanny_childcare_1795287293778.jpg',
    imageAlt:
      'Compassionate Black South African childcare specialist engaging children with learning blocks and homework',
  },
  {
    id: 'babysitters',
    index: '04',
    title: 'Babysitters',
    description:
      'Deliver reliable evening, weekend, holiday, and short-notice childcare for Johannesburg and Gauteng families.',
    responsibilities: [
      'Safe evening supervision & bedtime routines',
      'Calm infant settling and attentive engagement',
      'Clear parent check-in updates during bookings',
    ],
    requirements: [
      'Verifiable childcare or babysitting references',
      'Valid South African ID & clean background check',
      'Punctual, trustworthy & adaptable attitude',
    ],
    image: '/src/assets/images/sa_hero_family_care_1795285399863.jpg',
    imageAlt:
      'Warm South African childcare provider supporting a joyful multi-generational household',
  },
  {
    id: 'stay-in-nannies',
    index: '05',
    title: 'Stay-In Nannies',
    description:
      'Join long-term executive and working-parent households as a dedicated live-in nanny anchoring daily family routines.',
    responsibilities: [
      'Full morning, school-prep & evening child routines',
      'Developmental infant & toddler supervision',
      'Light child-related laundry and nursery upkeep',
    ],
    requirements: [
      'Minimum 2+ years stay-in nanny experience',
      'Strong contactable family references',
      'Valid SA ID / work authorization & first-aid ideal',
    ],
    image: '/src/assets/images/sa_stayin_nanny_care_1795292468761.jpg',
    imageAlt:
      'Poised Black South African stay-in nanny preparing a schoolgirl for the morning with her mother',
  },
  {
    id: 'disability-support-workers',
    index: '06',
    title: 'Disability Support Workers',
    description:
      'Empower children and adults living with physical, cognitive, or developmental disabilities to live with autonomy and dignity.',
    responsibilities: [
      'Safe transfers & adaptive daily living support',
      'Reinforcing therapist & mobility exercises',
      'Supporting outings, appointments & social inclusion',
    ],
    requirements: [
      'Experience in disability, special-needs or nursing care',
      'Empathy, physical steadiness & discretion',
      'Clear criminal & reference verification',
    ],
    image: '/src/assets/images/sa_disability_support_1795285399740.jpg',
    imageAlt:
      'Dedicated South African disability support worker assisting a smiling adult man in a wheelchair',
  },
  {
    id: 'companion-care-assistants',
    index: '07',
    title: 'Companion Care Assistants',
    description:
      'Provide uplifting conversation, accompanied outings, and gentle daily wellness presence for seniors living independently.',
    responsibilities: [
      'Engaging conversation, reading & shared hobbies',
      'Escorting clients to appointments & tea outings',
      'Light meal prep & household wellness check-ins',
    ],
    requirements: [
      'Excellent interpersonal & listening skills',
      'Warm, patient & respectful presence',
      'Verified identity & personal references',
    ],
    image: '/src/assets/images/sa_companionship_tea_1795285399680.jpg',
    imageAlt:
      'Smiling Black South African grandmother and companion care assistant sharing tea in a sunlit conservatory',
  },
  {
    id: 'domestic-support-personnel',
    index: '08',
    title: 'Domestic Support Personnel',
    description:
      'Maintain serene, spotless, and orderly residential environments supporting busy Gauteng families and seniors.',
    responsibilities: [
      'Detailed home hygiene, laundry & linen care',
      'Family meal preparation & kitchen organization',
      'Discreet upkeep of private family spaces',
    ],
    requirements: [
      'Proven private-home housekeeping track record',
      'Contactable South African employer references',
      'High standards of honesty, reliability & care',
    ],
    image: '/src/assets/images/sa_about_courtyard_care_1795285398635.jpg',
    imageAlt:
      'Warm South African care and home support specialist walking alongside a senior resident in an estate garden',
  },
];

export const MINIMUM_REQUIREMENTS: string[] = [
  'South African ID or valid work documentation',
  'Contactable references',
  'Relevant experience preferred',
  'Professional attitude',
  'Strong communication skills',
  'Compassion and reliability',
  'Clear background screening process',
  'Relevant qualifications where applicable',
];

export const RECRUITMENT_STEPS: RecruitmentStep[] = [
  {
    stepNumber: '01',
    title: 'Online Application',
    description:
      'Submit your profile, experience summary, residential area, and CV using our quick online application form.',
    iconName: 'file',
  },
  {
    stepNumber: '02',
    title: 'CV Review',
    description:
      'Our recruitment coordinators carefully review your caregiving background, qualifications, and preferred schedule.',
    iconName: 'search',
  },
  {
    stepNumber: '03',
    title: 'Reference Verification',
    description:
      'We contact your previous South African families or clinical employers directly to verify reliability and character.',
    iconName: 'phone',
  },
  {
    stepNumber: '04',
    title: 'Interview Assessment',
    description:
      'Participate in a structured competency interview assessing communication, empathy, and care judgement.',
    iconName: 'users',
  },
  {
    stepNumber: '05',
    title: 'Background Screening',
    description:
      'Mandatory identity authentication, criminal clearance checks, and certificate verification are completed.',
    iconName: 'shield',
  },
  {
    stepNumber: '06',
    title: 'Approval & Placement',
    description:
      'Approved professionals join our active roster and are thoughtfully matched with supportive Johannesburg & Gauteng families.',
    iconName: 'check',
  },
];
