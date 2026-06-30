import { HTMLAttributes, ReactNode, forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(({ children, className, ...rest }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'glass rounded-2xl shadow-soft p-6 transition-transform duration-300',
        className
      )}
      {...rest}
    >
      {children}
    </div>
  )
})
GlassCard.displayName = 'GlassCard'

export default GlassCard
