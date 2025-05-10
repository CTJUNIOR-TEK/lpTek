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
    id: "data-collection",
    title: "Coleta de Informações",
    description: "Mapeamos fluxos atuais, regras de negócio e documentos envolvidos nas operações.",
    iconName: "FileSearch",
    variant: "secondary",
    background: <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-60" />,
  },
  {
    id: "prototyping-validation",
    title: "Prototipação e Validação",
    description: "Criamos mockups com telas e fluxos principais para validação antes do desenvolvimento.",
    iconName: "LayoutDashboard",
    variant: "primary",
    background: <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-60" />,
  },
  {
    id: "data-modeling",
    title: "Modelagem de Dados",
    description: "Estruturamos os dados e definimos integrações com sistemas e serviços externos.",
    iconName: "Database",
    variant: "secondary",
    background: <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-60" />,
  },
  {
    id: "technical-development",
    title: "Desenvolvimento Técnico",
    description: "Codificamos o sistema com foco em segurança, escalabilidade e aderência ao escopo aprovado.",
    iconName: "Code2",
    variant: "primary",
    background: <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-60" />,
  },
  {
    id: "testing-adjustments",
    title: "Testes e Ajustes",
    description: "Validamos as funcionalidades, corrigimos erros e refinamos a experiência de uso.",
    iconName: "Bug",
    variant: "secondary",
    background: <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-60" />,
  },
  {
    id: "launch-training",
    title: "Publicação e Treinamento",
    description: "Fazemos o deploy da solução, entregamos documentação e capacitamos a equipe usuária.",
    iconName: "Rocket",
    variant: "primary",
    background: <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-60" />,
  },
]