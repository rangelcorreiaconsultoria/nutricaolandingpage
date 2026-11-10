const topics = [
  {
    title: 'Padronização ISAK',
    description: 'Comparações mais confiáveis entre avaliações ao longo do tempo.',
  },
  {
    title: 'Dobras cutâneas',
    description: 'Menos sensíveis a várias alterações agudas quando bem executadas.',
  },
  {
    title: 'Bioimpedância na prática',
    description: 'Praticidade e rapidez, com as limitações de interpretação que você precisa conhecer.',
  },
  {
    title: 'Acompanhamento longitudinal',
    description: 'Mensure mudanças e mostre ao paciente a evolução real.',
  },
];

export default function DifferencesSection() {
  return (
    <section id="conteudo" className="md:py-28 py-20 bg-white">
      <div className="container">
        <div className="max-w-3xl mb-16">
          <p className="section-label mb-6">Conteúdo</p>
          <h2>
            Fundamentos até a <span className="highlight">interpretação.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {topics.map((topic) => (
            <div key={topic.title} className="border-t border-ink pt-6">
              <span className="block w-8 h-1 bg-cyan mb-6" />
              <h3 className="mb-4 text-2xl">{topic.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{topic.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-mist p-8 md:p-14">
          <p className="font-display text-3xl md:text-5xl font-bold uppercase tracking-tight leading-tight max-w-4xl">
            Um consultório luxuoso não substitui uma{' '}
            <span className="underline-cyan">avaliação tecnicamente consistente.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
