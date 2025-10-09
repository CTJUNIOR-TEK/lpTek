import {
  Target,
  Zap,
  MousePointerClick,
  TrendingUp,
  Megaphone,
  FormInput,
  Sparkles,
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
    title: "Foco em conversão",
    description:
      "Página única estratégica com elementos persuasivos: título atrativo, CTAs destacados e benefícios claros.",
    icon: <Target className="h-8 w-8" />,
    variant: "primary",
  },
  {
    title: "Resultados rápidos",
    description:
      "Ideal para campanhas que precisam gerar leads, vendas ou inscrições em curto prazo.",
    icon: <Zap className="h-8 w-8" />,
    variant: "secondary",
  },
  {
    title: "Alta taxa de conversão",
    description:
      "Design pensado para guiar o visitante até a ação desejada, sem distrações.",
    icon: <MousePointerClick className="h-8 w-8" />,
    variant: "primary",
  },
  {
    title: "Otimizada para campanhas",
    description:
      "Perfeita para tráfego pago, e-mail marketing e campanhas nas redes sociais.",
    icon: <Megaphone className="h-8 w-8" />,
    variant: "secondary",
  },
  {
    title: "Captação de leads",
    description:
      "Formulários estratégicos integrados para coletar contatos qualificados automaticamente.",
    icon: <FormInput className="h-8 w-8" />,
    variant: "primary",
  },
  {
    title: "Design persuasivo",
    description:
      "Layout responsivo com elementos visuais e textos que convencem e engajam seu público.",
    icon: <Sparkles className="h-8 w-8" />,
    variant: "secondary",
  },
  {
    title: "ROI maximizado",
    description:
      "Amplie o retorno dos seus investimentos em marketing digital com páginas que convertem.",
    icon: <TrendingUp className="h-8 w-8" />,
    variant: "primary",
  },
  {
    title: "Métricas claras",
    description:
      "Acompanhe conversões, origem do tráfego e performance para otimizar suas campanhas.",
    icon: <BarChart3 className="h-8 w-8" />,
    variant: "secondary",
  },
]