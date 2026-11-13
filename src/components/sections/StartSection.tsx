'use client';

import { useCallback, useState } from 'react';
import ChatPhone from '@/components/common/ChatPhone';
import NewTabHint from '@/components/common/NewTabHint';
import { MSG_CASE, whatsappUrl } from '@/lib/contact';

const steps = [
  {
    lead: 'Você',
    title: 'me conta seu objetivo.',
    description: 'Envie uma mensagem pelo WhatsApp explicando o que deseja alcançar.',
  },
  {
    lead: 'Eu',
    title: 'avalio o seu caso.',
    description: 'Pessoalmente, e respondo com honestidade se consigo te ajudar.',
  },
  {
    lead: 'Decidimos',
    title: 'em conjunto.',
    description:
      'Escolhemos o melhor formato de acompanhamento para iniciarmos os trabalhos juntos, ou te encaminho para algum colega caso não consiga te ajudar.',
  },
];

// Os balões do celular repetem os títulos dos passos, sem texto novo.
const messages = steps.map((step, i) => ({ text: `${step.lead} ${step.title}`, fromMe: i === 0 }));

export default function StartSection() {
  const [hover, setHover] = useState<number | null>(null);
  const [shown, setShown] = useState(0);
  const onProgress = useCallback((n: number) => setShown(n), []);

  // Sem o mouse em cima de um passo, o destaque acompanha a última mensagem que chegou.
  const active = hover ?? (shown > 0 ? shown - 1 : null);

  return (
    <section id="como-comecar" className="md:py-28 py-20 bg-surface">
      <div className="container">
        <div className="max-w-4xl mb-16">
          <p className="section-label mb-6">Primeiro contato</p>
          <h2>
            Antes de agendar, você pode começar{' '}
            <span className="highlight">perguntando a minha opinião.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-x-12 gap-y-12 items-center mb-14">
          <ul className="lg:col-span-7 space-y-4" onMouseLeave={() => setHover(null)}>
            {steps.map((step, i) => {
              const isActive = active === i;
              return (
                <li
                  key={step.lead}
                  onMouseEnter={() => setHover(i)}
                  className={`p-6 md:p-8 border-l-4 transition-all duration-300 ${
                    isActive ? 'bg-raise border-cyan lg:translate-x-2' : 'bg-raise/60 border-white/15'
                  }`}
                >
                  <h3 className="text-2xl md:text-3xl mb-3">
                    <span className="text-cyan">{step.lead}</span> {step.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">{step.description}</p>
                </li>
              );
            })}
          </ul>

          <div className="lg:col-span-5">
            <ChatPhone messages={messages} active={active} onProgress={onProgress} />
          </div>
        </div>

        <a
          href={whatsappUrl(MSG_CASE)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary w-full sm:w-auto"
        >
          Gostaria que avaliasse o meu caso
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
          <NewTabHint />
        </a>
      </div>
    </section>
  );
}
