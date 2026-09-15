/**
 * Builds a single self-contained HTML preview from the static export in ./out.
 *
 * Why this exists: the real site is a Next.js app that needs `npm install` and
 * a build before you can look at it. This script flattens the exported page
 * into one HTML file — CSS inlined, fonts embedded as data URIs, images
 * embedded, and a few lines of plain JavaScript replacing React for the theme
 * toggle and mobile menu — so the design can be opened and shared directly.
 *
 * The preview is a faithful copy of the real markup and stylesheet. It is a
 * viewing convenience, not the deliverable: deploy the Next.js project itself.
 *
 * Usage:  npm run build && node scripts/build-preview.mjs
 */

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const out = join(root, 'out');

const html = readFileSync(join(out, 'index.html'), 'utf8');

/* ---------------------------------------------------------------- title --- */

const title = (html.match(/<title>([^<]*)<\/title>/) ?? [, 'Academic Portfolio'])[1];

/* ------------------------------------------------------------------ CSS --- */

const cssHrefs = [...html.matchAll(/<link[^>]+rel="stylesheet"[^>]+href="([^"]+)"/g)].map(
  (m) => m[1],
);

let css = cssHrefs
  .map((href) => readFileSync(join(out, href.replace(/^\//, '')), 'utf8'))
  .join('\n');

// Inline Latin font subsets as data URIs; drop the other writing systems so the
// preview stays small. The real build serves every subset as a separate file.
css = css.replace(/@font-face\s*{[^}]*}/g, (block) => {
  const url = (block.match(/url\(([^)]+)\)/) ?? [])[1];
  if (!url) return block;

  const path = url.replace(/["']/g, '').replace(/^\//, '');
  if (!/latin/.test(path)) return ''; // non-Latin subset — not needed here

  const data = readFileSync(join(out, path)).toString('base64');
  return block.replace(url, `data:font/woff2;base64,${data}`);
});

/* ----------------------------------------------------------------- body --- */

let body = (html.match(/<body[^>]*>([\s\S]*)<\/body>/) ?? [, ''])[1];

// Remove every Next.js script — React is not used in the preview.
body = body.replace(/<script[\s\S]*?<\/script>/g, '');
body = body.replace(/<link[^>]*>/g, '');

/* --------------------------------------------------------------- assets --- */

const inlineImage = (path, mime) =>
  `data:${mime};base64,${readFileSync(join(out, path)).toString('base64')}`;

body = body
  .replace(/\/images\/profile\.webp/g, inlineImage('images/profile.webp', 'image/webp'))
  .replace(/\/images\/profile\.jpg/g, inlineImage('images/profile.jpg', 'image/jpeg'))
  .replace(/\/images\/wechat-qr\.webp/g, inlineImage('images/wechat-qr.webp', 'image/webp'))
  .replace(/\/images\/wechat-qr\.png/g, inlineImage('images/wechat-qr.png', 'image/png'))
  // The CV is published beside the page, so make its path relative.
  .replace(/"\/Muhammad-Nauman-Rafique-Academic-CV\.pdf"/g, '"Muhammad-Nauman-Rafique-Academic-CV.pdf"');

/* ------------------------------------------------- behaviour without React --- */

const script = `
(function () {
  // Apply a theme before the rest of the page renders. Precedence: an explicit
  // theme set by the host on the root element, then the visitor's own choice on
  // this page, then the operating system setting.
  var root = document.documentElement;

  function resolve() {
    var host = root.getAttribute('data-theme');
    if (host === 'dark' || host === 'light') return host === 'dark';
    try {
      var stored = localStorage.getItem('theme');
      if (stored) return stored === 'dark';
    } catch (e) {}
    return matchMedia('(prefers-color-scheme: dark)').matches;
  }

  function apply(dark) {
    root.classList.toggle('dark', dark);
    root.style.colorScheme = dark ? 'dark' : 'light';
  }

  apply(resolve());

  // Follow the host if it changes the theme after load.
  try {
    new MutationObserver(function () { apply(resolve()); })
      .observe(root, { attributes: true, attributeFilter: ['data-theme'] });
  } catch (e) {}

  function ready(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  ready(function () {
    // Theme toggle
    var toggle = document.querySelector('[data-theme-toggle]');
    if (toggle) {
      toggle.addEventListener('click', function () {
        var dark = !root.classList.contains('dark');
        root.setAttribute('data-theme', dark ? 'dark' : 'light');
        apply(dark);
        try { localStorage.setItem('theme', dark ? 'dark' : 'light'); } catch (e) {}
      });
    }

    // Mobile navigation
    var menuButton = document.querySelector('[data-menu-toggle]');
    var menu = document.querySelector('[data-mobile-menu]');
    if (menuButton && menu) {
      var setOpen = function (open) {
        menu.hidden = !open;
        menuButton.setAttribute('aria-expanded', String(open));
        menuButton.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
        document.body.style.overflow = open ? 'hidden' : '';
      };
      menuButton.addEventListener('click', function () {
        setOpen(menu.hidden);
      });
      menu.addEventListener('click', function (e) {
        if (e.target.closest('a')) setOpen(false);
      });
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && !menu.hidden) setOpen(false);
      });
    }

    // Sticky header background on scroll
    var header = document.querySelector('[data-header]');
    if (header) {
      var onScroll = function () {
        var scrolled = window.scrollY > 8 || (menu && !menu.hidden);
        header.style.backgroundColor = scrolled ? 'var(--bg)' : 'transparent';
        header.style.borderBottom = '1px solid ' + (scrolled ? 'var(--border)' : 'transparent');
        header.style.backdropFilter = scrolled ? 'saturate(180%) blur(8px)' : '';
      };
      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });
    }
  });
})();
`;

/* ---------------------------------------------------------------- output --- */

const preview = `<meta charset="utf-8">
<title>${title}</title>
<style>
${css}
</style>
<script>${script}</script>
${body}
`;

mkdirSync(join(root, 'preview'), { recursive: true });
writeFileSync(join(root, 'preview', 'index.html'), preview, 'utf8');

console.log(
  `preview/index.html written — ${(Buffer.byteLength(preview) / 1024).toFixed(0)} kB`,
);
