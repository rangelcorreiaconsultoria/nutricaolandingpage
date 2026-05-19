'use client';

const publicItems = [
  { icon: '🎯', label: 'Corredores' },
  { icon: '🏆', label: 'Atletas de Hyrox' },
  { icon: '⚡', label: 'Triatletas' },
  { icon: '💪', label: 'Praticantes de Musculação' },
  { icon: '🛡️', label: 'Lutadores' },
  { icon: '🔥', label: 'Atletas de Crossfit' },
];

export default function PublicSection() {
  return (
    <section id="publico" className="md:py-24 py-16 bg-white">
      <div className="container">
        <div className="max-w-2xl mb-16">
          <p className="section-label mb-4">Público</p>
          <h2>Experiência comprovada em diversos cenários esportivos.</h2>
        </div>

        {/* Grid de Públicos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {publicItems.map((item, index) => (
            <div
              key={index}
              className="bg-brand-gray p-6 rounded-apple border border-transparent hover:border-brand-orange/20 transition-all group flex flex-col items-center text-center"
            >
              <span className="text-2xl mb-4 block group-hover:scale-110 transition-transform">
                {item.icon}
              </span>
              <h3 className="text-xs font-black uppercase tracking-widest text-brand-dark-gray">
                {item.label}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
