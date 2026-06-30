export interface Skill {
  name: string
  level: number // 0-100
  category: 'core' | 'tools' | 'extra'
}

export const skills: Skill[] = [
  { name: 'HTML', level: 96, category: 'core' },
  { name: 'CSS', level: 94, category: 'core' },
  { name: 'JavaScript', level: 92, category: 'core' },
  { name: 'React.js', level: 90, category: 'core' },
  { name: 'Responsive Design', level: 93, category: 'core' },
  { name: 'Bootstrap', level: 85, category: 'tools' },
  { name: 'Git & GitHub', level: 88, category: 'tools' },
  { name: 'REST API', level: 84, category: 'tools' },
  { name: 'Basic Python', level: 70, category: 'extra' },
  { name: 'C++', level: 65, category: 'extra' },
]
