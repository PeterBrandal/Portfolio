import { useEffect, useState } from 'react'
import { motion } from 'motion/react'

const links = [
  { label: 'About',    href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={[
        'fixed top-0 left-0 right-0 z-50 bg-bg transition-colors duration-300',
        scrolled ? 'border-b border-border' : 'border-b border-transparent',
      ].join(' ')}
    >
      <div className="max-w-portfolio mx-auto px-[clamp(1.5rem,5vw,3rem)] h-[60px] flex items-center justify-between">
        <a href="#hero" className="font-serif text-[1.1rem] tracking-tight">
          Peter Brandal
        </a>
        <ul className="flex gap-8 list-none text-[0.8rem] tracking-[0.08em] uppercase">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-muted hover:text-fg transition-colors duration-200">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://github.com/PeterBrandal?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-fg transition-colors duration-200"
            >
              GitHub ↗
            </a>
          </li>
        </ul>
      </div>
    </motion.nav>
  )
}
