import PhotoSlot from '@/components/common/PhotoSlot';

export default function ScienceSection() {
  return (
    <section className="md:py-28 py-20 bg-white">
      <div className="container grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-7">
          <p className="section-label mb-6">Rigor em cada decisão</p>
          <h2 className="mb-10">
            A mesma ciência. <span className="highlight">Diferentes objetivos.</span>
          </h2>
          <div className="space-y-6 text-lg text-text-secondary leading-relaxed max-w-2xl">
            <p>
              A experiência que construí acompanhando atletas de alto rendimento também orienta meu trabalho com pessoas que desejam emagrecer, ganhar massa muscular ou cuidar melhor da saúde.
            </p>
            <p className="border-l-2 border-cyan pl-6 text-ink font-normal">
              O que muda são as necessidades e as estratégias. O rigor por trás de cada decisão permanece.
            </p>
          </div>
        </div>

        <div className="lg:col-span-5">
          <p className="flex items-center gap-3 font-display text-base font-bold uppercase tracking-[0.2em] mb-6">
            Atletas que já confiaram no meu trabalho
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00B9CF" strokeWidth="2.5" aria-hidden="true">
              <path d="M12 5v14M6 13l6 6 6-6" />
            </svg>
          </p>
          <div className="grid grid-cols-2 gap-4">
            <PhotoSlot alt="Foto do atleta Fernando" caption="Fernando" />
            <PhotoSlot alt="Foto do atleta Matheus" caption="Matheus" />
          </div>
        </div>
      </div>
    </section>
  );
}
