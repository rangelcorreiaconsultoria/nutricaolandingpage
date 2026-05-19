'use client';

const differences = [
  {
    title: 'Sem dietas restritivas',
    description:
      'Foco em flexibilidade estratégica garantindo aderência e prazer no processo.',
  },
  {
    title: 'Estratégia personalizada',
    description:
      'Cada metabolismo é único. Seu plano será desenhado especificamente para seu DNA.',
  },
  {
    title: 'Foco em performance',
    description:
      'Não apenas números na balança, mas marcas batidas e energia constante.',
  },
  {
    title: 'Acompanhamento contínuo',
    description:
      'Monitoramento contínuo para ajustes precisos e resultados consistentes.',
  },
];

export default function DifferencesSection() {
  return (
    <section className="md:py-24 py-16 bg-brand-gray">
      <div className="container">
        <div className="bg-white border border-brand-gray rounded-3xl md:rounded-5xl p-7 md:p-20 relative overflow-hidden shadow-sm">
          <div className="grid lg:grid-cols-2 md:gap-12 gap-6">
            {/* Left Content */}
            <div>
              <p className="section-label md:mb-6 mb-4 mt-2">Diferenciais</p>
              <h2 className="text-4xl lg:text-6xl font-bold text-brand-dark-gray mb-8 leading-snug">
                Ciência aplicada <br />à sua rotina.
              </h2>
              <div className="flex items-center gap-4 border-l-2 border-brand-orange pl-6 md:my-10 my-8">
                <p className="md:text-lg text-base font-medium text-text-secondary leading-relaxed italic">
                  &ldquo;Minha missão é transformar a vida dos meus pacientes através de estratégias que respeitam a bioquímica individual, sem extremismos.&rdquo;
                </p>
              </div>
            </div>

            {/* Right - Grid of Differences */}
            <div className="grid sm:grid-cols-2 md:gap-10 gap-8">
              {differences.map((diff, index) => (
                <div key={index} className="space-y-4">
                  <h4 className="text-lg font-bold text-brand-dark-gray flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-brand-orange rounded-full" />
                    {diff.title}
                  </h4>
                  <p className="text-text-tertiary text-sm leading-relaxed">
                    {diff.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
