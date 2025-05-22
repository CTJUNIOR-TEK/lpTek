import {
  Touchpad,
  Smartphone,
  Bell,
  SlidersHorizontal,
  UploadCloud,
  Plug,
  Gauge,
  Wrench,
} from "lucide-react"
import type { ReactNode } from "react"

export interface BenefitData {
  title: string
  description: string
  icon: ReactNode
  variant: "primary" | "secondary"
}

export const benefits: BenefitData[] = 
[
  {
    title: "Experiência intuitiva para o usuário",
    description:
      "Desenvolvemos aplicativos com foco em usabilidade, garantindo navegação fluida e design centrado no usuário.",
    icon: <Touchpad className="h-8 w-8" />,
    variant: "primary",
  },
  {
    title: "Acesso direto na palma da mão",
    description:
      "Leve sua marca para o celular do seu cliente com praticidade, visibilidade e presença constante no dia a dia.",
    icon: <Smartphone className="h-8 w-8" />,
    variant: "secondary",
  },
  {
    title: "Notificações em tempo real",
    description:
      "Envie alertas, promoções e atualizações diretamente aos usuários com notificações push integradas.",
    icon: <Bell className="h-8 w-8" />,
    variant: "primary",
  },
  {
    title: "Funcionalidades sob medida",
    description:
      "Cada funcionalidade é pensada para atender às necessidades do seu negócio, com tecnologia moderna e escalável.",
    icon: <SlidersHorizontal className="h-8 w-8" />,
    variant: "secondary",
  },
  {
    title: "Publicação nas lojas (Play/App Store)",
    description:
      "Cuidamos da publicação e das diretrizes necessárias para disponibilizar o app nas principais plataformas.",
    icon: <UploadCloud className="h-8 w-8" />,
    variant: "primary",
  },
  {
    title: "Integrações com sistemas e APIs",
    description:
      "Seu app pode se conectar com ERPs, CRMs, plataformas de pagamento, geolocalização, e muito mais.",
    icon: <Plug className="h-8 w-8" />,
    variant: "secondary",
  },
  {
    title: "Performance e estabilidade",
    description:
      "Aplicativos otimizados para rodar com fluidez e segurança, mesmo com grande volume de usuários.",
    icon: <Gauge className="h-8 w-8" />,
    variant: "primary",
  },
  {
    title: "Atualizações e suporte contínuo",
    description:
      "Oferecemos acompanhamento técnico e possibilidade de evoluir seu app com novas funcionalidades ao longo do tempo.",
    icon: <Wrench className="h-8 w-8" />,
    variant: "secondary",
  },
]
