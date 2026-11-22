// Central place for business identity & links — edit once, updates everywhere.
export const SITE = {
  name: "Suma Sree Interiors and Constructions",
  whatsapp: "https://wa.me/919133509293",
  // The business's own Instagram page (footer, Contact page and schema).
  instagram: "https://www.instagram.com/sumasreeinteriorsconstructions/",
  phoneDisplay: "+91 91335 09293",
  phoneHref: "tel:+919133509293",
  // Plain text message, for anyone who doesn't use WhatsApp.
  smsHref: "sms:+919133509293",

  // ⚠ PLACEHOLDERS — replace both before this goes live. example.com is
  // reserved, so the placeholder can never deliver a customer's email to a
  // stranger, and facebook.com/ is just Facebook's front page. Set either to
  // null to hide it everywhere (footer, Contact, the form's email option).
  email: "hello@example.com",
  facebook: "https://www.facebook.com/",

  // Swap for the Google Business Profile link / exact street address once
  // the owner shares it — the map pin then lands on the office itself.
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=Hanamakonda%2C+Warangal%2C+Telangana",
  mapsEmbed:
    "https://maps.google.com/maps?q=Hanamakonda%2C+Warangal%2C+Telangana&z=13&output=embed",

  // The site's own address — canonical links, sitemap.xml, robots.txt,
  // share previews and structured data all use it. Production is the Vercel
  // address below; switch to a custom domain once it's connected, or set
  // NEXT_PUBLIC_SITE_URL.
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://sumasreeinteriors.vercel.app",

  // Address is partial on purpose — owner will supply the street line.
  address: {
    locality: "Hanamakonda",
    region: "Telangana",
    postalCode: "506001",
    country: "IN",
  },
  // Structured-data service area: all of Telangana and Andhra Pradesh.
  // The office address stays Hanamakonda, Warangal.
  areasServed: ["Telangana", "Andhra Pradesh"],
};
