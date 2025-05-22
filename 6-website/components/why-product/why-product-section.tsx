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
          badge="Por que ter um site institucional"
          badgeColor="primary"
          title={
            <>
              Destaque sua marca com um <span className="text-primary">site profissional</span>
            </>
          }
          description="Descubra como um website institucional pode fortalecer sua presença digital, transmitir confiança e centralizar as principais informações do seu negócio."
        />

        <div className="max-w-7xl mx-auto mt-12">
          <WhyProductFeatures />
        </div>
      </div>
    </section>
  )
}
