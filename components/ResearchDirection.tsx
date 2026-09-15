import { ChevronDown } from 'lucide-react';

import Section from './ui/Section';
import { researchDirection } from '@/data/portfolio';

/**
 * The academic pathway: where I am coming from, where I intend to go, and
 * what the destination is. Rendered as an ordered list so the progression is
 * conveyed structurally, not only visually.
 */
export default function ResearchDirection() {
  return (
    <Section
      id="direction"
      index="03"
      eyebrow="Direction"
      title="Research Direction"
      lede="The path from my undergraduate training toward graduate research."
    >
      <ol className="mx-auto max-w-2xl">
        {researchDirection.stages.map((stage, i) => (
          <li key={stage.title}>
            <div
              className="rounded-lg border px-5 py-4 text-center sm:px-7 sm:py-5"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border)',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <p className="eyebrow">{stage.label}</p>
              <h3 className="mt-2 text-[1.05rem] font-semibold sm:text-[1.15rem]">{stage.title}</h3>
              <p
                className="mx-auto mt-2 max-w-md text-[0.85rem] leading-relaxed"
                style={{ color: 'var(--fg-muted)' }}
              >
                {stage.detail}
              </p>
            </div>

            {i < researchDirection.stages.length - 1 ? (
              <div className="flex justify-center py-2.5" aria-hidden="true">
                <ChevronDown size={18} style={{ color: 'var(--fg-subtle)' }} />
              </div>
            ) : null}
          </li>
        ))}
      </ol>

      {/* Destination */}
      <div className="mx-auto mt-8 max-w-2xl">
        <div
          className="rounded-lg border px-6 py-7 text-center"
          style={{
            backgroundColor: 'var(--accent-soft)',
            borderColor: 'var(--accent-border)',
          }}
        >
          <p className="eyebrow">Long-term focus</p>
          <p
            className="mt-2 text-lg font-semibold tracking-tight sm:text-xl"
            style={{ color: 'var(--accent)' }}
          >
            {researchDirection.destination}
          </p>
        </div>
      </div>
    </Section>
  );
}
