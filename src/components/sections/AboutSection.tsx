export default function AboutSection() {
  return (
    <section id="curso" className="md:py-28 py-20 bg-mist">
      <div className="container grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7">
          <p className="section-label mb-6">O curso</p>
          <h2>
            O que mais motiva o paciente a voltar{' '}
            <span className="highlight">não é a dieta.</span>
          </h2>
        </div>

        <div className="lg:col-span-5 space-y-6 text-lg text-text-secondary leading-relaxed lg:pt-16">
          <p>
            A avaliação física é o que mais motiva os pacientes a voltarem para novas consultas. E pacientes dificilmente permanecem com profissionais quando acreditam que não estão tendo resultado.
          </p>
          <p className="border-l-2 border-cyan pl-6 text-ink font-normal">
            Às vezes o resultado estava lá. Você só não conseguiu medi-lo.
          </p>
          <p>
            É justamente por isso que seguir um método padronizado, como o da ISAK, é tão importante.
          </p>
        </div>
      </div>
    </section>
  );
}
