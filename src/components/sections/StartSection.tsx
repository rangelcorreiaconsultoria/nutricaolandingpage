import { MSG_OBJECTIVES, whatsappUrl } from '@/lib/contact';

const steps = [
  {
    title: 'Você me conta seu objetivo.',
    description: 'Envie uma mensagem pelo WhatsApp explicando o que deseja alcançar.',
  },
  {
    title: 'Eu avalio o seu caso.',
    description: 'Pessoalmente, e respondo com honestidade se consigo te ajudar.',
  },
  {
    title: 'Decidimos em conjunto.',
    description:
      'Escolhemos o melhor formato de acompanhamento para iniciarmos os trabalhos juntos, ou te encaminho para algum colega caso não consiga te ajudar.',
  },
];

export default function StartSection() {
  return (
    <section id="como-comecar" className="md:py-28 py-20 bg-mist">
      <div className="container">
        <div className="max-w-4xl mb-16">
          <p className="section-label mb-6">Como começar</p>
          <h2>
            Antes de agendar, você pode começar{' '}
            <span className="highlight">perguntando a minha opinião.</span>
          </h2>
        </div>

        <ol className="grid md:grid-cols-3 gap-6 mb-14">
          {steps.map((step, i) => (
            <li key={step.title} className="bg-white p-8 border-t-2 border-ink hover:border-cyan transition-colors">
              <span className="block font-display text-6xl font-extrabold text-cyan leading-none mb-8">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="text-2xl mb-4">{step.title}</h3>
              <p className="text-text-secondary leading-relaxed">{step.description}</p>
            </li>
          ))}
        </ol>

        <a
          href={whatsappUrl(MSG_OBJECTIVES)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Contar meu objetivo
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </a>
      </div>
    </section>
  );
}
