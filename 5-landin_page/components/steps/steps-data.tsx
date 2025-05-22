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
    title: "Definição da Oferta e Objetivos",
    description:
      "Entendemos qual é o objetivo da landing page — seja capturar leads, promover um produto ou direcionar para uma ação — e quem é o público-alvo.",
    iconName: "Target",
    variant: "primary",
    background: <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-60" />,
  },
  {
    id: "content-gathering",
    title: "Coleta de Conteúdo",
    description:
      "Reunimos os textos, imagens, identidade visual e referências que irão compor a narrativa da página.",
    iconName: "FileText",
    variant: "secondary",
    background: <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-60" />,
  },
  {
    id: "prototyping",
    title: "Prototipação e Estruturação",
    description:
      "Criamos o layout da landing com foco em conversão, destacando CTA, benefícios e proposta de valor. Tudo validado com o cliente.",
    iconName: "LayoutTemplate",
    variant: "primary",
    background: <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-60" />,
  },
  {
    id: "development",
    title: "Desenvolvimento e Integrações",
    description:
      "Desenvolvemos a página responsiva, com performance otimizada e integrações com formulários, CRM ou automações (quando necessário).",
    iconName: "PlugZap",
    variant: "secondary",
    background: <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-60" />,
  },
  {
    id: "testing",
    title: "Revisão e Ajustes Finais",
    description:
      "Revisamos textos, conferimos funcionamento dos CTAs, realizamos testes técnicos e aplicamos ajustes com base no feedback.",
    iconName: "CheckCircle",
    variant: "primary",
    background: <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-60" />,
  },
  {
    id: "launch",
    title: "Publicação",
    description:
      "Publicamos a landing page no domínio indicado, com versão responsiva e pronta para ser usada em campanhas.",
    iconName: "Rocket",
    variant: "secondary",
    background: <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-60" />,
  },
]
