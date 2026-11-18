import NewTabHint from '@/components/common/NewTabHint';
import { MSG_EVALUATION, whatsappUrl } from '@/lib/contact';

export default function ScaleSection() {
  return (
    <section className="md:py-20 py-14 bg-surface/45">
      <div className="container">
        <p className="section-label mb-8">Composição corporal</p>

        <div className="grid lg:grid-cols-12 gap-x-12 gap-y-8 items-start">
          <h2 className="lg:col-span-6">
            A balança mostra seu peso.{' '}
            <span className="highlight">Não conta toda a história.</span>
          </h2>

          <div className="lg:col-span-6">
            <div data-read className="space-y-6 text-lg text-text-secondary leading-relaxed">
              <p>
                Duas pessoas com o mesmo peso podem apresentar composições corporais completamente diferentes. E nem toda evolução aparece na balança.
              </p>
              <p>
                Por isso, a avaliação da composição corporal é uma parte importante do acompanhamento.
              </p>
              <p className="border-l-2 border-cyan pl-6 text-fg font-medium">
                Por meio de medidas padronizadas e uma interpretação criteriosa dos resultados, conseguimos acompanhar com maior precisão as mudanças na composição corporal, tomar decisões mais fundamentadas e ajustar continuamente a estratégia para acelerar a sua evolução.
              </p>
            </div>

            <a
              href={whatsappUrl(MSG_EVALUATION)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary mt-10 w-full sm:w-auto"
            >
              Desejo realizar uma avaliação
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
              <NewTabHint />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
