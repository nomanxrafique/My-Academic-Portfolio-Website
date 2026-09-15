# Academic Portfolio — Muhammad Nauman Rafique

A static academic portfolio website presenting a BS Software Engineering graduate applying for
Master's programmes in Cybersecurity / Cyberspace Security.

The site is written for one specific reader: a professor, prospective supervisor, admissions
committee member, or CSC scholarship reviewer who has a minute or two. Everything that decides
whether they keep reading — name, degree, institution, academic direction, research interests, CV,
GitHub, email — is visible on the first screen.

---

## Table of contents

1. [Tech stack](#tech-stack)
2. [Installation](#installation)
3. [Local development](#local-development)
4. [Project structure](#project-structure)
5. [How to update your information](#how-to-update-your-information)
6. [How to add projects](#how-to-add-projects)
7. [How to add GitHub links](#how-to-add-github-links)
8. [How to replace the CV](#how-to-replace-the-cv)
9. [How to add certifications](#how-to-add-certifications)
10. [Changing the photo](#changing-the-photo)
11. [Deploying to Vercel](#deploying-to-vercel)
12. [Accessibility in mainland China](#accessibility-in-mainland-china)
13. [Security notes](#security-notes)
14. [Content rules](#content-rules)

---

## Tech stack

| Layer | Choice | Why |
| --- | --- | --- |
| Framework | Next.js 15 (App Router) | Static export, excellent Vercel support |
| Language | TypeScript (strict) | Catches data-shape mistakes before deploy |
| Styling | Tailwind CSS 3 + CSS custom properties | Tokens drive both light and dark themes |
| Icons | Lucide React | Only the eleven icons used are bundled |
| Fonts | Inter Variable + JetBrains Mono Variable, self-hosted | **No Google Fonts** — see [Accessibility in mainland China](#accessibility-in-mainland-china) |
| Output | Fully static (`output: 'export'`) | No server, no database, no API required |

There is no backend, no analytics, no tracking, and no third-party script of any kind. The
production page loads about 107 kB of JavaScript and makes zero external network requests.

---

## Installation

Requires **Node.js 18.18 or newer** (Node 20+ recommended).

```bash
npm install
```

## Local development

```bash
npm run dev
```

Open <http://localhost:3000>.

Other commands:

```bash
npm run build       # production build → ./out (static HTML/CSS/JS)
npm run typecheck   # TypeScript check with no emit
```

---

## Project structure

```text
app/
├── layout.tsx        # <html> shell, SEO metadata, fonts, theme no-flash script
├── page.tsx          # section order — rearrange sections here
├── globals.css       # design tokens (colours, spacing) + component primitives
└── icon.svg          # favicon

components/
├── Navbar.tsx            ├── Projects.tsx        (FYP + project grid)
├── Hero.tsx              ├── Certifications.tsx
├── About.tsx             ├── ResearchGoals.tsx
├── Research.tsx          ├── CV.tsx
├── ResearchDirection.tsx ├── GitHubSection.tsx
├── Skills.tsx            ├── Contact.tsx
├── Education.tsx         ├── Footer.tsx
├── Coursework.tsx        ├── ThemeToggle.tsx
└── ui/
    ├── Section.tsx   # shared section shell (heading, spacing, rhythm)
    └── Icon.tsx      # string → Lucide icon registry

data/
└── portfolio.ts      # ← EVERYTHING YOU EDIT LIVES HERE

public/
├── Muhammad-Nauman-Rafique-Academic-CV.pdf
├── robots.txt
└── images/
    ├── profile.jpg
    └── profile.webp
```

---

## How to update your information

**You only ever need to edit one file: `data/portfolio.ts`.**

It is divided into numbered blocks that match the sections of the page. Change a value, save, and
the site updates. You never need to touch a component.

```ts
export const profile = {
  fullName: 'Muhammad Nauman Rafique',
  shortName: 'M. Nauman Rafique',
  headline: 'BS Software Engineering | Cybersecurity Graduate Applicant',
  // ...
};
```

Anything written as `[Add ...]` is a placeholder waiting for you. Placeholders are deliberately
rendered in a dashed, muted style so you can spot them immediately on the live page.

### Adding your English test score

Most Chinese universities and CSC require one. It is hidden until you fill it in:

```ts
englishTest: { name: 'IELTS', score: 'Overall 6.5', date: 'March 2026' },
```

### Contact channels

Each field in the `contact` block renders a card in the Contact section. Set any of them to `null`
to remove that card — the layout closes up automatically, and falls back to showing your location
if fewer than four channels remain.

```ts
export const contact = {
  email: 'nomirafique2@gmail.com',
  github: 'https://github.com/nomanxrafique',
  githubHandle: 'nomanxrafique',
  phone: '+92 341 3368188',   // the tel: link is derived automatically
  wechat: 'naumanrafiq',      // many Chinese supervisors prefer WeChat to email
  wechatQr: { src: '/images/wechat-qr.png', alt: '...' },  // null hides the QR panel
};
```

Setting `wechat` gives WeChat its own panel with the scannable QR code beside the other contact
cards. To replace the QR, export a new one from **WeChat → Me → My QR Code**, crop it to the code
itself, and save it over `public/images/wechat-qr.png` (and `.webp`). The QR always renders on a
white tile, in both light and dark themes — scanners need the light quiet zone around the code.

---

## How to add projects

Open `data/portfolio.ts` and find the `projects` array. Replace a placeholder entry, or add a new
object:

```ts
{
  name: 'Network Traffic Anomaly Detector',
  category: 'Cybersecurity',
  description: 'What the project does, what problem it solves, and what you built.',
  technologies: ['Python', 'Scapy', 'Scikit-learn'],
  github: 'https://github.com/nomanxrafique/traffic-anomaly-detector',
  demo: null,
  // delete `placeholder: true`, or set it to false
}
```

`category` must be one of: `Cybersecurity`, `Artificial Intelligence`, `Machine Learning`,
`Software Engineering`, `Web Development`, `Data`. TypeScript will tell you if you mistype it.

**Delete any placeholder you do not fill in before sharing the site with a professor.**

### The Final Year Project

`finalYearProject` is a separate object with a richer structure — problem, solution, features,
contribution. Edit those fields directly.

---

## How to add GitHub links

Three places, all in `data/portfolio.ts`:

```ts
// 1. Your profile (navbar, hero, GitHub section, contact, footer)
export const contact = {
  github: 'https://github.com/nomanxrafique',
  githubHandle: 'nomanxrafique',
};

// 2. The Final Year Project repository
export const finalYearProject = {
  github: 'https://github.com/nomanxrafique/ARTIC-ESTATE-Undergraduate-Final-Year-Project',
  // set to null to hide the button
};

// 3. Each individual project
{ github: 'https://github.com/nomanxrafique/your-repo' }
```

Setting a repository field to `null` hides the link and shows a neutral "to be added" note instead
of a broken button.

---

## How to replace the CV

1. Put the new PDF in `public/`.
2. Update the `cv` block in `data/portfolio.ts`:

```ts
export const cv = {
  file: '/Muhammad-Nauman-Rafique-Academic-CV.pdf',
  downloadName: 'Muhammad-Nauman-Rafique-Academic-CV.pdf',
  lastUpdated: 'September 2026',
};
```

The CV section checks that the file exists before offering it. If the file is missing, it shows a
clean notice rather than a broken download link.

---

## How to add certifications

Append to the `certifications` array:

```ts
{
  name: 'CCNA',
  issuer: 'Cisco',
  date: '12 January 2027',
  credentialId: null,      // only if you actually have one
  credentialUrl: null,     // only if a public verification page exists
  featured: false,         // true gives the card an accent border
  description: 'One line on what the certification covers.',
}
```

Leave `credentialId` and `credentialUrl` as `null` unless you hold a real, verifiable record. The
card hides those rows automatically.

### Self-directed study

Anything you learned independently, with no issuing body and no certificate, belongs in the
separate `selfStudy` array — not in `certifications`:

```ts
export const selfStudy = [
  { topic: 'Frontend Web Development with React', detail: 'React fundamentals, Hooks, and Redux.' },
];
```

It renders as a distinct block below the certification cards, labelled so no certificate is
implied. This distinction matters: listing uncertified study among certifications invites an
admissions committee to ask for a credential that does not exist. Set the array to `[]` to remove
the block.

---

## Changing the photo

Replace `public/images/profile.jpg` (and `profile.webp`, or delete the `<source>` line in
`components/Hero.tsx`). Use a portrait around 660 px wide. Update the `aspectRatio` in `Hero.tsx`
if your image has a different shape.

To remove the photo entirely, set `photo: null` in `data/portfolio.ts`.

---

## Deploying to Vercel

### 1. Initialise git

```bash
git init
git add .
git commit -m "Initial academic portfolio"
```

### 2. Create a GitHub repository

Go to <https://github.com/new>. Name it something like `academic-portfolio`. Create it **empty** —
no README, no .gitignore, no licence.

### 3. Connect and push

```bash
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/academic-portfolio.git
git push -u origin main
```

### 4. Import into Vercel

1. Sign in at <https://vercel.com> with your GitHub account.
2. **Add New… → Project**.
3. Find your repository and click **Import**.
4. Vercel detects Next.js automatically. Leave every setting at its default:
   - Framework Preset: `Next.js`
   - Build Command: `next build`
   - Output Directory: *(leave blank)*
   - Install Command: `npm install`
5. Click **Deploy**.

### 5. Your URL

After roughly a minute you get `https://your-project-name.vercel.app`. Every push to `main`
redeploys automatically.

Put that URL into `data/portfolio.ts` so the SEO and Open Graph metadata are correct:

```ts
export const seo = {
  siteUrl: 'https://your-project-name.vercel.app',
};
```

Then commit and push again.

### Optional: the Vercel CLI

```bash
npm i -g vercel
vercel login
vercel          # preview deployment
vercel --prod   # production deployment
```

### Optional: a custom domain

In Vercel: **Project → Settings → Domains → Add**. A domain such as `naumanrafique.com` reads more
professionally in an email to a supervisor than a `.vercel.app` subdomain.

---

## Accessibility in mainland China

This matters more than anything else on this page. Your intended readers are in China.

**What this project already does:**

- **Fonts are self-hosted.** Google Fonts (`fonts.googleapis.com`, `fonts.gstatic.com`) is blocked
  in mainland China. A site that loads fonts from Google hangs for several seconds, or renders
  with fallback fonts, for every reader there. This project bundles Inter and JetBrains Mono
  locally via `@fontsource-variable`.
- **No external CDNs, analytics, embeds, or third-party scripts.** Nothing to block, nothing to
  time out.
- **Static output.** The whole site is HTML, CSS, and a small JavaScript bundle — it works on slow
  connections and can be hosted anywhere.

**What you should still check:**

- Vercel's edge network is reachable from China but can be slow. Before you send the link to a
  professor, ask someone in China to open it, or test it at a service such as
  <https://www.itdog.cn>.
- If it is too slow, the static export in `./out` can be uploaded to any host — including a
  China-based one — because it has no server-side dependencies. Run `npm run build` and upload the
  contents of `out/`.

---

## Security notes

This is a cybersecurity portfolio, so the project follows the practices it implies:

- No secrets, API keys, or credentials anywhere in the codebase.
- `.env*` files are git-ignored. If you ever add an API key, use an environment variable and add it
  in Vercel's dashboard under **Settings → Environment Variables** — never in the source.
- No contact form, so there is no form endpoint to abuse, no spam vector, and no third-party form
  service receiving visitor data. Contact is a plain `mailto:` link.
- Every external link uses `rel="noopener noreferrer"`.
- No `localStorage` beyond a single non-sensitive `theme` preference.
- `poweredByHeader` is disabled.

If you deploy somewhere that lets you set HTTP headers, add:

```text
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Content-Security-Policy: default-src 'self'; img-src 'self' data:; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline'
```

---

## Content rules

These are baked into the site and worth keeping:

1. **Nothing is fabricated.** No invented publications, awards, research positions, repositories,
   or credentials. Where information is missing, there is a visible placeholder instead.
2. **Language matches evidence.** The site says "Cybersecurity Graduate Applicant" and "research
   interests" — never "cybersecurity expert" or "research expertise".
3. **Future goals are labelled as future goals.** The Master's Research Goals section states
   explicitly that it describes planned study, not current expertise.
4. **No LinkedIn, and no marketing content.** GitHub is the only professional profile linked.
5. **Referees' contact details are not published.** Names and titles only, with "available on
   request" — publishing a professor's email address without their consent is poor practice.

---

## Licence

Personal portfolio. The content is the author's own; the code is free to adapt.
