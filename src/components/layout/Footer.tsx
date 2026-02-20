"use client";

import { useState, useEffect } from "react";
import Container from "@/components/ui/Container";
import { BrandingIcon, UXIcon, WebIcon, MarketingIcon } from "@/components/ui/ServiceIcons";

const STUDIO_LINKS = [
  { label: "Startseite", href: "/" },
  { label: "Projekte", href: "/projekte" },
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Kontakt", href: "/kontakt" },
];

const FOKUS_LINKS = [
  { label: "Branding", href: "/leistungen/branding" },
  { label: "UX/UI", href: "/leistungen/ux-ui" },
  { label: "Web", href: "/leistungen/web" },
  { label: "Marketing", href: "/leistungen/marketing" },
];

const KONTAKT_LINKS = [
  { label: "HELLO@QLOUT.DE", href: "mailto:hello@qlout.de", external: true },
  { label: "LinkedIn", href: "https://linkedin.com", external: true },
  { label: "Instagram", href: "https://instagram.com", external: true },
];

const LEGAL_LINKS = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
  { label: "Barrierefreiheit", href: "/barrierefreiheit" },
];

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <footer style={{
      background: "var(--color-background)",
      paddingTop: "clamp(20px, 4vw, 40px)",
      paddingBottom: "clamp(20px, 4vw, 40px)",
    }}>
      <Container>
        <div style={{
          background: "#1A1B1F",
          color: "#fff",
          borderRadius: "10px",
          padding: "clamp(40px, 6vw, 80px) clamp(20px, 4vw, 60px) clamp(30px, 3vw, 40px)",
        }}>

          {/* CTA Section */}
          <div style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "clamp(32px, 5vw, 48px)",
            marginBottom: "clamp(60px, 10vw, 120px)",
          }}>
            <div style={{
              maxWidth: "720px",
              flex: 1,
            }}>
              <h2 style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 700,
                fontSize: "clamp(2rem, 5vw, 4.5rem)",
                textTransform: "uppercase",
                letterSpacing: "-0.02em",
                lineHeight: 1.05,
                margin: "0 0 clamp(16px, 2vw, 24px)",
              }}>
                Lassen Sie uns<br />gestalten.
              </h2>

              <p style={{
                fontFamily: "var(--font-sans)",
                fontSize: "clamp(1rem, 1.5vw, 1.125rem)",
                lineHeight: 1.6,
                margin: "0 0 clamp(32px, 4vw, 48px)",
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
            {!isMobile && (
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "clamp(16px, 3vw, 40px)",
                color: "#24262c",
              }}>
                <BrandingIcon size={60} />
                <UXIcon size={60} />
                <WebIcon size={60} />
                <MarketingIcon size={60} />
              </div>
            )}
          </div>

          {/* Footer Links */}
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
            gap: isMobile ? "40px" : "60px",
            marginBottom: isMobile ? "60px" : "80px",
            justifyItems: isMobile ? "start" : "end",
          }}>

            {/* Studio */}
            <div style={{ textAlign: isMobile ? "left" : "right" }}>
              <h3 style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 700,
                fontSize: "clamp(1.5rem, 3vw, 2.625rem)",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                margin: "0 0 clamp(20px, 3vw, 32px)",
              }}>
                Studio
              </h3>
              <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                {STUDIO_LINKS.map(({ label, href }) => (
                  <li key={href} style={{ marginBottom: "clamp(12px, 2vw, 16px)" }}>
                    <a href={href} style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "clamp(1rem, 2vw, 1.5rem)",
                      color: "#fff",
                      textDecoration: "none",
                      transition: "color 0.15s",
                    }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "var(--color-hover)"}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#fff"}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Fokus */}
            <div style={{ textAlign: isMobile ? "left" : "right" }}>
              <h3 style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 700,
                fontSize: "clamp(1.5rem, 3vw, 2.625rem)",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                margin: "0 0 clamp(20px, 3vw, 32px)",
              }}>
                Fokus
              </h3>
              <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                {FOKUS_LINKS.map(({ label, href }) => (
                  <li key={href} style={{ marginBottom: "clamp(12px, 2vw, 16px)" }}>
                    <a href={href} style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "clamp(1rem, 2vw, 1.5rem)",
                      color: "#fff",
                      textDecoration: "none",
                      transition: "color 0.15s",
                    }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "var(--color-hover)"}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#fff"}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Kontakt */}
            <div style={{ textAlign: isMobile ? "left" : "right" }}>
              <h3 style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 700,
                fontSize: "clamp(1.5rem, 3vw, 2.625rem)",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                margin: "0 0 clamp(20px, 3vw, 32px)",
              }}>
                Kontakt
              </h3>
              <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                {KONTAKT_LINKS.map(({ label, href, external }) => (
                  <li key={href} style={{ marginBottom: "clamp(12px, 2vw, 16px)" }}>
                    <a
                      href={href}
                      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "clamp(1rem, 2vw, 1.5rem)",
                        color: "#fff",
                        textDecoration: "none",
                        transition: "color 0.15s",
                        display: external && label === "HELLO@QLOUT.DE" ? "inline-flex" : "inline",
                        alignItems: "center",
                        gap: "8px",
                      }}
                      onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "var(--color-hover)"}
                      onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#fff"}
                    >
                      {label}
                      {external && label === "HELLO@QLOUT.DE" && (
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                          viewBox="0 0 24 24" fill="none" stroke="currentColor"
                          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                          aria-hidden="true">
                          <path d="M7 17L17 7M17 7H7M17 7V17"/>
                        </svg>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Bottom */}
          <div style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "space-between",
            alignItems: isMobile ? "flex-start" : "center",
            gap: isMobile ? "16px" : "0",
            paddingTop: "24px",
            borderTop: "1px solid rgba(255,255,255,0.1)",
          }}>
            <p style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(0.75rem, 1.5vw, 0.8125rem)",
              color: "rgba(255,255,255,0.5)",
              margin: 0,
            }}>
              © {new Date().getFullYear()} QLOUT Studio
            </p>
            <div style={{
              display: "flex",
              flexWrap: "wrap",
              gap: isMobile ? "16px" : "24px"
            }}>
              {LEGAL_LINKS.map(({ label, href }) => (
                <a key={href} href={href} style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "clamp(0.75rem, 1.5vw, 0.8125rem)",
                  color: "var(--color-primary)",
                  textDecoration: "none",
                  transition: "color 0.15s",
                }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#fff"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "var(--color-primary)"}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
