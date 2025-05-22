"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"

interface NavigationItem {
  label: string
  href: string
}

const navigationItems: NavigationItem[] = [
  { label: "Início", href: "#inicio" },
  { label: "Automação",href: "#servicos" }, 
  { label: "Diferenciais", href: "#por-que-nos-escolher" },
  { label: "Etapas", href: "#etapas" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
]

export function NavigationMenu() {
  return (
    <nav className="hidden md:flex items-center gap-6">
      {navigationItems.map((item) => (
        <NavigationLink key={item.href} item={item} />
      ))}
    </nav>
  )
}

interface NavigationLinkProps {
  item: NavigationItem
}

function NavigationLink({ item }: NavigationLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const targetId = item.href.substring(1)
    const targetElement = document.getElementById(targetId)
    
    if (targetElement) {
      targetElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <Link
      href={item.href}
      onClick={handleClick}
      className={cn(
        "text-sm font-medium transition-colors",
        "hover:text-secondary focus:text-secondary",
        "after:block after:h-0.5 after:w-0 after:bg-secondary after:transition-all after:duration-300",
        "hover:after:w-full focus:after:w-full",
      )}
    >
      {item.label}
    </Link>
  )
}
