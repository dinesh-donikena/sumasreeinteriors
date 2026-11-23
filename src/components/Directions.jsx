import { SITE } from "@/lib/site";

// Directions to the office. Visitors pick their own maps app: Google Maps
// (most Android phones) or Apple Maps (iPhones). Each link opens the route
// from wherever they are. App names stay in English in both languages,
// because that is how they appear on the phone.
const APPS = [
  { name: "Google Maps", href: SITE.directions.google },
  { name: "Apple Maps", href: SITE.directions.apple },
];

export default function Directions({ label, className = "" }) {
  return (
    <p className={`directions ${className}`}>
      <span className="directions-label">{label}</span>
      {APPS.map((app) => (
        <a
          key={app.name}
          href={app.href}
          target="_blank"
          rel="noopener noreferrer"
          className="directions-link"
        >
          {app.name}
        </a>
      ))}
    </p>
  );
}
