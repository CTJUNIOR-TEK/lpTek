import type { ReactNode } from "react"

interface SectionHeaderProps {
  badge?: string
  title: ReactNode
  description?: string
  alignment?: "left" | "center" | "right"
  className?: string
  badgeColor?: "primary" | "secondary"
}

export function SectionHeader({
  badge,
  title,
  description,
  alignment = "center",
  className = "",
  badgeColor = "primary",
}: SectionHeaderProps) {
  const alignmentClasses = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right",
  }

  const badgeClasses = {
    primary: "bg-primary/10 text-primary",
    secondary: "bg-secondary/10 text-secondary",
  }

  return (
    <div className={`flex flex-col ${alignmentClasses[alignment]} space-y-4 mb-12 ${className}`}>
      <div className="space-y-2">
        {badge && (
          <div className={`inline-block rounded-lg px-3 py-1 text-sm font-medium ${badgeClasses[badgeColor]}`}>
            {badge}
          </div>
        )}
        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">{title}</h2>
        {description && (
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  )
}
