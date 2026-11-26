export interface CareService {
  id: string;
  index: string;
  title: string;
  subtitle?: string;
  summary: string;
  image?: string;
  imageAlt?: string;
  detailOverview: string;
  inclusions: string[];
  idealFor: string;
}

export interface LifeStage {
  id: string;
  stage: string;
  title: string;
  description: string;
}

export interface CareStat {
  id: string;
  value: string;
  label: string;
  detail: string;
}

export interface CarePillar {
  id: string;
  title: string;
  description: string;
  iconName: 'shield' | 'heart' | 'tree' | 'award';
}

export interface VettingStage {
  id: string;
  step: string;
  title: string;
  description: string;
  iconName: 'shield' | 'id' | 'phone' | 'graduation' | 'users' | 'eye';
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  headline: string;
  description: string;
  deliverable: string;
  timeframe: string;
  iconName: 'message' | 'clipboard' | 'usercheck' | 'home' | 'activity';
}

export interface FamilyTestimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  location: string;
  outcome: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface ServiceArea {
  id: string;
  city: string;
  corridor: string;
  suburbs: string[];
  responseTime: string;
  coordinationNote: string;
}

export type PackageCategory = 'childcare' | 'elderly' | 'disability';

export interface CarePackageOption {
  id: string;
  category: PackageCategory;
  categoryLabel: string;
  title: string;
  investmentRange: string;
  detailHeading: string;
  factors: string[];
  note?: string;
  ctaLabel: string;
}

export interface InvestmentGuideRow {
  service: string;
  investmentGuide: string;
  category: PackageCategory;
}

export const BRAND_LOGO_URL = '/assets/aistudio/Synergy_Guardian_Care_Logo_4b4842ce.jpg';
export const PRIMARY_PHONE_DISPLAY = '076 647 5746';
export const PRIMARY_PHONE_TEL = 'tel:+27766475746';
export const PRIMARY_WHATSAPP_URL = 'https://wa.me/27766475746';
export const PRIMARY_EMAIL = 'info@synergyguardiancare.co.za';

export const HERO_IMAGE = '/src/assets/images/sa_multigen_hero_1795287293781.jpg';
export const ABOUT_IMAGE = '/src/assets/images/sa_about_courtyard_care_1795285398635.jpg';

export const FAMILY_CARE_STATS: CareStat[] = [
  {
    id: 'consultations',
    value: '500+',
    label: 'Family Consultations',
    detail: 'Private household assessments across Gauteng',
  },
  {
    id: 'solutions',
    value: '100% Vetted',
    label: 'Professional Care Solutions',
    detail: 'Identity, criminal & reference verified practitioners',
  },
  {
    id: 'placement',
    value: '48–72 hrs',
    label: 'Fast Caregiver Placement',
    detail: 'Rapid family matching & guided handover',
  },
  {
    id: 'coordination',
    value: '24/7 Desk',
    label: 'Dedicated Care Coordination',
    detail: 'Continuous supervisory oversight & family updates',
  },
];

export const TRUST_INDICATORS: string[] = [
  'Background Checked Candidates',
  'Reference Verified',
  'Childcare & Stay-In Nannies',
  'Elderly & Post-Hospital Care',
  'Disability Support',
  'Dedicated Care Coordination',
];

export const LIFE_STAGES: LifeStage[] = [
  {
    id: 'children',
    stage: '01',
    title: 'Children',
    description:
      'Vetted stay-in nannies, newborn care, babysitting, toddler supervision, school readiness, and after-school support.',
  },
  {
    id: 'working-parents',
    stage: '02',
    title: 'Working Parents',
    description:
      'Dependable household routines, homework guidance, school holiday coverage, and trusted domestic coordination.',
  },
  {
    id: 'disabilities',
    stage: '03',
    title: 'People Living with Disabilities',
    description:
      'Respectful, individualized assistance promoting autonomy, inclusion, safe mobility, and daily wellbeing.',
  },
  {
    id: 'seniors',
    stage: '04',
    title: 'Seniors',
    description:
      'Dignified elderly care, post-hospital recovery, companion care, medication reminders, and 24-hour support.',
  },
];

export const CARE_SOLUTIONS: CareService[] = [
  {
    id: 'child-care',
    index: '01.',
    title: 'Child Care',
    subtitle: 'Early Years, School & Holiday Support',
    summary:
      'Structured, nurturing childcare for newborns, infants, toddlers, and school-going children—giving working parents reliable daily peace of mind.',
    image: '/src/assets/images/sa_nanny_childcare_1795287293778.jpg',
    imageAlt:
      'Compassionate Black South African childcare specialist guiding children with school homework and wooden blocks at a sunlit oak table',
    detailOverview:
      'Designed around your children’s developmental stage and your family timetable, our childcare specialists bring safety, warmth, and structured learning into your home.',
    inclusions: [
      'Newborn, infant, and toddler developmental supervision',
      'After-school homework guidance and meal preparation',
      'School holiday programmes and routine continuity',
      'Paediatric first-aid & safety-trained specialists',
    ],
    idealFor:
      'Working parents across Johannesburg, Sandton, Fourways, and Gauteng seeking trusted daily childcare.',
  },
  {
    id: 'stay-in-nannies',
    index: '02.',
    title: 'Stay-In Nannies',
    subtitle: 'Full-Time Live-In Nanny Placement',
    summary:
      'Professional, vetted, and compassionate nannies who live with families and provide dedicated childcare, morning & bedtime routines, and household support.',
    image: '/src/assets/images/sa_stayin_nanny_care_1795292468761.jpg',
    imageAlt:
      'Poised Black South African stay-in nanny assisting a smiling schoolchild and working mother in a sunlit modern Johannesburg foyer',
    detailOverview:
      'Our live-in nanny placement service manages multi-stage screening, criminal background checks, reference verification, and thoughtful family matching.',
    inclusions: [
      'Full-time live-in childcare & consistent household routines',
      'School preparation, lunchbox prep & transport coordination',
      'Multi-child household care & light child-related housekeeping',
      'Guided placement onboarding & ongoing coordinator support',
    ],
    idealFor:
      'Executive and dual-career households seeking long-term live-in childcare stability.',
  },
  {
    id: 'babysitting',
    index: '03.',
    title: 'Babysitting',
    subtitle: 'Flexible Day, Evening & Weekend Care',
    summary:
      'Trusted, on-demand babysitting and overnight childcare for date evenings, corporate events, travel, or unexpected school schedule changes.',
    detailOverview:
      'Every babysitter on our roster undergoes the same strict identity, criminal, and reference screening as our full-time placements.',
    inclusions: [
      'Evening, weekend, and short-notice family bookings',
      'Safe bedtime supervision and calm infant settling',
      'Hotel, estate, and family event childcare coverage',
      'Clear parent check-in updates throughout the booking',
    ],
    idealFor:
      'Parents needing reliable occasional, evening, or weekend childcare without compromising safety.',
  },
  {
    id: 'elderly-care',
    index: '04.',
    title: 'Elderly Care',
    subtitle: 'Dignified Senior Living at Home',
    summary:
      'Compassionate assistance with daily living, personal hygiene, mobility support, medication reminders, and dementia-friendly routines for ageing loved ones.',
    image: '/src/assets/images/sa_home_wellness_check_1795285400847.jpg',
    imageAlt:
      'Black South African care nurse checking blood pressure and smiling with an elderly South African couple in a sunlit residence',
    detailOverview:
      'Tailored daily or 24-hour live-in senior care designed to preserve dignity, independence, and comfort within your loved one’s private residence or retirement estate.',
    inclusions: [
      'Respectful bathing, dressing, and daily hygiene assistance',
      'Medication schedule prompts and nutritious meal prep',
      'Fall-prevention vigilance and safe mobility transfers',
      'Weekly family wellness summaries for local & overseas relatives',
    ],
    idealFor:
      'Seniors and families across Randburg, Sandton, Roodepoort, and Pretoria seeking dignified home ageing.',
  },
  {
    id: 'post-hospital-care',
    index: '05.',
    title: 'Post-Hospital Care',
    subtitle: 'Safe Recovery & Discharge Transition',
    summary:
      'Structured recovery caregiving immediately following surgery, illness, or hospital discharge—supporting safe healing and preventing readmissions.',
    image: '/src/assets/images/service_home_care_1795284526191.jpg',
    imageAlt:
      'Professional care nurse reviewing a post-hospital recovery plan with an elderly client in a calm sunlit home suite',
    detailOverview:
      'Rapid-response recovery support coordinated with discharge instructions so your loved one transitions smoothly from hospital ward to home comfort.',
    inclusions: [
      'Same-day or 24-hour discharge placement readiness',
      'Mobility rehabilitation assistance & rest monitoring',
      'Medication adherence, hydration & wound-hygiene support',
      'Appointment accompaniment & family recovery progress updates',
    ],
    idealFor:
      'Patients recovering from orthopaedic surgery, cardiac care, or acute hospital stays.',
  },
  {
    id: 'disability-support',
    index: '06.',
    title: 'Disability Support',
    subtitle: 'Empowerment, Inclusion & Autonomy',
    summary:
      'Personalized care plans promoting independence, dignity, and active daily participation for children, adults, and seniors living with disabilities.',
    image: '/src/assets/images/sa_disability_support_1795285399740.jpg',
    imageAlt:
      'South African caregiver collaborating with a smiling adult man using a wheelchair at a sunlit dining table',
    detailOverview:
      'Respectful, person-centred support tailored around physical, cognitive, or developmental needs in partnership with therapists and family members.',
    inclusions: [
      'Adaptive daily living and safe transfer assistance',
      'Reinforcement of physiotherapy & occupational routines',
      'Community outings, appointments & social inclusion',
      'Long-term individualized support plans for children & adults',
    ],
    idealFor:
      'Individuals living with physical, neurological, or developmental disabilities.',
  },
  {
    id: 'companion-care',
    index: '07.',
    title: 'Companion Care',
    subtitle: 'Social Connection & Wellbeing Monitoring',
    summary:
      'Warm social engagement, conversation, accompanied outings, and routine wellbeing checks countering isolation for loved ones living independently.',
    image: '/src/assets/images/sa_companionship_tea_1795285399680.jpg',
    imageAlt:
      'Smiling Black South African grandmother and caregiver sharing tea and reading together in a sunlit Johannesburg conservatory',
    detailOverview:
      'Unhurried companionship paired with observant wellness monitoring—alerting families early to subtle shifts in appetite, sleep, mood, or mobility.',
    inclusions: [
      'Conversation, reading, hobbies, and gentle garden walks',
      'Accompanied shopping, tea outings & medical visits',
      'Routine wellbeing observation & hydration check-ins',
      'Respite relief giving family caregivers restorative time',
    ],
    idealFor:
      'Seniors living alone and families wanting proactive emotional and wellness support.',
  },
];

export const FOUR_PILLARS: CarePillar[] = [
  {
    id: 'protection',
    title: 'Safety & Vetting First',
    description: 'Every candidate passes multi-stage criminal, identity, and reference screening prior to placement.',
    iconName: 'shield',
  },
  {
    id: 'compassion',
    title: 'Warm Family Culture',
    description: 'Every child, parent, and senior is cared for with patience, cultural respect, and genuine warmth.',
    iconName: 'heart',
  },
  {
    id: 'independence',
    title: 'Tailored to Your Home',
    description: 'Bespoke care schedules built around your household rhythm, medical guidance, and lifestyle.',
    iconName: 'tree',
  },
  {
    id: 'excellence',
    title: 'Ongoing Quality Oversight',
    description: 'Dedicated Care Coordinators stay actively involved with scheduled check-ins and replacement guarantees.',
    iconName: 'award',
  },
];

export const VETTING_STAGES: VettingStage[] = [
  {
    id: 'background',
    step: '01',
    title: 'Background Screening',
    description:
      'Comprehensive criminal record clearances and integrity checks conducted before any candidate enters our active roster.',
    iconName: 'shield',
  },
  {
    id: 'identity',
    step: '02',
    title: 'Identity Verification',
    description:
      'Strict South African ID, passport, and work-permit verification alongside confirmed residential address records.',
    iconName: 'id',
  },
  {
    id: 'references',
    step: '03',
    title: 'Reference Checking',
    description:
      'Direct telephonic verification with previous South African families and clinical employers to confirm reliability and character.',
    iconName: 'phone',
  },
  {
    id: 'qualifications',
    step: '04',
    title: 'Qualification Verification',
    description:
      'Authentication of caregiving certificates, SANC registrations, paediatric first-aid credentials, and childcare training.',
    iconName: 'graduation',
  },
  {
    id: 'interview',
    step: '05',
    title: 'Interview Assessment',
    description:
      'In-depth competency interviews evaluating communication, emergency judgement, empathy, and household professionalism.',
    iconName: 'users',
  },
  {
    id: 'monitoring',
    step: '06',
    title: 'Placement Monitoring',
    description:
      'Structured onboarding check-ins and ongoing supervisory reviews to uphold safety and satisfaction long after placement.',
    iconName: 'eye',
  },
];

export const CARE_PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: '01',
    title: 'Consultation',
    headline: 'Speak With A Care Coordinator',
    description:
      'Share your family’s goals, care hours, location, and preferences during a complimentary consultation by phone, WhatsApp, or private inquiry.',
    deliverable: 'Initial Care Brief & Package Recommendation',
    timeframe: 'Same Day',
    iconName: 'message',
  },
  {
    stepNumber: '02',
    title: 'Family Assessment',
    headline: 'In-Home Safety & Routine Evaluation',
    description:
      'We assess household routines, childcare or mobility requirements, medical protocols, and cultural expectations to define an accurate care profile.',
    deliverable: 'Tailored Family Care Charter',
    timeframe: 'Within 24–48 Hours',
    iconName: 'clipboard',
  },
  {
    stepNumber: '03',
    title: 'Caregiver Matching',
    headline: 'Curated Selection of Vetted Candidates',
    description:
      'We shortlist thoroughly vetted nannies or caregivers whose verified experience, qualifications, and temperament match your household.',
    deliverable: 'Vetted Candidate Profiles & Family Interviews',
    timeframe: '48–72 Hours',
    iconName: 'usercheck',
  },
  {
    stepNumber: '04',
    title: 'Service Commencement',
    headline: 'Guided Onboarding & Handover',
    description:
      'Your selected nanny or caregiver begins with clear routine checklists, emergency contacts, and direct coordination from our care desk.',
    deliverable: 'Structured Day-One Handover',
    timeframe: 'Scheduled Start Date',
    iconName: 'home',
  },
  {
    stepNumber: '05',
    title: 'Ongoing Quality Monitoring',
    headline: 'Continuous Support & Supervisory Reviews',
    description:
      'Our coordinators check in regularly with your family and practitioner, ensuring sustained excellence and swift backup support whenever needed.',
    deliverable: 'Ongoing Check-Ins & 24/7 Support Desk',
    timeframe: 'Continuous',
    iconName: 'activity',
  },
];

export const TESTIMONIALS: FamilyTestimonial[] = [
  {
    id: 'mokoena',
    quote:
      '“Synergy Guardian Care provided exceptional support for our family during a difficult time. Professional, caring, and dependable.”',
    author: 'Thandiwe Mokoena',
    role: 'Working Mother & Family Care Coordinator',
    location: 'Sandton, Johannesburg',
    outcome: 'Coordinated post-hospital elder recovery alongside after-school childcare under one trusted team.',
  },
  {
    id: 'van-der-merwe',
    quote:
      '“Our stay-in nanny in Fourways has become an indispensable part of our children’s daily routine, and the coordinator check-ins give us complete confidence while we travel for work.”',
    author: 'Hendrik & Claire van der Merwe',
    role: 'Executive Parents',
    location: 'Fourways, Johannesburg',
    outcome: 'Matched a paediatric-trained stay-in nanny within 72 hours with seamless school routine support.',
  },
  {
    id: 'naidoo',
    quote:
      '“Knowing every caregiver had verified references and background checks before stepping into my mother’s home in Randburg gave our entire family immediate peace of mind.”',
    author: 'Priya Naidoo',
    role: 'Daughter & Primary Care Decision-Maker',
    location: 'Randburg, Johannesburg',
    outcome: 'Sustained safe, dignified independent living for 18 months with zero missed medication schedules.',
  },
];

export const SERVICE_AREAS: ServiceArea[] = [
  {
    id: 'johannesburg',
    city: 'Johannesburg',
    corridor: 'Central & Northern Suburbs',
    suburbs: ['Houghton', 'Rosebank', 'Parktown', 'Melrose', 'Saxonwold'],
    responseTime: '24–48 hrs assessment dispatch',
    coordinationNote: 'Full stay-in nanny placements, post-hospital care, and retirement estate partnerships across Johannesburg.',
  },
  {
    id: 'sandton',
    city: 'Sandton',
    corridor: 'Sandton & Morningside Hub',
    suburbs: ['Bryanston', 'Morningside', 'Hyde Park', 'Sandhurst', 'Rivonia'],
    responseTime: 'Same-day advisor visit available',
    coordinationNote: 'Executive family childcare, vetted stay-in nannies, and senior care coordination in Sandton.',
  },
  {
    id: 'fourways',
    city: 'Fourways',
    corridor: 'Fourways & Dainfern Estates',
    suburbs: ['Dainfern', 'Broadacres', 'Lonehill', 'Craigavon', 'Cedar Lakes'],
    responseTime: '24–48 hrs assessment dispatch',
    coordinationNote: 'Estate-compliant stay-in nannies, babysitting, school support, and elder home care across Fourways.',
  },
  {
    id: 'randburg',
    city: 'Randburg',
    corridor: 'North-Western Residential Belt',
    suburbs: ['Blairgowrie', 'Ferndale', 'Linden', 'Northcliff', 'Cresta'],
    responseTime: '24–48 hrs assessment dispatch',
    coordinationNote: 'Childcare, after-school homework supervision, elderly daily care, and respite support in Randburg.',
  },
  {
    id: 'midrand',
    city: 'Midrand',
    corridor: 'Waterfall & Kyalami Corridor',
    suburbs: ['Waterfall Estate', 'Kyalami', 'Carlswald', 'Beaulieu', 'Noordwyk'],
    responseTime: '24 hrs assessment dispatch',
    coordinationNote: 'Trusted placements for young families and multi-generational households across Midrand estates.',
  },
  {
    id: 'roodepoort',
    city: 'Roodepoort',
    corridor: 'West Rand & Lifestyle Estates',
    suburbs: ['Ruimsig', 'Eagle Canyon', 'Constantia Kloof', 'Featherbrooke', 'Weltevreden Park'],
    responseTime: '24–48 hrs assessment dispatch',
    coordinationNote: 'Vetted live-in caregivers, disability support, and childcare placements throughout Roodepoort.',
  },
  {
    id: 'pretoria',
    city: 'Pretoria',
    corridor: 'Tshwane & Pretoria East',
    suburbs: ['Waterkloof', 'Brooklyn', 'Menlo Park', 'Silver Lakes', 'Faerie Glen'],
    responseTime: '24–48 hrs assessment dispatch',
    coordinationNote: 'Comprehensive childcare placements, post-hospital care, and senior wellness monitoring in Gauteng.',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'vetting',
    question: 'How thoroughly are Synergy Guardian Care nannies and caregivers vetted?',
    answer:
      'Every candidate completes our 6-stage screening process: criminal background screening, SA ID or permit verification, direct telephonic reference checks with past employers, certificate/SANC qualification checks, a structured competency interview, and ongoing placement monitoring.',
  },
  {
    id: 'timeline',
    question: 'How quickly can you arrange a caregiver or stay-in nanny in Johannesburg or Gauteng?',
    answer:
      'Initial consultations take place the same day. Home or family assessments are scheduled within 24–48 hours, and vetted caregiver or nanny matching typically completes within 48–72 hours—with priority rapid response available for urgent post-hospital discharges.',
  },
  {
    id: 'areas',
    question: 'Which areas across Johannesburg and Gauteng do you cover?',
    answer:
      'We serve families and residential estates throughout Johannesburg, Sandton, Fourways, Randburg, Midrand, Roodepoort, Pretoria, and neighbouring Gauteng suburbs.',
  },
  {
    id: 'replacement',
    question: 'What happens if our family needs to adjust schedules or replace a placement?',
    answer:
      'Your Care Coordinator remains actively involved after day one. If your family’s routine changes or you ever wish to review a match, we provide swift support, replacement coordination, and standby relief coverage so care is never interrupted.',
  },
  {
    id: 'pricing',
    question: 'How are care package rates structured?',
    answer:
      'Following a complimentary initial consultation, we tailor a transparent quotation based on whether you require hourly/daily visits, babysitting, full-time nanny placement, stay-in caregiving, or specialized post-hospital and disability support.',
  },
];

export const CARE_PACKAGE_OPTIONS: CarePackageOption[] = [
  {
    id: 'standard-childcare',
    category: 'childcare',
    categoryLabel: 'Child Care & Stay-In Nannies',
    title: 'Standard Child Care Support',
    investmentRange: 'From R250 – R450 per day',
    detailHeading: 'Ideal for',
    factors: [
      'Babysitting',
      'School holidays',
      'Occasional childcare support',
    ],
    ctaLabel: 'Arrange A Family Consultation',
  },
  {
    id: 'full-time-nanny',
    category: 'childcare',
    categoryLabel: 'Child Care & Stay-In Nannies',
    title: 'Full-Time Nanny Placement',
    investmentRange: 'Starting from R4,500+ per month',
    detailHeading: 'Depends on',
    factors: [
      'Experience',
      'Qualifications',
      'Hours required',
      'Responsibilities',
    ],
    ctaLabel: 'Get a Personalised Quote',
  },
  {
    id: 'stay-in-nanny',
    category: 'childcare',
    categoryLabel: 'Child Care & Stay-In Nannies',
    title: 'Stay-In Nanny Services',
    investmentRange: 'R6,500 – R15,000+ per month',
    detailHeading: 'Based on',
    factors: [
      'Stay-in arrangements',
      'Childcare requirements',
      'Additional household support',
      'Number of children',
    ],
    ctaLabel: 'Get a Personalised Quote',
  },
  {
    id: 'companionship-visits',
    category: 'elderly',
    categoryLabel: 'Elderly Care',
    title: 'Companionship Visits',
    investmentRange: 'From R250 – R600 per visit',
    detailHeading: 'Includes',
    factors: [
      'Emotional support',
      'Social interaction',
      'Wellness monitoring',
    ],
    ctaLabel: 'Arrange A Family Consultation',
  },
  {
    id: 'daily-home-care',
    category: 'elderly',
    categoryLabel: 'Elderly Care',
    title: 'Daily Home Care Support',
    investmentRange: 'Starting from R500+ per day',
    detailHeading: 'Tailored around',
    factors: [
      'Personal hygiene & daily routine support',
      'Medication reminders & meal prep',
      'Mobility & post-hospital recovery safety',
    ],
    note: 'Care plans customized according to individual requirements.',
    ctaLabel: 'Get a Personalised Quote',
  },
  {
    id: 'live-in-caregiver',
    category: 'elderly',
    categoryLabel: 'Elderly Care',
    title: 'Live-In Caregiver Services',
    investmentRange: 'R7,000 – R18,000+ per month',
    detailHeading: 'Depending on',
    factors: [
      'Care intensity',
      'Overnight assistance',
      'Medical requirements',
    ],
    ctaLabel: 'Get a Personalised Quote',
  },
  {
    id: 'disability-personalized',
    category: 'disability',
    categoryLabel: 'Disability Support',
    title: 'Personalized Support Services',
    investmentRange: 'From R350 – R850 per visit',
    detailHeading: 'Focus areas',
    factors: [
      'Inclusion & dignified daily living support',
      'Mobility & occupational routine assistance',
      'Safe community & appointment accompaniment',
    ],
    note: 'Pricing determined after assessment.',
    ctaLabel: 'Speak With A Care Coordinator',
  },
  {
    id: 'disability-long-term',
    category: 'disability',
    categoryLabel: 'Disability Support',
    title: 'Long-Term Support Packages',
    investmentRange: 'Customised Care Plan',
    detailHeading: 'Customised plans available for',
    factors: [
      'Children',
      'Adults',
      'Special needs care',
      'Development support',
    ],
    ctaLabel: 'Speak With A Care Coordinator',
  },
];

export const INVESTMENT_GUIDE_ROWS: InvestmentGuideRow[] = [
  {service: 'Child Care', investmentGuide: 'From R250/day', category: 'childcare'},
  {service: 'Nanny Placement', investmentGuide: 'From R4,500/month', category: 'childcare'},
  {service: 'Stay-In Nanny', investmentGuide: 'From R6,500/month', category: 'childcare'},
  {service: 'Elderly Care', investmentGuide: 'From R250/visit', category: 'elderly'},
  {service: 'Home Care', investmentGuide: 'From R500/day', category: 'elderly'},
  {service: 'Live-In Caregiver', investmentGuide: 'From R7,000/month', category: 'elderly'},
  {service: 'Disability Support', investmentGuide: 'From R350/visit', category: 'disability'},
];
