import { Noto_Serif_Telugu, Noto_Sans_Telugu } from "next/font/google";

// Telugu only. The serif is the display face and the only one preloaded.

export const notoSerifTelugu = Noto_Serif_Telugu({
  subsets: ["telugu"],
  weight: "600",
  variable: "--font-noto-serif-telugu",
  display: "swap",
  preload: false,
  adjustFontFallback: true,
});

// The services intro is body text, so this is the face that decides LCP.
// One weight, preloaded. Heavier weights are not downloaded.
export const notoSansTelugu = Noto_Sans_Telugu({
  subsets: ["telugu"],
  weight: "400",
  variable: "--font-noto-sans-telugu",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

export const teFontClasses = `${notoSerifTelugu.variable} ${notoSansTelugu.variable}`;
