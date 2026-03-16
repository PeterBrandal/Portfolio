import { Nav } from '@/components/Nav'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Projects } from '@/components/Projects'
import { Contact } from '@/components/Contact'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-border">
        <div className="max-w-portfolio mx-auto px-[clamp(1.5rem,5vw,3rem)] py-6 flex justify-between text-[0.75rem] text-muted tracking-[0.04em]">
          <span>Peter Brandal</span>
          <span>© 2026</span>
        </div>
      </footer>
    </>
  )
}
