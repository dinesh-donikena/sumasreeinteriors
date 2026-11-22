"use client";

import { useEffect } from "react";

// The service cards on Home link to /services#construction and so on. The
// lists there are closed <details>; this opens the one the link points at
// (on arrival, and if the address changes while on the page), so the
// visitor lands on the open list, not a closed heading.
export default function OpenFromHash() {
  useEffect(() => {
    const open = () => {
      const id = decodeURIComponent(window.location.hash.slice(1));
      const target = id && document.getElementById(id);
      if (target?.tagName === "DETAILS") {
        target.open = true;
        target.scrollIntoView({ block: "start" });
      }
    };
    open();
    window.addEventListener("hashchange", open);
    return () => window.removeEventListener("hashchange", open);
  }, []);

  return null;
}
