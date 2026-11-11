import WorkflowAccordion from '@/components/common/WorkflowAccordion';
import WorkflowRuler from '@/components/common/WorkflowRuler';

export default function StructureSection() {
  return (
    <section id="estrutura" className="lg:pt-28 pt-20 lg:pb-16 pb-20 bg-canvas">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-12">
          <div className="lg:col-span-7">
            <h2>
              Você não precisa descobrir sozinho{' '}
              <span className="highlight">o que precisa mudar.</span>
            </h2>
          </div>
          <p className="lg:col-span-5 text-text-secondary text-lg leading-relaxed border-l-2 border-cyan pl-6">
            Meu trabalho é construir uma estratégia para você, acompanhar sua execução e realizar os ajustes necessários ao longo do processo.
          </p>
        </div>

        <WorkflowAccordion />
        <WorkflowRuler />
      </div>
    </section>
  );
}
