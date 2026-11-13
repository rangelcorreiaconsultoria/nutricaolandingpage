import Image from 'next/image';
import NewTabHint from '@/components/common/NewTabHint';
import { MSG_OBJECTIVES, whatsappUrl } from '@/lib/contact';

const credentials = [
  { value: 'CRN-6 37419', label: 'Nutricionista' },
  { value: 'ACSM', label: 'Nutrição esportiva' },
  { value: 'Professor', label: 'USP · UNIT · IBRAS · Uniguaçu' },
];

function CtaButton({ className = '' }: { className?: string }) {
  return (
    <a
      href={whatsappUrl(MSG_OBJECTIVES)}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn btn-primary w-full sm:w-auto ${className}`}
    >
      Quero conversar sobre meus objetivos
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
      <NewTabHint />
    </a>
  );
}

export default function HeroSection() {
  return (
    <section id="inicio" className="relative bg-canvas overflow-hidden">
      <div className="container pt-24 pb-20 md:pt-36 md:pb-28">
        <div className="grid lg:grid-cols-12 gap-x-12 gap-y-12 items-stretch">
          <div className="lg:col-span-7">
            <h1 className="mb-8 lg:mb-10 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">
              Você treina há anos. Até quando vai continuar sem{' '}
              <span className="underline-cyan">o corpo que deseja?</span>
            </h1>

            {/* Celular: foto de corpo inteiro, credenciais e CTA logo abaixo do título, sem precisar rolar */}
            <div className="lg:hidden mb-10">
              <div className="grid grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-4 items-end mb-6">
                <figure>
                  <div className="relative aspect-[2/3]">
                    <Image
                      src="/images/hero.jpeg"
                      alt="Icaro Andrade, nutricionista"
                      fill
                      loading="eager"
                      sizes="(min-width: 1024px) 1px, 40vw"
                      className="object-contain object-bottom"
                    />
                  </div>
                </figure>
                <dl className="grid gap-px bg-white/10 text-white">
                  {credentials.map((item) => (
                    <div key={item.value} className="bg-surface px-3 py-3">
                      <dt className="font-display text-lg font-extrabold leading-none text-cyan">{item.value}</dt>
                      <dd className="mt-1.5 text-[11px] uppercase tracking-[0.1em] leading-snug text-white/75">
                        {item.label}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
              <CtaButton />
            </div>

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

            <p className="font-display text-2xl font-semibold uppercase tracking-tight leading-tight lg:mb-6 border-l-2 border-cyan pl-5">
              Atendimento presencial na Pajuçara, em Maceió.
            </p>
            <CtaButton className="hidden lg:inline-flex" />
          </div>

          {/* Desktop: a altura da foto acompanha a coluna do texto (a foto absorve a diferença) */}
          <div className="hidden lg:block lg:col-span-5 relative">
            <div className="absolute inset-0 flex flex-col">
              <figure className="flex flex-col flex-1 min-h-0">
                <div className="relative flex-1 min-h-0 overflow-hidden">
                  <Image
                    src="/images/hero.jpeg"
                    alt="Icaro Andrade, nutricionista"
                    fill
                    priority
                    sizes="(min-width: 1024px) 480px, 1px"
                    className="object-contain object-center"
                  />
                </div>
                <figcaption className="mt-3 flex items-start gap-3 font-display text-sm font-bold uppercase tracking-[0.12em] leading-snug">
                  <span className="block w-6 h-px bg-cyan mt-2.5 shrink-0" />
                  <span>Icaro Andrade</span>
                </figcaption>
              </figure>

              <dl className="mt-4 grid grid-cols-3 gap-px bg-white/10 text-white">
                {credentials.map((item) => (
                  <div key={item.value} className="bg-surface px-4 py-4">
                    <dt className="font-display text-xl font-extrabold leading-none text-cyan">{item.value}</dt>
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
