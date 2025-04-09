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
