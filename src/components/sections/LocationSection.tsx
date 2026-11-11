import NewTabHint from '@/components/common/NewTabHint';
import PhotoSlot from '@/components/common/PhotoSlot';
import { ADDRESS, MAPS_EMBED_URL, MAPS_SEARCH_URL } from '@/lib/contact';

export default function LocationSection() {
  return (
    <section id="local" className="md:py-28 py-20 bg-canvas">
      <div className="container">
        <p className="section-label mb-8">O local</p>

        <div className="grid lg:grid-cols-12 gap-x-12 gap-y-8 items-start mb-14">
          <h2 className="lg:col-span-7">
            Um espaço pensado para cuidar da{' '}
            <span className="highlight">sua evolução.</span>
          </h2>
          <div className="lg:col-span-5 space-y-5 text-lg text-text-secondary leading-relaxed">
            <p>
              Seu atendimento acontece presencialmente na Academia Gaviões, na Pajuçara, em Maceió.
            </p>
            <p>
              Um ambiente dedicado à avaliação, ao planejamento nutricional e ao acompanhamento sob medida.
            </p>
            <p className="border-l-2 border-cyan pl-6 text-fg font-medium">
              Aqui, cada consulta é uma oportunidade de compreender sua evolução e definir os próximos passos.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 items-stretch">
          <div className="lg:col-span-7 border border-line min-h-80">
            <iframe
              src={MAPS_EMBED_URL}
              title="Mapa: Academia Gaviões, Pajuçara, Maceió"
              className="block w-full h-80 lg:h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="lg:col-span-5 bg-surface p-8 md:p-10 flex flex-col justify-between gap-8">
            <div>
              <p className="font-display text-base font-bold uppercase tracking-[0.2em] mb-4">Endereço</p>
              <p className="font-display text-2xl font-semibold uppercase tracking-tight leading-snug mb-2">
                Academia Gaviões
              </p>
              <address className="not-italic text-text-secondary leading-relaxed">
                {ADDRESS}
              </address>
            </div>
            <a
              href={MAPS_SEARCH_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary w-full"
            >
              Abrir localização
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M7 17 17 7M8 7h9v9" />
              </svg>
              <NewTabHint />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <PhotoSlot aspect="aspect-[4/3]" alt="Foto do consultório" />
          <PhotoSlot aspect="aspect-[4/3]" alt="Foto do espaço de avaliação" />
          <PhotoSlot aspect="aspect-[4/3]" alt="Foto da recepção" className="hidden md:block" />
          <PhotoSlot aspect="aspect-[4/3]" alt="Foto da fachada" className="hidden md:block" />
        </div>
      </div>
    </section>
  );
}
