'use client';

import { useEffect, useState } from 'react';
import { Github, Menu, X } from 'lucide-react';

import ThemeToggle from './ThemeToggle';
import { contact, navLinks, profile } from '@/data/portfolio';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add a hairline border and background only once the page has scrolled, so
  // the header sits flush with the hero at rest.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu on Escape, and lock background scrolling while open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      data-header
      className="no-print sticky top-0 z-50 transition-colors duration-200"
      style={{
        backgroundColor: scrolled || open ? 'var(--bg)' : 'transparent',
        borderBottom: `1px solid ${scrolled || open ? 'var(--border)' : 'transparent'}`,
        backdropFilter: scrolled ? 'saturate(180%) blur(8px)' : undefined,
      }}
    >
      <nav className="container-academic" aria-label="Primary">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Identity ---------------------------------------------------- */}
          <a
            href="#top"
            className="group flex min-w-0 items-center gap-2.5 rounded-sm"
            aria-label={`${profile.fullName} — back to top`}
          >
            <span
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded font-mono text-[0.7rem] font-semibold"
              style={{ backgroundColor: 'var(--accent)', color: '#fff' }}
              aria-hidden="true"
            >
              NR
            </span>
            <span className="truncate text-[0.95rem] font-semibold tracking-tight">
              <span className="hidden sm:inline">{profile.fullName}</span>
              <span className="sm:hidden">{profile.shortName}</span>
            </span>
          </a>

          {/* Desktop links ----------------------------------------------- */}
          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-md px-2.5 py-2 text-[0.85rem] font-medium transition-colors"
                  style={{ color: 'var(--fg-muted)' }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Actions ------------------------------------------------------ */}
          <div className="flex items-center gap-1">
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost h-9 w-9 !px-0"
              aria-label="GitHub profile (opens in a new tab)"
              title="GitHub"
            >
              <Github size={17} aria-hidden="true" />
            </a>

            <ThemeToggle />

            <button
              type="button"
              data-menu-toggle
              onClick={() => setOpen((v) => !v)}
              className="btn btn-ghost h-9 w-9 !px-0 lg:hidden"
              aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              {/* Both icons are rendered and CSS swaps them based on
                  aria-expanded, so the markup is state-independent. */}
              <Menu size={18} className="menu-icon-closed" aria-hidden="true" />
              <X size={18} className="menu-icon-open" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Mobile menu ---------------------------------------------------- */}
        <div
          id="mobile-menu"
          data-mobile-menu
          hidden={!open}
          className="border-t py-3 lg:hidden"
          style={{ borderColor: 'var(--border)' }}
        >
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-2.5 text-[0.95rem] font-medium"
                  style={{ color: 'var(--fg-muted)' }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
