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
      "Identificação dos produtos/serviços, público-alvo e funcionalidades desejadas para sua loja virtual.",
    iconName: "Lightbulb",
    variant: "primary",
    background: <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-60" />,
  },
  {
    id: "information",
    title: "Coleta de Informações",
    description: "Reunião de materiais como identidade visual, imagens dos produtos, descrições e políticas da loja.",
    iconName: "FileSearch",
    variant: "secondary",
    background: <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-60" />,
  },
  {
    id: "structure",
    title: "Estruturação da Plataforma",
    description: "Organização das páginas, categorias de produtos, configuração de meios de pagamento e cálculo de frete.",
    iconName: "LayoutDashboard",
    variant: "primary",
    background: <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-60" />,
  },
  {
    id: "development",
    title: "Desenvolvimento e Personalização",
    description: "Criação da loja virtual com layout responsivo, configurações técnicas e integração com pagamentos.",
    iconName: "Code2",
    variant: "secondary",
    background: <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-60" />,
  },
  {
    id: "products",
    title: "Cadastro Inicial e Configurações",
    description: "Inserção dos produtos, ajustes de estoque, prazos de entrega, impostos e políticas de envio.",
    iconName: "Database",
    variant: "primary",
    background: <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-60" />,
  },
  {
    id: "testing",
    title: "Testes e Validação com Cliente",
    description: "Verificação completa do funcionamento da loja e ajustes finais com base no seu feedback.",
    iconName: "Bug",
    variant: "secondary",
    background: <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-60" />,
  },
  {
    id: "launch",
    title: "Publicação e Treinamento",
    description: "Lançamento da loja online e orientações práticas para uso, gestão da plataforma e edição de conteúdo.",
    iconName: "Rocket",
    variant: "primary",
    background: <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-60" />,
  },
]