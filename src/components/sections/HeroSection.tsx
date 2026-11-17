import Tilt3D from '@/components/common/Tilt3D';
import HeroPhoto from '@/components/common/HeroPhoto';
import NewTabHint from '@/components/common/NewTabHint';
import { MSG_OBJECTIVES, whatsappUrl } from '@/lib/contact';

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
    <section id="inicio" className="relative overflow-hidden">
      <div className="container pt-24 pb-20 md:pt-36 md:pb-28">
        <div className="grid lg:grid-cols-12 gap-x-12 gap-y-12 items-stretch">
          <div className="lg:col-span-7">
            <h1 className="mb-8 lg:mb-10 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">
              Você treina há anos. Até quando vai continuar sem{' '}
              <span className="underline-cyan">o corpo que deseja?</span>
            </h1>

            {/* Celular: foto em largura total com as credenciais à direita, e o CTA logo abaixo */}
            <div className="lg:hidden mb-10">
              <div className="relative w-full aspect-[4/5] mb-6">
                <HeroPhoto sizes="(min-width: 1024px) 1px, 100vw" />
              </div>
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

            <CtaButton className="hidden lg:inline-flex" />
          </div>

          {/* Desktop: a foto ocupa a altura da coluna do texto, como um card 3D que
              inclina com o mouse, com as credenciais flutuando à frente */}
          <div className="hidden lg:block lg:col-span-5 relative">
            <Tilt3D max={10} className="absolute inset-y-0 right-0 h-full max-w-full aspect-[4/5]">
              <HeroPhoto priority sizes="(min-width: 1024px) 480px, 1px" />
            </Tilt3D>
          </div>
        </div>
      </div>
    </section>
  );
}
