"use client";

import Container from "@/components/ui/Container";
import ProjectsSlider from "@/components/sections/ProjectsSlider";

function ArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
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

export default function UxUiPage() {
  return (
    <main>
      {/* Hero Section */}
      <section style={{
        paddingTop: "clamp(80px, 10vw, 140px)",
        paddingBottom: "clamp(60px, 8vw, 100px)",
        backgroundColor: "var(--color-bg)"
      }}>
        <Container>
          <h1 style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 400,
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            color: "var(--color-text)",
            marginBottom: "clamp(20px, 3vw, 40px)",
          }}>
            Design mit Funktion.
          </h1>

          {/* Tags */}
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "clamp(12px, 2vw, 20px)",
            marginBottom: "clamp(30px, 4vw, 50px)",
          }}>
            <span style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
              color: "var(--color-hover)",
            }}>
              Nutzer verstehen.
            </span>
            <span style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
              color: "var(--color-hover)",
            }}>
              Interfaces gestalten.
            </span>
            <span style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
              color: "var(--color-hover)",
            }}>
              Erlebnisse schaffen.
            </span>
          </div>

          {/* Description */}
          <div style={{
            maxWidth: "800px",
            marginBottom: "clamp(40px, 5vw, 60px)",
          }}>
            <p style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(1rem, 1.8vw, 1.125rem)",
              lineHeight: 1.7,
              color: "var(--color-text)",
              marginBottom: "1.5rem",
            }}>
              Wir gestalten <strong>digitale Produkte</strong>, die funktional, intuitiv und visuell überzeugend sind. User Experience bedeutet für uns, Komplexität zu reduzieren und Klarheit zu schaffen.
            </p>
            <p style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(1rem, 1.8vw, 1.125rem)",
              lineHeight: 1.7,
              color: "var(--color-text)",
            }}>
              Von der <strong>Nutzerforschung</strong> über <strong>Interface Design</strong> bis zur <strong>Prototypentwicklung</strong> entstehen durchdachte digitale Erlebnisse.
            </p>
          </div>

          {/* CTA Button - Secondary Style from Hero */}
          <a
            href="/projekte"
            className="inline-flex items-center transition-colors duration-150"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "clamp(0.75rem, 1.5vw, 0.8125rem)",
              fontWeight: 400,
              padding: "12px 24px",
              borderRadius: "4px",
              gap: "20px",
              border: "1px solid var(--color-border)",
              color: "var(--color-text)",
              background: "transparent",
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background  = "var(--color-hover)";
              el.style.borderColor = "var(--color-hover)";
              el.style.color       = "#E9E9EA";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background  = "transparent";
              el.style.borderColor = "var(--color-border)";
              el.style.color       = "var(--color-text)";
            }}
          >
            <ArrowIcon />
            PROJEKTE ANSEHEN
          </a>
        </Container>
      </section>

      {/* Projects Slider - Filtered by UX/UI tag */}
      <section style={{ paddingBottom: "clamp(60px, 8vw, 100px)" }}>
        <ProjectsSlider filterTags={["ux", "ui"]} />
      </section>
    </main>
  );
}
