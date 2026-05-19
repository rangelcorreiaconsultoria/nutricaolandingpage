'use client';

import ServiceCard from '@/components/common/ServiceCard';

const services = [
  {
    icon: '📷',
    title: 'Consulta Online',
    description:
      'Atendimento exclusivo via videoconferência, com anamnese completa e plano estratégico entregue digitalmente.',
    href: '#contato',
    linkText: 'Saber mais',
  },
  {
    icon: '👥',
    title: 'Consulta Presencial',
    description:
      'Experiência completa em nosso consultório em Recife, incluindo avaliação física detalhada e bioimpedância.',
    href: '#contato',
    linkText: 'Agendar em Recife',
  },
  {
    icon: '⚡',
    title: 'Consultoria Personalizada',
    description:
      'Acompanhamento contínuo e plano de performance integrado para atletas de elite e alto desempenho.',
    href: '#contato',
    linkText: 'Ver detalhes',
  },
];

export default function ServicesSection() {
  return (
    <section id="servicos" className="lg:py-24 py-16 bg-brand-gray">
      <div className="container">
        {/* Header */}
        <div className="grid lg:grid-cols-12 md:gap-12 gap-6 items-end md:mb-16 mb-8">
          <div className="lg:col-span-8">
            <h2 className="text-4xl lg:text-7xl font-bold text-brand-dark-gray leading-tight">
              Soluções <span className="highlight">Estratégicas.</span>
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-text-secondary text-lg leading-relaxed border-l border-brand-orange pl-6 mb-2">
              Protocolos de elite desenhados para quem exige precisão absoluta em cada grama de resultado.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
