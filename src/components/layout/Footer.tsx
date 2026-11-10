import Link from 'next/link';
import NewTabHint from '@/components/common/NewTabHint';
import { ADDRESS, MAPS_SEARCH_URL, MSG_GENERAL, WHATSAPP_DISPLAY, whatsappUrl } from '@/lib/contact';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-line">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <Link href="#inicio" className="flex items-center gap-3 mb-6">
              <span className="block w-2 h-8 bg-cyan" />
              <span className="font-display text-xl font-extrabold uppercase leading-none tracking-tight">
                Ícaro Andrade
                <br />
                <span className="font-semibold tracking-[0.2em] text-sm text-text-secondary">
                  Nutricionista
                </span>
              </span>
            </Link>
            <p className="text-base text-text-secondary leading-relaxed max-w-xs">
              CRN6 37419. Acompanhamento individualizado, baseado em ciência e avaliação criteriosa.
            </p>
          </div>

          <div>
            <h4 className="text-base tracking-[0.2em] mb-4">Menu</h4>
            <ul>
              {[
                { href: '#como-comecar', label: 'Como começar' },
                { href: '#estrutura', label: 'Estrutura de trabalho' },
                { href: '#formatos', label: 'Formatos' },
                { href: '#duvidas', label: 'Dúvidas' },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="inline-flex items-center min-h-11 text-base text-text-secondary hover:text-cyan">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-base tracking-[0.2em] mb-4">Contato</h4>
            <a
              href={MAPS_SEARCH_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block py-2 text-base text-text-secondary hover:text-cyan mb-1 max-w-xs"
            >
              Academia Gaviões, {ADDRESS}
              <NewTabHint />
            </a>
            <a
              href={whatsappUrl(MSG_GENERAL)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center min-h-11 text-base font-semibold text-ink underline-cyan hover:text-cyan"
            >
              WhatsApp {WHATSAPP_DISPLAY}
              <NewTabHint />
            </a>
          </div>
        </div>

        <div className="border-t border-line pt-8 flex flex-col md:flex-row justify-between gap-4 font-display text-sm font-semibold uppercase tracking-[0.2em] text-text-tertiary">
          <p>&copy; {currentYear} Ícaro Andrade</p>
          <p>Pajuçara · Maceió</p>
        </div>
      </div>
    </footer>
  );
}
