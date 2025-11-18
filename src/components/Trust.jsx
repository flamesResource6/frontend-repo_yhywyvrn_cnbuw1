import React from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck } from 'lucide-react'

const Trust = () => {
  const rows = [
    { label: 'Ban detected raider', color: 'emerald', level: 'Always Execute' },
    { label: 'Suggest timeout for spam', color: 'indigo', level: 'Request Approval' },
    { label: 'Welcome new user', color: 'amber', level: 'Ask First' },
    { label: 'Edit channel permissions', color: 'rose', level: 'Off Limits' },
  ]
  const barMap = {
    emerald: 'bg-emerald-500/30',
    indigo: 'bg-indigo-500/30',
    amber: 'bg-amber-500/30',
    rose: 'bg-rose-500/30',
  }

  return (
    <section className="relative py-20">
      <div className="container mx-auto px-6 md:px-10 lg:px-14">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.22,1,0.36,1] }}>
            <h2 className="text-3xl font-bold text-white">You're always in charge.</h2>
            <p className="mt-3 text-white/75 max-w-xl">
              Set a trust level for every AI action. Decide when Echo should act automatically, ask for permission, or stay out of it entirely.
            </p>

            <ul className="mt-6 space-y-3 text-white/80">
              <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-emerald-400" /> Always Execute</li>
              <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-indigo-400" /> Request Approval</li>
              <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-amber-400" /> Ask First</li>
              <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-rose-400" /> Off Limits</li>
            </ul>
          </motion.div>

          {/* Mockup */}
          <motion.div className="relative" initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.22,1,0.36,1] }}>
            <div className="rounded-2xl bg-slate-900/60 border border-white/10 backdrop-blur p-5 shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-500 to-fuchsia-500 flex items-center justify-center text-white">
                  <ShieldCheck size={18} />
                </div>
                <div className="text-white/90 font-semibold">Trust Controls</div>
              </div>

              {rows.map((row) => (
                <div key={row.label} className="flex items-center justify-between py-3 border-t border-white/5 first:border-0">
                  <div>
                    <div className="text-white/90 text-sm">{row.label}</div>
                    <div className="text-white/50 text-xs">{row.level}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className={`w-9 h-5 rounded-full ${barMap[row.color]} border border-white/10 relative`}>
                      <div className="absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white/90" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Trust
