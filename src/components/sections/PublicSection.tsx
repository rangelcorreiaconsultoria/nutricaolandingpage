const audiences = [
  'Nutricionistas que já realizam avaliação antropométrica',
  'Nutricionistas que desejam começar a avaliar com método',
  'Profissionais que interpretam composição corporal',
  'Estudantes em busca de formação técnica prática',
];

export default function PublicSection() {
  return (
    <section id="publico" className="md:py-28 py-20 bg-cyan-light">
      <div className="container grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <p className="section-label mb-6">Para quem é</p>
          <h2>Feito para quem mede e interpreta.</h2>
        </div>

        <ul className="lg:col-span-7 divide-y divide-ink/15 border-y border-ink/15">
          {audiences.map((item, index) => (
            <li key={item} className="flex items-baseline gap-6 py-6">
              <span className="font-display text-2xl font-bold text-cyan">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="font-display text-2xl lg:text-3xl font-semibold uppercase tracking-tight">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
