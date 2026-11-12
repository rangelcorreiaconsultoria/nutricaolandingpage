import ConvergenceDiagram from '@/components/common/ConvergenceDiagram';

export default function GenericDietSection() {
  return (
    <section className="md:py-28 py-20 bg-deep">
      <div className="container">
        <p className="section-label mb-8">Estratégia sob medida</p>

        <div className="grid lg:grid-cols-12 gap-x-12 gap-y-8 items-start">
          <h2 className="lg:col-span-6">
            Você não precisa de mais uma dieta.{' '}
            <span className="underline-cyan">Precisa saber o que fazer com ela.</span>
          </h2>

          <div className="lg:col-span-6 space-y-6 text-lg text-text-secondary leading-relaxed">
            <p>
              Hoje, qualquer pessoa consegue pedir uma dieta à inteligência artificial. E talvez você já tenha uma boa noção do que precisa comer para emagrecer ou ganhar massa muscular.
            </p>
            <p className="text-white font-medium">Mas saber o que comer é apenas uma parte do processo.</p>
            <p>
              Como saber se a estratégia está funcionando? Quando aumentar ou reduzir as calorias? Quando mudar a distribuição dos nutrientes? E o que fazer quando os resultados deixam de aparecer?
            </p>
            <p className="text-white font-medium">
              É nesse momento que o acompanhamento profissional faz diferença.
            </p>
            <p>
              Uma boa estratégia nutricional não é estática. Ela precisa ser constantemente avaliada e ajustada de acordo com sua evolução, seus treinos, sua rotina e seus objetivos.
            </p>
            <p>Porque o que funciona para você hoje pode não ser a melhor estratégia daqui a algumas semanas.</p>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center">
          <p className="font-display text-2xl md:text-3xl font-bold uppercase tracking-tight text-white mb-8 text-center">
            O que eu considero antes de cada decisão?
          </p>
          <ConvergenceDiagram />
        </div>

        <p className="mt-16 md:mt-20 mx-auto max-w-4xl text-center font-display text-2xl md:text-4xl font-bold uppercase tracking-tight leading-tight">
          Esses fatores não são avaliados apenas na primeira consulta.{' '}
          <span className="text-cyan">Eles orientam cada ajuste ao longo do seu acompanhamento.</span>
        </p>
      </div>
    </section>
  );
}
