"use client"

import type { StepCardProps } from "@/components/steps/steps-card"

/**
 * Dados das etapas do processo de desenvolvimento
 * Cada objeto representa uma etapa do processo
 */
export const stepsData: Omit<StepCardProps, "stepNumber" | "className" | "isActive" | "isCompleted" | "style">[] = 
  [
    {
      id: "definition",
      title: "Definição de Objetivos e Estrutura",
      description:
      "Identificamos os objetivos do site, o público-alvo e quais seções serão necessárias para comunicar bem sua marca.",
      iconName: "Target",
      variant: "primary",
      background: <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-60" />,
    },
    {
      id: "data-collection",
      title: "Coleta de Conteúdo",
      description:
      "Reunimos textos institucionais, imagens, identidade visual e referências de estilo para estruturar o conteúdo do site.",
      iconName: "FileText",
      variant: "secondary",
      background: <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-60" />,
    },
    {
      id: "prototyping-validation",
      title: "Prototipação e Aprovação Visual",
      description:
      "Criamos o layout inicial do site com base na identidade da marca e apresentamos para validação antes do desenvolvimento técnico.",
      iconName: "LayoutTemplate",
      variant: "primary",
      background: <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-60" />,
    },
    {
      id: "development",
      title: "Desenvolvimento Técnico",
      description:
      "Codificamos o site aplicando as boas práticas de performance, responsividade e compatibilidade com buscadores.",
      iconName: "Code2",
      variant: "secondary",
      background: <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-60" />,
    },
    {
      id: "seo-adjustments",
      title: "Ajustes e Otimização",
      description:
      "Aplicamos SEO básico, integramos formulários (se necessário) e otimizamos o carregamento e a experiência do usuário.",
      iconName: "Wrench",
      variant: "primary",
      background: <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-60" />,
    },
    {
      id: "testing",
      title: "Testes e Validação Final",
      description:
      "Realizamos testes técnicos e de usabilidade em diferentes dispositivos para garantir que tudo funcione perfeitamente.",
      iconName: "CheckCircle",
      variant: "secondary",
      background: <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-60" />,
    },
    {
      id: "launch",
      title: "Publicação e Orientações",
      description:
      "Publicamos o site no domínio indicado e entregamos um manual com orientações para futuras atualizações e manutenção.",
      iconName: "Rocket",
      variant: "primary",
      background: <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-60" />,
    },
  ]
