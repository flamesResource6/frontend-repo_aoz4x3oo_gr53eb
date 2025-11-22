import { motion } from 'framer-motion'
import { Code2, Rocket, Zap, Palette, Cpu, Database } from 'lucide-react'

const skills = [
  { icon: <Code2 size={18} />, label: 'Frontend', items: ['React', 'Next.js', 'Vite', 'Tailwind', 'Framer Motion'] },
  { icon: <Cpu size={18} />, label: 'Backend', items: ['FastAPI', 'Node', 'GraphQL', 'WebSockets'] },
  { icon: <Database size={18} />, label: 'Data', items: ['MongoDB', 'Postgres', 'Prisma', 'Drizzle'] },
  { icon: <Palette size={18} />, label: 'Design', items: ['Figma', 'Design Systems', 'Accessibility'] },
  { icon: <Zap size={18} />, label: 'Ops', items: ['Docker', 'CI/CD', 'Vercel', 'Cloudflare'] },
  { icon: <Rocket size={18} />, label: 'Performance', items: ['Core Web Vitals', 'Profiling', 'Caching'] },
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-white tracking-tight text-center"
        >
          Skills & Focus
        </motion.h2>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.04 }}
              className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6"
            >
              <div className="flex items-center gap-2 text-white/90 font-semibold">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-white/10 border border-white/10">{s.icon}</span>
                {s.label}
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {s.items.map((it) => (
                  <span key={it} className="px-2.5 py-1 rounded-full text-xs bg-white/10 text-white/80 border border-white/10">{it}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
