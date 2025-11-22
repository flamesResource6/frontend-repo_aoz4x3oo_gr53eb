import { useState } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center">
      <div className="backdrop-blur-xl bg-slate-900/50 border border-white/10 shadow-2xl rounded-2xl px-4 py-2 w-[94%] md:w-auto flex items-center gap-4">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 shadow-inner" />
          <span className="text-white/90 font-semibold tracking-tight group-hover:text-white transition-colors">Your Name</span>
        </a>

        <div className="hidden md:flex items-center gap-1 ml-2">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="px-3 py-2 rounded-lg text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors">
              {item.label}
            </a>
          ))}
        </div>

        <div className="ml-auto hidden md:flex items-center gap-2">
          <a href="https://github.com/" target="_blank" className="p-2 rounded-lg hover:bg-white/5 text-white/80 hover:text-white transition"><Github size={18} /></a>
          <a href="https://linkedin.com/" target="_blank" className="p-2 rounded-lg hover:bg-white/5 text-white/80 hover:text-white transition"><Linkedin size={18} /></a>
          <a href="#contact" className="px-3 py-2 rounded-lg bg-white text-slate-900 font-medium hover:opacity-90 transition">Get in touch</a>
        </div>

        <button className="md:hidden ml-auto p-2 rounded-lg hover:bg-white/5 text-white" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="absolute top-16 w-[94%] md:hidden"
          >
            <div className="backdrop-blur-xl bg-slate-900/60 border border-white/10 rounded-2xl p-2">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="block px-3 py-3 rounded-xl text-white/80 hover:text-white hover:bg-white/5 transition">
                  {item.label}
                </a>
              ))}
              <div className="flex items-center gap-2 px-2 pt-2">
                <a href="mailto:hello@example.com" className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-white text-slate-900 font-medium"><Mail size={16}/>Contact</a>
                <a href="https://github.com/" target="_blank" className="p-3 rounded-xl hover:bg-white/5 text-white/80 hover:text-white transition"><Github size={18} /></a>
                <a href="https://linkedin.com/" target="_blank" className="p-3 rounded-xl hover:bg-white/5 text-white/80 hover:text-white transition"><Linkedin size={18} /></a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
