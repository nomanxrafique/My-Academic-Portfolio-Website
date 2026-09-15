import Section from './ui/Section';
import Icon from './ui/Icon';
import { skillGroups } from '@/data/portfolio';

export default function Skills() {
  return (
    <Section
      id="skills"
      index="04"
      eyebrow="Skills"
      title="Technical Skills"
      lede="Technologies and concepts I have worked with through undergraduate coursework, projects, professional software development, and certification study."
      tinted
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <section key={group.title} className="card" aria-label={group.title}>
            <div className="flex items-center gap-2.5">
              <Icon name={group.icon} size={16} style={{ color: 'var(--accent)' }} />
              <h3 className="text-[0.95rem] font-semibold">{group.title}</h3>
            </div>

            <ul className="mt-4 flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <li key={item} className="tag">
                  {item}
                </li>
              ))}
            </ul>

            {group.note ? (
              <p
                className="mt-4 border-t pt-3 text-[0.78rem] leading-snug"
                style={{ borderColor: 'var(--border)', color: 'var(--fg-subtle)' }}
              >
                {group.note}
              </p>
            ) : null}
          </section>
        ))}
      </div>
    </Section>
  );
}
