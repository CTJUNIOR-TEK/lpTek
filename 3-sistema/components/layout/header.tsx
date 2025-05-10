"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/theme/mode-toggle"
import { NavigationMenu } from "@/components/navigation/navigation-menu"
import { MobileMenu } from "@/components/navigation/mobile-menu"

export function Header() {
  const handleQuoteClick = () => {
    const targetElement = document.getElementById('contato')
    if (targetElement) {
      targetElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <header className="fixed top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Logo para o modo claro */}
          <Image
            src="/logo-preta-reta-noSlogan.svg"
            alt="CT Junior Logo - Claro"
            width={128}
            height={32}
            className="rounded block dark:hidden"
          />

          {/* Logo para o modo escuro */}
          <Image
            src="/logo-branca-reta-noSlogan.svg"
            alt="CT Junior Logo - Escuro"
            width={128}
            height={32}
            className="rounded hidden dark:block"
          />
        </div>
        <NavigationMenu />
        <div className="flex items-center gap-4">
          <ModeToggle />
          <Button 
            className="hidden md:inline-flex bg-primary hover:bg-secondary/90 text-white"
            onClick={handleQuoteClick}
          >
            Solicitar orçamento
          </Button>
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}

function MobileMenuToggle() {
  return (
    <Button
      variant="outline"
      size="icon"
      className="md:hidden border-secondary/20 hover:bg-secondary/10 hover:text-secondary"
    >
      <span className="sr-only">Menu</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <line x1="4" x2="20" y1="12" y2="12" />
        <line x1="4" x2="20" y1="6" y2="6" />
        <line x1="4" x2="20" y1="18" y2="18" />
      </svg>
    </Button>
  )
}
