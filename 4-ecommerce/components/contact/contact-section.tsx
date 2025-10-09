import { SectionHeader } from "@/components/ui/section-header"
import { ContactForm } from "@/components/contact/contact-form"

export function ContactSection() {
  return (
    <section id="contato" className="w-full py-12 md:py-24 lg:pb-32 bg-accent dark:bg-accent/40">
      <div className="container px-4 md:px-6">
        <div className="text-white">
          <SectionHeader
            badge="Contato"
            title={
              <>
                Pronto para abrir sua <span className="text-primary">Loja Virtual</span>?
              </>
            }
            description="Preencha o formulário e nossa equipe entrará em contato para criar um e-commerce perfeito para o seu negócio."
            badgeColor="primary"
          />
        </div>
        

        <div className="max-w-3xl mx-auto bg-background rounded-xl shadow-lg p-6 md:p-8 lg:p-10 border border-secondary/10">
          <ContactForm 
            labelColor="text-foreground"
            inputTextColor="text-foreground"
            inputBgColor="bg-background"
            inputBorderColor="border-input"
            inputFocusRingColor="ring-secondary"
            buttonBgColor="bg-primary"
            buttonHoverColor="hover:bg-secondary/90"
            buttonTextColor="text-white"
            successBgColor="bg-secondary/10 dark:bg-secondary/20"
            successTextColor="text-secondary dark:text-secondary-foreground"
          />
        </div>
      </div>
    </section>
  )
}
