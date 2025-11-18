import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Users, FileClock, SlidersHorizontal, BrainCircuit, Boxes, Lock } from 'lucide-react'

const features = [
  { title: 'Smart Moderation', icon: Shield, text: 'Automatically detects trolls, spam, raids.' },
  { title: 'Role Automation', icon: Users, text: 'Welcomes new users, assigns roles.' },
  { title: 'AI Action Logs', icon: FileClock, text: 'Transparent records of all actions, reversible when possible.' },
  { title: 'Custom Rules', icon: SlidersHorizontal, text: 'Server-specific guidelines for how Echo behaves.' },
  { title: 'Adaptive Learning', icon: BrainCircuit, text: 'Echo learns how staff handle issues. (Soon)' },
  { title: 'Multi-Module Support', icon: Boxes, text: 'Moderation, utilities, auto-responses, and more.' },
]

const Features = () => {
  return (
    <section id="features" className="relative py-20">
      <div className="container mx-auto px-6 md:px-10 lg:px-14">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-white">Feature highlights</h2>
          <p className="text-white/70 mt-2">Designed for speed, safety, and clarity.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, idx) => {
            const Icon = f.icon
            return (
              <motion.div key={f.title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.06 }} className="group rounded-2xl p-6 bg-white/[0.06] border border-white/10 hover:bg-white/[0.08] backdrop-blur">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 flex items-center justify-center text-white shadow-[0_0_25px_rgba(79,70,229,0.45)]">
                      <Icon size={18} />
                    </div>
                    <span className="pointer-events-none absolute -inset-2 rounded-2xl bg-indigo-500/10 blur-xl" />
                  </div>
                  <h3 className="text-white font-semibold">{f.title}</h3>
                </div>
                <p className="mt-3 text-white/70 text-sm">{f.text}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Features
