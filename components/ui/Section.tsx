import type { ReactNode } from 'react';

type SectionProps = {
  id: string;
  /** Two-digit section number shown in the eyebrow, e.g. "01". */
  index?: string;
  eyebrow: string;
  title: string;
  lede?: string;
  children: ReactNode;
  /** Applies the subtle alternate background used to separate major bands. */
  tinted?: boolean;
  className?: string;
};

/**
 * The one section shell used by every part of the page, so spacing, heading
 * hierarchy and rhythm stay identical throughout. Each section is a real
 * <section> with an accessible name, which is what lets screen readers and
 * browser reader modes present the page as a structured document.
 */
export default function Section({
  id,
  index,
  eyebrow,
  title,
  lede,
  children,
  tinted = false,
  className = '',
}: SectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={`section ${className}`}
      style={tinted ? { backgroundColor: 'var(--bg-subtle)' } : undefined}
    >
      <div className="container-academic">
        <header className="max-w-3xl">
          <p className="eyebrow">
            {index ? <span className="mr-2 opacity-60">{index}</span> : null}
            {eyebrow}
          </p>
          <h2 id={headingId} className="section-title">
            {title}
          </h2>
          {lede ? <p className="section-lede">{lede}</p> : null}
        </header>

        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
