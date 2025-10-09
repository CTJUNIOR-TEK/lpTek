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
          description="Entenda o que nos diferencia e como podemos agregar valor ao seu projeto"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
          <FeatureCard
            icon={<UserCheckIcon />}
            title="Personalização do Agente"
            description="Adaptamos o agente de IA ao seu segmento — seja loja, clínica ou escritório — para responder exatamente às perguntas dos seus clientes."
            delay={0}
            color="text-primary"
          />
          <FeatureCard
            icon={<DollarIcon />}
            title="Investimento acessível"
            description="Plano direto: R$ 1.500 de implantação + R$ 500/mês. Um custo baixo comparado ao retorno em tempo economizado e vendas aceleradas."
            delay={1}
            color="text-secondary"
          />
          <FeatureCard
            icon={<CpuIcon />}
            title="Automação inteligente"
            description="Usamos tecnologias atuais para criar agentes rápidos, escaláveis e prontos para evoluir junto com a sua empresa."
            delay={2}
            color="text-primary"
          />
        </div>

        <MoreInfos />
      </div>
    </section>
  )
}
