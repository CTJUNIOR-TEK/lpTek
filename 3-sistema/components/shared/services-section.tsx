import { ServiceCard } from "@/components/services/service-card"
import { ServiceGrid } from "@/components/services/service-grid"
import { servicesData, serviceLayoutClasses } from "@/components/services/services-data"
import { SectionHeader } from "@/components/ui/section-header"
import type { ServiceCardProps } from "@/components/services/service-card"

interface SharedServicesSectionProps {
  badge: string
  title: React.ReactNode
  description: string
  services: Omit<ServiceCardProps, "className">[]
}

export function SharedServicesSection({ badge, title, description, services }: SharedServicesSectionProps) {
  return (
    <section id="servicos" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <SectionHeader
          badge={badge}
          title={title}
          description={description}
        />

        <ServiceGrid className="lg:grid-rows-3 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={service.id} {...service} className={serviceLayoutClasses[index]} />
          ))}
        </ServiceGrid>
      </div>
    </section>
  )
} 