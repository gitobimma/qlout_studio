"use client";

import Container from "@/components/ui/Container";

export default function UeberUnsPage() {
  return (
    <main>
      {/* Hero Section */}
      <section style={{
        paddingTop: "clamp(100px, 12vw, 160px)",
        paddingBottom: "clamp(80px, 10vw, 120px)",
        backgroundColor: "var(--color-bg)"
      }}>
        <Container>
          <h1 style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 400,
            fontSize: "clamp(2.5rem, 7vw, 6rem)",
            letterSpacing: "-0.02em",
            lineHeight: 1.05,
            color: "var(--color-text)",
            marginBottom: "clamp(30px, 4vw, 50px)",
          }}>
            Gestaltung mit Haltung.
          </h1>

          <p style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(1.125rem, 2vw, 1.5rem)",
            lineHeight: 1.5,
            color: "var(--color-text)",
            maxWidth: "900px",
          }}>
            Ein Design Studio für strategische Markenplattformen an der Schnittstelle von Branding, UX/UI und Technologie.
          </p>
        </Container>
      </section>

      {/* Das Studio */}
      <section style={{
        paddingTop: "clamp(60px, 8vw, 100px)",
        paddingBottom: "clamp(60px, 8vw, 100px)",
        backgroundColor: "var(--color-bg)"
      }}>
        <Container>
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "clamp(40px, 6vw, 80px)",
            maxWidth: "1000px",
          }}>
            <div>
              <h2 style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 700,
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                textTransform: "uppercase",
                letterSpacing: "0.02em",
                color: "var(--color-text)",
                marginBottom: "clamp(24px, 3vw, 40px)",
              }}>
                Das Studio
              </h2>
              <div style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}>
                <p style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "clamp(1rem, 1.8vw, 1.125rem)",
                  lineHeight: 1.7,
                  color: "var(--color-text)",
                  margin: 0,
                }}>
                  QLOUT Studio ist ein interdisziplinäres Design Studio mit Fokus auf digitale Markenplattformen.
                  Wir verbinden strategische Markenarbeit mit präzisem UX/UI Design und technischer Umsetzung.
                </p>
                <p style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "clamp(1rem, 1.8vw, 1.125rem)",
                  lineHeight: 1.7,
                  color: "var(--color-text)",
                  margin: 0,
                }}>
                  Unser Anspruch ist es, Gestaltung nicht als Oberfläche zu verstehen, sondern als strukturelles System.
                </p>
                <p style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "clamp(1rem, 1.8vw, 1.125rem)",
                  lineHeight: 1.7,
                  color: "var(--color-text)",
                  margin: 0,
                }}>
                  Wir arbeiten kuratiert, fokussiert und mit klarem Qualitätsanspruch.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Unsere Haltung */}
      <section style={{
        paddingTop: "clamp(60px, 8vw, 100px)",
        paddingBottom: "clamp(60px, 8vw, 100px)",
        backgroundColor: "var(--color-primary)",
      }}>
        <Container>
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "clamp(40px, 6vw, 80px)",
            maxWidth: "1000px",
          }}>
            <div>
              <h2 style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 700,
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                textTransform: "uppercase",
                letterSpacing: "0.02em",
                color: "var(--color-text)",
                marginBottom: "clamp(24px, 3vw, 40px)",
              }}>
                Unsere Haltung
              </h2>
              <div style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}>
                <p style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "clamp(1rem, 1.8vw, 1.125rem)",
                  lineHeight: 1.7,
                  color: "var(--color-text)",
                  margin: 0,
                }}>
                  Design beginnt bei uns mit Klarheit.
                  Bevor wir gestalten, analysieren wir Kontext, Zielgruppe und Positionierung.
                </p>
                <p style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "clamp(1rem, 1.8vw, 1.125rem)",
                  lineHeight: 1.7,
                  color: "var(--color-text)",
                  margin: 0,
                }}>
                  Wir entwickeln keine isolierten Maßnahmen.
                  Wir entwickeln Systeme, in denen Markenidentität, Nutzerführung und Technologie ineinandergreifen.
                </p>
                <p style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "clamp(1rem, 1.8vw, 1.125rem)",
                  lineHeight: 1.7,
                  color: "var(--color-text)",
                  margin: 0,
                }}>
                  Reduktion ist kein Stilmittel – sie ist Methode.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Unser Anspruch */}
      <section style={{
        paddingTop: "clamp(60px, 8vw, 100px)",
        paddingBottom: "clamp(80px, 10vw, 120px)",
        backgroundColor: "var(--color-bg)"
      }}>
        <Container>
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "clamp(40px, 6vw, 80px)",
            maxWidth: "1000px",
          }}>
            <div>
              <h2 style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 700,
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                textTransform: "uppercase",
                letterSpacing: "0.02em",
                color: "var(--color-text)",
                marginBottom: "clamp(24px, 3vw, 40px)",
              }}>
                Unser Anspruch
              </h2>
              <div style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}>
                <p style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "clamp(1rem, 1.8vw, 1.125rem)",
                  lineHeight: 1.7,
                  color: "var(--color-text)",
                  margin: 0,
                }}>
                  Wir arbeiten mit Unternehmen, die Wert auf Substanz legen.
                  Unsere Projekte entstehen nicht im Schnellverfahren, sondern in enger Abstimmung und mit klarer Zielsetzung.
                </p>
                <p style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "clamp(1rem, 1.8vw, 1.125rem)",
                  lineHeight: 1.7,
                  color: "var(--color-text)",
                  margin: 0,
                }}>
                  Qualität vor Quantität.<br />
                  Struktur vor Oberfläche.<br />
                  Wirkung vor Lautstärke.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
