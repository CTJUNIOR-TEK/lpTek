import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { AuroraHero } from "@/components/hero/aurora-hero"
import { ServicesSection } from "@/components/services/services-section"
import { ContactSection } from "@/components/contact/contact-section"
import { WhatsAppButton } from "@/components/whatsapp/whatsapp-button"
import { FaqSection } from "@/components/faq/faq-section"
import { faqData } from "@/components/faq/faq-data"
import { WhyChooseUsSection } from "@/components/why-choose-us/why-choose-us-section"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <AuroraHero />
        <ServicesSection />
        <WhyChooseUsSection />
        <FaqSection {...faqData} />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
