/* =====================================================================
   EDIT EVERYTHING HERE
   ---------------------------------------------------------------------
   All copy, links and content live in this one file. Search for the
   bracketed notes to personalise the site in a couple of minutes.
   ===================================================================== */

export const profile = {
  name: 'Gaurav Kumar',
  firstName: 'Gaurav',
  lastName: 'Kumar',
  monogram: 'GK',
  // [PHOTO] Put an image in /public (e.g. "/portrait.jpg") and set it here.
  // Leave empty to use the generated editorial portrait artwork.
  photo: '/profile.jpg',
  roles: ['B.Tech Student', 'Java Developer', 'Android Developer', 'Creative Problem Solver'],
  intro:
    "I'm Gaurav Kumar, a B.Tech student driven by curiosity and a strong motivation to learn emerging technologies, explore innovative ideas, and apply my knowledge to solve real-world problems.",
  shortBio:
    'I like living at the intersection of engineering and design, building things that are fast, useful, and genuinely nice to use.',
  availability: 'Open to internships & collaborations',
  location: 'India · IST (UTC+5:30)',
  email: 'pro.gaurav00@gmail.com', // [EMAIL]
  phone: '+91 91492 78066',
  resume: '#', // [RESUME] link to a PDF if you have one
  socials: [
    { label: 'GitHub', handle: '@gauravexp007', href: 'https://github.com/gauravexp007', icon: 'github' },
    { label: 'LinkedIn', handle: 'in/gaurav-kumar-00236b319', href: 'https://www.linkedin.com/in/gaurav-kumar-00236b319', icon: 'linkedin' },
    { label: 'Instagram', handle: '@gaurav.builds', href: 'https://instagram.com/', icon: 'instagram' },
    { label: 'Email', handle: 'pro.gaurav00@gmail.com', href: 'mailto:pro.gaurav00@gmail.com', icon: 'mail' },
  ],
}

export const stats = [
  { value: '9.56', suffix: '/10', label: 'Current CGPA' },
  { value: '14', suffix: '+', label: 'Projects built' },
  { value: '450', suffix: '+', label: 'DSA problems' },
  { value: '03', suffix: '', label: 'Hackathon wins' },
]

export const about = {
  heading: ['Curiosity,', 'compiled.'],
  kicker: 'About me',
  paragraphs: [
    "I'm a final-year B.Tech Computer Science student who fell for technology the moment a few lines of code turned into something people could actually use. Since then, I've been chasing that feeling, building dashboards, experimenting with 3D on the web, and reading far too many engineering blog posts at 1 a.m.",
    "My days move between data structures, side projects, and design rabbit holes. I care about the craft: clean architecture, accessible interfaces, motion that means something, and products that respect the people using them.",
    "Right now I'm going deep on Java and Android: object-oriented design, clean backend logic, and apps that feel native in the hand. I'm looking for a team where I can learn fast, ship real work, and grow into a developer people trust.",
    "Technology is the part I keep coming back to: not the tools for their own sake, but what they make possible once a real constraint is solved. Alongside the building, I care about the leadership side of it: scoping a project honestly, splitting work so nobody is blocked, keeping the board and the deadline truthful, and communicating progress before anyone has to ask. On a hackathon team of four or a campus project with twenty stakeholders, my instinct is the same: take the messy real-world problem, break it into pieces with owners and dates, and have something demoable by the end of the week.",
  ],
  pillars: [
    {
      icon: 'compass',
      title: 'Learn in public',
      body: 'Notes, experiments and small builds. Every week something new gets shipped, even if it is rough.',
    },
    {
      icon: 'layers',
      title: 'Design-minded engineering',
      body: 'Interfaces and code are one craft. Detail in the small things is what makes software feel alive.',
    },
    {
      icon: 'target',
      title: 'Lead by shipping',
      body: 'Scope it, split it, keep the board honest, then solve the real-world problem, not the whiteboard version of it.',
    },
  ],
  currently: {
    label: 'Currently',
    items: ['Building with React + Three.js', 'Building an ERP-based university system', 'Learning Android development'],
  },
}

export const skillGroups = [
  { id: 'languages', label: 'Languages', icon: 'code' },
  { id: 'frontend', label: 'Frontend', icon: 'layout' },
  { id: 'backend', label: 'Backend', icon: 'server' },
  { id: 'databases', label: 'Databases', icon: 'database' },
  { id: 'tools', label: 'Tools', icon: 'wrench' },
]

export const skills = [
  { name: 'JavaScript', level: 90, group: 'languages' },
  { name: 'TypeScript', level: 80, group: 'languages' },
  { name: 'Python', level: 84, group: 'languages' },
  { name: 'C++', level: 86, group: 'languages' },
  { name: 'Java', level: 70, group: 'languages' },
  { name: 'SQL', level: 78, group: 'languages' },

  { name: 'React', level: 92, group: 'frontend' },
  { name: 'Next.js', level: 82, group: 'frontend' },
  { name: 'Tailwind CSS', level: 94, group: 'frontend' },
  { name: 'Three.js / R3F', level: 72, group: 'frontend' },
  { name: 'Framer Motion', level: 80, group: 'frontend' },
  { name: 'GSAP', level: 76, group: 'frontend' },

  { name: 'Node.js', level: 84, group: 'backend' },
  { name: 'Express', level: 82, group: 'backend' },
  { name: 'REST APIs', level: 88, group: 'backend' },
  { name: 'FastAPI', level: 70, group: 'backend' },
  { name: 'Firebase', level: 74, group: 'backend' },
  { name: 'Auth / JWT', level: 78, group: 'backend' },

  { name: 'MongoDB', level: 82, group: 'databases' },
  { name: 'PostgreSQL', level: 76, group: 'databases' },
  { name: 'MySQL', level: 72, group: 'databases' },
  { name: 'Redis', level: 62, group: 'databases' },
  { name: 'Prisma', level: 70, group: 'databases' },
  { name: 'Supabase', level: 68, group: 'databases' },

  { name: 'Git & GitHub', level: 92, group: 'tools' },
  { name: 'Docker', level: 66, group: 'tools' },
  { name: 'Linux', level: 74, group: 'tools' },
  { name: 'Figma', level: 80, group: 'tools' },
  { name: 'Vite / Webpack', level: 78, group: 'tools' },
  { name: 'Vercel / Netlify', level: 86, group: 'tools' },
]

export const projects = [

  {
    index: '01',
    title: 'FloraVerse',
    tagline: 'A living encyclopedia of the plant world',
    year: '2026',
    role: 'Design + build · Solo',
    description:
      'A nature discovery site built around twelve living libraries: trees, flowers, leaves, herbs, ferns, carnivorous plants and biomes, with taxonomy pulled live from the GBIF backbone, photographs from Wikimedia Commons and iNaturalist, and species searchable by Hindi name.',
    tags: ['React', 'Vite', 'Tailwind', 'GBIF API', 'Vercel'],
    image: '/projects/floraverse.png',
    featured: true,
    github: 'https://github.com/gauravexp007',
    demo: 'https://floraversenature.vercel.app/',
  },

  {
    index: '02',
    title: 'Nebula Analytics',
    tagline: 'Real-time product analytics for small teams',
    year: '2025',
    role: 'Full-stack · Solo build',
    description:
      'An analytics dashboard that streams live product events, surfaces retention curves, and explains the "why" behind a drop-off in one glance. Built around a custom event pipeline with sub-second updates.',
    tags: ['React', 'Node.js', 'Socket.IO', 'PostgreSQL', 'Recharts'],
    visual: 'dashboard',
    featured: true,
    github: 'https://github.com/gauravexp007',
    demo: 'https://example.com/',
  },
  {
    index: '03',
    title: 'CampusConnect',
    tagline: 'The missing operating system for campus life',
    year: '2025',
    role: 'Full-stack · Team of 3',
    description:
      'A student community platform for notes, club events and anonymous doubts. Grew to 600+ verified students with role-based moderation and a lightning-fast search across every resource.',
    tags: ['Next.js', 'Firebase', 'Tailwind', 'Fuse.js'],
    visual: 'community',
    featured: false,
    github: 'https://github.com/gauravexp007',
    demo: 'https://example.com/',
  },
  {
    index: '04',
    title: 'VisionSort AI',
    tagline: 'Drag, drop, and understand your images',
    year: '2024',
    role: 'ML + frontend',
    description:
      'A computer-vision playground that classifies and groups uploaded images, then explains its confidence in plain language. Ships a FastAPI inference service behind a deliberately calm interface.',
    tags: ['Python', 'FastAPI', 'TensorFlow', 'React'],
    visual: 'vision',
    featured: false,
    github: 'https://github.com/gauravexp007',
    demo: 'https://example.com/',
  },
  {
    index: '05',
    title: 'DevDock',
    tagline: 'A command centre for developer snippets',
    year: '2024',
    role: 'Desktop · Solo build',
    description:
      'A keyboard-first snippet manager with fuzzy search, syntax-aware highlighting and offline sync. Built because copying the same utility function out of old projects got old.',
    tags: ['TypeScript', 'Node.js', 'SQLite', 'Electron'],
    visual: 'terminal',
    featured: false,
    github: 'https://github.com/gauravexp007',
    demo: 'https://example.com/',
  },
  {
    index: '06',
    title: 'OrbitUI',
    tagline: 'Motion-first React components, open source',
    year: '2023',
    role: 'Open source · Maintainer',
    description:
      'A small, opinionated component library built on Tailwind and Framer Motion. Accessible primitives, copy-paste friendly, and documented with live editable examples.',
    tags: ['React', 'Tailwind', 'Framer Motion', 'Storybook'],
    visual: 'components',
    featured: false,
    github: 'https://github.com/gauravexp007',
    demo: 'https://example.com/',
  },
]

export const timeline = [
  {
    year: '2023',
    title: 'Started B.Tech in Computer Science',
    org: 'SDGI Global University',
    body: 'Moved into a hostel with a borrowed laptop and a lot of ambition. First semester: C programming, a stubborn compiler, and the realization that debugging is mostly patience.',
    tag: 'Education',
    highlight: 'CGPA 9.56 / 10',
  },
  {
    year: '2023',
    title: 'First hackathon, first all-nighter',
    org: 'Smart India Hackathon · Finalist',
    body: 'Built a crop-advisory prototype with three friends in 36 hours. We did not win the final, but we did learn how to scope, split work, and demo under pressure.',
    tag: 'Milestone',
    highlight: 'National finalist',
  },
  {
    year: '2024',
    title: 'Frontend internship at an early-stage startup',
    org: 'Stealth SaaS · Remote',
    body: 'Shipped the customer dashboard, cut initial load time by 42%, and learned how much of engineering is actually communication. First taste of code in production with real users.',
    tag: 'Experience',
    highlight: '42% faster loads',
  },
  {
    year: '2025',
    title: 'Open source & deeper systems',
    org: '40+ merged pull requests',
    body: 'Started contributing to open-source tooling, mentored juniors in our coding club, and went deep on databases, networking and system design fundamentals.',
    tag: 'Growth',
    highlight: '3× hackathon winner',
  },
  {
    year: '2027',
    title: 'Graduating and looking for the next team',
    org: 'Seeking Java / Android developer roles',
    body: 'Finishing my degree with a portfolio of shipped products. Looking for a team that builds thoughtfully, reviews kindly, and cares about the details.',
    tag: 'Next',
    highlight: 'Open to opportunities',
  },
]

export const certifications = [
  {
    name: 'Software Engineering Job Simulation',
    issuer: 'JPMorgan Chase · Forage',
    note: 'Certificate of completion',
    icon: 'server',
    href: 'https://lnkd.in/p/gYSHdN-N',
    linkLabel: 'View certificate',
  },
  {
    name: 'GenAI Powered Data Analytics Job Simulation',
    issuer: 'Tata Consultancy Services · Forage',
    note: 'Completed with distinction',
    icon: 'database',
    href: 'https://lnkd.in/p/gr99MwnQ',
    linkLabel: 'View certificate',
  },
  {
    name: 'Technology Job Simulation',
    issuer: 'Deloitte',
    note: 'Job simulation certificate',
    icon: 'layers',
    href: 'https://www.linkedin.com/in/gaurav-kumar-00236b319/recent-activity/all/',
    linkLabel: 'View on LinkedIn',
  },
  {
    name: 'AI for Entrepreneurship MicroLearning Module',
    issuer: 'Intel',
    note: 'Certified',
    icon: 'brain',
    href: 'https://www.linkedin.com/in/gaurav-kumar-00236b319/recent-activity/all/',
    linkLabel: 'View on LinkedIn',
  },
  {
    name: 'AI for Beginners Program',
    issuer: 'HP LIFE · HP Foundation',
    note: 'Programme completion certificate',
    icon: 'award',
    href: 'https://www.linkedin.com/in/gaurav-kumar-00236b319/recent-activity/all/',
    linkLabel: 'View on LinkedIn',
  },
]

export const internships = [
  {
    company: 'Algonive',
    role: 'Java Programming Intern',
    period: '1 Jun 2025 to 1 Jul 2025',
    mode: 'Remote',
    body: 'One month inside real-time projects: Java fundamentals put to work, mentor feedback after every task, and a first look at how a professional team ships.',
    href: 'https://lnkd.in/p/gyY_hJHW',
    linkLabel: 'View certificate',
  },
  {
    company: 'Mindenious',
    role: 'Internship Programme',
    period: '2025',
    mode: 'Remote',
    body: 'A mentored, project-based internship at an edtech company, with briefs, reviews and the habit of finishing what I start.',
    href: 'https://www.linkedin.com/in/gaurav-kumar-00236b319/recent-activity/all/',
    linkLabel: 'View on LinkedIn',
  },
]

export const achievements = [
  {
    icon: 'trophy',
    tag: 'Academics',
    title: 'Top position in university examinations',
    body: 'Achieved one of the top positions in the university examinations in both the first and second year.',
  },
  {
    icon: 'crown',
    tag: 'Sanket 2024',
    title: 'Two university awards',
    body: 'Won 2 awards in video editing and project presentation at Sanket 2024, organised by the university.',
  },
]

export const beyond = {
  heading: 'Beyond the keyboard',
  intro:
    'The parts of me that do not fit inside a résumé: the hobbies, habits and small obsessions that quietly shape how I build.',
  passions: [
    {
      index: '01',
      icon: 'video',
      title: 'Video editing',
      kicker: 'Films · Reels · Colour',
      image: '/hobbies/video-editing.jpg',
      imageAlt: 'An editing timeline open on a monitor above a keyboard',
      body: 'Cutting event films and reels: colour grade first, soundtrack second, patience always.',
      blocks: [
        'CapCut',
        'Premiere Pro',
        'Photoshop',
        'DaVinci Resolve',
        'After Effects',
        'Blender',
      ],
    },
    {
      index: '02',
      icon: 'layout',
      title: 'Designing',
      kicker: 'Websites · UI · Car modelling',
      image: '/hobbies/designing.jpg',
      imageAlt: 'A desk with a code editor and interface mockups on screen',
      body: 'The hobby that became the career: interfaces, sites and 3D car models, all built with the same obsession over spacing.',
      blocks: [
        'Web design',
        'UI systems',
        'Car modelling',
        '3D scenes',
        'Figma',
        'Canva',
      ],
    },
    {
      index: '03',
      icon: 'mic',
      title: 'Motivational speaker',
      kicker: 'Stage · Students · Systems',
      image: '/hobbies/speaking.jpg',
      imageAlt: 'A microphone standing in front of a seated audience',
      body: 'Talking to students about consistency, curiosity and learning in public.',
      blocks: [
        'Stage talks',
        'Student sessions',
        'Storytelling',
        'Scripting',
      ],
    },
    {
      index: '04',
      icon: 'users',
      title: 'Team leading',
      kicker: 'People · Scope · Deadlines',
      image: '/hobbies/team-leading.jpg',
      imageAlt: 'A small team working together around a table of laptops',
      body: 'Leading campus project teams: splitting work by strength, then keeping the unblocking quiet and constant.',
      blocks: [
        'Scoping',
        'Standups',
        'Code review',
        'Mentoring',
      ],
    },
  ],
  now: {
    reading: "Build, Don't Talk: Things You Wish You Were Taught in School",
    learning: 'Android development',
    listening: 'Call out my name by Weeknd',
    building: 'ERP based University Management System',
  },
  quote: 'Make it work, make it right, make it feel like magic.',
}

export const navLinks = [
  { id: 'about', label: 'About', index: '01' },
  { id: 'skills', label: 'Skills', index: '02' },
  { id: 'projects', label: 'Projects', index: '03' },
  { id: 'journey', label: 'Journey', index: '04' },
  { id: 'certificates', label: 'Certificates', index: '05' },
  { id: 'internships', label: 'Internships', index: '06' },
  { id: 'beyond', label: 'Beyond', index: '07' },
  { id: 'contact', label: 'Contact', index: '08' },
]
