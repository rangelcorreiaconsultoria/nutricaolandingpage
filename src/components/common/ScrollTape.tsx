'use client';

import { useEffect, useState } from 'react';

// Fita métrica que acompanha a rolagem: vertical na borda esquerda em telas
// largas, barra fina no topo no celular. Cada seção vira uma marcação que acende.
export default function ScrollTape() {
  const [progress, setProgress] = useState(0);
  const [marks, setMarks] = useState<number[]>([]);

  useEffect(() => {
    let raf = 0;

    const measure = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (max <= 0) return;
      setMarks(
        Array.from(document.querySelectorAll('main section')).map((s) =>
          Math.min(1, (s.getBoundingClientRect().top + window.scrollY) / max)
        )
      );
    };

    const calc = () => {
      raf = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0);
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(calc);
    };

    measure();
    calc();
    const ro = new ResizeObserver(() => {
      measure();
      calc();
    });
    ro.observe(document.body);
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      ro.disconnect();
      window.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none">
      {/* Celular: barra de progresso no topo */}
      <div className="lg:hidden fixed top-0 inset-x-0 z-[55] h-[3px]">
        <div
          className="h-full bg-cyan origin-left"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>

      {/* Telas largas: fita métrica na borda esquerda */}
      <div className="hidden lg:block fixed left-0 top-24 bottom-6 z-40 w-4">
        <div
          className="absolute inset-y-0 left-0 w-full"
          style={{
            backgroundImage:
              'repeating-linear-gradient(to bottom, rgba(255,255,255,0.28) 0 1px, transparent 1px 12px), repeating-linear-gradient(to bottom, rgba(255,255,255,0.5) 0 1px, transparent 1px 60px)',
            backgroundSize: '7px 100%, 14px 100%',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <div
          className="absolute top-0 left-0 w-0.5 h-full bg-cyan origin-top"
          style={{ transform: `scaleY(${progress})` }}
        />
        {marks.map((m, i) => (
          <span
            key={i}
            className={`absolute -left-[3px] block w-2 h-2 rotate-45 transition-colors duration-300 ${
              progress >= m - 0.002 ? 'bg-cyan' : 'bg-white/25'
            }`}
            style={{ top: `calc(${m * 100}% - 4px)` }}
          />
        ))}
      </div>
    </div>
  );
}
