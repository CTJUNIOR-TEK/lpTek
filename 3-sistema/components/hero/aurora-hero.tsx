import { AuroraBackground } from "@/components/ui/aurora-background"
import { HeroContent } from "@/components/hero/hero-content"

export function AuroraHero() {
  return (
    <section id="inicio">
      <AuroraBackground>
        <HeroContent
          title={
            <>
              Soluções Digitais <span className="text-primary">Personalizadas</span>
            </>
          }
          subtitle="Somos uma empresa júnior especializada em desenvolvimento de software sob demanda"
          ctaText="Veja Como Funciona"
          ctaHref="#etapas"
        />
      </AuroraBackground>
    </section>
  )
}
