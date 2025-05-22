import {
  Layers,
  Repeat,
  Gauge,
  LockKeyhole,
  Cloud,
  Wrench,
  BarChart3,
} from "lucide-react"
import type { ReactNode } from "react"
import {
  Plug,
  Scissors,
  Rocket,
  Clock,
} from "lucide-react"
export interface BenefitData {
  title: string
  description: string
  icon: ReactNode
  variant: "primary" | "secondary"
}

export const benefits: BenefitData[] = 
  [
    {
      title: "Automação de tarefas repetitivas",
      description:
      "Reduza o tempo gasto com atividades manuais, liberando sua equipe para focar em tarefas mais estratégicas.",
      icon: <Repeat className="h-8 w-8" />,
      variant: "primary",
    },
    {
      title: "Mais agilidade e menos erros",
      description:
      "Minimize falhas humanas e padronize operações com fluxos automatizados e inteligentes.",
      icon: <Gauge className="h-8 w-8" />,
      variant: "secondary",
    },
    {
      title: "Integração entre sistemas",
      description:
      "Conectamos ferramentas que você já usa — como planilhas, ERPs e CRMs — para criar um fluxo contínuo de dados.",
      icon: <Plug className="h-8 w-8" />,
      variant: "primary",
    },
    {
      title: "Monitoramento em tempo real",
      description:
      "Acompanhe os processos automatizados com dashboards e relatórios que facilitam a tomada de decisões.",
      icon: <BarChart3 className="h-8 w-8" />,
      variant: "secondary",
    },
    {
      title: "Redução de custos operacionais",
      description:
      "Elimine gargalos e retrabalho, otimizando recursos e aumentando a eficiência geral do negócio.",
      icon: <Scissors className="h-8 w-8" />,
      variant: "primary",
    },
    {
      title: "Escalabilidade sem complicações",
      description:
      "À medida que seu negócio cresce, sua automação também pode evoluir — sem precisar recomeçar do zero.",
      icon: <Rocket className="h-8 w-8" />,
      variant: "secondary",
    },
    {
      title: "Execução 24h por dia",
      description:
      "A automação roda em segundo plano o tempo todo, garantindo processos funcionando mesmo fora do horário comercial.",
      icon: <Clock className="h-8 w-8" />,
      variant: "primary",
    },
    {
      title: "Fácil manutenção e ajustes",
      description:
      "Alterações nos fluxos podem ser feitas rapidamente conforme o seu processo muda, sem comprometer a operação.",
      icon: <Wrench className="h-8 w-8" />,
      variant: "secondary",
    },
  ]
