// Paulsen Farm and Floral — business facts & site config (edit here, never in templates)
// SCAFFOLD BUILD, 2026-08-16. Verified facts only — no guessed business model, no address,
// no phone, no claims. Fill in after the discovery call per the interview guide.
export const site = {
  name: "Paulsen Farm and Floral",
  legalName: "Paulsen Farm and Floral LLC",
  domain: "https://www.paulsenfarmandfloral.com",
  tagline: "A farm and flower business near Atlantic, Iowa.",
  city: "Atlantic",
  state: "IA",
  region: "Cass County, Iowa",
  // Contact: routes through a Netlify form, not a raw mailto, to avoid publishing an
  // unprotected inbox before Alex has a business phone/GBP set up.
  contactNoticeEmail: "paulsen.farm.floral@gmail.com",
  og: null, // no logo or photos approved yet — do not fabricate one
  year: "2026",
};

// Master nav — deliberately short. Add Products/Market/Blog once the business model
// and product list are confirmed on the discovery call.
export const nav = [
  { label: "About", href: "/about/" },
  { label: "Contact", href: "/contact/" },
];
