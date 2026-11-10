import { MSG_AVAILABILITY, whatsappUrl } from '@/lib/contact';

const plans = [
  {
    name: 'Mensal',
    description:
      'Ideal para iniciar o acompanhamento, conhecer suas necessidades e começar a colocar em prática uma estratégia individualizada.',
    items: [
      '01 consulta presencial',
      '01 avaliação da composição corporal seguindo a metodologia ISAK',
      'Revisões do seu progresso toda semana',
      'Ajustes no seu plano sempre que necessário',
      '30 dias de duração',
    ],
  },
  {
    name: 'Trimestral',
    description:
      'Para quem deseja construir consistência, acompanhar a evolução ao longo de três meses e realizar ajustes progressivos na estratégia.',
    items: [
      '03 consultas presenciais',
      '03 avaliações da composição corporal seguindo a metodologia ISAK',
      'Revisões do seu progresso toda semana',
      'Ajustes do seu plano sempre que necessário',
      '90 dias de duração',
    ],
  },
];

export default function PlansSection() {
  return (
    <section id="formatos" className="md:py-28 py-20 bg-cyan-light">
      <div className="container">
        <div className="max-w-4xl mb-16">
          <p className="section-label mb-6">Formatos de acompanhamento</p>
          <h2 className="text-4xl lg:text-6xl">
            Quais os formatos de acompanhamento e onde são realizadas as consultas?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-14">
          {plans.map((plan) => (
            <article key={plan.name} className="bg-white p-8 md:p-10 border-t-2 border-ink hover:border-cyan transition-colors flex flex-col">
              <h3 className="text-5xl mb-5">{plan.name}</h3>
              <p className="text-text-secondary leading-relaxed mb-8">{plan.description}</p>
              <p className="font-display text-base font-bold uppercase tracking-[0.2em] mb-4">Inclui</p>
              <ul className="divide-y divide-line border-t border-line">
                {plan.items.map((item) => (
                  <li key={item} className="flex items-start gap-4 py-3">
                    <span className="mt-2 block w-2 h-2 bg-cyan shrink-0" />
                    <span className="text-ink font-normal">{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-center bg-ink text-white p-8 md:p-12">
          <p className="lg:col-span-8 text-lg leading-relaxed text-white/80">
            A minha prioridade é manter um excelente nível de serviço que presto para os meus pacientes. Por isso, opto por atender um número limitado de pessoas.
          </p>
          <div className="lg:col-span-4 lg:text-right">
            <a
              href={whatsappUrl(MSG_AVAILABILITY)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary w-full lg:w-auto"
            >
              Verificar disponibilidade de agenda
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
