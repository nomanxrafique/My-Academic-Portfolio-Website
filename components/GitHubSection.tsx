import { ArrowUpRight, Github } from 'lucide-react';

import Section from './ui/Section';
import { contact } from '@/data/portfolio';

/**
 * A deliberately static section. There is no GitHub API call — the page must
 * render identically with no network access, and an unauthenticated API call
 * would also leak visitor requests to a third party.
 */
export default function GitHubSection() {
  return (
    <Section
      id="github"
      index="11"
      eyebrow="Code"
      title="GitHub"
      lede="My GitHub contains selected academic, software engineering, and technical projects."
    >
      <div
        className="flex flex-col items-start justify-between gap-6 rounded-lg border px-6 py-7 sm:flex-row sm:items-center sm:px-8"
        style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)', boxShadow: 'var(--shadow-card)' }}
      >
        <div className="flex items-center gap-4">
          <span
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border"
            style={{ backgroundColor: 'var(--bg-inset)', borderColor: 'var(--border)' }}
          >
            <Github size={22} aria-hidden="true" />
          </span>

          <div>
            <p className="font-mono text-[0.95rem] font-medium">github.com/{contact.githubHandle}</p>
            <p className="mt-1 text-[0.85rem]" style={{ color: 'var(--fg-muted)' }}>
              Repositories, coursework, and project source code.
            </p>
          </div>
        </div>

        <a
          href={contact.github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary shrink-0"
        >
          Visit My GitHub
          <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </div>
    </Section>
  );
}
