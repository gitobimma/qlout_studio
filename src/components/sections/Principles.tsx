"use client";

import Container from "@/components/ui/Container";

const CARDS = [
  {
    id:      "system",
    heading: "System statt Einzelmaßnahme",
    text:    "Wir denken in Strukturen, nicht in isolierten Designs. Jede Entscheidung folgt einem übergeordneten System – für Konsistenz, die skaliert.",
    accent:  true,
  },
  {
    id:      "klarheit",
    heading: "Klarheit vor Ästhetik",
    text:    "Gestaltung beginnt mit Positionierung. Wer verstanden werden will, muss zuerst klar sein – dann schön.",
    accent:  false,
  },
  {
    id:      "konsistenz",
    heading: "Konsistenz über Kanäle hinweg",
    text:    "Markenidentität, UX und Technologie greifen ineinander. Ob Website, App oder Kampagne – eine Sprache, eine Wirkung.",
    accent:  false,
  },
  {
    id:      "reduktion",
    heading: "Reduktion schafft Wirkung",
    text:    "Weniger Elemente. Mehr Präzision. Wir entfernen alles, was nicht zur Botschaft beiträgt.",
    accent:  false,
  },
];

export default function Principles() {
  return (
    <>
      <style>{`
        .principles-card {
          flex: 1;
          min-width: 0;
          padding: clamp(20px, 4vw, 32px);
          border-radius: 10px;
          background: var(--color-muted);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: clamp(220px, 30vw, 280px);
          transition: background 0.2s ease, color 0.2s ease;
          cursor: default;
        }
        .principles-card.accent {
          background: var(--color-hover);
          color: #fff;
        }
        .principles-card:not(.accent):hover {
          background: var(--color-hover);
          color: #fff;
        }
        .principles-card:not(.accent):hover .principles-divider {
          opacity: 1;
        }
        .principles-divider {
          height: 1px;
          background: currentColor;
          opacity: 0;
          margin: 20px 0;
          transition: opacity 0.2s ease;
        }
        .principles-card.accent .principles-divider {
          opacity: 1;
        }
        @media (max-width: 768px) {
          .principles-row { flex-direction: column !important; }
          .principles-card { min-height: 200px; }
        }
      `}</style>

      <section style={{ paddingTop: "clamp(60px, 8vw, 80px)", paddingBottom: "clamp(60px, 8vw, 80px)" }}>
        <Container>

          <div style={{ textAlign: "right", marginBottom: "clamp(32px, 5vw, 48px)" }}>
            <h2 style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 700,
              fontSize: "clamp(1.75rem, 5vw, 3.75rem)",
              textTransform: "uppercase",
              letterSpacing: "-0.02em",
              lineHeight: 1.0,
              color: "var(--color-text)",
              margin: 0,
            }}>
              <strong>Gestaltung</strong> folgt<br />System.
            </h2>
            <p style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(0.9rem, 2vw, 1rem)",
              color: "var(--color-text)",
              marginTop: "clamp(12px, 2vw, 16px)",
            }}>
              Gestaltung beginnt mit Struktur. Wirkung entsteht durch System.
            </p>
          </div>

          <div className="principles-row" style={{ display: "flex", gap: "12px" }}>
            {CARDS.map(({ id, heading, text, accent }) => (
              <div key={id} className={`principles-card${accent ? " accent" : ""}`}>
                <div>
                  <p style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 700,
                    fontSize: "0.9375rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.02em",
                    margin: 0,
                    lineHeight: 1.3,
                  }}>
                    {heading}
                  </p>
                  <div className="principles-divider" />
                  <p style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.9375rem",
                    lineHeight: 1.6,
                    margin: 0,
                    opacity: 0.85,
                  }}>
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </Container>
      </section>
    </>
  );
}
