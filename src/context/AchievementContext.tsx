import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Achievement } from '../types';
import { defaultAchievements } from '../data';

interface AchievementContextType {
  achievements: Achievement[];
  addAchievement: (achievement: Omit<Achievement, 'id'>) => void;
  updateAchievement: (id: string, achievement: Partial<Achievement>) => void;
  deleteAchievement: (id: string) => void;
}

const AchievementContext = createContext<AchievementContextType | undefined>(undefined);

export function AchievementProvider({ children }: { children: ReactNode }) {
  const [achievements, setAchievements] = useState<Achievement[]>(() => {
    const saved = localStorage.getItem('portfolio-achievements');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return defaultAchievements;
      }
    }
    return defaultAchievements;
  });

  useEffect(() => {
    localStorage.setItem('portfolio-achievements', JSON.stringify(achievements));
  }, [achievements]);

  const addAchievement = (achievement: Omit<Achievement, 'id'>) => {
    const newAchievement: Achievement = {
      ...achievement,
      id: Date.now().toString(),
    };
    setAchievements(prev => [newAchievement, ...prev]);
  };

  const updateAchievement = (id: string, updates: Partial<Achievement>) => {
    setAchievements(prev =>
      prev.map(a => (a.id === id ? { ...a, ...updates } : a))
    );
  };

  const deleteAchievement = (id: string) => {
    setAchievements(prev => prev.filter(a => a.id !== id));
  };

  return (
    <AchievementContext.Provider value={{
      achievements,
      addAchievement,
      updateAchievement,
      deleteAchievement,
    }}>
      {children}
    </AchievementContext.Provider>
  );
}

export function useAchievements() {
  const context = useContext(AchievementContext);
  if (!context) {
    throw new Error('useAchievements must be used within an AchievementProvider');
  }
  return context;
}
