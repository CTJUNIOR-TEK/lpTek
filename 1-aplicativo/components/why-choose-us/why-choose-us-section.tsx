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
  color: "text-primary" | "text-secondary"
}

function FeatureCard({ title, description, icon, delay, color }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.2 }}
      viewport={{ once: true, margin: "-100px" }}
      className="flex flex-col items-center text-center p-6 rounded-xl bg-background shadow-sm border border-secondary/20"
    >
      <div className="mb-6 h-24 w-24 flex items-center justify-center">{icon}</div>
      <h3 className={`text-xl font-semibold mb-3 ${color}`}>{title}</h3>
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
          description="Somos especialistas no design e desenvolvimento de apps, oferecendo soluções digitais personalizadas que alavancam os resultados do seu negócio"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
          <FeatureCard
            icon={<UserCheckIcon />}
            title="Seu app, sua identidade"
            description="Apps desenhados sob medida para sua visão de mercado. Não soluções prontas, mas experiências únicas que criam conexões genuínas com seu público-alvo."
            delay={0}
            color="text-primary"
          />
          <FeatureCard
            icon={<DollarIcon />}
            title="Investimento acessível"
            description="Desenvolvimento de aplicativos com até 30% mais economia que o mercado. Qualidade profissional sem comprometer seu orçamento."
            delay={1}
            color="text-secondary"
          />
          <FeatureCard
            icon={<CpuIcon />}
            title="Tecnologias atuais"
            description="React Native, Node.js e as melhores práticas do mercado. Apps rápidos, escaláveis e preparados para evoluir junto com seu negócio."
            delay={2}
            color="text-primary"
          />
        </div>

        <MoreInfos />
      </div>
    </section>
  )
}
