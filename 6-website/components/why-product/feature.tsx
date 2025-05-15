import { cn } from "@/lib/utils"
import type { BenefitData } from "./benefits-data"

/**
 * Props para o componente Feature
 */
export interface FeatureProps extends BenefitData {
  index: number
  isVisible: boolean
  delay: number
}

/**
 * Componente para um único benefício
 * Inclui efeitos de hover e estilização baseada na variante
 */
export function Feature({ title, description, icon, index, variant, isVisible, delay }: FeatureProps) {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature",
        "dark:border-neutral-800 border-neutral-200",
        (index === 0 || index === 4) && "lg:border-l",
        index < 4 && "lg:border-b",
        "transition-all duration-700 ease-out",
      )}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(10px)",
        transitionDelay: `${delay}s`,
        transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      }}
    >
      {/* Gradiente de hover */}
      {index < 4 && (
        <div
          className={cn(
            "opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t pointer-events-none",
            variant === "primary" ? "from-primary/10 to-transparent" : "from-secondary/30 to-transparent",
          )}
        />
      )}
      {index >= 4 && (
        <div
          className={cn(
            "opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b pointer-events-none",
            variant === "primary" ? "from-primary/10 to-transparent" : "from-secondary/30 to-transparent",
          )}
        />
      )}

      {/* Ícone com animação de hover */}
      <div
        className={cn(
          "mb-4 relative z-10 px-10 transition-transform duration-300 group-hover/feature:scale-110",
          variant === "primary" ? "text-primary" : "text-secondary",
        )}
      >
        {icon}
      </div>

      {/* Título com barra lateral animada */}
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div
          className={cn(
            "absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full transition-all duration-200 origin-center",
            variant === "primary"
              ? "bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-primary"
              : "bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-secondary",
          )}
        />
        <span
          className={cn(
            "group-hover/feature:translate-x-2 transition duration-200 inline-block",
            "text-neutral-800 dark:text-neutral-100",
          )}
        >
          {title}
        </span>
      </div>

      {/* Descrição com animação de hover */}
      <p
        className={cn(
          "text-sm relative z-10 px-10 transition-all duration-300",
          "text-neutral-600 dark:text-neutral-300 max-w-xs",
          "group-hover/feature:text-neutral-800 dark:group-hover/feature:text-neutral-100",
        )}
      >
        {description}
      </p>
    </div>
  )
}
