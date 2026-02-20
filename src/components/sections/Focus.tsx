"use client";

import { useState, useEffect } from "react";
import Container from "@/components/ui/Container";
import {
  BrandingIcon,
  MarketingIcon,
  UXIcon,
  WebIcon,
} from "@/components/ui/ServiceIcons";

function ArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      <polyline points="15 10 20 15 15 20" />
      <path d="M4 4v7a4 4 0 0 0 4 4h12" />
    </svg>
  );
}

const SERVICES = [
  { id: "ux",        label: "UX UI",      href: "/leistungen/ux-ui",      Icon: UXIcon },
  { id: "web",       label: "Web",        href: "/leistungen/web",        Icon: WebIcon },
  { id: "branding",  label: "Branding",   href: "/leistungen/branding",   Icon: BrandingIcon },
  { id: "marketing", label: "Marketing",  href: "/leistungen/marketing",  Icon: MarketingIcon },
];

export default function Focus() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <>
      <section style={{ paddingTop: "clamp(60px, 8vw, 80px)", paddingBottom: "clamp(60px, 8vw, 80px)" }}>
        <Container>

          <h2
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 700,
              fontSize: "clamp(1.75rem, 4vw, 3rem)",
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
              color: "var(--color-text)",
              marginBottom: "clamp(40px, 6vw, 60px)",
            }}
          >
            Fokus
          </h2>

          <div className="focus-grid">
            {SERVICES.map(({ id, label, href, Icon }) => (
              <div key={id} style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "clamp(16px, 2vw, 20px)" }}>
                <Icon size={isMobile ? 60 : 80} style={{ color: "var(--color-text)" }} />
                <h3
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 700,
                    fontSize: "clamp(1.125rem, 2.5vw, 1.5rem)",
                    textTransform: "uppercase",
                    letterSpacing: "0.02em",
                    color: "var(--color-text)",
                    margin: 0,
                  }}
                >
                  {label}
                </h3>
                <a href={href} className="focus-link">
                  <ArrowIcon />
                  Mehr erfahren
                </a>
              </div>
            ))}
          </div>

        </Container>
      </section>
    </>
  );
}
