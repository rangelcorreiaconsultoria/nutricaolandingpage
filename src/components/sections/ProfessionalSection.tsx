'use client';

import Image from 'next/image';
import { useScrollPin } from '@/components/common/useScrollPin';
import NewTabHint from '@/components/common/NewTabHint';
import { whatsappUrl } from '@/lib/contact';

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
  <div className="space-y-4 text-white/75 text-base lg:text-[17px] leading-relaxed">
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
        <li key={item.title} className="border-b border-line">
          <a
            href={whatsappUrl(`Olá, Icaro! Tenho interesse em: ${item.title}.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-4 py-3"
          >
            <span
              aria-hidden="true"
              className="absolute left-0 -bottom-px h-0.5 w-0 bg-cyan transition-[width] duration-500 group-hover:w-full group-focus-visible:w-full"
            />
            <span className="flex-1">
              <h3 className="text-xl xl:text-2xl leading-[1.1] transition-colors duration-300 group-hover:text-cyan group-focus-visible:text-cyan">
                {item.title}
              </h3>
              <span className="block mt-1 font-display text-sm font-semibold uppercase tracking-[0.12em] text-text-secondary">
                {item.credential}
              </span>
            </span>
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.25"
              aria-hidden="true"
              className="shrink-0 text-cyan opacity-60 lg:opacity-0 lg:-translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-focus-visible:opacity-100 group-focus-visible:translate-x-0"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
            <NewTabHint />
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default function ProfessionalSection() {
  const { outerRef, innerRef, pinned, progress, scrollTo } = useScrollPin();
  const stage = progress >= 0.45 ? 1 : 0;

  const tab = (active: boolean) =>
    `font-display text-sm font-bold uppercase tracking-[0.16em] py-2 border-b-2 transition-colors ${
      active ? 'text-cyan border-cyan' : 'text-text-secondary border-transparent hover:text-white'
    }`;

  const content = (
    <div className={`grid lg:grid-cols-12 gap-x-12 gap-y-8 w-full ${pinned ? 'h-full items-stretch' : 'items-start'}`}>
      <h2 className="sr-only">Icaro Andrade, CRN-6 37419</h2>

      <div className={`lg:col-span-5 ${pinned ? 'flex flex-col min-h-0' : ''}`}>
        <p className="flex items-center gap-3 font-display text-base font-bold uppercase tracking-[0.2em] text-cyan mb-6">
          <span className="block w-10 h-px bg-cyan" />
          Quem está por trás do acompanhamento
        </p>

        <figure className={`w-full ${pinned ? 'flex flex-col flex-1 min-h-0' : 'max-w-md'}`}>
          <div className={`relative bg-deep overflow-hidden ${pinned ? 'flex-1 min-h-[200px]' : 'aspect-[4/5]'}`}>
            <Image
              src="/images/trecho7.jpeg"
              alt="Icaro Andrade, nutricionista, professor e palestrante"
              fill
              sizes="(min-width: 1024px) 480px, 100vw"
              className="object-cover object-top"
            />
          </div>
          <figcaption className="mt-3 flex items-start gap-3 font-display text-sm font-bold uppercase tracking-[0.12em] leading-snug">
            <span className="block w-6 h-px bg-cyan mt-2.5 shrink-0" />
            <span>
              Icaro Andrade <span className="text-cyan">│</span> Nutricionista, Professor e Palestrante
            </span>
          </figcaption>
        </figure>
      </div>

      {pinned ? (
        <div className="lg:col-span-7 flex flex-col min-h-0">
          <div className="flex gap-6 mb-8">
            <button type="button" onClick={() => scrollTo(0)} className={tab(stage === 0)} aria-current={stage === 0}>
              Trajetória
            </button>
            <button type="button" onClick={() => scrollTo(0.8)} className={tab(stage === 1)} aria-current={stage === 1}>
              Especialidades
            </button>
          </div>
          <div className="grid">
            <div
              className={`col-start-1 row-start-1 transition-all duration-500 ${
                stage === 0 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6 pointer-events-none'
              }`}
            >
              {bio}
            </div>
            <div
              // Ao chegar pelo teclado num link de especialidade, rola até a aba dele.
              onFocus={() => stage !== 1 && scrollTo(0.8)}
              className={`col-start-1 row-start-1 transition-all duration-500 ${
                stage === 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 pointer-events-none'
              }`}
            >
              {specs}
            </div>
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
              className="sticky top-24 h-[calc(100vh-6rem)] bg-surface border border-line flex items-center px-14 xl:px-20 py-10"
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
