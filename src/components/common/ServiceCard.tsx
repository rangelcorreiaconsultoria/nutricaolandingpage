import Link from 'next/link';
import { ReactNode } from 'react';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  href: string;
  linkText: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
  href,
  linkText,
}: ServiceCardProps) {
  return (
    <Link href={href}>
      <div className="bg-white p-12 border border-brand-gray/30 rounded-2xl flex flex-col group h-full transition-all duration-300 hover:bg-brand-dark-gray hover:text-white hover:border-brand-dark-gray hover:shadow-lg cursor-pointer">
        <div className="mb-12 text-4xl">{icon}</div>
        <h3 className="text-3xl font-bold mb-6 group-hover:text-white transition-colors">
          {title}
        </h3>
        <p className="text-sm opacity-60 mb-12 flex-grow leading-relaxed group-hover:opacity-80 transition-opacity">
          {description}
        </p>
        <div className="text-xs font-black uppercase tracking-widest flex items-center gap-3 transition-all group-hover:gap-4">
          {linkText}
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-brand-orange"
          >
            <path d="M7 7h10v10" />
            <path d="M7 17 17 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
