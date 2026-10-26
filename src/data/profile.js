export const profile = {
  name: 'Ragunath D.',
  firstName: 'Ragunath',
  initial: 'D.',
  role: 'AI & Data Science Graduate · Developer',
  location: 'Chennai, Tamil Nadu, India',
  availability: 'Open to fresher opportunities',
  email: 'ragunathd1011@gmail.com',
  github: 'https://github.com/Ragunath-1011',
  linkedin: 'https://www.linkedin.com/in/ragunath-d1011',
  resume: '/resume.pdf',
  headline: 'Building intelligent solutions through code, data & AI.',
  description:
    "I'm an Artificial Intelligence and Data Science graduate passionate about building practical web applications, exploring machine learning, and turning ideas into useful digital experiences.",
  focusAreas: [
    'Full Stack Development',
    'Artificial Intelligence & Machine Learning',
    'Data Analytics',
  ],
  education: {
    degree: 'B.Tech — Artificial Intelligence and Data Science',
    institution: 'Surya Group of Institutions',
    affiliation: 'Anna University',
    year: '2026',
    score: 'CGPA 8.53 / 10',
  },
};

export const navLinks = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Experience', id: 'experience' },
  { label: 'Contact', id: 'contact' },
];

export const sectionIds = navLinks.map((link) => link.id);
