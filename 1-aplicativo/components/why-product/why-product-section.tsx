"use client"

import { SectionHeader } from "@/components/ui/section-header"
import { WhyProductFeatures } from "@/components/why-product/why-product-features"

/**
 * Seção que explica os benefícios de ter um sistema web
 * Substitui a seção de serviços, mantendo a estética visual
 */
export function WhyProductSection() {
  return (
    <section id="servicos" className="w-full py-12 pt-24 bg-background">
      <div className="container px-4 md:px-6">
        <SectionHeader
          badge="Resolvendo desafios digitais"
          badgeColor="primary"
          title={
            <>
              Por que investir em um <span className="text-primary">Aplicativo Personalizado</span>
            </>
          }
          description="Criamos apps que navegam pela inovação com interfaces intuitivas e experiências memoráveis que cativam seu cliente a cada toque. Mais fácil de acessar, mais próximo do seu público."
        />

        <div className="max-w-7xl mx-auto mt-12">
          <WhyProductFeatures />
        </div>
      </div>
    </section>
  )
}