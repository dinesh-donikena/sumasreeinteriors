import ClosingCta from "@/components/ClosingCta";
import PageHeader from "@/components/PageHeader";
import ProcessSteps from "@/components/ProcessSteps";
import { localePath } from "@/lib/i18n";
import { translations } from "@/lib/translations";
import { wrap } from "@/lib/ui";

// Services owns the work we do and the one way that work proceeds.
// Each list stays in the page, closed until it is opened. Six rooms sit
// below, and the rest of the photos live on Portfolio.
export default function ServicesContent({ lang }) {
  const t = translations[lang];
  const sv = t.services;
  const steps = sv.process.map((title, i) => ({
    title,
    desc: t.testimonials.steps[i].desc,
  }));

  return (
    <>
      <PageHeader title={sv.title} intro={sv.intro} align="left" />

      <section className={`${wrap} pb-8`}>
        {sv.categories.map((cat, i) => (
          <details key={cat.key} id={cat.key} className="faq-item border-t border-primary">
            <summary className="py-3">
              <span className="type-small text-accent">{String(i + 1).padStart(2, "0")}</span>
              <span className="type-h3 text-primary block mt-1">{cat.title}</span>
              <span className="type-body text-on-surface-muted block mt-1">{cat.tagline}</span>
            </summary>
            <ul className="grid grid-cols-2 gap-2 pb-4">
              {cat.items.map((item) => (
                <li key={item} className="type-small px-2 py-2 border border-outline-light bg-card text-primary">
                  {item}
                </li>
              ))}
            </ul>
          </details>
        ))}
      </section>

      <ProcessSteps
        label={sv.processLabel}
        heading={t.testimonials.processHeading}
        text={t.testimonials.processText}
        steps={steps}
      />

      <section className="bg-surface-low grain border-y border-outline-light/70">
        <div className={`${wrap} py-8 md:py-12 grid grid-cols-1 lg:grid-cols-2 gap-8`}>
          <div>
            <h2 className="type-h3 text-primary mb-4">{sv.buildHeading}</h2>
            <ul className="flex flex-wrap gap-2">
              {sv.buildTypes.map((type) => (
                <li key={type} className="type-small px-3 py-2 rounded-full border border-outline-light bg-card text-primary">
                  {type}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="type-h3 text-primary mb-3">{sv.areasHeading}</h2>
            <p className="type-body text-on-surface-muted mb-4">{sv.areasText}</p>
            <ul className="flex flex-wrap gap-2">
              {sv.areas.map((area) => (
                <li key={area} className="type-small px-3 py-2 rounded-full border border-outline-light bg-card text-primary">
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className={`${wrap} py-8 md:py-12`}>
        <h2 className="type-h3 text-primary mb-2">{sv.materialsHeading}</h2>
        <p className="type-body text-on-surface-muted mb-4">{sv.materialsNote}</p>
        <ul>
          {sv.materials.map((m) => (
            <li key={m.name} className="flex flex-wrap gap-x-3 gap-y-0.5 border-t border-outline-light py-2">
              <span className="type-small text-primary">{m.name}</span>
              <span className="type-small text-on-surface-muted">{m.brands}</span>
            </li>
          ))}
        </ul>
      </section>

      <ClosingCta
        heading={sv.ctaHeading}
        button={t.nav.portfolio}
        href={localePath(lang, "/portfolio")}
      />
    </>
  );
}
