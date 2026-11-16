'use client';

import { useEffect } from 'react';

const SELECTOR = 'main section .section-label, main section h2:not(.sr-only), [data-reveal]';
const STEP_MS = 90; // intervalo entre itens que entram juntos na tela
const MAX_DELAY_MS = 540;

// Faz o conteúdo de cada seção subir com fade ao entrar na tela, em sequência:
// rótulo, título e depois os blocos. Itens que entram juntos são escalonados pela
// ordem em que aparecem na página. Só esconde o que ainda está abaixo da dobra,
// então nada pisca no carregamento; sem JavaScript ou com "reduzir movimento",
// tudo aparece normalmente.
export default function RevealObserver() {
  useEffect(() => {
    if (
      typeof IntersectionObserver === 'undefined' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        const entering = entries
          .filter((e) => e.isIntersecting)
          .map((e) => e.target as HTMLElement)
          .sort((a, b) => (a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1));

        entering.forEach((el, i) => {
          el.style.setProperty('--reveal-delay', `${Math.min(i * STEP_MS, MAX_DELAY_MS)}ms`);
          el.classList.remove('reveal-pending');
          io.unobserve(el);
        });
      },
      { rootMargin: '0px 0px -6% 0px' }
    );

    document.querySelectorAll<HTMLElement>(SELECTOR).forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight) return;
      el.classList.add('reveal-pending');
      io.observe(el);
    });

    return () => io.disconnect();
  }, []);

  return null;
}
