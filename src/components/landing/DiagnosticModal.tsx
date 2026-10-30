import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
  type ChangeEvent,
} from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { trackEvent, type CtaPosition } from "@/lib/analytics";
import {
  Copy,
  Check,
  ExternalLink,
  AlertCircle,
  Sparkles,
  ChevronRight,
  ChevronLeft,
  ArrowRight,
  User,
  Building2,
  Target,
} from "lucide-react";

interface DiagnosticContextType {
  open: (position?: CtaPosition) => void;
  close: () => void;
}

const DiagnosticContext = createContext<DiagnosticContextType>({
  open: () => {},
  close: () => {},
});

export const useDiagnostic = () => useContext(DiagnosticContext);

export interface FormData {
  name: string;
  email: string;
  whatsapp: string;
  instagram: string;
  sdr: string;
  storeRelationship: string;
  challenge: string;
  stock: string;
  monthlySales: string;
  adsInvestment: string;
  timeline: string;
  notes: string;
}

const INITIAL_FORM_DATA: FormData = {
  name: "",
  email: "",
  whatsapp: "",
  instagram: "",
  sdr: "",
  storeRelationship: "",
  challenge: "",
  stock: "",
  monthlySales: "",
  adsInvestment: "",
  timeline: "",
  notes: "",
};

const STORAGE_KEY = "nc_diagnostic_form_v2";
const WHATSAPP_NUMBER = "5521971625597";

function formatWhatsAppMask(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

function isValidPhone(phone: string): boolean {
  const digits = phone.replace(/\D/g, "");
  if (digits.length < 10 || digits.length > 11) return false;
  const ddd = parseInt(digits.slice(0, 2), 10);
  return ddd >= 11 && ddd <= 99;
}

export function buildWhatsAppMessage(data: FormData): string {
  const parts: string[] = [
    "Olá, equipe NC Agência! 🚗",
    "Quero solicitar meu diagnóstico estratégico gratuito.\n",
    `👤 Nome: ${data.name.trim()}`,
    `📧 E-mail: ${data.email.trim()}`,
    `📱 WhatsApp: ${data.whatsapp.trim()}`,
  ];

  if (data.instagram.trim()) {
    const ig = data.instagram.trim().startsWith("@")
      ? data.instagram.trim()
      : `@${data.instagram.trim()}`;
    parts.push(`📸 Instagram: ${ig}`);
  }

  parts.push(
    `🏢 Relação com a loja: ${data.storeRelationship}`,
    `👥 Possui SDR: ${data.sdr}`,
    `🎯 Principal desafio: ${data.challenge}`,
    `🚘 Estoque: ${data.stock}`,
    `📊 Média de vendas mensal: ${data.monthlySales}`,
    `💰 Investimento em anúncios: ${data.adsInvestment}`,
    `⏰ Prazo: ${data.timeline}`
  );

  if (data.notes.trim()) {
    parts.push(`📝 Observações: ${data.notes.trim()}`);
  }

  parts.push("\nGostaria de conversar com a equipe NC sobre como melhorar os resultados da minha loja.");

  return parts.join("\n");
}

export function DiagnosticProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [hasStarted, setHasStarted] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  // Restore saved data from sessionStorage
  useEffect(() => {
    try {
      const saved = sessionStorage.getItem(STORAGE_KEY);
      if (saved) {
        setFormData((prev) => ({ ...prev, ...JSON.parse(saved) }));
      }
    } catch {}
  }, []);

  // Save to sessionStorage on change
  const updateField = (field: keyof FormData, value: string) => {
    if (!hasStarted) {
      setHasStarted(true);
      trackEvent("form_start");
    }
    setFormData((prev) => {
      const next = { ...prev, [field]: value };
      try {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {}
      return next;
    });

    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleOpen = (position: CtaPosition = "hero") => {
    trackEvent("form_open", { cta_position: position });
    setIsOpen(true);
    setSubmittedMessage(null);
    setCurrentStep(1);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const validateStep1 = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Por favor, informe seu nome completo.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Por favor, informe seu e-mail comercial.";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "E-mail inválido. Exemplo: nome@loja.com.br";
    }

    if (!formData.whatsapp.trim()) {
      newErrors.whatsapp = "Por favor, informe seu WhatsApp com DDD.";
    } else if (!isValidPhone(formData.whatsapp)) {
      newErrors.whatsapp = "Telefone inválido com DDD (ex: 21 99999-9999).";
    }

    setErrors((prev) => ({ ...prev, ...newErrors }));

    if (Object.keys(newErrors).length > 0) {
      trackEvent("form_validation_error", {
        step: 1,
        error_fields: Object.keys(newErrors).join(", "),
      });
      return false;
    }

    return true;
  };

  const validateStep2 = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.storeRelationship) {
      newErrors.storeRelationship = "Selecione sua relação com a loja.";
    }

    if (!formData.sdr) {
      newErrors.sdr = "Selecione se possui equipe de pré-atendimento (SDR).";
    }

    if (!formData.stock) {
      newErrors.stock = "Selecione a quantidade de veículos em estoque.";
    }

    if (!formData.monthlySales) {
      newErrors.monthlySales = "Selecione sua média mensal de vendas.";
    }

    setErrors((prev) => ({ ...prev, ...newErrors }));

    if (Object.keys(newErrors).length > 0) {
      trackEvent("form_validation_error", {
        step: 2,
        error_fields: Object.keys(newErrors).join(", "),
      });
      return false;
    }

    return true;
  };

  const validateStep3 = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.challenge) {
      newErrors.challenge = "Selecione seu principal desafio comercial.";
    }

    if (!formData.adsInvestment) {
      newErrors.adsInvestment = "Selecione quanto sua loja investe em anúncios.";
    }

    if (!formData.timeline) {
      newErrors.timeline = "Selecione o prazo em que deseja resolver.";
    }

    setErrors((prev) => ({ ...prev, ...newErrors }));

    if (Object.keys(newErrors).length > 0) {
      trackEvent("form_validation_error", {
        step: 3,
        error_fields: Object.keys(newErrors).join(", "),
      });
      return false;
    }

    return true;
  };

  const validateForm = (): boolean => {
    const step1Ok = validateStep1();
    const step2Ok = validateStep2();
    const step3Ok = validateStep3();

    if (!step1Ok) {
      setCurrentStep(1);
      return false;
    }
    if (!step2Ok) {
      setCurrentStep(2);
      return false;
    }
    if (!step3Ok) {
      setCurrentStep(3);
      return false;
    }

    return true;
  };

  const handleStep1Next = () => {
    if (validateStep1()) {
      trackEvent("form_step", { step: 2 });
      setCurrentStep(2);
    }
  };

  const handleStep2Next = () => {
    if (validateStep2()) {
      trackEvent("form_step", { step: 3 });
      setCurrentStep(3);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const message = buildWhatsAppMessage(formData);
    setSubmittedMessage(message);

    trackEvent("whatsapp_redirect", {
      store_relationship: formData.storeRelationship,
      stock: formData.stock,
      ads_investment: formData.adsInvestment,
    });

    const encoded = encodeURIComponent(message);
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;

    // Open WhatsApp
    const win = window.open(waUrl, "_blank", "noopener,noreferrer");
    if (!win) {
      // If popup blocker intervened, the user can still use the fallback modal
      window.location.href = waUrl;
    }
  };

  const handleCopy = async () => {
    if (!submittedMessage) return;
    try {
      await navigator.clipboard.writeText(submittedMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {}
  };

  return (
    <DiagnosticContext.Provider value={{ open: handleOpen, close: handleClose }}>
      {children}

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent
          className="max-h-[92vh] w-[95vw] max-w-2xl overflow-y-auto border border-border bg-[#161616] p-6 text-foreground shadow-2xl sm:p-8"
          aria-describedby="form-description"
        >
          {submittedMessage ? (
            /* Success confirmation & fallback view */
            <div className="py-4 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 text-primary">
                <Sparkles className="h-8 w-8" />
              </div>
              <DialogTitle className="mt-4 font-display text-2xl uppercase tracking-wide">
                Aplicação Pronta para Envio!
              </DialogTitle>
              <DialogDescription id="form-description" className="mt-2 text-muted-foreground">
                Sua sessão no WhatsApp foi iniciada. Caso a janela não tenha aberto
                automaticamente, utilize o botão abaixo para continuar ou copie sua mensagem.
              </DialogDescription>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <Button
                  size="lg"
                  className="h-13 bg-primary px-6 font-bold uppercase tracking-wide text-white hover:bg-primary/90 shadow-glow"
                  onClick={() => {
                    const encoded = encodeURIComponent(submittedMessage);
                    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, "_blank");
                  }}
                >
                  <ExternalLink className="mr-2 h-5 w-5" /> Abrir WhatsApp Agora
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-13 border-white/20 bg-transparent px-6 font-semibold uppercase hover:bg-white/5"
                  onClick={handleCopy}
                >
                  {copied ? (
                    <>
                      <Check className="mr-2 h-5 w-5 text-emerald-400" /> Mensagem Copiada!
                    </>
                  ) : (
                    <>
                      <Copy className="mr-2 h-5 w-5" /> Copiar Mensagem
                    </>
                  )}
                </Button>
              </div>

              <div className="mt-6 text-left">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Prévia da mensagem formatada:
                </p>
                <pre className="mt-2 max-h-48 overflow-y-auto rounded-md border border-white/10 bg-[#0E0E0E] p-3 text-xs text-white/80 whitespace-pre-wrap font-sans">
                  {submittedMessage}
                </pre>
              </div>

              <Button
                variant="ghost"
                className="mt-6 text-xs text-muted-foreground hover:text-white"
                onClick={() => setSubmittedMessage(null)}
              >
                ← Voltar e editar dados
              </Button>
            </div>
          ) : (
            /* Main Form View with 3 Steps */
            <>
              <DialogHeader className="text-left">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
                  <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                  Diagnóstico Estratégico Gratuito
                </div>
                <DialogTitle className="mt-1 font-display text-2xl uppercase leading-tight text-white sm:text-3xl">
                  {currentStep === 1 && "Etapa 1 de 3: Dados de Contato"}
                  {currentStep === 2 && "Etapa 2 de 3: Estrutura & Pátio da Loja"}
                  {currentStep === 3 && "Etapa 3 de 3: Metas & Desafio Comercial"}
                </DialogTitle>
                <DialogDescription id="form-description" className="text-sm text-muted-foreground">
                  {currentStep === 1 &&
                    "Informe seus dados para contato e identificação da sua operação."}
                  {currentStep === 2 &&
                    "Compartilhe o volume do seu estoque para calibrarmos o plano de aceleração."}
                  {currentStep === 3 &&
                    "Defina o maior gargalo atual e a urgência para iniciar a implementação."}
                </DialogDescription>
              </DialogHeader>

              {/* Barra de Progresso e Indicador de Etapas */}
              <div className="mt-4 mb-2">
                <div className="flex items-center justify-between text-xs font-mono mb-2">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(1)}
                    className={`flex items-center gap-1.5 transition-colors cursor-pointer ${
                      currentStep === 1
                        ? "text-primary font-bold"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    <span
                      className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold ${
                        currentStep === 1
                          ? "bg-primary text-white"
                          : "bg-white/10 text-white/70"
                      }`}
                    >
                      1
                    </span>
                    <span>01. Contato</span>
                  </button>

                  <ChevronRight className="h-3.5 w-3.5 text-white/30" />

                  <button
                    type="button"
                    onClick={() => {
                      if (validateStep1()) setCurrentStep(2);
                    }}
                    className={`flex items-center gap-1.5 transition-colors cursor-pointer ${
                      currentStep === 2
                        ? "text-primary font-bold"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    <span
                      className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold ${
                        currentStep === 2
                          ? "bg-primary text-white"
                          : "bg-white/10 text-white/70"
                      }`}
                    >
                      2
                    </span>
                    <span>02. Operação</span>
                  </button>

                  <ChevronRight className="h-3.5 w-3.5 text-white/30" />

                  <button
                    type="button"
                    onClick={() => {
                      if (validateStep1() && validateStep2()) setCurrentStep(3);
                    }}
                    className={`flex items-center gap-1.5 transition-colors cursor-pointer ${
                      currentStep === 3
                        ? "text-primary font-bold"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    <span
                      className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold ${
                        currentStep === 3
                          ? "bg-primary text-white"
                          : "bg-white/10 text-white/70"
                      }`}
                    >
                      3
                    </span>
                    <span>03. Metas</span>
                  </button>
                </div>

                {/* Linha de Progresso Visual */}
                <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                  <div
                    className="h-full bg-primary transition-all duration-300 ease-out"
                    style={{
                      width:
                        currentStep === 1
                          ? "33.33%"
                          : currentStep === 2
                          ? "66.66%"
                          : "100%",
                    }}
                  />
                </div>
              </div>

              <form onSubmit={handleSubmit} noValidate className="mt-4 grid gap-5 sm:grid-cols-2">
                {/* ETAPA 1: CONTATO & IDENTIFICAÇÃO (CAMPOS 1 A 4) */}
                {currentStep === 1 && (
                  <>
                    {/* 1. Nome */}
                    <div className="grid gap-1.5 sm:col-span-2" id="field-name">
                      <Label
                        htmlFor="name"
                        className="text-xs font-semibold uppercase tracking-wider text-white"
                      >
                        Nome Completo <span className="text-primary">*</span>
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                          updateField("name", e.target.value)
                        }
                        placeholder="Seu nome ou como prefere ser chamado"
                        className={`h-11 border-white/15 bg-[#1F1F1F] text-white placeholder:text-muted-foreground/60 focus-visible:ring-primary ${
                          errors.name ? "border-primary ring-1 ring-primary" : ""
                        }`}
                      />
                      {errors.name && (
                        <span className="flex items-center gap-1 text-xs text-primary">
                          <AlertCircle className="h-3.5 w-3.5" /> {errors.name}
                        </span>
                      )}
                    </div>

                    {/* 2. E-mail */}
                    <div className="grid gap-1.5" id="field-email">
                      <Label
                        htmlFor="email"
                        className="text-xs font-semibold uppercase tracking-wider text-white"
                      >
                        E-mail Corporativo <span className="text-primary">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                          updateField("email", e.target.value)
                        }
                        placeholder="seuemail@loja.com.br"
                        className={`h-11 border-white/15 bg-[#1F1F1F] text-white placeholder:text-muted-foreground/60 focus-visible:ring-primary ${
                          errors.email ? "border-primary ring-1 ring-primary" : ""
                        }`}
                      />
                      {errors.email && (
                        <span className="flex items-center gap-1 text-xs text-primary">
                          <AlertCircle className="h-3.5 w-3.5" /> {errors.email}
                        </span>
                      )}
                    </div>

                    {/* 3. WhatsApp */}
                    <div className="grid gap-1.5" id="field-whatsapp">
                      <Label
                        htmlFor="whatsapp"
                        className="text-xs font-semibold uppercase tracking-wider text-white"
                      >
                        WhatsApp Comercial <span className="text-primary">*</span>
                      </Label>
                      <Input
                        id="whatsapp"
                        type="tel"
                        value={formData.whatsapp}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                          updateField("whatsapp", formatWhatsAppMask(e.target.value))
                        }
                        placeholder="(21) 99999-9999"
                        maxLength={16}
                        className={`h-11 border-white/15 bg-[#1F1F1F] text-white placeholder:text-muted-foreground/60 focus-visible:ring-primary ${
                          errors.whatsapp ? "border-primary ring-1 ring-primary" : ""
                        }`}
                      />
                      {errors.whatsapp && (
                        <span className="flex items-center gap-1 text-xs text-primary">
                          <AlertCircle className="h-3.5 w-3.5" /> {errors.whatsapp}
                        </span>
                      )}
                    </div>

                    {/* 4. Instagram */}
                    <div className="grid gap-1.5 sm:col-span-2" id="field-instagram">
                      <Label
                        htmlFor="instagram"
                        className="text-xs font-semibold uppercase tracking-wider text-white"
                      >
                        Instagram da Loja{" "}
                        <span className="text-xs font-normal text-muted-foreground">
                          (Opcional)
                        </span>
                      </Label>
                      <Input
                        id="instagram"
                        value={formData.instagram}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                          updateField("instagram", e.target.value)
                        }
                        placeholder="Qual seu @ no Instagram?"
                        className="h-11 border-white/15 bg-[#1F1F1F] text-white placeholder:text-muted-foreground/60 focus-visible:ring-primary"
                      />
                    </div>

                    {/* Botão de Avanço Etapa 1 */}
                    <div className="sm:col-span-2 pt-4 flex justify-end">
                      <Button
                        type="button"
                        size="lg"
                        onClick={handleStep1Next}
                        className="h-13 w-full sm:w-auto px-7 bg-primary font-semibold text-sm tracking-normal text-white hover:bg-primary/90 shadow-glow"
                      >
                        Avançar para Dados da Loja →
                      </Button>
                    </div>
                  </>
                )}

                {/* ETAPA 2: OPERAÇÃO & ESTOQUE DA LOJA (CAMPOS 5 A 8) */}
                {currentStep === 2 && (
                  <>
                    {/* 5. Relação com a loja */}
                    <div className="grid gap-1.5" id="field-storeRelationship">
                      <Label className="text-xs font-semibold uppercase tracking-wider text-white">
                        Você possui uma loja de carros? <span className="text-primary">*</span>
                      </Label>
                      <Select
                        value={formData.storeRelationship}
                        onValueChange={(val) => updateField("storeRelationship", val)}
                      >
                        <SelectTrigger
                          className={`h-11 border-white/15 bg-[#1F1F1F] text-white focus:ring-primary ${
                            errors.storeRelationship ? "border-primary ring-1 ring-primary" : ""
                          }`}
                        >
                          <SelectValue placeholder="Selecione sua relação" />
                        </SelectTrigger>
                        <SelectContent className="border-border bg-[#1F1F1F] text-white">
                          <SelectItem value="Sim, sou proprietário.">Sim, sou proprietário.</SelectItem>
                          <SelectItem value="Não, mas sou gerente de uma.">
                            Não, mas sou gerente de uma.
                          </SelectItem>
                          <SelectItem value="Não, mas sou vendedor de uma.">
                            Não, mas sou vendedor de uma.
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.storeRelationship && (
                        <span className="flex items-center gap-1 text-xs text-primary">
                          <AlertCircle className="h-3.5 w-3.5" /> {errors.storeRelationship}
                        </span>
                      )}
                    </div>

                    {/* 6. SDR */}
                    <div className="grid gap-1.5" id="field-sdr">
                      <Label className="text-xs font-semibold uppercase tracking-wider text-white">
                        Possui SDR (pré-atendimento)? <span className="text-primary">*</span>
                      </Label>
                      <Select value={formData.sdr} onValueChange={(val) => updateField("sdr", val)}>
                        <SelectTrigger
                          className={`h-11 border-white/15 bg-[#1F1F1F] text-white focus:ring-primary ${
                            errors.sdr ? "border-primary ring-1 ring-primary" : ""
                          }`}
                        >
                          <SelectValue placeholder="Selecione uma opção" />
                        </SelectTrigger>
                        <SelectContent className="border-border bg-[#1F1F1F] text-white">
                          <SelectItem value="Sim">Sim</SelectItem>
                          <SelectItem value="Não">Não</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.sdr && (
                        <span className="flex items-center gap-1 text-xs text-primary">
                          <AlertCircle className="h-3.5 w-3.5" /> {errors.sdr}
                        </span>
                      )}
                    </div>

                    {/* 7. Estoque */}
                    <div className="grid gap-1.5" id="field-stock">
                      <Label className="text-xs font-semibold uppercase tracking-wider text-white">
                        Veículos em Estoque <span className="text-primary">*</span>
                      </Label>
                      <Select value={formData.stock} onValueChange={(val) => updateField("stock", val)}>
                        <SelectTrigger
                          className={`h-11 border-white/15 bg-[#1F1F1F] text-white focus:ring-primary ${
                            errors.stock ? "border-primary ring-1 ring-primary" : ""
                          }`}
                        >
                          <SelectValue placeholder="Quantidade de carros" />
                        </SelectTrigger>
                        <SelectContent className="border-border bg-[#1F1F1F] text-white">
                          <SelectItem value="Menos de 10.">Menos de 10.</SelectItem>
                          <SelectItem value="De 10 a 20.">De 10 a 20.</SelectItem>
                          <SelectItem value="De 20 a 30.">De 20 a 30.</SelectItem>
                          <SelectItem value="De 30 a 50.">De 30 a 50.</SelectItem>
                          <SelectItem value="De 50 a 100.">De 50 a 100.</SelectItem>
                          <SelectItem value="Mais de 100.">Mais de 100.</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.stock && (
                        <span className="flex items-center gap-1 text-xs text-primary">
                          <AlertCircle className="h-3.5 w-3.5" /> {errors.stock}
                        </span>
                      )}
                    </div>

                    {/* 8. Média de vendas */}
                    <div className="grid gap-1.5" id="field-monthlySales">
                      <Label className="text-xs font-semibold uppercase tracking-wider text-white">
                        Média de Vendas Mensal <span className="text-primary">*</span>
                      </Label>
                      <Select
                        value={formData.monthlySales}
                        onValueChange={(val) => updateField("monthlySales", val)}
                      >
                        <SelectTrigger
                          className={`h-11 border-white/15 bg-[#1F1F1F] text-white focus:ring-primary ${
                            errors.monthlySales ? "border-primary ring-1 ring-primary" : ""
                          }`}
                        >
                          <SelectValue placeholder="Volume de vendas/mês" />
                        </SelectTrigger>
                        <SelectContent className="border-border bg-[#1F1F1F] text-white">
                          <SelectItem value="Menos de 20.">Menos de 20.</SelectItem>
                          <SelectItem value="De 20 a 35.">De 20 a 35.</SelectItem>
                          <SelectItem value="De 35 a 50.">De 35 a 50.</SelectItem>
                          <SelectItem value="De 50 a 70.">De 50 a 70.</SelectItem>
                          <SelectItem value="Mais de 70.">Mais de 70.</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.monthlySales && (
                        <span className="flex items-center gap-1 text-xs text-primary">
                          <AlertCircle className="h-3.5 w-3.5" /> {errors.monthlySales}
                        </span>
                      )}
                    </div>

                    {/* Botões de Navegação Etapa 2 */}
                    <div className="sm:col-span-2 pt-4 flex flex-col-reverse sm:flex-row justify-between gap-3">
                      <Button
                        type="button"
                        variant="outline"
                        size="lg"
                        onClick={() => setCurrentStep(1)}
                        className="h-13 border-white/15 bg-transparent text-white/80 hover:bg-white/5 hover:text-white text-xs font-semibold"
                      >
                        ← Voltar: Identificação
                      </Button>
                      <Button
                        type="button"
                        size="lg"
                        onClick={handleStep2Next}
                        className="h-13 px-7 bg-primary font-semibold text-sm tracking-normal text-white hover:bg-primary/90 shadow-glow"
                      >
                        Avançar para Metas & Desafios →
                      </Button>
                    </div>
                  </>
                )}

                {/* ETAPA 3: METAS & DESAFIO COMERCIAL (CAMPOS 9 A 12) */}
                {currentStep === 3 && (
                  <>
                    {/* 9. Principal desafio */}
                    <div className="grid gap-1.5 sm:col-span-2" id="field-challenge">
                      <Label className="text-xs font-semibold uppercase tracking-wider text-white">
                        Principal Desafio Comercial <span className="text-primary">*</span>
                      </Label>
                      <Select
                        value={formData.challenge}
                        onValueChange={(val) => updateField("challenge", val)}
                      >
                        <SelectTrigger
                          className={`h-11 border-white/15 bg-[#1F1F1F] text-white focus:ring-primary ${
                            errors.challenge ? "border-primary ring-1 ring-primary" : ""
                          }`}
                        >
                          <SelectValue placeholder="Selecione seu maior obstáculo hoje" />
                        </SelectTrigger>
                        <SelectContent className="border-border bg-[#1F1F1F] text-white">
                          <SelectItem value="Vender mais.">Vender mais.</SelectItem>
                          <SelectItem value="Repor estoque.">Repor estoque.</SelectItem>
                          <SelectItem value="Converter leads em vendas.">
                            Converter leads em vendas.
                          </SelectItem>
                          <SelectItem value="Time comercial com baixa conversão.">
                            Time comercial com baixa conversão.
                          </SelectItem>
                          <SelectItem value="Falta de um CRM para acompanhar.">
                            Falta de um CRM para acompanhar.
                          </SelectItem>
                          <SelectItem value="Todas as alternativas acima.">
                            Todas as alternativas acima.
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.challenge && (
                        <span className="flex items-center gap-1 text-xs text-primary">
                          <AlertCircle className="h-3.5 w-3.5" /> {errors.challenge}
                        </span>
                      )}
                    </div>

                    {/* 10. Investimento em anúncios */}
                    <div className="grid gap-1.5" id="field-adsInvestment">
                      <Label className="text-xs font-semibold uppercase tracking-wider text-white">
                        Investimento Mensal em Anúncios <span className="text-primary">*</span>
                      </Label>
                      <Select
                        value={formData.adsInvestment}
                        onValueChange={(val) => updateField("adsInvestment", val)}
                      >
                        <SelectTrigger
                          className={`h-11 border-white/15 bg-[#1F1F1F] text-white focus:ring-primary ${
                            errors.adsInvestment ? "border-primary ring-1 ring-primary" : ""
                          }`}
                        >
                          <SelectValue placeholder="Verba de tráfego/mês" />
                        </SelectTrigger>
                        <SelectContent className="border-border bg-[#1F1F1F] text-white">
                          <SelectItem value="Ainda não invisto.">Ainda não invisto.</SelectItem>
                          <SelectItem value="Até R$ 1.000.">Até R$ 1.000.</SelectItem>
                          <SelectItem value="R$ 1.001 a R$ 3.000.">R$ 1.001 a R$ 3.000.</SelectItem>
                          <SelectItem value="R$ 3.001 a R$ 5.000.">R$ 3.001 a R$ 5.000.</SelectItem>
                          <SelectItem value="R$ 5.001 a R$ 10.000.">
                            R$ 5.001 a R$ 10.000.
                          </SelectItem>
                          <SelectItem value="Acima de R$ 10.000.">Acima de R$ 10.000.</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.adsInvestment && (
                        <span className="flex items-center gap-1 text-xs text-primary">
                          <AlertCircle className="h-3.5 w-3.5" /> {errors.adsInvestment}
                        </span>
                      )}
                    </div>

                    {/* 11. Prazo */}
                    <div className="grid gap-1.5" id="field-timeline">
                      <Label className="text-xs font-semibold uppercase tracking-wider text-white">
                        Quando quer resolver? <span className="text-primary">*</span>
                      </Label>
                      <Select
                        value={formData.timeline}
                        onValueChange={(val) => updateField("timeline", val)}
                      >
                        <SelectTrigger
                          className={`h-11 border-white/15 bg-[#1F1F1F] text-white focus:ring-primary ${
                            errors.timeline ? "border-primary ring-1 ring-primary" : ""
                          }`}
                        >
                          <SelectValue placeholder="Urgência de implementação" />
                        </SelectTrigger>
                        <SelectContent className="border-border bg-[#1F1F1F] text-white">
                          <SelectItem value="Imediatamente, preciso de ajuda.">
                            Imediatamente, preciso de ajuda.
                          </SelectItem>
                          <SelectItem value="Em semanas, estou avaliando.">
                            Em semanas, estou avaliando.
                          </SelectItem>
                          <SelectItem value="No próximo mês, sem pressa.">
                            No próximo mês, sem pressa.
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.timeline && (
                        <span className="flex items-center gap-1 text-xs text-primary">
                          <AlertCircle className="h-3.5 w-3.5" /> {errors.timeline}
                        </span>
                      )}
                    </div>

                    {/* 12. Observações */}
                    <div className="grid gap-1.5 sm:col-span-2" id="field-notes">
                      <Label
                        htmlFor="notes"
                        className="text-xs font-semibold uppercase tracking-wider text-white"
                      >
                        Observações Adicionais{" "}
                        <span className="text-xs font-normal text-muted-foreground">
                          (Opcional)
                        </span>
                      </Label>
                      <Textarea
                        id="notes"
                        value={formData.notes}
                        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                          updateField("notes", e.target.value)
                        }
                        placeholder="Conte-nos brevemente sobre sua operação, metas para este trimestre ou dúvidas específicas..."
                        rows={3}
                        className="border-white/15 bg-[#1F1F1F] text-white placeholder:text-muted-foreground/60 focus-visible:ring-primary"
                      />
                    </div>

                    {/* Consentimento & Botões de Navegação Etapa 3 */}
                    <div className="sm:col-span-2 pt-4">
                      <p className="text-[11px] text-muted-foreground leading-relaxed mb-4 text-center">
                        🔒 Seus dados são protegidos e tratados exclusivamente para o agendamento
                        da sua sessão estratégica com a equipe da NC Agência.
                      </p>
                      <div className="flex flex-col-reverse sm:flex-row justify-between gap-3">
                        <Button
                          type="button"
                          variant="outline"
                          size="lg"
                          onClick={() => setCurrentStep(2)}
                          className="h-13 border-white/15 bg-transparent text-white/80 hover:bg-white/5 hover:text-white text-xs font-semibold"
                        >
                          ← Voltar: Dados da Loja
                        </Button>
                        <Button
                          type="submit"
                          size="lg"
                          className="h-13 px-8 bg-primary font-semibold text-sm tracking-normal text-white hover:bg-primary/90 shadow-glow"
                        >
                          Enviar Aplicação & Abrir WhatsApp →
                        </Button>
                      </div>
                    </div>
                  </>
                )}
              </form>
            </>
          )}
        </DialogContent>
      </Dialog>
    </DiagnosticContext.Provider>
  );
}

export function DiagnosticButton({
  className = "",
  position = "hero",
  label = "Quero vender mais carros",
}: {
  className?: string;
  position?: CtaPosition;
  label?: string;
}) {
  const { open } = useDiagnostic();

  const handleClick = () => {
    trackEvent("cta_click", { position });
    open(position);
  };

  return (
    <Button
      size="lg"
      onClick={handleClick}
      className={`h-13 sm:h-14 px-7 font-sans font-semibold text-sm tracking-wide text-white bg-primary hover:bg-[#d93439] rounded-xl shadow-glow btn-interaction active:brightness-95 ${className}`}
    >
      {label}
    </Button>
  );
}
