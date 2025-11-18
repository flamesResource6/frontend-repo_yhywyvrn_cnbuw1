import React from 'react'
import { motion } from 'framer-motion'
import { Lock } from 'lucide-react'

const Security = () => {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(800px_300px_at_50%_10%,rgba(59,130,246,0.12),transparent)]" />
      <div className="relative container mx-auto px-6 md:px-10 lg:px-14">
        <div className="rounded-3xl bg-slate-900/70 border border-white/10 p-8 md:p-10 backdrop-blur">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-400 to-indigo-500 text-slate-900 shadow-[0_0_30px_rgba(56,189,248,0.35)]">
              <Lock size={22} />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white">Transparent. Safe. Reversible.</h3>
              <p className="text-white/75 mt-2 max-w-3xl">
                Echo is fully configurable. Owners choose what it can do, and users can opt out at any time. Every action is logged with context and can be reversed when possible.
              </p>
            </div>
          </div>
          <div className="mt-8 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-5 text-white/80">
            Security notice: We prioritize privacy and clarity. Data is processed with strict access controls. Learn more in our documentation.
          </div>
        </div>
      </div>
    </section>
  )
}

export default Security
