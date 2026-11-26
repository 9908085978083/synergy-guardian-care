import {ArrowRight, CheckCircle2, MessageCircle} from 'lucide-react';
import {motion} from 'motion/react';
import {
  BRAND_LOGO_URL,
  FAMILY_CARE_STATS,
  HERO_IMAGE,
  PRIMARY_WHATSAPP_URL,
  TRUST_INDICATORS,
} from '../data/careData';
import {ResilientImage} from './ResilientImage';

interface HeroSectionProps {
  onBookConsultation: () => void;
}

export function HeroSection({onBookConsultation}: HeroSectionProps) {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[#081B3A] text-[#F8F7F2]"
    >
      {/* Subtle Enlarged Shield Logo Watermark + Midnight Navy Overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <img
          src={BRAND_LOGO_URL}
          alt=""
          referrerPolicy="no-referrer"
          className="absolute top-1/2 left-1/2 h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 object-contain opacity-15 blur-[0.5px] sm:h-[820px] sm:w-[820px] lg:left-[38%] lg:h-[960px] lg:w-[960px]"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#081B3A]/92 via-[#081B3A]/78 to-[#051228]/96" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_45%,rgba(212,175,55,0.12),transparent_60%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Authoritative Multi-Generational Proposition */}
          <div className="flex flex-col justify-center lg:col-span-6">
            <p className="text-xs font-semibold tracking-[0.16em] text-[#D4AF37]">
              JOHANNESBURG · SANDTON · FOURWAYS · GAUTENG
            </p>

            <h1
              className="mt-4 font-display font-semibold tracking-tight text-[#F8F7F2] [text-wrap:balance]"
              style={{fontSize: 'clamp(2.15rem, 3.8vw, 3.45rem)', lineHeight: 1.12}}
            >
              Trusted Care For{' '}
              <span className="bg-gradient-to-r from-[#D4AF37] via-[#F0D576] to-[#D4AF37] bg-clip-text text-transparent">
                Every Generation
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed tracking-[0.01em] text-[#F8F7F2]/85 sm:text-lg">
              Professional home care, elderly support, childcare and nanny
              placement services tailored to your family’s unique needs
              throughout Johannesburg and Gauteng.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <button
                type="button"
                onClick={onBookConsultation}
                className="inline-flex min-h-12 cursor-pointer items-center justify-center gap-2.5 rounded-md bg-gradient-to-r from-[#D4AF37] to-[#E6C55A] px-7 py-3 text-sm font-semibold text-[#081B3A] shadow-lg transition-transform duration-150 hover:-translate-y-0.5 hover:from-[#C7A22E] hover:to-[#D4AF37] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F8F7F2]"
              >
                <span>Book A Consultation</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>

              <a
                href={PRIMARY_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-md border border-[#14B8A6] bg-[#0D244B]/90 px-6 py-3 text-sm font-semibold text-[#F8F7F2] transition-colors duration-150 hover:bg-[#14B8A6] hover:text-[#081B3A] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#14B8A6]"
              >
                <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          {/* Right Column: Multigenerational South African Family Photography */}
          <motion.div
            initial={{opacity: 0.92, y: 10}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.45, ease: [0.16, 1, 0.3, 1]}}
            className="lg:col-span-6"
          >
            <div className="relative h-full min-h-[340px] overflow-hidden rounded-lg border border-[#D4AF37]/45 bg-[#0D244B] shadow-2xl lg:min-h-[470px]">
              <ResilientImage
                src={HERO_IMAGE}
                alt="Multigenerational South African family with grandparents, working parents, and young child smiling together with a Synergy Guardian Care practitioner"
                className="h-full w-full object-cover"
                fallbackTitle="Synergy Guardian Care"
                priority
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#081B3A]/90 via-[#081B3A]/45 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 text-[#F8F7F2]">
                <div>
                  <p className="text-xs font-semibold tracking-wide text-[#D4AF37]">
                    Safety · Compassion · Credibility
                  </p>
                  <p className="mt-0.5 text-sm font-medium text-[#F8F7F2]">
                    Vetted caregivers, stay-in nannies, and senior care practitioners across Gauteng
                  </p>
                </div>
                <img
                  src={BRAND_LOGO_URL}
                  alt="Synergy Guardian Care seal"
                  referrerPolicy="no-referrer"
                  className="hidden h-16 w-16 shrink-0 rounded-md border border-[#D4AF37]/70 object-cover shadow-lg sm:block"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Family Care Statistics / Social Proof Counters */}
        <div
          aria-label="Family care statistics"
          className="mt-12 grid grid-cols-1 gap-4 border-t border-[#D4AF37]/25 pt-10 sm:grid-cols-2 lg:grid-cols-4"
        >
          {FAMILY_CARE_STATS.map((stat) => (
            <div
              key={stat.id}
              className="rounded-lg border border-[#D4AF37]/25 bg-[#0D244B]/75 p-5 shadow-md"
            >
              <p className="font-display text-2xl font-semibold text-[#D4AF37] tabular-nums sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm font-semibold text-[#F8F7F2]">
                {stat.label}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-[#F8F7F2]/70">
                {stat.detail}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Full-Width Trust Banner Strip on Deep Midnight Navy */}
      <div
        aria-label="Core care assurances"
        className="relative z-10 border-t border-[#D4AF37]/25 bg-[#051329]"
      >
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {TRUST_INDICATORS.map((indicator) => (
              <div key={indicator} className="flex items-center gap-2.5">
                <CheckCircle2
                  className="h-4 w-4 shrink-0 text-[#1E8F5A]"
                  aria-hidden="true"
                />
                <span className="text-xs font-semibold tracking-wide text-[#F8F7F2]/90">
                  {indicator}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
