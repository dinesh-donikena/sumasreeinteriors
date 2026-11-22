import Image from "next/image";
import Link from "next/link";
import ClosingCta from "@/components/ClosingCta";
import HeroScroll from "@/components/HeroScroll";
import { ArrowRight, Plus } from "@/components/icons";
import { localePath } from "@/lib/i18n";
import { translations } from "@/lib/translations";
import { btnPrimary, btnSecondary, numeral, wrap } from "@/lib/ui";

// Three rooms from the Hanamakonda house — all landscape photos, so none is
// cropped into a shape it wasn't taken in. The hall arch leads, wide; the
// tall pooja panel and TV unit stay whole on Our Work. Each opens like a
// door as it comes into view (data-door, RevealOnScroll).
const GLIMPSE = [
  { src: "/portfolio/hanamakonda-hall-arch.jpg", project: 0, className: "glimpse-wide" },
  { src: "/portfolio/hanamakonda-kitchen.jpg", project: 1 },
  { src: "/portfolio/hanamakonda-bedroom-olive.jpg", project: 4 },
];

// Home is the overview: the doorway, who we are in one line, the three
// kinds of work (each going to its own place on Services), a look at a real
// house, what we stand on, the questions, and a way onward.
export default function HomeContent({ lang }) {
  const t = translations[lang];
  const path = (to) => localePath(lang, to);

  return (
    <>
      {/* Hero — the TV unit in a doorway that opens into the full photo as
          you scroll (HeroScroll + .hero-* in globals.css) */}
      <section className="hero-stage">
        <HeroScroll />
        <div className="hero-frame">
          <div className="hero-door">
            <Image
              src="/portfolio/hanamakonda-tv-unit.jpg"
              alt={t.home.heroPhotoAlt}
              fill
              fetchPriority="high"
              loading="eager"
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="hero-copy">
            <p className="eyebrow eyebrow-centred mb-4">{t.home.heroEyebrow}</p>
            <h1 className="type-display text-primary mx-auto text-balance">
              {t.home.heroTitle1}{" "}
              <em className="italic text-accent">{t.home.heroTitle2}</em>
            </h1>
            <div className="btn-stack mt-8">
              <Link href={path("/portfolio")} className={`${btnPrimary} group`}>
                {t.home.heroCta}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href={path("/contact")} className={`${btnSecondary} hero-secondary`}>
                {t.home.heroTalk}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Who we are, in one breath */}
      <section className={`${wrap} py-12 md:py-20`}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-start">
          <h2 className="lg:col-span-6 type-h2 text-primary">{t.home.introHeading}</h2>
          <div className="lg:col-span-6">
            <p className="type-body text-on-surface-muted">{t.home.introP1}</p>
            <p className="type-small text-accent mt-4">{t.home.introP2}</p>
          </div>
        </div>
      </section>

      {/* The three kinds of work. Each card opens its own list on Services. */}
      <section className="border-y border-outline-light/70 bg-surface-low grain">
        <div className={`${wrap} py-12 md:py-20`}>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8 md:mb-12">
            <div>
              <p className="eyebrow mb-4">{t.home.servicesLabel}</p>
              <h2 className="type-h2 text-primary">{t.home.servicesHeading}</h2>
            </div>
            <Link href={path("/services")} className="link-brass">
              {t.home.servicesMore}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-3 gap-px bg-outline-light/70 border border-outline-light/70">
            {t.services.categories.map((cat, i) => (
              <li key={cat.key} className="bg-card">
                <Link href={path(`/services#${cat.key}`)} className="service-card group">
                  <span className="type-small text-accent">{numeral(i)}</span>
                  <span className="type-h3 text-primary block mt-2 group-hover:text-accent transition-colors">
                    {cat.title}
                  </span>
                  <span className="type-body text-on-surface-muted block mt-2">{cat.tagline}</span>
                  <span className="service-card-items">
                    {cat.items.slice(0, 4).map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                    <span className="text-accent">
                      {t.services.moreCount.replace("{n}", cat.items.length - 4)}
                    </span>
                  </span>
                  <span className="service-card-go type-small text-primary">
                    {t.home.serviceLink}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* A real house, three rooms of it */}
      <section className={`${wrap} py-12 md:py-20`}>
        <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
          <div>
            <p className="eyebrow mb-4">{t.home.portfolioLabel}</p>
            <h2 className="type-h2 text-primary">{t.home.portfolioHeading}</h2>
          </div>
          <Link href={path("/portfolio")} className="link-brass">
            {t.home.portfolioLink}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <ul className="glimpse-grid">
          {GLIMPSE.map((photo) => {
            const project = t.home.projects[photo.project];
            return (
              <li key={photo.src} className={photo.className}>
                <Link href={path("/portfolio")} className="block group">
                  <span className="glimpse-frame" data-door>
                    <Image
                      src={photo.src}
                      alt={project.title}
                      fill
                      sizes={photo.className ? "(min-width: 768px) 90vw, 100vw" : "(min-width: 768px) 45vw, 100vw"}
                      className="service-photo object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </span>
                  <span className="flex items-baseline justify-between gap-3 mt-3 pt-3 border-t border-outline-light">
                    <span className="type-small text-primary">{project.title}</span>
                    <span className="type-small text-on-surface-muted">{project.location}</span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      {/* What we stand on — three claims, each with the reason behind it */}
      <section className="bg-primary text-white">
        <div className={`${wrap} py-12 md:py-20`}>
          <p className="eyebrow eyebrow-light mb-4">{t.home.promiseLabel}</p>
          <h2 className="type-h2 text-white mb-10 md:mb-14">{t.home.promiseHeading}</h2>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {t.home.promise.map((item, i) => (
              <li key={item.title} className="promise-item">
                {/* The numeral stands in a small doorway — the brand's mark */}
                <span className="promise-door" aria-hidden="true">
                  {numeral(i)}
                </span>
                <h3 className="type-h3 text-white mt-5 mb-3">{item.title}</h3>
                <p className="type-body text-primary-light">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <div className={`${wrap} py-12 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start`}>
          <div className="lg:col-span-4">
            <p className="eyebrow mb-4">{t.home.faqLabel}</p>
            <h2 className="type-h2 text-primary mb-4">{t.home.faqHeading}</h2>
            <p className="type-body text-on-surface-muted">{t.home.faqNote}</p>
            <Link href={path("/contact")} className="link-brass mt-4">
              {t.home.faqCall}
            </Link>
          </div>
          <div className="lg:col-span-8 border-t border-outline-light">
            {t.home.faq.map((item) => (
              <details key={item.q} className="faq-item border-b border-outline-light">
                <summary className="flex items-center justify-between gap-6 py-4 type-body font-medium text-primary hover:text-accent transition-colors">
                  {item.q}
                  <Plus className="faq-icon w-5 h-5 shrink-0 text-accent" />
                </summary>
                <p className="type-body text-on-surface-muted pb-6 -mt-1">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ClosingCta
        heading={t.home.ctaHeading}
        text={t.home.ctaText}
        button={t.home.ctaButton}
        href={path("/contact")}
      />
    </>
  );
}
