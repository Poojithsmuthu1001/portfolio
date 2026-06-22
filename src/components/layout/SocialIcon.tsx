import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Instagram, Mail, ExternalLink } from 'lucide-react';
import { SocialLink } from '../../types';

interface SocialIconProps {
  social: SocialLink;
  size?: 'sm' | 'md' | 'lg';
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  instagram: Instagram,
  mail: Mail,
  external: ExternalLink,
};

export function SocialIcon({ social, size = 'md' }: SocialIconProps) {
  const Icon = iconMap[social.icon] || ExternalLink;

  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  const buttonClasses = {
    sm: 'p-2',
    md: 'p-3',
    lg: 'p-4',
  };

  return (
    <motion.a
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 transition-colors ${buttonClasses[size]}`}
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
      title={social.name}
      aria-label={social.name}
    >
      <Icon className={sizeClasses[size]} />
    </motion.a>
  );
}
