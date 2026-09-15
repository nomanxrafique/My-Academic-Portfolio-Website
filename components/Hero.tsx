import {
  ArrowRight,
  Download,
  Github,
  GraduationCap,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from 'lucide-react';

import { about, contact, cv, profile, researchInterests } from '@/data/portfolio';

/**
 * The first screen. A professor may give this page 60–90 seconds, so
 * everything that decides whether they keep reading is here: name, degree,
 * institution, academic direction, research interests, CV, GitHub and email.
 */
export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="container-academic relative pb-16 pt-14 sm:pt-20 lg:pb-20 lg:pt-24">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start lg:gap-16">
          {/* ---------------------------------------------------------- Text */}
          <div className="max-w-2xl">
            <p className="eyebrow">Academic Portfolio</p>

            <h1 className="mt-4 text-[2.1rem] font-semibold leading-[1.12] sm:text-5xl">
              {profile.fullName}
            </h1>

            <p
              className="mt-4 text-base font-medium sm:text-lg"
              style={{ color: 'var(--fg-muted)' }}
            >
              {profile.headline}
            </p>

            {/* Quick facts — the four things a supervisor checks first. */}
            <dl className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.85rem]">
              <div className="flex items-center gap-2">
                <dt className="sr-only">Institution</dt>
                <GraduationCap size={15} style={{ color: 'var(--accent)' }} aria-hidden="true" />
                <dd style={{ color: 'var(--fg-muted)' }}>
                  {profile.universityShort} · Class of {profile.graduation}
                </dd>
              </div>
              <div className="flex items-center gap-2">
                <dt className="sr-only">Location</dt>
                <MapPin size={15} style={{ color: 'var(--accent)' }} aria-hidden="true" />
                <dd style={{ color: 'var(--fg-muted)' }}>{profile.location}</dd>
              </div>
            </dl>

            <p
              className="mt-6 max-w-prose text-[0.975rem] leading-relaxed"
              style={{ color: 'var(--fg-muted)' }}
            >
              {profile.summary}
            </p>

            {/* Research interests, visible without scrolling. */}
            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Research interests">
              {researchInterests.map((interest) => (
                <li key={interest.id}>
                  <a href={`#research`} className="tag tag-accent">
                    {interest.title}
                  </a>
                </li>
              ))}
            </ul>

            {/* Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#projects" className="btn btn-primary">
                View Projects
                <ArrowRight size={16} aria-hidden="true" />
              </a>
              <a href={cv.file} download={cv.downloadName} className="btn btn-secondary">
                <Download size={16} aria-hidden="true" />
                Download Academic CV
              </a>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-[0.85rem]">
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-medium transition-opacity hover:opacity-75"
                style={{ color: 'var(--fg-muted)' }}
              >
                <Github size={15} aria-hidden="true" />
                GitHub
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-2 font-mono transition-opacity hover:opacity-75"
                style={{ color: 'var(--fg-muted)' }}
              >
                <Mail size={15} aria-hidden="true" />
                {contact.email}
              </a>
              {contact.wechat ? (
                <span
                  className="inline-flex items-center gap-2 font-mono"
                  style={{ color: 'var(--fg-muted)' }}
                >
                  <MessageCircle size={15} aria-hidden="true" />
                  <span className="sr-only">WeChat: </span>
                  {contact.wechat}
                </span>
              ) : null}
              {contact.phone ? (
                <a
                  href={`tel:${contact.phone.replace(/[^\d+]/g, '')}`}
                  className="inline-flex items-center gap-2 font-mono transition-opacity hover:opacity-75"
                  style={{ color: 'var(--fg-muted)' }}
                >
                  <Phone size={15} aria-hidden="true" />
                  <span className="sr-only">Telephone: </span>
                  {contact.phone}
                </a>
              ) : null}
            </div>
          </div>

          {/* -------------------------------------------------------- Portrait */}
          {/* On narrow screens the portrait is deliberately small: the name and
              degree must still be visible without scrolling. */}
          {profile.photo ? (
            <aside className="order-first w-full max-w-[8.5rem] sm:max-w-[11rem] lg:order-none lg:w-[16.5rem] lg:max-w-none">
              <figure className="card !p-3">
                <picture>
                  <source srcSet="/images/profile.webp" type="image/webp" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={profile.photo.src}
                    alt={profile.photo.alt}
                    width={660}
                    height={833}
                    loading="eager"
                    decoding="async"
                    className="w-full rounded object-cover"
                    style={{ backgroundColor: 'var(--bg-inset)', aspectRatio: '660 / 833' }}
                  />
                </picture>
                <figcaption
                  className="mt-3 hidden px-1 pb-1 font-mono text-[0.7rem] leading-4 lg:block"
                  style={{ color: 'var(--fg-subtle)' }}
                >
                  {profile.degree}
                  <br />
                  {profile.universityShort}, {profile.graduation}
                </figcaption>
              </figure>

              {about.englishTest ? (
                <p
                  className="mt-3 text-center font-mono text-[0.72rem]"
                  style={{ color: 'var(--fg-subtle)' }}
                >
                  {about.englishTest.name} {about.englishTest.score}
                </p>
              ) : null}
            </aside>
          ) : null}
        </div>
      </div>
    </section>
  );
}
