import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="w-full py-12 md:py-24 bg-secondary text-secondary-foreground">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Pronto para transformar suas ideias em realidade?
            </h2>
            <p className="max-w-[900px] text-secondary-foreground/80 md:text-xl/relaxed">
              Entre em contato conosco e descubra como podemos ajudar a impulsionar o seu negócio com soluções
              tecnológicas personalizadas.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white group">
              Solicitar orçamento
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
              Conhecer projetos
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
