'use client';

import { useEffect } from 'react';

const SELECTOR = 'main section .section-label, main section h2:not(.sr-only), [data-reveal]';
const STEP_MS = 90; // intervalo entre itens que entram juntos na tela
const MAX_DELAY_MS = 720;

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
          el.classList.replace('reveal-pending', 'reveal-in');
          io.unobserve(el);
        });
      },
      { rootMargin: '0px 0px -6% 0px' }
    );

    const seen = new WeakSet<Element>();
    const prepare = (root: ParentNode) => {
      root.querySelectorAll<HTMLElement>(SELECTOR).forEach((el) => {
        if (seen.has(el)) return;
        seen.add(el);
        if (el.getBoundingClientRect().top < window.innerHeight) return;
        el.classList.add('reveal-pending');
        io.observe(el);
      });
    };
    prepare(document);

    // Seções que remontam o conteúdo depois de carregar (ex.: a do Icaro, que
    // fixa na tela no desktop) ganham elementos novos que também precisam entrar.
    const mo = new MutationObserver(() => prepare(document));
    mo.observe(document.querySelector('main') ?? document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}
