export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  category: 'Web App' | 'Landing Page' | 'Dashboard' | 'E-Commerce'
  tech: string[]
  github: string
  demo: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: 'nova-dashboard',
    title: 'Nova Analytics Dashboard',
    description: 'Real-time analytics dashboard with animated charts and dark/light themes.',
    longDescription:
      'A data-dense analytics dashboard built for SaaS teams to monitor product usage in real time. Features live websocket updates, customizable widgets, drag-and-drop layout, and exportable reports. Focused on performance with virtualization for large data sets.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    category: 'Dashboard',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts'],
    github: 'https://github.com/yourusername/nova-dashboard',
    demo: 'https://nova-dashboard.example.com',
    featured: true,
  },
  {
    id: 'orbit-ecommerce',
    title: 'Orbit Store',
    description: 'A fast, accessible e-commerce storefront with cart, filters and checkout flow.',
    longDescription:
      'Headless e-commerce storefront built on top of a product API, with faceted filtering, optimistic cart updates, and a multi-step checkout. Lighthouse-optimized with image lazy-loading and route-based code splitting.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop',
    category: 'E-Commerce',
    tech: ['React', 'Redux Toolkit', 'Tailwind CSS', 'Stripe'],
    github: 'https://github.com/yourusername/orbit-store',
    demo: 'https://orbit-store.example.com',
    featured: true,
  },
  {
    id: 'lumen-landing',
    title: 'Lumen SaaS Landing',
    description: 'A high-conversion marketing landing page with scroll animations.',
    longDescription:
      'Marketing site for a fictional SaaS product, designed to maximize conversion with a clear narrative scroll, animated product mockups, and social proof sections. Built with accessibility and Core Web Vitals as first-class constraints.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    category: 'Landing Page',
    tech: ['React', 'Framer Motion', 'Tailwind CSS'],
    github: 'https://github.com/yourusername/lumen-landing',
    demo: 'https://lumen-landing.example.com',
  },
  {
    id: 'pulse-task-app',
    title: 'Pulse Task Manager',
    description: 'Kanban-style task manager with drag-and-drop boards and team workspaces.',
    longDescription:
      'A collaborative task manager featuring drag-and-drop kanban boards, real-time presence indicators, and keyboard-first navigation. Persists state via REST API with optimistic UI updates and offline support.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=1200&auto=format&fit=crop',
    category: 'Web App',
    tech: ['React', 'TypeScript', 'REST API', 'Tailwind CSS'],
    github: 'https://github.com/yourusername/pulse-tasks',
    demo: 'https://pulse-tasks.example.com',
    featured: true,
  },
  {
    id: 'aurora-portfolio-cms',
    title: 'Aurora Portfolio CMS',
    description: 'A lightweight CMS dashboard for managing portfolio content and case studies.',
    longDescription:
      'An admin dashboard that lets creatives manage their portfolio content without touching code: case study editor, media library, and live preview pane, all backed by a REST API with role-based access.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
    category: 'Dashboard',
    tech: ['React', 'JavaScript', 'Bootstrap', 'REST API'],
    github: 'https://github.com/yourusername/aurora-cms',
    demo: 'https://aurora-cms.example.com',
  },
  {
    id: 'flux-landing',
    title: 'Flux Crypto Landing',
    description: 'Animated landing page for a crypto wallet with live price ticker.',
    longDescription:
      'A vivid, motion-rich landing page for a crypto wallet product, including a live price ticker, animated feature cards, and a parallax hero. Built to feel premium while staying fast and accessible.',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1200&auto=format&fit=crop',
    category: 'Landing Page',
    tech: ['React', 'JavaScript', 'CSS', 'REST API'],
    github: 'https://github.com/yourusername/flux-landing',
    demo: 'https://flux-landing.example.com',
  },
]

export const categories: Array<Project['category'] | 'All'> = [
  'All',
  'Web App',
  'Landing Page',
  'Dashboard',
  'E-Commerce',
]
