import { useState } from "react"
import { Lightbulb, Code, Layout, TestTube, Rocket, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Modal } from "@/components/ui/modal"
import { stepsDetails } from "@/components/steps/steps-details"
import type { ReactNode, CSSProperties } from "react"

/**
 * Mapeamento de nomes de ícones para componentes de ícone
 */
const iconMap = {
  Lightbulb,
  Code,
  Layout,
  TestTube,
  Rocket,
}

export interface StepCardProps {
  id: string
  title: string
  description: string
  iconName: keyof typeof iconMap
  stepNumber: number
  className?: string
  background?: ReactNode
  variant?: "primary" | "secondary"
  isActive?: boolean
  isCompleted?: boolean
  style?: CSSProperties
}

/**
 * Card para exibir uma etapa do processo
 * Com efeito hover e modal de detalhes
 */
export function StepCard({
  id,
  title,
  description,
  iconName,
  stepNumber,
  className = "",
  background,
  variant = "primary",
  isActive = false,
  isCompleted = false,
  style,
}: StepCardProps) {
  // Estado para controlar a visibilidade do modal de detalhes
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Busca detalhes adicionais da etapa
  const stepDetail = stepsDetails[id]

  // Obtém o componente de ícone do mapa
  const Icon = iconMap[iconName]

  return (
    <>
      {/* Card principal */}
      <div
        className={cn(
          "group relative flex flex-col justify-between overflow-hidden rounded-xl h-full transition-all duration-500",
          // Estilos para tema claro
          "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
          // Estilos para tema escuro
          "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
          // Estilos para etapa ativa
          isActive ? "shadow-lg" : "",
          className,
        )}
        style={style}
      >
        {/* Badge com número da etapa */}
        <div className="absolute top-4 left-4 z-20">
          <div
            className={cn(
              "flex h-12 w-12 items-center justify-center rounded-full text-lg font-medium transition-all duration-300",
              isCompleted
                ? "bg-primary text-primary-foreground"
                : isActive
                  ? "bg-primary/20 text-primary"
                  : variant === "primary"
                    ? "bg-primary/10 text-primary"
                    : "bg-secondary/10 text-secondary",
            )}
          >
            {isCompleted ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-check"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
            ) : (
              stepNumber
            )}
          </div>
        </div>

        {/* Elemento de fundo */}
        <div>
          {background || (
            <div
              className={cn(
                "absolute inset-0 bg-gradient-to-br opacity-60",
                variant === "primary" ? "from-primary/10 to-transparent" : "from-secondary/10 to-transparent",
              )}
            />
          )}
        </div>

        {/* Conteúdo do card */}
        <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 pl-20 transition-all duration-300 group-hover:-translate-y-10">
          <Icon
            className={cn(
              "h-12 w-12 origin-left transform-gpu transition-all duration-300 ease-in-out group-hover:scale-75",
              variant === "primary" ? "text-primary" : "text-secondary",
            )}
          />
          <h3 className="text-xl font-semibold text-neutral-700 dark:text-neutral-300">{title}</h3>
          <p className="max-w-lg text-neutral-400">{description}</p>
        </div>

        {/* Botão de ação */}
        <div
          className={cn(
            "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
          )}
        >
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsModalOpen(true)}
            className={cn(
              "pointer-events-auto",
              variant === "primary" ? "text-primary hover:text-primary/90" : "text-secondary hover:text-secondary/90",
            )}
          >
            Ver mais
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Overlay de hover */}
        <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
      </div>

      {/* Modal de detalhes da etapa */}
      {stepDetail && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={stepDetail.title}
          subtitle={stepDetail.subtitle}
          description={stepDetail.description}
          benefits={stepDetail.benefits}
          ctaText="Solicitar Orçamento"
          ctaHref="#contato"
        />
      )}
    </>
  )
}