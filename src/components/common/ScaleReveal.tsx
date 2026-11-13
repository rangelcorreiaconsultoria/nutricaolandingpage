'use client';

import Image from 'next/image';
import { useState } from 'react';

// Posição (em % da imagem) das três etiquetas "60kg - X%" desenhadas em balanca.png.
const LABELS = [9.4, 38, 67.8];

// Cobre o percentual de gordura de cada etiqueta até a pessoa tocar.
export default function ScaleReveal() {
  const [revealed, setRevealed] = useState([false, false, false]);

  const toggle = (i: number) => setRevealed((r) => r.map((v, j) => (j === i ? !v : v)));

  return (
    <div className="relative">
      <Image
        src="/images/balanca.png"
        alt="Três mulheres com o mesmo peso, 60 kg, e percentuais de gordura diferentes: 15%, 20% e 30%"
        width={1145}
        height={912}
        sizes="(min-width: 1024px) 540px, 100vw"
        className="w-full h-auto"
      />
      {LABELS.map((left, i) => (
        <button
          key={left}
          type="button"
          onClick={() => toggle(i)}
          aria-pressed={revealed[i]}
          aria-label={`Percentual de gordura da pessoa ${i + 1}`}
          style={{ left: `${left}%`, top: '84%', width: '26.6%', height: '11.4%' }}
          className={`absolute rounded-full flex items-center justify-center gap-[0.35em] font-display font-extrabold uppercase text-[clamp(0.8rem,2.6vw,1.35rem)] lg:text-[clamp(0.8rem,1.35vw,1.35rem)] transition-all duration-500 ${
            revealed[i]
              ? 'bg-transparent border-2 border-transparent text-transparent scale-95'
              : 'bg-deep border-2 border-cyan text-white hover:bg-raise'
          }`}
        >
          <span>60kg</span>
          <span className={`grid place-items-center w-[1.4em] h-[1.4em] rounded-full ${revealed[i] ? '' : 'bg-cyan text-ink animate-pulse-soft'}`}>
            ?
          </span>
        </button>
      ))}
    </div>
  );
}
