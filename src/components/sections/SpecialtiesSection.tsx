const specialties = [
  { title: 'Recomposição corporal', credential: 'Emagrecimento e ganho de massa muscular' },
  { title: 'Nutrição para performance esportiva', credential: 'Formação ACSM' },
  { title: 'Avaliação física da composição corporal', credential: 'Avaliador ISAK e professor' },
  {
    title: 'Tratamento nutricional da obesidade e doenças metabólicas',
    credential: 'Pós-graduado e professor',
  },
];

export default function SpecialtiesSection() {
  return (
    <section aria-labelledby="especialidades-titulo" className="md:py-24 py-16 bg-canvas">
      <div className="container">
        <p id="especialidades-titulo" className="section-label mb-8">
          Especialidades
        </p>

        <ul className="border-t border-line">
          {specialties.map((item) => (
            <li
              key={item.title}
              className="group relative grid md:grid-cols-12 gap-x-8 gap-y-2 items-baseline py-7 md:py-9 border-b border-line"
            >
              <span
                aria-hidden="true"
                className="absolute left-0 -bottom-px h-0.5 w-0 bg-cyan transition-[width] duration-500 group-hover:w-full"
              />
              <h3 className="md:col-span-8 text-3xl md:text-4xl lg:text-5xl leading-[1.08] transition-colors duration-300 group-hover:text-cyan">
                {item.title}
              </h3>
              <p className="md:col-span-4 md:text-right font-display text-lg font-semibold uppercase tracking-[0.12em] text-text-secondary">
                {item.credential}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
