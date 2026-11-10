import { MSG_OBJECTIVES, whatsappUrl } from '@/lib/contact';

export default function HeroSection() {
  return (
    <section id="inicio" className="relative bg-white overflow-hidden">
      <div className="container pt-36 pb-12 md:pt-44 md:pb-16">
        <p className="section-label mb-8">Nutrição esportiva e composição corporal</p>
        <h1 className="mb-10 max-w-5xl">
          Seu esforço merece <span className="underline-cyan">resultados.</span>
        </h1>

        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-6 space-y-5 text-lg text-text-secondary leading-relaxed">
            <p>
              Seja para emagrecer, ganhar massa muscular, melhorar sua saúde ou evoluir nos treinos, seus resultados dependem de uma estratégia nutricional adequada à sua realidade.
            </p>
            <p>
              Com um acompanhamento individualizado, baseado em ciência e avaliação criteriosa, você tem um planejamento construído para seus objetivos, sua rotina e suas necessidades.
            </p>
          </div>

          <div className="lg:col-span-6 lg:pl-12">
            <p className="font-display text-2xl font-semibold uppercase tracking-tight mb-6 border-l-2 border-cyan pl-5">
              Atendimento presencial na Pajuçara, em Maceió.
            </p>
            <a
              href={whatsappUrl(MSG_OBJECTIVES)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary w-full sm:w-auto"
            >
              Quero conversar sobre meus objetivos
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="container pb-20 md:pb-28">
        <div className="relative bg-cyan-light overflow-hidden">
          <svg
            viewBox="0 0 1200 300"
            preserveAspectRatio="xMaxYMid slice"
            className="block w-full h-48 md:h-72"
            fill="none"
            aria-hidden="true"
          >
            <g stroke="#00B9CF" strokeOpacity="0.18" strokeWidth="1">
              {Array.from({ length: 18 }).map((_, i) => (
                <line key={`h${i}`} x1="0" x2="1200" y1={i * 17.5} y2={i * 17.5} />
              ))}
              {Array.from({ length: 70 }).map((_, i) => (
                <line key={`v${i}`} y1="0" y2="300" x1={i * 17.5} x2={i * 17.5} />
              ))}
            </g>
            <g transform="translate(900 150)">
              <circle r="110" stroke="#101719" strokeWidth="1.5" />
              <circle r="60" stroke="#101719" strokeWidth="1" strokeDasharray="4 5" />
              <line x1="-150" y1="0" x2="150" y2="0" stroke="#101719" strokeWidth="1.5" />
              <line x1="0" y1="-150" x2="0" y2="150" stroke="#101719" strokeWidth="1.5" />
              <circle r="9" fill="#00B9CF" />
            </g>
            <g stroke="#101719" strokeWidth="1.5">
              <line x1="80" y1="250" x2="560" y2="250" />
              {Array.from({ length: 25 }).map((_, i) => (
                <line key={`t${i}`} x1={80 + i * 20} x2={80 + i * 20} y1="250" y2={i % 5 === 0 ? 232 : 242} />
              ))}
            </g>
          </svg>

          <dl className="grid grid-cols-1 sm:grid-cols-3 bg-ink text-white">
            {[
              { value: 'ISAK', label: 'Metodologia de avaliação' },
              { value: '1 a 1', label: 'Acompanhamento individualizado' },
              { value: 'Pajuçara', label: 'Atendimento presencial · Maceió' },
            ].map((fact) => (
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
