import type { Metadata, Viewport } from 'next';
import { Inter, Barlow_Condensed } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
});

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-barlow-condensed',
});

export const metadata: Metadata = {
  title: 'Antropometria na Prática | Da Medição à Interpretação',
  description:
    'Curso de avaliação antropométrica com padronização ISAK para nutricionistas e estudantes. Com Ícaro Andrade.',
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
    <html lang="pt-BR" className={`${inter.variable} ${barlowCondensed.variable}`}>
      <body className="bg-paper text-ink">{children}</body>
    </html>
  );
}
