import {useState} from 'react';
import {
  Activity,
  ArrowRight,
  ClipboardCheck,
  Clock,
  Home,
  MessageSquare,
  UserCheck,
} from 'lucide-react';
import {CARE_PROCESS_STEPS, type ProcessStep} from '../data/careData';

interface CareProcessSectionProps {
  onRequestConsultation: () => void;
}

function renderProcessIcon(iconName: ProcessStep['iconName'], isActive: boolean) {
  const iconClass = `h-4 w-4 ${isActive ? 'text-[#081B3A]' : 'text-[#D4AF37]'}`;
  switch (iconName) {
    case 'message':
      return <MessageSquare className={iconClass} aria-hidden="true" />;
    case 'clipboard':
      return <ClipboardCheck className={iconClass} aria-hidden="true" />;
    case 'usercheck':
      return <UserCheck className={iconClass} aria-hidden="true" />;
    case 'home':
      return <Home className={iconClass} aria-hidden="true" />;
    case 'activity':
      return <Activity className={iconClass} aria-hidden="true" />;
  }
}

export function CareProcessSection({
  onRequestConsultation,
}: CareProcessSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStep = CARE_PROCESS_STEPS[activeIndex];

  return (
    <section
      id="process"
      className="border-t border-[#D4AF37]/25 bg-gradient-to-b from-[#081B3A] via-[#0B2249] to-[#081B3A] py-16 text-[#F8F7F2] sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.14em] text-[#D4AF37]">
              FIVE-STAGE PLACEMENT &amp; GOVERNANCE
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-[#F8F7F2] [text-wrap:balance] sm:text-4xl">
              OUR CARE PROCESS
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed tracking-[0.01em] text-[#F8F7F2]/80">
            From your initial consultation to ongoing supervisory monitoring,
            every stage is structured, transparent, and unhurried.
          </p>
        </div>

        {/* 5-Step Interactive Pathway */}
        <div
          role="tablist"
          aria-label="Synergy Guardian Care five-step care process"
          className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5"
        >
          {CARE_PROCESS_STEPS.map((step, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={step.stepNumber}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveIndex(index)}
                className={`flex min-h-32 cursor-pointer flex-col justify-between rounded-lg border p-5 text-left transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4AF37] ${
                  isActive
                    ? 'border-[#D4AF37] bg-gradient-to-br from-[#D4AF37] to-[#E3C25A] text-[#081B3A] shadow-lg'
                    : 'border-[#D4AF37]/25 bg-[#0D244B] text-[#F8F7F2] hover:border-[#D4AF37]'
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={`text-xs font-semibold tracking-wider tabular-nums ${
                      isActive ? 'text-[#081B3A]' : 'text-[#D4AF37]'
                    }`}
                  >
                    Step {Number(step.stepNumber)}
                  </span>
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-md ${
                      isActive ? 'bg-[#081B3A]/12' : 'bg-[#081B3A]'
                    }`}
                  >
                    {renderProcessIcon(step.iconName, isActive)}
                  </div>
                </div>
                <span className="mt-4 font-display text-base font-semibold leading-snug">
                  {step.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Step Detail Panel */}
        <div
          role="tabpanel"
          className="mt-6 rounded-lg border border-[#D4AF37]/30 bg-gradient-to-br from-[#0E2751] to-[#081B3A] p-6 shadow-xl sm:p-10"
        >
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div className="flex flex-wrap items-center gap-3 text-xs font-semibold tracking-wide text-[#D4AF37]">
                <span className="tabular-nums">
                  Step {Number(activeStep.stepNumber)} of 5
                </span>
                <span aria-hidden="true">·</span>
                <span>{activeStep.title}</span>
              </div>
              <h3 className="mt-2 font-display text-2xl font-semibold text-[#F8F7F2]">
                {activeStep.headline}
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed tracking-[0.01em] text-[#F8F7F2]/85 sm:text-base">
                {activeStep.description}
              </p>
            </div>

            <div className="flex flex-col justify-between gap-4 border-t border-[#D4AF37]/20 pt-6 lg:col-span-4 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
              <div>
                <p className="text-xs font-medium text-[#F8F7F2]/65">
                  Key Milestone
                </p>
                <p className="mt-1 text-sm font-semibold text-[#F8F7F2]">
                  {activeStep.deliverable}
                </p>
                <div className="mt-3 flex items-center gap-2 text-xs font-medium text-[#1E8F5A]">
                  <Clock className="h-4 w-4 text-[#D4AF37]" aria-hidden="true" />
                  <span className="text-[#D4AF37] tabular-nums">
                    {activeStep.timeframe}
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={onRequestConsultation}
                className="inline-flex min-h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-gradient-to-r from-[#D4AF37] to-[#E3C25A] px-5 py-2.5 text-xs font-semibold text-[#081B3A] transition-colors hover:from-[#C7A22E] hover:to-[#D4AF37] whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F8F7F2] sm:w-auto"
              >
                <span>Arrange A Family Consultation</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
