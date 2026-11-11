'use client';

import { useEffect, useRef, useState } from 'react';

const factors = ['Rotina', 'Composição corporal', 'Genética', 'Situação clínica', 'Preferências', 'Objetivos'];
const ROW = 56; // px, altura de cada linha

export default function ConvergenceDiagram() {
  const ref = useRef<HTMLDivElement>(null);
  const [lit, setLit] = useState(false);

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

  const total = factors.length;

  return (
    <div ref={ref} className="grid grid-cols-[auto_1fr_auto] items-stretch max-w-4xl">
      <ul style={{ height: total * ROW }} className="flex flex-col">
        {factors.map((factor) => (
          <li
            key={factor}
            style={{ height: ROW }}
            className="flex items-center font-display text-lg sm:text-2xl font-semibold uppercase tracking-tight leading-none"
          >
            {factor}
          </li>
        ))}
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
          return (
            <path
              key={factor}
              d={`M0 ${y} C 55 ${y}, 45 50, 100 50`}
              fill="none"
              vectorEffect="non-scaling-stroke"
              strokeWidth={1.5}
              stroke={lit ? '#00B9CF' : 'rgba(255,255,255,0.18)'}
              style={{ transition: 'stroke 0.6s ease', transitionDelay: lit ? `${i * 120}ms` : '0ms' }}
            />
          );
        })}
      </svg>

      <div style={{ height: total * ROW }} className="flex items-center">
        <div
          className={`px-4 py-3 sm:px-6 sm:py-4 font-display text-base sm:text-xl font-extrabold uppercase tracking-[0.08em] leading-tight text-center border-2 transition-colors duration-500 ${
            lit ? 'bg-cyan text-ink border-cyan' : 'bg-transparent text-white border-white/30'
          }`}
          style={{ transitionDelay: lit ? '700ms' : '0ms' }}
        >
          Sua
          <br />
          estratégia
        </div>
      </div>
    </div>
  );
}
