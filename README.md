# paulsenfarmandfloral.com

Static site for Paulsen Farm and Floral LLC, Cass County, Iowa.
Zero-dependency Node generator, deployed by Netlify on every push to `main`.

```
node build.mjs     # writes dist/
node verify.mjs    # pre-publish checks, must pass before anything ships
```

---

## READ THIS FIRST: 32 of the 39 pages are deliberately NOINDEX

**Only 6 pages on this site are indexable.** Everything else is hidden from Google on
purpose, and every hidden page is an open decision rather than a finished thing.

**Indexable (6):** `/`, `/pastured-chicken/`, `/wreaths-and-garland/`, `/wedding-flowers/`,
`/about/`, `/contact/`

**Noindex (33):** `/thankyou/`, plus the 3 section hubs (`/farm/`, `/floral/`, `/visit/`)
and 29 placeholder pages that make up the ten year structure. All of them are defined in
`src/data/pages.mjs`.

### Why

The placeholders exist so the client can react to a page map and delete what they do not
want, which is far easier for them than inventing a structure from nothing. They were never
meant to rank. Six strong pages beat six strong pages plus thirty thin ones, and the thin
ones would compete with the finished ones for the same terms.

### The mechanism

`draft: true` on a page in `src/data/pages.mjs` does four things:

1. renders `<meta name="robots" content="noindex, follow">`
2. leaves the page out of `sitemap.xml`
3. leaves the page out of `llms.txt`
4. tells `verify.mjs` to SKIP the 1,000 word floor and the 55-60 / 155-160 meta spec

**Point 4 is a gate, not a convenience.** Setting `draft: false` turns those checks back on,
so a half written page cannot quietly go live. Fill the page first, then flip the flag.

None of this is visible to the client. Every page is in the nav, reachable, internally
linked, and looks finished. `follow` is deliberate so link equity still reaches the six real
pages.

### What has to happen

Each hidden page needs one of three outcomes. Leaving all 32 as they are indefinitely is the
one genuinely wrong answer, because a site whose navigation is 84% noindex reads as
unfinished to a crawler over time.

- **FILL** — write it to `seo-page-standards.md`, then set `draft: false`
- **DELETE** — remove the entry from `src/data/pages.mjs` AND its nav row from
  `src/data/site.mjs`. Both, or the build throws on a missing card
- **KEEP NOINDEX** — real but years out, re-decided at the next review

Per-page register with status and reasoning lives outside this repo, in
`Claude OS/Clients/Paulsen Farm and Floral/noindex-register.md`, tracked as backlog `CL-62`.

---

## Content rules that are not negotiable

Both `src/data/content.mjs` and `src/data/pages.mjs` carry these in their headers. They are
repeated here because they are the ones most likely to get broken by someone in a hurry.

- **No pricing anywhere.** Nothing is priced for the first season. The interest list is the
  offer. `verify.mjs` fails the build if a dollar figure appears in visible text.
- **No street address, no phone number, no hours.** None are approved for release.
- **No husbandry, feed, certification or processing claims** beyond "raised outdoors on
  pasture", which is the only thing confirmed.
- **Nothing on the floral side is confirmed by Bronte yet.** The weddings page states a
  position and opens a conversation. It does not claim a service menu or capacity.
- **The client's child never appears in anything.** Standing rule from the client.
- **No em dashes.** Checked by `verify.mjs`.
- **Apex domain, no `www`.** Canonical, sitemap, robots and llms.txt all agree on it.

## Layout

```
build.mjs              generator, no copy lives here
verify.mjs             pre-publish checks
src/data/site.mjs      business facts and the nav tree
src/data/content.mjs   copy for the six finished pages
src/data/pages.mjs     hubs and placeholder pages, all draft
public/                styles.css, site.js, assets
```
