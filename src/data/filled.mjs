// Paulsen Farm and Floral - the second fill pass, 2026-08-25.
//
// Barrel only. Every batch of filled pages gets its own module so that no large file ever
// has to be re-emitted to add one page, which is the rule that came out of the first
// triage: you can only safely rewrite a file whose exact bytes you have.
//
// content.mjs, pages.mjs and promoted.mjs stay byte-identical through this pass. A page
// filled here supersedes its stub in pages.mjs automatically; build.mjs skips any stub
// whose slug appears in this array.
//
// draft: true renders the page with <meta name="robots" content="noindex, follow"> and
// keeps it out of sitemap.xml and llms.txt. Spencer released that gate on 2026-08-25, so
// filled pages now ship indexed. The flag stays because it is the mechanism, and because
// verify.mjs holds a draft page to the word floor and both meta bounds either way.
//
// 19 pages across five batches. What is deliberately NOT here: /our-work/ (a gallery with
// zero photographs) and /journal/ (a blog index with no posts). Both stay stubs and stay
// noindex, because writing cannot fix either one.
import { fillFarmA } from "./fill-farm-a.mjs";
import { fillFarmB } from "./fill-farm-b.mjs";
import { fillFloral } from "./fill-floral.mjs";
import { fillVisitA } from "./fill-visit-a.mjs";
import { fillVisitB } from "./fill-visit-b.mjs";

export const filled = [
  ...fillFarmA,
  ...fillFarmB,
  ...fillFloral,
  ...fillVisitA,
  ...fillVisitB,
];
