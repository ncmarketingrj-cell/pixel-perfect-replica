import { createFileRoute } from "@tanstack/react-router";
import { Fragment, useState } from "react";
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
  Activity,
  Workflow,
  Check,
  RotateCcw,
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
import { useInView } from "@/hooks/use-in-view";

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
    step: "01",
    phase: "DIAGNOSTICAR",
    tag: "Auditoria Inicial",
    title: "Mapeamento & Gargalos",
    text: "Análise minuciosa da operação da sua loja: tempo de permanência de cada veículo no pátio, taxa de perdas no WhatsApp e identificação precisa de onde sua margem está sendo consumida.",
    icon: Search,
    deliverables: [
      "Auditoria de tempo de pátio e estoque parado",
      "Identificação dos canais de perda de contato",
      "Mapeamento dos veículos com maior potencial de giro",
    ],
  },
  {
    step: "02",
    phase: "ESTRUTURAR",
    tag: "Implementação Integrada",
    title: "Campanhas, CRM & Automações",
    text: "Implantação das ferramentas do ecossistema: campanhas de alta intenção por raio de atendimento, automações com triagem em menos de 40 segundos e funil Kanban estruturado.",
    icon: Cpu,
    deliverables: [
      "Campanhas Meta & Google segmentadas por perfil de crédito",
      "Automações de pré-atendimento com triagem em < 40s",
      "Pipeline comercial e regras de follow-up no CRM",
    ],
  },
  {
    step: "03",
    phase: "ACELERAR",
    tag: "Escala & Giro Máximo",
    title: "Escala & Otimização Contínua",
    text: "Acompanhamento contínuo dos indicadores de venda, auditoria da postura comercial da equipe e retroalimentação de verba nos veículos que geram maior margem líquida para a revenda.",
    icon: TrendingUp,
    deliverables: [
      "Acompanhamento semanal de giro e taxa de conversão",
      "Treinamento de vendas e superação de objeções de crédito",
      "Remanejamento de orçamento para modelos mais lucrativos",
    ],
  },
];

const testimonials = [
  {
    quote:
      "A NC Agência revolucionou nosso processo de vendas. Com as estratégias implementadas, conseguimos triplicar nossos leads qualificados e dobrar o faturamento em apenas 4 meses.",
    name: "Carlos Silva",
    role: "Diretor Comercial",
    company: "Super Fast Veículos",
    segment: "Seminovos Multimarcas",
    metricHighlight: "+180%",
    metricLabel: "Crescimento em Vendas",
    impactDetails: [
      "Tempo médio de permanência em pátio reduzido",
      "Triagem automática via WhatsApp em menos de 1 minuto",
      "Equipe comercial focada em visitas presenciais agendadas",
    ],
    verifiedBadge: "Operação Ativa • Auditada",
  },
  {
    quote:
      "Impressionante como a equipe da NC conseguiu otimizar nossas campanhas. Agora recebemos apenas clientes com perfil de compra real, nossa conversão aumentou drasticamente.",
    name: "Ana Paula Costa",
    role: "Gestora Geral",
    company: "Bitcar Multimarcas",
    segment: "Concessionária & Giro Rápido",
    metricHighlight: "+300%",
    metricLabel: "Leads com Perfil de Crédito",
    impactDetails: [
      "Fim do tempo perdido com contatos sem score aprovado",
      "Implantação de CRM com histórico centralizado de clientes",
      "Taxa de comparecimento às visitas agendadas ampliada",
    ],
    verifiedBadge: "Operação Ativa • Auditada",
  },
  {
    quote:
      "Trabalho excepcional! A gestão de tráfego pago e a produção de conteúdo da NC elevaram nossa marca no mercado. Resultados sólidos e crescimento sustentável mês após mês.",
    name: "Rafael Oliveira",
    role: "Sócio-Proprietário",
    company: "Luma Car Veículos",
    segment: "Revenda Regional",
    metricHighlight: "420%",
    metricLabel: "Retorno sobre Investimento (ROI)",
    impactDetails: [
      "Previsibilidade total no giro do estoque a cada 30 dias",
      "Campanhas multicanal no Meta e Google no raio da loja",
      "Retroalimentação contínua nos modelos mais lucrativos",
    ],
    verifiedBadge: "Operação Ativa • Auditada",
  },
];

function Index() {
  const { ref: gargalosRef, isInView: gargalosInView } = useInView<HTMLElement>({ threshold: 0.1 });
  const { ref: ecossistemaRef, isInView: ecossistemaInView } = useInView<HTMLElement>({ threshold: 0.1 });
  const { ref: metodoRef, isInView: metodoInView } = useInView<HTMLElement>({ threshold: 0.1 });
  const { ref: depoimentosRef, isInView: depoimentosInView } = useInView<HTMLElement>({ threshold: 0.1 });
  const { ref: sobreRef, isInView: sobreInView } = useInView<HTMLElement>({ threshold: 0.1 });
  const [activeTriad, setActiveTriad] = useState<"all" | "trafego" | "crm" | "bi">("all");

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

        {/* 3. TICKER DE PILARES TECNOLÓGICOS (LOOP CONTÍNUO LINEAR) */}
        <div
          aria-label="Pilares de Crescimento NC"
          className="relative overflow-hidden border-y border-white/8 bg-[#090909] py-3.5 select-none"
        >
          <div className="animate-marquee flex items-center">
            {/* Bloco 1 */}
            <div className="flex shrink-0 items-center gap-10 pr-10">
              {tickerPilares.map((pilar, i) => (
                <Fragment key={`pilar-1-${i}`}>
                  <span className="whitespace-nowrap font-display font-medium text-sm sm:text-base tracking-wide text-white/90">
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
                  <span className="whitespace-nowrap font-display font-medium text-sm sm:text-base tracking-wide text-white/90">
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

        {/* 4. SEÇÃO: GARGALOS DOS LOJISTAS COM REVELAÇÃO PROGRESSIVA */}
        <section ref={gargalosRef} className="py-24 sm:py-28 bg-[#080808]" id="problema">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <div className={`reveal-init stagger-delay-1 ${gargalosInView ? "reveal-visible" : ""}`}>
                <SectionBadge>Diagnóstico de Mercado</SectionBadge>
              </div>
              <h2
                className={`mt-4 font-display font-semibold text-3xl sm:text-4xl md:text-5xl tracking-tight text-white reveal-init stagger-delay-2 ${
                  gargalosInView ? "reveal-visible" : ""
                }`}
              >
                O problema da maioria das lojas não é falta de leads.{" "}
                <span className="text-primary">É falta de sistema comercial.</span>
              </h2>
              <p
                className={`mt-4 font-sans text-base leading-relaxed text-muted-foreground reveal-init stagger-delay-3 ${
                  gargalosInView ? "reveal-visible" : ""
                }`}
              >
                Colocar dinheiro em anúncio sem ter processo de triagem, CRM e velocidade no
                atendimento é queimar verba. Identifique onde sua operação está travando:
              </p>
            </div>

            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {gargalosComerciais.map(({ icon: Icon, title, description, tag }, index) => {
                const delayClass = `stagger-delay-${index + 1}`;
                return (
                  <div
                    key={title}
                    className={`card-editorial relative flex flex-col justify-between rounded-xl border border-white/8 bg-[#121212] p-7 reveal-init ${delayClass} ${
                      gargalosInView ? "reveal-visible" : ""
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary">
                          <Icon className="h-5 w-5" />
                        </div>
                        <span className="rounded-full bg-white/5 px-2.5 py-0.5 text-[10px] font-mono tracking-wide text-primary">
                          {tag}
                        </span>
                      </div>

                      <h3 className="mt-6 font-display font-semibold text-xl text-white tracking-tight">
                        {title}
                      </h3>
                      <p className="mt-2.5 font-sans text-sm leading-relaxed text-muted-foreground">
                        {description}
                      </p>
                    </div>

                    <div className="mt-6 border-t border-white/8 pt-4 flex items-center gap-1.5 text-[11px] font-sans text-white/50">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>Solucionado no Ecossistema NC</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* 5. NOVA SEÇÃO: ECOSSISTEMA NC 3.0 (CIRCUITO INTERATIVO DA TRÍADE & BENTO GRID) */}
        <section
          ref={ecossistemaRef}
          className="border-t border-white/8 bg-[#0B0B0B] py-24 sm:py-32"
          id="ecossistema"
        >
          <Container>
            {/* Header da Seção */}
            <div className="mx-auto max-w-3xl text-center">
              <div className={`reveal-init stagger-delay-1 ${ecossistemaInView ? "reveal-visible" : ""}`}>
                <SectionBadge>Engenharia de Crescimento Automotivo</SectionBadge>
              </div>
              <h2
                className={`mt-4 font-display font-semibold text-3xl sm:text-4xl md:text-5xl tracking-tight text-white reveal-init stagger-delay-2 ${
                  ecossistemaInView ? "reveal-visible" : ""
                }`}
              >
                O Ecossistema Completo da <span className="text-primary">NC Agência</span>
              </h2>
              <p
                className={`mt-4 font-sans text-sm sm:text-base leading-relaxed text-muted-foreground reveal-init stagger-delay-3 ${
                  ecossistemaInView ? "reveal-visible" : ""
                }`}
              >
                Muito além de uma agência tradicional de campanhas: uma operação integrada que
                conecta atração qualificada, velocidade no atendimento e inteligência de vendas.
              </p>
            </div>

            {/* Painel Interativo: Circuito de Tração Automotiva (Tríade Conectada) */}
            <div
              className={`mt-14 mb-12 rounded-2xl border border-white/10 bg-[#121212]/95 p-6 sm:p-8 backdrop-blur-md relative overflow-hidden transition-all duration-300 reveal-init stagger-delay-3 ${
                ecossistemaInView ? "reveal-visible" : ""
              }`}
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-0.5 text-[10px] font-mono font-bold uppercase tracking-widest text-primary">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                    <span>Circuito Integrado de Tração Automotiva</span>
                  </div>
                  <h3 className="mt-2 font-display font-semibold text-xl sm:text-2xl text-white tracking-tight">
                    A Tríade que separa a NC de agências convencionais
                  </h3>
                  <p className="mt-1 font-sans text-xs sm:text-sm text-muted-foreground max-w-2xl leading-relaxed">
                    Tráfego sem CRM é lead perdido. CRM sem inteligência é esforço sem lucro.
                    Na NC, os três pilares operam em sincronia contínua e retroalimentada.
                  </p>
                </div>

                <div className="text-left lg:text-right shrink-0">
                  <span className="text-[11px] font-mono text-white/50 block">Modo de Visualização:</span>
                  <span className="text-xs font-semibold text-primary">
                    {activeTriad === "all" && "⚡ Fluxo Contínuo Completo"}
                    {activeTriad === "trafego" && "Pilar 01 • Atração de Alta Intenção"}
                    {activeTriad === "crm" && "Pilar 02 • Velocidade & Gestão de Leads"}
                    {activeTriad === "bi" && "Pilar 03 • Métricas, Giro & Margem"}
                  </span>
                </div>
              </div>

              {/* Barra do Feixe Luminoso Animado */}
              <div className="relative my-6 h-1 w-full bg-white/10 rounded-full overflow-hidden circuit-beam" />

              {/* Botões do Seletor Interativo da Tríade */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                <button
                  type="button"
                  onClick={() => setActiveTriad("all")}
                  className={`flex items-center gap-3 rounded-xl border p-3.5 text-left transition-all duration-200 cursor-pointer ${
                    activeTriad === "all"
                      ? "circuit-btn-active"
                      : "border-white/10 bg-white/5 hover:bg-white/8 text-white/80 hover:text-white"
                  }`}
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/20 text-primary">
                    <Activity className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono uppercase text-primary font-bold">Visão Geral</span>
                    <span className="text-xs font-semibold text-white">Tração Integrada</span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTriad("trafego")}
                  className={`flex items-center gap-3 rounded-xl border p-3.5 text-left transition-all duration-200 cursor-pointer ${
                    activeTriad === "trafego"
                      ? "circuit-btn-active"
                      : "border-white/10 bg-white/5 hover:bg-white/8 text-white/80 hover:text-white"
                  }`}
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/20 text-primary">
                    <Target className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono uppercase text-primary font-bold">01 • Atração</span>
                    <span className="text-xs font-semibold text-white">Tráfego Pago</span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTriad("crm")}
                  className={`flex items-center gap-3 rounded-xl border p-3.5 text-left transition-all duration-200 cursor-pointer ${
                    activeTriad === "crm"
                      ? "circuit-btn-active"
                      : "border-white/10 bg-white/5 hover:bg-white/8 text-white/80 hover:text-white"
                  }`}
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/20 text-primary">
                    <Workflow className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono uppercase text-primary font-bold">02 • Velocidade</span>
                    <span className="text-xs font-semibold text-white">CRM & Automação</span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTriad("bi")}
                  className={`flex items-center gap-3 rounded-xl border p-3.5 text-left transition-all duration-200 cursor-pointer ${
                    activeTriad === "bi"
                      ? "circuit-btn-active"
                      : "border-white/10 bg-white/5 hover:bg-white/8 text-white/80 hover:text-white"
                  }`}
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/20 text-primary">
                    <BarChart3 className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono uppercase text-primary font-bold">03 • Conversão</span>
                    <span className="text-xs font-semibold text-white">Inteligência Comercial</span>
                  </div>
                </button>
              </div>

              {/* Descrição Dinâmica do Circuito */}
              <div className="mt-4 rounded-lg bg-white/5 border border-white/5 px-4 py-2.5 text-xs text-white/80 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                <span className="font-sans">
                  {activeTriad === "all" &&
                    "Fluxo Contínuo Ativo: Os compradores atraídos no Tráfego (01) são triados em < 40s pelo CRM (02), e os dados de venda alimentam o BI (03) que direciona os novos investimentos."}
                  {activeTriad === "trafego" &&
                    "Foco em Aquisição: Campanhas multicanal no Meta & Google com filtros geográficos e de crédito, atraindo oportunidades com perfil aprovado no raio de atendimento da loja."}
                  {activeTriad === "crm" &&
                    "Foco em Velocidade & Gestão: Triagem automática em menos de 40 segundos e esteira Kanban organizada para nenhum comprador ficar sem resposta ou esquecido no WhatsApp."}
                  {activeTriad === "bi" &&
                    "Foco em Lucro & Giro: Acompanhamento de dias de pátio, custo por oportunidade e conversão por vendedor. Os dados mostram exatamente onde alocar o orçamento para lucro máximo."}
                </span>
              </div>
            </div>

            {/* BENTO GRID 3.0: 6 Módulos com Representações Gráficas Ricas e Próprias */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* CARD 1 (DESTAQUE TRÍADE - 2 COLUNAS NO LG): TRÁFEGO PAGO AUTOMOTIVO */}
              <div
                className={`card-editorial group relative flex flex-col justify-between overflow-hidden rounded-2xl border p-7 transition-all duration-300 lg:col-span-2 ${
                  activeTriad === "trafego" || activeTriad === "all"
                    ? "circuit-card-active bg-[#141414]"
                    : "border-white/10 bg-[#121212]"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-white shadow-glow">
                        <Target className="h-6 w-6" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-primary">
                          Pilar 01 • Atração de Alta Intenção
                        </span>
                        <h3 className="font-display font-semibold text-xl sm:text-2xl text-white tracking-tight">
                          Tráfego Pago Especializado
                        </h3>
                      </div>
                    </div>
                    <span className="hidden sm:inline-flex rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] font-mono font-bold text-primary uppercase">
                      Meta & Google Ads
                    </span>
                  </div>

                  <p className="mt-4 font-sans text-sm text-muted-foreground max-w-xl leading-relaxed">
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
                      <span className="text-[10px] font-mono text-muted-foreground uppercase">
                        Raio: 35km da loja
                      </span>
                    </div>

                    <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
                      <div className="rounded-lg bg-white/5 p-2.5">
                        <span className="text-[10px] text-muted-foreground block font-mono">
                          Público Alvo
                        </span>
                        <span className="font-bold text-white text-xs">Score / Financiamento</span>
                      </div>
                      <div className="rounded-lg bg-white/5 p-2.5">
                        <span className="text-[10px] text-muted-foreground block font-mono">
                          Segmentação
                        </span>
                        <span className="font-bold text-white text-xs">Troca + Entrada</span>
                      </div>
                      <div className="rounded-lg bg-white/5 p-2.5">
                        <span className="text-[10px] text-muted-foreground block font-mono">
                          Distribuição
                        </span>
                        <span className="font-bold text-primary text-xs">WhatsApp Direto</span>
                      </div>
                      <div className="rounded-lg bg-white/5 p-2.5">
                        <span className="text-[10px] text-muted-foreground block font-mono">
                          Qualidade Lead
                        </span>
                        <span className="font-bold text-emerald-400 text-xs">CPF Verificado</span>
                      </div>
                    </div>

                    {/* Simulação Visual de Anúncio de Estoque */}
                    <div className="mt-3.5 rounded-lg border border-white/5 bg-white/5 p-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div className="flex items-center gap-2.5">
                        <span className="flex h-6 w-6 items-center justify-center rounded-md bg-primary/20 text-primary text-[11px] font-bold">
                          ✓
                        </span>
                        <div>
                          <span className="font-semibold text-white text-xs block">
                            Veículos Seminovos Selecionados
                          </span>
                          <span className="text-[10px] text-muted-foreground">
                            Entrada facilitada • Avaliação do veículo usado pela Tabela FIPE
                          </span>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono font-bold text-primary bg-primary/10 border border-primary/20 px-2 py-1 rounded self-start sm:self-auto">
                        Simulação em 1 min
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-white/8 pt-4 text-xs font-semibold text-primary">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>Conectado à esteira de triagem de CRM (&lt; 40s)</span>
                  </div>
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>

              {/* CARD 2 (DESTAQUE TRÍADE - 1 COLUNA): CRM & PROCESSOS COMERCIAIS */}
              <div
                className={`card-editorial group relative flex flex-col justify-between overflow-hidden rounded-2xl border p-7 transition-all duration-300 ${
                  activeTriad === "crm" || activeTriad === "all"
                    ? "circuit-card-active bg-[#141414]"
                    : "border-white/10 bg-[#121212]"
                }`}
              >
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-white shadow-glow">
                    <Database className="h-6 w-6" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-primary mt-4 block">
                    Pilar 02 • Organização Comercial
                  </span>
                  <h3 className="font-display font-semibold text-xl text-white tracking-tight mt-1">
                    CRM & Processos
                  </h3>
                  <p className="mt-2.5 font-sans text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Organização centralizada de todas as oportunidades. Nenhum comprador fica
                    perdido em conversas soltas no celular do vendedor.
                  </p>

                  {/* Representação Gráfica: Mini Pipeline Kanban de Loja */}
                  <div className="mt-5 space-y-2 rounded-xl border border-white/10 bg-[#0A0A0A] p-3 text-[11px]">
                    <div className="flex items-center justify-between text-[10px] text-muted-foreground font-semibold">
                      <span className="font-mono">Pipeline Comercial da Loja</span>
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
              <div
                className={`card-editorial group relative flex flex-col justify-between overflow-hidden rounded-2xl border p-7 transition-all duration-300 ${
                  activeTriad === "crm" || activeTriad === "all"
                    ? "circuit-card-active bg-[#141414]"
                    : "border-white/10 bg-[#121212]"
                }`}
              >
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-white shadow-glow">
                    <Bot className="h-6 w-6" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-primary mt-4 block">
                    Pilar 02 (B) • Velocidade Instantânea
                  </span>
                  <h3 className="font-display font-semibold text-xl text-white tracking-tight mt-1">
                    Automações Inteligentes
                  </h3>
                  <p className="mt-2.5 font-sans text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Triagem automática de interesse, modelo e valor de entrada em menos de 40
                    segundos, distribuindo o lead quente diretamente para o vendedor disponível.
                  </p>

                  {/* Representação Gráfica: Fluxo de Resposta em Segundos */}
                  <div className="mt-5 rounded-xl border border-white/10 bg-[#0A0A0A] p-3 text-xs">
                    <div className="flex items-center gap-2 text-emerald-400 font-bold text-[11px]">
                      <Zap className="h-3.5 w-3.5 animate-pulse" /> Tempo de Resposta: &lt; 40 segundos
                    </div>
                    <div className="mt-2 space-y-1.5 text-[11px] text-[#A3A3A3]">
                      <div className="flex items-center gap-2">
                        <span className="text-white font-mono font-bold">01.</span>
                        <span>Coleta de Modelo Desejado & Troca</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-white font-mono font-bold">02.</span>
                        <span>Verificação de Entrada e Simulação</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-white font-mono font-bold">03.</span>
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
              <div
                className={`card-editorial group relative flex flex-col justify-between overflow-hidden rounded-2xl border p-7 transition-all duration-300 lg:col-span-2 ${
                  activeTriad === "bi" || activeTriad === "all"
                    ? "circuit-card-active bg-[#141414]"
                    : "border-white/10 bg-[#121212]"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-white shadow-glow">
                        <BarChart3 className="h-6 w-6" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-primary">
                          Pilar 03 • Métricas & Conversão
                        </span>
                        <h3 className="font-display font-semibold text-xl sm:text-2xl text-white tracking-tight">
                          Inteligência Comercial & Indicadores
                        </h3>
                      </div>
                    </div>
                    <span className="hidden sm:inline-flex rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-mono font-bold text-white/80 uppercase">
                      Simulação Painel de BI NC
                    </span>
                  </div>

                  <p className="mt-4 font-sans text-sm text-muted-foreground max-w-xl leading-relaxed">
                    Acompanhamento sistemático de indicadores essenciais: giro de pátio, custo
                    por oportunidade qualificada, taxa de conversão por vendedor e margem líquida
                    por veículo vendido.
                  </p>

                  {/* Representação Gráfica: Dashboard Demonstrativo com Gráfico SVG */}
                  <div className="mt-6 rounded-xl border border-white/10 bg-[#0A0A0A] p-4">
                    <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
                      <span className="font-semibold text-white">
                        Painel Gerencial de Indicadores da Loja
                      </span>
                      <span className="text-emerald-400 font-mono font-bold text-[11px]">
                        Atualização em Tempo Real
                      </span>
                    </div>

                    {/* Gráfico SVG com Animação .draw-chart */}
                    <div className="mt-3 h-20 w-full overflow-hidden">
                      <svg
                        viewBox="0 0 400 70"
                        className="w-full h-full"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                      >
                        <defs>
                          <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#EF4045" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="#EF4045" stopOpacity="0.0" />
                          </linearGradient>
                        </defs>
                        {/* Linhas de grade sutis */}
                        <line x1="0" y1="20" x2="400" y2="20" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
                        <line x1="0" y1="50" x2="400" y2="50" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
                        {/* Área sob a curva */}
                        <path
                          d="M0,60 Q80,50 150,38 T280,24 T400,10 L400,70 L0,70 Z"
                          fill="url(#chartGradient)"
                        />
                        {/* Linha principal com animação .draw-chart */}
                        <path
                          d="M0,60 Q80,50 150,38 T280,24 T400,10"
                          fill="none"
                          stroke="#EF4045"
                          strokeWidth="2.5"
                          className="draw-chart"
                        />
                        {/* Pontos de controle */}
                        <circle cx="150" cy="38" r="3.5" fill="#EF4045" />
                        <circle cx="280" cy="24" r="3.5" fill="#EF4045" />
                        <circle cx="400" cy="10" r="4" fill="#ffffff" />
                      </svg>
                    </div>

                    <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4 text-xs">
                      <div className="rounded-lg bg-white/5 p-2.5">
                        <span className="text-[10px] text-muted-foreground block font-mono">
                          Giro Médio de Estoque
                        </span>
                        <span className="font-bold text-white text-base">26 dias</span>
                        <span className="text-[10px] text-emerald-400 block mt-0.5">
                          -18 dias no pátio
                        </span>
                      </div>

                      <div className="rounded-lg bg-white/5 p-2.5">
                        <span className="text-[10px] text-muted-foreground block font-mono">
                          Taxa de Conversão
                        </span>
                        <span className="font-bold text-white text-base">34,2%</span>
                        <span className="text-[10px] text-primary block mt-0.5">
                          Visita presencial
                        </span>
                      </div>

                      <div className="rounded-lg bg-white/5 p-2.5">
                        <span className="text-[10px] text-muted-foreground block font-mono">
                          Custo por Oportunidade
                        </span>
                        <span className="font-bold text-white text-base">Otimizado</span>
                        <span className="text-[10px] text-muted-foreground block mt-0.5">
                          Score validado
                        </span>
                      </div>

                      <div className="rounded-lg bg-white/5 p-2.5">
                        <span className="text-[10px] text-muted-foreground block font-mono">
                          Controle de Vendedores
                        </span>
                        <span className="font-bold text-emerald-400 text-base">100% Ativo</span>
                        <span className="text-[10px] text-muted-foreground block mt-0.5">
                          Follow-up monitorado
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-white/8 pt-4 text-xs font-semibold text-primary">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>Retroalimenta as campanhas com dados reais de fechamento</span>
                  </div>
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>

              {/* CARD 5 (COMPLEMENTAR - 1 COLUNA): CRIATIVOS DE PERFORMANCE */}
              <div className="card-editorial group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#121212] p-7 transition-all duration-300">
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white">
                    <Video className="h-6 w-6" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-muted-foreground mt-4 block">
                    Engenharia Criativa
                  </span>
                  <h3 className="font-display font-semibold text-xl text-white tracking-tight mt-1">
                    Criativos de Alta Demanda
                  </h3>
                  <p className="mt-2.5 font-sans text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Produção visual e roteirização automotiva focada em gerar desejo imediato e
                    destacar condições de compra que aceleram a decisão do comprador.
                  </p>

                  {/* Representação Gráfica: Mock de Anúncio Automotivo Validado */}
                  <div className="mt-5 rounded-xl border border-white/10 bg-[#0A0A0A] p-3 text-xs">
                    <div className="flex items-center justify-between text-[11px] font-semibold text-white">
                      <span>Anúncio Focado em Giro</span>
                      <span className="text-primary text-[10px] font-mono uppercase">Formato Validado</span>
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
              <div className="card-editorial group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#121212] p-7 transition-all duration-300">
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white">
                    <Award className="h-6 w-6" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-muted-foreground mt-4 block">
                    Capacitação Comercial
                  </span>
                  <h3 className="font-display font-semibold text-xl text-white tracking-tight mt-1">
                    Treinamento & Cultura
                  </h3>
                  <p className="mt-2.5 font-sans text-xs sm:text-sm text-muted-foreground leading-relaxed">
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
              <p className="font-sans text-sm text-muted-foreground mb-4">
                Quer entender como aplicar esse ecossistema completo no estoque atual da sua loja?
              </p>
              <DiagnosticButton
                position="hero"
                label="Solicitar diagnóstico do meu estoque"
                className="h-14 px-8 text-sm font-semibold shadow-glow tracking-normal"
              />
            </div>
          </Container>
        </section>

        {/* 6. MÉTODO NC (PROGRESSÃO VISUAL EM TRILHA CONECTADA) */}
        <section
          ref={metodoRef}
          className="py-24 sm:py-28 bg-[#080808] border-t border-white/8"
          id="metodo"
        >
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <div className={`reveal-init stagger-delay-1 ${metodoInView ? "reveal-visible" : ""}`}>
                <SectionBadge>Processo Estruturado</SectionBadge>
              </div>
              <h2
                className={`mt-4 font-display font-semibold text-3xl sm:text-4xl md:text-5xl tracking-tight text-white reveal-init stagger-delay-2 ${
                  metodoInView ? "reveal-visible" : ""
                }`}
              >
                Nossa Metodologia:{" "}
                <span className="text-primary">Simples, Direta e Focada em Giro</span>
              </h2>
              <p
                className={`mx-auto mt-4 max-w-2xl text-center font-sans text-sm sm:text-base leading-relaxed text-muted-foreground reveal-init stagger-delay-3 ${
                  metodoInView ? "reveal-visible" : ""
                }`}
              >
                Transformamos a maneira como sua revenda atrai, atende e converte clientes
                em um processo contínuo de três etapas complementares.
              </p>
            </div>

            {/* Trilha Progressiva Conectada */}
            <div className="relative mt-16 sm:mt-20">
              {/* Linha Conectora Superior Desktop */}
              <div
                className="absolute top-10 left-[16%] right-[16%] h-0.5 bg-white/10 hidden md:block"
                aria-hidden="true"
              >
                <div className="h-full bg-gradient-to-r from-primary/30 via-primary to-primary/30 circuit-beam" />
              </div>

              {/* Cards das 3 Estações da Metodologia */}
              <div className="grid gap-8 md:grid-cols-3 relative">
                {methodologySteps.map(({ step, phase, tag, title, text, icon: StepIcon, deliverables }, index) => {
                  const delayClass = `stagger-delay-${index + 1}`;
                  return (
                    <div
                      key={title}
                      className={`card-editorial group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-[#121212] p-8 transition-all duration-300 hover:border-primary/50 reveal-init ${delayClass} ${
                        metodoInView ? "reveal-visible" : ""
                      }`}
                    >
                      <div>
                        {/* Topo com Marcador Numérico e Ícone */}
                        <div className="flex items-center justify-between">
                          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 border border-primary/30 text-primary font-mono font-bold text-sm method-node-glow">
                            {step}
                          </div>
                          <span className="rounded-full bg-white/5 border border-white/10 px-2.5 py-0.5 text-[10px] font-mono tracking-wide text-primary uppercase font-bold">
                            {phase}
                          </span>
                        </div>

                        <div className="mt-6 flex items-center gap-3">
                          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-white/90">
                            <StepIcon className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <span className="text-[10px] font-mono text-muted-foreground uppercase block">
                              {tag}
                            </span>
                            <h3 className="font-display font-semibold text-xl text-white tracking-tight">
                              {title}
                            </h3>
                          </div>
                        </div>

                        <p className="mt-4 font-sans text-sm leading-relaxed text-muted-foreground">
                          {text}
                        </p>

                        {/* Entregáveis Práticos */}
                        <div className="mt-6 space-y-2 border-t border-white/8 pt-4">
                          <span className="text-[10px] font-mono uppercase tracking-wider text-white/50 block">
                            Entregáveis Principais:
                          </span>
                          {deliverables.map((item, itemIdx) => (
                            <div key={itemIdx} className="flex items-start gap-2 text-xs text-white/80">
                              <Check className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                              <span className="font-sans leading-tight">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-6 pt-4 border-t border-white/8 flex items-center justify-between text-xs font-semibold text-primary">
                        <span>Fase {step} do Ecossistema</span>
                        <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Container>
        </section>

        {/* 7. CASES E DEPOIMENTOS: APRESENTAÇÃO EDITORIAL DE RESULTADOS REAIS */}
        <section
          ref={depoimentosRef}
          className="border-t border-white/8 bg-[#0E0E0E] py-24 sm:py-28"
          id="depoimentos"
        >
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <div className={`reveal-init stagger-delay-1 ${depoimentosInView ? "reveal-visible" : ""}`}>
                <SectionBadge>Evidências & Casos Reais</SectionBadge>
              </div>
              <h2
                className={`mt-4 font-display font-semibold text-3xl sm:text-4xl md:text-5xl tracking-tight text-white reveal-init stagger-delay-2 ${
                  depoimentosInView ? "reveal-visible" : ""
                }`}
              >
                Resultados Reais Documentados no{" "}
                <span className="text-primary">Mercado Automotivo</span>
              </h2>
              <p
                className={`mt-4 font-sans text-sm sm:text-base leading-relaxed text-muted-foreground reveal-init stagger-delay-3 ${
                  depoimentosInView ? "reveal-visible" : ""
                }`}
              >
                Como concessionárias e revendas parceiras substituíram a incerteza comercial e o
                estoque parado por previsibilidade de caixa através do Ecossistema NC.
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((t, i) => {
                const delayClass = `stagger-delay-${i + 1}`;
                return (
                  <div
                    key={t.name}
                    className={`card-editorial group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-[#121212] p-8 transition-all duration-300 hover:border-primary/50 reveal-init ${delayClass} ${
                      depoimentosInView ? "reveal-visible" : ""
                    }`}
                  >
                    <div>
                      {/* Topo do Case: Segmento & Status de Auditoria */}
                      <div className="flex items-center justify-between border-b border-white/8 pb-4">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-white/60">
                          {t.segment}
                        </span>
                        <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          <span>{t.verifiedBadge}</span>
                        </div>
                      </div>

                      {/* Bloco de Métrica de Alto Impacto */}
                      <div className="mt-6 flex items-baseline gap-2">
                        <span className="font-display font-bold text-4xl sm:text-5xl text-primary tracking-tight">
                          {t.metricHighlight}
                        </span>
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-wide text-white block mt-1">
                        {t.metricLabel}
                      </span>

                      {/* Citação Editorial */}
                      <div className="mt-6 relative">
                        <Quote className="h-6 w-6 text-primary/30 mb-2" />
                        <blockquote className="font-sans text-sm leading-relaxed text-white/90 italic">
                          "{t.quote}"
                        </blockquote>
                      </div>

                      {/* Checklist de Impactos na Operação da Loja */}
                      <div className="mt-6 space-y-2 border-t border-white/8 pt-4">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-white/50 block">
                          Impacto Documentado na Loja:
                        </span>
                        {t.impactDetails.map((item, itemIdx) => (
                          <div key={itemIdx} className="flex items-start gap-2 text-xs text-muted-foreground">
                            <Check className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                            <span className="font-sans leading-tight text-white/80">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Rodapé do Case com Identificação do Lojista */}
                    <div className="mt-8 border-t border-white/8 pt-4 flex items-center justify-between">
                      <div>
                        <div className="font-display font-semibold text-sm text-white">{t.name}</div>
                        <div className="text-xs text-muted-foreground font-sans">
                          {t.role} • <span className="text-white/80">{t.company}</span>
                        </div>
                      </div>
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-primary">
                        <ShieldCheck className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* 8. SEÇÃO EXECUTIVA DA VICTORIA MAIA: AUTORIDADE & 10 ANOS NO SETOR */}
        <section
          ref={sobreRef}
          className="border-t border-white/8 bg-[#080808] py-24 sm:py-32"
          id="sobre"
        >
          <Container>
            <div className="grid items-center gap-12 lg:grid-cols-12">
              {/* Coluna Visual: Fotografia Oficial Preservada com Moldura Executiva */}
              <div className="flex justify-center lg:col-span-5">
                <div
                  className={`relative w-full max-w-md reveal-init stagger-delay-1 ${
                    sobreInView ? "reveal-visible" : ""
                  }`}
                >
                  {/* Efeito Glow Suave de Fundo */}
                  <div className="absolute -inset-2 rounded-2xl bg-primary/20 blur-2xl" />

                  {/* Moldura da Fotografia */}
                  <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-[#121212] p-2 shadow-2xl">
                    <img
                      src={victoriaMaia}
                      alt="Victoria Maia — Fundadora da NC Agência e Especialista no Mercado Automotivo"
                      loading="lazy"
                      width={800}
                      height={1100}
                      className="w-full rounded-xl object-cover grayscale contrast-110 transition-all duration-500 hover:grayscale-0"
                    />

                    {/* Card de Autoridade Sobreposto */}
                    <div className="mt-3 rounded-xl border border-white/10 bg-[#0A0A0A]/90 p-4 backdrop-blur-md">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-display font-semibold text-base text-white">
                            Victoria Maia
                          </div>
                          <div className="text-xs text-primary font-medium">
                            Fundadora & Estrategista-Chefe
                          </div>
                        </div>
                        <span className="rounded-full bg-primary/10 border border-primary/20 px-2.5 py-0.5 text-[10px] font-mono text-primary font-bold">
                          10 Anos
                        </span>
                      </div>
                      <div className="mt-2 text-[11px] font-mono text-white/60">
                        Especialista em Crescimento & Inteligência Comercial Automotiva
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Coluna Conteúdo: Narrativa Editorial & Pilares de Credibilidade */}
              <div className="lg:col-span-7">
                <div className={`reveal-init stagger-delay-1 ${sobreInView ? "reveal-visible" : ""}`}>
                  <SectionBadge>Liderança & Experiência de Mercado</SectionBadge>
                </div>

                <h2
                  className={`mt-4 font-display font-semibold text-3xl sm:text-4xl md:text-5xl leading-tight text-white tracking-tight reveal-init stagger-delay-2 ${
                    sobreInView ? "reveal-visible" : ""
                  }`}
                >
                  Mais de uma década vivendo a realidade de{" "}
                  <span className="text-primary">pátios e concessionárias.</span>
                </h2>

                {/* Citação Direta de Posicionamento */}
                <div
                  className={`mt-6 border-l-2 border-primary pl-4 py-1 reveal-init stagger-delay-3 ${
                    sobreInView ? "reveal-visible" : ""
                  }`}
                >
                  <p className="font-display text-base sm:text-lg text-white/95 italic leading-relaxed">
                    "No mercado de veículos, quem não tem processo comercial estruturado depende da sorte.
                    Na NC, transformamos estoque parado em previsibilidade diária de vendas."
                  </p>
                </div>

                <div
                  className={`mt-6 space-y-4 font-sans text-sm sm:text-base leading-relaxed text-muted-foreground reveal-init stagger-delay-3 ${
                    sobreInView ? "reveal-visible" : ""
                  }`}
                >
                  <p>
                    Fundada por <strong className="text-white">Victoria Maia</strong>, a NC Agência nasceu da
                    convivência direta com o dia a dia de lojistas de seminovos e novos. Não somos uma agência
                    teórica de marketing: conhecemos na prática a pressão de pagar pátio, a dinâmica de aprovação
                    de crédito e a frustração de perder vendas por demora no WhatsApp.
                  </p>
                  <p>
                    O método desenvolvido pela Victoria já foi aplicado e validado em{" "}
                    <strong className="text-white">+100 lojas de carros no Brasil</strong>, integrando tráfego
                    pago de alta intenção, triagem automática em menos de 40 segundos e treinamento contínuo
                    para o time comercial fechar mais negócios na loja física.
                  </p>
                </div>

                {/* Três Pilares de Autoridade */}
                <div
                  className={`mt-8 space-y-3 reveal-init stagger-delay-4 ${
                    sobreInView ? "reveal-visible" : ""
                  }`}
                >
                  <div className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/5 p-3.5">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/20 text-primary font-mono text-xs font-bold">
                      01
                    </span>
                    <div>
                      <h4 className="font-display font-semibold text-sm text-white">
                        Visão Real de Salão de Vendas
                      </h4>
                      <p className="font-sans text-xs text-muted-foreground mt-0.5 leading-relaxed">
                        Entendimento aprofundado sobre margem de seminovos, trocas na FIPE, financiamentos e metas de giro.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/5 p-3.5">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/20 text-primary font-mono text-xs font-bold">
                      02
                    </span>
                    <div>
                      <h4 className="font-display font-semibold text-sm text-white">
                        Metodologia Testada em +100 Lojas
                      </h4>
                      <p className="font-sans text-xs text-muted-foreground mt-0.5 leading-relaxed">
                        Processo comercial replicável em diversos perfis de estoque, de multimarcas premium a revendas de alto giro.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/5 p-3.5">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/20 text-primary font-mono text-xs font-bold">
                      03
                    </span>
                    <div>
                      <h4 className="font-display font-semibold text-sm text-white">
                        Alinhamento de Pessoas & Automação
                      </h4>
                      <p className="font-sans text-xs text-muted-foreground mt-0.5 leading-relaxed">
                        Treinamento prático da equipe de vendedores para responder rápido, quebrar objeções e agendar visitas na loja.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Indicadores Técnicos Institucionais */}
                <div
                  className={`mt-8 grid grid-cols-3 gap-3 border-y border-white/10 py-5 text-center reveal-init stagger-delay-4 ${
                    sobreInView ? "reveal-visible" : ""
                  }`}
                >
                  <div>
                    <span className="font-display font-bold text-2xl sm:text-3xl text-white block">
                      +100
                    </span>
                    <span className="font-mono text-[10px] uppercase text-muted-foreground">
                      Lojas Ativas
                    </span>
                  </div>
                  <div className="border-x border-white/10">
                    <span className="font-display font-bold text-2xl sm:text-3xl text-primary block">
                      10 Anos
                    </span>
                    <span className="font-mono text-[10px] uppercase text-muted-foreground">
                      No Setor Automotivo
                    </span>
                  </div>
                  <div>
                    <span className="font-display font-bold text-2xl sm:text-3xl text-white block">
                      Nacional
                    </span>
                    <span className="font-mono text-[10px] uppercase text-muted-foreground">
                      Atuação no Brasil
                    </span>
                  </div>
                </div>

                <div
                  className={`mt-8 flex flex-col sm:flex-row items-center gap-4 reveal-init stagger-delay-4 ${
                    sobreInView ? "reveal-visible" : ""
                  }`}
                >
                  <DiagnosticButton
                    position="sobre"
                    label="Agendar conversa com a fundadora"
                    className="w-full sm:w-auto"
                  />
                  <span className="text-xs text-muted-foreground font-sans">
                    Sessão estratégica direcionada exclusivamente a proprietários e gerentes.
                  </span>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* 9. PARCEIROS (PRESERVADOS E REFINADOS EDITORIALMENTE) */}
        <section className="border-t border-white/8 bg-[#0E0E0E] py-20 sm:py-24" id="parceiros">
          <Container>
            <div className="text-center">
              <SectionBadge>Confiabilidade de Mercado</SectionBadge>
              <h2 className="mt-4 font-display font-semibold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight">
                Lojas e Redes que Confiam no Ecossistema NC
              </h2>
              <p className="mt-3 text-center font-sans text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
                Mais de 100 parceiros ativos acelerando vendas e giro de pátio em diversas regiões do Brasil.
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
        <section className="relative overflow-hidden border-t border-white/10 bg-[#080808] py-20 sm:py-24 text-center">
          <div className="absolute inset-0 bg-radial-vignette" />
          <Container className="relative z-10 max-w-3xl">
            <SectionBadge>Decisão Comercial</SectionBadge>
            <h2 className="mt-4 font-display font-semibold text-3xl sm:text-4xl md:text-5xl tracking-tight text-white">
              Pronto para colocar sua loja na frente da concorrência?
            </h2>
            <p className="mt-4 font-sans text-sm sm:text-base leading-relaxed text-muted-foreground">
              Pare de depender da sorte e de leads desqualificados. Dê o primeiro passo para
              estruturar seu processo comercial automotivo com quem realmente entende do setor.
            </p>
            <div className="mt-8 flex justify-center">
              <DiagnosticButton
                position="final"
                label="Quero acelerar minha loja agora"
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
