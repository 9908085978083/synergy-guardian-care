import {
  ArrowRight,
  BadgeCheck,
  Eye,
  GraduationCap,
  PhoneCall,
  ShieldCheck,
  Users,
} from 'lucide-react';
import {VETTING_STAGES, type VettingStage} from '../data/careData';

interface VettingSectionProps {
  onSpeakToCoordinator: () => void;
}

function renderVettingIcon(iconName: VettingStage['iconName']) {
  const iconClass = 'h-5 w-5 text-[#D4AF37]';
  switch (iconName) {
    case 'shield':
      return <ShieldCheck className={iconClass} aria-hidden="true" />;
    case 'id':
      return <BadgeCheck className={iconClass} aria-hidden="true" />;
    case 'phone':
      return <PhoneCall className={iconClass} aria-hidden="true" />;
    case 'graduation':
      return <GraduationCap className={iconClass} aria-hidden="true" />;
    case 'users':
      return <Users className={iconClass} aria-hidden="true" />;
    case 'eye':
      return <Eye className={iconClass} aria-hidden="true" />;
  }
}

export function VettingSection({onSpeakToCoordinator}: VettingSectionProps) {
  return (
    <section
      id="vetting"
      className="border-t border-[#081B3A]/10 bg-gradient-to-b from-[#F8F7F2] to-[#EFECE1] py-16 text-[#081B3A] sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 border-b border-[#081B3A]/12 pb-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.14em] text-[#1E8F5A]">
              CAREGIVER SCREENING &amp; VETTING PROCESS
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-[#081B3A] [text-wrap:balance] sm:text-4xl">
              Six-Stage Vetting &amp; Safety Standard
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-[#081B3A]/80">
            No nanny or caregiver is introduced to your family until every
            background check, identity record, reference, and qualification is
            verified first-hand.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {VETTING_STAGES.map((stage) => (
            <article
              key={stage.id}
              className="flex flex-col justify-between rounded-lg border border-[#081B3A]/15 bg-[#FBF9F4] p-7 shadow-sm transition-colors duration-150 hover:border-[#D4AF37]"
            >
              <div>
                <div className="flex items-center justify-between gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-md bg-[#081B3A]">
                    {renderVettingIcon(stage.iconName)}
                  </div>
                  <span className="text-xs font-semibold tracking-wider text-[#1E8F5A] tabular-nums">
                    Stage {stage.step}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-xl font-semibold text-[#081B3A]">
                  {stage.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[#081B3A]/80">
                  {stage.description}
                </p>
              </div>

              <div
                className="mt-6 h-0.5 w-14 bg-gradient-to-r from-[#081B3A] to-[#D4AF37]"
                aria-hidden="true"
              />
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-lg border border-[#081B3A]/15 bg-[#FBF9F4] p-6 sm:flex-row sm:items-center sm:p-8">
          <div>
            <p className="font-display text-lg font-semibold text-[#081B3A] sm:text-xl">
              Want to review our vetting standards for your household?
            </p>
            <p className="mt-1 text-sm text-[#081B3A]/75">
              Speak directly with a Care Coordinator about candidate profiles
              available in your suburb.
            </p>
          </div>
          <button
            type="button"
            onClick={onSpeakToCoordinator}
            className="inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-md bg-[#081B3A] px-6 py-2.5 text-xs font-semibold text-[#F8F7F2] transition-colors hover:bg-[#0E2A57] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4AF37]"
          >
            <span>Speak With A Care Coordinator</span>
            <ArrowRight className="h-4 w-4 text-[#D4AF37]" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
