import { AuroraBackground } from "@/components/ui/aurora-background"
import { HeroContent } from "@/components/hero/hero-content"

export function AuroraHero() {
  return (
    <section id="inicio">
      <AuroraBackground isHero={true}>
        <HeroContent
          title={
            <>
              Soluções Digitais <span className="text-primary">Personalizadas</span>
            </>
          }
          subtitle="Somos uma empresa júnior especializada em desenvolvimento de software sob demanda"
          ctaText="Solicite um Orçamento"
          ctaHref="#contato"
        />
      </AuroraBackground>
    </section>
  )
}
