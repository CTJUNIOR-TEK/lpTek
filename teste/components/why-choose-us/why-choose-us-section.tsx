"use client"

import type React from "react"
import { motion } from "framer-motion"
import { SectionHeader } from "@/components/ui/section-header"
import { CpuIcon, DollarIcon, UserCheckIcon,} from "@/components/why-choose-us/animated-icons"
import { MoreInfos } from "./more-infos"

interface FeatureCardProps {
  title: string
  description: string
  icon: React.ReactNode
  delay: number
}

function FeatureCard({ title, description, icon, delay }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.2 }}
      viewport={{ once: true, margin: "-100px" }}
      className="flex flex-col items-center text-center p-6 rounded-xl bg-background shadow-sm border border-secondary/20"
    >
      <div className="mb-6 h-24 w-24 flex items-center justify-center">{icon}</div>
      <h3 className="text-xl font-semibold mb-3 text-primary">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  )
}

export function WhyChooseUsSection() {
  return (
    <section id="por-que-nos-escolher" className="relative w-full">
      {/* Background overlay – cobre tudo menos a área de sobreposição do MoreInfos */}
      <div
        className="absolute inset-x-0 top-0 h-[calc(100%-12rem)] bg-secondary/5 pointer-events-none"
        aria-hidden="true"
      />
      {/* Conteúdo principal */}
      <div className="container relative z-10 px-4 md:px-6 py-12 md:py-24 lg:pt-24 lg:-mb-36 space-y-20">
        <SectionHeader
          badge="Por que nos escolher"
          badgeColor="primary"
          title={
            <>
              Por que escolher a CT <span className="text-primary">Junior</span>?
            </>
          }
          description="Entenda o que nos diferencia e como podemos agregar valor ao seu projeto"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
          <FeatureCard
            icon={<UserCheckIcon />}
            title="Personalização"
            description="Somente iniciamos a execução dos projetos depois da aprovação de nossos protótipos/mockups, modificando o que cliente desejar enquanto não é aprovada. Nosso papel é entregar exatamente o que você busca."
            delay={0}
          />
          <FeatureCard
            icon={<DollarIcon />}
            title="Custo-benefício"
            description="Nossas soluções são até 30% mais baratas do que o mercado geral de engenharia de software. Quanto maior o projeto, maior o custo benefício e satisfação final."
            delay={1}
          />
          <FeatureCard
            icon={<CpuIcon />}
            title="Inovação Tecnológica"
            description="Utilizamos as tecnologias mais recentes e melhores práticas do mercado para desenvolver soluções modernas, escaláveis e preparadas para o futuro."
            delay={2}
          />
        </div>

        {/* MoreInfos agora fica sobreposto, criando transição suave entre seções */}
        <MoreInfos />
      </div>
    </section>
  )
}
