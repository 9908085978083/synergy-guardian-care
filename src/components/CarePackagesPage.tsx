import {useState} from 'react';
import {
  ArrowRight,
  CheckCircle2,
  PhoneCall,
  XCircle,
} from 'lucide-react';
import {
  BRAND_LOGO_URL,
  CARE_PACKAGE_OPTIONS,
  INVESTMENT_GUIDE_ROWS,
  PRIMARY_PHONE_DISPLAY,
  PRIMARY_PHONE_TEL,
  type PackageCategory,
} from '../data/careData';

interface CarePackagesPageProps {
  onRequestAssessment: (preselectedService?: string) => void;
}

const CATEGORY_FILTERS: {id: 'all' | PackageCategory; label: string}[] = [
  {id: 'all', label: 'All Care Solutions'},
  {id: 'childcare', label: 'Child Care & Stay-In Nannies'},
  {id: 'elderly', label: 'Elderly Care'},
  {id: 'disability', label: 'Disability Support'},
];

const PACKAGE_TRUST_HIGHLIGHTS = [
  'Flexible Plans',
  'Affordable Options',
  'Custom Care Packages',
  'Free Initial Consultation',
];

const FRAGMENTED_PROVIDERS = [
  'Separate Childcare Agency',
  'Separate Elderly Care Provider',
  'Separate Disability Support Provider',
];

export function CarePackagesPage({onRequestAssessment}: CarePackagesPageProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | PackageCategory>(
    'all',
  );

  const visiblePackages =
    activeCategory === 'all'
      ? CARE_PACKAGE_OPTIONS
      : CARE_PACKAGE_OPTIONS.filter((pkg) => pkg.category === activeCategory);

  return (
    <div>
      {/* Section 1 (Navy): Care Packages Hero */}
      <section className="relative overflow-hidden bg-[#081B3A] py-16 text-[#F8F7F2] sm:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <img
            src={BRAND_LOGO_URL}
            alt=""
            referrerPolicy="no-referrer"
            className="absolute top-1/2 left-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 object-contain opacity-15 blur-[0.5px] sm:h-[780px] sm:w-[780px]"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#081B3A]/92 via-[#081B3A]/78 to-[#051228]/96" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.16em] text-[#D4AF37]">
            CARE PACKAGES &amp; SERVICE OPTIONS · FLEXIBLE CARE SOLUTIONS
          </p>

          <h1
            className="mx-auto mt-4 max-w-3xl font-display font-semibold tracking-tight text-[#F8F7F2] [text-wrap:balance]"
            style={{fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', lineHeight: 1.12}}
          >
            Care Plans Designed Around{' '}
            <span className="bg-gradient-to-r from-[#D4AF37] via-[#F0D576] to-[#D4AF37] bg-clip-text text-transparent">
              Your Family’s Needs
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed tracking-[0.01em] text-[#F8F7F2]/85 sm:text-lg">
            Every family is different. That’s why we provide flexible care
            solutions tailored to your unique circumstances, support
            requirements, and schedule.
          </p>

          {/* Clean Unboxed Trust Indicators */}
          <div className="mx-auto mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-x-8 gap-y-3 border-y border-[#D4AF37]/25 py-4">
            {PACKAGE_TRUST_HIGHLIGHTS.map((item) => (
              <div key={item} className="flex items-center gap-2">
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

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <button
              type="button"
              onClick={() => onRequestAssessment()}
              className="inline-flex min-h-12 w-full cursor-pointer items-center justify-center gap-2.5 rounded-md bg-gradient-to-r from-[#D4AF37] to-[#E6C55A] px-7 py-3 text-sm font-semibold text-[#081B3A] shadow-lg transition-transform duration-150 hover:-translate-y-0.5 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F8F7F2] sm:w-auto"
            >
              <span>Request a Care Assessment</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>

            <a
              href={PRIMARY_PHONE_TEL}
              className="inline-flex min-h-12 w-full items-center justify-center gap-2.5 rounded-md border border-[#D4AF37]/65 bg-[#0D244B]/80 px-6 py-3 text-sm font-semibold text-[#F8F7F2] transition-colors hover:border-[#D4AF37] hover:bg-[#133163] whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4AF37] sm:w-auto"
            >
              <PhoneCall className="h-4 w-4 text-[#D4AF37]" aria-hidden="true" />
              <span className="tabular-nums">Call {PRIMARY_PHONE_DISPLAY}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Section 2 (Ivory): Your Investment in Quality Care & Tailored Packages */}
      <section className="bg-gradient-to-b from-[#F8F7F2] to-[#EFECE1] py-16 text-[#081B3A] sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 border-b border-[#081B3A]/15 pb-8 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-[0.14em] text-[#1E8F5A]">
                CARE PLANS TAILORED TO YOUR NEEDS
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-[#081B3A] [text-wrap:balance] sm:text-4xl">
                Your Investment in Quality Care
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#081B3A]/80 sm:text-base">
                Our services are structured to remain affordable while
                maintaining the highest standards of professionalism,
                compassion, reliability, and client safety.
              </p>
            </div>

            {/* Interactive Category Filter */}
            <div
              role="tablist"
              aria-label="Filter care packages by family stage"
              className="flex flex-wrap gap-1.5 rounded-lg border border-[#081B3A]/15 bg-[#EFECE1] p-1"
            >
              {CATEGORY_FILTERS.map((filter) => {
                const isSelected = activeCategory === filter.id;
                return (
                  <button
                    key={filter.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setActiveCategory(filter.id)}
                    className={`min-h-10 cursor-pointer rounded-md px-3.5 py-2 text-xs font-semibold transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-[#D4AF37] ${
                      isSelected
                        ? 'bg-[#081B3A] text-[#F8F7F2] shadow-sm'
                        : 'text-[#081B3A]/80 hover:text-[#081B3A]'
                    }`}
                  >
                    {filter.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visiblePackages.map((pkg) => (
              <article
                key={pkg.id}
                className="flex flex-col justify-between rounded-lg border border-[#081B3A]/15 bg-[#FBF9F4] p-7 shadow-sm transition-colors duration-150 hover:border-[#D4AF37]"
              >
                <div>
                  <p className="text-xs font-semibold tracking-wider text-[#1E8F5A]">
                    {pkg.categoryLabel}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-semibold text-[#081B3A]">
                    {pkg.title}
                  </h3>

                  <div className="mt-4 border-y border-[#081B3A]/12 py-3.5">
                    <p className="text-xs font-medium text-[#081B3A]/65">
                      Investment Guide
                    </p>
                    <p className="mt-1 font-display text-lg font-semibold text-[#081B3A] tabular-nums">
                      {pkg.investmentRange}
                    </p>
                  </div>

                  <p className="mt-5 text-xs font-semibold tracking-wide text-[#081B3A]/75">
                    {pkg.detailHeading}
                  </p>
                  <ul className="mt-3 space-y-2">
                    {pkg.factors.map((factor) => (
                      <li
                        key={factor}
                        className="flex items-start gap-2 text-sm text-[#081B3A]/85"
                      >
                        <CheckCircle2
                          className="mt-0.5 h-4 w-4 shrink-0 text-[#1E8F5A]"
                          aria-hidden="true"
                        />
                        <span>{factor}</span>
                      </li>
                    ))}
                  </ul>

                  {pkg.note && (
                    <p className="mt-4 text-xs leading-relaxed text-[#081B3A]/70">
                      {pkg.note}
                    </p>
                  )}
                </div>

                <div className="mt-7 border-t border-[#081B3A]/12 pt-5">
                  <button
                    type="button"
                    onClick={() => onRequestAssessment(pkg.title)}
                    className="inline-flex min-h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-gradient-to-r from-[#D4AF37] to-[#E3C25A] px-5 py-2.5 text-xs font-semibold text-[#081B3A] transition-colors hover:from-[#C7A22E] hover:to-[#D4AF37] whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#081B3A]"
                  >
                    <span>{pkg.ctaLabel}</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 (Navy): At-a-Glance Investment Guide Table + Guideline Disclaimer */}
      <section className="border-t border-[#D4AF37]/25 bg-gradient-to-b from-[#081B3A] via-[#0A2044] to-[#081B3A] py-16 text-[#F8F7F2] sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold tracking-[0.14em] text-[#D4AF37]">
              TRANSPARENT INVESTMENT OVERVIEW
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-[#F8F7F2] [text-wrap:balance] sm:text-4xl">
              Service Investment Guide
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed tracking-[0.01em] text-[#F8F7F2]/80">
              Indicative starting guidelines across all Synergy Guardian Care
              family disciplines.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-lg border border-[#D4AF37]/35 bg-[#0D244B] shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b border-[#D4AF37]/25 bg-[#06152D] text-xs font-semibold tracking-wider text-[#D4AF37]">
                    <th scope="col" className="px-6 py-4">
                      Service
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Investment Guide
                    </th>
                    <th scope="col" className="px-6 py-4 text-right">
                      Next Step
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#D4AF37]/15 text-sm">
                  {INVESTMENT_GUIDE_ROWS.map((row) => (
                    <tr
                      key={row.service}
                      className="transition-colors hover:bg-[#133163]/60"
                    >
                      <td className="px-6 py-4 font-display font-semibold text-[#F8F7F2]">
                        {row.service}
                      </td>
                      <td className="px-6 py-4 font-semibold text-[#D4AF37] tabular-nums">
                        {row.investmentGuide}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button
                          type="button"
                          onClick={() => onRequestAssessment(row.service)}
                          className="inline-flex min-h-9 cursor-pointer items-center gap-1.5 text-xs font-semibold text-[#F8F7F2]/90 transition-colors hover:text-[#D4AF37] whitespace-nowrap"
                        >
                          <span>Request Quote</span>
                          <ArrowRight className="h-3.5 w-3.5 text-[#D4AF37]" aria-hidden="true" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mandatory Guideline Disclaimer */}
          <p className="mx-auto mt-6 max-w-3xl text-center text-xs leading-relaxed text-[#F8F7F2]/75 sm:text-sm">
            All pricing is provided as a guideline only. Final costs are
            determined by the level of care required, qualifications requested,
            working hours, location, and the unique needs of each individual or
            family.
          </p>
        </div>
      </section>

      {/* Section 4 (Ivory): Smart Comparison — One Trusted Care Partner */}
      <section className="border-t border-[#081B3A]/10 bg-gradient-to-b from-[#F8F7F2] to-[#EFECE1] py-16 text-[#081B3A] sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold tracking-[0.14em] text-[#1E8F5A]">
              VALUE BEYOND SEPARATE AGENCIES
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-[#081B3A] [text-wrap:balance] sm:text-4xl">
              Why Families Choose Synergy Guardian Care
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12">
            {/* Fragmented Multi-Provider Approach */}
            <div className="flex flex-col justify-between rounded-lg border border-[#081B3A]/15 bg-[#EFECE1]/70 p-7 lg:col-span-5">
              <div>
                <p className="text-xs font-semibold tracking-wider text-[#081B3A]/60">
                  THE FRAGMENTED ALTERNATIVE
                </p>
                <h3 className="mt-2 font-display text-xl font-semibold text-[#081B3A]">
                  Hiring Multiple Separate Providers
                </h3>
                <ul className="mt-6 space-y-4">
                  {FRAGMENTED_PROVIDERS.map((provider) => (
                    <li
                      key={provider}
                      className="flex items-center gap-3 text-sm font-medium text-[#081B3A]/70"
                    >
                      <XCircle
                        className="h-5 w-5 shrink-0 text-[#081B3A]/40"
                        aria-hidden="true"
                      />
                      <span>{provider}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="mt-8 border-t border-[#081B3A]/12 pt-5 text-xs leading-relaxed text-[#081B3A]/70">
                Multiple placement fees, inconsistent vetting standards, and
                disjointed communication across your household.
              </p>
            </div>

            {/* Unified Multi-Generational Care Partner */}
            <div className="flex flex-col justify-between rounded-lg border border-[#D4AF37] bg-gradient-to-br from-[#081B3A] to-[#0E2854] p-7 text-[#F8F7F2] shadow-xl lg:col-span-7 sm:p-9">
              <div>
                <p className="text-xs font-semibold tracking-wider text-[#D4AF37]">
                  THE SYNERGY GUARDIAN STANDARD
                </p>
                <h3 className="mt-2 font-display text-2xl font-semibold text-[#F8F7F2]">
                  One Trusted Care Partner for the Whole Family
                </h3>
                <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <li className="flex items-start gap-2.5 text-sm text-[#F8F7F2]/90">
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-[#1E8F5A]"
                      aria-hidden="true"
                    />
                    <span>Unified childcare, elder care &amp; disability support</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-[#F8F7F2]/90">
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-[#1E8F5A]"
                      aria-hidden="true"
                    />
                    <span>Single dedicated Care Coordinator &amp; family contact</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-[#F8F7F2]/90">
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-[#1E8F5A]"
                      aria-hidden="true"
                    />
                    <span>Consistent vetting, background checks &amp; training</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-[#F8F7F2]/90">
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-[#1E8F5A]"
                      aria-hidden="true"
                    />
                    <span>Combined household scheduling &amp; transparent billing</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 border-t border-[#D4AF37]/25 pt-6">
                <button
                  type="button"
                  onClick={() => onRequestAssessment()}
                  className="inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-md bg-gradient-to-r from-[#D4AF37] to-[#E3C25A] px-6 py-2.5 text-xs font-semibold text-[#081B3A] transition-colors hover:from-[#C7A22E] hover:to-[#D4AF37] whitespace-nowrap"
                >
                  <span>Build Your Family Care Plan</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 (Navy): Trust Builder CTA */}
      <section className="border-t border-[#D4AF37]/25 bg-gradient-to-b from-[#081B3A] via-[#0B2249] to-[#081B3A] py-16 text-center text-[#F8F7F2] sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.16em] text-[#D4AF37]">
            PERSONALISED FAMILY RECOMMENDATION
          </p>
          <h2 className="mx-auto mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight text-[#F8F7F2] [text-wrap:balance] sm:text-4xl">
            Not Sure Which Package Is Right For You?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#F8F7F2]/85">
            Every family’s situation is unique. Speak to a Care Advisor to
            discuss your needs and receive a personalised care recommendation
            and quotation.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <button
              type="button"
              onClick={() => onRequestAssessment()}
              className="inline-flex min-h-12 w-full cursor-pointer items-center justify-center gap-2.5 rounded-md bg-gradient-to-r from-[#D4AF37] to-[#E6C55A] px-7 py-3 text-sm font-semibold text-[#081B3A] shadow-lg transition-transform duration-150 hover:-translate-y-0.5 whitespace-nowrap sm:w-auto"
            >
              <span>Request Free Consultation</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>

            <a
              href={PRIMARY_PHONE_TEL}
              className="inline-flex min-h-12 w-full items-center justify-center gap-2.5 rounded-md border border-[#D4AF37]/65 bg-[#0D244B] px-6 py-3 text-sm font-semibold text-[#F8F7F2] transition-colors hover:border-[#D4AF37] hover:bg-[#133163] whitespace-nowrap sm:w-auto"
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
