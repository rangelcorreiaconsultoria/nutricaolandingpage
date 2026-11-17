'use client';

import { useEffect, useRef, useState } from 'react';

const factors = [
  { name: 'Rotina', note: 'Horários, trabalho e treinos definem quando e como você consegue comer.' },
  { name: 'Composição corporal', note: 'Quanto você tem de massa muscular e de gordura orienta calorias e nutrientes.' },
  { name: 'Genética', note: 'Seu histórico e a forma como seu corpo responde explicam por que a mesma dieta não serve para todos.' },
  { name: 'Situação clínica', note: 'Exames, condições de saúde e medicamentos definem limites e prioridades.' },
  { name: 'Preferências', note: 'Os alimentos de que você gosta tornam o plano possível de seguir no dia a dia.' },
  { name: 'Objetivos', note: 'Emagrecer, ganhar massa ou render mais nos treinos muda toda a estratégia.' },
];

const R = 38; // raio da órbita dos fatores, em % do quadro
const CORE = 15; // raio do centro, em % do quadro

const point = (i: number, r: number) => {
  const a = -Math.PI / 2 + (i * 2 * Math.PI) / factors.length;
  return { x: 50 + r * Math.cos(a), y: 50 + r * Math.sin(a) };
};

// Os seis fatores em órbita em volta de um alvo central ("Sua estratégia"),
// cada um ligado a ele por uma linha por onde a energia flui para dentro: tudo
// converge para a mesma decisão. Ao entrar na tela os fatores chegam de fora
// para a órbita e as linhas se desenham; o centro pulsa. Passar o mouse, focar
// ou tocar num fator acende a linha dele e mostra como ele pesa na estratégia.
export default function ConvergenceDiagram() {
  const ref = useRef<HTMLDivElement>(null);
  const [lit, setLit] = useState(false);
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
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
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const anyActive = active !== null;

  return (
    <div className="w-full max-w-[600px] mx-auto">
      <div
        ref={ref}
        className="relative w-full aspect-square [container-type:inline-size]"
        onMouseLeave={() => setActive(null)}
      >
        <svg aria-hidden="true" viewBox="0 0 100 100" className="absolute inset-0 w-full h-full overflow-visible">
          {/* Órbita tracejada girando devagar */}
          <circle
            cx="50"
            cy="50"
            r={R}
            fill="none"
            stroke="rgba(255,255,255,0.12)"
            strokeWidth="0.3"
            strokeDasharray="0.6 1.6"
            className="conv-orbit"
          />

          {factors.map((f, i) => {
            const from = point(i, R - 8);
            const to = point(i, CORE + 1.5);
            const on = active === i;
            const d = `M${from.x} ${from.y} L${to.x} ${to.y}`;
            return (
              <g key={f.name} style={{ opacity: anyActive && !on ? 0.25 : 1, transition: 'opacity 0.3s ease' }}>
                <path
                  d={d}
                  pathLength={1}
                  fill="none"
                  stroke={on ? '#ffffff' : 'rgba(0,185,207,0.35)'}
                  strokeWidth={on ? 0.7 : 0.4}
                  strokeDasharray="1 1"
                  strokeDashoffset={lit ? 0 : 1}
                  style={{
                    transition: `stroke-dashoffset 0.9s cubic-bezier(0.22, 1, 0.36, 1) ${lit ? 300 + i * 110 : 0}ms, stroke 0.3s, stroke-width 0.3s`,
                  }}
                />
                {/* Energia correndo do fator para o centro */}
                {lit && (
                  <path
                    d={d}
                    pathLength={12}
                    fill="none"
                    stroke={on ? '#ffffff' : '#00B9CF'}
                    strokeWidth={on ? 1 : 0.7}
                    strokeLinecap="round"
                    strokeDasharray="1 3"
                    className="conv-flow"
                    style={{ animationDelay: `${1.1 + i * 0.11}s`, animationDuration: on ? '0.6s' : '1.4s' }}
                  />
                )}
              </g>
            );
          })}

          {/* Alvo: anéis em volta do centro, o de fora pulsando */}
          <circle cx="50" cy="50" r={CORE + 6} fill="none" stroke="rgba(0,185,207,0.25)" strokeWidth="0.3" />
          {lit && <circle cx="50" cy="50" r={CORE} fill="none" stroke="#00B9CF" strokeWidth="0.5" className="conv-pulse" />}
        </svg>

        <div
          className="absolute left-1/2 top-1/2 grid place-items-center rounded-full bg-cyan text-ink text-center shadow-[0_0_60px_rgba(0,185,207,0.45)]"
          style={{
            width: `${CORE * 2}%`,
            height: `${CORE * 2}%`,
            transform: `translate(-50%, -50%) scale(${lit ? (anyActive ? 1.06 : 1) : 0.4})`,
            opacity: lit ? 1 : 0,
            transition: `transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${lit && !anyActive ? '1.2s' : '0s'}, opacity 0.5s ease ${lit ? '1.2s' : '0s'}`,
          }}
        >
          <span className="font-display font-extrabold uppercase leading-[1.02] tracking-tight text-[max(13px,4.4cqw)]">
            Sua
            <br />
            estratégia
          </span>
        </div>

        <ul>
          {factors.map((f, i) => {
            const p = point(i, R);
            const out = point(i, R + 14);
            const on = active === i;
            return (
              <li
                key={f.name}
                className="absolute w-[30%] -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: `${lit ? p.x : out.x}%`,
                  top: `${lit ? p.y : out.y}%`,
                  opacity: lit ? 1 : 0,
                  transition: `left 1s cubic-bezier(0.16, 1, 0.3, 1) ${i * 110}ms, top 1s cubic-bezier(0.16, 1, 0.3, 1) ${i * 110}ms, opacity 0.6s ease ${i * 110}ms`,
                }}
              >
                <button
                  type="button"
                  aria-pressed={on}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(on ? null : i)}
                  className={`w-full min-h-11 px-[1.5cqw] py-[1.6cqw] border text-center font-display font-bold uppercase leading-[1.05] tracking-tight text-[max(11px,3.3cqw)] backdrop-blur-sm transition-all duration-300 ${
                    on
                      ? 'bg-cyan text-ink border-cyan scale-105'
                      : anyActive
                        ? 'bg-raise/70 text-white/45 border-white/10'
                        : 'bg-raise/80 text-white border-cyan/40 hover:border-cyan'
                  }`}
                >
                  {f.name}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <p aria-live="polite" className="mt-6 min-h-[3.5rem] max-w-md mx-auto text-center text-base md:text-lg leading-snug">
        {anyActive ? (
          <>
            <span className="font-display font-bold uppercase text-cyan">{factors[active].name}: </span>
            <span className="text-white/85">{factors[active].note}</span>
          </>
        ) : (
          <span className="text-text-tertiary">Toque em um fator para ver como ele pesa na sua estratégia.</span>
        )}
      </p>
    </div>
  );
}
