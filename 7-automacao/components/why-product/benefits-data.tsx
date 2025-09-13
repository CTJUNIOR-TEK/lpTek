import {
  Layers,
  Repeat,
  Gauge,
  LockKeyhole,
  Cloud,
  Wrench,
  Rocket,
  BarChart3,
} from "lucide-react"
import type { ReactNode } from "react"

export interface BenefitData {
  title: string
  description: string
  icon: ReactNode
  variant: "primary" | "secondary"
}

export const benefits: BenefitData[] = [
  {
    title: "Atendimento centralizado",
    description:
      "Concentre todas as dúvidas no WhatsApp: preço, estoque e informações de produtos em um só canal.",
    icon: <Layers className="h-8 w-8" />,
    variant: "primary",
  },
  {
    title: "Fluxo de conversa otimizado",
    description:
      "O bot conduz o cliente de forma natural até a compra, sem perder etapas do atendimento.",
    icon: <Repeat className="h-8 w-8" />,
    variant: "secondary",
  },
  {
    title: "Eficiência no atendimento",
    description:
      "Aumente a produtividade da equipe ao deixar o bot cuidar das perguntas repetitivas.",
    icon: <Gauge className="h-8 w-8" />,
    variant: "primary",
  },
  {
    title: "Respostas seguras",
    description:
      "Garanta que os clientes recebam informações corretas e confiáveis em qualquer horário.",
    icon: <LockKeyhole className="h-8 w-8" />,
    variant: "secondary",
  },
  {
    title: "Ajustes simplificados",
    description:
      "Atualize facilmente catálogo, preços e mensagens sem precisar de suporte técnico.",
    icon: <Wrench className="h-8 w-8" />,
    variant: "primary",
  },
  {
    title: "Sem complicação técnica",
    description:
      "O chatbot funciona direto no WhatsApp, sem necessidade de instalação ou infraestrutura extra.",
    icon: <Cloud className="h-8 w-8" />,
    variant: "secondary",
  },
  {
    title: "Escalável para crescer",
    description:
      "O bot acompanha o crescimento da sua empresa, atendendo cada vez mais clientes ao mesmo tempo.",
    icon: <Rocket className="h-8 w-8" />,
    variant: "primary",
  },
  {
    title: "Insights automáticos",
    description:
      "Registre atendimentos em planilhas ou banco de dados e tome decisões com base em dados reais.",
    icon: <BarChart3 className="h-8 w-8" />,
    variant: "secondary",
  },
]