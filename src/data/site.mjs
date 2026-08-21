// Paulsen Farm and Floral - business facts & site config (edit here, never in templates)
// FIRST REAL CONTENT BUILD, 2026-08-21, from the 2026-08-17 Alex discovery call.
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

// Master nav. Two sides of one brand, farm first, then floral, then the story.
export const nav = [
  { label: "Pastured Chicken", href: "/pastured-chicken/" },
  { label: "Wreaths and Garland", href: "/wreaths-and-garland/" },
  { label: "Weddings", href: "/wedding-flowers/" },
  { label: "Our Story", href: "/about/" },
  { label: "Contact", href: "/contact/" },
];
