import { ServiceCard } from "@/components/services/service-card"
import { ServiceGrid } from "@/components/services/service-grid"
import { servicesData, serviceLayoutClasses } from "@/components/services/services-data"
import { SectionHeader } from "@/components/ui/section-header"

export function ServicesSection() {
  return (
    <section id="servicos" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <SectionHeader
          badge="Nossos Serviços"
          title={
            <>
              Soluções completas para o seu <span className="text-primary">negócio</span>
            </>
          }
          description="Oferecemos serviços de desenvolvimento tecnológico com qualidade e inovação para impulsionar o seu negócio."
        />

        <ServiceGrid className="lg:grid-rows-3 max-w-7xl mx-auto">
          {servicesData.map((service, index) => (
            <ServiceCard key={service.id} {...service} className={serviceLayoutClasses[index]} />
          ))}
        </ServiceGrid>
      </div>
    </section>
  )
}
