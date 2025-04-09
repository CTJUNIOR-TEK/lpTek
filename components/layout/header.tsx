import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/theme/mode-toggle"
import { NavigationMenu } from "@/components/navigation/navigation-menu"

export function Header() {
  return (
    <header className="fixed top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="/placeholder.svg?height=32&width=32"
            alt="CT Junior Logo"
            width={32}
            height={32}
            className="rounded"
          />
          <span className="text-xl font-bold">
            CT <span className="text-primary">Junior</span>
          </span>
        </div>
        <NavigationMenu />
        <div className="flex items-center gap-4">
          <ModeToggle />
          <Button className="hidden md:inline-flex bg-secondary hover:bg-secondary/90 text-white">
            Solicitar orçamento
          </Button>
          <MobileMenuToggle />
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
