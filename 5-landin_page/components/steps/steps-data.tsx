"use client"

import type { StepCardProps } from "@/components/steps/steps-card"

/**
 * Dados das etapas do processo de desenvolvimento
 * Cada objeto representa uma etapa do processo
 */
export const stepsData: Omit<StepCardProps, "stepNumber" | "className" | "isActive" | "isCompleted" | "style">[] = [
  {
    id: "definition",
    title: "Definição de Objetivos e Escopo",
    description:
      "Identificação da oferta, público-alvo e ação desejada: captação de leads, venda ou inscrição.",
    iconName: "Lightbulb",
    variant: "primary",
    background: <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-60" />,
  },
  {
    id: "information",
    title: "Coleta de Informações",
    description: "Reunião de textos, imagens, identidade visual e referências de conteúdo e design persuasivo.",
    iconName: "FileSearch",
    variant: "secondary",
    background: <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-60" />,
  },
  {
    id: "prototyping",
    title: "Prototipação e Estruturação",
    description: "Criação do layout da página com foco em conversão e validação completa com você.",
    iconName: "LayoutDashboard",
    variant: "primary",
    background: <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-60" />,
  },
  {
    id: "development",
    title: "Desenvolvimento e Integrações",
    description: "Construção da landing page responsiva com formulários, CTAs e integrações com CRM ou ferramentas externas.",
    iconName: "Code2",
    variant: "secondary",
    background: <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-60" />,
  },
  {
    id: "testing",
    title: "Testes e Publicação",
    description: "Revisão completa do conteúdo, testes de funcionalidade em diferentes dispositivos e publicação no domínio.",
    iconName: "Bug",
    variant: "primary",
    background: <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-60" />,
  },
  {
    id: "launch",
    title: "Entrega e Suporte",
    description: "Landing page no ar, manual de boas práticas e suporte técnico inicial para ajustes e dúvidas.",
    iconName: "Rocket",
    variant: "secondary",
    background: <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-60" />,
  },
]