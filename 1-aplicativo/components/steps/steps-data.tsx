"use client"

import type { StepCardProps } from "@/components/steps/steps-card"

/**
 * Dados das etapas do processo de desenvolvimento
 * Cada objeto representa uma etapa do processo
 */
export const stepsData: Omit<StepCardProps, "stepNumber" | "className" | "isActive" | "isCompleted" | "style">[] = [
  {
    id: "definition",
    title: "Descoberta e Estratégia",
    description:
      "Mergulhamos no seu mundo para entender sua visão, público-alvo e objetivos. Definimos juntos o que o app precisa resolver.",
    iconName: "Lightbulb",
    variant: "primary",
    background: <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-60" />,
  },
  {
    id: "ux-design",
    title: "Prototipagem e UX/UI",
    description: "Criamos protótipos interativos com interfaces intuitivas que refletem sua identidade. Design pensado para encantar a cada toque.",
    iconName: "LayoutDashboard",
    variant: "secondary",
    background: <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-60" />,
  },
  {
    id: "validation",
    title: "Validação do Design",
    description: "Você testa o protótipo e valida cada detalhe antes de começarmos a desenvolver. Garantimos que está tudo perfeito.",
    iconName: "FileSearch",
    variant: "primary",
    background: <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-60" />,
  },
  {
    id: "development",
    title: "Desenvolvimento do App",
    description: "Nossos desenvolvedores constroem seu app com código elegante e resiliente. Performance, segurança e escalabilidade garantidas.",
    iconName: "Code2",
    variant: "secondary",
    background: <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-60" />,
  },
  {
    id: "testing",
    title: "Testes e Refinamento",
    description: "Testamos em diferentes dispositivos, corrigimos bugs e refinamos cada interação para garantir uma experiência impecável.",
    iconName: "Bug",
    variant: "primary",
    background: <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-60" />,
  },
  {
    id: "publishing",
    title: "Publicação nas Lojas",
    description: "Cuidamos de todo o processo de publicação na App Store e Play Store. Seu app pronto para conquistar usuários.",
    iconName: "Rocket",
    variant: "secondary",
    background: <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-60" />,
  },
  {
    id: "support",
    title: "Suporte e Evolução",
    description: "Após o lançamento, continuamos ao seu lado com atualizações, melhorias e novos recursos conforme seu app cresce.",
    iconName: "Database",
    variant: "primary",
    background: <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-60" />,
  },
]