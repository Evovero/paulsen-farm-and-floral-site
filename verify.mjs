// Paulsen Farm and Floral - pre-publish verification.
// Written 2026-08-25. Enforces [Website]/Resources/seo-page-standards.md section 10
// against the BUILT output in dist/, because eyeballing this has shipped bugs before.
//
// Run after `node build.mjs`. Exits non-zero on any FAIL. Nothing publishes on a red run.
import fs from "node:fs";
import path from "node:path";
import { filled } from "./src/data/filled.mjs";

const OUT = "dist";
const BASE = "https://paulsenfarmandfloral.com";
const WORD_FLOOR = 1000;

// Pages exempt from the 1,000 word floor: hubs are card grids by design, utility pages
// have nothing to say at length, and /thankyou/ is noindex.
const WORD_EXEMPT = new Set(["/", "/farm/", "/floral/", "/visit/", "/about/", "/contact/", "/thankyou/"]);
// Pages exempt from the 55-60 / 155-160 meta spec.
const META_EXEMPT = new Set(["/thankyou/"]);
// Pages filled to spec but deliberately still noindex, waiting on Spencer's read before
// they are indexed. They are held to the word floor and the meta spec NOW, so that the
// eventual flip to indexable cannot fail. Added 2026-08-25, second triage.
const PENDING = new Set(filled.map((f) => f.slug));

let fails = 0;
let warns = 0;
const fail = (r, m) => { console.log(`  FAIL  ${r}  ${m}`); fails++; };
const warn = (r, m) => { console.log(`  warn  ${r}  ${m}`); warns++; };

function routes() {
  const out = [];
  (function walk(dir, rel) {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      if (e.isDirectory()) walk(path.join(dir, e.name), `${rel}${e.name}/`);
      else if (e.name === "index.html") out.push(rel === "" ? "/" : "/" + rel);
    }
  })(OUT, "");
  return out.sort();
}

const strip = (h) => {
  let x = h;
  for (const t of ["script", "style", "nav", "footer"]) {
    x = x.replace(new RegExp(`<${t}[\\s\\S]*?</${t}>`, "g"), "");
  }
  return x.replace(/<[^>]+>/g, " ");
};
const unesc = (s) =>
  s.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
   .replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&nbsp;/g, " ");

const sitemap = fs.readFileSync(path.join(OUT, "sitemap.xml"), "utf8");
const llms = fs.existsSync(path.join(OUT, "llms.txt"))
  ? fs.readFileSync(path.join(OUT, "llms.txt"), "utf8") : "";

console.log("Verifying dist/ against seo-page-standards section 10\n");

let indexable = 0, noindexed = 0;

for (const r of routes()) {
  const file = path.join(OUT, r, "index.html");
  const html = fs.readFileSync(file, "utf8");
  const isNoindex = /<meta name="robots" content="noindex/.test(html);
  isNoindex ? noindexed++ : indexable++;

  // 1. word count
  const words = unesc(strip(html)).split(/\s+/).filter(Boolean).length;
  if ((!isNoindex || PENDING.has(r)) && !WORD_EXEMPT.has(r) && words < WORD_FLOOR) {
    fail(r, `${words} words, floor is ${WORD_FLOOR}`);
  }

  // 2. meta package, BOTH bounds
  if ((!isNoindex || PENDING.has(r)) && !META_EXEMPT.has(r)) {
    const t = html.match(/<title>([\s\S]*?)<\/title>/);
    const d = html.match(/<meta name="description" content="([^"]*)"/);
    if (!t) fail(r, "no <title>");
    else {
      const n = unesc(t[1]).length;
      if (n < 55 || n > 60) fail(r, `title ${n} chars, spec is 55-60`);
    }
    if (!d) fail(r, "no meta description");
    else {
      const n = unesc(d[1]).length;
      if (n < 155 || n > 160) fail(r, `description ${n} chars, spec is 155-160`);
    }
  }

  // 3. JSON-LD parses
  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try { JSON.parse(m[1]); } catch (e) { fail(r, `JSON-LD does not parse: ${e.message}`); }
  }

  // 4. no em dashes, in VISIBLE text only
  const visible = unesc(strip(html));
  if (visible.includes("—")) fail(r, "em dash in visible text");
  if (visible.includes("--")) warn(r, "double dash in visible text");

  // 5. no placeholder text
  for (const bad of ["Lorem ipsum", "TODO", "TKTK", "PLACEHOLDER", "undefined"]) {
    if (visible.includes(bad)) fail(r, `placeholder or leak: ${bad}`);
  }

  // 6. no money, and no credential terms near a claim (standards section 7)
  const money = visible.match(/\$\s?\d/);
  if (money) fail(r, "currency figure in visible text");
  const claim = /(insur|warrant|guarantee|bonded|licens)/i;
  for (const m of visible.matchAll(/(\d+(\.\d+)?\s?%|\$\s?\d[\d,]*|\b\d+\s?(hour|day|week|month|year)s?\b)/gi)) {
    const win = visible.slice(Math.max(0, m.index - 140), m.index + 140);
    if (claim.test(win)) fail(r, `credential term near a number: "${m[0].trim()}"`);
  }

  // 7. exactly one H1
  const h1s = (html.match(/<h1[\s>]/g) || []).length;
  if (h1s !== 1) fail(r, `${h1s} H1 tags, expected exactly 1`);

  // 8. canonical on the apex host
  const can = html.match(/<link rel="canonical" href="([^"]+)"/);
  if (!can) fail(r, "no canonical");
  else if (!can[1].startsWith(BASE) || can[1].includes("//www."))
    fail(r, `canonical not on apex: ${can[1]}`);

  // 9. sitemap and llms.txt agree with the robots tag
  const inSitemap = sitemap.includes(`<loc>${BASE}${r}</loc>`);
  if (isNoindex && inSitemap) fail(r, "noindex page IS in sitemap.xml");
  if (!isNoindex && !inSitemap) fail(r, "indexable page MISSING from sitemap.xml");
  if (isNoindex && llms.includes(`${BASE}${r}`)) fail(r, "noindex page IS in llms.txt");

  // 10. no dead internal links
  for (const m of html.matchAll(/href="(\/[^"#?]*)"/g)) {
    const href = m[1].endsWith("/") ? m[1] : null;
    if (!href) continue;
    const target = path.join(OUT, href, "index.html");
    if (!fs.existsSync(target)) fail(r, `dead internal link: ${href}`);
  }

  if (!isNoindex) console.log(`  ok    ${r}  ${words} words`);
  else if (PENDING.has(r)) console.log(`  held  ${r}  ${words} words, filled and passing, noindex pending review`);
}

console.log(`\n${indexable} indexable, ${noindexed} noindex (${PENDING.size} of them filled and pending review), ${routes().length} pages total`);
console.log(fails ? `\nFAILED with ${fails} error(s), ${warns} warning(s). Do not publish.`
                  : `\nPASS. ${warns} warning(s).`);
process.exit(fails ? 1 : 0);
