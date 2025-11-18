import React from 'react'
import { motion } from 'framer-motion'

const CTA = () => {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_50%_0%,rgba(99,102,241,0.18),transparent_60%)]" />
      <div className="relative container mx-auto px-6 md:px-10 lg:px-14 text-center">
        <h2 className="text-4xl font-extrabold text-white">Bring Echo to your server.</h2>
        <p className="text-white/75 mt-3 max-w-2xl mx-auto">Install in minutes. Configure once. Echo keeps your server running smoothly with your rules.</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="#" className="px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-400 text-slate-900 font-semibold shadow-lg shadow-indigo-500/20">Invite Echo</a>
          <a href="#" className="px-6 py-3 rounded-full bg-white/10 text-white border border-white/15 hover:bg-white/15">Join Support Server</a>
        </div>
      </div>
    </section>
  )
}

export default CTA
