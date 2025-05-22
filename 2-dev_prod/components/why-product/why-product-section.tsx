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
        badge="Por que investir em desenvolvimento contínuo"
        badgeColor="primary"
        title={
          <>
            Evolua sua solução com <span className="text-primary">desenvolvimento sob demanda</span>
          </>
        }
        description="Tenha uma equipe técnica dedicada à evolução do seu sistema ou aplicativo. Corrija, melhore e adicione novas funcionalidades no ritmo do seu crescimento."
      />

      <div className="max-w-7xl mx-auto mt-12">
        <WhyProductFeatures />
      </div>
    </div>
  </section>
)
}
