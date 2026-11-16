'use client';

import { useEffect } from 'react';

// Suaviza a passagem entre seções de cores diferentes: cada seção recebe a cor
// da anterior em --prev-bg, e o CSS desenha um degradê dessa cor no topo dela.
// Sem JavaScript, as seções apenas mantêm a borda reta de antes.
export default function SectionBlend() {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('main > section'));
    sections.forEach((section, i) => {
      if (i === 0) return;
      const prev = getComputedStyle(sections[i - 1]).backgroundColor;
      const own = getComputedStyle(section).backgroundColor;
      if (prev === own || prev === 'rgba(0, 0, 0, 0)') return;
      section.style.setProperty('--prev-bg', prev);
      section.classList.add('section-blend');
    });
  }, []);

  return null;
}
