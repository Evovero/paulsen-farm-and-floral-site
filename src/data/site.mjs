// Paulsen Farm and Floral - business facts & site config (edit here, never in templates)
// FIRST REAL CONTENT BUILD, 2026-08-21, from the 2026-08-17 Alex discovery call.
// TEN YEAR STRUCTURE, 2026-08-21, second pass: the full site the business could grow into,
// so Alex and Bronte can delete rather than invent. See site-map.md.
//
// Still deliberately absent: street address, phone number, pricing, hours. None of those
// are settled or approved for public release. Do not add them here without a decision on
// file in Clients/Paulsen Farm and Floral/client-profile.md.
export const site = {
  name: "Paulsen Farm and Floral",
  legalName: "Paulsen Farm and Floral LLC",
  domain: "https://paulsenfarmandfloral.com",
  tagline: "Pasture raised food and locally grown flowers from two family farms in southwest Iowa.",
  city: "Atlantic",
  state: "IA",
  region: "Cass County, Iowa",
  founded: "1905",
  // Contact routes through a Netlify form, not a raw mailto, so the inbox is not
  // published to scrapers before Alex has a business phone and a profile set up.
  contactNoticeEmail: "paulsen.farm.floral@gmail.com",
  og: null, // no logo or photos approved yet - do not fabricate one
  year: "2026",
};

// Master nav. Four sections plus contact. Every section head is a real hub page, and the
// dropdown panels are grouped because a flat list of eight items is unreadable.
// Structure follows the reference sites Alex named: a Plan Your Visit style hub for the
// agritourism side (Center Grove, Vala's), a product-then-channel split on the farm side
// (Grade A Gardens), and design-work versus seasonal-shop on the floral side
// (Wildflower, Honeysuckle Hollow).
export const nav = [
  {
    label: "The Farm",
    href: "/farm/",
    groups: [
      {
        title: "What we raise and grow",
        items: [
          { label: "Pastured Chicken", href: "/pastured-chicken/" },
          { label: "Farm Eggs", href: "/farm-eggs/" },
          { label: "Thanksgiving Turkeys", href: "/thanksgiving-turkeys/" },
          { label: "Market Vegetables", href: "/market-vegetables/" },
          { label: "Garlic and Storage Crops", href: "/garlic/" },
          { label: "The Orchard", href: "/orchard/" },
          { label: "Honey", href: "/honey/" },
        ],
      },
      {
        title: "How to get it",
        items: [
          { label: "CSA Farm Shares", href: "/csa/" },
          { label: "Farmers Markets", href: "/farmers-markets/" },
          { label: "Pickup at the Farm", href: "/farm-pickup/" },
          { label: "Restaurants and Grocers", href: "/wholesale/" },
        ],
      },
    ],
  },
  {
    label: "Floral",
    href: "/floral/",
    groups: [
      {
        title: "Design work",
        items: [
          { label: "Weddings", href: "/wedding-flowers/" },
          { label: "Events and Celebrations", href: "/event-flowers/" },
          { label: "Sympathy Flowers", href: "/sympathy-flowers/" },
          { label: "Our Work", href: "/our-work/" },
        ],
      },
      {
        title: "Seasonal flowers",
        items: [
          { label: "Wreaths and Garland", href: "/wreaths-and-garland/" },
          { label: "Bouquets and Arrangements", href: "/bouquets/" },
          { label: "Flower Subscriptions", href: "/flower-subscriptions/" },
          { label: "Mother's Day", href: "/mothers-day/" },
          { label: "Buckets of Blooms", href: "/diy-flower-buckets/" },
        ],
      },
    ],
  },
  {
    label: "Visit",
    href: "/visit/",
    groups: [
      {
        title: "On the farm",
        items: [
          { label: "Seasons on the Farm", href: "/seasons/" },
          { label: "The Farm Store", href: "/farm-store/" },
          { label: "U-Pick Flowers", href: "/u-pick-flowers/" },
          { label: "U-Pick Orchard", href: "/u-pick-orchard/" },
        ],
      },
      {
        title: "Come out for something",
        items: [
          { label: "Farm Dinners", href: "/farm-dinners/" },
          { label: "Workshops and Classes", href: "/workshops/" },
          { label: "School Groups", href: "/school-groups/" },
          { label: "Private Gatherings", href: "/private-events/" },
        ],
      },
    ],
  },
  {
    label: "Our Story",
    href: "/about/",
    groups: [
      {
        title: "The two farms",
        items: [
          { label: "The Century Farm", href: "/century-farm/" },
          { label: "The Nelson Farm", href: "/nelson-farm/" },
          { label: "How We Farm", href: "/how-we-farm/" },
          { label: "Journal", href: "/journal/" },
        ],
      },
    ],
  },
  { label: "Contact", href: "/contact/" },
];
