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
          badge="Páginas que convertem"
          badgeColor="primary"
          title={
            <>
              Por que investir em uma <span className="text-primary">Landing Page</span>
            </>
          }
          description="Página única estratégica com foco em conversão. Comunique sua oferta de forma clara, objetiva e persuasiva, gerando resultados rápidos para suas campanhas."
        />

        <div className="max-w-7xl mx-auto mt-12">
          <WhyProductFeatures />
        </div>
      </div>
    </section>
  )
}