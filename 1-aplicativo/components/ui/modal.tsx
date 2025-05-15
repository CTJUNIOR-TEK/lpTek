"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  subtitle: string
  description: string
  benefits: string[]
  ctaText: string
  ctaHref: string
}

export function Modal({ isOpen, onClose, title, subtitle, description, benefits, ctaText, ctaHref }: ModalProps) {
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true)
      // Prevenir scroll do body quando o modal estiver aberto
      document.body.style.overflow = "hidden"
    } else {
      // Restaurar scroll quando o modal for fechado
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  if (!isOpen && !isAnimating) return null

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const handleAnimationEnd = () => {
    if (!isOpen) {
      setIsAnimating(false)
    }
  }

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-opacity duration-300",
        isOpen ? "opacity-100" : "opacity-0",
      )}
      onClick={handleBackdropClick}
      onTransitionEnd={handleAnimationEnd}
    >
      <div
        className={cn(
          "bg-background max-w-lg w-full rounded-xl shadow-xl p-6 md:p-8 relative" +
          "transition-all duration-300 transform sm:max-w-lg sm:p-6" +
          "overflow-y-auto max-h-[90vh]",
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0",
        )}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-full hover:bg-muted transition-colors
                      sm:top-4 sm:right-4"
          aria-label="Fechar"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
            <p className="mt-2 text-lg text-primary font-medium">{subtitle}</p>
          </div>

          <p className="text-muted-foreground">{description}</p>

          <div>
            <h3 className="font-medium mb-3">Principais benefícios:</h3>
            <ul className="space-y-2">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="h-5 w-5 text-primary flex-shrink-0 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4">
            <Button className="w-full bg-primary hover:bg-primary/90 text-white py-6 rounded-full" 
              asChild
            >
              {/* fecha o modal e, em seguida, deixa o link fazer o scroll para #contato */}
              <a href={ctaHref}
                onClick={() => {
                  onClose()
                }}
              >{ctaText}</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
