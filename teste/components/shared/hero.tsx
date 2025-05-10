import { AuroraBackground } from "@/components/ui/aurora-background"
import { HeroContent } from "@/components/hero/hero-content"

interface SharedHeroProps {
  title: React.ReactNode
  subtitle: string
  ctaText: string
  ctaHref: string
  secondaryCtaText?: string
  secondaryCtaHref?: string
}

export function SharedHero({ title, subtitle, ctaText, ctaHref, secondaryCtaText, secondaryCtaHref }: SharedHeroProps) {
  return (
    <section id="inicio">
      <AuroraBackground isHero={true}>
        <HeroContent
          title={title}
          subtitle={subtitle}
          ctaText={ctaText}
          ctaHref={ctaHref}
          secondaryCtaText={secondaryCtaText}
          secondaryCtaHref={secondaryCtaHref}
        />
      </AuroraBackground>
    </section>
  )
} 