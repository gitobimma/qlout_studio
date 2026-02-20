"use client";

import Container from "@/components/ui/Container";

export default function DatenschutzPage() {
  const sectionTitleStyle = {
    fontFamily: "var(--font-sans)",
    fontWeight: 700,
    fontSize: "clamp(1.25rem, 2vw, 1.5rem)",
    color: "var(--color-text)",
    marginTop: "clamp(40px, 5vw, 60px)",
    marginBottom: "clamp(16px, 2vw, 20px)",
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
            Datenschutzerklärung
          </h1>

          <div style={{ maxWidth: "800px" }}>
            <p style={textStyle}>
              Stand: Februar 2025
            </p>

            <h2 style={sectionTitleStyle}>1. Datenschutz auf einen Blick</h2>

            <h3 style={{ ...sectionTitleStyle, fontSize: "clamp(1rem, 1.5vw, 1.125rem)", marginTop: "clamp(20px, 3vw, 30px)" }}>
              Allgemeine Hinweise
            </h3>
            <p style={textStyle}>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>

            <h3 style={{ ...sectionTitleStyle, fontSize: "clamp(1rem, 1.5vw, 1.125rem)", marginTop: "clamp(20px, 3vw, 30px)" }}>
              Datenerfassung auf dieser Website
            </h3>
            <p style={textStyle}>
              <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong>
            </p>
            <p style={textStyle}>
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
            </p>

            <h2 style={sectionTitleStyle}>2. Hosting</h2>
            <p style={textStyle}>
              Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.
            </p>

            <h2 style={sectionTitleStyle}>3. Allgemeine Hinweise und Pflichtinformationen</h2>

            <h3 style={{ ...sectionTitleStyle, fontSize: "clamp(1rem, 1.5vw, 1.125rem)", marginTop: "clamp(20px, 3vw, 30px)" }}>
              Datenschutz
            </h3>
            <p style={textStyle}>
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>

            <h3 style={{ ...sectionTitleStyle, fontSize: "clamp(1rem, 1.5vw, 1.125rem)", marginTop: "clamp(20px, 3vw, 30px)" }}>
              Hinweis zur verantwortlichen Stelle
            </h3>
            <p style={textStyle}>
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p style={textStyle}>
              QLOUT Studio<br />
              [Ihre Adresse]<br />
              [PLZ] [Stadt]<br />
              <br />
              E-Mail: [Ihre E-Mail]<br />
              Telefon: [Ihre Telefonnummer]
            </p>

            <h2 style={sectionTitleStyle}>4. Datenerfassung auf dieser Website</h2>

            <h3 style={{ ...sectionTitleStyle, fontSize: "clamp(1rem, 1.5vw, 1.125rem)", marginTop: "clamp(20px, 3vw, 30px)" }}>
              Kontaktformular
            </h3>
            <p style={textStyle}>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>

            <h3 style={{ ...sectionTitleStyle, fontSize: "clamp(1rem, 1.5vw, 1.125rem)", marginTop: "clamp(20px, 3vw, 30px)" }}>
              Server-Log-Dateien
            </h3>
            <p style={textStyle}>
              Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
            </p>
            <ul style={{ ...textStyle, paddingLeft: "20px" }}>
              <li>Browsertyp und Browserversion</li>
              <li>verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p style={textStyle}>
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
            </p>

            <h2 style={sectionTitleStyle}>5. Ihre Rechte</h2>
            <p style={textStyle}>
              Sie haben das Recht:
            </p>
            <ul style={{ ...textStyle, paddingLeft: "20px" }}>
              <li>Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten zu verlangen</li>
              <li>Berichtigung unrichtiger Daten zu verlangen</li>
              <li>Löschung Ihrer bei uns gespeicherten Daten zu verlangen</li>
              <li>Einschränkung der Datenverarbeitung zu verlangen</li>
              <li>Widerspruch gegen die Verarbeitung Ihrer Daten einzulegen</li>
              <li>Datenübertragbarkeit zu verlangen</li>
            </ul>

            <h2 style={sectionTitleStyle}>6. Widerspruch gegen Werbe-Mails</h2>
            <p style={textStyle}>
              Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.
            </p>

            <p style={{ ...textStyle, marginTop: "clamp(40px, 5vw, 60px)", fontSize: "clamp(0.75rem, 1vw, 0.875rem)", color: "#888" }}>
              Quelle: Muster-Datenschutzerklärung gemäß DSGVO
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}
