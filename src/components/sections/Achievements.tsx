import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Trophy, Medal, FileCheck, Plus, Edit2, Trash2, X, Save } from 'lucide-react';
import { SectionWrapper, SectionTitle } from '../ui/SectionWrapper';
import { useAchievements } from '../../context';
import { Achievement } from '../../types';

const typeIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  certification: FileCheck,
  hackathon: Trophy,
  competition: Medal,
  award: Award,
};

const typeColors: Record<string, string> = {
  certification: 'text-blue-500 bg-blue-500/10',
  hackathon: 'text-purple-500 bg-purple-500/10',
  competition: 'text-orange-500 bg-orange-500/10',
  award: 'text-green-500 bg-green-500/10',
};

interface AchievementFormProps {
  achievement?: Achievement;
  onClose: () => void;
  onSubmit: (data: Omit<Achievement, 'id'>) => void;
}

function AchievementForm({ achievement, onClose, onSubmit }: AchievementFormProps) {
  const [formData, setFormData] = useState({
    title: achievement?.title || '',
    description: achievement?.description || '',
    type: achievement?.type || 'certification' as const,
    date: achievement?.date || '',
    organization: achievement?.organization || '',
    link: achievement?.link || '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="glass-card w-full max-w-md p-6"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-display font-semibold text-lg">
            {achievement ? 'Edit Achievement' : 'Add Achievement'}
          </h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Title</label>
            <input
              type="text"
              required
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="input-field"
              placeholder="Achievement title"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Description</label>
            <textarea
              required
              rows={3}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="input-field resize-none"
              placeholder="Describe your achievement"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Type</label>
              <select
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value as Achievement['type'] })}
                className="input-field"
              >
                <option value="certification">Certification</option>
                <option value="hackathon">Hackathon</option>
                <option value="competition">Competition</option>
                <option value="award">Award</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Date</label>
              <input
                type="date"
                required
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="input-field"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Organization</label>
            <input
              type="text"
              value={formData.organization}
              onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
              className="input-field"
              placeholder="Organization name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Link (optional)</label>
            <input
              type="url"
              value={formData.link}
              onChange={(e) => setFormData({ ...formData, link: e.target.value })}
              className="input-field"
              placeholder="https://..."
            />
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 btn-secondary"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 btn-primary flex items-center justify-center gap-2"
            >
              <Save className="w-4 h-4" />
              Save
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
}

export function AchievementsSection() {
  const { achievements, addAchievement, updateAchievement, deleteAchievement } = useAchievements();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingAchievement, setEditingAchievement] = useState<Achievement | undefined>();

  const handleEdit = (achievement: Achievement) => {
    setEditingAchievement(achievement);
    setIsFormOpen(true);
  };

  const handleSubmit = (data: Omit<Achievement, 'id'>) => {
    if (editingAchievement) {
      updateAchievement(editingAchievement.id, data);
    } else {
      addAchievement(data);
    }
    setEditingAchievement(undefined);
  };

  const handleClose = () => {
    setIsFormOpen(false);
    setEditingAchievement(undefined);
  };

  return (
    <SectionWrapper id="achievements">
      <div className="section-container">
        <div className="flex items-center justify-between mb-12">
          <SectionTitle>Achievements</SectionTitle>
          <motion.button
            onClick={() => setIsFormOpen(true)}
            className="btn-primary flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Plus className="w-5 h-5" />
            Add Achievement
          </motion.button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = typeIcons[achievement.type];
            const colorClass = typeColors[achievement.type];

            return (
              <motion.div
                key={achievement.id}
                className="glass-card p-6 relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={() => handleEdit(achievement)}
                    className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                    aria-label="Edit"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => deleteAchievement(achievement.id)}
                    className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg hover:bg-red-200 dark:hover:bg-red-900/50 text-red-500 transition-colors"
                    aria-label="Delete"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl ${colorClass}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-semibold mb-1">{achievement.title}</h3>
                    <p className="text-sm text-muted mb-2">{achievement.description}</p>
                    <div className="flex flex-wrap gap-3 text-xs text-muted">
                      <span>{new Date(achievement.date).toLocaleDateString()}</span>
                      {achievement.organization && (
                        <>
                          <span>•</span>
                          <span>{achievement.organization}</span>
                        </>
                      )}
                    </div>
                    {achievement.link && (
                      <a
                        href={achievement.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-2 text-sm text-primary-500 hover:underline"
                      >
                        View Certificate
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <AnimatePresence>
          {isFormOpen && (
            <AchievementForm
              achievement={editingAchievement}
              onClose={handleClose}
              onSubmit={handleSubmit}
            />
          )}
        </AnimatePresence>
      </div>
    </SectionWrapper>
  );
}
