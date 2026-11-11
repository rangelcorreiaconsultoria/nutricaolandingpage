const steps = [
  {
    title: 'Investigação inicial',
    summary: 'Avaliamos a sua composição corporal, rotina, alimentação e objetivos antes de definir qualquer estratégia.',
    details: [
      'Avaliamos a sua composição corporal através do protocolo de dobras cutâneas seguindo a metodologia ISAK (melhor método de avaliação clínica da composição corporal).',
      'Avaliamos a sua rotina, alimentação, situação clínica, preferências e objetivos antes de definir qualquer estratégia.',
    ],
  },
  {
    title: 'Planejamento inicial',
    summary: 'Eu te apresento o planejamento e começamos a colocar em prática.',
    details: [
      'Dieta, lista de suplementos, eventuais exames, tudo é disponibilizado para começarmos a executar o nosso plano.',
    ],
  },
  {
    title: 'Revisão semanal',
    summary: 'Toda semana revisamos a sua evolução e ajustamos o planejamento, sem esperar meses.',
    details: [
      'Usaremos um sistema de trabalho próprio, desenvolvido ao longo dos anos após atender centenas de pessoas.',
      'A partir das suas respostas, avaliamos como está sendo a sua evolução. Nesta etapa somos capazes de ajustar o seu planejamento toda semana caso haja necessidade. Você não precisa esperar meses para ter sua dieta ajustada e continuar evoluindo.',
    ],
  },
  {
    title: 'Reavaliação mensal',
    summary: 'Uma vez no mês nos encontramos para reavaliar a composição corporal e registrar a evolução.',
    details: [
      'A partir dos seus resultados nesta etapa, somos capazes de melhorar ainda mais o nosso planejamento inicial.',
    ],
  },
];

const marks = [
  { day: 0, label: 'Dia 0', text: 'Avaliação e plano' },
  { day: 7, label: 'Dia 7', text: 'Revisão' },
  { day: 14, label: 'Dia 14', text: 'Revisão' },
  { day: 21, label: 'Dia 21', text: 'Revisão' },
  { day: 30, label: 'Dia 30', text: 'Reavaliação' },
];

function alignClass(day: number) {
  if (day === 0) return '';
  if (day === 30) return '-translate-x-full text-right';
  return '-translate-x-1/2 text-center';
}

export default function StructureSection() {
  return (
    <section id="estrutura" className="lg:py-28 py-20 bg-canvas">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-12">
          <div className="lg:col-span-7">
            <h2>
              Você não precisa descobrir sozinho{' '}
              <span className="highlight">o que precisa mudar.</span>
            </h2>
          </div>
          <p className="lg:col-span-5 text-text-secondary text-lg leading-relaxed border-l-2 border-cyan pl-6">
            Meu trabalho é construir uma estratégia para você, acompanhar sua execução e realizar os ajustes necessários ao longo do processo.
          </p>
        </div>

        <a
          href="#fluxo-trabalho"
          className="group inline-flex items-center gap-4 bg-cyan text-ink px-5 py-3 md:px-7 md:py-4 mb-14 font-display text-xl md:text-3xl font-extrabold uppercase tracking-[0.06em] leading-tight hover:bg-white"
        >
          Como funciona a minha estrutura de trabalho
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            className="shrink-0 transition-transform duration-300 group-hover:translate-y-1"
            aria-hidden="true"
          >
            <path d="M12 4v16M5 13l7 7 7-7" />
          </svg>
        </a>

        <div id="fluxo-trabalho" className="scroll-mt-28">
          {/* Régua de 30 dias: horizontal em telas médias+, vertical no celular */}
          <div className="hidden md:block mb-14" role="img" aria-label="Régua de 30 dias: avaliação e plano no dia 0, revisões nos dias 7, 14 e 21, reavaliação no dia 30">
            <div className="relative h-20">
              <div
                className="absolute inset-x-0 top-0 h-6 border-b-2 border-r border-cyan"
                style={{
                  backgroundImage:
                    'repeating-linear-gradient(to right, rgba(0,185,207,0.55) 0, rgba(0,185,207,0.55) 1px, transparent 1px, transparent calc(100% / 30))',
                  backgroundSize: '100% 50%',
                  backgroundRepeat: 'no-repeat',
                }}
              />
              {marks.map((m) => (
                <div key={m.day} className="absolute top-0" style={{ left: `${(m.day / 30) * 100}%` }}>
                  <span className="absolute top-0 -translate-x-1/2 block w-0.5 h-6 bg-cyan" />
                  <span className="absolute top-[22px] -translate-x-1/2 block w-3 h-3 bg-cyan rotate-45" />
                  <div className={`absolute top-10 w-40 ${alignClass(m.day)}`}>
                    <p className="font-display text-xl font-extrabold uppercase tracking-wide text-cyan leading-none">
                      {m.label}
                    </p>
                    <p className="mt-1 text-sm text-text-secondary">{m.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <ol className="md:hidden mb-10 border-l-2 border-cyan/60 ml-1.5 space-y-5" aria-hidden="true">
            {marks.map((m) => (
              <li key={m.day} className="relative pl-6">
                <span className="absolute -left-[7px] top-1.5 block w-3 h-3 bg-cyan rotate-45" />
                <p className="font-display text-xl font-extrabold uppercase tracking-wide text-cyan leading-none">
                  {m.label}
                </p>
                <p className="mt-1 text-sm text-text-secondary">{m.text}</p>
              </li>
            ))}
          </ol>

          <ol className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 items-start">
            {steps.map((step, i) => (
              <li key={step.title} className="bg-surface border-t-2 border-cyan p-6">
                <span className="block font-display text-4xl font-extrabold text-cyan leading-none mb-4">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="text-2xl mb-3">{step.title}</h3>
                <p className="text-text-secondary leading-relaxed">{step.summary}</p>
                <details className="group mt-4">
                  <summary className="inline-flex cursor-pointer list-none items-center gap-2 font-display text-base font-bold uppercase tracking-[0.12em] text-cyan [&::-webkit-details-marker]:hidden">
                    <span className="group-open:hidden">Ver detalhes +</span>
                    <span className="hidden group-open:inline">Ocultar −</span>
                  </summary>
                  <div className="mt-3 space-y-3 text-text-secondary leading-relaxed">
                    {step.details.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                  </div>
                </details>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
