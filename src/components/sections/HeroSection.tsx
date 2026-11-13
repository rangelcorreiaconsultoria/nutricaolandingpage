import Image from 'next/image';
import NewTabHint from '@/components/common/NewTabHint';
import { MSG_OBJECTIVES, whatsappUrl } from '@/lib/contact';

const credentials = [
  { value: 'ACSM', label: 'Nutrição esportiva' },
  { value: 'Professor', label: 'USP · UNIT · IBRAS · Uniguaçu' },
];

const PHOTO_SIZES = '(min-width: 1024px) 560px, 100vw';

// Foto com o nome gigante: a foto original (com fundo) é escurecida na faixa do nome,
// e a versão recortada, exatamente alinhada por cima, deixa o Icaro na frente das letras.
function HeroVisual() {
  return (
    <div className="relative aspect-[4/5] overflow-hidden">
      <Image
        src="/images/hero.jpeg"
        alt="Icaro Andrade, nutricionista"
        fill
        priority
        sizes={PHOTO_SIZES}
        className="object-cover object-top"
      />
      {/* Esmaece o fundo onde fica o nome */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[55%] bg-gradient-to-b from-canvas via-canvas/80 to-transparent"
      />
      <svg aria-hidden="true" viewBox="0 0 100 34" className="absolute inset-x-0 top-[13%] w-full text-cyan">
        <text
          x="50"
          y="30"
          textAnchor="middle"
          textLength="96"
          lengthAdjust="spacingAndGlyphs"
          fill="currentColor"
          className="font-display"
          style={{ fontSize: 38, fontWeight: 800 }}
        >
          ICARO
        </text>
      </svg>
      <Image
        src="/images/hero-recorte.webp"
        alt=""
        fill
        priority
        sizes={PHOTO_SIZES}
        className="object-cover object-top"
      />
      {/* Desktop: esmaece a borda esquerda, do lado do texto */}
      <div
        aria-hidden="true"
        className="hidden lg:block absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-canvas to-transparent"
      />
      {/* Esmaece a base da foto para o título entrar por cima */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-canvas via-canvas/70 to-transparent"
      />
    </div>
  );
}

export default function HeroSection() {
  return (
    <section id="inicio" className="relative bg-canvas overflow-hidden">
      <div className="lg:container lg:pt-28 lg:pb-24">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-center">
          {/* No celular a foto vem primeiro, em largura total, logo abaixo do cabeçalho */}
          <div className="pt-[72px] lg:pt-0 lg:col-span-6 lg:col-start-7 lg:row-start-1">
            <HeroVisual />
          </div>

          <div className="container lg:max-w-none lg:px-0 relative z-10 -mt-24 sm:-mt-32 lg:mt-0 pb-16 lg:pb-0 lg:col-span-6 lg:row-start-1">
            <p className="mb-5 font-display text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-cyan">
              Nutricionista · CRN-6 37419 · Pajuçara, Maceió
            </p>
            <h1 className="mb-6 text-3xl leading-[1.05] sm:text-4xl xl:text-5xl">
              Você treina há anos. Até quando vai continuar sem{' '}
              <span className="box-decoration-clone bg-cyan text-ink px-1.5">o&nbsp;corpo que deseja?</span>
            </h1>
            <p className="mb-8 max-w-xl text-lg text-text-secondary leading-relaxed">
              Talvez o que esteja faltando não seja mais esforço. Seja uma estratégia nutricional feita sob medida para você.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                data-hero-cta
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
              <a href="#icaro" className="btn btn-secondary w-full sm:w-auto">
                Conhecer o Icaro
              </a>
            </div>

            <dl className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
              {credentials.map((item) => (
                <div key={item.value} className="border-l-2 border-cyan pl-3">
                  <dt className="font-display text-base font-extrabold leading-none text-fg">{item.value}</dt>
                  <dd className="mt-1 text-[11px] uppercase tracking-[0.1em] text-white/70">{item.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
