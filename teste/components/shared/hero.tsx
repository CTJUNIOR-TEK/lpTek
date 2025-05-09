import { AuroraBackground } from "@/components/ui/aurora-background"
import { HeroContent } from "@/components/hero/hero-content"

interface SharedHeroProps {
  title: React.ReactNode
  subtitle: string
  ctaText: string
  ctaHref: string
}

export function SharedHero({ title, subtitle, ctaText, ctaHref }: SharedHeroProps) {
  return (
    <section id="inicio">
      <AuroraBackground isHero={true}>
        <HeroContent
          title={title}
          subtitle={subtitle}
          ctaText={ctaText}
          ctaHref={ctaHref}
        />
      </AuroraBackground>
    </section>
  )
} 