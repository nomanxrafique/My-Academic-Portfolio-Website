import { Briefcase, ExternalLink, GraduationCap } from 'lucide-react';

import Section from './ui/Section';
import { education, experience } from '@/data/portfolio';

export default function Education() {
  return (
    <Section
      id="education"
      index="05"
      eyebrow="Education"
      title="Education & Experience"
      lede="Academic training, and the software engineering practice alongside it."
    >
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-14">
        {/* ------------------------------------------------------- Education */}
        <div>
          <h3 className="flex items-center gap-2 text-[0.95rem] font-semibold">
            <GraduationCap size={17} style={{ color: 'var(--accent)' }} aria-hidden="true" />
            Education
          </h3>

          <ol className="mt-5 space-y-6">
            {education.map((entry) => (
              <li
                key={entry.degree}
                className="relative border-l pl-6"
                style={{ borderColor: 'var(--border-strong)' }}
              >
                <span
                  className="absolute -left-[4.5px] top-1.5 h-2 w-2 rounded-full"
                  style={{ backgroundColor: 'var(--accent)' }}
                  aria-hidden="true"
                />

                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h4 className="text-[1.02rem] font-semibold">{entry.degree}</h4>
                  <span className="font-mono text-[0.75rem]" style={{ color: 'var(--fg-subtle)' }}>
                    {entry.period}
                  </span>
                </div>

                <p className="mt-1 text-[0.9rem] font-medium" style={{ color: 'var(--fg-muted)' }}>
                  {entry.institutionUrl ? (
                    <a
                      href={entry.institutionUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-accent inline-flex items-center gap-1"
                    >
                      {entry.institution}
                      <ExternalLink size={12} aria-hidden="true" />
                    </a>
                  ) : (
                    entry.institution
                  )}
                  <span style={{ color: 'var(--fg-subtle)' }}> · {entry.location}</span>
                </p>

                {entry.grade ? (
                  <p className="mt-2">
                    <span className="tag tag-accent">Aggregate: {entry.grade}</span>
                  </p>
                ) : null}

                <p
                  className="mt-3 max-w-prose text-[0.875rem] leading-relaxed"
                  style={{ color: 'var(--fg-muted)' }}
                >
                  {entry.description}
                </p>
              </li>
            ))}
          </ol>
        </div>

        {/* ------------------------------------------------------ Experience */}
        {experience.length > 0 ? (
          <div>
            <h3 className="flex items-center gap-2 text-[0.95rem] font-semibold">
              <Briefcase size={17} style={{ color: 'var(--accent)' }} aria-hidden="true" />
              Software Engineering Experience
            </h3>

            <ol className="mt-5 space-y-6">
              {experience.map((entry) => (
                <li
                  key={`${entry.role}-${entry.organisation}`}
                  className="relative border-l pl-6"
                  style={{ borderColor: 'var(--border-strong)' }}
                >
                  <span
                    className="absolute -left-[4.5px] top-1.5 h-2 w-2 rounded-full"
                    style={{ backgroundColor: 'var(--border-strong)' }}
                    aria-hidden="true"
                  />

                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h4 className="text-[1.02rem] font-semibold">{entry.role}</h4>
                    <span className="font-mono text-[0.75rem]" style={{ color: 'var(--fg-subtle)' }}>
                      {entry.period}
                    </span>
                  </div>

                  <p className="mt-1 text-[0.9rem] font-medium" style={{ color: 'var(--fg-muted)' }}>
                    {entry.organisation}
                    <span style={{ color: 'var(--fg-subtle)' }}> · {entry.location}</span>
                  </p>

                  <ul className="mt-3 space-y-2">
                    {entry.points.map((point) => (
                      <li
                        key={point}
                        className="relative pl-4 text-[0.875rem] leading-relaxed"
                        style={{ color: 'var(--fg-muted)' }}
                      >
                        <span
                          className="absolute left-0 top-[0.6em] h-1 w-1 rounded-full"
                          style={{ backgroundColor: 'var(--fg-subtle)' }}
                          aria-hidden="true"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>
        ) : null}
      </div>
    </Section>
  );
}
