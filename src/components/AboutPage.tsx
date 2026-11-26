import {
  ArrowRight,
  Award,
  CheckCircle2,
  Compass,
  HeartHandshake,
  MapPin,
  MessageCircle,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from 'lucide-react';
import {motion} from 'motion/react';
import {
  ABOUT_IMAGE,
  BRAND_LOGO_URL,
  HERO_IMAGE,
  PRIMARY_PHONE_DISPLAY,
  PRIMARY_PHONE_TEL,
  PRIMARY_WHATSAPP_URL,
} from '../data/careData';
import {
  ABOUT_SERVICES_OVERVIEW,
  CORE_VALUES,
  GAUTENG_COMMUNITIES,
  WHY_CHOOSE_TRUST_CARDS,
  type CoreValueItem,
} from '../data/aboutData';
import {ResilientImage} from './ResilientImage';

interface AboutPageProps {
  onBookConsultation: (preselectedService?: string) => void;
  onOpenPackages: () => void;
}

function renderValueIcon(iconName: CoreValueItem['iconName']) {
  const iconClass = 'h-5 w-5 text-[#D4AF37]';
  switch (iconName) {
    case 'heart':
      return <HeartHandshake className={iconClass} aria-hidden="true" />;
    case 'shield':
      return <ShieldCheck className={iconClass} aria-hidden="true" />;
    case 'award':
      return <Award className={iconClass} aria-hidden="true" />;
    case 'handshake':
      return <HeartHandshake className={iconClass} aria-hidden="true" />;
    case 'sparkles':
      return <Sparkles className={iconClass} aria-hidden="true" />;
    case 'users':
      return <Users className={iconClass} aria-hidden="true" />;
  }
}

export function AboutPage({
  onBookConsultation,
  onOpenPackages,
}: AboutPageProps) {
  return (
    <div>
      {/* Section 1 (Midnight Navy): About Hero */}
      <section className="relative overflow-hidden bg-[#081B3A] py-16 text-[#F8F7F2] sm:py-24">
        {/* Subtle Shield Crest Watermark */}
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
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold tracking-[0.16em] text-[#D4AF37]">
                ABOUT SYNERGY GUARDIAN CARE
              </p>

              <h1
                className="mt-4 font-display font-semibold tracking-tight text-[#F8F7F2] [text-wrap:balance]"
                style={{fontSize: 'clamp(2.25rem, 4.2vw, 3.6rem)', lineHeight: 1.1}}
              >
                Care Rooted in Dignity,{' '}
                <span className="bg-gradient-to-r from-[#D4AF37] via-[#F0D576] to-[#D4AF37] bg-clip-text text-transparent">
                  Trust and Family Values
                </span>
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-relaxed tracking-[0.01em] text-[#F8F7F2]/85 sm:text-lg">
                Supporting South African families with compassionate, reliable
                and professional care services for every stage of life.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                <button
                  type="button"
                  onClick={() => onBookConsultation()}
                  className="inline-flex min-h-12 cursor-pointer items-center justify-center gap-2.5 rounded-md bg-gradient-to-r from-[#D4AF37] to-[#E6C55A] px-7 py-3 text-sm font-semibold text-[#081B3A] shadow-lg transition-transform duration-150 hover:-translate-y-0.5 hover:from-[#C7A22E] hover:to-[#D4AF37] whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F8F7F2]"
                >
                  <span>Book A Consultation</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>

                <a
                  href={PRIMARY_WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-md border border-[#1E8F5A] bg-[#1E8F5A]/90 px-6 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#18764A] whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4AF37]"
                >
                  <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </div>

            {/* Hero Diverse South African Family & Caregiver Imagery */}
            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="overflow-hidden rounded-lg border border-[#D4AF37]/45 bg-[#0D244B] shadow-xl">
                  <ResilientImage
                    src={HERO_IMAGE}
                    alt="Multi-generational South African family smiling together with a compassionate Synergy Guardian Care specialist"
                    className="h-56 w-full object-cover sm:h-64"
                    fallbackTitle="Family-Centred Care"
                  />
                </div>
                <div className="mt-6 overflow-hidden rounded-lg border border-[#D4AF37]/45 bg-[#0D244B] shadow-xl">
                  <ResilientImage
                    src={ABOUT_IMAGE}
                    alt="Senior resident walking peacefully with a South African caregiver in a sunlit garden courtyard"
                    className="h-56 w-full object-cover sm:h-64"
                    fallbackTitle="Dignity & Respect"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 (Soft Cream/Ivory): Introduction + Our Story (Why We Started) + Mission & Vision */}
      <section className="bg-gradient-to-b from-[#F8F7F2] to-[#EFECE1] py-16 text-[#081B3A] sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Introduction Narrative */}
          <div className="grid grid-cols-1 items-center gap-10 border-b border-[#081B3A]/12 pb-16 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold tracking-[0.14em] text-[#1E8F5A]">
                WHO WE ARE
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-[#081B3A] [text-wrap:balance] sm:text-4xl">
                A Trusted Partner Through Every Stage of Life
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#081B3A]/85 sm:text-lg">
                At Synergy Guardian Care, we believe that quality care begins
                with dignity, respect and genuine human connection. We were
                established to provide families with a trusted care partner
                capable of supporting children, adults, seniors and individuals
                requiring additional assistance through every stage of life.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[#081B3A]/80 sm:text-base">
                Whether a family requires a professional nanny, elderly care
                support, disability assistance, post-hospital recovery care or
                companionship services, our mission remains the same: to
                protect dignity, promote independence and deliver exceptional
                care experiences.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-lg border border-[#D4AF37]/45 bg-[#081B3A]/5 shadow-lg">
                <ResilientImage
                  src="/src/assets/images/sa_nanny_childcare_1795287293778.jpg"
                  alt="Black South African childcare provider nurturing young children with educational blocks"
                  className="h-72 w-full object-cover sm:h-80"
                  fallbackTitle="Every Generation"
                />
              </div>
            </div>
          </div>

          {/* Our Story: Why We Started */}
          <div className="grid grid-cols-1 items-center gap-10 border-b border-[#081B3A]/12 py-16 lg:grid-cols-12 lg:gap-14">
            <div className="order-2 lg:order-1 lg:col-span-5">
              <div className="overflow-hidden rounded-lg border border-[#D4AF37]/45 bg-[#081B3A]/5 shadow-lg">
                <ResilientImage
                  src="/src/assets/images/sa_companionship_tea_1795285399680.jpg"
                  alt="Smiling South African senior and caregiver enjoying warm conversation over tea"
                  className="h-72 w-full object-cover sm:h-80"
                  fallbackTitle="Why We Started"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2 lg:col-span-7">
              <p className="text-xs font-semibold tracking-[0.14em] text-[#1E8F5A]">
                OUR STORY
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-[#081B3A] sm:text-4xl">
                Why We Started
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#081B3A]/85 sm:text-lg">
                Across Johannesburg and Gauteng, many families struggle to find
                dependable, thoroughly vetted caregivers and nannies they can
                genuinely trust inside their homes. Working parents face
                demanding schedules, childcare uncertainties, post-hospital
                transitions, and the emotional weight of ensuring ageing parents
                remain safe and respected.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[#081B3A]/80 sm:text-base">
                Synergy Guardian Care was created to bridge that gap—replacing
                guesswork with carefully screened caregivers, verified
                references, ongoing care coordination, and tailored care
                solutions that bring enduring peace of mind to South African
                families.
              </p>
            </div>
          </div>

          {/* Our Mission & Our Vision */}
          <div className="grid grid-cols-1 gap-6 pt-16 md:grid-cols-2">
            <div className="flex flex-col justify-between rounded-lg border border-[#D4AF37]/45 bg-[#FBF9F4] p-8 shadow-sm sm:p-10">
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-md bg-[#081B3A]">
                    <Target className="h-5 w-5 text-[#D4AF37]" aria-hidden="true" />
                  </div>
                  <p className="text-xs font-semibold tracking-[0.16em] text-[#1E8F5A]">
                    OUR MISSION
                  </p>
                </div>
                <h3 className="mt-5 font-display text-2xl font-semibold text-[#081B3A]">
                  Enhancing Quality of Life at Home
                </h3>
                <p className="mt-3 text-base leading-relaxed text-[#081B3A]/85">
                  To provide compassionate, reliable and professional care
                  services that enhance quality of life while supporting the
                  independence, comfort and wellbeing of every individual we
                  serve.
                </p>
              </div>
              <div
                className="mt-6 h-0.5 w-16 bg-gradient-to-r from-[#081B3A] to-[#D4AF37]"
                aria-hidden="true"
              />
            </div>

            <div className="flex flex-col justify-between rounded-lg border border-[#D4AF37]/45 bg-[#FBF9F4] p-8 shadow-sm sm:p-10">
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-md bg-[#081B3A]">
                    <Compass className="h-5 w-5 text-[#D4AF37]" aria-hidden="true" />
                  </div>
                  <p className="text-xs font-semibold tracking-[0.16em] text-[#1E8F5A]">
                    OUR VISION
                  </p>
                </div>
                <h3 className="mt-5 font-display text-2xl font-semibold text-[#081B3A]">
                  Setting South Africa’s Standard in Family Care
                </h3>
                <p className="mt-3 text-base leading-relaxed text-[#081B3A]/85">
                  To become one of South Africa&apos;s most trusted family care
                  organisations, known for excellence, integrity and meaningful
                  impact in the communities we serve.
                </p>
              </div>
              <div
                className="mt-6 h-0.5 w-16 bg-gradient-to-r from-[#081B3A] to-[#D4AF37]"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 (Midnight Navy): OUR VALUES */}
      <section className="border-t border-[#D4AF37]/25 bg-gradient-to-b from-[#081B3A] via-[#0A2044] to-[#081B3A] py-16 text-[#F8F7F2] sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 border-b border-[#D4AF37]/25 pb-8 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-[0.14em] text-[#D4AF37]">
                PRINCIPLES THAT GUIDE EVERY PLACEMENT
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-[#F8F7F2] sm:text-4xl">
                OUR VALUES
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-[#F8F7F2]/80">
              Six enduring commitments shaping how we vet, match, coordinate,
              and care for South African families.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {CORE_VALUES.map((val, idx) => (
              <motion.article
                key={val.id}
                whileHover={{y: -2}}
                transition={{duration: 0.18, ease: [0.16, 1, 0.3, 1]}}
                className="flex flex-col justify-between rounded-lg border border-[#D4AF37]/28 bg-gradient-to-br from-[#0E2751] to-[#081B3A] p-7 shadow-lg transition-colors duration-150 hover:border-[#D4AF37]"
              >
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-md border border-[#D4AF37]/30 bg-[#081B3A]">
                      {renderValueIcon(val.iconName)}
                    </div>
                    <span className="text-xs font-semibold tracking-wider text-[#D4AF37] tabular-nums">
                      0{idx + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold tracking-wide text-[#F8F7F2]">
                    {val.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-[#F8F7F2]/85">
                    {val.description}
                  </p>
                </div>

                <div
                  className="mt-6 h-0.5 w-14 bg-gradient-to-r from-[#D4AF37] to-[#1E8F5A]"
                  aria-hidden="true"
                />
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 (Soft Cream/Ivory): WHY FAMILIES CHOOSE US */}
      <section className="border-t border-[#081B3A]/10 bg-gradient-to-b from-[#F8F7F2] to-[#EFECE1] py-16 text-[#081B3A] sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 border-b border-[#081B3A]/12 pb-8 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-[0.14em] text-[#1E8F5A]">
                TRUST &amp; ACCOUNTABILITY
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-[#081B3A] sm:text-4xl">
                WHY FAMILIES CHOOSE US
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-[#081B3A]/75">
              Every family deserves verified safety, seamless communication, and
              attentive oversight from day one.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_CHOOSE_TRUST_CARDS.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3.5 rounded-lg border border-[#081B3A]/15 bg-[#FBF9F4] p-6 shadow-sm transition-colors duration-150 hover:border-[#D4AF37]"
              >
                <CheckCircle2
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#1E8F5A]"
                  aria-hidden="true"
                />
                <p className="font-display text-base font-semibold text-[#081B3A]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 (Midnight Navy): CARE SERVICES OVERVIEW */}
      <section className="border-t border-[#D4AF37]/25 bg-gradient-to-b from-[#081B3A] via-[#0B2249] to-[#081B3A] py-16 text-[#F8F7F2] sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 border-b border-[#D4AF37]/25 pb-8 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-[0.14em] text-[#D4AF37]">
                MULTI-GENERATIONAL CAPABILITIES
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-[#F8F7F2] sm:text-4xl">
                CARE SERVICES OVERVIEW
              </h2>
            </div>
            <button
              type="button"
              onClick={onOpenPackages}
              className="inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-md border border-[#D4AF37]/50 px-5 py-2.5 text-xs font-semibold text-[#D4AF37] transition-colors hover:bg-[#D4AF37] hover:text-[#081B3A] whitespace-nowrap shrink-0"
            >
              <span>View Care Packages &amp; Guide</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ABOUT_SERVICES_OVERVIEW.map((service) => (
              <motion.article
                key={service.id}
                whileHover={{y: -2}}
                transition={{duration: 0.18, ease: [0.16, 1, 0.3, 1]}}
                className="flex flex-col justify-between rounded-lg border border-[#D4AF37]/25 bg-[#0D244B] p-6 shadow-lg transition-colors duration-150 hover:border-[#D4AF37]"
              >
                <div>
                  <p className="text-xs font-semibold tracking-wider text-[#D4AF37]">
                    {service.stageLabel}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-semibold text-[#F8F7F2]">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#F8F7F2]/80">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 border-t border-[#D4AF37]/20 pt-4">
                  <button
                    type="button"
                    onClick={() => onBookConsultation(service.title)}
                    className="inline-flex min-h-9 cursor-pointer items-center gap-1.5 text-xs font-semibold text-[#D4AF37] transition-colors hover:text-[#F0D576]"
                  >
                    <span>Enquire About {service.title}</span>
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 (Soft Cream/Ivory): COMMUNITIES WE SERVE */}
      <section className="border-t border-[#081B3A]/10 bg-gradient-to-b from-[#F8F7F2] to-[#EFECE1] py-16 text-[#081B3A] sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold tracking-[0.14em] text-[#1E8F5A]">
                REGIONAL GAUTENG FOOTPRINT
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-[#081B3A] sm:text-4xl">
                COMMUNITIES WE SERVE
              </h2>
              <p className="mt-4 text-base font-medium leading-relaxed text-[#081B3A]/85 sm:text-lg">
                Providing trusted caregiver, nanny and family support services
                throughout Johannesburg and Gauteng.
              </p>

              <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {GAUTENG_COMMUNITIES.map((suburb) => (
                  <div
                    key={suburb}
                    className="flex items-center gap-2.5 rounded-md border border-[#081B3A]/15 bg-[#FBF9F4] px-4 py-3 text-sm font-semibold text-[#081B3A] shadow-xs"
                  >
                    <MapPin
                      className="h-4 w-4 shrink-0 text-[#D4AF37]"
                      aria-hidden="true"
                    />
                    <span>{suburb}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-[#081B3A]/75">
                And surrounding Gauteng communities, residential neighbourhoods,
                and lifestyle estates.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-lg border border-[#D4AF37]/45 bg-[#081B3A]/5 shadow-lg">
                <ResilientImage
                  src="/src/assets/images/sa_stayin_nanny_care_1795292468761.jpg"
                  alt="Black South African stay-in nanny assisting a working mother and schoolchild in a sunny Johannesburg home"
                  className="h-80 w-full object-cover"
                  fallbackTitle="Johannesburg & Gauteng"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7 (Midnight Navy): OUR COMMITMENT */}
      <section className="border-t border-[#D4AF37]/25 bg-gradient-to-b from-[#081B3A] via-[#0A2044] to-[#081B3A] py-16 text-[#F8F7F2] sm:py-24">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-md border border-[#D4AF37]/40 bg-[#0D244B]">
            <ShieldCheck className="h-6 w-6 text-[#D4AF37]" aria-hidden="true" />
          </div>
          <p className="mt-5 text-xs font-semibold tracking-[0.16em] text-[#D4AF37]">
            OUR COMMITMENT TO YOUR FAMILY
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-[#F8F7F2] [text-wrap:balance] sm:text-4xl">
            OUR COMMITMENT
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-[#F8F7F2]/90 sm:text-xl">
            We understand that inviting a caregiver into your home is one of
            the most important decisions a family can make. That is why we are
            committed to professional standards, transparent communication and a
            genuine commitment to the wellbeing of every client entrusted to our
            care.
          </p>
        </div>
      </section>

      {/* Section 8 (Soft Cream/Ivory): CALL TO ACTION ("Let Us Support Your Family") */}
      <section className="border-t border-[#081B3A]/10 bg-gradient-to-b from-[#F8F7F2] to-[#EFECE1] py-16 text-center text-[#081B3A] sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.16em] text-[#1E8F5A]">
            BESPOKE FAMILY CARE COORDINATION
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-[#081B3A] [text-wrap:balance] sm:text-4xl">
            Let Us Support Your Family
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#081B3A]/80 sm:text-lg">
            Whether you are seeking childcare support, elderly care services,
            disability support or a professional stay-in nanny, our team is
            ready to help you find the right care solution.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <button
              type="button"
              onClick={() => onBookConsultation()}
              className="inline-flex min-h-12 w-full cursor-pointer items-center justify-center gap-2.5 rounded-md bg-gradient-to-r from-[#D4AF37] to-[#E6C55A] px-7 py-3 text-sm font-semibold text-[#081B3A] shadow-lg transition-transform duration-150 hover:-translate-y-0.5 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#081B3A] sm:w-auto"
            >
              <span>Book A Consultation</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>

            <a
              href={PRIMARY_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2.5 rounded-md border border-[#1E8F5A] bg-[#1E8F5A] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors duration-150 hover:bg-[#18764A] whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#081B3A] sm:w-auto"
            >
              <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>WhatsApp Us</span>
            </a>

            <a
              href={PRIMARY_PHONE_TEL}
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md border border-[#081B3A]/25 bg-[#FBF9F4] px-6 py-3 text-sm font-semibold text-[#081B3A] transition-colors hover:border-[#081B3A] whitespace-nowrap sm:w-auto"
            >
              <PhoneCall className="h-4 w-4 text-[#D4AF37]" aria-hidden="true" />
              <span className="tabular-nums">{PRIMARY_PHONE_DISPLAY}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
