'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import { track } from '@/lib/analytics';

export type Athlete = { name: string; role: string; src: string };

const AUTO_MS = 3600;

// Carrossel 3D dos atletas: o card da frente fica de frente e colorido, os
// vizinhos giram para os lados em profundidade. Gira sozinho enquanto está na
// tela (para ao passar o mouse, focar ou com "reduzir movimento"), e dá para
// arrastar, usar as setas ou clicar num card lateral.
export default function AthleteCarousel({ athletes }: { athletes: Athlete[] }) {
  const n = athletes.length;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(false);
  const [reduced, setReduced] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const drag = useRef<{ x: number; moved: boolean } | null>(null);

  const go = useCallback(
    (next: number, how: string) => {
      const i = ((next % n) + n) % n;
      setActive(i);
      if (how !== 'auto') track('atletas_carrossel', { atleta: athletes[i].name, via: how });
    },
    [n, athletes]
  );

  useEffect(() => {
    setReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.35 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!visible || paused || reduced) return;
    const id = window.setTimeout(() => go(active + 1, 'auto'), AUTO_MS);
    return () => window.clearTimeout(id);
  }, [active, visible, paused, reduced, go]);

  // Distância de cada card até o da frente, no caminho mais curto da roda
  const offset = (i: number) => {
    let d = i - active;
    if (d > n / 2) d -= n;
    if (d < -n / 2) d += n;
    return d;
  };

  return (
    <div
      ref={rootRef}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <ul
        aria-roledescription="carrossel"
        className="relative mx-auto h-[440px] sm:h-[500px] touch-pan-y select-none"
        style={{ perspective: '1300px' }}
        onPointerDown={(e) => {
          drag.current = { x: e.clientX, moved: false };
        }}
        onPointerMove={(e) => {
          const d = drag.current;
          if (!d || d.moved || Math.abs(e.clientX - d.x) < 40) return;
          d.moved = true;
          go(active + (e.clientX < d.x ? 1 : -1), 'arrastar');
        }}
        onPointerUp={() => {
          // mantém o "moved" até o clique que vem logo depois decidir
          window.setTimeout(() => (drag.current = null), 0);
        }}
        onPointerCancel={() => (drag.current = null)}
      >
        {athletes.map((a, i) => {
          const d = offset(i);
          const front = d === 0;
          const far = Math.abs(d) >= 2;
          return (
            <li
              key={a.name}
              aria-hidden={!front}
              className="absolute left-1/2 top-0 w-[52%] sm:w-[300px]"
              style={{
                zIndex: 10 - Math.abs(d),
                transform: `translateX(calc(-50% + ${d * 72}%)) translateZ(${-Math.abs(d) * 200}px) rotateY(${-d * 32}deg)`,
                opacity: far ? 0 : front ? 1 : 0.7,
                transition: 'transform 0.9s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s ease-out, filter 0.6s ease-out',
                filter: front ? 'none' : 'grayscale(0.8) brightness(0.7)',
                pointerEvents: far ? 'none' : 'auto',
              }}
              onClick={() => {
                if (drag.current?.moved || front) return;
                go(i, 'clique');
              }}
            >
              <figure className={front ? '' : 'cursor-pointer'}>
                <div className="relative aspect-[4/5] bg-deep overflow-hidden shadow-[0_40px_80px_-30px_rgba(0,0,0,0.9)]">
                  <Image
                    src={a.src}
                    alt={`${a.name}, ${a.role}`}
                    fill
                    draggable={false}
                    sizes="(min-width: 640px) 300px, 52vw"
                    className="object-cover object-top"
                  />
                </div>
                {/* Só o atleta da frente mostra a legenda: as laterais se sobrepõem no celular */}
                <figcaption className={`mt-4 transition-opacity duration-500 ${front ? 'opacity-100' : 'opacity-0'}`}>
                  <span className="block font-display text-xl md:text-2xl font-extrabold uppercase tracking-tight leading-none">
                    {a.name}
                  </span>
                  <span className="block mt-2 text-sm md:text-base text-text-secondary leading-snug">{a.role}</span>
                </figcaption>
              </figure>
            </li>
          );
        })}
      </ul>

      <div className="mt-2 flex items-center justify-center gap-6">
        <button
          type="button"
          onClick={() => go(active - 1, 'seta')}
          aria-label="Atleta anterior"
          className="grid place-items-center w-12 h-12 border border-white/30 hover:border-cyan hover:text-cyan"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" aria-hidden="true">
            <path d="M19 12H5M11 6l-6 6 6 6" />
          </svg>
        </button>
        <p className="font-display text-sm font-bold uppercase tracking-[0.2em] tabular-nums" aria-live="polite">
          <span className="sr-only">{athletes[active].name}, </span>
          {String(active + 1).padStart(2, '0')} / {String(n).padStart(2, '0')}
        </p>
        <button
          type="button"
          onClick={() => go(active + 1, 'seta')}
          aria-label="Próximo atleta"
          className="grid place-items-center w-12 h-12 border border-white/30 hover:border-cyan hover:text-cyan"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
