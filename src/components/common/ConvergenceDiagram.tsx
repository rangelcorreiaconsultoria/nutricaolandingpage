'use client';

import { useEffect, useRef } from 'react';

const factors = ['Rotina', 'Composição corporal', 'Genética', 'Situação clínica', 'Preferências', 'Objetivos'];

const TURN_SECONDS = 22; // uma volta completa
const TILT = (23 * Math.PI) / 180; // inclinação da órbita
const AUTO = (2 * Math.PI) / TURN_SECONDS; // rad/s

// Os seis fatores em órbita 3D em volta de "Sua estratégia": giram devagar e
// sem parar; os da frente ficam maiores e acesos, os de trás passam por trás
// da palavra central. Dá para arrastar com o dedo ou o mouse para girar, e ao
// soltar a órbita volta ao ritmo normal. Com "reduzir movimento" fica parada,
// mas ainda dá para girar arrastando.
export default function ConvergenceDiagram() {
  const stageRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const items = itemsRef.current.filter(Boolean) as HTMLLIElement[];
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let angle = 0;
    let speed = reduced ? 0 : AUTO;
    let radius = 0;
    let half = 0; // metade da largura do palco
    let visible = false;
    let raf = 0;
    let last = 0;
    let drag: { x: number; t: number; v: number } | null = null;

    // O raio cabe na largura do palco descontando o fator mais largo
    const measure = () => {
      const w = stage.clientWidth;
      half = w / 2;
      const widest = Math.max(...items.map((el) => el.offsetWidth));
      radius = Math.max(90, Math.min(w * 0.42, (w - widest * 0.95) / 2 - 8));
      stage.style.height = `${Math.round(radius * Math.sin(TILT) * 2 + 170)}px`;
    };

    const place = () => {
      items.forEach((el, i) => {
        const th = angle + (i * 2 * Math.PI) / items.length;
        const z = Math.cos(th); // 1 = frente, -1 = fundo
        const depth = (z + 1) / 2;
        const scale = 0.72 + 0.4 * depth;
        // Nenhum nome sai da tela, mesmo ampliado na frente
        const room = Math.max(0, half - (el.offsetWidth * scale) / 2 - 4);
        const x = Math.max(-room, Math.min(room, Math.sin(th) * radius));
        const y = z * radius * Math.sin(TILT);
        el.style.transform = `translate(-50%, -50%) translate(${x.toFixed(1)}px, ${y.toFixed(1)}px) scale(${scale.toFixed(3)})`;
        el.style.opacity = (0.28 + 0.72 * depth).toFixed(2);
        el.style.zIndex = z > 0 ? '30' : '10';
        el.style.color = z > 0.8 ? '#00B9CF' : '';
        el.style.filter = z < -0.3 ? `blur(${((-z - 0.3) * 1.6).toFixed(2)}px)` : '';
      });
    };

    const tick = (t: number) => {
      raf = 0;
      const dt = last ? Math.min((t - last) / 1000, 0.05) : 0;
      last = t;
      if (!drag) {
        // Depois de arrastar, a velocidade volta aos poucos ao ritmo da órbita
        const target = reduced ? 0 : AUTO;
        speed += (target - speed) * Math.min(1, dt * 1.8);
        angle += speed * dt;
      }
      place();
      if (visible && (drag || Math.abs(speed) > 1e-4 || !reduced)) raf = requestAnimationFrame(tick);
    };
    const start = () => {
      if (!raf) {
        last = 0;
        raf = requestAnimationFrame(tick);
      }
    };

    const onDown = (e: PointerEvent) => {
      drag = { x: e.clientX, t: performance.now(), v: 0 };
      stage.setPointerCapture(e.pointerId);
      start();
    };
    const onMove = (e: PointerEvent) => {
      if (!drag) return;
      const now = performance.now();
      const da = (e.clientX - drag.x) / radius;
      angle += da;
      const dt = Math.max((now - drag.t) / 1000, 0.001);
      drag = { x: e.clientX, t: now, v: da / dt };
      place();
    };
    const onUp = () => {
      if (!drag) return;
      speed = Math.max(-6, Math.min(6, drag.v));
      drag = null;
      start();
    };

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start();
    });

    const ro = new ResizeObserver(() => {
      measure();
      place();
    });

    measure();
    place();
    // A fonte do site pode chegar depois e mudar a largura dos nomes
    document.fonts?.ready.then(() => {
      measure();
      place();
    });
    io.observe(stage);
    ro.observe(stage);
    stage.addEventListener('pointerdown', onDown);
    stage.addEventListener('pointermove', onMove);
    stage.addEventListener('pointerup', onUp);
    stage.addEventListener('pointercancel', onUp);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
      stage.removeEventListener('pointerdown', onDown);
      stage.removeEventListener('pointermove', onMove);
      stage.removeEventListener('pointerup', onUp);
      stage.removeEventListener('pointercancel', onUp);
    };
  }, []);

  return (
    <div
      ref={stageRef}
      className="relative w-[calc(100%+3rem)] -mx-6 sm:w-full sm:mx-auto max-w-4xl h-[300px] cursor-grab active:cursor-grabbing select-none touch-pan-y"
    >
      <p className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 text-center font-display font-extrabold uppercase leading-[0.95] tracking-tight text-white text-2xl sm:text-4xl lg:text-5xl pointer-events-none">
        Sua
        <br />
        estratégia
      </p>

      <ul aria-label="Fatores considerados">
        {factors.map((f, i) => (
          <li
            key={f}
            ref={(el) => {
              itemsRef.current[i] = el;
            }}
            className="absolute left-1/2 top-1/2 w-max max-w-[6.5em] sm:max-w-[9.5em] text-center font-display font-bold uppercase leading-[1.05] tracking-tight text-white text-base sm:text-xl lg:text-2xl will-change-transform transition-colors duration-500"
          >
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
}
