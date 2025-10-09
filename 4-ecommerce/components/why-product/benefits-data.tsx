import {
  Clock,
  Globe,
  DollarSign,
  ShoppingCart,
  CreditCard,
  Package,
  TrendingUp,
  Settings,
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
    title: "Venda 24/7",
    description:
      "Sua loja aberta a qualquer horário, sem limites geográficos. Venda enquanto dorme.",
    icon: <Clock className="h-8 w-8" />,
    variant: "primary",
  },
  {
    title: "Alcance global",
    description:
      "Atinja novos públicos sem depender de estrutura física. Expanda seu negócio além das fronteiras.",
    icon: <Globe className="h-8 w-8" />,
    variant: "secondary",
  },
  {
    title: "Redução de custos",
    description:
      "Elimine custos de aluguel, contas e funcionários de loja física. Mais margem de lucro.",
    icon: <DollarSign className="h-8 w-8" />,
    variant: "primary",
  },
  {
    title: "Gestão de pedidos",
    description:
      "Controle completo sobre pedidos, estoque e clientes em um único painel administrativo.",
    icon: <ShoppingCart className="h-8 w-8" />,
    variant: "secondary",
  },
  {
    title: "Pagamento integrado",
    description:
      "Integração com meios de pagamento: cartão, PIX, boleto. Receba automaticamente.",
    icon: <CreditCard className="h-8 w-8" />,
    variant: "primary",
  },
  {
    title: "Logística simplificada",
    description:
      "Cálculo automático de frete integrado com correios e transportadoras. Sem complicação.",
    icon: <Package className="h-8 w-8" />,
    variant: "secondary",
  },
  {
    title: "Métricas de vendas",
    description:
      "Acompanhe desempenho, produtos mais vendidos e comportamento dos clientes em tempo real.",
    icon: <TrendingUp className="h-8 w-8" />,
    variant: "primary",
  },
  {
    title: "Fácil de gerenciar",
    description:
      "Adicione produtos, edite preços e atualize estoque de forma simples, sem precisar de técnico.",
    icon: <Settings className="h-8 w-8" />,
    variant: "secondary",
  },
]