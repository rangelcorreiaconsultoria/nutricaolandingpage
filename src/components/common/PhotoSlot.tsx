interface PhotoSlotProps {
  src?: string;
  alt: string;
  caption?: string;
  className?: string;
}

// Sem `src`, mostra um quadro técnico neutro; a foto real entra em /public.
export default function PhotoSlot({ src, alt, caption, className = '' }: PhotoSlotProps) {
  return (
    <figure className={className}>
      <div className="relative aspect-[4/5] bg-cyan-light overflow-hidden">
        {src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={src} alt={alt} className="absolute inset-0 w-full h-full object-cover" />
        ) : (
          <svg
            viewBox="0 0 100 125"
            className="absolute inset-0 w-full h-full"
            fill="none"
            role="img"
            aria-label={alt}
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
            <circle cx="50" cy="62" r="22" stroke="#101719" strokeWidth="0.5" />
            <line x1="20" y1="62" x2="80" y2="62" stroke="#101719" strokeWidth="0.5" />
            <line x1="50" y1="32" x2="50" y2="92" stroke="#101719" strokeWidth="0.5" />
            <circle cx="50" cy="62" r="2" fill="#00B9CF" />
          </svg>
        )}
      </div>
      {caption && (
        <figcaption className="mt-3 flex items-center gap-3 font-display text-base font-bold uppercase tracking-[0.15em]">
          <span className="block w-6 h-px bg-cyan" />
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
