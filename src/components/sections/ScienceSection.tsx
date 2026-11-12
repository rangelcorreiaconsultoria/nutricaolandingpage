import Image from 'next/image';

const athletes = [
  {
    name: 'Edson Aguiar',
    role: 'Atleta da seleção brasileira de Marcha Atlética',
    src: '/images/edsonaguiar.jpeg',
  },
  {
    name: 'Vinicius Bello',
    role: '3º lugar geral Amador IRONMAN 70.3 RJ e CWB',
    src: '/images/viniciusbelo.jpeg',
  },
  {
    name: 'Bruno Silva',
    role: 'Atleta CDE e Campeão da Meia Maratona do Recife',
    src: '/images/brunosilva.jpeg',
  },
  {
    name: 'Andre Jesus',
    role: 'Capitão AdidasRunners SÃO PAULO',
    src: '/images/andrejesus.jpeg',
  },
];

export default function ScienceSection() {
  return (
    <section className="md:py-28 py-20 bg-canvas">
      <div className="container">
        <p className="section-label mb-8">Rigor em cada decisão</p>

        <div className="grid lg:grid-cols-12 gap-x-12 gap-y-8 items-start mb-16">
          <h2 className="lg:col-span-6">
            A mesma ciência. <span className="highlight">Diferentes objetivos.</span>
          </h2>
          <div className="lg:col-span-6 space-y-6 text-lg text-text-secondary leading-relaxed">
            <p>
              A experiência que construí acompanhando atletas de alto rendimento também orienta meu trabalho com pessoas que desejam emagrecer, ganhar massa muscular ou cuidar melhor da saúde.
            </p>
            <p className="border-l-2 border-cyan pl-6 text-fg font-medium">
              O que muda são as necessidades e as estratégias. O rigor por trás de cada decisão permanece.
            </p>
          </div>
        </div>

        <p className="flex items-center gap-3 font-display text-base font-bold uppercase tracking-[0.2em] mb-8">
          Atletas que já confiaram no meu trabalho
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00B9CF" strokeWidth="2.5" aria-hidden="true">
            <path d="M12 5v14M6 13l6 6 6-6" />
          </svg>
        </p>

        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 lg:gap-x-6">
          {athletes.map((athlete) => (
            <li key={athlete.name} className="group">
              <figure>
                <div className="relative aspect-[4/5] bg-deep overflow-hidden">
                  <Image
                    src={athlete.src}
                    alt={`${athlete.name}, ${athlete.role}`}
                    fill
                    sizes="(min-width: 1024px) 280px, 50vw"
                    className="object-cover object-top transition duration-700 ease-out md:grayscale-[0.75] md:group-hover:grayscale-0 group-hover:scale-105"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-1 w-0 bg-cyan transition-[width] duration-500 group-hover:w-full"
                  />
                </div>
                <figcaption className="mt-4">
                  <span className="block font-display text-xl md:text-2xl font-extrabold uppercase tracking-tight leading-none transition-colors duration-300 group-hover:text-cyan">
                    {athlete.name}
                  </span>
                  <span className="block mt-2 text-sm md:text-base text-text-secondary leading-snug">
                    {athlete.role}
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
