import NewTabHint from '@/components/common/NewTabHint';
import { MSG_AVAILABILITY, msgPlan, whatsappUrl } from '@/lib/contact';

const plans = [
  {
    name: 'Mensal',
    price: 'R$ 370',
    priceNote: <>por mês</>,
    description:
      'Ideal para iniciar o acompanhamento, conhecer suas necessidades e começar a colocar em prática uma estratégia personalizada.',
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
    price: 'R$ 945',
    priceNote: (
      <>
        pelos 3 meses · média de <strong className="text-cyan font-semibold">R$ 315 por mês</strong>
      </>
    ),
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
    <section id="formatos" className="md:py-28 py-20 bg-deep">
      <div className="container">
        <div className="max-w-4xl mb-16">
          <p className="section-label mb-6">Planos</p>
          <h2>Formatos de acompanhamento</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-14">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              data-reveal
              style={{ '--reveal-delay': `${i * 150}ms` } as React.CSSProperties}
              className="flex"
            >
            <article className="flex-1 bg-raise p-8 md:p-10 border-t-2 border-fg hover:border-cyan transition-colors flex flex-col">
              <h3 className="text-5xl mb-5">{plan.name}</h3>
              <p className="mb-6 pb-6 border-b border-line">
                <span className="block font-display text-5xl md:text-6xl font-extrabold leading-none text-cyan">
                  {plan.price}
                </span>
                <span className="block mt-3 text-base md:text-lg text-white/80">{plan.priceNote}</span>
              </p>
              <p className="text-text-secondary leading-relaxed mb-8">{plan.description}</p>
              <p className="font-display text-base font-bold uppercase tracking-[0.2em] mb-4">Inclui</p>
              <ul className="divide-y divide-line border-t border-line">
                {plan.items.map((item) => (
                  <li key={item} className="flex items-start gap-4 py-3">
                    <span className="mt-2 block w-2 h-2 bg-cyan shrink-0" />
                    <span className="text-fg font-normal">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-8">
                <a
                  href={whatsappUrl(msgPlan(plan.name))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary w-full"
                >
                  Quero o plano {plan.name}
                  <NewTabHint />
                </a>
              </div>
            </article>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-center bg-raise border border-line text-white p-8 md:p-12">
          <p className="text-lg leading-relaxed text-white/80 max-w-3xl">
            A minha prioridade é manter um excelente nível de serviço prestado aos meus pacientes. Por isso, opto por atender um número limitado de pessoas.
          </p>
          <div>
            <a
              href={whatsappUrl(MSG_AVAILABILITY)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary w-full lg:w-auto lg:whitespace-nowrap"
            >
              Verificar disponibilidade de agenda
              <NewTabHint />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
