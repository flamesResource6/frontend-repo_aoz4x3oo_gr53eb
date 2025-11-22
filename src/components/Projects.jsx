import { motion } from 'framer-motion'

const items = [
  {
    title: 'Realtime Collaboration Suite',
    tags: ['React', 'WebSockets', 'CRDT'],
    desc: 'A collaborative editor with live cursors, comments, and offline sync.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: '3D Product Customizer',
    tags: ['Three.js', 'GLTF', 'E-commerce'],
    desc: 'Interactive 3D customization experience embedded into storefronts.',
    image: 'https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'AI Content Assistant',
    tags: ['Python', 'FastAPI', 'LLMs'],
    desc: 'End-to-end content pipeline with prompt tooling and analytics dashboard.',
    image: 'https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=1600&auto=format&fit=crop',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_80%_20%,rgba(59,130,246,0.15),transparent),radial-gradient(500px_150px_at_20%_80%,rgba(168,85,247,0.1),transparent)] pointer-events-none" />

      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-white tracking-tight text-center"
        >
          Selected Projects
        </motion.h2>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.a
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              href="#"
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur hover:bg-white/10 transition"
            >
              <div className="aspect-video overflow-hidden">
                <img src={item.image} alt="" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-white group-hover:text-white/90">{item.title}</h3>
                <p className="mt-2 text-white/70 text-sm">{item.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.tags.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-full text-xs bg-white/10 text-white/80 border border-white/10">{t}</span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
