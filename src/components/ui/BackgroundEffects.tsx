import { useCallback, useMemo } from 'react';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { Engine, ISourceOptions } from '@tsparticles/engine';
import { useTheme } from '../../context/ThemeContext';

export function ParticleBackground() {
  const { theme } = useTheme();

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const options: ISourceOptions = useMemo(() => ({
    background: { color: { value: 'transparent' } },
    fpsLimit: 60,
    particles: {
      color: { value: theme.accentColor },
      links: {
        color: theme.accentColor,
        distance: 150,
        enable: true,
        opacity: 0.2,
        width: 1,
      },
      move: {
        enable: true,
        outModes: { default: 'bounce' },
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: { enable: true, area: 800 },
        value: 80,
      },
      opacity: { value: 0.3 },
      shape: { type: 'circle' },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  }), [theme.accentColor]);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={options}
      className="fixed inset-0 -z-10"
    />
  );
}

export function BlobBackground() {
  const { theme } = useTheme();

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-60 animate-blob"
        style={{ backgroundColor: theme.accentColor }}
      />
      <div
        className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-60 animate-blob"
        style={{ backgroundColor: theme.accentColor, animationDelay: '2s' }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-60 animate-blob"
        style={{ backgroundColor: theme.accentColor, animationDelay: '4s' }}
      />
    </div>
  );
}

export function GradientBackground() {
  return (
    <div className="fixed inset-0 -z-10 bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
  );
}

export function GridBackground() {
  return (
    <div className="fixed inset-0 -z-10 bg-slate-50 dark:bg-slate-950">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />
    </div>
  );
}

export function ImageBackground({ src }: { src: string }) {
  return (
    <div className="fixed inset-0 -z-10">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${src})` }}
      />
      <div className="absolute inset-0 bg-white/80 dark:bg-slate-950/80 backdrop-blur-sm" />
    </div>
  );
}

export function BackgroundRenderer() {
  const { theme } = useTheme();

  switch (theme.backgroundType) {
    case 'particles':
      return <ParticleBackground />;
    case 'blobs':
      return <BlobBackground />;
    case 'gradient':
      return <GradientBackground />;
    case 'grid':
      return <GridBackground />;
    case 'image':
      return theme.backgroundImage ? (
        <ImageBackground src={theme.backgroundImage} />
      ) : <GradientBackground />;
    default:
      return null;
  }
}
