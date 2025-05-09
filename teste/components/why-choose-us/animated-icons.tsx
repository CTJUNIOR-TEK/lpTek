"use client"

import { motion } from "framer-motion"

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => {
    const delay = i * 0.3
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    }
  },
}

export function CpuIcon() {
  return (
    <motion.svg
      width="80"
      height="80"
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="text-secondary"
    >
      {/* Ícone feather-cpu fiel, reposicionado no centro do viewBox */}
      <motion.rect x="30" y="30" width="40" height="40" rx="5" ry="5" variants={draw} custom={0} />
      <motion.rect x="42" y="42" width="16" height="16" variants={draw} custom={1} />
      <motion.line x1="42" y1="22" x2="42" y2="30" variants={draw} custom={2} />
      <motion.line x1="58" y1="22" x2="58" y2="30" variants={draw} custom={3} />
      <motion.line x1="42" y1="70" x2="42" y2="78" variants={draw} custom={4} />
      <motion.line x1="58" y1="70" x2="58" y2="78" variants={draw} custom={5} />
      <motion.line x1="70" y1="42" x2="78" y2="42" variants={draw} custom={6} />
      <motion.line x1="70" y1="58" x2="78" y2="58" variants={draw} custom={7} />
      <motion.line x1="22" y1="42" x2="30" y2="42" variants={draw} custom={8} />
      <motion.line x1="22" y1="58" x2="30" y2="58" variants={draw} custom={9} />

      {/* Círculo externo bem centralizado com padding interno */}
      <motion.circle
        cx="50"
        cy="50"
        r="45"
        variants={draw}
        custom={3.5}
      />
    </motion.svg>
  )
}

export function DollarIcon() {
  return (
    <motion.svg
      width="80"
      height="80"
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="text-secondary"
    >
      {/* Ícone original reposicionado e reescalado proporcionalmente */}
      <motion.line
        x1="50"
        y1="20"
        x2="50"
        y2="80"
        variants={draw}
        custom={0}
      />
      <motion.path
        d="M67 30H42a8 8 0 0 0 0 16h20a8 8 0 0 1 0 16H30"
        variants={draw}
        custom={1}
      />

      {/* Círculo externo com bom padding */}
      <motion.circle
        cx="50"
        cy="50"
        r="45"
        variants={draw}
        custom={3.5}
      />
    </motion.svg>
  )
}

export function UserCheckIcon() {
  return (
    <motion.svg
      width="80"
      height="80"
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="text-secondary"
    >
      {/* Corpo do usuário (subiu para ficar mais próximo da cabeça) */}
      <motion.path
        d="M68 75v-6a10 10 0 0 0-10-10H42a10 10 0 0 0-10 10v6"
        variants={draw}
        custom={0}
      />
      {/* Cabeça do usuário (desceu um pouco) */}
      <motion.circle cx="50" cy="42" r="10" variants={draw} custom={3.5} />

      {/* Check lateral */}
      <motion.polyline points="68,45 72,49 80,41" variants={draw} custom={2} />

      {/* Círculo externo */}
      <motion.circle
        cx="50"
        cy="50"
        r="45"
        variants={draw}
        custom={2.5}
      />
    </motion.svg>
  )
}

export function PersonalizationIcon() {
  return (
    <motion.svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="text-secondary"
    >
      {/* Gear icon with customization elements */}
      <motion.circle cx="40" cy="40" r="20" variants={draw} custom={0} />
      <motion.circle cx="40" cy="40" r="10" variants={draw} custom={1} />
      <motion.path
        d="M40 20v-8M40 68v-8M20 40h-8M68 40h-8M58.3 21.7l-5.6 5.6M27.3 52.7l-5.6 5.6M58.3 58.3l-5.6-5.6M27.3 27.3l-5.6-5.6"
        variants={draw}
        custom={2}
      />
      <motion.path d="M46 40a6 6 0 1 1-12 0 6 6 0 0 1 12 0z" variants={draw} custom={3} />
    </motion.svg>
  )
}

export function CostBenefitIcon() {
  return (
    <motion.svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="text-secondary"
    >
      {/* Money/value icon */}
      <motion.circle cx="40" cy="40" r="30" variants={draw} custom={0} />
      <motion.path
        d="M40 25v30M32 30h12c3.3 0 6 2.7 6 6s-2.7 6-6 6h-12c-3.3 0-6 2.7-6 6s2.7 6 6 6h16"
        variants={draw}
        custom={1}
      />
      <motion.path d="M50 55l5-5-5-5M30 35l-5-5 5-5" variants={draw} custom={2} />
    </motion.svg>
  )
}

export function InnovationIcon() {
  return (
    <motion.svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="text-secondary"
    >
      {/* Innovation/technology icon */}
      <motion.path d="M40 15v10M40 55v10M15 40h10M55 40h10" variants={draw} custom={0} />
      <motion.path d="M25 25l7 7M48 48l7 7M25 55l7-7M48 32l7-7" variants={draw} custom={1} />
      <motion.circle cx="40" cy="40" r="15" variants={draw} custom={2} />
      <motion.path d="M40 32v8l5 5" variants={draw} custom={3} />
    </motion.svg>
  )
}

export function GitHubIcon() {
  return (
    <motion.svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="text-secondary"
    >
      {/* Círculo externo com bom padding */}
      <motion.circle
        cx="40"
        cy="40"
        r="32"
        variants={draw}
        custom={0}
      />

      {/* Ícone do GitHub fiel ao original (sem alterações) */}
      <motion.path
        d="M33 63c-5 1.5-5-2.5-7-3M47 69v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 58 51.77 5.07 5.07 0 0 0 57.91 48S56.73 47.65 54 49.48a13.38 13.38 0 0 0-7 0C44.27 47.65 43.09 48 43.09 48A5.07 5.07 0 0 0 43 51.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 47 68.13V72"
        variants={draw}
        custom={1}
      />
    </motion.svg>
  )
}