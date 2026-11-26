import {ArrowUpRight, CheckCircle2} from 'lucide-react';
import {motion} from 'motion/react';
import {CARE_SOLUTIONS, type CareService} from '../data/careData';
import {ResilientImage} from './ResilientImage';

interface ServicesSectionProps {
  onSelectService: (service: CareService) => void;
  onBookService: (serviceTitle: string) => void;
  onOpenPackages: () => void;
}

export function ServicesSection({
  onSelectService,
  onBookService,
  onOpenPackages,
}: ServicesSectionProps) {
  const featuredChildcareServices = CARE_SOLUTIONS.slice(0, 2); // 01. Child Care & 02. Stay-In Nannies
  const coreAndSpecializedServices = CARE_SOLUTIONS.slice(2); // 03..07

  return (
    <section
      id="services"
      className="border-t border-[#D4AF37]/25 bg-gradient-to-b from-[#081B3A] via-[#0A2044] to-[#081B3A] py-16 text-[#F8F7F2] sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 border-b border-[#D4AF37]/25 pb-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.14em] text-[#D4AF37]">
              COMPREHENSIVE CARE SERVICES
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-[#F8F7F2] [text-wrap:balance] sm:text-4xl">
              CARE SOLUTIONS FOR EVERY STAGE OF LIFE
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed tracking-[0.01em] text-[#F8F7F2]/80">
            Child Care, Stay-In Nannies, Babysitting, Elderly Care, Post-Hospital
            Care, Disability Support, and Companion Care across Johannesburg and
            Gauteng.
          </p>
        </div>

        {/* Row 1: Priority Childcare & Nanny Placement Pair */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {featuredChildcareServices.map((service) => (
            <motion.article
              key={service.id}
              whileHover={{y: -2}}
              transition={{duration: 0.18, ease: [0.16, 1, 0.3, 1]}}
              className="group flex flex-col overflow-hidden rounded-lg border border-[#D4AF37]/50 bg-gradient-to-br from-[#0F2A56] to-[#081B3A] shadow-xl"
            >
              {service.image && (
                <div className="h-64 w-full overflow-hidden border-b border-[#D4AF37]/25">
                  <ResilientImage
                    src={service.image}
                    alt={service.imageAlt ?? service.title}
                    className="h-full w-full object-cover"
                    fallbackTitle={service.title}
                  />
                </div>
              )}

              <div className="flex flex-1 flex-col justify-between p-7 sm:p-8">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5 text-xs font-semibold tracking-wider text-[#D4AF37]">
                    <span className="tabular-nums">{service.index}</span>
                    {service.subtitle && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span>{service.subtitle}</span>
                      </>
                    )}
                  </div>

                  <h3 className="mt-2 font-display text-2xl font-semibold text-[#F8F7F2] sm:text-3xl">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed tracking-[0.01em] text-[#F8F7F2]/85 sm:text-base">
                    {service.summary}
                  </p>

                  <ul className="mt-5 grid grid-cols-1 gap-x-4 gap-y-2 border-t border-[#D4AF37]/20 pt-4 sm:grid-cols-2">
                    {service.inclusions.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-xs leading-relaxed text-[#F8F7F2]/90"
                      >
                        <CheckCircle2
                          className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#1E8F5A]"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-7 flex flex-wrap items-center justify-between gap-3 border-t border-[#D4AF37]/20 pt-5">
                  <button
                    type="button"
                    onClick={() => onSelectService(service)}
                    className="inline-flex min-h-10 cursor-pointer items-center gap-1.5 text-xs font-semibold text-[#D4AF37] transition-colors hover:text-[#F0D576] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4AF37]"
                  >
                    <span>View Scope</span>
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={() => onBookService(service.title)}
                    className="inline-flex min-h-10 cursor-pointer items-center gap-1.5 rounded-md bg-gradient-to-r from-[#D4AF37] to-[#E3C25A] px-4 py-2 text-xs font-semibold text-[#081B3A] transition-colors hover:from-[#C7A22E] hover:to-[#D4AF37] whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F8F7F2]"
                  >
                    <span>Find The Right Caregiver</span>
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Rows 2 & 3: Dedicated Care Disciplines 03..07 cleanly balanced on 12 columns */}
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-12">
          {coreAndSpecializedServices.map((service, idx) => {
            const spanClass = idx < 3 ? 'lg:col-span-4' : 'lg:col-span-6';

            return (
              <motion.article
                key={service.id}
                whileHover={{y: -2}}
                transition={{duration: 0.18, ease: [0.16, 1, 0.3, 1]}}
                className={`group flex flex-col justify-between overflow-hidden rounded-lg border border-[#D4AF37]/25 bg-gradient-to-br from-[#0E2751] to-[#081B3A] shadow-lg transition-colors duration-150 hover:border-[#D4AF37] ${spanClass}`}
              >
                {service.image && (
                  <div className="h-52 w-full overflow-hidden border-b border-[#D4AF37]/20">
                    <ResilientImage
                      src={service.image}
                      alt={service.imageAlt ?? service.title}
                      className="h-full w-full object-cover"
                      fallbackTitle={service.title}
                    />
                  </div>
                )}

                <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#D4AF37]">
                      <span className="tabular-nums">{service.index}</span>
                      {service.subtitle && (
                        <>
                          <span aria-hidden="true">·</span>
                          <span>{service.subtitle}</span>
                        </>
                      )}
                    </div>
                    <h3 className="mt-2 font-display text-xl font-semibold text-[#F8F7F2] sm:text-2xl">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed tracking-[0.01em] text-[#F8F7F2]/85">
                      {service.summary}
                    </p>

                    <ul className="mt-4 space-y-2 border-t border-[#D4AF37]/15 pt-4">
                      {service.inclusions.slice(0, 3).map((benefit) => (
                        <li
                          key={benefit}
                          className="flex items-start gap-2 text-xs leading-relaxed text-[#F8F7F2]/85"
                        >
                          <CheckCircle2
                            className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#1E8F5A]"
                            aria-hidden="true"
                          />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-[#D4AF37]/20 pt-4">
                    <button
                      type="button"
                      onClick={() => onSelectService(service)}
                      className="inline-flex min-h-10 cursor-pointer items-center gap-1.5 text-xs font-semibold tracking-wide text-[#D4AF37] transition-colors group-hover:text-[#F0D576] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4AF37]"
                    >
                      <span>View Care Scope</span>
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      onClick={() => onBookService(service.title)}
                      className="inline-flex min-h-9 cursor-pointer items-center gap-1 rounded-md border border-[#D4AF37]/45 px-3 py-1.5 text-xs font-semibold text-[#F8F7F2] transition-colors hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#081B3A] whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4AF37]"
                    >
                      <span>Book {service.title}</span>
                    </button>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Link to Care Packages & Service Options Page */}
        <div className="mt-10 flex flex-col justify-between gap-4 rounded-lg border border-[#D4AF37]/30 bg-[#0D244B] p-6 sm:flex-row sm:items-center sm:p-8">
          <div>
            <p className="text-xs font-semibold tracking-[0.14em] text-[#D4AF37]">
              FLEXIBLE CARE SOLUTIONS
            </p>
            <p className="mt-1 font-display text-lg font-semibold text-[#F8F7F2] sm:text-xl">
              Explore Care Packages &amp; Indicative Investment Guide
            </p>
          </div>
          <button
            type="button"
            onClick={onOpenPackages}
            className="inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-md bg-gradient-to-r from-[#D4AF37] to-[#E3C25A] px-6 py-2.5 text-xs font-semibold text-[#081B3A] transition-colors hover:from-[#C7A22E] hover:to-[#D4AF37] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F8F7F2]"
          >
            <span>Care Packages &amp; Service Options</span>
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}

