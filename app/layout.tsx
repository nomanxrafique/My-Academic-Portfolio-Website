import type { Metadata, Viewport } from 'next';

// Self-hosted fonts. Nothing is loaded from Google Fonts or any external CDN —
// Google's font servers are unreachable from mainland China, and this site is
// written to be read by professors and committees there.
import '@fontsource-variable/inter';
import '@fontsource-variable/jetbrains-mono';

import './globals.css';
import { profile, seo } from '@/data/portfolio';

export const metadata: Metadata = {
  metadataBase: new URL(seo.siteUrl),
  title: {
    default: seo.title,
    template: `%s | ${profile.fullName}`,
  },
  description: seo.description,
  keywords: [...seo.keywords],
  authors: [{ name: profile.fullName }],
  creator: profile.fullName,
  applicationName: `${profile.fullName} — Academic Portfolio`,
  category: 'education',
  openGraph: {
    type: 'profile',
    locale: 'en_US',
    url: seo.siteUrl,
    title: seo.title,
    description: seo.description,
    siteName: `${profile.fullName} — Academic Portfolio`,
  },
  twitter: {
    card: 'summary_large_image',
    title: seo.title,
    description: seo.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: seo.siteUrl,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0d1521' },
  ],
  width: 'device-width',
  initialScale: 1,
};

/**
 * Applies the saved (or system) theme before first paint so the page never
 * flashes the wrong colour scheme. Kept deliberately tiny and inline — it is
 * the only blocking script on the page.
 */
const themeScript = `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;if(d)document.documentElement.classList.add('dark');document.documentElement.style.colorScheme=d?'dark':'light';}catch(e){}})();`;

/**
 * Structured data helps admissions and search systems parse who this page is
 * about. Only facts already visible on the page are described here.
 */
const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.fullName,
  jobTitle: 'Cybersecurity Graduate Applicant',
  nationality: profile.nationality,
  description: seo.description,
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: profile.university,
    url: profile.universityUrl,
  },
  knowsAbout: [
    'Cybersecurity',
    'Cyberspace Security',
    'AI Security',
    'Cloud Security',
    'Blockchain Security',
    'Applied Cryptography',
    'Secure Machine Learning',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
