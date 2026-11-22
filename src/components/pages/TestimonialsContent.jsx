import ClosingCta from "@/components/ClosingCta";
import PageHeader from "@/components/PageHeader";
import { localePath } from "@/lib/i18n";
import { translations } from "@/lib/translations";
import { wrap } from "@/lib/ui";

// Quotes only, each set like a short letter: a brass quotation mark, the
// words in the readable body face, and the family's initial standing in a
// small doorway. The cards flow into columns, so any number of reviews —
// three today, more as customers send them — sits evenly.
// Add a review in translations.js (testimonials.items, both languages);
// only ever real words from real customers.
export default function TestimonialsContent({ lang }) {
  const t = translations[lang];
  const ts = t.testimonials;

  return (
    <>
      <PageHeader eyebrow={ts.label} title={ts.title} intro={ts.intro} />

      <section className={`${wrap} pb-16 md:pb-24`}>
        <div className="quote-grid">
          {ts.items.map((item) => (
            <figure key={item.name} className="quote-card" data-reveal>
              <span className="quote-mark" aria-hidden="true">
                &ldquo;
              </span>
              <blockquote className="m-0">
                <p className="quote-text">{item.quote}</p>
              </blockquote>
              <figcaption className="quote-person">
                <span className="quote-initial" aria-hidden="true">
                  {Array.from(item.name)[0]}
                </span>
                <span>
                  <span className="quote-name block">{item.name}</span>
                  <span className="type-small text-on-surface-muted block mt-0.5">{item.project}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <ClosingCta heading={ts.ctaHeading} button={ts.ctaButton} href={localePath(lang, "/contact")} />
    </>
  );
}
