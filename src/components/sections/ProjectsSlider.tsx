"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { getActiveProjects, type Project } from "@/data/projects";

const CARD_W = 750;   // px — card width (noch größer für Leistungsseiten)
const GAP    = 24;    // px — gap between cards

interface ProjectsSliderProps {
  filterTags?: string[];
}

export default function ProjectsSlider({ filterTags }: ProjectsSliderProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Get all active projects or filter by tags
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

  // If no projects match, return nothing
  if (PROJECTS.length === 0) {
    return null;
  }

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
        @keyframes ticker-slider {
          from { transform: translateX(0); }
          to   { transform: translateX(-${SET_W}px); }
        }

        .projects-slider-track {
          display: flex;
          gap: ${GAP}px;
          width: max-content;
          animation: ticker-slider ${PROJECTS.length * 10}s linear infinite;
          will-change: transform;
        }

        @media (max-width: 768px) {
          .project-slider-card { width: 72vw !important; }
        }
        @media (max-width: 480px) {
          .project-slider-card { width: 85vw !important; }
        }

        .projects-slider-track:hover {
          animation-play-state: paused;
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

      <div style={{ overflow: "hidden", width: "100%", maxWidth: "100vw", position: "relative", left: "50%", transform: "translateX(-50%)", marginLeft: "calc(-50vw + 50%)", marginRight: "calc(-50vw + 50%)" }}>
        <div className="projects-slider-track">
          {slides.map((project, i) => (
            <a
              key={`${project.id}-${i}`}
              href={`/projekte/${project.slug}`}
              className="project-slider-card"
              draggable="false"
            >
              <Image
                src={project.heroImage}
                alt={project.title}
                fill
                sizes="600px"
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
