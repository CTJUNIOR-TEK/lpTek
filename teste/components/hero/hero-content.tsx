"use client"
import { motion } from "framer-motion"
import type React from "react"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeroContentProps {
  title: React.ReactNode
  subtitle: string
  ctaText: string
  ctaHref: string
}

export function HeroContent({ title, subtitle, ctaText, ctaHref }: HeroContentProps) {
  return (
    <motion.div
      initial={{ opacity: 0.0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="relative flex flex-col gap-4 items-center justify-center px-4"
    >
      <div className="text-3xl md:text-7xl font-bold text-slate-900 dark:text-white text-center">{title}</div>
      <div className="font-extralight text-base md:text-4xl text-slate-800 dark:text-neutral-200 py-4 text-center max-w-4xl">
        {subtitle}
      </div>
      <Button
        size="lg"
        className="bg-primary hover:bg-primary/90 text-white dark:text-black rounded-full w-fit px-8 py-6 text-lg group"
        asChild
      >
        <a href={ctaHref}>
          {ctaText}
          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
        </a>
      </Button>
    </motion.div>
  )
}
