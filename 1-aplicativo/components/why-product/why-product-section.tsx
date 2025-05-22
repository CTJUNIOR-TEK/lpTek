"use client"

import { SectionHeader } from "@/components/ui/section-header"
import { WhyProductFeatures } from "@/components/why-product/why-product-features"

/**
 * Seção que explica os benefícios de ter um sistema web
 * Substitui a seção de serviços, mantendo a estética visual
 */
export function WhyProductSection() {
  return(
  <section id="servicos" className="w-full py-12 pt-24 bg-background">
    <div className="container px-4 md:px-6">
      <SectionHeader
        badge="Por que ter um aplicativo"
        badgeColor="primary"
        title={
          <>
            Leve sua marca para o celular do cliente com um <span className="text-primary">app sob medida</span>
          </>
        }
        description="Descubra como um aplicativo personalizado pode melhorar a experiência do usuário, aumentar o engajamento e facilitar o acesso aos seus serviços."
      />

      <div className="max-w-7xl mx-auto mt-12">
        <WhyProductFeatures />
      </div>
    </div>
  </section>
)
}
