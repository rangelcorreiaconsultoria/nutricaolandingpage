import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Pedro Lucena - Nutricionista | Alta Performance',
  description: 'Nutricionista especialista em alta performance. Estratégias metabólicas baseadas em evidência para atletas de elite.',
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#ff6a00',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&family=Space+Grotesk:wght@600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-brand-dark-gray">
        {children}
      </body>
    </html>
  );
}
