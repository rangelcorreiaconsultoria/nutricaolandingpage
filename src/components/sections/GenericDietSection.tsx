const factors = ['Rotina', 'Composição corporal', 'Genética', 'Situação clínica', 'Preferências', 'Objetivos'];

export default function GenericDietSection() {
  return (
    <section className="md:py-28 py-20 bg-cyan-light">
      <div className="container grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-6">
          <p className="section-label mb-6">Estratégia individual</p>
          <h2>
            Você não precisa de mais uma{' '}
            <span className="underline-cyan">dieta genérica.</span>
          </h2>
        </div>

        <div className="lg:col-span-6 space-y-6 text-lg text-text-secondary leading-relaxed">
          <p>
            Talvez você já tenha tentado reduzir as calorias para emagrecer, aumentar o consumo de proteínas para ganhar massa muscular ou seguir uma dieta que funcionou para outra pessoa.
          </p>
          <p>E, mesmo se esforçando, não conseguiu os resultados que esperava.</p>
          <p>
            Isso acontece porque uma boa estratégia nutricional precisa considerar muito mais do que uma lista de alimentos ou suplementos.
          </p>
        </div>
      </div>

      <div className="container mt-14">
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border-t border-l border-ink/20 bg-white">
          {factors.map((factor) => (
            <li key={factor} className="p-6 border-r border-b border-ink/20">
              <span className="block w-6 h-1 bg-cyan mb-5" aria-hidden="true" />
              <span className="font-display text-xl font-semibold uppercase tracking-tight leading-tight">
                {factor}
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-text-secondary">Fazem parte das decisões.</p>

        <div className="mt-14 bg-ink text-white p-8 md:p-14">
          <p className="font-display text-3xl md:text-5xl font-bold uppercase tracking-tight leading-tight max-w-4xl">
            O acompanhamento não deve exigir que você adapte toda a sua vida à dieta.{' '}
            <span className="text-cyan">A dieta precisa ser construída para funcionar na sua vida.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
