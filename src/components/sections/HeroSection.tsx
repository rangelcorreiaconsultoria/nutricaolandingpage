import Image from 'next/image';
import NewTabHint from '@/components/common/NewTabHint';
import { MSG_OBJECTIVES, whatsappUrl } from '@/lib/contact';

const credentials = [
  { value: 'CRN-6 37419', label: 'Nutricionista' },
  { value: 'ACSM', label: 'Nutrição esportiva' },
  { value: 'Professor', label: 'USP · UNIT · IBRAS · Uniguaçu' },
];

// Credenciais como três selos separados, em linha na parte de baixo da foto,
// sobre um degradê escuro que integra os selos à imagem.
function CredentialTags({ className = '' }: { className?: string }) {
  return (
    <>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-canvas/95 via-canvas/60 to-transparent pointer-events-none"
      />
      <dl className={'absolute z-10 grid grid-cols-3 gap-1.5 lg:gap-2 ' + className}>
        {credentials.map((item) => (
          <div
            key={item.value}
            className="border border-white/15 border-l-2 border-l-cyan bg-canvas/80 backdrop-blur-md px-2 py-1.5 lg:px-3 lg:py-2 shadow-[0_12px_30px_rgba(0,0,0,0.45)]"
          >
            <dt className="font-display text-[13px] lg:text-sm font-extrabold leading-none text-cyan">{item.value}</dt>
            <dd className="mt-1 text-[9px] lg:text-[10px] uppercase tracking-[0.08em] leading-snug text-white/75">{item.label}</dd>
          </div>
        ))}
      </dl>
    </>
  );
}

function CtaButton({ className = '', heroCta = false }: { className?: string; heroCta?: boolean }) {
  return (
    <a
      data-hero-cta={heroCta || undefined}
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

            {/* Celular: foto em largura total com as credenciais dentro dela, e o CTA logo abaixo */}
            <div className="lg:hidden mb-10">
              <figure className="relative mb-6">
                <div className="relative w-full aspect-[2/3]">
                  <Image
                    src="/images/hero.jpeg"
                    alt="Icaro Andrade, nutricionista"
                    fill
                    loading="eager"
                    sizes="(min-width: 1024px) 1px, 100vw"
                    className="object-cover"
                  />
                </div>
                <CredentialTags className="inset-x-2 bottom-2" />
              </figure>
              <CtaButton heroCta />
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
              com as credenciais em linha na parte de baixo */}
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
              <CredentialTags className="inset-x-3 bottom-3" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
