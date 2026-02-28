"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import { useScrollReveal } from "@/hooks/useScrollReveal";

type FormData = {
  company: string;
  contact: string;
  email: string;
  phone: string;
  projectType: string;
  description: string;
  budget: string;
  timeline: string;
  privacy: boolean;
};

type FieldKey = keyof FormData;

// ─── Validation ───────────────────────────────────────────────
function validateField(field: FieldKey, data: FormData): string | null {
  switch (field) {
    case "company":
      if (!data.company.trim()) return "Wie heißt Ihr Unternehmen?";
      if (data.company.trim().length < 2) return "Bitte etwas ausführlicher.";
      return null;
    case "contact":
      if (!data.contact.trim()) return "Mit wem sprechen wir?";
      if (data.contact.trim().length < 2) return "Bitte den vollständigen Namen eingeben.";
      return null;
    case "email":
      if (!data.email.trim()) return "Wir brauchen eine E-Mail-Adresse.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) return "Das sieht nicht nach einer E-Mail aus.";
      return null;
    case "phone":
      if (data.phone && !/^[+\d\s\-().]{7,}$/.test(data.phone))
        return "Das sieht nicht wie eine gültige Nummer aus.";
      return null;
    case "projectType":
      if (!data.projectType) return "Was können wir für Sie tun?";
      return null;
    case "description":
      if (!data.description.trim()) return "Erzählen Sie uns mehr über Ihr Vorhaben.";
      if (data.description.trim().length < 20) return "Ein bisschen mehr Details wären hilfreich.";
      return null;
    case "budget":
      if (!data.budget) return "Bitte einen Budgetrahmen wählen.";
      return null;
    case "timeline":
      if (!data.timeline) return "Bitte einen Startzeitpunkt wählen.";
      return null;
    case "privacy":
      if (!data.privacy) return "Bitte die Datenschutzerklärung bestätigen.";
      return null;
    default:
      return null;
  }
}

// ─── Success Messages ─────────────────────────────────────────
function getSuccessMessage(field: FieldKey, data: FormData): string | null {
  switch (field) {
    case "company":
      return data.company.trim().length >= 2
        ? "Schön, wir freuen uns auf die Zusammenarbeit."
        : null;
    case "contact": {
      const firstName = data.contact.trim().split(" ")[0];
      return firstName.length >= 2 ? `Hallo, ${firstName}!` : null;
    }
    case "email":
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)
        ? "Perfekt, so erreichen wir Sie."
        : null;
    case "phone":
      return data.phone && /^[+\d\s\-().]{7,}$/.test(data.phone)
        ? "Danke – kein Muss, aber praktisch."
        : null;
    case "projectType":
      return data.projectType ? "Gute Wahl." : null;
    case "description":
      return data.description.trim().length >= 20 ? "Das klingt spannend." : null;
    case "budget":
      return data.budget ? "Danke für die Transparenz." : null;
    case "timeline":
      return data.timeline ? "Notiert." : null;
    case "privacy":
      return data.privacy ? "Danke für Ihr Vertrauen." : null;
    default:
      return null;
  }
}

const STEP_FIELDS: Record<number, FieldKey[]> = {
  1: ["company", "contact", "email"],
  2: ["projectType", "description"],
  3: ["budget"],
  4: ["timeline", "privacy"],
};

// ─── Component ────────────────────────────────────────────────
export default function KontaktPage() {
  const heroRef = useScrollReveal<HTMLElement>();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    company: "",
    contact: "",
    email: "",
    phone: "",
    projectType: "",
    description: "",
    budget: "",
    timeline: "",
    privacy: false,
  });
  const [touched, setTouched] = useState<Set<FieldKey>>(new Set());
  const [submitted, setSubmitted] = useState(false);

  const totalSteps = 4;

  const touch = (...fields: FieldKey[]) =>
    setTouched((prev) => new Set([...prev, ...fields]));

  const isTouched = (field: FieldKey) => touched.has(field);

  const fieldError = (field: FieldKey): string | null =>
    isTouched(field) ? validateField(field, formData) : null;

  const fieldSuccess = (field: FieldKey): string | null => {
    if (!isTouched(field)) return null;
    if (validateField(field, formData) !== null) return null;
    // optional phone: only show success if actually filled
    if (field === "phone" && !formData.phone) return null;
    return getSuccessMessage(field, formData);
  };

  const stepValid = (s: number) =>
    STEP_FIELDS[s].every((f) => validateField(f, formData) === null);

  const handleNext = () => {
    touch(...STEP_FIELDS[step]);
    if (stepValid(step)) setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    touch(...STEP_FIELDS[4]);
    if (stepValid(4)) setSubmitted(true);
  };

  // ─── Styles ─────────────────────────────────────────────────
  const inputStyle = {
    width: "100%",
    padding: "clamp(12px, 1.5vw, 16px)",
    fontFamily: "var(--font-sans)",
    fontSize: "clamp(0.875rem, 1.2vw, 1rem)",
    color: "#1A1B1F",
    backgroundColor: "#E9E9EA",
    border: "1px solid #E9E9EA",
    borderRadius: "4px",
    outline: "none",
    transition: "all 0.2s",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontFamily: "var(--font-sans)",
    fontSize: "clamp(0.875rem, 1.2vw, 1rem)",
    fontWeight: 500,
    color: "var(--color-text)",
    marginBottom: "8px",
  };

  const hintStyle = (type: "error" | "success"): React.CSSProperties => ({
    fontFamily: "var(--font-sans)",
    fontSize: "0.75rem",
    color: type === "error" ? "var(--color-hover)" : "#4a7a00",
    marginTop: "6px",
    lineHeight: 1.4,
  });

  const focusIn = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = "var(--color-hover)";
    e.currentTarget.style.boxShadow = "0 0 0 3px rgba(196, 44, 56, 0.08)";
  };
  const focusOut = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>, field: FieldKey) => {
    e.currentTarget.style.borderColor = "#E9E9EA";
    e.currentTarget.style.boxShadow = "none";
    touch(field);
  };

  const FieldHint = ({ field }: { field: FieldKey }) => {
    const err = fieldError(field);
    const ok = fieldSuccess(field);
    if (err) return <p style={hintStyle("error")}>{err}</p>;
    if (ok) return <p style={hintStyle("success")}>{ok}</p>;
    return null;
  };

  const btnPrimary: React.CSSProperties = {
    padding: "clamp(12px, 1.5vw, 16px) clamp(24px, 3vw, 40px)",
    fontFamily: "var(--font-mono)",
    fontSize: "clamp(0.75rem, 1.2vw, 0.875rem)",
    fontWeight: 400,
    color: "#24262C",
    backgroundColor: "#BFFF29",
    border: "1px solid #BFFF29",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "all 0.2s",
  };

  const btnSecondary: React.CSSProperties = {
    padding: "clamp(12px, 1.5vw, 16px) clamp(24px, 3vw, 40px)",
    fontFamily: "var(--font-mono)",
    fontSize: "clamp(0.75rem, 1.2vw, 0.875rem)",
    fontWeight: 400,
    color: "#24262C",
    backgroundColor: "transparent",
    border: "1px solid #24262C",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "all 0.2s",
  };

  // ─── Submitted State ─────────────────────────────────────────
  if (submitted) {
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
              fontSize: "clamp(2rem, 5vw, 4rem)",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              color: "var(--color-text)",
              marginBottom: "clamp(20px, 3vw, 32px)",
            }}>
              Anfrage erhalten.
            </h1>
            <p style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(1rem, 1.5vw, 1.125rem)",
              lineHeight: 1.6,
              color: "var(--color-text)",
              maxWidth: "600px",
              marginBottom: "clamp(32px, 4vw, 48px)",
            }}>
              Wir haben Ihre Anfrage erhalten und melden uns in Kürze bei Ihnen.
              Vielen Dank, {formData.contact.trim().split(" ")[0]}.
            </p>
            <a
              href="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
                fontFamily: "var(--font-mono)",
                fontSize: "0.8125rem",
                color: "var(--color-text)",
                textDecoration: "underline",
                textUnderlineOffset: "3px",
              }}
            >
              Zurück zur Startseite
            </a>
          </Container>
        </section>
      </main>
    );
  }

  return (
    <main>
      <section
        ref={heroRef}
        style={{
          paddingTop: "clamp(100px, 12vw, 160px)",
          paddingBottom: "clamp(80px, 10vw, 120px)",
          backgroundColor: "var(--color-bg)"
        }}
      >
        <Container>
          <h1
            className="reveal"
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 400,
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              color: "var(--color-text)",
              marginBottom: "clamp(20px, 3vw, 30px)",
            }}
          >
            Projekt anfragen
          </h1>

          <p
            className="reveal"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(1rem, 1.5vw, 1.125rem)",
              lineHeight: 1.6,
              color: "var(--color-text)",
              maxWidth: "700px",
              marginBottom: "clamp(40px, 6vw, 60px)",
              ["--reveal-delay" as string]: "0.12s",
            }}
          >
            Wir arbeiten mit Unternehmen, die Wert auf Substanz legen. Teilen Sie uns Ihr Vorhaben mit.
          </p>

          {/* Progress Bar */}
          <div style={{ maxWidth: "800px", marginBottom: "clamp(40px, 5vw, 60px)" }}>
            <div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
              {[1, 2, 3, 4].map((s) => (
                <div
                  key={s}
                  style={{
                    flex: 1,
                    height: "4px",
                    backgroundColor: s <= step ? "var(--color-hover)" : "var(--color-muted)",
                    borderRadius: "2px",
                    transition: "background-color 0.3s",
                  }}
                />
              ))}
            </div>
            <p style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              color: "#888",
              textTransform: "uppercase",
            }}>
              Schritt {step} von {totalSteps}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} style={{ maxWidth: "800px" }}>

            {/* ── Step 1: Basisdaten ── */}
            {step === 1 && (
              <div style={{ display: "flex", flexDirection: "column", gap: "clamp(20px, 3vw, 30px)" }}>
                <h2 style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "clamp(1.25rem, 2vw, 1.5rem)",
                  fontWeight: 700,
                  color: "var(--color-text)",
                  marginBottom: "10px",
                }}>
                  Basisdaten
                </h2>

                <div>
                  <label style={labelStyle}>Unternehmen *</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    style={inputStyle}
                    onFocus={focusIn}
                    onBlur={(e) => focusOut(e, "company")}
                    placeholder="Mustermann GmbH"
                  />
                  <FieldHint field="company" />
                </div>

                <div>
                  <label style={labelStyle}>Ansprechpartner *</label>
                  <input
                    type="text"
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    style={inputStyle}
                    onFocus={focusIn}
                    onBlur={(e) => focusOut(e, "contact")}
                    placeholder="Max Mustermann"
                  />
                  <FieldHint field="contact" />
                </div>

                <div>
                  <label style={labelStyle}>E-Mail *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={inputStyle}
                    onFocus={focusIn}
                    onBlur={(e) => focusOut(e, "email")}
                    placeholder="max@mustermann.de"
                  />
                  <FieldHint field="email" />
                </div>

                <div>
                  <label style={labelStyle}>Telefonnummer <span style={{ fontWeight: 400, opacity: 0.55 }}>(optional)</span></label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={inputStyle}
                    onFocus={focusIn}
                    onBlur={(e) => focusOut(e, "phone")}
                    placeholder="+49 123 456789"
                  />
                  <FieldHint field="phone" />
                </div>
              </div>
            )}

            {/* ── Step 2: Projektkontext ── */}
            {step === 2 && (
              <div style={{ display: "flex", flexDirection: "column", gap: "clamp(20px, 3vw, 30px)" }}>
                <h2 style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "clamp(1.25rem, 2vw, 1.5rem)",
                  fontWeight: 700,
                  color: "var(--color-text)",
                  marginBottom: "10px",
                }}>
                  Projektkontext
                </h2>

                <div>
                  <label style={labelStyle}>Projektart *</label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => {
                      setFormData({ ...formData, projectType: e.target.value });
                      touch("projectType");
                    }}
                    style={{ ...inputStyle, cursor: "pointer" }}
                    onFocus={focusIn}
                    onBlur={(e) => focusOut(e, "projectType")}
                  >
                    <option value="">Bitte wählen</option>
                    <option value="branding">Branding</option>
                    <option value="ux-ui">UX/UI</option>
                    <option value="web">Webentwicklung</option>
                    <option value="platform">Ganzheitliche Markenplattform</option>
                    <option value="other">Sonstiges</option>
                  </select>
                  <FieldHint field="projectType" />
                </div>

                <div>
                  <label style={labelStyle}>
                    Kurzbeschreibung des Vorhabens *
                    {formData.description.trim().length > 0 && formData.description.trim().length < 20 && (
                      <span style={{
                        fontWeight: 400,
                        fontSize: "0.75rem",
                        opacity: 0.5,
                        marginLeft: "8px",
                      }}>
                        noch {20 - formData.description.trim().length} Zeichen
                      </span>
                    )}
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={6}
                    style={{ ...inputStyle, resize: "vertical" }}
                    onFocus={focusIn}
                    onBlur={(e) => focusOut(e, "description")}
                    placeholder="Worum geht es bei Ihrem Projekt? Was soll am Ende erreicht werden?"
                  />
                  <FieldHint field="description" />
                </div>
              </div>
            )}

            {/* ── Step 3: Budget ── */}
            {step === 3 && (
              <div style={{ display: "flex", flexDirection: "column", gap: "clamp(20px, 3vw, 30px)" }}>
                <h2 style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "clamp(1.25rem, 2vw, 1.5rem)",
                  fontWeight: 700,
                  color: "var(--color-text)",
                  marginBottom: "10px",
                }}>
                  Budgetrahmen
                </h2>

                <div>
                  <label style={labelStyle}>Budgetrahmen *</label>
                  <select
                    value={formData.budget}
                    onChange={(e) => {
                      setFormData({ ...formData, budget: e.target.value });
                      touch("budget");
                    }}
                    style={{ ...inputStyle, cursor: "pointer" }}
                    onFocus={focusIn}
                    onBlur={(e) => focusOut(e, "budget")}
                  >
                    <option value="">Bitte wählen</option>
                    <option value="under-10k">unter 10.000 €</option>
                    <option value="10k-25k">10.000 – 25.000 €</option>
                    <option value="25k-50k">25.000 – 50.000 €</option>
                    <option value="50k-plus">50.000 €+</option>
                  </select>
                  <FieldHint field="budget" />
                </div>
              </div>
            )}

            {/* ── Step 4: Zeitrahmen ── */}
            {step === 4 && (
              <div style={{ display: "flex", flexDirection: "column", gap: "clamp(20px, 3vw, 30px)" }}>
                <h2 style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "clamp(1.25rem, 2vw, 1.5rem)",
                  fontWeight: 700,
                  color: "var(--color-text)",
                  marginBottom: "10px",
                }}>
                  Zeitrahmen
                </h2>

                <div>
                  <label style={labelStyle}>Startzeitpunkt *</label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => {
                      setFormData({ ...formData, timeline: e.target.value });
                      touch("timeline");
                    }}
                    style={{ ...inputStyle, cursor: "pointer" }}
                    onFocus={focusIn}
                    onBlur={(e) => focusOut(e, "timeline")}
                  >
                    <option value="">Bitte wählen</option>
                    <option value="immediately">Sofort</option>
                    <option value="1-3-months">1–3 Monate</option>
                    <option value="3-6-months">3–6 Monate</option>
                    <option value="inquiry-only">Nur unverbindliche Anfrage</option>
                  </select>
                  <FieldHint field="timeline" />
                </div>

                <div>
                  <label style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                    cursor: "pointer",
                    userSelect: "none",
                  }}>
                    <input
                      type="checkbox"
                      checked={formData.privacy}
                      onChange={(e) => {
                        setFormData({ ...formData, privacy: e.target.checked });
                        touch("privacy");
                      }}
                      style={{ width: "20px", height: "20px", cursor: "pointer", marginTop: "2px" }}
                    />
                    <span style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "clamp(0.875rem, 1.2vw, 1rem)",
                      color: "var(--color-text)",
                      lineHeight: 1.5,
                    }}>
                      Ich stimme der{" "}
                      <a
                        href="/datenschutz"
                        style={{ color: "var(--color-hover)", textDecoration: "underline" }}
                        target="_blank"
                      >
                        Datenschutzerklärung
                      </a>
                      {" "}zu.
                    </span>
                  </label>
                  <FieldHint field="privacy" />
                </div>
              </div>
            )}

            {/* ── Buttons ── */}
            <div style={{
              display: "flex",
              gap: "16px",
              marginTop: "clamp(40px, 6vw, 60px)",
              flexWrap: "wrap",
            }}>
              {step > 1 && (
                <button
                  type="button"
                  onClick={handleBack}
                  style={btnSecondary}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#C42C38";
                    e.currentTarget.style.borderColor = "#C42C38";
                    e.currentTarget.style.color = "#F1F1F1";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.borderColor = "#24262C";
                    e.currentTarget.style.color = "#24262C";
                  }}
                >
                  ZURÜCK
                </button>
              )}

              {step < totalSteps ? (
                <button
                  type="button"
                  onClick={handleNext}
                  style={btnPrimary}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#C42C38";
                    e.currentTarget.style.borderColor = "#C42C38";
                    e.currentTarget.style.color = "#F1F1F1";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#BFFF29";
                    e.currentTarget.style.borderColor = "#BFFF29";
                    e.currentTarget.style.color = "#24262C";
                  }}
                >
                  WEITER
                </button>
              ) : (
                <button
                  type="submit"
                  style={btnPrimary}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#C42C38";
                    e.currentTarget.style.borderColor = "#C42C38";
                    e.currentTarget.style.color = "#F1F1F1";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#BFFF29";
                    e.currentTarget.style.borderColor = "#BFFF29";
                    e.currentTarget.style.color = "#24262C";
                  }}
                >
                  ANFRAGE SENDEN
                </button>
              )}
            </div>
          </form>
        </Container>
      </section>
    </main>
  );
}
