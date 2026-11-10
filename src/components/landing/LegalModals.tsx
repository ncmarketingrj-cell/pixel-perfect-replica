import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { FileText, Shield, Scale } from "lucide-react";
import { CRM_CONFIG } from "@/config/platform";

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
                {CRM_CONFIG.productName} ({CRM_CONFIG.signature}) • Termos de Software e Plataforma
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
                  Aceitação dos Termos do Software
                </h3>
                <p>
                  Ao acessar a plataforma e landing page do <strong>{CRM_CONFIG.productName}</strong>, desenvolvido pela <strong>NC Agência</strong>, ou solicitar a ativação do período de teste gratuito de 7 dias, você declara ter lido, compreendido e concordado com as condições descritas nestes Termos de Uso.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="font-display font-semibold text-white text-sm sm:text-base flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-[11px] font-mono text-primary font-bold">2</span>
                  Natureza do Produto e Licenciamento
                </h3>
                <p>
                  O {CRM_CONFIG.productName} é um software como serviço (SaaS) composto por sistema de CRM automotivo com inteligência artificial para primeiro atendimento, gestão de contatos e funil comercial em formato Kanban, concebido para lojas de veículos, revendas de seminovos e concessionárias.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="font-display font-semibold text-white text-sm sm:text-base flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-[11px] font-mono text-primary font-bold">3</span>
                  Período de Teste Gratuito de 7 Dias
                </h3>
                <p>
                  A solicitação do teste gratuito por 7 dias concede ao lojista acesso assistido para avaliação das funcionalidades do software em ambiente operacional. O teste não exige inserção antecipada de dados de cartão de crédito e não acarreta cobrança automática ao término do período sem o consentimento formal e contratação expressa da loja.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="font-display font-semibold text-white text-sm sm:text-base flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-[11px] font-mono text-primary font-bold">4</span>
                  Sigilo Comercial e Propriedade Intelectual
                </h3>
                <p>
                  Todas as informações comerciais inseridas pela loja no CRM — como dados de leads, veículos em negociação e anotações dos vendedores — pertencem exclusivamente à loja contratante. A plataforma, seus algoritmos de IA, interfaces e a marca {CRM_CONFIG.productName} são de propriedade intelectual da NC Agência e sua fundadora {CRM_CONFIG.founderName}.
                </p>
              </section>
            </>
          )}

          {activeModal === "privacy" && (
            <>
              <section className="space-y-2">
                <h3 className="font-display font-semibold text-white text-sm sm:text-base flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-[11px] font-mono text-primary font-bold">1</span>
                  Tratamento de Dados no CRM
                </h3>
                <p>
                  A privacidade e a integridade das informações dos lojistas e de seus respectivos clientes finais são prioridade absoluta no <strong>{CRM_CONFIG.productName}</strong>. Coletamos apenas as informações necessárias para a configuração do ambiente de teste e para a operação do fluxo de triagem com inteligência artificial.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="font-display font-semibold text-white text-sm sm:text-base flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-[11px] font-mono text-primary font-bold">2</span>
                  Finalidade da Coleta
                </h3>
                <p>
                  Os dados fornecidos no formulário de teste (nome, loja, WhatsApp e porte de estoque) são utilizados exclusivamente para entrar em contato com o responsável comercial e viabilizar o onboarding e parametrização da ferramenta. Não comercializamos, compartilhamos ou repassamos contatos para terceiros ou revendas concorrentes.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="font-display font-semibold text-white text-sm sm:text-base flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-[11px] font-mono text-primary font-bold">3</span>
                  Segurança e Criptografia
                </h3>
                <p>
                  Empregamos protocolos modernos de segurança e criptografia no trânsito das informações. O lojista pode, a qualquer momento, solicitar a exclusão definitiva dos dados de sua loja dos nossos registros após o término do período de teste.
                </p>
              </section>
            </>
          )}

          {activeModal === "lgpd" && (
            <>
              <section className="space-y-2">
                <h3 className="font-display font-semibold text-white text-sm sm:text-base flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-[11px] font-mono text-primary font-bold">1</span>
                  Conformidade com a LGPD (Lei nº 13.709/2018)
                </h3>
                <p>
                  O <strong>{CRM_CONFIG.productName}</strong> foi concebido observando os princípios de finalidade, necessidade, transparência e segurança previstos na Lei Geral de Proteção de Dados Pessoais.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="font-display font-semibold text-white text-sm sm:text-base flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-[11px] font-mono text-primary font-bold">2</span>
                  Papéis de Controlador e Operador
                </h3>
                <p>
                  Nas interações com leads e clientes das lojas usuárias do CRM, a loja atua como Controladora dos dados de seus compradores, cabendo à plataforma {CRM_CONFIG.productName} o papel de Operadora tecnológica segura do processamento e da esteira de mensagens.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="font-display font-semibold text-white text-sm sm:text-base flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-[11px] font-mono text-primary font-bold">3</span>
                  Canal de Atendimento ao Titular
                </h3>
                <p>
                  Para exercer seus direitos como titular de dados pessoais (confirmação de tratamento, acesso, correção ou eliminação), entre em contato pelo canal de atendimento oficial da NC Agência no WhatsApp ou e-mail corporativo.
                </p>
              </section>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
