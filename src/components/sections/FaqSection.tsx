'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'Preciso já fazer avaliações para participar?',
    answer:
      'Não. O curso vai dos fundamentos à interpretação: serve tanto para quem quer fazer as primeiras avaliações com método quanto para quem já avalia e quer mais consistência.',
  },
  {
    question: 'Por que seguir a padronização ISAK?',
    answer:
      'Porque comparações entre avaliações só são confiáveis quando o procedimento é o mesmo. Pequenas variações na marcação dos pontos podem mascarar ou simular mudanças.',
  },
  {
    question: 'O curso fala sobre bioimpedância?',
    answer:
      'Sim. A bioimpedância é prática e rápida, mas hidratação, ingestão, exercício recente e fase menstrual afetam a medição. Você vai entender essas limitações e quando as dobras cutâneas são mais adequadas para o acompanhamento.',
  },
  {
    question: 'Como faço minha inscrição?',
    answer:
      'Fale com a equipe pelo WhatsApp para receber todas as informações sobre turma, formato e valores.',
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="duvidas" className="md:py-28 py-20 bg-white border-t border-line">
      <div className="container grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <p className="section-label mb-6">Dúvidas</p>
          <h2>Perguntas frequentes.</h2>
        </div>

        <div className="lg:col-span-8 border-t border-ink">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            const id = `faq-${i}`;
            return (
              <div key={faq.question} className="border-b border-line">
                <h3 className="text-xl md:text-2xl">
                  <button
                    type="button"
                    className="w-full flex items-center gap-6 py-6 text-left uppercase hover:text-cyan"
                    aria-expanded={isOpen}
                    aria-controls={id}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span className="font-display text-lg font-bold text-cyan w-8 shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="flex-1">{faq.question}</span>
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
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                >
                  <div className="overflow-hidden">
                    <p className="pl-14 pr-10 pb-6 text-text-secondary leading-relaxed max-w-2xl">{faq.answer}</p>
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
