"use client";

import { useEffect, useRef } from "react";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const locoScrollRef = useRef<any>(null);

  useEffect(() => {
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

          // Update on window resize
          const handleResize = () => {
            if (locoScrollRef.current) {
              locoScrollRef.current.update();
            }
          };

          window.addEventListener("resize", handleResize);

          // Cleanup resize listener
          return () => {
            window.removeEventListener("resize", handleResize);
          };
        }
      } catch (error) {
        console.error("Locomotive Scroll error:", error);
      }
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(initLocomotiveScroll, 100);

    return () => {
      clearTimeout(timer);
      if (locoScrollRef.current) {
        locoScrollRef.current.destroy();
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
