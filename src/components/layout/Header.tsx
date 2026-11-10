'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#curso', label: 'O curso' },
    { href: '#metodo', label: 'Método' },
    { href: '#conteudo', label: 'Conteúdo' },
    { href: '#professor', label: 'Professor' },
    { href: '#inscricao', label: 'Inscrição' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-line">
      <nav className="container flex justify-between items-center py-4">
        <Link href="#inicio" className="flex items-center gap-3">
          <span className="block w-2 h-8 bg-cyan" />
          <span className="font-display text-xl font-extrabold uppercase leading-none tracking-tight">
            Antropometria
            <br />
            <span className="font-semibold tracking-[0.2em] text-sm text-text-secondary">
              na prática
            </span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-display text-base font-semibold uppercase tracking-[0.15em] text-text-secondary hover:text-cyan"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-ink hover:text-cyan"
          aria-label="Menu"
          aria-expanded={isMenuOpen}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 7h16M4 12h16M4 17h10" />
          </svg>
        </button>

        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-line p-6 md:hidden">
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
          </div>
        )}
      </nav>
    </header>
  );
}
