import Link from "next/link";
import Logo from "@/components/Logo";
import { FacebookIcon, InstagramIcon, MailIcon, WhatsAppIcon } from "@/components/icons";
import { localePath } from "@/lib/i18n";
import { SITE } from "@/lib/site";
import { translations } from "@/lib/translations";
import { wrap } from "@/lib/ui";

const heading = "type-small block text-accent mb-5";
const link =
  "inline-flex items-center min-h-12 text-on-surface-muted hover:text-primary transition-colors type-body";

export default function Footer({ lang }) {
  const t = translations[lang];
  const path = (to) => localePath(lang, to);
  const socials = [
    { key: "whatsapp", href: SITE.whatsapp, Icon: WhatsAppIcon, label: t.common.whatsappLabel, external: true },
    { key: "instagram", href: SITE.instagram, Icon: InstagramIcon, label: t.common.instagramLabel, external: true },
    { key: "facebook", href: SITE.facebook, Icon: FacebookIcon, label: t.common.facebookLabel, external: true },
    { key: "email", href: SITE.email && `mailto:${SITE.email}`, Icon: MailIcon, label: t.common.emailLabel },
  ].filter((s) => s.href);

  return (
    <footer className="bg-surface-container grain">
      <div className={`${wrap} grid grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-8 pt-12 pb-10`}>
        <div className="col-span-2 lg:col-span-4">
          <h2>
            <Logo lang={lang} large />
          </h2>
          <p className="text-base text-on-surface-muted max-w-xs leading-relaxed mt-5">{t.footer.tagline}</p>
        </div>

        <nav className="lg:col-span-2 flex flex-col" aria-label={t.footer.pages}>
          <span className={heading}>{t.footer.pages}</span>
          <Link href={path("/portfolio")} className={link}>
            {t.nav.portfolio}
          </Link>
          <Link href={path("/services")} className={link}>
            {t.nav.services}
          </Link>
          <Link href={path("/testimonials")} className={link}>
            {t.nav.testimonials}
          </Link>
          <Link href={path("/contact")} className={link}>
            {t.footer.contactUs}
          </Link>
        </nav>

        {/* Ways to reach us — one row of round icons, then the email address
            written out so it can be copied. Each icon shows only when its
            link is set in lib/site.js. */}
        <div className="col-span-2 lg:col-span-3 flex flex-col order-last lg:order-none">
          <span className={heading}>{t.footer.connect}</span>
          <div className="social-row">
            {socials.map((s) => (
              <a
                key={s.key}
                href={s.href}
                aria-label={s.label}
                title={s.label}
                className="social-icon"
                {...(s.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                <s.Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
          {SITE.email && (
            <a href={`mailto:${SITE.email}`} className={`${link} break-all mt-2`}>
              {SITE.email}
            </a>
          )}
        </div>

        <div className="lg:col-span-3">
          <span className={heading}>{t.footer.office}</span>
          <p className="text-on-surface-muted text-base leading-relaxed whitespace-pre-line">{t.footer.address}</p>
          <a
            href={SITE.mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-primary border-b border-accent pb-0.5 hover:text-accent transition-colors"
          >
            {t.contact.openMap}
          </a>
        </div>
      </div>

      <div className={wrap}>
        <p className="border-t border-outline-light py-6 text-xs font-semibold text-on-surface-muted">
          &copy; {new Date().getFullYear()} {t.brand.full}, {t.footer.city}. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
