"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight, Close } from "@/components/icons";

// Loaded only after a photo is opened. The browser's <dialog> traps focus,
// closes on Escape, and returns focus to the control that opened it.
export default function PhotoLightbox({ photos, index, setIndex, labels }) {
  const dialog = useRef(null);
  const swipeFrom = useRef(null);
  const current = photos[index];

  useEffect(() => {
    const el = dialog.current;
    if (el && !el.open) el.showModal();
  }, []);

  const step = (by) => setIndex((i) => (i + by + photos.length) % photos.length);

  return (
    <dialog
      ref={dialog}
      className="lightbox"
      aria-label={current?.title ?? labels.view}
      onClose={() => setIndex(null)}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") {
          e.preventDefault();
          step(1);
        }
        if (e.key === "ArrowLeft") {
          e.preventDefault();
          step(-1);
        }
      }}
      onPointerDown={(e) => {
        swipeFrom.current = e.clientX;
      }}
      onPointerUp={(e) => {
        const dx = e.clientX - (swipeFrom.current ?? e.clientX);
        if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
        swipeFrom.current = null;
      }}
    >
      {current && (
        <div className="flex flex-col h-full text-white">
          <div className="flex items-center justify-between px-5 md:px-8 h-16 shrink-0">
            <p className="text-xs font-semibold tracking-[0.2em] text-white/70">
              {index + 1} / {photos.length}
            </p>
            <button
              type="button"
              onClick={() => dialog.current?.close()}
              aria-label={labels.close}
              className="inline-flex items-center justify-center min-h-11 min-w-11 -mr-2 text-white/80 hover:text-white transition-colors"
            >
              <Close />
            </button>
          </div>
          <div className="relative flex-1 min-h-0 mx-5 md:mx-24">
            <Image
              key={current.image}
              src={current.image}
              alt={current.title}
              fill
              sizes="100vw"
              className="lightbox-photo object-contain"
            />
          </div>
          <div className="flex items-center justify-between gap-4 px-5 md:px-8 h-20 shrink-0">
            <button type="button" onClick={() => step(-1)} aria-label={labels.prev} className="lightbox-step">
              <ArrowLeft />
            </button>
            <p className="text-center">
              <span className="font-display text-lg md:text-xl">{current.title}</span>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60 mt-1">
                {current.location}
              </span>
            </p>
            <button type="button" onClick={() => step(1)} aria-label={labels.next} className="lightbox-step">
              <ArrowRight />
            </button>
          </div>
        </div>
      )}
    </dialog>
  );
}
