import React from 'react'
import Hero from './components/Hero'
import Modes from './components/Modes'
import Trust from './components/Trust'
import Features from './components/Features'
import Security from './components/Security'
import Setup from './components/Setup'
import LiveExamples from './components/LiveExamples'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Top nav */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-950/40 border-b border-white/10">
        <div className="container mx-auto px-6 md:px-10 lg:px-14 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-xl bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-cyan-400" />
            <span className="font-semibold tracking-tight">Echo</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/70">
            <a href="#modes" className="hover:text-white">Modes</a>
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#" className="hover:text-white">Security</a>
            <a href="#" className="hover:text-white">Pricing</a>
          </nav>
          <a href="#" className="px-4 py-1.5 rounded-full bg-white text-slate-900 text-sm font-semibold">Invite</a>
        </div>
      </header>

      <main className="relative">
        <Hero />
        <Modes />
        <Trust />
        <Features />
        <Security />
        <Setup />
        <LiveExamples />
        <Testimonials />
        <Pricing />
        <CTA />
      </main>

      <footer className="py-10 text-center text-white/50 text-sm">© {new Date().getFullYear()} Echo</footer>
    </div>
  )
}

export default App
