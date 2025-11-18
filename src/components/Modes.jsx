import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Bot, Gauge } from 'lucide-react'

const modes = [
  {
    name: 'Passive Mode',
    icon: Sparkles,
    text: 'Only acts when asked. Full control.',
    color: 'from-cyan-400 to-indigo-500',
    loop: (
      <div className="h-28 w-full rounded-xl bg-gradient-to-r from-cyan-500/20 via-indigo-500/20 to-fuchsia-500/20 relative overflow-hidden">
        <div className="absolute inset-0 animate-pulse" style={{ animationDuration: '2.8s' }} />
        <div className="absolute left-3 top-1/2 -translate-y-1/2 h-2 w-10 rounded-full bg-cyan-400/70 animate-[pulse_2s_ease-in-out_infinite]" />
      </div>
    )
  },
  {
    name: 'Assistant Mode',
    icon: Bot,
    text: 'Suggests actions. You approve.',
    color: 'from-indigo-500 to-fuchsia-500',
    loop: (
      <div className="h-28 w-full rounded-xl bg-gradient-to-r from-indigo-500/20 via-fuchsia-500/20 to-cyan-500/20 relative overflow-hidden">
        <div className="absolute inset-x-0 top-1/2 h-[2px] bg-white/10" />
        <div className="absolute left-0 top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-fuchsia-400 shadow-[0_0_20px_6px_rgba(232,121,249,0.35)] animate-[slide_3s_linear_infinite]" />
        <style>{`@keyframes slide{0%{left:0}100%{left:100%}}`}</style>
      </div>
    )
  },
  {
    name: 'Autonomous Mode',
    icon: Gauge,
    text: 'Full autopilot based on your rules.',
    color: 'from-fuchsia-500 to-cyan-400',
    loop: (
      <div className="h-28 w-full rounded-xl bg-gradient-to-r from-fuchsia-500/20 via-cyan-500/20 to-indigo-500/20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute left-4 top-4 w-2 h-2 rounded-full bg-cyan-400 animate-[blink_1.4s_ease-in-out_infinite]" />
          <div className="absolute right-6 bottom-6 w-3 h-3 rounded-full bg-indigo-400 animate-[blink_1.6s_ease-in-out_infinite]" />
          <style>{`@keyframes blink{0%,100%{opacity:.4}50%{opacity:1}}`}</style>
        </div>
      </div>
    )
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  show: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] } })
}

const Modes = () => {
  return (
    <section id="modes" className="relative py-20">
      <div className="container mx-auto px-6 md:px-10 lg:px-14">
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Echo Modes</h2>
          <p className="text-white/70 mt-2">Choose the level of control that fits your server.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {modes.map((m, i) => {
            const Icon = m.icon
            return (
              <motion.div key={m.name} className="group rounded-2xl p-6 bg-white/[0.06] border border-white/10 backdrop-blur-sm hover:bg-white/[0.08] transition" variants={cardVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.35 }} custom={i}>
                <div className={`inline-flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br ${m.color} text-slate-900 shadow-[0_0_30px_rgba(99,102,241,0.4)]`}>
                  <Icon size={20} />
                </div>
                <h3 className="mt-4 text-white font-semibold text-lg">{m.name}</h3>
                <p className="text-white/70 text-sm">{m.text}</p>
                <div className="mt-5">{m.loop}</div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Modes
