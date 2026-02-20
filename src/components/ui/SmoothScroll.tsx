"use client";

import { useEffect, useRef } from "react";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const locoScrollRef = useRef<any>(null);
  const resizeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let cleanup: (() => void) | undefined;

    const initLocomotiveScroll = async () => {
      try {
        const LocomotiveScroll = (await import("locomotive-scroll")).default;

        if (scrollRef.current) {
          locoScrollRef.current = new LocomotiveScroll({
            el: scrollRef.current,
            smooth: true,
            smoothMobile: true,
            multiplier: 0.9,
            lerp: 0.08,
            class: "is-inview",
            smartphone: {
              smooth: true,
              multiplier: 0.9,
            },
            tablet: {
              smooth: true,
              multiplier: 0.9,
            },
          });

          // Debounced resize handler
          const handleResize = () => {
            // Clear existing timeout
            if (resizeTimeoutRef.current) {
              clearTimeout(resizeTimeoutRef.current);
            }

            // Set new timeout
            resizeTimeoutRef.current = setTimeout(() => {
              if (locoScrollRef.current && typeof locoScrollRef.current.update === 'function') {
                try {
                  locoScrollRef.current.update();
                } catch (err) {
                  console.warn('Locomotive Scroll update error:', err);
                }
              }
            }, 150); // Debounce by 150ms
          };

          window.addEventListener("resize", handleResize);

          // Cleanup function
          cleanup = () => {
            window.removeEventListener("resize", handleResize);
            if (resizeTimeoutRef.current) {
              clearTimeout(resizeTimeoutRef.current);
            }
          };
        }
      } catch (error) {
        console.error("Locomotive Scroll initialization error:", error);
      }
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(initLocomotiveScroll, 100);

    return () => {
      clearTimeout(timer);

      // Clear resize timeout
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }

      // Run cleanup function if it exists
      if (cleanup) {
        cleanup();
      }

      // Destroy Locomotive Scroll instance
      if (locoScrollRef.current) {
        try {
          if (typeof locoScrollRef.current.destroy === 'function') {
            locoScrollRef.current.destroy();
          }
        } catch (err) {
          console.warn('Locomotive Scroll destroy error:', err);
        }
        locoScrollRef.current = null;
      }
    };
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container style={{ minHeight: "100vh" }}>
      {children}
    </div>
  );
}
