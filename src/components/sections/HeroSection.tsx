export default function HeroSection() {
  return (
    <section id="inicio" className="relative pt-36 pb-20 md:pt-44 md:pb-28 bg-white overflow-hidden">
      <div className="container grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <p className="section-label mb-8">Curso de avaliação antropométrica</p>
          <h1 className="mb-8">
            Antropometria <br />
            <span className="underline-cyan">na prática</span>
          </h1>
          <p className="font-display text-3xl lg:text-4xl font-semibold uppercase tracking-tight text-text-secondary mb-8">
            Da medição <span className="text-cyan">à interpretação</span>
          </p>
          <p className="text-lg text-text-secondary leading-relaxed max-w-xl mb-10">
            Formação técnica e prática, baseada na padronização ISAK, para você medir com método e transformar medidas em decisões clínicas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://api.whatsapp.com/send/?phone=5582982150582&text=Ol%C3%A1%2C+tenho+interesse+no+curso+Antropometria+na+Pr%C3%A1tica."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
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

        <div className="lg:col-span-5">
          <div className="relative bg-cyan-light aspect-square flex items-center justify-center">
            <svg viewBox="0 0 400 400" className="w-full h-full p-6" fill="none" role="img" aria-label="Marcação de ponto anatômico com variação de 1 centímetro">
              <g stroke="#101719" strokeWidth="1">
                {Array.from({ length: 21 }).map((_, i) => (
                  <line key={`h${i}`} x1="30" x2="370" y1={30 + i * 17} y2={30 + i * 17} stroke="#00B9CF" strokeOpacity="0.18" />
                ))}
                {Array.from({ length: 21 }).map((_, i) => (
                  <line key={`v${i}`} y1="30" y2="370" x1={30 + i * 17} x2={30 + i * 17} stroke="#00B9CF" strokeOpacity="0.18" />
                ))}
              </g>
              <circle cx="200" cy="200" r="110" stroke="#101719" strokeWidth="1.5" />
              <circle cx="200" cy="200" r="60" stroke="#101719" strokeWidth="1" strokeDasharray="4 5" />
              <line x1="70" y1="200" x2="330" y2="200" stroke="#101719" strokeWidth="1.5" />
              <line x1="200" y1="70" x2="200" y2="330" stroke="#101719" strokeWidth="1.5" />
              <circle cx="200" cy="200" r="9" fill="#00B9CF" />
              <circle cx="262" cy="200" r="9" stroke="#00B9CF" strokeWidth="2" fill="#fff" />
              <line x1="200" y1="240" x2="262" y2="240" stroke="#101719" strokeWidth="1.5" />
              <line x1="200" y1="233" x2="200" y2="247" stroke="#101719" strokeWidth="1.5" />
              <line x1="262" y1="233" x2="262" y2="247" stroke="#101719" strokeWidth="1.5" />
              <path d="M262 190 L300 140" stroke="#101719" strokeWidth="1.5" />
              <path d="M292 140 H300 V148" stroke="#101719" strokeWidth="1.5" />
            </svg>
            <div className="absolute bottom-0 left-0 bg-ink text-white px-5 py-4">
              <p className="font-display text-4xl font-extrabold leading-none text-cyan">~1 cm</p>
              <p className="text-xs uppercase tracking-[0.15em] mt-1">pode mascarar ou simular mudanças</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
