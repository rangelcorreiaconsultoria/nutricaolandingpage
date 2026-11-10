export default function ProgramSection() {
  return (
    <section id="professor" className="md:py-28 py-20 bg-white">
      <div className="container">
        <div className="relative bg-ink text-white overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-2 bg-cyan" />
          <div className="relative z-10 p-8 md:p-20 max-w-4xl">
            <p className="flex items-center gap-3 font-display text-base font-bold uppercase tracking-[0.2em] text-cyan mb-8">
              <span className="block w-10 h-px bg-cyan" />
              Professor
            </p>
            <h2 className="text-white mb-8">
              Ícaro <span className="text-cyan">Andrade</span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl">
              Formação técnica, prática e baseada em padronização ISAK, com produção audiovisual de qualidade cinematográfica para você acompanhar cada procedimento com clareza.
            </p>
          </div>

          <svg
            className="hidden lg:block absolute right-16 top-1/2 -translate-y-1/2"
            width="260"
            height="260"
            viewBox="0 0 260 260"
            fill="none"
            aria-hidden="true"
          >
            <circle cx="130" cy="130" r="110" stroke="#00B9CF" strokeWidth="1.5" />
            <circle cx="130" cy="130" r="60" stroke="#fff" strokeOpacity="0.3" strokeDasharray="4 5" />
            <line x1="10" y1="130" x2="250" y2="130" stroke="#fff" strokeOpacity="0.4" />
            <line x1="130" y1="10" x2="130" y2="250" stroke="#fff" strokeOpacity="0.4" />
            <circle cx="130" cy="130" r="8" fill="#00B9CF" />
          </svg>
        </div>
      </div>
    </section>
  );
}
