"use client"

import { SectionHeader } from "@/components/ui/section-header"
import { WhyProductFeatures } from "@/components/why-product/why-product-features"

/**
 * Seção que explica os benefícios de ter um sistema web
 * Substitui a seção de serviços, mantendo a estética visual
 */ 
 export function WhyProductSection(){
  return (
    <section id="servicos" className="w-full py-12 pt-24 bg-background">
      <div className="container px-4 md:px-6">
        <SectionHeader
          badge="Por que ter uma Landing Page"
          badgeColor="primary"
          title={
            <>
              Gere mais resultados com uma <span className="text-primary">landing page estratégica</span>
            </>
          }
          description="Descubra como uma landing page personalizada pode atrair mais leads, potencializar suas campanhas e aumentar suas conversões no digital."
        />

        <div className="max-w-7xl mx-auto mt-12">
          <WhyProductFeatures />
        </div>
      </div>
    </section>
  )
}

