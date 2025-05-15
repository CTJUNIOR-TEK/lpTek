"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AuroraBackground } from "@/components/ui/aurora-background"

export function HeroSection() {
  return (
    <AuroraBackground className="w-full">
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4 max-w-4xl mx-auto"
      >
        <div className="text-3xl md:text-7xl font-bold text-center">Soluções Digitais que Transformam seu Negócio</div>
        <div className="font-light text-base md:text-2xl text-center py-4 text-slate-800 dark:text-slate-200 max-w-3xl">
          Somos uma empresa júnior especializada em desenvolvimento de software sob demanda, criando experiências
          digitais personalizadas para o seu sucesso.
        </div>
        <Button size="lg" className="mt-4 text-lg px-8 py-6 rounded-full group">
          Solicite um Orçamento
          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Button>
      </motion.div>
    </AuroraBackground>
  )
}
