import { themeColor } from "@/lib/brand";
import { SITE, siteUrl } from "@/lib/site";
import { localePath } from "@/lib/i18n";

// Home is the bare site URL. Every other path keeps its leading slash.
const absoluteUrl = (path) => (path === "/" ? siteUrl : `${siteUrl}${path}`);

// What Google and link previews (WhatsApp, Facebook) show for each page, in
// each language. Kept out of translations.js because none of it is rendered
// on the page itself.

const SITE_NAME = {
  en: SITE.name,
  te: "సుమ శ్రీ ఇంటీరియర్స్ & కన్‌స్ట్రక్షన్స్",
};

const AREA = {
  en: "Telangana & Andhra Pradesh",
  te: "తెలంగాణ & ఆంధ్రప్రదేశ్",
};

// Share cards. Absolute URLs, built from the site address, so WhatsApp and
// Facebook don't have to guess the host. The wide card is the og:image;
// Twitter uses its own 1200×600 card. The square card is published at
// /og-image-square.png for a 1:1 slot, and is not a second og:image — a
// second image makes some apps pick the square and crop the wide card.
const SHARE_ALT =
  "Suma Sree Interiors and Constructions logo: an open door on a turmeric threshold";

// Used only when a page has no description of its own (the unknown-address
// pages). Real pages keep the description already written for them.
const SHARE_DESCRIPTION =
  "Design · Construction · Renovation | Telangana & Andhra Pradesh. Office: Hanamakonda, Warangal";

const ogImage = {
  url: `${siteUrl}/og-image.png`,
  width: 1200,
  height: 630,
  alt: SHARE_ALT,
};

const twitterImage = {
  url: `${siteUrl}/twitter-card.png`,
  width: 1200,
  height: 600,
  alt: SHARE_ALT,
};

// Browser chrome. Light is limewash, dark is ink — the Gadapa palette,
// not a restyle of the page.
export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: themeColor.light },
    { media: "(prefers-color-scheme: dark)", color: themeColor.dark },
  ],
};

const PAGES = {
  home: {
    path: "/",
    en: {
      description:
        "Interior design and construction across Telangana and Andhra Pradesh. Plans, construction, renovation and complete home interiors, end to end.",
    },
    te: {
      description:
        "తెలంగాణ, ఆంధ్రప్రదేశ్‌లో ఇంటి నిర్మాణం, రెనోవేషన్, ఇంటీరియర్స్ — ప్లాన్ నుంచి గృహప్రవేశం దాకా అన్నీ ఒకే టీమ్.",
    },
  },
  services: {
    path: "/services",
    en: {
      title: "Services",
      description:
        "Construction, renovation and interiors by Suma Sree Interiors and Constructions — 2D & 3D plans, civil works, modular kitchens, wardrobes, false ceilings and more, across Telangana and Andhra Pradesh.",
    },
    te: {
      title: "సర్వీసులు",
      description:
        "సుమ శ్రీ ఇంటీరియర్స్ & కన్‌స్ట్రక్షన్స్ సర్వీసులు — 2D, 3D ప్లాన్లు, సివిల్ వర్క్స్, మాడ్యులర్ కిచెన్, వార్డ్‌రోబ్స్, ఫాల్స్ సీలింగ్, ఇంకా ఎన్నో. తెలంగాణ, ఆంధ్రప్రదేశ్ అంతటా.",
    },
  },
  portfolio: {
    path: "/portfolio",
    en: {
      title: "Our Work",
      description:
        "Our own work, in photos — hall, kitchen, bedroom and pooja room interiors. Interior design and construction across Telangana and Andhra Pradesh.",
    },
    te: {
      title: "మా పనులు",
      description:
        "హనుమకొండలో మేము చేసిన ఇంటి ఫోటోలు — హాల్, కిచెన్, బెడ్‌రూమ్, పూజ గది. అన్నీ మా చేతి పనులే.",
    },
  },
  testimonials: {
    path: "/testimonials",
    en: {
      title: "Testimonials",
      description:
        "What families say about building and renovating with Suma Sree Interiors and Constructions — in their own words.",
    },
    te: {
      title: "కస్టమర్ల మాటలు",
      description:
        "సుమ శ్రీతో ఇల్లు కట్టించుకున్న, మార్చుకున్న కుటుంబాలు ఏమంటున్నారో — వారి మాటల్లోనే.",
    },
  },
  contact: {
    path: "/contact",
    en: {
      title: "Contact",
      description:
        "Contact Suma Sree Interiors and Constructions for interior design and construction across Telangana and Andhra Pradesh. Office in Hanamakonda, Warangal — call, WhatsApp, email or SMS.",
    },
    te: {
      title: "కాంటాక్ట్",
      description:
        "తెలంగాణ, ఆంధ్రప్రదేశ్ అంతటా ఇంటీరియర్స్ & కన్‌స్ట్రక్షన్ కోసం సుమ శ్రీని కాంటాక్ట్ చేయండి. ఆఫీస్ హనుమకొండ, వరంగల్ — కాల్, WhatsApp, ఈమెయిల్ లేదా SMS.",
    },
  },
};

export const PAGE_PATHS = Object.values(PAGES).map((page) => page.path);

// Unknown addresses. The title has to be in the first HTML response —
// the layout default is the homepage title, which is what a 404 was showing.
const NOT_FOUND = {
  en: {
    title: "Page not found",
    description: "The link may be old, or the address mistyped. Everything else is one step away.",
  },
  te: {
    title: "పేజీ దొరకలేదు",
    description: "లింక్ పాతదై ఉండొచ్చు, లేదా అడ్రస్ తప్పుగా టైప్ అయి ఉండొచ్చు. మిగతావన్నీ ఇక్కడే ఉన్నాయి.",
  },
};

export function notFoundMetadata(lang) {
  const copy = NOT_FOUND[lang];
  const fullTitle = `${copy.title} | ${SITE_NAME[lang]}`;
  return {
    title: copy.title,
    description: copy.description,
    robots: { index: false, follow: true },
    openGraph: {
      title: fullTitle,
      description: copy.description,
      siteName: SITE_NAME[lang],
      locale: lang === "te" ? "te_IN" : "en_IN",
      type: "website",
      images: [ogImage],
    },
  };
}

// Site-wide defaults, set once in each language's layout.
export function siteMetadata(lang) {
  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: `${SITE_NAME[lang]} | ${AREA[lang]}`,
      template: `%s | ${SITE_NAME[lang]}`,
    },
    keywords:
      lang === "te"
        ? [
            "సుమ శ్రీ ఇంటీరియర్స్",
            "ఇంటి నిర్మాణం తెలంగాణ",
            "ఇంటి నిర్మాణం ఆంధ్రప్రదేశ్",
            "ఇంటీరియర్స్ తెలంగాణ",
            "ఇంటీరియర్స్ ఆంధ్రప్రదేశ్",
            "ఇంటి రెనోవేషన్ వరంగల్",
            "మాడ్యులర్ కిచెన్ హనుమకొండ",
            "హనుమకొండ ఇంటీరియర్స్",
            "Suma Sree Interiors",
          ]
        : [
            "interior design Telangana",
            "interior design Andhra Pradesh",
            "house construction Telangana",
            "house construction Andhra Pradesh",
            "home interiors Telangana and Andhra Pradesh",
            "home renovation Telangana",
            "home renovation Andhra Pradesh",
            "modular kitchen Hanamakonda",
            "house plans Warangal",
            "Suma Sree Interiors",
          ],
    // Fallback share text for a page that sets no description of its own.
    // A page that sets openGraph replaces this whole object, and brings
    // the image with it (see pageMetadata). Twitter is not replaced by
    // those pages, so the card and image set here stay, and the description
    // is filled from that page's own text.
    openGraph: {
      siteName: SITE_NAME[lang],
      description: SHARE_DESCRIPTION,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      images: [twitterImage],
    },
    // Google Search Console: paste the verification code into the
    // GOOGLE_SITE_VERIFICATION setting in Vercel — no code change needed.
    verification: { google: process.env.GOOGLE_SITE_VERIFICATION },
  };
}

// Per-page title, description and the links that tell Google "this page
// also exists in the other language" (hreflang), so a Telugu search gets
// the Telugu page and the two never compete as duplicates.
export function pageMetadata(lang, key) {
  const page = PAGES[key];
  const copy = page[lang];
  const url = absoluteUrl(localePath(lang, page.path));
  const fullTitle = copy.title
    ? `${copy.title} | ${SITE_NAME[lang]}`
    : `${SITE_NAME[lang]} | ${AREA[lang]}`;

  return {
    ...(copy.title ? { title: copy.title } : {}),
    description: copy.description,
    alternates: {
      canonical: url,
      languages: {
        en: absoluteUrl(page.path),
        te: absoluteUrl(localePath("te", page.path)),
        "x-default": absoluteUrl(page.path),
      },
    },
    openGraph: {
      title: fullTitle,
      description: copy.description,
      url,
      siteName: SITE_NAME[lang],
      locale: lang === "te" ? "te_IN" : "en_IN",
      type: "website",
      images: [ogImage],
    },
  };
}
