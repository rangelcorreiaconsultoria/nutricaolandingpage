'use client';

import { useState } from 'react';
import NewTabHint from '@/components/common/NewTabHint';
import { whatsappUrl } from '@/lib/contact';

const questions = [
  'Preciso ser aluno da Gaviões para consultar?',
  'Quanto custa?',
  'Quanto tempo dura uma consulta?',
  'Tem retorno?',
  'Você só atende atletas?',
  'Você também atende online?',
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="duvidas" className="md:py-28 py-20 bg-base border-t border-line">
      <div className="container grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <p className="section-label mb-6">Dúvidas</p>
          <h2>Dúvidas frequentes</h2>
        </div>

        <div className="lg:col-span-8 border-t border-fg">
          {questions.map((question, i) => {
            const isOpen = open === i;
            const id = `faq-${i}`;
            return (
              <div key={question} className="border-b border-line">
                <h3 className="text-xl md:text-2xl">
                  <button
                    id={`${id}-btn`}
                    type="button"
                    className="w-full flex items-center gap-6 py-6 text-left uppercase hover:text-cyan"
                    aria-expanded={isOpen}
                    aria-controls={id}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span className="font-display text-lg font-bold text-cyan w-8 shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="flex-1">{question}</span>
                    <span
                      aria-hidden="true"
                      className={`relative w-4 h-4 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
                    >
                      <span className="absolute top-1/2 left-0 w-4 h-0.5 -translate-y-1/2 bg-current" />
                      <span className="absolute left-1/2 top-0 h-4 w-0.5 -translate-x-1/2 bg-current" />
                    </span>
                  </button>
                </h3>
                <div
                  id={id}
                  role="region"
                  aria-labelledby={`${id}-btn`}
                  className={`grid transition-[grid-template-rows,visibility] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr] visible' : 'grid-rows-[0fr] invisible'}`}
                >
                  <div className="overflow-hidden">
                    <div className="pl-14 pr-10 pb-6">
                      <a
                        href={whatsappUrl(`Olá, Icaro! Tenho uma dúvida: ${question}`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center min-h-11 font-semibold text-fg underline-cyan hover:text-cyan"
                      >
                        Perguntar pelo WhatsApp
                        <NewTabHint />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
