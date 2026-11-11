const steps = [
  {
    title: 'Investigação inicial',
    paragraphs: [
      'Avaliamos a sua composição corporal através do protocolo de dobras cutâneas seguindo a metodologia ISAK (melhor método de avaliação clínica da composição corporal).',
      'Avaliamos a sua rotina, alimentação, situação clínica, preferências e objetivos antes de definir qualquer estratégia.',
    ],
  },
  {
    title: 'Eu te apresento o planejamento inicial e começamos a colocar em prática.',
    paragraphs: [
      'Dieta, lista de suplementos, eventuais exames, tudo é disponibilizado para começarmos a executar o nosso plano.',
    ],
  },
  {
    title: 'Toda semana revisamos a sua evolução.',
    paragraphs: [
      'Usaremos um sistema de trabalho próprio, desenvolvido ao longo dos anos após atender centenas de pessoas.',
      'A partir das suas respostas, avaliamos como está sendo a sua evolução. Nesta etapa somos capazes de ajustar o seu planejamento toda semana caso haja necessidade. Você não precisa esperar meses para ter sua dieta ajustada e continuar evoluindo.',
    ],
  },
  {
    title: 'O dia da reavaliação.',
    paragraphs: [
      'Nos encontramos uma vez no mês para reavaliar a sua composição corporal e registrar a sua evolução. A partir dos seus resultados nesta etapa, somos capazes de melhorar ainda mais o nosso planejamento inicial.',
    ],
  },
];

export default function StructureSection() {
  return (
    <section id="estrutura" className="lg:py-28 py-20 bg-base">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-12">
          <div className="lg:col-span-7">
            <p className="section-label mb-6">Estrutura de trabalho</p>
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

        <ol id="fluxo-trabalho" className="grid xl:grid-cols-4 gap-y-2 xl:gap-y-0 scroll-mt-28">
          {steps.map((step, i) => {
            const isLast = i === steps.length - 1;
            return (
              <li key={step.title} className="flex flex-col">
                <div className="hidden xl:flex items-center mb-5" aria-hidden="true">
                  <span className="grid place-items-center w-14 h-14 shrink-0 border-2 border-cyan bg-base font-display text-2xl font-extrabold text-cyan">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {!isLast && (
                    <span className="relative flex-1 h-px bg-cyan/60 mx-3">
                      <svg
                        className="absolute -right-1 top-1/2 -translate-y-1/2 text-cyan"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                      >
                        <path d="M8 4l8 8-8 8" />
                      </svg>
                    </span>
                  )}
                </div>

                <div className={`flex-1 bg-surface border-t-2 border-cyan p-6 ${isLast ? '' : 'xl:mr-6'}`}>
                  <span className="xl:hidden block font-display text-4xl font-extrabold text-cyan leading-none mb-4">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-xl md:text-2xl mb-4">{step.title}</h3>
                  <div className="space-y-3 text-text-secondary leading-relaxed">
                    {step.paragraphs.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                  </div>
                </div>

                {!isLast && (
                  <div className="xl:hidden flex justify-center py-3 text-cyan" aria-hidden="true">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M12 4v16M5 13l7 7 7-7" />
                    </svg>
                  </div>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
