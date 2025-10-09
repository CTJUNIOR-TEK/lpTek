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
          badge="Desenvolvimento contínuo e flexível"
          badgeColor="primary"
          title={
            <>
              Por que contratar <span className="text-primary">Desenvolvimento Sob Demanda</span>
            </>
          }
          description="Uma forma flexível e contínua de evoluir seu produto digital. Time técnico especializado que se adapta às suas demandas, sem necessidade de escopo fechado."
        />

        <div className="max-w-7xl mx-auto mt-12">
          <WhyProductFeatures />
        </div>
      </div>
    </section>
  )
}