// Central place for business identity & links — edit once, updates everywhere.
export const SITE = {
  name: "Suma Sree Interiors and Constructions",
  whatsapp: "https://wa.me/917097755921",
  // The business's own Instagram page (footer, Contact page and schema).
  instagram: "https://www.instagram.com/sumasreeinteriorsconstructions/",
  phoneDisplay: "+91 70977 55921",
  phoneHref: "tel:+917097755921",
  // Plain text message, for anyone who doesn't use WhatsApp.
  smsHref: "sms:+917097755921",

  // The business email (footer, Contact page and the form's email option).
  email: "sumasreeinteriors298@gmail.com",
  // ⚠ PLACEHOLDER — facebook.com/ is just Facebook's front page. Replace it
  // with the business's own page once it exists, or set it to null to hide
  // the icon everywhere (footer and Contact).
  facebook: "https://www.facebook.com/",

  // Directions to the office, in whichever maps app the visitor prefers.
  // Swap the destination for the exact street address (or the Google
  // Business Profile) once the owner shares it, so the route ends at the
  // office itself.
  directions: {
    google:
      "https://www.google.com/maps/dir/?api=1&destination=Hanamakonda%2C+Warangal%2C+Telangana",
    apple: "https://maps.apple.com/?daddr=Hanamakonda%2C+Warangal%2C+Telangana",
  },
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
