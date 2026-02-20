"use client";

import Container from "@/components/ui/Container";

export default function BarrierefreiheitPage() {
  const sectionTitleStyle = {
    fontFamily: "var(--font-sans)",
    fontWeight: 700,
    fontSize: "clamp(1.25rem, 2vw, 1.5rem)",
    color: "var(--color-text)",
    marginTop: "clamp(30px, 4vw, 50px)",
    marginBottom: "clamp(12px, 1.5vw, 16px)",
  };

  const textStyle = {
    fontFamily: "var(--font-sans)",
    fontSize: "clamp(0.875rem, 1.2vw, 1rem)",
    lineHeight: 1.7,
    color: "var(--color-text)",
    marginBottom: "1rem",
  };

  return (
    <main>
      <section style={{
        paddingTop: "clamp(100px, 12vw, 160px)",
        paddingBottom: "clamp(80px, 10vw, 120px)",
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
            marginBottom: "clamp(40px, 6vw, 60px)",
          }}>
            Barrierefreiheit
          </h1>

          <div style={{ maxWidth: "800px" }}>
            <p style={textStyle}>
              QLOUT Studio ist bestrebt, seine Website im Einklang mit den Bestimmungen des Behindertengleichstellungsgesetzes (BGG) sowie der Barrierefreien-Informationstechnik-Verordnung (BITV 2.0) barrierefrei zugänglich zu machen.
            </p>

            <h2 style={sectionTitleStyle}>Unsere Bemühungen</h2>
            <p style={textStyle}>
              Wir arbeiten kontinuierlich daran, die Zugänglichkeit und Benutzerfreundlichkeit unserer Website zu verbessern. Dabei orientieren wir uns an den Web Content Accessibility Guidelines (WCAG 2.1) auf Level AA.
            </p>

            <h2 style={sectionTitleStyle}>Umgesetzte Maßnahmen</h2>
            <p style={textStyle}>
              Folgende Maßnahmen wurden bereits umgesetzt:
            </p>
            <ul style={{ ...textStyle, paddingLeft: "20px" }}>
              <li>Semantisch strukturiertes HTML für bessere Screenreader-Kompatibilität</li>
              <li>Ausreichende Farbkontraste für bessere Lesbarkeit</li>
              <li>Responsive Design für verschiedene Bildschirmgrößen und Geräte</li>
              <li>Klare, eindeutige Navigationselemente</li>
              <li>Alternative Texte (Alt-Tags) für Bilder</li>
              <li>Tastaturnavigation für alle interaktiven Elemente</li>
              <li>Vergrößerbare Schrift ohne Funktionsverlust</li>
            </ul>

            <h2 style={sectionTitleStyle}>Bekannte Einschränkungen</h2>
            <p style={textStyle}>
              Trotz unserer Bemühungen können möglicherweise nicht alle Bereiche der Website vollständig barrierefrei sein. Wir arbeiten kontinuierlich an Verbesserungen.
            </p>

            <h2 style={sectionTitleStyle}>Feedback und Kontakt</h2>
            <p style={textStyle}>
              Wir nehmen Rückmeldungen zur Barrierefreiheit unserer Website sehr ernst. Wenn Sie auf Barrieren stoßen oder Verbesserungsvorschläge haben, kontaktieren Sie uns bitte:
            </p>
            <p style={textStyle}>
              E-Mail: <a href="mailto:kontakt@qlout.studio" style={{ color: "var(--color-hover)", textDecoration: "underline" }}>kontakt@qlout.studio</a><br />
              Telefon: [Ihre Telefonnummer]
            </p>

            <h2 style={sectionTitleStyle}>Schlichtungsverfahren</h2>
            <p style={textStyle}>
              Bei nicht zufriedenstellenden Antworten auf Ihre Anfrage zur Barrierefreiheit können Sie sich an die Schlichtungsstelle nach § 16 BGG wenden:
            </p>
            <p style={textStyle}>
              Schlichtungsstelle BGG<br />
              bei dem Beauftragten der Bundesregierung für die Belange von Menschen mit Behinderungen<br />
              Mauerstraße 53<br />
              10117 Berlin<br />
              <br />
              Telefon: 030 18 527-2805<br />
              E-Mail:{" "}
              <a
                href="mailto:info@schlichtungsstelle-bgg.de"
                style={{ color: "var(--color-hover)", textDecoration: "underline" }}
              >
                info@schlichtungsstelle-bgg.de
              </a>
              <br />
              Internet:{" "}
              <a
                href="https://www.schlichtungsstelle-bgg.de"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--color-hover)", textDecoration: "underline" }}
              >
                www.schlichtungsstelle-bgg.de
              </a>
            </p>

            <h2 style={sectionTitleStyle}>Hilfsmittel und Tools</h2>
            <p style={textStyle}>
              Für eine barrierefreie Nutzung unserer Website empfehlen wir:
            </p>
            <ul style={{ ...textStyle, paddingLeft: "20px" }}>
              <li>Verwendung aktueller Browser-Versionen</li>
              <li>Aktivierung von Screenreadern wie NVDA, JAWS oder VoiceOver</li>
              <li>Nutzung der Zoom-Funktion Ihres Browsers (Strg/Cmd + Plus/Minus)</li>
              <li>Aktivierung des Hochkontrast-Modus in Ihrem Betriebssystem</li>
            </ul>

            <h2 style={sectionTitleStyle}>Erklärung zur Barrierefreiheit</h2>
            <p style={textStyle}>
              Diese Erklärung zur Barrierefreiheit gilt für die Website www.qlout.studio.
            </p>
            <p style={textStyle}>
              Als öffentlich zugängliche Stelle im Sinne der BITV sind wir bemüht, unsere Website im Einklang mit den Bestimmungen des Behindertengleichstellungsgesetzes des Bundes (BGG) sowie der BITV 2.0 zur Umsetzung der Richtlinie (EU) 2016/2102 barrierefrei zugänglich zu machen.
            </p>

            <p style={{ ...textStyle, marginTop: "clamp(40px, 5vw, 60px)", fontSize: "clamp(0.75rem, 1vw, 0.875rem)", color: "#888" }}>
              Stand: Februar 2025<br />
              Letzte Überprüfung: Februar 2025
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}
