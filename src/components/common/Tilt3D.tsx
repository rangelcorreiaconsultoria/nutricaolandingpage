'use client';

import { useEffect, useRef, type ReactNode } from 'react';

type Enter = 'swing-left' | 'swing-right' | 'flip-up' | 'depth';

// Pose de partida de cada entrada; o card vem dela até a posição final.
const ENTER: Record<Enter, { transform: string; origin: string }> = {
  'swing-left': { transform: 'rotateY(-70deg) translateZ(-160px)', origin: 'left center' },
  'swing-right': { transform: 'rotateY(70deg) translateZ(-160px)', origin: 'right center' },
  'flip-up': { transform: 'rotateX(-50deg) translateY(40px) scale(0.92)', origin: 'center bottom' },
  depth: { transform: 'translateZ(-520px) rotateX(18deg) rotateZ(-5deg)', origin: 'center center' },
};

type Props = {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  /** Como o card chega quando entra na tela; sem isso ele já está no lugar. */
  enter?: Enter;
  /** Inclinação máxima, em graus, seguindo o cursor. */
  max?: number;
  delay?: number;
};

// Card em 3D: entra na tela girando a partir de uma pose e, com mouse, inclina
// seguindo o cursor com um brilho de luz. Filhos com translateZ ficam em
// profundidade (ex.: as credenciais na foto do topo). Em telas de toque não
// inclina, e com "reduzir movimento" não anima nada.
export default function Tilt3D({ children, className = '', innerClassName = '', enter, max = 8, delay = 0 }: Props) {
  const moverRef = useRef<HTMLDivElement>(null);
  const tiltRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mover = moverRef.current;
    const tilt = tiltRef.current;
    const glare = glareRef.current;
    if (!mover || !tilt || !glare) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let io: IntersectionObserver | undefined;
    if (enter && mover.getBoundingClientRect().top > window.innerHeight) {
      const pose = ENTER[enter];
      mover.style.transformOrigin = pose.origin;
      mover.style.transform = pose.transform;
      mover.style.opacity = '0';
      io = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return;
          mover.style.transition = `transform 1.3s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, opacity 0.8s ease-out ${delay}ms`;
          mover.style.transform = '';
          mover.style.opacity = '';
          io?.disconnect();
        },
        { rootMargin: '0px 0px -12% 0px' }
      );
      io.observe(mover);
    }

    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return () => io?.disconnect();

    let raf = 0;
    const onMove = (e: PointerEvent) => {
      const r = tilt.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width;
      const y = (e.clientY - r.top) / r.height;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        tilt.style.transition = 'transform 0.15s ease-out';
        tilt.style.transform = `rotateX(${(0.5 - y) * max}deg) rotateY(${(x - 0.5) * max}deg)`;
        glare.style.opacity = '1';
        glare.style.background = `radial-gradient(circle at ${x * 100}% ${y * 100}%, rgba(255,255,255,0.16), transparent 55%)`;
      });
    };
    const onLeave = () => {
      cancelAnimationFrame(raf);
      tilt.style.transition = 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)';
      tilt.style.transform = '';
      glare.style.opacity = '0';
    };
    tilt.addEventListener('pointermove', onMove);
    tilt.addEventListener('pointerleave', onLeave);

    return () => {
      io?.disconnect();
      cancelAnimationFrame(raf);
      tilt.removeEventListener('pointermove', onMove);
      tilt.removeEventListener('pointerleave', onLeave);
    };
  }, [enter, max, delay]);

  return (
    <div className={className} style={{ perspective: '1100px' }}>
      <div ref={moverRef} className="h-full w-full [transform-style:preserve-3d]">
        <div ref={tiltRef} className={`relative h-full w-full [transform-style:preserve-3d] ${innerClassName}`}>
          {children}
          <div
            ref={glareRef}
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-500"
          />
        </div>
      </div>
    </div>
  );
}
