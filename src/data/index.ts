import { Project, SkillCategory, Achievement, Experience, SocialLink } from '../types';

export const personalInfo = {
  name: 'Poojith S Muthu',
  designation: 'Full Stack Developer',
  email: 'poojithskater1001@gmail.com',
  phone: '+1 (555) 123-4567',
  location: 'San Francisco, CA',
  bio: `Passionate developer with 5+ years of experience building modern web applications.
        I love turning complex problems into simple, beautiful, and intuitive solutions.`,
  resumeUrl: '/resume.pdf',
  image: '/profile.jpg',
};

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/Poojithsmuthu1001', icon: 'github' },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
  { name: 'Twitter', url: 'https://twitter.com', icon: 'twitter' },
  { name: 'Instagram', url: 'https://instagram.com', icon: 'instagram' },
  { name: 'Email', url: 'mailto:alex@example.com', icon: 'mail' },
];

export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Resume', href: '#resume' },
  { name: 'Contact', href: '#contact' },
];

export const typingTexts = [
  'Full Stack Developer',
  'UI/UX Designer',
  'Problem Solver',
  'Tech Enthusiast',
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'JavaScript', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Python', level: 85 },
      { name: 'Java', level: 80 },
      { name: 'C', level: 70 },
    ],
  },
  {
    title: 'Frontend Development',
    skills: [
      { name: 'React', level: 95 },
      { name: 'Next.js', level: 90 },
      { name: 'Vue.js', level: 75 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'HTML/CSS', level: 98 },
    ],
  },
  {
    title: 'Backend Development',
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Express.js', level: 88 },
      { name: 'GraphQL', level: 75 },
      { name: 'REST APIs', level: 95 },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MongoDB', level: 85 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'MySQL', level: 82 },
      { name: 'Redis', level: 70 },
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'Git', level: 92 },
      { name: 'GitHub', level: 95 },
      { name: 'Docker', level: 78 },
      { name: 'AWS', level: 72 },
      { name: 'VS Code', level: 98 },
    ],
  },
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'Modern e-commerce platform with real-time inventory, payment integration, and admin dashboard.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    category: 'web',
    github: 'https://github.com',
    demo: 'https://demo.example.com',
    featured: true,
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'Collaborative task management application with real-time updates and team features.',
    image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma'],
    category: 'web',
    github: 'https://github.com',
    demo: 'https://demo.example.com',
    featured: true,
  },
  {
    id: '3',
    title: 'Fitness Tracker Mobile App',
    description: 'Cross-platform mobile app for tracking workouts, nutrition, and health metrics.',
    image: 'https://images.pexels.com/photos/4162499/pexels-photo-4162499.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React Native', 'Firebase', 'Redux'],
    category: 'mobile',
    github: 'https://github.com',
    featured: false,
  },
  {
    id: '4',
    title: 'AI Chatbot Platform',
    description: 'Intelligent chatbot platform with NLP capabilities and multi-channel support.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Python', 'TensorFlow', 'FastAPI', 'Docker'],
    category: 'web',
    github: 'https://github.com',
    demo: 'https://demo.example.com',
    featured: true,
  },
  {
    id: '5',
    title: 'University Management System',
    description: 'Comprehensive system for managing students, courses, and academic records.',
    image: 'https://images.pexels.com/photos/1432675/pexels-photo-1432675.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Java', 'Spring Boot', 'MySQL', 'React'],
    category: 'academic',
    github: 'https://github.com',
    featured: false,
  },
  {
    id: '6',
    title: 'Real Estate Platform',
    description: 'Property listing platform with virtual tours, mortgage calculator, and agent dashboard.',
    image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Mapbox'],
    category: 'web',
    github: 'https://github.com',
    demo: 'https://demo.example.com',
    featured: false,
  },
];

export const defaultAchievements: Achievement[] = [
  {
    id: '1',
    title: 'AWS Certified Solutions Architect',
    description: 'Professional certification for designing distributed systems on AWS.',
    type: 'certification',
    date: '2024-01-15',
    organization: 'Amazon Web Services',
    link: 'https://aws.amazon.com/certification',
  },
  {
    id: '2',
    title: 'First Place - Tech Hackathon 2023',
    description: 'Won first place at the annual city-wide hackathon with an innovative healthcare solution.',
    type: 'hackathon',
    date: '2023-11-20',
    organization: 'TechHub San Francisco',
  },
  {
    id: '3',
    title: 'Dean\'s List - Computer Science',
    description: 'Achieved Dean\'s List recognition for academic excellence.',
    type: 'award',
    date: '2022-05-10',
    organization: 'State University',
  },
  {
    id: '4',
    title: 'Google Code Jam - Round 2',
    description: 'Advanced to Round 2 in Google\'s annual coding competition.',
    type: 'competition',
    date: '2023-08-15',
    organization: 'Google',
  },
];

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Senior Full Stack Developer',
    company: 'Tech Innovations Inc.',
    location: 'San Francisco, CA',
    startDate: '2022-06',
    endDate: 'Present',
    description: [
      'Led development of microservices architecture serving 1M+ users',
      'Mentored junior developers and conducted code reviews',
      'Implemented CI/CD pipelines reducing deployment time by 60%',
    ],
    type: 'work',
  },
  {
    id: '2',
    title: 'Full Stack Developer',
    company: 'Startup Solutions',
    location: 'New York, NY',
    startDate: '2020-03',
    endDate: '2022-05',
    description: [
      'Built and maintained multiple React applications',
      'Developed RESTful APIs using Node.js and Express',
      'Collaborated with design team to implement responsive UIs',
    ],
    type: 'work',
  },
  {
    id: '3',
    title: 'B.S. Computer Science',
    company: 'State University',
    location: 'California, CA',
    startDate: '2016',
    endDate: '2020',
    description: [
      'GPA: 3.8/4.0 - Dean\'s List all semesters',
      'Lead developer for university coding club',
      'Completed capstone project on machine learning applications',
    ],
    type: 'education',
  },
];

export const accentColors = [
  { name: 'Blue', value: '#3b82f6' },
  { name: 'Green', value: '#22c55e' },
  { name: 'Purple', value: '#a855f7' },
  { name: 'Orange', value: '#f97316' },
  { name: 'Pink', value: '#ec4899' },
  { name: 'Teal', value: '#14b8a6' },
  { name: 'Red', value: '#ef4444' },
  { name: 'Yellow', value: '#eab308' },
];
