"use client"

import {
  Workflow,
  Plug,
  LayoutList,
  DatabaseZap,
  Settings,
  CheckCircle,
  Rocket,
} from "lucide-react"
import type { StepCardProps } from "@/components/steps/steps-card"

/**
 * Dados das etapas do processo de desenvolvimento
 * Cada objeto representa uma etapa do processo
 */
export const stepsData: Omit<StepCardProps, "stepNumber" | "className" | "isActive" | "isCompleted" | "style">[] = 
  [
    {
      id: "definition",
      title: "Mapeamento de Processos",
      description:
      "Analisamos o fluxo atual das atividades, identificando tarefas repetitivas, gargalos e oportunidades de automação.",
      iconName: "Workflow",
      variant: "primary",
      background: <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-60" />,
    },
    {
      id: "data-collection",
      title: "Levantamento de Ferramentas e Integrações",
      description:
      "Mapeamos os sistemas utilizados (planilhas, ERPs, CRMs, plataformas externas) e avaliamos as integrações possíveis.",
      iconName: "Plug",
      variant: "secondary",
      background: <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-60" />,
    },
    {
      id: "prototyping-validation",
      title: "Desenho da Solução Automatizada",
      description:
      "Desenvolvemos o fluxo automatizado ideal, com validação junto à equipe envolvida para garantir aderência ao dia a dia da operação.",
      iconName: "LayoutList",
      variant: "primary",
      background: <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-60" />,
    },
    {
      id: "data-modeling",
      title: "Integração de Dados e Regras de Negócio",
      description:
      "Configuramos as rotinas de entrada, processamento e entrega de dados entre sistemas ou plataformas.",
      iconName: "DatabaseZap",
      variant: "secondary",
      background: <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-60" />,
    },
    {
      id: "technical-development",
      title: "Desenvolvimento da Automação",
      description:
      "Programamos os robôs, scripts ou conexões automatizadas conforme o fluxo definido e validado.",
      iconName: "Settings",
      variant: "primary",
      background: <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-60" />,
    },
    {
      id: "testing-adjustments",
      title: "Testes e Ajustes em Ambiente Real",
      description:
      "Rodamos a automação em ambiente de testes com dados reais, corrigindo falhas e ajustando o comportamento esperado.",
      iconName: "CheckCircle",
      variant: "secondary",
      background: <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-60" />,
    },
    {
      id: "launch-training",
      title: "Publicação e Treinamento da Equipe",
      description:
      "Colocamos a automação em produção, entregamos documentação e orientamos os usuários sobre como acompanhar e interagir com o processo.",
      iconName: "Rocket",
      variant: "primary",
      background: <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-60" />,
    },
  ]
