import Image from 'next/image';
import NewTabHint from '@/components/common/NewTabHint';
import { MSG_OBJECTIVES, whatsappUrl } from '@/lib/contact';

const credentials = [
  { value: 'CRN-6 37419', label: 'Nutricionista' },
  { value: 'ACSM', label: 'Nutrição esportiva' },
  { value: 'Professor', label: 'USP · UNIT · IBRAS · Uniguaçu' },
];

// Cartão de credenciais sobreposto à foto (vidro escuro com filete ciano).
function CredentialsCard({ className = '' }: { className?: string }) {
  return (
    <div
      className={`absolute z-10 border border-white/15 border-l-2 border-l-cyan bg-canvas/75 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.5)] ${className}`}
    >
      <p className="flex items-center gap-2 px-4 pt-3 pb-2 font-display text-xs font-bold uppercase tracking-[0.14em]">
        <span className="block w-4 h-px bg-cyan" aria-hidden="true" />
        Icaro Andrade
      </p>
      <dl className="divide-y divide-white/10">
        {credentials.map((item) => (
          <div key={item.value} className="px-4 py-2.5">
            <dt className="font-display text-lg lg:text-xl font-extrabold leading-none text-cyan">{item.value}</dt>
            <dd className="mt-1 text-[11px] uppercase tracking-[0.1em] leading-snug text-white/75">{item.label}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

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
              <figure className="relative mb-6">
                <div className="relative w-[60%] aspect-[2/3]">
                  <Image
                    src="/images/hero.jpeg"
                    alt="Icaro Andrade, nutricionista"
                    fill
                    loading="eager"
                    sizes="(min-width: 1024px) 1px, 60vw"
                    className="object-cover"
                  />
                </div>
                <CredentialsCard className="right-0 bottom-6 w-[52%]" />
              </figure>
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

          {/* Desktop: a foto ocupa a altura da coluna do texto, sem cortes (proporção 2:3),
              e o cartão de credenciais fica sobreposto ao canto inferior esquerdo */}
          <div className="hidden lg:block lg:col-span-5 relative">
            <figure className="absolute inset-y-0 right-0 h-full max-w-full aspect-[2/3]">
              <Image
                src="/images/hero.jpeg"
                alt="Icaro Andrade, nutricionista"
                fill
                priority
                sizes="(min-width: 1024px) 480px, 1px"
                className="object-cover"
              />
              <CredentialsCard className="-left-12 bottom-10 w-60" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
