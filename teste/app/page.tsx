"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { SharedHero } from "@/components/shared/hero"
import { ServicesSection } from "@/components/services/services-section"
import { ContactSection } from "@/components/contact/contact-section"
import { StepsSection } from "@/components/steps/steps-section"
import { WhatsAppButton } from "@/components/whatsapp/whatsapp-button"
import { FaqSection } from "@/components/faq/faq-section"
import { faqData } from "@/components/faq/faq-data"
import { WhyChooseUsSection } from "@/components/why-choose-us/why-choose-us-section"
import { StatsSection } from "@/components/stats/stats-section"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <SharedHero
          title= { <>Sistemas Web <span className="text-primary">Sob Medida</span></> }
          subtitle="Automatize processos, centralize dados e escale seu negócio com eficiência."
          ctaText="Solicitar orçamento"
          ctaHref="#contato"
        />
        <ServicesSection />
        <StepsSection />
        <WhyChooseUsSection />
        <StatsSection />
        <FaqSection {...faqData} />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
