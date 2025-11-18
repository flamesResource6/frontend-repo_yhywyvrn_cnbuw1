import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const Hero = () => {
  return (
    <section className="relative overflow-hidden min-h-[92vh] flex items-center">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_10%,rgba(124,58,237,0.25),transparent),radial-gradient(700px_400px_at_80%_60%,rgba(59,130,246,0.18),transparent),radial-gradient(600px_300px_at_20%_70%,rgba(147,51,234,0.15),transparent)]" />

      {/* Spline 3D animation */}
      <div className="absolute inset-0 opacity-80">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft glow pulse ring */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[55vw] max-w-[900px] aspect-square rounded-full"
        initial={{ boxShadow: '0 0 0px rgba(99,102,241,0.0)' }}
        animate={{
          boxShadow: [
            '0 0 120px 20px rgba(99,102,241,0.25)',
            '0 0 170px 28px rgba(56,189,248,0.25)',
            '0 0 120px 20px rgba(99,102,241,0.25)'
          ],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Content */}
      <div className="relative container mx-auto px-6 md:px-10 lg:px-14">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-cyan-400 shadow-[0_0_40px_rgba(99,102,241,0.55)]" />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-white/20" />
              </div>
              <span className="text-white/80 tracking-wider uppercase text-sm">Echo for Discord</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              Your server. Powered by Echo.
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-white/80 max-w-2xl">
              An AI assistant that learns your community, supports your team, and keeps your server running—automatically.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#" className="group inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-400 text-slate-900 font-semibold shadow-lg shadow-indigo-500/20 hover:shadow-fuchsia-500/20 transition-all">
                Invite Echo
                <span className="ml-2 inline-block transition-transform group-hover:translate-x-0.5">→</span>
              </a>
              <a href="#features" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white/10 text-white hover:bg-white/15 backdrop-blur border border-white/15">
                View Features
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Rhythmic glow synced to scroll (subtle) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-40 bg-gradient-to-t from-indigo-500/10 via-fuchsia-500/5 to-transparent blur-2xl" />
      </div>
    </section>
  )
}

export default Hero
