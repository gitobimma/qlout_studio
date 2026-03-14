"use client";

import Image from "next/image";
import { getActiveProjects } from "@/data/projects";

const CARD_W = 750;
const GAP = 24;

interface ProjectsSliderProps {
  filterTags?: string[];
}

export default function ProjectsSlider({ filterTags }: ProjectsSliderProps) {
  let PROJECTS = getActiveProjects();

  if (filterTags && filterTags.length > 0) {
    PROJECTS = PROJECTS.filter(p =>
      p.tags.some(tag =>
        filterTags.some(filterTag =>
          tag.toLowerCase().includes(filterTag.toLowerCase())
        )
      )
    );
  }

  if (PROJECTS.length === 0) {
    return null;
  }

  const STEP = CARD_W + GAP;
  const SET_W = PROJECTS.length * STEP;

  // Triple slides for seamless loop
  const slides = [...PROJECTS, ...PROJECTS, ...PROJECTS];

  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .project-slider-card { width: 72vw !important; }
        }
        @media (max-width: 480px) {
          .project-slider-card { width: 85vw !important; }
        }

        .project-slider-card {
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

        .project-slider-card-img {
          transition: transform 0.6s ease;
        }
        .project-slider-card:hover .project-slider-card-img {
          transform: scale(1.04);
        }
      `}</style>

      <div style={{
        overflow: "hidden",
        width: "100%",
        maxWidth: "100vw",
        position: "relative",
        left: "50%",
        transform: "translateX(-50%)",
        marginLeft: "calc(-50vw + 50%)",
        marginRight: "calc(-50vw + 50%)"
      }}>
        <div
          ref={trackRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleDragEnd}
          style={{
            display: 'flex',
            gap: `${GAP}px`,
            width: 'max-content',
            padding: '0 20px',
            transform: `translateX(${translateX}px)`,
            cursor: isDragging ? 'grabbing' : 'grab',
            userSelect: 'none',
            willChange: 'transform'
          }}
        >
          {slides.map((project, i) => (
            <a
              key={`${project.id}-${i}`}
              href={`/projekte/${project.slug}`}
              className="project-slider-card"
              draggable="false"
              onClick={(e) => {
                if (clickPrevented) {
                  e.preventDefault();
                }
              }}
            >
              <Image
                src={project.sliderImage || project.heroImage}
                alt={project.title}
                fill
                sizes="750px"
                style={{ objectFit: "cover" }}
                className="project-slider-card-img"
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
    </>
  );
}
