import Link from "next/link";
import { btnPrimary, wrap } from "@/lib/ui";

// The dark band that closes a page with an invitation. A hairline arch
// (two brass lines, like a carved door frame) stands behind the words, so
// the band reads as an open doorway without saying so. Drawn in CSS
// (.cta-arch in globals.css), wide enough that no text ever crosses it.
export default function ClosingCta({ heading, text, button, href }) {
  return (
    <section className="relative overflow-hidden bg-primary text-center">
      <div className="cta-arch" aria-hidden="true" />
      {/* Generous top space so the words sit inside the arch, where the
          curve is wider than the text — no line ever crosses a word */}
      <div className={`${wrap} relative pt-36 pb-20 sm:pt-44 md:pt-56 md:pb-28`}>
        <h2 className="type-h2 text-white mx-auto mb-6 max-w-[36rem]">
          {heading}
        </h2>
        {text && (
          <p className="type-body text-primary-light mx-auto mb-8 max-w-[34rem]">
            {text}
          </p>
        )}
        <div data-reveal className={`btn-stack ${text ? "" : "mt-10"}`}>
          <Link href={href} className={btnPrimary}>
            {button}
          </Link>
        </div>
      </div>
    </section>
  );
}
