import React, { useState } from "react";
import {
  Workflow,
  BarChart3,
  Bot,
  ChevronRight,
  Sparkles,
  CheckCircle2,
  Layers,
  Clock,
  Car,
  ShieldCheck,
} from "lucide-react";

import kanbanRealImg from "@/assets/real-crm-kanban.jpg";
import dashboardRealImg from "@/assets/real-crm-dashboard.png";
import conversasRealImg from "@/assets/real-crm-conversas.png";
import { TrialCtaButton } from "./TrialModal";

export type PlatformTabId = "kanban" | "dashboard" | "ia";

export function InteractivePlatformTabs() {
  const [activeTab, setActiveTab] = useState<PlatformTabId>("kanban");

  return (
    <div className="w-full">
      {/* Seletor Interativo das 3 Abas */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => setActiveTab("kanban")}
          className={`flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-xl border px-5 py-3 text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
            activeTab === "kanban"
              ? "border-primary bg-primary/15 text-white shadow-glow"
              : "border-white/10 bg-[#121214] text-white/70 hover:bg-white/5 hover:text-white"
          }`}
        >
          <Workflow className={`h-4 w-4 ${activeTab === "kanban" ? "text-primary" : "text-white/50"}`} />
          <span>Funil de vendas</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("dashboard")}
          className={`flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-xl border px-5 py-3 text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
            activeTab === "dashboard"
              ? "border-primary bg-primary/15 text-white shadow-glow"
              : "border-white/10 bg-[#121214] text-white/70 hover:bg-white/5 hover:text-white"
          }`}
        >
          <BarChart3 className={`h-4 w-4 ${activeTab === "dashboard" ? "text-primary" : "text-white/50"}`} />
          <span>Gestão comercial</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("ia")}
          className={`flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-xl border px-5 py-3 text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
            activeTab === "ia"
              ? "border-primary bg-primary/15 text-white shadow-glow"
              : "border-white/10 bg-[#121214] text-white/70 hover:bg-white/5 hover:text-white"
          }`}
        >
          <Bot className={`h-4 w-4 ${activeTab === "ia" ? "text-primary" : "text-white/50"}`} />
          <span>Inteligência artificial</span>
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
        </button>
      </div>

      {/* Exibição do Conteúdo da Aba com Transição Suave */}
      <div className="mt-8">
        {activeTab === "kanban" && (
          <div className="animate-in fade-in duration-300 space-y-6">
            <div className="mx-auto max-w-2xl text-center">
              <p className="font-sans text-base sm:text-lg text-white font-medium">
                Visualize suas oportunidades em cada etapa da negociação e mantenha o processo comercial organizado.
              </p>
              <div className="mt-3 flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-primary" /> Colunas: Novo Lead, Chatbot/IA, Atendimento Humano
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-primary" /> Distribuição ágil para vendedores
                </span>
              </div>
            </div>

            {/* Print Real com Moldura Premium */}
            <div className="relative overflow-hidden rounded-2xl border border-white/12 bg-[#0c0c0e] shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/8 bg-[#141416] px-4 py-2.5 text-[11px] text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  </div>
                  <span className="font-mono text-[10px] text-white/50 ml-2">
                    NC Agência › Funil
                  </span>
                </div>
                <div className="flex items-center gap-1.5 rounded-md border border-primary/20 bg-primary/10 px-2.5 py-0.5 text-[10px] font-mono text-primary font-medium">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>Captura Real do Sistema</span>
                </div>
              </div>

              <div className="p-2 sm:p-3 bg-[#0a0a0c]">
                <img
                  src={kanbanRealImg}
                  alt="Tela Real do Funil Kanban do NC Performance Suite"
                  className="w-full rounded-xl object-cover border border-white/5 shadow-inner"
                  loading="lazy"
                  width={1024}
                  height={451}
                />
              </div>
            </div>
          </div>
        )}

        {activeTab === "dashboard" && (
          <div className="animate-in fade-in duration-300 space-y-6">
            <div className="mx-auto max-w-2xl text-center">
              <p className="font-sans text-base sm:text-lg text-white font-medium">
                Acompanhe as oportunidades e tenha uma visão mais clara da operação comercial da sua loja.
              </p>
              <div className="mt-3 flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-primary" /> Indicadores de oportunidades ativas e novos leads
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-primary" /> Controle de pendências e retornos diários
                </span>
              </div>
            </div>

            {/* Print Real com Moldura Premium */}
            <div className="relative overflow-hidden rounded-2xl border border-white/12 bg-[#0c0c0e] shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/8 bg-[#141416] px-4 py-2.5 text-[11px] text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  </div>
                  <span className="font-mono text-[10px] text-white/50 ml-2">
                    NC Agência › Início
                  </span>
                </div>
                <div className="flex items-center gap-1.5 rounded-md border border-primary/20 bg-primary/10 px-2.5 py-0.5 text-[10px] font-mono text-primary font-medium">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>Captura Real do Sistema</span>
                </div>
              </div>

              <div className="p-2 sm:p-3 bg-[#0a0a0c]">
                <img
                  src={dashboardRealImg}
                  alt="Tela Real do Dashboard Gerencial do NC Performance Suite"
                  className="w-full rounded-xl object-cover border border-white/5 shadow-inner"
                  loading="lazy"
                  width={1024}
                  height={448}
                />
              </div>
            </div>
          </div>
        )}

        {activeTab === "ia" && (
          <div className="animate-in fade-in duration-300 space-y-6">
            <div className="mx-auto max-w-2xl text-center">
              <p className="font-sans text-base sm:text-lg text-white font-medium">
                Agilize o primeiro atendimento com uma IA preparada para as perguntas mais comuns do mercado automotivo.
              </p>
              <div className="mt-3 flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-primary" /> Atendimento 24/7 conectado ao WhatsApp
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-primary" /> Transição imediata para o consultor humano
                </span>
              </div>
            </div>

            {/* Print Real com Moldura Premium */}
            <div className="relative overflow-hidden rounded-2xl border border-white/12 bg-[#0c0c0e] shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/8 bg-[#141416] px-4 py-2.5 text-[11px] text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  </div>
                  <span className="font-mono text-[10px] text-white/50 ml-2">
                    NC Agência › Conversas › WhatsApp
                  </span>
                </div>
                <div className="flex items-center gap-1.5 rounded-md border border-primary/20 bg-primary/10 px-2.5 py-0.5 text-[10px] font-mono text-primary font-medium">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>Captura Real do Sistema</span>
                </div>
              </div>

              <div className="p-2 sm:p-3 bg-[#0a0a0c]">
                <img
                  src={conversasRealImg}
                  alt="Tela Real de Conversas e Atendimento IA do NC Performance Suite"
                  className="w-full rounded-xl object-cover border border-white/5 shadow-inner"
                  loading="lazy"
                  width={1024}
                  height={449}
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* CTA de Fechamento da Seção Interativa */}
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
        <TrialCtaButton
          position="features"
          label="TESTAR GRÁTIS POR 7 DIAS"
          className="h-12 px-7 text-xs sm:text-sm font-semibold"
        />
        <span className="text-xs text-muted-foreground">
          Ativação direta pela central oficial de atendimento no WhatsApp.
        </span>
      </div>
    </div>
  );
}

