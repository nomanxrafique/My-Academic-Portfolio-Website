'use client';

import { useEffect, useState } from 'react';
import { Download, FileText, Info, Users } from 'lucide-react';

import Section from './ui/Section';
import { cv, profile, references } from '@/data/portfolio';

type FileState = 'checking' | 'available' | 'missing';

/**
 * The CV section verifies that the PDF is actually present before offering it,
 * so a missing file degrades to a clear message rather than a broken download.
 * The check is a single HEAD request and never blocks rendering.
 */
export default function CV() {
  const [state, setState] = useState<FileState>('checking');

  useEffect(() => {
    let active = true;

    fetch(cv.file, { method: 'HEAD' })
      .then((response) => {
        if (active) setState(response.ok ? 'available' : 'missing');
      })
      .catch(() => {
        if (active) setState('missing');
      });

    return () => {
      active = false;
    };
  }, []);

  return (
    <Section
      id="cv"
      index="10"
      eyebrow="Curriculum Vitae"
      title="Academic CV"
      lede="Download my latest academic CV for detailed information about my education, technical background, projects, certifications, and academic interests."
      tinted
    >
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:gap-10">
        {/* Download panel */}
        <div className="card flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <div className="flex items-start gap-4">
            <span
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border"
              style={{
                backgroundColor: 'var(--accent-soft)',
                borderColor: 'var(--accent-border)',
                color: 'var(--accent)',
              }}
            >
              <FileText size={20} aria-hidden="true" />
            </span>

            <div>
              <h3 className="text-[0.98rem] font-semibold">
                {profile.fullName} — Academic CV
              </h3>
              <p className="mt-1 font-mono text-[0.75rem]" style={{ color: 'var(--fg-subtle)' }}>
                PDF · Last updated {cv.lastUpdated}
              </p>
            </div>
          </div>

          {state === 'missing' ? (
            <p
              className="flex items-start gap-2 rounded-md border border-dashed px-3 py-2 text-[0.8rem] leading-snug sm:max-w-[15rem]"
              style={{ borderColor: 'var(--border-strong)', color: 'var(--fg-subtle)' }}
            >
              <Info size={14} className="mt-0.5 shrink-0" aria-hidden="true" />
              CV file not yet uploaded. Add it to <code className="font-mono">public/</code>.
            </p>
          ) : (
            <a
              href={cv.file}
              download={cv.downloadName}
              className="btn btn-primary shrink-0"
              aria-disabled={state === 'checking'}
            >
              <Download size={16} aria-hidden="true" />
              Download CV
            </a>
          )}
        </div>

        {/* References */}
        <div className="card">
          <h3 className="flex items-center gap-2 text-[0.95rem] font-semibold">
            <Users size={16} style={{ color: 'var(--accent)' }} aria-hidden="true" />
            Academic References
          </h3>

          <ul className="mt-4 space-y-3.5">
            {references.map((reference) => (
              <li key={reference.name}>
                <p className="text-[0.9rem] font-medium">{reference.name}</p>
                <p className="text-[0.82rem] leading-snug" style={{ color: 'var(--fg-muted)' }}>
                  {reference.title}
                </p>
                <p className="text-[0.82rem] leading-snug" style={{ color: 'var(--fg-subtle)' }}>
                  {reference.institution}
                </p>
              </li>
            ))}
          </ul>

          <p
            className="mt-4 border-t pt-3 text-[0.78rem]"
            style={{ borderColor: 'var(--border)', color: 'var(--fg-subtle)' }}
          >
            Contact details available on request.
          </p>
        </div>
      </div>
    </Section>
  );
}
