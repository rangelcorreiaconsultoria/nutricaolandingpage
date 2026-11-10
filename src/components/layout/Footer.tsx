import Link from 'next/link';

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
                Antropometria
                <br />
                <span className="font-semibold tracking-[0.2em] text-sm text-text-secondary">
                  na prática
                </span>
              </span>
            </Link>
            <p className="text-sm text-text-secondary leading-relaxed max-w-xs">
              Da medição à interpretação. Formação técnica em avaliação antropométrica com padronização ISAK.
            </p>
          </div>

          <div>
            <h4 className="text-base tracking-[0.2em] mb-4">Menu</h4>
            <ul className="space-y-2">
              {[
                { href: '#curso', label: 'O curso' },
                { href: '#metodo', label: 'Método' },
                { href: '#conteudo', label: 'Conteúdo' },
                { href: '#professor', label: 'Professor' },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-text-secondary hover:text-cyan">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-base tracking-[0.2em] mb-4">Contato</h4>
            <a
              href="https://www.instagram.com/pedrolucenanutri/"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm text-text-secondary hover:text-cyan mb-2"
            >
              Instagram
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=5582982150582"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-ink underline-cyan hover:text-cyan"
            >
              +55 82 98215.0582
            </a>
          </div>
        </div>

        <div className="border-t border-line pt-8 flex flex-col md:flex-row justify-between gap-4 font-display text-sm font-semibold uppercase tracking-[0.2em] text-text-tertiary">
          <p>&copy; {currentYear} Antropometria na Prática</p>
          <p>Professor Ícaro Andrade</p>
        </div>
      </div>
    </footer>
  );
}
