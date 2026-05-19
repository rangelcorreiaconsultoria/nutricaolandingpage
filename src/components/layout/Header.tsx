'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#inicio', label: 'INÍCIO' },
    { href: '#sobre', label: 'SOBRE' },
    { href: '#servicos', label: 'SERVIÇOS' },
    { href: '#contato', label: 'CONTATO' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-brand-gray/10 transition-all duration-500">
      <nav className="container flex justify-between items-center py-5">
        {/* Logo */}
        <Link
          href="#inicio"
          className="flex items-center gap-2 px-3 py-2 border-2 border-brand-dark-gray rounded-md hover:border-brand-orange transition-colors"
        >
          <span className="text-lg font-bold text-brand-orange">→</span>
          <span className="text-xs font-bold uppercase tracking-wider leading-tight text-brand-dark-gray">
            Pedro<br />Lucena
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-semibold uppercase tracking-wider text-text-secondary hover:text-brand-orange transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-brand-dark-gray hover:text-brand-orange transition-colors"
          aria-label="Menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M4 5h16M4 12h16M4 19h16" />
          </svg>
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="absolute top-full left-0 right-0 bg-white border-b border-brand-gray p-6 md:hidden">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-3 text-xs font-semibold uppercase tracking-wider text-text-secondary hover:text-brand-orange transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </nav>
    </header>
  );
}
