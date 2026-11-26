import {useState, type ChangeEvent, type FormEvent} from 'react';
import {
  ArrowRight,
  Award,
  BadgeCheck,
  Briefcase,
  CheckCircle2,
  Clock,
  FileText,
  GraduationCap,
  HeartHandshake,
  MessageCircle,
  PhoneCall,
  Search,
  ShieldCheck,
  Upload,
  Users,
  X,
} from 'lucide-react';
import {motion} from 'motion/react';
import {
  BRAND_LOGO_URL,
  PRIMARY_PHONE_DISPLAY,
  PRIMARY_PHONE_TEL,
  PRIMARY_WHATSAPP_URL,
  SERVICE_AREAS,
} from '../data/careData';
import {
  CAREERS_TRUST_ITEMS,
  MINIMUM_REQUIREMENTS,
  RECRUITED_POSITIONS,
  RECRUITMENT_STEPS,
  WHY_WORK_WITH_US,
  type RecruitmentStep,
  type WhyWorkItem,
} from '../data/careersData';
import {ResilientImage} from './ResilientImage';

const CAREERS_WHATSAPP_URL = `${PRIMARY_WHATSAPP_URL}?text=${encodeURIComponent(
  'Hello Synergy Guardian Care Recruitment Team, I would like to inquire about caregiver/nanny career opportunities.',
)}`;

const HIGHEST_QUALIFICATIONS = [
  'Grade 12 / Matric',
  'Home-Based Care / Caregiver Certificate',
  'Early Childhood Development (ECD) / Nanny Training',
  'Enrolled Nursing Auxiliary / SANC Registered',
  'First Aid & Paediatric CPR Certified',
  'Tertiary Diploma / Degree',
  'Extensive Practical Experience',
];

const AVAILABILITY_OPTIONS = [
  'Immediate Start',
  'Full-Time (Stay-In)',
  'Full-Time (Stay-Out / Day Shifts)',
  'Part-Time / Flexible Shifts',
  'Evenings & Weekends (Babysitting)',
  '2 Weeks Notice',
  '1 Month Notice',
];

function renderWhyIcon(iconName: WhyWorkItem['iconName']) {
  const iconClass = 'h-5 w-5 text-[#D4AF37]';
  switch (iconName) {
    case 'clock':
      return <Clock className={iconClass} aria-hidden="true" />;
    case 'users':
      return <Users className={iconClass} aria-hidden="true" />;
    case 'heart':
      return <HeartHandshake className={iconClass} aria-hidden="true" />;
    case 'graduation':
      return <GraduationCap className={iconClass} aria-hidden="true" />;
    case 'award':
      return <Award className={iconClass} aria-hidden="true" />;
    case 'shield':
      return <ShieldCheck className={iconClass} aria-hidden="true" />;
  }
}

function renderRecruitmentIcon(iconName: RecruitmentStep['iconName']) {
  const iconClass = 'h-5 w-5 text-[#D4AF37]';
  switch (iconName) {
    case 'file':
      return <FileText className={iconClass} aria-hidden="true" />;
    case 'search':
      return <Search className={iconClass} aria-hidden="true" />;
    case 'phone':
      return <PhoneCall className={iconClass} aria-hidden="true" />;
    case 'users':
      return <Users className={iconClass} aria-hidden="true" />;
    case 'shield':
      return <ShieldCheck className={iconClass} aria-hidden="true" />;
    case 'check':
      return <BadgeCheck className={iconClass} aria-hidden="true" />;
  }
}

export function CareersPage() {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [residentialArea, setResidentialArea] = useState('Johannesburg');
  const [qualification, setQualification] = useState(HIGHEST_QUALIFICATIONS[1]);
  const [yearsExperience, setYearsExperience] = useState('2–4 years');
  const [positionApplying, setPositionApplying] = useState(
    RECRUITED_POSITIONS[0].title,
  );
  const [availability, setAvailability] = useState(AVAILABILITY_OPTIONS[0]);
  const [cvFileName, setCvFileName] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [popiaConsent, setPopiaConsent] = useState(false);
  const [formError, setFormError] = useState('');
  const [applicationRef, setApplicationRef] = useState<string | null>(null);

  const scrollToForm = (preselectPosition?: string) => {
    if (preselectPosition) {
      setPositionApplying(preselectPosition);
      setApplicationRef(null);
    }
    const target = document.getElementById('career-application');
    if (target) {
      target.scrollIntoView({behavior: 'smooth'});
    }
  };

  const handleCvFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setCvFileName(file.name);
      setFormError('');
    }
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setFormError('');

    if (fullName.trim().length < 2) {
      setFormError('Please enter your full name.');
      return;
    }

    if (phoneNumber.replace(/\D/g, '').length < 9) {
      setFormError('Please enter a valid phone number.');
      return;
    }

    if (whatsappNumber.replace(/\D/g, '').length < 9) {
      setFormError('Please enter a valid WhatsApp number.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress.trim())) {
      setFormError('Please enter a valid email address.');
      return;
    }

    if (!popiaConsent) {
      setFormError(
        'Please confirm your POPIA consent before submitting your application.',
      );
      return;
    }

    const refCode = `SGC-CR-${Math.floor(100000 + Math.random() * 900000)}`;
    setApplicationRef(refCode);
  };

  return (
    <div>
      {/* Section 1 (Midnight Navy): Careers Hero + Trust Banner */}
      <section className="relative overflow-hidden bg-[#081B3A] pt-14 pb-12 text-[#F8F7F2] sm:pt-20 sm:pb-16">
        {/* Shield Logo Backdrop Watermark */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <img
            src={BRAND_LOGO_URL}
            alt=""
            referrerPolicy="no-referrer"
            className="absolute top-1/2 left-1/2 h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 object-contain opacity-15 blur-[0.5px] sm:h-[820px] sm:w-[820px]"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#081B3A]/92 via-[#081B3A]/82 to-[#040E21]/96" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Hero Copy */}
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold tracking-[0.16em] text-[#D4AF37]">
                JOIN THE SYNERGY GUARDIAN CARE TEAM
              </p>

              <h1
                className="mt-4 font-display font-semibold tracking-tight text-[#F8F7F2] [text-wrap:balance]"
                style={{fontSize: 'clamp(2.25rem, 4.2vw, 3.65rem)', lineHeight: 1.1}}
              >
                Make a Meaningful Difference{' '}
                <span className="bg-gradient-to-r from-[#D4AF37] via-[#F0D576] to-[#D4AF37] bg-clip-text text-transparent">
                  Every Day
                </span>
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-relaxed tracking-[0.01em] text-[#F8F7F2]/85 sm:text-lg">
                At Synergy Guardian Care, we connect compassionate caregivers,
                nannies and support professionals with families who need
                dependable, high-quality care across Johannesburg and Gauteng.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                <button
                  type="button"
                  onClick={() => scrollToForm()}
                  className="inline-flex min-h-12 cursor-pointer items-center justify-center gap-2.5 rounded-md bg-gradient-to-r from-[#D4AF37] to-[#E6C55A] px-7 py-3 text-sm font-semibold text-[#081B3A] shadow-lg transition-transform duration-150 hover:-translate-y-0.5 hover:from-[#C7A22E] hover:to-[#D4AF37] whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F8F7F2]"
                >
                  <span>Apply Online Today</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>

                <a
                  href={CAREERS_WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-md border border-[#1E8F5A] bg-[#1E8F5A]/90 px-6 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#18764A] whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4AF37]"
                >
                  <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>WhatsApp Recruitment Team</span>
                </a>
              </div>
            </div>

            {/* Hero Diverse South African Caregiver Collage */}
            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="overflow-hidden rounded-lg border border-[#D4AF37]/45 bg-[#0D244B] shadow-xl">
                  <ResilientImage
                    src="/src/assets/images/sa_home_wellness_check_1795285400847.jpg"
                    alt="Black South African home care practitioner attending respectfully to an older couple"
                    className="h-56 w-full object-cover sm:h-64"
                    fallbackTitle="Care Practitioners"
                  />
                </div>
                <div className="mt-6 overflow-hidden rounded-lg border border-[#D4AF37]/45 bg-[#0D244B] shadow-xl">
                  <ResilientImage
                    src="/src/assets/images/sa_stayin_nanny_care_1795292468761.jpg"
                    alt="Professional South African stay-in nanny assisting a working mother and schoolchild"
                    className="h-56 w-full object-cover sm:h-64"
                    fallbackTitle="Stay-In Nannies"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Trust Banner */}
          <div className="mt-12 border-t border-[#D4AF37]/25 pt-7">
            <div className="grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2 lg:grid-cols-4">
              {CAREERS_TRUST_ITEMS.map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <CheckCircle2
                    className="h-4 w-4 shrink-0 text-[#1E8F5A]"
                    aria-hidden="true"
                  />
                  <span className="text-xs font-semibold tracking-wide text-[#F8F7F2] sm:text-sm">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 (Soft Cream/Ivory): Intro + WHY WORK WITH US */}
      <section className="bg-gradient-to-b from-[#F8F7F2] to-[#EFECE1] py-16 text-[#081B3A] sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Intro Statement */}
          <div className="grid grid-cols-1 items-center gap-10 border-b border-[#081B3A]/12 pb-14 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold tracking-[0.14em] text-[#1E8F5A]">
                PURPOSE-DRIVEN CAREERS IN GAUTENG
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-[#081B3A] [text-wrap:balance] sm:text-4xl">
                Built on Compassion, Integrity &amp; Respect
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#081B3A]/85 sm:text-lg">
                We are committed to providing dignified, respectful and reliable
                care services to children, adults, seniors and individuals
                requiring additional support. We are always seeking dedicated
                professionals who share our values of compassion, integrity and
                excellence.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-lg border border-[#D4AF37]/45 bg-[#081B3A]/5 shadow-md">
                <ResilientImage
                  src="/src/assets/images/sa_disability_support_1795285399740.jpg"
                  alt="Diverse South African caregiver supporting an adult client living with a disability at home"
                  className="h-64 w-full object-cover"
                  fallbackTitle="Our Values"
                />
              </div>
            </div>
          </div>

          {/* WHY WORK WITH US */}
          <div className="pt-14">
            <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold tracking-[0.14em] text-[#1E8F5A]">
                  CAREER ADVANTAGES
                </p>
                <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-[#081B3A] [text-wrap:balance] sm:text-4xl">
                  WHY WORK WITH US
                </h2>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-[#081B3A]/75">
                We value every caregiver, nanny, and support worker as a
                respected guardian of family dignity.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {WHY_WORK_WITH_US.map((item, idx) => (
                <motion.article
                  key={item.id}
                  whileHover={{y: -2}}
                  transition={{duration: 0.18, ease: [0.16, 1, 0.3, 1]}}
                  className="flex flex-col justify-between rounded-lg border border-[#081B3A]/15 bg-[#FBF9F4] p-7 shadow-sm transition-colors duration-150 hover:border-[#D4AF37]"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-md bg-[#081B3A]">
                        {renderWhyIcon(item.iconName)}
                      </div>
                      <span className="text-xs font-semibold text-[#1E8F5A] tabular-nums">
                        0{idx + 1}
                      </span>
                    </div>
                    <h3 className="mt-5 font-display text-xl font-semibold text-[#081B3A]">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-[#081B3A]/80">
                      {item.description}
                    </p>
                  </div>
                  <div
                    className="mt-6 h-0.5 w-14 bg-gradient-to-r from-[#081B3A] to-[#D4AF37]"
                    aria-hidden="true"
                  />
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 (Midnight Navy): POSITIONS WE RECRUIT FOR */}
      <section className="border-t border-[#D4AF37]/25 bg-gradient-to-b from-[#081B3A] via-[#0A2044] to-[#081B3A] py-16 text-[#F8F7F2] sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 border-b border-[#D4AF37]/25 pb-8 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-[0.14em] text-[#D4AF37]">
                CAREER PATHWAYS ACROSS JOHANNESBURG &amp; GAUTENG
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-[#F8F7F2] [text-wrap:balance] sm:text-4xl">
                POSITIONS WE RECRUIT FOR
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed tracking-[0.01em] text-[#F8F7F2]/80">
              Select a role below to inspect responsibilities and minimum
              requirements, or jump directly to the application form.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {RECRUITED_POSITIONS.map((position) => (
              <motion.article
                key={position.id}
                whileHover={{y: -2}}
                transition={{duration: 0.18, ease: [0.16, 1, 0.3, 1]}}
                className="flex flex-col justify-between overflow-hidden rounded-lg border border-[#D4AF37]/28 bg-gradient-to-br from-[#0E2751] to-[#081B3A] shadow-xl transition-colors duration-150 hover:border-[#D4AF37]"
              >
                <div className="h-52 w-full overflow-hidden border-b border-[#D4AF37]/20">
                  <ResilientImage
                    src={position.image}
                    alt={position.imageAlt}
                    className="h-full w-full object-cover"
                    fallbackTitle={position.title}
                  />
                </div>

                <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#D4AF37]">
                      <Briefcase className="h-3.5 w-3.5" aria-hidden="true" />
                      <span className="tabular-nums">Role {position.index}</span>
                    </div>
                    <h3 className="mt-2 font-display text-2xl font-semibold text-[#F8F7F2]">
                      {position.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-[#F8F7F2]/85">
                      {position.description}
                    </p>

                    <div className="mt-5 grid grid-cols-1 gap-5 border-t border-[#D4AF37]/20 pt-5 sm:grid-cols-2">
                      <div>
                        <p className="text-xs font-semibold tracking-wider text-[#D4AF37]">
                          Key Responsibilities
                        </p>
                        <ul className="mt-2.5 space-y-2">
                          {position.responsibilities.map((resp) => (
                            <li
                              key={resp}
                              className="flex items-start gap-2 text-xs leading-relaxed text-[#F8F7F2]/85"
                            >
                              <CheckCircle2
                                className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#1E8F5A]"
                                aria-hidden="true"
                              />
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <p className="text-xs font-semibold tracking-wider text-[#D4AF37]">
                          Minimum Requirements
                        </p>
                        <ul className="mt-2.5 space-y-2">
                          {position.requirements.map((req) => (
                            <li
                              key={req}
                              className="flex items-start gap-2 text-xs leading-relaxed text-[#F8F7F2]/85"
                            >
                              <ShieldCheck
                                className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#D4AF37]"
                                aria-hidden="true"
                              />
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between gap-4 border-t border-[#D4AF37]/20 pt-5">
                    <span className="text-xs font-medium text-[#F8F7F2]/65">
                      Johannesburg &amp; Gauteng
                    </span>
                    <button
                      type="button"
                      onClick={() => scrollToForm(position.title)}
                      className="inline-flex min-h-10 cursor-pointer items-center gap-1.5 rounded-md bg-gradient-to-r from-[#D4AF37] to-[#E3C25A] px-4 py-2 text-xs font-semibold text-[#081B3A] transition-colors hover:from-[#C7A22E] hover:to-[#D4AF37] whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F8F7F2]"
                    >
                      <span>Apply for This Role</span>
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 (Soft Cream/Ivory): MINIMUM REQUIREMENTS */}
      <section className="border-t border-[#081B3A]/10 bg-gradient-to-b from-[#F8F7F2] to-[#EFECE1] py-16 text-[#081B3A] sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-lg border border-[#D4AF37]/45 bg-[#081B3A]/5 shadow-lg">
                <ResilientImage
                  src="/src/assets/images/sa_companionship_tea_1795285399680.jpg"
                  alt="Smiling South African caregiver sharing tea and conversation with a senior family member"
                  className="h-80 w-full object-cover sm:h-96"
                  fallbackTitle="Candidate Standards"
                />
              </div>
            </div>

            <div className="lg:col-span-7">
              <p className="text-xs font-semibold tracking-[0.14em] text-[#1E8F5A]">
                CANDIDATE ELIGIBILITY &amp; CHARACTER
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-[#081B3A] [text-wrap:balance] sm:text-4xl">
                MINIMUM REQUIREMENTS
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[#081B3A]/80 sm:text-base">
                To uphold the trust families place in Synergy Guardian Care, all
                applicants must meet the following foundational eligibility and
                professional criteria:
              </p>

              <ul className="mt-7 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                {MINIMUM_REQUIREMENTS.map((requirement) => (
                  <li
                    key={requirement}
                    className="flex items-start gap-3 rounded-lg border border-[#081B3A]/12 bg-[#FBF9F4] p-4 shadow-xs"
                  >
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-[#1E8F5A]"
                      aria-hidden="true"
                    />
                    <span className="text-sm font-medium text-[#081B3A]">
                      {requirement}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 (Midnight Navy): OUR RECRUITMENT PROCESS */}
      <section className="border-t border-[#D4AF37]/25 bg-gradient-to-b from-[#081B3A] via-[#0B2249] to-[#081B3A] py-16 text-[#F8F7F2] sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 border-b border-[#D4AF37]/25 pb-8 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-[0.14em] text-[#D4AF37]">
                SIX-STEP ONBOARDING JOURNEY
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-[#F8F7F2] [text-wrap:balance] sm:text-4xl">
                OUR RECRUITMENT PROCESS
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed tracking-[0.01em] text-[#F8F7F2]/80">
              A transparent, respectful six-stage pathway designed to verify
              your skills and match you with the right household.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {RECRUITMENT_STEPS.map((step) => (
              <article
                key={step.stepNumber}
                className="flex flex-col justify-between rounded-lg border border-[#D4AF37]/28 bg-gradient-to-br from-[#0E2751] to-[#081B3A] p-7 shadow-lg transition-colors duration-150 hover:border-[#D4AF37]"
              >
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-md bg-[#081B3A] border border-[#D4AF37]/30">
                      {renderRecruitmentIcon(step.iconName)}
                    </div>
                    <span className="text-xs font-semibold tracking-wider text-[#D4AF37] tabular-nums">
                      Step {Number(step.stepNumber)}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold text-[#F8F7F2]">
                    {Number(step.stepNumber)}. {step.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-[#F8F7F2]/80">
                    {step.description}
                  </p>
                </div>

                <div
                  className="mt-6 h-0.5 w-14 bg-gradient-to-r from-[#D4AF37] to-[#1E8F5A]"
                  aria-hidden="true"
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 (Soft Cream/Ivory): Call-To-Action Card + Career Application Form */}
      <section
        id="career-application"
        className="border-t border-[#081B3A]/10 bg-gradient-to-b from-[#F8F7F2] to-[#EFECE1] py-16 text-[#081B3A] sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Framed Navy-to-Gold Call-To-Action Banner */}
          <div className="mb-14 flex flex-col justify-between gap-6 rounded-lg border border-[#D4AF37]/50 bg-gradient-to-r from-[#081B3A] via-[#0E2854] to-[#173668] p-7 text-[#F8F7F2] shadow-xl sm:p-10 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-[0.14em] text-[#D4AF37]">
                START YOUR CARE JOURNEY
              </p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-[#F8F7F2] sm:text-3xl">
                Ready to Build a Career in Care?
              </h2>
              <p className="mt-2.5 text-sm leading-relaxed tracking-[0.01em] text-[#F8F7F2]/85 sm:text-base">
                Submit your application today and become part of a team
                dedicated to protecting dignity and delivering exceptional care.
              </p>
            </div>

            <div className="flex flex-col gap-3 shrink-0 sm:flex-row lg:flex-col xl:flex-row">
              <a
                href="#career-form-card"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-gradient-to-r from-[#D4AF37] to-[#E3C25A] px-6 py-3 text-sm font-semibold text-[#081B3A] shadow-md transition-transform duration-150 hover:-translate-y-0.5 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F8F7F2]"
              >
                <span>Apply Online Now</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={CAREERS_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-[#1E8F5A] bg-[#1E8F5A]/90 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#18764A] whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4AF37]"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                <span>WhatsApp Recruitment Team</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
            {/* Left Side: Supportive Recruitment Guidance */}
            <div className="lg:col-span-4">
              <p className="text-xs font-semibold tracking-[0.14em] text-[#1E8F5A]">
                ONLINE CANDIDATE APPLICATION
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-[#081B3A] sm:text-4xl">
                Apply to Join Our Team
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[#081B3A]/80 sm:text-base">
                Complete every section clearly so our recruitment team can fast-track
                your CV review and match you with families across Johannesburg
                and Gauteng.
              </p>

              <div className="mt-8 space-y-4 border-t border-[#081B3A]/15 pt-6 text-sm text-[#081B3A]/85">
                <p className="font-semibold text-[#081B3A]">
                  Direct Recruitment Support
                </p>
                <a
                  href={PRIMARY_PHONE_TEL}
                  className="flex items-center gap-3 font-medium transition-colors hover:text-[#1E8F5A]"
                >
                  <PhoneCall className="h-4 w-4 text-[#D4AF37]" aria-hidden="true" />
                  <span className="tabular-nums">Call {PRIMARY_PHONE_DISPLAY}</span>
                </a>
                <a
                  href={CAREERS_WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 font-medium transition-colors hover:text-[#1E8F5A]"
                >
                  <MessageCircle
                    className="h-4 w-4 text-[#1E8F5A]"
                    aria-hidden="true"
                  />
                  <span>WhatsApp Recruitment Team</span>
                </a>
              </div>
            </div>

            {/* Right Side: Full Application Form */}
            <div id="career-form-card" className="lg:col-span-8">
              <div className="rounded-lg border border-[#081B3A]/15 bg-[#FBF9F4] p-6 shadow-md sm:p-9">
                {applicationRef ? (
                  <div className="py-10 text-center">
                    <CheckCircle2
                      className="mx-auto h-12 w-12 text-[#1E8F5A]"
                      aria-hidden="true"
                    />
                    <p className="mt-4 text-xs font-semibold tracking-[0.14em] text-[#1E8F5A] tabular-nums">
                      APPLICATION REFERENCE: {applicationRef}
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-semibold text-[#081B3A]">
                      Thank You for Applying, {fullName}
                    </h3>
                    <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-[#081B3A]/80">
                      Your application for{' '}
                      <span className="font-semibold text-[#081B3A]">
                        {positionApplying}
                      </span>{' '}
                      ({residentialArea}) has been received by the Synergy
                      Guardian Care Recruitment Team. We will contact you on{' '}
                      {phoneNumber} or WhatsApp {whatsappNumber} following CV
                      review.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setApplicationRef(null);
                        setFullName('');
                        setPhoneNumber('');
                        setWhatsappNumber('');
                        setEmailAddress('');
                        setCvFileName('');
                        setAdditionalInfo('');
                        setPopiaConsent(false);
                      }}
                      className="mt-7 inline-flex min-h-11 cursor-pointer items-center justify-center rounded-md border border-[#081B3A]/20 px-6 py-2.5 text-xs font-semibold text-[#081B3A] hover:bg-[#081B3A]/5"
                    >
                      Submit Another Application
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="career-fullname"
                          className="block text-xs font-semibold text-[#081B3A]"
                        >
                          Full Name *
                        </label>
                        <input
                          id="career-fullname"
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="e.g. Zanele Mthembu"
                          className="mt-1.5 w-full rounded-md border border-[#081B3A]/20 bg-[#F8F7F2] px-3.5 py-2.5 text-sm text-[#081B3A] placeholder:text-[#081B3A]/40 focus:border-[#081B3A] focus:outline-none"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="career-email"
                          className="block text-xs font-semibold text-[#081B3A]"
                        >
                          Email Address *
                        </label>
                        <input
                          id="career-email"
                          type="email"
                          required
                          value={emailAddress}
                          onChange={(e) => setEmailAddress(e.target.value)}
                          placeholder="applicant@example.co.za"
                          className="mt-1.5 w-full rounded-md border border-[#081B3A]/20 bg-[#F8F7F2] px-3.5 py-2.5 text-sm text-[#081B3A] placeholder:text-[#081B3A]/40 focus:border-[#081B3A] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="career-phone"
                          className="block text-xs font-semibold text-[#081B3A]"
                        >
                          Phone Number *
                        </label>
                        <input
                          id="career-phone"
                          type="tel"
                          required
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          placeholder="e.g. 076 647 5746"
                          className="mt-1.5 w-full rounded-md border border-[#081B3A]/20 bg-[#F8F7F2] px-3.5 py-2.5 text-sm text-[#081B3A] placeholder:text-[#081B3A]/40 focus:border-[#081B3A] focus:outline-none"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="career-whatsapp"
                          className="block text-xs font-semibold text-[#081B3A]"
                        >
                          WhatsApp Number *
                        </label>
                        <input
                          id="career-whatsapp"
                          type="tel"
                          required
                          value={whatsappNumber}
                          onChange={(e) => setWhatsappNumber(e.target.value)}
                          placeholder="e.g. 076 647 5746"
                          className="mt-1.5 w-full rounded-md border border-[#081B3A]/20 bg-[#F8F7F2] px-3.5 py-2.5 text-sm text-[#081B3A] placeholder:text-[#081B3A]/40 focus:border-[#081B3A] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="career-area"
                          className="block text-xs font-semibold text-[#081B3A]"
                        >
                          Residential Area *
                        </label>
                        <select
                          id="career-area"
                          value={residentialArea}
                          onChange={(e) => setResidentialArea(e.target.value)}
                          className="mt-1.5 w-full rounded-md border border-[#081B3A]/20 bg-[#F8F7F2] px-3.5 py-2.5 text-sm text-[#081B3A] focus:border-[#081B3A] focus:outline-none"
                        >
                          {SERVICE_AREAS.map((area) => (
                            <option key={area.id} value={area.city}>
                              {area.city}
                            </option>
                          ))}
                          <option value="Other Gauteng Area">
                            Other Gauteng Area
                          </option>
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="career-qualification"
                          className="block text-xs font-semibold text-[#081B3A]"
                        >
                          Highest Qualification *
                        </label>
                        <select
                          id="career-qualification"
                          value={qualification}
                          onChange={(e) => setQualification(e.target.value)}
                          className="mt-1.5 w-full rounded-md border border-[#081B3A]/20 bg-[#F8F7F2] px-3.5 py-2.5 text-sm text-[#081B3A] focus:border-[#081B3A] focus:outline-none"
                        >
                          {HIGHEST_QUALIFICATIONS.map((qual) => (
                            <option key={qual} value={qual}>
                              {qual}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                      <div>
                        <label
                          htmlFor="career-experience"
                          className="block text-xs font-semibold text-[#081B3A]"
                        >
                          Years of Experience *
                        </label>
                        <select
                          id="career-experience"
                          value={yearsExperience}
                          onChange={(e) => setYearsExperience(e.target.value)}
                          className="mt-1.5 w-full rounded-md border border-[#081B3A]/20 bg-[#F8F7F2] px-3.5 py-2.5 text-sm text-[#081B3A] focus:border-[#081B3A] focus:outline-none"
                        >
                          <option value="Less than 1 year">
                            Less than 1 year
                          </option>
                          <option value="1–2 years">1–2 years</option>
                          <option value="2–4 years">2–4 years</option>
                          <option value="5–8 years">5–8 years</option>
                          <option value="8+ years">8+ years</option>
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="career-position"
                          className="block text-xs font-semibold text-[#081B3A]"
                        >
                          Position Applying For *
                        </label>
                        <select
                          id="career-position"
                          value={positionApplying}
                          onChange={(e) => setPositionApplying(e.target.value)}
                          className="mt-1.5 w-full rounded-md border border-[#081B3A]/20 bg-[#F8F7F2] px-3.5 py-2.5 text-sm text-[#081B3A] focus:border-[#081B3A] focus:outline-none"
                        >
                          {RECRUITED_POSITIONS.map((pos) => (
                            <option key={pos.id} value={pos.title}>
                              {pos.title}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="career-availability"
                          className="block text-xs font-semibold text-[#081B3A]"
                        >
                          Availability *
                        </label>
                        <select
                          id="career-availability"
                          value={availability}
                          onChange={(e) => setAvailability(e.target.value)}
                          className="mt-1.5 w-full rounded-md border border-[#081B3A]/20 bg-[#F8F7F2] px-3.5 py-2.5 text-sm text-[#081B3A] focus:border-[#081B3A] focus:outline-none"
                        >
                          {AVAILABILITY_OPTIONS.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Upload CV */}
                    <div>
                      <label
                        htmlFor="career-cv-upload"
                        className="block text-xs font-semibold text-[#081B3A]"
                      >
                        Upload CV (PDF, DOC, or DOCX)
                      </label>
                      <div className="mt-1.5 flex flex-col items-start justify-between gap-3 rounded-md border border-dashed border-[#081B3A]/30 bg-[#F8F7F2] p-4 sm:flex-row sm:items-center">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#081B3A] text-[#D4AF37]">
                            <Upload className="h-4 w-4" aria-hidden="true" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-[#081B3A]">
                              {cvFileName || 'Select your CV document from your device'}
                            </p>
                            <p className="text-xs text-[#081B3A]/60">
                              Include contactable references and relevant certificates
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          {cvFileName && (
                            <button
                              type="button"
                              onClick={() => setCvFileName('')}
                              aria-label="Remove uploaded CV"
                              className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border border-[#081B3A]/20 text-[#081B3A]/70 hover:bg-[#081B3A]/5"
                            >
                              <X className="h-4 w-4" />
                            </button>
                          )}
                          <label
                            htmlFor="career-cv-upload"
                            className="inline-flex min-h-9 cursor-pointer items-center justify-center rounded-md bg-[#081B3A] px-4 py-2 text-xs font-semibold text-[#F8F7F2] transition-colors hover:bg-[#0E2A57] whitespace-nowrap"
                          >
                            <span>{cvFileName ? 'Change File' : 'Choose CV'}</span>
                            <input
                              id="career-cv-upload"
                              type="file"
                              accept=".pdf,.doc,.docx"
                              onChange={handleCvFileChange}
                              className="sr-only"
                            />
                          </label>
                        </div>
                      </div>
                    </div>

                    {/* Additional Information */}
                    <div>
                      <label
                        htmlFor="career-additional-info"
                        className="block text-xs font-semibold text-[#081B3A]"
                      >
                        Additional Information
                      </label>
                      <textarea
                        id="career-additional-info"
                        rows={3}
                        value={additionalInfo}
                        onChange={(e) => setAdditionalInfo(e.target.value)}
                        placeholder="Share your caregiving experience, languages spoken, driver's licence status, or first-aid qualifications..."
                        className="mt-1.5 w-full rounded-md border border-[#081B3A]/20 bg-[#F8F7F2] px-3.5 py-2.5 text-sm text-[#081B3A] placeholder:text-[#081B3A]/40 focus:border-[#081B3A] focus:outline-none"
                      />
                    </div>

                    {/* POPIA Consent Checkbox */}
                    <div className="rounded-md border border-[#081B3A]/15 bg-[#F8F7F2] p-4">
                      <label
                        htmlFor="career-popia-consent"
                        className="flex cursor-pointer items-start gap-3"
                      >
                        <input
                          id="career-popia-consent"
                          type="checkbox"
                          checked={popiaConsent}
                          onChange={(e) => setPopiaConsent(e.target.checked)}
                          className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer rounded border-[#081B3A]/30 accent-[#081B3A]"
                        />
                        <span className="text-xs leading-relaxed font-medium text-[#081B3A]/85 sm:text-sm">
                          I consent to Synergy Guardian Care processing my
                          personal information for recruitment purposes in
                          accordance with POPIA.
                        </span>
                      </label>
                    </div>

                    {formError && (
                      <p
                        role="alert"
                        className="rounded-md border border-red-200 bg-red-50 px-3.5 py-2.5 text-xs font-medium text-red-800"
                      >
                        {formError}
                      </p>
                    )}

                    <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
                      <button
                        type="submit"
                        className="inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-md bg-gradient-to-r from-[#D4AF37] to-[#E3C25A] px-7 py-3 text-sm font-semibold text-[#081B3A] shadow-md transition-transform duration-150 hover:-translate-y-0.5 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#081B3A]"
                      >
                        <span>Submit Career Application</span>
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </button>

                      <a
                        href={CAREERS_WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-[#081B3A]/20 bg-[#F8F7F2] px-5 py-3 text-sm font-semibold text-[#081B3A] transition-colors hover:border-[#1E8F5A] hover:text-[#1E8F5A] whitespace-nowrap"
                      >
                        <MessageCircle className="h-4 w-4 text-[#1E8F5A]" aria-hidden="true" />
                        <span>WhatsApp Recruitment Team</span>
                      </a>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
