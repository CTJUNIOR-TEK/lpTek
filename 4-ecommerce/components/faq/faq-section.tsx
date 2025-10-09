import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { AuroraBackground } from "@/components/ui/aurora-background"
import { SectionHeader } from "../ui/section-header"

interface FaqItem {
  id: string
  question: string
  answer: string
}

interface FaqSectionProps {
  items: FaqItem[]
}

export function FaqSection({
  items,
}: FaqSectionProps) {
  return (
    <section id="faq" className="w-full relative">
      <div className="w-full h-full">
        <AuroraBackground className="w-full h-full">
          <div className="container py-12 md:py-24 lg:pt-24 z-10 space-y-16">
            <div className="mx-auto flex max-w-3xl flex-col text-left md:text-center">
              <SectionHeader 
                badge="Dúvidas sobre E-commerce"
                title={
                  <>
                    <span className="dark:text-white">Perguntas Frequentes sobre</span> <span className="text-secondary">Loja Virtual</span>
                  </>
                }
                description="Tire suas dúvidas sobre a criação da sua loja virtual. Não encontrou o que procura? Entre em contato conosco."
                badgeColor="secondary"
              />
            </div>
            <div className="mx-auto w-full lg:max-w-3xl bg-background/90 backdrop-blur-sm rounded-xl p-4 md:p-6">
              <Accordion type="single" collapsible className="w-full">
                {items.map((item) => (
                  <AccordionItem key={item.id} value={item.id} className="border-b border-border/50 last:border-0">
                    <AccordionTrigger className="transition-opacity duration-200 hover:no-underline hover:opacity-60 py-4">
                      <div className="font-medium text-left text-foreground">{item.question}</div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-4">
                      <div className="text-muted-foreground">{item.answer}</div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </AuroraBackground>
      </div>
    </section>
  )
}
