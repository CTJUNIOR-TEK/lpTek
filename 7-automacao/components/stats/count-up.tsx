"use client"

import { useEffect, useState, useRef } from "react"

/**
 * Props para o componente CountUp
 * @property {number} end - Valor final que o contador deve atingir
 * @property {number} [duration=2000] - Duração da animação em milissegundos
 * @property {string} [suffix=""] - Sufixo a ser adicionado após o número (ex: "+", "%")
 * @property {string} [className=""] - Classes CSS adicionais para estilização
 */
interface CountUpProps {
  end: number
  duration?: number
  suffix?: string
  className?: string
}

/**
 * Componente que anima um contador de 0 até um valor final especificado
 * A animação inicia automaticamente quando o componente se torna visível na tela
 */
export function CountUp({ end, duration = 2000, suffix = "", className = "" }: CountUpProps) {
  // Estado para armazenar o valor atual do contador
  const [count, setCount] = useState(0)

  // Referência para o elemento DOM para detectar visibilidade
  const countRef = useRef<HTMLSpanElement>(null)

  // Estado para controlar se a animação já foi executada
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    // Cria um observador de interseção para detectar quando o elemento está visível na viewport
    const observer = new IntersectionObserver(
      (entries) => {
        // Verifica se o elemento está visível e se a animação ainda não foi executada
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)

          // Registra o tempo inicial para calcular o progresso da animação
          const startTime = performance.now()

          // Função recursiva para atualizar o contador com base no tempo decorrido
          const updateCount = (currentTime: number) => {
            const elapsedTime = currentTime - startTime
            const progress = Math.min(elapsedTime / duration, 1) // Valor entre 0 e 1
            const currentCount = Math.floor(progress * end)

            setCount(currentCount)

            // Continua a animação se ainda não atingiu o valor final
            if (progress < 1) {
              requestAnimationFrame(updateCount)
            } else {
              // Garante que o valor final seja exatamente o especificado
              setCount(end)
            }
          }

          // Inicia o loop de animação
          requestAnimationFrame(updateCount)
        }
      },
      { threshold: 0.1 }, // Inicia a animação quando pelo menos 10% do elemento está visível
    )

    // Observa o elemento quando o componente é montado
    if (countRef.current) {
      observer.observe(countRef.current)
    }

    // Limpa o observador quando o componente é desmontado
    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current)
      }
    }
  }, [end, duration, hasAnimated])

  return (
    <span ref={countRef} className={className}>
      {count}
      {suffix}
    </span>
  )
}
