'use client';

import Script from 'next/script';
import { useEffect } from 'react';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const rawId = process.env.NEXT_PUBLIC_GA_ID ?? '';
const GA_ID = /^G-[A-Z0-9]+$/.test(rawId) ? rawId : '';

function sectionOf(link: Element): string {
  const section = link.closest('section');
  if (section?.id) return section.id;
  if (link.closest('header')) return 'header';
  if (link.closest('footer')) return 'footer';
  return 'flutuante';
}

export default function Analytics() {
  useEffect(() => {
    if (!GA_ID) return;

    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element).closest('a');
      const href = link?.getAttribute('href') ?? '';
      if (!link || !href.includes('api.whatsapp.com')) return;

      window.gtag?.('event', 'whatsapp_click', {
        secao: sectionOf(link),
        texto: (link.textContent ?? '').trim().slice(0, 60),
        transport_type: 'beacon',
      });
    };

    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  if (!GA_ID) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="ga-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${GA_ID}');`}
      </Script>
    </>
  );
}
