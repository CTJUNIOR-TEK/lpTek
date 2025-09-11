"use client"

import type { StepCardProps } from "@/components/steps/steps-card"

/**
 * Dados das etapas do processo de desenvolvimento
 * Cada objeto representa uma etapa do processo
 */
export const stepsData: Omit<StepCardProps, "stepNumber" | "className" | "isActive" | "isCompleted" | "style">[] = [
  { // ALTERAR TUDO
    id: "definition",
    title: "Definição de Objetivos e Escopo",
    description:
      "Levantamos suas necessidades: quais dúvidas o bot deve responder, quais informações são essenciais (preço, estoque, catálogo etc.).",
    iconName: "Lightbulb",
    variant: "primary",
    background: <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-60" />,
  },
  {
    id: "data-collection",
    title: "Coleta de Informações",
    description: "Reunimos FAQs, catálogo de produtos/serviços e detalhes sobre sua operação para treinar o chatbot.",
    iconName: "FileSearch",
    variant: "secondary",
    background: <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-60" />,
  },
  {
    id: "prototyping-validation",
    title: "Prototipação e Validação",
    description: "Criamos fluxos de conversa iniciais e validamos com você antes de avançar para a implantação.",
    iconName: "LayoutDashboard",
    variant: "primary",
    background: <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-60" />,
  },
  {
    id: "data-modeling",
    title: "Modelagem de Dados",
    description: "Conectamos o bot a planilhas, Google Sheets ou Supabase para registrar contatos e dados de atendimento.",
    iconName: "Database",
    variant: "secondary",
    background: <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-60" />,
  },
  {
    id: "technical-development",
    title: "Desenvolvimento Técnico",
    description: "Montamos o fluxo final no WhatsApp, configurando mensagens automáticas, catálogo e escalonamento para humano.",
    iconName: "Code2",
    variant: "primary",
    background: <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-60" />,
  },
  {
    id: "testing-adjustments",
    title: "Testes e Ajustes",
    description: "Simulamos conversas reais, ajustamos respostas e refinamos a experiência do cliente.",
    iconName: "Bug",
    variant: "secondary",
    background: <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-60" />,
  },
  {
    id: "launch-training",
    title: "Publicação e Treinamento",
    description: "Colocamos o bot em produção no seu WhatsApp e treinamos sua equipe para acompanhar e aproveitar todos os recursos.",
    iconName: "Rocket",
    variant: "primary",
    background: <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-60" />,
  },
]