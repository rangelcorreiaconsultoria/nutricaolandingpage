import ConvergenceDiagram from '@/components/common/ConvergenceDiagram';

export default function GenericDietSection() {
  return (
    <section className="md:py-28 py-20 bg-deep">
      <div className="container">
        <p className="section-label mb-8">Estratégia sob medida</p>

        <div className="grid lg:grid-cols-12 gap-x-12 gap-y-8 items-start">
          <h2 className="lg:col-span-6">
            Você não precisa de mais uma{' '}
            <span className="underline-cyan">dieta genérica.</span>
          </h2>

          <div className="lg:col-span-6 space-y-6 text-lg text-text-secondary leading-relaxed">
            <p>
              Talvez você já tenha tentado reduzir as calorias para emagrecer, aumentar o consumo de proteínas para ganhar massa muscular ou seguir uma dieta que funcionou para outra pessoa.
            </p>
            <p>E, mesmo se esforçando, não conseguiu os resultados que esperava.</p>
            <p>
              Isso acontece porque uma boa estratégia nutricional precisa considerar muito mais do que uma lista de alimentos ou suplementos.
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center">
          <p className="font-display text-xl font-semibold uppercase tracking-[0.12em] text-text-secondary mb-8 text-center">
            Seis fatores fazem parte de cada decisão
          </p>
          <ConvergenceDiagram />
        </div>

        <div className="mt-14 bg-raise border-l-4 border-cyan text-white p-8 md:p-14">
          <p className="font-display text-3xl md:text-5xl font-bold uppercase tracking-tight leading-tight max-w-4xl">
            O acompanhamento não deve exigir que você adapte toda a sua vida à dieta.{' '}
            <span className="text-cyan">A dieta precisa ser construída para funcionar na sua vida.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
