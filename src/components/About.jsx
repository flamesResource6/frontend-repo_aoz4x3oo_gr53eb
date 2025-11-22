import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="order-2 lg:order-1"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">About Me</h2>
          <p className="mt-5 text-white/80 leading-relaxed">
            I’m a full‑stack developer focused on creating elegant, performant products. I care about accessibility, motion design, and crafting well‑structured systems.
          </p>
          <p className="mt-4 text-white/70">
            Recent work spans design systems, complex dashboards, and interactive 3D experiences. I thrive working with modern tooling and cross‑functional teams.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#contact" className="px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold hover:opacity-90 transition">Work with me</a>
            <a href="#projects" className="px-5 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition">See more</a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="order-1 lg:order-2"
        >
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-tr from-blue-500/20 to-fuchsia-500/20 blur-2xl rounded-3xl" />
            <div className="relative p-1 rounded-3xl bg-gradient-to-br from-white/20 to-white/5 border border-white/10">
              <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop" alt="Portrait" className="rounded-2xl object-cover w-full h-[420px]" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
