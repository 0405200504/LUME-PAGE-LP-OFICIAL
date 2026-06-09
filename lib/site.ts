/**
 * Configuração central da Lume.
 * Troque o número e os links aqui — todos os CTAs usam estes valores.
 */

// Mensagem pré-preenchida do WhatsApp
const WHATSAPP_MESSAGE = "Oi, quero minha página da Lume em 24h";

// Número no formato internacional, somente dígitos (ex.: 55 + DDD + número)
export const WHATSAPP_NUMBER = "5500000000000";

export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

export const SITE = {
  brand: "Lume",
  tagline: "presença digital pronta para converter",
  instagram: "https://instagram.com/",
  whatsapp: WHATSAPP_LINK,
  privacy: "#privacidade",
};
