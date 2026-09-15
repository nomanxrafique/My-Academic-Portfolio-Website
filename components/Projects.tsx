import { CircleDashed, ExternalLink, Github, Star } from 'lucide-react';

import Section from './ui/Section';
import { finalYearProject as fyp, projects } from '@/data/portfolio';

export default function Projects() {
  return (
    <Section
      id="projects"
      index="07"
      eyebrow="Projects"
      title="Projects"
      lede="Undergraduate and personal work. Each entry describes what was actually built and what my own contribution was."
    >
      {/* ================================================= Final Year Project */}
      <article className="card !p-0 overflow-hidden">
        <div
          className="flex flex-wrap items-center justify-between gap-3 border-b px-5 py-3.5 sm:px-7"
          style={{ backgroundColor: 'var(--bg-inset)', borderColor: 'var(--border)' }}
        >
          <p className="eyebrow flex items-center gap-2">
            <Star size={13} aria-hidden="true" />
            {fyp.kicker}
          </p>
          <span className="font-mono text-[0.75rem]" style={{ color: 'var(--fg-subtle)' }}>
            {fyp.period}
          </span>
        </div>

        <div className="px-5 py-6 sm:px-7 sm:py-8">
          <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">{fyp.title}</h3>

          <div className="mt-6 grid gap-6 lg:grid-cols-2 lg:gap-10">
            <div>
              <h4 className="eyebrow">Problem</h4>
              <p
                className="mt-2 text-[0.9rem] leading-relaxed"
                style={{ color: 'var(--fg-muted)' }}
              >
                {fyp.problem}
              </p>
            </div>
            <div>
              <h4 className="eyebrow">Approach</h4>
              <p
                className="mt-2 text-[0.9rem] leading-relaxed"
                style={{ color: 'var(--fg-muted)' }}
              >
                {fyp.solution}
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2 lg:gap-10">
            <div>
              <h4 className="eyebrow">Security &amp; engineering features</h4>
              <ul className="mt-3 space-y-2">
                {fyp.features.map((feature) => (
                  <li
                    key={feature}
                    className="relative pl-4 text-[0.875rem] leading-relaxed"
                    style={{ color: 'var(--fg-muted)' }}
                  >
                    <span
                      className="absolute left-0 top-[0.6em] h-1 w-1 rounded-full"
                      style={{ backgroundColor: 'var(--accent)' }}
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="eyebrow">My contribution</h4>
              <p
                className="mt-3 text-[0.875rem] leading-relaxed"
                style={{ color: 'var(--fg-muted)' }}
              >
                {fyp.contribution}
              </p>

              <h4 className="eyebrow mt-7">Technologies</h4>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {fyp.technologies.map((tech) => (
                  <li key={tech} className="tag">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Links */}
          <div
            className="mt-8 flex flex-wrap items-center gap-3 border-t pt-6"
            style={{ borderColor: 'var(--border)' }}
          >
            {fyp.github ? (
              <a
                href={fyp.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <Github size={15} aria-hidden="true" />
                View Repository
              </a>
            ) : (
              <span
                className="inline-flex items-center gap-2 rounded-md border border-dashed px-3 py-2 font-mono text-[0.75rem]"
                style={{ borderColor: 'var(--border-strong)', color: 'var(--fg-subtle)' }}
              >
                <CircleDashed size={14} aria-hidden="true" />
                {fyp.repositoryNote}
              </span>
            )}

            {fyp.demo ? (
              <a
                href={fyp.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <ExternalLink size={15} aria-hidden="true" />
                Live Demo
              </a>
            ) : null}
          </div>
        </div>
      </article>

      {/* ====================================================== Other projects */}
      <h3 className="mt-14 text-[1.05rem] font-semibold">Other Projects</h3>

      <ul className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => {
          const isPlaceholder = project.placeholder === true;

          return (
            <li
              key={`${project.name}-${i}`}
              className={`card flex flex-col ${isPlaceholder ? 'placeholder-block' : 'card-interactive'}`}
            >
              <div className="flex items-start justify-between gap-3">
                <h4
                  className="text-[0.98rem] font-semibold"
                  style={isPlaceholder ? { color: 'var(--fg-subtle)' } : undefined}
                >
                  {project.name}
                </h4>
                {isPlaceholder ? (
                  <CircleDashed
                    size={15}
                    style={{ color: 'var(--fg-subtle)' }}
                    aria-label="Placeholder entry"
                  />
                ) : null}
              </div>

              <p className="mt-2">
                <span className="tag tag-accent">{project.category}</span>
              </p>

              <p
                className="mt-3.5 flex-1 text-[0.865rem] leading-relaxed"
                style={{ color: 'var(--fg-muted)' }}
              >
                {project.description}
              </p>

              <ul className="mt-4 flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <li key={tech} className="tag">
                    {tech}
                  </li>
                ))}
              </ul>

              <div
                className="mt-4 flex items-center gap-4 border-t pt-4 text-[0.8rem]"
                style={{ borderColor: 'var(--border)' }}
              >
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-medium transition-opacity hover:opacity-70"
                    style={{ color: 'var(--accent)' }}
                  >
                    <Github size={14} aria-hidden="true" />
                    Repository
                  </a>
                ) : (
                  <span className="font-mono text-[0.72rem]" style={{ color: 'var(--fg-subtle)' }}>
                    [Add GitHub URL]
                  </span>
                )}

                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-medium transition-opacity hover:opacity-70"
                    style={{ color: 'var(--accent)' }}
                  >
                    <ExternalLink size={14} aria-hidden="true" />
                    Demo
                  </a>
                ) : null}
              </div>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
