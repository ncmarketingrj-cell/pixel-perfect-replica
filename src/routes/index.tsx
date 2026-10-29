import { createFileRoute } from "@tanstack/react-router";
import { Fragment } from "react";
import { Search, Settings2, TrendingUp, Quote, MessageCircle } from "lucide-react";
import logo from "@/assets/nc-logo.png.asset.json";
import hero from "@/assets/hero-dealership.jpg";
import victoriaHero from "@/assets/victoria-hero.png.asset.json";
import victoriaAbout from "@/assets/victoria-about.png.asset.json";
import partnersImg from "@/assets/partners.png.asset.json";
import { DiagnosticProvider, DiagnosticButton } from "@/components/landing/DiagnosticModal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NC Agência — Marketing para Lojas de Carros" },
      { name: "description", content: "Marketing digital e estratégia comercial para lojas de veículos e concessionárias. Agende seu diagnóstico gratuito." },
      { property: "og:title", content: "NC Agência — Marketing para Lojas de Carros" },
      { property: "og:description", content: "Diagnóstico estratégico gratuito para impulsionar as vendas da sua loja de carros." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Logo({ className = "h-10" }: { className?: string }) {
  return <img src={logo.url} alt="NC Agência" className={`${className} aspect-[2.6/1] object-cover`} />;
}

function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-5 ${className}`}>{children}</div>;
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="mx-auto max-w-3xl text-center font-display text-3xl uppercase leading-tight sm:text-4xl">{children}</h2>;
}

const ticker = ["Aumento de Vendas", "Visibilidade", "Escala", "Crescimento", "Previsibilidade"];

const steps = [
  { icon: Search, title: "1. Diagnóstico Estratégico", text: "Analisamos profundamente seu negócio, mercado e objetivos para criar um plano de ação personalizado que realmente funciona." },
  { icon: Settings2, title: "2. Implementação Otimizada", text: "Colocamos o plano em prática com as melhores ferramentas e táticas de marketing digital, focando em performance e ROI." },
  { icon: TrendingUp, title: "3. Resultados Comprovados", text: "Monitoramos, ajustamos e escalamos suas campanhas para garantir um fluxo constante de leads qualificados e aumento de vendas." },
];

const testimonials = [
  { quote: "A NC Agência revolucionou nosso processo de vendas. Com as estratégias implementadas, conseguimos triplicar nossos leads qualificados e dobrar o faturamento em apenas 4 meses.", name: "Carlos Silva", company: "Super Fast", result: "+180% vendas" },
  { quote: "Impressionante como a equipe da NC conseguiu otimizar nossas campanhas. Agora recebemos apenas clientes com perfil de compra real, nossa conversão aumentou drasticamente.", name: "Ana Paula Costa", company: "Bitcar", result: "+300% leads" },
  { quote: "Trabalho excepcional! A gestão de tráfego pago e a produção de conteúdo da NC elevaram nossa marca no mercado. Resultados sólidos e crescimento sustentável mês após mês.", name: "Rafael Oliveira", company: "Luma Car", result: "ROI 420%" },
];

function Index() {
  return (
    <DiagnosticProvider>
      <header className="fixed inset-x-0 top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
        <Container className="flex h-16 items-center"><Logo /></Container>
      </header>

      <main>
        <section className="relative flex min-h-[92vh] items-end overflow-hidden pt-16 lg:items-center">
          <img src={hero} alt="" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-overlay via-overlay/85 to-overlay/40" />
          <Container className="relative grid items-center gap-10 py-16 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <h1 className="font-display text-4xl uppercase leading-[1.05] sm:text-5xl lg:text-6xl">
                Impulsione Suas Vendas: <span className="text-primary">Diagnóstico Gratuito</span> para Lojas de Carros
              </h1>
              <p className="mt-6 max-w-xl text-lg text-muted-foreground">
                Descubra como atrair leads qualificados, com CPF limpo e aprovados para financiamento, e pare de perder tempo com quem não pode comprar. Agende sua sessão estratégica agora!
              </p>
              <DiagnosticButton className="mt-8 w-full sm:w-auto" />
            </div>
            <img src={victoriaHero.url} alt="Victoria Maia, fundadora da NC Agência" className="hidden w-full max-w-md justify-self-end lg:block [mask-image:linear-gradient(to_bottom,black_80%,transparent)]" />
          </Container>
        </section>

        {/* Ticker: add "animate-marquee" to the track to enable infinite scroll */}
        <div className="overflow-hidden border-y-2 border-primary bg-background py-4">
          <div className="flex w-max items-center gap-8">
            {[...ticker, ...ticker].map((t, i) => (
              <Fragment key={i}>
                <span className="whitespace-nowrap font-display text-lg uppercase">{t}</span>
                <Logo className="h-6" />
              </Fragment>
            ))}
          </div>
        </div>

        <section className="py-24">
          <Container>
            <SectionTitle>Nossa Metodologia: Simples, Direta e Focada em Resultados</SectionTitle>
            <p className="mt-4 text-center text-muted-foreground">Transformamos a maneira como sua concessionária atrai e converte clientes. Veja como:</p>
            <div className="mt-14 grid gap-10 md:grid-cols-3">
              {steps.map(({ icon: Icon, title, text }) => (
                <div key={title} className="text-center">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary shadow-glow">
                    <Icon className="h-9 w-9 text-primary-foreground" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold">{title}</h3>
                  <p className="mt-3 text-muted-foreground">{text}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="pb-24">
          <Container>
            <SectionTitle>O Que Nossos Clientes Dizem: Sucesso que Inspira</SectionTitle>
            <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">Histórias de sucesso de concessionárias e revendas que alcançaram novos patamares com a parceria da NC Agência.</p>
            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {testimonials.map((t, i) => (
                <figure key={i} className="flex flex-col rounded-lg border border-border bg-card p-7">
                  <Quote className="h-9 w-9 fill-primary text-primary" />
                  <blockquote className="mt-4 flex-1 italic text-card-foreground/90">"{t.quote}"</blockquote>
                  <figcaption className="mt-6 flex items-end justify-between gap-4 border-t border-border pt-5">
                    <div className="min-w-0">
                      <div className="font-bold">{t.name}</div>
                      <div className="text-sm text-muted-foreground">{t.company}</div>
                    </div>
                    <div className="shrink-0 font-display text-lg text-primary">{t.result}</div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </Container>
        </section>

        <section className="border-t border-border py-24">
          <Container className="grid items-center gap-12 lg:grid-cols-2">
            <img src={victoriaAbout.url} alt="Victoria Maia" loading="lazy" className="w-full max-w-md rounded-lg" />
            <div>
              <h2 className="font-display text-3xl uppercase sm:text-4xl">Quem está por trás da <span className="text-primary">NC</span>?</h2>
              <div className="mt-6 space-y-4 text-muted-foreground">
                <p><strong className="text-foreground">Victoria Maia</strong>, há 10 anos consolidada no mercado automotivo.</p>
                <p>O que começou no Rio de Janeiro hoje se expandiu para diversas regiões do Brasil. Como fundadora da NC, Victoria possui vasta experiência em uma metodologia validada por centenas de lojas de veículos seminovos e novos em todo o país.</p>
                <p>Especialista em transformar agências automotivas em verdadeiras máquinas de vendas, desenvolveu um sistema completo que vai muito além do marketing digital: processos comerciais estruturados, gestão de tráfego qualificado, ferramentas estratégicas e treinamento comercial que realmente funcionam.</p>
                <p>Com a NC, dezenas de lojas já revolucionaram seus resultados e atingiram novos patamares de faturamento através de um método testado, replicável e adaptado à realidade do mercado brasileiro.</p>
              </div>
              <DiagnosticButton className="mt-8 w-full sm:w-auto" />
            </div>
          </Container>
        </section>

        <section className="bg-surface py-20">
          <Container>
            <SectionTitle>Nossos Parceiros</SectionTitle>
            <p className="mt-4 text-center text-muted-foreground">A NC conta com mais de 50 clientes parceiros satisfeitos em todo o Brasil.</p>
            <img src={partnersImg.url} alt="LM, Alfacar, Quero Motos, Rio 2 Veículos, Luma Car, Fly Garage" loading="lazy" className="mx-auto mt-12 w-full max-w-4xl" />
          </Container>
        </section>
      </main>

      <footer className="border-t border-border py-10">
        <Container className="flex flex-col items-center gap-6 text-sm text-muted-foreground md:flex-row md:justify-between">
          <Logo className="h-8" />
          <nav className="flex gap-6">
            <a href="#" className="hover:text-foreground">Termos de Uso</a>
            <a href="#" className="hover:text-foreground">Política de Privacidade</a>
          </nav>
          <a href="https://wa.me/5521970009239" className="flex items-center gap-2 hover:text-foreground">
            <MessageCircle className="h-4 w-4 text-primary" /> +55 21 97000-9239
          </a>
        </Container>
        <p className="mt-6 text-center text-xs text-muted-foreground">© NC - Agência Automotiva. Todos os direitos reservados.</p>
      </footer>
    </DiagnosticProvider>
  );
}
