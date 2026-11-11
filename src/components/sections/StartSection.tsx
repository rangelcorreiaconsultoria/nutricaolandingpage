import NewTabHint from '@/components/common/NewTabHint';
import { MSG_CASE, whatsappUrl } from '@/lib/contact';

const steps = [
  {
    lead: 'Você',
    title: 'me conta seu objetivo.',
    description: 'Envie uma mensagem pelo WhatsApp explicando o que deseja alcançar.',
  },
  {
    lead: 'Eu',
    title: 'avalio o seu caso.',
    description: 'Pessoalmente, e respondo com honestidade se consigo te ajudar.',
  },
  {
    lead: 'Decidimos',
    title: 'em conjunto.',
    description:
      'Escolhemos o melhor formato de acompanhamento para iniciarmos os trabalhos juntos, ou te encaminho para algum colega caso não consiga te ajudar.',
  },
];

export default function StartSection() {
  return (
    <section id="como-comecar" className="md:py-28 py-20 bg-surface">
      <div className="container">
        <div className="max-w-4xl mb-16">
          <p className="section-label mb-6">Primeiro contato</p>
          <h2>
            Antes de agendar, você pode começar{' '}
            <span className="highlight">perguntando a minha opinião.</span>
          </h2>
        </div>

        <ul className="grid md:grid-cols-3 gap-6 mb-14">
          {steps.map((step) => (
            <li key={step.lead} className="bg-raise p-8 border-l-4 border-cyan">
              <h3 className="text-3xl mb-4">
                <span className="text-cyan">{step.lead}</span> {step.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">{step.description}</p>
            </li>
          ))}
        </ul>

        <a
          href={whatsappUrl(MSG_CASE)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary w-full sm:w-auto"
        >
          Gostaria que avaliasse o meu caso
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
          <NewTabHint />
        </a>
      </div>
    </section>
  );
}
