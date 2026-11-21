import SiteDocument from "@/components/SiteDocument";
import { enFontClasses } from "@/lib/fonts-en";
import { siteMetadata, viewport } from "@/lib/seo";
import "../globals.css";

// English pages — the plain addresses (/, /services, …). Telugu has its own
// layout in app/te. Both share one frame: components/SiteDocument.
export const metadata = siteMetadata("en");
export { viewport };

export default function RootLayout({ children }) {
  return (
    <SiteDocument lang="en" fontClasses={enFontClasses}>
      {children}
    </SiteDocument>
  );
}
