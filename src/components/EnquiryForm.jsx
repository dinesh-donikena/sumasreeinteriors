"use client";

import { useState } from "react";
import { track } from "@vercel/analytics";
import { MailIcon, MessageIcon, WhatsAppIcon } from "@/components/icons";
import { SITE } from "@/lib/site";
import { btnSecondary, btnWhatsApp } from "@/lib/ui";

const labelClass = "block text-xs font-semibold uppercase tracking-[0.12em] text-primary mb-2";
const inputClass =
  "w-full min-h-11 bg-transparent py-2.5 px-0 border-0 border-b border-outline-light focus:border-accent focus:outline-none text-base transition-colors placeholder:text-outline/70";

// Write once, send it your way. The same pre-filled message opens in
// WhatsApp (the main button — it's where the owner already replies), in the
// visitor's email app, or as an SMS for anyone without WhatsApp. Nothing is
// sent or stored by the website itself, so there is no form backend or API
// key that can quietly break. The email option shows only when SITE.email
// is set.
// Hands a mailto: or sms: link to the phone's own app, the same way tapping
// a link would.
function openApp(href) {
  const a = document.createElement("a");
  a.href = href;
  a.click();
}

export default function EnquiryForm({ f, services }) {
  const [errors, setErrors] = useState({});

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    // Which button sent it: whatsapp (also the Enter key), email or sms
    const channel = e.nativeEvent.submitter?.value || "whatsapp";
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const message = String(data.get("message") || "").trim();
    const next = {};
    if (!name) next.name = f.required;
    if (!message) next.message = f.required;
    setErrors(next);
    if (next.name || next.message) {
      form.querySelector(next.name ? "#name" : "#message")?.focus();
      return;
    }

    const need = data.getAll("service").join(", ");
    const site = String(data.get("location") || "").trim();

    const lines = [`${f.waHello} ${name}.`];
    if (need) lines.push(`${f.waNeed}: ${need}`);
    if (site) lines.push(`${f.waSite}: ${site}`);
    lines.push("", message);

    const text = encodeURIComponent(lines.join("\n"));

    // Counted without any of the visitor's details — only that the form
    // was used, which way, and on which page.
    track("enquiry_form", { page: window.location.pathname, channel });

    if (channel === "email") {
      openApp(`mailto:${SITE.email}?subject=${encodeURIComponent(f.emailSubject)}&body=${text}`);
    } else if (channel === "sms") {
      // "?&body=" is the form both iPhone and Android Messages accept
      openApp(`${SITE.smsHref}?&body=${text}`);
    } else {
      window.open(`${SITE.whatsapp}?text=${text}`, "_blank", "noopener,noreferrer");
    }
  }

  return (
    // noValidate: the form checks the two required fields itself, so the
    // message appears in the page's own language, not the browser's
    <form className="space-y-9" onSubmit={handleSubmit} noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-9">
        <div>
          <label className={labelClass} htmlFor="name">
            {f.name}
          </label>
          <input
            className={inputClass}
            id="name"
            name="name"
            placeholder={f.namePlaceholder}
            type="text"
            autoComplete="name"
            required
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? "name-error" : undefined}
            onChange={() => errors.name && setErrors((prev) => ({ ...prev, name: undefined }))}
          />
          {errors.name && (
            <p id="name-error" className="mt-2 text-sm text-error" role="alert">
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <label className={labelClass} htmlFor="location">
            {f.location}
          </label>
          <input
            className={inputClass}
            id="location"
            name="location"
            placeholder={f.locationPlaceholder}
            type="text"
            autoComplete="address-level2"
          />
        </div>
      </div>

      <fieldset>
        <legend className={labelClass}>{f.need}</legend>
        <div className="flex flex-wrap gap-2.5 pt-1">
          {services.map((service) => (
            <label key={service} className="cursor-pointer">
              <input type="checkbox" name="service" value={service} className="peer sr-only" />
              <span className="inline-flex items-center min-h-11 px-4 rounded-full border border-outline-light text-sm text-secondary transition-colors peer-checked:bg-primary peer-checked:border-primary peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-accent peer-focus-visible:ring-offset-2 hover:border-accent">
                {service}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label className={labelClass} htmlFor="message">
          {f.message}
        </label>
        <textarea
          className={`${inputClass} resize-none`}
          id="message"
          name="message"
          placeholder={f.messagePlaceholder}
          rows={4}
          required
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? "message-error" : undefined}
          onChange={() => errors.message && setErrors((prev) => ({ ...prev, message: undefined }))}
        />
        {errors.message && (
          <p id="message-error" className="mt-2 text-sm text-error" role="alert">
            {errors.message}
          </p>
        )}
      </div>

      <div className="pt-1">
        <button type="submit" name="channel" value="whatsapp" className={btnWhatsApp}>
          <WhatsAppIcon className="w-5 h-5" />
          {f.sendWhatsApp}
        </button>

        <p className="type-small text-on-surface-muted mt-6">{f.altHeading}</p>
        <div className="send-alt">
          {SITE.email && (
            <button type="submit" name="channel" value="email" className={btnSecondary}>
              <MailIcon className="w-4 h-4" />
              {f.sendEmail}
            </button>
          )}
          <button type="submit" name="channel" value="sms" className={btnSecondary}>
            <MessageIcon className="w-4 h-4" />
            {f.sendSms}
          </button>
        </div>

        <p className="text-sm text-on-surface-muted mt-5">{f.sendNote}</p>
      </div>
    </form>
  );
}
