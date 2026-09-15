import { Award, BookOpen, ExternalLink } from 'lucide-react';

import Section from './ui/Section';
import { certifications, selfStudy } from '@/data/portfolio';

export default function Certifications() {
  return (
    <Section
      id="certifications"
      index="08"
      eyebrow="Credentials"
      title="Certifications"
      lede="Completed certification programmes. Credential identifiers are shown only where a verifiable record exists."
      tinted
    >
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((certification) => (
          <li
            key={certification.name}
            className={`card flex flex-col ${certification.featured ? '' : ''}`}
            style={
              certification.featured
                ? { borderColor: 'var(--accent-border)', boxShadow: 'var(--shadow-raised)' }
                : undefined
            }
          >
            <div className="flex items-start gap-3">
              <span
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border"
                style={{
                  backgroundColor: certification.featured ? 'var(--accent-soft)' : 'var(--bg-inset)',
                  borderColor: certification.featured ? 'var(--accent-border)' : 'var(--border)',
                  color: certification.featured ? 'var(--accent)' : 'var(--fg-subtle)',
                }}
              >
                <Award size={17} aria-hidden="true" />
              </span>

              <div className="min-w-0">
                <h3 className="text-[0.95rem] font-semibold leading-snug">{certification.name}</h3>
                <p className="mt-0.5 text-[0.82rem]" style={{ color: 'var(--fg-muted)' }}>
                  {certification.issuer}
                </p>
              </div>
            </div>

            {certification.description ? (
              <p
                className="mt-3.5 flex-1 text-[0.85rem] leading-relaxed"
                style={{ color: 'var(--fg-muted)' }}
              >
                {certification.description}
              </p>
            ) : (
              <div className="flex-1" />
            )}

            {/* Only drawn when there is something to show, so a card without a
                date or credential ID does not end in an empty rule. */}
            {certification.date || certification.credentialId ? (
              <dl
                className="mt-4 space-y-1.5 border-t pt-3.5 font-mono text-[0.72rem]"
                style={{ borderColor: 'var(--border)', color: 'var(--fg-subtle)' }}
              >
                {certification.date ? (
                  <div className="flex gap-2">
                    <dt className="shrink-0">Issued</dt>
                    <dd className="truncate">{certification.date}</dd>
                  </div>
                ) : null}

                {certification.credentialId ? (
                  <div className="flex gap-2">
                    <dt className="shrink-0">ID</dt>
                    <dd className="truncate" title={certification.credentialId}>
                      {certification.credentialId}
                    </dd>
                  </div>
                ) : null}
              </dl>
            ) : null}

            {certification.credentialUrl ? (
              <a
                href={certification.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-[0.8rem] font-medium transition-opacity hover:opacity-70"
                style={{ color: 'var(--accent)' }}
              >
                <ExternalLink size={13} aria-hidden="true" />
                Verify credential
              </a>
            ) : null}
          </li>
        ))}
      </ul>

      {/* Self-directed study — kept visibly distinct from certified credentials
          so there is no implication that a certificate exists. */}
      {selfStudy.length > 0 ? (
        <section className="mt-10" aria-labelledby="self-study-heading">
          <h3
            id="self-study-heading"
            className="flex items-center gap-2 text-[0.95rem] font-semibold"
          >
            <BookOpen size={16} style={{ color: 'var(--fg-subtle)' }} aria-hidden="true" />
            Self-Directed Study
          </h3>

          <p className="mt-1.5 text-[0.82rem]" style={{ color: 'var(--fg-subtle)' }}>
            Subjects studied independently. No formal credential is attached to these.
          </p>

          <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {selfStudy.map((item) => (
              <li
                key={item.topic}
                className="rounded-md border border-dashed px-4 py-3"
                style={{ borderColor: 'var(--border-strong)' }}
              >
                <p className="text-[0.88rem] font-medium">{item.topic}</p>
                <p
                  className="mt-1 text-[0.8rem] leading-snug"
                  style={{ color: 'var(--fg-muted)' }}
                >
                  {item.detail}
                </p>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </Section>
  );
}
