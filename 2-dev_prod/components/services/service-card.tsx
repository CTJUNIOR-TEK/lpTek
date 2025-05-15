"use client"

import { useState } from "react"
import type React from "react"
import { ArrowRightIcon } from "@radix-ui/react-icons"
import { Globe, Smartphone, Database, Lightbulb, LifeBuoy, ShoppingCart } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Modal } from "@/components/ui/modal"
import { servicesDetails } from "@/components/services/services-details"
import type { ReactNode } from "react"

const iconMap = {
  Globe,
  Smartphone,
  Database,
  Lightbulb,
  LifeBuoy,
  ShoppingCart,
}

export interface ServiceCardProps {
  id: string
  name: string
  className: string
  background: ReactNode
  iconName: keyof typeof iconMap
  description: string
  variant?: "primary" | "secondary"
}

export function ServiceCard({
  id,
  name,
  className,
  background,
  iconName,
  description,
  variant = "primary",
}: ServiceCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const serviceDetail = servicesDetails[id]
  const Icon = iconMap[iconName]

  return (
    <>
      <div
        className={cn(
          "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
          // light styles
          "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
          // dark styles
          "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
          className,
        )}
      >
        <div>{background}</div>
        <CardContent Icon={Icon} name={name} description={description} variant={variant} />
        <CardAction onClick={() => setIsModalOpen(true)} variant={variant} />
        <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
      </div>

      {serviceDetail && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={serviceDetail.title}
          subtitle={serviceDetail.subtitle}
          description={serviceDetail.description}
          benefits={serviceDetail.benefits}
          ctaText="Solicitar Orçamento"
          ctaHref="#contato"
        />
      )}
    </>
  )
}

interface CardContentProps {
  Icon: React.ElementType
  name: string
  description: string
  variant: "primary" | "secondary"
}

function CardContent({ Icon, name, description, variant }: CardContentProps) {
  return (
    <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
      <Icon
        className={cn(
          "h-12 w-12 origin-left transform-gpu transition-all duration-300 ease-in-out group-hover:scale-75",
          variant === "primary" ? "text-primary" : "text-secondary",
        )}
      />
      <h3 className="text-xl font-semibold text-neutral-700 dark:text-neutral-300">{name}</h3>
      <p className="max-w-lg text-neutral-400">{description}</p>
    </div>
  )
}

interface CardActionProps {
  onClick: () => void
  variant: "primary" | "secondary"
}

function CardAction({ onClick, variant }: CardActionProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
      )}
    >
      <Button
        variant="ghost"
        size="sm"
        onClick={onClick}
        className={cn(
          "pointer-events-auto",
          variant === "primary" ? "text-primary hover:text-primary/90" : "text-secondary hover:text-secondary/90",
        )}
      >
        Ver mais
        <ArrowRightIcon className="ml-2 h-4 w-4" />
      </Button>
    </div>
  )
}
