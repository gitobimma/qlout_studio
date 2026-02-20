"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Container from "@/components/ui/Container";
import Image from "next/image";
import { getProjectBySlug } from "@/data/projects";

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = getProjectBySlug(slug);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (!project) {
    return (
      <main style={{ padding: "120px 0", textAlign: "center" }}>
        <Container>
          <h1>Projekt nicht gefunden</h1>
          <a href="/projekte" style={{ color: "var(--color-hover)", textDecoration: "underline" }}>
            Zurück zur Übersicht
          </a>
        </Container>
      </main>
    );
  }

  return (
    <main>
      {/* Hero Section */}
      <section style={{ paddingTop: "clamp(60px, 8vw, 120px)", paddingBottom: "clamp(40px, 6vw, 60px)" }}>
        <Container>
          <h1 style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 400,
            fontSize: "clamp(2rem, 5vw, 4rem)",
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            color: "var(--color-text)",
            margin: "0 0 clamp(12px, 2vw, 16px)",
          }}>
            {project.title}
          </h1>

          <p style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 700,
            fontSize: "clamp(1rem, 2vw, 1.25rem)",
            color: "var(--color-text)",
            margin: "0 0 clamp(8px, 1.5vw, 12px)",
          }}>
            {project.client}
          </p>

          <p style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(1rem, 2vw, 1.125rem)",
            lineHeight: 1.6,
            color: "var(--color-text)",
            maxWidth: "700px",
            margin: "0 0 clamp(20px, 3vw, 32px)",
          }}>
            {project.subtitle}
          </p>

          {/* Tags */}
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
          }}>
            {project.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.75rem",
                  fontWeight: 500,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  padding: "6px 12px",
                  borderRadius: "4px",
                  backgroundColor: "var(--color-primary)",
                  color: "var(--color-text)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* Hero Image */}
      <section style={{ paddingBottom: "clamp(60px, 8vw, 80px)" }}>
        <Container>
          <div style={{
            position: "relative",
            width: "100%",
            aspectRatio: "16 / 9",
            borderRadius: "10px",
            overflow: "hidden",
          }}>
            <Image
              src={project.heroImage}
              alt={project.title}
              fill
              sizes="(max-width: 1400px) 100vw, 1400px"
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </Container>
      </section>

      {/* Website Link */}
      {project.website && (
        <section style={{ paddingBottom: "clamp(40px, 6vw, 60px)" }}>
          <Container>
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontFamily: "var(--font-sans)",
                fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
                fontWeight: 400,
                color: "var(--color-hover)",
                textDecoration: "none",
                transition: "opacity 0.15s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              → Webseite besuchen
            </a>
          </Container>
        </section>
      )}

      {/* Project Description */}
      <section style={{ paddingBottom: "clamp(60px, 8vw, 80px)" }}>
        <Container>
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "clamp(40px, 6vw, 80px)",
            maxWidth: "900px",
          }}>
            <div>
              <h2 style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 700,
                fontSize: "clamp(1.25rem, 3vw, 1.75rem)",
                textTransform: "uppercase",
                letterSpacing: "0.02em",
                color: "var(--color-text)",
                margin: "0 0 clamp(16px, 2vw, 24px)",
              }}>
                Name des Unternehmens
              </h2>
              <p style={{
                fontFamily: "var(--font-sans)",
                fontSize: "clamp(1rem, 2vw, 1.125rem)",
                lineHeight: 1.7,
                color: "var(--color-text)",
                margin: 0,
              }}>
                {project.description}
              </p>
            </div>

            <div>
              <h2 style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 700,
                fontSize: "clamp(1.25rem, 3vw, 1.75rem)",
                textTransform: "uppercase",
                letterSpacing: "0.02em",
                color: "var(--color-text)",
                margin: "0 0 clamp(16px, 2vw, 24px)",
              }}>
                Ziel des Projekts
              </h2>
              <p style={{
                fontFamily: "var(--font-sans)",
                fontSize: "clamp(1rem, 2vw, 1.125rem)",
                lineHeight: 1.7,
                color: "var(--color-text)",
                margin: 0,
              }}>
                {project.challenge}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Project Images Bento Grid */}
      <section style={{ paddingBottom: "clamp(60px, 8vw, 100px)" }}>
        <Container>
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(12, 1fr)",
            gridAutoRows: isMobile ? "250px" : "200px",
            gap: isMobile ? "16px" : "clamp(12px, 1.5vw, 20px)",
          }}>
            {project.images.map((image, index) => {
              // Bento Grid Pattern - verschiedene Größen für interessantes Layout
              let gridColumn = "span 12";
              let gridRow = "span 2";

              // Auf Mobile: alle Bilder gleich groß (1 Spalte)
              if (!isMobile) {
                if (index === 0) {
                  // Erstes Bild: groß und breit
                  gridColumn = "span 8";
                  gridRow = "span 3";
                } else if (index === 1) {
                  // Zweites Bild: hoch rechts
                  gridColumn = "span 4";
                  gridRow = "span 3";
                } else if (index === 2) {
                  // Drittes Bild: mittel
                  gridColumn = "span 6";
                  gridRow = "span 2";
                } else if (index === 3) {
                  // Viertes Bild: mittel
                  gridColumn = "span 6";
                  gridRow = "span 2";
                } else if (index === 4) {
                  // Fünftes Bild: groß und breit
                  gridColumn = "span 7";
                  gridRow = "span 3";
                } else if (index === 5) {
                  // Sechstes Bild: hoch rechts
                  gridColumn = "span 5";
                  gridRow = "span 3";
                } else {
                  // Restliche Bilder: verschiedene Größen
                  const patterns = [
                    { col: "span 4", row: "span 2" },
                    { col: "span 8", row: "span 2" },
                    { col: "span 6", row: "span 3" },
                    { col: "span 6", row: "span 2" },
                  ];
                  const pattern = patterns[(index - 6) % patterns.length];
                  gridColumn = pattern.col;
                  gridRow = pattern.row;
                }
              }

              return (
                <div
                  key={index}
                  style={{
                    position: "relative",
                    gridColumn,
                    gridRow,
                    borderRadius: "10px",
                    overflow: "hidden",
                    minHeight: isMobile ? "250px" : "200px",
                  }}
                >
                  <Image
                    src={image.url}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1400px) 50vw, 700px"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              );
            })}
          </div>
        </Container>
      </section>

    </main>
  );
}
