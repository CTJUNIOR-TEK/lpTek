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
      "Levantamento das informações principais que o site deverá apresentar e funcionalidades necessárias.",
    iconName: "Lightbulb",
    variant: "primary",
    background: <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-60" />,
  },
  {
    id: "design",
    title: "Definição de Objetivos e Escopo",
    description: "Criamos wireframes e protótipos interativos para visualizar a solução antes do desenvolvimento.",
    iconName: "Layout",
    variant: "secondary",
    background: <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-60" />,
  },
  {
    id: "development",
    title: "Desenvolvimento",
    description: "Transformamos os protótipos em código, utilizando as tecnologias mais adequadas para o seu projeto.",
    iconName: "Code",
    variant: "primary",
    background: <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-60" />,
  },
  {
    id: "testing",
    title: "Testes e Validação",
    description: "Realizamos testes rigorosos para garantir a qualidade, segurança e performance da solução.",
    iconName: "TestTube",
    variant: "secondary",
    background: <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-60" />,
  },
  {
    id: "launch",
    title: "Lançamento e Suporte",
    description: "Implementamos a solução e oferecemos suporte contínuo para garantir o sucesso a longo prazo.",
    iconName: "Rocket",
    variant: "primary",
    background: <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-60" />,
  },
]