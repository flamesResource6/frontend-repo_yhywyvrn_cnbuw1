import React from 'react'
import { motion } from 'framer-motion'
import { Hammer, UserPlus, Lightbulb, UserCog, Broom } from 'lucide-react'

const examples = [
  { title: 'Banned a spammer', icon: Hammer, subtitle: 'Auto-detected raid behavior' },
  { title: 'Sent a welcome message', icon: UserPlus, subtitle: 'Introduced server rules' },
  { title: 'Suggested a timeout', icon: Lightbulb, subtitle: 'You approved in one tap' },
  { title: 'Auto-assigned roles', icon: UserCog, subtitle: 'Based on intro form' },
  { title: 'Cleaned up channels', icon: Broom, subtitle: 'Removed inactive threads' },
]

const Card = ({ title, subtitle, Icon }) => (
  <div className="rounded-2xl bg-white/[0.06] border border-white/10 p-4">
    <div className="flex items-center gap-3">
      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-indigo-500 text-slate-900 flex items-center justify-center">
        <Icon size={18} />
      </div>
      <div>
        <div className="text-white text-sm font-medium">{title}</div>
        <div className="text-white/60 text-xs">{subtitle}</div>
      </div>
    </div>
  </div>
)

const LiveExamples = () => {
  return (
    <section className="relative py-20">
      <div className="container mx-auto px-6 md:px-10 lg:px-14">
        <h2 className="text-3xl font-bold text-white mb-6">Live examples</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {examples.map((e, i) => (
            <motion.div key={e.title} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.05 }}>
              <Card title={e.title} subtitle={e.subtitle} Icon={e.icon} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LiveExamples
