'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

type Props = {
  /** Foto principal da página: carrega com prioridade (só uma das versões, celular ou desktop). */
  priority?: boolean;
  sizes: string;
};

// Foto do topo com as credenciais à direita, no estilo da arte de divulgação:
// número do CRN grande, faixas ciano inclinadas e o bloco de professor. A foto
// já vem com o lado direito escurecido, onde cada peça entra em sequência (ver
// .cred-* no globals.css). Tudo é medido em cqw, então a composição é a mesma em qualquer
// largura, do celular ao desktop.
export default function HeroPhoto({ priority = false, sizes }: Props) {
  // As credenciais animam ao abrir a página e de novo sempre que a foto volta
  // à tela (inclusive rolando de volta para o topo)
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(true);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting));
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <figure
      ref={ref}
      className={`hero-photo relative h-full w-full overflow-hidden [container-type:inline-size] ${inView ? 'is-in' : ''}`}
    >
      <div className="cred-photo absolute inset-0">
        <Image
          src="/images/hero.webp"
          alt="Icaro Andrade, nutricionista"
          fill
          priority={priority}
          loading={priority ? undefined : 'eager'}
          sizes={sizes}
          className="object-cover object-left"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_82%_38%,rgba(0,185,207,0.22),transparent_50%)]"
      />

      {/* Duas listras diagonais no canto, como na arte */}
      <svg
        aria-hidden="true"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="cred-stripes absolute bottom-0 right-0 w-[42%] h-[26%] pointer-events-none text-cyan"
      >
        <line x1="104" y1="18" x2="36" y2="104" stroke="currentColor" strokeOpacity="0.8" strokeWidth="3" vectorEffect="non-scaling-stroke" />
        <line x1="104" y1="42" x2="58" y2="104" stroke="currentColor" strokeWidth="7" vectorEffect="non-scaling-stroke" />
      </svg>

      <dl className="absolute right-[3%] top-[24%] w-[42%] text-white">
        <div>
          <dt className="sr-only">Registro profissional</dt>
          <dd>
            <span aria-hidden="true" className="cred-quote block font-sans font-bold italic leading-none text-cyan text-[9cqw] -mb-[2cqw]">
              &rdquo;
            </span>
            <span className="cred-num block font-display font-extrabold leading-[0.95] tracking-tight text-[8.6cqw] [text-shadow:0_4px_24px_rgba(0,0,0,0.5)]">
              CRN6 37419
            </span>
          </dd>
        </div>

        <div className="mt-[2.4cqw]">
          <dt className="sr-only">Especialidade</dt>
          <dd className="flex flex-col items-start gap-[1cqw]">
            <span className="cred-bar block bg-cyan px-[2.4cqw] py-[0.5cqw] [--skew:-12deg] [transform:skewX(var(--skew))] origin-left">
              <span className="cred-bar-text block font-sans font-bold italic text-ink leading-tight text-[4.3cqw] [transform:skewX(12deg)]">
                Nutricionista
              </span>
            </span>
            <span className="cred-bar cred-bar-2 block bg-cyan px-[2.4cqw] py-[0.5cqw] ml-[1cqw] [--skew:-12deg] [transform:skewX(var(--skew))] origin-left">
              <span className="cred-bar-text block font-sans font-bold italic text-ink leading-tight text-[4.3cqw] [transform:skewX(12deg)]">
                esportivo ACSM
              </span>
            </span>
          </dd>
        </div>

        <div aria-hidden="true" className="cred-line mt-[4cqw] h-[0.6cqw] min-h-[2px] w-[12cqw] bg-cyan origin-left" />

        <div className="cred-prof mt-[4cqw] border-l-[0.6cqw] border-cyan pl-[2cqw] [text-shadow:0_2px_12px_rgba(0,0,0,0.6)]">
          <dt className="font-sans font-bold leading-none text-[4.4cqw]">Professor</dt>
          <dd className="mt-[1.2cqw] font-sans leading-snug text-white/90 text-[max(10px,2.5cqw)]">
            USP · UNIT · IBRAS · Uniguaçu
          </dd>
        </div>
      </dl>
    </figure>
  );
}
