"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/hero/hero"
import { ServicesSection } from "@/components/services/services-section"
import { ContactSection } from "@/components/contact/contact-section"
import { StepsSection } from "@/components/steps/steps-section"
import { WhatsAppButton } from "@/components/whatsapp/whatsapp-button"
import { FaqSection } from "@/components/faq/faq-section"
import { faqData } from "@/components/faq/faq-data"
import { WhyChooseUsSection } from "@/components/why-choose-us/why-choose-us-section"
import { WhyProductSection } from "@/components/why-product/why-product-section"
import { StatsSection } from "@/components/stats/stats-section"
import { WhatsAppCTA } from "@/components/whatsapp/whatsapp-cta"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero
          title= { <>Sistemas Web <span className="text-primary">Sob Medida</span></> } // ALTERAR
          subtitle="Transforme tarefas manuais em fluxos digitais, unifique suas operações e acelere o crescimento do seu negócio." // ALTERAR
          ctaText="Veja Como Funciona" 
          ctaHref="#etapas"
          secondaryCtaText="Conheça a CT Junior"
          secondaryCtaHref="https://www.ctjunior.com.br/"
        />
        <WhyProductSection />
        <WhatsAppCTA />
        {/* <ServicesSection />  // NAO USADO MAS BOA SEÇÃO PARA DEIXAR SALVA */}
        <WhyChooseUsSection /> {/* & Container "Precisa de mais informações?" */}
        <StepsSection />
        <StatsSection />
        <FaqSection {...faqData} />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
