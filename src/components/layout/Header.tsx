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
      className="fixed top-0 left-0 right-0 z-50 bg-premium-bg/95 backdrop-blur-md border-b border-white/[0.08] font-premium"
    >
      <nav className="container flex justify-between items-center py-4" aria-label="Principal">
        <Link href="#inicio" className="flex items-center gap-3">
          <span className="block w-[3px] h-9 bg-premium-accent" />
          <span className="block leading-none">
            <span className="block text-[17px] font-bold uppercase tracking-[0.02em] text-premium-title">Icaro Andrade</span>
            <span className="block mt-1.5 text-[10px] font-medium uppercase tracking-[0.32em] text-premium-muted">
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
                className={`text-[15px] font-medium py-2 border-b hover:text-premium-title ${
                  isActive ? 'text-premium-title border-premium-accent' : 'text-premium-muted border-transparent'
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
            className="inline-flex items-center rounded-lg bg-premium-accent px-5 py-2.5 text-[15px] font-semibold text-premium-bg transition-colors duration-300 hover:bg-[#3FC3D4]"
          >
            Agendar
            <NewTabHint />
          </a>
        </div>

        <button
          ref={menuButtonRef}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="xl:hidden p-3 -mr-3 text-premium-title hover:text-premium-accent"
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isMenuOpen}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
            {isMenuOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>

        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-premium-bg border-b border-white/[0.08] p-6 xl:hidden">
            {navLinks.map((link) => {
              const isActive = activeId === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? 'true' : undefined}
                  className={`block py-3 min-h-11 text-lg font-medium hover:text-premium-accent ${
                    isActive ? 'text-premium-title' : 'text-premium-muted'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {isActive && <span className="inline-block w-1.5 h-1.5 rounded-full bg-premium-accent mr-3 align-middle" />}
                  {link.label}
                </a>
              );
            })}
            <a
              href={agendaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full mt-4 items-center justify-center rounded-[10px] bg-premium-accent px-5 py-4 text-base font-semibold text-premium-bg"
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
