import { Globe, Smartphone, Database, Lightbulb, LifeBuoy, ShoppingCart } from "lucide-react"
import type { ServiceCardProps } from "@/components/services/service-card"

export const servicesData: Omit<ServiceCardProps, "className">[] = [
  {
    id: "websites",
    iconName: "Globe",
    name: "Websites",
    description:
      "Sites responsivos e otimizados para SEO que convertem visitantes em clientes, com design moderno e experiência de usuário excepcional.",
    background: <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-60" />,
    variant: "primary",
  },
  {
    id: "aplicativos",
    iconName: "Smartphone",
    name: "Aplicativos",
    description:
      "Apps nativos e híbridos para iOS e Android com experiência de usuário excepcional, integrações com APIs e funcionalidades personalizadas.",
    background: <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-60" />,
    variant: "secondary",
  },
  {
    id: "sistemas",
    iconName: "Database",
    name: "Sistemas",
    description:
      "Sistemas web personalizados para automatizar e otimizar processos do seu negócio, com painéis administrativos e integrações com serviços externos.",
    background: <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-60" />,
    variant: "primary",
  },
  {
    id: "ecommerce",
    iconName: "ShoppingCart",
    name: "E-commerce",
    description:
      "Plataformas de e-commerce completas e personalizadas, com foco na experiência de compra, segurança e integração com meios de pagamento e logística.",
    background: <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-60" />,
    variant: "secondary",
  },
  {
    id: "consultoria",
    iconName: "Lightbulb",
    name: "Consultoria",
    description:
      "Consultoria técnica para implementação de soluções e melhores práticas, análise de requisitos e planejamento de projetos tecnológicos.",
    background: <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-60" />,
    variant: "primary",
  },
  {
    id: "suporte",
    iconName: "LifeBuoy",
    name: "Suporte",
    description:
      "Suporte técnico contínuo, manutenção e atualizações para garantir que suas soluções digitais estejam sempre funcionando perfeitamente.",
    background: <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-60" />,
    variant: "secondary",
  },
]

// Layout classes for each service in the grid
export const serviceLayoutClasses = [
  "lg:row-start-1 lg:row-end-3 lg:col-start-1 lg:col-end-2",
  "lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  "lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2",
  "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4 lg:col-span-1 lg:row-span-1",
  "lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-4",
]
