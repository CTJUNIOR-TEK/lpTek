"use client"

import { useState } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

interface NavigationItem {
  label: string
  href: string
}

const navigationItems: NavigationItem[] = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Por que nos escolher", href: "#por-que-nos-escolher" },
  { label: "Estatísticas", href: "#estatisticas" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
]

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const handleNavigationClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsOpen(false)
    
    const targetId = href.substring(1)
    const targetElement = document.getElementById(targetId)
    
    if (targetElement) {
      targetElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <div className="md:hidden">
      <Button
        variant="outline"
        size="icon"
        className="border-secondary/20 hover:bg-secondary/10 hover:text-secondary"
        onClick={() => setIsOpen(!isOpen)}
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

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-background border-b shadow-md z-50">
          <div className="container py-4">
            <nav className="flex flex-col space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium hover:bg-secondary/10 hover:text-secondary rounded-md transition-colors"
                  onClick={(e) => handleNavigationClick(e, item.href)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-4 py-2">
                <Button 
                  className="w-full bg-secondary hover:bg-secondary/90 text-white"
                  onClick={() => {
                    setIsOpen(false)
                    const targetElement = document.getElementById('contato')
                    if (targetElement) {
                      targetElement.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                      })
                    }
                  }}
                >
                  Solicitar orçamento
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </div>
  )
} 