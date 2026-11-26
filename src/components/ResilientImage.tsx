import {useState} from 'react';
import {ShieldCheck} from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
  priority?: boolean;
}

export function ResilientImage({
  src,
  alt,
  className = '',
  fallbackTitle = 'Synergy Guardian Care',
  priority = false,
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#081B3A] via-[#0E2854] to-[#081B3A] p-8 text-center text-[#F8F7F2] ${className}`}
      >
        <ShieldCheck className="mb-3 h-10 w-10 text-[#D4AF37]" aria-hidden="true" />
        <p className="font-display text-lg font-semibold tracking-wide text-[#F8F7F2]">
          {fallbackTitle}
        </p>
        <p className="mt-1 max-w-xs text-xs text-[#F8F7F2]/75">{alt}</p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      fetchPriority={priority ? 'high' : 'auto'}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
