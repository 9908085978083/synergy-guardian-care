import {ABOUT_IMAGE, LIFE_STAGES} from '../data/careData';
import {ResilientImage} from './ResilientImage';

interface AboutSectionProps {
  onRequestConsultation: () => void;
}

export function AboutSection({onRequestConsultation}: AboutSectionProps) {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-[#F8F7F2] to-[#EFECE1] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Left: Editorial Garden Courtyard Photography */}
          <div className="order-2 lg:order-1 lg:col-span-6">
            <div className="h-full min-h-[320px] overflow-hidden rounded-lg border border-[#D4AF37]/45 bg-[#081B3A]/5 shadow-lg">
              <ResilientImage
                src={ABOUT_IMAGE}
                alt="Senior resident walking happily alongside a compassionate Synergy Guardian Care caregiver in a sunlit private garden"
                className="h-full w-full object-cover"
                fallbackTitle="One Trusted Care Partner"
              />
            </div>
          </div>

          {/* Right: Multi-Generational Care Positioning */}
          <div className="order-1 flex flex-col justify-center lg:order-2 lg:col-span-6">
            <p className="text-xs font-semibold tracking-[0.14em] text-[#1E8F5A]">
              NATIONAL MULTI-GENERATIONAL CARE INSTITUTION
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-[#081B3A] [text-wrap:balance] sm:text-4xl">
              One Trusted Care Partner for the Entire Family
            </h2>
            <p className="mt-6 text-base leading-relaxed text-[#081B3A]/85 sm:text-lg">
              Most care agencies focus on a single age group—leaving families to
              juggle separate providers for childcare, disability assistance,
              and senior support. Synergy Guardian Care operates as a national
              multi-generational care organization, uniting every stage of life
              under one accountable standard of governance.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[#081B3A]/75 sm:text-base">
              Whether you are working parents seeking a vetted stay-in nanny for
              newborn or school-going children, or a family arranging dignified
              home-based care for an ageing parent, we deliver clinical
              oversight, multi-stage vetting, and genuine warmth across South
              African households.
            </p>

            <div className="mt-8">
              <button
                type="button"
                onClick={onRequestConsultation}
                className="inline-flex min-h-11 cursor-pointer items-center border-b-2 border-[#D4AF37] pb-1 text-sm font-semibold text-[#081B3A] transition-colors hover:border-[#081B3A] hover:text-[#1E8F5A] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D4AF37]"
              >
                Arrange A Family Consultation
              </button>
            </div>
          </div>
        </div>

        {/* Four Stages of Life Strip */}
        <div className="mt-16 border-t border-[#081B3A]/15 pt-12">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold tracking-[0.14em] text-[#1E8F5A]">
                CARE FOR EVERY STAGE OF LIFE
              </p>
              <h3 className="mt-2 font-display text-2xl font-semibold text-[#081B3A]">
                Who We Support Across Your Household
              </h3>
            </div>
            <p className="max-w-md text-xs leading-relaxed text-[#081B3A]/70 sm:text-sm">
              Coordinated placements backed by multi-stage background checks and
              ongoing supervisor oversight.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {LIFE_STAGES.map((item) => (
              <div
                key={item.id}
                className="flex flex-col justify-between rounded-lg border border-[#081B3A]/15 bg-[#FBF9F4] p-6 shadow-sm transition-colors duration-150 hover:border-[#D4AF37]"
              >
                <div>
                  <span className="text-xs font-semibold tracking-wider text-[#1E8F5A] tabular-nums">
                    {item.stage}
                  </span>
                  <h4 className="mt-3 font-display text-lg font-semibold text-[#081B3A]">
                    {item.title}
                  </h4>
                  <p className="mt-2.5 text-sm leading-relaxed text-[#081B3A]/80">
                    {item.description}
                  </p>
                </div>
                <div
                  className="mt-5 h-0.5 w-10 bg-gradient-to-r from-[#081B3A] to-[#D4AF37]"
                  aria-hidden="true"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
