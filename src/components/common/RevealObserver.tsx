'use client';

import { useEffect } from 'react';

const SELECTOR = '[data-reveal]';

// Faz os blocos de conteúdo marcados com `data-reveal` surgirem ao entrar na tela.
// Só esconde o que ainda está abaixo da dobra, então nada pisca no carregamento;
// sem JavaScript ou com "reduzir movimento", tudo aparece normalmente.
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
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.remove('reveal-pending');
          io.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -8% 0px' }
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
