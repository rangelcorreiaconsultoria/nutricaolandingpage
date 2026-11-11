'use client';

import { useScrollPin } from '@/components/common/useScrollPin';

const specialties = [
  { title: 'Recomposição corporal', credential: 'Emagrecimento e ganho de massa muscular' },
  { title: 'Nutrição para performance esportiva', credential: 'Formação ACSM' },
  { title: 'Avaliação física da composição corporal', credential: 'Avaliador ISAK e professor' },
  {
    title: 'Tratamento nutricional da obesidade e doenças metabólicas',
    credential: 'Pós-graduado e professor',
  },
];

const bio = (
  <div className="space-y-5 text-white/75 text-lg leading-relaxed">
    <p>
      Nutricionista especializado em Nutrição Esportiva pelo American College of Sports Medicine (ACSM) e em avaliação da composição corporal pela metodologia internacional ISAK.
    </p>
    <p>
      Professor e palestrante, já contribuiu para a formação de centenas de profissionais por meio de cursos presenciais e online, além de ministrar aulas em instituições como USP, Uniguaçu, UNIT e IBRAS.
    </p>
    <p>
      Sua trajetória reúne experiência acadêmica, rigor científico e prática clínica, com anos de atuação no acompanhamento nutricional de atletas de alto rendimento. Ao longo desse período, participou da preparação de atletas com conquistas nacionais e internacionais, incluindo representantes do atletismo brasileiro no Campeonato Mundial de Marcha Atlética.
    </p>
    <p className="text-white">
      Hoje, aplica esse mesmo compromisso com a ciência e a personalização ao acompanhamento de pessoas que buscam melhorar a composição corporal, a saúde e o desempenho físico.
    </p>
  </div>
);

const specs = (
  <div>
    <p className="font-display text-base font-bold uppercase tracking-[0.2em] text-cyan mb-4">Especialidades</p>
    <ul className="border-t border-line">
      {specialties.map((item) => (
        <li key={item.title} className="group relative py-5 border-b border-line">
          <span
            aria-hidden="true"
            className="absolute left-0 -bottom-px h-0.5 w-0 bg-cyan transition-[width] duration-500 group-hover:w-full"
          />
          <h3 className="text-2xl xl:text-3xl leading-[1.1] transition-colors duration-300 group-hover:text-cyan">
            {item.title}
          </h3>
          <p className="mt-2 font-display text-base font-semibold uppercase tracking-[0.12em] text-text-secondary">
            {item.credential}
          </p>
        </li>
      ))}
    </ul>
  </div>
);

export default function ProfessionalSection() {
  const { outerRef, innerRef, pinned, progress, scrollTo } = useScrollPin();
  const stage = progress >= 0.45 ? 1 : 0;

  const tab = (active: boolean) =>
    `font-display text-base font-bold uppercase tracking-[0.16em] py-3 border-b-2 transition-colors ${
      active ? 'text-cyan border-cyan' : 'text-text-secondary border-transparent hover:text-white'
    }`;

  const content = (
    <div className="grid lg:grid-cols-12 gap-x-12 gap-y-8 items-start w-full">
      <div className="lg:col-span-5">
        <p className="flex items-center gap-3 font-display text-base font-bold uppercase tracking-[0.2em] text-cyan mb-8">
          <span className="block w-10 h-px bg-cyan" />
          Quem está por trás do acompanhamento
        </p>
        <h2 className="text-white mb-3">
          Icaro <span className="text-cyan">Andrade</span>
        </h2>
        <p className="font-display text-xl font-semibold uppercase tracking-[0.2em] text-white/70">CRN 637419</p>

        {pinned && (
          <div className="mt-10 flex gap-8">
            <button type="button" onClick={() => scrollTo(0)} className={tab(stage === 0)} aria-current={stage === 0}>
              Trajetória
            </button>
            <button type="button" onClick={() => scrollTo(0.8)} className={tab(stage === 1)} aria-current={stage === 1}>
              Especialidades
            </button>
          </div>
        )}
      </div>

      {pinned ? (
        <div className="lg:col-span-7 grid">
          <div
            className={`col-start-1 row-start-1 transition-all duration-500 ${
              stage === 0 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6 pointer-events-none'
            }`}
          >
            {bio}
          </div>
          <div
            className={`col-start-1 row-start-1 transition-all duration-500 ${
              stage === 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 pointer-events-none'
            }`}
          >
            {specs}
          </div>
        </div>
      ) : (
        <div className="lg:col-span-7 space-y-14">
          {bio}
          {specs}
        </div>
      )}
    </div>
  );

  const bar = <div className="absolute inset-y-0 left-0 w-2 bg-cyan" />;

  return (
    <section id="icaro" className="md:py-28 py-20 bg-canvas">
      <div className="container">
        {pinned ? (
          <div ref={outerRef} style={{ height: 'calc(100vh - 6rem + 110vh)' }}>
            <div
              ref={innerRef}
              className="sticky top-24 h-[calc(100vh-6rem)] bg-surface border border-line flex items-center px-14 xl:px-20"
            >
              {bar}
              {content}
            </div>
          </div>
        ) : (
          <div className="relative bg-surface border border-line overflow-hidden">
            {bar}
            <div className="relative z-10 p-8 md:p-14">{content}</div>
          </div>
        )}
      </div>
    </section>
  );
}
