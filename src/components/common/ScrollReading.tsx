'use client';

import { useEffect } from 'react';

const SELECTOR = '[data-read] p, p[data-read]';
const START = 0.9; // o parágrafo começa a acender quando o topo chega a 90% da tela
const END = 0.6; // e termina de acender quando o fim chega a 60% da tela

// Texto que acende palavra por palavra conforme a pessoa rola: os parágrafos
// marcados com data-read (neles ou num pai) começam apagados e cada palavra
// acende no ritmo da rolagem; rolando para cima, elas apagam de novo. Só os
// textos corridos usam isso, os títulos ficam parados. Com "reduzir movimento"
// ou sem JavaScript, o texto aparece normal.
export default function ScrollReading() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    type Para = { el: HTMLElement; words: HTMLElement[]; lit: number };
    const paras: Para[] = [];
    const done = new WeakSet<Element>();

    // Quebra só os nós de texto em palavras, mantendo <strong> e afins
    const split = (p: HTMLElement) => {
      const words: HTMLElement[] = [];
      const walker = document.createTreeWalker(p, NodeFilter.SHOW_TEXT);
      const texts: Text[] = [];
      while (walker.nextNode()) texts.push(walker.currentNode as Text);
      texts.forEach((node) => {
        const frag = document.createDocumentFragment();
        node.data.split(/(\s+)/).forEach((part) => {
          if (!part) return;
          if (/^\s+$/.test(part)) {
            frag.appendChild(document.createTextNode(part));
          } else {
            const span = document.createElement('span');
            span.className = 'read-word';
            span.textContent = part;
            frag.appendChild(span);
            words.push(span);
          }
        });
        node.replaceWith(frag);
      });
      return words;
    };

    const collect = () => {
      document.querySelectorAll<HTMLElement>(SELECTOR).forEach((p) => {
        if (done.has(p)) return;
        done.add(p);
        paras.push({ el: p, words: split(p), lit: 0 });
      });
    };

    let raf = 0;
    const update = () => {
      raf = 0;
      const vh = window.innerHeight;
      for (let k = paras.length - 1; k >= 0; k--) {
        const para = paras[k];
        if (!para.el.isConnected) {
          paras.splice(k, 1);
          continue;
        }
        const r = para.el.getBoundingClientRect();
        if (r.bottom < -vh || r.top > vh * 2) continue;
        const from = vh * START;
        const to = vh * END - r.height;
        const progress = Math.min(1, Math.max(0, (from - r.top) / (from - to)));
        const lit = Math.round(progress * para.words.length);
        if (lit === para.lit) continue;
        para.words.forEach((w, i) => {
          if (i < lit !== i < para.lit) w.classList.toggle('is-lit', i < lit);
        });
        para.lit = lit;
      }
    };
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    collect();
    update();

    // Seções que remontam o conteúdo (ex.: a do Icaro, fixa no desktop) trazem parágrafos novos
    const mo = new MutationObserver(() => {
      collect();
      schedule();
    });
    mo.observe(document.querySelector('main') ?? document.body, { childList: true, subtree: true });
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);

    return () => {
      cancelAnimationFrame(raf);
      mo.disconnect();
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, []);

  return null;
}
