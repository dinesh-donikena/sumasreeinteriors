"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { useState } from "react";

const PhotoLightbox = dynamic(() => import("@/components/PhotoLightbox"), { ssr: false });

// The Our Work gallery: room filters, the photo wall, and a full-screen
// viewer. The viewer script loads only after a photo is opened.
export default function Gallery({ projects, filters, labels }) {
  const [filter, setFilter] = useState("all");
  const [open, setOpen] = useState(null);
  const shown = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 pb-6" role="group">
        {filters.map((f) => (
          <button
            key={f.key}
            type="button"
            onClick={() => {
              setFilter(f.key);
              setOpen(null);
            }}
            aria-pressed={filter === f.key}
            className={`inline-flex items-center min-h-12 text-xs font-semibold uppercase tracking-[0.12em] border-b-2 transition-colors ${
              filter === f.key
                ? "text-primary border-accent"
                : "text-on-surface-muted border-transparent hover:text-accent"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="masonry-grid">
        {shown.map((project, i) => (
          <figure key={project.image} className="masonry-item group m-0">
            <button
              type="button"
              onClick={() => setOpen(i)}
              aria-label={`${labels.view}: ${project.title}`}
              className="block w-full cursor-zoom-in"
            >
              <span className="block overflow-hidden bg-surface-high">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={project.w}
                  height={project.h}
                  loading="lazy"
                  sizes="(min-width: 1024px) 33vw, 45vw"
                  className="w-full h-auto"
                />
              </span>
            </button>
            <figcaption className="mt-2 pt-2 border-t border-outline-light">
              <h2 className="type-small text-primary">{project.title}</h2>
            </figcaption>
          </figure>
        ))}
      </div>

      {open !== null && (
        <PhotoLightbox photos={shown} index={open} setIndex={setOpen} labels={labels} />
      )}
    </>
  );
}
