import { motion } from 'motion/react'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay },
})

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-svh flex flex-col justify-end pb-[clamp(2rem,5vw,4rem)] pt-[60px]"
    >
      <div className="max-w-portfolio mx-auto px-[clamp(1.5rem,5vw,3rem)] w-full">
        <motion.p
          {...fadeUp(0.15)}
          className="text-[0.75rem] tracking-[0.12em] uppercase text-muted mb-6"
        >
          Informatics Student &mdash; NTNU Trondheim
        </motion.p>

        <h1 className="font-serif text-[clamp(3.5rem,10vw,8rem)] leading-[0.95] tracking-[-0.03em] mb-10">
          <motion.span {...fadeUp(0.25)} className="block">
            Peter
          </motion.span>
          <motion.span {...fadeUp(0.35)} className="block text-muted">
            Brandal
          </motion.span>
        </h1>

        <motion.p
          {...fadeUp(0.5)}
          className="max-w-[480px] text-[0.95rem] text-muted leading-[1.7] border-t border-border pt-6"
        >
          I build full-stack web apps, multiplayer games, and tools that solve real problems.
          Currently finishing my bachelor's at NTNU, looking for what comes next.
        </motion.p>
      </div>
    </section>
  )
}
