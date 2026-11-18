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
      'A partir do meu próprio sistema de trabalho, desenvolvido ao longo dos anos após atender centenas de pessoas.',
      'A partir das suas respostas, avaliamos como está sendo a sua evolução. Nesta etapa, somos capazes de ajustar o seu planejamento toda semana se for necessário. Você não precisa esperar meses para ter sua dieta ajustada e continuar evoluindo.',
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
    <section id="estrutura" className="md:py-20 py-14">
      <div className="container grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <p className="section-label mb-6">Estrutura de trabalho</p>
            <h2 className="mb-8">
              Você não precisa descobrir sozinho{' '}
              <span className="highlight">o que precisa mudar.</span>
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed border-l-2 border-cyan pl-6 max-w-md">
              Meu trabalho é construir uma estratégia para você, acompanhar sua execução e realizar os ajustes necessários ao longo do processo.
            </p>
            <p className="mt-8 font-display text-base font-bold uppercase tracking-[0.2em]">
              Como funciona a minha estrutura de trabalho
            </p>
          </div>
        </div>

        {/* Etapas soltas, sem cards: número gigante vazado em ciano ao lado de cada uma */}
        <ol className="lg:col-span-7 flex flex-col gap-12 md:gap-16">
          {steps.map((step, i) => (
            <li key={step.title} className="group grid grid-cols-[auto_1fr] gap-x-5 md:gap-x-8">
              <span
                aria-hidden="true"
                className="font-display font-extrabold leading-[0.8] text-[4.5rem] md:text-[7.5rem] text-transparent [-webkit-text-stroke:2px_#00B9CF] transition-colors duration-500 group-hover:text-cyan"
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="pt-1 md:pt-2">
                <h3 className="text-2xl md:text-3xl mb-4">
                  <span className="sr-only">Etapa {i + 1}: </span>
                  {step.title}
                </h3>
                <div data-read className="space-y-3 text-lg text-text-secondary leading-relaxed">
                  {step.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
