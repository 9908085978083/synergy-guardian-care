import {BRAND_LOGO_URL} from '../data/careData';

interface BrandMarkProps {
  variant?: 'dark' | 'light';
  showWordmark?: boolean;
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'header';
}

export function BrandMark({
  variant = 'dark',
  showWordmark = true,
  showTagline = false,
  size = 'md',
}: BrandMarkProps) {
  const logoSize =
    size === 'header'
      ? 'h-16 w-16 sm:h-24 sm:w-24 lg:h-[120px] lg:w-[120px]'
      : size === 'sm'
        ? 'h-12 w-12'
        : size === 'lg'
          ? 'h-24 w-24 sm:h-28 sm:w-28'
          : 'h-16 w-16';

  const textSize =
    size === 'header'
      ? 'text-base sm:text-lg lg:text-xl'
      : size === 'sm'
        ? 'text-base sm:text-lg'
        : size === 'lg'
          ? 'text-xl sm:text-2xl'
          : 'text-lg sm:text-xl';

  const textColor = variant === 'light' ? 'text-[#F8F7F2]' : 'text-[#081B3A]';
  const taglineColor =
    variant === 'light' ? 'text-[#D4AF37]' : 'text-[#1E8F5A]';
  const borderColor =
    variant === 'light' ? 'border-[#D4AF37]/50' : 'border-[#D4AF37]/75';

  return (
    <span className="inline-flex items-center gap-3.5 whitespace-nowrap shrink-0">
      <img
        src={BRAND_LOGO_URL}
        alt="Synergy Guardian Care official shield logo"
        referrerPolicy="no-referrer"
        className={`${logoSize} shrink-0 rounded-lg border ${borderColor} bg-[#081B3A] object-cover shadow-md`}
      />

      {showWordmark && (
        <span className="flex flex-col leading-tight">
          <span
            className={`font-display font-bold tracking-wider ${textSize} ${textColor} whitespace-nowrap`}
          >
            SYNERGY GUARDIAN CARE
          </span>
          {showTagline && (
            <span
              className={`mt-0.5 text-[11px] font-medium tracking-wide ${taglineColor} whitespace-nowrap sm:text-xs`}
            >
              Protecting Dignity. Delivering Care.
            </span>
          )}
        </span>
      )}
    </span>
  );
}
