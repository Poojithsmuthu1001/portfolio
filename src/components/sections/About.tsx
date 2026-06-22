import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, MapPin, Calendar } from 'lucide-react';
import { SectionWrapper, SectionTitle } from '../ui/SectionWrapper';
import { experiences } from '../../data';

export function AboutSection() {
  return (
    <SectionWrapper id="about">
      <div className="section-container">
        <SectionTitle>About Me</SectionTitle>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="heading-md mb-6">Who I Am</h3>
            <p className="text-body text-muted mb-6">
              I'm a passionate full-stack developer with a keen eye for design and a love for
              creating seamless user experiences. With over 5 years of experience in the tech
              industry, I've worked on projects ranging from small startups to enterprise solutions.
            </p>
            <p className="text-body text-muted mb-6">
              My journey in tech started with a curiosity about how things work, which led me to
              pursue a degree in Computer Science. Since then, I've been on a continuous learning
              path, always staying updated with the latest technologies and best practices.
            </p>
            <p className="text-body text-muted">
              When I'm not coding, you can find me exploring new technologies, contributing to
              open-source projects, or sharing my knowledge through blog posts and tutorials.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="heading-md mb-6">Career Path</h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  className="relative pl-8 pb-6 border-l-2 border-slate-200 dark:border-slate-700 last:pb-0"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-primary-500 border-4 border-white dark:border-slate-900" />

                  <div className="glass-card p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-semibold">{exp.title}</h4>
                        <p className="text-primary-500 text-sm">{exp.company}</p>
                      </div>
                      {exp.type === 'education' ? (
                        <GraduationCap className="w-5 h-5 text-accent-500" />
                      ) : (
                        <Briefcase className="w-5 h-5 text-primary-500" />
                      )}
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-muted mb-3">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.startDate} - {exp.endDate}
                      </span>
                    </div>
                    <ul className="text-sm text-muted space-y-1">
                      {exp.description.slice(0, 2).map((desc, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-primary-500 mt-1">•</span>
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
