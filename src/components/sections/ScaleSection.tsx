import Image from 'next/image';
import NewTabHint from '@/components/common/NewTabHint';
import { MSG_EVALUATION, whatsappUrl } from '@/lib/contact';

export default function ScaleSection() {
  return (
    <section className="md:py-28 py-20 bg-surface">
      <div className="container">
        <p className="section-label mb-8">Composição corporal</p>

        <div className="grid lg:grid-cols-12 gap-x-12 gap-y-12 items-start">
          <div className="lg:col-span-6">
            <h2 className="mb-10">
              A balança mostra seu peso.{' '}
              <span className="highlight">Não conta toda a história.</span>
            </h2>
            <div className="space-y-6 text-lg text-text-secondary leading-relaxed max-w-2xl">
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

          <div className="lg:col-span-6 bg-raise p-5 md:p-8">
            <p className="font-display text-base font-bold uppercase tracking-[0.2em] mb-8">
              Mesmo peso na balança
            </p>
            <Image
              src="/images/balanca.png"
              alt="Três mulheres com o mesmo peso, 60 kg, e percentuais de gordura diferentes: 15%, 20% e 30%"
              width={1145}
              height={912}
              sizes="(min-width: 1024px) 540px, 100vw"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
