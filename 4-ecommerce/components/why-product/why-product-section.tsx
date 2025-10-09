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
          badge="Venda mais pela internet"
          badgeColor="primary"
          title={
            <>
              Por que ter um <span className="text-primary">E-commerce</span>
            </>
          }
          description="Venda produtos e serviços 24 horas por dia, alcance novos públicos sem estrutura física e tenha controle total sobre pedidos, estoque e desempenho de vendas."
        />

        <div className="max-w-7xl mx-auto mt-12">
          <WhyProductFeatures />
        </div>
      </div>
    </section>
  )
}