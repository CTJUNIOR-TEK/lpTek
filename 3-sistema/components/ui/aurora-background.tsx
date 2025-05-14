"use client"

import { cn } from "@/lib/utils"
import type React from "react"
import type { ReactNode } from "react"

/**
 * Props para o componente AuroraBackground
 * @property {ReactNode} children - Elementos filhos a serem renderizados sobre o fundo
 * @property {boolean} [showRadialGradient=true] - Se deve mostrar o gradiente radial
 * @property {React.HTMLProps<HTMLDivElement>} - Outras props HTML para o elemento div
 */
interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode
  showRadialGradient?: boolean
}

/**
 * Componente de fundo com efeito Aurora
 * Cria um fundo animado com gradientes coloridos
 */
export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <main>
      <div
        className={cn(
          "relative flex flex-col min-h-screen items-center justify-center bg-zinc-50 dark:bg-black text-slate-950 transition-bg",
          className,
        )}
        {...props}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={cn(
              `
            [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)]
            [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)]
            [--light-aurora:repeating-linear-gradient(100deg,var(--orange-500)_10%,var(--orange-300)_20%,var(--green-300)_30%,var(--orange-200)_40%,var(--green-400)_50%)]
            [--dark-aurora:repeating-linear-gradient(100deg,var(--orange-500)_10%,var(--orange-300)_15%,var(--green-300)_20%,var(--orange-200)_25%,var(--green-400)_30%)]
            [background-image:var(--white-gradient),var(--light-aurora)]
            dark:[background-image:var(--dark-gradient),var(--dark-aurora)]
            [background-size:300%,_200%]
            [background-position:50%_50%,50%_50%]
            filter blur-[10px] invert dark:invert-0
            after:content-[""] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--light-aurora)] 
            after:dark:[background-image:var(--dark-gradient),var(--dark-aurora)]
            after:[background-size:200%,_100%] 
            after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
            pointer-events-none
            absolute -inset-[10px] opacity-50 will-change-transform`,

              showRadialGradient && `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`,
            )}
          ></div>
        </div>
        {children}
      </div>
    </main>
  )
}