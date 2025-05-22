import {
  Globe,
  MessageSquare,
  Smartphone,
  Palette,
  Edit3,
  Search,
  Users,
  Briefcase,
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
      title: "Presença digital profissional",
      description:
      "Transmita credibilidade com um site institucional bem estruturado, alinhado à identidade da sua marca.",
      icon: <Globe className="h-8 w-8" />,
      variant: "primary",
    },
    {
      title: "Comunicação clara com o público",
      description:
      "Reúna todas as informações importantes sobre seu negócio em um só lugar, com fácil navegação e organização.",
      icon: <MessageSquare className="h-8 w-8" />,
      variant: "secondary",
    },
    {
      title: "Responsividade garantida",
      description:
      "Seu site será acessível e funcional em qualquer dispositivo, com uma experiência fluida tanto no desktop quanto no mobile.",
      icon: <Smartphone className="h-8 w-8" />,
      variant: "primary",
    },
    {
      title: "Identidade visual personalizada",
      description:
      "Aplicamos a identidade da sua marca no layout, criando um visual único e profissional que fortalece seu posicionamento.",
      icon: <Palette className="h-8 w-8" />,
      variant: "secondary",
    },
    {
      title: "Facilidade de atualização",
      description:
      "Entregamos um painel administrativo intuitivo e um manual básico para que você possa atualizar textos e imagens com autonomia.",
      icon: <Edit3 className="h-8 w-8" />,
      variant: "primary",
    },
    {
      title: "Melhor ranqueamento no Google",
      description:
      "Aplicamos práticas básicas de SEO para que seu site seja bem indexado por buscadores e tenha mais visibilidade.",
      icon: <Search className="h-8 w-8" />,
      variant: "secondary",
    },
    {
      title: "Conexão com seu público",
      description:
      "Incluímos formulários de contato, localização no mapa e links para redes sociais para facilitar o relacionamento com seus clientes.",
      icon: <Users className="h-8 w-8" />,
      variant: "primary",
    },
    {
      title: "Apoio comercial e institucional",
      description:
      "Use o site como base para apresentações, propostas, parcerias e divulgação — reforçando a autoridade da sua empresa.",
      icon: <Briefcase className="h-8 w-8" />,
      variant: "secondary",
    },
  ]
