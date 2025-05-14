"use client"
import { motion } from "framer-motion"
import React from "react"

import { ArrowRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ContactForm } from "../contact/contact-form"

interface HeroContentProps {
  title: React.ReactNode
  subtitle: string
  ctaText: string
  ctaHref: string
  secondaryCtaText?: string
  secondaryCtaHref?: string
}

export function HeroContent({ title, subtitle, ctaText, ctaHref, secondaryCtaText, secondaryCtaHref }: HeroContentProps) {
  return (
    <React.Fragment>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4 mt-32"
      >
        <div className="text-3xl md:text-7xl font-bold text-slate-900 dark:text-white text-center">{title}</div>
        <div className="font-light text-base md:text-4xl text-slate-800 dark:text-neutral-200 py-4 text-center max-w-4xl">
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
      
        {/* CTA secundária (visível só se for passada) */}
        {(secondaryCtaText && secondaryCtaHref) && (
          <a
            target="_blank"
            href={secondaryCtaHref}
            className="inline-flex items-center justify-center text-primary hover:text-primary/80 text-sm md:text-base"
          >
            {secondaryCtaText}
            <ExternalLink className="ml-1.5 h-4 w-4" />
          </a>
        )}
      </motion.div>


      {/* Coluna 2 – Formulário */}
      <motion.div
        initial={{ opacity: 0.0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          delay: 0.5,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative md:static w-full max-w-lg mx-auto z-0"
      >
        <div className="mt-20 bg-secondary/80 dark:bg-secondary/40 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-800 relative">
          <h3 className="text-2xl font-semibold text-white mb-2 text-center">Entre em Contato</h3>
          <ContactForm 
            labelColor="text-white"
            inputTextColor="text-foreground"
            inputBgColor="bg-background"
            inputBorderColor="border-input"
            inputFocusRingColor="ring-secondary"
            buttonBgColor="bg-primary"
            buttonHoverColor="hover:bg-secondary/90"
            buttonTextColor="text-white"
            successBgColor="bg-secondary/10 dark:bg-secondary/20"
            successTextColor="text-secondary dark:text-secondary-foreground"
          />
        </div>
      </motion.div>
    </React.Fragment>
  )
}
