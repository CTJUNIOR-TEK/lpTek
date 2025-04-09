import { SectionHeader } from "@/components/ui/section-header"
import { ContactForm } from "@/components/contact/contact-form"

export function ContactSection() {
  return (
    <section id="contato" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <SectionHeader
          badge="Contato"
          title={
            <>
              Vamos conversar sobre seu <span className="text-secondary">projeto</span>?
            </>
          }
          description="Preencha o formulário abaixo e nosso time entrará em contato o mais rápido possível."
          badgeColor="secondary"
        />

        <div className="max-w-3xl mx-auto bg-background rounded-xl shadow-lg p-6 md:p-8 lg:p-10 border border-secondary/10">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
