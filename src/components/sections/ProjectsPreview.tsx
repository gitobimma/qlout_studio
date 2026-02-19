"use client";

import Image from "next/image";
import Container from "@/components/ui/Container";

// ─── Project Data ─────────────────────────────────────────────────────────────
interface Project {
  id:     string;
  slug:   string;
  slogan: string;
  name:   string;
  image:  string;
}

const PROJECTS: Project[] = [
  {
    id:     "p1",
    slug:   "viper-beer",
    slogan: "Brand Slogan 01",
    name:   "Beispiel Brand 01",
    image:  "/images/b6e1cfb7e6dca30bb1d10f654801df2b.jpg",
  },
  {
    id:     "p2",
    slug:   "sour-sour",
    slogan: "Brand Slogan 02",
    name:   "Beispiel Brand 02",
    image:  "/images/a3b4db9389d9140cbe3b3ad2545516eb.jpg",
  },
  {
    id:     "p3",
    slug:   "rectangle-32",
    slogan: "Brand Slogan 03",
    name:   "Beispiel Brand 03",
    image:  "/images/Rectangle 32.png",
  },
  {
    id:     "p4",
    slug:   "rectangle-30",
    slogan: "Brand Slogan 04",
    name:   "Beispiel Brand 04",
    image:  "/images/Rectangle 30.png",
  },
];

const CARD_W = 480;   // px — card width
const GAP    = 16;    // px — gap between cards
const STEP   = CARD_W + GAP; // px per card slot
const SET_W  = PROJECTS.length * STEP; // total width of one set

// ─── Component ────────────────────────────────────────────────────────────────
export default function ProjectsPreview() {
  // Triple the slides so the loop is always seamless
  const slides = [...PROJECTS, ...PROJECTS, ...PROJECTS];

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

      <section style={{ paddingTop: "80px", paddingBottom: "80px" }}>

        {/* ── Header — right-aligned ── */}
        <Container>
          <div style={{ textAlign: "right", marginBottom: "48px" }}>
            <h2 style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 700,
              fontSize: "clamp(2rem, 5vw, 3.75rem)",
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
              fontSize: "1rem",
              color: "var(--color-text)",
              marginTop: "16px",
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
        <div style={{ overflow: "hidden", width: "100vw", position: "relative", left: "50%", transform: "translateX(-50%)" }}>
          <div className="projects-track">
            {slides.map(({ id, slug, slogan, name, image }, i) => (
              <a
                key={`${id}-${i}`}
                href={`/projekte/${slug}`}
                className="project-card"
                draggable="false"
              >
                <Image
                  src={image}
                  alt={slogan}
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
                  }}>{slogan}</p>
                  <p style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 400,
                    fontSize: "0.8125rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                    color: "rgba(255,255,255,0.7)",
                    margin: "4px 0 0",
                  }}>{name}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

      </section>
    </>
  );
}
