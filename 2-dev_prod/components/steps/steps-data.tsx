"use client"

import type { StepCardProps } from "@/components/steps/steps-card"

/**
 * Dados das etapas do processo de desenvolvimento
 * Cada objeto representa uma etapa do processo
 */
export const stepsData: Omit<StepCardProps, "stepNumber" | "className" | "isActive" | "isCompleted" | "style">[] = [
  { 
    id: "definition",
    title: "Alinhamento inicial",
    description:
      "Realizamos uma reunião inicial para entender as demandas, a maturidade do produto e a carga horária necessária. A partir disso, ajustamos o contrato de forma flexível, por horas mensais.",
    iconName: "Lightbulb",
    variant: "primary",
    background: <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-60" />,
  },
  {
    id: "data-collection",
    title: "Montagem da equipe ideal",
    description: "Selecionamos os profissionais mais adequados ao seu tipo de produto: desenvolvedores, designers, testadores ou gerentes técnicos, conforme a necessidade e o estágio do projeto.",
    iconName: "Users",
    variant: "secondary",
    background: <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-60" />,
  },
  {
    id: "prototyping-validation",
    title: "Integração com o ambiente do Cliente",
    description: "Adotamos as ferramentas e rotinas já utlizadas pela sua empresa, para facilitar a comunicação e o acompanhamento do progresso.",
    iconName: "Laptop",
    variant: "primary",
    background: <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-60" />,
  },
  {
    id: "data-modeling",
    title: "Execução das demandas",
    description: "As horas contratadas são utilizadas para implementar melhorias, novas funcionalidades,correções ou testes - conforme a sua prioridade a cada ciclo",
    iconName: "Code2",
    variant: "secondary",
    background: <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-60" />,
  },
  {
    id: "technical-development",
    title: "Acompanhamento Técnico",
    description: "Um responsável técnico acompanha o uso das horas, organiza os ciclos de entrega, realiza reuniões de revisão e propõe otimizações com base no uso real do sistema.",
    iconName: "ClipboardList",
    variant: "primary",
    background: <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-60" />,
  },
  {
    id: "testing-adjustments",
    title: "Replanejamento Mensal",
    description: "A cada novo ciclo, revisamos o que foi feito, reavaliamos o que é prioridade e, se necessário, ajustamos o volume de horas ou o time alocado.",
    iconName: "RefreshCw",
    variant: "secondary",
    background: <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-60" />,
  },
]
