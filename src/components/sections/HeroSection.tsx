const WHATSAPP_URL =
  'https://api.whatsapp.com/send/?phone=5582982150582&text=Ol%C3%A1%2C+tenho+interesse+no+curso+Antropometria+na+Pr%C3%A1tica.';

const facts = [
  { value: 'ISAK', label: 'Padronização internacional' },
  { value: '~1 cm', label: 'Pode mascarar ou simular mudanças' },
  { value: '3', label: 'Dobras · perímetros · diâmetros' },
];

export default function HeroSection() {
  return (
    <section id="inicio" className="relative bg-white overflow-hidden">
      <div className="container grid grid-cols-1 lg:grid-cols-12 gap-10 pt-36 pb-12 md:pt-44 md:pb-16">
        <div className="flex lg:col-span-4 lg:items-end">
          <div>
            <p className="section-label mb-6">Curso de avaliação antropométrica</p>
            <p className="text-lg text-text-secondary leading-relaxed max-w-xs">
              Formação técnica e prática, baseada na padronização ISAK, com Ícaro Andrade.
            </p>
          </div>
        </div>

        <div className="lg:col-span-8 lg:pl-8">
          <h1 className="mb-6">
            Antropometria <br />
            <span className="underline-cyan">na prática</span>
          </h1>
          <p className="font-display text-3xl lg:text-4xl font-semibold uppercase tracking-tight text-text-secondary mb-10">
            Da medição <span className="text-cyan">à interpretação</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Quero participar
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a href="#metodo" className="btn btn-secondary">
              Conhecer o método
            </a>
          </div>
        </div>
      </div>

      <div className="container pb-20 md:pb-28">
        <div className="relative bg-cyan-light overflow-hidden">
          <svg
            viewBox="0 0 1200 420"
            preserveAspectRatio="xMaxYMid slice"
            className="block w-full h-64 md:h-96"
            fill="none"
            role="img"
            aria-label="Marcação de ponto anatômico com variação de 1 centímetro"
          >
            <g stroke="#00B9CF" strokeOpacity="0.18" strokeWidth="1">
              {Array.from({ length: 25 }).map((_, i) => (
                <line key={`h${i}`} x1="0" x2="1200" y1={i * 17.5} y2={i * 17.5} />
              ))}
              {Array.from({ length: 70 }).map((_, i) => (
                <line key={`v${i}`} y1="0" y2="420" x1={i * 17.5} x2={i * 17.5} />
              ))}
            </g>
            <g transform="translate(820 210)">
              <circle r="150" stroke="#101719" strokeWidth="1.5" />
              <circle r="80" stroke="#101719" strokeWidth="1" strokeDasharray="4 5" />
              <line x1="-190" y1="0" x2="190" y2="0" stroke="#101719" strokeWidth="1.5" />
              <line x1="0" y1="-190" x2="0" y2="190" stroke="#101719" strokeWidth="1.5" />
              <circle r="10" fill="#00B9CF" />
              <circle cx="80" r="10" stroke="#00B9CF" strokeWidth="2" fill="#fff" />
              <line x1="0" y1="48" x2="80" y2="48" stroke="#101719" strokeWidth="1.5" />
              <line x1="0" y1="40" x2="0" y2="56" stroke="#101719" strokeWidth="1.5" />
              <line x1="80" y1="40" x2="80" y2="56" stroke="#101719" strokeWidth="1.5" />
              <path d="M88 -10 L150 -90" stroke="#101719" strokeWidth="1.5" />
              <path d="M140 -90 H150 V-80" stroke="#101719" strokeWidth="1.5" />
            </g>
            <g stroke="#101719" strokeWidth="1.5">
              <line x1="80" y1="370" x2="520" y2="370" />
              {Array.from({ length: 23 }).map((_, i) => (
                <line key={`t${i}`} x1={80 + i * 20} x2={80 + i * 20} y1="370" y2={i % 5 === 0 ? 352 : 362} />
              ))}
            </g>
          </svg>

          <dl className="grid grid-cols-1 sm:grid-cols-3 bg-ink text-white">
            {facts.map((fact) => (
              <div key={fact.value} className="px-6 py-6 md:px-10 md:py-8 border-b sm:border-b-0 sm:border-r border-white/10 last:border-0">
                <dt className="font-display text-4xl md:text-5xl font-extrabold leading-none text-cyan">
                  {fact.value}
                </dt>
                <dd className="mt-2 text-xs uppercase tracking-[0.15em] text-white/70">{fact.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
