'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export type Athlete = { name: string; role: string; src: string };

// Cards dos atletas em preto e branco que ganham cor ao passar o mouse. Em
// telas de toque, onde não há mouse, o card que está no meio da tela é que
// ganha cor enquanto a pessoa rola.
export default function AthleteGrid({ athletes }: { athletes: Athlete[] }) {
  const listRef = useRef<HTMLUListElement>(null);
  const [focused, setFocused] = useState<Set<number>>(new Set());

  useEffect(() => {
    const list = listRef.current;
    if (!list || window.matchMedia('(hover: hover)').matches) return;
    const io = new IntersectionObserver(
      (entries) =>
        setFocused((prev) => {
          const next = new Set(prev);
          entries.forEach((e) => {
            const i = Number((e.target as HTMLElement).dataset.index);
            if (e.isIntersecting) next.add(i);
            else next.delete(i);
          });
          return next;
        }),
      { rootMargin: '-35% 0px -35% 0px' }
    );
    list.querySelectorAll('li').forEach((li) => io.observe(li));
    return () => io.disconnect();
  }, []);

  return (
    <ul ref={listRef} className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10 lg:gap-x-6">
      {athletes.map((athlete, i) => {
        const on = focused.has(i);
        return (
          <li key={athlete.name} data-index={i} className="group">
            <figure>
              <div className="relative aspect-[4/5] bg-deep overflow-hidden">
                <Image
                  src={athlete.src}
                  alt={`${athlete.name}, ${athlete.role}`}
                  fill
                  sizes="(min-width: 1024px) 380px, 50vw"
                  className={`object-cover object-top transition duration-700 ease-out group-hover:grayscale-0 group-hover:scale-105 ${
                    on ? 'grayscale-0 scale-105' : 'grayscale-[0.75]'
                  }`}
                />
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 bottom-0 h-1 bg-cyan transition-[width] duration-500 group-hover:w-full ${on ? 'w-full' : 'w-0'}`}
                />
              </div>
              <figcaption className="mt-4">
                <span
                  className={`block font-display text-xl md:text-2xl font-extrabold uppercase tracking-tight leading-none transition-colors duration-300 group-hover:text-cyan ${
                    on ? 'text-cyan' : ''
                  }`}
                >
                  {athlete.name}
                </span>
                <span className="block mt-2 text-sm md:text-base text-text-secondary leading-snug">{athlete.role}</span>
              </figcaption>
            </figure>
          </li>
        );
      })}
    </ul>
  );
}
