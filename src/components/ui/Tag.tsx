import { ReactNode } from 'react'

export default function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-surface2 border border-edge text-ink-muted">
      {children}
    </span>
  )
}
