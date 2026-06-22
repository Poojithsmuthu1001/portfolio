import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { navLinks, socialLinks } from '../../data';
import { SocialIcon } from './SocialIcon';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-display font-bold gradient-text mb-4">Portfolio</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Building modern web applications with passion and precision. Always learning, always growing.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.slice(0, 4).map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary-500 transition-colors"
                    whileHover={{ x: 4 }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.slice(0, 5).map((social) => (
                <SocialIcon key={social.name} social={social} size="sm" />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-500 flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> in {currentYear}
            </p>
            <p className="text-sm text-slate-500">
              &copy; {currentYear} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
