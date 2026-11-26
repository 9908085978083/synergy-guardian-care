import {useState} from 'react';
import {MapPin, Quote, ArrowRight, CheckCircle2} from 'lucide-react';
import {SERVICE_AREAS, TESTIMONIALS} from '../data/careData';

interface TestimonialsAndAreasSectionProps {
  onBookInArea: (city: string) => void;
}

export function TestimonialsAndAreasSection({
  onBookInArea,
}: TestimonialsAndAreasSectionProps) {
  const [selectedAreaId, setSelectedAreaId] = useState(SERVICE_AREAS[0].id);
  const activeArea =
    SERVICE_AREAS.find((area) => area.id === selectedAreaId) ?? SERVICE_AREAS[0];

  return (
    <>
      {/* Client Success Stories on Soft Cream/Ivory */}
      <section
        id="testimonials"
        className="border-t border-[#081B3A]/10 bg-gradient-to-b from-[#F8F7F2] to-[#EFECE1] py-16 text-[#081B3A] sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 border-b border-[#081B3A]/12 pb-8 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-[0.14em] text-[#1E8F5A]">
                TRUSTED BY GAUTENG HOUSEHOLDS
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-[#081B3A] [text-wrap:balance] sm:text-4xl">
                Client Success Stories
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-[#081B3A]/75">
              Real experiences from Johannesburg, Sandton, Fourways, and
              Randburg families entrusting us with their loved ones.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {TESTIMONIALS.map((item, idx) => (
              <figure
                key={item.id}
                className={`flex flex-col justify-between rounded-lg border p-7 shadow-sm sm:p-8 ${
                  idx === 0
                    ? 'border-[#D4AF37] bg-[#FBF9F4]'
                    : 'border-[#081B3A]/15 bg-[#FBF9F4]'
                }`}
              >
                <div>
                  <Quote
                    className="h-6 w-6 text-[#D4AF37]"
                    aria-hidden="true"
                  />
                  <blockquote className="mt-5 text-base leading-relaxed font-medium text-[#081B3A]">
                    {item.quote}
                  </blockquote>
                </div>

                <figcaption className="mt-8 border-t border-[#081B3A]/12 pt-5">
                  <p className="font-display text-base font-semibold text-[#081B3A]">
                    {item.author}
                  </p>
                  <p className="mt-1 text-xs font-medium text-[#081B3A]/70">
                    {item.role} · {item.location}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-[#1E8F5A]">
                    {item.outcome}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Across Gauteng on Midnight Navy */}
      <section
        id="service-areas"
        className="border-t border-[#D4AF37]/25 bg-gradient-to-b from-[#081B3A] via-[#0A2044] to-[#081B3A] py-16 text-[#F8F7F2] sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Left: Service Region Selector */}
            <div className="lg:col-span-6">
              <p className="text-xs font-semibold tracking-[0.14em] text-[#D4AF37]">
                JOHANNESBURG &amp; GAUTENG COVERAGE
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-[#F8F7F2] [text-wrap:balance] sm:text-4xl">
                Service Areas Across Gauteng
              </h2>
              <p className="mt-4 text-sm leading-relaxed tracking-[0.01em] text-[#F8F7F2]/80 sm:text-base">
                Our care coordinators, vetted stay-in nannies, and professional
                caregivers serve residential homes and lifestyle estates across
                Johannesburg, Sandton, Fourways, Randburg, Midrand, Roodepoort,
                and Pretoria.
              </p>

              <div
                role="tablist"
                aria-label="Gauteng service regions"
                className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3"
              >
                {SERVICE_AREAS.map((area) => {
                  const isSelected = area.id === activeArea.id;
                  return (
                    <button
                      key={area.id}
                      type="button"
                      role="tab"
                      aria-selected={isSelected}
                      onClick={() => setSelectedAreaId(area.id)}
                      className={`flex min-h-12 cursor-pointer items-center gap-2 rounded-md border px-4 py-3 text-left text-sm font-semibold transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4AF37] ${
                        isSelected
                          ? 'border-[#D4AF37] bg-gradient-to-r from-[#D4AF37] to-[#E3C25A] text-[#081B3A] shadow-md'
                          : 'border-[#D4AF37]/25 bg-[#0D244B] text-[#F8F7F2] hover:border-[#D4AF37]'
                      }`}
                    >
                      <MapPin
                        className={`h-4 w-4 shrink-0 ${
                          isSelected ? 'text-[#081B3A]' : 'text-[#D4AF37]'
                        }`}
                        aria-hidden="true"
                      />
                      <span className="truncate">{area.city}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right: Selected Region Coverage Panel */}
            <div className="lg:col-span-6">
              <div
                role="tabpanel"
                className="flex h-full flex-col justify-between rounded-lg border border-[#D4AF37]/35 bg-gradient-to-br from-[#0E2751] to-[#081B3A] p-7 shadow-xl sm:p-9"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#D4AF37]/20 pb-4">
                    <div>
                      <p className="text-xs font-semibold tracking-wider text-[#D4AF37]">
                        {activeArea.corridor}
                      </p>
                      <h3 className="mt-1 font-display text-2xl font-semibold text-[#F8F7F2]">
                        {activeArea.city} Care Coverage
                      </h3>
                    </div>
                    <span className="text-xs font-semibold text-[#D4AF37] tabular-nums">
                      {activeArea.responseTime}
                    </span>
                  </div>

                  <p className="mt-5 text-sm leading-relaxed tracking-[0.01em] text-[#F8F7F2]/85">
                    {activeArea.coordinationNote}
                  </p>

                  <div className="mt-6">
                    <p className="text-xs font-semibold tracking-wide text-[#F8F7F2]/70">
                      Primary Suburbs &amp; Estates Covered
                    </p>
                    <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                      {activeArea.suburbs.map((suburb) => (
                        <li
                          key={suburb}
                          className="flex items-center gap-2 text-sm text-[#F8F7F2]/90"
                        >
                          <CheckCircle2
                            className="h-4 w-4 shrink-0 text-[#1E8F5A]"
                            aria-hidden="true"
                          />
                          <span>{suburb}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 border-t border-[#D4AF37]/20 pt-6">
                  <button
                    type="button"
                    onClick={() => onBookInArea(activeArea.city)}
                    className="inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-md bg-gradient-to-r from-[#D4AF37] to-[#E3C25A] px-5 py-2.5 text-xs font-semibold text-[#081B3A] transition-colors hover:from-[#C7A22E] hover:to-[#D4AF37] whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F8F7F2]"
                  >
                    <span>Arrange A Family Consultation in {activeArea.city}</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
