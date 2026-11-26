import {
  ArrowRight,
  Award,
  HeartHandshake,
  ShieldCheck,
  TreePine,
} from 'lucide-react';
import {FOUR_PILLARS, type CarePillar} from '../data/careData';

interface PillarsSectionProps {
  onSpeakToCoordinator?: () => void;
}

function renderPillarIcon(iconName: CarePillar['iconName']) {
  const iconClass = 'h-6 w-6 text-[#D4AF37]';
  switch (iconName) {
    case 'shield':
      return <ShieldCheck className={iconClass} aria-hidden="true" />;
    case 'heart':
      return <HeartHandshake className={iconClass} aria-hidden="true" />;
    case 'tree':
      return <TreePine className={iconClass} aria-hidden="true" />;
    case 'award':
      return <Award className={iconClass} aria-hidden="true" />;
  }
}

export function PillarsSection({onSpeakToCoordinator}: PillarsSectionProps) {
  return (
    <section
      id="why-us"
      className="border-t border-[#081B3A]/10 bg-gradient-to-b from-[#F8F7F2] to-[#EFECE1] py-16 text-[#081B3A] sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 border-b border-[#081B3A]/12 pb-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.14em] text-[#1E8F5A]">
              TRUSTED CARE STANDARD
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-[#081B3A] [text-wrap:balance] sm:text-4xl">
              Why Families Choose Us
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#081B3A]/80 sm:text-base">
              Every caregiver placement and daily routine is governed by four
              enduring commitments to your loved one’s safety and comfort.
            </p>
          </div>
          {onSpeakToCoordinator && (
            <button
              type="button"
              onClick={onSpeakToCoordinator}
              className="inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-md bg-[#081B3A] px-5 py-2.5 text-xs font-semibold text-[#F8F7F2] transition-colors hover:bg-[#0E2A57] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4AF37]"
            >
              <span>Speak With A Care Coordinator</span>
              <ArrowRight className="h-4 w-4 text-[#D4AF37]" aria-hidden="true" />
            </button>
          )}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FOUR_PILLARS.map((pillar, index) => (
            <div
              key={pillar.id}
              className="flex flex-col justify-between rounded-lg border border-[#081B3A]/15 bg-[#FBF9F4] p-7 shadow-sm transition-colors duration-150 hover:border-[#D4AF37]"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-md bg-[#081B3A]">
                    {renderPillarIcon(pillar.iconName)}
                  </div>
                  <span className="text-xs font-semibold text-[#1E8F5A] tabular-nums">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold text-[#081B3A]">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#081B3A]/80">
                  {pillar.description}
                </p>
              </div>
              <div
                className="mt-6 h-0.5 w-14 bg-gradient-to-r from-[#081B3A] to-[#D4AF37]"
                aria-hidden="true"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
