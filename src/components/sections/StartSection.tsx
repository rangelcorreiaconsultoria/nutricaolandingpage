'use client';

import { useCallback, useState } from 'react';
import ChatPhone, { type ChatGoal } from '@/components/common/ChatPhone';
import NewTabHint from '@/components/common/NewTabHint';
import { MSG_CASE, whatsappUrl } from '@/lib/contact';

export default function StartSection() {
  const [goal, setGoal] = useState<ChatGoal | null>(null);
  const onGoalChange = useCallback((g: ChatGoal | null) => setGoal(g), []);

  // Se a pessoa escolheu um objetivo no celular, a mensagem do WhatsApp já vai com ele.
  const message = goal
    ? `Olá, Icaro! ${goal.label.charAt(0).toUpperCase()}${goal.label.slice(1)}. Gostaria que avaliasse o meu caso.`
    : MSG_CASE;

  return (
    <section id="como-comecar" className="md:py-28 py-20 bg-surface">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-x-12 gap-y-12 items-center">
          <div className="lg:col-span-6 lg:self-end">
            <p className="section-label mb-6">Primeiro contato</p>
            <h2>
              Antes de agendar, você pode começar{' '}
              <span className="highlight">perguntando a minha opinião.</span>
            </h2>
          </div>

          <div className="lg:col-span-6 lg:col-start-7 lg:row-start-1 lg:row-span-2">
            <ChatPhone onGoalChange={onGoalChange} />
          </div>

          <div className="lg:col-span-6 lg:self-start">
            <a
              href={whatsappUrl(message)}
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
        </div>
      </div>
    </section>
  );
}
