import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FileText, Shield, Scale, CheckCircle2, Lock } from "lucide-react";

export type LegalModalType = "terms" | "privacy" | "lgpd" | null;

interface LegalModalsProps {
  activeModal: LegalModalType;
  onClose: () => void;
}

export function LegalModals({ activeModal, onClose }: LegalModalsProps) {
  if (!activeModal) return null;

  return (
    <Dialog open={activeModal !== null} onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        className="max-h-[88vh] w-[95vw] max-w-3xl overflow-hidden border border-white/10 bg-[#121212] p-0 text-foreground shadow-2xl sm:rounded-2xl"
        aria-describedby="legal-modal-desc"
      >
        {/* Header com Ícone e Título Temático */}
        <div className="border-b border-white/10 bg-[#181818] px-6 py-5">
          <DialogHeader className="flex flex-row items-center gap-3 space-y-0 text-left">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary border border-primary/20">
              {activeModal === "terms" && <FileText className="h-5 w-5" />}
              {activeModal === "privacy" && <Shield className="h-5 w-5" />}
              {activeModal === "lgpd" && <Scale className="h-5 w-5" />}
            </div>
            <div>
              <DialogTitle className="font-display text-lg sm:text-xl font-bold tracking-tight text-white">
                {activeModal === "terms" && "Termos de Uso"}
                {activeModal === "privacy" && "Política de Privacidade"}
                {activeModal === "lgpd" && "Conformidade LGPD — Lei nº 13.709/2018"}
              </DialogTitle>
              <DialogDescription id="legal-modal-desc" className="text-xs text-muted-foreground mt-0.5">
                NC - Inteligência Comercial Automotiva • Última atualização: Outubro de 2026
              </DialogDescription>
            </div>
          </DialogHeader>
        </div>

        {/* Corpo com Rolagem e Conteúdo Completo */}
        <div className="max-h-[calc(88vh-140px)] overflow-y-auto px-6 py-6 text-xs sm:text-sm text-neutral-300 space-y-5 leading-relaxed font-sans scrollbar-thin scrollbar-thumb-white/10">
          {activeModal === "terms" && (
            <>
              <section className="space-y-2">
                <h3 className="font-display font-semibold text-white text-sm sm:text-base flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-[11px] font-mono text-primary font-bold">1</span>
                  Aceitação dos Termos
                </h3>
                <p>
                  Ao acessar o website oficial da <strong>NC Agência</strong> (NC - Inteligência Comercial Automotiva) ou utilizar nosso formulário de diagnóstico comercial, você declara ter lido, compreendido e concordado integralmente com as condições estipuladas nestes Termos de Uso. Caso não concorde com qualquer disposição aqui presente, recomendamos a não utilização de nossos serviços e canais.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="font-display font-semibold text-white text-sm sm:text-base flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-[11px] font-mono text-primary font-bold">2</span>
                  Objeto e Escopo de Atuação
                </h3>
                <p>
                  A NC Agência é uma assessoria especializada em crescimento e inteligência comercial direcionada com exclusividade a lojistas de veículos, revendas de seminovos multimarcas e concessionárias no território nacional. Nossos serviços englobam:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-neutral-400">
                  <li>Planejamento e gestão de tráfego pago de alta intenção (Meta Ads, Google Ads);</li>
                  <li>Implementação e estruturação de rotinas de CRM para o pátio de vendas;</li>
                  <li>Implantação de células de pré-vendas (SDR) e automação de triagem rápida;</li>
                  <li>Treinamento comercial contínuo e acompanhamento de indicadores de giro de estoque.</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h3 className="font-display font-semibold text-white text-sm sm:text-base flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-[11px] font-mono text-primary font-bold">3</span>
                  Diagnóstico Comercial & Pré-Qualificação
                </h3>
                <p>
                  O preenchimento do formulário de diagnóstico não configura contratação compulsória nem gera obrigação de prestação imediata de serviços. A NC Agência reserva-se o direito de avaliar a maturidade operacional, volume de estoque e compatibilidade da loja para determinar a viabilidade de atendimento personalizado.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="font-display font-semibold text-white text-sm sm:text-base flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-[11px] font-mono text-primary font-bold">4</span>
                  Sigilo Comercial e Confidencialidade
                </h3>
                <p>
                  Reconhecemos a sensibilidade das informações comerciais do setor automotivo. Todos os dados compartilhados pelo lojista — incluindo giro de estoque, média de vendas, faturamento estimado e rotinas internas de comissão — são protegidos por estrito dever de confidencialidade profissional e jamais serão divulgados a terceiros ou concorrentes da mesma praça.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="font-display font-semibold text-white text-sm sm:text-base flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-[11px] font-mono text-primary font-bold">5</span>
                  Propriedade Intelectual
                </h3>
                <p>
                  Todas as metodologias, estruturas de automação, roteiros comerciais, logotipos, identidades visuais, códigos-fonte e conteúdos disponíveis nesta plataforma são de propriedade exclusiva da NC Agência e da sua fundadora Victoria Maia, protegidos pela legislação de direitos autorais e propriedade industrial.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="font-display font-semibold text-white text-sm sm:text-base flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-[11px] font-mono text-primary font-bold">6</span>
                  Legislação Aplicável e Foro
                </h3>
                <p>
                  Estes Termos são regidos pelas leis da República Federativa do Brasil. Para dirimir qualquer controvérsia decorrente da aplicação destes termos, fica eleito o Foro da Comarca da Capital do Estado do Rio de Janeiro / RJ, com renúncia expressa a qualquer outro.
                </p>
              </section>
            </>
          )}

          {activeModal === "privacy" && (
            <>
              <section className="space-y-2">
                <h3 className="font-display font-semibold text-white text-sm sm:text-base flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-[11px] font-mono text-primary font-bold">1</span>
                  Compromisso com a Proteção de Dados
                </h3>
                <p>
                  A <strong>NC Agência</strong> preza pela segurança, confidencialidade e privacidade de todos os lojistas, parceiros e visitantes que interagem conosco. Esta Política descreve de forma clara como tratamos, armazenamos e protegemos as informações fornecidas em nossa landing page e canais de comunicação.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="font-display font-semibold text-white text-sm sm:text-base flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-[11px] font-mono text-primary font-bold">2</span>
                  Dados Coletados no Formulário
                </h3>
                <p>
                  Para a realização do diagnóstico comercial automotivo, solicitamos as seguintes informações corporativas e de contato:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-neutral-400 mt-2">
                  <div className="rounded-lg border border-white/5 bg-white/5 p-3">
                    <strong className="text-white block mb-1">Contato do Responsável:</strong>
                    Nome completo, e-mail de trabalho, número de telefone comercial com WhatsApp e perfil do Instagram da loja.
                  </div>
                  <div className="rounded-lg border border-white/5 bg-white/5 p-3">
                    <strong className="text-white block mb-1">Métricas da Operação:</strong>
                    Cargo na loja, existência de SDR, faixa de estoque em pátio, média de vendas mensais e orçamento de anúncios.
                  </div>
                </div>
              </section>

              <section className="space-y-2">
                <h3 className="font-display font-semibold text-white text-sm sm:text-base flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-[11px] font-mono text-primary font-bold">3</span>
                  Finalidade do Tratamento
                </h3>
                <p>
                  Os dados são coletados exclusivamente para:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-neutral-400">
                  <li>Iniciar o atendimento personalizado via WhatsApp Oficial <strong>(21) 97162-5597</strong>;</li>
                  <li>Avaliar previamente o cenário do seu estoque e dimensionar a estratégia comercial;</li>
                  <li>Apresentar propostas personalizadas e agendar reuniões com nossos especialistas;</li>
                  <li>Cumprir obrigações legais e regulatórias cabíveis.</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h3 className="font-display font-semibold text-white text-sm sm:text-base flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-[11px] font-mono text-primary font-bold">4</span>
                  Não Comercialização de Dados
                </h3>
                <p>
                  A NC Agência <strong>jamais vende, aluga ou transfere seus dados pessoais e de contato para terceiros</strong> para fins publicitários alheios. Os dados só são manipulados internamente pela equipe técnica e em ferramentas seguras de CRM e comunicação sob acordos rígidos de segurança.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="font-display font-semibold text-white text-sm sm:text-base flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-[11px] font-mono text-primary font-bold">5</span>
                  Segurança e Armazenamento
                </h3>
                <p>
                  Utilizamos criptografia padrão de mercado (TLS/SSL em todas as páginas), controles restritos de acesso a bancos de dados e medidas ativas de prevenção a ataques cibernéticos para proteger suas informações contra acessos não autorizados.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="font-display font-semibold text-white text-sm sm:text-base flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-[11px] font-mono text-primary font-bold">6</span>
                  Canal do Titular de Dados
                </h3>
                <p>
                  Para dúvidas, atualizações cadastrais ou cancelamento de comunicações, entre em contato através do e-mail <strong>privacidade@ncagencia.com.br</strong> ou pelo nosso WhatsApp Oficial.
                </p>
              </section>
            </>
          )}

          {activeModal === "lgpd" && (
            <>
              <section className="space-y-2">
                <h3 className="font-display font-semibold text-white text-sm sm:text-base flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-[11px] font-mono text-primary font-bold">1</span>
                  Declaração de Conformidade com a LGPD
                </h3>
                <p>
                  A <strong>NC Agência</strong> reafirma seu compromisso incondicional com a Lei Geral de Proteção de Dados Pessoais (Lei Federal nº 13.709/2018 - LGPD). Adotamos princípios de <em>Privacy by Design</em> e boas práticas de governança de dados em todas as etapas de prospecção e execução das estratégias comerciais.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="font-display font-semibold text-white text-sm sm:text-base flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-[11px] font-mono text-primary font-bold">2</span>
                  Bases Legais de Tratamento
                </h3>
                <p>
                  O tratamento de dados pessoais realizado pela NC Agência fundamenta-se nas seguintes hipóteses legais expressas no Artigo 7º da LGPD:
                </p>
                <div className="space-y-2 text-neutral-400 mt-2">
                  <div className="border border-white/5 bg-white/5 p-3 rounded-lg">
                    <strong className="text-white block">Art. 7º, I — Consentimento:</strong>
                    Manifestação livre, informada e inequívoca ao preencher o diagnóstico e solicitar contato com nossa equipe comercial.
                  </div>
                  <div className="border border-white/5 bg-white/5 p-3 rounded-lg">
                    <strong className="text-white block">Art. 7º, V — Execução de Procedimentos Pré-Contratuais:</strong>
                    Tratamento de dados necessários para elaboração de proposta técnica e alinhamento de escopo operacional.
                  </div>
                  <div className="border border-white/5 bg-white/5 p-3 rounded-lg">
                    <strong className="text-white block">Art. 7º, IX — Legítimo Interesse:</strong>
                    Comunicação estritamente profissional e desenvolvimento de inteligência de mercado direcionada a empresas do setor.
                  </div>
                </div>
              </section>

              <section className="space-y-2">
                <h3 className="font-display font-semibold text-white text-sm sm:text-base flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-[11px] font-mono text-primary font-bold">3</span>
                  Direitos Garantidos ao Titular (Art. 18 da LGPD)
                </h3>
                <p>
                  Você, na condição de titular dos dados pessoais, pode exercer a qualquer momento os seguintes direitos:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-neutral-400">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>Confirmação da existência de tratamento</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>Acesso facilitado aos dados coletados</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>Correção de dados incompletos ou errôneos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>Eliminação dos dados mediante revogação</span>
                  </div>
                </div>
              </section>

              <section className="space-y-2">
                <h3 className="font-display font-semibold text-white text-sm sm:text-base flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-[11px] font-mono text-primary font-bold">4</span>
                  Encarregado de Proteção de Dados (DPO)
                </h3>
                <p>
                  Para exercer seus direitos como titular de dados ou esclarecer dúvidas operacionais sobre nossa política de segurança, contate nosso Encarregado pelo Tratamento de Dados Pessoais (DPO):
                </p>
                <div className="rounded-xl border border-white/10 bg-[#0A0A0A] p-4 text-white">
                  <div className="flex items-center gap-2 font-mono text-xs text-primary mb-1">
                    <Lock className="h-3.5 w-3.5" />
                    <span>CANAL EXCLUSIVO DE PRIVACIDADE</span>
                  </div>
                  <p className="text-sm font-semibold">Encarregado de Dados (DPO) — NC Agência</p>
                  <p className="text-xs text-muted-foreground mt-0.5">E-mail: privacidade@ncagencia.com.br</p>
                  <p className="text-xs text-muted-foreground">Prazo de resposta: em até 15 dias úteis (Art. 19 da LGPD)</p>
                </div>
              </section>
            </>
          )}
        </div>

        {/* Rodapé do Modal */}
        <div className="border-t border-white/10 bg-[#161616] px-6 py-4 flex items-center justify-between">
          <span className="text-[11px] text-muted-foreground hidden sm:inline">
            NC Agência • Inteligência Comercial Automotiva
          </span>
          <Button
            size="sm"
            onClick={onClose}
            className="ml-auto bg-primary px-5 font-semibold text-white hover:bg-primary/90"
          >
            Entendido
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
