import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ThemeConfig } from '../types';

interface ThemeContextType {
  theme: ThemeConfig;
  setTheme: (theme: Partial<ThemeConfig>) => void;
  toggleMode: () => void;
  glassEffect: boolean;
}

const defaultTheme: ThemeConfig = {
  mode: 'dark',
  accentColor: '#3b82f6',
  backgroundType: 'particles',
  glassmorphism: true,
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeConfig>(() => {
    const saved = localStorage.getItem('portfolio-theme');
    if (saved) {
      try {
        return { ...defaultTheme, ...JSON.parse(saved) };
      } catch {
        return defaultTheme;
      }
    }
    return defaultTheme;
  });

  useEffect(() => {
    localStorage.setItem('portfolio-theme', JSON.stringify(theme));
  }, [theme]);

  useEffect(() => {
    const root = document.documentElement;
    if (theme.mode === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    root.style.setProperty('--accent-primary', theme.accentColor);
  }, [theme]);

  const setTheme = (updates: Partial<ThemeConfig>) => {
    setThemeState(prev => ({ ...prev, ...updates }));
  };

  const toggleMode = () => {
    setThemeState(prev => ({
      ...prev,
      mode: prev.mode === 'light' ? 'dark' : 'light',
    }));
  };

  return (
    <ThemeContext.Provider value={{
      theme,
      setTheme,
      toggleMode,
      glassEffect: theme.glassmorphism,
    }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
