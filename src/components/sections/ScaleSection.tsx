const people = [
  { label: 'Pessoa A', lean: 70 },
  { label: 'Pessoa B', lean: 48 },
];

export default function ScaleSection() {
  return (
    <section className="md:py-28 py-20 bg-mist">
      <div className="container grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <p className="section-label mb-6">Composição corporal</p>
          <h2 className="mb-10">
            A balança mostra seu peso.{' '}
            <span className="highlight">Não conta toda a história.</span>
          </h2>
          <div className="space-y-6 text-lg text-text-secondary leading-relaxed max-w-2xl">
            <p>
              Duas pessoas com o mesmo peso podem apresentar composições corporais completamente diferentes. E nem toda evolução aparece na balança.
            </p>
            <p>
              Por isso, a avaliação da composição corporal é uma parte importante do acompanhamento.
            </p>
            <p className="border-l-2 border-cyan pl-6 text-ink font-medium">
              Por meio de medidas padronizadas e uma interpretação criteriosa dos resultados, conseguimos acompanhar com maior precisão as mudanças na composição corporal, tomar decisões mais fundamentadas e ajustar continuamente a estratégia para acelerar a sua evolução.
            </p>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="bg-white p-8 md:p-10">
            <p className="font-display text-base font-bold uppercase tracking-[0.2em] mb-8">
              Mesmo peso na balança
            </p>
            <div className="space-y-6">
              {people.map((person) => (
                <div key={person.label}>
                  <div className="flex justify-between font-display text-sm font-semibold uppercase tracking-[0.15em] text-text-secondary mb-2">
                    <span>{person.label}</span>
                    <span>Mesmo peso</span>
                  </div>
                  <div className="flex h-10 w-full" role="img" aria-label={`${person.label}: composição corporal diferente com o mesmo peso`}>
                    <div className="bg-ink" style={{ width: `${person.lean}%` }} />
                    <div className="bg-cyan flex-1" />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex gap-6 text-sm uppercase tracking-[0.15em] text-text-secondary">
              <span className="flex items-center gap-2"><span className="block w-3 h-3 bg-ink" />Massa magra</span>
              <span className="flex items-center gap-2"><span className="block w-3 h-3 bg-cyan" />Gordura</span>
            </div>
            <p className="mt-6 text-sm text-text-tertiary">Ilustração conceitual.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
