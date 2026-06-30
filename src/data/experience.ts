export interface TimelineItem {
  title: string
  org: string
  period: string
  description: string
}

export const experience: TimelineItem[] = [
  {
    title: 'Senior Front-End Developer',
    org: 'Brightframe Studio',
    period: '2023 — Present',
    description:
      'Leading the front-end architecture for client products, mentoring two developers, and establishing a shared component library used across five projects.',
  },
  {
    title: 'Front-End Developer',
    org: 'Northwind Labs',
    period: '2021 — 2023',
    description:
      'Built and shipped customer-facing dashboards and marketing sites in React, improving average Lighthouse performance scores from 68 to 96.',
  },
  {
    title: 'Junior Web Developer',
    org: 'Freelance',
    period: '2019 — 2021',
    description:
      'Delivered over 20 websites for small businesses, ranging from landing pages to small e-commerce stores, handling design and implementation end-to-end.',
  },
]

export const education: TimelineItem[] = [
  {
    title: 'B.Sc. in Computer Science',
    org: 'State University',
    period: '2017 — 2021',
    description:
      'Focused on web technologies, data structures and algorithms. Graduated with honors; final project was a real-time collaborative whiteboard app.',
  },
  {
    title: 'Front-End Development Specialization',
    org: 'Online Self-Study',
    period: '2018 — 2019',
    description:
      'Completed in-depth coursework on modern JavaScript, React, and responsive design principles alongside university studies.',
  },
]
