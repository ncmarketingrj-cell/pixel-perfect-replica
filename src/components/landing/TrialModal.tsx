import React, { createContext, useContext, type ReactNode } from "react";
import {
  CRM_CONFIG,
  getOfficialWhatsAppTrialUrl,
  openOfficialWhatsAppTrial,
} from "@/config/platform";
import { trackEvent, type CtaPosition } from "@/lib/analytics";
import { ChevronRight } from "lucide-react";

interface TrialContextType {
  openTrial: (position?: CtaPosition) => void;
  closeTrial: () => void;
  whatsAppUrl: string;
}

const TrialContext = createContext<TrialContextType>({
  openTrial: () => {},
  closeTrial: () => {},
  whatsAppUrl: getOfficialWhatsAppTrialUrl(),
});

export const useTrial = () => useContext(TrialContext);

export interface TrialFormData {
  name: string;
  storeName: string;
  whatsapp: string;
  stockRange: string;
}

/**
 * Função utilitária mantida para testes automatizados e integrações estruturadas
 */
export function buildTrialWhatsAppMessage(data?: TrialFormData): string {
  if (!data || (!data.name && !data.storeName && !data.whatsapp && !data.stockRange)) {
    return CRM_CONFIG.officialTrialMessage;
  }
  const lines = [
    `Olá, equipe do *${CRM_CONFIG.productName}* (${CRM_CONFIG.signature})! 🚗⚡`,
    `Gostaria de iniciar meu *teste gratuito de ${CRM_CONFIG.trialDays} dias* na plataforma.`,
    "",
    `👤 *Responsável:* ${data.name || "Não informado"}`,
    `🏢 *Loja / Revenda:* ${data.storeName || "Não informada"}`,
    `📱 *WhatsApp:* ${data.whatsapp || "Não informado"}`,
    `🚘 *Veículos no pátio:* ${data.stockRange || "Não informado"}`,
    "",
    "Aguardo as instruções para liberação do acesso e configuração da IA da minha loja.",
  ];
  return lines.join("\n");
}

export function TrialProvider({ children }: { children: ReactNode }) {
  const whatsAppUrl = getOfficialWhatsAppTrialUrl();

  const openTrial = (pos: CtaPosition = "hero") => {
    trackEvent("click_trial_cta", { position: pos });
    openOfficialWhatsAppTrial();
  };

  const closeTrial = () => {};

  return (
    <TrialContext.Provider value={{ openTrial, closeTrial, whatsAppUrl }}>
      {children}
    </TrialContext.Provider>
  );
}

export function TrialCtaButton({
  label = "TESTAR GRÁTIS POR 7 DIAS",
  position = "hero",
  className = "",
  variant = "primary",
}: {
  label?: string;
  position?: CtaPosition;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
}) {
  const { whatsAppUrl, openTrial } = useTrial();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    trackEvent("click_trial_cta", { position });
  };

  if (variant === "outline") {
    return (
      <a
        href={whatsAppUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className={`inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 font-sans text-xs sm:text-sm font-semibold text-white/90 btn-interaction hover:bg-white/10 hover:border-white/30 cursor-pointer ${className}`}
      >
        <span>{label}</span>
      </a>
    );
  }

  if (variant === "secondary") {
    return (
      <a
        href={whatsAppUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className={`inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-[#161616] px-6 font-sans text-xs sm:text-sm font-semibold text-white btn-interaction hover:bg-white/10 hover:border-white/20 cursor-pointer ${className}`}
      >
        <span>{label}</span>
        <ChevronRight className="h-4 w-4 text-primary" />
      </a>
    );
  }

  return (
    <a
      href={whatsAppUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={`inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 font-sans text-xs sm:text-sm font-semibold uppercase tracking-wider text-white shadow-glow btn-interaction hover:bg-primary/90 hover:scale-[1.01] active:scale-[0.99] cursor-pointer ${className}`}
    >
      <span>{label}</span>
      <ChevronRight className="h-4 w-4" />
    </a>
  );
}
