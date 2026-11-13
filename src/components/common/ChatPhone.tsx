'use client';

import { useEffect, useRef, useState } from 'react';

export interface ChatMessage {
  text: string;
  fromMe: boolean;
}

interface ChatPhoneProps {
  messages: ChatMessage[];
  active: number | null;
  onProgress?: (shown: number) => void;
}

const STEP_MS = 1300;

// Celular decorativo: as mensagens chegam uma a uma quando ele entra na tela.
export default function ChatPhone({ messages, active, onProgress }: ChatPhoneProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (
      typeof IntersectionObserver === 'undefined' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setShown(messages.length);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [messages.length]);

  useEffect(() => {
    if (!started || shown >= messages.length) return;
    const t = setTimeout(() => setShown((n) => n + 1), shown === 0 ? 400 : STEP_MS);
    return () => clearTimeout(t);
  }, [started, shown, messages.length]);

  useEffect(() => {
    onProgress?.(shown);
  }, [shown, onProgress]);

  // "Digitando..." só antes das respostas do Icaro.
  const typing = started && shown > 0 && shown < messages.length && !messages[shown].fromMe;

  return (
    <div ref={ref} aria-hidden="true" className="w-full max-w-[320px] mx-auto">
      <div className="rounded-[2.4rem] border border-white/15 bg-deep p-2.5 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
        <div className="rounded-[1.9rem] overflow-hidden bg-canvas border border-line">
          <div className="flex items-center gap-3 px-4 py-3 bg-surface border-b border-line">
            <span className="grid place-items-center w-9 h-9 rounded-full bg-cyan font-display text-sm font-extrabold text-ink">
              IA
            </span>
            <span className="leading-tight">
              <span className="block font-display text-base font-bold uppercase tracking-wide">Icaro Andrade</span>
              <span className="block text-xs text-text-secondary">Nutricionista</span>
            </span>
          </div>

          <div
            className="flex flex-col gap-3 px-3 py-5 min-h-[300px]"
            style={{
              backgroundImage: 'radial-gradient(rgba(0,185,207,0.10) 1px, transparent 1px)',
              backgroundSize: '16px 16px',
            }}
          >
            {messages.slice(0, shown).map((m, i) => {
              const highlighted = active === i;
              return (
                <div
                  key={m.text}
                  style={{ animation: 'bubble-in 0.5s cubic-bezier(0.22, 1, 0.36, 1)' }}
                  className={`max-w-[82%] px-3.5 py-2.5 text-[15px] leading-snug transition-all duration-300 ${
                    m.fromMe
                      ? 'self-end rounded-2xl rounded-br-sm bg-cyan text-ink'
                      : 'self-start rounded-2xl rounded-bl-sm bg-raise text-fg'
                  } ${highlighted ? 'ring-2 ring-white ring-offset-2 ring-offset-canvas scale-[1.03]' : ''}`}
                >
                  {m.text}
                  {m.fromMe && (
                    <svg className="inline-block ml-1.5 -mb-0.5" width="16" height="12" viewBox="0 0 16 12" fill="none" stroke="currentColor" strokeWidth="1.6">
                      <path d="M1 6.5 4 9.5 10 2.5M6 9.5 7 10.5 14 2.5" />
                    </svg>
                  )}
                </div>
              );
            })}

            <div
              className={`self-start flex gap-1 rounded-2xl rounded-bl-sm bg-raise px-3.5 py-3 transition-opacity duration-300 ${
                typing ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {[0, 1, 2].map((d) => (
                <span
                  key={d}
                  className="block w-1.5 h-1.5 rounded-full bg-white"
                  style={{ animation: 'typing-dot 1.2s infinite', animationDelay: `${d * 150}ms` }}
                />
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 px-3 py-3 bg-surface border-t border-line">
            <span className="flex-1 h-9 rounded-full bg-raise" />
            <span className="grid place-items-center w-9 h-9 rounded-full bg-cyan text-ink">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 20.5 21 12 3 3.5 3 10l12 2-12 2z" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
