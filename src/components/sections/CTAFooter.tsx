"use client";

import Container from "@/components/ui/Container";
import { BrandingIcon, UXIcon, WebIcon, MarketingIcon } from "@/components/ui/ServiceIcons";

export default function CTAFooter() {
  return (
    <section style={{
      background: "var(--color-text)",
      color: "#fff",
      paddingTop: "120px",
      paddingBottom: "120px",
    }}>
      <Container>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "48px",
        }}>
          <div style={{
            maxWidth: "720px",
          }}>
            <h2 style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 700,
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              textTransform: "uppercase",
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
              margin: "0 0 24px",
            }}>
              Lassen Sie uns<br />gestalten.
            </h2>

            <p style={{
              fontFamily: "var(--font-sans)",
              fontSize: "1.125rem",
              lineHeight: 1.6,
              margin: "0 0 48px",
              opacity: 0.85,
            }}>
              Gemeinsam entwickeln wir digitale Strukturen mit Substanz.
            </p>

            <a
              href="/kontakt"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "20px",
                fontFamily: "var(--font-mono)",
                fontSize: "0.8125rem",
                fontWeight: 400,
                padding: "12px 24px",
                borderRadius: "4px",
                backgroundColor: "var(--color-primary)",
                color: "var(--color-text)",
                textDecoration: "none",
                whiteSpace: "nowrap",
                transition: "background 0.15s, color 0.15s",
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.backgroundColor = "var(--color-hover)";
                el.style.color = "#E9E9EA";
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.backgroundColor = "var(--color-primary)";
                el.style.color = "var(--color-text)";
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                aria-hidden="true" style={{ flexShrink: 0 }}>
                <polyline points="15 10 20 15 15 20" />
                <path d="M4 4v7a4 4 0 0 0 4 4h12" />
              </svg>
              PROJEKT ANFRAGEN
            </a>
          </div>

          {/* Service Icons */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 90px)",
            gap: "24px",
            color: "var(--color-primary)",
          }}>
            <BrandingIcon size={90} />
            <UXIcon size={90} />
            <WebIcon size={90} />
            <MarketingIcon size={90} />
          </div>
        </div>
      </Container>
    </section>
  );
}
