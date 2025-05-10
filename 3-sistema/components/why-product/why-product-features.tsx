"use client"

import { useEffect, useRef, useState } from "react"
import { Feature } from "./feature"
import { benefits } from "./benefits-data"

/**
 * Componente que exibe os benefícios de ter um sistema web
 * Usa um layout de grid com efeitos de hover
 */
export function WhyProductFeatures() {
  // Referência para o componente principal
  const featuresRef = useRef<HTMLDivElement>(null)

  // Estado para controlar a visibilidade dos itens
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Se o componente entrou na viewport
        if (entries[0].isIntersecting) {
          // Marcar como visível para iniciar as animações
          setIsVisible(true)
          // Desconectar o observer após detectar
          observer.disconnect()
        }
      },
      { threshold: 0.1 }, // Detecta quando 10% do elemento está visível
    )

    // Observar o elemento principal
    if (featuresRef.current) {
      observer.observe(featuresRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div
      ref={featuresRef}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 mx-auto rounded-xl overflow-hidden bg-white dark:bg-black shadow-lg"
    >
      {/* Primeira linha de benefícios */}
      {benefits.slice(0, 4).map((benefit, index) => (
        <Feature key={benefit.title} {...benefit} index={index} isVisible={isVisible} delay={index * 0.3} />
      ))}

      {/* Segunda linha de benefícios */}
      {benefits.slice(4).map((benefit, index) => (
        <Feature key={benefit.title} {...benefit} index={index + 4} isVisible={isVisible} delay={1.2 + index * 0.3} />
      ))}
    </div>
  )
}
