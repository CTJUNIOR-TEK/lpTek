import {
  Award,
  Search,
  Users,
  Mail,
  Smartphone,
  BookOpen,
  Globe,
  TrendingUp,
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
    title: "Autoridade da marca",
    description:
      "Fortaleça a imagem da sua empresa com um site profissional que transmite credibilidade e confiança.",
    icon: <Award className="h-8 w-8" />,
    variant: "primary",
  },
  {
    title: "Visibilidade no Google",
    description:
      "SEO básico configurado para melhor ranqueamento em buscadores. Seja encontrado por quem procura seus serviços.",
    icon: <Search className="h-8 w-8" />,
    variant: "secondary",
  },
  {
    title: "Confiança do público",
    description:
      "Site institucional profissional aumenta a confiança de clientes e parceiros em potencial.",
    icon: <Users className="h-8 w-8" />,
    variant: "primary",
  },
  {
    title: "Formulário de contato",
    description:
      "Receba mensagens de interessados diretamente no seu email de forma organizada e automática.",
    icon: <Mail className="h-8 w-8" />,
    variant: "secondary",
  },
  {
    title: "Totalmente responsivo",
    description:
      "Design adaptável que funciona perfeitamente em computadores, tablets e smartphones.",
    icon: <Smartphone className="h-8 w-8" />,
    variant: "primary",
  },
  {
    title: "Blog integrado",
    description:
      "Possibilidade de incluir blog para compartilhar conteúdo, notícias e fortalecer presença digital.",
    icon: <BookOpen className="h-8 w-8" />,
    variant: "secondary",
  },
  {
    title: "Presença 24/7",
    description:
      "Seu negócio disponível online a qualquer hora, apresentando serviços e informações importantes.",
    icon: <Globe className="h-8 w-8" />,
    variant: "primary",
  },
  {
    title: "Tudo em um lugar",
    description:
      "Concentre quem somos, serviços, portfólio e contato em um único local profissional.",
    icon: <TrendingUp className="h-8 w-8" />,
    variant: "secondary",
  },
]