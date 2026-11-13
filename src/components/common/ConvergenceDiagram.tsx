'use client';

import { useEffect, useRef, useState } from 'react';

const factors = ['Rotina', 'Composição corporal', 'Genética', 'Situação clínica', 'Preferências', 'Objetivos'];
const ROW = 56; // px, altura de cada linha

export default function ConvergenceDiagram() {
  const ref = useRef<HTMLDivElement>(null);
  const [lit, setLit] = useState(false);
  const [settled, setSettled] = useState(false);
  const [hover, setHover] = useState<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setLit(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLit(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Depois que a animação de entrada termina, o hover responde sem atraso.
  useEffect(() => {
    if (!lit) return;
    const t = setTimeout(() => setSettled(true), 2200);
    return () => clearTimeout(t);
  }, [lit]);

  const total = factors.length;
  const anyHover = hover !== null;

  return (
    <div ref={ref} className="grid grid-cols-[auto_1fr_auto] items-stretch w-full max-w-3xl mx-auto">
      <ul style={{ height: total * ROW }} className="flex flex-col" onMouseLeave={() => setHover(null)}>
        {factors.map((factor, i) => {
          const active = hover === i;
          return (
            <li
              key={factor}
              style={{ height: ROW }}
              onMouseEnter={() => setHover(i)}
              className={`flex items-center gap-3 pr-4 font-display text-lg sm:text-2xl font-semibold uppercase tracking-tight leading-none cursor-default transition-all duration-300 ${
                active ? 'text-cyan translate-x-2' : anyHover ? 'text-white/45' : 'text-white'
              }`}
            >
              <span
                aria-hidden="true"
                className={`block h-0.5 bg-cyan transition-all duration-300 ${active ? 'w-5' : 'w-0'}`}
              />
              {factor}
            </li>
          );
        })}
      </ul>

      <svg
        aria-hidden="true"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{ height: total * ROW }}
        className="w-full min-w-10"
      >
        {factors.map((factor, i) => {
          const y = ((i + 0.5) / total) * 100;
          const active = hover === i;
          const d = `M0 ${y} C 55 ${y}, 45 50, 100 50`;
          return (
            <g key={factor}>
              <path d={d} fill="none" vectorEffect="non-scaling-stroke" strokeWidth={1.5} stroke="rgba(255,255,255,0.14)" />
              {/* Linha que se desenha da esquerda para o centro quando o diagrama entra na tela */}
              <path
                d={d}
                fill="none"
                pathLength={1}
                strokeDasharray="1 1"
                strokeDashoffset={lit ? 0 : 1}
                vectorEffect="non-scaling-stroke"
                strokeWidth={active ? 3.5 : 1.5}
                stroke={active ? '#FFFFFF' : '#00B9CF'}
                strokeOpacity={anyHover && !active ? 0.25 : 1}
                style={{
                  transition:
                    'stroke-dashoffset 0.9s cubic-bezier(0.22, 1, 0.36, 1), stroke 0.4s ease, stroke-width 0.3s ease, stroke-opacity 0.3s ease',
                  transitionDelay: lit && !settled ? `${i * 120}ms` : '0ms',
                }}
              />
            </g>
          );
        })}
      </svg>

      <div style={{ height: total * ROW }} className="flex items-center">
        <div
          className={`px-4 py-3 sm:px-6 sm:py-4 font-display text-base sm:text-xl font-extrabold uppercase tracking-[0.08em] leading-tight text-center border-2 transition-all duration-500 ${
            lit ? 'bg-cyan text-ink border-cyan' : 'bg-transparent text-white border-white/30'
          } ${anyHover ? 'scale-105 shadow-[0_0_28px_rgba(0,185,207,0.55)]' : ''}`}
          style={{ transitionDelay: lit && !settled ? '1200ms' : '0ms' }}
        >
          Sua
          <br />
          estratégia
        </div>
      </div>
    </div>
  );
}
