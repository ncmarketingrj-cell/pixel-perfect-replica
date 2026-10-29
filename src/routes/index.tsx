import { createFileRoute } from "@tanstack/react-router";
import { Fragment } from "react";
import { Search, Settings2, TrendingUp, Quote, UserRound, MessageCircle } from "lucide-react";
import logo from "@/assets/nc-logo.png.asset.json";
import hero from "@/assets/hero-dealership.jpg";
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

function PhotoPlaceholder({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center justify-center gap-3 rounded-lg border border-dashed border-border bg-card text-muted-foreground ${className}`}>
      <UserRound className="h-16 w-16" />
      <span className="text-sm">Foto da Victoria Maia</span>
    </div>
  );
}

const ticker = ["Aumento de Vendas", "Visibilidade", "Escala", "Crescimento", "Previsibilidade"];

const steps = [
  { icon: Search, title: "Diagnóstico Estratégico", text: "Analisamos sua loja, estoque, atendimento e anúncios para identificar onde estão as oportunidades de venda." },
  { icon: Settings2, title: "Implementação Otimizada", text: "Aplicamos campanhas, processos comerciais e funis desenhados para o mercado automotivo." },
  { icon: TrendingUp, title: "Resultados Comprovados", text: "Acompanhamos métricas de perto para gerar previsibilidade e escala nas suas vendas." },
];

const testimonials = [
  { quote: "Depoimento do cliente a ser inserido conforme os prints de referência.", name: "Nome do Cliente", company: "Loja de Veículos", result: "+40% em vendas" },
  { quote: "Depoimento do cliente a ser inserido conforme os prints de referência.", name: "Nome do Cliente", company: "Concessionária", result: "3x mais leads" },
  { quote: "Depoimento do cliente a ser inserido conforme os prints de referência.", name: "Nome do Cliente", company: "Multimarcas", result: "+25 carros/mês" },
];

const partners = ["Parceiro 1", "Parceiro 2", "Parceiro 3", "Parceiro 4", "Parceiro 5"];

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
                Estratégias de marketing digital e processos comerciais feitos sob medida para lojas de veículos e concessionárias que querem vender mais, com previsibilidade.
              </p>
              <DiagnosticButton className="mt-8 w-full sm:w-auto" />
            </div>
            <PhotoPlaceholder className="hidden aspect-[3/4] w-full max-w-sm justify-self-end bg-card/60 lg:flex" />
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
            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {testimonials.map((t, i) => (
                <figure key={i} className="flex flex-col rounded-lg border border-border bg-card p-7">
                  <Quote className="h-9 w-9 fill-primary text-primary" />
                  <blockquote className="mt-4 flex-1 text-card-foreground/90">"{t.quote}"</blockquote>
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
            <PhotoPlaceholder className="aspect-[4/5] w-full max-w-md" />
            <div>
              <h2 className="font-display text-3xl uppercase sm:text-4xl">Quem está por trás da <span className="text-primary">NC</span>?</h2>
              <p className="mt-6 text-muted-foreground">
                A NC Agência foi fundada por <strong className="text-foreground">Victoria Maia</strong>, profissional com trajetória dedicada ao mercado automotivo, acompanhando de perto a rotina comercial de lojas de veículos e concessionárias.
              </p>
              <p className="mt-4 text-muted-foreground">
                Dessa experiência nasceu a metodologia NC: um método que une marketing digital, atendimento e processo comercial para transformar visibilidade em vendas — com escala e previsibilidade.
              </p>
              <DiagnosticButton className="mt-8 w-full sm:w-auto" />
            </div>
          </Container>
        </section>

        <section className="bg-surface py-20">
          <Container>
            <SectionTitle>Nossos Parceiros</SectionTitle>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
              {partners.map((p) => (
                <div key={p} className="flex h-20 w-40 items-center justify-center rounded-lg border border-border bg-card text-sm text-muted-foreground">{p}</div>
              ))}
            </div>
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
        <p className="mt-6 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} NC Agência. Todos os direitos reservados.</p>
      </footer>
    </DiagnosticProvider>
  );
}
