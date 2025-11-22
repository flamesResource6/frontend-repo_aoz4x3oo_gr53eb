import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] lg:min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/40 to-slate-950/80" />

      <div className="relative z-10 container mx-auto px-6 pt-36 md:pt-40 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 backdrop-blur">
            <span className="text-xs text-white/80">Available for freelance</span>
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white">
            Building delightful software experiences
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white/80 max-w-2xl">
            I craft performant web apps with modern stacks, smooth animations and accessible design.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="pointer-events-auto px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold hover:opacity-90 transition">View projects</a>
            <a href="#contact" className="pointer-events-auto px-5 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition">Get in touch</a>
          </div>
        </motion.div>
      </div>

      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[120%] h-64 rounded-[50%] blur-3xl opacity-20 bg-gradient-to-r from-blue-500 via-indigo-500 to-fuchsia-500 pointer-events-none" />
    </section>
  )
}
