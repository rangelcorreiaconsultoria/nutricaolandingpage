import Image from 'next/image';
import NewTabHint from '@/components/common/NewTabHint';
import { MSG_OBJECTIVES, whatsappUrl } from '@/lib/contact';

const credentials = [
  { value: 'CRN 637419', label: 'Nutricionista' },
  { value: 'ACSM', label: 'Nutrição esportiva' },
  { value: 'Professor', label: 'USP · UNIT · IBRAS · Uniguaçu' },
];

export default function HeroSection() {
  return (
    <section id="inicio" className="relative bg-canvas overflow-hidden">
      <div className="container pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="grid lg:grid-cols-12 gap-x-12 gap-y-12 items-stretch">
          <div className="lg:col-span-7">
            <p className="section-label mb-8">Nutrição esportiva e composição corporal</p>
            <h1 className="mb-10">
              Seu esforço merece <span className="underline-cyan">resultados.</span>
            </h1>

            <div className="max-w-2xl space-y-5 text-lg text-text-secondary leading-relaxed mb-10">
              <p>
                Seja para emagrecer, ganhar massa muscular, melhorar sua saúde ou evoluir nos treinos, seus resultados dependem de uma estratégia nutricional adequada à sua realidade.
              </p>
              <p>
                Com um acompanhamento individualizado, baseado em ciência e avaliação criteriosa, você tem um planejamento construído para seus objetivos, sua rotina e suas necessidades.
              </p>
            </div>

            <p className="font-display text-2xl font-semibold uppercase tracking-tight leading-tight mb-6 border-l-2 border-cyan pl-5">
              Atendimento presencial na Pajuçara, em Maceió.
            </p>
            <a
              href={whatsappUrl(MSG_OBJECTIVES)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary w-full sm:w-auto"
            >
              Quero conversar sobre meus objetivos
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
              <NewTabHint />
            </a>
          </div>

          {/* Coluna da foto: a altura acompanha a coluna do texto (a foto absorve a diferença) */}
          <div className="lg:col-span-5 relative max-w-md lg:max-w-none">
            <div className="lg:absolute lg:inset-0 flex flex-col">
              <figure className="flex flex-col lg:flex-1 lg:min-h-0">
                <div className="relative aspect-[4/5] lg:aspect-auto lg:flex-1 lg:min-h-0 bg-deep overflow-hidden">
                  <Image
                    src="/images/icaro-perfil.jpeg"
                    alt="Icaro Andrade, nutricionista"
                    fill
                    priority
                    sizes="(min-width: 1024px) 480px, (min-width: 640px) 50vw, 100vw"
                    className="object-cover object-top"
                  />
                </div>
                <figcaption className="mt-3 flex items-start gap-3 font-display text-sm font-bold uppercase tracking-[0.12em] leading-snug">
                  <span className="block w-6 h-px bg-cyan mt-2.5 shrink-0" />
                  <span>
                    Icaro Andrade <span className="text-cyan">·</span> Nutricionista <span className="text-cyan">·</span> CRN 637419
                  </span>
                </figcaption>
              </figure>

              <dl className="mt-4 grid grid-cols-3 gap-px bg-white/10 text-white">
                {credentials.map((item) => (
                  <div key={item.value} className="bg-surface px-3 py-4 sm:px-4">
                    <dt className="font-display text-lg sm:text-xl font-extrabold leading-none text-cyan">
                      {item.value}
                    </dt>
                    <dd className="mt-2 text-[11px] uppercase tracking-[0.1em] leading-snug text-white/75">{item.label}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
