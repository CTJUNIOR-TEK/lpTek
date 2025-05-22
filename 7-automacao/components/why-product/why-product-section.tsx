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
        badge="Por que automatizar processos"
        badgeColor="primary"
        title={
          <>
            Aumente a eficiência com <span className="text-primary">automação sob medida</span>
          </>
        }
        description="Reduza tarefas manuais, elimine erros operacionais e ganhe tempo com fluxos automatizados e integrados aos seus sistemas atuais."
      />

      <div className="max-w-7xl mx-auto mt-12">
        <WhyProductFeatures />
      </div>
    </div>
  </section>
)
  return 
}
