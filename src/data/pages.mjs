// Paulsen Farm and Floral - the ten year structure.
// Added 2026-08-21 (second pass). Spencer's brief: build the site as if this is the company
// ten years from now, so Alex and Bronte delete rather than invent. The page MAP is the
// deliverable here, not the depth of the copy.
//
// STATUS FLAG, read this before touching anything:
//   draft: true  =>  the page renders with <meta name="robots" content="noindex, follow">,
//                    and is left out of sitemap.xml and llms.txt.
//   Thin pages are a real ranking liability, so nothing here competes with the six
//   finished pages until it is filled in. Flipping a page live is one word, but it is a
//   GATE, not a formality: the verification script only enforces the 1,000 word floor and
//   the 55-60 / 155-160 meta spec on pages where draft is false. Fill the page first.
//
// The same content rules as content.mjs apply here, in full:
//   No pricing. No street address, no phone, no hours. No husbandry, feed, certification or
//   processing claims. Nothing about the floral side is confirmed by Bronte. The child never
//   appears. No em dashes.
//
// One more, specific to this file: NONE of these services exist yet. Copy is written
// forward looking and says so in its own words. Do not rewrite any of it into the present
// tense ("we host farm dinners") without checking that the thing is actually happening.
//
// NOINDEX TRIAGE, 2026-08-25. The 32 hidden pages were each given a decision rather than
// left open indefinitely. Five were filled to spec and moved to promoted.mjs, three were
// deleted outright (the orchard, honey, u-pick orchard), the /farm/ and /floral/ hubs were
// opened, and the rest stay here on purpose with a reason recorded per page in the client
// file noindex-register.md. Run `node verify.mjs` after any build before publishing.
//
// ⚠️ SECOND FILL PASS, 2026-08-25. MOST OF THE `stubs` ARRAY BELOW IS NOW DEAD CODE.
// Nineteen of the twenty one stubs were filled to 1,000+ words each and live in the
// src/data/fill-*.mjs modules behind src/data/filled.mjs. build.mjs skips any stub whose
// slug appears there, so the entries below are superseded rather than rendered. They were
// deliberately NOT deleted: this file has been byte-identical since 2026-08-21 apart from
// this pass, and leaving the originals in place keeps the diff of the whole fill readable.
// Only /our-work/ (a gallery with zero photographs) and /journal/ (a blog index with no
// posts) are still live stubs, and both are still noindex because writing cannot fix either.
// EDIT THE FILL MODULE, NOT THE STUB. A change made here to a filled page does nothing.
//
// The /visit/ hub was opened on 2026-08-25 once all seven of its children were filled.
// All three hubs are now indexed, and build.mjs derives hub routes into sitemap.xml, so
// opening or closing one is a single word here and nowhere else.

// Card blurbs for the three finished service pages, so hub grids can list them without
// content.mjs having to know about hubs.
export const liveBlurbs = {
  "/nelson-farm/": {
    navLabel: "The Nelson Farm",
    blurb: "Grandma Janet's place, and where the operation is headed.",
  },
  "/farm-pickup/": {
    navLabel: "Pickup at the Farm",
    blurb: "Order ahead, drive out, load up. Nothing in between takes a cut.",
  },
  "/event-flowers/": {
    navLabel: "Events and Celebrations",
    blurb: "Showers, anniversaries, dinners, and the parties that are not weddings.",
  },
  "/sympathy-flowers/": {
    navLabel: "Sympathy Flowers",
    blurb: "For a service, a graveside, or a front step. Quiet and quick.",
  },
  "/century-farm/": {
    navLabel: "The Century Farm",
    blurb: "The front place, worked by Paulsens since 1905. An Iowa Century Farm.",
  },
  "/pastured-chicken/": {
    navLabel: "Pastured Chicken",
    blurb: "Broilers raised outdoors on grass, sold direct off the farm by the batch.",
  },
  "/wreaths-and-garland/": {
    navLabel: "Wreaths and Garland",
    blurb: "Fresh wreaths, garland and centerpieces, made by hand in a limited fall run.",
  },
  "/wedding-flowers/": {
    navLabel: "Weddings",
    blurb: "Floral design for your day, grown here where the season allows.",
  },
};

export const hubs = [
  {
    slug: "/farm/",
    side: "farm",
    draft: false,
    navLabel: "The Farm",
    title: "The Farm | Paulsen Farm and Floral in Cass County, Iowa",
    description:
      "Pastured poultry, market vegetables and storage crops, plus every way to buy them, from a Century Farm in Cass County, Iowa. See what the farm side is doing.",
    eyebrow: "The farm",
    h1: "The farm side",
    sub: "Food raised on ground this family has worked since 1905.",
    intro: [
      "The farm exists to put clean food on tables around here. Not a certification and not a label, but food you can trace to a field you could drive to, raised in a way that leaves the ground better than it found it.",
      "Broiler chickens are where we started, because they are honest, they teach you a great deal inside a single season, and they work the pasture while they grow. Everything else below is either running alongside them or the direction we are pointed.",
      "Not all of it is happening yet. We would rather show you the whole picture and let you tell us which parts matter than pretend the farm is further along than it is.",
    ],
    groups: [
      { title: "What we raise and grow", children: ["/pastured-chicken/", "/farm-eggs/", "/thanksgiving-turkeys/", "/market-vegetables/", "/garlic/"] },
      { title: "How to get it", children: ["/csa/", "/farmers-markets/", "/farm-pickup/", "/wholesale/"] },
    ],
    ctaHeading: "Tell us what you would actually buy",
    ctaBody:
      "The list is how we decide what to raise more of. If one thing on this page is the reason you would drive out here, that is worth knowing.",
    ctaLabel: "Join the list",
    ctaHref: "/contact/",
  },
  {
    slug: "/floral/",
    side: "floral",
    draft: false,
    navLabel: "Floral",
    title: "Floral Design and Flowers | Paulsen Farm and Floral, Iowa",
    description:
      "Wedding, event and sympathy floral design, plus seasonal wreaths and bouquets, grown on our Iowa farm where the season allows it. Near Des Moines and Omaha.",
    eyebrow: "The floral studio",
    h1: "The floral studio",
    sub: "Flowers grown here, arranged by hand, for the days that matter.",
    intro: [
      "Bronte designs. We grow as many of the flowers as our season allows and source the rest honestly, which puts us between a shop that buys everything and a farm that only grows and hands the stems to somebody else.",
      "The floral side splits in two. Design work, which is weddings and events and the pieces made for one specific day. And seasonal flowers, which is whatever the field is best at that week, sold in runs while it lasts.",
      "Some of this is running now and some of it is where we are headed. It is all here so you can see the shape of the thing.",
    ],
    groups: [
      { title: "Design work", children: ["/wedding-flowers/", "/event-flowers/", "/sympathy-flowers/", "/our-work/"] },
      { title: "Seasonal flowers", children: ["/wreaths-and-garland/", "/bouquets/", "/flower-subscriptions/", "/mothers-day/", "/diy-flower-buckets/"] },
    ],
    ctaHeading: "Tell us what you are planning",
    ctaBody:
      "A date, a room, a season, or just that you want flowers on your table every week. Any of those is enough to start a conversation.",
    ctaLabel: "Get in touch",
    ctaHref: "/contact/",
  },
  {
    slug: "/visit/",
    side: "farm",
    draft: false,
    navLabel: "Visit",
    title: "Visit the Farm | Paulsen Farm and Floral off I-80, Iowa",
    description:
      "A farm store, u-pick flowers, dinners, workshops and school groups, all planned for a Century Farm between Omaha and Des Moines, directly off Interstate 80.",
    eyebrow: "Visit",
    h1: "Visit the farm",
    sub: "Ten years out, this is a place you drive to. Here is what that looks like.",
    intro: [
      "The front farm sits directly on Interstate 80, about fifty five minutes from Omaha and about an hour from most of Des Moines. Very little in Iowa is that easy to reach from both.",
      "Long term that makes this a place worth a drive rather than only a delivery. A store you can walk into, flowers you cut yourself, dinners in the field, classes, and buses of kids out for a morning on a working farm.",
      "None of it is open yet and we are not going to dress it up as though it were. This is the shape of what we are building toward, and it is here so you can tell us which parts you would actually come out for.",
    ],
    groups: [
      { title: "On the farm", children: ["/seasons/", "/farm-store/", "/u-pick-flowers/"] },
      { title: "Come out for something", children: ["/farm-dinners/", "/workshops/", "/school-groups/", "/private-events/"] },
    ],
    ctaHeading: "Which of these would get you in the car?",
    ctaBody:
      "That is a real question and the answer changes what we build first. Get on the list and tell us, or just tell us and we will take it from there.",
    ctaLabel: "Join the list",
    ctaHref: "/contact/",
  },
];

// Pages that exist so the structure is visible and reviewable. Title plus a short honest
// paragraph or two. These are deliberately NOT full service pages.
// SEE THE HEADER: all but two of these are superseded by src/data/fill-*.mjs and are no
// longer rendered. Edit the fill module, not the stub.
export const stubs = [
  // ---------- THE FARM: what we raise and grow ----------
  {
    slug: "/farm-eggs/",
    side: "farm",
    parent: "/farm/",
    navLabel: "Farm Eggs",
    title: "Farm Eggs | Paulsen Farm and Floral, Cass County, Iowa",
    description: "Eggs from a pastured laying flock on a Century Farm in Cass County, Iowa.",
    eyebrow: "The farm",
    h1: "Farm eggs",
    blurb: "A laying flock out on the same pasture, moved along behind the broilers.",
    paragraphs: [
      "Eggs from a laying flock out on the same pasture the broilers work, moved along behind them. Deep orange yolks, whites that hold their shape, and shells that take a real knock before they give.",
      "A laying flock is a year round commitment rather than a summer batch, so this comes once the meat birds are running smoothly. If a standing dozen every week is something you would want, tell us and it moves up the list.",
    ],
  },
  {
    slug: "/thanksgiving-turkeys/",
    side: "farm",
    parent: "/farm/",
    navLabel: "Thanksgiving Turkeys",
    title: "Thanksgiving Turkeys | Paulsen Farm and Floral, Iowa",
    description: "Pasture raised Thanksgiving turkeys, reserved ahead, from a farm in Cass County, Iowa.",
    eyebrow: "The farm",
    h1: "Thanksgiving turkeys",
    blurb: "One batch a year, on grass through the fall, reserved well ahead.",
    paragraphs: [
      "One batch a year, raised on grass through the fall and ready the week before Thanksgiving. Reserved ahead, because there is no second chance at a Thanksgiving turkey.",
      "Turkeys sit naturally next to the broilers, and they come ready in the same stretch as the wreaths, which makes for one extremely busy November. If a pasture raised bird is what your table wants, say so and we will count you in.",
    ],
  },
  {
    slug: "/market-vegetables/",
    side: "farm",
    parent: "/farm/",
    navLabel: "Market Vegetables",
    title: "Market Vegetables | Paulsen Farm and Floral, Iowa",
    description: "Salad greens, roots, brassicas and tomatoes grown in market beds in Cass County, Iowa.",
    eyebrow: "The farm",
    h1: "Market vegetables",
    blurb: "Greens, roots, brassicas and tomatoes, grown in beds we walk every day.",
    paragraphs: [
      "Salad greens, roots, brassicas, tomatoes, the things a market garden actually lives on. Grown in beds close enough to the house that somebody looks at them every single day.",
      "Vegetables are labor long before they are revenue, so this grows with the markets and the shares rather than ahead of them. What ends up in the ground will follow what people around here keep asking us for.",
    ],
  },
  {
    slug: "/garlic/",
    side: "farm",
    parent: "/farm/",
    navLabel: "Garlic and Storage Crops",
    title: "Garlic and Storage Crops | Paulsen Farm and Floral, Iowa",
    description: "Hardneck garlic, onions, squash and potatoes, the crops that keep through an Iowa winter.",
    eyebrow: "The farm",
    h1: "Garlic and storage crops",
    blurb: "Crops that go in once, come out once, and keep for months.",
    paragraphs: [
      "Hardneck garlic, onions, winter squash, potatoes. Crops that go in once, come out once, and then sit in a cool room for months without asking anything of you.",
      "Storage crops are the quiet backbone of a small farm. They spread a harvest out, they fill a winter share, and they let a good season carry a slow one. Garlic on its own has built more than one Iowa farm.",
    ],
  },

  // ---------- THE FARM: how to get it ----------
  {
    slug: "/csa/",
    side: "farm",
    parent: "/farm/",
    navLabel: "CSA Farm Shares",
    title: "CSA Farm Shares | Paulsen Farm and Floral, Iowa",
    description: "A weekly share of what the farm has, paid ahead, from a Century Farm in Cass County, Iowa.",
    eyebrow: "How to get it",
    h1: "CSA farm shares",
    blurb: "A weekly box of what the farm has, paid ahead, for a whole season.",
    paragraphs: [
      "A share is a box of whatever the farm has, every week, for a season. You pay ahead, we plant against a number we can count on, and you end up eating a great deal closer to the ground than a grocery run allows.",
      "This is the piece that turns a farm from a run of separate sales into something steady, and it is a large part of why we are building a list now. It needs the growing to catch up with the idea first.",
    ],
  },
  {
    slug: "/farmers-markets/",
    side: "farm",
    parent: "/farm/",
    navLabel: "Farmers Markets",
    title: "Farmers Markets | Paulsen Farm and Floral, Iowa",
    description: "Where to find Paulsen Farm and Floral at farmers markets around Omaha, Des Moines and Cass County.",
    eyebrow: "How to get it",
    h1: "Farmers markets",
    blurb: "Two markets a week, chosen for what we can genuinely staff.",
    paragraphs: [
      "Two markets a week, chosen for what we can actually staff without wrecking the rest of the operation. Omaha, Des Moines, Winterset and Atlantic are all within range, and every one of them is a different crowd.",
      "Markets are labor intensive and they are also the best customer research money cannot buy. Standing across a table from someone for four hours tells you what to plant next year.",
    ],
  },
  {
    slug: "/wholesale/",
    side: "farm",
    parent: "/farm/",
    navLabel: "Restaurants and Grocers",
    title: "Restaurants and Grocers | Paulsen Farm and Floral, Iowa",
    description: "Standing weekly orders for chefs and independent grocers, from a farm between Omaha and Des Moines.",
    eyebrow: "How to get it",
    h1: "Restaurants and grocers",
    blurb: "Standing weekly orders, and crops grown for a specific kitchen.",
    paragraphs: [
      "Chefs and independent grocers who want to name the farm on the menu. Standing weekly orders, and a short list of crops grown deliberately for one kitchen.",
      "Wholesale is a different discipline from a market stall. It rewards consistency over variety, and it is worth building only once the growing is reliable enough to promise somebody a number.",
    ],
  },

  // ---------- FLORAL: design work ----------
  {
    slug: "/our-work/",
    side: "floral",
    parent: "/floral/",
    navLabel: "Our Work",
    title: "Our Work | Paulsen Farm and Floral, Iowa Floral Design",
    description: "A gallery of weddings, events and seasonal floral work from Paulsen Farm and Floral in Iowa.",
    eyebrow: "The floral studio",
    h1: "Our work",
    blurb: "A gallery of what we have actually made, as the seasons fill it in.",
    paragraphs: [
      "A gallery of what we have actually made. Weddings, events, seasonal pieces, the ones we are proud of and the ones that taught us something.",
      "This page is waiting on photographs rather than on work. It fills in as the seasons go by.",
    ],
  },

  // ---------- FLORAL: seasonal flowers ----------
  {
    slug: "/bouquets/",
    side: "floral",
    parent: "/floral/",
    navLabel: "Bouquets and Arrangements",
    title: "Bouquets and Arrangements | Paulsen Farm and Floral, Iowa",
    description: "Market bouquets and arranged pieces built from whatever the flower field is best at that week.",
    eyebrow: "The floral studio",
    h1: "Bouquets and arrangements",
    blurb: "Built from whatever the field is best at that particular week.",
    paragraphs: [
      "Market bouquets and arranged pieces built from whatever the field is best at that week. In June that means peonies and in September it means dahlias, and neither of those is up for negotiation.",
      "Growing our own is what makes this worth doing at all. A bouquet cut two days ago in another state and a bouquet cut this morning are not the same object, and anybody who has had both knows it.",
    ],
  },
  {
    slug: "/flower-subscriptions/",
    side: "floral",
    parent: "/floral/",
    navLabel: "Flower Subscriptions",
    title: "Flower Subscriptions | Paulsen Farm and Floral, Iowa",
    description: "Fresh flowers every week or every other week through the growing season, paid ahead.",
    eyebrow: "The floral studio",
    h1: "Flower subscriptions",
    blurb: "Flowers on your table all season, paid ahead. A farm share in a vase.",
    paragraphs: [
      "Flowers on the table every week or every other week through the growing season, paid ahead. The same idea as a farm share, in a vase.",
      "Subscriptions are the one thing nearly every flower business we admire has in common. They smooth out a violently seasonal business, and they are the best argument we know for planting more.",
    ],
  },
  {
    slug: "/mothers-day/",
    side: "floral",
    parent: "/floral/",
    navLabel: "Mother's Day",
    title: "Mother's Day Flowers | Paulsen Farm and Floral, Iowa",
    description: "Mother's Day bouquets and arrangements in a limited run, ordered ahead, near Des Moines and Omaha.",
    eyebrow: "The floral studio",
    h1: "Mother's Day",
    blurb: "The biggest flower day of the year, planned for rather than reacted to.",
    paragraphs: [
      "The biggest flower day of the year, and one worth planning for months out rather than reacting to. Bouquets, arrangements and planted pieces, in a limited run, ordered ahead.",
      "One page, one weekend, one shot at getting it right. Get on the list over the winter and you will hear before it opens.",
    ],
  },
  {
    slug: "/diy-flower-buckets/",
    side: "floral",
    parent: "/floral/",
    navLabel: "Buckets of Blooms",
    title: "Buckets of Blooms | Paulsen Farm and Floral, Iowa",
    description: "Five gallon buckets of mixed stems cut that morning, for people arranging their own flowers.",
    eyebrow: "The floral studio",
    h1: "Buckets of blooms",
    blurb: "Mixed stems by the bucket, cut that morning, for arranging yourself.",
    paragraphs: [
      "A five gallon bucket of mixed stems, cut that morning, for people who would rather arrange it themselves. Popular with brides doing their own flowers and with anyone who simply enjoys the doing.",
      "It is the cheapest way to get a lot of our flowers into a room. Ordered ahead by the bucket, during the growing season only.",
    ],
  },

  // ---------- VISIT: on the farm ----------
  {
    slug: "/seasons/",
    side: "farm",
    parent: "/visit/",
    navLabel: "Seasons on the Farm",
    title: "Seasons on the Farm | Paulsen Farm and Floral, Iowa",
    description: "What is happening on the farm month by month, from spring planting to a quiet Iowa winter.",
    eyebrow: "Visit",
    h1: "Seasons on the farm",
    blurb: "What is actually happening out here, month by month.",
    paragraphs: [
      "What is happening out here right now, month by month. Spring planting and the first tulips, summer flowers and market season, fall wreaths and turkeys, then a quiet winter of garlic and planning.",
      "A farm is four different places over the course of a year. This is the page that tells you which one it currently is.",
    ],
  },
  {
    slug: "/farm-store/",
    side: "farm",
    parent: "/visit/",
    navLabel: "The Farm Store",
    title: "The Farm Store | Paulsen Farm and Floral, off I-80 in Iowa",
    description: "A small farm store selling chicken, flowers, eggs, honey and garlic, on a Century Farm off Interstate 80.",
    eyebrow: "Visit",
    h1: "The farm store",
    blurb: "A small building on the place, selling whatever the season is giving.",
    paragraphs: [
      "A small building on the place where you can buy what we have that day. Chicken out of the freezer, flowers in buckets, eggs, honey, garlic, whatever the season is giving us.",
      "A store is the difference between placing an order and making a visit. It is also what makes the drive out here worth doing on a Saturday with nothing else planned.",
    ],
  },
  {
    slug: "/u-pick-flowers/",
    side: "floral",
    parent: "/visit/",
    navLabel: "U-Pick Flowers",
    title: "U-Pick Flowers | Paulsen Farm and Floral, Cass County, Iowa",
    description: "Cut your own zinnias, sunflowers and dahlias in the flower field on a farm between Omaha and Des Moines.",
    eyebrow: "Visit",
    h1: "U-pick flowers",
    blurb: "Rows you walk with snips and a jar, cutting your own.",
    paragraphs: [
      "Rows you walk with a pair of snips and a jar, cutting your own. Zinnias, sunflowers, dahlias, and whatever else is standing that week.",
      "U-pick turns a flower field into a reason to spend an hour somewhere. It is one of the first visitor ideas we would want to try, because it needs a field and a gate more than it needs a building.",
    ],
  },

  // ---------- VISIT: come out for something ----------
  {
    slug: "/farm-dinners/",
    side: "farm",
    parent: "/visit/",
    navLabel: "Farm Dinners",
    title: "Farm Dinners | Paulsen Farm and Floral, Cass County, Iowa",
    description: "Long table dinners in the field on a Century Farm an hour from Omaha and an hour from Des Moines.",
    eyebrow: "Visit",
    h1: "Farm dinners",
    blurb: "Long tables in the field, food grown a few hundred feet away.",
    paragraphs: [
      "Long tables out in the field, a set menu, and food that was standing a few hundred feet away that morning. A handful of evenings across a summer rather than anything resembling a restaurant.",
      "Dinners are the clearest way to show somebody what a farm like this is for. They are also the hardest thing on this page to do well, which is exactly why they come after the growing is right.",
    ],
  },
  {
    slug: "/workshops/",
    side: "floral",
    parent: "/visit/",
    navLabel: "Workshops and Classes",
    title: "Workshops and Classes | Paulsen Farm and Floral, Iowa",
    description: "Wreath making, bouquet building and other small group classes on a farm in Cass County, Iowa.",
    eyebrow: "Visit",
    h1: "Workshops and classes",
    blurb: "Wreath making in November, bouquet building in July, hands busy.",
    paragraphs: [
      "Wreath making in November, bouquet building in July, and whatever else people keep asking us to teach them. Small groups, hands busy, something to take home at the end.",
      "Workshops sell a skill and an afternoon rather than a product, which makes them a natural fit for a place that is more interesting than it is convenient.",
    ],
  },
  {
    slug: "/school-groups/",
    side: "farm",
    parent: "/visit/",
    navLabel: "School Groups",
    title: "School Groups | Paulsen Farm and Floral, Cass County, Iowa",
    description: "Field trips to a working farm in Cass County, Iowa, for schools around Atlantic and Council Bluffs.",
    eyebrow: "Visit",
    h1: "School groups",
    blurb: "A morning on a working farm, and the real answer to where food comes from.",
    paragraphs: [
      "Buses out from Atlantic, Council Bluffs and the towns in between for a morning on a working farm. Chickens, beds, bees, and the actual answer to where food comes from.",
      "A kid who has met a laying hen buys different groceries thirty years later. This is the least profitable and most worthwhile thing on this entire list.",
    ],
  },
  {
    slug: "/private-events/",
    side: "farm",
    parent: "/visit/",
    navLabel: "Private Gatherings",
    title: "Private Gatherings | Paulsen Farm and Floral, Iowa",
    description: "Small private gatherings on a Century Farm between Omaha and Des Moines, directly off Interstate 80.",
    eyebrow: "Visit",
    h1: "Private gatherings",
    blurb: "Reunions, company days, birthdays. Small and quiet, not a venue.",
    paragraphs: [
      "Small groups out for an evening. Family reunions, company days, birthdays, the sort of thing a farm with a long table and a good view can hold without turning into something else.",
      "This is not a wedding venue and it is not trying to become one. Weddings we design flowers for, and we bring them to you. This is a smaller and quieter use of the place.",
    ],
  },

  // ---------- OUR STORY ----------
  {
    slug: "/how-we-farm/",
    side: "farm",
    parent: "/about/",
    navLabel: "How We Farm",
    title: "How We Farm | Paulsen Farm and Floral, Cass County, Iowa",
    description: "Rested pasture, animals that move, and a bias toward leaving Iowa ground better than we found it.",
    eyebrow: "Our story",
    h1: "How we farm",
    blurb: "Rested pasture, animals that move, ground left better than we found it.",
    paragraphs: [
      "Pasture that gets rested, animals that move, and a bias toward leaving the ground better than we found it. Iowa has some of the best soil in the world and it has been spent like an input for a long time.",
      "This page is where the specifics will go as they become true rather than aspirational. What we feed, how the birds get moved, what goes on the beds and what never will.",
    ],
  },
  {
    slug: "/journal/",
    side: "farm",
    parent: "/about/",
    navLabel: "Journal",
    title: "Journal | Paulsen Farm and Floral, Cass County, Iowa",
    description: "Notes from a first season on a Century Farm in Cass County, Iowa. What went in, what went wrong.",
    eyebrow: "Our story",
    h1: "Journal",
    blurb: "Notes from the farm. What went in, what went wrong, what is ready.",
    paragraphs: [
      "Notes from the farm. What went in, what went wrong, what the weather did, and what is ready to buy.",
      "Less polished than the rest of this site, on purpose. If you want to know what a first season actually looks like from the inside, this is where that lives.",
    ],
  },
];

// The four story pages hang off /about/, which is a finished page rather than a hub, so it
// gets a simple link list instead of a card grid.
export const aboutChildren = ["/century-farm/", "/nelson-farm/", "/how-we-farm/", "/journal/"];
