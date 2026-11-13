'use client';

import Image from 'next/image';
import { useState } from 'react';

const people = [
  { fat: 15, src: '/images/balanca-15.png' },
  { fat: 20, src: '/images/balanca-20.png' },
  { fat: 30, src: '/images/balanca-30.png' },
];

// Três mulheres com o mesmo peso: o percentual de gordura de cada uma
// fica escondido até a pessoa tocar no card.
export default function ScaleReveal() {
  const [revealed, setRevealed] = useState([false, false, false]);
  const [focus, setFocus] = useState<number | null>(null);

  const toggle = (i: number) => setRevealed((r) => r.map((v, j) => (j === i ? !v : v)));

  return (
    <ul
      className="-mx-5 px-5 md:mx-0 md:px-0 flex md:grid md:grid-cols-3 gap-3 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-2 md:pb-0"
      onMouseLeave={() => setFocus(null)}
    >
      {people.map((p, i) => {
        const open = revealed[i];
        const dimmed = focus !== null && focus !== i;
        return (
          <li
            key={p.fat}
            data-reveal
            style={{ '--reveal-delay': `${i * 140}ms` } as React.CSSProperties}
            className="shrink-0 w-[64%] sm:w-[40%] md:w-auto snap-center"
          >
            <button
              type="button"
              onClick={() => toggle(i)}
              onMouseEnter={() => setFocus(i)}
              onFocus={() => setFocus(i)}
              onBlur={() => setFocus(null)}
              aria-pressed={open}
              aria-label={`Mulher ${i + 1}: 60 kg${open ? `, ${p.fat}% de gordura` : ''}`}
              className={`group w-full text-left bg-deep border-2 transition-all duration-500 ${
                open ? 'border-cyan' : 'border-transparent hover:border-white/30'
              } ${dimmed ? 'opacity-50' : 'opacity-100'}`}
            >
              <span className="relative block aspect-[3/5] overflow-hidden">
                <Image
                  src={p.src}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 360px, (min-width: 768px) 60vw, 130vw"
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
              </span>
              <span className="flex items-center justify-between gap-2 px-3 py-3 border-t border-line">
                <span className="font-display text-xl md:text-2xl font-extrabold uppercase leading-none">60kg</span>
                <span
                  className={`grid place-items-center min-w-[3.2rem] h-9 px-2 font-display text-xl md:text-2xl font-extrabold leading-none transition-all duration-500 ${
                    open ? 'bg-cyan text-ink' : 'bg-raise text-cyan'
                  }`}
                >
                  {open ? (
                    <span key="v" style={{ animation: 'bubble-in 0.45s cubic-bezier(0.22, 1, 0.36, 1)' }}>
                      {p.fat}%
                    </span>
                  ) : (
                    <span className="animate-pulse-soft">?</span>
                  )}
                </span>
              </span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}
