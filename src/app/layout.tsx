import type { Metadata, Viewport } from 'next';
import { Barlow, Barlow_Condensed } from 'next/font/google';
import './globals.css';

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-barlow',
});

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-barlow-condensed',
});

export const metadata: Metadata = {
  title: 'Ícaro Andrade | Nutricionista em Maceió',
  description:
    'Acompanhamento nutricional individualizado, baseado em ciência e avaliação da composição corporal pela metodologia ISAK. Atendimento presencial na Pajuçara, em Maceió.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#00B9CF',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${barlow.variable} ${barlowCondensed.variable}`}>
      <body className="bg-paper text-ink">{children}</body>
    </html>
  );
}
