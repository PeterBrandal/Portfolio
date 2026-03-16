import { motion } from 'motion/react'
import { Badge } from '@/components/ui/badge'

interface Project {
  name: string
  year: string
  description: string
  tags: string[]
  href: string
  linkLabel: string
}

const projects: Project[] = [
  {
    name: 'Dinder',
    year: '2025 – Present',
    description:
      'Full-stack recipe exploration and meal planning platform. Browse and save recipes to a personal cookbook, plan your week\'s meals, and manage a grocery list — all with real-time sync and user auth.',
    tags: ['React', 'TypeScript', 'Supabase', 'TanStack Query'],
    href: 'https://github.com/peterabrandal/dinder', // TODO: swap for live demo URL
    linkLabel: 'Live Demo ↗',
  },
  {
    name: 'CO₂ Calculator',
    year: '2026 – Present',
    description:
      'Carbon footprint calculator for subcontractors in the Norwegian construction sector, developed as a university–industry partnership with Bouvet Norge. Team of 7.',
    tags: ['Team Project', 'Bouvet Norge', 'Web'],
    href: 'https://github.com/peterabrandal',
    linkLabel: 'GitHub ↗',
  },
  {
    name: 'Duelmasters',
    year: '2026 – Present',
    description:
      'Western-style 2D multiplayer gun dueling game for Android. Built with libGDX and Kryonet for real-time network synchronization between players. Demo available on request.',
    tags: ['Java', 'libGDX', 'Kryonet', 'Android'],
    href: 'https://github.com/peterabrandal/duelmasters',
    linkLabel: 'GitHub ↗',
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-[clamp(2rem,5vw,4rem)] border-t border-border">
      <div className="max-w-portfolio mx-auto px-[clamp(1.5rem,5vw,3rem)]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-baseline gap-4 mb-[clamp(2rem,4vw,3rem)]"
        >
          <h2 className="font-serif text-[clamp(1.8rem,4vw,2.8rem)] tracking-[-0.02em] leading-none">
            Projects
          </h2>
          <span className="text-[0.75rem] tracking-[0.1em] uppercase text-muted">
            Selected work
          </span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-border">
          {projects.map((project, i) => (
            <motion.a
              key={project.name}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
              whileHover="hover"
              className="relative p-8 flex flex-col gap-4 border-b border-r border-border overflow-hidden group cursor-pointer"
            >
              {/* hover fill */}
              <motion.div
                variants={{ hover: { scaleY: 1 } }}
                initial={{ scaleY: 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                style={{ originY: 1 }}
                className="absolute inset-0 bg-fg pointer-events-none"
              />

              <div className="relative z-10 flex items-center justify-between text-[0.72rem] tracking-[0.1em] uppercase text-muted group-hover:text-[#aaa] transition-colors">
                <span>{project.year}</span>
                <span>{project.linkLabel}</span>
              </div>

              <h3 className="relative z-10 font-serif text-[1.4rem] tracking-[-0.01em] leading-tight group-hover:text-bg transition-colors">
                {project.name}
              </h3>

              <p className="relative z-10 text-[0.875rem] text-muted leading-[1.65] flex-1 group-hover:text-[#aaa] transition-colors">
                {project.description}
              </p>

              <div className="relative z-10 flex flex-wrap gap-1.5 mt-auto">
                {project.tags.map((tag) => (
                  <Badge key={tag} className="group-hover:border-[#444] group-hover:text-[#888]">
                    {tag}
                  </Badge>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
