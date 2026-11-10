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
    <section id="estrutura" className="lg:py-28 py-20 bg-white">
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

        <ol className="lg:col-span-7 relative border-l border-dashed border-ink/30 ml-5 pl-10 sm:pl-14 flex flex-col gap-6">
          {steps.map((step, i) => (
            <li key={step.title} className="relative group">
              <span className="absolute -left-[3.75rem] sm:-left-[4.75rem] top-6 grid place-items-center w-10 h-10 bg-white border border-ink font-display text-lg font-extrabold text-ink group-hover:bg-cyan group-hover:border-cyan transition-colors">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="bg-mist p-6 md:p-8 border-t-2 border-transparent group-hover:border-cyan transition-colors">
                <h3 className="text-2xl md:text-3xl mb-4">{step.title}</h3>
                <div className="space-y-3 text-text-secondary leading-relaxed">
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
