'use client';

import { useCallback } from 'react';
import { Moon, Sun } from 'lucide-react';

/**
 * Light / dark theme switch.
 *
 * The initial theme is applied by a tiny inline script in app/layout.tsx before
 * first paint. This button renders identically on the server and the client —
 * both icons are always in the DOM and CSS decides which one is visible based
 * on the `.dark` class — so there is no hydration mismatch, no layout shift,
 * and no flash of the wrong icon.
 */
export default function ThemeToggle() {
  const toggle = useCallback(() => {
    const next = !document.documentElement.classList.contains('dark');
    document.documentElement.classList.toggle('dark', next);
    document.documentElement.style.colorScheme = next ? 'dark' : 'light';
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light');
    } catch {
      /* Storage can be unavailable (private mode, blocked cookies) — ignore. */
    }
  }, []);

  return (
    <button
      type="button"
      data-theme-toggle
      onClick={toggle}
      className="btn btn-ghost h-9 w-9 !px-0"
      aria-label="Toggle between light and dark theme"
      title="Toggle light / dark theme"
    >
      <Moon size={17} className="theme-icon-light" aria-hidden="true" />
      <Sun size={17} className="theme-icon-dark" aria-hidden="true" />
    </button>
  );
}
