// All portfolio text lives here. Experience, education and skills come from the resume.

const base = import.meta.env.BASE_URL

export const profile = {
  name: 'Lai Hong Wah',
  role: 'Software Developer (React)',
  location: 'Kuala Lumpur',
  email: 'hongwah25@gmail.com',
  github: 'https://github.com/hongwah',
  resume: `${base}Resume-LaiHongWah.pdf`,
  headline: 'I find what is broken in software, and fix it before release.',
  summary:
    'I work as a COBOL software developer, testing, debugging and refactoring applications. I started in technical support and on the service desk, so I have seen first-hand what software problems mean for the people using it.',
}

export const nav = [
  { href: '#experience', label: 'Experience' },
  { href: '#project', label: 'Project' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export const experience = [
  {
    company: 'Prestige Atlantic Asia Sdn Bhd',
    role: 'COBOL Software Developer',
    dates: 'Apr 2025 – Present',
    points: [
      'Collaborated on software quality assurance and application debugging, writing and executing tests to isolate defects and ensure stable code delivery.',
      'Improved application reliability by diagnosing software defects, refactoring problematic code and validating fixes before production release.',
      'Analyzed program logic and UI architecture to ensure robust backend functionality and a seamless user experience.',
    ],
  },
  {
    company: 'Fujitsu Systems Global Solutions Management',
    role: 'Service Desk Agent',
    dates: 'Apr 2024 – Apr 2025',
    points: [
      'Delivered first-line support for effective incident resolution.',
      'Entered service tickets into an incident tracking system to support faster problem identification and resolution.',
      'Resolved common user concerns using preset issue resolution scripts.',
    ],
  },
  {
    company: 'Sis Pos Sdn Bhd',
    role: 'Technical Support',
    dates: 'Mar 2023 – Feb 2024',
    points: [
      'Travelled to onsite locations to install POS hardware, including desktops, monitors, single and dual screen AIO terminals, cash drawers and thermal receipt printers.',
      'Configured printer IP addresses on desktops and AIO terminals.',
      'Repaired desktops, monitors, AIO terminals and thermal receipt printers.',
    ],
  },
]

export const project = {
  name: 'Slow Ember',
  type: 'Concept website',
  href: `${base}coffee/`,
  description:
    'A Chinese-language website for a fictional coffee brand. The brand, products and copy are invented for this project.',
  features: [
    'Filter the coffee range by roast level',
    'Brew calculator that works out coffee and water amounts by method and servings',
    'Reusable SVG component that draws every coffee bag',
    'Responsive layout for desktop and mobile',
  ],
  stack: ['React', 'Vite', 'CSS'],
  note: 'Built with AI assistance.',
}

export const skills = ['C#', 'React', 'JavaScript', 'HTML / CSS', 'COBOL']

export const education = {
  degree: 'Bachelor Degree in Software System Development, Information Technology',
  school: 'Tunku Abdul Rahman University of Management and Technology',
  dates: '2018 – 2022',
}
