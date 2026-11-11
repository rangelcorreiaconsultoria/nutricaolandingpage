'use client';

import { useState } from 'react';

const details = [
  'Avaliamos a sua composição corporal através do protocolo de dobras cutâneas seguindo a metodologia ISAK (melhor método de avaliação clínica da composição corporal).',
  'Avaliamos a sua rotina, alimentação, situação clínica, preferências e objetivos antes de definir qualquer estratégia.',
];

export default function WorkflowAccordion() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-cyan text-ink mb-16">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="etapa-investigacao"
        onClick={() => setOpen((v) => !v)}
        className="group w-full flex items-start justify-between gap-6 text-left px-5 py-5 md:px-8 md:py-7 hover:bg-white/20 transition-colors"
      >
        <span className="block">
          <span className="block font-display text-2xl md:text-4xl font-extrabold uppercase tracking-[0.04em] leading-tight">
            Como funciona a minha estrutura de trabalho
          </span>
          <span className="block mt-3 text-base md:text-lg font-medium leading-snug">
            <strong className="font-semibold">01 · Investigação inicial:</strong> avaliamos composição corporal, rotina e objetivos.
          </span>
        </span>
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          className={`shrink-0 mt-1 transition-transform duration-300 ${open ? 'rotate-180' : 'group-hover:translate-y-1'}`}
          aria-hidden="true"
        >
          <path d="M12 4v16M5 13l7 7 7-7" />
        </svg>
      </button>

      <div
        id="etapa-investigacao"
        className={`grid transition-[grid-template-rows] duration-500 ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
      >
        <div className={`overflow-hidden ${open ? '' : 'invisible'}`}>
          <div className="px-5 pb-7 pt-5 md:px-8 md:pb-9 border-t border-ink/25 space-y-3 text-base md:text-lg leading-relaxed font-medium max-w-3xl">
            {details.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
