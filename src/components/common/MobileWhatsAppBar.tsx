'use client';

import { useEffect, useState } from 'react';
import NewTabHint from '@/components/common/NewTabHint';
import { MSG_OBJECTIVES, whatsappUrl } from '@/lib/contact';

// Botão fixo de WhatsApp no celular. Aparece sempre que o botão do hero não está na tela,
// para nunca ficar sem um CTA visível e nunca mostrar dois ao mesmo tempo.
export default function MobileWhatsAppBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const heroCta = document.querySelector('[data-hero-cta]');
    if (!heroCta || typeof IntersectionObserver === 'undefined') return;
    const io = new IntersectionObserver(([entry]) => setVisible(!entry.isIntersecting));
    io.observe(heroCta);
    return () => io.disconnect();
  }, []);

  return (
    <>
      {/* Espaço no fim da página para a barra não cobrir o rodapé */}
      <div aria-hidden="true" className="h-20 lg:hidden" />
      <div
        className={`fixed inset-x-0 bottom-0 z-40 lg:hidden border-t border-line bg-canvas/95 backdrop-blur px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] transition-transform duration-300 ${
          visible ? 'translate-y-0' : 'translate-y-full'
        }`}
        aria-hidden={!visible}
      >
        <a
          tabIndex={visible ? undefined : -1}
          href={whatsappUrl(MSG_OBJECTIVES)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary w-full !px-4 !py-3 !text-[15px] !tracking-wide"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.9 11.9 0 0 0 4.6 4c1.7.7 2.4.8 3.2.7.5-.1 1.5-.6 1.8-1.2.2-.6.2-1.1.1-1.2l-.4-.3Z" />
          </svg>
          Quero conversar sobre meus objetivos
          <NewTabHint />
        </a>
      </div>
    </>
  );
}
