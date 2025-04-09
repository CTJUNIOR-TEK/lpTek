import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
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
  supportHeading: string
  supportDescription: string
  supportButtonText: string
  supportButtonUrl: string
}

export function FaqSection({
  heading,
  description,
  items,
  supportHeading,
  supportDescription,
  supportButtonText,
  supportButtonUrl,
}: FaqSectionProps) {
  return (
    <section id="faq" className="w-full relative">
      <div className="w-full h-full">
        <AuroraBackground className="w-full h-full">
          <div className="container py-12 md:py-24 lg:py-32 space-y-16">
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
            <div className="mx-auto flex max-w-4xl flex-col items-center rounded-lg bg-accent backdrop-blur-sm p-4 text-center md:rounded-xl md:p-6 lg:p-8 border border-secondary/20">
              <div className="relative mb-8">
                <Avatar className="absolute mb-4 size-16 origin-bottom -translate-x-[60%] scale-[80%] border border-secondary/30 md:mb-5">
                  <AvatarImage src="/placeholder.svg?height=64&width=64" />
                  <AvatarFallback className="bg-secondary/10 text-secondary">CT</AvatarFallback>
                </Avatar>
                <Avatar className="absolute mb-4 size-16 origin-bottom translate-x-[60%] scale-[80%] border border-secondary/30 md:mb-5">
                  <AvatarImage src="/placeholder.svg?height=64&width=64" />
                  <AvatarFallback className="bg-secondary/10 text-secondary">JR</AvatarFallback>
                </Avatar>
                <Avatar className="mb-4 size-16 border border-secondary/30 md:mb-5">
                  <AvatarImage src="/placeholder.svg?height=64&width=64" />
                  <AvatarFallback className="bg-secondary/10 text-secondary">CT</AvatarFallback>
                </Avatar>
              </div>
              <h3 className="mb-2 max-w-3xl font-semibold lg:text-lg text-foreground">{supportHeading}</h3>
              <p className="mb-8 max-w-3xl text-muted-foreground lg:text-lg">{supportDescription}</p>
              <div className="flex w-full flex-col justify-center gap-2 sm:flex-row">
                <Button className="w-full bg-primary hover:bg-primary/90 text-white sm:w-auto" asChild>
                  <a href={supportButtonUrl}>{supportButtonText}</a>
                </Button>
              </div>
            </div>
          </div>
        </AuroraBackground>
      </div>
    </section>
  )
}
