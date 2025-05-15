import { Code, Globe, Smartphone, Database, Lightbulb, LifeBuoy } from "lucide-react"

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid"

type Service = {
  Icon: any
  name: string
  description: string
  href: string
  cta: string
  background: React.ReactNode
  className: string
  variant: "primary" | "secondary"
}

const services: Service[] = [
  {
    Icon: Globe,
    name: "Websites",
    description:
      "Sites responsivos e otimizados para SEO que convertem visitantes em clientes, com design moderno e experiência de usuário excepcional.",
    href: "#contato",
    cta: "Solicitar orçamento",
    background: <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-60" />,
    className: "lg:row-start-1 lg:row-end-3 lg:col-start-1 lg:col-end-2",
    variant: "primary",
  },
  {
    Icon: Smartphone,
    name: "Aplicativos",
    description:
      "Apps nativos e híbridos para iOS e Android com experiência de usuário excepcional, integrações com APIs e funcionalidades personalizadas.",
    href: "#contato",
    cta: "Solicitar orçamento",
    background: <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-60" />,
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    variant: "secondary",
  },
  {
    Icon: Database,
    name: "Sistemas",
    description:
      "Sistemas web personalizados para automatizar e otimizar processos do seu negócio, com painéis administrativos e integrações com serviços externos.",
    href: "#contato",
    cta: "Solicitar orçamento",
    background: <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-60" />,
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-4",
    variant: "primary",
  },
  {
    Icon: Code,
    name: "Desenvolvimento",
    description:
      "Desenvolvimento de software sob medida para atender às necessidades específicas do seu negócio, com tecnologias modernas e escaláveis.",
    href: "#contato",
    cta: "Solicitar orçamento",
    background: <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-60" />,
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2",
    variant: "secondary",
  },
  {
    Icon: Lightbulb,
    name: "Consultoria",
    description:
      "Consultoria técnica para implementação de soluções e melhores práticas, análise de requisitos e planejamento de projetos tecnológicos.",
    href: "#contato",
    cta: "Solicitar orçamento",
    background: <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4 lg:col-span-1 lg:row-span-1",
    variant: "primary",
  },
  {
    Icon: LifeBuoy,
    name: "Suporte",
    description:
      "Suporte técnico contínuo, manutenção e atualizações para garantir que suas soluções digitais estejam sempre funcionando perfeitamente.",
    href: "#contato",
    cta: "Solicitar orçamento",
    background: <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-60" />,
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-4",
    variant: "secondary",
  },
]

export function ServicesSection() {
  return (
    <section id="servicos" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">
              Nossos Serviços
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Soluções completas para o seu <span className="text-primary">negócio</span>
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Oferecemos serviços de desenvolvimento tecnológico com qualidade e inovação para impulsionar o seu
              negócio.
            </p>
          </div>
        </div>

        <BentoGrid className="lg:grid-rows-3 max-w-7xl mx-auto">
          {services.map((service) => (
            <BentoCard key={service.name} {...service} />
          ))}
        </BentoGrid>
      </div>
    </section>
  )
}
