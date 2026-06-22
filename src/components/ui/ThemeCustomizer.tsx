import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, X, Sun, Moon, Palette, Image, Sparkles } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { accentColors } from '../../data';

export function ThemeCustomizer() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme, toggleMode } = useTheme();

  const backgroundTypes = [
    { id: 'particles', label: 'Particles', icon: Sparkles },
    { id: 'blobs', label: 'Blobs', icon: Sparkles },
    { id: 'gradient', label: 'Gradient', icon: Palette },
    { id: 'grid', label: 'Grid', icon: Image },
    { id: 'none', label: 'None', icon: X },
  ] as const;

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full glass-button shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        aria-label="Open theme customizer"
      >
        <Settings className="w-6 h-6" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              className="fixed right-6 top-1/2 -translate-y-1/2 z-50 w-80 glass-card p-6 shadow-2xl"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold font-display">Customize Theme</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="text-sm font-medium text-slate-600 dark:text-slate-400 block mb-3">
                    Mode
                  </label>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setTheme({ mode: 'light' })}
                      className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-lg transition-all ${
                        theme.mode === 'light'
                          ? 'bg-primary-500 text-white'
                          : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700'
                      }`}
                    >
                      <Sun className="w-4 h-4" />
                      Light
                    </button>
                    <button
                      onClick={() => setTheme({ mode: 'dark' })}
                      className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-lg transition-all ${
                        theme.mode === 'dark'
                          ? 'bg-primary-500 text-white'
                          : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700'
                      }`}
                    >
                      <Moon className="w-4 h-4" />
                      Dark
                    </button>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-slate-600 dark:text-slate-400 block mb-3">
                    Accent Color
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {accentColors.map((color) => (
                      <button
                        key={color.value}
                        onClick={() => setTheme({ accentColor: color.value })}
                        className={`w-8 h-8 rounded-full transition-transform ${
                          theme.accentColor === color.value ? 'ring-2 ring-offset-2 ring-slate-900 dark:ring-white scale-110' : ''
                        }`}
                        style={{ backgroundColor: color.value }}
                        title={color.name}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-slate-600 dark:text-slate-400 block mb-3">
                    Background Effect
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {backgroundTypes.map(({ id, label, icon: Icon }) => (
                      <button
                        key={id}
                        onClick={() => setTheme({ backgroundType: id })}
                        className={`flex items-center gap-2 py-2 px-3 rounded-lg text-sm transition-all ${
                          theme.backgroundType === id
                            ? 'bg-primary-500 text-white'
                            : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        {label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-slate-600 dark:text-slate-400 block mb-3">
                    Custom Background Image
                  </label>
                  <input
                    type="url"
                    placeholder="Enter image URL"
                    value={theme.backgroundImage || ''}
                    onChange={(e) => {
                      setTheme({ backgroundImage: e.target.value, backgroundType: 'image' });
                    }}
                    className="input-field text-sm"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-slate-600 dark:text-slate-400">
                    Glassmorphism Effect
                  </label>
                  <button
                    onClick={() => setTheme({ glassmorphism: !theme.glassmorphism })}
                    className={`relative w-12 h-6 rounded-full transition-colors ${
                      theme.glassmorphism ? 'bg-primary-500' : 'bg-slate-300 dark:bg-slate-700'
                    }`}
                  >
                    <div
                      className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                        theme.glassmorphism ? 'left-7' : 'left-1'
                      }`}
                    />
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
