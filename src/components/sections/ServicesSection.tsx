const steps = [
  {
    title: 'Marcação correta dos pontos anatômicos',
    description:
      'Pequenas imprecisões na localização dos pontos podem mascarar ou simular mudanças. Aqui, a marcação é requisito de comparação entre avaliações.',
  },
  {
    title: 'Sequência padronizada de medidas',
    description:
      'Dobras cutâneas, perímetros e diâmetros com método ISAK, para fazer suas primeiras avaliações com menor risco de erros de execução.',
  },
  {
    title: 'Acompanhamento ao longo do tempo',
    description:
      'Mensure mudanças entre avaliações com comparações confiáveis — porque o método é o mesmo em cada consulta.',
  },
  {
    title: 'Interpretação e decisão clínica',
    description:
      'Transforme medidas em decisões clínicas e demonstre ao paciente a evolução real.',
  },
];

export default function ServicesSection() {
  return (
    <section id="metodo" className="lg:py-28 py-20 bg-white">
      <div className="container grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <p className="section-label mb-6">O método</p>
            <h2 className="mb-8">
              Da medição <span className="highlight">à interpretação.</span>
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed border-l-2 border-cyan pl-6 max-w-md">
              Ciência, precisão, método e aplicação clínica em cada etapa.
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
                <h3 className="text-2xl md:text-3xl mb-3">{step.title}</h3>
                <p className="text-text-secondary leading-relaxed">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
