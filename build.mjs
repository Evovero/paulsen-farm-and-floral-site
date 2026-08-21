// Paulsen Farm and Floral - static site generator
// FIRST REAL CONTENT BUILD, 2026-08-21. Zero dependencies, same conventions as the
// EvoVero / Cruz Control / Omaha Masonry generators (see [Website]/Resources/Static Site
// + Autoblog SOP.md). Six pages: home, three service pages, story, contact.
//
// Everything renderable comes from src/data/*.mjs. Do not write copy into this file.

import fs from "node:fs";
import path from "node:path";
import { site, nav } from "./src/data/site.mjs";
import { home, about, services, contact } from "./src/data/content.mjs";

const OUT = "dist";
const YEAR = site.year;
const BASE = site.domain.replace(/\/$/, "");

// ---------- tiny helpers ----------
function esc(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  }[c]));
}

function slugId(s) {
  return String(s).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function writePage(routePath, html) {
  const dir = routePath === "/" ? OUT : path.join(OUT, routePath.replace(/^\//, "").replace(/\/$/, ""));
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), html, "utf8");
}

// ---------- decorative art (inline SVG, no image files) ----------
// The client has no photography yet. Instead of stock imagery that would undercut a
// brand built on "these specific people", the visual layer is drawn line art.
function fieldArt() {
  return `
  <svg class="art art--field" viewBox="0 0 1200 260" preserveAspectRatio="xMidYMax slice" role="presentation" focusable="false" aria-hidden="true">
    <path d="M0 190 C 180 150, 320 214, 520 182 C 720 150, 880 206, 1200 168 L1200 260 L0 260 Z" class="art__hill art__hill--back"/>
    <path d="M0 224 C 220 194, 420 240, 640 214 C 860 188, 1010 234, 1200 208 L1200 260 L0 260 Z" class="art__hill art__hill--front"/>
    <g class="art__stalks">
      ${Array.from({ length: 26 }, (_, i) => {
        const x = 24 + i * 45;
        const h = 26 + ((i * 37) % 30);
        return `<path d="M${x} 224 C ${x - 5} ${224 - h / 2}, ${x + 4} ${224 - h / 1.4}, ${x} ${224 - h}"/><circle cx="${x}" cy="${224 - h}" r="3.2"/>`;
      }).join("")}
    </g>
    <circle class="art__sun" cx="700" cy="66" r="40"/>
  </svg>`;
}

function stemArt() {
  return `
  <svg class="art art--stem" viewBox="0 0 120 320" role="presentation" focusable="false" aria-hidden="true">
    <path class="art__line" d="M60 320 C 60 240, 52 190, 60 120 C 66 74, 60 40, 60 14"/>
    ${[
      "M60 250 C 26 240, 14 214, 20 194 C 44 194, 58 218, 60 250 Z",
      "M60 200 C 94 190, 106 164, 100 144 C 76 144, 62 168, 60 200 Z",
      "M60 154 C 28 146, 18 122, 24 104 C 46 104, 58 126, 60 154 Z",
    ].map((d) => `<path class="art__leaf" d="${d}"/>`).join("")}
    <g class="art__bloom">
      ${Array.from({ length: 7 }, (_, i) => {
        const a = (Math.PI * 2 * i) / 7;
        const cx = 60 + Math.cos(a) * 15;
        const cy = 26 + Math.sin(a) * 15;
        return `<ellipse cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" rx="9" ry="13" transform="rotate(${((a * 180) / Math.PI + 90).toFixed(1)} ${cx.toFixed(1)} ${cy.toFixed(1)})"/>`;
      }).join("")}
      <circle class="art__center" cx="60" cy="26" r="8"/>
    </g>
  </svg>`;
}

function ruleArt() {
  return `
  <svg class="rule" viewBox="0 0 240 16" role="presentation" focusable="false" aria-hidden="true">
    <line x1="0" y1="8" x2="98" y2="8"/>
    <line x1="142" y1="8" x2="240" y2="8"/>
    <path d="M120 2 C 128 8, 128 8, 120 14 C 112 8, 112 8, 120 2 Z"/>
  </svg>`;
}

// ---------- chrome ----------
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
        <a class="nav__brand" href="/">
          <span class="nav__brand-name">Paulsen</span>
          <span class="nav__brand-sub">Farm and Floral</span>
        </a>
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
  const links = nav.map((n) => `<a href="${n.href}">${esc(n.label)}</a>`).join("\n            ");
  return `
    <footer class="footer">
      <div class="footer__inner">
        <div class="footer__brand">
          <p class="footer__name">Paulsen Farm and Floral</p>
          <p class="footer__tag">${esc(site.tagline)}</p>
          <p class="footer__meta">${esc(site.region)}. Family on this ground since ${esc(site.founded)}.</p>
        </div>
        <nav class="footer__nav">
          ${links}
        </nav>
      </div>
      <div class="footer__base">
        <p>&copy; ${YEAR} ${esc(site.legalName)}.</p>
      </div>
    </footer>`;
}

function ctaHtml({ heading, body, label, href, side }) {
  return `
    <section class="cta" data-side="${side || "farm"}">
      ${ruleArt()}
      <h2>${esc(heading)}</h2>
      <p>${esc(body)}</p>
      <a class="btn" href="${href}">${esc(label)}</a>
    </section>`;
}

// ---------- schema ----------
// Organization only, deliberately without a street address or phone: neither is approved
// for public release. Locality is already public via the Iowa SOS filing.
function orgSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    legalName: site.legalName,
    url: BASE,
    description: site.tagline,
    foundingDate: site.founded,
    areaServed: [
      { "@type": "City", name: "Atlantic" },
      { "@type": "City", name: "Des Moines" },
      { "@type": "City", name: "Omaha" },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: site.city,
      addressRegion: site.state,
      addressCountry: "US",
    },
  };
}

function breadcrumbSchema(name, routePath) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE + "/" },
      { "@type": "ListItem", position: 2, name, item: BASE + routePath },
    ],
  };
}

function faqSchema(faq) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

function serviceSchema(svc) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: svc.h1,
    serviceType: svc.navLabel,
    url: BASE + svc.slug,
    description: svc.description,
    provider: {
      "@type": "Organization",
      name: site.name,
      url: BASE,
    },
    areaServed: [
      { "@type": "City", name: "Atlantic" },
      { "@type": "City", name: "Des Moines" },
      { "@type": "City", name: "Omaha" },
      { "@type": "City", name: "Council Bluffs" },
    ],
  };
}

// ---------- layout ----------
function layout({ pageTitle, description, routePath, bodyHtml, schemas, side, noindex }) {
  const canonical = BASE + routePath;
  const robots = noindex ? '\n<meta name="robots" content="noindex, follow">' : "";
  const blocks = schemas
    .map((s) => `<script type="application/ld+json">${JSON.stringify(s)}</script>`)
    .join("\n");
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(pageTitle)}</title>
<meta name="description" content="${esc(description)}">${robots}
<link rel="canonical" href="${canonical}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${esc(site.name)}">
<meta property="og:title" content="${esc(pageTitle)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${canonical}">
<meta name="twitter:card" content="summary">
<meta name="theme-color" content="#17201A">
<link rel="icon" href="/assets/favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700&family=Archivo:wght@400;500;600&display=swap">
<link rel="stylesheet" href="/styles.css">
${blocks}
</head>
<body data-side="${side || "farm"}">
${navHtml(routePath)}
<main>
${bodyHtml}
</main>
${footerHtml()}
<script src="/site.js" defer></script>
</body>
</html>`;
}

// ---------- shared page blocks ----------
function sectionListHtml(block, cls) {
  const items = block.items
    .map(
      (it) => `
        <li class="${cls}__item">
          <h3>${esc(it.h3)}</h3>
          <p>${esc(it.body)}</p>
        </li>`
    )
    .join("");
  return `
    <section class="band ${cls}">
      <h2>${esc(block.h2)}</h2>
      <ul class="${cls}__list">${items}
      </ul>
    </section>`;
}

function stepsHtml(block) {
  const items = block.steps
    .map(
      (s, i) => `
        <li class="steps__item">
          <span class="steps__num">${i + 1}</span>
          <div>
            <h3>${esc(s.h3)}</h3>
            <p>${esc(s.body)}</p>
          </div>
        </li>`
    )
    .join("");
  return `
    <section class="band steps">
      <h2>${esc(block.h2)}</h2>
      <ol class="steps__list">${items}
      </ol>
    </section>`;
}

function faqHtml(faq) {
  const items = faq
    .map(
      (f) => `
        <div class="faq__item">
          <h3 id="q-${slugId(f.q)}">${esc(f.q)}</h3>
          <p>${esc(f.a)}</p>
        </div>`
    )
    .join("");
  return `
    <section class="band faq">
      <h2>Questions people ask</h2>
      <div class="faq__list">${items}
      </div>
    </section>`;
}

function crossLinksHtml(links) {
  const items = links
    .map((l) => `<li><a href="${l.href}">${esc(l.label)}</a></li>`)
    .join("\n        ");
  return `
    <section class="band elsewhere">
      <h2>Elsewhere on the farm</h2>
      <ul class="elsewhere__list">
        ${items}
      </ul>
    </section>`;
}

// ---------- pages ----------
function renderHome() {
  const sides = home.sides
    .map(
      (s) => `
        <article class="split__card" data-side="${s.side}">
          <p class="eyebrow">${esc(s.eyebrow)}</p>
          <h3>${esc(s.h3)}</h3>
          <p>${esc(s.body)}</p>
          <a class="link-arrow" href="${s.href}">${esc(s.linkLabel)}</a>
        </article>`
    )
    .join("");

  const now = home.now
    .map(
      (n) => `
        <article class="now__card" data-side="${n.side}">
          <p class="now__when">${esc(n.when)}</p>
          <h3>${esc(n.what)}</h3>
          <p>${esc(n.body)}</p>
          <a class="link-arrow" href="${n.href}">${esc(n.linkLabel)}</a>
        </article>`
    )
    .join("");

  const lead = home.lead.map((p) => `<p>${esc(p)}</p>`).join("\n        ");
  const story = home.storyBody.map((p) => `<p>${esc(p)}</p>`).join("\n        ");

  const body = `
    <section class="hero">
      <div class="hero__text">
        <p class="eyebrow">${esc(home.eyebrow)}</p>
        <h1>${esc(home.h1)}</h1>
        <p class="sub">${esc(home.sub)}</p>
        <div class="hero__actions">
          <a class="btn" href="${home.ctaHref}">${esc(home.ctaLabel)}</a>
          <a class="btn btn--ghost" href="/about/">Our story</a>
        </div>
      </div>
      <div class="hero__art">${stemArt()}</div>
      ${fieldArt()}
    </section>

    <section class="band lead">
      ${lead}
    </section>

    <section class="band split">
      <div class="split__grid">${sides}
      </div>
    </section>

    <section class="band now">
      <h2>${esc(home.nowHeading)}</h2>
      <p class="band__intro">${esc(home.nowIntro)}</p>
      <div class="now__grid">${now}
      </div>
    </section>

    <section class="quote">
      ${stemArt()}
      <blockquote>
        <p>${esc(home.quote)}</p>
        <cite>${esc(home.quoteAttrib)}</cite>
      </blockquote>
    </section>

    <section class="band story-teaser">
      <h2>${esc(home.storyHeading)}</h2>
      ${story}
      <a class="link-arrow" href="/about/">${esc(home.storyLink)}</a>
    </section>

    ${ctaHtml({ heading: home.ctaHeading, body: home.ctaBody, label: home.ctaLabel, href: home.ctaHref, side: "farm" })}`;

  return layout({
    pageTitle: home.title,
    description: home.description,
    routePath: "/",
    bodyHtml: body,
    schemas: [orgSchema()],
    side: "farm",
  });
}

function renderAbout() {
  const sections = about.sections
    .map(
      (s) => `
      <section class="band prose">
        <h2>${esc(s.h2)}</h2>
        ${s.paragraphs.map((p) => `<p>${esc(p)}</p>`).join("\n        ")}
      </section>`
    )
    .join("");

  const body = `
    <section class="pagehead" data-side="farm">
      <p class="eyebrow">${esc(about.eyebrow)}</p>
      <h1>${esc(about.h1)}</h1>
      <p class="sub">${esc(about.intro)}</p>
      ${ruleArt()}
    </section>
    ${sections}
    ${ctaHtml({ heading: about.ctaHeading, body: about.ctaBody, label: about.ctaLabel, href: about.ctaHref, side: "floral" })}`;

  return layout({
    pageTitle: about.title,
    description: about.description,
    routePath: "/about/",
    bodyHtml: body,
    schemas: [orgSchema(), breadcrumbSchema("Our Story", "/about/")],
    side: "farm",
  });
}

function renderService(svc) {
  const intro = svc.intro.map((p) => `<p>${esc(p)}</p>`).join("\n        ");
  const context = svc.context.paragraphs.map((p) => `<p>${esc(p)}</p>`).join("\n        ");

  const body = `
    <section class="pagehead" data-side="${svc.side}">
      <p class="eyebrow">${esc(svc.eyebrow)}</p>
      <h1>${esc(svc.h1)}</h1>
      <p class="season">${esc(svc.seasonNote)}</p>
      ${ruleArt()}
    </section>

    <section class="band lead">
      ${intro}
    </section>

    ${sectionListHtml(svc.included, "included")}
    ${stepsHtml(svc.process)}

    <section class="band prose">
      <h2>${esc(svc.context.h2)}</h2>
      ${context}
    </section>

    ${faqHtml(svc.faq)}
    ${crossLinksHtml(svc.crossLinks)}
    ${ctaHtml({ heading: svc.ctaHeading, body: svc.ctaBody, label: svc.ctaLabel, href: svc.ctaHref, side: svc.side })}`;

  return layout({
    pageTitle: svc.title,
    description: svc.description,
    routePath: svc.slug,
    bodyHtml: body,
    schemas: [
      orgSchema(),
      serviceSchema(svc),
      faqSchema(svc.faq),
      breadcrumbSchema(svc.navLabel, svc.slug),
    ],
    side: svc.side,
  });
}

function renderContact() {
  const intro = contact.intro.map((p) => `<p>${esc(p)}</p>`).join("\n        ");
  const checks = contact.interests
    .map(
      (label) => `
          <label class="check">
            <input type="checkbox" name="interests[]" value="${esc(label)}">
            <span>${esc(label)}</span>
          </label>`
    )
    .join("");

  const body = `
    <section class="pagehead" data-side="floral">
      <p class="eyebrow">${esc(contact.eyebrow)}</p>
      <h1>${esc(contact.h1)}</h1>
      ${ruleArt()}
    </section>

    <section class="band lead">
      ${intro}
    </section>

    <section class="band formwrap">
      <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" action="/thankyou/" class="form">
        <input type="hidden" name="form-name" value="contact">
        <p class="hp"><label>Do not fill this out: <input name="bot-field"></label></p>
        <div class="field">
          <label for="name">Your name</label>
          <input type="text" id="name" name="name" autocomplete="name" required>
        </div>
        <div class="field">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" autocomplete="email" required>
        </div>
        <div class="field">
          <label for="phone">Phone, if you would rather we call</label>
          <input type="tel" id="phone" name="phone" autocomplete="tel">
        </div>
        <fieldset class="field field--checks">
          <legend>${esc(contact.interestsLabel)}</legend>
          ${checks}
        </fieldset>
        <div class="field">
          <label for="message">${esc(contact.messageLabel)}</label>
          <p class="hint">${esc(contact.messageHint)}</p>
          <textarea id="message" name="message" rows="5"></textarea>
        </div>
        <button class="btn" type="submit">Join the list</button>
        <p class="disclaimer">${esc(contact.disclaimer)}</p>
      </form>
      <aside class="aside">
        <h2>${esc(contact.asideHeading)}</h2>
        <p>${esc(contact.asideBody)}</p>
      </aside>
    </section>`;

  return layout({
    pageTitle: contact.title,
    description: contact.description,
    routePath: "/contact/",
    bodyHtml: body,
    schemas: [orgSchema(), breadcrumbSchema("Contact", "/contact/")],
    side: "floral",
  });
}

function renderThankYou() {
  const body = `
    <section class="pagehead" data-side="farm">
      <p class="eyebrow">Thank you</p>
      <h1>You are on the list</h1>
      ${ruleArt()}
    </section>
    <section class="band lead">
      <p>Thanks for getting in touch. We read everything that comes through here, and you will hear back from us directly rather than from an automated sequence.</p>
      <p>In the meantime, the story behind the two farms is the best thing to read next.</p>
      <a class="link-arrow" href="/about/">Read our story</a>
    </section>`;
  return layout({
    pageTitle: "Thank you | Paulsen Farm and Floral",
    description: "Thanks for joining the Paulsen Farm and Floral list. We will be in touch directly about chicken, wreaths and floral design as the seasons come around.",
    routePath: "/thankyou/",
    bodyHtml: body,
    schemas: [orgSchema()],
    side: "farm",
    noindex: true,
  });
}

// ---------- sitemap / robots / llms.txt ----------
const indexableRoutes = ["/", "/pastured-chicken/", "/wreaths-and-garland/", "/wedding-flowers/", "/about/", "/contact/"];

function buildSitemap() {
  const urls = indexableRoutes.map((r) => `  <url><loc>${BASE}${r}</loc></url>`).join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}

function buildRobots() {
  return `User-agent: *
Allow: /
Disallow: /thankyou/

Sitemap: ${BASE}/sitemap.xml`;
}

function buildLlmsTxt() {
  return `# ${site.name}

> ${site.tagline}

${site.legalName} is a small family farm and floral studio in ${site.region}, near ${site.city}, ${site.state}.
The family has farmed the front place since ${site.founded}, which makes it an Iowa Century Farm. The
farm sits between Omaha and Des Moines, roughly an hour from each, along Interstate 80.

The business has two sides under one brand. The farm side raises broiler chickens outdoors on
pasture and sells them direct off the farm by the batch, roughly ten birds to a family, a few
times across the summer. The floral side makes wreaths, garland and seasonal centerpieces in a
limited run each fall, and does floral design for weddings and events, travelling to the venue
rather than hosting at the farm.

Pricing is not published. The business is in its first season and uses an interest list to decide
production volume before setting prices. Weddings are quoted per event.

## Pages

- [Home](${BASE}/): what the farm and the floral studio do right now
- [Pastured chicken](${BASE}/pastured-chicken/): broilers raised on pasture, sold by the batch off the farm
- [Wreaths and garland](${BASE}/wreaths-and-garland/): seasonal wreaths, garland and centerpieces, made in a limited fall run
- [Wedding flowers](${BASE}/wedding-flowers/): floral design for weddings and events, delivered to the venue
- [Our story](${BASE}/about/): the two family farms, the Century Farm history, and why they farm this way
- [Contact](${BASE}/contact/): join the list for chicken, wreaths or floral design

## Contact

Email is the only contact channel at this time. There is no published phone number, no published
street address, and the farm is not open for drop in visits.
`;
}

// ---------- run ----------
fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT, { recursive: true });

writePage("/", renderHome());
writePage("/about/", renderAbout());
for (const svc of services) writePage(svc.slug, renderService(svc));
writePage("/contact/", renderContact());
writePage("/thankyou/", renderThankYou());

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

const total = indexableRoutes.length + 1;
console.log(`Built ${total} pages to ${OUT}/ (${indexableRoutes.length} indexable + thankyou)`);
