export interface JourneyStep {
  year: string
  label: string
}

export const journey: JourneyStep[] = [
  { year: '2017', label: 'Wrote my first line of HTML and got hooked on the web.' },
  { year: '2019', label: 'Started freelancing, building sites for local businesses.' },
  { year: '2021', label: 'Graduated and joined Northwind Labs as a Front-End Developer.' },
  { year: '2023', label: 'Promoted to Senior Front-End Developer at Brightframe Studio.' },
  { year: 'Now', label: 'Building accessible, performant interfaces and writing about UI engineering.' },
]

export interface FunFact {
  label: string
  value: string
}

export const funFacts: FunFact[] = [
  { value: '50+', label: 'Projects shipped' },
  { value: '5+', label: 'Years of experience' },
  { value: '30+', label: 'Happy clients' },
  { value: '99', label: 'Avg. Lighthouse score' },
]

export interface WhatIDoItem {
  title: string
  description: string
  icon: 'code' | 'layout' | 'zap' | 'smartphone'
}

export const whatIDo: WhatIDoItem[] = [
  {
    title: 'Front-End Engineering',
    description: 'Building robust, type-safe interfaces with React, TypeScript and modern tooling.',
    icon: 'code',
  },
  {
    title: 'UI / UX Implementation',
    description: 'Translating designs into pixel-accurate, accessible, and responsive experiences.',
    icon: 'layout',
  },
  {
    title: 'Performance Optimization',
    description: 'Auditing and improving Core Web Vitals, bundle size, and rendering performance.',
    icon: 'zap',
  },
  {
    title: 'Responsive Engineering',
    description: 'Designing fluid layouts that feel native on everything from phones to ultrawides.',
    icon: 'smartphone',
  },
]
