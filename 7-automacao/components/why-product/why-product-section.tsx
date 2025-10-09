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
          badge="Automação que gera resultados"
          badgeColor="primary"
          title={
            <>
              Por que ter um Agente de IA no <span className="text-primary">WhatsApp</span>
            </>
          }
          description="Descubra como a automação no WhatsApp pode agilizar o atendimento, reduzir custos e aumentar as vendas da sua empresa."
        />

        <div className="max-w-7xl mx-auto mt-12">
          <WhyProductFeatures />
        </div>
      </div>
    </section>
  )
}