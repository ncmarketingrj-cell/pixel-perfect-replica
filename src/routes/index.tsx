import { createFileRoute } from "@tanstack/react-router";
import { Fragment, useState } from "react";
import {
  CheckCircle2,
  Clock,
  Database,
  ArrowRight,
  BarChart3,
  Bot,
  Sparkles,
  Target,
  Users,
  Zap,
  ChevronRight,
  ShieldCheck,
  Building2,
  Workflow,
  Check,
  Car,
  MessageSquare,
  Menu,
  X,
  Layers,
  ArrowUpRight,
  Phone,
  HelpCircle,
  Eye,
} from "lucide-react";

import ncLogo from "@/assets/nc-logo.png";
import heroDealership from "@/assets/hero-dealership.jpg";
import victoriaAbout from "@/assets/victoria-founder.png";

import { CRM_CONFIG, getOfficialWhatsAppTrialUrl } from "@/config/platform";
import {
  TrialProvider,
  TrialCtaButton,
  useTrial,
} from "@/components/landing/TrialModal";
import { InteractivePlatformTabs } from "@/components/landing/InteractivePlatformTabs";
import { HeroVideoPlayer } from "@/components/landing/HeroVideoPlayer";
import { AiDemoVideoPlayer } from "@/components/landing/AiDemoVideoPlayer";
import { LegalModals, type LegalModalType } from "@/components/landing/LegalModals";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useInView } from "@/hooks/use-in-view";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "NC Performance Suite — CRM Automotivo com Inteligência Artificial | by NC Agência",
      },
      {
        name: "description",
        content:
          "Pare de perder oportunidades por demora no atendimento. Conheça o CRM automotivo com inteligência artificial que ajuda sua loja a responder mais rápido, qualificar compradores e organizar cada negociação.",
      },
      {
        name: "keywords",
        content:
          "CRM automotivo, inteligência artificial para lojas de carros, software para revenda de veículos, CRM para concessionárias, gestão de leads automotivos, Kanban automotivo, primeiro atendimento rápido, NC Performance Suite, NC Agência",
      },
      {
        property: "og:title",
        content: "NC Performance Suite — CRM Automotivo com Inteligência Artificial",
      },
      {
        property: "og:description",
        content:
          "Pare de perder oportunidades por demora no atendimento. Conheça o CRM automotivo com inteligência artificial feito especialmente para lojas de veículos.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:site_name", content: "NC Performance Suite by NC Agência" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "index, follow" },
    ],
  }),
  component: Index,
});

function Logo({ className = "h-9" }: { className?: string }) {
  return (
    <img
      src={ncLogo}
      alt="NC Performance Suite by NC Agência"
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

const tickerItems = [
  "CRM Automotivo com Inteligência Artificial",
  "Primeiro Atendimento Instantâneo via WhatsApp",
  "Kanban de Oportunidades em 5 Estágios",
  "Histórico Completo de Interações e Veículos",
  "Qualificação de Troca & Entrada com IA",
  "Acompanhamento e Follow-up da Equipe",
  "Visibilidade Total da Operação Comercial",
  "Teste Gratuito por 7 Dias",
];

const painPoints = [
  {
    icon: Clock,
    title: "Demora no primeiro atendimento",
    description:
      "Enquanto o comprador pesquisa em diversas lojas simultaneamente, a demora para responder no WhatsApp faz o interesse esfriar e a oportunidade migrar para a concorrência.",
    tag: "Gargalo de Tempo",
  },
  {
    icon: Users,
    title: "Leads que se perdem entre vendedores e conversas",
    description:
      "Contatos espalhados nos celulares pessoais da equipe comercial, sem centralização, sem registro de mensagens e sem histórico claro do veículo de interesse.",
    tag: "Falta de Centralização",
  },
  {
    icon: Workflow,
    title: "Falta de acompanhamento e follow-up",
    description:
      "Negociações pausadas que nunca mais são retomadas. Sem rotina e sem lembretes de contato, clientes com real intenção de compra são simplesmente esquecidos.",
    tag: "Perda de Oportunidades",
  },
  {
    icon: BarChart3,
    title: "Gestão sem visão clara do funil de vendas",
    description:
      "Proprietários e gestores sem visibilidade sobre quantos compradores estão em triagem, quantos agendaram visita física ao pátio e em qual etapa o processo está travando.",
    tag: "Falta de Indicadores",
  },
];

const crmFeatures = [
  {
    number: "01",
    title: "Kanban de oportunidades",
    description:
      "Visualize cada negociação em cartões organizados por etapas claras: Novo Lead, Chatbot/IA, Aguardando Atendimento, Atendimento Humano e Follow-up.",
    icon: Workflow,
    badge: "Fluxo Visual",
  },
  {
    number: "02",
    title: "Funil comercial",
    description:
      "Estrutura de avanço de negociações desenhada para o ciclo de decisão de compra de veículos novos e seminovos.",
    icon: Target,
    badge: "Processo Claro",
  },
  {
    number: "03",
    title: "Inteligência artificial de atendimento",
    description:
      "Acolhimento imediato com respostas coerentes às dúvidas comuns de quem está interessado em um veículo do seu estoque.",
    icon: Bot,
    badge: "Atendimento Rápido",
  },
  {
    number: "04",
    title: "Gestão de contatos",
    description:
      "Base de clientes centralizada na loja, evitando que o histórico das negociações fique restrito aos celulares pessoais dos vendedores.",
    icon: Users,
    badge: "Patrimônio da Loja",
  },
  {
    number: "05",
    title: "Histórico de interações",
    description:
      "Registro de todas as conversas, anotações de contrapropostas, veículos avaliados na troca e preferências de financiamento.",
    icon: Database,
    badge: "Memória Comercial",
  },
  {
    number: "06",
    title: "Acompanhamento e follow-up",
    description:
      "Organização das tarefas diárias da equipe para garantir que nenhum comprador fique sem retorno ou proposta atualizada.",
    icon: Clock,
    badge: "Régua Ativa",
  },
  {
    number: "07",
    title: "Visibilidade da operação comercial",
    description:
      "Painel unificado para o gestor acompanhar a velocidade de resposta, distribuição dos contatos e volume de oportunidades em andamento.",
    icon: BarChart3,
    badge: "Controle Gerencial",
  },
];

const commercialJourneySteps = [
  {
    step: "01",
    title: "O interessado entra em contato",
    description:
      "O comprador envia uma mensagem demonstrando interesse por um veículo específico do estoque a partir do WhatsApp, anúncios ou site da loja.",
    icon: MessageSquare,
    tag: "Entrada do Lead",
  },
  {
    step: "02",
    title: "A IA realiza a qualificação inicial",
    description:
      "A inteligência artificial responde em segundos, acolhe o cliente e coleta detalhes essenciais como pretensão de entrada e veículo usado na troca.",
    icon: Bot,
    tag: "Triagem Imediata",
  },
  {
    step: "03",
    title: "A oportunidade é organizada no CRM",
    description:
      "O contato é automaticamente inserido no funil Kanban com o resumo da conversa e dados do veículo desejado devidamente cadastrados.",
    icon: Workflow,
    tag: "Estruturação no Funil",
  },
  {
    step: "04",
    title: "O vendedor assume a negociação com mais contexto",
    description:
      "A equipe comercial entra em contato já sabendo o modelo de interesse, condição de pagamento e carro na troca, acelerando o agendamento da visita.",
    icon: CheckCircle2,
    tag: "Negociação & Venda",
  },
];

const faqItems = [
  {
    question: "O NC Performance Suite é exclusivo para o setor automotivo?",
    answer:
      "Sim. O software foi concebido e configurado especificamente para a realidade de lojas de veículos, revendas de seminovos, multimarcas e concessionárias. Seus fluxos de triagem, etapas de funil e termos da IA consideram veículos na troca, intenção de entrada e rotina de salão de vendas.",
  },
  {
    question: "Como funciona a IA de atendimento?",
    answer:
      "A IA atua como um primeiro assistente ágil conectado ao canal de atendimento. Assim que o cliente manda mensagem demonstrando interesse em um carro, a IA responde cordialmente, tira dúvidas preliminares frequentes e coleta dados cruciais (como valor de entrada pretendido ou modelo de carro na troca), organizando o contexto para o vendedor.",
  },
  {
    question: "A IA substitui o vendedor?",
    answer:
      "Não. A IA não substitui o vendedor, ela o apoia. Seu papel é eliminar a demora inicial no primeiro contato e poupar a equipe de tarefas repetitivas de triagem. O fechamento, a negociação de valores, a avaliação do veículo usado e a assinatura do contrato continuam sendo conduzidos pelos seus consultores comerciais.",
  },
  {
    question: "Posso organizar minhas oportunidades em Kanban?",
    answer:
      "Sim. O NC Performance Suite oferece um painel visual em formato Kanban, permitindo visualizar com clareza em qual etapa cada comprador se encontra: triagem inicial, qualificação, visita agendada na loja ou proposta em andamento.",
  },
  {
    question: "O que posso testar durante os 7 dias?",
    answer:
      "Durante o período de teste de 7 dias você tem acesso completo para vivenciar a experiência do software na rotina da sua loja: organização do funil comercial, gestão de contatos, histórico de conversas e demonstração prática do atendimento inicial assistido por inteligência artificial.",
  },
  {
    question: "Como começo a usar a plataforma?",
    answer:
      "Basta clicar em qualquer botão de 'Testar grátis por 7 dias' nesta página para abrir o WhatsApp oficial da nossa central de vendas com a mensagem de ativação já preenchida. Nossa equipe libera seu acesso e auxilia na configuração inicial da sua loja.",
  },
];

function Index() {
  const { ref: dorRef, isInView: dorInView } = useInView<HTMLElement>({ threshold: 0.1 });
  const { ref: plataformaRef, isInView: plataformaInView } = useInView<HTMLElement>({ threshold: 0.1 });
  const { ref: iaRef, isInView: iaInView } = useInView<HTMLElement>({ threshold: 0.1 });
  const { ref: funcionalidadesRef, isInView: funcionalidadesInView } = useInView<HTMLElement>({ threshold: 0.1 });
  const { ref: jornadaRef, isInView: jornadaInView } = useInView<HTMLElement>({ threshold: 0.1 });
  const { ref: autoridadeRef, isInView: autoridadeInView } = useInView<HTMLElement>({ threshold: 0.1 });
  const { ref: ofertaRef, isInView: ofertaInView } = useInView<HTMLElement>({ threshold: 0.1 });
  const { ref: faqRef, isInView: faqInView } = useInView<HTMLElement>({ threshold: 0.1 });

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [legalModal, setLegalModal] = useState<LegalModalType>(null);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <TrialProvider>
      {/* 1. NAVBAR FIXA EXECUTIVA */}
      <header className="sticky top-0 z-50 w-full border-b border-white/8 bg-[#080808]/92 backdrop-blur-lg">
        <Container className="flex h-20 items-center justify-between">
          {/* Logo do Produto */}
          <a
            href="#"
            aria-label={`${CRM_CONFIG.productName} ${CRM_CONFIG.signature}`}
            className="shrink-0"
          >
            <Logo className="h-8 sm:h-9" />
          </a>

          {/* Links de Navegação Desktop por Âncora */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-[13px] tracking-[-0.01em] font-medium text-neutral-300">
            <a
              href="#plataforma"
              className="hover:text-white transition-colors duration-150 py-1 whitespace-nowrap"
            >
              Plataforma
            </a>
            <a
              href="#inteligencia-artificial"
              className="hover:text-white transition-colors duration-150 py-1 whitespace-nowrap"
            >
              Inteligência Artificial
            </a>
            <a
              href="#funcionalidades"
              className="hover:text-white transition-colors duration-150 py-1 whitespace-nowrap"
            >
              Funcionalidades
            </a>
            <a
              href="#como-funciona"
              className="hover:text-white transition-colors duration-150 py-1 whitespace-nowrap"
            >
              Como funciona
            </a>
            <a
              href="#duvidas"
              className="hover:text-white transition-colors duration-150 py-1 whitespace-nowrap"
            >
              Dúvidas
            </a>
          </nav>

          {/* CTA Desktop & Toggle Mobile */}
          <div className="flex items-center gap-3 shrink-0">
            <TrialCtaButton
              position="header"
              label="Testar grátis por 7 dias"
              className="hidden sm:inline-flex !h-10 !px-5 text-xs font-semibold normal-case tracking-normal whitespace-nowrap"
            />

            {/* Botão Menu Mobile */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex lg:hidden items-center justify-center rounded-lg border border-white/10 bg-white/5 p-2 text-white hover:bg-white/10 focus:outline-none"
              aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </Container>

        {/* Menu Mobile Retrátil */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-white/10 bg-[#0e0e10] px-5 py-6 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-3 text-sm font-medium text-white/80">
              <a
                href="#plataforma"
                onClick={closeMobileMenu}
                className="py-1.5 hover:text-white border-b border-white/5"
              >
                Plataforma
              </a>
              <a
                href="#inteligencia-artificial"
                onClick={closeMobileMenu}
                className="py-1.5 hover:text-white border-b border-white/5"
              >
                Inteligência Artificial
              </a>
              <a
                href="#funcionalidades"
                onClick={closeMobileMenu}
                className="py-1.5 hover:text-white border-b border-white/5"
              >
                Funcionalidades
              </a>
              <a
                href="#como-funciona"
                onClick={closeMobileMenu}
                className="py-1.5 hover:text-white border-b border-white/5"
              >
                Como funciona
              </a>
              <a
                href="#duvidas"
                onClick={closeMobileMenu}
                className="py-1.5 hover:text-white border-b border-white/5"
              >
                Dúvidas
              </a>
            </nav>

            <div className="pt-2">
              <TrialCtaButton
                position="header"
                label="Testar grátis por 7 dias"
                className="w-full !h-11 text-xs font-semibold normal-case"
              />
            </div>
          </div>
        )}
      </header>

      <main>
        {/* ============================================================== */}
        {/* 2. HERO: PRIMEIRA DOBRA PERSUASIVA COM CAPTURA REAL DO KANBAN */}
        {/* ============================================================== */}
        <section className="relative overflow-hidden border-b border-white/8 bg-[#080808] bg-tech-grid py-14 sm:py-20 lg:py-24">
          {/* Fundo de Concessionária com Vinheta e Máscara */}
          <img
            src={heroDealership}
            alt="Concessionária de alto padrão"
            width={1920}
            height={1088}
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-cover opacity-15 filter grayscale contrast-125"
          />
          <div className="absolute inset-0 bg-radial-vignette" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/85 to-[#080808]/40" />

          <Container className="relative z-10 grid items-center gap-12 lg:grid-cols-12 lg:gap-12">
            {/* Bloco de Mensagem Principal (Esquerda - 6 Colunas) */}
            <div className="lg:col-span-6 xl:col-span-6">
              {/* Eyebrow de Posicionamento */}
              <div className="hero-seq-badge inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-[11px] font-mono tracking-wide text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                <span>INTELIGÊNCIA ARTIFICIAL PARA LOJAS DE VEÍCULOS</span>
              </div>

              {/* Headline Otimizada da Fase 3 */}
              <div className="mt-6">
                <h1 className="hero-seq-h1-1 font-display font-semibold text-[clamp(2.3rem,4.6vw,4rem)] leading-[1.08] tracking-[-0.03em] text-white">
                  Seu próximo cliente não pode ficar esperando.{" "}
                  <span className="text-primary block sm:inline mt-1 sm:mt-0">
                    Sua IA já pode começar o atendimento.
                  </span>
                </h1>
              </div>

              {/* Subheadline Otimizada da Fase 3 */}
              <p className="hero-seq-sub mt-6 max-w-xl font-sans text-base sm:text-lg leading-[1.6] text-muted-foreground">
                Conheça o CRM automotivo com inteligência artificial que atende seus primeiros contatos, identifica oportunidades e organiza as negociações para sua equipe vender com mais agilidade.
              </p>

              {/* CTAs do Hero */}
              <div className="hero-seq-cta mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
                <TrialCtaButton
                  position="hero"
                  label="TESTAR GRÁTIS POR 7 DIAS"
                  className="h-13 sm:h-14 px-8 text-xs sm:text-sm font-semibold tracking-wider"
                />

                <a
                  href="#plataforma"
                  className="inline-flex h-13 sm:h-14 items-center justify-center gap-2 rounded-xl border border-white/12 bg-white/5 px-6 font-sans text-xs sm:text-sm font-semibold text-white/90 btn-interaction hover:bg-white/10 hover:border-white/25"
                >
                  <span>CONHECER A PLATAFORMA</span>
                  <ChevronRight className="h-4 w-4 text-primary" />
                </a>
              </div>

              {/* Microcopy e Garantia */}
              <p className="mt-3.5 font-sans text-xs text-white/50 flex items-center gap-2">
                <ShieldCheck className="h-3.5 w-3.5 text-primary shrink-0" />
                <span>Solicite seus 7 dias gratuitos diretamente à nossa central de vendas.</span>
              </p>

              {/* Indicadores Institucionais Verificados */}
              <div className="hero-seq-metrics mt-8 grid grid-cols-3 gap-3 max-w-lg border-t border-white/8 pt-6">
                <div>
                  <div className="font-display font-semibold text-xl sm:text-2xl text-white tracking-tight">
                    {CRM_CONFIG.storesServed}
                  </div>
                  <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-muted-foreground mt-0.5">
                    Lojas Atendidas
                  </div>
                </div>

                <div>
                  <div className="font-display font-semibold text-xl sm:text-2xl text-white tracking-tight">
                    {CRM_CONFIG.experienceYears}
                  </div>
                  <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-muted-foreground mt-0.5">
                    No Setor Auto
                  </div>
                </div>

                <div>
                  <div className="font-display font-semibold text-xl sm:text-2xl text-primary tracking-tight">
                    7 Dias
                  </div>
                  <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-muted-foreground mt-0.5">
                    Acesso Gratuito
                  </div>
                </div>
              </div>
            </div>

            {/* Apresentação do Vídeo Real no Hero (Direita - 6 Colunas) */}
            <div className="hero-seq-photo flex justify-center lg:col-span-6 lg:justify-end">
              <HeroVideoPlayer />
            </div>
          </Container>
        </section>

        {/* ============================================================== */}
        {/* TICKER DE CAPACIDADES DA PLATAFORMA (LOOP CONTÍNUO)          */}
        {/* ============================================================== */}
        <div
          aria-label="Capacidades do NC Performance Suite"
          className="relative overflow-hidden border-y border-white/8 bg-[#090909] py-3.5 select-none"
        >
          <div className="animate-marquee flex items-center">
            <div className="flex shrink-0 items-center gap-10 pr-10">
              {tickerItems.map((item, i) => (
                <Fragment key={`item-1-${i}`}>
                  <span className="whitespace-nowrap font-display font-medium text-xs sm:text-sm tracking-wide text-white/85">
                    {item}
                  </span>
                  <div className="flex items-center gap-1.5 opacity-80">
                    <img
                      src={ncLogo}
                      alt=""
                      aria-hidden="true"
                      className="h-3.5 w-auto object-contain brightness-125"
                    />
                  </div>
                </Fragment>
              ))}
            </div>

            <div className="flex shrink-0 items-center gap-10 pr-10" aria-hidden="true">
              {tickerItems.map((item, i) => (
                <Fragment key={`item-2-${i}`}>
                  <span className="whitespace-nowrap font-display font-medium text-xs sm:text-sm tracking-wide text-white/85">
                    {item}
                  </span>
                  <div className="flex items-center gap-1.5 opacity-80">
                    <img
                      src={ncLogo}
                      alt=""
                      aria-hidden="true"
                      className="h-3.5 w-auto object-contain brightness-125"
                    />
                  </div>
                </Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* SEÇÃO 2 — A DOR DO LOJISTA                                   */}
        {/* ============================================================== */}
        <section ref={dorRef} className="py-24 sm:py-28 bg-[#080808]" id="problema">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <div className={`reveal-init stagger-delay-1 ${dorInView ? "reveal-visible" : ""}`}>
                <SectionBadge>Diagnóstico de Operação Comercial</SectionBadge>
              </div>

              <h2
                className={`mt-4 font-display font-semibold text-3xl sm:text-4xl md:text-5xl tracking-tight text-white reveal-init stagger-delay-2 ${
                  dorInView ? "reveal-visible" : ""
                }`}
              >
                Sua loja não precisa apenas de mais leads.{" "}
                <span className="text-primary block sm:inline mt-1 sm:mt-0">
                  Precisa aproveitar melhor cada oportunidade.
                </span>
              </h2>

              <p
                className={`mt-4 font-sans text-base leading-relaxed text-muted-foreground reveal-init stagger-delay-3 ${
                  dorInView ? "reveal-visible" : ""
                }`}
              >
                Gerar contatos no WhatsApp sem um sistema estruturado para atender rápido e acompanhar as negociações resulta em esforço desperdiçado e vendas perdidas para a concorrência.
              </p>
            </div>

            {/* Grid dos 4 Problemas */}
            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {painPoints.map(({ icon: Icon, title, description, tag }, index) => {
                const delayClass = `stagger-delay-${index + 1}`;
                return (
                  <div
                    key={title}
                    className={`card-editorial relative flex flex-col justify-between rounded-xl border border-white/8 bg-[#121212] p-6 reveal-init ${delayClass} ${
                      dorInView ? "reveal-visible" : ""
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary">
                          <Icon className="h-5 w-5" />
                        </div>
                        <span className="rounded-full bg-white/5 px-2.5 py-0.5 text-[10px] font-mono tracking-wide text-primary font-medium">
                          {tag}
                        </span>
                      </div>

                      <h3 className="mt-5 font-display font-semibold text-lg text-white tracking-tight">
                        {title}
                      </h3>
                      <p className="mt-2.5 font-sans text-xs sm:text-sm leading-relaxed text-muted-foreground">
                        {description}
                      </p>
                    </div>

                    <div className="mt-6 border-t border-white/8 pt-3 flex items-center gap-1.5 text-[11px] font-sans text-white/50">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>Resolvido no {CRM_CONFIG.productName}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* ============================================================== */}
        {/* SEÇÃO 3 — SEÇÃO INTERATIVA: VEJA A PLATAFORMA EM AÇÃO        */}
        {/* ============================================================== */}
        <section
          ref={plataformaRef}
          className="border-t border-white/8 bg-[#0b0b0d] py-24 sm:py-32"
          id="plataforma"
        >
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <div className={`reveal-init stagger-delay-1 ${plataformaInView ? "reveal-visible" : ""}`}>
                <SectionBadge>Experiência Real</SectionBadge>
              </div>

              <h2
                className={`mt-4 font-display font-semibold text-3xl sm:text-4xl md:text-5xl tracking-tight text-white reveal-init stagger-delay-2 ${
                  plataformaInView ? "reveal-visible" : ""
                }`}
              >
                Veja a plataforma{" "}
                <span className="text-primary">em ação.</span>
              </h2>

              <p
                className={`mt-4 font-sans text-sm sm:text-base leading-relaxed text-muted-foreground reveal-init stagger-delay-3 ${
                  plataformaInView ? "reveal-visible" : ""
                }`}
              >
                Navegue pelas capturas reais do NC Performance Suite e descubra como o software organiza o funil de vendas, a gestão da loja e o atendimento inicial com inteligência artificial.
              </p>
            </div>

            {/* Seletor das 3 Abas com Telas Reais */}
            <div
              className={`mt-14 reveal-init stagger-delay-3 ${
                plataformaInView ? "reveal-visible" : ""
              }`}
            >
              <InteractivePlatformTabs />
            </div>
          </Container>
        </section>

        {/* ============================================================== */}
        {/* SEÇÃO 4 — INTELIGÊNCIA ARTIFICIAL (COM TELA REAL CONVERSAS)   */}
        {/* ============================================================== */}
        <section
          ref={iaRef}
          className="border-t border-white/8 bg-[#080808] py-24 sm:py-32"
          id="inteligencia-artificial"
        >
          <Container>
            <div className="grid items-center gap-12 lg:grid-cols-12">
              {/* Coluna da Esquerda: Textos e Benefícios */}
              <div className="lg:col-span-6">
                <div className={`reveal-init stagger-delay-1 ${iaInView ? "reveal-visible" : ""}`}>
                  <SectionBadge>Inteligência Artificial de Atendimento</SectionBadge>
                </div>

                <h2
                  className={`mt-4 font-display font-semibold text-3xl sm:text-4xl md:text-5xl leading-tight text-white tracking-tight reveal-init stagger-delay-2 ${
                    iaInView ? "reveal-visible" : ""
                  }`}
                >
                  Veja como a IA conduz o{" "}
                  <span className="text-primary block mt-1">
                    primeiro atendimento da sua loja.
                  </span>
                </h2>

                <p
                  className={`mt-4 font-sans text-base leading-relaxed text-muted-foreground reveal-init stagger-delay-3 ${
                    iaInView ? "reveal-visible" : ""
                  }`}
                >
                  Enquanto seu vendedor se concentra nas negociações, a inteligência artificial pode iniciar a conversa, identificar o veículo de interesse e reunir informações importantes para a continuidade do atendimento.
                </p>

                {/* 5 Etapas do Primeiro Atendimento com IA */}
                <div
                  className={`mt-8 space-y-2.5 reveal-init stagger-delay-4 ${
                    iaInView ? "reveal-visible" : ""
                  }`}
                >
                  {[
                    {
                      num: "01",
                      title: "Resposta instantânea à consulta do veículo",
                      desc: "Acolhimento imediato com confirmação do modelo e disponibilidade de estoque.",
                    },
                    {
                      num: "02",
                      title: "Identificação da forma de pagamento e entrada pretendida",
                      desc: "Consulta antecipada sobre pretensão de financiamento, parcelas ou valor à vista.",
                    },
                    {
                      num: "03",
                      title: "Coleta de dados sobre carro usado na troca",
                      desc: "Mapeamento prévio de modelo, ano e informações do automóvel para avaliação comercial.",
                    },
                    {
                      num: "04",
                      title: "Registro de todas as informações no histórico do CRM",
                      desc: "Cada resposta e detalhe coletado é estruturado automaticamente na ficha do contato.",
                    },
                    {
                      num: "05",
                      title: "Transição suave para o vendedor assumir com contexto completo",
                      desc: "Sua equipe assume a negociação sem precisar repetir perguntas já respondidas.",
                    },
                  ].map((step) => (
                    <div
                      key={step.num}
                      className="flex items-start gap-3 rounded-xl border border-white/8 bg-[#121214] p-3 transition-colors hover:border-white/15"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/10 border border-primary/25 font-mono text-xs font-bold text-primary">
                        {step.num}
                      </span>
                      <div>
                        <h3 className="font-display font-semibold text-sm text-white">
                          {step.title}
                        </h3>
                        <p className="font-sans text-xs text-muted-foreground mt-0.5 leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <TrialCtaButton
                    position="features"
                    label="TESTAR GRÁTIS POR 7 DIAS"
                    className="h-12 px-7 text-xs sm:text-sm font-semibold"
                  />
                  <span className="text-xs text-muted-foreground">
                    Sem formulários complexos. Direto pelo WhatsApp.
                  </span>
                </div>
              </div>

              {/* Coluna da Direita: Player de Demonstração Real da IA */}
              <div
                className={`lg:col-span-6 flex justify-center reveal-init stagger-delay-2 ${
                  iaInView ? "reveal-visible" : ""
                }`}
              >
                <AiDemoVideoPlayer />
              </div>
            </div>
          </Container>
        </section>

        {/* ============================================================== */}
        {/* SEÇÃO 5 — FUNCIONALIDADES (BENTO GRID)                        */}
        {/* ============================================================== */}
        <section
          ref={funcionalidadesRef}
          className="border-t border-white/8 bg-[#0c0c0e] py-24 sm:py-32"
          id="funcionalidades"
        >
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <div className={`reveal-init stagger-delay-1 ${funcionalidadesInView ? "reveal-visible" : ""}`}>
                <SectionBadge>Arquitetura Funcional</SectionBadge>
              </div>

              <h2
                className={`mt-4 font-display font-semibold text-3xl sm:text-4xl md:text-5xl tracking-tight text-white reveal-init stagger-delay-2 ${
                  funcionalidadesInView ? "reveal-visible" : ""
                }`}
              >
                Um CRM profissional.{" "}
                <span className="text-primary">Feito para quem vende carros.</span>
              </h2>

              <p
                className={`mt-4 font-sans text-sm sm:text-base leading-relaxed text-muted-foreground reveal-init stagger-delay-3 ${
                  funcionalidadesInView ? "reveal-visible" : ""
                }`}
              >
                Desenvolvido sem complexidades desnecessárias para atender exatamente as demandas de atendimento e controle de estoque de revendas de veículos.
              </p>
            </div>

            {/* Bento Grid dos 7 Módulos */}
            <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {crmFeatures.map(({ number, title, description, icon: FeatureIcon, badge }, idx) => {
                const isHighlight = idx === 0 || idx === 6;
                const delayClass = `stagger-delay-${(idx % 4) + 1}`;
                return (
                  <div
                    key={title}
                    className={`card-editorial group relative flex flex-col justify-between rounded-2xl border p-7 transition-all duration-300 ${
                      isHighlight
                        ? "lg:col-span-2 border-primary/30 bg-[#141418]"
                        : "border-white/10 bg-[#121214]"
                    } reveal-init ${delayClass} ${
                      funcionalidadesInView ? "reveal-visible" : ""
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 text-primary">
                          <FeatureIcon className="h-5 w-5" />
                        </div>
                        <span className="rounded-full bg-white/5 border border-white/8 px-2.5 py-0.5 text-[10px] font-mono text-primary font-bold">
                          {badge}
                        </span>
                      </div>

                      <div className="mt-5">
                        <span className="text-[10px] font-mono text-white/40 uppercase block">
                          Recurso {number}
                        </span>
                        <h3 className="font-display font-semibold text-xl text-white tracking-tight mt-0.5">
                          {title}
                        </h3>
                        <p className="mt-2.5 font-sans text-xs sm:text-sm leading-relaxed text-muted-foreground">
                          {description}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 border-t border-white/8 pt-3.5 flex items-center justify-between text-xs font-semibold text-primary">
                      <span>Integrado ao ecossistema</span>
                      <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-12 flex justify-center">
              <TrialCtaButton
                position="features"
                label="TESTAR GRÁTIS POR 7 DIAS"
                className="h-13 px-8 text-xs sm:text-sm font-semibold"
              />
            </div>
          </Container>
        </section>

        {/* ============================================================== */}
        {/* SEÇÃO 6 — JORNADA COMERCIAL ("COMO FUNCIONA")                */}
        {/* ============================================================== */}
        <section
          ref={jornadaRef}
          className="border-t border-white/8 bg-[#080808] py-24 sm:py-32"
          id="como-funciona"
        >
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <div className={`reveal-init stagger-delay-1 ${jornadaInView ? "reveal-visible" : ""}`}>
                <SectionBadge>Etapas da Jornada</SectionBadge>
              </div>

              <h2
                className={`mt-4 font-display font-semibold text-3xl sm:text-4xl md:text-5xl tracking-tight text-white reveal-init stagger-delay-2 ${
                  jornadaInView ? "reveal-visible" : ""
                }`}
              >
                Do primeiro contato à{" "}
                <span className="text-primary">próxima oportunidade de venda.</span>
              </h2>

              <p
                className={`mt-4 font-sans text-sm sm:text-base leading-relaxed text-muted-foreground reveal-init stagger-delay-3 ${
                  jornadaInView ? "reveal-visible" : ""
                }`}
              >
                Um fluxo contínuo e sincronizado para garantir velocidade na chegada do comprador e eficiência no salão de vendas.
              </p>
            </div>

            {/* Trilha Progressiva de 4 Etapas */}
            <div className="relative mt-16 sm:mt-20">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 relative">
                {commercialJourneySteps.map(
                  ({ step, title, description, icon: StepIcon, tag }, idx) => {
                    const delayClass = `stagger-delay-${idx + 1}`;
                    return (
                      <div
                        key={title}
                        className={`card-editorial group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-[#121214] p-7 transition-all duration-300 hover:border-primary/40 reveal-init ${delayClass} ${
                          jornadaInView ? "reveal-visible" : ""
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between">
                            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 border border-primary/30 text-primary font-mono font-bold text-sm">
                              {step}
                            </span>
                            <span className="rounded-full bg-white/5 px-2.5 py-0.5 text-[10px] font-mono text-muted-foreground">
                              {tag}
                            </span>
                          </div>

                          <div className="mt-5 flex items-center gap-2.5">
                            <StepIcon className="h-4 w-4 text-primary shrink-0" />
                            <h3 className="font-display font-semibold text-base sm:text-lg text-white tracking-tight">
                              {title}
                            </h3>
                          </div>

                          <p className="mt-3 font-sans text-xs sm:text-sm leading-relaxed text-muted-foreground">
                            {description}
                          </p>
                        </div>

                        <div className="mt-6 border-t border-white/8 pt-3 text-[11px] font-mono text-white/50">
                          Etapa {step} de 04
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          </Container>
        </section>

        {/* ============================================================== */}
        {/* SEÇÃO 7 — AUTORIDADE NC AGÊNCIA                              */}
        {/* ============================================================== */}
        <section
          ref={autoridadeRef}
          className="border-t border-white/8 bg-[#0b0b0d] py-24 sm:py-32"
          id="autoridade"
        >
          <Container>
            <div className="grid items-center gap-12 lg:grid-cols-12">
              {/* Fotografia Compacta de Victoria Maia */}
              <div className="flex justify-center lg:col-span-4">
                <div
                  className={`relative w-full max-w-xs reveal-init stagger-delay-1 ${
                    autoridadeInView ? "reveal-visible" : ""
                  }`}
                >
                  <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-[#141418] p-2 shadow-2xl">
                    <img
                      src={victoriaAbout}
                      alt="Victoria Maia — Fundadora da NC Agência e criadora do NC Performance Suite"
                      loading="lazy"
                      width={500}
                      height={650}
                      className="w-full rounded-xl object-cover grayscale contrast-105 transition-all duration-500 hover:grayscale-0"
                    />
                    <div className="mt-3 rounded-xl border border-white/10 bg-[#0e0e10] p-3 text-center">
                      <div className="font-display font-semibold text-sm text-white">
                        {CRM_CONFIG.founderName}
                      </div>
                      <div className="text-[11px] text-primary font-mono mt-0.5">
                        {CRM_CONFIG.founderRole}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Narrativa Editorial de Conhecimento Prático */}
              <div className="lg:col-span-8">
                <div className={`reveal-init stagger-delay-1 ${autoridadeInView ? "reveal-visible" : ""}`}>
                  <SectionBadge>Origem e Conhecimento do Setor</SectionBadge>
                </div>

                <h2
                  className={`mt-4 font-display font-semibold text-3xl sm:text-4xl md:text-5xl leading-tight text-white tracking-tight reveal-init stagger-delay-2 ${
                    autoridadeInView ? "reveal-visible" : ""
                  }`}
                >
                  Criado por quem conhece a rotina de{" "}
                  <span className="text-primary">uma loja de veículos.</span>
                </h2>

                <div
                  className={`mt-6 space-y-4 font-sans text-sm sm:text-base leading-relaxed text-muted-foreground reveal-init stagger-delay-3 ${
                    autoridadeInView ? "reveal-visible" : ""
                  }`}
                >
                  <p>
                    O <strong>{CRM_CONFIG.productName}</strong> foi desenvolvido pela equipe da <strong>NC Agência</strong>, liderada por Victoria Maia, a partir de mais de 10 anos de experiência prática e convivência contínua com a operação comercial de mais de 100 lojas de veículos e concessionárias.
                  </p>
                  <p>
                    Diferente de softwares genéricos de mercado, a plataforma nasceu para resolver as dores reais do salão de vendas: o cliente que desiste quando a resposta demora, a troca que precisa ser avaliada e a necessidade de colocar o comprador diante do vendedor físico com agilidade.
                  </p>
                </div>

                {/* 3 Blocos de Competência */}
                <div
                  className={`mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 border-y border-white/10 py-5 text-left reveal-init stagger-delay-4 ${
                    autoridadeInView ? "reveal-visible" : ""
                  }`}
                >
                  <div>
                    <span className="font-display font-bold text-2xl text-white block">
                      {CRM_CONFIG.storesServed}
                    </span>
                    <span className="font-sans text-xs text-muted-foreground mt-0.5 block">
                      Lojas atendidas no mercado automotivo brasileiro.
                    </span>
                  </div>

                  <div>
                    <span className="font-display font-bold text-2xl text-primary block">
                      {CRM_CONFIG.experienceYears}
                    </span>
                    <span className="font-sans text-xs text-muted-foreground mt-0.5 block">
                      De vivência nas particularidades de pátios e revendas.
                    </span>
                  </div>

                  <div>
                    <span className="font-display font-bold text-2xl text-white block">
                      Foco Auto
                    </span>
                    <span className="font-sans text-xs text-muted-foreground mt-0.5 block">
                      Terminologias e rotinas pensadas para quem vende automóveis.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ============================================================== */}
        {/* SEÇÃO 8 — OFERTA E TESTE GRATUITO (REFORÇADA)                */}
        {/* ============================================================== */}
        <section
          ref={ofertaRef}
          className="relative overflow-hidden border-t border-white/10 bg-[#080808] py-24 sm:py-32 text-center"
          id="teste"
        >
          <div className="absolute inset-0 bg-radial-vignette" />
          <Container className="relative z-10 max-w-3xl">
            <div className={`reveal-init stagger-delay-1 ${ofertaInView ? "reveal-visible" : ""}`}>
              <SectionBadge>Oportunidade de Avaliação</SectionBadge>
            </div>

            <h2
              className={`mt-4 font-display font-semibold text-3xl sm:text-4xl md:text-5xl tracking-tight text-white reveal-init stagger-delay-2 ${
                ofertaInView ? "reveal-visible" : ""
              }`}
            >
              Experimente uma nova forma de{" "}
              <span className="text-primary">atender e vender.</span>
            </h2>

            {/* Destaque 7 DIAS GRÁTIS */}
            <div
              className={`mt-6 inline-block rounded-2xl border border-primary/40 bg-primary/10 px-8 py-3.5 font-display font-bold text-3xl sm:text-4xl md:text-5xl text-primary tracking-tight shadow-glow reveal-init stagger-delay-3 ${
                ofertaInView ? "reveal-visible" : ""
              }`}
            >
              7 DIAS GRÁTIS
            </div>

            <p
              className={`mt-6 font-sans text-base sm:text-lg leading-relaxed text-neutral-300 reveal-init stagger-delay-4 ${
                ofertaInView ? "reveal-visible" : ""
              }`}
            >
              Conheça o NC Performance Suite e descubra como a inteligência artificial pode ajudar sua loja a organizar oportunidades e acelerar o primeiro atendimento.
            </p>

            <div
              className={`mt-8 flex flex-col items-center justify-center gap-3 reveal-init stagger-delay-4 ${
                ofertaInView ? "reveal-visible" : ""
              }`}
            >
              <TrialCtaButton
                position="final"
                label="COMEÇAR MEU TESTE GRATUITO"
                className="h-14 px-8 text-sm font-semibold tracking-wider"
              />
              <span className="text-xs text-muted-foreground font-sans">
                A ativação do período gratuito é realizada pela nossa central de vendas.
              </span>
            </div>
          </Container>
        </section>

        {/* ============================================================== */}
        {/* SEÇÃO FAQ — DÚVIDAS FREQUENTES                               */}
        {/* ============================================================== */}
        <section
          ref={faqRef}
          className="border-t border-white/8 bg-[#0a0a0c] py-24 sm:py-28"
          id="duvidas"
        >
          <Container className="max-w-4xl">
            <div className="text-center">
              <div className={`reveal-init stagger-delay-1 ${faqInView ? "reveal-visible" : ""}`}>
                <SectionBadge>Perguntas Frequentes</SectionBadge>
              </div>

              <h2
                className={`mt-4 font-display font-semibold text-3xl sm:text-4xl tracking-tight text-white reveal-init stagger-delay-2 ${
                  faqInView ? "reveal-visible" : ""
                }`}
              >
                Dúvidas comuns sobre o{" "}
                <span className="text-primary">{CRM_CONFIG.productName}</span>
              </h2>

              <p
                className={`mt-3 font-sans text-sm sm:text-base text-muted-foreground reveal-init stagger-delay-3 ${
                  faqInView ? "reveal-visible" : ""
                }`}
              >
                Respostas diretas sobre o funcionamento da ferramenta e o período de testes.
              </p>
            </div>

            <div
              className={`mt-12 rounded-2xl border border-white/10 bg-[#121216] p-6 sm:p-8 reveal-init stagger-delay-3 ${
                faqInView ? "reveal-visible" : ""
              }`}
            >
              <Accordion type="single" collapsible className="w-full space-y-3">
                {faqItems.map((item, idx) => (
                  <AccordionItem
                    key={idx}
                    value={`faq-${idx}`}
                    className="border border-white/8 rounded-xl bg-[#16161a] px-4 data-[state=open]:border-primary/40 transition-colors"
                  >
                    <AccordionTrigger className="text-left font-display font-semibold text-sm sm:text-base text-white hover:text-primary transition-colors py-4">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="font-sans text-xs sm:text-sm text-neutral-300 leading-relaxed pb-4 pt-1">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </Container>
        </section>
      </main>

      {/* ============================================================== */}
      {/* FOOTER EXECUTIVO                                              */}
      {/* ============================================================== */}
      <footer className="border-t border-white/8 bg-[#050505] py-14 text-sm text-[#A3A3A3]">
        <Container className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <div className="flex flex-col items-center md:items-start gap-2">
            <Logo className="h-8" />
            <span className="text-xs font-mono text-white/50">
              {CRM_CONFIG.productName} • {CRM_CONFIG.signature}
            </span>
          </div>

          <nav className="flex flex-wrap justify-center gap-6 text-xs uppercase tracking-wider text-muted-foreground">
            <button
              type="button"
              onClick={() => setLegalModal("terms")}
              className="hover:text-white transition-colors cursor-pointer uppercase tracking-wider bg-transparent border-0 p-0 text-xs font-semibold text-muted-foreground hover:underline focus:outline-none"
            >
              Termos de Uso
            </button>
            <button
              type="button"
              onClick={() => setLegalModal("privacy")}
              className="hover:text-white transition-colors cursor-pointer uppercase tracking-wider bg-transparent border-0 p-0 text-xs font-semibold text-muted-foreground hover:underline focus:outline-none"
            >
              Política de Privacidade
            </button>
            <button
              type="button"
              onClick={() => setLegalModal("lgpd")}
              className="hover:text-white transition-colors cursor-pointer uppercase tracking-wider bg-transparent border-0 p-0 text-xs font-semibold text-muted-foreground hover:underline focus:outline-none"
            >
              Conformidade LGPD
            </button>
          </nav>

          <a
            href={getOfficialWhatsAppTrialUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white font-semibold hover:text-primary transition-colors text-xs"
          >
            <Phone className="h-4 w-4 text-primary" />
            <span>Central WhatsApp: {CRM_CONFIG.formattedWhatsAppNumber}</span>
          </a>
        </Container>

        <Container className="mt-8 border-t border-white/5 pt-6 text-center text-xs text-muted-foreground/80">
          <p>
            © {new Date().getFullYear()} {CRM_CONFIG.productName} by NC Agência. Todos os direitos reservados.
          </p>
          <p className="mt-1 text-[11px] text-muted-foreground/60">
            {CRM_CONFIG.tagline}
          </p>
        </Container>
      </footer>

      {/* Modais Legais (Termos, Privacidade e LGPD) */}
      <LegalModals activeModal={legalModal} onClose={() => setLegalModal(null)} />
    </TrialProvider>
  );
}
