"use-client"

import { useEffect, useState, useRef } from "react"
import { SectionHeader } from "@/components/ui/section-header"
import { StepCard } from "@/components/steps/steps-card"
import { stepsData } from "@/components/steps/steps-data"
import { Stepper } from "@/components/ui/stepper"

/**
 * Seção de etapas do processo de desenvolvimento
 * Exibe as etapas sequenciais com uma linha vertical contínua
 * Ativa as etapas conforme o usuário rola a página
 */
export function StepsSection() {
  // Estado para controlar qual etapa está ativa
  const [activeStep, setActiveStep] = useState(0)
  // Estado para controlar o progresso global (0 a 1)
  const [progress, setProgress] = useState(0)

  // Referências para os elementos
  const sectionRef = useRef<HTMLElement>(null)
  const stepsContainerRef = useRef<HTMLDivElement>(null)
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])

  // Efeito para configurar o scroll listener
  useEffect(() => {
    if (!sectionRef.current || !stepsContainerRef.current) return

    // Função para calcular o progresso com base na posição de rolagem
    const calculateProgress = () => {
      const section = sectionRef.current
      if (!section) return

      // Obter dimensões da seção
      const sectionRect = section.getBoundingClientRect()
      const sectionTop = sectionRect.top
      const sectionHeight = sectionRect.height
      const windowHeight = window.innerHeight

      // Calcular quando a seção começa a entrar na viewport
      const startOffset = windowHeight * 0.1 // Começar um pouco antes da seção entrar completamente
      
      // Calcular quando a seção termina de sair da viewport
      // Isso será quando o último card estiver visível
      const lastCardRect = stepRefs.current[stepRefs.current.length - 1]?.getBoundingClientRect()
      const lastCardBottom = lastCardRect?.bottom || 0
      
      // Distância total a ser percorrida
      const totalScrollDistance = (sectionHeight + windowHeight - startOffset) - (windowHeight - lastCardBottom)
      
      // Posição atual do scroll relativa ao início da seção
      const currentScrollPosition = windowHeight - sectionTop - startOffset
      
      // Calcular progresso normalizado (0 a 1)
      let calculatedProgress = currentScrollPosition / totalScrollDistance
      calculatedProgress = Math.max(0, Math.min(1, calculatedProgress))
      
      return calculatedProgress
    }

    // Função para determinar qual etapa está ativa
    const determineActiveStep = () => {
      // Determinar qual etapa tem mais visibilidade na viewport
      let mostVisibleStep = 0
      let maxVisibility = 0

      stepRefs.current.forEach((ref, index) => {
        if (!ref) return

        const rect = ref.getBoundingClientRect()
        const windowHeight = window.innerHeight
        
        // Calcular quanta % do card está visível
        const visibleTop = Math.max(0, rect.top)
        const visibleBottom = Math.min(windowHeight, rect.bottom)
        const visibleHeight = Math.max(0, visibleBottom - visibleTop)
        const percentVisible = visibleHeight / rect.height
        
        // Atualizar o step mais visível
        if (percentVisible > maxVisibility) {
          maxVisibility = percentVisible
          mostVisibleStep = index
        }
      })

      return mostVisibleStep
    }

    // Função principal para atualizar estados baseados na rolagem
    const handleScroll = () => {
      const calculatedProgress = calculateProgress()
      if (calculatedProgress !== undefined) {
        setProgress(calculatedProgress)
      }

      const visibleStep = determineActiveStep()
      setActiveStep(visibleStep)
    }

    // Adicionar listener de scroll
    window.addEventListener('scroll', handleScroll)
    
    // Executar uma vez no início para definir estado inicial
    handleScroll()

    // Remover listener ao desmontar componente
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <section ref={sectionRef} id="etapas" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <SectionHeader
          badge="Da imaginação à interface"
          badgeColor="primary"
          title={
            <>
              Como criamos seu <span className="text-primary">Aplicativo</span>
            </>
          }
          description="Da concepção ao lançamento nas lojas: nosso processo é transparente e focado em transformar sua visão em um app pronto para o mercado."
        />

        <div className="max-w-7xl mx-auto mt-12">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            <div className="hidden md:block relative md:w-[50px] flex-shrink-0">
              <div className="absolute h-full w-full top-0 left-0">
                <Stepper progress={progress} className="h-full mx-auto" />
              </div>
            </div>

            {/* Cards de etapas à direita */}
            <div ref={stepsContainerRef} className="flex-1 flex flex-col space-y-8 md:space-y-28">
              {stepsData.map((step, index) => (
                <div 
                  key={step.id} 
                  className="step-card" 
                  ref={(el: HTMLDivElement | null) => {
                    stepRefs.current[index] = el;
                  }}
                  data-step-index={index}
                >
                  <StepCard
                    {...step}
                    stepNumber={index + 1}
                    isActive={index === activeStep}
                    isCompleted={index < activeStep}
                    style={{
                      transform: index === activeStep ? `scale(${1 + progress * 0.05})` : "",
                      opacity: index === activeStep ? 1 : index < activeStep ? 0.9 : 0.7,
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}