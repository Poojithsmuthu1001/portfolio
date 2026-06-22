import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { Github, ExternalLink, Star } from 'lucide-react';
import { SectionWrapper, SectionTitle } from '../ui/SectionWrapper';
import { projects } from '../../data';
import { Project } from '../../types';

const categories = [
  { id: 'all', label: 'All' },
  { id: 'web', label: 'Web Apps' },
  { id: 'mobile', label: 'Mobile Apps' },
  { id: 'academic', label: 'Academic' },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <Tilt
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      perspective={1000}
      transitionSpeed={2000}
      scale={1.02}
      gyroscope
    >
      <motion.div
        className="glass-card overflow-hidden group"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative h-48 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          {project.featured && (
            <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 bg-accent-500 text-white text-xs font-medium rounded-full">
              <Star className="w-3 h-3 fill-current" />
              Featured
            </div>
          )}
          <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/90 rounded-full text-slate-900 hover:bg-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="View code"
              >
                <Github className="w-5 h-5" />
              </motion.a>
            )}
            {project.demo && (
              <motion.a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/90 rounded-full text-slate-900 hover:bg-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="View demo"
              >
                <ExternalLink className="w-5 h-5" />
              </motion.a>
            )}
          </div>
        </div>

        <div className="p-5">
          <h3 className="font-display font-semibold text-lg mb-2">{project.title}</h3>
          <p className="text-sm text-muted mb-4 line-clamp-2">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
}

export function ProjectsSection() {
  const [filter, setFilter] = useState('all');

  const filteredProjects = projects.filter(
    (project) => filter === 'all' || project.category === filter
  );

  return (
    <SectionWrapper id="projects">
      <div className="section-container">
        <SectionTitle>Featured Projects</SectionTitle>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                filter === cat.id
                  ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {cat.label}
            </motion.button>
          ))}
        </div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
