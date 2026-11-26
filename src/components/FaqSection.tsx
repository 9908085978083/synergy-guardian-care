import {useState} from 'react';
import {ArrowRight, ChevronDown} from 'lucide-react';
import {FAQ_ITEMS} from '../data/careData';

interface FaqSectionProps {
  onSpeakToCoordinator: () => void;
}

export function FaqSection({onSpeakToCoordinator}: FaqSectionProps) {
  const [openId, setOpenId] = useState<string>(FAQ_ITEMS[0].id);

  return (
    <section
      id="faq"
      className="border-t border-[#081B3A]/10 bg-gradient-to-b from-[#F8F7F2] to-[#EFECE1] py-16 text-[#081B3A] sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold tracking-[0.14em] text-[#1E8F5A]">
              CLEAR ANSWERS FOR FAMILIES
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-[#081B3A] [text-wrap:balance] sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#081B3A]/80 sm:text-base">
              Everything Johannesburg and Gauteng families ask when arranging a
              vetted stay-in nanny, elderly caregiver, post-hospital nurse, or
              disability support specialist.
            </p>

            <div className="mt-8">
              <button
                type="button"
                onClick={onSpeakToCoordinator}
                className="inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-md bg-[#081B3A] px-6 py-2.5 text-xs font-semibold text-[#F8F7F2] transition-colors hover:bg-[#0E2A57] whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4AF37]"
              >
                <span>Speak With A Care Coordinator</span>
                <ArrowRight className="h-4 w-4 text-[#D4AF37]" aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className="space-y-3 lg:col-span-7">
            {FAQ_ITEMS.map((item) => {
              const isOpen = item.id === openId;
              return (
                <div
                  key={item.id}
                  className={`rounded-lg border transition-colors duration-150 ${
                    isOpen
                      ? 'border-[#D4AF37] bg-[#FBF9F4] shadow-sm'
                      : 'border-[#081B3A]/15 bg-[#FBF9F4] hover:border-[#D4AF37]/60'
                  }`}
                >
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${item.id}`}
                      onClick={() => setOpenId(isOpen ? '' : item.id)}
                      className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4AF37]"
                    >
                      <span className="font-display text-base font-semibold text-[#081B3A] sm:text-lg">
                        {item.question}
                      </span>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-[#D4AF37] transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                  </h3>
                  {isOpen && (
                    <div
                      id={`faq-panel-${item.id}`}
                      className="border-t border-[#081B3A]/10 px-6 pt-4 pb-5 text-sm leading-relaxed text-[#081B3A]/85"
                    >
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
