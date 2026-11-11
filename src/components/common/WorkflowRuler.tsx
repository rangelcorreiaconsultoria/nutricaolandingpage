'use client';

import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { useScrollPin } from '@/components/common/useScrollPin';

const stages = [
  {
    num: '02',
    when: 'Dia 0',
    title: 'Eu te apresento o planejamento inicial e começamos a colocar em prática.',
    paragraphs: [
      'Dieta, lista de suplementos, eventuais exames, tudo é disponibilizado para começarmos a executar o nosso plano.',
    ],
  },
  {
    num: '03',
    when: 'Dias 7 a 21',
    title: 'Toda semana revisamos a sua evolução.',
    paragraphs: [
      'Usaremos um sistema de trabalho próprio, desenvolvido ao longo dos anos após atender centenas de pessoas.',
      'A partir das suas respostas, avaliamos como está sendo a sua evolução. Nesta etapa somos capazes de ajustar o seu planejamento toda semana caso haja necessidade. Você não precisa esperar meses para ter sua dieta ajustada e continuar evoluindo.',
    ],
  },
  {
    num: '04',
    when: 'Dia 30',
    title: 'O dia da reavaliação.',
    paragraphs: [
      'Nos encontramos uma vez no mês para reavaliar a sua composição corporal e registrar a sua evolução. A partir dos seus resultados nesta etapa, somos capazes de melhorar ainda mais o nosso planejamento inicial.',
    ],
  },
];

const marks = [
  { day: 0, label: 'Dia 0', text: 'Avaliação e plano' },
  { day: 7, label: 'Dia 7', text: 'Revisão' },
  { day: 14, label: 'Dia 14', text: 'Revisão' },
  { day: 21, label: 'Dia 21', text: 'Revisão' },
  { day: 30, label: 'Dia 30', text: 'Reavaliação' },
];

function stageForDay(day: number) {
  if (day < 6) return 0;
  if (day < 27) return 1;
  return 2;
}

function Description({ stage, index }: { stage: (typeof stages)[number]; index: number }) {
  return (
    <div className="grid lg:grid-cols-12 gap-x-12 gap-y-4">
      <div className="lg:col-span-5">
        <p className="font-display text-base font-bold uppercase tracking-[0.2em] text-text-secondary mb-2">
          {stage.when}
        </p>
        <span className="block font-display text-6xl font-extrabold text-cyan leading-none mb-4">{stage.num}</span>
        <h3 className="text-2xl md:text-3xl">{stage.title}</h3>
      </div>
      <div className="lg:col-span-7 space-y-4 text-lg text-text-secondary leading-relaxed lg:pt-8">
        {stage.paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
      <span className="sr-only">Etapa {index + 1} de 3</span>
    </div>
  );
}

function Reveal({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLLIElement>(null);
  const [armed, setArmed] = useState(false);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!el || reduce || typeof IntersectionObserver === 'undefined') return;
    setArmed(true);
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <li
      ref={ref}
      className={`relative pl-8 transition-all duration-700 ${armed && !seen ? 'opacity-0 translate-y-5' : ''}`}
    >
      {children}
    </li>
  );
}

export default function WorkflowRuler() {
  const { outerRef, innerRef, pinned, progress, scrollTo } = useScrollPin();
  const day = progress * 30;
  const active = stageForDay(day);

  if (!pinned) {
    // Celular ou "reduzir movimento": linha do tempo vertical, sem travar a rolagem.
    return (
      <ol id="fluxo-trabalho" className="scroll-mt-28 border-l-2 border-cyan/60 ml-1.5 space-y-12">
        {stages.map((stage, i) => (
          <Reveal key={stage.num}>
            <span className="absolute -left-[7px] top-1 block w-3 h-3 bg-cyan rotate-45" aria-hidden="true" />
            <Description stage={stage} index={i} />
          </Reveal>
        ))}
      </ol>
    );
  }

  return (
    <div
      ref={outerRef}
      id="fluxo-trabalho"
      style={{ height: 'calc(100vh - 6rem + 130vh)' }}
    >
      <div ref={innerRef} className="sticky top-24 h-[calc(100vh-6rem)] flex flex-col justify-center">
        <div className="relative h-24 mb-10">
          <div
            className="absolute inset-x-0 top-0 h-6 border-r border-cyan/60"
            style={{
              backgroundImage:
                'repeating-linear-gradient(to right, rgba(0,185,207,0.55) 0, rgba(0,185,207,0.55) 1px, transparent 1px, transparent calc(100% / 30))',
              backgroundSize: '100% 50%',
              backgroundRepeat: 'no-repeat',
            }}
          />
          <div className="absolute inset-x-0 top-[22px] h-[3px] bg-cyan/25" />
          <div className="absolute left-0 top-[22px] h-[3px] bg-cyan" style={{ width: `${progress * 100}%` }} />

          {marks.map((m) => {
            const reached = day >= m.day - 0.01;
            const edge = m.day === 0 ? 'items-start' : m.day === 30 ? 'items-end -translate-x-full' : 'items-center -translate-x-1/2';
            return (
              <button
                key={m.day}
                type="button"
                onClick={() => scrollTo(m.day / 30)}
                aria-label={`Ir para o ${m.label}`}
                className={`absolute top-0 flex flex-col gap-3 pt-4 pb-2 min-w-11 ${edge}`}
                style={{ left: `${(m.day / 30) * 100}%` }}
              >
                <span
                  className={`block w-3 h-3 rotate-45 border border-cyan transition-colors ${reached ? 'bg-cyan' : 'bg-canvas'}`}
                  aria-hidden="true"
                />
                <span className={`font-display text-xl font-extrabold uppercase tracking-wide leading-none ${reached ? 'text-cyan' : 'text-white/60'}`}>
                  {m.label}
                </span>
                <span className="text-sm text-text-secondary leading-none">{m.text}</span>
              </button>
            );
          })}
        </div>

        <div className="min-h-[18rem]">
          {stages.map((stage, i) => (
            <div key={stage.num} className={i === active ? 'block' : 'sr-only'}>
              <Description stage={stage} index={i} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
