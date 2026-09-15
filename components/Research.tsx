import Section from './ui/Section';
import Icon from './ui/Icon';
import { researchInterests } from '@/data/portfolio';

export default function Research() {
  return (
    <Section
      id="research"
      index="02"
      eyebrow="Research"
      title="Research Interests"
      lede="Areas I intend to study and work in at Master's level. These are directions of interest and planned study rather than fields in which I already hold research experience."
      tinted
    >
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {researchInterests.map((interest) => (
          <li key={interest.id} className="card card-interactive flex flex-col">
            <div className="flex items-center gap-3">
              <span
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border"
                style={{
                  backgroundColor: 'var(--accent-soft)',
                  borderColor: 'var(--accent-border)',
                  color: 'var(--accent)',
                }}
              >
                <Icon name={interest.icon} size={17} />
              </span>
              <h3 className="text-[1.02rem] font-semibold">{interest.title}</h3>
            </div>

            <p
              className="mt-3.5 text-[0.875rem] leading-relaxed"
              style={{ color: 'var(--fg-muted)' }}
            >
              {interest.summary}
            </p>

            <ul className="mt-4 flex flex-wrap gap-1.5 border-t pt-4" style={{ borderColor: 'var(--border)' }}>
              {interest.topics.map((topic) => (
                <li key={topic} className="tag">
                  {topic}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  );
}
