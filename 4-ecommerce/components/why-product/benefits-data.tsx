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

import {
  ShoppingCart,
  ClipboardList,
  CreditCard,
  Truck,
  Palette,
  Smartphone,
  Settings,
  LineChart,
} from "lucide-react"


export interface BenefitData {
  title: string
  description: string
  icon: ReactNode
  variant: "primary" | "secondary"
}

export const benefits: BenefitData[] = [
  {
    title: "Venda sem depender de loja física",
    description:
      "Tenha uma vitrine aberta 24h por dia, alcance clientes em qualquer lugar e aumente sua receita com vendas online.",
    icon: <ShoppingCart className="h-8 w-8" />,
    variant: "primary",
  },
  {
    title: "Gestão simplificada de pedidos",
    description:
      "Acompanhe vendas, controle o estoque e visualize entregas em uma única plataforma, com praticidade e autonomia.",
    icon: <ClipboardList className="h-8 w-8" />,
    variant: "secondary",
  },
  {
    title: "Pagamentos integrados",
    description:
      "Receba por Pix, cartão ou boleto com segurança. Integrado aos principais gateways de pagamento do mercado.",
    icon: <CreditCard className="h-8 w-8" />,
    variant: "primary",
  },
  {
    title: "Frete automatizado",
    description:
      "Ofereça cálculo de frete em tempo real e opções de entrega variadas (Correios, transportadora ou retirada local).",
    icon: <Truck className="h-8 w-8" />,
    variant: "secondary",
  },
  {
    title: "Loja com sua identidade visual",
    description:
      "Criamos um layout totalmente personalizado, alinhado com sua marca, para transmitir confiança e profissionalismo.",
    icon: <Palette className="h-8 w-8" />,
    variant: "primary",
  },
  {
    title: "Acesso de qualquer dispositivo",
    description:
      "Sua loja 100% responsiva: funciona perfeitamente em celulares, tablets e computadores, sem necessidade de app.",
    icon: <Smartphone className="h-8 w-8" />,
    variant: "secondary",
  },
  {
    title: "Controle total do seu negócio",
    description:
      "Administre produtos, preços, cupons, estoque e categorias com liberdade e total autonomia no painel de controle.",
    icon: <Settings className="h-8 w-8" />,
    variant: "primary",
  },
  {
    title: "Relatórios de desempenho",
    description:
      "Visualize métricas de vendas, produtos mais acessados e comportamento dos clientes para tomar decisões estratégicas.",
    icon: <LineChart className="h-8 w-8" />,
    variant: "secondary",
  },
]
