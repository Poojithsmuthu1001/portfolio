import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import { SectionWrapper, SectionTitle } from '../ui/SectionWrapper';
import { personalInfo, socialLinks } from '../../data';
import { SocialIcon } from '../layout/SocialIcon';
import { ContactForm } from '../../types';

export function ContactSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactForm>();

  const onSubmit = async (data: ContactForm) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast.success('Message sent successfully! I\'ll get back to you soon.');
    reset();
  };

  return (
    <SectionWrapper id="contact">
      <div className="section-container">
        <SectionTitle>Get In Touch</SectionTitle>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="heading-md mb-4">Let's Connect</h3>
            <p className="text-body text-muted mb-8">
              Have a project in mind or want to collaborate? I'd love to hear from you.
              Fill out the form and I'll get back to you as soon as possible.
            </p>

            <div className="space-y-6">
              <motion.div
                className="flex items-center gap-4 p-4 glass-card"
                whileHover={{ x: 4 }}
              >
                <div className="p-3 rounded-xl bg-primary-100 dark:bg-primary-900/30">
                  <Mail className="w-5 h-5 text-primary-500" />
                </div>
                <div>
                  <p className="text-sm text-muted">Email</p>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="font-medium hover:text-primary-500 transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-4 p-4 glass-card"
                whileHover={{ x: 4 }}
              >
                <div className="p-3 rounded-xl bg-primary-100 dark:bg-primary-900/30">
                  <Phone className="w-5 h-5 text-primary-500" />
                </div>
                <div>
                  <p className="text-sm text-muted">Phone</p>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="font-medium hover:text-primary-500 transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-4 p-4 glass-card"
                whileHover={{ x: 4 }}
              >
                <div className="p-3 rounded-xl bg-primary-100 dark:bg-primary-900/30">
                  <MapPin className="w-5 h-5 text-primary-500" />
                </div>
                <div>
                  <p className="text-sm text-muted">Location</p>
                  <p className="font-medium">{personalInfo.location}</p>
                </div>
              </motion.div>
            </div>

            <div className="mt-8 flex gap-3">
              {socialLinks.map((social) => (
                <SocialIcon key={social.name} social={social} />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="glass-card p-8 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  className={`input-field ${errors.name ? 'border-red-500 focus:ring-red-500/50' : ''}`}
                  placeholder="Your name"
                  {...register('name', { required: 'Name is required' })}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className={`input-field ${errors.email ? 'border-red-500 focus:ring-red-500/50' : ''}`}
                  placeholder="your@email.com"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                  })}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  className={`input-field ${errors.subject ? 'border-red-500 focus:ring-red-500/50' : ''}`}
                  placeholder="What's this about?"
                  {...register('subject', { required: 'Subject is required' })}
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className={`input-field resize-none ${errors.message ? 'border-red-500 focus:ring-red-500/50' : ''}`}
                  placeholder="Your message..."
                  {...register('message', { required: 'Message is required' })}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-70"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
            <ToastContainer
              position="bottom-right"
              theme="dark"
              autoClose={5000}
              hideProgressBar={false}
            />
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
