"use client"

import { CheckIcon } from "lucide-react"
import { StatItem } from "@/components/stats/stat-item"

/**
 * Dados das estatísticas a serem exibidas
 * Cada objeto contém o valor, label e sufixo opcional
 */
const statsData = [
  { value: 400, label: "Projetos Entregues", suffix: "+" },
  { value: 50, label: "Funcionários", suffix: "+" },
  { value: 90, label: "Nível de Satisfação (NPS)", suffix: "+" },
  { value: 180, label: "Clientes Satisfeitos", suffix: "+" },
]

/**
 * Seção de estatísticas com fundo de imagem tecnológica e overlay verde
 * Exibe métricas importantes da empresa com animação de contagem
 */
export function StatsSection() {
  return (
    <section id="estatisticas" className="relative w-full py-16 md:py-24 overflow-hidden bg-black">
      {/* Fundo com imagem genérica de tecnologia e overlay verde */}
      <div className="absolute inset-0 z-0">
        {/* Imagem de fundo com efeito de blur */}
        <img
          src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Tecnologia"
          className="w-full h-full object-cover opacity-50 filter"
        />
        {/* Overlay verde semi-transparente */}
        <div className="absolute inset-0 bg-secondary/40" />
      </div>

      {/* Conteúdo da seção */}
      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Título da seção */}
          <div className="flex flex-col gap-4 mb-16">
            <div className="flex items-start gap-3">
              <CheckIcon className="h-8 w-8 text-[#5ECCE4] mt-1" />
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                <span className="text-primary">Dê o primeiro passo,</span>
                <br />
                <span className="text-white">sonhe grande.</span>
              </h2>
            </div>
          </div>

          {/* Grid de estatísticas */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {statsData.map((stat, index) => (
              <StatItem key={index} value={stat.value} label={stat.label} suffix={stat.suffix || "+"} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
