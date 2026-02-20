"use client";

import Container from "@/components/ui/Container";
import Image from "next/image";
import { useState, useEffect } from "react";
import { getActiveProjects } from "@/data/projects";

export default function ProjektePage() {
  const PROJECTS = getActiveProjects();
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 768);
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section style={{ paddingTop: "clamp(60px, 8vw, 120px)", paddingBottom: "clamp(40px, 6vw, 60px)" }}>
        <Container>
          <h1 style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 400,
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            color: "var(--color-text)",
            margin: "0 0 clamp(16px, 2vw, 24px)",
          }}>
            Projekte
          </h1>
          <p style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(1rem, 2vw, 1.125rem)",
            lineHeight: 1.6,
            color: "var(--color-text)",
            maxWidth: "600px",
            margin: 0,
          }}>
            Digitale Markenplattformen aus <strong style={{ fontWeight: 700 }}>Branding, UX/UI</strong> und <strong style={{ fontWeight: 700 }}>Technologie</strong>.
          </p>
        </Container>
      </section>

      {/* Projects Grid */}
      <section style={{ paddingBottom: "clamp(60px, 8vw, 120px)" }}>
        <Container>
          <div style={{
            display: "grid",
            gridTemplateColumns: isDesktop ? "repeat(2, 1fr)" : "1fr",
            gap: "clamp(16px, 2vw, 24px)",
          }}>
            {PROJECTS.map((project) => (
              <a
                key={project.id}
                href={`/projekte/${project.slug}`}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  position: "relative",
                  aspectRatio: "1 / 1",
                  borderRadius: "10px",
                  overflow: "hidden",
                  display: "block",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                {/* Image */}
                <div style={{
                  position: "absolute",
                  inset: 0,
                  transition: "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
                  transform: hoveredId === project.id ? "scale(1.05)" : "scale(1)",
                }}>
                  <Image
                    src={project.heroImage}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>

                {/* Overlay */}
                <div style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)",
                }} />

                {/* Content */}
                <div style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "clamp(20px, 3vw, 32px)",
                  color: "#fff",
                }}>
                  <p style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 700,
                    fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
                    textTransform: "uppercase",
                    letterSpacing: "0.02em",
                    margin: "0 0 4px",
                  }}>
                    {project.title}
                  </p>
                  <p style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 400,
                    fontSize: "clamp(0.75rem, 1.2vw, 0.8125rem)",
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                    opacity: 0.8,
                    margin: 0,
                  }}>
                    {project.client}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
