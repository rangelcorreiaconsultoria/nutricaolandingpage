'use client';

import Link from 'next/link';
import { useState } from 'react';
import { MSG_AVAILABILITY, whatsappUrl } from '@/lib/contact';

const navLinks = [
  { href: '#como-comecar', label: 'Como começar' },
  { href: '#estrutura', label: 'Estrutura' },
  { href: '#icaro', label: 'Ícaro' },
  { href: '#formatos', label: 'Formatos' },
  { href: '#local', label: 'Local' },
  { href: '#duvidas', label: 'Dúvidas' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const agendaUrl = whatsappUrl(MSG_AVAILABILITY);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-line">
      <nav className="container flex justify-between items-center py-4">
        <Link href="#inicio" className="flex items-center gap-3">
          <span className="block w-2 h-8 bg-cyan" />
          <span className="font-display text-xl font-extrabold uppercase leading-none tracking-tight">
            Ícaro Andrade
            <br />
            <span className="font-semibold tracking-[0.2em] text-sm text-text-secondary">
              Nutricionista
            </span>
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-display text-base font-semibold uppercase tracking-[0.15em] text-text-secondary hover:text-cyan"
            >
              {link.label}
            </a>
          ))}
          <a
            href={agendaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary px-5 py-2.5 text-base"
          >
            Agendar
          </a>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 text-ink hover:text-cyan"
          aria-label="Menu"
          aria-expanded={isMenuOpen}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 7h16M4 12h16M4 17h10" />
          </svg>
        </button>

        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-line p-6 lg:hidden">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-3 font-display text-lg font-semibold uppercase tracking-[0.15em] text-text-secondary hover:text-cyan"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={agendaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary w-full mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Agendar
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
