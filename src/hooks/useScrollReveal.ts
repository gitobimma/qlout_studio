"use client";

import { useEffect, useRef } from "react";

/**
 * Attach this ref to a container. When the container scrolls into view,
 * all child elements with className="reveal" receive "is-visible" – triggering
 * the CSS fade-up transition defined in globals.css.
 *
 * Stagger individual children by setting --reveal-delay as an inline style:
 *   style={{ "--reveal-delay": "0.15s" } as React.CSSProperties}
 */
export function useScrollReveal<T extends HTMLElement = HTMLElement>(
  options?: IntersectionObserverInit
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const reveals = container.classList.contains("reveal")
      ? [container]
      : Array.from(container.querySelectorAll<HTMLElement>(".reveal"));

    if (reveals.length === 0) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveals.forEach((el) => el.classList.add("is-visible"));
          observer.unobserve(container);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px", ...options }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return ref;
}
