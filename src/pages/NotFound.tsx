import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import { useSEO } from '@/hooks/useSEO'
import EditorFrame from '@/components/layout/EditorFrame'

export default function NotFound() {
  useSEO('404 — Page Not Found | Alex Carter', 'The page you are looking for does not exist.', '/404')

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6 pt-24">
      <EditorFrame filename="error.log" className="max-w-lg w-full text-center">
        <p className="font-mono text-7xl font-bold text-gradient mb-4">404</p>
        <p className="font-mono text-sm text-accent-pink mb-2">Uncaught RouteError</p>
        <h1 className="font-display text-2xl font-semibold mb-4">This page doesn&apos;t exist</h1>
        <p className="text-ink-muted mb-8">
          The route you requested couldn&apos;t be resolved. It may have moved, or never existed.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full bg-grad-primary text-white px-6 py-3 font-medium shadow-glow hover:-translate-y-0.5 transition-all"
        >
          <FiArrowLeft /> Back to home
        </Link>
      </EditorFrame>
    </div>
  )
}
