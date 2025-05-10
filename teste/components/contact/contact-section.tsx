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
                Vamos conversar sobre seu <span className="text-primary">projeto</span>?
              </>
            }
            description="Preencha o formulário abaixo ou envie-nos uma mensagem por WhatsApp e nosso time entrará em contato o mais rápido possível."
            badgeColor="primary"
          />
        </div>

        <div className="max-w-3xl mx-auto bg-background rounded-xl shadow-lg p-6 md:p-8 lg:p-10 border border-secondary/10">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
