"use client"

import type { StepCardProps } from "@/components/steps/steps-card"

/**
 * Dados das etapas do processo de desenvolvimento
 * Cada objeto representa uma etapa do processo
 */
export const stepsData: Omit<StepCardProps, "stepNumber" | "className" | "isActive" | "isCompleted" | "style">[] =[
  {
    id: "definition",
    title: "Definição de Objetivos e Escopo",
    description:
      "Identificamos os produtos ou serviços que serão vendidos, o público-alvo e as funcionalidades desejadas para a loja virtual.",
    iconName: "Target",
    variant: "primary",
    background: <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-60" />,
  },
  {
    id: "data-collection",
    title: "Coleta de Materiais",
    description:
      "Reunimos identidade visual, imagens dos produtos, descrições, políticas da loja e outros conteúdos essenciais para o projeto.",
    iconName: "FolderInput",
    variant: "secondary",
    background: <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-60" />,
  }, 
  {
    id: "development",
    title: "Desenvolvimento e Personalização",
    description:
      "Codificamos a loja com layout responsivo, funcionalidades específicas e integrações com sistemas de pagamento e logística.",
    iconName: "Brush",
    variant: "secondary",
    background: <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-60" />,
  },
  {
    id: "setup",
    title: "Cadastro Inicial e Configurações",
    description:
      "Cadastramos os produtos iniciais, ajustamos regras de estoque, prazos, impostos e frete conforme necessidade do cliente.",
    iconName: "Settings",
    variant: "primary",
    background: <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-60" />,
  },
  {
    id: "testing",
    title: "Testes e Validação",
    description:
      "Testamos o fluxo completo de compra, revisamos os detalhes e realizamos ajustes com base no feedback do cliente.",
    iconName: "CheckCircle2",
    variant: "secondary",
    background: <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-60" />,
  },
  {
    id: "launch",
    title: "Publicação e Treinamento",
    description:
      "Publicamos a loja no domínio do cliente e oferecemos treinamento e manual de uso para facilitar a gestão da plataforma.",
    iconName: "Rocket",
    variant: "primary",
    background: <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-60" />,
  },
] 
