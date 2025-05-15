import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface BentoGridProps {
  children: ReactNode
  className?: string
}

export function ServiceGrid({ children, className }: BentoGridProps) {
  return <div className={cn("grid w-full auto-rows-[22rem] grid-cols-3 gap-4", className)}>{children}</div>
}
