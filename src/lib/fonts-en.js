import { Fraunces, DM_Sans } from "next/font/google";

// English only. One display weight is preloaded. Italic and the body face
// download when a page actually uses them.

export const fraunces = Fraunces({
  subsets: ["latin"],
  weight: "500",
  style: "normal",
  variable: "--font-fraunces",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

export const frauncesItalic = Fraunces({
  subsets: ["latin"],
  weight: "500",
  style: "italic",
  variable: "--font-fraunces-italic",
  display: "swap",
  preload: false,
  adjustFontFallback: true,
});

export const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
  preload: false,
  adjustFontFallback: true,
});

export const enFontClasses = `${fraunces.variable} ${frauncesItalic.variable} ${dmSans.variable}`;
