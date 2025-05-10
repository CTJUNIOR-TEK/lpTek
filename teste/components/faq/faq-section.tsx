import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { AuroraBackground } from "@/components/ui/aurora-background"

interface FaqItem {
  id: string
  question: string
  answer: string
}

interface FaqSectionProps {
  heading: string
  description: string
  items: FaqItem[]
}

export function FaqSection({
  heading,
  description,
  items,
}: FaqSectionProps) {
  return (
    <section id="faq" className="w-full relative">
      <div className="w-full h-full">
        <AuroraBackground className="w-full h-full">
          <div className="container py-12 md:py-24 lg:pt-24 z-10 space-y-16">
            <div className="mx-auto flex max-w-3xl flex-col text-left md:text-center">
              <div className="inline-block rounded-lg bg-secondary/20 px-3 py-1 text-sm text-secondary font-medium mb-4 mx-auto">
                Perguntas Frequentes
              </div>
              <h2 className="mb-3 text-3xl font-semibold md:mb-4 lg:mb-6 lg:text-4xl text-foreground">{heading}</h2>
              <p className="text-muted-foreground lg:text-lg">{description}</p>
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
