import React from 'react'
import { motion } from 'framer-motion'

const testimonials = [
  { name: 'Ava — Server Owner', quote: 'Echo feels like a teammate. It handles the chaos so we can build community.' },
  { name: 'Kai — Community Lead', quote: 'The trust levels are perfect. We keep control but save tons of time.' },
  { name: 'Mina — Mod', quote: 'Setup took minutes. Now tedious tasks are automatic.' },
]

const Testimonials = () => {
  return (
    <section className="relative py-20">
      <div className="container mx-auto px-6 md:px-10 lg:px-14">
        <h2 className="text-3xl font-bold text-white mb-8">Loved by communities</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.06 }} className="rounded-2xl p-6 bg-white/[0.06] border border-white/10">
              <p className="text-white/85">“{t.quote}”</p>
              <div className="mt-4 text-white/60 text-sm">{t.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
