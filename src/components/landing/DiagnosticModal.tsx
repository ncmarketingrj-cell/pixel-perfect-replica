import { createContext, useContext, useState, type ReactNode } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Ctx = createContext<{ open: () => void }>({ open: () => {} });
export const useDiagnostic = () => useContext(Ctx);

type Field = { name: string; label: string; options: string[] };
const selects: Field[] = [
  { name: "sdr", label: "Possui SDR?", options: ["Sim", "Não"] },
  { name: "owner", label: "É proprietário de uma loja?", options: ["Sim", "Não"] },
  { name: "challenge", label: "Principal desafio comercial", options: ["Gerar mais leads", "Converter leads em vendas", "Atendimento lento", "Falta de previsibilidade", "Outro"] },
  { name: "stock", label: "Quantidade de veículos em estoque", options: ["Até 20", "21 a 50", "51 a 100", "Mais de 100"] },
  { name: "sales", label: "Média de vendas mensal", options: ["Até 10", "11 a 30", "31 a 60", "Mais de 60"] },
  { name: "ads", label: "Investimento mensal em anúncios", options: ["Não invisto", "Até R$ 2.000", "R$ 2.000 a R$ 5.000", "R$ 5.000 a R$ 10.000", "Mais de R$ 10.000"] },
  { name: "deadline", label: "Prazo para resolver o problema", options: ["Imediatamente", "Em até 30 dias", "Em até 90 dias", "Sem pressa"] },
];

export function DiagnosticProvider({ children }: { children: ReactNode }) {
  const [isOpen, setOpen] = useState(false);
  return (
    <Ctx.Provider value={{ open: () => setOpen(true) }}>
      {children}
      <Dialog open={isOpen} onOpenChange={setOpen}>
        <DialogContent className="max-h-[90vh] overflow-y-auto border-border bg-popover sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl uppercase">Diagnóstico Gratuito</DialogTitle>
            <DialogDescription>Preencha a aplicação e nossa equipe entrará em contato.</DialogDescription>
          </DialogHeader>
          <form className="grid gap-4 sm:grid-cols-2" onSubmit={(e) => e.preventDefault()}>
            {[
              ["name", "Nome", "text"],
              ["email", "E-mail", "email"],
              ["whatsapp", "WhatsApp", "tel"],
              ["instagram", "Instagram", "text"],
            ].map(([n, l, t]) => (
              <div key={n} className="grid gap-2">
                <Label htmlFor={n}>{l}</Label>
                <Input id={n} name={n} type={t} placeholder={n === "instagram" ? "@sualoja" : ""} />
              </div>
            ))}
            {selects.map((f) => (
              <div key={f.name} className="grid gap-2">
                <Label>{f.label}</Label>
                <Select name={f.name}>
                  <SelectTrigger className="w-full"><SelectValue placeholder="Selecione" /></SelectTrigger>
                  <SelectContent>
                    {f.options.map((o) => <SelectItem key={o} value={o}>{o}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
            ))}
            <div className="grid gap-2 sm:col-span-2">
              <Label htmlFor="notes">Observações</Label>
              <Textarea id="notes" name="notes" rows={3} />
            </div>
            <Button type="submit" size="lg" className="font-bold uppercase tracking-wide shadow-glow sm:col-span-2">
              Enviar aplicação
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </Ctx.Provider>
  );
}

export function DiagnosticButton({ className = "" }: { className?: string }) {
  const { open } = useDiagnostic();
  return (
    <Button size="lg" onClick={open} className={`h-14 px-8 font-bold uppercase tracking-wide shadow-glow ${className}`}>
      Agende seu diagnóstico gratuito
    </Button>
  );
}
