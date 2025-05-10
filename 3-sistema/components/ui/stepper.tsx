"use client"

import { cn } from "@/lib/utils"

interface StepperProps {
  progress: number
  className?: string
}

export function Stepper({ progress, className }: StepperProps) {
  // Garante que o progresso esteja entre 0 e 1
  const clampedProgress = Math.min(1, Math.max(0, progress))

  return (
    <div className={cn("relative w-2 bg-muted rounded-full", className)}>
      <div 
        className="absolute top-0 left-0 w-full bg-primary rounded-full transition-all duration-300 ease-linear" 
        style={{ 
          height: `${clampedProgress * 100}%`,
          transform: "translateZ(0)" // Força aceleração de hardware para animação mais suave
        }}
      />
    </div>
  )
}