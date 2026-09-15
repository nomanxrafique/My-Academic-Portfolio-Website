import { Quote } from 'lucide-react';

import Section from './ui/Section';
import { about, profile } from '@/data/portfolio';

export default function About() {
  return (
    <Section id="about" index="01" eyebrow="About" title="Academic Background">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] lg:gap-14">
        {/* Biography */}
        <div className="space-y-4">
          {about.paragraphs.map((paragraph, i) => (
            <p
              key={i}
              className="max-w-prose text-[0.975rem] leading-[1.75]"
              style={{ color: 'var(--fg-muted)' }}
            >
              {paragraph}
            </p>
          ))}

          {/* Research statement — the paragraph a supervisor actually reads. */}
          <div
            className="!mt-8 rounded-lg border-l-2 py-1 pl-5"
            style={{ borderColor: 'var(--accent)' }}
          >
            <p className="eyebrow flex items-center gap-2">
              <Quote size={13} aria-hidden="true" />
              Statement of Research Interest
            </p>
            <p
              className="mt-3 max-w-prose text-[0.975rem] leading-[1.75]"
              style={{ color: 'var(--fg)' }}
            >
              {about.researchStatement}
            </p>
          </div>
        </div>

        {/* Side panel: at-a-glance facts */}
        <aside className="space-y-6">
          <dl className="card space-y-4 text-[0.875rem]">
            {[
              { term: 'Degree', detail: profile.degree },
              { term: 'Institution', detail: profile.university },
              { term: 'Location', detail: profile.location },
              { term: 'Graduation', detail: profile.graduation },
              { term: 'Nationality', detail: profile.nationality },
              { term: 'Intended field', detail: profile.academicDirection },
            ].map((row) => (
              <div key={row.term} className="grid grid-cols-[8.5rem_minmax(0,1fr)] gap-3">
                <dt
                  className="font-mono text-[0.72rem] uppercase tracking-wider"
                  style={{ color: 'var(--fg-subtle)' }}
                >
                  {row.term}
                </dt>
                <dd className="font-medium">{row.detail}</dd>
              </div>
            ))}
          </dl>

          <div className="card">
            <h3 className="font-mono text-[0.72rem] uppercase tracking-wider" style={{ color: 'var(--fg-subtle)' }}>
              Languages
            </h3>
            <dl className="mt-4 space-y-3 text-[0.875rem]">
              {about.languages.map((language) => (
                <div key={language.name}>
                  <dt className="font-medium">{language.name}</dt>
                  <dd className="mt-0.5 leading-snug" style={{ color: 'var(--fg-muted)' }}>
                    {language.level}
                  </dd>
                </div>
              ))}
            </dl>

            {about.englishTest ? (
              <p className="mt-4 border-t pt-4 text-[0.875rem]" style={{ borderColor: 'var(--border)' }}>
                <span className="font-medium">{about.englishTest.name}</span>{' '}
                <span style={{ color: 'var(--fg-muted)' }}>
                  {about.englishTest.score} · {about.englishTest.date}
                </span>
              </p>
            ) : null}
          </div>
        </aside>
      </div>
    </Section>
  );
}
