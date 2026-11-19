import Image from 'next/image';
import NewTabHint from '@/components/common/NewTabHint';
import { MSG_OBJECTIVES, whatsappUrl } from '@/lib/contact';

// Hero editorial: fundo limpo, Manrope, foto horizontal sem sobreposições e as
// credenciais em texto logo abaixo dela. No celular tudo fica em uma coluna
// (texto, foto, credenciais, CTA); no desktop o texto e o CTA ficam à
// esquerda e a foto com as credenciais à direita.
export default function HeroSection() {
  return (
    <section id="inicio" className="relative bg-premium-bg font-premium">
      <div className="container pt-[92px] pb-14 md:pt-36 md:pb-24">
        <div className="grid lg:grid-cols-12 lg:gap-x-16 xl:gap-x-20">
          <div className="lg:col-span-6 lg:row-start-1 lg:self-end">
            <p className="flex items-center gap-3 sm:gap-4 mb-4 lg:mb-6 whitespace-nowrap text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.24em] text-premium-accent">
              Nutrição e composição corporal
              <span aria-hidden="true" className="block w-10 min-w-0 shrink h-px bg-premium-accent/70" />
            </p>

            <h1 className="font-premium normal-case font-bold tracking-[-0.025em] leading-[1.12] text-premium-title text-[32px] sm:text-[44px] lg:text-[52px] xl:text-[60px]">
              Você treina há anos. Até quando vai continuar sem o{' '}
              <span className="text-premium-accent">corpo que deseja?</span>
            </h1>

            <p className="mt-4 lg:mt-6 max-w-xl text-[17px] lg:text-xl leading-relaxed text-premium-muted">
              Uma estratégia nutricional individualizada para transformar seu esforço em resultados.
            </p>
          </div>

          <div className="mt-7 lg:mt-0 lg:col-start-7 lg:col-span-6 lg:row-start-1 lg:row-span-2 lg:self-center">
            <div className="relative aspect-[3/2] lg:aspect-[4/3] overflow-hidden rounded-[10px] bg-surface">
              <Image
                src="/images/hero-editorial.webp"
                alt="Icaro Andrade, nutricionista, sentado em um sofá"
                fill
                priority
                sizes="(min-width: 1280px) 580px, (min-width: 1024px) 46vw, calc(100vw - 48px)"
                className="object-cover object-top"
              />
            </div>

            <div className="mt-4 lg:mt-5 border-l-2 border-premium-accent pl-4">
              <p className="text-lg lg:text-xl font-semibold leading-tight text-premium-title">Ícaro Andrade</p>
              <p className="mt-1.5 text-[15px] leading-snug text-premium-muted">
                Nutricionista esportivo · CRN6 37419
              </p>
              <p className="text-[15px] leading-snug text-premium-muted">Professor · USP, UNIT, IBRAS e Uniguaçu</p>
            </div>
          </div>

          <div className="mt-6 lg:mt-10 lg:col-span-6 lg:row-start-2 lg:self-start">
            <a
              data-hero-cta
              href={whatsappUrl(MSG_OBJECTIVES)}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-full sm:w-auto items-center justify-center gap-2.5 sm:gap-3 min-h-[56px] px-4 sm:px-7 py-3.5 rounded-[10px] bg-premium-accent text-premium-bg text-[14px] sm:text-base font-semibold leading-snug text-center transition-colors duration-300 hover:bg-[#3FC3D4]"
            >
              Quero conversar sobre meus objetivos
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="shrink-0 transition-transform duration-300 lg:group-hover:translate-x-1"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
              <NewTabHint />
            </a>

            <p className="mt-4 flex items-center justify-center sm:justify-start gap-2 text-sm text-premium-muted">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="shrink-0"
              >
                <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" />
                <circle cx="12" cy="9.5" r="2.5" />
              </svg>
              Atendimento presencial em Maceió – AL
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
