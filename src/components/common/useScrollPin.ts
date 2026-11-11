'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

// Distância fixa do topo onde o bloco "gruda" (abaixo do cabeçalho), em px.
export const PIN_TOP = 96;

/**
 * Seção "presa" na tela durante um trecho de rolagem.
 * - `pinned` só fica true em telas largas e sem "reduzir movimento"; antes disso
 *   (e no servidor) o componente deve renderizar a versão estática.
 * - `progress` vai de 0 a 1 ao longo do trecho preso.
 * - `scrollTo(p)` rola até o ponto p (0 a 1) do trecho.
 */
export function useScrollPin() {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [pinned, setPinned] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px) and (prefers-reduced-motion: no-preference)');
    const update = () => setPinned(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (!pinned) {
      setProgress(0);
      return;
    }
    let raf = 0;
    const calc = () => {
      raf = 0;
      const outer = outerRef.current;
      const inner = innerRef.current;
      if (!outer || !inner) return;
      const travel = outer.offsetHeight - inner.offsetHeight;
      const scrolled = PIN_TOP - outer.getBoundingClientRect().top;
      setProgress(travel > 0 ? Math.min(1, Math.max(0, scrolled / travel)) : 0);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(calc);
    };
    calc();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [pinned]);

  const scrollTo = useCallback((p: number) => {
    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;
    const travel = outer.offsetHeight - inner.offsetHeight;
    const top = outer.getBoundingClientRect().top + window.scrollY - PIN_TOP + p * travel;
    window.scrollTo({ top, behavior: 'smooth' });
  }, []);

  return { outerRef, innerRef, pinned, progress, scrollTo };
}
