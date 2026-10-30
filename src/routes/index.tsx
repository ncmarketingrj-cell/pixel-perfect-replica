import { createFileRoute } from "@tanstack/react-router";
import { Fragment } from "react";
import {
  Search,
  Settings2,
  TrendingUp,
  Quote,
  MessageCircle,
  ShieldCheck,
  CheckCircle2,
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
          "NC Agência — Marketing Digital & Estratégia Comercial para Lojas de Carros",
      },
      {
        name: "description",
        content:
          "Especialistas em marketing automotivo e inteligência comercial para lojas de veículos e concessionárias. Atraia leads qualificados com CPF limpo e impulsione suas vendas.",
      },
      {
        name: "keywords",
        content:
          "agência de marketing automotivo, tráfego pago para lojas de carros, marketing para concessionárias, revendas de veículos, aumentar vendas de carros, leads automotivos",
      },
      {
        property: "og:title",
        content:
          "NC Agência — Marketing Digital & Estratégia Comercial para Lojas de Carros",
      },
      {
        property: "og:description",
        content:
          "Descubra como atrair leads qualificados, com CPF limpo e aprovados para financiamento. Agende seu diagnóstico estratégico gratuito.",
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
      alt="NC Agência Automotiva"
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
    <div className={`mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

function SectionTitle({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`mx-auto max-w-3xl text-center font-display text-2xl uppercase tracking-tight text-white sm:text-3xl md:text-4xl ${className}`}
    >
      {children}
    </h2>
  );
}

const tickerItems = [
  "Aumento de Vendas",
  "Visibilidade",
  "Escala",
  "Crescimento",
  "Previsibilidade",
];

const methodologySteps = [
  {
    icon: Search,
    step: "Passo 01",
    title: "Diagnóstico Estratégico",
    text: "Analisamos profundamente seu negócio, mercado e objetivos para criar um plano de ação personalizado que realmente funciona e identifica gargalos de conversão.",
  },
  {
    icon: Settings2,
    step: "Passo 02",
    title: "Implementação Otimizada",
    text: "Colocamos o plano em prática com as melhores ferramentas e táticas de marketing digital e qualificação comercial, focando em performance e ROI real.",
  },
  {
    icon: TrendingUp,
    step: "Passo 03",
    title: "Resultados Comprovados",
    text: "Monitoramos, ajustamos e escalamos suas campanhas para garantir um fluxo constante de leads qualificados com CPF limpo e aumento nas vendas da sua loja.",
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
      {/* 4. CABEÇALHO STICKY */}
      <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#0B0B0B]/90 backdrop-blur-md">
        <Container className="flex h-18 items-center justify-between py-3">
          <a href="#" aria-label="Ir para o topo da página da NC Agência">
            <Logo className="h-9 sm:h-10" />
          </a>
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
              label="DIAGNÓSTICO GRATUITO"
              className="!h-10 px-4 text-xs tracking-wider"
            />
          </div>
        </Container>
      </header>

      <main>
        {/* 5. HERO PRINCIPAL */}
        <section className="relative flex min-h-[92vh] items-center overflow-hidden border-b border-white/5 bg-[#0B0B0B] py-16 lg:py-24">
          {/* Concessionária ao fundo */}
          <img
            src={heroDealership}
            alt="Showroom de concessionária automotiva"
            width={1920}
            height={1088}
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-cover opacity-25 filter grayscale contrast-125"
          />

          {/* Gradiente escuro para legibilidade */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B] via-[#0B0B0B]/90 to-[#0B0B0B]/60 lg:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-[#0B0B0B]/60" />

          <Container className="relative z-10 grid items-center gap-12 lg:grid-cols-12">
            {/* Headline à esquerda */}
            <div className="lg:col-span-7 xl:col-span-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                Sessão Estratégica Automotiva
              </div>

              <h1 className="mt-5 font-display text-3xl uppercase leading-[1.08] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl">
                Impulsione Suas Vendas:{" "}
                <span className="text-primary underline decoration-primary/40 underline-offset-8">
                  Diagnóstico Gratuito
                </span>{" "}
                para Lojas de Carros
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#A3A3A3] sm:text-lg">
                Descubra como atrair leads qualificados, com CPF limpo e aprovados para
                financiamento, e pare de perder tempo com quem não pode comprar. Agende sua
                sessão estratégica agora!
              </p>

              {/* Destaques de credibilidade rápidos */}
              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-white/80">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>Leads com perfil de compra real</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>Método testado em +50 revendas</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>Atendimento direto pelo WhatsApp</span>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <DiagnosticButton
                  position="hero"
                  label="⚡ AGENDE SEU DIAGNÓSTICO GRATUITO"
                  className="w-full text-sm sm:w-auto sm:text-base"
                />
              </div>
            </div>

            {/* Fotografia da fundadora à direita */}
            <div className="flex justify-center lg:col-span-5 lg:justify-end xl:col-span-4">
              <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-none">
                {/* Efeito de luz de fundo */}
                <div className="absolute -inset-4 rounded-3xl bg-primary/10 blur-2xl" />

                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#161616] shadow-2xl [mask-image:linear-gradient(to_bottom,black_85%,transparent)]">
                  <img
                    src={victoriaMaia}
                    alt="Victoria Maia, fundadora da NC Agência"
                    width={800}
                    height={1100}
                    className="h-auto w-full object-cover object-top transition-transform duration-500 hover:scale-102"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/70 to-transparent p-5 text-center">
                    <p className="font-display text-lg uppercase tracking-wide text-white">
                      Victoria Maia
                    </p>
                    <p className="text-xs text-primary font-semibold uppercase tracking-wider">
                      Fundadora da NC Agência • 10 Anos no Setor
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* 6. BARRA ANIMADA INFINITA (MARQUEE) */}
        <div
          aria-label="Destaques contínuos da NC Agência"
          className="relative overflow-hidden border-y-2 border-[#EF4045] bg-[#0B0B0B] py-3.5 select-none"
        >
          {/* Trilho infinito com 2 blocos idênticos para loop perfeito */}
          <div className="animate-marquee flex items-center">
            {/* Bloco 1 */}
            <div className="flex shrink-0 items-center gap-8 pr-8">
              {tickerItems.map((term, i) => (
                <Fragment key={`ticker-1-${i}`}>
                  <span className="whitespace-nowrap font-display text-base uppercase tracking-wider text-white sm:text-lg">
                    {term}
                  </span>
                  <div className="flex items-center gap-1.5 opacity-90">
                    <img
                      src={ncLogo}
                      alt=""
                      aria-hidden="true"
                      className="h-5 w-auto object-contain brightness-110"
                    />
                  </div>
                </Fragment>
              ))}
            </div>

            {/* Bloco 2 (cópia idêntica para o loop contínuo sem saltos) */}
            <div className="flex shrink-0 items-center gap-8 pr-8" aria-hidden="true">
              {tickerItems.map((term, i) => (
                <Fragment key={`ticker-2-${i}`}>
                  <span className="whitespace-nowrap font-display text-base uppercase tracking-wider text-white sm:text-lg">
                    {term}
                  </span>
                  <div className="flex items-center gap-1.5 opacity-90">
                    <img
                      src={ncLogo}
                      alt=""
                      aria-hidden="true"
                      className="h-5 w-auto object-contain brightness-110"
                    />
                  </div>
                </Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* 7. METODOLOGIA */}
        <section className="py-24 sm:py-28 bg-[#0B0B0B]" id="metodologia">
          <Container>
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Processo Validado
              </span>
              <SectionTitle className="mt-2">
                Nossa Metodologia: Simples, Direta e Focada em Resultados
              </SectionTitle>
              <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-[#A3A3A3] sm:text-base">
                Transformamos a maneira como sua concessionária atrai e converte clientes. Veja
                como:
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-3">
              {methodologySteps.map(({ icon: Icon, step, title, text }) => (
                <div
                  key={title}
                  className="group relative flex flex-col rounded-xl border border-white/10 bg-[#1B1B1B] p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10"
                >
                  <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
                    {step}
                  </span>

                  {/* Ícone circular vermelho */}
                  <div className="mx-auto mt-4 flex h-20 w-20 items-center justify-center rounded-full bg-[#EF4045] shadow-glow transition-transform duration-300 group-hover:scale-105">
                    <Icon className="h-9 w-9 text-white" />
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

        {/* 8. DEPOIMENTOS */}
        <section className="border-t border-white/5 bg-[#111111] py-24 sm:py-28" id="depoimentos">
          <Container>
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Casos Reais
              </span>
              <SectionTitle className="mt-2">
                O Que Nossos Clientes Dizem: Sucesso que Inspira
              </SectionTitle>
              <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-[#A3A3A3] sm:text-base">
                Histórias de sucesso de concessionárias e revendas que alcançaram novos
                patamares com a parceria da NC Agência.
              </p>
            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((t, i) => (
                <figure
                  key={i}
                  className="flex flex-col justify-between rounded-xl border border-white/10 bg-[#1B1B1B] p-7 transition-all duration-300 hover:border-white/20"
                >
                  <div>
                    {/* Aspas vermelhas */}
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
                    {/* Indicador de resultado em vermelho */}
                    <div className="shrink-0 font-display text-lg font-bold text-[#EF4045]">
                      {t.result}
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </Container>
        </section>

        {/* 9. SOBRE A NC */}
        <section className="border-t border-white/5 bg-[#0B0B0B] py-24 sm:py-28" id="sobre">
          <Container>
            <div className="grid items-center gap-12 lg:grid-cols-12">
              {/* Fotografia original da fundadora */}
              <div className="flex justify-center lg:col-span-5">
                <div className="relative w-full max-w-md">
                  <div className="absolute -inset-2 rounded-2xl bg-primary/20 blur-xl" />
                  <img
                    src={victoriaMaia}
                    alt="Victoria Maia, especialista em inteligência comercial para o mercado automotivo"
                    loading="lazy"
                    width={800}
                    height={1100}
                    className="relative w-full rounded-2xl border border-white/15 object-cover shadow-2xl"
                  />
                </div>
              </div>

              {/* Texto institucional */}
              <div className="lg:col-span-7">
                <span className="text-xs font-bold uppercase tracking-widest text-primary">
                  Liderança e Experiência
                </span>
                <h2 className="mt-2 font-display text-3xl uppercase leading-tight text-white sm:text-4xl">
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
                    Com a NC, dezenas de lojas já revolucionaram seus resultados e atingiram novos
                    patamares de faturamento através de um método testado, replicável e adaptado à
                    realidade do mercado brasileiro.
                  </p>
                </div>

                <div className="mt-8">
                  <DiagnosticButton
                    position="sobre"
                    label="AGENDE SEU DIAGNÓSTICO GRATUITO"
                    className="w-full sm:w-auto"
                  />
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* 10. PARCEIROS */}
        <section className="border-t border-white/5 bg-[#111111] py-20 sm:py-24" id="parceiros">
          <Container>
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Confiabilidade de Mercado
              </span>
              <SectionTitle className="mt-2">Nossos Parceiros</SectionTitle>
              <p className="mt-4 text-center text-sm text-[#A3A3A3] sm:text-base">
                A NC conta com mais de 50 clientes parceiros satisfeitos em todo o Brasil.
              </p>
            </div>

            {/* Grid proporcional e responsivo que não corta os logos */}
            <div className="mt-14 flex flex-wrap items-center justify-center gap-8 sm:gap-12">
              <div className="flex h-24 w-44 items-center justify-center rounded-xl border border-white/10 bg-[#161616] p-4 transition-all duration-300 hover:border-white/30">
                <img
                  src={partnerAlfacar}
                  alt="Alfa Car Veículos"
                  className="max-h-16 w-auto object-contain"
                  loading="lazy"
                />
              </div>

              <div className="flex h-24 w-44 items-center justify-center rounded-xl border border-white/10 bg-[#161616] p-4 transition-all duration-300 hover:border-white/30">
                <img
                  src={partnerRio2}
                  alt="Rio 2 Veículos"
                  className="max-h-14 w-auto object-contain"
                  loading="lazy"
                />
              </div>

              <div className="w-full max-w-2xl rounded-xl border border-white/10 bg-[#161616] p-4 text-center">
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

        {/* SEÇÃO FINAL DE CHAMADA PARA AÇÃO (CTA) */}
        <section className="relative overflow-hidden border-t border-white/10 bg-[#0B0B0B] py-20 text-center">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
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
                label="⚡ AGENDE SEU DIAGNÓSTICO GRATUITO"
                className="w-full sm:w-auto text-base"
              />
            </div>
          </Container>
        </section>
      </main>

      {/* RODAPÉ */}
      <footer className="border-t border-white/10 bg-[#070707] py-12 text-sm text-[#A3A3A3]">
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
          <p>© {new Date().getFullYear()} NC - Agência Automotiva. Todos os direitos reservados.</p>
          <p className="mt-1 text-[11px] text-muted-foreground/60">
            CNPJ & Atendimento comercial direcionado a revendas e concessionárias no Brasil.
          </p>
        </Container>
      </footer>
    </DiagnosticProvider>
  );
}
