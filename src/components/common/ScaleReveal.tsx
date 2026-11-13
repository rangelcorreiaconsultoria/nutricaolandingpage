'use client';

import Image from 'next/image';
import { useState } from 'react';

// Cada foto (1145×912, fundo transparente) tem a pessoa centralizada.
// As imagens ficam um pouco mais largas que o palco para as três se sobreporem levemente.
const IMG_WIDTH = 105; // % da largura do palco
const people = [
  { fat: 15, src: '/images/balanca-15.png', center: 27 },
  { fat: 20, src: '/images/balanca-20.png', center: 50 },
  { fat: 30, src: '/images/balanca-30.png', center: 73 },
];

// Três mulheres sobre a mesma balança. Tocar numa traz ela para frente
// e revela o percentual de gordura acima da cabeça.
export default function ScaleReveal() {
  const [revealed, setRevealed] = useState([false, false, false]);
  const [focus, setFocus] = useState<number | null>(null);

  const select = (i: number) => {
    setRevealed((r) => r.map((v, j) => (j === i ? !v : v)));
    setFocus(i);
  };

  return (
    <div className="relative aspect-square overflow-hidden select-none" onMouseLeave={() => setFocus(null)}>
      {people.map((p, i) => {
        const isFocus = focus === i;
        const dimmed = focus !== null && !isFocus;
        return (
          <div
            key={p.fat}
            data-reveal
            className="absolute bottom-[4%] aspect-[1145/912]"
            style={
              {
                left: `${p.center - IMG_WIDTH / 2}%`,
                width: `${IMG_WIDTH}%`,
                zIndex: isFocus ? 4 : i === 1 ? 2 : 1,
                '--reveal-delay': `${i * 160}ms`,
              } as React.CSSProperties
            }
          >
            <div
              className="relative w-full h-full origin-bottom transition-[transform,filter,opacity] duration-500 ease-out"
              style={{
                transform: isFocus ? 'scale(1.05)' : 'scale(1)',
                filter: dimmed ? 'brightness(0.4)' : 'none',
              }}
            >
              <Image
                src={p.src}
                alt=""
                fill
                sizes="(min-width: 1024px) 560px, 90vw"
                className="object-contain object-bottom pointer-events-none"
              />
            </div>
          </div>
        );
      })}

      {/* Áreas de toque e selos: separadas das imagens para não brigarem pelas margens transparentes */}
      {people.map((p, i) => {
        const open = revealed[i];
        return (
          <button
            key={p.fat}
            type="button"
            onClick={() => select(i)}
            onMouseEnter={() => setFocus(i)}
            onFocus={() => setFocus(i)}
            onBlur={() => setFocus(null)}
            aria-pressed={open}
            aria-label={`Mulher ${i + 1}: 60 kg${open ? `, ${p.fat}% de gordura` : ''}`}
            className="absolute top-0 bottom-[14%] z-10 w-[20%] -translate-x-1/2 cursor-pointer"
            style={{ left: `${p.center}%` }}
          >
            <span
              className={`absolute left-1/2 -translate-x-1/2 top-[2%] grid place-items-center font-display font-extrabold leading-none transition-all duration-500 ${
                open
                  ? 'min-w-[3.4em] h-[1.9em] px-2 bg-cyan text-ink text-lg md:text-2xl'
                  : 'w-[1.9em] h-[1.9em] rounded-full border-2 border-cyan bg-deep text-cyan text-base md:text-lg'
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
          </button>
        );
      })}

      {/* Plataforma única da balança, com régua e visor */}
      <div className="absolute inset-x-0 bottom-0 z-20 h-[14%] bg-deep border-t-2 border-cyan">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-3"
          style={{
            backgroundImage:
              'repeating-linear-gradient(to right, rgba(255,255,255,0.35) 0 1px, transparent 1px 10px), repeating-linear-gradient(to right, rgba(255,255,255,0.6) 0 1px, transparent 1px 50px)',
            backgroundSize: '100% 6px, 100% 12px',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center pt-2">
          <span className="px-4 py-1 bg-canvas border border-line font-display text-xl md:text-3xl font-extrabold uppercase tracking-wide text-cyan leading-none">
            60kg
          </span>
        </div>
      </div>
    </div>
  );
}
