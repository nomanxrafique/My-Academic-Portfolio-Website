/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // The site is fully static. `output: 'export'` produces a plain HTML/CSS/JS
  // bundle in ./out that can be hosted anywhere — Vercel, GitHub Pages, or a
  // China-based host. Remove this line if you ever add server-side features.
  output: 'export',

  images: {
    // Required for `output: 'export'` — images are served as-is.
    unoptimized: true,
  },

  // Security headers. These only take effect on hosts that read next.config
  // (e.g. Vercel without static export). For static hosting, configure the
  // equivalent headers at the host level — see README.
  poweredByHeader: false,
};

export default nextConfig;
