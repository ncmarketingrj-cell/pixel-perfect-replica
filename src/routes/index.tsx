import { createFileRoute } from "@tanstack/react-router";
import { Fragment } from "react";
import {
  Search,
  Settings2,
  TrendingUp,
  Quote,
  MessageCircle,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Database,
  ArrowRight,
  BarChart3,
  Bot,
  Cpu,
  Layers,
  Sparkles,
  Target,
  Users,
  Video,
  Zap,
  ChevronRight,
  ShieldCheck,
  Building2,
  Award,
} from "lucide-react";

import ncLogo from "@/assets/nc-logo.png";
import heroDealership from "@/assets/hero-dealership.jpg";
import victoriaMaia from "@/assets/victoria-maia.jpg";
import partnerRio2 from "@/assets/partner-rio2.png";
import partnerAlfacar from "@/assets/partner-alfacar.jpg";
import partnersImg from "@/assets/partners.png.asset.json";

import {
  DiagnosticProvider,
  DiagnosticButton,
} from "@/components/landing/DiagnosticModal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "NC Agência 3.0 — Crescimento & Inteligência Comercial para o Setor Automotivo",
      },
      {
        name: "description",
        content:
          "Sua loja tem carros. A NC tem estratégia para vender. Plataforma de crescimento, tráfego pago, CRM, automações e inteligência comercial para lojistas e concessionárias.",
      },
      {
        name: "keywords",
        content:
          "inteligência comercial automotiva, crescimento para lojas de carros, tráfego pago automotivo, CRM para concessionárias, vendas de veículos, giro de estoque automotivo",
      },
      {
        property: "og:title",
        content:
          "NC Agência 3.0 — Crescimento & Inteligência Comercial para o Setor Automotivo",
      },
      {
        property: "og:description",
        content:
          "Marketing, tecnologia e inteligência comercial trabalhando juntos para transformar estoque parado em vendas com alta previsibilidade.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Logo({ className = "h-9" }: { className?: string }) {
  return (
    <img
      src={ncLogo}
      alt="NC Agência — Inteligência Comercial Automotiva"
      className={`${className} object-contain transition-transform duration-200 hover:scale-105`}
      width={140}
      height={54}
      loading="eager"
    />
  );
}

function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1 text-[11px] font-mono tracking-wide text-white/85">
      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
      <span>{children}</span>
    </div>
  );
}

const tickerPilares = [
  "Aquisição com Tráfego Pago",
  "Criativos de Performance",
  "Estruturação de CRM",
  "Processos Comerciais",
  "Automações de Pré-Atendimento",
  "Treinamento de Vendas",
  "Inteligência de Dados",
];

const gargalosComerciais = [
  {
    icon: Users,
    title: "Leads Sem Perfil de Compra",
    description:
      "Contatos sem score, com CPF reprovado ou curiosos sem poder de entrada, roubando o tempo e a paciência da sua equipe comercial.",
    tag: "Filtro Inadequado",
  },
  {
    icon: Clock,
    title: "Demora Fatal no 1º Atendimento",
    description:
      "O cliente automotivo envia mensagem para 3 lojas simultaneamente. Quem responde após 10 minutos perde mais de 70% da chance de agendamento.",
    tag: "Gargalo de Velocidade",
  },
  {
    icon: Database,
    title: "Vendedores Sem CRM e Sem Processo",
    description:
      "Atendimentos dispersos em WhatsApps pessoais dos vendedores. Sem histórico, sem régua de follow-up e com dezenas de negociações esquecidas.",
    tag: "Perda Operacional",
  },
  {
    icon: AlertTriangle,
    title: "Investimento em Anúncios no 'Escuro'",
    description:
      "Verba gasta sem saber qual anúncio, canal ou modelo de veículo gerou a venda faturada no final do mês, impossibilitando a escala assertiva.",
    tag: "Desperdício de Verba",
  },
  {
    icon: Layers,
    title: "Pátio Parado & Depreciação Contínua",
    description:
      "Veículos que passam de 45 dias no pátio geram custo financeiro de oportunidade e forçam concessão de descontos que corroem a margem da loja.",
    tag: "Custo de Giro",
  },
  {
    icon: BarChart3,
    title: "Decisões no Achismo sem Indicadores",
    description:
      "Falta de clareza sobre taxa de conversão por vendedor, tempo de permanência no pátio e ticket médio de fechamento por tipo de financiamento.",
    tag: "Falta de Gestão",
  },
];

const methodologySteps = [
  {
    step: "ETAPA 01",
    phase: "DIAGNOSTICAR",
    title: "Mapeamento e Gargalos",
    text: "Análise aprofundada da operação, perfil do estoque, histórico de atendimentos e identificação precisa de onde sua loja está perdendo dinheiro.",
  },
  {
    step: "ETAPA 02",
    phase: "ESTRUTURAR",
    title: "Campanhas, CRM & Processos",
    text: "Implantação das ferramentas certas: esteira de tráfego de alta intenção, automações de triagem rápida e alinhamento do funil comercial.",
  },
  {
    step: "ETAPA 03",
    phase: "ACELERAR",
    title: "Escala & Otimização Contínua",
    text: "Monitoramento em tempo real dos indicadores de venda, refinamento diário de campanhas e acompanhamento para acelerar o giro do pátio.",
  },
];

const testimonials = [
  {
    quote:
      "A NC Agência revolucionou nosso processo de vendas. Com as estratégias implementadas, conseguimos triplicar nossos leads qualificados e dobrar o faturamento em apenas 4 meses.",
    name: "Carlos Silva",
    company: "Super Fast",
    result: "+180% vendas",
  },
  {
    quote:
      "Impressionante como a equipe da NC conseguiu otimizar nossas campanhas. Agora recebemos apenas clientes com perfil de compra real, nossa conversão aumentou drasticamente.",
    name: "Ana Paula Costa",
    company: "Bitcar",
    result: "+300% leads",
  },
  {
    quote:
      "Trabalho excepcional! A gestão de tráfego pago e a produção de conteúdo da NC elevaram nossa marca no mercado. Resultados sólidos e crescimento sustentável mês após mês.",
    name: "Rafael Oliveira",
    company: "Luma Car",
    result: "ROI 420%",
  },
];

function Index() {
  return (
    <DiagnosticProvider>
      {/* 1. HEADER STICKY EXECUTIVO */}
      <header className="sticky top-0 z-50 w-full border-b border-white/8 bg-[#080808]/90 backdrop-blur-lg">
        <Container className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-6">
            <a href="#" aria-label="NC Agência 3.0">
              <Logo className="h-9 sm:h-10" />
            </a>
            <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-white/70 lg:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <span>+100 Lojas Ativas • 10 Anos de Mercado</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/5521970009239"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 text-xs font-semibold text-muted-foreground transition-colors hover:text-white sm:flex"
            >
              <MessageCircle className="h-4 w-4 text-primary" />
              <span>(21) 97000-9239</span>
            </a>
            <DiagnosticButton
              position="header"
              label="Quero vender mais carros"
              className="!h-10 px-4 text-xs font-semibold tracking-normal"
            />
          </div>
        </Container>
      </header>

      <main>
        {/* 2. HERO 3.0: COMPOSIÇÃO EDITORIAL ASSIMÉTRICA & PAINEL DE INTELIGÊNCIA */}
        <section className="relative overflow-hidden border-b border-white/8 bg-[#080808] bg-tech-grid py-16 sm:py-20 lg:py-28">
          {/* Fundo do showroom de concessionária com iluminação radial sutil */}
          <img
            src={heroDealership}
            alt="Concessionária de alto padrão"
            width={1920}
            height={1088}
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-cover opacity-20 filter grayscale contrast-125"
          />
          <div className="absolute inset-0 bg-radial-vignette" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/85 to-[#080808]/40" />

          <Container className="relative z-10 grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Bloco de Mensagem Principal (Esquerda - 7 Colunas) */}
            <div className="lg:col-span-7 xl:col-span-7">
              {/* 1. Etiqueta Institucional */}
              <div className="hero-seq-badge inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1 text-[11px] font-mono tracking-wide text-white/90">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                <span>Inteligência Comercial Automotiva</span>
                <span className="text-white/30">•</span>
                <span className="text-muted-foreground">+10 Anos de Mercado</span>
              </div>

              {/* 2. Headline Editorial com Capitalização Natural */}
              <div className="mt-6">
                <h1 className="hero-seq-h1-1 font-display font-semibold text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[1.04] tracking-[-0.03em] text-white">
                  Sua loja tem carros.
                </h1>
                <p className="hero-seq-h1-2 font-display font-semibold text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[1.04] tracking-[-0.03em] text-primary mt-1">
                  A NC tem estratégia para vender.
                </p>
              </div>

              {/* 3. Subtítulo em Inter */}
              <p className="hero-seq-sub mt-6 max-w-2xl font-sans text-base sm:text-lg lg:text-[18px] leading-[1.6] text-muted-foreground">
                Marketing, tecnologia e inteligência comercial trabalhando juntos para
                transformar oportunidades em vendas reais para sua loja de veículos.
              </p>

              {/* 4. Indicadores Institucionais Verificados */}
              <div className="hero-seq-metrics mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 max-w-xl">
                <div className="rounded-xl border border-white/8 bg-[#121212]/85 p-4 backdrop-blur-sm">
                  <div className="font-display font-semibold text-2xl sm:text-3xl text-white tracking-tight">
                    +100
                  </div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground mt-1">
                    Lojas Atendidas
                  </div>
                </div>

                <div className="rounded-xl border border-white/8 bg-[#121212]/85 p-4 backdrop-blur-sm">
                  <div className="font-display font-semibold text-2xl sm:text-3xl text-white tracking-tight">
                    10 Anos
                  </div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground mt-1">
                    Experiência Setorial
                  </div>
                </div>

                <div className="col-span-2 sm:col-span-1 rounded-xl border border-white/8 bg-[#121212]/85 p-4 backdrop-blur-sm">
                  <div className="font-display font-semibold text-2xl sm:text-3xl text-primary tracking-tight">
                    100%
                  </div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground mt-1">
                    Foco no Mercado Auto
                  </div>
                </div>
              </div>

              {/* 5. CTAs com Microinterações Refinadas */}
              <div className="hero-seq-cta mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <DiagnosticButton
                  position="hero"
                  label="Quero vender mais carros"
                  className="h-13 sm:h-14 px-8 text-sm font-semibold tracking-wide"
                />

                <a
                  href="#ecossistema"
                  className="inline-flex h-13 sm:h-14 items-center justify-center gap-2 rounded-xl border border-white/12 bg-white/5 px-6 font-sans text-sm font-semibold text-white/90 btn-interaction hover:bg-white/10 hover:border-white/25 active:brightness-95"
                >
                  <span>Conheça o Ecossistema NC</span>
                  <ChevronRight className="h-4 w-4 text-primary" />
                </a>
              </div>
            </div>

            {/* 6. Fotografia da Fundadora Victoria Maia (Composição Editorial com Máscara Suave) */}
            <div className="hero-seq-photo flex justify-center lg:col-span-5 lg:justify-end">
              <div className="relative w-full max-w-md">
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#121212] shadow-2xl [mask-image:linear-gradient(to_bottom,black_90%,transparent)]">
                  <img
                    src={victoriaMaia}
                    alt="Victoria Maia — Fundadora da NC Agência e especialista em inteligência comercial para lojas de veículos"
                    width={800}
                    height={1100}
                    fetchPriority="high"
                    className="h-auto w-full object-cover object-top filter contrast-[1.04]"
                  />

                  {/* Card Flutuante de Autoridade */}
                  <div className="absolute inset-x-4 bottom-4 rounded-xl border border-white/12 bg-[#080808]/92 p-4 backdrop-blur-md">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-display font-semibold text-base text-white">
                          Victoria Maia
                        </p>
                        <p className="text-[11px] font-mono text-primary tracking-wide">
                          Fundadora & Estrategista Comercial
                        </p>
                      </div>
                      <span className="flex h-2 w-2 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                      </span>
                    </div>

                    <div className="mt-3 flex items-center gap-2 border-t border-white/8 pt-2.5 text-[11px] font-sans text-muted-foreground">
                      <ShieldCheck className="h-3.5 w-3.5 text-primary shrink-0" />
                      <span>Metodologia validada em concessionárias e revendas</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* 3. TICKER DE PILARES TECNOLÓGICOS (LOOP CONTÍNUO) */}
        <div
          aria-label="Pilares de Crescimento NC"
          className="relative overflow-hidden border-y border-white/10 bg-[#0B0B0B] py-3.5 select-none"
        >
          <div className="animate-marquee flex items-center">
            {/* Bloco 1 */}
            <div className="flex shrink-0 items-center gap-10 pr-10">
              {tickerPilares.map((pilar, i) => (
                <Fragment key={`pilar-1-${i}`}>
                  <span className="whitespace-nowrap font-display text-sm uppercase tracking-wider text-white sm:text-base">
                    {pilar}
                  </span>
                  <div className="flex items-center gap-1.5 opacity-80">
                    <img
                      src={ncLogo}
                      alt=""
                      aria-hidden="true"
                      className="h-4 w-auto object-contain brightness-125"
                    />
                  </div>
                </Fragment>
              ))}
            </div>

            {/* Bloco 2 Simétrico */}
            <div className="flex shrink-0 items-center gap-10 pr-10" aria-hidden="true">
              {tickerPilares.map((pilar, i) => (
                <Fragment key={`pilar-2-${i}`}>
                  <span className="whitespace-nowrap font-display text-sm uppercase tracking-wider text-white sm:text-base">
                    {pilar}
                  </span>
                  <div className="flex items-center gap-1.5 opacity-80">
                    <img
                      src={ncLogo}
                      alt=""
                      aria-hidden="true"
                      className="h-4 w-auto object-contain brightness-125"
                    />
                  </div>
                </Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* 4. NOVA SEÇÃO: O PROBLEMA NÃO É APENAS GERAR LEADS */}
        <section className="py-24 sm:py-28 bg-[#080808]" id="problema">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <SectionBadge>Diagnóstico de Mercado</SectionBadge>
              <h2 className="mt-4 font-display text-2xl uppercase leading-tight text-white sm:text-3xl md:text-4xl">
                O problema da maioria das lojas não é falta de leads.{" "}
                <span className="text-primary">É falta de sistema comercial.</span>
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[#A3A3A3] sm:text-base">
                Colocar dinheiro em anúncio sem ter processo de triagem, CRM e velocidade no
                atendimento é queimar verba. Identifique onde sua operação está travando:
              </p>
            </div>

            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {gargalosComerciais.map(({ icon: Icon, title, description, tag }) => (
                <div
                  key={title}
                  className="group relative flex flex-col justify-between rounded-xl border border-white/10 bg-[#121212] p-7 transition-all duration-300 hover:border-primary/40 hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="rounded-full bg-white/5 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary">
                        {tag}
                      </span>
                    </div>

                    <h3 className="mt-6 font-display text-lg uppercase text-white">
                      {title}
                    </h3>
                    <p className="mt-2.5 text-xs leading-relaxed text-[#9E9E9E] sm:text-sm">
                      {description}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-white/5 pt-4 flex items-center gap-1.5 text-[11px] font-medium text-white/60">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>Solucionado no Ecossistema NC</span>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* 5. NOVA SEÇÃO: ECOSSISTEMA NC 3.0 (BENTO GRID COM CONEXÃO VISUAL DA TRÍADE) */}
        <section
          className="border-t border-white/8 bg-[#0E0E0E] py-24 sm:py-32"
          id="ecossistema"
        >
          <Container>
            {/* Header da Seção */}
            <div className="mx-auto max-w-3xl text-center">
              <SectionBadge>Engenharia de Crescimento Automotivo</SectionBadge>
              <h2 className="mt-4 font-display text-3xl uppercase leading-tight text-white sm:text-4xl md:text-5xl">
                O Ecossistema Completo da <span className="text-primary">NC Agência</span>
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[#A3A3A3] sm:text-base">
                Muito além de uma agência tradicional de campanhas: uma operação integrada que
                conecta atração qualificada, velocidade no atendimento e inteligência de vendas.
              </p>
            </div>

            {/* Destaque da Tríade Conectada (Tráfego → CRM & Automações → Inteligência Comercial) */}
            <div className="mt-14 mb-10 rounded-2xl border border-primary/30 bg-primary/5 p-6 backdrop-blur-sm sm:p-8">
              <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
                <div className="text-center lg:text-left">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary">
                    O Circuito de Tração Automotiva NC
                  </span>
                  <h3 className="mt-1 font-display text-xl uppercase text-white sm:text-2xl">
                    A Tríade que separa a NC de agências convencionais
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1 max-w-xl">
                    Tráfego sem CRM é lead perdido. CRM sem inteligência é esforço sem lucro.
                    Na NC, os três pilares operam em sincronia contínua.
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-bold uppercase">
                  <div className="flex items-center gap-2 rounded-lg border border-primary/40 bg-[#161616] px-3.5 py-2 text-white">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] text-white">
                      01
                    </span>
                    <span>Tráfego Pago</span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-primary hidden sm:block" />
                  <div className="flex items-center gap-2 rounded-lg border border-primary/40 bg-[#161616] px-3.5 py-2 text-white">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] text-white">
                      02
                    </span>
                    <span>CRM & Automação</span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-primary hidden sm:block" />
                  <div className="flex items-center gap-2 rounded-lg border border-primary/40 bg-[#161616] px-3.5 py-2 text-white">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] text-white">
                      03
                    </span>
                    <span>Inteligência Comercial</span>
                  </div>
                </div>
              </div>
            </div>

            {/* BENTO GRID 3.0: 6 Módulos com Representações Gráficas Ricas e Próprias */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* CARD 1 (DESTAQUE TRÍADE - 2 COLUNAS NO LG): TRÁFEGO PAGO AUTOMOTIVO */}
              <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-primary/40 bg-[#141414] p-7 transition-all duration-300 hover:border-primary lg:col-span-2">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-white shadow-glow">
                        <Target className="h-6 w-6" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
                          Pilar 01 • Atração de Alta Intenção
                        </span>
                        <h3 className="font-display text-xl uppercase text-white sm:text-2xl">
                          Tráfego Pago Especializado
                        </h3>
                      </div>
                    </div>
                    <span className="hidden sm:inline-flex rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] font-bold text-primary uppercase">
                      Meta & Google Ads
                    </span>
                  </div>

                  <p className="mt-4 text-sm text-[#9E9E9E] max-w-xl leading-relaxed">
                    Estratégias multicanal desenhadas especificamente para o ciclo de compra
                    automotivo. Segmentação por geolocalização e raio de atendimento da loja,
                    atraindo oportunidades com perfil de crédito aprovado.
                  </p>

                  {/* Representação Gráfica: Interface de Campanha Automotiva */}
                  <div className="mt-6 rounded-xl border border-white/10 bg-[#0A0A0A] p-4 text-xs">
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="font-semibold text-white">
                          Campanhas Automotivas Ativas
                        </span>
                      </div>
                      <span className="text-[10px] text-muted-foreground uppercase">
                        Raio: 35km da loja
                      </span>
                    </div>

                    <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
                      <div className="rounded-lg bg-white/5 p-2.5">
                        <span className="text-[10px] text-muted-foreground block">
                          Público Alvo
                        </span>
                        <span className="font-bold text-white text-xs">Score / Financiamento</span>
                      </div>
                      <div className="rounded-lg bg-white/5 p-2.5">
                        <span className="text-[10px] text-muted-foreground block">
                          Segmentação
                        </span>
                        <span className="font-bold text-white text-xs">Troca + Entrada</span>
                      </div>
                      <div className="rounded-lg bg-white/5 p-2.5">
                        <span className="text-[10px] text-muted-foreground block">
                          Distribuição
                        </span>
                        <span className="font-bold text-primary text-xs">WhatsApp Direto</span>
                      </div>
                      <div className="rounded-lg bg-white/5 p-2.5">
                        <span className="text-[10px] text-muted-foreground block">
                          Qualidade Lead
                        </span>
                        <span className="font-bold text-emerald-400 text-xs">CPF Verificado</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-white/8 pt-4 text-xs font-semibold text-primary">
                  <span>Conectado à esteira de triagem de CRM</span>
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>

              {/* CARD 2 (DESTAQUE TRÍADE - 1 COLUNA): CRM & PROCESSOS COMERCIAIS */}
              <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-primary/40 bg-[#141414] p-7 transition-all duration-300 hover:border-primary">
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-white shadow-glow">
                    <Database className="h-6 w-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-primary mt-4 block">
                    Pilar 02 • Organização Comercial
                  </span>
                  <h3 className="font-display text-xl uppercase text-white mt-1">
                    CRM & Processos
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-[#9E9E9E] leading-relaxed">
                    Organização centralizada de todas as oportunidades. Nenhum comprador fica
                    perdido em conversas soltas no celular do vendedor.
                  </p>

                  {/* Representação Gráfica: Mini Pipeline Kanban de Loja */}
                  <div className="mt-5 space-y-2 rounded-xl border border-white/10 bg-[#0A0A0A] p-3 text-[11px]">
                    <div className="flex items-center justify-between text-[10px] text-muted-foreground font-semibold">
                      <span>Pipeline Comercial NC</span>
                      <span className="text-primary font-bold">100% Organizado</span>
                    </div>
                    <div className="flex items-center justify-between rounded bg-white/5 px-2.5 py-1.5 text-white">
                      <span>1. Triagem & Score</span>
                      <span className="h-2 w-2 rounded-full bg-amber-400" />
                    </div>
                    <div className="flex items-center justify-between rounded bg-white/5 px-2.5 py-1.5 text-white">
                      <span>2. Visita Agendada</span>
                      <span className="h-2 w-2 rounded-full bg-blue-400" />
                    </div>
                    <div className="flex items-center justify-between rounded bg-primary/20 px-2.5 py-1.5 text-white font-semibold">
                      <span>3. Proposta & Venda</span>
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-white/8 pt-4 text-xs font-semibold text-primary">
                  <span>Régua de follow-up ativa</span>
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>

              {/* CARD 3 (DESTAQUE TRÍADE - 1 COLUNA): AUTOMAÇÕES DE PRÉ-ATENDIMENTO */}
              <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-primary/40 bg-[#141414] p-7 transition-all duration-300 hover:border-primary">
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-white shadow-glow">
                    <Bot className="h-6 w-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-primary mt-4 block">
                    Pilar 02 (B) • Velocidade Instantânea
                  </span>
                  <h3 className="font-display text-xl uppercase text-white mt-1">
                    Automações Inteligentes
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-[#9E9E9E] leading-relaxed">
                    Triagem automática de interesse, modelo e valor de entrada em menos de 40
                    segundos, distribuindo o lead quente diretamente para o vendedor disponível.
                  </p>

                  {/* Representação Gráfica: Fluxo de Resposta em Segundos */}
                  <div className="mt-5 rounded-xl border border-white/10 bg-[#0A0A0A] p-3 text-xs">
                    <div className="flex items-center gap-2 text-emerald-400 font-bold text-[11px]">
                      <Zap className="h-3.5 w-3.5" /> Tempo de Resposta: &lt; 40 segundos
                    </div>
                    <div className="mt-2 space-y-1.5 text-[11px] text-[#A3A3A3]">
                      <div className="flex items-center gap-2">
                        <span className="text-white font-mono">01.</span>
                        <span>Coleta de Modelo Desejado & Troca</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-white font-mono">02.</span>
                        <span>Verificação de Entrada e Simulação</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-white font-mono">03.</span>
                        <span>Encaminhamento ao Consultor</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-white/8 pt-4 text-xs font-semibold text-primary">
                  <span>Zero leads esquecidos</span>
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>

              {/* CARD 4 (DESTAQUE TRÍADE - 2 COLUNAS NO LG): INTELIGÊNCIA COMERCIAL & DASHBOARDS */}
              <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-primary/40 bg-[#141414] p-7 transition-all duration-300 hover:border-primary lg:col-span-2">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-white shadow-glow">
                        <BarChart3 className="h-6 w-6" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
                          Pilar 03 • Métricas & Conversão
                        </span>
                        <h3 className="font-display text-xl uppercase text-white sm:text-2xl">
                          Inteligência Comercial & Indicadores
                        </h3>
                      </div>
                    </div>
                    <span className="hidden sm:inline-flex rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-bold text-white/80 uppercase">
                      Simulação Painel de BI NC
                    </span>
                  </div>

                  <p className="mt-4 text-sm text-[#9E9E9E] max-w-xl leading-relaxed">
                    Acompanhamento sistemático de indicadores essenciais: giro de pátio, custo
                    por oportunidade qualificada, taxa de conversão por vendedor e margem líquida
                    por veículo vendido.
                  </p>

                  {/* Representação Gráfica: Dashboard Demonstrativo de Inteligência Comercial */}
                  <div className="mt-6 rounded-xl border border-white/10 bg-[#0A0A0A] p-4">
                    <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
                      <span className="font-semibold text-white">
                        Painel Gerencial de Indicadores da Loja
                      </span>
                      <span className="text-emerald-400 font-bold text-[11px]">
                        Atualização em Tempo Real
                      </span>
                    </div>

                    <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4 text-xs">
                      <div className="rounded-lg bg-white/5 p-2.5">
                        <span className="text-[10px] text-muted-foreground block">
                          Giro Médio de Estoque
                        </span>
                        <span className="font-bold text-white text-base">26 dias</span>
                        <span className="text-[10px] text-emerald-400 block mt-0.5">
                          -18 dias no pátio
                        </span>
                      </div>

                      <div className="rounded-lg bg-white/5 p-2.5">
                        <span className="text-[10px] text-muted-foreground block">
                          Taxa de Conversão Agendada
                        </span>
                        <span className="font-bold text-white text-base">34,2%</span>
                        <span className="text-[10px] text-primary block mt-0.5">
                          Visita presencial
                        </span>
                      </div>

                      <div className="rounded-lg bg-white/5 p-2.5">
                        <span className="text-[10px] text-muted-foreground block">
                          Custo por Lead Qualificado
                        </span>
                        <span className="font-bold text-white text-base">Otimizado</span>
                        <span className="text-[10px] text-muted-foreground block mt-0.5">
                          Score validado
                        </span>
                      </div>

                      <div className="rounded-lg bg-white/5 p-2.5">
                        <span className="text-[10px] text-muted-foreground block">
                          Controle de Vendedores
                        </span>
                        <span className="font-bold text-emerald-400 text-base">100% Monitorado</span>
                        <span className="text-[10px] text-muted-foreground block mt-0.5">
                          Follow-up ativo
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-white/8 pt-4 text-xs font-semibold text-primary">
                  <span>Retroalimenta as campanhas de tráfego com dados reais de vendas</span>
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>

              {/* CARD 5 (COMPLEMENTAR - 1 COLUNA): CRIATIVOS DE PERFORMANCE */}
              <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#121212] p-7 transition-all duration-300 hover:border-white/30">
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white">
                    <Video className="h-6 w-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mt-4 block">
                    Engenharia Criativa
                  </span>
                  <h3 className="font-display text-xl uppercase text-white mt-1">
                    Criativos de Alta Demanda
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-[#9E9E9E] leading-relaxed">
                    Produção visual e roteirização automotiva focada em gerar desejo imediato e
                    destacar condições de compra que aceleram a decisão do comprador.
                  </p>

                  {/* Representação Gráfica: Mock de Anúncio Automotivo Validado */}
                  <div className="mt-5 rounded-xl border border-white/10 bg-[#0A0A0A] p-3 text-xs">
                    <div className="flex items-center justify-between text-[11px] font-semibold text-white">
                      <span>Anúncio Focado em Giro</span>
                      <span className="text-primary text-[10px] uppercase">Formato Validado</span>
                    </div>
                    <div className="mt-2 space-y-1 text-[11px] text-muted-foreground">
                      <p>✓ Fotos detalhadas de itens de conforto e motor</p>
                      <p>✓ Condição clara de entrada e parcelamento</p>
                      <p>✓ Chamada direta para simulação no WhatsApp</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-white/8 pt-4 text-xs font-semibold text-white/80">
                  <span>Testes contínuos A/B de estoque</span>
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>

              {/* CARD 6 (COMPLEMENTAR - 1 COLUNA): TREINAMENTO & PROCESSOS */}
              <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#121212] p-7 transition-all duration-300 hover:border-white/30">
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white">
                    <Award className="h-6 w-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mt-4 block">
                    Capacitação Comercial
                  </span>
                  <h3 className="font-display text-xl uppercase text-white mt-1">
                    Treinamento & Cultura
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-[#9E9E9E] leading-relaxed">
                    Alinhamento com a equipe de vendas da sua loja: scripts de resposta rápida,
                    contorno de objeções de financiamento e protocolo de visita presencial.
                  </p>

                  {/* Representação Gráfica: Checklist da Rotina Comercial */}
                  <div className="mt-5 space-y-1.5 rounded-xl border border-white/10 bg-[#0A0A0A] p-3 text-[11px] text-white">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                      <span>Script de Primeiro Contato (Regra 5 Min)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                      <span>Técnicas de Quebra de Objeção de Entrada</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                      <span>Roteiro de Fechamento Presencial na Loja</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-white/8 pt-4 text-xs font-semibold text-white/80">
                  <span>Desenvolvimento contínuo da equipe</span>
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>

            {/* CTA de Fechamento do Ecossistema */}
            <div className="mt-14 flex flex-col items-center justify-center text-center">
              <p className="text-sm text-[#A3A3A3] mb-4">
                Quer entender como aplicar esse ecossistema completo no estoque atual da sua loja?
              </p>
              <DiagnosticButton
                position="hero"
                label="SOLICITAR DIAGNÓSTICO DO MEU ESTOQUE"
                className="h-14 px-8 text-sm font-bold shadow-glow"
              />
            </div>
          </Container>
        </section>

        {/* 6. MÉTODO NC (PRESERVADO PARA EVOLUÇÃO NAS FASES SEGUINTES) */}
        <section className="py-24 sm:py-28 bg-[#080808] border-t border-white/8" id="metodo">
          <Container>
            <div className="text-center">
              <SectionBadge>Processo Estruturado</SectionBadge>
              <h2 className="mt-4 font-display text-2xl uppercase text-white sm:text-3xl md:text-4xl">
                Nossa Metodologia: Simples, Direta e Focada em Resultados
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-[#A3A3A3] sm:text-base">
                Transformamos a maneira como sua revenda atrai, atende e converte clientes.
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-3">
              {methodologySteps.map(({ step, phase, title, text }) => (
                <div
                  key={title}
                  className="group relative flex flex-col rounded-xl border border-white/10 bg-[#121212] p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10"
                >
                  <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
                    {step} • {phase}
                  </span>

                  <div className="mx-auto mt-5 flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 border border-primary/40 text-primary shadow-glow transition-transform duration-300 group-hover:scale-110">
                    <TrendingUp className="h-7 w-7 text-primary" />
                  </div>

                  <h3 className="mt-6 font-display text-xl uppercase tracking-wide text-white">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#A3A3A3]">{text}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* 7. DEPOIMENTOS (PRESERVADOS) */}
        <section className="border-t border-white/8 bg-[#0E0E0E] py-24 sm:py-28" id="depoimentos">
          <Container>
            <div className="text-center">
              <SectionBadge>Resultados Documentados</SectionBadge>
              <h2 className="mt-4 font-display text-2xl uppercase text-white sm:text-3xl md:text-4xl">
                O Que Nossos Clientes Dizem: Sucesso que Inspira
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-[#A3A3A3] sm:text-base">
                Histórias reais de concessionárias e revendas parceiras da NC Agência.
              </p>
            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((t, i) => (
                <figure
                  key={i}
                  className="flex flex-col justify-between rounded-xl border border-white/10 bg-[#141414] p-7 transition-all duration-300 hover:border-white/20"
                >
                  <div>
                    <Quote className="h-8 w-8 fill-[#EF4045] text-[#EF4045]" />
                    <blockquote className="mt-4 text-sm leading-relaxed italic text-white/90">
                      "{t.quote}"
                    </blockquote>
                  </div>

                  <figcaption className="mt-8 flex items-end justify-between gap-4 border-t border-white/10 pt-5">
                    <div className="min-w-0">
                      <div className="font-bold text-white text-base">{t.name}</div>
                      <div className="text-xs text-muted-foreground">{t.company}</div>
                    </div>
                    <div className="shrink-0 font-display text-lg font-bold text-[#EF4045]">
                      {t.result}
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </Container>
        </section>

        {/* 8. SOBRE A FUNDADORA (PRESERVADA) */}
        <section className="border-t border-white/8 bg-[#080808] py-24 sm:py-28" id="sobre">
          <Container>
            <div className="grid items-center gap-12 lg:grid-cols-12">
              <div className="flex justify-center lg:col-span-5">
                <div className="relative w-full max-w-md">
                  <div className="absolute -inset-2 rounded-2xl bg-primary/20 blur-xl" />
                  <img
                    src={victoriaMaia}
                    alt="Victoria Maia — 10 Anos no Mercado Automotivo"
                    loading="lazy"
                    width={800}
                    height={1100}
                    className="relative w-full rounded-2xl border border-white/15 object-cover shadow-2xl"
                  />
                </div>
              </div>

              <div className="lg:col-span-7">
                <SectionBadge>Liderança & Experiência</SectionBadge>
                <h2 className="mt-4 font-display text-3xl uppercase leading-tight text-white sm:text-4xl">
                  Quem está por trás da <span className="text-primary">NC</span>?
                </h2>

                <div className="mt-6 space-y-4 text-sm leading-relaxed text-[#A3A3A3] sm:text-base">
                  <p>
                    <strong className="text-white">Victoria Maia</strong>, há 10 anos consolidada
                    no mercado automotivo.
                  </p>
                  <p>
                    O que começou no Rio de Janeiro hoje se expandiu para diversas regiões do
                    Brasil. Como fundadora da NC, Victoria possui vasta experiência em uma
                    metodologia validada por centenas de lojas de veículos seminovos e novos em todo
                    o país.
                  </p>
                  <p>
                    Especialista em transformar agências automotivas em verdadeiras máquinas de
                    vendas, desenvolveu um sistema completo que vai muito além do marketing
                    digital: processos comerciais estruturados, gestão de tráfego qualificado,
                    ferramentas estratégicas e treinamento comercial que realmente funcionam.
                  </p>
                  <p>
                    Com a NC, mais de 100 lojas parceiras já aceleraram seus resultados através
                    de um método testado, replicável e adaptado à realidade do mercado brasileiro.
                  </p>
                </div>

                <div className="mt-8">
                  <DiagnosticButton
                    position="sobre"
                    label="FALAR COM UM ESPECIALISTA"
                    className="w-full sm:w-auto"
                  />
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* 9. PARCEIROS (PRESERVADOS) */}
        <section className="border-t border-white/8 bg-[#0E0E0E] py-20 sm:py-24" id="parceiros">
          <Container>
            <div className="text-center">
              <SectionBadge>Confiabilidade de Mercado</SectionBadge>
              <h2 className="mt-4 font-display text-2xl uppercase text-white sm:text-3xl">
                Nossos Parceiros
              </h2>
              <p className="mt-3 text-center text-sm text-[#A3A3A3] sm:text-base">
                A NC conta com mais de 100 clientes parceiros em todo o território nacional.
              </p>
            </div>

            <div className="mt-14 flex flex-wrap items-center justify-center gap-8 sm:gap-12">
              <div className="flex h-24 w-44 items-center justify-center rounded-xl border border-white/10 bg-[#141414] p-4 transition-all duration-300 hover:border-white/30">
                <img
                  src={partnerAlfacar}
                  alt="Alfa Car Veículos"
                  className="max-h-16 w-auto object-contain"
                  loading="lazy"
                />
              </div>

              <div className="flex h-24 w-44 items-center justify-center rounded-xl border border-white/10 bg-[#141414] p-4 transition-all duration-300 hover:border-white/30">
                <img
                  src={partnerRio2}
                  alt="Rio 2 Veículos"
                  className="max-h-14 w-auto object-contain"
                  loading="lazy"
                />
              </div>

              <div className="w-full max-w-2xl rounded-xl border border-white/10 bg-[#141414] p-4 text-center">
                <img
                  src={partnersImg.url}
                  alt="LM, Alfacar, Quero Motos, Rio 2 Veículos, Luma Car, Fly Garage"
                  loading="lazy"
                  className="mx-auto max-h-24 w-auto object-contain opacity-90 transition-opacity hover:opacity-100"
                />
              </div>
            </div>
          </Container>
        </section>

        {/* 10. CTA FINAL DE DECISÃO */}
        <section className="relative overflow-hidden border-t border-white/10 bg-[#080808] py-20 text-center">
          <div className="absolute inset-0 bg-radial-vignette" />
          <Container className="relative z-10 max-w-3xl">
            <h2 className="font-display text-2xl uppercase tracking-tight text-white sm:text-3xl md:text-4xl">
              Pronto para colocar sua loja na frente da concorrência?
            </h2>
            <p className="mt-4 text-sm text-[#A3A3A3] sm:text-base">
              Pare de depender da sorte e de leads desqualificados. Dê o primeiro passo para
              estruturar seu processo comercial automotivo com quem entende do setor.
            </p>
            <div className="mt-8 flex justify-center">
              <DiagnosticButton
                position="final"
                label="QUERO ACELERAR MINHA LOJA AGORA"
                className="w-full sm:w-auto text-base"
              />
            </div>
          </Container>
        </section>
      </main>

      {/* RODAPÉ EXECUTIVO */}
      <footer className="border-t border-white/8 bg-[#050505] py-12 text-sm text-[#A3A3A3]">
        <Container className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <Logo className="h-9" />

          <nav className="flex flex-wrap justify-center gap-6 text-xs uppercase tracking-wider text-muted-foreground">
            <span className="hover:text-white transition-colors cursor-pointer">
              Termos de Uso
            </span>
            <span className="hover:text-white transition-colors cursor-pointer">
              Política de Privacidade
            </span>
            <span className="hover:text-white transition-colors cursor-pointer">
              Conformidade LGPD
            </span>
          </nav>

          <a
            href="https://wa.me/5521970009239"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white font-semibold hover:text-primary transition-colors"
          >
            <MessageCircle className="h-5 w-5 text-primary" />
            <span>+55 21 97000-9239</span>
          </a>
        </Container>

        <Container className="mt-8 border-t border-white/5 pt-6 text-center text-xs text-muted-foreground/80">
          <p>© {new Date().getFullYear()} NC - Inteligência Comercial Automotiva. Todos os direitos reservados.</p>
          <p className="mt-1 text-[11px] text-muted-foreground/60">
            Atendimento estratégico direcionado exclusivamente a revendas de veículos e concessionárias no Brasil.
          </p>
        </Container>
      </footer>
    </DiagnosticProvider>
  );
}
