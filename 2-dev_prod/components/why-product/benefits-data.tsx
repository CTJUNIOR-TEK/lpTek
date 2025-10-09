import {
  Users,
  Zap,
  DollarSign,
  Calendar,
  Settings,
  Target,
  TrendingUp,
  Clock,
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
    title: "Equipe personalizada",
    description:
      "Time técnico especializado alocado conforme sua necessidade: desenvolvedores, testadores e gerente de projeto.",
    icon: <Users className="h-8 w-8" />,
    variant: "primary",
  },
  {
    title: "Agilidade nas entregas",
    description:
      "Desenvolvimento contínuo que acompanha a evolução do seu produto e as mudanças do negócio em tempo real.",
    icon: <Zap className="h-8 w-8" />,
    variant: "secondary",
  },
  {
    title: "Sem escopo fechado",
    description:
      "Use as horas contratadas conforme surgem as demandas: correções, novos recursos ou melhorias na experiência.",
    icon: <Target className="h-8 w-8" />,
    variant: "primary",
  },
  {
    title: "Flexibilidade total",
    description:
      "Você define as prioridades. A equipe se adapta à realidade do projeto, podendo mudar o foco quando necessário.",
    icon: <Settings className="h-8 w-8" />,
    variant: "secondary",
  },
  {
    title: "Banco de horas",
    description:
      "Horas não utilizadas acumulam em banco próprio para uso em meses seguintes. Sem desperdício.",
    icon: <Clock className="h-8 w-8" />,
    variant: "primary",
  },
  {
    title: "Contrato simples",
    description:
      "Cancele a qualquer momento sem multas. Pague apenas pelo que foi efetivamente utilizado.",
    icon: <Calendar className="h-8 w-8" />,
    variant: "secondary",
  },
  {
    title: "Redução de custos",
    description:
      "Escalabilidade sem os custos e obrigações de manter uma equipe fixa interna.",
    icon: <DollarSign className="h-8 w-8" />,
    variant: "primary",
  },
  {
    title: "Evolução contínua",
    description:
      "Acompanhamento constante com gerente técnico que organiza entregas e propõe melhorias alinhadas ao negócio.",
    icon: <TrendingUp className="h-8 w-8" />,
    variant: "secondary",
  },
]