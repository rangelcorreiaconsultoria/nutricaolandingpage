'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { track } from '@/lib/analytics';

export interface ChatGoal {
  id: string;
  label: string; // completa a frase "Icaro, ___, como faço?"
  intro: string; // primeira resposta do Icaro, específica do objetivo
}

export const GOALS: ChatGoal[] = [
  {
    id: 'emagrecer',
    label: 'quero emagrecer',
    intro: 'Boa! Emagrecer de forma sustentável começa entendendo o seu caso, não copiando uma dieta pronta.',
  },
  {
    id: 'ganhar-massa',
    label: 'quero ganhar massa',
    intro: 'Boa! Ganhar massa depende de comer e treinar do jeito certo para o seu corpo, e isso começa pelo seu caso.',
  },
  {
    id: 'perder-gordura',
    label: 'quero perder gordura',
    intro: 'Boa! Perder gordura preservando a massa muscular exige estratégia, e ela começa pelo seu caso.',
  },
];

interface Message {
  text: string;
  fromMe: boolean;
}

// Seis mensagens: o pedido, o "Avalio o seu caso" e o "Decidimos em conjunto".
function scriptFor(goal: ChatGoal): Message[] {
  return [
    { fromMe: true, text: `Icaro, ${goal.label}, como faço?` },
    { fromMe: false, text: goal.intro },
    { fromMe: false, text: 'Primeiro, eu avalio o seu caso pessoalmente: rotina, treinos, composição corporal e objetivos.' },
    { fromMe: false, text: 'E te respondo com honestidade se consigo te ajudar.' },
    { fromMe: true, text: 'E depois?' },
    {
      fromMe: false,
      text: 'Decidimos em conjunto o melhor formato de acompanhamento para começarmos. Se eu não for a melhor opção pra você, te encaminho para um colega.',
    },
  ];
}

const REPLY_MS = 1500; // tempo do "digitando..." antes de cada resposta do Icaro
const ME_MS = 900; // pausa antes de uma mensagem da pessoa

interface ChatPhoneProps {
  onGoalChange?: (goal: ChatGoal | null) => void;
}

// Celular interativo: a pessoa escolhe como completar a mensagem e a conversa acontece.
export default function ChatPhone({ onGoalChange }: ChatPhoneProps) {
  const [goal, setGoal] = useState<ChatGoal | null>(null);
  const [shown, setShown] = useState(0);
  const logRef = useRef<HTMLDivElement>(null);

  const script = useMemo(() => (goal ? scriptFor(goal) : []), [goal]);
  const done = goal !== null && shown >= script.length;
  const typing = goal !== null && !done && !script[shown].fromMe;

  const choose = (g: ChatGoal) => {
    track('primeiro_contato_objetivo', { objetivo: g.id });
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setGoal(g);
    setShown(reduce ? scriptFor(g).length : 1);
    onGoalChange?.(g);
  };

  const reset = () => {
    setGoal(null);
    setShown(0);
    onGoalChange?.(null);
  };

  // Avança a conversa uma mensagem por vez.
  useEffect(() => {
    if (!goal || shown >= script.length) return;
    const t = setTimeout(() => setShown((n) => n + 1), script[shown].fromMe ? ME_MS : REPLY_MS);
    return () => clearTimeout(t);
  }, [goal, shown, script]);

  useEffect(() => {
    if (done && goal) track('chat_completo', { objetivo: goal.id });
  }, [done, goal]);

  // Mantém a última mensagem visível, rolando só dentro do celular (nunca a página).
  useEffect(() => {
    const el = logRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [shown, typing]);

  return (
    <div className="w-full max-w-[340px] mx-auto">
      <div className="rounded-[2.4rem] border border-white/15 bg-deep p-2.5 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
        <div className="rounded-[1.9rem] overflow-hidden bg-canvas border border-line">
          <div className="flex items-center gap-3 px-4 py-3 bg-surface border-b border-line">
            <span
              aria-hidden="true"
              className="grid place-items-center w-9 h-9 rounded-full bg-cyan font-display text-sm font-extrabold text-ink"
            >
              IA
            </span>
            <span className="leading-tight">
              <span className="block font-display text-base font-bold uppercase tracking-wide">Icaro Andrade</span>
              <span className="block text-xs text-text-secondary">{typing ? 'digitando...' : 'Nutricionista'}</span>
            </span>
          </div>

          <div
            ref={logRef}
            role="log"
            aria-live="polite"
            aria-label="Conversa simulada com o Icaro"
            className="flex flex-col gap-3 px-3 py-5 h-[380px] overflow-y-auto overscroll-contain"
            style={{
              backgroundImage: 'radial-gradient(rgba(0,185,207,0.10) 1px, transparent 1px)',
              backgroundSize: '16px 16px',
            }}
          >
            {/* Abertura do Icaro, sempre visível no topo da conversa */}
            <div className="mt-auto self-start max-w-[85%] px-3.5 py-2.5 text-[15px] leading-snug rounded-2xl rounded-bl-sm bg-raise text-fg">
              <span className="sr-only">Icaro: </span>
              Oi! Me conta: qual é o seu objetivo?
            </div>
            {!goal && (
              <p className="mx-auto mt-2 px-3 py-1.5 rounded-full bg-raise/70 text-xs text-text-secondary text-center">
                Escolha abaixo como completar a mensagem
              </p>
            )}

            {script.slice(0, shown).map((m, i) => (
              <div
                key={`${goal?.id}-${i}`}
                style={{ animation: 'bubble-in 0.5s cubic-bezier(0.22, 1, 0.36, 1)' }}
                className={`max-w-[85%] px-3.5 py-2.5 text-[15px] leading-snug ${
                  m.fromMe
                    ? 'self-end rounded-2xl rounded-br-sm bg-cyan text-ink'
                    : 'self-start rounded-2xl rounded-bl-sm bg-raise text-fg'
                }`}
              >
                <span className="sr-only">{m.fromMe ? 'Você: ' : 'Icaro: '}</span>
                {m.text}
              </div>
            ))}

            {typing && (
              <div aria-hidden="true" className="self-start flex gap-1 rounded-2xl rounded-bl-sm bg-raise px-3.5 py-3">
                {[0, 1, 2].map((d) => (
                  <span
                    key={d}
                    className="block w-1.5 h-1.5 rounded-full bg-white"
                    style={{ animation: 'typing-dot 1.2s infinite', animationDelay: `${d * 150}ms` }}
                  />
                ))}
              </div>
            )}
          </div>

          <div className="px-3 py-3 bg-surface border-t border-line">
            {!goal ? (
              <>
                <div className="flex flex-wrap gap-2 mb-3" role="group" aria-label="Complete a mensagem">
                  {GOALS.map((g) => (
                    <button
                      key={g.id}
                      type="button"
                      onClick={() => choose(g)}
                      className="px-3 py-2 rounded-full border border-cyan text-cyan text-sm font-medium hover:bg-cyan hover:text-ink focus-visible:bg-cyan focus-visible:text-ink"
                    >
                      {g.label}
                    </button>
                  ))}
                </div>
                <div aria-hidden="true" className="flex items-center gap-2">
                  <span className="flex-1 min-w-0 truncate rounded-full bg-raise px-4 py-2 text-sm text-text-secondary">
                    Icaro, <span className="text-cyan">___</span>, como faço?
                  </span>
                  <SendIcon />
                </div>
              </>
            ) : done ? (
              <button
                type="button"
                onClick={reset}
                className="w-full rounded-full border border-line px-4 py-2 text-sm text-text-secondary hover:text-fg hover:border-white/40"
              >
                Testar outro objetivo
              </button>
            ) : (
              <div aria-hidden="true" className="flex items-center gap-2">
                <span className="flex-1 h-9 rounded-full bg-raise" />
                <SendIcon />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function SendIcon() {
  return (
    <span className="grid place-items-center w-9 h-9 shrink-0 rounded-full bg-cyan text-ink">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 20.5 21 12 3 3.5 3 10l12 2-12 2z" />
      </svg>
    </span>
  );
}
