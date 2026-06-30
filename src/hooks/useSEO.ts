import { useEffect } from 'react'
import { applySEO } from '@/lib/seo'

export function useSEO(title: string, description: string, path = '/') {
  useEffect(() => {
    applySEO({ title, description, path })
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [title, description, path])
}
