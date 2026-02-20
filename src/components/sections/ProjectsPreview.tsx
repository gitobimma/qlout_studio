"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import { getActiveProjects } from "@/data/projects";

const CARD_W = 480;   // px — card width
const GAP    = 16;    // px — gap between cards

// ─── Component ────────────────────────────────────────────────────────────────
export default function ProjectsPreview() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const PROJECTS = getActiveProjects();
  const STEP = CARD_W + GAP;
  const SET_W = PROJECTS.length * STEP;

  // Triple the slides so the loop is always seamless
  const slides = [...PROJECTS, ...PROJECTS, ...PROJECTS];

  // Drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!trackRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - trackRef.current.offsetLeft);
    setScrollLeft(trackRef.current.scrollLeft);
    trackRef.current.style.cursor = 'grabbing';
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    if (trackRef.current) {
      trackRef.current.style.cursor = 'grab';
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (trackRef.current) {
      trackRef.current.style.cursor = 'grab';
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !trackRef.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed
    trackRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <>
      <style>{`
        .projects-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-sans);
          font-weight: 400;
          font-size: 0.9375rem;
          color: var(--color-hover);
          text-decoration: underline;
          text-underline-offset: 3px;
          transition: opacity 0.15s;
        }
        .projects-link:hover { opacity: 0.75; }

        @keyframes ticker {
          from { transform: translateX(0); }
          to   { transform: translateX(-${SET_W}px); }
        }

        .projects-track {
          display: flex;
          gap: ${GAP}px;
          width: max-content;
          animation: ticker ${PROJECTS.length * 10}s linear infinite;
          will-change: transform;
        }

        @media (max-width: 768px) {
          .project-card { width: 72vw !important; }
        }
        @media (max-width: 480px) {
          .project-card { width: 85vw !important; }
        }

        .projects-track:hover {
          animation-play-state: paused;
        }

        .project-card {
          flex-shrink: 0;
          width: ${CARD_W}px;
          aspect-ratio: 1 / 1;
          border-radius: 10px;
          overflow: hidden;
          position: relative;
          display: block;
          text-decoration: none;
          cursor: pointer;
        }

        .project-card-img {
          transition: transform 0.6s ease;
        }
        .project-card:hover .project-card-img {
          transform: scale(1.04);
        }
      `}</style>

      <section style={{ paddingTop: "clamp(60px, 8vw, 80px)", paddingBottom: "clamp(60px, 8vw, 80px)" }}>

        {/* ── Header — right-aligned ── */}
        <Container>
          <div style={{ textAlign: "right", marginBottom: "clamp(32px, 5vw, 48px)" }}>
            <h2 style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 700,
              fontSize: "clamp(1.75rem, 5vw, 3.75rem)",
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
              color: "var(--color-text)",
              lineHeight: 1.0,
              margin: 0,
            }}>
              Ausgewählte<br />Arbeiten
            </h2>
            <p style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(0.9rem, 2vw, 1rem)",
              color: "var(--color-text)",
              marginTop: "clamp(12px, 2vw, 16px)",
              marginBottom: "12px",
            }}>
              Branding, UX/UI und Weblösungen im Einsatz.
            </p>
            <a href="/projekte" className="projects-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                aria-hidden="true" style={{ flexShrink: 0 }}>
                <polyline points="15 10 20 15 15 20" />
                <path d="M4 4v7a4 4 0 0 0 4 4h12" />
              </svg>
              Mehr erfahren
            </a>
          </div>
        </Container>

        {/* ── Carousel — full viewport width ── */}
        <div style={{ overflow: "hidden", width: "100%", maxWidth: "100vw", position: "relative", left: "50%", transform: "translateX(-50%)", marginLeft: "calc(-50vw + 50%)", marginRight: "calc(-50vw + 50%)" }}>
          <div
            ref={trackRef}
            className="projects-track"
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            style={{
              cursor: isDragging ? 'grabbing' : 'grab',
              userSelect: 'none'
            }}
          >
            {slides.map((project, i) => (
              <a
                key={`${project.id}-${i}`}
                href={`/projekte/${project.slug}`}
                className="project-card"
                draggable="false"
                onClick={(e) => {
                  if (isDragging) {
                    e.preventDefault();
                  }
                }}
              >
                <Image
                  src={project.heroImage}
                  alt={project.title}
                  fill
                  sizes="480px"
                  style={{ objectFit: "cover" }}
                  className="project-card-img"
                  draggable="false"
                />
                <div style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)",
                }} />
                <div style={{
                  position: "absolute",
                  bottom: 0, left: 0, right: 0,
                  padding: "24px",
                }}>
                  <p style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 700,
                    fontSize: "1.125rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.01em",
                    color: "#fff",
                    margin: 0,
                  }}>{project.title}</p>
                  <p style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 400,
                    fontSize: "0.8125rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                    color: "rgba(255,255,255,0.7)",
                    margin: "4px 0 0",
                  }}>{project.client}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

      </section>
    </>
  );
}
