import React from 'react'
import { motion } from 'framer-motion'

const tiers = [
  {
    name: 'Free',
    price: '$0',
    features: [
      'Core moderation & utilities',
      'AI suggestions',
      'Basic action logs',
    ],
    cta: 'Get Started'
  },
  {
    name: 'Premium',
    price: '$8/mo',
    features: [
      'Autonomous mode',
      'Advanced logs & reversals',
      'Faster learning',
      'Priority support'
    ],
    highlighted: true,
    cta: 'Upgrade'
  }
]

const Pricing = () => {
  return (
    <section className="relative py-20">
      <div className="container mx-auto px-6 md:px-10 lg:px-14">
        <h2 className="text-3xl font-bold text-white mb-8">Simple pricing</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {tiers.map((t, i) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }} className={`rounded-3xl p-6 border ${t.highlighted ? 'bg-gradient-to-br from-indigo-500/15 to-fuchsia-500/10 border-white/20' : 'bg-white/[0.06] border-white/10'}`}>
              <div className="flex items-end justify-between">
                <div>
                  <div className="text-white/80 text-sm">{t.name}</div>
                  <div className="text-white text-3xl font-extrabold mt-1">{t.price}</div>
                </div>
                {t.highlighted && (
                  <span className="text-xs text-white/70 px-2 py-1 rounded-full border border-white/20">Most popular</span>
                )}
              </div>
              <ul className="mt-6 space-y-2 text-white/80 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-white/60" /> {f}</li>
                ))}
              </ul>
              <button className={`mt-6 w-full rounded-xl py-2.5 font-medium ${t.highlighted ? 'bg-white text-slate-900' : 'bg-white/10 text-white border border-white/20 hover:bg-white/15'}`}>{t.cta}</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
