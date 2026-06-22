import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider, AchievementProvider } from './context';
import { Navbar, Footer } from './components/layout';
import {
  BackgroundRenderer,
  ThemeCustomizer,
  ScrollProgress,
  ScrollToTop,
  LoadingScreen,
} from './components/ui';
import {
  HeroSection,
  AboutSection,
  SkillsSection,
  ProjectsSection,
  AchievementsSection,
  ResumeSection,
  ContactSection,
} from './components/sections';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <AchievementProvider>
        <AnimatePresence mode="wait">
          {isLoading ? (
            <LoadingScreen key="loading" />
          ) : (
            <div className="relative min-h-screen">
              <BackgroundRenderer />
              <ScrollProgress />
              <Navbar />

              <main>
                <HeroSection />
                <AboutSection />
                <SkillsSection />
                <ProjectsSection />
                <AchievementsSection />
                <ResumeSection />
                <ContactSection />
              </main>

              <Footer />
              <ScrollToTop />
              <ThemeCustomizer />
            </div>
          )}
        </AnimatePresence>
      </AchievementProvider>
    </ThemeProvider>
  );
}

export default App;
