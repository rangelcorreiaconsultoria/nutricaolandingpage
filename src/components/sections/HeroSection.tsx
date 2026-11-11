import NewTabHint from '@/components/common/NewTabHint';
import { MSG_OBJECTIVES, whatsappUrl } from '@/lib/contact';

const credentials = [
  { value: 'CRN6 37419', label: 'Nutricionista' },
  { value: 'ACSM', label: 'Nutrição esportiva' },
  { value: 'Professor', label: 'USP · UNIT · IBRAS · Uniguaçu' },
];

export default function HeroSection() {
  return (
    <section id="inicio" className="relative bg-canvas overflow-hidden">
      <div className="container pt-28 pb-12 md:pt-36 md:pb-16">
        <p className="section-label mb-8">Nutrição esportiva e composição corporal</p>
        <h1 className="mb-10 max-w-5xl">
          Seu esforço merece <span className="underline-cyan">resultados.</span>
        </h1>

        <div className="grid lg:grid-cols-12 gap-x-12 gap-y-8 items-start">
          <div className="order-2 lg:order-1 lg:col-span-7 max-w-2xl space-y-5 text-lg text-text-secondary leading-relaxed">
            <p>
              Seja para emagrecer, ganhar massa muscular, melhorar sua saúde ou evoluir nos treinos, seus resultados dependem de uma estratégia nutricional adequada à sua realidade.
            </p>
            <p>
              Com um acompanhamento individualizado, baseado em ciência e avaliação criteriosa, você tem um planejamento construído para seus objetivos, sua rotina e suas necessidades.
            </p>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-5">
            <p className="font-display text-2xl font-semibold uppercase tracking-tight leading-tight mb-6 border-l-2 border-cyan pl-5">
              Atendimento presencial na Pajuçara, em Maceió.
            </p>
            <a
              href={whatsappUrl(MSG_OBJECTIVES)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary w-full"
            >
              Quero conversar sobre meus objetivos
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
              <NewTabHint />
            </a>
          </div>
        </div>
      </div>

      <div className="container pb-20 md:pb-28">
        <div className="relative bg-deep overflow-hidden">
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
            <g stroke="#FFFFFF" strokeOpacity="0.85" strokeWidth="1.5">
              <line x1="80" y1="150" x2="750" y2="150" />
              {Array.from({ length: 34 }).map((_, i) => (
                <line key={`t${i}`} x1={80 + i * 20} x2={80 + i * 20} y1="150" y2={i % 5 === 0 ? 124 : 138} />
              ))}
            </g>
            <g transform="translate(900 150)">
              <circle r="110" stroke="#FFFFFF" strokeOpacity="0.85" strokeWidth="1.5" />
              <circle r="60" stroke="#FFFFFF" strokeOpacity="0.85" strokeWidth="1" strokeDasharray="4 5" />
              <line x1="-150" y1="0" x2="150" y2="0" stroke="#FFFFFF" strokeOpacity="0.85" strokeWidth="1.5" />
              <line x1="0" y1="-150" x2="0" y2="150" stroke="#FFFFFF" strokeOpacity="0.85" strokeWidth="1.5" />
              <circle r="9" fill="#00B9CF" />
            </g>
          </svg>

          <dl className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/10 text-white">
            {credentials.map((item) => (
              <div key={item.value} className="bg-surface px-5 py-6 lg:px-8 lg:py-8">
                <dt className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-none text-cyan">
                  {item.value}
                </dt>
                <dd className="mt-3 text-sm uppercase tracking-[0.12em] leading-snug text-white/75">{item.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
