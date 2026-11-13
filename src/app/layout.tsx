import type { Metadata, Viewport } from 'next';
import { Barlow, Barlow_Condensed } from 'next/font/google';
import Analytics from '@/components/common/Analytics';
import { MAPS_SEARCH_URL, WHATSAPP_NUMBER } from '@/lib/contact';
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

const TITLE = 'Icaro Andrade | Nutricionista em Maceió';
const DESCRIPTION =
  'Acompanhamento nutricional personalizado, baseado em ciência e avaliação da composição corporal pela metodologia ISAK. Atendimento presencial na Pajuçara, em Maceió.';

export const metadata: Metadata = {
  metadataBase: new URL('https://nutricaolandingpage.vercel.app'),
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: '/',
    siteName: 'Icaro Andrade',
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Icaro Andrade, nutricionista em Maceió (CRN-6 37419)',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/og-image.jpg'],
  },
};

// Dados estruturados (schema.org) para o Google entender o negócio local.
// Horário de atendimento não está no site, por isso fica de fora até ser informado.
const SITE_URL = 'https://nutricaolandingpage.vercel.app';
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  '@id': `${SITE_URL}/#negocio`,
  name: 'Icaro Andrade | Nutricionista',
  description: DESCRIPTION,
  url: SITE_URL,
  image: `${SITE_URL}/og-image.jpg`,
  telephone: `+${WHATSAPP_NUMBER}`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Rua Jangadeiros Alagoanos, 1481 (Academia Gaviões)',
    addressLocality: 'Maceió',
    addressRegion: 'AL',
    postalCode: '57030-000',
    addressCountry: 'BR',
  },
  areaServed: { '@type': 'City', name: 'Maceió' },
  hasMap: MAPS_SEARCH_URL,
  founder: {
    '@type': 'Person',
    name: 'Icaro Andrade',
    jobTitle: 'Nutricionista',
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Registro profissional',
      name: 'CRN-6 37419',
      recognizedBy: { '@type': 'Organization', name: 'Conselho Regional de Nutricionistas da 6ª Região' },
    },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#101719',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${barlow.variable} ${barlowCondensed.variable}`}>
      <body className="bg-canvas text-fg">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
