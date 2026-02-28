"use client";

import Image from "next/image";
import Container from "@/components/ui/Container";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const BRANDS = [
  { id: "decix",         label: "DE-CIX",         src: "/icons/brands/decix.svg" },
  { id: "hbe",           label: "HBE",             src: "/icons/brands/hbe.svg" },
  { id: "foaliagedreams",label: "Foliage Dreams",  src: "/icons/brands/foaliagedreams.svg" },
  { id: "supporters",    label: "supporters",      src: "/icons/brands/supporters.svg" },
  { id: "bwkrings",      label: "BW-Krings",       src: "/icons/brands/bwkrings.svg" },
];

export default function Logos() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section ref={sectionRef} style={{ paddingTop: "clamp(60px, 8vw, 80px)", paddingBottom: "clamp(60px, 8vw, 80px)" }}>
      <Container>

        <h2
          className="reveal"
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 700,
            fontSize: "clamp(1.5rem, 4vw, 3rem)",
            textTransform: "uppercase",
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            color: "var(--color-text)",
            maxWidth: "640px",
            margin: "0 0 clamp(40px, 6vw, 60px)",
          }}>
          Für <strong style={{ fontWeight: 700 }}>Unternehmen</strong> aus Industrie,{" "}
          Handel und Technologie.
        </h2>

        <div style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "clamp(32px, 5vw, 40px) clamp(20px, 3vw, 24px)",
        }}>
          {BRANDS.map(({ id, label, src }, i) => (
            <div
              key={id}
              className="reveal"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "12px",
                width: "clamp(100px, 15vw, 120px)",
                ["--reveal-delay" as string]: `${0.1 + i * 0.08}s`,
              }}
            >
              <div style={{
                width: "100%",
                height: "clamp(50px, 8vw, 60px)",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
              }}>
                <Image
                  src={src}
                  alt={label}
                  width={120}
                  height={60}
                  style={{ objectFit: "contain", objectPosition: "bottom center", opacity: 0.45, filter: "grayscale(1)", width: "100%", height: "auto", maxHeight: "60px" }}
                />
              </div>
              <span style={{
                fontFamily: "var(--font-sans)",
                fontSize: "clamp(0.65rem, 1.2vw, 0.75rem)",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "var(--color-text)",
                opacity: 0.45,
                textAlign: "center",
              }}>
                {label}
              </span>
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
}
