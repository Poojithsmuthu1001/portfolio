import { motion } from 'framer-motion';
import { Download, ExternalLink } from 'lucide-react';
import { SectionWrapper, SectionTitle } from '../ui/SectionWrapper';
import { personalInfo } from '../../data';

export function ResumeSection() {
  return (
    <SectionWrapper id="resume">
      <div className="section-container">
        <SectionTitle>Resume</SectionTitle>

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="glass-card overflow-hidden">
            <div className="p-4 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="flex gap-2">
                <motion.a
                  href={personalInfo.resumeUrl}
                  download
                  className="flex items-center gap-2 px-4 py-2 bg-primary-500 text-white rounded-lg text-sm font-medium"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Download className="w-4 h-4" />
                  Download
                </motion.a>
                <motion.a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-slate-200 dark:bg-slate-700 rounded-lg text-sm font-medium"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ExternalLink className="w-4 h-4" />
                  Open
                </motion.a>
              </div>
            </div>

            <div className="aspect-[8.5/11] bg-white dark:bg-slate-900">
              <div className="h-full flex flex-col items-center justify-center p-8 text-center">
                <div className="w-20 h-20 mb-6 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                  <Download className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-2">Resume Preview</h3>
                <p className="text-muted max-w-md mb-6">
                  Click the download button to get a copy of my resume. Contains my full work history, skills, and certifications.
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {['React', 'TypeScript', 'Node.js', 'Python', 'AWS'].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm bg-slate-100 dark:bg-slate-800 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <motion.div
            className="mt-8 grid sm:grid-cols-2 md:grid-cols-4 gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {[
              { label: 'Experience', value: '5+' },
              { label: 'Projects Completed', value: '50+' },
              { label: 'Certifications', value: '8' },
              { label: 'Happy Clients', value: '30+' },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                className="glass-card p-4 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-3xl font-display font-bold gradient-text mb-1">
                  {item.value}
                </div>
                <div className="text-sm text-muted">{item.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
