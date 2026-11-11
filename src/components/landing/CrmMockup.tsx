import React, { useState } from "react";
import {
  Bot,
  LayoutGrid,
  Users,
  Car,
  MessageSquare,
  Sparkles,
  CheckCircle2,
  Clock,
  ArrowRight,
  Send,
  MoreVertical,
  Filter,
  Search,
  Bell,
  ChevronRight,
  TrendingUp,
} from "lucide-react";
import { CRM_CONFIG } from "@/config/platform";

export function CrmMockup({ compact = false }: { compact?: boolean }) {
  const [activeTab, setActiveTab] = useState<"kanban" | "chat">("kanban");

  return (
    <div className="relative w-full rounded-2xl border border-white/12 bg-[#0c0c0e] shadow-2xl overflow-hidden font-sans select-none">
      {/* Etiqueta de Demonstração Ilustrativa transparente */}
      <div className="flex items-center justify-between border-b border-white/8 bg-[#141416] px-4 py-2.5 text-[11px] text-muted-foreground">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          </div>
          <span className="font-mono text-[10px] text-white/40 ml-2 hidden sm:inline">
            app.ncperformance.com.br
          </span>
        </div>
        <div className="flex items-center gap-1.5 rounded-md border border-primary/20 bg-primary/10 px-2 py-0.5 text-[10px] font-mono text-primary font-medium">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          <span>Demonstração Ilustrativa da Interface</span>
        </div>
      </div>

      {/* Barra de Navegação Interna da Aplicação */}
      <div className="flex items-center justify-between border-b border-white/8 bg-[#101012] px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-white font-display font-bold text-xs">
            NC
          </div>
          <div>
            <span className="font-display font-semibold text-xs text-white block leading-tight">
              {CRM_CONFIG.productName}
            </span>
            <span className="text-[10px] font-mono text-muted-foreground">
              Loja: Premium Motors Multimarcas
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Seletor de visualização do mockup */}
          <div className="flex rounded-lg border border-white/10 bg-[#161618] p-0.5 text-[11px]">
            <button
              type="button"
              onClick={() => setActiveTab("kanban")}
              className={`rounded-md px-2.5 py-1 text-xs transition-colors cursor-pointer ${
                activeTab === "kanban"
                  ? "bg-white/15 text-white font-medium shadow-sm"
                  : "text-white/60 hover:text-white"
              }`}
            >
              Kanban
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("chat")}
              className={`rounded-md px-2.5 py-1 text-xs transition-colors cursor-pointer flex items-center gap-1.5 ${
                activeTab === "chat"
                  ? "bg-white/15 text-white font-medium shadow-sm"
                  : "text-white/60 hover:text-white"
              }`}
            >
              <Bot className="h-3 w-3 text-primary" />
              <span>IA ao Vivo</span>
            </button>
          </div>
        </div>
      </div>

      {/* Conteúdo Principal do Mockup */}
      <div className="grid grid-cols-12 min-h-[360px] sm:min-h-[420px]">
        {/* Barra Lateral do Software (Sidebar) */}
        <aside className="hidden md:flex md:col-span-3 flex-col justify-between border-r border-white/8 bg-[#0e0e10] p-3 text-xs">
          <div className="space-y-1">
            <span className="text-[9px] font-mono uppercase tracking-wider text-white/40 px-2 py-1 block">
              Operação Comercial
            </span>
            <div
              onClick={() => setActiveTab("kanban")}
              className={`flex items-center gap-2.5 rounded-lg px-2.5 py-2 cursor-pointer transition-colors ${
                activeTab === "kanban"
                  ? "bg-primary/15 text-primary font-medium"
                  : "text-white/70 hover:bg-white/5 hover:text-white"
              }`}
            >
              <LayoutGrid className="h-4 w-4" />
              <span>Funil de Vendas</span>
            </div>
            <div
              onClick={() => setActiveTab("chat")}
              className={`flex items-center gap-2.5 rounded-lg px-2.5 py-2 cursor-pointer transition-colors ${
                activeTab === "chat"
                  ? "bg-primary/15 text-primary font-medium"
                  : "text-white/70 hover:bg-white/5 hover:text-white"
              }`}
            >
              <Bot className="h-4 w-4" />
              <div className="flex items-center justify-between w-full">
                <span>IA de Atendimento</span>
                <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              </div>
            </div>
            <div className="flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-white/70 hover:bg-white/5 hover:text-white cursor-pointer">
              <Users className="h-4 w-4" />
              <span>Contatos & Clientes</span>
            </div>
            <div className="flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-white/70 hover:bg-white/5 hover:text-white cursor-pointer">
              <Car className="h-4 w-4" />
              <span>Estoque no Pátio</span>
            </div>
            <div className="flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-white/70 hover:bg-white/5 hover:text-white cursor-pointer">
              <TrendingUp className="h-4 w-4" />
              <span>Desempenho Comercial</span>
            </div>
          </div>

          <div className="rounded-xl border border-white/8 bg-[#141418] p-3 text-[11px]">
            <div className="flex items-center justify-between text-white/90 font-medium">
              <span>IA Automotiva</span>
              <span className="text-[10px] text-emerald-400 font-mono">Ativa</span>
            </div>
            <p className="mt-1 text-[10px] text-muted-foreground leading-tight">
              Triando leads no WhatsApp e alimentando o Kanban automaticamente.
            </p>
          </div>
        </aside>

        {/* Área Central: Kanban ou Chat com IA */}
        <div className="col-span-12 md:col-span-9 bg-[#0a0a0c] p-4 flex flex-col justify-between">
          {activeTab === "kanban" ? (
            <div className="space-y-3">
              {/* Topo do Kanban com Indicador */}
              <div className="flex items-center justify-between text-xs pb-2 border-b border-white/8">
                <div className="flex items-center gap-2">
                  <span className="font-display font-semibold text-white">Pipeline de Oportunidades</span>
                  <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-mono text-white/70">
                    4 Estágios Ativos
                  </span>
                </div>
                <span className="text-[11px] font-mono text-muted-foreground hidden sm:inline">
                  Atualizado em tempo real
                </span>
              </div>

              {/* Colunas do Kanban Ilustrativo */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* Coluna 1: Primeiro Contato IA */}
                <div className="rounded-xl border border-white/8 bg-[#111114] p-3">
                  <div className="flex items-center justify-between pb-2 border-b border-white/8">
                    <span className="text-[11px] font-medium text-white/90 flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-amber-400" />
                      1. Triagem Inicial IA
                    </span>
                    <span className="text-[10px] font-mono text-muted-foreground">3</span>
                  </div>

                  <div className="mt-2.5 space-y-2">
                    <div className="rounded-lg border border-white/8 bg-[#17171c] p-2.5 text-xs transition-all hover:border-white/20">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-white text-[11px]">Marcos Vinicius</span>
                        <span className="text-[9px] font-mono text-primary font-bold bg-primary/10 px-1.5 py-0.5 rounded">
                          HB20 2022
                        </span>
                      </div>
                      <p className="text-[10px] text-muted-foreground mt-1">
                        IA coletando dados: veículo na troca (Onix 2019)
                      </p>
                      <div className="mt-2 flex items-center gap-1 text-[9px] text-emerald-400 font-mono">
                        <Clock className="h-3 w-3" /> Resposta em 25s
                      </div>
                    </div>

                    <div className="rounded-lg border border-white/8 bg-[#17171c] p-2.5 text-xs">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-white text-[11px]">Camila Rocha</span>
                        <span className="text-[9px] font-mono text-white/60 bg-white/5 px-1.5 py-0.5 rounded">
                          Compass 2021
                        </span>
                      </div>
                      <p className="text-[10px] text-muted-foreground mt-1">
                        Interesse em simulação de entrada
                      </p>
                    </div>
                  </div>
                </div>

                {/* Coluna 2: Qualificado para Vendedor */}
                <div className="rounded-xl border border-white/8 bg-[#111114] p-3">
                  <div className="flex items-center justify-between pb-2 border-b border-white/8">
                    <span className="text-[11px] font-medium text-white/90 flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-blue-400" />
                      2. Contexto Pronto
                    </span>
                    <span className="text-[10px] font-mono text-muted-foreground">2</span>
                  </div>

                  <div className="mt-2.5 space-y-2">
                    <div className="rounded-lg border border-primary/30 bg-[#17171c] p-2.5 text-xs shadow-sm">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-white text-[11px]">Roberto Silva</span>
                        <span className="text-[9px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">
                          Corolla 2023
                        </span>
                      </div>
                      <div className="mt-1 text-[10px] text-white/80 space-y-0.5 font-sans">
                        <p>• Entrada: R$ 45.000</p>
                        <p>• Troca: Polo 2020</p>
                      </div>
                      <div className="mt-2 border-t border-white/8 pt-1.5 flex items-center justify-between text-[9px] text-white/50">
                        <span>Vendedor: Ricardo</span>
                        <span className="text-primary font-bold">Assumir &gt;</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Coluna 3: Visita / Proposta */}
                <div className="rounded-xl border border-white/8 bg-[#111114] p-3 hidden sm:block">
                  <div className="flex items-center justify-between pb-2 border-b border-white/8">
                    <span className="text-[11px] font-medium text-white/90 flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />
                      3. Visita Agendada
                    </span>
                    <span className="text-[10px] font-mono text-muted-foreground">1</span>
                  </div>

                  <div className="mt-2.5 space-y-2">
                    <div className="rounded-lg border border-white/8 bg-[#17171c] p-2.5 text-xs">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-white text-[11px]">Eduardo Costa</span>
                        <span className="text-[9px] font-mono text-white/60 bg-white/5 px-1.5 py-0.5 rounded">
                          Tracker 2022
                        </span>
                      </div>
                      <p className="text-[10px] text-emerald-400 mt-1 font-medium">
                        Agendado para hoje às 16:30
                      </p>
                      <div className="mt-2 flex items-center gap-1 text-[9px] text-muted-foreground">
                        <CheckCircle2 className="h-3 w-3 text-primary" /> Test drive preparado
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Visualização do Painel de Conversa com IA */
            <div className="flex flex-col h-full justify-between space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-white/8 text-xs">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/20 text-primary">
                    <Bot className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-white block text-[11px]">
                      Atendimento IA • WhatsApp Integrado
                    </span>
                    <span className="text-[9px] text-emerald-400 font-mono">
                      Lead: Marcos Vinicius (Interesse HB20)
                    </span>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-white/50 bg-white/5 px-2 py-0.5 rounded">
                  Demonstração
                </span>
              </div>

              {/* Balões de Mensagem */}
              <div className="space-y-2.5 py-1 text-xs">
                <div className="flex flex-col items-start">
                  <span className="text-[9px] font-mono text-muted-foreground mb-0.5 ml-1">
                    Cliente • 14:32
                  </span>
                  <div className="rounded-2xl rounded-tl-sm bg-[#1e1e24] px-3.5 py-2 text-white/95 max-w-[85%] text-[11px] leading-relaxed">
                    Oi, tenho interesse no HB20. Vocês financiam?
                  </div>
                </div>

                <div className="flex flex-col items-end">
                  <span className="text-[9px] font-mono text-primary mb-0.5 mr-1 flex items-center gap-1">
                    <Sparkles className="h-2.5 w-2.5" /> IA NC Performance • 14:32
                  </span>
                  <div className="rounded-2xl rounded-tr-sm bg-primary/20 border border-primary/30 px-3.5 py-2 text-white max-w-[85%] text-[11px] leading-relaxed">
                    Olá! Posso ajudar com as informações iniciais. Você pretende dar uma entrada ou possui um veículo na troca?
                  </div>
                </div>

                <div className="flex flex-col items-start">
                  <span className="text-[9px] font-mono text-muted-foreground mb-0.5 ml-1">
                    Cliente • 14:33
                  </span>
                  <div className="rounded-2xl rounded-tl-sm bg-[#1e1e24] px-3.5 py-2 text-white/95 max-w-[85%] text-[11px] leading-relaxed">
                    Tenho um carro na troca.
                  </div>
                </div>

                <div className="flex flex-col items-end">
                  <span className="text-[9px] font-mono text-primary mb-0.5 mr-1 flex items-center gap-1">
                    <Sparkles className="h-2.5 w-2.5" /> IA NC Performance • 14:33
                  </span>
                  <div className="rounded-2xl rounded-tr-sm bg-primary/20 border border-primary/30 px-3.5 py-2 text-white max-w-[85%] text-[11px] leading-relaxed">
                    Perfeito! Qual é o modelo e o ano do seu veículo?
                  </div>
                </div>

                <div className="flex flex-col items-start">
                  <span className="text-[9px] font-mono text-muted-foreground mb-0.5 ml-1">
                    Cliente • 14:33
                  </span>
                  <div className="rounded-2xl rounded-tl-sm bg-[#1e1e24] px-3.5 py-2 text-white/95 max-w-[85%] text-[11px] leading-relaxed">
                    Um Onix 2019.
                  </div>
                </div>

                <div className="flex flex-col items-end">
                  <span className="text-[9px] font-mono text-primary mb-0.5 mr-1 flex items-center gap-1">
                    <Sparkles className="h-2.5 w-2.5" /> IA NC Performance • 14:34
                  </span>
                  <div className="rounded-2xl rounded-tr-sm bg-primary/20 border border-primary/30 px-3.5 py-2 text-white max-w-[85%] text-[11px] leading-relaxed">
                    Entendi. Vou organizar essas informações para que a equipe possa continuar seu atendimento.
                  </div>
                </div>
              </div>

              {/* Alerta de Transição para o Vendedor */}
              <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/5 px-3 py-2 text-[10px] text-emerald-300 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                  <span>Lead qualificado: HB20 2022 com troca em Onix 2019 adicionado ao CRM</span>
                </div>
                <span className="font-mono text-white/60">Notificação enviada</span>
              </div>
            </div>
          )}

          {/* Rodapé Interno do Mockup com Resumo do Valor */}
          <div className="mt-3 pt-2.5 border-t border-white/8 flex items-center justify-between text-[10px] text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <span>Sincronização de leads e esteira comercial ativas</span>
            </div>
            <span className="text-white/60 font-mono">NC CRM v1.0</span>
          </div>
        </div>
      </div>
    </div>
  );
}

