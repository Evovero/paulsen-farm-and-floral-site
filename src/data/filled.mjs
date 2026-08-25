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
// keeps it out of sitemap.xml and llms.txt. FILLING IS NOT INDEXING. A page goes indexable
// only when Spencer has read the copy and said yes, and that is one word: draft comes off
// in its fill module, and build.mjs picks the route up from there automatically.
import { fillFarmA } from "./fill-farm-a.mjs";
import { fillFarmB } from "./fill-farm-b.mjs";

export const filled = [...fillFarmA, ...fillFarmB];
