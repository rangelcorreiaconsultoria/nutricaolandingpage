import ServiceCard from '@/components/common/ServiceCard';

const steps = [
  {
    number: '01',
    title: 'Marcação correta dos pontos anatômicos',
    description:
      'Pequenas imprecisões na localização dos pontos podem mascarar ou simular mudanças. Aqui, a marcação é requisito de comparação entre avaliações.',
  },
  {
    number: '02',
    title: 'Sequência padronizada de medidas',
    description:
      'Dobras cutâneas, perímetros e diâmetros com método ISAK, para fazer suas primeiras avaliações com menor risco de erros de execução.',
  },
  {
    number: '03',
    title: 'Interpretação e decisão clínica',
    description:
      'Acompanhe mudanças ao longo do tempo, transforme medidas em decisões clínicas e demonstre a evolução real do paciente.',
  },
];

export default function ServicesSection() {
  return (
    <section id="metodo" className="lg:py-28 py-20 bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-6 items-end mb-16">
          <div className="lg:col-span-8">
            <p className="section-label mb-6">O método</p>
            <h2>
              Da medição <span className="highlight">à interpretação.</span>
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-text-secondary text-lg leading-relaxed border-l-2 border-cyan pl-6">
              Ciência, precisão, método e aplicação clínica em cada etapa.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <ServiceCard key={step.number} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}
