import {
  Smartphone,
  Zap,
  Heart,
  Store,
  Users,
  Palette,
  TrendingUp,
  Bell,
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
    title: "Acesso facilitado",
    description:
      "Seus clientes acessam o app direto do bolso, sem precisar de navegador ou login complicado.",
    icon: <Smartphone className="h-8 w-8" />,
    variant: "primary",
  },
  {
    title: "Experiência memorável",
    description:
      "Interfaces intuitivas e fluidas que cativam seu cliente a cada toque, criando conexões genuínas.",
    icon: <Heart className="h-8 w-8" />,
    variant: "secondary",
  },
  {
    title: "Performance otimizada",
    description:
      "Apps rápidos e responsivos que funcionam perfeitamente mesmo em conexões instáveis.",
    icon: <Zap className="h-8 w-8" />,
    variant: "primary",
  },
  {
    title: "Publicação nas lojas",
    description:
      "Cuidamos da publicação do seu app na App Store e Play Store, deixando tudo pronto para seus usuários.",
    icon: <Store className="h-8 w-8" />,
    variant: "secondary",
  },
  {
    title: "Design personalizado",
    description:
      "Seu app com a identidade da sua marca, não soluções prontas que não refletem sua visão.",
    icon: <Palette className="h-8 w-8" />,
    variant: "primary",
  },
  {
    title: "Engajamento real",
    description:
      "Notificações push e recursos nativos mantêm seu público conectado e engajado.",
    icon: <Bell className="h-8 w-8" />,
    variant: "secondary",
  },
  {
    title: "Escalável para crescer",
    description:
      "Desenvolvido para acompanhar seu crescimento, pronto para novos recursos e mais usuários.",
    icon: <TrendingUp className="h-8 w-8" />,
    variant: "primary",
  },
  {
    title: "Comunidade conectada",
    description:
      "Crie uma base de usuários fiéis que interagem com sua marca todos os dias.",
    icon: <Users className="h-8 w-8" />,
    variant: "secondary",
  },
]