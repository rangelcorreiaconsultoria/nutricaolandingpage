'use client';

export default function ProgramSection() {
  return (
    <section className="md:py-24 py-16 bg-white relative">
      <div className="container">
        <div className="relative rounded-4xl md:rounded-5xl overflow-hidden bg-brand-dark-gray min-h-96 md:min-h-96 flex items-center shadow-2xl">
          <div className="relative z-10 p-7 md:p-24 max-w-4xl w-full">
            <span className="inline-block px-5 py-2 bg-brand-orange text-white text-xs md:text-sm font-black uppercase tracking-widest rounded-full md:mb-8 mb-4 mt-6 md:mt-0">
              EM BREVE
            </span>

            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-white leading-tight">
              Programa Esportivo Completo
            </h2>

            <p className="text-white/60 text-lg mb-10 leading-relaxed max-w-2xl">
              Um ecossistema integrado para a sua melhor versão. Indo além da nutrição tradicional, conectamos pilares essenciais.
            </p>

            {/* Program Items */}
            <div className="grid sm:grid-cols-2 gap-6 md:mb-12 mb-8">
              {['🍎 Nutrição', '💊 Suplementação', '🧠 Psicologia esportiva', '📈 Estratégia integrada'].map(
                (item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors"
                  >
                    <span className="font-bold text-white/80">{item}</span>
                  </div>
                )
              )}
            </div>

            <a
              href="https://api.whatsapp.com/send/?phone=5582982150582&text=Ol%C3%A1%2C+tenho+interesse+em+entrar+na+lista+de+espera+do+Programa+Esportivo+Completo."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block md:px-10 py-5 bg-white text-brand-dark-gray font-black uppercase tracking-widest md:w-fit w-full text-center text-xs md:text-sm rounded-full hover:shadow-lg transition-shadow mb-4"
            >
              Entrar na Lista de Espera
            </a>
          </div>

          {/* Animated Circle (Desktop only) */}
          <div className="hidden lg:block absolute right-20 bottom-20 z-10">
            <div className="w-64 h-64 border-2 border-brand-orange/30 rounded-full flex items-center justify-center animate-pulse-soft">
              <div className="w-48 h-48 border-2 border-white/10 border-dashed rounded-full flex items-center justify-center">
                <div className="w-12 h-12 bg-brand-orange rounded-full" />
              </div>
            </div>
            <p className="text-center mt-6 font-bold text-brand-orange tracking-widest text-sm">
              PROGRAMA EXCLUSIVO
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
