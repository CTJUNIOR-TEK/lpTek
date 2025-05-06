import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { SharedHero } from "@/components/shared/hero"
import { SharedServicesSection } from "@/components/shared/services-section"
import { WhyChooseUsSection } from "@/components/why-choose-us/why-choose-us-section"
import { ContactSection } from "@/components/contact/contact-section"
import { WhatsAppButton } from "@/components/whatsapp/whatsapp-button"
import { FaqSection } from "@/components/faq/faq-section"
import { faqData } from "@/components/faq/faq-data"
import { StatsSection } from "@/components/stats/stats-section"
import { servicesData } from "@/components/services/services-data"
import { whyChooseUsData } from "../dados/why-choose-us-data"

export default function Site1Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <SharedHero
          title={
            <>
              Soluções Digitais <span className="text-primary">Personalizadas</span>
            </>
          }
          subtitle="Somos uma empresa júnior especializada em desenvolvimento de software sob demanda"
          ctaText="Solicite um Orçamento"
          ctaHref="#contato"
        />
        <SharedServicesSection
          badge="Nossos Serviços"
          title={
            <>
              Soluções completas para o seu <span className="text-primary">negócio</span>
            </>
          }
          description="Oferecemos serviços de desenvolvimento tecnológico com qualidade e inovação para impulsionar o seu negócio."
          services={servicesData}
        />
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