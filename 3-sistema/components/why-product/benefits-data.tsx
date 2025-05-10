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
    title: "Centralização de atividades",
    description:
      "Consolide processos, dados e equipes em um único lugar para facilitar a gestão do negócio.",
    icon: <Layers className="h-8 w-8" />,
    variant: "primary",
  },
  {
    title: "Fluxo de trabalho otimizado",
    description:
      "Padronize etapas e ganhe fluidez operacional com um sistema pensado no seu processo.",
    icon: <Repeat className="h-8 w-8" />,
    variant: "secondary",
  },
  {
    title: "Eficiência operacional",
    description:
      "Aumente produtividade e reduza gargalos através de rotinas configuradas sob medida.",
    icon: <Gauge className="h-8 w-8" />,
    variant: "primary",
  },
  {
    title: "Acesso seguro por níveis",
    description:
      "Controle permissões para cada usuário, mantendo dados protegidos e auditáveis.",
    icon: <LockKeyhole className="h-8 w-8" />,
    variant: "secondary",
  },
  {
    title: "Manutenção simplificada",
    description:
      "Atualizações e ajustes rápidos, sem interromper o funcionamento do sistema.",
    icon: <Wrench className="h-8 w-8" />,
    variant: "primary",
  },
  {
    title: "Sem instalação local",
    description:
      "Use via navegador em qualquer dispositivo; atualizações acontecem direto no servidor.",
    icon: <Cloud className="h-8 w-8" />,
    variant: "secondary",
  },
  {
    title: "Escalabilidade garantida",
    description:
      "O sistema cresce junto com sua empresa, pronto para novos módulos e usuários.",
    icon: <Rocket className="h-8 w-8" />,
    variant: "primary",
  },
  {
    title: "Insights em tempo real",
    description:
      "Dashboards ajudam a tomar decisões rápidas e baseadas em dados confiáveis.",
    icon: <BarChart3 className="h-8 w-8" />,
    variant: "secondary",
  },
]