import Link from "next/link"
import { cn } from "@/lib/utils"

interface NavigationItem {
  label: string
  href: string
}

const navigationItems: NavigationItem[] = [
  { label: "Serviços", href: "#servicos" },
  { label: "Projetos", href: "#projetos" },
  { label: "Sobre nós", href: "#sobre" },
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
  return (
    <Link
      href={item.href}
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
