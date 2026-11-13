// Envia um evento ao Google Analytics, se ele estiver ativo (NEXT_PUBLIC_GA_ID).
export function track(event: string, params: Record<string, string | number> = {}) {
  if (typeof window === 'undefined') return;
  window.gtag?.('event', event, params);
}
