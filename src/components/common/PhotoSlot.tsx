import Image from 'next/image';
import type { ReactNode } from 'react';

interface PhotoSlotProps {
  src?: string;
  alt: string;
  caption?: ReactNode;
  className?: string;
  priority?: boolean;
  objectPosition?: string;
}

// Sem `src`, mostra um quadro técnico neutro; a foto real entra em /public.
export default function PhotoSlot({
  src,
  alt,
  caption,
  className = '',
  priority = false,
  objectPosition = 'center top',
}: PhotoSlotProps) {
  return (
    <figure className={className}>
      <div className="relative aspect-[4/5] bg-deep overflow-hidden">
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
            style={{ objectPosition }}
          />
        ) : (
          <svg
            viewBox="0 0 100 125"
            className="absolute inset-0 w-full h-full"
            fill="none"
            aria-hidden="true"
            preserveAspectRatio="xMidYMid slice"
          >
            <g stroke="#00B9CF" strokeOpacity="0.25" strokeWidth="0.3">
              {Array.from({ length: 8 }).map((_, i) => (
                <line key={`h${i}`} x1="0" x2="100" y1={i * 17.5} y2={i * 17.5} />
              ))}
              {Array.from({ length: 7 }).map((_, i) => (
                <line key={`v${i}`} y1="0" y2="125" x1={i * 17.5} x2={i * 17.5} />
              ))}
            </g>
            <circle cx="50" cy="62" r="22" stroke="#FFFFFF" strokeOpacity="0.7" strokeWidth="0.5" />
            <line x1="20" y1="62" x2="80" y2="62" stroke="#FFFFFF" strokeOpacity="0.7" strokeWidth="0.5" />
            <line x1="50" y1="32" x2="50" y2="92" stroke="#FFFFFF" strokeOpacity="0.7" strokeWidth="0.5" />
            <circle cx="50" cy="62" r="2" fill="#00B9CF" />
          </svg>
        )}
      </div>
      {caption && (
        <figcaption className="mt-4 flex items-start gap-3 font-display text-base font-bold uppercase tracking-[0.12em] leading-snug">
          <span className="block w-6 h-px bg-cyan mt-3 shrink-0" />
          <span>{caption}</span>
        </figcaption>
      )}
    </figure>
  );
}
