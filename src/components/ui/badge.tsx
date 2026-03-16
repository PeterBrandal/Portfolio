import { type HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {}

export function Badge({ className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center border border-border px-2 py-0.5 text-[0.68rem] font-light tracking-widest uppercase text-muted rounded-sm',
        className,
      )}
      {...props}
    />
  )
}
