'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    const initial = savedTheme === 'dark' || (!savedTheme && prefersDark);
    setIsDark(initial);
    document.documentElement.classList.toggle('dark', initial);
  }, []);

  const toggleTheme = () => {
    const nextTheme = !isDark;
    setIsDark(nextTheme);
    document.documentElement.classList.toggle('dark', nextTheme);
    localStorage.setItem('theme', nextTheme ? 'dark' : 'light');
  };

  return (
    <motion.button
      whileTap={{ scale: 0.85 }}
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className="group relative p-3 rounded-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border border-gray-200 dark:border-gray-700 shadow-lg transition hover:shadow-xl cursor-pointer"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={isDark ? 'sun' : 'moon'}
          initial={{ rotate: -90, scale: 0.5, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          exit={{ rotate: 90, scale: 0.5, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          {isDark ? (
            <Sun className="w-6 h-6 text-yellow-400 drop-shadow-md group-hover:animate-pulse" />
          ) : (
            <Moon className="w-6 h-6 text-gray-900 dark:text-gray-200 group-hover:animate-pulse" />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Glowing ring */}
      <motion.div
        layoutId="theme-glow"
        className="absolute inset-0 rounded-full blur-xl opacity-30 pointer-events-none z-[-1]"
        animate={{
          background: isDark
            ? 'radial-gradient(circle at center, #facc15 0%, transparent 80%)'
            : 'radial-gradient(circle at center, #0f172a 0%, transparent 80%)',
        }}
      />
    </motion.button>
  );
}
