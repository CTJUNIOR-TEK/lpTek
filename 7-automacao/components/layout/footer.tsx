"use client"
import { Button } from "@/components/ui/button"
import { ExternalLink, Instagram, Linkedin, Clock, Phone } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="relative border-t bg-background text-foreground transition-colors duration-300">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="relative text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              {/* Logo para o modo claro */}
              <Image
                src="/logo-preta-completa.png"
                alt="CT Junior Logo - Claro"
                width={180}
                height={128}
                className="rounded block dark:hidden"
              />

              {/* Logo para o modo escuro */}
              <Image
                src="/logo-branca-completa.png"
                alt="CT Junior Logo - Escuro"
                width={180}
                height={128}
                className="rounded hidden dark:block"
              />
            </div>
            <p className="mb-6 text-muted-foreground">
              Empresa Júnior de Engenharia da Computação da UFES, desenvolvendo soluções tecnológicas personalizadas
              para impulsionar o seu negócio.
            </p>
            <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
          </div>

          <div className="text-center md:text-left">
            <h3 className="mb-4 text-lg font-semibold">Visite nosso site oficial</h3>
            <p className="mb-4 text-sm text-muted-foreground">
              Conheça mais sobre nossos projetos, equipe e serviços em nosso site oficial.
            </p>
            <Button
              variant="outline"
              className="gap-2 border-primary/20 hover:bg-primary/10 hover:text-primary"
              asChild
            >
              <a href="https://ctjunior.com.br" target="_blank" rel="noopener noreferrer">
                Acessar site oficial
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>

          <div className="text-center md:text-left">
            <h3 className="mb-4 text-lg font-semibold">Contato</h3>
            <address className="space-y-2 text-sm not-italic mb-6">
              <p>Universidade Federal do Espírito Santo</p>
              <p>Centro Tecnológico - CT</p>
              <p>Vitória, ES</p>
              <p>Email: contato@ctjunior.com.br</p>
              <div className="flex items-center justify-center md:justify-start gap-2 mt-2">
                <Phone className="h-4 w-4 text-primary" />
                <p>WhatsApp: <a href="tel:+5527997767207">+55 27 99776‑7207</a></p>
              </div>
            </address>

            <h3 className="mb-4 text-lg font-semibold">Redes Sociais</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full border-primary/20 hover:bg-primary/10 hover:text-primary"
                      asChild
                    >
                      <a href="https://www.instagram.com/ctjuniorufes/" target="_blank" rel="noopener noreferrer">
                        <Instagram className="h-4 w-4" />
                        <span className="sr-only">Instagram</span>
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Siga-nos no Instagram</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full border-primary/20 hover:bg-primary/10 hover:text-primary"
                      asChild
                    >
                      <a href="https://www.linkedin.com/company/ct-junior/" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-4 w-4" />
                        <span className="sr-only">LinkedIn</span>
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Conecte-se conosco no LinkedIn</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-center border-t pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 CT Junior. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
