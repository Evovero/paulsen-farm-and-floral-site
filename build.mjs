// Paulsen Farm and Floral — static site generator
// SCAFFOLD BUILD, 2026-08-16. Zero dependencies. Mirrors the EvoVero/Cruz Control/Omaha
// Masonry generator conventions (see [Website]/Resources/Static Site + Autoblog SOP.md)
// but deliberately small: three pages only, because the business model, products, address
// decision, and phone number are all still pending the discovery call. Do not add
// service/location pages or fabricated claims here — see src/data/content.mjs header.

import fs from "node:fs";
import path from "node:path";
import { site, nav } from "./src/data/site.mjs";
import { home, about, contact } from "./src/data/content.mjs";

const OUT = "dist";
const YEAR = site.year;

// ---------- tiny helpers ----------
function esc(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  }[c]));
}

function writePage(routePath, html) {
  const dir = routePath === "/" ? OUT : path.join(OUT, routePath.replace(/^\//, "").replace(/\/$/, ""));
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), html, "utf8");
}

function navHtml(activeHref) {
  const links = nav
    .map(
      (n) =>
        `<a href="${n.href}"${n.href === activeHref ? ' aria-current="page"' : ""}>${esc(n.label)}</a>`
    )
    .join("\n          ");
  return `
    <header class="nav">
      <div class="nav__inner">
        <a class="nav__brand" href="/">${esc(site.name)}</a>
        <button class="nav__toggle hamb" aria-expanded="false" aria-label="Open menu">
          <span></span><span></span><span></span>
        </button>
        <nav class="nav__links">
          ${links}
        </nav>
      </div>
    </header>`;
}

function footerHtml() {
  return `
    <footer class="footer">
      <div class="footer__inner">
        <p>&copy; ${YEAR} ${esc(site.name)}. Serving ${esc(site.region)}.</p>
      </div>
    </footer>`;
}

// Organization schema, deliberately without a street address or phone — neither has
// been approved for public release yet (see client-profile.md "visitor and address
// question"). Locality only, which is already public via the Iowa SOS filing.
function orgSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    legalName: site.legalName,
    url: site.domain,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.city,
      addressRegion: site.state,
      addressCountry: "US",
    },
  };
}

function layout({ pageTitle, description, routePath, bodyHtml, schema }) {
  const canonical = site.domain.replace(/\/$/, "") + routePath;
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(pageTitle)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${canonical}">
<meta property="og:type" content="website">
<meta property="og:title" content="${esc(pageTitle)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${canonical}">
<link rel="icon" href="/assets/favicon.svg" type="image/svg+xml">
<link rel="stylesheet" href="/styles.css">
<script type="application/ld+json">${JSON.stringify(schema)}</script>
</head>
<body>
${navHtml(routePath)}
<main>
${bodyHtml}
</main>
${footerHtml()}
<script src="/site.js" defer></script>
</body>
</html>`;
}

// ---------- pages ----------
function renderHome() {
  const body = `
    <section class="hero hero--simple">
      <p class="eyebrow">${esc(home.eyebrow)}</p>
      <h1>${esc(home.h1)}</h1>
      <p class="sub">${esc(home.sub)}</p>
      <p>${esc(home.body)}</p>
      <a class="btn" href="${home.ctaHref}">${esc(home.ctaLabel)}</a>
    </section>`;
  return layout({
    pageTitle: home.title,
    description: home.description,
    routePath: "/",
    bodyHtml: body,
    schema: orgSchema(),
  });
}

function renderAbout() {
  const paras = about.paragraphs.map((p) => `<p>${esc(p)}</p>`).join("\n      ");
  const body = `
    <section class="page">
      <h1>${esc(about.h1)}</h1>
      ${paras}
    </section>`;
  return layout({
    pageTitle: about.title,
    description: about.description,
    routePath: "/about/",
    bodyHtml: body,
    schema: orgSchema(),
  });
}

function renderContact() {
  const body = `
    <section class="page">
      <h1>${esc(contact.h1)}</h1>
      <p>${esc(contact.intro)}</p>
      <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" class="form">
        <input type="hidden" name="form-name" value="contact">
        <p class="hp"><label>Don't fill this out: <input name="bot-field"></label></p>
        <div class="field">
          <label for="name">Name</label>
          <input type="text" id="name" name="name" required>
        </div>
        <div class="field">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" required>
        </div>
        <div class="field">
          <label for="message">Message</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        <button class="btn" type="submit">Send</button>
        <p class="disclaimer">${esc(contact.disclaimer)}</p>
      </form>
    </section>`;
  return layout({
    pageTitle: contact.title,
    description: contact.description,
    routePath: "/contact/",
    bodyHtml: body,
    schema: orgSchema(),
  });
}

// ---------- sitemap / robots / llms.txt ----------
const routes = ["/", "/about/", "/contact/"];

function buildSitemap() {
  const urls = routes
    .map((r) => `  <url><loc>${site.domain.replace(/\/$/, "")}${r}</loc></url>`)
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}

function buildRobots() {
  return `User-agent: *
Allow: /

Sitemap: ${site.domain.replace(/\/$/, "")}/sitemap.xml`;
}

function buildLlmsTxt() {
  return `# ${site.name}

> ${site.tagline}

${site.legalName}, based near ${site.city}, ${site.state}. This is an early scaffold site.
Full details on products and the business model are pending, launching in stages
through the 2026 season.

## Pages

- [Home](${site.domain}/): overview
- [About](${site.domain}/about/): who we are
- [Contact](${site.domain}/contact/): get in touch
`;
}

// ---------- run ----------
fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT, { recursive: true });

writePage("/", renderHome());
writePage("/about/", renderAbout());
writePage("/contact/", renderContact());

fs.writeFileSync(path.join(OUT, "sitemap.xml"), buildSitemap(), "utf8");
fs.writeFileSync(path.join(OUT, "robots.txt"), buildRobots(), "utf8");
fs.writeFileSync(path.join(OUT, "llms.txt"), buildLlmsTxt(), "utf8");

// copy public/ assets file-by-file (never a recursive dir copy, per SOP gotcha)
function copyFile(rel) {
  const src = path.join("public", rel);
  if (!fs.existsSync(src)) return;
  const dest = path.join(OUT, rel);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(src, dest);
}
copyFile("styles.css");
copyFile("site.js");
copyFile("assets/favicon.svg");

console.log(`Built ${routes.length} pages to ${OUT}/`);
