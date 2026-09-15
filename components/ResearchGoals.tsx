import Section from './ui/Section';
import { researchGoals } from '@/data/portfolio';

/**
 * Forward-looking, explicitly framed as intent rather than accomplishment.
 */
export default function ResearchGoals() {
  return (
    <Section
      id="goals"
      index="09"
      eyebrow="Goals"
      title="Master's Research Goals"
      lede="How I intend to develop during a Master's programme. These are planned stages of study and supervised work, not claims of current expertise."
    >
      <ol className="grid gap-5 md:grid-cols-3">
        {researchGoals.map((goal) => (
          <li key={goal.number} className="card flex flex-col">
            <div className="flex items-baseline gap-3">
              <span
                className="font-mono text-2xl font-semibold leading-none"
                style={{ color: 'var(--accent)', opacity: 0.85 }}
                aria-hidden="true"
              >
                {goal.number}
              </span>
              <h3 className="text-[1.02rem] font-semibold">{goal.stage}</h3>
            </div>

            <p
              className="mt-3.5 text-[0.875rem] leading-relaxed"
              style={{ color: 'var(--fg-muted)' }}
            >
              {goal.summary}
            </p>

            <ul
              className="mt-4 space-y-2 border-t pt-4"
              style={{ borderColor: 'var(--border)' }}
            >
              {goal.items.map((item) => (
                <li
                  key={item}
                  className="relative pl-4 text-[0.86rem] leading-snug"
                  style={{ color: 'var(--fg-muted)' }}
                >
                  <span
                    className="absolute left-0 top-[0.55em] h-1 w-1 rounded-full"
                    style={{ backgroundColor: 'var(--accent)' }}
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
