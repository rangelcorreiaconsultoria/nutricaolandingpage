import PhotoSlot from '@/components/common/PhotoSlot';

export default function ProfessionalSection() {
  return (
    <section id="icaro" className="md:py-28 py-20 bg-canvas">
      <div className="container">
        <div className="relative bg-surface border border-line overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-2 bg-cyan" />

          <div className="relative z-10 p-8 md:p-14 lg:p-20">
            <div className="grid lg:grid-cols-12 gap-x-12 gap-y-12 items-start">
              <div className="lg:col-span-7">
                <p className="flex items-center gap-3 font-display text-base font-bold uppercase tracking-[0.2em] text-cyan mb-8">
                  <span className="block w-10 h-px bg-cyan" />
                  Quem está por trás do acompanhamento
                </p>
                <h2 className="text-white mb-3">
                  Icaro <span className="text-cyan">Andrade</span>
                </h2>
                <p className="font-display text-xl font-semibold uppercase tracking-[0.2em] text-white/70 mb-10">
                  CRN6 37419
                </p>

                <div className="space-y-5 text-white/75 text-lg leading-relaxed max-w-3xl">
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
              </div>

              <div className="lg:col-span-5 max-w-md lg:max-w-none">
                <PhotoSlot
                  src="/images/icaro-perfil.jpeg"
                  alt="Icaro Andrade, nutricionista, professor e palestrante"
                  caption={
                    <>
                      Icaro Andrade <span className="text-cyan">│</span> Nutricionista, Professor e Palestrante
                    </>
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
