import { Mail, User, Lightbulb } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "../ui/button";

export function MoreInfos() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col items-center rounded-lg border border-secondary/20 bg-accent/80 dark:bg-accent/50 p-4 text-center backdrop-blur-sm md:rounded-xl md:p-6 lg:p-8">
      {/* ---------- Avatares sobrepostos ---------- */}
      <div className="relative mb-8 flex justify-center">
        {/* Avatar do meio (fica no topo) */}
        <Avatar
          icon={<Lightbulb className="w-6 h-6 text-white" />}
          className="relative z-10 size-14 bg-primary border border-secondary/30"
        />
        {/* Avatar da esquerda */}
        <Avatar
          icon={<User className="w-6 h-6 text-secondary dark:text-white" />}
          className="absolute size-16 bg-white dark:bg-black origin-bottom -translate-x-[60%] scale-[80%] border border-secondary/30"
        />
        {/* Avatar da direita */}
        <Avatar
          icon={<Mail className="w-6 h-6 text-secondary dark:text-white" />}
          className="absolute size-16 bg-white dark:bg-black origin-bottom translate-x-[60%] scale-[80%] border border-secondary/30"
        />
      </div>

      {/* ---------- Texto & CTA ---------- */}
      <h3 className="mb-2 max-w-3xl font-semibold text-white lg:text-lg">
        Pronto para acelerar seu WhatsApp?
      </h3>
      <p className="mb-8 max-w-3xl text-gray-300 dark:text-muted-foreground lg:text-lg">
        Coloque um pré-atendente digital no seu negócio. Entre em contato e descubra como o agente de IA pode responder clientes automaticamente e aumentar suas vendas.
      </p>
      <div className="flex w-full flex-col gap-2 sm:flex-row sm:justify-center">
        <Button className="w-full bg-primary text-white hover:bg-primary/90 sm:w-auto" href="#contato">
          Contratar o Agente agora
        </Button>
      </div>
    </div>
  );
}