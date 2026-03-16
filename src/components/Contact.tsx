import { motion } from 'motion/react'

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay },
})

export function Contact() {
  return (
    <section id="contact" className="py-[clamp(2rem,5vw,4rem)] pb-[clamp(4rem,10vw,8rem)] border-t border-border">
      <div className="max-w-portfolio mx-auto px-[clamp(1.5rem,5vw,3rem)]">
        <motion.h2
          {...reveal()}
          className="font-serif text-[clamp(1.8rem,4vw,2.8rem)] tracking-[-0.02em] leading-none mb-[clamp(2rem,4vw,3rem)]"
        >
          Contact
        </motion.h2>

        <motion.p
          {...reveal(0.1)}
          className="font-serif text-[clamp(2rem,6vw,5rem)] tracking-[-0.03em] leading-none mb-12"
        >
          Open to opportunities —{' '}
          <a
            href="mailto:peterabrandal@gmail.com"
            className="border-b-2 border-fg pb-0.5 hover:text-muted hover:border-muted transition-colors duration-200"
          >
            say hello.
          </a>
        </motion.p>

        <motion.div
          {...reveal(0.2)}
          className="flex gap-8 flex-wrap"
        >
          {[
            { label: 'peterabrandal@gmail.com', href: 'mailto:peterabrandal@gmail.com', symbol: '✉' },
            { label: 'LinkedIn',                href: 'https://linkedin.com/in/peter-brandal', symbol: 'in', external: true },
            { label: 'GitHub',                  href: 'https://github.com/peterabrandal', symbol: '↗', external: true },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="flex items-center gap-2 text-[0.8rem] tracking-[0.08em] uppercase text-muted hover:text-fg transition-colors duration-200"
            >
              <span>{item.symbol}</span>
              {item.label}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
