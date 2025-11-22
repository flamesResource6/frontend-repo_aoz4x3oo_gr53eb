import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <Navbar />

      {/* Parallax sections wrapper */}
      <main className="relative">
        {/* Layered parallax gradients */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[120%] h-72 rounded-[50%] blur-3xl opacity-20 bg-gradient-to-r from-blue-500 via-indigo-500 to-fuchsia-500" style={{ transform: 'translateZ(0)' }} />
          <div className="absolute top-1/3 -left-24 w-96 h-96 rounded-full blur-3xl opacity-10 bg-fuchsia-500" style={{ transform: 'translateZ(0)' }} />
          <div className="absolute bottom-1/3 -right-24 w-96 h-96 rounded-full blur-3xl opacity-10 bg-blue-500" style={{ transform: 'translateZ(0)' }} />
        </div>

        <Hero />
        <Projects />
        <About />
        <Skills />
        <Contact />

        <footer className="py-10 text-center text-white/60">
          <p>© {new Date().getFullYear()} Your Name — Crafted with care</p>
        </footer>
      </main>
    </div>
  )
}

export default App
