"use client"

import type { StepCardProps } from "@/components/steps/steps-card"

/**
 * Dados das etapas do processo de desenvolvimento
 * Cada objeto representa uma etapa do processo
 */
export const stepsData: Omit<StepCardProps, "stepNumber" | "className" | "isActive" | "isCompleted" | "style">[] = [
  {
    id: "contact",
    title: "Contato Inicial",
    description:
      "Você entra em contato e conversamos sobre suas necessidades, produto atual e objetivos de evolução.",
    iconName: "Lightbulb",
    variant: "primary",
    background: <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-60" />,
  },
  {
    id: "team-setup",
    title: "Montagem da Equipe",
    description: "Definimos a equipe ideal para seu projeto: desenvolvedores, testadores e gerente técnico conforme sua necessidade.",
    iconName: "FileSearch",
    variant: "secondary",
    background: <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-60" />,
  },
  {
    id: "backlog",
    title: "Criação do Backlog",
    description: "Mapeamos as demandas iniciais e criamos um backlog com as prioridades definidas por você.",
    iconName: "LayoutDashboard",
    variant: "primary",
    background: <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-60" />,
  },
  {
    id: "planning",
    title: "Planejamento Semanal",
    description: "A cada semana, planejamos juntos o que será desenvolvido com base nas suas prioridades do momento.",
    iconName: "Database",
    variant: "secondary",
    background: <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-60" />,
  },
  {
    id: "development",
    title: "Desenvolvimento",
    description: "A equipe trabalha nas demandas priorizadas: correções, novos recursos ou melhorias na experiência.",
    iconName: "Code2",
    variant: "primary",
    background: <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-60" />,
  },
  {
    id: "delivery",
    title: "Entrega e Validação",
    description: "Apresentamos o que foi desenvolvido, você valida e decide os próximos passos ou ajustes necessários.",
    iconName: "Bug",
    variant: "secondary",
    background: <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-60" />,
  },
  {
    id: "continuous",
    title: "Evolução Contínua",
    description: "O ciclo se repete semana a semana, com total flexibilidade para mudar prioridades ou cancelar quando quiser.",
    iconName: "Rocket",
    variant: "primary",
    background: <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-60" />,
  },
]