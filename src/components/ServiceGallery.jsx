"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { useState } from "react";

const PhotoLightbox = dynamic(() => import("@/components/PhotoLightbox"), { ssr: false });

// Six rooms, one crop. The viewer script loads only after a photo is opened.
export default function ServiceGallery({ photos, labels }) {
  const [open, setOpen] = useState(null);

  return (
    <>
      <div className="editorial-grid">
        {photos.map((photo, i) => (
          <figure key={photo.image} className="m-0">
            <button
              type="button"
              onClick={() => setOpen(i)}
              aria-label={`${labels.view}: ${photo.title}`}
              className="block w-full cursor-zoom-in"
            >
              <span className="relative block overflow-hidden bg-surface-high crop-wide">
                <Image
                  src={photo.image}
                  alt={photo.title}
                  fill
                  loading="lazy"
                  sizes="(min-width: 800px) 40vw, 45vw"
                  className="object-cover"
                />
              </span>
            </button>
            <figcaption className="mt-2 pt-2 border-t border-outline-light">
              <span className="type-small text-primary">{photo.title}</span>
            </figcaption>
          </figure>
        ))}
      </div>
      {open !== null && (
        <PhotoLightbox photos={photos} index={open} setIndex={setOpen} labels={labels} />
      )}
    </>
  );
}
