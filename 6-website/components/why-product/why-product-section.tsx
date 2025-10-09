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
          badge="Autoridade digital"
          badgeColor="primary"
          title={
            <>
              Por que ter um <span className="text-primary">Website Institucional</span>
            </>
          }
          description="Fortaleça sua marca, ganhe visibilidade online e comunique de forma clara com seu público. Concentre todas as informações do seu negócio em um só lugar."
        />

        <div className="max-w-7xl mx-auto mt-12">
          <WhyProductFeatures />
        </div>
      </div>
    </section>
  )
}