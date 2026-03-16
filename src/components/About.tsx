import { motion } from 'motion/react'

const reveal = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
}

const quickLinks = [
  { label: 'GitHub',       href: 'https://github.com/peterabrandal',           symbol: '↗', external: true },
  { label: 'LinkedIn',     href: 'https://linkedin.com/in/peter-brandal',       symbol: '↗', external: true },
  { label: 'peterabrandal@gmail.com', href: 'mailto:peterabrandal@gmail.com',  symbol: '→', external: false },
  { label: 'CV / Resume',  href: '/CV_Peter_Brandal.pdf',                       symbol: '↓', external: false },
]

export function About() {
  return (
    <section id="about" className="py-[clamp(2rem,5vw,4rem)] border-t border-border">
      <div className="max-w-portfolio mx-auto px-[clamp(1.5rem,5vw,3rem)]">
        <motion.h2
          {...reveal}
          className="font-serif text-[clamp(1.8rem,4vw,2.8rem)] tracking-[-0.02em] leading-none mb-[clamp(2rem,4vw,3rem)]"
        >
          About
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <motion.div
            {...reveal}
            transition={{ ...reveal.transition, delay: 0.1 }}
            className="space-y-4"
          >
            <p className="text-[1.05rem] leading-[1.75] text-muted">
              I'm studying{' '}
              <strong className="text-fg font-medium">Informatics at NTNU</strong>{' '}
              (Aug 2023 – Jun 2026), with coursework spanning algorithms, databases,
              software architecture, machine learning, and web development.
            </p>
            <p className="text-[1.05rem] leading-[1.75] text-muted">
              My stack leans towards{' '}
              <strong className="text-fg font-medium">TypeScript, React, and Python</strong>{' '}
              on most projects, though I'm equally comfortable in Java or C++ when the
              problem calls for it. I've shipped full-stack apps, a real-time multiplayer
              game, and collaborated with industry partners on live software.
            </p>
            <p className="text-[1.05rem] leading-[1.75] text-muted">
              Outside of code I've held leadership roles in demanding environments — including
              running a restaurant as{' '}
              <strong className="text-fg font-medium">General Manager</strong> — which
              taught me how to move fast, communicate clearly, and keep things from falling apart.
            </p>
          </motion.div>

          <motion.div
            {...reveal}
            transition={{ ...reveal.transition, delay: 0.2 }}
            className="flex flex-col"
          >
            {quickLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="flex items-center justify-between py-4 border-b border-border text-[0.9rem] group"
                whileHover={{ paddingLeft: '0.5rem' }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
              >
                <span>{link.label}</span>
                <span className="text-muted text-[0.75rem] tracking-[0.06em] uppercase">
                  {link.symbol}
                </span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
