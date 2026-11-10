interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
}

export default function ServiceCard({ number, title, description }: ServiceCardProps) {
  return (
    <div className="bg-white p-10 border-t-2 border-ink flex flex-col h-full group hover:border-cyan transition-colors">
      <span className="font-display text-6xl font-extrabold text-cyan leading-none mb-10">
        {number}
      </span>
      <h3 className="mb-5">{title}</h3>
      <p className="text-sm text-text-secondary leading-relaxed">{description}</p>
    </div>
  );
}
