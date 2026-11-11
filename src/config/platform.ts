/**
 * Configuração central da plataforma NC CRM
 * Desenvolvido por NC Agência
 */

export const CRM_CONFIG = {
  productName: "NC CRM",
  signature: "by NC Agência",
  category: "CRM Automotivo com Inteligência Artificial",
  tagline: "Inteligência comercial desenvolvida para a realidade de quem vende veículos.",
  trialDays: 7,

  /**
   * Central de Atendimento e Vendas no WhatsApp Oficial
   */
  officialWhatsAppNumber: "5521971625597",
  formattedWhatsAppNumber: "(21) 97162-5597",

  /**
   * Mensagem automática oficial para ativação do teste gratuito de 7 dias
   */
  officialTrialMessage:
    "Olá! Tenho uma loja de veículos e conheci o NC CRM pelo site. Quero solicitar meu acesso gratuito de 7 dias para testar o CRM com inteligência artificial. Como faço para começar?",

  /**
   * URL de cadastro / autenticação da plataforma (opcional para integrações futuras)
   */
  trialSignupUrl: null as string | null,

  /**
   * Metadados institucionais confirmados
   */
  experienceYears: "10 Anos",
  storesServed: "+100 Lojas",
  founderName: "Victoria Maia",
  founderRole: "Fundadora & Estrategista Comercial",
};

/**
 * Retorna a URL oficial de ativação do teste de 7 dias no WhatsApp utilizando encodeURIComponent
 * Com percent-encoding completo para compatibilidade universal
 */
export function getOfficialWhatsAppTrialUrl(): string {
  const encodedText = encodeURIComponent(CRM_CONFIG.officialTrialMessage).replace(/!/g, "%21");
  return `https://wa.me/${CRM_CONFIG.officialWhatsAppNumber}?text=${encodedText}`;
}

/**
 * Abre o WhatsApp oficial de ativação em nova aba com segurança
 */
export function openOfficialWhatsAppTrial(): void {
  const url = getOfficialWhatsAppTrialUrl();
  if (typeof window !== "undefined") {
    window.open(url, "_blank", "noopener,noreferrer");
  }
}
