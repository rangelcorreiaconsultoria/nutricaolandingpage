export const WHATSAPP_NUMBER = '5582998215082';
export const WHATSAPP_DISPLAY = '+55 82 99821-5082';

export const ADDRESS = 'Rua Jangadeiros Alagoanos, 1481, Maceió – AL, 57030-000';

export const MAPS_SEARCH_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `Academia Gaviões, ${ADDRESS}`
)}`;

export const MAPS_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(
  `Academia Gaviões, ${ADDRESS}`
)}&output=embed`;

export function whatsappUrl(message: string): string {
  return `https://api.whatsapp.com/send/?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}`;
}

export const MSG_GENERAL = 'Olá, Ícaro! Vim pelo seu site e gostaria de conversar.';
export const MSG_OBJECTIVES = 'Olá, Ícaro! Quero conversar sobre meus objetivos.';
export const MSG_AVAILABILITY = 'Olá, Ícaro! Gostaria de verificar a disponibilidade de agenda.';
