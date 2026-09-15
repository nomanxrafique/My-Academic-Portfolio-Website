import { FileText, Github, Mail } from 'lucide-react';

import { contact, cv, profile } from '@/data/portfolio';

export default function Footer() {
  return (
    <footer
      className="border-t py-10"
      style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg)' }}
    >
      <div className="container-academic">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-[0.95rem] font-semibold">{profile.fullName}</p>
            <p className="mt-1 text-[0.85rem]" style={{ color: 'var(--fg-muted)' }}>
              {profile.headline}
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.85rem]">
              <li>
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 transition-opacity hover:opacity-70"
                  style={{ color: 'var(--fg-muted)' }}
                >
                  <Github size={14} aria-hidden="true" />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="inline-flex items-center gap-1.5 transition-opacity hover:opacity-70"
                  style={{ color: 'var(--fg-muted)' }}
                >
                  <Mail size={14} aria-hidden="true" />
                  Email
                </a>
              </li>
              <li>
                <a
                  href={cv.file}
                  download={cv.downloadName}
                  className="inline-flex items-center gap-1.5 transition-opacity hover:opacity-70"
                  style={{ color: 'var(--fg-muted)' }}
                >
                  <FileText size={14} aria-hidden="true" />
                  CV
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div
          className="mt-8 border-t pt-6 text-[0.78rem]"
          style={{ borderColor: 'var(--border)', color: 'var(--fg-subtle)' }}
        >
          <p>&copy; {new Date().getFullYear()} {profile.fullName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
