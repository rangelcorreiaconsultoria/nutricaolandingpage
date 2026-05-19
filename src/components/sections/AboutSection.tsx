'use client';

export default function AboutSection() {
  return (
    <section id="sobre" className="md:py-24 py-16 bg-white">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <p className="section-label">A Proposta</p>
            <h2 className="mt-0">
              Sua melhor versão sem <span className="md:inline hidden"><br /></span>abrir mão do que importa.
            </h2>
            <div className="space-y-6 text-text-secondary text-lg leading-relaxed max-w-lg">
              <p>
                Elimine o excesso sem privações desnecessárias. Nossa abordagem foca no equilíbrio metabólico e na eficácia biológica.
              </p>
              <p>
                Pedro Lucena combina a precisão da ciência esportiva com um acompanhamento próximo e humano, desenhado para rotinas de alto nível.
              </p>
            </div>

            {/* Benefits */}
            <div className="inline-flex flex-col gap-4">
              {[
                'Atendimento Presencial em Recife',
                'Consultoria Online Brasil',
              ].map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-brand-orange rounded-full" />
                  <span className="text-xs font-black uppercase tracking-widest">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Image */}
          <div className="relative">
            <div className="aspect-square rounded-apple overflow-hidden shadow-2xl relative group">
              <img
                alt="Pedro Lucena - Nutricionista Especialista"
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=687&auto=format&fit=crop"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-brand-orange/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-brand-gray hidden sm:block">
              <p className="text-sm font-black text-brand-orange uppercase tracking-widest mb-1">
                Resultado
              </p>
              <p className="text-xl font-bold text-brand-dark-gray">Foco em Performance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
