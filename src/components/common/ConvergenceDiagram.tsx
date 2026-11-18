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
    // Acende ao entrar na tela e apaga ao sair, para a entrada se repetir
    // também quando a pessoa volta rolando para cima
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setLit(true);
        else if (entry.intersectionRatio === 0) setLit(false);
      },
      { threshold: [0, 0.4] },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Depois que a animação de entrada termina, o hover responde sem atraso.
  useEffect(() => {
    if (!lit) {
      setSettled(false);
      return;
    }
    const t = setTimeout(() => setSettled(true), 1600);
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
              {/* Linha bem fina e tracejada, que aparece em sequência ao entrar na tela */}
              <path
                d={d}
                fill="none"
                pathLength={100}
                strokeDasharray="0.8 1.6"
                vectorEffect="non-scaling-stroke"
                strokeWidth={1}
                stroke="#00B9CF"
                strokeOpacity={!lit ? 0 : anyHover && !active ? 0.2 : active ? 0.9 : 0.5}
                style={{
                  transition: 'stroke-opacity 0.6s ease',
                  transitionDelay: lit && !settled ? `${i * 120}ms` : '0ms',
                }}
              />
              {/* Ponto de luz que corre sem parar do fator até "Sua estratégia" */}
              {settled && (
                <path
                  d={d}
                  fill="none"
                  pathLength={1}
                  strokeDasharray="0.07 0.93"
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                  strokeWidth={active ? 5 : 3.5}
                  stroke="#E5FBFD"
                  strokeOpacity={anyHover && !active ? 0.15 : 0.95}
                  className="conn-light"
                  // Ao passar o mouse no fator, a luz dele corre mais rápido
                  style={{ animationDelay: `${-((i * 0.37) % 1) * 2.4}s`, animationDuration: active ? '0.8s' : '2.4s' }}
                />
              )}
            </g>
          );
        })}
      </svg>

      {/* "Sua estratégia" só como palavra, com brilho neon quando acende */}
      <div style={{ height: total * ROW }} className="flex items-center">
        <p
          className={`pl-2 font-display text-xl sm:text-3xl font-extrabold uppercase tracking-[0.08em] leading-tight text-center transition-all duration-700 ${
            lit ? 'text-cyan-light conv-neon' : 'text-white/40'
          } ${anyHover ? 'conv-neon-strong scale-105' : ''}`}
          style={{ transitionDelay: lit && !settled ? '1100ms' : '0ms' }}
        >
          Sua
          <br />
          estratégia
        </p>
      </div>
    </div>
  );
}
