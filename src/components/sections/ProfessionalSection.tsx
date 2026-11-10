import PhotoSlot from '@/components/common/PhotoSlot';

export default function ProfessionalSection() {
  return (
    <section id="icaro" className="md:py-28 py-20 bg-white">
      <div className="container">
        <div className="relative bg-ink text-white overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-2 bg-cyan" />
          <div className="relative z-10 grid lg:grid-cols-12 gap-12 p-8 md:p-16 lg:p-20">
            <div className="lg:col-span-8">
              <p className="flex items-center gap-3 font-display text-base font-bold uppercase tracking-[0.2em] text-cyan mb-8">
                <span className="block w-10 h-px bg-cyan" />
                Quem está por trás do acompanhamento
              </p>
              <h2 className="text-white mb-3">
                Ícaro <span className="text-cyan">Andrade</span>
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
                  Hoje, aplica esse mesmo compromisso com a ciência e a individualização ao acompanhamento de pessoas que buscam melhorar a composição corporal, a saúde e o desempenho físico.
                </p>
              </div>
            </div>

            <div className="lg:col-span-4">
              <PhotoSlot alt="Foto de Ícaro Andrade" caption="Ícaro Andrade" className="[&_figcaption]:text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
