import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-brand-gray/10">
      <div className="container py-16 md:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-12">
          {/* Brand Section */}
          <div>
            <Link
              href="#inicio"
              className="inline-flex items-center gap-2 px-3 py-2 border-2 border-brand-dark-gray rounded-md hover:border-brand-orange transition-colors mb-6"
            >
              <span className="text-lg font-bold text-brand-orange">→</span>
              <span className="text-xs font-bold uppercase tracking-wider leading-tight text-brand-dark-gray">
                Pedro<br />Lucena
              </span>
            </Link>
            <p className="text-sm text-text-tertiary mb-6 leading-relaxed max-w-xs">
              Especialista em alta performance esportiva com estratégia e ciência.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/pedrolucenanutri/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-brand-gray hover:border-brand-orange hover:text-brand-orange text-text-tertiary flex items-center justify-center transition-all hover:-translate-y-1"
                aria-label="Instagram"
              >
                📷
              </a>
              <a
                href="mailto:contato@pedrolucena.com"
                className="w-10 h-10 rounded-full border border-brand-gray hover:border-brand-orange hover:text-brand-orange text-text-tertiary flex items-center justify-center transition-all hover:-translate-y-1"
                aria-label="Email"
              >
                ✉️
              </a>
            </div>
          </div>

          {/* Menu */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-4">Menu</h4>
            <ul className="space-y-2">
              {[
                { href: '#inicio', label: 'Início' },
                { href: '#sobre', label: 'Sobre' },
                { href: '#servicos', label: 'Serviços' },
                { href: '#publico', label: 'Público' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-text-tertiary hover:text-brand-orange transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-4">Contato</h4>
            <p className="text-sm mb-2">📍 Recife, Pernambuco</p>
            <p className="text-sm text-text-tertiary mb-3">Atendimento Presencial & Digital</p>
            <a
              href="tel:+5581995124423"
              className="text-sm font-bold text-brand-orange hover:text-brand-dark-gray transition-colors"
            >
              +55 81 99512.4423
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-brand-gray/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-black uppercase tracking-widest text-text-tertiary">
          <p>&copy; {currentYear} Pedro Lucena. Nutrição Esportiva.</p>
          <p>By Sabrina Vaz</p>
        </div>
      </div>
    </footer>
  );
}
