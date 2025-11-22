import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-white tracking-tight text-center"
        >
          Let’s build something great
        </motion.h2>

        <div className="mt-10 max-w-2xl mx-auto">
          <form onSubmit={(e) => e.preventDefault()} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-white/70">Name</label>
                <input type="text" className="mt-1 w-full px-3 py-2 rounded-lg bg-white/10 border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="Jane Doe" />
              </div>
              <div>
                <label className="text-sm text-white/70">Email</label>
                <input type="email" className="mt-1 w-full px-3 py-2 rounded-lg bg-white/10 border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="jane@mail.com" />
              </div>
            </div>
            <div className="mt-4">
              <label className="text-sm text-white/70">Message</label>
              <textarea rows="5" className="mt-1 w-full px-3 py-2 rounded-lg bg-white/10 border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="Tell me about your project..." />
            </div>
            <div className="mt-6 flex justify-end">
              <button className="px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold hover:opacity-90 transition" type="submit">Send message</button>
            </div>
          </form>
        </div>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 -bottom-24 w-[110%] h-64 rounded-[50%] blur-3xl opacity-20 bg-gradient-to-r from-fuchsia-500 via-indigo-500 to-blue-500 pointer-events-none" />
    </section>
  )
}
