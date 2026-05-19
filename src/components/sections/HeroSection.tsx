'use client';

export default function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-[85vh] flex items-center pt-44 pb-12 md:pt-44 md:pb-12 overflow-hidden bg-brand-gray">
      {/* Background Gradient Circle */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl" />

      <div className="container grid md:grid-cols-2 gap-12 items-center relative z-10 w-full">
        {/* Left Content */}
        <div>
          <p className="section-label mb-6">Alta Performance</p>
          <h1 className="mb-8 md:mt-6">
            Nutrição de <span className="highlight">Elite.</span>
          </h1>
          <p className="text-base text-text-secondary mb-10 max-w-sm leading-relaxed">
            Estratégias metabólicas baseadas em evidência. Resultados reais sem dietas restritivas.
          </p>
          <a href="#contato" className="btn btn-primary">
            Agendar Consulta
          </a>
        </div>

        {/* Right - Video */}
        <div className="relative w-full">
          <div className="aspect-[4/5] rounded-apple overflow-hidden shadow-2xl relative bg-brand-dark-gray">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover opacity-80"
              poster="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop"
            >
              <source
                src="https://videos.pexels.com/video-files/3124158/3124158-sd_640_360_24fps.mp4"
                type="video/mp4"
              />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark-gray/60 via-transparent to-transparent" />
            <div className="absolute bottom-10 left-10 z-20">
              <div className="flex items-center gap-3">
                <div className="w-12 h-1 bg-brand-orange" />
                <span className="text-white text-xs font-black uppercase tracking-widest">
                  Propósito & Ciência
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
