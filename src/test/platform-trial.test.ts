import { describe, expect, it } from "vitest";
import {
  CRM_CONFIG,
  getOfficialWhatsAppTrialUrl,
} from "@/config/platform";
import { buildTrialWhatsAppMessage, type TrialFormData } from "@/components/landing/TrialModal";

describe("NC Performance Suite — Phase 2 WhatsApp & Conversion Validation", () => {
  it("configures the exact official WhatsApp number and automatic message", () => {
    expect(CRM_CONFIG.officialWhatsAppNumber).toBe("5521971625597");
    expect(CRM_CONFIG.formattedWhatsAppNumber).toBe("(21) 97162-5597");
    expect(CRM_CONFIG.officialTrialMessage).toBe(
      "Olá! Tenho uma loja de veículos e conheci o NC Performance Suite pelo site. Quero solicitar meu acesso gratuito de 7 dias para testar o CRM com inteligência artificial. Como faço para começar?"
    );
  });

  it("generates the exact official WhatsApp trial URL", () => {
    const expectedUrl =
      "https://wa.me/5521971625597?text=Ol%C3%A1%21%20Tenho%20uma%20loja%20de%20ve%C3%ADculos%20e%20conheci%20o%20NC%20Performance%20Suite%20pelo%20site.%20Quero%20solicitar%20meu%20acesso%20gratuito%20de%207%20dias%20para%20testar%20o%20CRM%20com%20intelig%C3%AAncia%20artificial.%20Como%20fa%C3%A7o%20para%20come%C3%A7ar%3F";

    const actualUrl = getOfficialWhatsAppTrialUrl();
    expect(actualUrl).toBe(expectedUrl);
  });

  it("builds custom trial request WhatsApp message when form data is supplied", () => {
    const trialData: TrialFormData = {
      name: "Renato Albuquerque",
      storeName: "Auto Prime Veículos",
      whatsapp: "(11) 99876-5432",
      stockRange: "21 a 50 veículos",
    };

    const message = buildTrialWhatsAppMessage(trialData);

    expect(message).toContain("NC Performance Suite");
    expect(message).toContain("teste gratuito de 7 dias");
    expect(message).toContain("👤 *Responsável:* Renato Albuquerque");
    expect(message).toContain("🏢 *Loja / Revenda:* Auto Prime Veículos");
  });

  it("defaults to official trial message when no custom data is given", () => {
    const message = buildTrialWhatsAppMessage();
    expect(message).toBe(CRM_CONFIG.officialTrialMessage);
  });
});
