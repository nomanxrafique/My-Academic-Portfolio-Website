import Section from './ui/Section';
import { coursework, type Course } from '@/data/portfolio';

const AREAS: Course['area'][] = ['Computing', 'Security & Systems', 'Mathematics & Statistics'];

export default function Coursework() {
  return (
    <Section
      id="coursework"
      index="06"
      eyebrow="Coursework"
      title="Relevant Coursework"
      lede="Undergraduate courses most relevant to graduate study in cybersecurity. Grades are available on the official academic transcript."
      tinted
    >
      <div className="grid gap-6 md:grid-cols-3">
        {AREAS.map((area) => {
          const courses = coursework.filter((course) => course.area === area);
          if (courses.length === 0) return null;

          return (
            <section key={area} className="card" aria-label={`${area} coursework`}>
              <h3
                className="font-mono text-[0.72rem] uppercase tracking-wider"
                style={{ color: 'var(--accent)' }}
              >
                {area}
              </h3>

              <ul className="mt-4 space-y-2.5">
                {courses.map((course) => (
                  <li
                    key={course.name}
                    className="relative pl-4 text-[0.875rem] leading-snug"
                    style={{ color: 'var(--fg-muted)' }}
                  >
                    <span
                      className="absolute left-0 top-[0.55em] h-1 w-1 rounded-full"
                      style={{ backgroundColor: 'var(--fg-subtle)' }}
                      aria-hidden="true"
                    />
                    {course.name}
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
    </Section>
  );
}
