export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: 'web' | 'mobile' | 'academic';
  github?: string;
  demo?: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  level: number;
  icon?: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  type: 'certification' | 'hackathon' | 'competition' | 'award';
  date: string;
  organization?: string;
  link?: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | 'Present';
  description: string[];
  type: 'work' | 'education';
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface ThemeConfig {
  mode: 'light' | 'dark';
  accentColor: string;
  backgroundType: 'particles' | 'blobs' | 'gradient' | 'grid' | 'image' | 'none';
  backgroundImage?: string;
  glassmorphism: boolean;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}
