export interface SEOProps {
  title: string
  description: string
  path?: string
}

const SITE_URL = 'https://yourdomain.com'

/**
 * Lightweight SEO helper that updates document head tags on route change.
 * Avoids pulling in react-helmet so the bundle stays small.
 */
export function applySEO({ title, description, path = '/' }: SEOProps) {
  document.title = title

  const setMeta = (selector: string, attr: string, value: string) => {
    let el = document.head.querySelector(selector) as HTMLMetaElement | HTMLLinkElement | null
    if (!el) return
    el.setAttribute(attr, value)
  }

  setMeta('meta[name="description"]', 'content', description)
  setMeta('meta[property="og:title"]', 'content', title)
  setMeta('meta[property="og:description"]', 'content', description)
  setMeta('meta[property="og:url"]', 'content', `${SITE_URL}${path}`)
  setMeta('meta[name="twitter:title"]', 'content', title)
  setMeta('meta[name="twitter:description"]', 'content', description)
  setMeta('link[rel="canonical"]', 'href', `${SITE_URL}${path}`)
}
