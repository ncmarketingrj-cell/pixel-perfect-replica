import { describe, expect, it } from "vitest";
import { buildWhatsAppMessage, type FormData } from "@/components/landing/DiagnosticModal";

describe("Diagnostic Form & WhatsApp Integration", () => {
  const completeData: FormData = {
    name: "Carlos Eduardo",
    email: "carlos@superfastveiculos.com.br",
    whatsapp: "(21) 98765-4321",
    instagram: "@superfastveiculos",
    sdr: "Sim",
    storeRelationship: "Sim, sou proprietário.",
    challenge: "Converter leads em vendas.",
    stock: "De 30 a 50.",
    monthlySales: "De 20 a 35.",
    adsInvestment: "R$ 3.001 a R$ 5.000.",
    timeline: "Imediatamente, preciso de ajuda.",
    notes: "Preciso melhorar a qualificação dos leads para financiamento.",
  };

  it("builds correct formatted WhatsApp message with all 12 fields", () => {
    const message = buildWhatsAppMessage(completeData);

    expect(message).toContain("Olá, equipe NC Agência! 🚗");
    expect(message).toContain("Quero solicitar meu diagnóstico estratégico gratuito.");
    expect(message).toContain("👤 Nome: Carlos Eduardo");
    expect(message).toContain("📧 E-mail: carlos@superfastveiculos.com.br");
    expect(message).toContain("📱 WhatsApp: (21) 98765-4321");
    expect(message).toContain("📸 Instagram: @superfastveiculos");
    expect(message).toContain("🏢 Relação com a loja: Sim, sou proprietário.");
    expect(message).toContain("👥 Possui SDR: Sim");
    expect(message).toContain("🎯 Principal desafio: Converter leads em vendas.");
    expect(message).toContain("🚘 Estoque: De 30 a 50.");
    expect(message).toContain("📊 Média de vendas mensal: De 20 a 35.");
    expect(message).toContain("💰 Investimento em anúncios: R$ 3.001 a R$ 5.000.");
    expect(message).toContain("⏰ Prazo: Imediatamente, preciso de ajuda.");
    expect(message).toContain("📝 Observações: Preciso melhorar a qualificação dos leads para financiamento.");
    expect(message).toContain("Gostaria de conversar com a equipe NC sobre como melhorar os resultados da minha loja.");
  });

  it("omits empty optional fields (Instagram and Observações)", () => {
    const dataWithoutOptionals: FormData = {
      ...completeData,
      instagram: "",
      notes: "",
    };

    const message = buildWhatsAppMessage(dataWithoutOptionals);

    expect(message).not.toContain("📸 Instagram");
    expect(message).not.toContain("📝 Observações");
    expect(message).toContain("👤 Nome: Carlos Eduardo");
  });

  it("formats WhatsApp URL properly with encoded text and target number 5521970009239", () => {
    const message = buildWhatsAppMessage(completeData);
    const encoded = encodeURIComponent(message);
    const targetUrl = `https://wa.me/5521970009239?text=${encoded}`;

    expect(targetUrl).toContain("https://wa.me/5521970009239?text=");
    expect(decodeURIComponent(targetUrl)).toContain("Olá, equipe NC Agência! 🚗");
  });
});
