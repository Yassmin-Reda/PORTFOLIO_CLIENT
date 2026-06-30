import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface EditorFrameProps {
  filename: string
  children: ReactNode
  className?: string
}

/**
 * Signature element used across the site: frames a section like a code
 * editor tab/panel (traffic-light dots + filename), tying the whole
 * portfolio back to its subject — a front-end developer's own tooling.
 */
export default function EditorFrame({ filename, children, className }: EditorFrameProps) {
  return (
    <div className={cn('glass rounded-2xl overflow-hidden shadow-soft', className)}>
      <div className="flex items-center gap-2 px-4 py-3 border-b border-edge bg-surface2/60">
        <span className="editor-dot bg-[#FF5F57]" />
        <span className="editor-dot bg-[#FEBC2E]" />
        <span className="editor-dot bg-[#28C840]" />
        <span className="ml-3 font-mono text-xs text-ink-muted">{filename}</span>
      </div>
      <div className="p-6 sm:p-8">{children}</div>
    </div>
  )
}
