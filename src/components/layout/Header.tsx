'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import NewTabHint from '@/components/common/NewTabHint';
import { MSG_AVAILABILITY, whatsappUrl } from '@/lib/contact';
import { navLinks } from '@/lib/nav';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const agendaUrl = whatsappUrl(MSG_AVAILABILITY);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) setActiveId(visible[0].target.id);
      },
      { rootMargin: '-35% 0px -60% 0px' }
    );
    sections.forEach((section) => observer.observe(section));

    const onScroll = () => {
      if (window.scrollY < 200) setActiveId(null);
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    const onPointerDown = (event: PointerEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('pointerdown', onPointerDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('pointerdown', onPointerDown);
    };
  }, [isMenuOpen]);

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 bg-base/95 backdrop-blur-md border-b border-line"
    >
      <nav className="container flex justify-between items-center py-4" aria-label="Principal">
        <Link href="#inicio" className="flex items-center gap-3">
          <span className="block w-2 h-8 bg-cyan" />
          <span className="font-display text-xl font-extrabold uppercase leading-none tracking-tight">
            Icaro Andrade
            <br />
            <span className="font-semibold tracking-[0.2em] text-sm text-text-secondary">
              Nutricionista
            </span>
          </span>
        </Link>

        <div className="hidden xl:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = activeId === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? 'true' : undefined}
                className={`font-display text-base font-semibold uppercase tracking-[0.15em] py-2 border-b-2 hover:text-cyan ${
                  isActive ? 'text-fg border-cyan' : 'text-text-secondary border-transparent'
                }`}
              >
                {link.label}
              </a>
            );
          })}
          <a
            href={agendaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary px-5 py-2.5 text-base"
          >
            Agendar
            <NewTabHint />
          </a>
        </div>

        <button
          ref={menuButtonRef}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="xl:hidden p-3 -mr-3 text-fg hover:text-cyan"
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isMenuOpen}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {isMenuOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h10" />}
          </svg>
        </button>

        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-base border-b border-line p-6 xl:hidden">
            {navLinks.map((link) => {
              const isActive = activeId === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? 'true' : undefined}
                  className={`block py-3 min-h-11 font-display text-lg font-semibold uppercase tracking-[0.15em] hover:text-cyan ${
                    isActive ? 'text-fg' : 'text-text-secondary'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {isActive && <span className="inline-block w-2 h-2 bg-cyan mr-3 align-middle" />}
                  {link.label}
                </a>
              );
            })}
            <a
              href={agendaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary w-full mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Agendar
              <NewTabHint />
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
