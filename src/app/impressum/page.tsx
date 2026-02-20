"use client";

import Container from "@/components/ui/Container";

export default function ImpressumPage() {
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
    marginBottom: "0.8rem",
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
            letterSpacing: "-0.02em)",
            lineHeight: 1.1,
            color: "var(--color-text)",
            marginBottom: "clamp(40px, 6vw, 60px)",
          }}>
            Impressum
          </h1>

          <div style={{ maxWidth: "800px" }}>
            <h2 style={sectionTitleStyle}>Angaben gemäß § 5 TMG</h2>
            <p style={textStyle}>
              QLOUT Studio<br />
              [Ihre Straße und Hausnummer]<br />
              [PLZ] [Stadt]<br />
              Deutschland
            </p>

            <h2 style={sectionTitleStyle}>Kontakt</h2>
            <p style={textStyle}>
              E-Mail: [Ihre E-Mail-Adresse]<br />
              Telefon: [Ihre Telefonnummer]<br />
              Website: www.qlout.studio
            </p>

            <h2 style={sectionTitleStyle}>Umsatzsteuer-ID</h2>
            <p style={textStyle}>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
              [Ihre USt-IdNr.]
            </p>

            <h2 style={sectionTitleStyle}>Berufsbezeichnung und berufsrechtliche Regelungen</h2>
            <p style={textStyle}>
              Berufsbezeichnung: Grafikdesigner / Webdesigner<br />
              Zuständige Kammer: [Kammer]<br />
              Verliehen in: Deutschland
            </p>

            <h2 style={sectionTitleStyle}>Redaktionell verantwortlich</h2>
            <p style={textStyle}>
              [Ihr Name]<br />
              [Ihre Adresse]
            </p>

            <h2 style={sectionTitleStyle}>EU-Streitschlichtung</h2>
            <p style={textStyle}>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--color-hover)", textDecoration: "underline" }}
              >
                https://ec.europa.eu/consumers/odr/
              </a>
              .<br />
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>

            <h2 style={sectionTitleStyle}>Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
            <p style={textStyle}>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>

            <h2 style={sectionTitleStyle}>Haftung für Inhalte</h2>
            <p style={textStyle}>
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <p style={textStyle}>
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>

            <h2 style={sectionTitleStyle}>Haftung für Links</h2>
            <p style={textStyle}>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
            </p>
            <p style={textStyle}>
              Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>

            <h2 style={sectionTitleStyle}>Urheberrecht</h2>
            <p style={textStyle}>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
            </p>
            <p style={textStyle}>
              Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
            </p>

            <p style={{ ...textStyle, marginTop: "clamp(40px, 5vw, 60px)", fontSize: "clamp(0.75rem, 1vw, 0.875rem)", color: "#888" }}>
              Stand: Februar 2025
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}
