"use client"

import { CountUp } from "@/components/stats/count-up"

/**
 * Props para o componente StatItem
 * @property {number} value - Valor numérico da estatística
 * @property {string} label - Descrição da estatística
 * @property {string} [suffix="+"] - Sufixo a ser adicionado após o número
 */
interface StatItemProps {
  value: number
  label: string
  suffix?: string
}

/**
 * Componente que exibe um item de estatística com animação de contagem
 * Usado na seção de estatísticas para mostrar métricas importantes
 */
export function StatItem({ value, label, suffix = "+" }: StatItemProps) {
  return (
    <div className="flex flex-col items-center md:items-start">
      <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
        <CountUp end={value} suffix={suffix} />
      </h3>
      <p className="text-white/80 text-sm md:text-base">{label}</p>
    </div>
  )
}
