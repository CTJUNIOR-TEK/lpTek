import { AuroraBackground } from "@/components/ui/aurora-background"
import { HeroContent } from "@/components/hero/hero-content"

interface HeroProps {
  title: React.ReactNode
  subtitle: string
  ctaText: string
  ctaHref: string
  secondaryCtaText?: string
  secondaryCtaHref?: string
}

export function Hero(props: HeroProps) {
  return (
    <section id="inicio">
      <AuroraBackground>
        <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center 
          justify-between gap-y-8 md:gap-8 pb-12">
          <HeroContent {...props} />
        </div>
      </AuroraBackground>
    </section>
  )
} 