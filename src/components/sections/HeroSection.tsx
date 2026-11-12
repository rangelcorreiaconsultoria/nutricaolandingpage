import Image from 'next/image';
import NewTabHint from '@/components/common/NewTabHint';
import { MSG_OBJECTIVES, whatsappUrl } from '@/lib/contact';

const credentials = [
  { value: 'CRN-6 37419', label: 'Nutricionista' },
  { value: 'ACSM', label: 'Nutrição esportiva' },
  { value: 'Professor', label: 'USP · UNIT · IBRAS · Uniguaçu' },
];

export default function HeroSection() {
  return (
    <section id="inicio" className="relative bg-canvas overflow-hidden">
      <div className="container pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="grid lg:grid-cols-12 gap-x-12 gap-y-12 items-stretch">
          <div className="lg:col-span-7">
            <h1 className="mb-10 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">
              Você treina há anos. Até quando vai continuar sem{' '}
              <span className="underline-cyan">o corpo que deseja?</span>
            </h1>

            <div className="max-w-2xl space-y-5 text-lg text-text-secondary leading-relaxed mb-10">
              <p>
                Você mantém uma rotina de treinos, cuida da alimentação e se dedica. Mas, quando olha no espelho, os resultados ainda não refletem todo o esforço que você faz.
              </p>
              <p className="text-white font-medium">
                Talvez o que esteja faltando não seja mais esforço. Seja uma estratégia nutricional feita sob medida para você.
              </p>
              <p>
                Uma estratégia nutricional construída para o seu corpo, sua rotina e seus objetivos, com acompanhamento individualizado e ajustes ao longo do processo para que sua alimentação destrave a sua evolução.
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
                    src="/images/hero.jpeg"
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
                    Icaro Andrade
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
