import React from 'react'
import { motion } from 'framer-motion'
import { Puzzle, Settings2, Cpu, ShieldCheck, CheckCheck, ArrowRight } from 'lucide-react'

const steps = [
  { title: 'Choose your basic modules', icon: Puzzle },
  { title: 'Configure only the ones you selected', icon: Settings2 },
  { title: 'Enable AI (optional)', icon: Cpu },
  { title: 'Set trust levels', icon: ShieldCheck },
  { title: 'Done — Echo starts working', icon: CheckCheck },
]

const Setup = () => {
  return (
    <section className="relative py-20">
      <div className="container mx-auto px-6 md:px-10 lg:px-14">
        <h2 className="text-3xl font-bold text-white mb-8">Quick setup</h2>
        <div className="grid md:grid-cols-5 gap-4">
          {steps.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div key={s.title} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.06 }} className="relative rounded-2xl p-5 bg-white/[0.06] border border-white/10">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white">
                  <Icon size={18} />
                </div>
                <div className="mt-3 text-white/90 text-sm">{s.title}</div>
                {i < steps.length - 1 && (
                  <ArrowRight className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 text-white/30" />
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Setup
